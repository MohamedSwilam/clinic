(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Appointment",
  mounted: function mounted() {
    this.getAppointmentsData(Date.now());
  },
  data: function data() {
    return {
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      searchText: "",
      resultTime: 0,
      appointments: [],
      currentPage: 1,
      sortFilter: 'sortDesc=id',
      paginate: 3,
      total_pages: 0,
      filterBy: 'date',
      is_requesting: false,
      statuses: [{
        id: 1,
        name: 'Coming',
        color: '#7467F0'
      }, {
        id: 2,
        name: 'Inside',
        color: '#EA5455'
      }, {
        id: 3,
        name: 'Postponed',
        color: '#FF9F42'
      }, {
        id: 4,
        name: 'Finished',
        color: '#27C76F'
      }]
    };
  },
  methods: {
    optionClicked: function optionClicked(appointmentID, text) {
      this.$vs.notify({
        title: 'Context Menu',
        text: text,
        icon: 'feather',
        iconPack: 'icon-alert-circle',
        color: 'primary'
      });
    },
    getAppointmentsData: function getAppointmentsData() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.browse.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('appointment/getData', "?page=".concat(this.currentPage, "&paginate=").concat(this.paginate, "&").concat(this.sortFilter, "&").concat(this.filterBy, "=").concat(this.searchText)).then(function (response) {
        _this.$vs.loading.close(_this.$refs.browse.$refs.content);

        _this.appointments = response.data.data.data;
        _this.total_pages = response.data.data.meta.pagination.total_pages;
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.browse.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    updateStatus: function updateStatus(index, appointmentId, statusId) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#update-status-btn-".concat(appointmentId, "-").concat(statusId),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('appointment/update', {
        id: appointmentId,
        data: {
          status_id: statusId,
          has_payment: 0
        }
      }).then(function (response) {
        _this2.is_requesting = false;
        _this2.appointments[index].status_id = statusId;
        _this2.appointments[index].status = _this2.statuses.filter(function (status) {
          return status.id === statusId;
        })[0];

        _this2.$vs.loading.close("#update-status-btn-".concat(appointmentId, "-").concat(statusId, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("update-status-btn-".concat(appointmentId, "-").concat(statusId, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmDeleteAppointement: function confirmDeleteAppointement(appointment) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteAppointment,
        parameters: [appointment]
      });
    },
    deleteAppointment: function deleteAppointment(params) {
      var _this3 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('appointment/delete', params[0].id).then(function (response) {
        _this3.is_requesting = false;

        _this3.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this3.appointments = _this3.appointments.filter(function (appointment) {
          return appointment.id !== params[0].id;
        });

        _this3.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this3.is_requesting = false;

        _this3.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    handleSearch: function handleSearch() {
      this.currentPage = 1;
      this.getAppointmentsData();
    },
    handleSort: function handleSort(key, active) {
      this.sortFilter = active ? "sortDesc=".concat(key) : "sortAsc=".concat(key);
      this.currentPage = 1;
      this.getAppointmentsData();
    },
    handleChangePage: function handleChangePage() {
      this.getAppointmentsData();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c(
          "vx-card",
          {
            ref: "browse",
            attrs: {
              title: "Appointments",
              collapseAction: "",
              refreshContentAction: ""
            },
            on: { refresh: _vm.getAppointmentsData }
          },
          [
            _c(
              "vs-table",
              {
                attrs: { sst: true, data: _vm.appointments },
                on: { sort: _vm.handleSort },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return [
                        _vm._l(_vm.appointments, function(appointment, index) {
                          return [
                            _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", { attrs: { data: index + 1 } }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(index + 1) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(appointment.patient.id) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(appointment.patient.first_name) +
                                      " " +
                                      _vm._s(appointment.patient.last_name) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        appointment.reservation_duration.date
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        new Date(
                                          appointment.reservation_duration
                                            .date +
                                            " " +
                                            appointment.reservation_duration
                                              .start_time
                                        ).toLocaleTimeString()
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        new Date(
                                          appointment.reservation_duration
                                            .date +
                                            " " +
                                            appointment.reservation_duration
                                              .end_time
                                        ).toLocaleTimeString()
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c(
                                      "vs-chip",
                                      {
                                        attrs: {
                                          color: appointment.status.color
                                        }
                                      },
                                      [_vm._v(_vm._s(appointment.status.name))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "div",
                                    { staticClass: "flex mb-4" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          to:
                                            "/dashboard/patient/" +
                                            appointment.patient.id,
                                          radius: "",
                                          color: "primary",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-eye"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        staticClass: "ml-3",
                                        attrs: {
                                          id: "btn-delete-" + appointment.id,
                                          radius: "",
                                          color: "danger",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-trash"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.confirmDeleteAppointement(
                                              appointment
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "template",
                                  {
                                    staticClass: "expand-user",
                                    slot: "expand"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "con-expand-users w-full"
                                      },
                                      [
                                        _c(
                                          "vs-list",
                                          [
                                            _c(
                                              "vs-list-item",
                                              {
                                                attrs: {
                                                  "icon-pack": "feather",
                                                  icon: "icon-arrow-right",
                                                  title: "Payments"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                Paid "
                                                ),
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(
                                                      appointment.payment[0]
                                                        .paid
                                                    ) + " EGP"
                                                  )
                                                ]),
                                                _vm._v(" Out of "),
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(
                                                      appointment.payment[0]
                                                        .to_be_paid
                                                    ) + " EGP"
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("vs-list-item", {
                                              attrs: {
                                                "icon-pack": "feather",
                                                icon: "icon-arrow-right",
                                                title:
                                                  "Type: " +
                                                  appointment.reservation_type
                                                    .name
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("vs-list-item", {
                                              attrs: {
                                                "icon-pack": "feather",
                                                icon: "icon-arrow-right",
                                                title:
                                                  "Doctor: " +
                                                  appointment.doctor
                                                    .first_name +
                                                  " " +
                                                  appointment.doctor.last_name
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("vs-list-item", {
                                              attrs: {
                                                "icon-pack": "feather",
                                                icon: "icon-arrow-right",
                                                title:
                                                  "Illness Description: " +
                                                  appointment.illness_description
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "vs-list-item",
                                              {
                                                attrs: {
                                                  "icon-pack": "feather",
                                                  icon: "icon-arrow-right",
                                                  title: "Update Status"
                                                }
                                              },
                                              _vm._l(_vm.statuses, function(
                                                status,
                                                status_index
                                              ) {
                                                return _c(
                                                  "vs-button",
                                                  {
                                                    key: status_index,
                                                    staticClass: "ml-3",
                                                    attrs: {
                                                      id:
                                                        "update-status-btn-" +
                                                        appointment.id +
                                                        "-" +
                                                        status.id,
                                                      size: "small",
                                                      color: status.color,
                                                      type:
                                                        appointment.status
                                                          .id === status.id
                                                          ? "filled"
                                                          : "border",
                                                      "icon-pack": "feather"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.is_requesting
                                                          ? _vm.$store.dispatch(
                                                              "viewWaitMessage",
                                                              _vm.$vs
                                                            )
                                                          : _vm.updateStatus(
                                                              index,
                                                              appointment.id,
                                                              status.id
                                                            )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v(_vm._s(status.name))]
                                                )
                                              }),
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ],
                              2
                            )
                          ]
                        })
                      ]
                    }
                  }
                ])
              },
              [
                _c(
                  "template",
                  { slot: "header" },
                  [
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  to:
                                    "/dashboard/appointment/add-appointment/new",
                                  "icon-pack": "feather",
                                  icon: "icon-plus",
                                  type: "filled"
                                }
                              },
                              [_vm._v("Add Appointment")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5",
                            attrs: { "vs-lg": "3", "vs-sm": "6", "vs-xs": "6" }
                          },
                          [
                            _c(
                              "vs-select",
                              {
                                staticClass: "selectExample",
                                attrs: {
                                  autocomplete: "",
                                  "icon-pack": "feather",
                                  icon: "icon-filter"
                                },
                                model: {
                                  value: _vm.filterBy,
                                  callback: function($$v) {
                                    _vm.filterBy = $$v
                                  },
                                  expression: "filterBy"
                                }
                              },
                              [
                                _c("vs-select-item", {
                                  attrs: { value: "date", text: "Date" }
                                }),
                                _vm._v(" "),
                                _c("vs-select-item", {
                                  attrs: { value: "status", text: "Status" }
                                }),
                                _vm._v(" "),
                                _c("vs-select-item", {
                                  attrs: { value: "doctor", text: "Doctor" }
                                }),
                                _vm._v(" "),
                                _c("vs-select-item", {
                                  attrs: {
                                    value: "patient",
                                    text: "Patient ID"
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-select-item", {
                                  attrs: {
                                    value: "patientName",
                                    text: "Patient Name"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5",
                            attrs: { "vs-lg": "3", "vs-sm": "6", "vs-xs": "6" }
                          },
                          [
                            _c("vs-input", {
                              attrs: {
                                "icon-pack": "feather",
                                icon: "icon-search",
                                "icon-after": "",
                                placeholder: "search"
                              },
                              on: { change: _vm.handleSearch },
                              model: {
                                value: _vm.searchText,
                                callback: function($$v) {
                                  _vm.searchText = $$v
                                },
                                expression: "searchText"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "template",
                  { slot: "thead" },
                  [
                    _c("vs-th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "patient_id" } }, [
                      _vm._v("ID")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("From")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("To")]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "status" } }, [
                      _vm._v("Status")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Action")])
                  ],
                  1
                )
              ],
              2
            ),
            _vm._v(" "),
            _c("vs-pagination", {
              staticClass: "mt-5",
              attrs: { goto: "", total: _vm.total_pages },
              on: { change: _vm.handleChangePage },
              model: {
                value: _vm.currentPage,
                callback: function($$v) {
                  _vm.currentPage = $$v
                },
                expression: "currentPage"
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/appointment/Appointment.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/appointment/Appointment.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appointment.vue?vue&type=template&id=5cd96d16& */ "./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16&");
/* harmony import */ var _Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appointment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/appointment/Appointment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=template&id=5cd96d16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=template&id=5cd96d16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_5cd96d16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);