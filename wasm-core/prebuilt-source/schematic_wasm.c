#include <stdint.h>
#include <stddef.h>

extern unsigned char __heap_base;
static uint32_t heap_cursor = 0;

__attribute__((export_name("reset_alloc")))
void reset_alloc(void) {
  heap_cursor = (uint32_t)(uintptr_t)&__heap_base;
  heap_cursor = (heap_cursor + 15u) & ~15u;
}

__attribute__((export_name("alloc")))
uint32_t alloc(uint32_t size) {
  if (heap_cursor == 0) reset_alloc();
  uint32_t pointer = heap_cursor;
  heap_cursor = (heap_cursor + size + 15u) & ~15u;
  return pointer;
}

static inline uint8_t luminance(const uint8_t *rgba, uint32_t pixel_index) {
  uint32_t offset = pixel_index * 4u;
  uint32_t red = rgba[offset];
  uint32_t green = rgba[offset + 1u];
  uint32_t blue = rgba[offset + 2u];
  return (uint8_t)((54u * red + 183u * green + 19u * blue) >> 8u);
}

static inline uint32_t clamp_low(int32_t value) {
  return value < 0 ? 0u : (uint32_t)value;
}

static inline uint32_t clamp_high(uint32_t value, uint32_t maximum) {
  return value > maximum ? maximum : value;
}

static inline int dark_horizontal_band(const uint8_t *dark, uint32_t width, uint32_t height, uint32_t x, uint32_t y) {
  uint32_t y0 = y > 1u ? y - 1u : 0u;
  uint32_t y1 = y + 1u < height ? y + 1u : height - 1u;
  for (uint32_t yy = y0; yy <= y1; yy++) {
    if (dark[yy * width + x]) return 1;
  }
  return 0;
}

static inline int dark_vertical_band(const uint8_t *dark, uint32_t width, uint32_t height, uint32_t x, uint32_t y) {
  uint32_t x0 = x > 1u ? x - 1u : 0u;
  uint32_t x1 = x + 1u < width ? x + 1u : width - 1u;
  for (uint32_t xx = x0; xx <= x1; xx++) {
    if (dark[y * width + xx]) return 1;
  }
  return 0;
}

static inline int32_t snap_value(int32_t value, uint32_t grid) {
  if (grid == 0u) return value;
  return (int32_t)(((value + (int32_t)grid / 2) / (int32_t)grid) * (int32_t)grid);
}

static int is_duplicate(const int32_t *out, uint32_t count, int32_t x1, int32_t y1, int32_t x2, int32_t y2) {
  for (uint32_t index = 0; index < count; index++) {
    uint32_t offset = index * 4u;
    int32_t dx1 = out[offset] - x1;
    int32_t dy1 = out[offset + 1u] - y1;
    int32_t dx2 = out[offset + 2u] - x2;
    int32_t dy2 = out[offset + 3u] - y2;
    if (dx1 < 0) dx1 = -dx1;
    if (dy1 < 0) dy1 = -dy1;
    if (dx2 < 0) dx2 = -dx2;
    if (dy2 < 0) dy2 = -dy2;
    if (dx1 <= 10 && dy1 <= 10 && dx2 <= 10 && dy2 <= 10) return 1;
  }
  return 0;
}

static uint32_t emit_line(
  int32_t *out,
  uint32_t count,
  uint32_t max_lines,
  int32_t x1,
  int32_t y1,
  int32_t x2,
  int32_t y2,
  uint32_t grid
) {
  if (count >= max_lines) return count;
  x1 = snap_value(x1, grid);
  y1 = snap_value(y1, grid);
  x2 = snap_value(x2, grid);
  y2 = snap_value(y2, grid);
  if (x1 > x2 || (x1 == x2 && y1 > y2)) {
    int32_t tx = x1; x1 = x2; x2 = tx;
    int32_t ty = y1; y1 = y2; y2 = ty;
  }
  int32_t dx = x2 - x1;
  int32_t dy = y2 - y1;
  if (dx < 0) dx = -dx;
  if (dy < 0) dy = -dy;
  if ((uint32_t)(dx + dy) < 35u) return count;
  if (is_duplicate(out, count, x1, y1, x2, y2)) return count;
  uint32_t offset = count * 4u;
  out[offset] = x1;
  out[offset + 1u] = y1;
  out[offset + 2u] = x2;
  out[offset + 3u] = y2;
  return count + 1u;
}

