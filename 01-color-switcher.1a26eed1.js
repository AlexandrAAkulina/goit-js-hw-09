!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;t.addEventListener("click",(function(){t.disable=!0,e.disable=!1,a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){e.disable=!0,t.disable=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.1a26eed1.js.map
