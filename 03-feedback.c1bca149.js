var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function v(t,e,n){var o,r,i,u,a,f,c=0,v=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,a=setTimeout(h,e),v?b(t):u}function S(t){var n=t-f;return void 0===f||n>=e||n<0||g&&t-c>=i}function h(){var t=d();if(S(t))return T(t);a=setTimeout(h,function(t){var n=e-(t-f);return g?s(n,i-(t-c)):n}(t))}function T(t){return a=void 0,y&&o?b(t):(o=r=void 0,u)}function w(){var t=d(),n=S(t);if(o=arguments,r=this,f=t,n){if(void 0===a)return j(f);if(g)return a=setTimeout(h,e),b(f)}return void 0===a&&(a=setTimeout(h,e)),u}return e=p(e)||0,m(n)&&(v=!!n.leading,i=(g="maxWait"in n)?l(p(n.maxWait)||0,e):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},w.flush=function(){return void 0===a?u:T(d())},w}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(m(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=m(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var a=o.test(t);return a||r.test(t)?i(t.slice(2),a?2:8):n.test(t)?NaN:+t}const g=document.querySelector("form"),y=document.querySelector("input"),b=document.querySelector("textarea");y.addEventListener("input",(function(t){localStorage.setItem("email",t.target.value)})),b.addEventListener("input",(function(t){localStorage.setItem("message",t.target.value)})),g.addEventListener("submit",(function(t){t.preventDefault();const e=`${localStorage.getItem("email")}, ${localStorage.getItem("message")}`;console.log(e),t.target.reset()}));
//# sourceMappingURL=03-feedback.c1bca149.js.map
