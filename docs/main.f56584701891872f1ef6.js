(()=>{"use strict";function c(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function d(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function b(e,a,b){return a&&d(e.prototype,a),b&&d(e,b),e}function e(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,k=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return k=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{k||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(d,e){if(d){if("string"==typeof d)return g(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?g(d,e):void 0}}function g(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function h(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function j(d,a,b){return a&&i(d.prototype,a),b&&i(d,b),d}function k(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=l(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function l(d,e){if(d){if("string"==typeof d)return m(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return"Object"===b&&d.constructor&&(b=d.constructor.name),"Map"===b||"Set"===b?Array.from(d):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?m(d,e):void 0}}function m(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}var a=function(){function h(a){c(this,h),this.task=a,this.id=new Date().getTime(),this.completed=!1,this.createdAt=new Date}return b(h,null,[{key:"newTodoFromJson",value:function(a){var b=a.task,c=a.id,d=a.completed,e=a.createdAt,f=new h(b);return f.id=c,f.completed=d,f.createdAt=e,f}}]),h}();var n=function(){function b(){h(this,b),this.getTodoFromLocalStorage()}return j(b,[{key:"addTodo",value:function(b){this.todos.push(b),this.setTodoInLocalStorage()}},{key:"removeTodo",value:function(c){this.todos=this.todos.filter(function(a){return a.id!==c}),this.setTodoInLocalStorage()}},{key:"removeCompletedTodos",value:function(){this.todos=this.todos.filter(function(b){return!b.completed}),this.setTodoInLocalStorage()}},{key:"toggleTodoState",value:function(f){var a,b=e(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;c.id===f&&(c.completed=!c.completed)}}catch(c){b.e(c)}finally{b.f()}this.setTodoInLocalStorage()}},{key:"setTodoInLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"getTodoFromLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(a.newTodoFromJson)}}]),b}();var o=function(e){var a="\n    <li class=\"".concat(e.completed?"completed":"","\" data-id=\"").concat(e.id,"\">\n      <div class=\"view\">\n        <input class=\"toggle\" type=\"checkbox\" ").concat(e.completed?"checked":"",">\n        <label>").concat(e.task,"</label>\n        <button class=\"destroy\"></button>\n      </div>\n      <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n  "),b=document.querySelector(".todo-list"),c=document.createElement("div");return c.innerHTML=a,b.append(c.firstElementChild),c.firstElementChild};var p=new n;p.todos.forEach(o),console.log(p);var q=document.querySelector(".new-todo"),r=document.querySelector(".todo-list"),s=document.querySelector(".clear-completed"),t=document.querySelector(".filters"),u=document.querySelectorAll(".filtro");q.addEventListener("keyup",function(c){if("Enter"===c.key)if(0<q.value.length){var d=new a(q.value);p.addTodo(d),q.value="",o(d),console.log(d)}else alert("\xA1Debes incluir algo de texto en tu nueva tarea!")}),r.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=parseInt(b.getAttribute("data-id"));"input"===a?(p.toggleTodoState(c),b.classList.toggle("completed")):"button"===a&&(p.removeTodo(c),r.removeChild(b))}),s.addEventListener("click",function(){var d=r.children.length;if(0<d){p.removeCompletedTodos();for(var a,b=d-1;0<=b;b--)a=r.children[b],"completed"===a.classList.value&&r.removeChild(a)}}),t.addEventListener("click",function(g){var a=g.target.text;if(a){u.forEach(function(b){return b.classList.remove("selected")}),g.target.classList.add("selected");var b,c=k(r.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove("hidden");var e=d.classList.contains("completed");"Pendientes"===a?e&&d.classList.add("hidden"):"Completados"===a?e||d.classList.add("hidden"):void 0}}catch(b){c.e(b)}finally{c.f()}}})})();