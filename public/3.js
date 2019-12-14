(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      alpha: "First name may only contain alphabetic characters",
      min: "The first name field must be at least 3 characters"
    },
    last_name: {
      required: 'Last name is required',
      alpha: "Last name may only contain alphabetic characters",
      min: "The Last name field must be at least 3 characters"
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

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddAppointment",
  created: function created() {
    this.form.patient_id = this.$route.params.patient_id;

    if (this.form.patient_id !== 'new') {
      this.startIndex = 1;
      this.form.new_patient = 1;
      this.getPatientData();
    }
  },
  mounted: function mounted() {
    this.getReservationTypes();
  },
  data: function data() {
    return {
      reservation_types: [],
      form: {
        new_patient: 0,
        //False
        patient: {
          email: '',
          first_name: '',
          last_name: '',
          birth_date: '',
          address: '',
          city: '',
          country: '',
          phones: [],
          occupation: '',
          reference: '',
          gender: 'Male'
        },
        illness_description: '',
        status: 'Pending',
        reservation_type_id: null,
        reservation_duration_id: null,
        doctor_id: 1,
        patient_id: null,
        payment: {
          description: '',
          to_be_paid: '',
          paid: '',
          has_payment: 1
        }
      },
      is_requesting: false,
      Telephone: '',
      startIndex: 0,
      firstName: "",
      lastName: "",
      Telephones: ['01096436702', '01116436790'],
      reservation_type: 1,
      reservation_date: '',
      reservation_doctor: 1,
      reservation_duration: 1,
      amount_to_pay: 0,
      durations: [{
        id: 1,
        duration: '8:00AM - 10:00AM'
      }, {
        id: 2,
        duration: '10:00AM - 12:00PM'
      }, {
        id: 3,
        duration: '12:00PM - 2:00PM'
      }],
      doctors: []
    };
  },
  methods: {
    getPatientData: function getPatientData() {
      var _this = this;

      // this.$vs.loading({container: this.$refs.create.$refs.content, scale: 0.5});
      this.$store.dispatch('patient/view', this.$route.params.patient_id).then(function (response) {
        // this.$vs.loading.close(this.$refs.create.$refs.content);
        _this.form.patient = response.data.data.data;
      })["catch"](function (error) {
        console.log(error); // this.$vs.loading.close(this.$refs.create.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    validateStep1: function validateStep1() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll('step-1').then(function (result) {
          if (result) {
            if (_this2.form.patient.phones.length === 0) {
              _this2.$vs.notify({
                title: 'Oops..',
                text: 'Please, at least add one phone number!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              });

              reject("correct all values");
            }

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    getReservationTypes: function getReservationTypes() {
      var _this3 = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('reservationType/getData').then(function (response) {
        _this3.getDoctors();

        _this3.reservation_types = response.data.data.data;
        _this3.form.reservation_type_id = _this3.reservation_types[0].id;
      })["catch"](function (error) {
        console.log(error);

        _this3.$vs.loading.close(_this3.$refs.create.$refs.content);

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getDoctors: function getDoctors() {
      var _this4 = this;

      this.$store.dispatch('employee/getData', '').then(function (response) {
        _this4.$vs.loading.close(_this4.$refs.create.$refs.content);

        _this4.doctors = response.data.data.data;
        _this4.form.doctor_id = _this4.doctors[0].id;
      })["catch"](function (error) {
        console.log(error);

        _this4.$vs.loading.close(_this4.$refs.create.$refs.content);

        _this4.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.$validator.validateAll("step-2").then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.$validator.validateAll("step-3").then(function (result) {
          if (result) {
            _this6.vs_alert('Done', 'Reservation has been placed successfully', 'success', 'icon-check');

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    removeTelephone: function removeTelephone(item) {
      this.form.patient.phones.splice(this.form.patient.phones.indexOf(item), 1);
    },
    addTelephone: function addTelephone(e) {
      e.preventDefault();

      if (this.Telephone !== '') {
        this.form.patient.phones.push({
          'country_code': '+20',
          'number': this.Telephone
        });
        this.Telephone = "";
      }
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
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
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
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

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
    "vx-card",
    {
      ref: "create",
      attrs: {
        title:
          _vm.form.patient_id === "new"
            ? "Creating Reservation For New Patient"
            : "Creating Reservation For Existing Patient"
      }
    },
    [
      _c(
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
                _vm.form.patient_id === "new"
                  ? _c(
                      "div",
                      { staticClass: "vx-row" },
                      [
                        _c(
                          "vs-row",
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|alpha_dash|min:3",
                                      expression: "'required|alpha_dash|min:3'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    danger: _vm.errors.has("step-1.first_name"),
                                    "danger-text": _vm.errors.first(
                                      "step-1.first_name"
                                    ),
                                    "val-icon-danger": "clear",
                                    "icon-pack": "feather",
                                    icon: "icon-user",
                                    "label-placeholder": "First Name",
                                    name: "first_name"
                                  },
                                  model: {
                                    value: _vm.form.patient.first_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form.patient,
                                        "first_name",
                                        $$v
                                      )
                                    },
                                    expression: "form.patient.first_name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|alpha_dash|min:3",
                                      expression: "'required|alpha_dash|min:3'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    danger: _vm.errors.has("step-1.last_name"),
                                    "danger-text": _vm.errors.first(
                                      "step-1.last_name"
                                    ),
                                    "val-icon-danger": "clear",
                                    "icon-pack": "feather",
                                    icon: "icon-user",
                                    "label-placeholder": "Last Name",
                                    name: "last_name"
                                  },
                                  model: {
                                    value: _vm.form.patient.last_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form.patient,
                                        "last_name",
                                        $$v
                                      )
                                    },
                                    expression: "form.patient.last_name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
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
                                            value: _vm.form.patient.birth_date,
                                            expression:
                                              "form.patient.birth_date"
                                          }
                                        ],
                                        staticClass:
                                          "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                                        staticStyle: {
                                          border: "1px solid rgba(0, 0, 0, 0.2)"
                                        },
                                        attrs: { required: "", type: "date" },
                                        domProps: {
                                          value: _vm.form.patient.birth_date
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form.patient,
                                              "birth_date",
                                              $event.target.value
                                            )
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
                                            "\n                                Date of birth\n                                "
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
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    name: "address",
                                    danger: _vm.errors.has("step-1.address"),
                                    "val-icon-danger": "clear",
                                    "danger-text": _vm.errors.first(
                                      "step-1.address"
                                    ),
                                    "icon-pack": "feather",
                                    icon: "icon-map-pin",
                                    "label-placeholder": "Address"
                                  },
                                  model: {
                                    value: _vm.form.patient.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form.patient, "address", $$v)
                                    },
                                    expression: "form.patient.address"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    name: "city",
                                    danger: _vm.errors.has("step-1.city"),
                                    "val-icon-danger": "clear",
                                    "danger-text": _vm.errors.first(
                                      "step-1.city"
                                    ),
                                    "icon-pack": "feather",
                                    icon: "icon-map-pin",
                                    "label-placeholder": "City"
                                  },
                                  model: {
                                    value: _vm.form.patient.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form.patient, "city", $$v)
                                    },
                                    expression: "form.patient.city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    name: "country",
                                    danger: _vm.errors.has("step-1.country"),
                                    "val-icon-danger": "clear",
                                    "danger-text": _vm.errors.first(
                                      "step-1.country"
                                    ),
                                    "icon-pack": "feather",
                                    icon: "icon-map-pin",
                                    "label-placeholder": "Country"
                                  },
                                  model: {
                                    value: _vm.form.patient.country,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form.patient, "country", $$v)
                                    },
                                    expression: "form.patient.country"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
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
                                      _vm._l(_vm.form.patient.phones, function(
                                        telephone,
                                        index
                                      ) {
                                        return _c(
                                          "vs-chip",
                                          {
                                            key: index,
                                            attrs: { closable: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.removeTelephone(
                                                  telephone
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(telephone.number) +
                                                "\n                                    "
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
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
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
                                            attrs: { "vs-value": "Male" },
                                            model: {
                                              value: _vm.form.patient.gender,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form.patient,
                                                  "gender",
                                                  $$v
                                                )
                                              },
                                              expression: "form.patient.gender"
                                            }
                                          },
                                          [_vm._v("Male")]
                                        ),
                                        _vm._v(
                                          "\n                                      \n                                    "
                                        ),
                                        _c(
                                          "vs-radio",
                                          {
                                            attrs: { "vs-value": "Female" },
                                            model: {
                                              value: _vm.form.patient.gender,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form.patient,
                                                  "gender",
                                                  $$v
                                                )
                                              },
                                              expression: "form.patient.gender"
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
                                              "\n                                Gender\n                                "
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
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "email",
                                      expression: "'email'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    danger: _vm.errors.has(
                                      "step-1.step-1.email"
                                    ),
                                    "danger-text": _vm.errors.first(
                                      "step-1.email"
                                    ),
                                    "val-icon-danger": "clear",
                                    "icon-pack": "feather",
                                    icon: "icon-mail",
                                    "label-placeholder": "Email",
                                    name: "email"
                                  },
                                  model: {
                                    value: _vm.form.patient.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form.patient, "email", $$v)
                                    },
                                    expression: "form.patient.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    danger: _vm.errors.has("step-1.occupation"),
                                    "danger-text": _vm.errors.first(
                                      "step-1.occupation"
                                    ),
                                    "val-icon-danger": "clear",
                                    "icon-pack": "feather",
                                    icon: "icon-briefcase",
                                    "label-placeholder": "Occupation",
                                    name: "occupation"
                                  },
                                  model: {
                                    value: _vm.form.patient.occupation,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form.patient,
                                        "occupation",
                                        $$v
                                      )
                                    },
                                    expression: "form.patient.occupation"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-5 pl-5",
                                attrs: {
                                  "vs-lg": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    danger: _vm.errors.has("step-1.reference"),
                                    "danger-text": _vm.errors.first(
                                      "step-1.reference"
                                    ),
                                    "val-icon-danger": "clear",
                                    "icon-pack": "feather",
                                    icon: "icon-git-branch",
                                    "label-placeholder": "Referred From",
                                    name: "reference"
                                  },
                                  model: {
                                    value: _vm.form.patient.reference,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form.patient,
                                        "reference",
                                        $$v
                                      )
                                    },
                                    expression: "form.patient.reference"
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
                    )
                  : _c(
                      "div",
                      [
                        _vm.form.patient
                          ? _c(
                              "vs-row",
                              [
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Name: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.form.patient.first_name) +
                                        " " +
                                        _vm._s(_vm.form.patient.last_name) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Gender: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.form.patient.gender) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Email: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.email
                                            ? _vm.form.patient.email
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Phone(s): ")]),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.patient.phones, function(
                                      phone,
                                      index
                                    ) {
                                      return [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "txt-hover",
                                            on: {
                                              click: function($event) {
                                                return _vm.copyToClipboard(
                                                  phone.number
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(phone.number))]
                                        ),
                                        _vm._v(" "),
                                        index !==
                                        _vm.form.patient.phones.length - 1
                                          ? [_vm._v(", ")]
                                          : _vm._e()
                                      ]
                                    }),
                                    _vm._v(" "),
                                    _vm.form.patient.phones.length === 0
                                      ? [
                                          _vm._v(
                                            "\n                                No Telephones Assigned!\n                            "
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("City: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.city
                                            ? _vm.form.patient.city
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Country: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.country
                                            ? _vm.form.patient.country
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Address: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.address
                                            ? _vm.form.patient.address
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Birth Date: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.birth_date
                                            ? _vm.form.patient.birth_date
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("Occupation: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.occupation
                                            ? _vm.form.patient.occupation
                                            : "Not Specified!"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-col",
                                  {
                                    staticClass: "mb-5",
                                    attrs: {
                                      "vs-lg": "6",
                                      "vs-sm": "12",
                                      "vs-xs": "12"
                                    }
                                  },
                                  [
                                    _c("b", [_vm._v("form.Referred From: ")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.form.patient.reference
                                            ? _vm.form.patient.reference
                                            : "No Body"
                                        ) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
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
                _c(
                  "div",
                  { staticClass: "vx-row" },
                  [
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5 pl-5",
                            attrs: {
                              "vs-lg": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-select",
                              {
                                staticClass: "w-full",
                                attrs: { label: "Reservation Type" },
                                model: {
                                  value: _vm.form.reservation_type_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "reservation_type_id",
                                      $$v
                                    )
                                  },
                                  expression: "form.reservation_type_id"
                                }
                              },
                              _vm._l(_vm.reservation_types, function(
                                type,
                                index
                              ) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: { value: type.id, text: type.name }
                                })
                              }),
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5 pl-5 pt-1",
                            attrs: {
                              "vs-lg": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
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
                                        value: _vm.reservation_date,
                                        expression: "reservation_date"
                                      }
                                    ],
                                    staticClass:
                                      "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                                    staticStyle: {
                                      border: "1px solid rgba(0, 0, 0, 0.2)"
                                    },
                                    attrs: { required: "", type: "date" },
                                    domProps: { value: _vm.reservation_date },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.reservation_date =
                                          $event.target.value
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
                                        "\n                                Reservation Date\n                                "
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
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5 pl-5",
                            attrs: {
                              "vs-lg": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-select",
                              {
                                staticClass: "w-full",
                                attrs: { label: "Doctor" },
                                model: {
                                  value: _vm.form.doctor_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "doctor_id", $$v)
                                  },
                                  expression: "form.doctor_id"
                                }
                              },
                              _vm._l(_vm.doctors, function(doctor, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: doctor.id,
                                    text:
                                      doctor.first_name + " " + doctor.last_name
                                  }
                                })
                              }),
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5 pl-5",
                            attrs: {
                              "vs-lg": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-select",
                              {
                                staticClass: "w-full",
                                attrs: { label: "Reservation Duration" },
                                model: {
                                  value: _vm.form.reservation_duration_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "reservation_duration_id",
                                      $$v
                                    )
                                  },
                                  expression: "form.reservation_duration_id"
                                }
                              },
                              _vm._l(_vm.durations, function(duration, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: duration.id,
                                    text: duration.duration
                                  }
                                })
                              }),
                              1
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
                _c(
                  "div",
                  { staticClass: "vx-row" },
                  [
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5",
                            attrs: {
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-table",
                              {
                                attrs: { data: ["", ""] },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var data = ref.data
                                      return [
                                        _c(
                                          "vs-tr",
                                          [
                                            _c("vs-td", [_vm._v("Operation")]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("5000 EGP")]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("0%")]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("5000 EGP")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-tr",
                                          [
                                            _c("vs-td", [
                                              _vm._v("Old Payments")
                                            ]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("600 EGP")]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("-")]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("5000 EGP")])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-tr",
                                          [
                                            _c("vs-td"),
                                            _vm._v(" "),
                                            _c("vs-td"),
                                            _vm._v(" "),
                                            _c("vs-td", [
                                              _c("b", [_vm._v("TOTAL: ")])
                                            ]),
                                            _vm._v(" "),
                                            _c("vs-td", [_vm._v("5600 EGP")])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              },
                              [
                                _c(
                                  "template",
                                  { slot: "thead" },
                                  [
                                    _c("vs-th", [_vm._v("Title")]),
                                    _vm._v(" "),
                                    _c("vs-th", [_vm._v("Cost")]),
                                    _vm._v(" "),
                                    _c("vs-th", [_vm._v("Discount")]),
                                    _vm._v(" "),
                                    _c("vs-th", [_vm._v("Total")])
                                  ],
                                  1
                                )
                              ],
                              2
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
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12",
                              "vs-justify": "center",
                              "vs-align": "center"
                            }
                          },
                          [
                            _c("vs-input-number", {
                              attrs: {
                                min: "0",
                                max: "5600",
                                label: "Amount To Pay:",
                                step: 50
                              },
                              model: {
                                value: _vm.amount_to_pay,
                                callback: function($$v) {
                                  _vm.amount_to_pay = $$v
                                },
                                expression: "amount_to_pay"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            staticClass: "mb-5",
                            attrs: {
                              "vs-lg": "12",
                              "vs-sm": "12",
                              "vs-xs": "12",
                              "vs-justify": "center",
                              "vs-align": "center"
                            }
                          },
                          [
                            _c("b", [_vm._v("Remaining: ")]),
                            _vm._v(
                              _vm._s(5600 - _vm.amount_to_pay) +
                                "\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
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