const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;function a(n){t.disabled=n,e.disabled=!n}t.addEventListener("click",(function(){a(!0),n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),a(!1)}));
//# sourceMappingURL=01-color-switcher.d78da89e.js.map