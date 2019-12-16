(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(t,e,s){"use strict";var a=s(33);s.n(a).a},159:function(t,e,s){(t.exports=s(2)(!1)).push([t.i,".vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n",""])},311:function(t,e,s){"use strict";s.r(e);var a={name:"profile",mounted:function(){this.form.patient_id=this.$route.params.id,this.getPatientData()},data:function(){return{patient:null,form:{description:"",to_be_paid:0,paid:0,patient_id:null},is_requesting:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.form.description&&this.form.paid>0}},methods:{getPatientData:function(){var t=this;this.$vs.loading({container:this.$refs.view.$refs.content,scale:.5}),this.$store.dispatch("patient/view",this.$route.params.id).then((function(e){t.$vs.loading.close(t.$refs.view.$refs.content),t.patient=e.data.data.data})).catch((function(e){console.log(e),t.$vs.loading.close(t.$refs.view.$refs.content),t.$vs.notify({title:"Error",text:e.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},createPayment:function(){var t=this;this.validateForm&&(this.is_requesting=!0,this.$vs.loading({container:"#add-payment-btn",color:"danger",scale:.45}),this.$store.dispatch("payment/create",this.form).then((function(e){t.is_requesting=!1,t.$vs.loading.close("#add-payment-btn > .con-vs-loading"),t.patient.payments.push(e.data.data.data),t.patient.paid_payments+=t.form.paid,t.form.paid=0,t.$vs.notify({title:"Success",text:e.data.message,iconPack:"feather",icon:"icon-check",color:"success"})})).catch((function(e){console.log(e),t.is_requesting=!1,t.$vs.loading.close("#add-payment-btn > .con-vs-loading"),t.$vs.notify({title:"Error",text:e.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})))},confirmToDeletePayment:function(t){this.$vs.dialog({type:"confirm",color:"danger",title:"Are you sure!",text:"This data can not be retrieved again.",accept:this.deletePayment,parameters:[t]})},deletePayment:function(t){var e=this;this.is_requesting=!0,this.$vs.loading({container:"#delete-payment-btn-".concat(t[0].id),color:"danger",scale:.45}),this.$store.dispatch("payment/delete",t[0].id).then((function(s){e.is_requesting=!1,e.$vs.loading.close("#delete-payment-btn-".concat(t[0].id," > .con-vs-loading")),e.patient.payments=e.patient.payments.filter((function(e){return e.id!==t[0].id})),e.patient.paid_payments-=t[0].paid,e.$vs.notify({title:"Success",text:s.data.message,iconPack:"feather",icon:"icon-check",color:"success"})})).catch((function(s){console.log(s),e.is_requesting=!1,e.$vs.loading.close("#delete-payment-btn-".concat(t[0].id," > .con-vs-loading")),e.$vs.notify({title:"Error",text:s.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}}},i=(s(158),s(1)),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vx-col w-full mb-base"},[t.can("view-patient")?s("vx-card",{ref:"view",attrs:{title:"Personal Information",collapseAction:"",refreshContentAction:""},on:{refresh:t.getPatientData}},[t.patient?s("vs-row",[s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Name: ")]),t._v(" "+t._s(t.patient.first_name)+" "+t._s(t.patient.last_name)+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Gender: ")]),t._v(" "+t._s(t.patient.gender)+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Email: ")]),t._v(" "+t._s(t.patient.email?t.patient.email:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Phone(s): ")]),t._v(" "),t._l(t.patient.phones,(function(e,a){return[s("span",{staticClass:"txt-hover",on:{click:function(s){return t.copyToClipboard(e.number)}}},[t._v(t._s(e.number))]),t._v(" "),a!==t.patient.phones.length-1?[t._v(", ")]:t._e()]})),t._v(" "),0===t.patient.phones.length?[t._v("\n                            No Telephones Assigned!\n                        ")]:t._e()],2),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("City: ")]),t._v(" "+t._s(t.patient.city?t.patient.city:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Country: ")]),t._v(" "+t._s(t.patient.country?t.patient.country:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Address: ")]),t._v(" "+t._s(t.patient.address?t.patient.address:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Birth Date: ")]),t._v(" "+t._s(t.patient.birth_date?t.patient.birth_date:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Occupation: ")]),t._v(" "+t._s(t.patient.occupation?t.patient.occupation:"Not Specified!")+"\n                    ")]),t._v(" "),s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("b",[t._v("Referred From: ")]),t._v(" "+t._s(t.patient.reference?t.patient.reference:"No Body")+"\n                    ")])],1):t._e(),t._v(" "),s("vs-row",{attrs:{"vs-justify":"center"}},[t.can("edit-patient")?s("vs-button",{attrs:{to:"/dashboard/patient/"+t.$route.params.id+"/edit",size:"small","icon-pack":"feather",icon:"icon-edit",type:"filled"}},[t._v("Edit Information")]):t._e()],1)],1):t._e()],1),t._v(" "),t.can("browse-payment")?s("div",{staticClass:"vx-col w-full mb-base"},[s("vx-card",{attrs:{title:"Payments Information",collapseAction:""}},[t.patient?s("vs-table",{attrs:{data:t.patient.payments},scopedSlots:t._u([{key:"default",fn:function(e){e.data;return t._l(t.patient.payments,(function(e,a){return s("vs-tr",{key:a},[s("vs-td",[t._v(t._s(a+1))]),t._v(" "),s("vs-td",[t._v(t._s(e.description))]),t._v(" "),s("vs-td",[t._v(t._s(e.created_at.split(" ")[0]))]),t._v(" "),s("vs-td",[t._v(t._s(e.created_at.split(" ")[1]))]),t._v(" "),s("vs-td",[t._v(t._s(e.to_be_paid))]),t._v(" "),s("vs-td",[t._v(t._s(e.paid))]),t._v(" "),s("vs-td",[s("div",{staticClass:"flex"},[s("vs-button",{attrs:{"icon-pack":"feather",radius:"",icon:"icon-file-text",type:"border"}}),t._v(" "),t.can("delete-payment")?s("vs-button",{staticClass:"ml-3",attrs:{id:"delete-payment-btn-"+e.id,"icon-pack":"feather",radius:"",color:"danger",icon:"icon-trash",type:"border"},on:{click:function(s){return t.confirmToDeletePayment(e)}}}):t._e()],1)])],1)}))}}],null,!1,3747968163)},[s("template",{slot:"thead"},[s("vs-th",[t._v("#")]),t._v(" "),s("vs-th",[t._v("Description")]),t._v(" "),s("vs-th",[t._v("Date")]),t._v(" "),s("vs-th",[t._v("Time")]),t._v(" "),s("vs-th",[t._v("To Be Paid")]),t._v(" "),s("vs-th",[t._v("Paid")]),t._v(" "),s("vs-th",[t._v("Action")])],1)],2):t._e(),t._v(" "),t.can("create-payment")?s("vs-divider"):t._e(),t._v(" "),t.patient&&t.can("create-payment")?s("vs-row",[s("vs-row",{staticClass:"mb-5",attrs:{"vs-w":"12"}},[s("h3",[t._v("Create Payment")])]),t._v(" "),s("vs-row",{staticClass:"mb-5",attrs:{"vs-w":"12"}},[s("vs-col",{staticClass:"mb-5",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12"}},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full",attrs:{name:"description","label-placeholder":"Description","icon-pack":"feather",icon:"icon-file-text",danger:t.errors.has("description"),"danger-text":t.errors.first("description"),"val-icon-danger":"clear"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),s("vs-col",{staticClass:"mb-5 pt-3",attrs:{"vs-lg":"6","vs-sm":"12","vs-xs":"12","vs-type":"flex","vs-justify":"center","vs-align":"center"}},[s("vs-input-number",{attrs:{min:"0",max:t.patient.payments_total-t.patient.paid_payments,label:"Amount To Pay:",step:50},model:{value:t.form.paid,callback:function(e){t.$set(t.form,"paid",e)},expression:"form.paid"}}),t._v(" "),s("b",{staticClass:"ml-2"},[t._v(" Remaining: ")]),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.patient.payments_total-t.patient.paid_payments-t.form.paid)+" EGP")])],1),t._v(" "),s("vs-col",{staticClass:"mt-3",attrs:{"vs-w":"12","vs-type":"flex","vs-justify":"center","vs-align":"center"}},[s("vs-button",{attrs:{disabled:!t.validateForm,id:"add-payment-btn",size:"small",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(e){t.is_requesting?t.$store.dispatch("viewWaitMessage",t.$vs):t.createPayment()}}},[t._v("Add Payment")])],1)],1)],1):t._e()],1)],1):t._e(),t._v(" "),t.can("browse-medical-report")?s("div",{staticClass:"vx-col w-full mb-base"},[s("vx-card",{attrs:{title:"Medical Reports",collapseAction:""}},[s("b",[t._v("Comming Soon")])])],1):t._e()])}),[],!1,null,null,null);e.default=n.exports},33:function(t,e,s){var a=s(159);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(3)(a,i);a.locals&&(t.exports=a.locals)}}]);