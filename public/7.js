(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-employee",
  mounted: function mounted() {
    this.getRoles();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.first_name !== "" && this.form.last_name !== "" && this.form.email !== '' && this.form.address !== '' && this.form.country !== '' && this.form.city !== '' && this.form.password !== '' && this.form.confirm_password !== '';
    }
  },
  data: function data() {
    return {
      roles: [],
      form: {
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
        birth_date: '',
        address: '',
        city: '',
        country: '',
        gender: '',
        image: null,
        role: '',
        phones: []
      },
      uploadedImage: null,
      Telephone: '',
      is_requesting: false
    };
  },
  methods: {
    //Get A List Of All Roles.
    getRoles: function getRoles() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('rolesAndPermissions/getRoles', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.roles = response.data.data.data;
        _this.form.role = _this.roles[0].name;
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
    create: function create() {
      var _this2 = this;

      // if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create",
        color: 'primary',
        scale: 0.45
      });
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'image' && this.form.hasOwnProperty(key)) {
          if (this.form[key]) {
            for (var i = 0; i < this.form[key].length; i++) {
              form_data.append(key, this.form[key][i]);
            }
          }
        } else if (key === 'phones') {
          form_data.append(key, JSON.stringify(this.form[key]));
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('employee/create', form_data).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$router.push("/dashboard/employee/".concat(response.data.data.data.id));

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

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    previewImage: function previewImage(event) {
      var _this3 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this3.uploadedImage = e.target.result;
          _this3.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    removeTelephone: function removeTelephone(item) {
      this.form.phones.splice(this.form.phones.indexOf(item), 1);
    },
    addTelephone: function addTelephone() {
      if (this.Telephone !== '') {
        this.form.phones.push({
          'country_code': '+20',
          'number': this.Telephone
        });
        this.Telephone = "";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n.image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  padding-right: 20px;\n  top: 6px;\n  position: relative;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3& ***!
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
  return _c("div", [
    _vm.can("create-user")
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              { ref: "create", attrs: { title: "Personal Information" } },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Employee Role",
                            autocomplete: "",
                            "label-placeholder": "Employee Role",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.role,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "role", $$v)
                            },
                            expression: "form.role"
                          }
                        },
                        _vm._l(_vm.roles, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.name, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "image-preview",
                        staticStyle: { display: "inline-flex" }
                      },
                      [
                        _c("img", {
                          staticClass: "preview",
                          attrs: {
                            alt: "employee photo",
                            src: _vm.uploadedImage
                              ? _vm.uploadedImage
                              : "/images/avatar-s-11.png"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "inline-flex",
                          position: "relative",
                          top: "-15px"
                        }
                      },
                      [
                        _c("input", {
                          attrs: {
                            id: "img-upload",
                            type: "file",
                            accept: "image/*"
                          },
                          on: { change: _vm.previewImage }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              size: "small",
                              "icon-pack": "feather",
                              icon: "icon-upload",
                              type: "gradient",
                              onclick:
                                "document.getElementById('img-upload').click()"
                            }
                          },
                          [_vm._v("Upload Employee Photo")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-6" }, [
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
                                  value: _vm.form.gender,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "gender", $$v)
                                  },
                                  expression: "form.gender"
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
                                attrs: { "vs-value": "Female" },
                                model: {
                                  value: _vm.form.gender,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "gender", $$v)
                                  },
                                  expression: "form.gender"
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
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
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
                          name: "first_name",
                          danger: _vm.errors.has("first_name"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("first_name"),
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "First Name"
                        },
                        model: {
                          value: _vm.form.first_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "first_name", $$v)
                          },
                          expression: "form.first_name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
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
                          name: "last_name",
                          danger: _vm.errors.has("last_name"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("last_name"),
                          "icon-pack": "feather",
                          icon: "icon-user",
                          "label-placeholder": "Last Name"
                        },
                        model: {
                          value: _vm.form.last_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "last_name", $$v)
                          },
                          expression: "form.last_name"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-6" }, [
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
                                value: _vm.form.birth_date,
                                expression: "form.birth_date"
                              }
                            ],
                            staticClass:
                              "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                            staticStyle: {
                              border: "1px solid rgba(0, 0, 0, 0.2)"
                            },
                            attrs: { required: "", type: "date" },
                            domProps: { value: _vm.form.birth_date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
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
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "address",
                          danger: _vm.errors.has("address"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("address"),
                          "icon-pack": "feather",
                          icon: "icon-map-pin",
                          "label-placeholder": "Address"
                        },
                        model: {
                          value: _vm.form.address,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "address", $$v)
                          },
                          expression: "form.address"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "city",
                          danger: _vm.errors.has("city"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("city"),
                          "icon-pack": "feather",
                          icon: "icon-map-pin",
                          "label-placeholder": "City"
                        },
                        model: {
                          value: _vm.form.city,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "city", $$v)
                          },
                          expression: "form.city"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "country",
                          danger: _vm.errors.has("country"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("country"),
                          "icon-pack": "feather",
                          icon: "icon-map-pin",
                          "label-placeholder": "Country"
                        },
                        model: {
                          value: _vm.form.country,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "country", $$v)
                          },
                          expression: "form.country"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
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
                                      ? _vm.addTelephone()
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
                            _vm._l(_vm.form.phones, function(telephone, index) {
                              return _c(
                                "vs-chip",
                                {
                                  key: index,
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
                                      _vm._s(telephone.number) +
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
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          name: "email",
                          danger: _vm.errors.has("email"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("email"),
                          "icon-pack": "feather",
                          icon: "icon-mail",
                          "label-placeholder": "Email"
                        },
                        model: {
                          value: _vm.form.email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "email", $$v)
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:6|max:10",
                            expression: "'required|min:6|max:10'"
                          }
                        ],
                        ref: "password",
                        staticClass: "w-full",
                        attrs: {
                          name: "password",
                          danger: _vm.errors.has("password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("password"),
                          type: "password",
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Password"
                        },
                        model: {
                          value: _vm.form.password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "password", $$v)
                          },
                          expression: "form.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                    [
                      _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "min:6|max:10|confirmed:password",
                            expression: "'min:6|max:10|confirmed:password'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          type: "password",
                          name: "confirm_password",
                          danger: _vm.errors.has("confirm_password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("confirm_password"),
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Confirm Password"
                        },
                        model: {
                          value: _vm.form.confirm_password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "confirm_password", $$v)
                          },
                          expression: "form.confirm_password"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  {
                    attrs: {
                      "vs-align": "center",
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "12"
                    }
                  },
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
                          "vs-button",
                          {
                            attrs: {
                              id: "btn-create",
                              disabled: !_vm.validateForm,
                              "icon-pack": "feather",
                              icon: "icon-save",
                              type: "gradient"
                            },
                            on: {
                              click: function($event) {
                                _vm.is_requesting
                                  ? _vm.$store.dispatch(
                                      "viewWaitMessage",
                                      _vm.$vs
                                    )
                                  : _vm.create()
                              }
                            }
                          },
                          [_vm._v("Create Employee")]
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
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/employee/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=4d9ea6e3& */ "./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=4d9ea6e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);