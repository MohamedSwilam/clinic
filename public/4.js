(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/Appointment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueContext: vue_context__WEBPACK_IMPORTED_MODULE_2__["VueContext"]
  },
  mounted: function mounted() {
    this.getAppointmentsData(Date.now()); // window.Echo.channel('private-appointment.1') //Should be Channel Name
    //     .listen('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', (e) => {
    //         console.log(e);
    //         alert(e);
    //     });
  },
  data: function data() {
    return {
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      searchText: "",
      resultTime: 0,
      appointments: []
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
    getAppointmentsData: function getAppointmentsData(InitialTime) {
      this.appointments = [{
        id: 1,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-105",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 200,
            total: 1000,
            percentage: 200 * 100 / 1000
          }
        },
        status: {
          id: 1,
          title: 'Coming',
          color: 'primary'
        }
      }, {
        id: 2,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-106",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 500,
            total: 800,
            percentage: 500 * 100 / 800
          }
        },
        status: {
          id: 2,
          title: 'Inside',
          color: 'danger'
        }
      }, {
        id: 3,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-105",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 900,
            total: 900,
            percentage: 900 * 100 / 900
          }
        },
        status: {
          id: 3,
          title: 'Postponed',
          color: 'warning'
        }
      }, {
        id: 4,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-107",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 200,
            total: 1000,
            percentage: 200 * 100 / 1000
          }
        },
        status: {
          id: 4,
          title: 'Finished',
          color: 'success'
        }
      }, {
        id: 5,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-108",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 200,
            total: 1000,
            percentage: 200 * 100 / 1000
          }
        },
        status: {
          id: 4,
          title: 'Finished',
          color: 'success'
        }
      }, {
        id: 6,
        type: 'Reservation Type1',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 1,
          name: "Phil Gray",
          public_id: "p-109",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 700,
            total: 1000,
            percentage: 700 * 100 / 1000
          }
        },
        status: {
          id: 4,
          title: 'Finished',
          color: 'success'
        }
      }, {
        id: 7,
        type: 'Reservation Type2',
        duration: new Date(),
        doctor: {
          id: 1,
          name: 'Irene Baker'
        },
        patient: {
          id: 2,
          name: "Phil Gray",
          public_id: "p-110",
          dob: "18/10/1997",
          telephones: ["01096436702", "01113689783"],
          payment: {
            paid: 200,
            total: 1000,
            percentage: 200 * 100 / 1000
          }
        },
        status: {
          id: 4,
          title: 'Missed',
          color: 'dark'
        }
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
      this.$refs["appointment-".concat(id)][0].open();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  cursor: pointer;\n  color: black !important;\n}\n.v-context ul li{\n  margin: 0;\n  padding: 10px 35px;\n  cursor: pointer;\n}\n.v-context ul li:hover {\n  background: #1e88e5;\n  color: #fafafa;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&");

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
          { attrs: { title: "Appointments", collapseAction: "" } },
          [
            _vm.appointments.length > 0
              ? _c(
                  "vs-table",
                  {
                    attrs: {
                      sst: true,
                      "max-items": "50",
                      search: "",
                      pagination: "",
                      data: _vm.appointments
                    },
                    on: {
                      search: _vm.handleSearch,
                      "change-page": _vm.handleChangePage,
                      sort: _vm.handleSort
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var data = ref.data
                            return [
                              _vm._l(_vm.appointments, function(
                                appointment,
                                index
                              ) {
                                return [
                                  _c(
                                    "vs-tr",
                                    { key: index },
                                    [
                                      _c(
                                        "vs-td",
                                        { attrs: { data: index + 1 } },
                                        [
                                          _c(
                                            "div",
                                            {
                                              on: {
                                                contextmenu: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.openContext(
                                                    appointment.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(index + 1) +
                                                  "\n                                "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _c(
                                          "div",
                                          {
                                            on: {
                                              contextmenu: function($event) {
                                                $event.preventDefault()
                                                return _vm.openContext(
                                                  appointment.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  appointment.patient.public_id
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _c(
                                          "div",
                                          {
                                            on: {
                                              contextmenu: function($event) {
                                                $event.preventDefault()
                                                return _vm.openContext(
                                                  appointment.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  appointment.patient.name
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _c(
                                          "div",
                                          {
                                            on: {
                                              contextmenu: function($event) {
                                                $event.preventDefault()
                                                return _vm.openContext(
                                                  appointment.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(
                                                  appointment.duration.getUTCDay()
                                                ) +
                                                "/" +
                                                _vm._s(
                                                  appointment.duration.getUTCMonth()
                                                ) +
                                                "/" +
                                                _vm._s(
                                                  appointment.duration.getUTCFullYear()
                                                ) +
                                                " " +
                                                _vm._s(
                                                  appointment.duration.toLocaleTimeString()
                                                ) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _c(
                                          "div",
                                          {
                                            on: {
                                              contextmenu: function($event) {
                                                $event.preventDefault()
                                                return _vm.openContext(
                                                  appointment.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._l(
                                              appointment.patient.telephones,
                                              function(telephone, index) {
                                                return [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(telephone)
                                                  ),
                                                  index !==
                                                  appointment.patient.telephones
                                                    .length -
                                                    1
                                                    ? [_vm._v(", ")]
                                                    : _vm._e()
                                                ]
                                              }
                                            )
                                          ],
                                          2
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
                                            [
                                              _vm._v(
                                                _vm._s(appointment.status.title)
                                              )
                                            ]
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
                                            _c(
                                              "div",
                                              { staticClass: "w-1/3 pl-2" },
                                              [
                                                _c("vs-button", {
                                                  attrs: {
                                                    to:
                                                      "/dashboard/patient/" +
                                                      appointment.patient
                                                        .public_id,
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
                                              { staticClass: "w-1/3 pl-2" },
                                              [
                                                _c("vs-button", {
                                                  attrs: {
                                                    to:
                                                      "/dashboard/patient/" +
                                                      appointment.patient
                                                        .public_id +
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
                                              { staticClass: "w-1/3 pl-2" },
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
                                                      return _vm.confirmDeleteAppointement(
                                                        appointment
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
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
                                              staticClass:
                                                "con-expand-users w-full"
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
                                                        icon:
                                                          "icon-arrow-right",
                                                        title: "Payments"
                                                      }
                                                    },
                                                    [
                                                      appointment.patient
                                                        .payment.percentage ===
                                                      100
                                                        ? [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-check"
                                                            }),
                                                            _vm._v(" "),
                                                            _c("b", [
                                                              _vm._v("Complete")
                                                            ])
                                                          ]
                                                        : [
                                                            _c("b", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  appointment
                                                                    .patient
                                                                    .payment
                                                                    .paid
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(" Out of "),
                                                            _c("b", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  appointment
                                                                    .patient
                                                                    .payment
                                                                    .total
                                                                )
                                                              )
                                                            ])
                                                          ],
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      appointment.patient
                                                        .payment.percentage ===
                                                      100
                                                        ? _c("vs-progress", {
                                                            attrs: {
                                                              percent:
                                                                appointment
                                                                  .patient
                                                                  .payment
                                                                  .percentage,
                                                              color: "success"
                                                            }
                                                          })
                                                        : appointment.patient
                                                            .payment
                                                            .percentage > 25
                                                        ? _c("vs-progress", {
                                                            attrs: {
                                                              percent:
                                                                appointment
                                                                  .patient
                                                                  .payment
                                                                  .percentage,
                                                              color: "warning"
                                                            }
                                                          })
                                                        : appointment.patient
                                                            .payment
                                                            .percentage <= 25
                                                        ? _c("vs-progress", {
                                                            attrs: {
                                                              percent:
                                                                appointment
                                                                  .patient
                                                                  .payment
                                                                  .percentage,
                                                              color: "danger"
                                                            }
                                                          })
                                                        : _vm._e()
                                                    ],
                                                    2
                                                  ),
                                                  _vm._v(" "),
                                                  _c("vs-list-item", {
                                                    attrs: {
                                                      "icon-pack": "feather",
                                                      icon: "icon-arrow-right",
                                                      title:
                                                        "Appointment Information"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("vs-list-item", {
                                                    attrs: {
                                                      "icon-pack": "feather",
                                                      icon: "icon-arrow-right",
                                                      title:
                                                        "Appointment Information"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-list-item",
                                                    {
                                                      attrs: {
                                                        "icon-pack": "feather",
                                                        icon:
                                                          "icon-arrow-right",
                                                        title: "Update Status"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "vs-button",
                                                        {
                                                          attrs: {
                                                            size: "small",
                                                            color: "primary",
                                                            type:
                                                              appointment.status
                                                                .title ==
                                                              "Coming"
                                                                ? "filled"
                                                                : "border",
                                                            "icon-pack":
                                                              "feather"
                                                          }
                                                        },
                                                        [_vm._v("Coming")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-button",
                                                        {
                                                          attrs: {
                                                            size: "small",
                                                            color: "danger",
                                                            type:
                                                              appointment.status
                                                                .title ==
                                                              "Inside"
                                                                ? "filled"
                                                                : "border",
                                                            "icon-pack":
                                                              "feather"
                                                          }
                                                        },
                                                        [_vm._v("Inside")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-button",
                                                        {
                                                          attrs: {
                                                            size: "small",
                                                            color: "warning",
                                                            type:
                                                              appointment.status
                                                                .title ==
                                                              "Postponed"
                                                                ? "filled"
                                                                : "border",
                                                            "icon-pack":
                                                              "feather"
                                                          }
                                                        },
                                                        [_vm._v("Postponed")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-button",
                                                        {
                                                          attrs: {
                                                            size: "small",
                                                            color: "success",
                                                            type:
                                                              appointment.status
                                                                .title ==
                                                              "Finished"
                                                                ? "filled"
                                                                : "border",
                                                            "icon-pack":
                                                              "feather"
                                                          }
                                                        },
                                                        [_vm._v("Finished")]
                                                      )
                                                    ],
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
                      ],
                      null,
                      false,
                      2779536475
                    )
                  },
                  [
                    _c("template", { slot: "header" }, [
                      _c(
                        "div",
                        { staticClass: "con-select-example" },
                        [
                          _c(
                            "vs-button",
                            {
                              attrs: {
                                size: "small",
                                to:
                                  "/dashboard/appointment/add-appointment/new",
                                "icon-pack": "feather",
                                icon: "icon-plus"
                              }
                            },
                            [_vm._v("Add Appointment")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("vs-th", { attrs: { "sort-key": "duration" } }, [
                          _vm._v("Duration")
                        ]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Telephones")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Action")])
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
/* empty/unused harmony star reexport *//* harmony import */ var _Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Appointment.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/Appointment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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