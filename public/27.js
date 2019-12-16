(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{318:function(t,e,a){"use strict";a.r(e);var s={name:"browse",mounted:function(){this.can("view-reservation")&&(this.getReservationTypes(),this.getReservationDurations())},data:function(){return{is_requesting:!1,reservation_types:[],reservation_durations:[],reservation_durations_total_items:0,currentDurationPage:1,sortFilter:"sortDesc=date"}},methods:{getReservationTypes:function(){var t=this;this.$vs.loading({container:this.$refs.reservation_type.$refs.content,scale:.5}),this.$store.dispatch("reservationType/getData").then((function(e){t.$vs.loading.close(t.$refs.reservation_type.$refs.content),t.reservation_types=e.data.data.data})).catch((function(e){console.log(e),t.$vs.loading.close(t.$refs.reservation_type.$refs.content),t.$vs.notify({title:"Error",text:e.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},getReservationDurations:function(){var t=this;this.$vs.loading({container:this.$refs.reservation_duration.$refs.content,scale:.5}),this.$store.dispatch("reservationDuration/getData","?page=".concat(this.currentDurationPage,"&paginate=15&").concat(this.sortFilter)).then((function(e){t.$vs.loading.close(t.$refs.reservation_duration.$refs.content),t.reservation_durations=e.data.data.data,t.reservation_durations_total_items=e.data.data.meta.pagination.total})).catch((function(e){t.$vs.loading.close(t.$refs.reservation_duration.$refs.content),t.$vs.notify({title:"Error",text:e.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},confirmDeleteReservation:function(t){this.$vs.dialog({type:"confirm",color:"danger",title:"Are you sure!",text:"This data can not be retrieved again.",accept:this.deleteReservationType,parameters:[t]})},deleteReservationType:function(t){var e=this;this.is_requesting=!0,this.$vs.loading({container:"#btn-type-delete-".concat(t[0].id),color:"danger",scale:.45}),this.$store.dispatch("reservationType/delete",t[0].id).then((function(a){e.is_requesting=!1,e.$vs.loading.close("#btn-type-delete-".concat(t[0].id," > .con-vs-loading")),e.reservation_types=e.reservation_types.filter((function(e){return e.id!==t[0].id})),e.$vs.notify({title:"Success",text:a.data.message,iconPack:"feather",icon:"icon-check",color:"success"})})).catch((function(a){console.log(a),e.is_requesting=!1,e.$vs.loading.close("#btn-type-delete-".concat(t[0].id," > .con-vs-loading")),e.$vs.notify({title:"Error",text:a.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},confirmDeleteReservationDuration:function(t){this.$vs.dialog({type:"confirm",color:"danger",title:"Are you sure!",text:"This data can not be retrieved again.",accept:this.deleteReservationDuration,parameters:[t]})},deleteReservationDuration:function(t){var e=this;this.is_requesting=!0,this.$vs.loading({container:"#btn-duration-delete-".concat(t[0].id),color:"danger",scale:.45}),this.$store.dispatch("reservationDuration/delete",t[0].id).then((function(a){e.is_requesting=!1,e.$vs.loading.close("#btn-duration-delete-".concat(t[0].id," > .con-vs-loading")),e.reservation_durations=e.reservation_durations.filter((function(e){return e.id!==t[0].id})),e.$vs.notify({title:"Success",text:a.data.message,iconPack:"feather",icon:"icon-check",color:"success"})})).catch((function(a){console.log(a),e.is_requesting=!1,e.$vs.loading.close("#btn-type-delete-".concat(t[0].id," > .con-vs-loading")),e.$vs.notify({title:"Error",text:a.response.data.error,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))},handleChangePage:function(t){this.getReservationDurations()},handleSort:function(t,e){this.sortFilter=e?"sortDesc=".concat(t):"sortAsc=".concat(t),this.currentDurationPage=1,this.getReservationDurations()}}},n=a(1),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.can("view-reservation")?a("div",{staticClass:"vx-col w-full mb-base"},[a("vx-card",{ref:"reservation_type",attrs:{title:"Reservation Types","collapse-action":"",refreshContentAction:""},on:{refresh:t.getReservationTypes}},[a("vs-table",{attrs:{search:"",data:t.reservation_types},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s},[a("vs-td",{attrs:{data:s+1}},[t._v("\n                            "+t._s(s+1)+"\n                        ")]),t._v(" "),a("vs-td",{attrs:{data:e.name}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),a("vs-td",{attrs:{data:e.min_price}},[t._v("\n                            "+t._s(e.min_price)+"\n                        ")]),t._v(" "),a("vs-td",{attrs:{data:e.max_price}},[t._v("\n                            "+t._s(e.max_price)+"\n                        ")]),t._v(" "),a("vs-td",{attrs:{data:e.online_reservation}},[a("vs-chip",{attrs:{color:e.online_reservation?"success":"danger"}},[t._v(t._s(e.online_reservation?"Yes":"No"))])],1),t._v(" "),a("vs-td",[a("vs-row",[a("div",{staticClass:"flex mb-4"},[t.can("edit-reservation")?a("div",{staticClass:"w-1/3 mr-5"},[a("vs-button",{attrs:{to:"/dashboard/settings/reservation/edit/"+e.id,radius:"",color:"warning",type:"border","icon-pack":"feather",icon:"icon-edit"}})],1):t._e(),t._v(" "),t.can("delete-reservation")?a("div",{staticClass:"w-1/3"},[a("vs-button",{staticClass:"vs-con-loading__container",attrs:{id:"btn-type-delete-"+e.id,radius:"",color:"danger",type:"border","icon-pack":"feather",icon:"icon-trash"},on:{click:function(a){t.is_requesting?t.$store.dispatch("viewWaitMessage",t.$vs):t.confirmDeleteReservation(e)}}})],1):t._e()])])],1)],1)}))}}],null,!1,2432102540)},[a("template",{slot:"header"},[t.can("create-reservation")?a("vs-button",{attrs:{size:"small",to:"/dashboard/settings/reservation/create","icon-pack":"feather",icon:"icon-plus",type:"filled"}},[t._v("Add New Type")]):t._e()],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("#")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Type")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"min_price"}},[t._v("Minimum Price")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"max_price"}},[t._v("Maximum Price")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"online_reservation"}},[t._v("is Online?")]),t._v(" "),a("vs-th",[t._v("Action")])],1)],2)],1)],1):t._e(),t._v(" "),a("div",{staticClass:"vx-col w-full mb-base"},[t.can("browse-reservation")?a("vx-card",{ref:"reservation_duration",attrs:{title:"Reservation Durations","collapse-action":"",refreshContentAction:""},on:{refresh:t.getReservationDurations}},[a("vs-table",{attrs:{sst:!0,data:t.reservation_durations},on:{sort:t.handleSort},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s},[a("vs-td",{attrs:{data:s+1}},[t._v("\n                        "+t._s(s+1)+"\n                    ")]),t._v(" "),a("vs-td",[t._v("\n                        "+t._s(e.reservation_type.name)+"\n                    ")]),t._v(" "),a("vs-td",{attrs:{data:e.date}},[t._v("\n                        "+t._s(e.date)+"\n                    ")]),t._v(" "),a("vs-td",{attrs:{data:e.start_time}},[t._v("\n                        "+t._s(e.start_time)+"\n                    ")]),t._v(" "),a("vs-td",{attrs:{data:e.end_time}},[t._v("\n                        "+t._s(e.end_time)+"\n                    ")]),t._v(" "),a("vs-td",{attrs:{data:e.counter}},[t._v("\n                        "+t._s(e.counter)+"\n                    ")]),t._v(" "),a("vs-td",[a("vs-row",[a("div",{staticClass:"flex mb-4"},[a("div",{staticClass:"w-1/3"},[t.can("delete-reservation")?a("vs-button",{staticClass:"vs-con-loading__container",attrs:{id:"btn-duration-delete-"+e.id,radius:"",color:"danger",type:"border","icon-pack":"feather",icon:"icon-trash"},on:{click:function(a){t.is_requesting?t.$store.dispatch("viewWaitMessage",t.$vs):t.confirmDeleteReservationDuration(e)}}}):t._e()],1)])])],1)],1)}))}}],null,!1,4126331686)},[a("template",{slot:"header"},[t.can("create-reservation")?a("vs-button",{staticClass:"mb-5",attrs:{size:"small",to:"/dashboard/settings/reservation-duration/create","icon-pack":"feather",icon:"icon-plus",type:"filled"}},[t._v("Add New Duration")]):t._e()],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("#")]),t._v(" "),a("vs-th",[t._v("Type")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"date"}},[t._v("Date")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"start_time"}},[t._v("Start Time")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"end_time"}},[t._v("End Time")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"counter"}},[t._v("Counter")]),t._v(" "),a("vs-th",[t._v("Action")])],1)],2),t._v(" "),a("vs-pagination",{staticClass:"mt-5",attrs:{goto:"",total:Math.ceil(t.reservation_durations_total_items/15)},on:{change:t.handleChangePage},model:{value:t.currentDurationPage,callback:function(e){t.currentDurationPage=e},expression:"currentDurationPage"}})],1):t._e()],1)])}),[],!1,null,"3aa6927e",null);e.default=r.exports}}]);