!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),d?j(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function T(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(O,t),j(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j="feedback-form-state",S=document.querySelector("form"),h=document.querySelector("input"),O=document.querySelector("textarea");function T(e){var t=e.target.value;localStorage.setItem("email",t)}function w(e){var t=e.target.value;localStorage.setItem("message",t)}h.addEventListener("input",T),O.addEventListener("input",w),S.addEventListener("submit",(function(e){e.preventDefault(),console.log("".concat(T(),", ").concat(w())),e.target.reset()})),localStorage.setItem(j,2);var x=localStorage.getItem(j);console.log(x)}();
//# sourceMappingURL=03-feedback.ca8048c2.js.map
