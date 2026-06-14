(function(){var e=Object.defineProperty,t=(e,t)=>()=>(e&&(t=e(e=0)),t),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};function r(e,t){let n=Math.max(1,Math.round(e)),r=Math.max(1,Math.round(t));if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(n,r);if(typeof document<`u`){let e=document.createElement(`canvas`);return e.width=n,e.height=r,e}throw Error(`Canvas processing is unavailable in this environment.`)}function i(e){return{width:e?.naturalWidth||e?.videoWidth||e?.width||0,height:e?.naturalHeight||e?.videoHeight||e?.height||0}}let a=[`resistor`,`capacitor`,`battery`,`fuse`,`diode`,`zener`,`led`,`scr`,`switch`,`lamp`,`ground`,`source`,`junction`,`terminal`,`text`];function o(e){"@babel/helpers - typeof";return o=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},o(e)}var s=t((()=>{}));function c(e,t){if(o(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(o(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var l=t((()=>{s()}));function u(e){var t=c(e,`string`);return o(t)==`symbol`?t:t+``}var d=t((()=>{s(),l()}));function f(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=t((()=>{d()})),m=n({InferenceSession:()=>Le,TRACE:()=>Oe,TRACE_EVENT_BEGIN:()=>Me,TRACE_EVENT_END:()=>Ne,TRACE_FUNC_BEGIN:()=>Ae,TRACE_FUNC_END:()=>je,Tensor:()=>Ee,default:()=>dr,env:()=>ae,registerBackend:()=>D});
/*!
* ONNX Runtime Web v1.26.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
async function h(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Uc||(t.Uc=new Map)).set(e,n)},t.unmountExternalData=()=>{delete t.Uc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=()=>{let e=e=>(...t)=>{let n=an;return t=e(...t),an==n?t:new Promise((e,t)=>{fn={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),typeof jsepRunAsync<`u`&&(t._OrtRun=jsepRunAsync(t._OrtRun),t._OrtRunWithBinding=jsepRunAsync(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a?.()};var o,s,c=(e,t)=>{throw t},l=self.location.href,u=``;if(n||r){try{u=new URL(`.`,l).href}catch{}r&&(s=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),o=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var d,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){ke.buffer!=E.buffer&&oe()}if(i){let e=function(n){try{var r=n.data,i=r.Oc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Oc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.ce)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Oc:`callHandler`,be:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));ke=r.ie,oe(),p=r.je,ue(),$()}else if(i===`run`){(function(e){var t=(w(),A)[e+52>>>2>>>0];e=(w(),A)[e+56>>>2>>>0],H(t,t-e),U(t)})(r.Nc),Gi(r.Nc,0,0,1,0,0),Ee(),qt(r.Nc),T||(Si(),T=!0);try{Ae(r.ge,r.Wc)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?T&&Jt():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw Ki(),e}};var T=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var E,D,O,ee,k,A,j,te,ne,re,ie,ae=!1;function oe(){var e=ke.buffer;t.HEAP8=E=new Int8Array(e),O=new Int16Array(e),t.HEAPU8=D=new Uint8Array(e),ee=new Uint16Array(e),t.HEAP32=k=new Int32Array(e),t.HEAPU32=A=new Uint32Array(e),j=new Float32Array(e),te=new Float64Array(e),ne=new BigInt64Array(e),re=new BigUint64Array(e)}function se(){ae=!0,i?_():Va._b()}function ce(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function le(){return{a:{f:Pe,J:Ie,k:Ve,p:He,l:Ue,sa:We,b:Ge,ca:Ke,Ja:Je,q:Ye,da:et,Za:tt,Fa:nt,Ha:rt,_a:it,Xa:at,Qa:ot,Wa:st,oa:ct,Ga:lt,Xb:ut,Ya:dt,Yb:ft,db:pt,Da:xt,Sb:St,Qb:Dt,Ca:kt,M:At,I:jt,Rb:Pt,ja:Ht,Tb:Ut,Ta:Wt,Vb:Yt,Ka:Zt,Ob:Qt,ka:$t,Sa:qt,ab:en,U:hn,n:Sn,c:wt,rb:Cn,w:wn,L:Tn,z:En,j:Dn,o:On,sb:kn,G:An,T:jn,h:Mn,u:Nn,m:Pn,i:Fn,Na:In,Oa:Bn,Pa:Vn,La:Hn,Ma:Un,Pb:Kn,eb:qn,cb:Xn,Y:$n,qb:er,la:tr,bb:Jn,fb:nr,$a:rr,Wb:ir,N:Gn,gb:ar,X:or,Ub:sr,nb:Dr,C:Or,ra:kr,qa:Ar,pb:jr,W:Mr,v:Nr,mb:R,lb:Pr,kb:Fr,ob:z,jb:Ir,ib:B,hb:Lr,Ua:Vr,Va:Hr,Ia:be,V:Ur,na:Wr,Ra:Gr,ma:qr,Cb:xo,xa:X,Db:bo,ya:_o,F:oo,e:qa,s:Ga,x:Wa,B:ro,Fb:mo,ba:Y,D:Xa,za:ho,$:vo,ga:po,Gb:fo,Hb:uo,Ba:so,Aa:lo,Ib:co,wa:yo,aa:go,d:Ka,A:Ya,r:Ja,Bb:So,t:Qa,y:io,H:Za,E:$a,K:ao,R:Z,ia:no,_:Q,Jb:to,Kb:eo,g:Jr,a:ke,Nb:ve,Eb:Yr,ha:Xr,O:Zr,pa:Qr,Lb:$r,ta:ei,Q:ti,yb:ni,zb:ri,ua:ii,ea:ai,P:oi,Ea:si,va:ci,Z:li,wb:ui,Zb:di,S:fi,Ab:pi,tb:mi,ub:gi,vb:_i,fa:vi,xb:yi,Mb:bi}}}async function ue(){function e(e,n){var r=Va=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=nn(n),e[t]=r):e[t]=n;return Va=e,Va=function(){var e=Va,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).$b=t(e.$b),e.Cc=n(e.Cc),e.Ec=t(e.Ec),e.rd=(e=>(t,n)=>e(t,n)>>>0)(e.rd),e.wd=t(e.wd),e.xd=n(e.xd),e.Bd=t(e.Bd),e}(),Ce.push(Va.id),xi=(e=Va).$b,Si=e.ac,t._OrtInit=e.bc,t._OrtGetLastError=e.cc,t._OrtCreateSessionOptions=e.dc,t._OrtAppendExecutionProvider=e.ec,t._OrtAddFreeDimensionOverride=e.fc,t._OrtAddSessionConfigEntry=e.gc,t._OrtReleaseSessionOptions=e.hc,t._OrtCreateSession=e.ic,t._OrtReleaseSession=e.jc,t._OrtGetInputOutputCount=e.kc,t._OrtGetInputOutputMetadata=e.lc,t._OrtFree=e.mc,t._OrtCreateTensor=e.nc,t._OrtGetTensorData=e.oc,t._OrtReleaseTensor=e.pc,t._OrtCreateRunOptions=e.qc,t._OrtAddRunConfigEntry=e.rc,t._OrtReleaseRunOptions=e.sc,t._OrtCreateBinding=e.tc,t._OrtBindInput=e.uc,t._OrtBindOutput=e.vc,t._OrtClearBoundOutputs=e.wc,t._OrtReleaseBinding=e.xc,t._OrtRunWithBinding=e.yc,t._OrtRun=e.zc,t._OrtEndProfiling=e.Ac,Ci=t._OrtGetWebGpuDevice=e.Bc,wi=e.Cc,Ti=t._free=e.Dc,Ei=t._malloc=e.Ec,Di=t._wgpuBufferRelease=e.Fc,Oi=t._wgpuCreateInstance=e.Gc,ki=e.Hc,Ai=e.Ic,ji=e.Jc,Mi=e.Kc,Ni=e.Lc,Pi=e.Pc,Fi=e.Zc,Ii=e._c,Li=e.$c,Ri=e.bd,zi=e.cd,Bi=e.dd,Vi=e.ed,Hi=e.fd,Ui=e.gd,Wi=e.hd,Gi=e.kd,Ki=e.ld,qi=e.md,Ji=e.nd,Yi=e.od,Xi=e.pd,Zi=e.qd,Qi=e.rd,V=e.sd,$i=e.td,H=e.ud,U=e.vd,ea=e.wd,W=e.xd,ta=e.yd,na=e.zd,ra=e.Ad,ia=e.Bd,aa=e.Cd,oa=e.Dd,sa=e.Ed,ca=e.Fd,la=e.Gd,ua=e.Hd,da=e.Id,fa=e.Jd,pa=e.Kd,ma=e.Ld,ha=e.Md,G=e.Nd,ga=e.Od,_a=e.Pd,va=e.Qd,ya=e.Rd,ba=e.Td,xa=e.Ud,Sa=e.Vd,Ca=e.Wd,K=e.Yd,wa=e.Zd,Ta=e._d,Ea=e.$d,q=e.ae,Da=e.oe,Oa=e.pe,ka=e.qe,Aa=e.re,J=e.se,ja=e.te,Ma=e.ue,Na=e.ve,Pa=e.we,Fa=e.xe,Ia=e.ye,La=e.Ye,Ra=e.Ze,za=e._e,Ba=e.$e,p=n,Va}var n,r=le();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,le()),p):(ie??(ie=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.asyncify.wasm`,u):u+`ort-wasm-simd-threaded.asyncify.wasm`:new URL(``+new URL(`ort-wasm-simd-threaded.asyncify-DcJj-9Dx.wasm`,self.location.href).href,``+self.location.href).href),n=await async function(e){var t=ie;if(!d&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!d)try{var t=await o(e);return new Uint8Array(t)}catch{}if(e==ie&&d)e=new Uint8Array(d);else{if(!s)throw`both async and sync fetching of the wasm failed`;e=s(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),ce(e)}}(t,e)}(r),e(n.instance,n.module))}class de{constructor(e){f(this,`name`,`ExitStatus`),this.message=`Program terminated with exit(${e})`,this.status=e}}var fe=e=>{e.terminate(),e.onmessage=()=>{}},pe=[],me=0,he=null,ge=e=>{xe.length==0&&(Oe(),De(xe[0]));var t=xe.pop();if(!t)return 6;Se.push(t),we[e.Nc]=t,t.Nc=e.Nc;var n={Oc:`run`,ge:e.fe,Wc:e.Wc,Nc:e.Nc};return t.postMessage(n,e.Yc),0},_e=0,M=(e,t,...n)=>{var r,i=16*n.length,a=W(),o=ea(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),ne)[s++>>>0]=1n,(w(),ne)[s++>>>0]=r):((w(),ne)[s++>>>0]=0n,(w(),te)[s++>>>0]=r);return e=qi(e,0,i,o,t),U(a),e};function ve(e){if(i)return M(0,1,e);if(m=e,!(0<_e)){for(var t of Se)fe(t);for(t of xe)fe(t);xe=[],Se=[],we={},S=!0}c(0,new de(e))}function ye(e){if(i)return M(1,0,e);be(e)}var be=e=>{if(m=e,i)throw ye(e),`unwind`;ve(e)},xe=[],Se=[],Ce=[],we={},Te=e=>{var t=e.Nc;delete we[t],xe.push(e),Se.splice(Se.indexOf(e),1),e.Nc=0,Ji(t)};function Ee(){Ce.forEach(e=>e())}var De=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Oc,i.Vc&&i.Vc!=wi()){var a=we[i.Vc];a?a.postMessage(i,i.Yc):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.Vc}, but that thread no longer exists!`)}else r===`checkMailbox`?Jt():r===`spawnThread`?ge(i):r===`cleanupThread`?Gt(()=>{Te(we[i.he])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.be](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Oc:`load`,ce:i,ie:ke,je:p})});function Oe(){var e=new Worker((()=>{let e=URL;return self.location.href>`file:`&&self.location.href<`file;`?new e(`ort.webgpu.bundle.min.mjs`,self.location.href):new URL(self.location.href)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});xe.push(e)}var ke,Ae=(e,t)=>{_e=0,e=oa(e,t),0<_e?m=e:Yi(e)},je=[],Me=0,Ne=e=>-9007199254740992>e||9007199254740992<e?NaN:Number(e);function Pe(e){var t=new ze(e>>>=0);return(w(),E)[t.Qc+12>>>0]==0&&(Le(t,!0),Me--),Re(t,!1),je.push(t),ia(e)}var Fe=0,Ie=()=>{V(0,0);var e=je.pop();ta(e.Xc),Fe=0};function Le(e,t){t=+!!t,(w(),E)[e.Qc+12>>>0]=t}function Re(e,t){t=+!!t,(w(),E)[e.Qc+13>>>0]=t}class ze{constructor(e){this.Xc=e,this.Qc=e-24}}var Be=e=>{var t=Fe;if(!t)return $i(0),0;var n=new ze(t);(w(),A)[n.Qc+16>>>2>>>0]=t;var r=(w(),A)[n.Qc+4>>>2>>>0];if(!r)return $i(0),t;for(var i of e){if(i===0||i===r)break;if(ra(i,r,n.Qc+16))return $i(i),t}return $i(r),t};function Ve(){return Be([])}function He(e){return Be([e>>>0])}function Ue(e,t,n,r){return Be([e>>>0,t>>>0,n>>>0,r>>>0])}var We=()=>{var e=je.pop();e||ce(`no exception to throw`);var t=e.Xc;throw(w(),E)[e.Qc+13>>>0]==0&&(je.push(e),Re(e,!0),Le(e,!1),Me++),na(t),Fe=t};function Ge(e,t,n){var r=new ze(e>>>=0);throw t>>>=0,n>>>=0,(w(),A)[r.Qc+16>>>2>>>0]=0,(w(),A)[r.Qc+4>>>2>>>0]=t,(w(),A)[r.Qc+8>>>2>>>0]=n,na(e),Me++,Fe=e}var Ke=()=>Me;function qe(e,t,n,r){return i?M(2,1,e,t,n,r):Je(e,t,n,r)}function Je(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?qe(e,t,n,r):(e={fe:n,Nc:e,Wc:r,Yc:a},i?(e.Oc=`spawnThread`,postMessage(e,a),0):ge(e))}function Ye(e){throw Fe||(Fe=e>>>0),Fe}var Xe=globalThis.TextDecoder&&new TextDecoder,Ze=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Qe=(e,t=0,n,r)=>{if(16<(n=Ze(e,t>>>=0,n,r))-t&&e.buffer&&Xe)return Xe.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},$e=(e,t,n)=>(e>>>=0)?Qe((w(),D),e,t,n):``;function et(e,t,n){return i?M(3,1,e,t,n):0}function tt(e,t){if(i)return M(4,1,e,t)}function nt(e,t){if(i)return M(5,1,e,t)}function rt(e,t,n){if(i)return M(6,1,e,t,n)}function it(e,t,n){return i?M(7,1,e,t,n):0}function at(e,t){if(i)return M(8,1,e,t)}function ot(e,t,n){if(i)return M(9,1,e,t,n)}function st(e,t,n,r){if(i)return M(10,1,e,t,n,r)}function ct(e,t,n,r){if(i)return M(11,1,e,t,n,r)}function lt(e,t,n,r){if(i)return M(12,1,e,t,n,r)}function ut(e){if(i)return M(13,1,e)}function dt(e,t){if(i)return M(14,1,e,t)}function ft(e,t,n){if(i)return M(15,1,e,t,n)}var pt=()=>ce(``),mt=e=>{e>>>=0;for(var t=``;;){var n=(w(),D)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},ht={},gt={},_t={},vt=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function yt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new vt(`type "${r}" must have a positive integer typeid pointer`);if(gt.hasOwnProperty(e)){if(n.de)return;throw new vt(`Cannot register type '${r}' twice`)}gt[e]=t,delete _t[e],ht.hasOwnProperty(e)&&(t=ht[e],delete ht[e],t.forEach(e=>e()))}(e,t,n)}var bt=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),E)[e>>>0]:e=>(w(),D)[e>>>0];case 2:return n?e=>(w(),O)[e>>>1>>>0]:e=>(w(),ee)[e>>>1>>>0];case 4:return n?e=>(w(),k)[e>>>2>>>0]:e=>(w(),A)[e>>>2>>>0];case 8:return n?e=>(w(),ne)[e>>>3>>>0]:e=>(w(),re)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function xt(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}yt(e,{name:t,Mc:a,Sc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Rc:bt(t,n,!r),Tc:null})}function St(e,t,n,r){yt(e>>>=0,{name:t=mt(t>>>0),Mc:function(e){return!!e},Sc:function(e,t){return t?n:r},Rc:function(e){return this.Mc((w(),D)[e>>>0])},Tc:null})}var Ct=[],N=[0,1,,1,null,1,!0,1,!1,1];function wt(e){9<(e>>>=0)&&--N[e+1]==0&&(N[e]=void 0,Ct.push(e))}var P=e=>{if(!e)throw new vt(`Cannot use deleted val. handle = ${e}`);return N[e]},Tt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Ct.pop()||N.length;return N[t]=e,N[t+1]=1,t}};function F(e){return this.Mc((w(),A)[e>>>2>>>0])}var Et={name:`emscripten::val`,Mc:e=>{var t=P(e);return wt(e),t},Sc:(e,t)=>Tt(t),Rc:F,Tc:null};function Dt(e){return yt(e>>>0,Et)}var Ot=(e,t)=>{switch(t){case 4:return function(e){return this.Mc((w(),j)[e>>>2>>>0])};case 8:return function(e){return this.Mc((w(),te)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function kt(e,t,n){n>>>=0,yt(e>>>=0,{name:t=mt(t>>>0),Mc:e=>e,Sc:(e,t)=>t,Rc:Ot(t,n),Tc:null})}function At(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}yt(e,{name:t,Mc:a,Sc:(e,t)=>t,Rc:bt(t,n,r!==0),Tc:null})}function jt(e,t,n){function r(e){var t=(w(),A)[e>>>2>>>0];return e=(w(),A)[e+4>>>2>>>0],new i((w(),E).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];yt(e>>>=0,{name:n=mt(n>>>0),Mc:r,Rc:r},{de:!0})}var Mt=(e,t,n)=>{var r=(w(),D);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},Nt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function Pt(e,t){yt(e>>>=0,{name:t=mt(t>>>0),Mc(e){var t=(w(),A)[e>>>2>>>0];return t=$e(e+4,t,!0),Ti(e),t},Sc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new vt(`Cannot pass non-string to std::string`);var r=n?Nt(t):t.length,i=Ei(4+r+1),a=i+4;return(w(),A)[i>>>2>>>0]=r,n?Mt(t,a,r+1):(w(),D).set(t,a>>>0),e!==null&&e.push(Ti,i),i},Rc:F,Tc(e){Ti(e)}})}var Ft=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,It=(e,t,n)=>{if(e>>>=1,16<(t=Ze((w(),ee),e,t/2,n))-e&&Ft)return Ft.decode((w(),ee).slice(e,t));for(n=``;e<t;++e){var r=(w(),ee)[e>>>0];n+=String.fromCharCode(r)}return n},Lt=(e,t,n)=>{if(n??(n=2147483647),2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),O)[t>>>1>>>0]=a,t+=2}return(w(),O)[t>>>1>>>0]=0,t-r},Rt=e=>2*e.length,zt=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),A)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},Bt=(e,t,n)=>{if(t>>>=0,n??(n=2147483647),4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),k)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),k)[t>>>2>>>0]=0,t-r},Vt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Ht(e,t,n){if(e>>>=0,t>>>=0,n=mt(n>>>=0),t===2)var r=It,i=Lt,a=Rt;else r=zt,i=Bt,a=Vt;yt(e,{name:n,Mc:e=>{var n=(w(),A)[e>>>2>>>0];return n=r(e+4,n*t,!0),Ti(e),n},Sc:(e,r)=>{if(typeof r!=`string`)throw new vt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Ei(4+o+t);return(w(),A)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Ti,s),s},Rc:F,Tc(e){Ti(e)}})}function Ut(e,t){yt(e>>>=0,{ee:!0,name:t=mt(t>>>0),Mc:()=>{},Sc:()=>{}})}function Wt(e){Gi(e>>>0,!r,1,!n,131072,!1),Ee()}var Gt=e=>{if(!S)try{if(e(),!(0<_e))try{i?wi()&&Yi(m):be(m)}catch(e){e instanceof de||e==`unwind`||c(0,e)}}catch(e){e instanceof de||e==`unwind`||c(0,e)}},Kt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function qt(e){e>>>=0,Kt||(Atomics.waitAsync((w(),k),e>>>2,e).value.then(Jt),e+=128,Atomics.store((w(),k),e>>>2,1))}var Jt=()=>Gt(()=>{var e=wi();e&&(qt(e),Zi())});function Yt(e,t){(e>>>=0)==t>>>0?setTimeout(Jt):i?postMessage({Vc:e,Oc:`checkMailbox`}):(e=we[e])&&e.postMessage({Oc:`checkMailbox`})}var Xt=[];function Zt(e,t,n,r,i){for(t>>>=0,i>>>=0,Xt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),ne)[n++>>>0]?(w(),ne)[n++>>>0]:(w(),te)[n++>>>0];Xt.push(a)}return(t?Ua[t]:Ha[e])(...Xt)}var Qt=()=>{_e=0};function $t(e){e>>>=0,i?postMessage({Oc:`cleanupThread`,he:e}):Te(we[e])}function en(e){}var tn=e=>{try{e()}catch(e){ce(e)}};function nn(e){var t=(...t)=>{sn.push(e);try{return e(...t)}finally{S||(sn.pop(),an&&rn===1&&sn.length===0&&(rn=0,_e+=1,tn(Ra),typeof Fibers<`u`&&Fibers.Be()))}};return un.set(e,t),t}var rn=0,an=null,on=0,sn=[],cn=new Map,ln=new Map,un=new Map,dn=0,fn=null,pn=[],mn=e=>function(e){if(!S){if(rn===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(on=e,t=!0,n)){rn=2,tn(()=>za(an)),typeof MainLoop<`u`&&MainLoop.Xd&&MainLoop.resume(),e=!1;try{var r=function(){var e=(w(),k)[an+8>>>2>>>0];return e=ln.get(e),e=un.get(e),--_e,e()}()}catch(t){r=t,e=!0}var i=!1;if(!an){var a=fn;a&&(fn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(rn=1,an=function(){var e=Ei(65548),t=e+12;if((w(),A)[e>>>2>>>0]=t,(w(),A)[e+4>>>2>>>0]=t+65536,t=sn[0],!cn.has(t)){var n=dn++;cn.set(t,n),ln.set(n,t)}return t=cn.get(t),(w(),k)[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Xd&&MainLoop.pause(),tn(()=>La(an)))}else rn===2?(rn=0,tn(Ba),Ti(an),an=null,pn.forEach(Gt)):ce(`invalid state: ${rn}`);return on}}(t=>{e().then(t)});function hn(e){return e>>>=0,mn(async()=>Tt(await P(e)))}var gn=[],_n=e=>{var t=gn.length;return gn.push(e),t},vn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),A)[t+4*r>>>2>>>0],o=gt[a];if(o===void 0)throw e=`parameter ${r}`,a=xi(a),t=mt(a),Ti(a),new vt(`${e} has unknown type ${t}`);n[i]=o}return n},yn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),A)[t>>>2>>>0]=Tt(r)),e},bn={},xn=e=>{var t=bn[e];return t===void 0?mt(e):t};function Sn(e,t,n){var[r,...i]=vn(e,t>>>0);t=r.Sc.bind(r);var a=i.map(e=>e.Rc.bind(e));e--;var o={toValue:P};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=xn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.ee||(o.toReturnWire=t,o.emval_returnValue=yn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,_n(Object.defineProperty(n,"name",{value:s}))}function Cn(e,t){return t>>>=0,(e=P(e>>>0))==P(t)}function wn(e){return(e>>>=0)?(e=xn(e),Tt(globalThis[e])):Tt(globalThis)}function Tn(e){return e=xn(e>>>0),Tt(t[e])}function En(e,t){return t>>>=0,e=P(e>>>0),t=P(t),Tt(e[t])}function Dn(e){9<(e>>>=0)&&(N[e+1]+=1)}function On(e,t,n,r,i){return gn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function kn(e,t,n,r,i){return On(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function An(){return Tt([])}function jn(e){e=P(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Tt(t)}function Mn(e){return Tt(xn(e>>>0))}function Nn(){return Tt({})}function Pn(e){for(var t=P(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}wt(e)}function Fn(e,t,n){t>>>=0,n>>>=0,e=P(e>>>0),t=P(t),n=P(n),e[t]=n}function In(e,t){e=Ne(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getUTCSeconds(),(w(),k)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),k)[t+8>>>2>>>0]=e.getUTCHours(),(w(),k)[t+12>>>2>>>0]=e.getUTCDate(),(w(),k)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),k)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),k)[t+28>>>2>>>0]=e}var Ln=e=>e%4==0&&(e%100!=0||e%400==0),Rn=[0,31,60,91,121,152,182,213,244,274,305,335],zn=[0,31,59,90,120,151,181,212,243,273,304,334];function Bn(e,t){e=Ne(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getSeconds(),(w(),k)[t+4>>>2>>>0]=e.getMinutes(),(w(),k)[t+8>>>2>>>0]=e.getHours(),(w(),k)[t+12>>>2>>>0]=e.getDate(),(w(),k)[t+16>>>2>>>0]=e.getMonth(),(w(),k)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getDay();var n=(Ln(e.getFullYear())?Rn:zn)[e.getMonth()]+e.getDate()-1|0;(w(),k)[t+28>>>2>>>0]=n,(w(),k)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),k)[t+32>>>2>>>0]=e}function Vn(e){e>>>=0;var t=new Date((w(),k)[e+20>>>2>>>0]+1900,(w(),k)[e+16>>>2>>>0],(w(),k)[e+12>>>2>>>0],(w(),k)[e+8>>>2>>>0],(w(),k)[e+4>>>2>>>0],(w(),k)[e>>>2>>>0],0),n=(w(),k)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),k)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),k)[e+24>>>2>>>0]=t.getDay(),n=(Ln(t.getFullYear())?Rn:zn)[t.getMonth()]+t.getDate()-1|0,(w(),k)[e+28>>>2>>>0]=n,(w(),k)[e>>>2>>>0]=t.getSeconds(),(w(),k)[e+4>>>2>>>0]=t.getMinutes(),(w(),k)[e+8>>>2>>>0]=t.getHours(),(w(),k)[e+12>>>2>>>0]=t.getDate(),(w(),k)[e+16>>>2>>>0]=t.getMonth(),(w(),k)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Hn(e,t,n,r,a,o,s){return i?M(16,1,e,t,n,r,a,o,s):-52}function Un(e,t,n,r,a,o){if(i)return M(17,1,e,t,n,r,a,o)}var Wn={},Gn=()=>performance.timeOrigin+performance.now();function Kn(e,t){return i?M(18,1,e,t):(Wn[e]&&(clearTimeout(Wn[e].id),delete Wn[e]),t&&(Wn[e]={id:setTimeout(()=>{delete Wn[e],Gt(()=>Xi(e,performance.timeOrigin+performance.now()))},t),Ae:t}),0)}function qn(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),A)[e>>>2>>>0]=60*o,(w(),k)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Mt(e,n,17),Mt(t,r,17)):(Mt(e,r,17),Mt(t,n,17))}var Jn=()=>Date.now(),Yn=1;function Xn(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Yn)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),ne)[n>>>3>>>0]=BigInt(e),0}var Zn=[],Qn=(e,t)=>{Zn.length=0;for(var n;n=(w(),D)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,Zn.push(n==112?(w(),A)[t>>>2>>>0]:n==106?(w(),ne)[t>>>3>>>0]:n==105?(w(),k)[t>>>2>>>0]:(w(),te)[t>>>3>>>0]),t+=r?8:4}return Zn};function $n(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Ua[e](...t)}function er(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Ua[e](...t)}var tr=()=>{};function nr(e,t){return x($e(e>>>0,t>>>0))}var rr=()=>{throw _e+=1,`unwind`};function ir(){return 4294901760}var ar=()=>1,or=()=>navigator.hardwareConcurrency;function sr(e){e>>>=0;var t=(w(),D).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-ke.buffer.byteLength+65535)/65536|0;try{ke.grow(r),oe();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var cr=e=>{var t=Nt(e)+1,n=ea(t);return Mt(e,n,t),n},lr=(e,t)=>{(w(),A)[e>>>2>>>0]=t;var n=(w(),A)[e>>>2>>>0];(w(),A)[e+4>>>2>>>0]=(t-n)/4294967296},ur=e=>(w(),A)[e>>>2>>>0]+4294967296*(w(),k)[e+4>>>2>>>0],dr=[],fr=(e,t)=>{dr[e>>>0]=t},pr=[],mr=[],hr=(e,t)=>{mr[e]=new Promise(n=>t.finally(()=>n(e)))},I=e=>{if(e)return dr[e>>>0]},gr=(e,t)=>{for(e=(w(),A)[e>>>2>>>0];e;e=(w(),A)[e>>>2>>>0])t[(w(),k)[e+4>>>2>>>0]](e)},_r=(e,t,n)=>{(w(),A)[e>>>2>>>0]=t,(w(),A)[e+4>>>2>>>0]=n},vr=e=>{var t=(w(),A)[e>>>2>>>0];return e=(w(),A)[e+4>>>2>>>0],$e(t,e)},L=e=>{var t=(w(),A)[e>>>2>>>0];return e=(w(),A)[e+4>>>2>>>0],t?$e(t,e):e===0?``:void 0},yr=e=>{var t=L(e+4),n=(n=(w(),A)[e+12>>>2>>>0])?I(n):`auto`;if(e+=16){var r=I((w(),A)[e+4>>>2>>>0]),i=(w(),A)[e+16>>>2>>>0],a=(w(),A)[e+20>>>2>>>0];if(i){for(var o={},s=0;s<i;++s){var c=a+24*s;o[vr(c+4)]=(w(),te)[c+16>>>3>>>0]}i=o}else i=void 0;e={module:r,constants:i,entryPoint:L(e+8)}}else e=void 0;return{label:t,layout:n,compute:e}},br=(e,t)=>{function n(n,r){n=e[n],(w(),A)[t+r>>>2>>>0]=n}n(`maxTextureDimension1D`,4),n(`maxTextureDimension2D`,8),n(`maxTextureDimension3D`,12),n(`maxTextureArrayLayers`,16),n(`maxBindGroups`,20),n(`maxBindGroupsPlusVertexBuffers`,24),n(`maxBindingsPerBindGroup`,28),n(`maxDynamicUniformBuffersPerPipelineLayout`,32),n(`maxDynamicStorageBuffersPerPipelineLayout`,36),n(`maxSampledTexturesPerShaderStage`,40),n(`maxSamplersPerShaderStage`,44),n(`maxStorageBuffersPerShaderStage`,48),n(`maxStorageTexturesPerShaderStage`,52),n(`maxUniformBuffersPerShaderStage`,56),n(`minUniformBufferOffsetAlignment`,80),n(`minStorageBufferOffsetAlignment`,84),lr(t+64,e.maxUniformBufferBindingSize),lr(t+72,e.maxStorageBufferBindingSize),n(`maxVertexBuffers`,88),lr(t+96,e.maxBufferSize),n(`maxVertexAttributes`,104),n(`maxVertexBufferArrayStride`,108),n(`maxInterStageShaderVariables`,112),n(`maxColorAttachments`,116),n(`maxColorAttachmentBytesPerSample`,120),n(`maxComputeWorkgroupStorageSize`,124),n(`maxComputeInvocationsPerWorkgroup`,128),n(`maxComputeWorkgroupSizeX`,132),n(`maxComputeWorkgroupSizeY`,136),n(`maxComputeWorkgroupSizeZ`,140),n(`maxComputeWorkgroupsPerDimension`,144),e.ze!==void 0&&n(`maxImmediateSize`,148)},xr=[,`validation`,`out-of-memory`,`internal`],Sr=[,`compatibility`,`core`],Cr={1:`core-features-and-limits`,2:`depth-clip-control`,3:`depth32float-stencil8`,4:`texture-compression-bc`,5:`texture-compression-bc-sliced-3d`,6:`texture-compression-etc2`,7:`texture-compression-astc`,8:`texture-compression-astc-sliced-3d`,9:`timestamp-query`,10:`indirect-first-instance`,11:`shader-f16`,12:`rg11b10ufloat-renderable`,13:`bgra8unorm-storage`,14:`float32-filterable`,15:`float32-blendable`,16:`clip-distances`,17:`dual-source-blending`,18:`subgroups`,19:`texture-formats-tier1`,20:`texture-formats-tier2`,21:`primitive-index`,22:`texture-component-swizzle`,327692:`chromium-experimental-unorm16-texture-formats`,327729:`chromium-experimental-multi-draw-indirect`},wr=[,`low-power`,`high-performance`],Tr=[,`occlusion`,`timestamp`],Er={undefined:1,unknown:1,destroyed:2};function Dr(e,t,n,r,i,a){t=Ne(t),n=Ne(n),r>>>=0,i>>>=0,a>>>=0;var o=I(e>>>0);if(e={},a){var s=(w(),A)[a+12>>>2>>>0];if(s){var c=(w(),A)[a+16>>>2>>>0];e.requiredFeatures=Array.from((w(),A).subarray(c>>>2>>>0,c+4*s>>>2>>>0),e=>Cr[e])}var l=(w(),A)[a+20>>>2>>>0];if(l){let t=function(e,t,n=!1){t=l+t,(t=(w(),A)[t>>>2>>>0])==4294967295||n&&t==0||(u[e]=t)},n=function(e,t){t=l+t;var n=(w(),A)[t>>>2>>>0],r=(w(),A)[t+4>>>2>>>0];n==4294967295&&r==4294967295||(u[e]=ur(t))};var u={};t(`maxTextureDimension1D`,4),t(`maxTextureDimension2D`,8),t(`maxTextureDimension3D`,12),t(`maxTextureArrayLayers`,16),t(`maxBindGroups`,20),t(`maxBindGroupsPlusVertexBuffers`,24),t(`maxDynamicUniformBuffersPerPipelineLayout`,32),t(`maxDynamicStorageBuffersPerPipelineLayout`,36),t(`maxSampledTexturesPerShaderStage`,40),t(`maxSamplersPerShaderStage`,44),t(`maxStorageBuffersPerShaderStage`,48),t(`maxStorageTexturesPerShaderStage`,52),t(`maxUniformBuffersPerShaderStage`,56),t(`minUniformBufferOffsetAlignment`,80),t(`minStorageBufferOffsetAlignment`,84),n(`maxUniformBufferBindingSize`,64),n(`maxStorageBufferBindingSize`,72),t(`maxVertexBuffers`,88),n(`maxBufferSize`,96),t(`maxVertexAttributes`,104),t(`maxVertexBufferArrayStride`,108),t(`maxInterStageShaderVariables`,112),t(`maxColorAttachments`,116),t(`maxColorAttachmentBytesPerSample`,120),t(`maxComputeWorkgroupStorageSize`,124),t(`maxComputeInvocationsPerWorkgroup`,128),t(`maxComputeWorkgroupSizeX`,132),t(`maxComputeWorkgroupSizeY`,136),t(`maxComputeWorkgroupSizeZ`,140),t(`maxComputeWorkgroupsPerDimension`,144),t(`maxImmediateSize`,148,!0),e.requiredLimits=u}(s=(w(),A)[a+24>>>2>>>0])&&(s={label:L(s+4)},e.defaultQueue=s),e.label=L(a+4)}_e+=1,hr(t,o.requestDevice(e).then(e=>{--_e,Gt(()=>{dr[i>>>0]=e.queue,dr[r>>>0]=e,_e+=1,hr(n,e.lost.then(t=>{Gt(()=>{e.onuncapturederror=()=>{};var r=W(),i=cr(t.message);zi(n,Er[t.reason],i),U(r)}),--_e})),e.onuncapturederror=e=>{var t=5;e.error instanceof GPUValidationError?t=2:e.error instanceof GPUOutOfMemoryError?t=3:e.error instanceof GPUInternalError&&(t=4);var n=W();e=cr(e.error.message),Wi(r,t,e),U(n)},`adapterInfo`in e||(e.adapterInfo=o.info),Ui(t,1,r,0)})},e=>{--_e,Gt(()=>{var i=W(),a=cr(e.message);Ui(t,3,r,a),n&&zi(n,4,a),U(i)})}))}function Or(e){var t=I(e>>>=0),n=pr[e];if(n){for(var r=0;r<n.length;++r)n[r]();delete pr[e]}t.destroy()}function kr(e,t,n){n>>>=0;var r=I(e>>>=0);n==4294967295&&(n=void 0);try{var i=r.getMappedRange(t>>>0,n)}catch{return 0}var a=Qi(16,i.byteLength);return(w(),D).set(new Uint8Array(i),a>>>0),pr[e].push(()=>Ti(a)),a}function Ar(e,t,n){n>>>=0;var r=I(e>>>=0);n==4294967295&&(n=void 0);try{var i=r.getMappedRange(t>>>0,n)}catch{return 0}var a=Qi(16,i.byteLength);return(w(),D).fill(0,a,i.byteLength),pr[e].push(()=>{new Uint8Array(i).set((w(),D).subarray(a>>>0,a+i.byteLength>>>0)),Ti(a)}),a}function jr(e,t,n,r,i){e>>>=0,t=Ne(t),n=Ne(n),i>>>=0;var a=I(e);pr[e]=[],i==4294967295&&(i=void 0),_e+=1,hr(t,a.mapAsync(n,r>>>0,i).then(()=>{--_e,Gt(()=>{Bi(t,1,0)})},n=>{--_e,Gt(()=>{W();var r=cr(n.message);Bi(t,n.name===`AbortError`?4:n.name===`OperationError`?3:0,r),delete pr[e]})}))}function Mr(e){var t=I(e>>>=0),n=pr[e];if(n){for(var r=0;r<n.length;++r)n[r]();delete pr[e],t.unmap()}}function Nr(e){delete dr[e>>>0]}function R(e,t,n){e>>>=0,t>>>=0,n>>>=0;var r=!!(w(),A)[t+32>>>2>>>0];t={label:L(t+4),usage:(w(),A)[t+16>>>2>>>0],size:ur(t+24),mappedAtCreation:r},e=I(e);try{var i=e.createBuffer(t)}catch{return!1}return dr[n>>>0]=i,r&&(pr[n]=[]),!0}function Pr(e,t,n,r){e>>>=0,t=Ne(t),r>>>=0,n=yr(n>>>0),e=I(e),_e+=1,hr(t,e.createComputePipelineAsync(n).then(e=>{--_e,Gt(()=>{dr[r>>>0]=e,Ri(t,1,r,0)})},e=>{--_e,Gt(()=>{var n=W(),i=cr(e.message);Ri(t,e.reason===`validation`?3:e.reason===`internal`?4:0,r,i),U(n)})}))}function Fr(e,t,n){e>>>=0,t>>>=0,n>>>=0;var r=(w(),A)[t>>>2>>>0],i=(w(),k)[r+4>>>2>>>0];t={label:L(t+4),code:``},i===2&&(t.code=vr(r+8)),e=I(e).createShaderModule(t),dr[n>>>0]=e}var z=e=>{(e=I(e)).onuncapturederror=null,e.destroy()};function Ir(e,t){t=Ne(t),e=I(e>>>0),_e+=1,hr(t,e.popErrorScope().then(e=>{--_e,Gt(()=>{var n=5;e?e instanceof GPUValidationError?n=2:e instanceof GPUOutOfMemoryError?n=3:e instanceof GPUInternalError&&(n=4):n=1;var r=W(),i=e?cr(e.message):0;Vi(t,1,n,i),U(r)})},e=>{--_e,Gt(()=>{var n=W(),r=cr(e.message);Vi(t,1,5,r),U(n)})}))}function B(e,t,n,r){if(t=Ne(t),r>>>=0,n>>>=0){var i={featureLevel:Sr[(w(),k)[n+4>>>2>>>0]],powerPreference:wr[(w(),k)[n+8>>>2>>>0]],forceFallbackAdapter:!!(w(),A)[n+12>>>2>>>0]};(e=(w(),A)[n>>>2>>>0])!==0&&(w(),i.De=!!(w(),A)[e+8>>>2>>>0])}`gpu`in navigator?(_e+=1,hr(t,navigator.gpu.requestAdapter(i).then(e=>{--_e,Gt(()=>{if(e)dr[r>>>0]=e,Hi(t,1,r,0);else{var n=W(),i=cr(`WebGPU not available on this browser (requestAdapter returned null)`);Hi(t,3,r,i),U(n)}})},e=>{--_e,Gt(()=>{var n=W(),i=cr(e.message);Hi(t,4,r,i),U(n)})}))):(i=W(),e=cr(`WebGPU not available on this browser (navigator.gpu is not available)`),Hi(t,3,r,e),U(i))}function Lr(e,t,n){return e>>>=0,t>>>=0,n>>>=0,mn(async()=>{var r=[];if(n){var i=(w(),k)[n>>>2>>>0];r.length=t+1,r[t]=new Promise(e=>setTimeout(e,i,0))}else r.length=t;for(var a=0;a<t;++a){var o=ur(e+8*a);if(!(o in mr))return o;r[a]=mr[o]}return r=await Promise.race(r),delete mr[r],r})}var Rr,zr={},Br=()=>{if(!Rr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in zr)zr[e]===void 0?delete t[e]:t[e]=zr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Rr=n}return Rr};function Vr(e,t){if(i)return M(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of Br()){var o=t+r;(w(),A)[e+a>>>2>>>0]=o,r+=Mt(n,o,1/0)+1,a+=4}return 0}function Hr(e,t){if(i)return M(20,1,e,t);e>>>=0,t>>>=0;var n=Br();for(var r of((w(),A)[e>>>2>>>0]=n.length,e=0,n))e+=Nt(r)+1;return(w(),A)[t>>>2>>>0]=e,0}function Ur(e){return i?M(21,1,e):52}function Wr(e,t,n,r){return i?M(22,1,e,t,n,r):52}function Gr(e,t,n,r){return i?M(23,1,e,t,n,r):70}var Kr=[null,[],[]];function qr(e,t,n,r){if(i)return M(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),A)[t>>>2>>>0],c=(w(),A)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),D)[s+l>>>0],f=Kr[u];d===0||d===10?((u===1?b:x)(Qe(f)),f.length=0):f.push(d)}a+=c}return(w(),A)[r>>>2>>>0]=a,0}function Jr(e){return e>>>0}function Yr(e,t){return br(I(e>>>0).limits,t>>>0),1}function Xr(e,t){return I(e>>>0).features.has(Cr[t])}function Zr(e){return BigInt(I(e>>>0).size)}function Qr(e){return BigInt(I(e>>>0).usage)}function $r(e,t){if(e>>>=0,t>>>=0){var n=L(t+4);n={label:n,timestampWrites:t=(t=(w(),A)[t+12>>>2>>>0])===0?void 0:{querySet:I((w(),A)[t+4>>>2>>>0]),beginningOfPassWriteIndex:(w(),A)[t+8>>>2>>>0],endOfPassWriteIndex:(w(),A)[t+12>>>2>>>0]}}}return t=I(e),e=Ni(0),n=t.beginComputePass(n),dr[e>>>0]=n,e}function ei(e,t,n,r){n=Ne(n),(r=Ne(r))==-1&&(r=void 0),(e=I(e>>>0)).clearBuffer(I(t>>>0),n,r)}function ti(e,t,n,r,i,a){n=Ne(n),i=Ne(i),a=Ne(a),I(e>>>0).copyBufferToBuffer(I(t>>>0),n,I(r>>>0),i,a)}function ni(e){var t=I(e>>>0);return e=ji(0),t=t.finish(),dr[e>>>0]=t,e}function ri(e,t,n,r,i,a){a=Ne(a),I(e>>>0).resolveQuerySet(I(t>>>0),n,r,I(i>>>0),a)}function ii(e,t,n,r){I(e>>>0).dispatchWorkgroups(t,n,r)}function ai(e,t,n){n=Ne(n),I(e>>>0).dispatchWorkgroupsIndirect(I(t>>>0),n)}function oi(e){I(e>>>0).end()}function si(e,t,n,r,i){r>>>=0,i>>>=0,e=I(e>>>0),n=I(n>>>0),r==0?e.setBindGroup(t,n):e.setBindGroup(t,n,(w(),A),i>>>2,r)}function ci(e,t){I(e>>>0).setPipeline(I(t>>>0))}function li(e,t,n){I(e>>>0).Ce(I(t>>>0),n)}function ui(e,t){var n=I(e>>>0);return e=Ai(0),t=n.getBindGroupLayout(t),dr[e>>>0]=t,e}function di(e,t){function n(e){var t=(w(),A)[e+8>>>2>>>0],n=(w(),A)[e+32>>>2>>>0],r=(w(),A)[e+36>>>2>>>0],i=0;return gr(e,{327681:e=>{i=(w(),A)[e+8>>>2>>>0]}}),t?((n=ur(e+24))==-1&&(n=void 0),t={buffer:I(t),offset:ur(e+16),size:n}):t=I(n||r||i),{binding:(w(),A)[e+4>>>2>>>0],resource:t}}e>>>=0,t={label:L(4+(t>>>=0)),layout:I((w(),A)[t+12>>>2>>>0]),entries:function(e,t){for(var r=[],i=0;i<e;++i)r.push(n(t+40*i));return r}((w(),A)[t+16>>>2>>>0],(w(),A)[t+20>>>2>>>0])},e=I(e);var r=ki(0);return fr(r,e.createBindGroup(t)),r}function fi(e,t){var n;return e>>>=0,(t>>>=0)&&(n={label:L(t+4)}),t=I(e),e=Mi(0),n=t.createCommandEncoder(n),dr[e>>>0]=n,e}function pi(e,t){e>>>=0,t>>>=0,t={type:Tr[(w(),k)[t+12>>>2>>>0]],count:(w(),A)[t+16>>>2>>>0]};var n=I(e);return e=Pi(0),t=n.createQuerySet(t),dr[e>>>0]=t,e}function mi(e,t){e=I(e>>>0).adapterInfo,t>>>=0,(w(),A)[t+52>>>2>>>0]=e.subgroupMinSize,(w(),A)[t+56>>>2>>>0]=e.subgroupMaxSize;var n=e.vendor+e.architecture+e.device+e.description,r=Nt(n)+1,i=Ei(r);return i&&Mt(n,i,r),n=i,r=Nt(e.vendor),_r(t+4,n,r),n+=r,r=Nt(e.architecture),_r(t+12,n,r),n+=r,r=Nt(e.device),_r(t+20,n,r),_r(t+28,n+r,Nt(e.description)),(w(),k)[t+36>>>2>>>0]=2,e=e.isFallbackAdapter?3:4,(w(),k)[t+40>>>2>>>0]=e,(w(),A)[t+44>>>2>>>0]=0,(w(),A)[t+48>>>2>>>0]=0,1}var hi={"core-features-and-limits":1,"depth-clip-control":2,"depth32float-stencil8":3,"texture-compression-bc":4,"texture-compression-bc-sliced-3d":5,"texture-compression-etc2":6,"texture-compression-astc":7,"texture-compression-astc-sliced-3d":8,"timestamp-query":9,"indirect-first-instance":10,"shader-f16":11,"rg11b10ufloat-renderable":12,"bgra8unorm-storage":13,"float32-filterable":14,"float32-blendable":15,"clip-distances":16,"dual-source-blending":17,subgroups:18,"texture-formats-tier1":19,"texture-formats-tier2":20,"primitive-index":21,"texture-component-swizzle":22,"chromium-experimental-unorm16-texture-formats":327692,"chromium-experimental-multi-draw-indirect":327729};function gi(e,t){t>>>=0;var n=I(e>>>0);e=Ei(4*n.features.size);var r=0,i=0;for(let t of n.features)0<=(n=hi[t])&&((w(),k)[e+r>>>2>>>0]=n,r+=4,i++);(w(),A)[t+4>>>2>>>0]=e,(w(),A)[t>>>2>>>0]=i}function _i(e,t){return br(I(e>>>0).limits,t>>>0),1}function vi(e,t){I(e>>>0).pushErrorScope(xr[t])}function yi(e,t,n){t>>>=0,n>>>=0,e=I(e>>>0),t=Array.from((w(),k).subarray(n>>>2>>>0,n+4*t>>>2>>>0),e=>I(e)),e.submit(t)}function bi(e,t,n,r,i){n=Ne(n),r>>>=0,i>>>=0,e=I(e>>>0),t=I(t>>>0),r=(w(),D).subarray(r>>>0,r+i>>>0),e.writeBuffer(t,n,r,0,i)}i||function(){for(var e=t.numThreads-1;e--;)Oe();pe.push(async()=>{var e=async function(){if(!i)return Promise.all(xe.map(De))}();me++,await e,--me==0&&he&&(e=he,he=null,e())})}(),i||(ke=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),oe()),t.wasmBinary&&(d=t.wasmBinary),t.stackSave=()=>W(),t.stackRestore=e=>U(e),t.stackAlloc=e=>ea(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),E)[e>>>0]=t;break;case`i16`:(w(),O)[e>>>1>>>0]=t;break;case`i32`:(w(),k)[e>>>2>>>0]=t;break;case`i64`:(w(),ne)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),j)[e>>>2>>>0]=t;break;case`double`:(w(),te)[e>>>3>>>0]=t;break;case`*`:(w(),A)[e>>>2>>>0]=t;break;default:ce(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),E)[e>>>0];case`i16`:return(w(),O)[e>>>1>>>0];case`i32`:return(w(),k)[e>>>2>>>0];case`i64`:return(w(),ne)[e>>>3>>>0];case`float`:return(w(),j)[e>>>2>>>0];case`double`:return(w(),te)[e>>>3>>>0];case`*`:return(w(),A)[e>>>2>>>0];default:ce(`invalid type for getValue: ${t}`)}},t.UTF8ToString=$e,t.stringToUTF8=Mt,t.lengthBytesUTF8=Nt;var xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,V,$i,H,U,ea,W,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,G,ga,_a,va,ya,ba,xa,Sa,Ca,K,wa,Ta,Ea,q,Da,Oa,ka,Aa,J,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha=[ve,ye,qe,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,Hn,Un,Kn,Vr,Hr,Ur,Wr,Gr,qr],Ua={979436:(e,n,r,i,a)=>{if(t===void 0||!t.Uc)return 1;if((e=$e(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Uc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),D).set(o,i>>>0);break;case 1:t.ad?t.ad(i,o):t.ne(i,o);break;default:return 4}return 0}catch{return 4}},980260:(e,n,r)=>{t.Sd(e,(w(),D).subarray(n>>>0,n+r>>>0))},980324:()=>t.le(),980366:e=>{t.jd(e)},980403:()=>typeof wasmOffsetConverter<`u`};function Wa(e,t,n,r){var i=W();try{return ma(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function Ga(e,t,n){var r=W();try{return da(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;V(1,0)}}function Ka(e){var t=W();try{sa(e)}catch(e){if(U(t),e!==e+0)throw e;V(1,0)}}function qa(e,t){var n=W();try{return oa(e,t)}catch(e){if(U(n),e!==e+0)throw e;V(1,0)}}function Ja(e,t,n){var r=W();try{aa(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;V(1,0)}}function Ya(e,t){var n=W();try{ha(e,t)}catch(e){if(U(n),e!==e+0)throw e;V(1,0)}}function Xa(e,t,n,r,i,a,o){var s=W();try{return ua(e,t,n,r,i,a,o)}catch(e){if(U(s),e!==e+0)throw e;V(1,0)}}function Za(e,t,n,r,i,a){var o=W();try{ca(e,t,n,r,i,a)}catch(e){if(U(o),e!==e+0)throw e;V(1,0)}}function Qa(e,t,n,r){var i=W();try{pa(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function $a(e,t,n,r,i,a,o){var s=W();try{ga(e,t,n,r,i,a,o)}catch(e){if(U(s),e!==e+0)throw e;V(1,0)}}function eo(e,t,n,r,i,a,o){var s=W();try{_a(e,t,n,r,i,a,o)}catch(e){if(U(s),e!==e+0)throw e;V(1,0)}}function to(e,t,n,r,i,a,o,s){var c=W();try{Ta(e,t,n,r,i,a,o,s)}catch(e){if(U(c),e!==e+0)throw e;V(1,0)}}function no(e,t,n,r,i,a,o,s,c,l,u,d){var f=W();try{va(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(U(f),e!==e+0)throw e;V(1,0)}}function ro(e,t,n,r,i){var a=W();try{return G(e,t,n,r,i)}catch(e){if(U(a),e!==e+0)throw e;V(1,0)}}function io(e,t,n,r,i){var a=W();try{la(e,t,n,r,i)}catch(e){if(U(a),e!==e+0)throw e;V(1,0)}}function ao(e,t,n,r,i,a,o,s){var c=W();try{fa(e,t,n,r,i,a,o,s)}catch(e){if(U(c),e!==e+0)throw e;V(1,0)}}function oo(e){var t=W();try{return Ea(e)}catch(e){if(U(t),e!==e+0)throw e;V(1,0)}}function so(e,t,n){var r=W();try{return q(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;V(1,0)}}function co(e,t){var n=W();try{return Ia(e,t)}catch(e){if(U(n),e!==e+0)throw e;return V(1,0),0n}}function lo(e){var t=W();try{return ya(e)}catch(e){if(U(t),e!==e+0)throw e;return V(1,0),0n}}function uo(e,t,n,r){var i=W();try{return Da(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function fo(e,t,n,r,i){var a=W();try{return Oa(e,t,n,r,i)}catch(e){if(U(a),e!==e+0)throw e;V(1,0)}}function po(e,t,n,r,i,a){var o=W();try{return ka(e,t,n,r,i,a)}catch(e){if(U(o),e!==e+0)throw e;V(1,0)}}function Y(e,t,n,r,i,a){var o=W();try{return K(e,t,n,r,i,a)}catch(e){if(U(o),e!==e+0)throw e;V(1,0)}}function mo(e,t,n,r,i,a){var o=W();try{return Aa(e,t,n,r,i,a)}catch(e){if(U(o),e!==e+0)throw e;V(1,0)}}function ho(e,t,n,r,i,a,o,s){var c=W();try{return wa(e,t,n,r,i,a,o,s)}catch(e){if(U(c),e!==e+0)throw e;V(1,0)}}function go(e,t,n,r,i){var a=W();try{return J(e,t,n,r,i)}catch(e){if(U(a),e!==e+0)throw e;return V(1,0),0n}}function _o(e,t,n,r){var i=W();try{return ja(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function X(e,t,n,r){var i=W();try{return Ma(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function vo(e,t,n,r,i,a,o,s,c,l,u,d){var f=W();try{return Na(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(U(f),e!==e+0)throw e;V(1,0)}}function Z(e,t,n,r,i,a,o,s,c,l,u){var d=W();try{Pa(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(U(d),e!==e+0)throw e;V(1,0)}}function Q(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=W();try{Fa(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(U(g),e!==e+0)throw e;V(1,0)}}function yo(e,t,n){var r=W();try{return xa(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;return V(1,0),0n}}function bo(e,t,n){var r=W();try{return ba(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;V(1,0)}}function xo(e,t,n){var r=W();try{return Sa(e,t,n)}catch(e){if(U(r),e!==e+0)throw e;V(1,0)}}function So(e,t,n,r){var i=W();try{Ca(e,t,n,r)}catch(e){if(U(i),e!==e+0)throw e;V(1,0)}}function $(){if(0<me)he=$;else if(i)h?.(t),se();else{for(var e=pe;0<e.length;)e.shift()(t);0<me?he=$:(t.calledRun=!0,S||(se(),h?.(t)))}}return i||(Va=await ue(),$()),t.PTR_SIZE=4,t.webgpuInit=e=>{let n=new WeakMap,r,i,a=1;t.webgpuRegisterDevice=e=>{if(i!==void 0)throw Error(`another WebGPU EP inference session is being created.`);if(e){var t=n.get(e);if(!t){let r=((e,t=0)=>{var n=Li(t);return t=Ii(t,n),dr[n>>>0]=e.queue,dr[t>>>0]=e,t})(e,t=Oi(0));t=[a++,t,r],n.set(e,t)}return r=e,i=t[0],t}r=void 0,i=0};let o=new Map;t.webgpuOnCreateSession=t=>{if(i!==void 0){var n=i;if(i=void 0,t){let i=Ci(n);o.set(t,i),n===0&&e(r??I(i))}r=void 0}},t.webgpuOnReleaseSession=e=>{o.delete(e)};let s=Symbol(`gpuBufferMetadata`);t.webgpuRegisterBuffer=(e,t,n)=>{if(n)return e[s]=[n,NaN],n;if(n=e[s])return n[1]++,n[0];if((t=o.get(t))===void 0)throw Error(`Invalid session handle passed to webgpuRegisterBuffer`);return t=((e,t=0)=>(e.mapState===`unmapped`||ce(),t=Fi(t),dr[t>>>0]=e,t))(e,t),e[s]=[t,1],t},t.webgpuUnregisterBuffer=e=>{let t=e[s];if(!t)throw Error(`Buffer is not registered`);t[1]--,t[1]===0&&(Di(t[0]),delete e[s])},t.webgpuGetBuffer=e=>I(e),t.webgpuCreateDownloader=(e,t,n)=>{if((n=o.get(n))===void 0)throw Error(`Invalid session handle passed to webgpuRegisterBuffer`);let r=I(n),i=16*Math.ceil(Number(t)/16);return async()=>{let n=r.createBuffer({size:i,usage:9});try{let a=r.createCommandEncoder();return a.copyBufferToBuffer(e,0,n,0,i),r.queue.submit([a.finish()]),await n.mapAsync(GPUMapMode.READ),n.getMappedRange().slice(0,t)}finally{n.destroy()}}},t.ad=(e,t)=>{var n=t.buffer;let a=t.byteOffset,o=t.byteLength;if(t=16*Math.ceil(Number(o)/16),e=I(e),!r){var s=Ci(i);r=I(s)}let c=(s=r.createBuffer({mappedAtCreation:!0,size:t,usage:6})).getMappedRange();new Uint8Array(c).set(new Uint8Array(n,a,o)),s.unmap(),(n=r.createCommandEncoder()).copyBufferToBuffer(s,0,e,0,t),r.queue.submit([n.finish()]),s.destroy()}},t.webnnInit=e=>{let n=e[0];[t.le,t.jd,t.webnnEnsureTensor,t.Sd,t.webnnDownloadTensor,t.ke,t.webnnEnableTraceEvent]=e.slice(1),t.webnnReleaseTensorId=t.jd,t.webnnUploadTensor=t.Sd,t.webnnRegisterMLContext=t.ke,t.webnnOnRunStart=e=>n.onRunStart(e),t.webnnOnRunEnd=n.onRunEnd.bind(n),t.webnnOnReleaseSession=e=>{n.onReleaseSession(e)},t.webnnCreateMLTensorDownloader=(e,t)=>n.createMLTensorDownloader(e,t),t.webnnRegisterMLTensor=(e,t,r,i)=>n.registerMLTensor(e,t,r,i),t.webnnCreateMLContext=e=>n.createMLContext(e),t.webnnRegisterMLConstant=(e,r,i,a,o,s)=>n.registerMLConstant(e,r,i,a,o,t.Uc,s),t.webnnRegisterGraphInput=n.registerGraphInput.bind(n),t.webnnIsGraphInput=n.isGraphInput.bind(n),t.webnnRegisterGraphOutput=n.registerGraphOutput.bind(n),t.webnnIsGraphOutput=n.isGraphOutput.bind(n),t.webnnCreateTemporaryTensor=n.createTemporaryTensor.bind(n),t.webnnIsGraphInputOutputTypeSupported=n.isGraphInputOutputTypeSupported.bind(n)},ae?t:new Promise((e,t)=>{h=e,g=t})}var g,_,v,y,b,x,S,C,w,T,E,D,O,ee,k,A,j,te,ne,re,ie,ae,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,M,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,N,wt,P,Tt,F,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr=t((()=>{p(),g=Object.defineProperty,_=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,y=Object.prototype.hasOwnProperty,b=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),x=(e,t)=>()=>(e&&(t=e(e=0)),t),S=(e,t)=>{for(var n in t)g(e,n,{get:t[n],enumerable:!0})},C=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of v(t))!y.call(e,i)&&i!==n&&g(e,i,{get:()=>t[i],enumerable:!(r=_(t,i))||r.enumerable});return e},w=e=>C(g({},`__esModule`,{value:!0}),e),k=x(()=>{"use strict";T=new Map,E=[],D=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=T.get(e);if(r===void 0)T.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=E.indexOf(e);t!==-1&&E.splice(t,1);for(let t=0;t<E.length;t++)if(T.get(E[t]).priority<=n){E.splice(t,0,e);return}E.push(e)}return}throw TypeError(`not a valid backend`)},O=async e=>{let t=T.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ee=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?E:n,i,a=[],o=new Set;for(let e of r){let t=await O(e);typeof t==`string`?a.push({name:e,err:t}):(i||(i=t),i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),A=x(()=>{"use strict";k()}),te=x(()=>{"use strict";j=`1.26.0`}),ie=x(()=>{"use strict";te(),ne=`warning`,re={wasm:{},webgl:{},webgpu:{},versions:{common:j},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);ne=e}},get logLevel(){return ne}},Object.defineProperty(re,"logLevel",{enumerable:!0})}),oe=x(()=>{"use strict";ie(),ae=re}),le=x(()=>{"use strict";se=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},ce=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),ge=x(()=>{"use strict";Te(),ue=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new we(`float32`,u,[1,4,n,r]):new we(`float32`,u,[1,3,n,r])},de=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,ue(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(ue(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return ue(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},fe=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new we({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},pe=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new we({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},me=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new we({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},he=(e,t,n)=>new we({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),be=x(()=>{"use strict";_e=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),M=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),ve=!1,ye=()=>{if(!ve){ve=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(_e.set(`int64`,BigInt64Array),M.set(BigInt64Array,`int64`)),t&&(_e.set(`uint64`,BigUint64Array),M.set(BigUint64Array,`uint64`)),r?(_e.set(`float16`,n),M.set(n,`float16`)):_e.set(`float16`,Uint16Array)}}}),Ce=x(()=>{"use strict";Te(),xe=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Se=(e,t)=>{switch(e.location){case`cpu`:return new we(e.type,e.data,t);case`cpu-pinned`:return new we({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new we({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new we({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new we({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Te=x(()=>{"use strict";le(),ge(),be(),Ce(),we=class{constructor(e,t,n){ye();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=_e.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=_e.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=M.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=xe(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return de(e,t)}static fromTexture(e,t){return fe(e,t)}static fromGpuBuffer(e,t){return pe(e,t)}static fromMLTensor(e,t){return me(e,t)}static fromPinnedBuffer(e,t,n){return he(e,t,n)}toDataURL(e){return se(this,e)}toImageData(e){return ce(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return Se(this,e)}}}),De=x(()=>{"use strict";Te(),Ee=we}),Pe=x(()=>{"use strict";ie(),Oe=(e,t)=>{(typeof re.trace>`u`?!re.wasm.trace:!re.trace)||console.timeStamp(`${e}::ORT::${t}`)},ke=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),Oe(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},Ae=e=>{(typeof re.trace>`u`?!re.wasm.trace:!re.trace)||ke(`BEGIN`,e)},je=e=>{(typeof re.trace>`u`?!re.wasm.trace:!re.trace)||ke(`END`,e)},Me=e=>{(typeof re.trace>`u`?!re.wasm.trace:!re.trace)||console.time(`ORT::${e}`)},Ne=e=>{(typeof re.trace>`u`?!re.wasm.trace:!re.trace)||console.timeEnd(`ORT::${e}`)}}),Ie=x(()=>{"use strict";k(),De(),Pe(),Fe=class e{constructor(e){this.handler=e}async run(e,t,n){Ae(),Me(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof Ee||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof Ee)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof Ee)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof Ee?s[e]=t:s[e]=new Ee(t.type,t.data,t.dims)}return Ne(`InferenceSession.run`),je(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){Ae(),Me(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await ee(o),l=await s.createInferenceSessionHandler(a,c);return Ne(`InferenceSession.create`),je(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Re=x(()=>{"use strict";Ie(),Le=Fe}),ze=x(()=>{"use strict";}),Be=x(()=>{"use strict";}),Ve=x(()=>{"use strict";}),He=x(()=>{"use strict";}),Ue={},S(Ue,{InferenceSession:()=>Le,TRACE:()=>Oe,TRACE_EVENT_BEGIN:()=>Me,TRACE_EVENT_END:()=>Ne,TRACE_FUNC_BEGIN:()=>Ae,TRACE_FUNC_END:()=>je,Tensor:()=>Ee,env:()=>ae,registerBackend:()=>D}),We=x(()=>{"use strict";A(),oe(),Re(),De(),ze(),Be(),Pe(),Ve(),He()}),Ge=x(()=>{"use strict";}),Ke={},S(Ke,{default:()=>Ye}),Xe=x(()=>{"use strict";Fn(),wt(),ht(),qe=`ort-wasm-proxy-worker`,Je=globalThis.self?.name===qe,Je&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:Ct(n.wasm).then(()=>{Cn(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;wn(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=On(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;kn(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:An(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;Mn(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Pn([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:Nn(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Ye=Je?null:e=>new Worker(e??it,{type:`module`,name:qe})}),Ze={},S(Ze,{default:()=>Qe}),et=x(()=>{"use strict";Qe=h,$e=globalThis.self?.name?.startsWith(`em-pthread`),$e&&h()}),ht=x(()=>{"use strict";Ge(),tt=typeof location>`u`?void 0:location.origin,nt=self.location.href>`file:`&&self.location.href<`file;`,rt=()=>nt?new URL(new URL(`ort.webgpu.bundle.min.mjs`,self.location.href).href,tt).href:self.location.href,it=rt(),at=()=>{if(it&&!it.startsWith(`blob:`))return it.substring(0,it.lastIndexOf(`/`)+1)},ot=(e,t)=>{try{let n=t??it;return(n?new URL(e,n):new URL(e)).origin===tt}catch{return!1}},st=(e,t)=>{let n=t??it;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ct=(e,t)=>`${t??`./`}${e}`,lt=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},ut=async e=>(await import(e)).default,dt=(Xe(),w(Ke)).default,ft=async()=>{if(!it)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(ot(it))return[void 0,dt()];let e=await lt(it);return[e,dt(e)]},pt=(et(),w(Ze)).default,mt=async(e,t,n,r)=>{let i=pt&&!(e||t);if(i)if(it)i=ot(it)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,pt];{let r=`ort-wasm-simd-threaded.asyncify.mjs`,i=e??st(r,t),a=n&&i&&!ot(i,t),o=a?await lt(i):i??ct(r,t);return[a?o:void 0,await ut(o)]}}}),wt=x(()=>{"use strict";ht(),_t=!1,vt=!1,yt=!1,bt=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},xt=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},St=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ct=async e=>{if(_t)return Promise.resolve();if(vt)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(yt)throw Error(`previous call to 'initializeWebAssembly()' failed.`);vt=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!St())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!xt())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=bt();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await mt(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=at();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{vt=!1,_t=!0,gt=t,e(),d&&URL.revokeObjectURL(d)},e=>{vt=!1,yt=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},N=()=>{if(_t&&gt)return gt;throw Error(`WebAssembly is not initialized yet.`)}}),Et=x(()=>{"use strict";wt(),P=(e,t)=>{let n=N(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Tt=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Tt(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},F=e=>{let t=N(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ot=x(()=>{"use strict";wt(),Et(),Dt=e=>{let t=N(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=P(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&F(`Can't create run options.`),e?.extra!==void 0&&Tt(e.extra,``,new WeakSet,(e,i)=>{let a=P(e,r),o=P(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&F(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),It=x(()=>{"use strict";wt(),Et(),kt=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},At=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},jt=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly=`1`),e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Mt=(e,t,n,r)=>{let i=P(t,r),a=P(n,r);N()._OrtAddSessionConfigEntry(e,i,a)!==0&&F(`Can't set a session config entry: ${t} - ${n}.`)},Nt=(e,t,n,r)=>{let i=P(t,r),a=P(n,r);e.push([i,a])},Pt=async(e,t,n)=>{let r=t.executionProviders;for(let i of r){let r=typeof i==`string`?i:i.name,a=[];switch(r){case`webnn`:if(r=`WEBNN`,Mt(e,`session.disable_quant_qdq`,`1`,n),Mt(e,`session.disable_qdq_constant_folding`,`1`,n),typeof i!=`string`){let t=i?.deviceType;t&&Mt(e,`deviceType`,t,n)}break;case`webgpu`:{r=`WebGPU`;let e;if(typeof i!=`string`){let r=i;if(r.device)if(typeof GPUDevice<`u`&&r.device instanceof GPUDevice)e=r.device;else throw Error(`Invalid GPU device set in WebGPU EP options.`);let{enableGraphCapture:o}=t;if(typeof o==`boolean`&&o&&Nt(a,`enableGraphCapture`,`1`,n),typeof r.preferredLayout==`string`&&Nt(a,`preferredLayout`,r.preferredLayout,n),r.forceCpuNodeNames){let e=Array.isArray(r.forceCpuNodeNames)?r.forceCpuNodeNames:[r.forceCpuNodeNames];Nt(a,`forceCpuNodeNames`,e.join(`
`),n)}r.validationMode&&Nt(a,`validationMode`,r.validationMode,n)}let o=N().webgpuRegisterDevice(e);if(o){let[e,t,r]=o;Nt(a,`deviceId`,e.toString(),n),Nt(a,`webgpuInstance`,t.toString(),n),Nt(a,`webgpuDevice`,r.toString(),n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let o=P(r,n),s=a.length,c=0,l=0;if(s>0){c=N()._malloc(s*N().PTR_SIZE),n.push(c),l=N()._malloc(s*N().PTR_SIZE),n.push(l);for(let e=0;e<s;e++)N().setValue(c+e*N().PTR_SIZE,a[e][0],`*`),N().setValue(l+e*N().PTR_SIZE,a[e][1],`*`)}await N()._OrtAppendExecutionProvider(e,o,c,l,s)!==0&&F(`Can't append execution provider: ${r}.`)}},Ft=async e=>{let t=N(),n=0,r=[],i=e||{};jt(i);try{let e=kt(i.graphOptimizationLevel??`all`),a=At(i.executionMode??`sequential`),o=typeof i.logId==`string`?P(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?P(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&F(`Can't create session options.`),i.executionProviders&&await Pt(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Mt(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=P(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&F(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Tt(i.extra,``,new WeakSet,(e,t)=>{Mt(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&F(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),Gt=x(()=>{"use strict";Lt=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Rt=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},zt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Bt=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Vt=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Ht=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Ut=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Wt=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),qt=x(()=>{"use strict";Ge(),Kt=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Yt=x(()=>{"use strict";Gt(),Jt=(e,t)=>new(Bt(t))(e)}),rn=x(()=>{"use strict";Gt(),Xt=[`V`,`I`,`W`,`E`,`F`],Zt=(e,t)=>{console.log(`[${Xt[e]},${new Date().toISOString()}]${t}`)},en=(e,t)=>{Qt=e,$t=t},tn=(e,t)=>{let n=Vt(e);n>=Vt(Qt)&&Zt(n,typeof t==`function`?t():t)},nn=(...e)=>{$t&&tn(...e)}}),gn=x(()=>{"use strict";Gt(),rn(),an=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),on=(e,t)=>{if(t===`int32`)return e;let n=an.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Bt(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},sn=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},cn=1,ln=()=>cn++,un=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),dn=(e,t)=>{let n=an.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},fn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return dn(this.dataType,this.tensorShape)}destroy(){nn(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=sn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},pn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=un.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);nn(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==dn(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=on(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else nn(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?sn(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},mn=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ln();return this.tensorTrackersById.set(e,new pn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){nn(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){nn(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=ln(),o=new fn({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new pn(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){nn(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}nn(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new fn({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},hn=(...e)=>new mn(...e)}),_n={},S(_n,{WebNNBackend:()=>bn}),xn=x(()=>{"use strict";Gt(),wt(),Yt(),gn(),rn(),vn=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),yn=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},bn=class{constructor(e){this.tensorManager=hn(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,en(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){nn(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){nn(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)nn(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>yn(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){nn(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=vn.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){nn(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=vn.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!N().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);nn(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Jt(n,t)}}registerMLTensor(e,t,n,r){let i=vn.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return nn(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw Error(`External mounted files are not available.`);let s=e;e.startsWith(`./`)&&(s=e.substring(2));let c=a.get(s);if(!c)throw Error(`File with name ${s} not found in preloaded files.`);if(t+n>c.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let l=c.slice(t,t+n).buffer,u;switch(i.dataType){case`float32`:u=new Float32Array(l);break;case`float16`:u=typeof Float16Array<`u`&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case`int32`:u=new Int32Array(l);break;case`uint32`:u=new Uint32Array(l);break;case`int64`:if(o){let e=on(new Uint8Array(l),`int64`);u=new Int32Array(e.buffer),i.dataType=`int32`}else u=new BigInt64Array(l);break;case`uint64`:u=new BigUint64Array(l);break;case`int8`:u=new Int8Array(l);break;case`int4`:case`uint4`:case`uint8`:u=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return nn(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?`(Note: it was int64 data type and registered to int32 as workaround)`:``}`),r.constant(i,u)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=vn.get(Lt(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),Fn=x(()=>{"use strict";We(),Ot(),It(),Gt(),wt(),Et(),qt(),Sn=(e,t)=>{N()._OrtInit(e,t)!==0&&F(`Can't initialize onnxruntime.`)},Cn=async e=>{Sn(e.wasm.numThreads,Vt(e.logLevel))},wn=async(e,t)=>{N().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);if(t===`webgpu`&&N().webgpuInit(t=>{e.webgpu.device=t}),t===`webnn`){let t=new(xn(),w(_n)).WebNNBackend(e);N().webnnInit([t,()=>t.reserveTensorId(),e=>t.releaseTensorId(e),async(e,n,r,i,a)=>t.ensureTensor(e,n,r,i,a),(e,n)=>{t.uploadTensor(e,n)},async(e,n)=>t.downloadTensor(e,n),(e,n)=>t.registerMLContext(e,n),!!e.trace])}},Tn=new Map,En=e=>{let t=N(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&F(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},Dn=(e,t)=>{let n=N(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&F(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},On=e=>{let t=N(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},kn=async(e,t)=>{let n,r,i=N();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=On(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await Ft(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Kt(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.webnnCreateMLContext(r):i.currentContext=await i.webnnCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&F(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=En(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=Dn(a,t);e===0&&F(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Rt(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=Dn(a,n+e);r===0&&F(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Rt(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&F(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Wt(e))}),Tn.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&F(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&F(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&F(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},An=e=>{let t=N(),n=Tn.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&F(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&F(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&F(`Can't release session.`),Tn.delete(e)},jn=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=N(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=zt(Lt(l),u);{let e=s.webgpuRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(t,r)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=zt(Lt(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Lt(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,P(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Lt(l);m=zt(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Lt(l),p,m,g,u.length,Wt(f));e===0&&F(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},Mn=async(e,t,n,r,i,a)=>{let o=N(),s=o.PTR_SIZE,c=Tn.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),T=o.stackAlloc(h*s),E=o.stackAlloc(g*s),D=o.stackAlloc(g*s);try{[_,v]=Dt(a),Me(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await jn(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await jn(i[t],b,x,e,d[r[t]],h+r[t],p);Ne(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(T+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(E+e*s,b[e],`*`),o.setValue(D+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);Me(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&F(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&F(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&F(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Ne(`wasm bindInputsOutputs`),Tn.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,E,_):await o._OrtRun(l,T,w,h,D,g,E,_),c!==0&&F(`failed to call OrtRun().`);let C=[],O=[];Me(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(E+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&F(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&F(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&F(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Rt(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let t=o.webgpuGetBuffer;if(!t)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let r=t(d),i=zt(a,g);if(i===void 0||!Ht(u))throw Error(`Unsupported data type: ${u}`);l=!0;{o.webgpuRegisterBuffer(r,e,d);let t=o.webgpuCreateDownloader(r,i,e);C.push([u,h,{gpuBuffer:r,download:async()=>{let e=await t();return new(Bt(u))(e)},dispose:()=>{o._OrtReleaseTensor(n)!==0&&F(`Can't release tensor.`)}},`gpu-buffer`])}}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(zt(a,g)===void 0||!Ut(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,O.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(Bt(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&F(`Can't clear bound outputs.`),Tn.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(O))C[e][2]=t;return Ne(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),n.forEach(e=>{e&&e[3]===`gpu-buffer`&&o.webgpuUnregisterBuffer(e[2].gpuBuffer)}),i.forEach(e=>{e&&e[3]===`gpu-buffer`&&o.webgpuUnregisterBuffer(e[2].gpuBuffer)}),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},Nn=e=>{let t=N(),n=Tn.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&F(`Can't get an profile file name.`),t._OrtFree(i)},Pn=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),er=x(()=>{"use strict";We(),Fn(),wt(),ht(),In=()=>!!ae.wasm.proxy&&typeof document<`u`,Rn=!1,zn=!1,Bn=!1,Un=new Map,Wn=(e,t)=>{let n=Un.get(e);n?n.push(t):Un.set(e,[t])},Gn=()=>{if(Rn||!zn||Bn||!Ln)throw Error(`worker not ready`)},Kn=e=>{switch(e.data.type){case`init-wasm`:Rn=!1,e.data.err?(Bn=!0,Hn[1](e.data.err)):(zn=!0,Hn[0]()),Vn&&(URL.revokeObjectURL(Vn),Vn=void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=Un.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},qn=async()=>{if(!zn){if(Rn)throw Error(`multiple calls to 'initWasm()' detected.`);if(Bn)throw Error(`previous call to 'initWasm()' failed.`);if(Rn=!0,In())return new Promise((e,t)=>{Ln?.terminate(),ft().then(([n,r])=>{try{Ln=r,Ln.onerror=e=>t(e),Ln.onmessage=Kn,Hn=[e,t];let i={type:`init-wasm`,in:ae};!i.in.wasm.wasmPaths&&(n||nt)&&(i.in.wasm.wasmPaths={wasm:new URL(``+new URL(`ort-wasm-simd-threaded.asyncify-DcJj-9Dx.wasm`,self.location.href).href,``+self.location.href).href}),Ln.postMessage(i),Vn=n}catch(e){t(e)}},t)});try{await Ct(ae.wasm),await Cn(ae),zn=!0}catch(e){throw Bn=!0,e}finally{Rn=!1}}},Jn=async e=>{if(In())return Gn(),new Promise((t,n)=>{Wn(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:ae}};Ln.postMessage(r)});await wn(ae,e)},Yn=async e=>In()?(Gn(),new Promise((t,n)=>{Wn(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Ln.postMessage(r,[e.buffer])})):On(e),Xn=async(e,t)=>{if(In()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return Gn(),new Promise((n,r)=>{Wn(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Ln.postMessage(i,a)})}else return kn(e,t)},Zn=async e=>{if(In())return Gn(),new Promise((t,n)=>{Wn(`release`,[t,n]);let r={type:`release`,in:e};Ln.postMessage(r)});An(e)},Qn=async(e,t,n,r,i,a)=>{if(In()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return Gn(),new Promise((i,o)=>{Wn(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Ln.postMessage(c,Pn(s))})}else return Mn(e,t,n,r,i,a)},$n=async e=>{if(In())return Gn(),new Promise((t,n)=>{Wn(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Ln.postMessage(r)});Nn(e)}}),ir=x(()=>{"use strict";We(),er(),Gt(),Ge(),qt(),tr=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},nr=e=>{switch(e[3]){case`cpu`:return new Ee(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Ht(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return Ee.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Ut(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return Ee.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},rr=class{async fetchModelAndCopyToWasmMemory(e){return Yn(await Kt(e))}async loadModel(e,t){Ae();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Xn(n,t),je()}async dispose(){return Zn(this.sessionId)}async run(e,t,n){Ae();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>tr(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?tr(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Qn(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??nr(l[e]);return je(),u}startProfiling(){}endProfiling(){$n(this.sessionId)}}}),ar={},S(ar,{OnnxruntimeWebAssemblyBackend:()=>sr,initializeFlags:()=>or,wasmBackend:()=>cr}),lr=x(()=>{"use strict";We(),er(),ir(),or=()=>{(typeof ae.wasm.initTimeout!=`number`||ae.wasm.initTimeout<0)&&(ae.wasm.initTimeout=0);let e=ae.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ae.wasm.simd=!1),typeof ae.wasm.proxy!=`boolean`&&(ae.wasm.proxy=!1),typeof ae.wasm.trace!=`boolean`&&(ae.wasm.trace=!1),typeof ae.wasm.numThreads!=`number`||!Number.isInteger(ae.wasm.numThreads)||ae.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)ae.wasm.numThreads=1;else{let e=typeof navigator>`u`?b(`node:os`).cpus().length:navigator.hardwareConcurrency;ae.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},sr=class{async init(e){or(),await qn(),await Jn(e)}async createInferenceSessionHandler(e,t){let n=new rr;return await n.loadModel(e,t),n}},cr=new sr}),We(),We(),We(),ur=`1.26.0`,dr=Ue;{let e=(lr(),w(ar)).wasmBackend;D(`webgpu`,e,5),D(`webnn`,e,5),D(`cpu`,e,10),D(`wasm`,e,10)}Object.defineProperty(ae.versions,"web",{value:ur,enumerable:!0})})),pr=n({InferenceSession:()=>ui,TRACE:()=>ti,TRACE_EVENT_BEGIN:()=>ai,TRACE_EVENT_END:()=>oi,TRACE_FUNC_BEGIN:()=>ri,TRACE_FUNC_END:()=>ii,Tensor:()=>$r,default:()=>hh,env:()=>R,registerBackend:()=>wr});
/*!
* ONNX Runtime Web v1.26.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
async function mr(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Xc||(t.Xc=new Map)).set(e,n)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.Yc)throw Error(`Session already started`);let r=t.Yc={Kd:n[0],errors:[]},i=await e(...n);if(t.Yc!==r)throw Error(`Session mismatch`);t.dd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.Yc=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=n;let e=t.dd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Id=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterMLConstant=(n,r,i,a,o,s)=>e.registerMLConstant(n,r,i,a,o,t.Xc,s),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=an;return t=e(...t),an==n?t:new Promise((e,t)=>{fn={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=self.location.href,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(w(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var p,m,h,g,_,v,y=console.log.bind(console),b=console.error.bind(console),x=y,S=b,C=!1,w=e=>e.startsWith(`file://`);function T(){Ae.buffer!=D.buffer&&se()}if(i){let e=function(n){try{var r=n.data,i=r.Sc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),v=()=>{postMessage({Sc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.xd)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Sc:`callHandler`,wd:e,args:t})},e==`print`&&(x=t[e]),e==`printErr`&&(S=t[e]));Ae=r.Od,se(),m=r.Pd,de(),fa()}else if(i===`run`){(function(e){var t=(T(),j)[e+52>>>2>>>0];e=(T(),j)[e+56>>>2>>>0],Fr(t,t-e),z(t)})(r.Rc),Dr(r.Rc,0,0,1,0,0),De(),qt(r.Rc),E||(Cr(),E=!0);try{je(r.Md,r.bd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?E&&Jt():i&&(S(`worker: received unknown command ${i}`),S(r)))}catch(e){throw Or(),e}};var E=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var D,O,ee,k,A,j,te,ne,re,ie,ae,oe=!1;function se(){var e=Ae.buffer;t.HEAP8=D=new Int8Array(e),ee=new Int16Array(e),t.HEAPU8=O=new Uint8Array(e),k=new Uint16Array(e),t.HEAP32=A=new Int32Array(e),t.HEAPU32=j=new Uint32Array(e),te=new Float32Array(e),ne=new Float64Array(e),re=new BigInt64Array(e),ie=new BigUint64Array(e)}function ce(){oe=!0,i?v():Oi.sb()}function le(e){throw S(e=`Aborted(`+e+`)`),C=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),_?.(e),e}function ue(){return{a:{ma:Mi,gb:ji,g:Pe,J:Ie,f:Ve,o:He,h:Ue,ha:We,b:Ge,T:Ke,Ha:Je,n:Ye,$:et,Xa:tt,Da:nt,Fa:rt,Ya:it,Va:at,Oa:ot,Ua:st,ka:ct,Ea:lt,Ba:ut,Wa:dt,Ca:ft,bb:pt,ea:xt,wa:St,ua:Dt,da:kt,O:At,H:jt,va:Pt,_:Ht,xa:Ut,Ra:Wt,za:Yt,Ia:Zt,sa:Qt,fa:$t,Qa:qt,_a:en,R:hn,r:Sn,c:wt,hb:Cn,y:wn,M:Tn,D:En,l:Dn,s:On,ib:kn,I:An,S:jn,j:Mn,u:Nn,q:Pn,k:Fn,La:In,Ma:Bn,Na:Vn,Ja:Hn,Ka:Un,ta:Kn,db:qn,ab:Xn,v:$n,aa:er,ga:tr,$a:Jn,W:nr,Za:rr,Aa:ir,F:Gn,U:ar,la:ur,ya:dr,fb:lr,eb:fr,Sa:I,Ta:gr,Ga:xe,V:_r,ja:vr,Pa:L,ia:br,kb:ua,na:aa,lb:la,oa:ia,G:V,d:Ii,t:Pi,w:Ni,A:Ki,mb:ta,K:Xi,x:zi,pa:na,Y:oa,ba:W,nb:ea,ob:U,P:qi,qa:H,pb:$i,N:Zi,Z:ra,e:Fi,B:Ri,m:Li,jb:da,p:Vi,z:Hi,C:Bi,E:Ui,L:Ji,qb:Qi,Q:sa,ca:Yi,X:ca,rb:Gi,ra:Wi,i:xr,a:Ae,cb:ye}}}async function de(){function e(e,n){var r=Oi=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=nn(n),e[t]=r):e[t]=n;return Oi=e,Oi=function(){var e=Oi,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).tb=t(e.tb),e.Xb=n(e.Xb),e.Zb=t(e.Zb),e.lc=t(e.lc),e.mc=n(e.mc),e.qc=t(e.qc),e}(),we.push(Oi._b),Sr=(e=Oi).tb,Cr=e.ub,t._OrtInit=e.vb,t._OrtGetLastError=e.wb,t._OrtCreateSessionOptions=e.xb,t._OrtAppendExecutionProvider=e.yb,t._OrtAddFreeDimensionOverride=e.zb,t._OrtAddSessionConfigEntry=e.Ab,t._OrtReleaseSessionOptions=e.Bb,t._OrtCreateSession=e.Cb,t._OrtReleaseSession=e.Db,t._OrtGetInputOutputCount=e.Eb,t._OrtGetInputOutputMetadata=e.Fb,t._OrtFree=e.Gb,t._OrtCreateTensor=e.Hb,t._OrtGetTensorData=e.Ib,t._OrtReleaseTensor=e.Jb,t._OrtCreateRunOptions=e.Kb,t._OrtAddRunConfigEntry=e.Lb,t._OrtReleaseRunOptions=e.Mb,t._OrtCreateBinding=e.Nb,t._OrtBindInput=e.Ob,t._OrtBindOutput=e.Pb,t._OrtClearBoundOutputs=e.Qb,t._OrtReleaseBinding=e.Rb,t._OrtRunWithBinding=e.Sb,t._OrtRun=e.Tb,t._OrtEndProfiling=e.Ub,t._JsepOutput=e.Vb,t._JsepGetNodeName=e.Wb,wr=e.Xb,Tr=t._free=e.Yb,Er=t._malloc=e.Zb,Dr=e.ac,Or=e.bc,kr=e.cc,Ar=e.dc,jr=e.ec,Mr=e.fc,Nr=e.gc,R=e.hc,Pr=e.ic,Fr=e.jc,z=e.kc,Ir=e.lc,B=e.mc,Lr=e.nc,Rr=e.oc,zr=e.pc,Br=e.qc,Vr=e.rc,Hr=e.sc,Ur=e.tc,Wr=e.uc,Gr=e.vc,Kr=e.wc,qr=e.xc,Jr=e.yc,Yr=e.zc,Xr=e.Ac,Zr=e.Bc,Qr=e.Cc,$r=e.Dc,ei=e.Ec,ti=e.Fc,ni=e.Gc,ri=e.Hc,ii=e.Ic,ai=e.Jc,oi=e.Kc,si=e.Lc,ci=e.Mc,li=e.Nc,ui=e.Pc,di=e.Qc,fi=e.$c,pi=e.ad,mi=e.fd,hi=e.jd,gi=e.kd,_i=e.ld,vi=e.md,yi=e.nd,bi=e.od,xi=e.pd,Si=e.qd,Ci=e.vd,wi=e.Sd,Ti=e.Td,Ei=e.Ud,Di=e.Vd,m=n,Oi}var n,r=ue();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(m,ue()),m):(ae??(ae=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,self.location.href).href,``+self.location.href).href),n=await async function(e){var t=ae;if(!p&&!w(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){S(`wasm streaming compile failed: ${e}`),S(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!p)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==ae&&p)e=new Uint8Array(p);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){S(`failed to asynchronously prepare wasm: ${e}`),le(e)}}(t,e)}(r),e(n.instance,n.module))}class fe{constructor(e){f(this,`name`,`ExitStatus`),this.message=`Program terminated with exit(${e})`,this.status=e}}var pe=e=>{e.terminate(),e.onmessage=()=>{}},me=[],he=0,ge=null,_e=e=>{Se.length==0&&(ke(),Oe(Se[0]));var t=Se.pop();if(!t)return 6;Ce.push(t),Te[e.Rc]=t,t.Rc=e.Rc;var n={Sc:`run`,Md:e.Ld,bd:e.bd,Rc:e.Rc};return t.postMessage(n,e.rd),0},M=0,ve=(e,t,...n)=>{var r,i=16*n.length,a=B(),o=Ir(i),s=o>>>3;for(r of n)typeof r==`bigint`?((T(),re)[s++>>>0]=1n,(T(),re)[s++>>>0]=r):((T(),re)[s++>>>0]=0n,(T(),ne)[s++>>>0]=r);return e=kr(e,0,i,o,t),z(a),e};function ye(e){if(i)return ve(0,1,e);if(h=e,!(0<M)){for(var t of Ce)pe(t);for(t of Se)pe(t);Se=[],Ce=[],Te={},C=!0}l(0,new fe(e))}function be(e){if(i)return ve(1,0,e);xe(e)}var xe=e=>{if(h=e,i)throw be(e),`unwind`;ye(e)},Se=[],Ce=[],we=[],Te={},Ee=e=>{var t=e.Rc;delete Te[t],Se.push(e),Ce.splice(Ce.indexOf(e),1),e.Rc=0,Ar(t)};function De(){we.forEach(e=>e())}var Oe=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Sc,i.Zc&&i.Zc!=wr()){var a=Te[i.Zc];a?a.postMessage(i,i.rd):S(`Internal error! Worker sent a message "${r}" to target pthread ${i.Zc}, but that thread no longer exists!`)}else r===`checkMailbox`?Jt():r===`spawnThread`?_e(i):r===`cleanupThread`?Gt(()=>{Ee(Te[i.Nd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.wd](...i.args):r&&S(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw S(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Sc:`load`,xd:i,Od:Ae,Pd:m})});function ke(){var e=new Worker((()=>{let e=URL;return self.location.href>`file:`&&self.location.href<`file;`?new e(`ort.bundle.min.mjs`,self.location.href):new URL(self.location.href)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Se.push(e)}var Ae,je=(e,t)=>{M=0,e=Hr(e,t),0<M?h=e:jr(e)},Me=[],Ne=0;function Pe(e){var t=new ze(e>>>=0);return(T(),D)[t.Tc+12>>>0]==0&&(Le(t,!0),Ne--),Re(t,!1),Me.push(t),Br(e)}var Fe=0,Ie=()=>{R(0,0);var e=Me.pop();Lr(e.cd),Fe=0};function Le(e,t){t=+!!t,(T(),D)[e.Tc+12>>>0]=t}function Re(e,t){t=+!!t,(T(),D)[e.Tc+13>>>0]=t}class ze{constructor(e){this.cd=e,this.Tc=e-24}}var Be=e=>{var t=Fe;if(!t)return Pr(0),0;var n=new ze(t);(T(),j)[n.Tc+16>>>2>>>0]=t;var r=(T(),j)[n.Tc+4>>>2>>>0];if(!r)return Pr(0),t;for(var i of e){if(i===0||i===r)break;if(zr(i,r,n.Tc+16))return Pr(i),t}return Pr(r),t};function Ve(){return Be([])}function He(e){return Be([e>>>0])}function Ue(e,t,n,r){return Be([e>>>0,t>>>0,n>>>0,r>>>0])}var We=()=>{var e=Me.pop();e||le(`no exception to throw`);var t=e.cd;throw(T(),D)[e.Tc+13>>>0]==0&&(Me.push(e),Re(e,!0),Le(e,!1),Ne++),Rr(t),Fe=t};function Ge(e,t,n){var r=new ze(e>>>=0);throw t>>>=0,n>>>=0,(T(),j)[r.Tc+16>>>2>>>0]=0,(T(),j)[r.Tc+4>>>2>>>0]=t,(T(),j)[r.Tc+8>>>2>>>0]=n,Rr(e),Ne++,Fe=e}var Ke=()=>Ne;function qe(e,t,n,r){return i?ve(2,1,e,t,n,r):Je(e,t,n,r)}function Je(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?qe(e,t,n,r):(e={Ld:n,Rc:e,bd:r,rd:a},i?(e.Sc=`spawnThread`,postMessage(e,a),0):_e(e))}function Ye(e){throw Fe||(Fe=e>>>0),Fe}var Xe=globalThis.TextDecoder&&new TextDecoder,Ze=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Qe=(e,t=0,n,r)=>{if(16<(n=Ze(e,t>>>=0,n,r))-t&&e.buffer&&Xe)return Xe.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},$e=(e,t,n)=>(e>>>=0)?Qe((T(),O),e,t,n):``;function et(e,t,n){return i?ve(3,1,e,t,n):0}function tt(e,t){if(i)return ve(4,1,e,t)}function nt(e,t){if(i)return ve(5,1,e,t)}function rt(e,t,n){if(i)return ve(6,1,e,t,n)}function it(e,t,n){return i?ve(7,1,e,t,n):0}function at(e,t){if(i)return ve(8,1,e,t)}function ot(e,t,n){if(i)return ve(9,1,e,t,n)}function st(e,t,n,r){if(i)return ve(10,1,e,t,n,r)}function ct(e,t,n,r){if(i)return ve(11,1,e,t,n,r)}function lt(e,t,n,r){if(i)return ve(12,1,e,t,n,r)}function ut(e){if(i)return ve(13,1,e)}function dt(e,t){if(i)return ve(14,1,e,t)}function ft(e,t,n){if(i)return ve(15,1,e,t,n)}var pt=()=>le(``),mt=e=>{e>>>=0;for(var t=``;;){var n=(T(),O)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},ht={},gt={},_t={},vt=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function yt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new vt(`type "${r}" must have a positive integer typeid pointer`);if(gt.hasOwnProperty(e)){if(n.yd)return;throw new vt(`Cannot register type '${r}' twice`)}gt[e]=t,delete _t[e],ht.hasOwnProperty(e)&&(t=ht[e],delete ht[e],t.forEach(e=>e()))}(e,t,n)}var bt=(e,t,n)=>{switch(t){case 1:return n?e=>(T(),D)[e>>>0]:e=>(T(),O)[e>>>0];case 2:return n?e=>(T(),ee)[e>>>1>>>0]:e=>(T(),k)[e>>>1>>>0];case 4:return n?e=>(T(),A)[e>>>2>>>0]:e=>(T(),j)[e>>>2>>>0];case 8:return n?e=>(T(),re)[e>>>3>>>0]:e=>(T(),ie)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function xt(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}yt(e,{name:t,Oc:a,Vc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Uc:bt(t,n,!r),Wc:null})}function St(e,t,n,r){yt(e>>>=0,{name:t=mt(t>>>0),Oc:function(e){return!!e},Vc:function(e,t){return t?n:r},Uc:function(e){return this.Oc((T(),O)[e>>>0])},Wc:null})}var Ct=[],N=[0,1,,1,null,1,!0,1,!1,1];function wt(e){9<(e>>>=0)&&--N[e+1]==0&&(N[e]=void 0,Ct.push(e))}var P=e=>{if(!e)throw new vt(`Cannot use deleted val. handle = ${e}`);return N[e]},Tt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Ct.pop()||N.length;return N[t]=e,N[t+1]=1,t}};function F(e){return this.Oc((T(),j)[e>>>2>>>0])}var Et={name:`emscripten::val`,Oc:e=>{var t=P(e);return wt(e),t},Vc:(e,t)=>Tt(t),Uc:F,Wc:null};function Dt(e){return yt(e>>>0,Et)}var Ot=(e,t)=>{switch(t){case 4:return function(e){return this.Oc((T(),te)[e>>>2>>>0])};case 8:return function(e){return this.Oc((T(),ne)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function kt(e,t,n){n>>>=0,yt(e>>>=0,{name:t=mt(t>>>0),Oc:e=>e,Vc:(e,t)=>t,Uc:Ot(t,n),Wc:null})}function At(e,t,n,r,i){e>>>=0,n>>>=0,t=mt(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}yt(e,{name:t,Oc:a,Vc:(e,t)=>t,Uc:bt(t,n,r!==0),Wc:null})}function jt(e,t,n){function r(e){var t=(T(),j)[e>>>2>>>0];return e=(T(),j)[e+4>>>2>>>0],new i((T(),D).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];yt(e>>>=0,{name:n=mt(n>>>0),Oc:r,Uc:r},{yd:!0})}var Mt=(e,t,n)=>{var r=(T(),O);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},Nt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function Pt(e,t){yt(e>>>=0,{name:t=mt(t>>>0),Oc(e){var t=(T(),j)[e>>>2>>>0];return t=$e(e+4,t,!0),Tr(e),t},Vc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new vt(`Cannot pass non-string to std::string`);var r=n?Nt(t):t.length,i=Er(4+r+1),a=i+4;return(T(),j)[i>>>2>>>0]=r,n?Mt(t,a,r+1):(T(),O).set(t,a>>>0),e!==null&&e.push(Tr,i),i},Uc:F,Wc(e){Tr(e)}})}var Ft=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,It=(e,t,n)=>{if(e>>>=1,16<(t=Ze((T(),k),e,t/2,n))-e&&Ft)return Ft.decode((T(),k).slice(e,t));for(n=``;e<t;++e){var r=(T(),k)[e>>>0];n+=String.fromCharCode(r)}return n},Lt=(e,t,n)=>{if(n??(n=2147483647),2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(T(),ee)[t>>>1>>>0]=a,t+=2}return(T(),ee)[t>>>1>>>0]=0,t-r},Rt=e=>2*e.length,zt=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(T(),j)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},Bt=(e,t,n)=>{if(t>>>=0,n??(n=2147483647),4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(T(),A)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(T(),A)[t>>>2>>>0]=0,t-r},Vt=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Ht(e,t,n){if(e>>>=0,t>>>=0,n=mt(n>>>=0),t===2)var r=It,i=Lt,a=Rt;else r=zt,i=Bt,a=Vt;yt(e,{name:n,Oc:e=>{var n=(T(),j)[e>>>2>>>0];return n=r(e+4,n*t,!0),Tr(e),n},Vc:(e,r)=>{if(typeof r!=`string`)throw new vt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Er(4+o+t);return(T(),j)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Tr,s),s},Uc:F,Wc(e){Tr(e)}})}function Ut(e,t){yt(e>>>=0,{zd:!0,name:t=mt(t>>>0),Oc:()=>{},Vc:()=>{}})}function Wt(e){Dr(e>>>0,!r,1,!n,131072,!1),De()}var Gt=e=>{if(!C)try{if(e(),!(0<M))try{i?wr()&&jr(h):xe(h)}catch(e){e instanceof fe||e==`unwind`||l(0,e)}}catch(e){e instanceof fe||e==`unwind`||l(0,e)}},Kt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function qt(e){e>>>=0,Kt||(Atomics.waitAsync((T(),A),e>>>2,e).value.then(Jt),e+=128,Atomics.store((T(),A),e>>>2,1))}var Jt=()=>Gt(()=>{var e=wr();e&&(qt(e),Nr())});function Yt(e,t){(e>>>=0)==t>>>0?setTimeout(Jt):i?postMessage({Zc:e,Sc:`checkMailbox`}):(e=Te[e])&&e.postMessage({Sc:`checkMailbox`})}var Xt=[];function Zt(e,t,n,r,i){for(t>>>=0,i>>>=0,Xt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(T(),re)[n++>>>0]?(T(),re)[n++>>>0]:(T(),ne)[n++>>>0];Xt.push(a)}return(t?Ai[t]:ki[e])(...Xt)}var Qt=()=>{M=0};function $t(e){e>>>=0,i?postMessage({Sc:`cleanupThread`,Nd:e}):Ee(Te[e])}function en(e){}var tn=e=>{try{e()}catch(e){le(e)}};function nn(e){var t=(...t)=>{sn.push(e);try{return e(...t)}finally{C||(sn.pop(),an&&rn===1&&sn.length===0&&(rn=0,M+=1,tn(Ti),typeof Fibers<`u`&&Fibers.Zd()))}};return un.set(e,t),t}var rn=0,an=null,on=0,sn=[],cn=new Map,ln=new Map,un=new Map,dn=0,fn=null,pn=[],mn=e=>function(e){if(!C){if(rn===0){var t=!1,n=!1;e((e=0)=>{if(!C&&(on=e,t=!0,n)){rn=2,tn(()=>Ei(an)),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.resume(),e=!1;try{var r=function(){var e=(T(),A)[an+8>>>2>>>0];return e=ln.get(e),e=un.get(e),--M,e()}()}catch(t){r=t,e=!0}var i=!1;if(!an){var a=fn;a&&(fn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(rn=1,an=function(){var e=Er(65548),t=e+12;if((T(),j)[e>>>2>>>0]=t,(T(),j)[e+4>>>2>>>0]=t+65536,t=sn[0],!cn.has(t)){var n=dn++;cn.set(t,n),ln.set(n,t)}return t=cn.get(t),(T(),A)[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.pause(),tn(()=>wi(an)))}else rn===2?(rn=0,tn(Di),Tr(an),an=null,pn.forEach(Gt)):le(`invalid state: ${rn}`);return on}}(t=>{e().then(t)});function hn(e){return e>>>=0,mn(async()=>Tt(await P(e)))}var gn=[],_n=e=>{var t=gn.length;return gn.push(e),t},vn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(T(),j)[t+4*r>>>2>>>0],o=gt[a];if(o===void 0)throw e=`parameter ${r}`,a=Sr(a),t=mt(a),Tr(a),new vt(`${e} has unknown type ${t}`);n[i]=o}return n},yn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((T(),j)[t>>>2>>>0]=Tt(r)),e},bn={},xn=e=>{var t=bn[e];return t===void 0?mt(e):t};function Sn(e,t,n){var[r,...i]=vn(e,t>>>0);t=r.Vc.bind(r);var a=i.map(e=>e.Uc.bind(e));e--;var o={toValue:P};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=xn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.zd||(o.toReturnWire=t,o.emval_returnValue=yn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,_n(Object.defineProperty(n,"name",{value:s}))}function Cn(e,t){return t>>>=0,(e=P(e>>>0))==P(t)}function wn(e){return(e>>>=0)?(e=xn(e),Tt(globalThis[e])):Tt(globalThis)}function Tn(e){return e=xn(e>>>0),Tt(t[e])}function En(e,t){return t>>>=0,e=P(e>>>0),t=P(t),Tt(e[t])}function Dn(e){9<(e>>>=0)&&(N[e+1]+=1)}function On(e,t,n,r,i){return gn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function kn(e,t,n,r,i){return On(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function An(){return Tt([])}function jn(e){e=P(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Tt(t)}function Mn(e){return Tt(xn(e>>>0))}function Nn(){return Tt({})}function Pn(e){for(var t=P(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}wt(e)}function Fn(e,t,n){t>>>=0,n>>>=0,e=P(e>>>0),t=P(t),n=P(n),e[t]=n}function In(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(T(),A)[t>>>2>>>0]=e.getUTCSeconds(),(T(),A)[t+4>>>2>>>0]=e.getUTCMinutes(),(T(),A)[t+8>>>2>>>0]=e.getUTCHours(),(T(),A)[t+12>>>2>>>0]=e.getUTCDate(),(T(),A)[t+16>>>2>>>0]=e.getUTCMonth(),(T(),A)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(T(),A)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),A)[t+28>>>2>>>0]=e}var Ln=e=>e%4==0&&(e%100!=0||e%400==0),Rn=[0,31,60,91,121,152,182,213,244,274,305,335],zn=[0,31,59,90,120,151,181,212,243,273,304,334];function Bn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(T(),A)[t>>>2>>>0]=e.getSeconds(),(T(),A)[t+4>>>2>>>0]=e.getMinutes(),(T(),A)[t+8>>>2>>>0]=e.getHours(),(T(),A)[t+12>>>2>>>0]=e.getDate(),(T(),A)[t+16>>>2>>>0]=e.getMonth(),(T(),A)[t+20>>>2>>>0]=e.getFullYear()-1900,(T(),A)[t+24>>>2>>>0]=e.getDay();var n=(Ln(e.getFullYear())?Rn:zn)[e.getMonth()]+e.getDate()-1|0;(T(),A)[t+28>>>2>>>0]=n,(T(),A)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(T(),A)[t+32>>>2>>>0]=e}function Vn(e){e>>>=0;var t=new Date((T(),A)[e+20>>>2>>>0]+1900,(T(),A)[e+16>>>2>>>0],(T(),A)[e+12>>>2>>>0],(T(),A)[e+8>>>2>>>0],(T(),A)[e+4>>>2>>>0],(T(),A)[e>>>2>>>0],0),n=(T(),A)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(T(),A)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(T(),A)[e+24>>>2>>>0]=t.getDay(),n=(Ln(t.getFullYear())?Rn:zn)[t.getMonth()]+t.getDate()-1|0,(T(),A)[e+28>>>2>>>0]=n,(T(),A)[e>>>2>>>0]=t.getSeconds(),(T(),A)[e+4>>>2>>>0]=t.getMinutes(),(T(),A)[e+8>>>2>>>0]=t.getHours(),(T(),A)[e+12>>>2>>>0]=t.getDate(),(T(),A)[e+16>>>2>>>0]=t.getMonth(),(T(),A)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Hn(e,t,n,r,a,o,s){return i?ve(16,1,e,t,n,r,a,o,s):-52}function Un(e,t,n,r,a,o){if(i)return ve(17,1,e,t,n,r,a,o)}var Wn={},Gn=()=>performance.timeOrigin+performance.now();function Kn(e,t){return i?ve(18,1,e,t):(Wn[e]&&(clearTimeout(Wn[e].id),delete Wn[e]),t&&(Wn[e]={id:setTimeout(()=>{delete Wn[e],Gt(()=>Mr(e,performance.timeOrigin+performance.now()))},t),Yd:t}),0)}function qn(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(T(),j)[e>>>2>>>0]=60*o,(T(),A)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Mt(e,n,17),Mt(t,r,17)):(Mt(e,r,17),Mt(t,n,17))}var Jn=()=>Date.now(),Yn=1;function Xn(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Yn)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(T(),re)[n>>>3>>>0]=BigInt(e),0}var Zn=[],Qn=(e,t)=>{Zn.length=0;for(var n;n=(T(),O)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,Zn.push(n==112?(T(),j)[t>>>2>>>0]:n==106?(T(),re)[t>>>3>>>0]:n==105?(T(),A)[t>>>2>>>0]:(T(),ne)[t>>>3>>>0]),t+=r?8:4}return Zn};function $n(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Ai[e](...t)}function er(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Ai[e](...t)}var tr=()=>{};function nr(e,t){return S($e(e>>>0,t>>>0))}var rr=()=>{throw M+=1,`unwind`};function ir(){return 4294901760}var ar=()=>navigator.hardwareConcurrency,or={},sr=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},cr=e=>{for(var t of e)(e=sr(t))&&(or[e]=t)};function lr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),cr(e),or.gd=sr(e[3]),or.Jd=e,or.gd}function ur(e){if(!(e=or[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}Tr(ur.hd??0),t=Nt(e)+1;var n=Er(t);return n&&Mt(e,n,t),ur.hd=n,ur.hd}function dr(e){e>>>=0;var t=(T(),O).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-Ae.buffer.byteLength+65535)/65536|0;try{Ae.grow(r),se();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function fr(e,t,n){if(e>>>=0,t>>>=0,or.gd==e)var r=or.Jd;else (r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),cr(r);for(var i=3;r[i]&&sr(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(T(),A)[t+4*e>>>2>>>0]=sr(r[e+i]);return e}var pr,mr={},hr=()=>{if(!pr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in mr)mr[e]===void 0?delete t[e]:t[e]=mr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);pr=n}return pr};function I(e,t){if(i)return ve(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of hr()){var o=t+r;(T(),j)[e+a>>>2>>>0]=o,r+=Mt(n,o,1/0)+1,a+=4}return 0}function gr(e,t){if(i)return ve(20,1,e,t);e>>>=0,t>>>=0;var n=hr();for(var r of((T(),j)[e>>>2>>>0]=n.length,e=0,n))e+=Nt(r)+1;return(T(),j)[t>>>2>>>0]=e,0}function _r(e){return i?ve(21,1,e):52}function vr(e,t,n,r){return i?ve(22,1,e,t,n,r):52}function L(e,t,n,r){return i?ve(23,1,e,t,n,r):70}var yr=[null,[],[]];function br(e,t,n,r){if(i)return ve(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(T(),j)[t>>>2>>>0],c=(T(),j)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(T(),O)[s+l>>>0],f=yr[u];d===0||d===10?((u===1?x:S)(Qe(f)),f.length=0):f.push(d)}a+=c}return(T(),j)[r>>>2>>>0]=a,0}function xr(e){return e>>>0}i||function(){for(var e=t.numThreads-1;e--;)ke();me.push(async()=>{var e=async function(){if(!i)return Promise.all(Se.map(Oe))}();he++,await e,--he==0&&ge&&(e=ge,ge=null,e())})}(),i||(Ae=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),se()),t.wasmBinary&&(p=t.wasmBinary),t.stackSave=()=>B(),t.stackRestore=e=>z(e),t.stackAlloc=e=>Ir(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(T(),D)[e>>>0]=t;break;case`i16`:(T(),ee)[e>>>1>>>0]=t;break;case`i32`:(T(),A)[e>>>2>>>0]=t;break;case`i64`:(T(),re)[e>>>3>>>0]=BigInt(t);break;case`float`:(T(),te)[e>>>2>>>0]=t;break;case`double`:(T(),ne)[e>>>3>>>0]=t;break;case`*`:(T(),j)[e>>>2>>>0]=t;break;default:le(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(T(),D)[e>>>0];case`i16`:return(T(),ee)[e>>>1>>>0];case`i32`:return(T(),A)[e>>>2>>>0];case`i64`:return(T(),re)[e>>>3>>>0];case`float`:return(T(),te)[e>>>2>>>0];case`double`:return(T(),ne)[e>>>3>>>0];case`*`:return(T(),j)[e>>>2>>>0];default:le(`invalid type for getValue: ${t}`)}},t.UTF8ToString=$e,t.stringToUTF8=Mt,t.lengthBytesUTF8=Nt;var Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,R,Pr,Fr,z,Ir,B,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki=[ye,be,qe,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,Hn,Un,Kn,I,gr,_r,vr,L,br],Ai={973212:(e,n,r,i,a)=>{if(t===void 0||!t.Xc)return 1;if((e=$e(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Xc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(T(),O).set(o,i>>>0);break;case 1:t.Qd?t.Qd(i,o):t.Id(i,o);break;default:return 4}return 0}catch{return 4}},974036:(e,n,r)=>{t.td(e,(T(),O).subarray(n>>>0,n+r>>>0))},974100:()=>t.Wd(),974142:e=>{t.sd(e)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:e=>t.Ad(e),974297:e=>t.Ed(e),974329:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r),!0)},974392:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r))},974449:()=>typeof wasmOffsetConverter<`u`,974506:e=>{t.$b(`Abs`,e,void 0)},974557:e=>{t.$b(`Neg`,e,void 0)},974608:e=>{t.$b(`Floor`,e,void 0)},974661:e=>{t.$b(`Ceil`,e,void 0)},974713:e=>{t.$b(`Reciprocal`,e,void 0)},974771:e=>{t.$b(`Sqrt`,e,void 0)},974823:e=>{t.$b(`Exp`,e,void 0)},974874:e=>{t.$b(`Erf`,e,void 0)},974925:e=>{t.$b(`Sigmoid`,e,void 0)},974980:(e,n,r)=>{t.$b(`HardSigmoid`,e,{alpha:n,beta:r})},975059:e=>{t.$b(`Log`,e,void 0)},975110:e=>{t.$b(`Sin`,e,void 0)},975161:e=>{t.$b(`Cos`,e,void 0)},975212:e=>{t.$b(`Tan`,e,void 0)},975263:e=>{t.$b(`Asin`,e,void 0)},975315:e=>{t.$b(`Acos`,e,void 0)},975367:e=>{t.$b(`Atan`,e,void 0)},975419:e=>{t.$b(`Sinh`,e,void 0)},975471:e=>{t.$b(`Cosh`,e,void 0)},975523:e=>{t.$b(`Asinh`,e,void 0)},975576:e=>{t.$b(`Acosh`,e,void 0)},975629:e=>{t.$b(`Atanh`,e,void 0)},975682:e=>{t.$b(`Tanh`,e,void 0)},975734:e=>{t.$b(`Not`,e,void 0)},975785:(e,n,r)=>{t.$b(`Clip`,e,{min:n,max:r})},975854:e=>{t.$b(`Clip`,e,void 0)},975906:(e,n)=>{t.$b(`Elu`,e,{alpha:n})},975964:e=>{t.$b(`Gelu`,e,void 0)},976016:e=>{t.$b(`Relu`,e,void 0)},976068:(e,n)=>{t.$b(`LeakyRelu`,e,{alpha:n})},976132:(e,n)=>{t.$b(`ThresholdedRelu`,e,{alpha:n})},976202:(e,n)=>{t.$b(`Cast`,e,{to:n})},976260:e=>{t.$b(`Add`,e,void 0)},976311:e=>{t.$b(`Sub`,e,void 0)},976362:e=>{t.$b(`Mul`,e,void 0)},976413:e=>{t.$b(`Div`,e,void 0)},976464:e=>{t.$b(`Pow`,e,void 0)},976515:e=>{t.$b(`Equal`,e,void 0)},976568:e=>{t.$b(`Greater`,e,void 0)},976623:e=>{t.$b(`GreaterOrEqual`,e,void 0)},976685:e=>{t.$b(`Less`,e,void 0)},976737:e=>{t.$b(`LessOrEqual`,e,void 0)},976796:(e,n,r,i,a)=>{t.$b(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},976971:(e,n,r,i,a)=>{t.$b(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977145:(e,n,r,i,a)=>{t.$b(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977319:(e,n,r,i,a)=>{t.$b(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977494:(e,n,r,i,a)=>{t.$b(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977668:(e,n,r,i,a)=>{t.$b(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977841:(e,n,r,i,a)=>{t.$b(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978014:(e,n,r,i,a)=>{t.$b(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978191:(e,n,r,i,a)=>{t.$b(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978371:(e,n,r,i,a)=>{t.$b(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978551:e=>{t.$b(`Where`,e,void 0)},978604:(e,n,r)=>{t.$b(`Transpose`,e,{perm:n?Array.from((T(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},978728:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:$e(r),format:i?`NHWC`:`NCHW`})},978861:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:$e(r),format:i?`NHWC`:`NCHW`})},978994:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(T(),D)[u>>>0],outputPadding:d?Array.from((T(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((T(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:$e(h)})},979427:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((T(),A).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((T(),A).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((T(),A).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((T(),A).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(T(),D)[l>>>0],outputPadding:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:$e(m)})},980088:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(T(),D)[u>>>0],outputPadding:d?Array.from((T(),A).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((T(),A).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:$e(h)})},980521:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((T(),A).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((T(),A).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((T(),A).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((T(),A).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(T(),D)[l>>>0],outputPadding:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:$e(m)})},981182:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981273:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((T(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},981752:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981843:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((T(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982322:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982409:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((T(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982884:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982971:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((T(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((T(),A).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},983446:(e,n,r,i,a)=>{t.$b(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},983550:e=>{t.$b(`MatMul`,e,void 0)},983604:(e,n,r,i)=>{t.$b(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983712:(e,n,r,i)=>{t.$b(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983820:(e,n)=>{t.$b(`Softmax`,e,{axis:n})},983883:(e,n)=>{t.$b(`Concat`,e,{axis:n})},983943:(e,n,r,i,a)=>{t.$b(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},984099:e=>{t.$b(`Expand`,e,void 0)},984153:(e,n)=>{t.$b(`Gather`,e,{axis:Number(n)})},984224:(e,n)=>{t.$b(`GatherElements`,e,{axis:Number(n)})},984303:(e,n)=>{t.$b(`GatherND`,e,{batch_dims:Number(n)})},984382:(e,n,r,i,a,o,s,c,l,u,d)=>{t.$b(`Resize`,e,{antialias:n,axes:r?Array.from((T(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:$e(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:$e(l),mode:$e(u),nearestMode:$e(d)})},984744:(e,n,r,i,a,o,s)=>{t.$b(`Slice`,e,{starts:n?Array.from((T(),A).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},985008:e=>{t.$b(`Tile`,e,void 0)},985060:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985174:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985288:e=>{t.$b(`Range`,e,void 0)},985341:(e,n)=>{t.$b(`Einsum`,e,{equation:$e(n)})},985422:(e,n,r,i,a)=>{t.$b(`Pad`,e,{mode:n,value:r,pads:i?Array.from((T(),A).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},985565:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985734:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985903:(e,n,r)=>{t.$b(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},986e3:(e,n,r)=>{t.$b(`DequantizeLinear`,e,{axis:n,blockSize:r})},986090:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:$e(r),padding_mode:$e(i),format:a?`NHWC`:`NCHW`})},986260:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:$e(r),padding_mode:$e(i),format:a?`NHWC`:`NCHW`})},986430:(e,n)=>{t.$b(`ScatterND`,e,{reduction:$e(n)})},986515:(e,n,r,i,a,o,s,c,l)=>{t.$b(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((T(),A).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},986787:e=>{t.$b(`BiasAdd`,e,void 0)},986842:e=>{t.$b(`BiasSplitGelu`,e,void 0)},986903:e=>{t.$b(`FastGelu`,e,void 0)},986959:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.$b(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((T(),A).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((T(),A).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((T(),A).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((T(),A).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(T(),D)[Number(p)>>>0],activation:$e(m),activation_params:h?Array.from((T(),te).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},987543:e=>{t.$b(`Gelu`,e,void 0)},987595:(e,n,r,i,a,o,s,c,l)=>{t.$b(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},987812:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},987923:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},988034:(e,n,r,i,a,o)=>{t.$b(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},988161:(e,n,r,i,a,o)=>{t.$b(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},988320:(e,n)=>{t.$b(`QuickGelu`,e,{alpha:n})},988384:(e,n,r,i,a)=>{t.$b(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},988523:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988625:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988727:(e,n,r,i)=>{t.$b(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},988848:e=>{t.Fd(e)},988882:(e,n)=>t.Hd(Number(e),Number(n),t.Yc.Kd,t.Yc.errors)};function ji(e,n,r){return mn(async()=>{await t.Dd(Number(e),Number(n),Number(r))})}function Mi(){return typeof wasmOffsetConverter<`u`}function Ni(e,t,n,r){var i=B();try{return Xr(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function Pi(e,t,n){var r=B();try{return Kr(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;R(1,0)}}function Fi(e){var t=B();try{Ur(e)}catch(e){if(z(t),e!==e+0)throw e;R(1,0)}}function Ii(e,t){var n=B();try{return Hr(e,t)}catch(e){if(z(n),e!==e+0)throw e;R(1,0)}}function Li(e,t,n){var r=B();try{Vr(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;R(1,0)}}function Ri(e,t){var n=B();try{Zr(e,t)}catch(e){if(z(n),e!==e+0)throw e;R(1,0)}}function zi(e,t,n,r,i,a,o){var s=B();try{return Jr(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;R(1,0)}}function Bi(e,t,n,r,i,a){var o=B();try{Wr(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;R(1,0)}}function Vi(e,t,n,r){var i=B();try{Yr(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function Hi(e,t,n,r,i){var a=B();try{Gr(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;R(1,0)}}function Ui(e,t,n,r,i,a,o){var s=B();try{$r(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;R(1,0)}}function Wi(e,t,n,r,i,a,o){var s=B();try{ei(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;R(1,0)}}function Gi(e,t,n,r,i,a,o,s){var c=B();try{ii(e,t,n,r,i,a,o,s)}catch(e){if(z(c),e!==e+0)throw e;R(1,0)}}function Ki(e,t,n,r,i){var a=B();try{return Qr(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;R(1,0)}}function qi(e,t,n){var r=B();try{return ai(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;R(1,0)}}function Ji(e,t,n,r,i,a,o,s){var c=B();try{oi(e,t,n,r,i,a,o,s)}catch(e){if(z(c),e!==e+0)throw e;R(1,0)}}function Yi(e,t,n,r,i,a,o,s,c,l,u,d){var f=B();try{ti(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(z(f),e!==e+0)throw e;R(1,0)}}function Xi(e,t,n,r,i,a){var o=B();try{return ni(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;R(1,0)}}function Zi(e,t,n){var r=B();try{return si(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;return R(1,0),0n}}function Qi(e,t,n,r,i,a,o,s,c){var l=B();try{qr(e,t,n,r,i,a,o,s,c)}catch(e){if(z(l),e!==e+0)throw e;R(1,0)}}function V(e){var t=B();try{return ci(e)}catch(e){if(z(t),e!==e+0)throw e;R(1,0)}}function $i(e,t){var n=B();try{return Ci(e,t)}catch(e){if(z(n),e!==e+0)throw e;return R(1,0),0n}}function H(e){var t=B();try{return li(e)}catch(e){if(z(t),e!==e+0)throw e;return R(1,0),0n}}function U(e,t,n,r){var i=B();try{return hi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function ea(e,t,n,r,i){var a=B();try{return gi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;R(1,0)}}function W(e,t,n,r,i,a){var o=B();try{return _i(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;R(1,0)}}function ta(e,t,n,r,i,a){var o=B();try{return vi(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;R(1,0)}}function na(e,t,n,r,i,a,o,s){var c=B();try{return ri(e,t,n,r,i,a,o,s)}catch(e){if(z(c),e!==e+0)throw e;R(1,0)}}function ra(e,t,n,r,i){var a=B();try{return yi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;return R(1,0),0n}}function ia(e,t,n,r){var i=B();try{return bi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function aa(e,t,n,r){var i=B();try{return xi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function oa(e,t,n,r,i,a,o,s,c,l,u,d){var f=B();try{return Si(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(z(f),e!==e+0)throw e;R(1,0)}}function sa(e,t,n,r,i,a,o,s,c,l,u){var d=B();try{pi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(z(d),e!==e+0)throw e;R(1,0)}}function ca(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=B();try{mi(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(z(g),e!==e+0)throw e;R(1,0)}}function la(e,t,n){var r=B();try{return ui(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;R(1,0)}}function ua(e,t,n){var r=B();try{return di(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;R(1,0)}}function da(e,t,n,r){var i=B();try{fi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;R(1,0)}}function fa(){if(0<he)ge=fa;else if(i)g?.(t),ce();else{for(var e=me;0<e.length;)e.shift()(t);0<he?ge=fa:(t.calledRun=!0,C||(ce(),g?.(t)))}}return i||(Oi=await de(),fa()),t.PTR_SIZE=4,oe?t:new Promise((e,t)=>{g=e,_=t})}var hr,I,gr,_r,vr,L,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,R,Pr,Fr,z,Ir,B,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,V,$i,H,U,ea,W,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,G,ga,_a,va,ya,ba,xa,Sa,Ca,K,wa,Ta,Ea,q,Da,Oa,ka,Aa,J,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,Y,mo,ho,go,_o,X,vo,Z,Q,yo,bo,xo,So,$,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh=t((()=>{
/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2020 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
p(),hr=Object.defineProperty,I=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyNames,_r=Object.prototype.hasOwnProperty,vr=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),L=(e,t)=>()=>(e&&(t=e(e=0)),t),yr=(e,t)=>{for(var n in t)hr(e,n,{get:t[n],enumerable:!0})},br=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of gr(t))!_r.call(e,i)&&i!==n&&hr(e,i,{get:()=>t[i],enumerable:!(r=I(t,i))||r.enumerable});return e},xr=e=>br(hr({},`__esModule`,{value:!0}),e),Dr=L(()=>{"use strict";Sr=new Map,Cr=[],wr=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Sr.get(e);if(r===void 0)Sr.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Cr.indexOf(e);t!==-1&&Cr.splice(t,1);for(let t=0;t<Cr.length;t++)if(Sr.get(Cr[t]).priority<=n){Cr.splice(t,0,e);return}Cr.push(e)}return}throw TypeError(`not a valid backend`)},Tr=async e=>{let t=Sr.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Er=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Cr:n,i,a=[],o=new Set;for(let e of r){let t=await Tr(e);typeof t==`string`?a.push({name:e,err:t}):(i||(i=t),i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Or=L(()=>{"use strict";Dr()}),Ar=L(()=>{"use strict";kr=`1.26.0`}),Nr=L(()=>{"use strict";Ar(),jr=`warning`,Mr={wasm:{},webgl:{},webgpu:{},versions:{common:kr},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);jr=e}},get logLevel(){return jr}},Object.defineProperty(Mr,"logLevel",{enumerable:!0})}),Pr=L(()=>{"use strict";Nr(),R=Mr}),Ir=L(()=>{"use strict";Fr=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},z=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),Hr=L(()=>{"use strict";Qr(),B=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new Zr(`float32`,u,[1,4,n,r]):new Zr(`float32`,u,[1,3,n,r])},Lr=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,B(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(B(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return B(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},Rr=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new Zr({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},zr=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Zr({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},Br=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Zr({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},Vr=(e,t,n)=>new Zr({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),qr=L(()=>{"use strict";Ur=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),Wr=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),Gr=!1,Kr=()=>{if(!Gr){Gr=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(Ur.set(`int64`,BigInt64Array),Wr.set(BigInt64Array,`int64`)),t&&(Ur.set(`uint64`,BigUint64Array),Wr.set(BigUint64Array,`uint64`)),r?(Ur.set(`float16`,n),Wr.set(n,`float16`)):Ur.set(`float16`,Uint16Array)}}}),Xr=L(()=>{"use strict";Qr(),Jr=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},Yr=(e,t)=>{switch(e.location){case`cpu`:return new Zr(e.type,e.data,t);case`cpu-pinned`:return new Zr({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new Zr({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new Zr({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new Zr({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Qr=L(()=>{"use strict";Ir(),Hr(),qr(),Xr(),Zr=class{constructor(e,t,n){Kr();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=Ur.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=Ur.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=Wr.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=Jr(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return Lr(e,t)}static fromTexture(e,t){return Rr(e,t)}static fromGpuBuffer(e,t){return zr(e,t)}static fromMLTensor(e,t){return Br(e,t)}static fromPinnedBuffer(e,t,n){return Vr(e,t,n)}toDataURL(e){return Fr(this,e)}toImageData(e){return z(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return Yr(this,e)}}}),ei=L(()=>{"use strict";Qr(),$r=Zr}),si=L(()=>{"use strict";Nr(),ti=(e,t)=>{(typeof Mr.trace>`u`?!Mr.wasm.trace:!Mr.trace)||console.timeStamp(`${e}::ORT::${t}`)},ni=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),ti(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},ri=e=>{(typeof Mr.trace>`u`?!Mr.wasm.trace:!Mr.trace)||ni(`BEGIN`,e)},ii=e=>{(typeof Mr.trace>`u`?!Mr.wasm.trace:!Mr.trace)||ni(`END`,e)},ai=e=>{(typeof Mr.trace>`u`?!Mr.wasm.trace:!Mr.trace)||console.time(`ORT::${e}`)},oi=e=>{(typeof Mr.trace>`u`?!Mr.wasm.trace:!Mr.trace)||console.timeEnd(`ORT::${e}`)}}),li=L(()=>{"use strict";Dr(),ei(),si(),ci=class e{constructor(e){this.handler=e}async run(e,t,n){ri(),ai(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof $r||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof $r)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof $r)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof $r?s[e]=t:s[e]=new $r(t.type,t.data,t.dims)}return oi(`InferenceSession.run`),ii(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){ri(),ai(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Er(o),l=await s.createInferenceSessionHandler(a,c);return oi(`InferenceSession.create`),ii(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),di=L(()=>{"use strict";li(),ui=ci}),fi=L(()=>{"use strict";}),pi=L(()=>{"use strict";}),mi=L(()=>{"use strict";}),hi=L(()=>{"use strict";}),gi={},yr(gi,{InferenceSession:()=>ui,TRACE:()=>ti,TRACE_EVENT_BEGIN:()=>ai,TRACE_EVENT_END:()=>oi,TRACE_FUNC_BEGIN:()=>ri,TRACE_FUNC_END:()=>ii,Tensor:()=>$r,env:()=>R,registerBackend:()=>wr}),_i=L(()=>{"use strict";Or(),Pr(),di(),ei(),fi(),pi(),si(),mi(),hi()}),vi=L(()=>{"use strict";}),yi={},yr(yi,{default:()=>Si}),Ci=L(()=>{"use strict";zm(),Qi(),Hi(),bi=`ort-wasm-proxy-worker`,xi=globalThis.self?.name===bi,xi&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:Xi(n.wasm).then(()=>{Dm(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;Om(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=Mm(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;Nm(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:Pm(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;Im(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Rm([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:Lm(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Si=xi?null:e=>new Worker(e??ji,{type:`module`,name:bi})}),wi={},yr(wi,{default:()=>Ti}),Di=L(()=>{"use strict";Ti=mr,Ei=globalThis.self?.name?.startsWith(`em-pthread`),Ei&&mr()}),Hi=L(()=>{"use strict";vi(),Oi=typeof location>`u`?void 0:location.origin,ki=self.location.href>`file:`&&self.location.href<`file;`,Ai=()=>ki?new URL(new URL(`ort.bundle.min.mjs`,self.location.href).href,Oi).href:self.location.href,ji=Ai(),Mi=()=>{if(ji&&!ji.startsWith(`blob:`))return ji.substring(0,ji.lastIndexOf(`/`)+1)},Ni=(e,t)=>{try{let n=t??ji;return(n?new URL(e,n):new URL(e)).origin===Oi}catch{return!1}},Pi=(e,t)=>{let n=t??ji;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Fi=(e,t)=>`${t??`./`}${e}`,Ii=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},Li=async e=>(await import(e)).default,Ri=(Ci(),xr(yi)).default,zi=async()=>{if(!ji)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(Ni(ji))return[void 0,Ri()];let e=await Ii(ji);return[e,Ri(e)]},Bi=(Di(),xr(wi)).default,Vi=async(e,t,n,r)=>{let i=Bi&&!(e||t);if(i)if(ji)i=Ni(ji)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,Bi];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??Pi(r,t),a=n&&i&&!Ni(i,t),o=a?await Ii(i):i??Fi(r,t);return[a?o:void 0,await Li(o)]}}}),Qi=L(()=>{"use strict";Hi(),Wi=!1,Gi=!1,Ki=!1,qi=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Ji=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Yi=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Xi=async e=>{if(Wi)return Promise.resolve();if(Gi)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(Ki)throw Error(`previous call to 'initializeWebAssembly()' failed.`);Gi=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!Yi())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!Ji())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=qi();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await Vi(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=Mi();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{Gi=!1,Wi=!0,Ui=t,e(),d&&URL.revokeObjectURL(d)},e=>{Gi=!1,Ki=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Zi=()=>{if(Wi&&Ui)return Ui;throw Error(`WebAssembly is not initialized yet.`)}}),U=L(()=>{"use strict";Qi(),V=(e,t)=>{let n=Zi(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},$i=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)$i(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},H=e=>{let t=Zi(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),W=L(()=>{"use strict";Qi(),U(),ea=e=>{let t=Zi(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=V(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&H(`Can't create run options.`),e?.extra!==void 0&&$i(e.extra,``,new WeakSet,(e,i)=>{let a=V(e,r),o=V(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&H(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),sa=L(()=>{"use strict";Qi(),U(),ta=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},na=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},ra=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly=`1`),e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},ia=(e,t,n,r)=>{let i=V(t,r),a=V(n,r);Zi()._OrtAddSessionConfigEntry(e,i,a)!==0&&H(`Can't set a session config entry: ${t} - ${n}.`)},aa=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,ia(e,`session.disable_quant_qdq`,`1`,n),ia(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&ia(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);ia(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=V(r,n),o=i.length,s=0,c=0;if(o>0){s=Zi()._malloc(o*Zi().PTR_SIZE),n.push(s),c=Zi()._malloc(o*Zi().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)Zi().setValue(s+e*Zi().PTR_SIZE,i[e][0],`*`),Zi().setValue(c+e*Zi().PTR_SIZE,i[e][1],`*`)}await Zi()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&H(`Can't append execution provider: ${r}.`)}},oa=async e=>{let t=Zi(),n=0,r=[],i=e||{};ra(i);try{let e=ta(i.graphOptimizationLevel??`all`),a=na(i.executionMode??`sequential`),o=typeof i.logId==`string`?V(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?V(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&H(`Can't create session options.`),i.executionProviders&&await aa(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);ia(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=V(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&H(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&$i(i.extra,``,new WeakSet,(e,t)=>{ia(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&H(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),G=L(()=>{"use strict";ca=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},la=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},ua=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},da=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},fa=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},pa=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,ma=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,ha=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),_a=L(()=>{"use strict";vi(),ga=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),wa=L(()=>{"use strict";G(),va=[`V`,`I`,`W`,`E`,`F`],ya=(e,t)=>{console.log(`[${va[e]},${new Date().toISOString()}]${t}`)},Sa=(e,t)=>{ba=e,xa=t},Ca=(e,t)=>{let n=fa(e);n>=fa(ba)&&ya(n,typeof t==`function`?t():t)},K=(...e)=>{xa&&Ca(...e)}}),J=L(()=>{"use strict";Ta=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Ea=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=Ta.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},q=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},Da=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},Oa=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Ea.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},ka=-34028234663852886e22,Aa=34028234663852886e22}),Ma=L(()=>{"use strict";G(),ja=(e,t)=>new(da(t))(e)}),Wa=L(()=>{"use strict";G(),wa(),Na=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),Pa=(e,t)=>{if(t===`int32`)return e;let n=Na.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(da(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},Fa=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},Ia=1,La=()=>Ia++,Ra=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),za=(e,t)=>{let n=Na.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Ba=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return za(this.dataType,this.tensorShape)}destroy(){K(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=Fa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},Va=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=Ra.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);K(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==za(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=Pa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else K(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Fa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},Ha=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=La();return this.tensorTrackersById.set(e,new Va(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){K(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){K(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=La(),o=new Ba({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new Va(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){K(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}K(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Ba({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Ua=(...e)=>new Ha(...e)}),Ja=L(()=>{"use strict";G(),Qi(),Ma(),Wa(),wa(),Ga=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),Ka=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},qa=class{constructor(e){this.tensorManager=Ua(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Sa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){K(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){K(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)K(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>Ka(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){K(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Ga.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){K(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Ga.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!Zi().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);K(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ja(n,t)}}registerMLTensor(e,t,n,r){let i=Ga.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return K(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw Error(`External mounted files are not available.`);let s=e;e.startsWith(`./`)&&(s=e.substring(2));let c=a.get(s);if(!c)throw Error(`File with name ${s} not found in preloaded files.`);if(t+n>c.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let l=c.slice(t,t+n).buffer,u;switch(i.dataType){case`float32`:u=new Float32Array(l);break;case`float16`:u=typeof Float16Array<`u`&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case`int32`:u=new Int32Array(l);break;case`uint32`:u=new Uint32Array(l);break;case`int64`:if(o){let e=Pa(new Uint8Array(l),`int64`);u=new Int32Array(e.buffer),i.dataType=`int32`}else u=new BigInt64Array(l);break;case`uint64`:u=new BigUint64Array(l);break;case`int8`:u=new Int8Array(l);break;case`int4`:case`uint4`:case`uint8`:u=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return K(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?`(Note: it was int64 data type and registered to int32 as workaround)`:``}`),r.constant(i,u)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=Ga.get(ca(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),Ya=L(()=>{"use strict";}),ao=L(()=>{"use strict";wa(),Ya(),Xa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Za=[],Qa=e=>Math.ceil(Number(e)/16)*16,$a=e=>{for(let t=0;t<Za.length;t++){let n=Za[t];if(e<=n)return n}return Math.ceil(e/16)*16},eo=1,to=()=>eo++,no=async(e,t,n,r)=>{let i=Qa(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},ro=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Xa)Za.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Qa(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),K(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=Qa(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return K(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=to();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),K(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),K(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=$a(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:to(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),K(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return K(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await no(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Xa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(K(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},io=(...e)=>new ro(...e)}),co=L(()=>{"use strict";oo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`)),this.key}},so=e=>new oo(e)}),$=L(()=>{"use strict";G(),J(),lo=64,uo=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},fo=(e,t=1)=>{let n=uo(e,t);return typeof n==`string`?n:n[0]},po=(e,t=1)=>{let n=uo(e,t);return typeof n==`string`?n:n[1]},Y=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:q.computeStrides(e)})}),t},mo=e=>e%4==0?4:e%2==0?2:1,ho=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,go=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,_o=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,vo=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=uo(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${X(g,e,o)};
    let rest${e} = current % ${X(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${X(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${X(e,t,o)}`,T=(e,t,n)=>o<2?`${e}=${n};`:`${X(e,t,o)}=${n};`,E={},D=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in E)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return E[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},O=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),ee=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),k=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${ee(`i2o_${e}(indices)`)};
  }`,A=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))});
  }`,j=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?ee(`0u`):o===1?ee(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},te=t=>o<2?ee(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ne=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${O(`i2o_${e}(indices)`,`value`)}
  }`,re=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(re),t=!0),p.setByIndices&&(e.push(ne),t=!0),p.get&&(e.push(A),t=!0),p.getByIndices&&(e.push(k),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${q.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:D,indices:C,indicesGet:w,indicesSet:T,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?O(`0u`,n):o===1?O(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:O,setByIndices:(t,n)=>o<2?O(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:j,getByOffset:ee,getByIndices:te,usage:r,name:e,strides:g,shape:h,rank:o}},Z=(e,t,n,r=1)=>vo(e,t,n,`input`,r),Q=(e,t,n,r=1)=>vo(e,t,n,`output`,r),yo=(e,t,n)=>vo(e,t,n,`atomicOutput`,1),bo=(e,t,n,r=1)=>vo(e,t,n,`internal`,r),xo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=lo){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},So=(e,t)=>new xo(e,t)}),Mo=L(()=>{"use strict";G(),J(),co(),$(),Co=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},wo=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,To=(e,t)=>q.sortBasedOnPerm(e,wo(e.length,t)),Eo=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Do=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Oo=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},ko=(e,t)=>{let n=e.dataType,r=e.dims.length,i=wo(r,t),a=To(e.dims,i),o=e.dims,s=a,c=r<2||Oo(i,e.dims),l;if(c)return l=e=>{let t=Z(`input`,n,o,4),r=Q(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Do(e.dims,i),f=q.areEqual(d,[2,3,1]),p=q.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=Z(`a`,n,o.length),r=Q(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...Y(o,s)]}},getShaderSource:l}):(l=e=>{let t=Z(`a`,n,o.length),a=Q(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Eo(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...Y(o,s)]}},getShaderSource:l})},Ao=(e,t)=>{Co(e.inputs,t.perm),e.compute(ko(e.inputs[0],t.perm))},jo=e=>so({perm:e.perm})}),es=L(()=>{"use strict";G(),J(),$(),Ds(),Mo(),No={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Po={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Fo={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Io={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Lo=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Ro=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},zo=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Bo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Vo=(e,t)=>{let n=[];if(!Bo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},Ho=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=q.size(a),l=q.size(o),u=Z(`_A`,n[0].dataType,s),d=Q(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fo[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${No[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Po[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Io[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},Uo=(e,t,n,r)=>{let i=e.inputs.length===1?n:is(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=q.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=Vo(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(ko(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Lo(s.length,c.dims.length));let[u,d]=Ro(c.dims,s),f=u;i.keepDims&&(f=zo(u,o)),e.compute(Ho(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},Wo=(e,t)=>{Uo(e,`ReduceMeanShared`,t,`mean`)},Go=(e,t)=>{Uo(e,`ReduceL1Shared`,t,`l1`)},Ko=(e,t)=>{Uo(e,`ReduceL2Shared`,t,`l2`)},qo=(e,t)=>{Uo(e,`ReduceLogSumExpShared`,t,`logSumExp`)},Jo=(e,t)=>{Uo(e,`ReduceMaxShared`,t,`max`)},Yo=(e,t)=>{Uo(e,`ReduceMinShared`,t,`min`)},Xo=(e,t)=>{Uo(e,`ReduceProdShared`,t,`prod`)},Zo=(e,t)=>{Uo(e,`ReduceSumShared`,t,`sum`)},Qo=(e,t)=>{Uo(e,`ReduceSumSquareShared`,t,`sumSquare`)},$o=(e,t)=>{Uo(e,`ReduceLogSumShared`,t,`logSum`)}}),Ds=L(()=>{"use strict";G(),J(),co(),$(),es(),ts=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},ns=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],rs=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=q.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=q.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=Z(`_A`,n[0].dataType,u),s=Q(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Y(l,c)]})}},is=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),so({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},as=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:is(i,n);e.compute(rs(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?ns:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},os=(e,t)=>{ts(e.inputs),as(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},ss=(e,t)=>{ts(e.inputs),as(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},cs=(e,t)=>{ts(e.inputs),as(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},ls=(e,t)=>{ts(e.inputs),as(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},us=(e,t)=>{ts(e.inputs),as(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},ds=(e,t)=>{ts(e.inputs),as(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},fs=(e,t)=>{ts(e.inputs),as(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},ps=(e,t)=>{ts(e.inputs),as(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},ms=(e,t)=>{ts(e.inputs),as(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},hs=(e,t)=>{ts(e.inputs),as(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},gs=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},_s=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ds(e,t):Wo(e,t)},vs=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ss(e,t):Go(e,t)},ys=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cs(e,t):Ko(e,t)},bs=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ls(e,t):qo(e,t)},xs=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?us(e,t):Jo(e,t)},Ss=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fs(e,t):Yo(e,t)},Cs=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ps(e,t):Xo(e,t)},ws=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ms(e,t):Zo(e,t)},Ts=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hs(e,t):Qo(e,t)},Es=(e,t)=>{gs(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?os(e,t):$o(e,t)}}),Ms=L(()=>{"use strict";G(),co(),Ds(),Os=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},ks=(e,t)=>{Os(e.inputs),e.compute(rs(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},As=(e,t)=>{Os(e.inputs),e.compute(rs(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},js=e=>so(e)}),Vs=L(()=>{"use strict";G(),J(),Ya(),$(),Ns=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ps=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Fs=(e,t,n,r,i,a,o,s)=>{let c=mo(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=fo(e.dataType,c),m=po(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=Q(`x`,e.dataType,e.dims,c),r=[n],i=o?Z(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?Z(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=po(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ps(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},Is=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=mo(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&q.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=Z(`q`,t.dataType,t.dims,g),o=[a,Z(`key`,n.dataType,n.dims,g)];if(b){let e=Z(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(Z(`attention_bias`,i.dataType,i.dims));let l=s?Z(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?Z(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=Q(`output`,t.dataType,u),_=[h];d&&_.push(Q(`present_key`,t.dataType,p,g));let v=po(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ps(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Ls=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&q.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=Z(`probs`,t.dataType,t.dims),a=[i,Z(`v`,n.dataType,n.dims)];_&&a.push(Z(`past_value`,r.dataType,r.dims));let c=o?Z(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?Z(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[Q(`output`,t.dataType,m)];return d&&f.push(Q(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ps(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Rs=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&q.size(c.dims)>0?c:void 0,v=[t,n];p&&q.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(Is(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Fs(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&q.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(Ls(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},zs=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=Q(`output_q`,s[0].dataType,n),r=Q(`output_k`,s[0].dataType,n),i=Q(`output_v`,s[0].dataType,n),a=Z(`input`,s[0].dataType,s[0].dims),o=Z(`weight`,s[1].dataType,s[1].dims),c=Z(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},Bs=(e,t)=>{let n=Ns(e.inputs,t),[r,i,a]=zs(e,n);return Rs(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Ks=L(()=>{"use strict";_i(),G(),J(),co(),$(),Hs=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},Us=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?mo(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=q.size(a)/o,l=r,u=l?a.length:a,d=Z(`x`,e[0].dataType,e[0].dims,o),f=Z(`scale`,e[1].dataType,e[1].dims,s),p=Z(`bias`,e[2].dataType,e[2].dims,s),m=Z(`inputMean`,e[3].dataType,e[3].dims,s),h=Z(`inputVar`,e[4].dataType,e[4].dims,s),g=Q(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...Y(a)]:[{type:12,data:c}]})}},Ws=e=>so(e),Gs=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Ws({...t,outputCount:r});if(R.webgpu.validateInputContent&&Hs(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(Us(n,i))}}),Xs=L(()=>{"use strict";J(),$(),qs=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Js=e=>{let t=e[0].dims,n=e[0].dims[2],r=q.size(t)/4,i=e[0].dataType,a=Z(`input`,i,t,4),o=Z(`bias`,i,[n],4),s=Z(`residual`,i,t,4),c=Q(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},Ys=e=>{qs(e.inputs),e.compute(Js(e.inputs))}}),Hc=L(()=>{"use strict";G(),J(),co(),$(),Zs=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=Z(`inputData`,n,[s],4),u=Q(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},Qs=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>Zs(t,q.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(q.size(t[0].dims)/64/4)},programUniforms:c})}},$s=e=>{e.compute(Qs(e.inputs[0],`Abs`,`abs`))},ec=e=>{e.compute(Qs(e.inputs[0],`Acos`,`acos`))},tc=e=>{e.compute(Qs(e.inputs[0],`Acosh`,`acosh`))},nc=e=>{e.compute(Qs(e.inputs[0],`Asin`,`asin`))},rc=e=>{e.compute(Qs(e.inputs[0],`Asinh`,`asinh`))},ic=e=>{e.compute(Qs(e.inputs[0],`Atan`,`atan`))},ac=e=>{e.compute(Qs(e.inputs[0],`Atanh`,`atanh`))},oc=e=>so(e),sc=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Qs(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},cc=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return so({min:t,max:n})},lc=(e,t)=>{let n=t||cc(e.inputs),r=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},uc=e=>{e.compute(Qs(e.inputs[0],`Ceil`,`ceil`))},dc=e=>{e.compute(Qs(e.inputs[0],`Cos`,`cos`))},fc=e=>{e.compute(Qs(e.inputs[0],`Cosh`,`cosh`))},pc=e=>so(e),mc=(e,t)=>{let n=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},hc=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,gc=e=>{let t=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,hc(t)))},_c=e=>{e.compute(Qs(e.inputs[0],`Exp`,`exp`))},vc=e=>{e.compute(Qs(e.inputs[0],`Floor`,`floor`))},yc=e=>{let t=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,hc(t)))},bc=(e,t)=>{let n=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},xc=e=>{e.compute(Qs(e.inputs[0],`Not`,e=>`!${e}`))},Sc=e=>{e.compute(Qs(e.inputs[0],`Neg`,e=>`-${e}`))},Cc=e=>{e.compute(Qs(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},wc=e=>{let t=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Tc=e=>{e.compute(Qs(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Ec=e=>so(e),Dc=(e,t)=>{let n=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Oc=e=>{e.compute(Qs(e.inputs[0],`Sin`,`sin`))},kc=e=>{e.compute(Qs(e.inputs[0],`Sinh`,`sinh`))},Ac=e=>{e.compute(Qs(e.inputs[0],`Sqrt`,`sqrt`))},jc=e=>{e.compute(Qs(e.inputs[0],`Tan`,`tan`))},Mc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Nc=e=>{e.compute(Qs(e.inputs[0],`Tanh`,Mc))},Pc=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Mc(`v`)};
}
`,Fc=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Ic=e=>{let t=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`FastGelu`,Fc,Pc(t),void 0,e.inputs[0].dataType))},Lc=(e,t)=>{let n=po(e.inputs[0].dataType);return e.compute(Qs(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Rc=e=>{e.compute(Qs(e.inputs[0],`Log`,`log`))},zc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Bc=e=>`quick_gelu_impl(${e})`,Vc=(e,t)=>{let n=po(e.inputs[0].dataType);e.compute(Qs(e.inputs[0],`QuickGelu`,Bc,zc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Kc=L(()=>{"use strict";J(),$(),Hc(),Uc=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Wc=e=>{let t=e[0].dims.slice();t[2]/=2;let n=Z(`input`,e[0].dataType,e[0].dims,4),r=Z(`bias`,e[0].dataType,[e[0].dims[2]],4),i=Q(`output`,e[0].dataType,t,4),a=q.size(t)/4,o=fo(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${hc(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},Gc=e=>{Uc(e.inputs),e.compute(Wc(e.inputs))}}),ol=L(()=>{"use strict";G(),J(),$(),qc=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=Q(`outputData`,u,r.length,4),h=Z(`aData`,c,t.length,4),g=Z(`bData`,l,n.length,4),_;if(i)if(a){let e=q.size(t)===1,r=q.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},Jc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!q.areEqual(s,c),u=s,d=q.size(s),f=!1,p=!1,m=[l];if(l){let e=Ea.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=q.size(u);let t=q.size(s)===1,n=q.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>qc(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(u)/4)},...Y(s,c,u)]})}},Yc=(e,t,n,r,i,a)=>{e.compute(Jc(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},Xc=e=>{Yc(e,`Add`,(e,t)=>`${e}+${t}`)},Zc=e=>{Yc(e,`Div`,(e,t)=>`${e}/${t}`)},Qc=e=>{Yc(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},$c=e=>{Yc(e,`Mul`,(e,t)=>`${e}*${t}`)},el=e=>{let t=Z(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;Yc(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},tl=e=>{Yc(e,`Sub`,(e,t)=>`${e}-${t}`)},nl=e=>{Yc(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},rl=e=>{Yc(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},il=e=>{Yc(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},al=e=>{Yc(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),pl=L(()=>{"use strict";G(),J(),co(),$(),sl=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},cl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ll=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},ul=(e,t,n,r)=>{let i=q.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=Z(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...Y(e[t].dims));u.push(...Y(n));let d=Q(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${cl(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ll(o,d)}
  }`}},dl=(e,t)=>{let n=e.inputs,r=n[0].dims,i=q.normalizeAxis(t.axis,r.length);sl(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>q.size(e.dims)>0);e.compute(ul(o,i,a,n[0].dataType),{inputs:o})},fl=e=>so({axis:e.axis})}),vl=L(()=>{"use strict";G(),J(),ml=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},hl=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},gl=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},_l=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[ka,Aa];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),xl=L(()=>{"use strict";yl=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},bl=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Cl=L(()=>{"use strict";Sl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),El=L(()=>{"use strict";G(),J(),$(),vl(),wl=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${X(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,X(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Tl=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=mo(l),f=mo(u),p=mo(c),m=q.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[q.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return hl(t,v),v.push(...Y(g,o,s)),h&&v.push(...Y(e[2].dims)),v.push(...Y(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=bo(`batch_dims`,e[0].dataType,g.length),c=Z(`a`,e[0].dataType,o.length,f),l=Z(`b`,e[1].dataType,s.length,d),u=Q(`output`,e[0].dataType,_.length,d),m=fo(u.type.tensor),v=ml(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(Z(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];gl(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${wl(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${wl(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Fl=L(()=>{"use strict";G(),J(),$(),vl(),El(),xl(),Dl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Ol=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,kl=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Dl(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Ol(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Al=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,jl=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,Ml=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${Al(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Al(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${jl(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},Nl=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=fo(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${yl(e,l)} {
      var value = ${yl(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${wl(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${yl(e,l)} {
      var value = ${yl(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${wl(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${yl(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${yl(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},Pl=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=q.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],T=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];hl(t,T),T.push(...Y(u,b,S));let E=[`rank`,`rank`],D=e.length>2;return D&&(T.push(...Y(e[2].dims)),E.push(`rank`)),T.push(...Y(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:T}),getShaderSource:n=>{let r=u.length,a=bo(`batchDims`,e[0].dataType,r,1),o=fo(e[0].dataType),s=Z(`a`,e[0].dataType,x,y),c=Z(`b`,e[1].dataType,C,y),l=Q(`result`,e[0].dataType,w.length,y),d=[s,c];if(D){let t=i?y:1;d.push(Z(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];gl(t,f);let p=fo(l.type.tensor),m=ml(t,l.type.value,p),v=Nl(y,D,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?kl(g,_,o,a):Ml(g,_,o,a)}
                   `}}}}),Rl=L(()=>{"use strict";G(),wa(),$(),vl(),xl(),Cl(),Fl(),Il=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${yl(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${yl(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${yl(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${yl(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${yl(s,l)}(0.0);`,x=yl(c,l),S=yl(e?o:s,l),C=yl(e?s:o,l),w=ml(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${bl(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ll=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];K(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),T=r%S===0,E=i%C===0,D=a%w===0,O=h?[x,4,4]:[1,1,1],ee=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];hl(t,ee),ee.push(...Y(e[0].dims,e[1].dims));let k=[`rank`,`rank`];return o&&(ee.push(...Y(e[2].dims)),k.push(`rank`)),ee.push(...Y(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${T};${E};${D};${S};${C};${w}`,inputDependencies:k},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:ee}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];gl(t,i);let a=h?4:1,c=fo(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[Z(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),Z(`w`,e[1].dataType,e[1].dims.length,a)],f=Q(`result`,e[0].dataType,n.length,a);if(o){let t=Z(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Sl(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${Il(l,T,E,D,o,t,O[0],O[1],O[2],c)}
        ${h?kl(y,v,c,void 0,!l,w):Ml(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),ql=L(()=>{"use strict";G(),wa(),J(),$(),vl(),xl(),zl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},Bl=e=>typeof e==`number`?[e,e,e]:e,Vl=(e,t)=>t<=1?e:e+(e-1)*(t-1),Hl=(e,t,n,r=1)=>{let i=Vl(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ul=(e,t,n,r,i)=>{i??(i=Hl(e,t[0],r[0]));let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},Wl=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Ul([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Ul([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},Gl=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=Bl(n),[y,b,x]=Bl(r),S=Vl(p,y),C=Vl(m,b),w=Vl(h,x),{padInfo:T,outDepth:E,outHeight:D,outWidth:O}=Wl(i,c,l,u,g,_,v,S,C,w),ee=a?f*d:f,k=[0,0,0,0,0];return o===`channelsFirst`?k=[s,ee,E,D,O]:o===`channelsLast`&&(k=[s,E,D,O,ee]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:E,outHeight:D,outWidth:O,outChannels:ee,padInfo:T,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:k,filterShape:t}},Kl=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(zl(c.x.map(e=>n[e]))/s[0]),1,1];K(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:q.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];hl(t,u),u.push(...Y(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...Y(e[2].dims)),d.push(`rank`)),u.push(...Y(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];gl(t,s);let c=fo(e[0].dataType),l=Z(`x`,e[0].dataType,e[0].dims.length,1),u=Z(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=Q(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=Z(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?X(`coords`,4,5):X(`coords`,1,5)}];
        }`}let h=yl(1,c),g=ml(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${X(`coords`,0,l.rank)};
              let d2 = ${o?X(`coords`,l.rank-1,l.rank):X(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?X(`coords`,1,l.rank):X(`coords`,2,l.rank)},
              ${o?X(`coords`,2,l.rank):X(`coords`,3,l.rank)},
              ${o?X(`coords`,3,l.rank):X(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?X(`uniforms.x_shape`,1,l.rank):X(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?X(`uniforms.x_shape`,2,l.rank):X(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?X(`uniforms.x_shape`,3,l.rank):X(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?X(`uniforms.x_shape`,4,l.rank):X(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),Xl=L(()=>{"use strict";G(),J(),$(),vl(),Jl=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?mo(l):1,f=q.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];hl(t,p),p.push(...Y(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...Y([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=Q(`output`,e[0].dataType,n.length,d),u=fo(l.type.tensor),f=ml(t,l.type.value,u),p=Z(`x`,e[0].dataType,o.length),m=Z(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(Z(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];gl(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},Yl=(e,t,n,r)=>{let i=e.length>2,a=mo(n[3]),o=mo(n[2]),s=q.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];hl(t,d),d.push(...Y(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=Q(`output`,e[0].dataType,u.length,a),s=fo(r.type.tensor),d=ml(t,r.type.value,s),p=Z(`x`,e[0].dataType,c.length,a),m=Z(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(Z(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return gl(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),ou=L(()=>{"use strict";J(),Rl(),ql(),Fl(),Xl(),vl(),El(),Mo(),Zl=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Ql=[2,3,1,0],$l=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},eu=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();Da.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},tu=e=>{let t=_l(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},nu=(e,t,n,r)=>{let i=n.format===`NHWC`,a=Zl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(ko(t[1],Ql),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Yl(o,n,a,r),{inputs:o}):e.compute(Jl(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(ko(t[1],Ql),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Tl(v,n,a,_,i,r),{inputs:v}):e.compute(Pl(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(ko(t[1],Ql),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(Ll(_,n,a,v,y,b,o,!0,r),{inputs:_})},ru=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=eu({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);nu(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},iu=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=eu(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=Gl(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Kl(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},au=(e,t)=>{if($l(e.inputs,t),e.inputs[0].dims.length===3)ru(e,t);else if(e.inputs[0].dims.length===5)iu(e,e.inputs,t);else{let n=eu(t,e.inputs);nu(e,e.inputs,n)}}}),cu=L(()=>{"use strict";G(),wa(),J(),$(),su=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?mo(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?mo(l):1,h=a?l===1?u:m:1,g=q.size(i)/m,_=[Math.ceil(g/64),1,1];K(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...Y(e[0].dims,e[1].dims)];return r&&(w.push(...Y(e[2].dims)),v.push(`rank`)),w.push(...Y(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=fo(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=Z(`W`,e[1].dataType,e[1].dims.length,h),g=Z(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(Z(`bias`,e[2].dataType,[i[l]].length,m));let v=Q(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),vu=L(()=>{"use strict";cu(),vl(),Mo(),lu=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,uu=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},du=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=lu(s,o[i],a[i],t[f],n[i],p);uu(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},fu=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}du(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},pu=e=>{let t=_l(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},mu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},hu=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(ko(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(su(a,n,r),{inputs:a})},gu=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=fu({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);hu(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},_u=(e,t)=>{if(mu(e.inputs,t),e.inputs[0].dims.length===3)gu(e,t);else{let n=fu(t,e.inputs);hu(e,e.inputs,n)}}}),Su=L(()=>{"use strict";G(),J(),co(),$(),yu=(e,t,n,r)=>{let i=q.size(t),a=t.length,o=Z(`input`,e,a),s=Q(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=q.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...Y(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=X(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},bu=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(yu(r,n,i,t),{inputs:[0]})},xu=e=>{let t=e.exclusive===1,n=e.reverse===1;return so({exclusive:t,reverse:n})}}),Ou=L(()=>{"use strict";G(),J(),co(),$(),Cu=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},wu=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Tu=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=Z(`a`,p,f),h=Q(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=q.size(t),u=d.dims,f=q.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Y(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${wu(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Eu=(e,t)=>{Cu(e.inputs),e.compute(Tu(e.inputs[0],t))},Du=e=>so({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Bu=L(()=>{"use strict";G(),J(),co(),$(),ku=`[a-zA-Z]|\\.\\.\\.`,Au=`(`+ku+`)+`,ju=`^`+Au+`$`,Mu=`(`+Au+`,)*`+Au,Nu=`^`+Mu+`$`,Pu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Fu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(Nu)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(ju)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Au)))throw Error(`Invalid RHS`);r.match(RegExp(ku,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(ju))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(ku,`g`)),l=new Pu(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Iu=e=>e+`_max`,Lu=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>Z(`input${n}`,t,e)),a=q.size(r),o=Q(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...Y(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...Y(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Iu(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Iu(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Ru=(e,t)=>{let n=new Fu(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Lu(i,e.inputs[0].dataType,n,r))},zu=e=>{let t=e.equation.replace(/\s+/g,``);return so({equation:t})}}),Ku=L(()=>{"use strict";G(),J(),$(),Vu=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},Hu=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Uu=(e,t)=>e.length>t.length?Hu(e,t):Hu(t,e),Wu=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Uu(t,n),i=e[0].dataType,a=i===9||q.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(q.size(r)/s),l=e=>{let n=Z(`input`,i,t.length,o),a=Q(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...Y(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Gu=e=>{Vu(e.inputs),e.compute(Wu(e.inputs),{inputs:[0]})}}),Yu=L(()=>{"use strict";G(),J(),$(),Hc(),qu=e=>{let t=e[0].dataType,n=q.size(e[0].dims),r=q.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=Z(`x`,t,[1],4),r=Z(`bias`,t,[1],4),a=Q(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Pc(po(t))}

    ${e.mainStart(lo)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Fc(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/lo/4)}})}},Ju=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?Ic(e):e.compute(qu(e.inputs))}}),ed=L(()=>{"use strict";G(),J(),co(),$(),Xu=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},Zu=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(q.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...Y(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=Z(`data`,e[0].dataType,e[0].dims.length,c),s=Z(`inputIndices`,e[1].dataType,e[1].dims.length),l=Q(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},Qu=e=>so({axis:e.axis}),$u=(e,t)=>{let n=e.inputs;Xu(n),e.compute(Zu(e.inputs,t))}}),id=L(()=>{"use strict";G(),J(),$(),td=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...Y(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[Z(`indices_data`,t.dataType,t.dims.length),Q(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},nd=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=q.sizeToDimension(a,a.length-1),c=q.sizeFromDimension(r,t.batchDims+o),l=q.sizeToDimension(r,t.batchDims),u=q.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=td(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=q.size(g),v=[{type:12,data:_},{type:12,data:c},...Y(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=Z(`data`,n[0].dataType,n[0].dims.length),r=Z(`slice_offsets`,12,m.dims.length),i=Q(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},rd=e=>({batchDims:e.batch_dims,cacheKey:``})}),ld=L(()=>{"use strict";G(),J(),co(),$(),ad=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},od=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=q.normalizeAxis(t.gatherAxis,i),o=q.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=q.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...Y(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=Z(`data`,e[0].dataType,e[0].dims.length),o=Z(`inputIndices`,e[1].dataType,e[1].dims.length),c=Z(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?Z(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=Q(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${po(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},sd=(e,t)=>{let n=e.inputs;ad(n,t),e.compute(od(e.inputs,t))},cd=e=>so({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),md=L(()=>{"use strict";G(),J(),co(),$(),ud=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},dd=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=q.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=q.size(l),d=Z(`input`,r,i),f=Z(`indicesInput`,o,a.length),p=Q(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...Y(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},fd=e=>so({axis:e.axis}),pd=(e,t)=>{let n=e.inputs;ud(n),e.compute(dd(e.inputs,t))}}),yd=L(()=>{"use strict";G(),J(),$(),hd=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},gd=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=Oa.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);q.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...Y(e[2].dims)),d.push(`rank`)),u.push(...Y(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=Z(`a`,e[0].dataType,e[0].dims),i=Z(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=Z(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=Q(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},_d=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),vd=(e,t)=>{hd(e.inputs),e.compute(gd(e.inputs,t))}}),Pd=L(()=>{"use strict";G(),J(),co(),$(),[bd,xd,Sd,Cd]=[0,1,2,3],wd=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Td=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Ed=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Dd=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Od=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,kd=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${bd}] = batch;
     indices[${xd}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Sd}] = u32(r);
            indices[${Cd}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${Sd}] = u32(clamp(r, 0, H - 1));
          indices[${Cd}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Sd}] = gs_reflect(r, border[1], border[3]);
          indices[${Cd}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Ad=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${bd}], indices[${xd}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${bd}], indices[${xd}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${bd}], indices[${xd}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${bd}], indices[${xd}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${bd}], indices[${xd}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${bd}], indices[${xd}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,jd=(e,t)=>{let n=Z(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Z(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[bd,xd,Sd,Cd]=[0,3,1,2]);let o=Q(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:q.size(a)},...Y(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=q.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Td}
  ${Ed(s)}
  ${Dd(t)}
  ${Od(t)}
  ${kd(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Sd}]);
      let W_in = i32(uniforms.x_shape[${Cd}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${bd}], indices[${Sd}], indices[${Cd}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ad(o,s,t)}
  }`}},Md=(e,t)=>{wd(e.inputs),e.compute(jd(e.inputs,t))},Nd=e=>so({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Hd=L(()=>{"use strict";G(),J(),co(),Ya(),Vs(),$(),Mo(),Fd=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Id=(e,t)=>{let n=e[0],r=Fd(e,1),i=Fd(e,2),a=Fd(e,3),o=Fd(e,4),s=Fd(e,5),c=Fd(e,6),l=Fd(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&q.size(c.dims)&&q.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&q.size(c.dims)||l&&q.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&q.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&q.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&q.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&q.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Ld=e=>so({...e}),Rd=so({perm:[0,2,1,3]}),zd=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=q.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=Q(`qkv_with_bias`,t.dataType,s),i=Z(`qkv`,t.dataType,s),a=Z(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Bd=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&q.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=zd(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(ko(c,Rd.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(ko(c,Rd.perm),{inputs:[c],outputs:[-1]})[0]},Vd=(e,t)=>{let n=Id(e.inputs,t),r=e.inputs[0],i=Fd(e.inputs,1),a=Fd(e.inputs,2),o=Fd(e.inputs,3),s=Fd(e.inputs,4),c=Fd(e.inputs,5),l=Fd(e.inputs,6),u=Fd(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Bd(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Rs(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Bd(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Bd(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Rs(e,f,p,m,s,void 0,l,u,c,n)}}),Xd=L(()=>{"use strict";G(),J(),co(),$(),Ud=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},Wd=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),so({numOutputs:r,axis:t.axis,splitSizes:n})},Gd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Kd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},qd=(e,t)=>{let n=e[0].dims,r=q.size(n),i=e[0].dataType,a=q.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=Z(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=Q(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...Y(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${Gd(c.length)}
  ${Kd(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Jd=(e,t)=>{Ud(e.inputs);let n=e.inputs.length===1?t:Wd(e.inputs,t);e.compute(qd(e.inputs,n),{inputs:[0]})},Yd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return so({axis:t,numOutputs:r,splitSizes:n})}}),ef=L(()=>{"use strict";G(),J(),co(),$(),Zd=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!q.areEqual(r.dims,[])&&!q.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!q.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=q.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},Qd=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=q.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=q.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:so({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=Z(`input`,e[0].dataType,e[0].dims.length),i=Z(`position_ids`,e[1].dataType,e[1].dims.length),a=Z(`cos_cache`,e[2].dataType,e[2].dims.length),o=Z(`sin_cache`,e[3].dataType,e[3].dims.length),s=Q(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(lo)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,Q(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(f)/lo)},programUniforms:m})}},$d=(e,t)=>{Zd(e.inputs,t),e.compute(Qd(e.inputs,t))}}),sf=L(()=>{"use strict";co(),G(),Vs(),Hd(),Xd(),Mo(),ef(),$(),tf=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=y.dims.reduce((e,t)=>e*t,1);if(e!==s)throw Error(`seqlens_k must have batch_size (${s}) elements, got ${e}.`);for(let e=0;e<y.dims.length;e++)if(y.dims[e]!==1&&y.dims[e]!==s)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${s}), got dims[${e}] = ${y.dims[e]}.`)}return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},nf=so({perm:[0,2,1,3]}),rf=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(ko(r,nf.perm),{inputs:[r],outputs:[-1]})[0]),r},af=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=Z(`seq_lens`,n.dataType,n.dims),i=Z(`total_seq_lens`,r.dataType,r.dims),o=Q(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},of=(e,t)=>{let n=tf(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=so({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(qd([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(af(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=so({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(Qd(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=so({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(Qd(s,d),{inputs:s,outputs:u})[0]}let _=Bd(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=rf(e,t.doRotary?g:p,n),y=rf(e,m,n);Rs(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),ff=L(()=>{"use strict";G(),J(),Mo(),$(),cf=(e,t,n,r,i,a,o,s)=>{let c=mo(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...Y(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=Z(`x`,t.dataType,3,c),a=[i,Z(`scale`,n.dataType,n.dims),Z(`bias`,r.dataType,r.dims),Q(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${_o(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${_o(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},lf=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=q.sizeFromDimension(r,2),c=mo(s),l=q.size(i)/c,u=cf(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...Y(d,f,d)]}),getShaderSource:e=>{let n=Z(`x`,t[0].dataType,d.length,c),r=Z(`scale_shift`,1,f.length,2),i=Q(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},uf=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=q.sizeFromDimension(r,1)/o,c=mo(o),l=q.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f=f||r[e+1]!==1,p.push(e+1);f=f&&r[r.length-1]!==1;let m=f?e.compute(ko(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=cf(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=fo(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=Z(`input`,t[0].dataType,t[0].dims,c),s=Q(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},df=(e,t)=>{t.format===`NHWC`?uf(e,e.inputs,t):lf(e,e.inputs,t)}}),gf=L(()=>{"use strict";G(),J(),$(),pf=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},mf=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=q.normalizeAxis(t.axis,i.length),l=q.sizeToDimension(i,c),u=q.sizeFromDimension(i,c),d=q.size(a.dims),f=o?q.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=mo(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=fo(e[0].dataType),i=[Z(`x`,e[0].dataType,e[0].dims,m),Z(`scale`,a.dataType,a.dims,m)];return o&&i.push(Z(`bias`,o.dataType,o.dims,m)),i.push(Q(`output`,e[0].dataType,s,m)),_&&i.push(Q(`mean_data_output`,1,p)),v&&i.push(Q(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ho(`f32`,m)};
    var mean_square_vector = ${ho(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${go(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${_o(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${_o(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${go(n,m,`x[j + offset]`)};
      let f32scale = ${go(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${go(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},hf=(e,t)=>{pf(e.inputs),e.compute(mf(e.inputs,t,e.outputCount))}}),yf=L(()=>{"use strict";J(),El(),Fl(),_f=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},vf=e=>{_f(e.inputs);let t=Ea.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Tl(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=q.size(e.inputs[0].dims.slice(0,-2)),o=q.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(Pl(c,{activation:``},t,s),{inputs:c})}else e.compute(Pl(e.inputs,{activation:``},t))}}}),Tf=L(()=>{"use strict";G(),J(),co(),$(),bf=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!q.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(q.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(q.size(n)!==r)throw Error(`zeroPoints input size error.`)}},xf=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=q.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=mo(t.k),f=mo(l),p=mo(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=q.size(m)/p/h,_=[],v=[c,i,a/d],y=q.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...Y(v)),_.push(...Y(y)),_.push(...Y(e[2].dims)),e.length===4&&_.push(...Y(q.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...Y(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=Z(`a`,e[0].dataType,r,d),a=Z(`b`,12,y.length,f),o=Z(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Z(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=Q(`output`,e[0].dataType,u,p),g=fo(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=Math.floor(32/t.bits),S=Math.floor(x/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},T=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${T()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${x/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},Sf=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=q.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=mo(t.k),f=mo(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=Math.floor(32/t.bits),_=h*f*g,v=_/d,y=_/t.blockSize,b=q.size(p)/m,x=[],S=[c,i,a/d],C=q.convertShape(e[1].dims).slice();C.splice(-1,1,l/f),x.push(...Y(S)),x.push(...Y(C)),x.push(...Y(e[2].dims)),e.length===4&&x.push(...Y(q.convertShape(e[3].dims)));let w=[c,i,o];return x.push(...Y(w)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:n=>{let r=S.length,i=Z(`a`,e[0].dataType,r,d),a=Z(`b`,12,C.length,f),o=Z(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?Z(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=w.length,u=Q(`output`,e[0].dataType,l),p=fo(e[0].dataType),_=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(g/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${_()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Cf=(e,t)=>{bf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(Sf(e.inputs,t)):e.compute(xf(e.inputs,t))},wf=e=>so(e)}),Ff=L(()=>{"use strict";G(),J(),$(),Ef=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Df=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${X(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Of=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},kf=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                  k = i32(${X(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Af=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${X(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${X(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${X(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${X(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${X(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},jf=(e,t,n)=>{switch(n.mode){case 0:return Df(e,t,n.pads.length);case 1:return Of(e,t,n.pads.length);case 2:return kf(e,t,n.pads.length);case 3:return Af(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Mf=(e,t)=>{let n=q.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:q.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...Y(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=Q(`output`,e[0].dataType,n.length),s=Z(`x`,e[0].dataType,r.length),c=s.type.value,l=jf(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Nf=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},Pf=(e,t)=>{Ef(e.inputs);let n=Nf(e.inputs,t);e.compute(Mf(e.inputs,n),{inputs:[0]})}}),tp=L(()=>{"use strict";_i(),G(),J(),$(),If=e=>{if(R.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Lf=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();Da.adjustPoolAttributes(n,i,o,s,c,l);let u=Da.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Rf=(e,t)=>{let n=t.format===`NHWC`,r=q.size(e),i=q.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=q.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},zf=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=Q(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${X(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${X(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${X(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${X(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Bf=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Vf=e=>`${Bf(e)};${e.countIncludePad}`,Hf=e=>`${Bf(e)};${e.storageOrder};${e.dilations}`,Uf=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Wf=(e,t,n,r)=>{let[i,a]=Lf(t,r,n),o=Z(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Rf(a,i);return l.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:l}),getShaderSource:e=>zf(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},Gf=e=>{let t=e.count_include_pad!==0,n=Uf(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Vf(r)}},Kf=(e,t)=>{If(e.inputs),e.compute(Wf(`AveragePool`,e.inputs[0],!1,t))},qf={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Jf=e=>{let t=e.format;return{format:t,...qf,cacheKey:t}},Yf=(e,t)=>{If(e.inputs),e.compute(Wf(`GlobalAveragePool`,e.inputs[0],!0,t))},Xf=(e,t,n,r)=>{let[i,a]=Lf(t,r,n),o=Z(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Rf(a,i);return c.push(...Y(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(a)/64)},programUniforms:c}),getShaderSource:e=>zf(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Zf=(e,t)=>{If(e.inputs),e.compute(Xf(`MaxPool`,e.inputs[0],!1,t))},Qf=e=>{let t=e.storage_order,n=e.dilations,r=Uf(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Hf(i)}},$f=e=>{let t=e.format;return{format:t,...qf,cacheKey:t}},ep=(e,t)=>{If(e.inputs),e.compute(Xf(`GlobalMaxPool`,e.inputs[0],!0,t))}}),op=L(()=>{"use strict";G(),J(),co(),$(),np=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},rp=(e,t)=>{let n=q.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=q.size(a),c=r===3||r===2,l=c?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(q.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=mo(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=Z(`input`,c?12:r,l.length,v),b=Z(`scale`,o,u.length),x=d?Z(`zero_point`,c?12:r,f.length):void 0,S=Q(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let T=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...Y(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:T})}},ip=(e,t)=>{np(e.inputs,t),e.compute(rp(e.inputs,t))},ap=e=>so({axis:e.axis,blockSize:e.blockSize})}),up=L(()=>{"use strict";_i(),G(),$(),sp=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},cp=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...Y(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=Q(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},lp=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),R.webgpu.validateInputContent&&sp(t,n,r),e.compute(cp(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),hp=L(()=>{"use strict";G(),J(),co(),$(),dp=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},fp=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(q.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=q.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...Y(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=Z(`indices`,e[1].dataType,e[1].dims.length),a=Z(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?yo(`output`,e[0].dataType,i.length):Q(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${dp(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},pp=e=>so({reduction:e.reduction}),mp=(e,t)=>{e.compute(fp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ip=L(()=>{"use strict";G(),J(),co(),$(),gp=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},_p=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},vp=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);gp(r,t),t.axes.length>0&&_p(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},yp=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,bp=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${yp(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${yp(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,xp=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,Sp=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},Cp=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},wp=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},Tp=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${X(`uniforms.scales`,`i`,r)};
        var roi_low = ${X(`uniforms.roi`,`i`,i)};
        var roi_hi = ${X(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${X(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ep=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${X(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X(`uniforms.roi`,`i`,a)};
          var roi_hi = ${X(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${X(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${X(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,Dp=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${X(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,Op=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,kp=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Op(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ap=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},jp=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${Op(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Mp=(e,t,n,r,i,a)=>{let o=e.dims,s=Sp(a,t.axes,o.length),c=Cp(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=wp(o,l,t)));let u=Q(`output`,e.dataType,c.length),d=Z(`input`,e.dataType,o.length),f=q.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${bp(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${Dp(d,o)};
              ${xp(t.nearestMode,n,g)};
              ${Ep(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${Tp(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${kp(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${jp(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${Ap(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...Y(o,c)]})}},Np=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Pp=(e,t)=>{let n=[],r=[],i=[],a=Np(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);vp(e.inputs,t,a,n,r,i),e.compute(Mp(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Fp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return so({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Bp=L(()=>{"use strict";G(),J(),$(),Lp=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Rp=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=q.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=mo(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[Z(`x`,e[0].dataType,e[0].dims,g),Z(`skip`,e[1].dataType,e[1].dims,g),Z(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(Z(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(Z(`bias`,e[4].dataType,e[4].dims,g)),r.push(Q(`output`,e[0].dataType,s,g)),p&&r.push(Q(`mean_output`,1,u)),m&&r.push(Q(`inv_std_output`,1,u)),h&&r.push(Q(`input_skip_bias_sum`,e[0].dataType,s,g));let a=fo(e[0].dataType),o=fo(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${go(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${_o(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${_o(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},zp=(e,t)=>{Lp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Rp(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Yp=L(()=>{"use strict";G(),J(),co(),$(),Vp=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Hp=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},Up=(e,t)=>{if(e.length>1){let t=Hp(e,1),n=Hp(e,2),r=Hp(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),so({starts:t,ends:n,axes:r})}else return t},Wp=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Gp=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${X(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${X(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${X(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${X(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,Kp=(e,t)=>{let n=e[0].dims,r=q.size(n),i=t.axes.length>0?q.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Hp(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>Wp(e,t,n,i,a)),s=t.ends.map((e,t)=>Wp(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=Q(`output`,e[0].dataType,l.length),f=Z(`input`,e[0].dataType,e[0].dims.length),p=q.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...Y(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${Gp(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},qp=(e,t)=>{Vp(e.inputs,t);let n=Up(e.inputs,t);e.compute(Kp(e.inputs,n),{inputs:[0]})},Jp=e=>{let t=e.starts,n=e.ends,r=e.axes;return so({starts:t,ends:n,axes:r})}}),em=L(()=>{"use strict";G(),J(),co(),Mo(),$(),Xp=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Zp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=q.size(r),a=r.length,o=q.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(ko(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=mo(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=Z(`x`,c.dataType,c.dims,p),v=Q(`result`,c.dataType,c.dims,p),y=_.type.value,b=fo(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${_o(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(ko(x,l),{inputs:[x]})},Qp=(e,t)=>{Xp(e.inputs),Zp(e,t)},$p=e=>so({axis:e.axis})}),om=L(()=>{"use strict";G(),J(),$(),tm=e=>Array.from(e.getBigInt64Array(),Number),nm=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(tm(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rm=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},im=(e,t)=>{let n=e[0].dims,r=t??tm(e[1]),i=rm(n,r),a=q.size(i),o=e[0].dataType,s=Z(`input`,o,n.length),c=Q(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...Y(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},am=e=>{nm(e.inputs),e.compute(im(e.inputs),{inputs:[0]})}}),um=L(()=>{"use strict";G(),J(),$(),sm=(e,t,n,r,i)=>{let a=Q(`output_data`,i,n.length,4),o=Z(`a_data`,t[1].dataType,t[1].dims.length,4),s=Z(`b_data`,t[2].dataType,t[2].dims.length,4),c=Z(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},cm=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(q.areEqual(t,n)&&q.areEqual(n,r)),o=t,s=q.size(t);if(a){let e=Ea.calcShape(Ea.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=q.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>sm(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...Y(r,t,n,o)]})}},lm=e=>{e.compute(cm(e.inputs))}}),fm=L(()=>{"use strict";Ms(),Vs(),Ks(),Xs(),Kc(),ol(),pl(),ou(),vu(),Su(),Ou(),Bu(),Ku(),Yu(),ed(),id(),ld(),md(),yd(),Pd(),sf(),ff(),gf(),yf(),Tf(),Hd(),Ff(),tp(),op(),up(),hp(),Ds(),Ip(),ef(),Bp(),Yp(),em(),Xd(),om(),Mo(),Hc(),um(),dm=new Map([[`Abs`,[$s]],[`Acos`,[ec]],[`Acosh`,[tc]],[`Add`,[Xc]],[`ArgMax`,[As,js]],[`ArgMin`,[ks,js]],[`Asin`,[nc]],[`Asinh`,[rc]],[`Atan`,[ic]],[`Atanh`,[ac]],[`Attention`,[Bs]],[`AveragePool`,[Kf,Gf]],[`BatchNormalization`,[Gs]],[`BiasAdd`,[Ys]],[`BiasSplitGelu`,[Gc]],[`Cast`,[sc,oc]],[`Ceil`,[uc]],[`Clip`,[lc]],[`Concat`,[dl,fl]],[`Conv`,[au,tu]],[`ConvTranspose`,[_u,pu]],[`Cos`,[dc]],[`Cosh`,[fc]],[`CumSum`,[bu,xu]],[`DepthToSpace`,[Eu,Du]],[`DequantizeLinear`,[ip,ap]],[`Div`,[Zc]],[`Einsum`,[Ru,zu]],[`Elu`,[mc,pc]],[`Equal`,[Qc]],[`Erf`,[gc]],[`Exp`,[_c]],[`Expand`,[Gu]],[`FastGelu`,[Ju]],[`Floor`,[vc]],[`FusedConv`,[au,tu]],[`Gather`,[$u,Qu]],[`GatherElements`,[pd,fd]],[`GatherBlockQuantized`,[sd,cd]],[`GatherND`,[nd,rd]],[`Gelu`,[yc]],[`Gemm`,[vd,_d]],[`GlobalAveragePool`,[Yf,Jf]],[`GlobalMaxPool`,[ep,$f]],[`Greater`,[nl]],[`GreaterOrEqual`,[il]],[`GridSample`,[Md,Nd]],[`GroupQueryAttention`,[of]],[`HardSigmoid`,[Dc,Ec]],[`InstanceNormalization`,[df]],[`LayerNormalization`,[hf]],[`LeakyRelu`,[bc,pc]],[`Less`,[rl]],[`LessOrEqual`,[al]],[`Log`,[Rc]],[`MatMul`,[vf]],[`MatMulNBits`,[Cf,wf]],[`MaxPool`,[Zf,Qf]],[`Mul`,[$c]],[`MultiHeadAttention`,[Vd,Ld]],[`Neg`,[Sc]],[`Not`,[xc]],[`Pad`,[Pf]],[`Pow`,[el]],[`QuickGelu`,[Vc,pc]],[`Range`,[lp]],[`Reciprocal`,[Cc]],[`ReduceMin`,[Ss]],[`ReduceMean`,[_s]],[`ReduceMax`,[xs]],[`ReduceSum`,[ws]],[`ReduceProd`,[Cs]],[`ReduceL1`,[vs]],[`ReduceL2`,[ys]],[`ReduceLogSum`,[Es]],[`ReduceLogSumExp`,[bs]],[`ReduceSumSquare`,[Ts]],[`Relu`,[wc]],[`Resize`,[Pp,Fp]],[`RotaryEmbedding`,[$d]],[`ScatterND`,[mp,pp]],[`Sigmoid`,[Tc]],[`Sin`,[Oc]],[`Sinh`,[kc]],[`Slice`,[qp,Jp]],[`SkipLayerNormalization`,[zp]],[`Split`,[Jd,Yd]],[`Sqrt`,[Ac]],[`Softmax`,[Qp,$p]],[`Sub`,[tl]],[`Tan`,[jc]],[`Tanh`,[Nc]],[`ThresholdedRelu`,[Lc,pc]],[`Tile`,[am]],[`Transpose`,[Ao,jo]],[`Where`,[lm]]])}),mm=L(()=>{"use strict";_i(),wa(),$(),pm=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){ri(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ii(e.programInfo.name)}dispose(){}build(e,t){ri(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=So(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});K(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return ii(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),hm={},yr(hm,{WebGpuBackend:()=>ym}),bm=L(()=>{"use strict";_i(),G(),wa(),Ma(),ao(),fm(),mm(),gm=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},_m=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${gm(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},vm=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},ym=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r),this.adapterInfo=new vm(t.info||await t.requestAdapterInfo()),this.gpuDataManager=io(this),this.programManager=new pm(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Sa(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ri(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:la(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:la(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${la(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${la(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}ti(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),ii()}run(e,t,n,r,i,a){ri(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return ii(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${la(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=_m(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),K(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(K(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),ii(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=dm.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&(s[1]=s[0](s[1]),s[0]=void 0),K(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await no(this,e,t);return ja(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){K(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){K(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){K(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),xm={},yr(xm,{init:()=>wm}),Tm=L(()=>{"use strict";G(),wa(),J(),Ja(),Sm=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=q.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(q.size(t)!==q.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Cm=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Sm(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Sm(this.module,t,this.output(e,n),n),(e,t)=>{let n=ua(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Sm(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},wm=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(bm(),xr(hm)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)K(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{K(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{K(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{K(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new Cm(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new qa(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),zm=L(()=>{"use strict";_i(),W(),sa(),G(),Qi(),U(),_a(),Em=(e,t)=>{Zi()._OrtInit(e,t)!==0&&H(`Can't initialize onnxruntime.`)},Dm=async e=>{Em(e.wasm.numThreads,fa(e.logLevel))},Om=async(e,t)=>{Zi().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(Tm(),xr(xm)).init;t===`webgpu`&&await r(`webgpu`,Zi(),e,n),t===`webnn`&&await r(`webnn`,Zi(),e)}},km=new Map,Am=e=>{let t=Zi(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&H(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},jm=(e,t)=>{let n=Zi(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&H(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},Mm=e=>{let t=Zi(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Nm=async(e,t)=>{let n,r,i=Zi();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Mm(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await oa(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(ga(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.webnnCreateMLContext(r):i.currentContext=await i.webnnCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&H(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=Am(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=jm(a,t);e===0&&H(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:la(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=jm(a,n+e);r===0&&H(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:la(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&H(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>ha(e))}),km.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&H(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&H(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&H(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},Pm=e=>{let t=Zi(),n=km.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&H(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&H(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&H(`Can't release session.`),km.delete(e)},Fm=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=Zi(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=ua(ca(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=ua(ca(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,ca(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,V(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=ca(l);m=ua(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(ca(l),p,m,g,u.length,ha(f));e===0&&H(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},Im=async(e,t,n,r,i,a)=>{let o=Zi(),s=o.PTR_SIZE,c=km.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),T=o.stackAlloc(h*s),E=o.stackAlloc(g*s),D=o.stackAlloc(g*s);try{[_,v]=ea(a),ai(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await Fm(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await Fm(i[t],b,x,e,d[r[t]],h+r[t],p);oi(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(T+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(E+e*s,b[e],`*`),o.setValue(D+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);ai(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&H(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&H(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&H(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}oi(`wasm bindInputsOutputs`),km.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,E,_):await o._OrtRun(l,T,w,h,D,g,E,_),c!==0&&H(`failed to call OrtRun().`);let C=[],O=[];ai(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(E+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&H(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&H(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&H(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=la(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=ua(a,g);if(r===void 0||!pa(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&H(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(ua(a,g)===void 0||!ma(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,O.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(da(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&H(`Can't clear bound outputs.`),km.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(O))C[e][2]=t;return oi(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},Lm=e=>{let t=Zi(),n=km.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&H(`Can't get an profile file name.`),t._OrtFree(i)},Rm=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),ih=L(()=>{"use strict";_i(),zm(),Qi(),Hi(),Bm=()=>!!R.wasm.proxy&&typeof document<`u`,Hm=!1,Um=!1,Wm=!1,qm=new Map,Jm=(e,t)=>{let n=qm.get(e);n?n.push(t):qm.set(e,[t])},Ym=()=>{if(Hm||!Um||Wm||!Vm)throw Error(`worker not ready`)},Xm=e=>{switch(e.data.type){case`init-wasm`:Hm=!1,e.data.err?(Wm=!0,Km[1](e.data.err)):(Um=!0,Km[0]()),Gm&&(URL.revokeObjectURL(Gm),Gm=void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=qm.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Zm=async()=>{if(!Um){if(Hm)throw Error(`multiple calls to 'initWasm()' detected.`);if(Wm)throw Error(`previous call to 'initWasm()' failed.`);if(Hm=!0,Bm())return new Promise((e,t)=>{Vm?.terminate(),zi().then(([n,r])=>{try{Vm=r,Vm.onerror=e=>t(e),Vm.onmessage=Xm,Km=[e,t];let i={type:`init-wasm`,in:R};!i.in.wasm.wasmPaths&&(n||ki)&&(i.in.wasm.wasmPaths={wasm:new URL(``+new URL(`ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,self.location.href).href,``+self.location.href).href}),Vm.postMessage(i),Gm=n}catch(e){t(e)}},t)});try{await Xi(R.wasm),await Dm(R),Um=!0}catch(e){throw Wm=!0,e}finally{Hm=!1}}},Qm=async e=>{if(Bm())return Ym(),new Promise((t,n)=>{Jm(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:R}};Vm.postMessage(r)});await Om(R,e)},$m=async e=>Bm()?(Ym(),new Promise((t,n)=>{Jm(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Vm.postMessage(r,[e.buffer])})):Mm(e),eh=async(e,t)=>{if(Bm()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return Ym(),new Promise((n,r)=>{Jm(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Vm.postMessage(i,a)})}else return Nm(e,t)},th=async e=>{if(Bm())return Ym(),new Promise((t,n)=>{Jm(`release`,[t,n]);let r={type:`release`,in:e};Vm.postMessage(r)});Pm(e)},nh=async(e,t,n,r,i,a)=>{if(Bm()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return Ym(),new Promise((i,o)=>{Jm(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Vm.postMessage(c,Rm(s))})}else return Im(e,t,n,r,i,a)},rh=async e=>{if(Bm())return Ym(),new Promise((t,n)=>{Jm(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Vm.postMessage(r)});Lm(e)}}),ch=L(()=>{"use strict";_i(),ih(),G(),vi(),_a(),ah=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},oh=e=>{switch(e[3]){case`cpu`:return new $r(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!pa(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return $r.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!ma(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return $r.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},sh=class{async fetchModelAndCopyToWasmMemory(e){return $m(await ga(e))}async loadModel(e,t){ri();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await eh(n,t),ii()}async dispose(){return th(this.sessionId)}async run(e,t,n){ri();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>ah(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?ah(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await nh(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??oh(l[e]);return ii(),u}startProfiling(){}endProfiling(){rh(this.sessionId)}}}),lh={},yr(lh,{OnnxruntimeWebAssemblyBackend:()=>dh,initializeFlags:()=>uh,wasmBackend:()=>fh}),ph=L(()=>{"use strict";_i(),ih(),ch(),uh=()=>{(typeof R.wasm.initTimeout!=`number`||R.wasm.initTimeout<0)&&(R.wasm.initTimeout=0);let e=R.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),R.wasm.simd=!1),typeof R.wasm.proxy!=`boolean`&&(R.wasm.proxy=!1),typeof R.wasm.trace!=`boolean`&&(R.wasm.trace=!1),typeof R.wasm.numThreads!=`number`||!Number.isInteger(R.wasm.numThreads)||R.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)R.wasm.numThreads=1;else{let e=typeof navigator>`u`?vr(`node:os`).cpus().length:navigator.hardwareConcurrency;R.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},dh=class{async init(e){uh(),await Zm(),await Qm(e)}async createInferenceSessionHandler(e,t){let n=new sh;return await n.loadModel(e,t),n}},fh=new dh}),_i(),_i(),_i(),mh=`1.26.0`,hh=gi;{let e=(ph(),xr(lh)).wasmBackend;wr(`webgpu`,e,5),wr(`webnn`,e,5),wr(`cpu`,e,10),wr(`wasm`,e,10)}Object.defineProperty(R.versions,"web",{value:mh,enumerable:!0})}));let _h=null,vh=``,yh=new WeakMap;function bh(e){let t=yh.get(e);return t||(t=new Map,yh.set(e,t)),t}function xh(e){return e.map(e=>({...e,box:{...e.box}}))}function Sh(e,t){let n=e.inputMetadata?.[t],r=n?.dimensions||n?.dims||[],i=Number(r[r.length-2]),a=Number(r[r.length-1]);return Number.isInteger(a)&&a>0&&a===i?a:null}function Ch(e){return 1/(1+Math.exp(-e))}function wh(e){return Number.isFinite(e)?e<0||e>1?Ch(e):e:0}function Th(e,t){let n=Math.max(e.x1,t.x1),r=Math.max(e.y1,t.y1),i=Math.min(e.x2,t.x2),a=Math.min(e.y2,t.y2),o=Math.max(0,i-n)*Math.max(0,a-r),s=Math.max(0,e.x2-e.x1)*Math.max(0,e.y2-e.y1),c=Math.max(0,t.x2-t.x1)*Math.max(0,t.y2-t.y1);return o/Math.max(1e-6,s+c-o)}function Eh(e,t){let n=new Map;for(let t of e)n.has(t.classId)||n.set(t.classId,[]),n.get(t.classId).push(t);let r=[];for(let e of n.values()){let n=e.slice().sort((e,t)=>t.score-e.score);for(;n.length;){let e=n.shift();r.push(e);for(let r=n.length-1;r>=0;--r)Th(e,n[r])>t&&n.splice(r,1)}}return r.sort((e,t)=>t.score-e.score)}function Dh(e,t){let{width:n,height:a}=i(e);if(!n||!a)throw Error(`The image has no valid dimensions.`);let o=Math.min(t/n,t/a),s=Math.max(1,Math.round(n*o)),c=Math.max(1,Math.round(a*o)),l=Math.floor((t-s)/2),u=Math.floor((t-c)/2),d=r(t,t).getContext(`2d`,{willReadFrequently:!0});d.fillStyle=`rgb(114,114,114)`,d.fillRect(0,0,t,t),d.imageSmoothingEnabled=!0,d.imageSmoothingQuality=`high`,d.drawImage(e,l,u,s,c);let f=d.getImageData(0,0,t,t),p=t*t,m=new Float32Array(p*3);for(let e=0;e<p;e+=1){let t=e*4;m[e]=f.data[t]/255,m[p+e]=f.data[t+1]/255,m[p*2+e]=f.data[t+2]/255}return{tensorData:m,sourceWidth:n,sourceHeight:a,scale:o,padX:l,padY:u,inputSize:t}}function Oh(e,t){let n=e.dims||[];if(n.length===3){let e=n[1],r=n[2];return[6,4+t,5+t].includes(e)||e<r?{count:r,attrs:e,transposed:!0}:{count:e,attrs:r,transposed:!1}}if(n.length===2)return{count:n[0],attrs:n[1],transposed:!1};throw Error(`Unsupported YOLO output shape: ${JSON.stringify(n)}`)}function kh(e,t,n,r){return t.transposed?e[r*t.count+n]:e[n*t.attrs+r]}function Ah(e,t,n,r){let i=t.length,a=Oh(e,i),o=e.data,s=[];for(let e=0;e<a.count;e+=1){if(a.attrs===6){let[t,c,l,u,d,f]=Array.from({length:6},(t,n)=>kh(o,a,e,n));if(d=wh(d),f=Math.max(0,Math.round(f)),d<r||f>=i)continue;Math.max(Math.abs(t),Math.abs(c),Math.abs(l),Math.abs(u))<=2&&(t*=n.inputSize,c*=n.inputSize,l*=n.inputSize,u*=n.inputSize),s.push({x1:t,y1:c,x2:l,y2:u,score:d,classId:f});continue}let t=kh(o,a,e,0),c=kh(o,a,e,1),l=kh(o,a,e,2),u=kh(o,a,e,3);Math.max(Math.abs(t),Math.abs(c),Math.abs(l),Math.abs(u))<=2&&(t*=n.inputSize,c*=n.inputSize,l*=n.inputSize,u*=n.inputSize);let d=a.attrs>=i+5,f=d?wh(kh(o,a,e,4)):1,p=d?5:4,m=-1,h=0,g=Math.min(i,a.attrs-p);for(let t=0;t<g;t+=1){let n=wh(kh(o,a,e,p+t))*f;n>h&&(h=n,m=t)}m<0||h<r||s.push({x1:t-l/2,y1:c-u/2,x2:t+l/2,y2:c+u/2,score:h,classId:m})}return s.map(e=>{let r=(e.x1-n.padX)/n.scale,i=(e.y1-n.padY)/n.scale,a=(e.x2-n.padX)/n.scale,o=(e.y2-n.padY)/n.scale;return{...e,label:t[e.classId]||`class_${e.classId}`,box:{x0:Math.max(0,Math.min(n.sourceWidth,r)),y0:Math.max(0,Math.min(n.sourceHeight,i)),x1:Math.max(0,Math.min(n.sourceWidth,a)),y1:Math.max(0,Math.min(n.sourceHeight,o)),width:Math.max(1,Math.abs(a-r)),height:Math.max(1,Math.abs(o-i))}}})}async function jh(e,t,n){if(_h&&vh===t)return _h;n?.({status:`loading`,message:`Loading YOLO ONNX model…`});let r=e.buffer||e.url;if(!r)throw Error(`No ONNX model is configured.`);let i,a=`wasm`;if(typeof navigator<`u`&&navigator.gpu)try{let e=await Promise.resolve().then(()=>(fr(),m));return i=await e.InferenceSession.create(r,{executionProviders:[`webgpu`],graphOptimizationLevel:`all`}),a=`webgpu`,_h={session:i,ort:e,provider:a},vh=t,_h}catch(e){console.warn(`WebGPU ONNX session failed; falling back to WASM.`,e)}let o=await Promise.resolve().then(()=>(gh(),pr));return o.env.wasm.numThreads=typeof crossOriginIsolated<`u`&&crossOriginIsolated?Math.max(1,Math.min(4,typeof navigator<`u`&&navigator.hardwareConcurrency||2)):1,i=await o.InferenceSession.create(r,{executionProviders:[`wasm`],graphOptimizationLevel:`all`}),_h={session:i,ort:o,provider:a},vh=t,_h}function Mh(){_h=null,vh=``}async function Nh(e,t,n={},r){let i=t.labels?.length?t.labels:a,o=Math.max(320,Math.min(1280,Number(n.inputSize||t.inputSize||640))),s=Number(n.confidenceThreshold||.35),c=Number(n.iouThreshold||.45),l=t.cacheKey||`${t.name||t.url||`model`}:${t.buffer?.byteLength||0}`,{session:u,ort:d,provider:f}=await jh(t,l,r),p=u.inputNames[0],m=Sh(u,p)||o,h=JSON.stringify({modelCacheKey:l,inputSize:m,confidenceThreshold:s,iouThreshold:c,labels:i}),g=bh(e),_=g.get(h);if(_)return r?.({status:`working`,message:`Using cached YOLO detections…`}),{..._,detections:xh(_.detections),durationMs:0,cached:!0};let v=performance.now(),y=Dh(e,m),b=new d.Tensor(`float32`,y.tensorData,[1,3,m,m]),x=performance.now()-v;r?.({status:`working`,message:`Running YOLO with ONNX Runtime ${f.toUpperCase()}…`});let S=performance.now(),C=await u.run({[p]:b}),w=u.outputNames[0],T={detections:Eh(Ah(C[w],i,y,s),c),provider:f,durationMs:performance.now()-S,preprocessMs:x,inputSize:m,cached:!1};return g.set(h,T),{...T,detections:xh(T.detections)}}let Ph=null,Fh=``;self.onmessage=async e=>{let{id:t,type:n}=e.data||{};try{if(n===`configure`){Ph=e.data.model,Fh=Ph?.cacheKey||``,Mh(),self.postMessage({id:t,ok:!0,result:{configuredKey:Fh}});return}if(n===`reset`){Ph=null,Fh=``,Mh(),self.postMessage({id:t,ok:!0,result:{reset:!0}});return}if(n!==`detect`)return;if(!Ph)throw Error(`YOLO worker has no configured model.`);let r=e.data.bitmap,i=await Nh(r,Ph,e.data.options,e=>{self.postMessage({id:t,type:`progress`,state:e})});r?.close?.(),self.postMessage({id:t,ok:!0,result:i})}catch(n){e.data?.bitmap?.close?.(),self.postMessage({id:t,ok:!1,error:n instanceof Error?n.message:String(n)})}}})();