var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");const i={formEl:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.formEl.addEventListener("submit",(function(e){e.preventDefault();let o=Number(i.delay.value),t=Number(i.amount.value),n=Number(i.step.value);for(let e=1;e<=t;e+=1)l(e,o).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=n}));
//# sourceMappingURL=03-promises.d1f38af2.js.map
