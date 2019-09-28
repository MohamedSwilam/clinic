(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "gmap-autocomplete",
  props: {
    address: {
      type: String
    },
    placeHolder: {
      type: String,
      "default": 'Search for your address'
    }
  },
  methods: {
    placeChanged: function placeChanged(place) {
      this.$emit('place-changed', place);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_google_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/google/location */ "./resources/js/src/components/google/location.js");
/* harmony import */ var _components_google_GoogleAutocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/google/GoogleAutocomplete */ "./resources/js/src/components/google/GoogleAutocomplete.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // For custom error message


var dict = {
  custom: {
    first_name: {
      required: 'First name is required',
      alpha: "First name may only contain alphabetic characters"
    },
    last_name: {
      required: 'Last name is required',
      alpha: "Last name may only contain alphabetic characters"
    },
    job_title: {
      required: 'Job title name is required',
      alpha: "Job title may only contain alphabetic characters"
    },
    proposal_title: {
      required: 'Proposal title name is required',
      alpha: "Proposal title may only contain alphabetic characters"
    },
    event_name: {
      required: 'Event name is required',
      alpha: "Event name may only contain alphabetic characters"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddAppointment",
  mounted: function mounted() {},
  created: function created() {
    this.patientID = this.$route.params.patient_id;

    if (this.patientID != 'new') {
      this.startIndex = 1;
      this.getPatientData(this.patientID);
    }
  },
  data: function data() {
    return {
      startIndex: 0,
      searchText: "",
      firstName: "",
      lastName: "",
      Telephones: ['01096436702', '01116436790'],
      Telephone: "",
      address: {
        street_address_1: '',
        street_address_2: '',
        city: '',
        state: '',
        country: '',
        longitude: '',
        latitude: ''
      },
      DOB: null,
      gender: 1,
      proposalTitle: "",
      jobTitle: "",
      textarea: "",
      eventName: "",
      eventLocation: "san-francisco",
      status: "plannning",
      statusOptions: [{
        text: "Plannning",
        value: "plannning"
      }, {
        text: "In Progress",
        value: "in progress"
      }, {
        text: "Finished",
        value: "finished"
      }],
      LocationOptions: [{
        text: "New York",
        value: "new-york"
      }, {
        text: "Chicago",
        value: "chicago"
      }, {
        text: "San Francisco",
        value: "san-francisco"
      }, {
        text: "Boston",
        value: "boston"
      }]
    };
  },
  methods: {
    getPatientData: function getPatientData(patientID) {
      patient;
    },
    validateStep1: function validateStep1() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll("step-2").then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll("step-3").then(function (result) {
          if (result) {
            alert("Form submitted!");
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    removeTelephone: function removeTelephone(e, item) {
      this.Telephones.splice(this.Telephones.indexOf(item), 1);
    },
    addTelephone: function addTelephone(e) {
      e.preventDefault();
      var item = this.Telephone;

      if (item != '') {
        this.Telephones.push(item);
        this.Telephone = "";
      }
    },
    setAddress: function setAddress(place) {
      this.address.street_address_1 = place.formatted_address;
      this.address.longitude = place.geometry.location.lng();
      this.address.latitude = place.geometry.location.lat();
      this.address.city = _components_google_location__WEBPACK_IMPORTED_MODULE_2__["default"].parseCity(place);
      this.address.state = _components_google_location__WEBPACK_IMPORTED_MODULE_2__["default"].parseState(place);
      this.address.country = _components_google_location__WEBPACK_IMPORTED_MODULE_2__["default"].parseCountry(place);
    }
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"],
    GoogleAutocomplete: _components_google_GoogleAutocomplete__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAppointment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "vs-component vs-con-input-label vs-input is-label-placeholder w-full vs-input-primary is-label-placeholder"
    },
    [
      _c(
        "div",
        { staticClass: "vs-con-input" },
        [
          _c("gmap-autocomplete", {
            ref: "autocompleteInput",
            staticClass: "hasValue vs-inputx vs-input--input normal hasIcon",
            staticStyle: { border: "1px solid rgba(0, 0, 0, 0.2)" },
            attrs: {
              id: "google-address-input",
              "vs-w": "9",
              placeholder: "",
              value: _vm.address,
              selectFirstOnEnter: true
            },
            on: { place_changed: _vm.placeChanged }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label"
            },
            [_vm._v(_vm._s(_vm.placeHolder))]
          ),
          _vm._v(" "),
          _c("i", {
            staticClass:
              "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-map-pin null"
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("span")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "form-wizard",
    {
      attrs: {
        startIndex: _vm.startIndex,
        color: "rgba(var(--vs-primary), 1)",
        errorColor: "rgba(var(--vs-danger), 1)",
        title: null,
        subtitle: null,
        finishButtonText: "Submit"
      }
    },
    [
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: "Patient Information",
            icon: "feather icon-user",
            "before-change": _vm.validateStep1
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
            _vm.patientID == "new"
              ? _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2 mt-5" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|alpha",
                            expression: "'required|alpha'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "First Name",
                          name: "first_name"
                        },
                        model: {
                          value: _vm.firstName,
                          callback: function($$v) {
                            _vm.firstName = $$v
                          },
                          expression: "firstName"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.first("step-1.first_name")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2 mt-5" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|alpha",
                            expression: "'required|alpha'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "Last Name",
                          name: "last_name"
                        },
                        model: {
                          value: _vm.lastName,
                          callback: function($$v) {
                            _vm.lastName = $$v
                          },
                          expression: "lastName"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.errors.first("step-1.last_name")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col w-1/2 mt-5" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder"
                      },
                      [
                        _c("div", { staticClass: "vs-con-input" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.DOB,
                                expression: "DOB"
                              }
                            ],
                            staticClass:
                              "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                            staticStyle: {
                              border: "1px solid rgba(0, 0, 0, 0.2)"
                            },
                            attrs: { required: "", type: "date" },
                            domProps: { value: _vm.DOB },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.DOB = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label"
                            },
                            [
                              _vm._v(
                                "\n                            Date of birth\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"
                          })
                        ]),
                        _vm._v(" "),
                        _c("span")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-1/2 mt-5" },
                    [
                      _c("google-autocomplete", {
                        attrs: { id: "address", name: "address" },
                        on: { "place-changed": _vm.setAddress }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "vx-col w-1/2 mt-5",
                      staticStyle: { padding: "0px" }
                    },
                    [
                      _c(
                        "vs-row",
                        [
                          _c(
                            "vs-col",
                            { attrs: { "vs-w": "9" } },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  "icon-pack": "feather",
                                  icon: "icon-phone",
                                  "label-placeholder": "Telephone(s)"
                                },
                                on: {
                                  keydown: function($event) {
                                    $event.keyCode === 13
                                      ? _vm.addTelephone
                                      : false
                                  }
                                },
                                model: {
                                  value: _vm.Telephone,
                                  callback: function($$v) {
                                    _vm.Telephone = $$v
                                  },
                                  expression: "Telephone"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            { attrs: { "vs-w": "3" } },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "w-full input-btn",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-plus",
                                    type: "gradient"
                                  },
                                  on: { click: _vm.addTelephone }
                                },
                                [_vm._v("Add")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        [
                          _c(
                            "vs-col",
                            { attrs: { "vs-w": "12" } },
                            _vm._l(_vm.Telephones, function(telephone) {
                              return _c(
                                "vs-chip",
                                {
                                  key: telephone,
                                  attrs: { closable: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeTelephone(telephone)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(telephone) +
                                      "\n                            "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col w-1/2 mt-5" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "gender-container" },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "1" },
                                model: {
                                  value: _vm.gender,
                                  callback: function($$v) {
                                    _vm.gender = $$v
                                  },
                                  expression: "gender"
                                }
                              },
                              [_vm._v("Male")]
                            ),
                            _vm._v(
                              "\n                              \n                            "
                            ),
                            _c(
                              "vs-radio",
                              {
                                attrs: { "vs-value": "0" },
                                model: {
                                  value: _vm.gender,
                                  callback: function($$v) {
                                    _vm.gender = $$v
                                  },
                                  expression: "gender"
                                }
                              },
                              [_vm._v("Female")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder"
                              },
                              [
                                _vm._v(
                                  "\n                            Gender\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("span")
                      ]
                    )
                  ])
                ])
              : _c("div", [
                  _vm._v(
                    "\n                Selected Patient Info..\n            "
                  )
                ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: "Appointment",
            icon: "feather icon-edit",
            "before-change": _vm.validateStep2
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha",
                        expression: "'required|alpha'"
                      }
                    ],
                    staticClass: "w-full mt-5",
                    attrs: {
                      size: "large",
                      label: "Proposal Title",
                      name: "proposal_title"
                    },
                    model: {
                      value: _vm.proposalTitle,
                      callback: function($$v) {
                        _vm.proposalTitle = $$v
                      },
                      expression: "proposalTitle"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.proposal_title")))
                  ]),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha",
                        expression: "'required|alpha'"
                      }
                    ],
                    staticClass: "w-full mt-5",
                    attrs: {
                      size: "large",
                      label: "Job Title",
                      name: "job_title"
                    },
                    model: {
                      value: _vm.jobTitle,
                      callback: function($$v) {
                        _vm.jobTitle = $$v
                      },
                      expression: "jobTitle"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.job_title")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2 mt-10" },
                [
                  _c("vs-textarea", {
                    staticClass: "h-full",
                    attrs: { label: "Short discription" },
                    model: {
                      value: _vm.textarea,
                      callback: function($$v) {
                        _vm.textarea = $$v
                      },
                      expression: "textarea"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: "Payment",
            icon: "feather icon-dollar-sign",
            "before-change": _vm.validateStep3
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha",
                        expression: "'required|alpha'"
                      }
                    ],
                    staticClass: "w-full mt-5",
                    attrs: {
                      size: "large",
                      label: "Event Name",
                      name: "event_name"
                    },
                    model: {
                      value: _vm.eventName,
                      callback: function($$v) {
                        _vm.eventName = $$v
                      },
                      expression: "eventName"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-3.event_name")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full select-large mt-5",
                      attrs: { label: "Event Location" },
                      model: {
                        value: _vm.city,
                        callback: function($$v) {
                          _vm.city = $$v
                        },
                        expression: "city"
                      }
                    },
                    _vm._l(_vm.cityOptions, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        staticClass: "w-full",
                        attrs: { value: item.value, text: item.text }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col w-1/2 mt-5" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full select-large",
                      attrs: { label: "Event Status" },
                      model: {
                        value: _vm.status,
                        callback: function($$v) {
                          _vm.status = $$v
                        },
                        expression: "status"
                      }
                    },
                    _vm._l(_vm.statusOptions, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        staticClass: "w-full",
                        attrs: { value: item.value, text: item.text }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col w-1/2 mt-8" }, [
                _c(
                  "div",
                  { staticClass: "demo-alignment" },
                  [
                    _c("span", [_vm._v("Requirements:")]),
                    _vm._v(" "),
                    _c("vs-checkbox", [_vm._v("Staffing")]),
                    _vm._v(" "),
                    _c("vs-checkbox", [_vm._v("Catering")])
                  ],
                  1
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/google/GoogleAutocomplete.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/google/GoogleAutocomplete.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAutocomplete.vue?vue&type=template&id=73240207& */ "./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207&");
/* harmony import */ var _GoogleAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleAutocomplete.vue?vue&type=script&lang=js& */ "./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/google/GoogleAutocomplete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAutocomplete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAutocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAutocomplete.vue?vue&type=template&id=73240207& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/google/GoogleAutocomplete.vue?vue&type=template&id=73240207&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAutocomplete_vue_vue_type_template_id_73240207___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/google/location.js":
/*!********************************************************!*\
  !*** ./resources/js/src/components/google/location.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Parse country short name from address array.
   *
   * @param place
   * @returns {string}
   */
  parseCountry: function parseCountry(place) {
    var country = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("country") > -1) {
        country = item.long_name.toLowerCase();
        return;
      }
    });

    return country;
  },

  /**
   * Parse province short name from address array.
   *
   * @param place
   * @returns {string | *}
   */
  parseState: function parseState(place) {
    var state = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("administrative_area_level_1") > -1) {
        state = item.long_name.toLowerCase();
        return;
      }
    });

    return state;
  },

  /**
   * Parse city name from address array.
   *
   * @param place
   * @returns {string}
   */
  parseCity: function parseCity(place) {
    var city = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("locality") > -1) {
        city = item.long_name.toLowerCase();
        return;
      }
    });

    return city;
  },

  /**
   * Parse the district.
   *
   * @param place
   * @returns {*}
   */
  parseDistrict: function parseDistrict(place) {
    var district = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("sublocality") > -1) {
        district = item.long_name.toLowerCase();
        return;
      }
    });

    return district;
  },

  /**
   * Parse neighbourhood.
   *
   * @param place
   * @returns {*}
   */
  parseNeighbourhood: function parseNeighbourhood(place) {
    var neighbourhood = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("neighborhood") > -1) {
        neighbourhood = item.long_name.toLowerCase();
        return;
      }
    });

    return neighbourhood;
  },

  /**
   * Parse Street name.
   *
   * @param place
   * @returns {*}
   */
  parseStreetName: function parseStreetName(place) {
    var streetName = null;

    lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](place.address_components, function (item) {
      if (item.types.indexOf("route") > -1) {
        streetName = item.long_name.toLowerCase();
        return;
      }
    });

    return streetName;
  }
});

/***/ }),

/***/ "./resources/js/src/views/appointment/AddAppointment.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/appointment/AddAppointment.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddAppointment.vue?vue&type=template&id=1b74ec58& */ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58&");
/* harmony import */ var _AddAppointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddAppointment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddAppointment.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddAppointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/appointment/AddAppointment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAppointment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAppointment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddAppointment.vue?vue&type=template&id=1b74ec58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/appointment/AddAppointment.vue?vue&type=template&id=1b74ec58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddAppointment_vue_vue_type_template_id_1b74ec58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);