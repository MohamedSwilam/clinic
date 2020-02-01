(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse-medical-report",
  mounted: function mounted() {
    this.getMedicalReports();
  },
  data: function data() {
    return {
      medicalReports: [],
      medicalReportCurrentPage: 1,
      medicalReportPaginate: 15,
      medical_report_total_pages: 0,
      is_requesting: false
    };
  },
  methods: {
    getMedicalReports: function getMedicalReports() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.medical_report.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('medicalReport/browse', "?patient=".concat(this.$route.params.id, "&page=").concat(this.medicalReportCurrentPage, "&paginate=").concat(this.medicalReportPaginate)).then(function (response) {
        _this.$vs.loading.close(_this.$refs.medical_report.$refs.content);

        _this.medicalReports = response.data.data.data;
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.medical_report.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmToDelete: function confirmToDelete(report) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteReport,
        parameters: [report]
      });
    },
    deleteReport: function deleteReport(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#delete-report-btn-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('medicalReport/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#delete-report-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this2.medicalReports = _this2.medicalReports.filter(function (report) {
          return report.id !== params[0].id;
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

        _this2.$vs.loading.close("#delete-report-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    handleMedicalReportChangePage: function handleMedicalReportChangePage() {
      this.getMedicalReports();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _medicalReport_browse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../medicalReport/browse */ "./resources/js/src/views/medicalReport/browse.vue");
/* harmony import */ var _prescription_browse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prescription/browse */ "./resources/js/src/views/prescription/browse.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "profile",
  mounted: function mounted() {
    this.form.patient_id = this.$route.params.id;
    this.getPatientData();
  },
  components: {
    browseMedicalReport: _medicalReport_browse__WEBPACK_IMPORTED_MODULE_0__["default"],
    prescription: _prescription_browse__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      patient: null,
      form: {
        description: '',
        to_be_paid: 0,
        paid: 0,
        patient_id: null
      },
      is_requesting: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.description !== "" && this.form.paid > 0;
    }
  },
  methods: {
    getPatientData: function getPatientData() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.view.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('patient/view', this.$route.params.id).then(function (response) {
        _this.$vs.loading.close(_this.$refs.view.$refs.content);

        _this.patient = response.data.data.data;
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.view.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    createPayment: function createPayment() {
      var _this2 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#add-payment-btn",
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('payment/create', this.form).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#add-payment-btn > .con-vs-loading");

        _this2.patient.payments.push(response.data.data.data);

        _this2.patient.paid_payments += _this2.form.paid;
        _this2.form.paid = 0;

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

        _this2.$vs.loading.close("#add-payment-btn > .con-vs-loading");

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmToDeletePayment: function confirmToDeletePayment(payment) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deletePayment,
        parameters: [payment]
      });
    },
    deletePayment: function deletePayment(params) {
      var _this3 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#delete-payment-btn-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('payment/delete', params[0].id).then(function (response) {
        _this3.is_requesting = false;

        _this3.$vs.loading.close("#delete-payment-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this3.patient.payments = _this3.patient.payments.filter(function (payment) {
          return payment.id !== params[0].id;
        });
        _this3.patient.paid_payments -= params[0].paid;

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

        _this3.$vs.loading.close("#delete-payment-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse-prescription",
  mounted: function mounted() {
    this.getPrescription();
  },
  data: function data() {
    return {
      prescriptions: [],
      currentPage: 1,
      paginate: 15,
      total_pages: 0,
      is_requesting: false
    };
  },
  methods: {
    getPrescription: function getPrescription() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.prescription.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('prescription/browse', "?patient=".concat(this.$route.params.id, "&page=").concat(this.currentPage, "&paginate=").concat(this.paginate)).then(function (response) {
        _this.$vs.loading.close(_this.$refs.prescription.$refs.content);

        _this.prescriptions = response.data.data.data;
      })["catch"](function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.prescription.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmToDelete: function confirmToDelete(report) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteReport,
        parameters: [report]
      });
    },
    deleteReport: function deleteReport(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#delete-report-btn-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('prescription/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#delete-report-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this2.prescriptions = _this2.prescriptions.filter(function (report) {
          return report.id !== params[0].id;
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

        _this2.$vs.loading.close("#delete-report-btn-".concat(params[0].id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    handleChangePage: function handleChangePage() {
      this.getPrescription();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-medical-report")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            {
              ref: "medical_report",
              attrs: {
                title: "Medical Reports",
                collapseAction: "",
                refreshContentAction: ""
              },
              on: { refresh: _vm.getMedicalReports }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { sst: true, data: _vm.medicalReports },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(_vm.medicalReports, function(
                            report,
                            index
                          ) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push({
                                            name: "view-employee",
                                            params: { id: report.doctor.id }
                                          })
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(report.doctor.first_name) +
                                          " " +
                                          _vm._s(report.doctor.last_name)
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("date")(report.created_at, true)
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    _vm._s(_vm._f("time")(report.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          to:
                                            "/dashboard/medical-report/" +
                                            report.id,
                                          "icon-pack": "feather",
                                          icon: "icon-eye",
                                          color: "primary",
                                          radius: "",
                                          type: "border"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        staticClass: "ml-3",
                                        attrs: {
                                          to:
                                            "/dashboard/medical-report/" +
                                            report.id +
                                            "/edit",
                                          "icon-pack": "feather",
                                          icon: "icon-edit",
                                          color: "warning",
                                          radius: "",
                                          type: "border"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.can("delete-medical-report")
                                        ? _c("vs-button", {
                                            staticClass: "ml-3",
                                            attrs: {
                                              id:
                                                "delete-report-btn-" +
                                                report.id,
                                              "icon-pack": "feather",
                                              radius: "",
                                              color: "danger",
                                              icon: "icon-trash",
                                              type: "border"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.confirmToDelete(
                                                  report
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    473661347
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "header" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mb-5",
                          attrs: {
                            to:
                              "/dashboard/patient/" +
                              _vm.$route.params.id +
                              "/create-medical-report",
                            size: "small",
                            "icon-pack": "feather",
                            icon: "icon-plus",
                            type: "filled"
                          }
                        },
                        [_vm._v("Add Medical Report")]
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
                      _c("vs-th", [_vm._v("Added By")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Time")]),
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
                attrs: { goto: "", total: _vm.medical_report_total_pages },
                on: { change: _vm.handleMedicalReportChangePage },
                model: {
                  value: _vm.medicalReportCurrentPage,
                  callback: function($$v) {
                    _vm.medicalReportCurrentPage = $$v
                  },
                  expression: "medicalReportCurrentPage"
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705& ***!
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
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _vm.can("view-patient")
            ? _c(
                "vx-card",
                {
                  ref: "view",
                  attrs: {
                    title: "Personal Information",
                    collapseAction: "",
                    refreshContentAction: ""
                  },
                  on: { refresh: _vm.getPatientData }
                },
                [
                  _vm.patient
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
                                  _vm._s(_vm.patient.first_name) +
                                  " " +
                                  _vm._s(_vm.patient.last_name) +
                                  "\n                    "
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
                                  _vm._s(_vm.patient.gender) +
                                  "\n                    "
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
                                    _vm.patient.email
                                      ? _vm.patient.email
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                              _vm._l(_vm.patient.phones, function(
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
                                  index !== _vm.patient.phones.length - 1
                                    ? [_vm._v(", ")]
                                    : _vm._e()
                                ]
                              }),
                              _vm._v(" "),
                              _vm.patient.phones.length === 0
                                ? [
                                    _vm._v(
                                      "\n                            No Telephones Assigned!\n                        "
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
                                    _vm.patient.city
                                      ? _vm.patient.city
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                                    _vm.patient.country
                                      ? _vm.patient.country
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                                    _vm.patient.address
                                      ? _vm.patient.address
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                                    _vm.patient.birth_date
                                      ? _vm.patient.birth_date
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                                    _vm.patient.occupation
                                      ? _vm.patient.occupation
                                      : "Not Specified!"
                                  ) +
                                  "\n                    "
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
                              _c("b", [_vm._v("Referred From: ")]),
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.patient.reference
                                      ? _vm.patient.reference
                                      : "No Body"
                                  ) +
                                  "\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-justify": "center" } },
                    [
                      _vm.can("edit-patient")
                        ? _c(
                            "vs-button",
                            {
                              attrs: {
                                to:
                                  "/dashboard/patient/" +
                                  _vm.$route.params.id +
                                  "/edit",
                                size: "small",
                                "icon-pack": "feather",
                                icon: "icon-edit",
                                type: "filled"
                              }
                            },
                            [_vm._v("Edit Information")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.can("browse-payment")
        ? _c(
            "div",
            { staticClass: "vx-col w-full mb-base" },
            [
              _c(
                "vx-card",
                {
                  attrs: { title: "Payments Information", collapseAction: "" }
                },
                [
                  _vm.patient
                    ? _c(
                        "vs-table",
                        {
                          attrs: { data: _vm.patient.payments },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(_vm.patient.payments, function(
                                    payment,
                                    index
                                  ) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(_vm._s(index + 1))
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(_vm._s(payment.description))
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            _vm._s(
                                              payment.created_at.split(" ")[0]
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            _vm._s(
                                              payment.created_at.split(" ")[1]
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(_vm._s(payment.to_be_paid))
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(_vm._s(payment.paid))
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _c(
                                            "div",
                                            { staticClass: "flex" },
                                            [
                                              _vm.can("delete-payment")
                                                ? _c("vs-button", {
                                                    staticClass: "ml-3",
                                                    attrs: {
                                                      id:
                                                        "delete-payment-btn-" +
                                                        payment.id,
                                                      "icon-pack": "feather",
                                                      radius: "",
                                                      color: "danger",
                                                      icon: "icon-trash",
                                                      type: "border"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.confirmToDeletePayment(
                                                          payment
                                                        )
                                                      }
                                                    }
                                                  })
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  })
                                }
                              }
                            ],
                            null,
                            false,
                            835050963
                          )
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _c("vs-th", [_vm._v("#")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Description")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Date")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Time")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("To Be Paid")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Paid")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Action")])
                            ],
                            1
                          )
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.can("create-payment") ? _c("vs-divider") : _vm._e(),
                  _vm._v(" "),
                  _vm.patient && _vm.can("create-payment")
                    ? _c(
                        "vs-row",
                        [
                          _c(
                            "vs-row",
                            { staticClass: "mb-5", attrs: { "vs-w": "12" } },
                            [_c("h3", [_vm._v("Create Payment")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-row",
                            { staticClass: "mb-5", attrs: { "vs-w": "12" } },
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
                                  _c("vs-input", {
                                    directives: [
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required|min:3",
                                        expression: "'required|min:3'"
                                      }
                                    ],
                                    staticClass: "w-full",
                                    attrs: {
                                      name: "description",
                                      "label-placeholder": "Description",
                                      "icon-pack": "feather",
                                      icon: "icon-file-text",
                                      danger: _vm.errors.has("description"),
                                      "danger-text": _vm.errors.first(
                                        "description"
                                      ),
                                      "val-icon-danger": "clear"
                                    },
                                    model: {
                                      value: _vm.form.description,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "description", $$v)
                                      },
                                      expression: "form.description"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mb-5 pt-3",
                                  attrs: {
                                    "vs-lg": "6",
                                    "vs-sm": "12",
                                    "vs-xs": "12",
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    "vs-align": "center"
                                  }
                                },
                                [
                                  _c("vs-input-number", {
                                    attrs: {
                                      min: "0",
                                      max:
                                        _vm.patient.payments_total -
                                        _vm.patient.paid_payments,
                                      label: "Amount To Pay:",
                                      step: 50
                                    },
                                    model: {
                                      value: _vm.form.paid,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "paid", $$v)
                                      },
                                      expression: "form.paid"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b", { staticClass: "ml-2" }, [
                                    _vm._v(" Remaining: ")
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "ml-2" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm.patient.payments_total -
                                          _vm.patient.paid_payments -
                                          _vm.form.paid
                                      ) + " EGP"
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                {
                                  staticClass: "mt-3",
                                  attrs: {
                                    "vs-w": "12",
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    "vs-align": "center"
                                  }
                                },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: {
                                        disabled: !_vm.validateForm,
                                        id: "add-payment-btn",
                                        size: "small",
                                        type: "filled",
                                        "icon-pack": "feather",
                                        icon: "icon-plus"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.is_requesting
                                            ? _vm.$store.dispatch(
                                                "viewWaitMessage",
                                                _vm.$vs
                                              )
                                            : _vm.createPayment()
                                        }
                                      }
                                    },
                                    [_vm._v("Add Payment")]
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
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("browse-medical-report"),
      _vm._v(" "),
      _c("prescription")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-prescription")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            {
              ref: "prescription",
              attrs: {
                title: "Reports",
                collapseAction: "",
                refreshContentAction: ""
              },
              on: { refresh: _vm.getPrescription }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { sst: true, data: _vm.prescriptions },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(_vm.prescriptions, function(
                            report,
                            index
                          ) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push({
                                            name: "view-employee",
                                            params: { id: report.creator.id }
                                          })
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(report.creator.first_name) +
                                          " " +
                                          _vm._s(report.creator.last_name)
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("date")(report.created_at, true)
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    _vm._s(_vm._f("time")(report.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          to: "/dashboard/report/" + report.id,
                                          "icon-pack": "feather",
                                          icon: "icon-eye",
                                          color: "primary",
                                          radius: "",
                                          type: "border"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("vs-button", {
                                        staticClass: "ml-3",
                                        attrs: {
                                          to:
                                            "/dashboard/report/" +
                                            report.id +
                                            "/edit",
                                          "icon-pack": "feather",
                                          icon: "icon-edit",
                                          color: "warning",
                                          radius: "",
                                          type: "border"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.can("delete-prescription")
                                        ? _c("vs-button", {
                                            staticClass: "ml-3",
                                            attrs: {
                                              id:
                                                "delete-report-btn-" +
                                                report.id,
                                              "icon-pack": "feather",
                                              radius: "",
                                              color: "danger",
                                              icon: "icon-trash",
                                              type: "border"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.confirmToDelete(
                                                  report
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    305573715
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "header" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mb-5",
                          attrs: {
                            to:
                              "/dashboard/patient/" +
                              _vm.$route.params.id +
                              "/create-report",
                            size: "small",
                            "icon-pack": "feather",
                            icon: "icon-plus",
                            type: "filled"
                          }
                        },
                        [_vm._v("Add Report")]
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
                      _c("vs-th", [_vm._v("Added By")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Time")]),
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/medicalReport/browse.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/medicalReport/browse.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=2d8d9a84&scoped=true& */ "./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d8d9a84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/medicalReport/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=2d8d9a84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/medicalReport/browse.vue?vue&type=template&id=2d8d9a84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_2d8d9a84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/patient/profile.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/patient/profile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=1124c705& */ "./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/patient/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=1124c705& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/patient/profile.vue?vue&type=template&id=1124c705&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_1124c705___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/prescription/browse.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/prescription/browse.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=435474f6&scoped=true& */ "./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "435474f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/prescription/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=435474f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/browse.vue?vue&type=template&id=435474f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_435474f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);