__attribute__((export_name("detect_lines")))
uint32_t detect_lines(
  uint32_t rgba_pointer,
  uint32_t width,
  uint32_t height,
  uint32_t grid_size,
  uint32_t scan_step,
  uint32_t minimum_run,
  uint32_t output_pointer,
  uint32_t max_lines
) {
  if (width < 2u || height < 2u || max_lines == 0u) return 0u;
  if (scan_step < 1u) scan_step = 1u;
  const uint8_t *rgba = (const uint8_t *)(uintptr_t)rgba_pointer;
  int32_t *output = (int32_t *)(uintptr_t)output_pointer;
  uint32_t integral_width = width + 1u;
  uint32_t integral_size = integral_width * (height + 1u);
  uint32_t *integral = (uint32_t *)(uintptr_t)alloc(integral_size * 4u);
  uint8_t *dark = (uint8_t *)(uintptr_t)alloc(width * height);

  for (uint32_t index = 0; index < integral_size; index++) integral[index] = 0u;

  for (uint32_t y = 1u; y <= height; y++) {
    uint32_t row_sum = 0u;
    for (uint32_t x = 1u; x <= width; x++) {
      row_sum += luminance(rgba, (y - 1u) * width + (x - 1u));
      integral[y * integral_width + x] = integral[(y - 1u) * integral_width + x] + row_sum;
    }
  }

  const int32_t radius = 12;
  const int32_t threshold_offset = 18;
  for (uint32_t y = 0u; y < height; y++) {
    for (uint32_t x = 0u; x < width; x++) {
      uint32_t x0 = clamp_low((int32_t)x - radius);
      uint32_t y0 = clamp_low((int32_t)y - radius);
      uint32_t x1 = clamp_high(x + (uint32_t)radius, width - 1u);
      uint32_t y1 = clamp_high(y + (uint32_t)radius, height - 1u);
      uint32_t sum =
        integral[(y1 + 1u) * integral_width + x1 + 1u] -
        integral[y0 * integral_width + x1 + 1u] -
        integral[(y1 + 1u) * integral_width + x0] +
        integral[y0 * integral_width + x0];
      uint32_t area = (x1 - x0 + 1u) * (y1 - y0 + 1u);
      int32_t mean = (int32_t)(sum / area);
      int32_t value = (int32_t)luminance(rgba, y * width + x);
      dark[y * width + x] = value < mean - threshold_offset ? 1u : 0u;
    }
  }

  uint32_t count = 0u;
  const uint32_t gap_limit = 4u;

  for (uint32_t y = 0u; y < height && count < max_lines; y += scan_step) {
    int32_t start = -1;
    uint32_t gap = 0u;
    for (uint32_t x = 0u; x <= width; x++) {
      int hit = x < width && dark_horizontal_band(dark, width, height, x, y);
      if (hit) {
        if (start < 0) start = (int32_t)x;
        gap = 0u;
      } else if (start >= 0) {
        gap++;
        if (gap > gap_limit) {
          int32_t end = (int32_t)x - (int32_t)gap;
          if ((uint32_t)(end - start) >= minimum_run) {
            count = emit_line(output, count, max_lines, start, (int32_t)y, end, (int32_t)y, grid_size);
          }
          start = -1;
          gap = 0u;
        }
      }
    }
  }

  for (uint32_t x = 0u; x < width && count < max_lines; x += scan_step) {
    int32_t start = -1;
    uint32_t gap = 0u;
    for (uint32_t y = 0u; y <= height; y++) {
      int hit = y < height && dark_vertical_band(dark, width, height, x, y);
      if (hit) {
        if (start < 0) start = (int32_t)y;
        gap = 0u;
      } else if (start >= 0) {
        gap++;
        if (gap > gap_limit) {
          int32_t end = (int32_t)y - (int32_t)gap;
          if ((uint32_t)(end - start) >= minimum_run) {
            count = emit_line(output, count, max_lines, (int32_t)x, start, (int32_t)x, end, grid_size);
          }
          start = -1;
          gap = 0u;
        }
      }
    }
  }

  return count;
}
