(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "viewData",
  mounted: function mounted() {
    this.getEmployeeData();
  },
  data: function data() {
    return {
      employee: null,
      searchText: "",
      appointments: [],
      currentPage: 1,
      sortFilter: 'sortDesc=id',
      paginate: 15,
      total_pages: 0,
      filterBy: 'date',
      is_requesting: false,
      statuses: [{
        id: 1,
        name: 'Coming',
        color: '#7467F0'
      }, {
        id: 2,
        name: 'Inside',
        color: '#EA5455'
      }, {
        id: 3,
        name: 'Postponed',
        color: '#FF9F42'
      }, {
        id: 4,
        name: 'Finished',
        color: '#27C76F'
      }]
    };
  },
  methods: {
    getEmployeeData: function getEmployeeData() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.view.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('employee/view', this.$route.params.id).then(function (response) {
        _this.employee = response.data.data.data;

        _this.$vs.loading.close(_this.$refs.view.$refs.content);

        if (_this.employee.roles[0].id === 3) {
          _this.getAppointments();
        }
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
    getAppointments: function getAppointments() {
      var _this2 = this;

      this.$vs.loading({
        container: this.$refs.browse.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('appointment/getData', "?page=".concat(this.currentPage, "&paginate=").concat(this.paginate, "&").concat(this.sortFilter, "&").concat(this.filterBy, "=").concat(this.searchText, "&doctor=").concat(this.$route.params.id)).then(function (response) {
        _this2.$vs.loading.close(_this2.$refs.browse.$refs.content);

        _this2.appointments = response.data.data.data;
        _this2.total_pages = response.data.data.meta.pagination.total_pages;
      })["catch"](function (error) {
        console.log(error);

        _this2.$vs.loading.close(_this2.$refs.browse.$refs.content);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    updateStatus: function updateStatus(index, appointmentId, statusId) {
      var _this3 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#update-status-btn-".concat(appointmentId, "-").concat(statusId),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('appointment/update', {
        id: appointmentId,
        data: {
          status_id: statusId,
          has_payment: 0
        }
      }).then(function (response) {
        _this3.is_requesting = false;
        _this3.appointments[index].status_id = statusId;
        _this3.appointments[index].status = _this3.statuses.filter(function (status) {
          return status.id === statusId;
        })[0];

        _this3.$vs.loading.close("#update-status-btn-".concat(appointmentId, "-").concat(statusId, " > .con-vs-loading"));

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

        _this3.$vs.loading.close("update-status-btn-".concat(appointmentId, "-").concat(statusId, " > .con-vs-loading"));

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmDeleteAppointement: function confirmDeleteAppointement(appointment) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteAppointment,
        parameters: [appointment]
      });
    },
    deleteAppointment: function deleteAppointment(params) {
      var _this4 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('appointment/delete', params[0].id).then(function (response) {
        _this4.is_requesting = false;

        _this4.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this4.appointments = _this4.appointments.filter(function (appointment) {
          return appointment.id !== params[0].id;
        });

        _this4.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this4.is_requesting = false;

        _this4.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this4.$vs.notify({
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
      this.getAppointments();
    },
    handleSort: function handleSort(key, active) {
      this.sortFilter = active ? "sortDesc=".concat(key) : "sortAsc=".concat(key);
      this.currentPage = 1;
      this.getAppointments();
    },
    handleChangePage: function handleChangePage() {
      this.getAppointments();
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
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  cursor: pointer;\n  color: black !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _vm.can("view-user") ||
    _vm.$store.getters["auth/userData"].id === _vm.$route.params.id
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              {
                ref: "view",
                attrs: { title: "Personal Information", collapseAction: "" }
              },
              [
                _vm.employee
                  ? _c(
                      "vs-row",
                      [
                        _c(
                          "vs-row",
                          { staticClass: "mb-5" },
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
                                _c("vs-avatar", {
                                  staticClass: "mx-auto mb-2 block",
                                  attrs: {
                                    size: "120px",
                                    src: _vm.employee.image
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.employee.first_name) +
                                    " " +
                                    _vm._s(_vm.employee.last_name) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.employee.roles[0].name) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.employee.email) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _vm._v(
                                  "\n                        Birth Date: " +
                                    _vm._s(_vm.employee.birth_date) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _vm._v(
                                  "\n                        Address: " +
                                    _vm._s(_vm.employee.address) +
                                    " - " +
                                    _vm._s(_vm.employee.city) +
                                    ", " +
                                    _vm._s(_vm.employee.country) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
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
                                _c(
                                  "p",
                                  { staticClass: "text-grey" },
                                  [
                                    _vm._l(_vm.employee.phones, function(
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
                                        index !== _vm.employee.phones.length - 1
                                          ? [_vm._v(", ")]
                                          : _vm._e()
                                      ]
                                    }),
                                    _vm._v(" "),
                                    _vm.employee.phones.length === 0
                                      ? [
                                          _vm._v(
                                            "\n                                No Telephones Assigned!\n                            "
                                          )
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              ]
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
    _vm.employee && _vm.employee.roles[0].id === 3
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              {
                ref: "browse",
                attrs: {
                  title: "Appointments",
                  collapseAction: "",
                  refreshContentAction: ""
                },
                on: { refresh: _vm.getAppointments }
              },
              [
                _c(
                  "vs-table",
                  {
                    attrs: { sst: true, data: _vm.appointments },
                    on: { sort: _vm.handleSort },
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
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(index + 1) +
                                              "\n                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(appointment.patient.id) +
                                            "\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              appointment.patient.first_name
                                            ) +
                                            " " +
                                            _vm._s(
                                              appointment.patient.last_name
                                            ) +
                                            "\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              appointment.reservation_duration
                                                .date
                                            ) +
                                            "\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              new Date(
                                                appointment.reservation_duration
                                                  .date +
                                                  " " +
                                                  appointment
                                                    .reservation_duration
                                                    .start_time
                                              ).toLocaleTimeString()
                                            ) +
                                            "\n                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("vs-td", [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              new Date(
                                                appointment.reservation_duration
                                                  .date +
                                                  " " +
                                                  appointment
                                                    .reservation_duration
                                                    .end_time
                                              ).toLocaleTimeString()
                                            ) +
                                            "\n                            "
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
                                                _vm._s(appointment.status.name)
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
                                            _c("vs-button", {
                                              attrs: {
                                                to:
                                                  "/dashboard/patient/" +
                                                  appointment.patient.id,
                                                radius: "",
                                                color: "primary",
                                                type: "border",
                                                "icon-pack": "feather",
                                                icon: "icon-eye"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("vs-button", {
                                              staticClass: "ml-3",
                                              attrs: {
                                                id:
                                                  "btn-delete-" +
                                                  appointment.id,
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
                                                      _vm._v(
                                                        "\n                                            Paid "
                                                      ),
                                                      _c("b", [
                                                        _vm._v(
                                                          _vm._s(
                                                            appointment
                                                              .payment[0].paid
                                                          ) + " EGP"
                                                        )
                                                      ]),
                                                      _vm._v(" Out of "),
                                                      _c("b", [
                                                        _vm._v(
                                                          _vm._s(
                                                            appointment
                                                              .payment[0]
                                                              .to_be_paid
                                                          ) + " EGP"
                                                        )
                                                      ])
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("vs-list-item", {
                                                    attrs: {
                                                      "icon-pack": "feather",
                                                      icon: "icon-arrow-right",
                                                      title:
                                                        "Type: " +
                                                        appointment
                                                          .reservation_type.name
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("vs-list-item", {
                                                    attrs: {
                                                      "icon-pack": "feather",
                                                      icon: "icon-arrow-right",
                                                      title:
                                                        "Doctor: " +
                                                        appointment.doctor
                                                          .first_name +
                                                        " " +
                                                        appointment.doctor
                                                          .last_name
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("vs-list-item", {
                                                    attrs: {
                                                      "icon-pack": "feather",
                                                      icon: "icon-arrow-right",
                                                      title:
                                                        "Illness Description: " +
                                                        appointment.illness_description
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
                                                    _vm._l(
                                                      _vm.statuses,
                                                      function(
                                                        status,
                                                        status_index
                                                      ) {
                                                        return _c(
                                                          "vs-button",
                                                          {
                                                            key: status_index,
                                                            staticClass: "ml-3",
                                                            attrs: {
                                                              id:
                                                                "update-status-btn-" +
                                                                appointment.id +
                                                                "-" +
                                                                status.id,
                                                              size: "small",
                                                              color:
                                                                status.color,
                                                              type:
                                                                appointment
                                                                  .status.id ===
                                                                status.id
                                                                  ? "filled"
                                                                  : "border",
                                                              "icon-pack":
                                                                "feather"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.is_requesting
                                                                  ? _vm.$store.dispatch(
                                                                      "viewWaitMessage",
                                                                      _vm.$vs
                                                                    )
                                                                  : _vm.updateStatus(
                                                                      index,
                                                                      appointment.id,
                                                                      status.id
                                                                    )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                status.name
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
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
                      1502644774
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
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      size: "small",
                                      to:
                                        "/dashboard/appointment/add-appointment/new",
                                      "icon-pack": "feather",
                                      icon: "icon-plus",
                                      type: "filled"
                                    }
                                  },
                                  [_vm._v("Add Appointment")]
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
                                      attrs: { value: "date", text: "Date" }
                                    }),
                                    _vm._v(" "),
                                    _c("vs-select-item", {
                                      attrs: { value: "status", text: "Status" }
                                    }),
                                    _vm._v(" "),
                                    _c("vs-select-item", {
                                      attrs: {
                                        value: "patient",
                                        text: "Patient ID"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("vs-select-item", {
                                      attrs: {
                                        value: "patientName",
                                        text: "Patient Name"
                                      }
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
                        _c("vs-th", { attrs: { "sort-key": "patient_id" } }, [
                          _vm._v("ID")
                        ]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("From")]),
                        _vm._v(" "),
                        _c("vs-th", [_vm._v("To")]),
                        _vm._v(" "),
                        _c("vs-th", { attrs: { "sort-key": "status" } }, [
                          _vm._v("Status")
                        ]),
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/employee/view.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/employee/view.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=24996868& */ "./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/employee/view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=24996868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/view.vue?vue&type=template&id=24996868&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_24996868___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);