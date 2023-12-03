(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),d=n.n(o),r=n(645),c=n.n(r)()(d());c.push([e.id,"body{\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n}\n\n.container {\n    display: flex;\n    height: 100%;\n    width: 100%;\n    background: darkcyan;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.container-content {\n    height: 80%;\n    width: 80%;\n    background: darkcyan;\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n\n}\n\n.content-header {\n    color: white;\n    height: 15%;\n    width: 100%;\n    background-color: darkslategrey;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n}\n\n.header-buttons-holder {\n    display: flex;\n    height: 100%;\n    width: 50%;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-title {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header-button {\n    height: 50%;\n    width: 25%;\n    color: white;\n    border: 1px solid white;\n    background: black;\n}\n\n.header-button:hover {\n    background-color: darkslategray;\n    \n    color: white;\n}\n\n.content {\n    height: 85%;\n    width: 100%;\n    display: flex;\n    \n}\n\n.content-menu {\n    background: cadetblue;\n    height: 100%;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn-menu{\n    height: 15%;\n    border: 0;\n    border-bottom: 1px solid cadetblue;\n    background-color: aquamarine;\n    font-size: 200%;\n    color: cadetblue;\n    padding: 0;\n}\n\n.btn-menu:hover{\n    background-color: cadetblue;\n    border-bottom: 1px solid white;\n    color: aquamarine;\n}\n\n.content-view, .content-view-project {\n    \n    height: 100%;\n    width: 80%;\n    display: flex;\n    flex-direction:  column;\n    overflow: auto;\n    align-items: center;\n\n}\n\n.todo-holder {\n    height: calc(10% - 1px);\n    width: 90%;\n    background-color: white;\n    display: flex;\n    border-bottom: 1px solid white;\n    gap: 1px;\n    overflow: auto;\n    overflow-x: auto;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 10px;\n    border-radius: 10px;\n    background: darkcyan;\n    \n}\n\n#todoHolder-title {\n    background-color: red;\n    width: 10%;\n}\n\n#todoHolder-dueDate {\n    background-color: green;\n    width: 10%;\n}\n\n#todoHolder-desc {\n    background-color: blue;\n    width: 50%;\n    overflow: auto;\n}\n\n#todoHolder-priority {\n    width: 10%;\n}\n\n#todoHolder-title, #todoHolder-dueDate, #todoHolder-desc, #todoHolder-priority {\n    \n    background: aquamarine;\n    height: calc(80% - 2px);\n    display: flex;\n    justify-content: center;\n    align-items: center;  \n    font-size: 100%;\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px 2px;\n\n}\n\n.add-task-form {\n    width: 100%;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n    background-color: aquamarine ;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\n.add-task-form label, .project-form label{\n    align-content: center;\n    width: 100%;\n}\n\n.add-task-form input , .project-form input{\n    width: 100%;\n    padding: 0;\n    border: 1px;\n}\n\n.form-buttons {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n\n\n.content-project-header {\n    width: 100%;\n    height: 10%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content-project-header-title {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: darkcyan;\n    font-size: 200%;\n    color: aquamarine;\n    \n}\n\n.content-project-sub-content {\n    height: 90%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.project-button-holder{\n    height: 10%;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    \n}\n\n.project-buttons {\n    width: 40%;\n    background-color: aquamarine;\n    border-radius: 10px;\n    border: 0px;\n    color: cadetblue;\n    font-size: 100%;\n    box-shadow: 0px 0px 2px 2px;\n}\n\n.project-buttons:hover {\n    background-color: darkcyan;\n    color: aquamarine;\n    font-size: 200%;\n    transition: 80ms;\n}\n\n.project-item-holder {\n    height: 70%;\n    width: 80%;\n    margin-top: 20px;\n    background: darkcyan;\n    box-shadow: 0px 0px 10px 3px;\n    border-radius: 10px;\n    padding: 5px;\n    overflow-y: auto;\n}\n\n.project-item {\n    height: 10%;\n    width: 100%;\n    background-color: darkcyan;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.8);\n}\n\n\n.project-item-todo-holder, .project-item-title-holder {\n    height: 70%;\n    width: 40%;\n    background: aquamarine;\n    border-radius: 10px;\n    box-shadow: 0px 0px 2px 2px;\n    display: flex;\n    justify-content: center;\n    align-items: center;    \n}\n\n.project-form {\n    width: 100%;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; \n    background-color: aquamarine ;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\n.project-form button{\n    margin-top: 10px;\n    width: 100%;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(c[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var a=e[i],l=o.base?a[0]+o.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var p=n(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=d(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var r=o(e=e||[],d=d||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var a=o(e,d),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),d=n.n(o),r=n(569),c=n.n(r),i=n(565),a=n.n(i),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(426),h={};function f(e){const t=document.createElement("div");t.classList.add("todo-holder");const n=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),r=document.createElement("div");return t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(r),t.id=e.title,n.id="todoHolder-title",o.id="todoHolder-dueDate",d.id="todoHolder-desc",r.id="todoHolder-priority",n.innerHTML=e.title,o.innerHTML=e.dueDate,d.innerHTML=e.description,r.innerHTML=e.priority,console.log(e),t}function b(e){const t=document.querySelector("#content-view");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t);for(var n=0;n<e.length;n++)console.log(e[n]),t.appendChild(f(e[n]))}function g(e,t,n,o){return new class{constructor(e,t,n,o){this.title=e,this.dueDate=t,this.desc=n,this.priority=o}}(e,t,n,o)}function v(e,t,n,o){const d=document.createElement("label"),r=document.createElement("input");d.textContent=t,r.id=n,r.type=o,d.setAttribute("for",n),e.appendChild(d),e.appendChild(r)}function y(e){console.log(e);const t=document.getElementById("project-item-holder");for(console.log(t.firstChild);t.firstChild;)t.removeChild(t.firstChild);console.log(t);for(var n=0;n<e.length;n++)x(e[n],t)}function x(e,t){const n=document.createElement("div");n.classList.add("project-item");const o=document.createElement("div"),d=document.createElement("div");o.classList.add("project-item-title-holder"),d.classList.add("project-item-todo-holder"),o.innerHTML=e.title,d.textContent=e.todoList,n.appendChild(o),n.appendChild(d),t.appendChild(n)}function E(e){!function(e){const t=document.getElementById("content-view");console.log(t),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),t.classList.remove("content-view"),t.classList.add("content-view-project");const n=document.createElement("div");n.classList.add("content-project-sub-content");const o=document.createElement("div");o.classList.add("content-project-header");const d=document.createElement("div");d.classList.add("content-project-header-title"),d.innerText=`PROJECTS: ${e}`;const r=document.createElement("div"),c=document.createElement("button"),i=document.createElement("button");c.classList.add("project-buttons"),i.classList.add("project-buttons"),c.id="project-button-create",i.id="project-button-delete",c.textContent="Create",i.textContent="Delete",r.classList.add("project-button-holder");const a=document.createElement("div");a.classList.add("project-item-holder"),a.id="project-item-holder",r.appendChild(c),r.appendChild(i),o.appendChild(d),t.appendChild(o),n.appendChild(r),n.appendChild(a),t.appendChild(n)}(e.length),y(e);const t=document.getElementById("project-button-create"),n=document.getElementById("project-button-delete");t.addEventListener("click",(()=>{console.log("createProject"),document.querySelector("#project-form").style.display="flex",y(e)})),n.addEventListener("click",(()=>{console.log("deleteProject")}))}function C(e,t){return new class{constructor(e,t){this.title=e,this.todoList=t}}(e,t)}function j(e,t,n,o){const d=document.createElement("label"),r=document.createElement("input");d.textContent=t,r.id=n,r.type=o,d.setAttribute("for",n),e.appendChild(d),e.appendChild(r)}h.styleTagTransform=p(),h.setAttributes=a(),h.insert=c().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=s(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{console.log("DOM Content loaded"),document.querySelector("#container").appendChild(function(){const e=document.createElement("div");e.classList.add("container-content");const t=document.createElement("h1");t.classList.add("content-header");const n=document.createElement("div");n.classList.add("header-title"),n.innerText="Project: Todo List";const o=document.createElement("div");o.classList.add("header-buttons-holder"),o.id="header-buttons-holder";const d=document.createElement("button");d.classList.add("header-button"),d.textContent="Cancel",d.id="header-button-cancel";const r=document.createElement("button");r.classList.add("header-button"),r.textContent="Delete",r.id="header-button-delete",o.appendChild(d),o.appendChild(r),t.appendChild(n),t.appendChild(o);const c=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div");return c.classList.add("content"),i.classList.add("content-menu"),a.classList.add("content-view"),i.id="content-menu",a.id="content-view",function(e){const t=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button"),d=document.createElement("button");t.classList.add("btn-menu"),n.classList.add("btn-menu"),o.classList.add("btn-menu"),d.classList.add("btn-menu"),t.id="btn-todo",n.id="btn-reset",o.id="btn-add-task",d.id="btn-project",t.innerHTML="To Do",n.innerHTML="Reset",o.innerHTML="Add Task",d.innerHTML="Project",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(d)}(i),c.appendChild(i),c.appendChild(a),e.appendChild(t),e.appendChild(c),e}());const e=document.querySelector("#content-view");console.log(e);let t=[];t.push(new g("Run","25/06/2002","Keep running",1)),t.push(new g("Sleep","25/06/2002","Sleep away",2));var n=[];const o=[];o.push(C(1,[2,3])),b(t);const d=document.querySelector("#btn-add-task");console.log(d),function(){const e=document.querySelector(".content-menu"),t=document.createElement("form");t.classList.add("add-task-form"),t.id="add-task-form",v(t,"title","form-title","text"),v(t,"due date","form-due-date","date"),v(t,"description","form-description","text"),v(t,"priority","form-priority","number"),function(e){const t=document.createElement("div");t.classList.add("form-buttons");const n=document.createElement("button"),o=document.createElement("button");n.textContent="Submit",o.textContent="Cancel",n.id="btnSubmit",o.id="btnCancel",t.appendChild(n),t.appendChild(o),e.appendChild(t)}(t),e.appendChild(t)}(),function(){const e=document.getElementById("content-menu");console.log(e);const t=document.createElement("form");t.classList.add("project-form"),t.id="project-form",j(t,"title","project-form-title","text"),j(t,"todo-list-title","project-form-todolist","Text"),function(e){const t=document.createElement("button"),n=document.createElement("button"),o=document.createElement("button");t.textContent="Add task",n.textContent="Submit",o.textContent="Cancel",t.id="addTask-project-form",n.id="submit-project-form",o.id="cancel-project-form",e.appendChild(t),e.appendChild(n),e.appendChild(o)}(t),e.appendChild(t)}();const r=document.getElementById("add-task-form"),c=document.getElementById("btnSubmit"),i=document.getElementById("btnCancel"),a=document.getElementById("header-button-cancel"),l=document.getElementById("header-button-delete"),s=(document.getElementById("header-buttons-holder"),document.getElementById("btn-reset")),u=document.getElementById("btn-todo"),p=document.getElementById("btn-project"),m=document.getElementById("addTask-project-form"),h=document.getElementById("submit-project-form"),f=document.getElementById("cancel-project-form");console.log(p),u.addEventListener("click",(()=>{e.classList.remove("content-view-project"),e.classList.add("content-view"),b(t)})),a.addEventListener("click",(()=>{})),l.addEventListener("click",(()=>{const e=prompt("Enter task title");for(let n=0;n<t.length;n++)t[n].title===e&&delete t[n];const n=t.filter((function(e){return null!=e}));t=n,console.log(n),console.log(t),b(t)})),d.addEventListener("click",(()=>{r.style.display="flex"})),c.addEventListener("click",(e=>{e.preventDefault(),function(e){const t=document.getElementById("form-title").value,n=document.getElementById("form-due-date").value,o=document.getElementById("form-description").value,d=document.getElementById("form-priority").value;console.log(o),e.push({title:t,dueDate:n,description:o,priority:d}),console.log(e),b(e)}(t),r.reset(),r.style.display="none"})),i.addEventListener("click",(e=>{e.preventDefault(),r.reset(),r.style.display="none"})),s.addEventListener("click",(e=>{for(var n=0;n<=t.length;n++)t.pop();console.log(t),b(t)})),p.addEventListener("click",(()=>{E(o)})),m.addEventListener("click",(e=>{e.preventDefault(),console.log("Hi");const t=document.getElementById("project-form-todolist");console.log(t),n.push(t.value),t.value="",console.log(n)})),h.addEventListener("click",(e=>{e.preventDefault(),console.log("Hello");const t=document.getElementById("project-form-title");console.log(t.value),o.push(C(t.value,n)),console.log(o),E(o),n=[],document.querySelector("#project-form").style.display="none"})),f.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector("#project-form");t.reset(),t.style.display="none"}))}))})()})();