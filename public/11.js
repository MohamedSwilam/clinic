(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// require styles




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit",
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"]
  },
  mounted: function mounted() {
    this.getMedicalReport();
  },
  data: function data() {
    return {
      form: null,
      is_requesting: false,
      counterDanger1: false,
      counterDanger2: false,
      counterDanger3: false,
      counterDanger4: false,
      counterDanger5: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.patient_id !== null && this.form.doctor_id !== null;
    }
  },
  methods: {
    getMedicalReport: function getMedicalReport() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.edit.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('medicalReport/view', this.$route.params.id).then(function (response) {
        _this.$vs.loading.close(_this.$refs.edit.$refs.content);

        _this.form = response.data.data.data;
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.edit.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    edit: function edit() {
      var _this2 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-edit",
        color: 'primary',
        scale: 0.45
      });
      console.log(this.form);
      this.$store.dispatch('medicalReport/update', {
        id: this.$route.params.id,
        data: this.form
      }).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-edit > .con-vs-loading");

        _this2.$router.push("/dashboard/medical-report/".concat(response.data.data.data.id));

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

        _this2.$vs.loading.close("#btn-edit > .con-vs-loading");

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _vm.can("edit-medical-report")
        ? _c(
            "vx-card",
            {
              ref: "edit",
              attrs: { title: "Edit Medical Report", "collapse-action": "" }
            },
            [
              _vm.form
                ? _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "mb-5 pl-5",
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                                      value: _vm.form.onset_date,
                                      expression: "form.onset_date"
                                    }
                                  ],
                                  staticClass:
                                    "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                                  staticStyle: {
                                    border: "1px solid rgba(0, 0, 0, 0.2)"
                                  },
                                  attrs: { required: "", type: "date" },
                                  domProps: { value: _vm.form.onset_date },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "onset_date",
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
                                      "\n                            Onset Date\n                        "
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Sudden" },
                                      model: {
                                        value: _vm.form.onset_manner,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "onset_manner",
                                            $$v
                                          )
                                        },
                                        expression: "form.onset_manner"
                                      }
                                    },
                                    [_vm._v("Sudden")]
                                  ),
                                  _vm._v(
                                    "\n                          \n                        "
                                  ),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Gradual" },
                                      model: {
                                        value: _vm.form.onset_manner,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "onset_manner",
                                            $$v
                                          )
                                        },
                                        expression: "form.onset_manner"
                                      }
                                    },
                                    [_vm._v("Gradual")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Manner of onset\n                        "
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Continuous" },
                                      model: {
                                        value: _vm.form.duration,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "duration", $$v)
                                        },
                                        expression: "form.duration"
                                      }
                                    },
                                    [_vm._v("Continuous")]
                                  ),
                                  _vm._v(
                                    "\n                          \n                        "
                                  ),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Attacks" },
                                      model: {
                                        value: _vm.form.duration,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "duration", $$v)
                                        },
                                        expression: "form.duration"
                                      }
                                    },
                                    [_vm._v("Attacks")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Duration\n                        "
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
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
                                [
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Mild" },
                                      model: {
                                        value: _vm.form.severity,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "severity", $$v)
                                        },
                                        expression: "form.severity"
                                      }
                                    },
                                    [_vm._v("Mild")]
                                  ),
                                  _vm._v(
                                    "\n                          \n                        "
                                  ),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Moderate" },
                                      model: {
                                        value: _vm.form.severity,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "severity", $$v)
                                        },
                                        expression: "form.severity"
                                      }
                                    },
                                    [_vm._v("Moderate")]
                                  ),
                                  _vm._v(
                                    "\n                          \n                        "
                                  ),
                                  _c(
                                    "vs-radio",
                                    {
                                      attrs: { "vs-value": "Severe" },
                                      model: {
                                        value: _vm.form.severity,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "severity", $$v)
                                        },
                                        expression: "form.severity"
                                      }
                                    },
                                    [_vm._v("Severe")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pb-5 input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label gender-placeholder"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Severity\n                        "
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "min:2",
                                expression: "'min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: {
                              danger: _vm.errors.has("factors"),
                              "danger-text": _vm.errors.first("factors"),
                              "val-icon-danger": "clear",
                              "icon-pack": "feather",
                              icon: "icon-edit",
                              "label-placeholder": "Initiating Factors",
                              name: "factors"
                            },
                            model: {
                              value: _vm.form.factors,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "factors", $$v)
                              },
                              expression: "form.factors"
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "min:2",
                                expression: "'min:2'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: {
                              danger: _vm.errors.has("symptoms"),
                              "danger-text": _vm.errors.first("symptoms"),
                              "val-icon-danger": "clear",
                              "icon-pack": "feather",
                              icon: "icon-edit",
                              "label-placeholder": "Associated Symptoms",
                              name: "symptoms"
                            },
                            model: {
                              value: _vm.form.associated_symptoms,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "associated_symptoms", $$v)
                              },
                              expression: "form.associated_symptoms"
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-textarea", {
                            attrs: {
                              counter: "350",
                              "counter-danger": _vm.counterDanger1,
                              label: "Examination"
                            },
                            on: {
                              "update:counterDanger": function($event) {
                                _vm.counterDanger1 = $event
                              },
                              "update:counter-danger": function($event) {
                                _vm.counterDanger1 = $event
                              }
                            },
                            model: {
                              value: _vm.form.examination,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "examination", $$v)
                              },
                              expression: "form.examination"
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-textarea", {
                            attrs: {
                              counter: "350",
                              "counter-danger": _vm.counterDanger2,
                              label: "Intra Oral Examination"
                            },
                            on: {
                              "update:counterDanger": function($event) {
                                _vm.counterDanger2 = $event
                              },
                              "update:counter-danger": function($event) {
                                _vm.counterDanger2 = $event
                              }
                            },
                            model: {
                              value: _vm.form.oral_examination,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "oral_examination", $$v)
                              },
                              expression: "form.oral_examination"
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-textarea", {
                            attrs: {
                              counter: "350",
                              "counter-danger": _vm.counterDanger3,
                              label: "Special Test and Examination"
                            },
                            on: {
                              "update:counterDanger": function($event) {
                                _vm.counterDanger3 = $event
                              },
                              "update:counter-danger": function($event) {
                                _vm.counterDanger3 = $event
                              }
                            },
                            model: {
                              value: _vm.form.special_test,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "special_test", $$v)
                              },
                              expression: "form.special_test"
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
                          attrs: { "vs-lg": "6", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("vs-textarea", {
                            attrs: {
                              counter: "350",
                              "counter-danger": _vm.counterDanger4,
                              label: "Diagnosis"
                            },
                            on: {
                              "update:counterDanger": function($event) {
                                _vm.counterDanger4 = $event
                              },
                              "update:counter-danger": function($event) {
                                _vm.counterDanger4 = $event
                              }
                            },
                            model: {
                              value: _vm.form.diagnosis,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "diagnosis", $$v)
                              },
                              expression: "form.diagnosis"
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
                          attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" }
                        },
                        [
                          _c("label", { staticClass: "mb-3" }, [
                            _c("b", [_vm._v("Treatment Plan: ")])
                          ]),
                          _vm._v(" "),
                          _c("quill-editor", {
                            model: {
                              value: _vm.form.treatment_plan,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "treatment_plan", $$v)
                              },
                              expression: "form.treatment_plan"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _vm.form
                ? _c(
                    "vs-row",
                    { attrs: { "vs-justify": "center", "vs-align": "center" } },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            id: "btn-edit",
                            disabled: !_vm.validateForm,
                            "icon-pack": "feather",
                            icon: "icon-save"
                          },
                          on: {
                            click: function($event) {
                              _vm.is_requesting
                                ? _vm.$store.dispatch(
                                    "viewWaitMessage",
                                    _vm.$vs
                                  )
                                : _vm.edit()
                            }
                          }
                        },
                        [_vm._v("Edit Medical Report")]
                      )
                    ],
                    1
                  )
                : _vm._e()
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

/***/ "./resources/js/src/views/medicalReport/edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/medicalReport/edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=6c76313e& */ "./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/medicalReport/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=6c76313e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/edit.vue?vue&type=template&id=6c76313e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6c76313e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);