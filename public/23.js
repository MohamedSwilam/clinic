(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse",
  data: function data() {
    return {
      reservation_types: [{
        id: 1,
        type: 'reveal',
        minimum_price: 200,
        maximum_price: 400,
        is_online: true
      }, {
        id: 2,
        type: 'Operation',
        minimum_price: 1500,
        maximum_price: 3000,
        is_online: false
      }],
      reservation_durations: [{
        id: 1,
        type: 'reveal',
        date: '05/11/2019',
        start_time: '1:00PM',
        end_time: '2:00PM',
        counter: 15
      }, {
        id: 2,
        type: 'operation',
        date: '05/11/2019',
        start_time: '2:00PM',
        end_time: '4:00PM',
        counter: 7
      }, {
        id: 3,
        type: 'reveal',
        date: '05/11/2019',
        start_time: '2:00PM',
        end_time: '4:00PM',
        counter: 25
      }],
      reservationTypeIdToDelete: null,
      reservationDurationIdToDelete: null
    };
  },
  methods: {
    confirmDeleteReservation: function confirmDeleteReservation(type) {
      this.reservationTypeIdToDelete = type.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteReservationType
      });
    },
    deleteReservationType: function deleteReservationType() {
      this.vs_alert('Success', 'Reservation Type Successfully Deleted.', 'success', 'icon-check');
    },
    confirmDeleteReservationDuration: function confirmDeleteReservationDuration(duration) {
      this.reservationDurationIdToDelete = duration.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteReservationDuration
      });
    },
    deleteReservationDuration: function deleteReservationDuration() {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
          { attrs: { title: "Reservation Types", "collapse-action": "" } },
          [
            _c(
              "vs-table",
              {
                attrs: { search: "", data: _vm.reservation_types },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(type, index) {
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
                            _c("vs-td", { attrs: { data: type.type } }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(type.type) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: type.minimum_price } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(type.minimum_price) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: type.maximum_price } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(type.maximum_price) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: type.is_online } },
                              [
                                _c(
                                  "vs-chip",
                                  {
                                    attrs: {
                                      color: type.is_online
                                        ? "success"
                                        : "danger"
                                    }
                                  },
                                  [_vm._v(_vm._s(type.is_online))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-row", [
                                  _c("div", { staticClass: "flex mb-4" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "w-1/3",
                                        staticStyle: { margin: "0 10px" }
                                      },
                                      [
                                        _c("vs-button", {
                                          attrs: {
                                            to:
                                              "/dashboard/settings/reservation/edit/" +
                                              type.id,
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
                                      { staticClass: "w-1/3" },
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
                                              return _vm.confirmDeleteReservation(
                                                type
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
                          to: "/dashboard/settings/reservation/create",
                          "icon-pack": "feather",
                          icon: "icon-plus",
                          type: "filled"
                        }
                      },
                      [_vm._v("Add New Type")]
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
                    _c("vs-th", { attrs: { "sort-key": "type" } }, [
                      _vm._v("Type")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "minimum_price" } }, [
                      _vm._v("Minimum Price")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "maximum_price" } }, [
                      _vm._v("Maximum Price")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "is_online" } }, [
                      _vm._v("is Online?")
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
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c(
          "vx-card",
          { attrs: { title: "Reservation Durations", "collapse-action": "" } },
          [
            _c(
              "vs-table",
              {
                attrs: { search: "", data: _vm.reservation_durations },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(duration, index) {
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
                            _c("vs-td", { attrs: { data: duration.type } }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(duration.type) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: duration.date } }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(duration.date) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: duration.start_time } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(duration.start_time) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: duration.end_time } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(duration.end_time) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: duration.counter } }, [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(duration.counter) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-row", [
                                  _c("div", { staticClass: "flex mb-4" }, [
                                    _c(
                                      "div",
                                      { staticClass: "w-1/3" },
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
                                              return _vm.confirmDeleteReservationDuration(
                                                duration
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
                          to: "/dashboard/settings/reservation-duration/create",
                          "icon-pack": "feather",
                          icon: "icon-plus",
                          type: "filled"
                        }
                      },
                      [_vm._v("Add New Duration")]
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
                    _c("vs-th", { attrs: { "sort-key": "type" } }, [
                      _vm._v("Type")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "date" } }, [
                      _vm._v("Date")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "start_time" } }, [
                      _vm._v("Start Time")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "end_time" } }, [
                      _vm._v("End Time")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "counter" } }, [
                      _vm._v("Counter")
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/settings/reservation/browse.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/browse.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=779903ff&scoped=true& */ "./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "779903ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/reservation/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=779903ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/reservation/browse.vue?vue&type=template&id=779903ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_779903ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);