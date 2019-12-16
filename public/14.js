(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{166:function(e,s,i){"use strict";var o=i(36);i.n(o).a},167:function(e,s,i){(e.exports=i(2)(!1)).push([e.i,".centerx li {\n  display: inline-flex;\n  margin: 10px;\n}\n",""])},317:function(e,s,i){"use strict";i.r(s);var o={mounted:function(){this.getPermissions()},data:function(){return{role:null,permissions:[],role_name:"",rolePermissions:[],groupPermissions:[],is_requesting:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.role_name}},methods:{getPermissions:function(){var e=this;this.$vs.loading({container:this.$refs.edit.$refs.content,scale:.5}),this.$store.dispatch("rolesAndPermissions/getPermissions").then((function(s){e.permissions=s.data.data,e.getRole()})).catch((function(s){console.log(s),e.$vs.loading.close(e.$refs.edit.$refs.content),e.$vs.notify({title:"Error",text:s.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},getRole:function(){var e=this;this.$store.dispatch("rolesAndPermissions/view",this.$route.params.id).then((function(s){e.$vs.loading.close(e.$refs.edit.$refs.content),e.role=s.data.data.data,0===s.data.data.data.length?e.$router.push("/dashboard/error-404"):(s.data.data.data.permissions.forEach((function(s){e.rolePermissions.push(s.name)})),e.role_name=s.data.data.data.name)})).catch((function(s){console.log(s),e.$vs.loading.close(e.$refs.edit.$refs.content),e.$vs.notify({title:"Error",text:s.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},saveRole:function(){var e=this;this.validateForm&&(this.is_requesting=!0,this.$vs.loading({container:"#btn-save",color:"primary",scale:.45}),this.$store.dispatch("rolesAndPermissions/update",{id:this.$route.params.id,data:{permissions:this.rolePermissions,name:this.role_name,display_name:this.role_name}}).then((function(s){e.is_requesting=!1,e.$vs.loading.close("#btn-save > .con-vs-loading"),e.$router.push("/dashboard/settings/role/".concat(e.$route.params.id)),e.$vs.notify({title:"Success",text:s.data.message,iconPack:"feather",icon:"icon-check",color:"success"})})).catch((function(s){console.log(s),e.is_requesting=!1,e.$vs.loading.close("#btn-save > .con-vs-loading"),e.$vs.notify({title:"Error",text:s.response.data.errors[Object.keys(s.response.data.errors)[0]][0],iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})))},groupPressed:function(e){if(this.groupPermissions.includes(e[0].group))for(var s=0;s<e.length;s++)this.rolePermissions.includes(e[s].name)||this.rolePermissions.push(e[s].name);else for(var i=0;i<e.length;i++)this.rolePermissions.includes(e[i].name)&&this.rolePermissions.splice(this.rolePermissions.indexOf(e[i].name),1)},startBtnLoader:function(e){this.is_loading=!0,this.$vs.loading({background:"primary",color:"#fff",container:e,scale:.45})},endBtnLoader:function(e){this.is_loading=!1,this.$vs.loading.close("".concat(e," > .con-vs-loading"))},notifyToWait:function(){this.vs_alert("Please, wait!","Your request is under process","warning","icon-clock")},vs_alert:function(e,s,i,o){this.$vs.notify({title:e,text:s,color:i,iconPack:"feather",icon:o})}}},n=(i(166),i(1)),t=Object(n.a)(o,(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[e.can("edit-role")?i("vx-card",{ref:"edit",attrs:{title:"Update Role"}},[i("form",[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full mb-2"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{danger:e.errors.has("role_name"),"danger-text":e.errors.first("role_name"),"val-icon-danger":"clear","icon-pack":"feather",icon:"icon-shield","icon-no-border":"","label-placeholder":"Role Name",name:"role_name"},model:{value:e.role_name,callback:function(s){e.role_name=s},expression:"role_name"}})],1)]),e._v(" "),i("div",{staticClass:"vx-row mt-5"},[i("div",{staticClass:"vx-col w-full"},[i("b",[e._v("Role Permissions:")]),e._v(" "),e._l(e.permissions,(function(s,o){return i("ul",[i("br"),e._v(" "),i("vs-checkbox",{attrs:{"vs-value":o},on:{change:function(i){return e.groupPressed(s)}},model:{value:e.groupPermissions,callback:function(s){e.groupPermissions=s},expression:"groupPermissions"}},[i("b",[e._v(e._s(o))])]),e._v(" "),e._l(s,(function(s,o){return i("li",{key:o,staticClass:"ml-8"},[i("vs-checkbox",{attrs:{"vs-value":s.name},model:{value:e.rolePermissions,callback:function(s){e.rolePermissions=s},expression:"rolePermissions"}},[e._v(e._s(s.display_name))])],1)}))],2)}))],2)]),e._v(" "),i("div",{staticClass:"vx-row mt-10"},[i("div",{staticClass:"vx-col w-full"},[i("vs-button",{staticClass:"vs-con-loading__container",attrs:{id:"btn-save",disabled:!e.validateForm,"icon-pack":"feather",icon:"icon-save"},on:{click:function(s){e.is_requesting?e.$store.dispatch("viewWaitMessage",e.$vs):e.saveRole()}}},[e._v("Save")])],1)])])]):e._e()],1)}),[],!1,null,null,null);s.default=t.exports},36:function(e,s,i){var o=i(167);"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(3)(o,n);o.locals&&(e.exports=o.locals)}}]);