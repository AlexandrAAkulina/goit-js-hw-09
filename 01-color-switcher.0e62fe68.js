const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function a(){t.disabled?(t.disabled=!1,e.disabled=!0):(t.disabled=!0,e.disabled=!1)}t.addEventListener("click",(function(){a(),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),a()}));
//# sourceMappingURL=01-color-switcher.0e62fe68.js.map
