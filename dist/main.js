(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),d=t.n(o),r=t(645),c=t.n(r)()(d());c.push([e.id,"body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n}\n\n.container {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background: darkcyan;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.container-content {\n    height: 80%;\n    width: 80%;\n    background: darkcyan;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n\n}\n\n.content-header {\n    color: white;\n    height: 15%;\n    width: 100%;\n    background-color: darkslategrey;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n}\n\n.header-buttons-holder {\n    display: flex;\n    height: 100%;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-button {\n    height: 50%;\n    width: 25%;\n    color: white;\n    border: 1px solid white;\n    background: black;\n}\n\n.header-button:hover {\n    background-color: darkslategray;\n    \n    color: white;\n}\n\n.content {\n    height: 85%;\n    width: 100%;\n    display: flex;\n    \n}\n\n.content-menu {\n    background: cadetblue;\n    height: 100%;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn-menu{\n    height: 15%;\n    border: 0;\n    border-bottom: 1px solid cadetblue;\n    background-color: aquamarine;\n    font-size: 200%;\n    color: cadetblue;\n    padding: 0;\n}\n\n.btn-menu:hover{\n    background-color: cadetblue;\n    border-bottom: 1px solid white;\n    color: aquamarine;\n}\n\n.content-view, .content-view-project {\n    \n    height: 100%;\n    width: 80%;\n    display: flex;\n    flex-direction:  column;\n    overflow: auto;\n\n}\n\n.todo-holder {\n    height: calc(15% - 1px);\n    width: 100%;\n    background-color: white;\n    display: flex;\n    border-bottom: 1px solid white;\n    gap: 1px;\n    overflow: auto;\n    overflow-x: auto;\n    \n}\n\n#todoHolder-title {\n    background-color: red;\n    width: calc(20% - 2px);\n}\n\n#todoHolder-dueDate {\n    background-color: green;\n    width: calc(20% - 2px);\n}\n\n#todoHolder-desc {\n    background-color: blue;\n    width: calc(60% - 2px);\n    overflow: auto;\n}\n\n#todoHolder-priority {\n    width: calc(20% - 2px);\n}\n\n#todoHolder-title, #todoHolder-dueDate, #todoHolder-desc, #todoHolder-priority {\n    border: 1px solid black;\n    background: white;\n    height: calc(100% - 2px);\n    display: flex;\n    justify-content: center;\n    align-items: center;  \n    font-size: 200%;\n\n}\n\n.add-task-form {\n    width: 100%;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n    background-color: aquamarine ;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.add-task-form label {\n    align-content: center;\n    width: 100%;\n}\n\n.add-task-form input {\n    width: 100%;\n    padding: 0;\n    border: 1px;\n}\n\n.form-buttons {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n\n\n.content-project-header {\n    width: 100%;\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content-project-header-title {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: darkcyan;\n    font-size: 200%;\n    \n}\n\n.content-project-sub-content {\n    height: 90%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.project-button-holder{\n    height: 10%;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    \n}\n\n.project-buttons {\n    width: 40%;\n    background-color: aquamarine;\n    border-radius: 10px;\n    border: 0px;\n    color: cadetblue;\n    font-size: 100%;\n    box-shadow: 0px 0px 2px 2px;\n}\n\n.project-buttons:hover {\n    background-color: darkcyan;\n    color: aquamarine;\n    font-size: 200%;\n    transition: 80ms;\n}\n\n.project-item-holder {\n    height: 70%;\n    width: 80%;\n    margin-top: 20px;\n    background: darkcyan;\n    box-shadow: 0px 0px 10px 3px;\n    border-radius: 10px;\n    padding: 5px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,d,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(c[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var a=e[i],l=o.base?a[0]+o.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var p=t(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=d(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function d(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,d){var r=o(e=e||[],d=d||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var a=o(e,d),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=a}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var d=void 0!==t.layer;d&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,d&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var d=n[o];if(void 0!==d)return d.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),d=t.n(o),r=t(569),c=t.n(r),i=t(565),a=t.n(i),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(426),h={};function f(e){const n=document.createElement("div");n.classList.add("todo-holder");const t=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div");return n.appendChild(t),n.appendChild(o),n.appendChild(d),n.appendChild(r),n.id=e.title,t.id="todoHolder-title",o.id="todoHolder-dueDate",d.id="todoHolder-desc",r.id="todoHolder-priority",t.innerHTML=e.title,o.innerHTML=e.dueDate,d.innerHTML=e.description,r.innerHTML=e.priority,console.log(e),n}function b(e){const n=document.querySelector("#content-view");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(n);for(var t=0;t<e.length;t++)console.log(e[t]),n.appendChild(f(e[t]))}function v(e,n,t,o){return new class{constructor(e,n,t,o){this.title=e,this.dueDate=n,this.desc=t,this.priority=o}}(e,n,t,o)}function g(e,n,t,o){const d=document.createElement("label"),r=document.createElement("input");d.textContent=n,r.id=t,r.type=o,d.setAttribute("for",t),e.appendChild(d),e.appendChild(r)}h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=s(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{console.log("DOM Content loaded"),document.querySelector("#container").appendChild(function(){const e=document.createElement("div");e.classList.add("container-content");const n=document.createElement("h1");n.classList.add("content-header");const t=document.createElement("div");t.classList.add("header-title"),t.innerText="Project: Todo List";const o=document.createElement("div");o.classList.add("header-buttons-holder"),o.id="header-buttons-holder";const d=document.createElement("button");d.classList.add("header-button"),d.textContent="Cancel",d.id="header-button-cancel";const r=document.createElement("button");r.classList.add("header-button"),r.textContent="Delete",r.id="header-button-delete",o.appendChild(d),o.appendChild(r),n.appendChild(t),n.appendChild(o);const c=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");return c.classList.add("content"),i.classList.add("content-menu"),a.classList.add("content-view"),i.id="content-menu",a.id="content-view",function(e){const n=document.createElement("button"),t=document.createElement("button"),o=document.createElement("button"),d=document.createElement("button");n.classList.add("btn-menu"),t.classList.add("btn-menu"),o.classList.add("btn-menu"),d.classList.add("btn-menu"),n.id="btn-todo",t.id="btn-reset",o.id="btn-add-task",d.id="btn-project",n.innerHTML="To Do",t.innerHTML="Reset",o.innerHTML="Add Task",d.innerHTML="Project",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(d)}(i),c.appendChild(i),c.appendChild(a),e.appendChild(n),e.appendChild(c),e}());const e=document.querySelector("#content-view");console.log(e);let n=[];n.push(new v("Run","25/06/2002","Keep running",1)),n.push(new v("Sleep","25/06/2002","Sleep away",2)),b(n);const t=document.querySelector("#btn-add-task");console.log(t),function(){const e=document.querySelector(".content-menu"),n=document.createElement("form");n.classList.add("add-task-form"),n.id="add-task-form",g(n,"title","form-title","text"),g(n,"due date","form-due-date","date"),g(n,"description","form-description","text"),g(n,"priority","form-priority","number"),function(e){const n=document.createElement("div");n.classList.add("form-buttons");const t=document.createElement("button"),o=document.createElement("button");t.textContent="Submit",o.textContent="Cancel",t.id="btnSubmit",o.id="btnCancel",n.appendChild(t),n.appendChild(o),e.appendChild(n)}(n),e.appendChild(n)}();const o=document.getElementById("add-task-form"),d=document.getElementById("btnSubmit"),r=document.getElementById("btnCancel"),c=document.getElementById("header-button-cancel"),i=document.getElementById("header-button-delete"),a=(document.getElementById("header-buttons-holder"),document.getElementById("btn-reset")),l=document.getElementById("btn-todo"),s=document.getElementById("btn-project");console.log(s),l.addEventListener("click",(()=>{e.classList.remove("content-view-project"),e.classList.add("content-view"),b(n)})),c.addEventListener("click",(()=>{})),i.addEventListener("click",(()=>{const e=prompt("Enter task title");for(let t=0;t<n.length;t++)n[t].title===e&&delete n[t];const t=n.filter((function(e){return null!=e}));n=t,console.log(t),console.log(n),b(n)})),t.addEventListener("click",(()=>{o.style.display="flex"})),d.addEventListener("click",(e=>{e.preventDefault(),function(e){const n=document.getElementById("form-title").value,t=document.getElementById("form-due-date").value,o=document.getElementById("form-description").value,d=document.getElementById("form-priority").value;console.log(o),e.push({title:n,dueDate:t,description:o,priority:d}),console.log(e),b(e)}(n),o.reset(),o.style.display="none"})),r.addEventListener("click",(e=>{e.preventDefault(),o.reset(),o.style.display="none"})),a.addEventListener("click",(e=>{for(var t=0;t<=n.length;t++)n.pop();console.log(n),b(n)})),s.addEventListener("click",(()=>{!function(){const e=document.getElementById("content-view");console.log(e),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(e),e.classList.remove("content-view"),e.classList.add("content-view-project");const n=document.createElement("div");n.classList.add("content-project-sub-content");const t=document.createElement("div");t.classList.add("content-project-header");const o=document.createElement("div");o.classList.add("content-project-header-title"),o.innerText="PROJECTS";const d=document.createElement("div"),r=document.createElement("button"),c=document.createElement("button");r.classList.add("project-buttons"),c.classList.add("project-buttons"),r.id="project-button-create",c.id="project-button-delete",r.textContent="Create",c.textContent="Delete",d.classList.add("project-button-holder");const i=document.createElement("div");i.classList.add("project-item-holder"),d.appendChild(r),d.appendChild(c),t.appendChild(o),e.appendChild(t),n.appendChild(d),n.appendChild(i),e.appendChild(n),r.addEventListener("click",(()=>{console.log("createProject"),console.log("Creating project")})),c.addEventListener("click",(()=>{console.log("deleteProject")}))}()}))}))})()})();