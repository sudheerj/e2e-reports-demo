(function(t){function e(e){for(var o,r,d=e[0],s=e[1],l=e[2],a=0,f=[];a<d.length;a++)r=d[a],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,d=1;d<n.length;d++){var s=n[d];0!==c[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/e2e-reports-demo/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b49":function(t,e,n){"use strict";n("bae7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,i,r){var d=Object(o["j"])("todo-list");return Object(o["f"])(),Object(o["c"])(d,{title:"My Tasks"})}n("a4d3"),n("e01a");var i=Object(o["o"])("data-v-150b00e8");Object(o["h"])("data-v-150b00e8");var r={class:"container"},d={class:"row"},s={class:"col-6 py-5"},l={class:"row mb-3"},u={class:"row"},a={class:"col-6 col-sm-10 col-lg-6"},f={class:"list-group"};Object(o["g"])();var b=i((function(t,e,n,c,i,b){var p=Object(o["j"])("create-todo"),O=Object(o["j"])("todo");return Object(o["f"])(),Object(o["c"])("div",r,[Object(o["e"])("div",d,[Object(o["e"])("div",s,[Object(o["e"])("h1",null,Object(o["k"])(n.title),1)])]),Object(o["e"])("div",l,[Object(o["e"])(p,{onOnAdd:e[1]||(e[1]=function(t){return b.addTodo(t)})})]),Object(o["e"])("div",u,[Object(o["e"])("div",a,[Object(o["e"])("ul",f,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["i"])(i.todos,(function(t,e){return Object(o["f"])(),Object(o["c"])(O,{key:e,description:t.description,completed:t.completed,onOnToggle:function(e){return b.toggleTodo(t)},onOnDelete:function(e){return b.deleteTodo(t)},onOnEdit:function(e){return b.editTodo(t,e)}},null,8,["description","completed","onOnToggle","onOnDelete","onOnEdit"])})),128))])])])])})),p=(n("4de4"),Object(o["o"])("data-v-af2c0786"));Object(o["h"])("data-v-af2c0786");var O={class:"d-flex align-items-center list-group-item"},j=Object(o["e"])("span",{class:"fa fa-edit"},null,-1),h=Object(o["e"])("span",{class:"fa fa-trash"},null,-1);Object(o["g"])();var m=p((function(t,e,n,c,i,r){return Object(o["f"])(),Object(o["c"])("li",O,[i.isEditing?(Object(o["f"])(),Object(o["c"])("form",{key:1,class:"flex-grow-1",onSubmit:e[4]||(e[4]=Object(o["n"])((function(t){return r.finishEditing()}),["prevent"]))},[Object(o["m"])(Object(o["e"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.newTodoDescription=t}),onBlur:e[3]||(e[3]=function(t){return r.finishEditing()}),ref:"newTodo"},null,544),[[o["l"],i.newTodoDescription]])],32)):(Object(o["f"])(),Object(o["c"])("span",{key:0,class:["btn border-0 flex-grow-1 text-left shadow-none",{completed:n.completed}],onClick:e[1]||(e[1]=function(e){return t.$emit("on-toggle")})},[Object(o["e"])("span",null,Object(o["k"])(n.description),1)],2)),i.isEditing?Object(o["d"])("",!0):(Object(o["f"])(),Object(o["c"])("button",{key:2,class:"edit-todo btn btn-outline-primary border-0 ml-2",onClick:e[5]||(e[5]=function(t){return r.startEditing()})},[j])),Object(o["e"])("button",{onClick:e[6]||(e[6]=function(e){return t.$emit("on-delete")}),class:"delete-todo btn btn-outline-primary border-0"},[h])])})),g={data:function(){return{isEditing:!1,newTodoDescription:""}},props:{description:String,completed:Boolean},methods:{startEditing:function(){var t=this;this.isEditing?this.finishEditing():(this.newTodoDescription=this.description,this.isEditing=!0,this.$nextTick((function(){return t.$refs.newTodo.focus()})))},finishEditing:function(){this.isEditing=!1,this.$emit("on-edit",this.newTodoDescription)}}};n("0b49");g.render=m,g.__scopeId="data-v-af2c0786";var v=g;function T(t,e,n,c,i,r){return Object(o["f"])(),Object(o["c"])("form",{class:"col-12 col-sm-10 col-md-6 cl-lg-6",onSubmit:e[2]||(e[2]=Object(o["n"])((function(t){return r.addTodo()}),["prevent"]))},[Object(o["m"])(Object(o["e"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.newTodo=t}),type:"text",class:"new-todo form-control",placeholder:"Create a new task..."},null,512),[[o["l"],i.newTodo]])],32)}var w={data:function(){return{newTodo:""}},methods:{addTodo:function(){this.newTodo.length>0&&this.$emit("on-add",this.newTodo),this.newTodo=""}}};w.render=T;var y=w,k={props:{title:String},data:function(){return{todos:[]}},methods:{addTodo:function(t){this.todos.push({description:t,completed:!1})},toggleTodo:function(t){t.completed=!t.completed},deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e!==t}))},editTodo:function(t,e){t.description=e}},components:{Todo:v,CreateTodo:y}};n("d8ab");k.render=b,k.__scopeId="data-v-150b00e8";var E=k,x={name:"App",components:{TodoList:E}};n("9cdc");x.render=c;var _=x;Object(o["b"])(_).mount("#app")},8575:function(t,e,n){},"9cdc":function(t,e,n){"use strict";n("d673")},bae7:function(t,e,n){},d673:function(t,e,n){},d8ab:function(t,e,n){"use strict";n("8575")}});
//# sourceMappingURL=app.f80cd53f.js.map