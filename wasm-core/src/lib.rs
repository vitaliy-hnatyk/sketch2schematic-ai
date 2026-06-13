#![no_std]

use core::panic::PanicInfo;
use core::ptr;

extern "C" {
    static __heap_base: u8;
}

static mut HEAP_CURSOR: usize = 0;

#[panic_handler]
fn panic(_: &PanicInfo) -> ! {
    loop {}
}

#[no_mangle]
pub unsafe extern "C" fn reset_alloc() {
    HEAP_CURSOR = (&__heap_base as *const u8 as usize + 15) & !15;
}

#[no_mangle]
pub unsafe extern "C" fn alloc(size: usize) -> usize {
    if HEAP_CURSOR == 0 {
        reset_alloc();
    }
    let pointer = HEAP_CURSOR;
    HEAP_CURSOR = (HEAP_CURSOR + size + 15) & !15;
    pointer
}

#[inline]
unsafe fn luminance(rgba: *const u8, pixel: usize) -> u8 {
    let offset = pixel * 4;
    let r = *rgba.add(offset) as u32;
    let g = *rgba.add(offset + 1) as u32;
    let b = *rgba.add(offset + 2) as u32;
    ((54 * r + 183 * g + 19 * b) >> 8) as u8
}

#[inline]
fn snap(value: i32, grid: usize) -> i32 {
    if grid == 0 { value } else { ((value + grid as i32 / 2) / grid as i32) * grid as i32 }
}

unsafe fn duplicate(out: *const i32, count: usize, line: [i32; 4]) -> bool {
    for index in 0..count {
        let base = out.add(index * 4);
        if ((*base - line[0]).abs() <= 10)
            && ((*base.add(1) - line[1]).abs() <= 10)
            && ((*base.add(2) - line[2]).abs() <= 10)
            && ((*base.add(3) - line[3]).abs() <= 10)
        {
            return true;
        }
    }
    false
}

unsafe fn emit(out: *mut i32, count: usize, max: usize, mut line: [i32; 4], grid: usize) -> usize {
    if count >= max { return count; }
    for value in &mut line { *value = snap(*value, grid); }
    if line[0] > line[2] || (line[0] == line[2] && line[1] > line[3]) {
        line.swap(0, 2);
        line.swap(1, 3);
    }
    if (line[2] - line[0]).abs() + (line[3] - line[1]).abs() < 35 { return count; }
    if duplicate(out, count, line) { return count; }
    ptr::copy_nonoverlapping(line.as_ptr(), out.add(count * 4), 4);
    count + 1
}

#[inline]
unsafe fn horizontal_hit(dark: *const u8, width: usize, height: usize, x: usize, y: usize) -> bool {
    let y0 = y.saturating_sub(1);
    let y1 = core::cmp::min(y + 1, height - 1);
    for yy in y0..=y1 {
        if *dark.add(yy * width + x) != 0 { return true; }
    }
    false
}

#[inline]
unsafe fn vertical_hit(dark: *const u8, width: usize, height: usize, x: usize, y: usize) -> bool {
    let x0 = x.saturating_sub(1);
    let x1 = core::cmp::min(x + 1, width - 1);
    for xx in x0..=x1 {
        if *dark.add(y * width + xx) != 0 { return true; }
    }
    false
}

#[no_mangle]
pub unsafe extern "C" fn detect_lines(
    rgba_pointer: usize,
    width: usize,
    height: usize,
    grid_size: usize,
    scan_step: usize,
    minimum_run: usize,
    output_pointer: usize,
    max_lines: usize,
) -> usize {
    if width < 2 || height < 2 || max_lines == 0 { return 0; }
    let rgba = rgba_pointer as *const u8;
    let output = output_pointer as *mut i32;
    let step = core::cmp::max(scan_step, 1);
    let integral_width = width + 1;
    let integral_len = integral_width * (height + 1);
    let integral = alloc(integral_len * 4) as *mut u32;
    let dark = alloc(width * height) as *mut u8;
    ptr::write_bytes(integral, 0, integral_len);

    for y in 1..=height {
        let mut row = 0u32;
        for x in 1..=width {
            row += luminance(rgba, (y - 1) * width + x - 1) as u32;
            *integral.add(y * integral_width + x) = *integral.add((y - 1) * integral_width + x) + row;
        }
    }

    let radius = 12usize;
    for y in 0..height {
        for x in 0..width {
            let x0 = x.saturating_sub(radius);
            let y0 = y.saturating_sub(radius);
            let x1 = core::cmp::min(x + radius, width - 1);
            let y1 = core::cmp::min(y + radius, height - 1);
            let sum = *integral.add((y1 + 1) * integral_width + x1 + 1)
                - *integral.add(y0 * integral_width + x1 + 1)
                - *integral.add((y1 + 1) * integral_width + x0)
                + *integral.add(y0 * integral_width + x0);
            let area = (x1 - x0 + 1) * (y1 - y0 + 1);
            let mean = (sum as usize / area) as i32;
            *dark.add(y * width + x) = (luminance(rgba, y * width + x) as i32 < mean - 18) as u8;
        }
    }

    let mut count = 0usize;
    const GAP_LIMIT: usize = 4;
    for y in (0..height).step_by(step) {
        let mut start: isize = -1;
        let mut gap = 0usize;
        for x in 0..=width {
            let hit = x < width && horizontal_hit(dark, width, height, x, y);
            if hit {
                if start < 0 { start = x as isize; }
                gap = 0;
            } else if start >= 0 {
                gap += 1;
                if gap > GAP_LIMIT {
                    let end = x as isize - gap as isize;
                    if end - start >= minimum_run as isize {
                        count = emit(output, count, max_lines, [start as i32, y as i32, end as i32, y as i32], grid_size);
                    }
                    start = -1;
                    gap = 0;
                }
            }
        }
        if count >= max_lines { break; }
    }

    for x in (0..width).step_by(step) {
        let mut start: isize = -1;
        let mut gap = 0usize;
        for y in 0..=height {
            let hit = y < height && vertical_hit(dark, width, height, x, y);
            if hit {
                if start < 0 { start = y as isize; }
                gap = 0;
            } else if start >= 0 {
                gap += 1;
                if gap > GAP_LIMIT {
                    let end = y as isize - gap as isize;
                    if end - start >= minimum_run as isize {
                        count = emit(output, count, max_lines, [x as i32, start as i32, x as i32, end as i32], grid_size);
                    }
                    start = -1;
                    gap = 0;
                }
            }
        }
        if count >= max_lines { break; }
    }
    count
}
