(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Patient",
  mounted: function mounted() {
    this.getPatientsData();
  },
  data: function data() {
    return {
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      searchText: "",
      patients: [],
      currentPage: 1,
      sortFilter: 'sortDesc=id',
      paginate: 15,
      total_pages: 0,
      filterBy: 'id'
    };
  },
  methods: {
    reserveAppointment: function reserveAppointment(patientID) {
      this.$router.push({
        name: 'add-appointment',
        params: {
          patient_id: patientID
        }
      });
    },
    getPatientsData: function getPatientsData() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.browse.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('patient/getData', "?page=".concat(this.currentPage, "&paginate=").concat(this.paginate, "&").concat(this.sortFilter, "&").concat(this.filterBy, "=").concat(this.searchText, "&")).then(function (response) {
        _this.$vs.loading.close(_this.$refs.browse.$refs.content);

        _this.patients = response.data.data.data;
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
    confirmDeletePatient: function confirmDeletePatient(patinet) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deletePatient,
        parameters: [patinet]
      });
    },
    deletePatient: function deletePatient(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('patient/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.patients = _this2.patients.filter(function (patient) {
          return patient.id !== params[0].id;
        });

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

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.$vs.notify({
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
      this.getPatientsData();
    },
    handleSort: function handleSort(key, active) {
      this.sortFilter = active ? "sortDesc=".concat(key) : "sortAsc=".concat(key);
      this.currentPage = 1;
      this.getPatientsData();
    },
    handleChangePage: function handleChangePage(page) {
      this.getPatientsData();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.can("browse-patient")
        ? _c(
            "vx-card",
            {
              ref: "browse",
              attrs: {
                title: "Patients List",
                "collapse-action": "",
                refreshContentAction: ""
              },
              on: { refresh: _vm.getPatientsData }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { sst: true, data: _vm.patients },
                  on: { sort: _vm.handleSort },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(_vm.patients, function(patient, index) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", { attrs: { data: index + 1 } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(index + 1) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: patient.id } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(patient.id) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: patient.first_name } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(patient.first_name) +
                                        " " +
                                        _vm._s(patient.last_name) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: patient.birth_date } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          patient.birth_date
                                            ? patient.birth_date
                                            : "Not Specified"
                                        ) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _vm._l(patient.phones, function(
                                      telephone,
                                      telephone_index
                                    ) {
                                      return [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(telephone.number)
                                        ),
                                        telephone_index !==
                                        patient.phones.length - 1
                                          ? [_vm._v(", ")]
                                          : _vm._e()
                                      ]
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: patient.counter } },
                                  [
                                    patient.paid_payments
                                      ? [
                                          (patient.paid_payments * 100) /
                                            patient.payments_total ===
                                          100
                                            ? [
                                                _c("i", {
                                                  staticClass: "fas fa-check"
                                                }),
                                                _vm._v(" "),
                                                _c("b", [_vm._v("Complete")])
                                              ]
                                            : [
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(
                                                      patient.paid_payments
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" Out of "),
                                                _c("b", [
                                                  _vm._v(
                                                    _vm._s(
                                                      patient.payments_total
                                                    )
                                                  )
                                                ])
                                              ],
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          (patient.paid_payments * 100) /
                                            patient.payments_total ===
                                          100
                                            ? _c("vs-progress", {
                                                attrs: {
                                                  percent:
                                                    (patient.paid_payments *
                                                      100) /
                                                    patient.payments_total,
                                                  color: "success"
                                                }
                                              })
                                            : (patient.paid_payments * 100) /
                                                patient.payments_total >
                                              25
                                            ? _c("vs-progress", {
                                                attrs: {
                                                  percent:
                                                    (patient.paid_payments *
                                                      100) /
                                                    patient.payments_total,
                                                  color: "warning"
                                                }
                                              })
                                            : (patient.paid_payments * 100) /
                                                patient.payments_total <=
                                              25
                                            ? _c("vs-progress", {
                                                attrs: {
                                                  percent:
                                                    (patient.paid_payments *
                                                      100) /
                                                    patient.payments_total,
                                                  color: "danger"
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                            No Payments Yet\n                        "
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _c(
                                          "div",
                                          { staticClass: "w-1/4 pl-2" },
                                          [
                                            _vm.can("view-patient")
                                              ? _c("vs-button", {
                                                  attrs: {
                                                    to:
                                                      "/dashboard/patient/" +
                                                      patient.id,
                                                    radius: "",
                                                    color: "primary",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-eye"
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "w-1/4 pl-2" },
                                          [
                                            _vm.can("create-appointment")
                                              ? _c("vs-button", {
                                                  attrs: {
                                                    radius: "",
                                                    color: "dark",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-edit-2"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.reserveAppointment(
                                                        patient.id
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "w-1/4 pl-2" },
                                          [
                                            _vm.can("edit-patient")
                                              ? _c("vs-button", {
                                                  attrs: {
                                                    to:
                                                      "/dashboard/patient/" +
                                                      patient.id +
                                                      "/edit",
                                                    radius: "",
                                                    color: "warning",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-edit"
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "w-1/4 pl-2" },
                                          [
                                            _vm.can("delete-patient")
                                              ? _c("vs-button", {
                                                  attrs: {
                                                    id:
                                                      "btn-delete-" +
                                                      patient.id,
                                                    radius: "",
                                                    color: "danger",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-trash"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.confirmDeletePatient(
                                                        patient
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    1475328692
                  )
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
                              _vm.can("create-patient")
                                ? _c(
                                    "vs-button",
                                    {
                                      attrs: {
                                        size: "small",
                                        to: "/dashboard/patient/create",
                                        "icon-pack": "feather",
                                        icon: "icon-plus",
                                        type: "filled"
                                      }
                                    },
                                    [_vm._v("New Patient")]
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "mb-5",
                              attrs: {
                                "vs-lg": "3",
                                "vs-sm": "6",
                                "vs-xs": "6"
                              }
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
                                    attrs: { value: "id", text: "ID" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "name", text: "Name" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "email", text: "Email" }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-select-item", {
                                    attrs: { value: "phone", text: "Phone" }
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
                              attrs: {
                                "vs-lg": "3",
                                "vs-sm": "6",
                                "vs-xs": "6"
                              }
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
                      _c("vs-th", { attrs: { "sort-key": "id" } }, [
                        _vm._v("ID")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "first_name" } }, [
                        _vm._v("Name")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "birth_date" } }, [
                        _vm._v("Birth Date")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Telephones")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Payment")]),
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
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/patient/Patient.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/patient/Patient.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patient.vue?vue&type=template&id=ed687b7e& */ "./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e&");
/* harmony import */ var _Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patient.vue?vue&type=script&lang=js& */ "./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/patient/Patient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=template&id=ed687b7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=template&id=ed687b7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_template_id_ed687b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);