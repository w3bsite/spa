(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{bc13:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Nav",[e("keep-alive",{attrs:{include:"addnew"}},[e("router-view")],1)],1)},o=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("q-layout",{staticClass:"shadow-2",attrs:{view:"lHh lpr lFf"}},[e("q-page-container",[e("q-page",{staticClass:"row no-wrap"},[e("div",{staticClass:"col"},[e("div",{staticClass:"column full-height"},[e("q-header",{attrs:{"reveal-offset":50,reveal:"",elevated:""}},[e("q-toolbar",{staticClass:"bg-pink shadow-4"},[e("q-btn",{staticClass:"q-mr-sm",attrs:{to:{name:"Home Page"},flat:"",round:"",dense:"",icon:"menu"}}),e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),e("q-toolbar-title",[t._v("CMS "+t._s(t.page))]),e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"whatshot"},on:{click:function(t){return this.$q.dark.toggle()}}})],1)],1),e("q-page",[t._t("default",null,{path:t.page})],2),e("q-footer",{attrs:{reveal:"",elevated:""}},[e("div",{staticClass:"text-white q-gutter-y-md bg-black q-card shadow-4"},t._l(t.rout,(function(a){return e("q-tabs",{key:a.path,staticClass:"text-h4",attrs:{"inline-label":"","outside-arrows":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(a.children,(function(t,a){return e("q-route-tab",{key:a,attrs:{to:{name:t.name},icon:t.icon,label:t.name,ripple:{color:"pink"}}})})),1)})),1)])],1)])])],1)],1)],1)},l=[],s={name:"Nav",data(){return{tab:"Home Page",rout:[{name:"Home",path:"/",redirect:{name:"Home Page"},children:[{name:"Home Page",icon:"home",path:"home"},{name:"All Articles",icon:"article",path:"articles",meta:{icon:"task",icon:"article",type:"/articles"}},{name:"My Posts",icon:"list",path:"posts",meta:{icon:"task"}},{name:"My Chart",icon:"analytics",path:"chart",meta:{icon:"analytics"}},{name:"Add New!",icon:"mail",path:"add"},{name:"About Us",icon:"info",path:"me"},{name:"Test",icon:"help",path:"test"},{name:"google",icon:"google",path:"Login"}]},{path:"*"}],thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"black",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"white",width:"9px",opacity:.2}}},mounted(){},computed:{page:function(){return this.$route.path}},methods:{}},i=s,c=e("2877"),u=Object(c["a"])(i,r,l,!1,null,null,null),d=u.exports,p={name:"Home",components:{Nav:d},data(){return{}},mounted(){}},h=p,m=Object(c["a"])(h,n,o,!1,null,null,null);a["default"]=m.exports}}]);