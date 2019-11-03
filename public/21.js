(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js& ***!
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getData();
  },
  data: function data() {
    return {
      roles: [],
      roleIdToDelete: null
    };
  },
  methods: {
    //Get A List Of All Roles.
    getData: function getData() {
      this.roles = [{
        id: 1,
        name: 'Super Admin'
      }, {
        id: 2,
        name: 'Admin'
      }, {
        id: 3,
        name: 'Doctor'
      }, {
        id: 4,
        name: 'Receptionist'
      }];
    },
    // Confirm Dialog To Delete The Role
    confirmDeleteRole: function confirmDeleteRole(role) {
      this.roleIdToDelete = role.id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteRole
      });
    },
    //Delete A Single Role By RoleID.
    deleteRole: function deleteRole() {
      this.vs_alert('Success', 'Role Successfully Deleted.', 'success');
    },
    //Vuesax alert
    vs_alert: function vs_alert(title, text, color) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        "vx-card",
        { attrs: { title: "Roles List" } },
        [
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.roles },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(role, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c("vs-td", { attrs: { data: role.id } }, [
                            _vm._v(
                              "\n\t\t\t            \t" +
                                _vm._s(role.id) +
                                "\n\t\t\t          \t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: role.name } }, [
                            _vm._v(
                              "\n\t\t\t            \t" +
                                _vm._s(role.name) +
                                "\n\t\t\t          \t"
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
                                          to:
                                            "/dashboard/settings/role/" +
                                            role.id,
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
                                    {
                                      staticClass: "w-1/3",
                                      staticStyle: { margin: "0 10px" }
                                    },
                                    [
                                      _c("vs-button", {
                                        attrs: {
                                          to:
                                            "/dashboard/settings/role/edit/" +
                                            role.id,
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
                                            return _vm.confirmDeleteRole(role)
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
                        to: "/dashboard/settings/role/create",
                        "icon-pack": "feather",
                        icon: "icon-plus",
                        type: "filled"
                      }
                    },
                    [_vm._v("Create Role")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "first_name" } }, [
                    _vm._v("Role")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=d52fd794& */ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/Role/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=d52fd794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);