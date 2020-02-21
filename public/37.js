(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pdf",
  mounted: function mounted() {
    this.getMedicalReport();
  },
  data: function data() {
    return {
      report: null
    };
  },
  methods: {
    getMedicalReport: function getMedicalReport() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.view,
        scale: 0.5
      });
      this.$store.dispatch('medicalReport/view', this.$route.params.id).then(function (response) {
        _this.report = response.data.data.data;

        _this.$vs.loading.close(_this.$refs.view);
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.view);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    print: function print() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".print-btn {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n}\n.pdf-logo {\n  width: auto;\n  height: auto;\n  max-width: 75px;\n  max-height: 75px;\n}\n@media print {\n.print-btn {\n    display: none;\n}\n}\n.ql-align-right{\n  text-align: right;\n}\n.ql-align-center {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pdf.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { ref: "view" },
    [
      _c(
        "vs-row",
        { staticClass: "mb-5 pl-5" },
        [
          _c("vs-col", { attrs: { "vs-w": "12" } }, [
            _c("img", {
              staticClass: "pdf-logo",
              attrs: { src: "/images/logo.png", alt: "British Denteal Clinic" }
            })
          ]),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-w": "12",
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center"
              }
            },
            [_c("h3", [_c("strong", [_vm._v("Medical Report")])])]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.report
        ? _c(
            "vs-row",
            [
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 12, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Name: ")]),
                  _vm._v(
                    " " +
                      _vm._s(_vm.report.patient.first_name) +
                      " " +
                      _vm._s(_vm.report.patient.last_name) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-2 pl-5",
                  attrs: { "vs-lg": 12, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("ID: ")]),
                  _vm._v(" " + _vm._s(_vm.report.patient.id) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c("vs-divider"),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Onset Date: ")]),
                  _vm._v(" " + _vm._s(_vm.report.onset_date) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Manner of onset: ")]),
                  _vm._v(" " + _vm._s(_vm.report.onset_manner) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Duration: ")]),
                  _vm._v(" " + _vm._s(_vm.report.duration) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Severity: ")]),
                  _vm._v(" " + _vm._s(_vm.report.severity) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Initiating Factors: ")]),
                  _vm._v(" " + _vm._s(_vm.report.factors) + "\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Associated Symptoms: ")]),
                  _vm._v(
                    " " + _vm._s(_vm.report.associated_symptoms) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Examination: ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.report.examination))])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Intra Oral Examination: ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.report.oral_examination))])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Intra Oral Examination: ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.report.oral_examination))])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Special Test and Examination: ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.report.special_test))])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": 6, "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Diagnosis: ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.report.diagnosis))])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-5 pl-5",
                  attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" }
                },
                [
                  _c("b", [_vm._v("Treatment Plan: ")]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "quill-editor rich-text-container",
                    domProps: { innerHTML: _vm._s(_vm.report.treatment_plan) }
                  })
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "print-btn",
          attrs: {
            size: "large",
            "icon-pack": "feather",
            icon: "icon-printer",
            type: "gradient"
          },
          on: { click: _vm.print }
        },
        [_vm._v("Print Now")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/medicalReport/pdf.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/medicalReport/pdf.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf.vue?vue&type=template&id=599f516e& */ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e&");
/* harmony import */ var _pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf.vue?vue&type=script&lang=js& */ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/medicalReport/pdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pdf.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pdf.vue?vue&type=template&id=599f516e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/pdf.vue?vue&type=template&id=599f516e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pdf_vue_vue_type_template_id_599f516e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);