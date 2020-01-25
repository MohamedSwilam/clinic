(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create-duration",
  mounted: function mounted() {
    this.getReservationTypes();
  },
  data: function data() {
    return {
      form: {
        reservation_type_id: null,
        date: null,
        start_time: null,
        end_time: null,
        counter: 1
      },
      is_requesting: false,
      reservation_types: []
    };
  },
  methods: {
    getReservationTypes: function getReservationTypes() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('reservationType/getData').then(function (response) {
        _this.reservation_types = response.data.data.data;
        _this.form.reservation_type_id = _this.reservation_types[0].id;

        _this.$vs.loading.close(_this.$refs.create.$refs.content);
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    createReservationDuration: function createReservationDuration(createNew) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create-".concat(createNew),
        color: 'primary',
        scale: 0.45
      });
      this.$store.dispatch('reservationDuration/create', this.form).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create-".concat(createNew, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });

        if (!createNew) {
          _this2.$router.push('/dashboard/settings/reservation');
        }
      })["catch"](function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create-".concat(createNew, " > .con-vs-loading"));

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-duration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _vm.can("view-reservation")
        ? _c(
            "vx-card",
            {
              ref: "create",
              attrs: {
                title: "Add Reservation Duration",
                "collapse-action": ""
              }
            },
            [
              _c(
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
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Reservation Type",
                            autocomplete: "",
                            "label-placeholder": "Employee Role",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.reservation_type_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "reservation_type_id", $$v)
                            },
                            expression: "form.reservation_type_id"
                          }
                        },
                        _vm._l(_vm.reservation_types, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.name }
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
                                  value: _vm.form.date,
                                  expression: "form.date"
                                }
                              ],
                              staticClass:
                                "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                              staticStyle: {
                                border: "1px solid rgba(0, 0, 0, 0.2)"
                              },
                              attrs: { required: "", type: "date" },
                              domProps: { value: _vm.form.date },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "date",
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
                                  "\n                            Reservation Date\n                            "
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
                          _c("div", { staticClass: "vs-con-input" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.start_time,
                                  expression: "form.start_time"
                                }
                              ],
                              staticClass:
                                "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                              staticStyle: {
                                border: "1px solid rgba(0, 0, 0, 0.2)"
                              },
                              attrs: { required: "", type: "time" },
                              domProps: { value: _vm.form.start_time },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "start_time",
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
                                  "\n                            Start Time\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("i", {
                              staticClass:
                                "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-clock null"
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
                          _c("div", { staticClass: "vs-con-input" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.end_time,
                                  expression: "form.end_time"
                                }
                              ],
                              staticClass:
                                "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                              staticStyle: {
                                border: "1px solid rgba(0, 0, 0, 0.2)"
                              },
                              attrs: { required: "", type: "time" },
                              domProps: { value: _vm.form.end_time },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "end_time",
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
                                  "\n                            End Time\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("i", {
                              staticClass:
                                "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-clock null"
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
                        "vs-justify": "center",
                        "vs-align": "center",
                        "vs-lg": "12",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c("vs-input-number", {
                        attrs: { min: "0", label: "Counter:", step: 5 },
                        model: {
                          value: _vm.form.counter,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "counter", $$v)
                          },
                          expression: "form.counter"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c(
                "vs-row",
                { attrs: { "vs-justify": "center", "vs-align": "center" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mr-5",
                      attrs: { id: "btn-create-false", size: "small" },
                      on: {
                        click: function($event) {
                          _vm.is_requesting
                            ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                            : _vm.createReservationDuration(false)
                        }
                      }
                    },
                    [_vm._v("Add Duration & Browse")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container",
                      attrs: { id: "btn-create-true", size: "small" },
                      on: {
                        click: function($event) {
                          _vm.is_requesting
                            ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                            : _vm.createReservationDuration(true)
                        }
                      }
                    },
                    [_vm._v("Add Duration & Create Another")]
                  )
                ],
                1
              )
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

/***/ "./resources/js/src/views/settings/reservation/create-duration.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/create-duration.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-duration.vue?vue&type=template&id=79099c20& */ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20&");
/* harmony import */ var _create_duration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-duration.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-duration.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_duration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/reservation/create-duration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-duration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-duration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-duration.vue?vue&type=template&id=79099c20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/create-duration.vue?vue&type=template&id=79099c20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_duration_vue_vue_type_template_id_79099c20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);