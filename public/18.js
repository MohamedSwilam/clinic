(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/Patient.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-context */ "./node_modules/vue-context/dist/js/vue-context.js");
/* harmony import */ var vue_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueContext: vue_context__WEBPACK_IMPORTED_MODULE_2__["VueContext"]
  },
  mounted: function mounted() {
    this.getPatientsData(Date.now());
  },
  data: function data() {
    return {
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      searchText: "",
      resultTime: 0,
      patients: [],
      patientStatus: []
    };
  },
  methods: {
    optionClicked: function optionClicked(patientID, actionID) {
      if (actionID == 3) {
        this.$router.push({
          name: 'add-appointment',
          params: {
            patient_id: patientID
          }
        });
      }

      this.$vs.notify({
        title: 'Context Menu',
        text: patientID,
        icon: 'feather',
        iconPack: 'icon-alert-circle',
        color: 'primary'
      });
    },
    getPatientsData: function getPatientsData(InitialTime) {
      this.patientStatus = [{
        name: 'Active',
        color: 'success',
        start_period: '0',
        end_period: '16000000000'
      }, {
        name: 'In-Active',
        color: 'danger',
        start_period: '16000000001',
        end_period: '99999999999999'
      }];
      this.patients = [{
        id: 1,
        name: "Phil Gray",
        public_id: "p-105",
        dob: "18/10/1997",
        telephones: ["01096436702", "01113689783"],
        payment: {
          paid: 200,
          total: 1000,
          percentage: 200 * 100 / 1000
        },
        last_visit: '2019-5-01 15:30:00'
      }, {
        id: 2,
        name: "Irene Baker",
        public_id: "p-116",
        dob: "05/09/1989",
        telephones: ["01116568369"],
        payment: {
          paid: 750,
          total: 750,
          percentage: 750 * 100 / 750
        },
        last_visit: '2018-5-13 15:30:00'
      }, {
        id: 3,
        name: "Evan White",
        public_id: "p-118",
        dob: "16/03/1991",
        telephones: ["01096123366", "01115696966"],
        payment: {
          paid: 950,
          total: 950,
          percentage: 950 * 100 / 950
        },
        last_visit: '2018-5-13 15:30:00'
      }, {
        id: 4,
        name: "Sonia Clark",
        public_id: "p-120",
        dob: "04/12/1975",
        telephones: ["01086123445", "01007865613"],
        payment: {
          paid: 700,
          total: 800,
          percentage: 700 * 100 / 800
        },
        last_visit: '2019-5-01 15:30:00'
      }, {
        id: 5,
        name: "Phil Gray",
        public_id: "p-121",
        dob: "18/10/1997",
        telephones: ["01096436702", "01113689783"],
        payment: {
          paid: 300,
          total: 1250,
          percentage: 300 * 100 / 1250
        },
        last_visit: '2019-5-01 15:30:00'
      }, {
        id: 6,
        name: "Irene Baker",
        public_id: "p-122",
        dob: "05/09/1989",
        telephones: ["01116568369"],
        payment: {
          paid: 1250,
          total: 1250,
          percentage: 1250 * 100 / 1250
        },
        last_visit: '2018-5-13 15:30:00'
      }, {
        id: 7,
        name: "Evan White",
        public_id: "p-123",
        dob: "16/03/1991",
        telephones: ["01096123366", "01115696966"],
        payment: {
          paid: 700,
          total: 800,
          percentage: 700 * 100 / 800
        },
        last_visit: '2019-5-01 15:30:00'
      }, {
        id: 8,
        name: "Sonia Clark",
        public_id: "p-124",
        dob: "04/12/1975",
        telephones: ["01086123445", "01007865613"],
        payment: {
          paid: 1000,
          total: 1000,
          percentage: 1000 * 100 / 1000
        },
        last_visit: '2018-5-13 15:30:00'
      }];
      this.resultTime = Date.now() - InitialTime;
    },
    copyToClipboard: function copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        this.onCopy();
        return clipboardData.setData("Text", text);
      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.

        document.body.appendChild(textarea);
        textarea.select();

        try {
          this.onCopy();
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          this.onError();
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },
    onCopy: function onCopy() {
      this.$vs.notify({
        title: 'Success!',
        text: 'Text copied successfully.',
        color: 'success',
        iconPack: 'feather',
        position: 'bottom-right',
        icon: 'icon-check-circle'
      });
    },
    onError: function onError() {
      this.$vs.notify({
        title: 'Failed!',
        text: 'Error in copying text.',
        color: 'danger',
        iconPack: 'feather',
        position: 'bottom-right',
        icon: 'icon-alert-circle'
      });
    },
    openContext: function openContext(id) {
      this.$refs["patient-".concat(id)][0].open();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover {\n  cursor: pointer;\n  color: black !important;\n}\n.v-context {\n  background: #fafafa;\n  border: 1px solid #bdbdbd;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  width: 250px;\n  z-index: 99999;\n}\n.v-context ul {\n  list-style: none;\n  padding: 10px 0;\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n}\nul.bordered-items > li:not(:last-of-type):not([class*=shadow]) {\n  border-bottom: 1px solid #dae1e7;\n}\n.v-context ul li{\n  margin: 0;\n  padding: 10px 35px;\n  cursor: pointer;\n}\n.v-context ul li:hover {\n  background: #1e88e5;\n  color: #fafafa;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
  return _c("div", [
    _c(
      "div",
      { ref: "content", staticClass: "centerx" },
      [
        _c(
          "vs-row",
          [
            _c(
              "vs-col",
              {
                attrs: {
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-align": "center",
                  "vs-w": "9"
                }
              },
              [
                _c("b", { staticClass: "text-left vx-col w-full" }, [
                  _vm._v(
                    _vm._s(_vm.patients.length) +
                      " results found in " +
                      _vm._s(_vm.resultTime) +
                      "ms"
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "vs-col",
              {
                attrs: {
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-align": "center",
                  "vs-w": "3"
                }
              },
              [
                _c(
                  "vs-button",
                  {
                    attrs: {
                      "vs-w": "3",
                      color: "primary",
                      type: "filled",
                      "icon-pack": "feather",
                      icon: "icon-plus"
                    }
                  },
                  [_vm._v("New Patient")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vs-row",
          [
            _c(
              "vs-col",
              {
                attrs: {
                  "vs-type": "flex",
                  "vs-justify": "center",
                  "vs-align": "center",
                  "vs-w": "12"
                }
              },
              [
                _c("vs-input", {
                  staticClass: "is-label-placeholder w-full",
                  attrs: {
                    "vs-w": "9",
                    "icon-pack": "feather",
                    icon: "icon-search",
                    "label-placeholder": _vm.$t("Search") || "Search"
                  },
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
        ),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full mb-base" }),
        _vm._v(" "),
        _vm.patients.length > 0
          ? _c(
              "vs-table",
              {
                attrs: {
                  multiple: "",
                  "max-items": "50",
                  pagination: "",
                  data: _vm.patients
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return [
                          _vm._l(data, function(tr, indextr) {
                            return [
                              _c(
                                "vue-context",
                                { ref: "patient-" + tr.id, refInFor: true },
                                [
                                  _c(
                                    "ul",
                                    { staticClass: "bordered-items p-0" },
                                    [
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(tr.id, 1)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-eye"
                                          }),
                                          _vm._v("   View")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(tr.id, 2)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-user-edit"
                                          }),
                                          _vm._v("   Edit")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(
                                                tr.public_id,
                                                3
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-edit"
                                          }),
                                          _vm._v("   Reserve Appointment")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(tr.id, 4)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-share"
                                          }),
                                          _vm._v("   Send")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(tr.id, 5)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-file-csv"
                                          }),
                                          _vm._v("   Export CSV")
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "li",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.optionClicked(tr.id, 6)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash"
                                          }),
                                          _vm._v("   Delete")
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-tr",
                                { key: indextr, attrs: { data: tr } },
                                [
                                  _c(
                                    "vs-td",
                                    { attrs: { data: indextr + 1 } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          on: {
                                            contextmenu: function($event) {
                                              $event.preventDefault()
                                              return _vm.openContext(tr.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(indextr + 1) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.public_id } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          on: {
                                            contextmenu: function($event) {
                                              $event.preventDefault()
                                              return _vm.openContext(tr.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(tr.public_id) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.name } }, [
                                    _c(
                                      "div",
                                      {
                                        on: {
                                          contextmenu: function($event) {
                                            $event.preventDefault()
                                            return _vm.openContext(tr.id)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(tr.name) +
                                            "\n                            "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.dob } }, [
                                    _c(
                                      "div",
                                      {
                                        on: {
                                          contextmenu: function($event) {
                                            $event.preventDefault()
                                            return _vm.openContext(tr.id)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(tr.dob) +
                                            "\n                            "
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.telephones } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          on: {
                                            contextmenu: function($event) {
                                              $event.preventDefault()
                                              return _vm.openContext(tr.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._l(tr.telephones, function(
                                            telephone,
                                            index
                                          ) {
                                            return [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(telephone)
                                              ),
                                              index != tr.telephones.length - 1
                                                ? [_vm._v(", ")]
                                                : _vm._e()
                                            ]
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: tr.payment } }, [
                                    _c(
                                      "div",
                                      {
                                        on: {
                                          contextmenu: function($event) {
                                            $event.preventDefault()
                                            return _vm.openContext(tr.id)
                                          }
                                        }
                                      },
                                      [
                                        tr.payment.percentage == 100
                                          ? [
                                              _c("i", {
                                                staticClass: "fas fa-check"
                                              }),
                                              _vm._v(" "),
                                              _c("b", [_vm._v("Complete")])
                                            ]
                                          : [
                                              _c("b", [
                                                _vm._v(_vm._s(tr.payment.paid))
                                              ]),
                                              _vm._v(" Out of "),
                                              _c("b", [
                                                _vm._v(_vm._s(tr.payment.total))
                                              ])
                                            ],
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        tr.payment.percentage == 100
                                          ? _c("vs-progress", {
                                              attrs: {
                                                percent: tr.payment.percentage,
                                                color: "success"
                                              }
                                            })
                                          : tr.payment.percentage > 25
                                          ? _c("vs-progress", {
                                              attrs: {
                                                percent: tr.payment.percentage,
                                                color: "warning"
                                              }
                                            })
                                          : tr.payment.percentage <= 25
                                          ? _c("vs-progress", {
                                              attrs: {
                                                percent: tr.payment.percentage,
                                                color: "danger"
                                              }
                                            })
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: tr.last_visit } },
                                    [
                                      _c(
                                        "div",
                                        {
                                          on: {
                                            contextmenu: function($event) {
                                              $event.preventDefault()
                                              return _vm.openContext(tr.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._l(_vm.patientStatus, function(
                                            status
                                          ) {
                                            return [
                                              new Date().getTime() -
                                                new Date(
                                                  tr.last_visit
                                                ).getTime() >
                                                status.start_period &&
                                              new Date().getTime() -
                                                new Date(
                                                  tr.last_visit
                                                ).getTime() <=
                                                status.end_period
                                                ? _c(
                                                    "vs-chip",
                                                    {
                                                      attrs: {
                                                        color: status.color
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "vx-tooltip",
                                                        {
                                                          attrs: {
                                                            color: "warning",
                                                            title: "Last Visit",
                                                            text: tr.last_visit
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                status.name
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ]
                                          })
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          })
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  993391718
                ),
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              },
              [
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
                    _c("vs-th", { attrs: { "sort-key": "dob" } }, [
                      _vm._v("Age")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "telephones" } }, [
                      _vm._v("Telephones")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "payment" } }, [
                      _vm._v("Payment")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "last_visit" } }, [
                      _vm._v("Status")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          : _vm._e()
      ],
      1
    )
  ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patient.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Patient.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/Patient.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Patient_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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