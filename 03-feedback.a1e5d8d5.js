var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function O(){var e=m();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return p?d(n,i-(e-c)):n}(e))}function h(e){return f=void 0,y&&o?b(e):(o=r=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(p)return f=setTimeout(O,t),b(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,v(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(g(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector("form");y.addEventListener("input",t((function(e){const t=y.querySelector("input").value,n=y.querySelector("textarea").value,o={email:`${t}`,message:`${n}`};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log("feedback-form-state:",JSON.parse(localStorage.getItem("feedback-form-state"))),e.target.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.querySelector("input").value=t.email,y.querySelector("textarea").value=t.message}}();
//# sourceMappingURL=03-feedback.a1e5d8d5.js.map