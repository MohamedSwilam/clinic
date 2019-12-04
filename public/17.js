(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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
      resultTime: 0,
      patients: []
    };
  },
  methods: {
    reserveAppointement: function reserveAppointement(patientID) {
      this.$router.push({
        name: 'add-appointment',
        params: {
          patient_id: patientID
        }
      });
    },
    getPatientsData: function getPatientsData() {
      this.patients = [{
        id: 1,
        name: "Phil Gray",
        public_id: "p-105",
        dob: "18/10/1997",
        telephones: ["01096436702", "01113689783"],
        payment_percentage: 200 * 100 / 1000,
        payment: {
          paid: 200,
          total: 1000
        }
      }, {
        id: 2,
        name: "Irene Baker",
        public_id: "p-116",
        dob: "05/09/1989",
        telephones: ["01116568369"],
        payment_percentage: 750 * 100 / 750,
        payment: {
          paid: 750,
          total: 750
        }
      }, {
        id: 3,
        name: "Evan White",
        public_id: "p-118",
        dob: "16/03/1991",
        telephones: ["01096123366", "01115696966"],
        payment_percentage: 950 * 100 / 950,
        payment: {
          paid: 950,
          total: 950
        }
      }, {
        id: 4,
        name: "Sonia Clark",
        public_id: "p-120",
        dob: "04/12/1975",
        telephones: ["01086123445", "01007865613"],
        payment_percentage: 700 * 100 / 800,
        payment: {
          paid: 700,
          total: 800
        }
      }, {
        id: 5,
        name: "Phil Gray",
        public_id: "p-121",
        dob: "18/10/1997",
        telephones: ["01096436702", "01113689783"],
        payment_percentage: 300 * 100 / 1250,
        payment: {
          paid: 300,
          total: 1250
        }
      }, {
        id: 6,
        name: "Irene Baker",
        public_id: "p-122",
        dob: "05/09/1989",
        telephones: ["01116568369"],
        payment_percentage: 1250 * 100 / 1250,
        payment: {
          paid: 1250,
          total: 1250
        }
      }, {
        id: 7,
        name: "Evan White",
        public_id: "p-123",
        dob: "16/03/1991",
        telephones: ["01096123366", "01115696966"],
        payment_percentage: 700 * 100 / 800,
        payment: {
          paid: 700,
          total: 800
        }
      }, {
        id: 8,
        name: "Sonia Clark",
        public_id: "p-124",
        dob: "04/12/1975",
        telephones: ["01086123445", "01007865613"],
        payment_percentage: 1000 * 100 / 1000,
        payment: {
          paid: 1000,
          total: 1000
        }
      }];
    },
    confirmDeletePatient: function confirmDeletePatient(patinet) {
      this.patientIdToDelete = patinet.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deletePatient
      });
    },
    deletePatient: function deletePatient() {
      this.vs_alert('Success', 'Reservation Duration Successfully Deleted.', 'success', 'icon-check');
    },
    //Vuesax alert
    vs_alert: function vs_alert(title, text, color, icon) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color,
        iconPack: 'feather',
        icon: icon
      });
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
      _c(
        "vx-card",
        { attrs: { title: "Patients List", "collapse-action": "" } },
        [
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.patients },
              scopedSlots: _vm._u([
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
                          _c("vs-td", { attrs: { data: patient.public_id } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(patient.public_id) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: patient.name } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(patient.name) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: patient.dob } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(patient.dob) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _vm._l(patient.telephones, function(
                                telephone,
                                telephone_index
                              ) {
                                return [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(telephone)
                                  ),
                                  telephone_index !==
                                  patient.telephones.length - 1
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
                              patient.payment_percentage === 100
                                ? [
                                    _c("i", { staticClass: "fas fa-check" }),
                                    _vm._v(" "),
                                    _c("b", [_vm._v("Complete")])
                                  ]
                                : [
                                    _c("b", [
                                      _vm._v(_vm._s(patient.payment.paid))
                                    ]),
                                    _vm._v(" Out of "),
                                    _c("b", [
                                      _vm._v(_vm._s(patient.payment.total))
                                    ])
                                  ],
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              patient.payment_percentage === 100
                                ? _c("vs-progress", {
                                    attrs: {
                                      percent: patient.payment_percentage,
                                      color: "success"
                                    }
                                  })
                                : patient.payment_percentage > 25
                                ? _c("vs-progress", {
                                    attrs: {
                                      percent: patient.payment_percentage,
                                      color: "warning"
                                    }
                                  })
                                : patient.payment_percentage <= 25
                                ? _c("vs-progress", {
                                    attrs: {
                                      percent: patient.payment_percentage,
                                      color: "danger"
                                    }
                                  })
                                : _vm._e()
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
                                      _c("vs-button", {
                                        attrs: {
                                          to:
                                            "/dashboard/patient/" +
                                            patient.public_id,
                                          radius: "",
                                          color: "primary",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-eye"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-1/4 pl-2" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          radius: "",
                                          color: "dark",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-edit-2"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.reserveAppointement(
                                              patient.public_id
                                            )
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-1/4 pl-2" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          to:
                                            "/dashboard/patient/" +
                                            patient.public_id +
                                            "/edit",
                                          radius: "",
                                          color: "warning",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-edit"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "w-1/4 pl-2" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
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
              ])
            },
            [
              _c(
                "template",
                { slot: "header" },
                [
                  _c(
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
                  _c("vs-th", { attrs: { "sort-key": "public_id" } }, [
                    _vm._v("ID")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "age" } }, [
                    _vm._v("Birth Date")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Telephones")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "payment_percentage" } }, [
                    _vm._v("Payment")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
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