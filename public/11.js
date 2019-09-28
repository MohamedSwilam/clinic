(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_google_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/google/location */ "./resources/js/src/components/google/location.js");
/* harmony import */ var _components_google_GoogleAutocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/google/GoogleAutocomplete */ "./resources/js/src/components/google/GoogleAutocomplete.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      EmployeeTypes: [{
        text: 'Administrator',
        value: 1
      }, {
        text: 'Doctor',
        value: 2
      }, {
        text: 'Assistant Doctor',
        value: 3
      }, {
        text: 'Receptionist',
        value: 4
      }, {
        text: 'Accountant',
        value: 5
      }],
      SelectedEmployeeType: 1,
      FirstName: "",
      LastName: "",
      Telephone: "",
      Email: "",
      Telephones: ['01096436702', '01116436790'],
      DOB: null,
      gender: 1,
      imageData: "/images/avatar-s-11.png",
      address: {
        street_address_1: '',
        street_address_2: '',
        city: '',
        state: '',
        country: '',
        longitude: '',
        latitude: ''
      },
      password: '',
      confirmPassword: '',
      SchoolAttend: '',
      DegreeHeld: '',
      rewardItem: '',
      Rewards: ['Reward 1', 'Reward 2', 'Reward 3', 'Reward 4'],
      salaryType: 0,
      salary: 0,
      reservationTypes: [{
        text: 'Reveal',
        value: 1,
        commission: 0
      }, {
        text: 'Consultation',
        value: 2,
        commission: 0
      }, {
        text: 'Operation',
        value: 3,
        commission: 0
      }],
      selectedReservationTypes: [],
      socialmedia: [{
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: ''
      }]
    };
  },
  components: {
    GoogleAutocomplete: _components_google_GoogleAutocomplete__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    previewImage: function previewImage(event) {
      var _this = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.imageData = e.target.result;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    setAddress: function setAddress(place) {
      this.address.street_address_1 = place.formatted_address;
      this.address.longitude = place.geometry.location.lng();
      this.address.latitude = place.geometry.location.lat();
      this.address.city = _components_google_location__WEBPACK_IMPORTED_MODULE_0__["default"].parseCity(place);
      this.address.state = _components_google_location__WEBPACK_IMPORTED_MODULE_0__["default"].parseState(place);
      this.address.country = _components_google_location__WEBPACK_IMPORTED_MODULE_0__["default"].parseCountry(place);
    },
    removeReward: function removeReward(item) {
      this.Rewards.splice(this.Rewards.indexOf(item), 1);
    },
    addReward: function addReward() {
      var item = this.rewardItem;

      if (item != '') {
        this.Rewards.push(item);
        this.rewardItem = "";
      }
    },
    removeTelephone: function removeTelephone(item) {
      this.Telephones.splice(this.Telephones.indexOf(item), 1);
    },
    addTelephone: function addTelephone() {
      var item = this.Telephone;

      if (item != '') {
        this.Telephones.push(item);
        this.Telephone = "";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n.image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  padding-right: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEmployee.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _c("vx-card", { attrs: { title: "Personal Information" } }, [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full mb-2" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: {
                      label: "Employee Type",
                      autocomplete: "",
                      "label-placeholder": "Employee Type",
                      "icon-pack": "feather",
                      icon: "icon-chevron-down",
                      color: "primary"
                    },
                    model: {
                      value: _vm.SelectedEmployeeType,
                      callback: function($$v) {
                        _vm.SelectedEmployeeType = $$v
                      },
                      expression: "SelectedEmployeeType"
                    }
                  },
                  _vm._l(_vm.EmployeeTypes, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.value, text: item.text }
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
            _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
              _vm.imageData.length > 0
                ? _c(
                    "div",
                    {
                      staticClass: "image-preview",
                      staticStyle: { display: "inline-flex" }
                    },
                    [
                      _c("img", {
                        staticClass: "preview",
                        attrs: { src: _vm.imageData }
                      })
                    ]
                  )
                : _vm._e(),
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
                        "icon-pack": "feather",
                        icon: "icon-upload",
                        type: "gradient",
                        onclick: "document.getElementById('img-upload').click()"
                      }
                    },
                    [_vm._v("Upload Employee Photo")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-user",
                    "label-placeholder": "First Name"
                  },
                  model: {
                    value: _vm.FirstName,
                    callback: function($$v) {
                      _vm.FirstName = $$v
                    },
                    expression: "FirstName"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-user",
                    "label-placeholder": "Last Name"
                  },
                  model: {
                    value: _vm.LastName,
                    callback: function($$v) {
                      _vm.LastName = $$v
                    },
                    expression: "LastName"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
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
                      staticStyle: { border: "1px solid rgba(0, 0, 0, 0.2)" },
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
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("google-autocomplete", {
                  attrs: { id: "address", name: "address" },
                  on: { "place-changed": _vm.setAddress }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              {
                staticClass: "vx-col sm:w-1/2 w-full mb-2",
                staticStyle: { padding: "0" }
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
                              $event.keyCode === 13 ? _vm.addTelephone() : false
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
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-mail",
                    "label-placeholder": "Email"
                  },
                  model: {
                    value: _vm.Email,
                    callback: function($$v) {
                      _vm.Email = $$v
                    },
                    expression: "Email"
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
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-lock",
                    "label-placeholder": "Password"
                  },
                  model: {
                    value: _vm.password,
                    callback: function($$v) {
                      _vm.password = $$v
                    },
                    expression: "password"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-lock",
                    "label-placeholder": "Confirm Password"
                  },
                  model: {
                    value: _vm.confirmPassword,
                    callback: function($$v) {
                      _vm.confirmPassword = $$v
                    },
                    expression: "confirmPassword"
                  }
                })
              ],
              1
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c("vx-card", { attrs: { title: "Educational Information" } }, [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-user",
                    "label-placeholder": "School Attended"
                  },
                  model: {
                    value: _vm.SchoolAttend,
                    callback: function($$v) {
                      _vm.SchoolAttend = $$v
                    },
                    expression: "SchoolAttend"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-pocket",
                    "label-placeholder": "Degree Held"
                  },
                  model: {
                    value: _vm.DegreeHeld,
                    callback: function($$v) {
                      _vm.DegreeHeld = $$v
                    },
                    expression: "DegreeHeld"
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
              {
                staticClass: "vx-col sm:w-1/2 w-full mb-2",
                staticStyle: { padding: "0" }
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
                            icon: "icon-award",
                            "label-placeholder": "Hons & Awards"
                          },
                          on: {
                            keydown: function($event) {
                              $event.keyCode === 13 ? _vm.addReward() : false
                            }
                          },
                          model: {
                            value: _vm.rewardItem,
                            callback: function($$v) {
                              _vm.rewardItem = $$v
                            },
                            expression: "rewardItem"
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
                            on: { click: _vm.addReward }
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
                      _vm._l(_vm.Rewards, function(Reward) {
                        return _c(
                          "vs-chip",
                          {
                            key: Reward,
                            attrs: { closable: "" },
                            on: {
                              click: function($event) {
                                return _vm.removeReward(Reward)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(Reward) +
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
            _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" })
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c("vx-card", { attrs: { title: "Social Media Accounts" } }, [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-facebook",
                    "label-placeholder": "Facebook"
                  },
                  model: {
                    value: _vm.socialmedia.facebook,
                    callback: function($$v) {
                      _vm.$set(_vm.socialmedia, "facebook", $$v)
                    },
                    expression: "socialmedia.facebook"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-twitter",
                    "label-placeholder": "Twitter"
                  },
                  model: {
                    value: _vm.socialmedia.twitter,
                    callback: function($$v) {
                      _vm.$set(_vm.socialmedia, "twitter", $$v)
                    },
                    expression: "socialmedia.twitter"
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
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-instagram",
                    "label-placeholder": "Instagram"
                  },
                  model: {
                    value: _vm.socialmedia.instagram,
                    callback: function($$v) {
                      _vm.$set(_vm.socialmedia, "instagram", $$v)
                    },
                    expression: "socialmedia.instagram"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
              [
                _c("vs-input", {
                  staticClass: "w-full",
                  attrs: {
                    "icon-pack": "feather",
                    icon: "icon-linkedin",
                    "label-placeholder": "Linkedin"
                  },
                  model: {
                    value: _vm.socialmedia.linkedin,
                    callback: function($$v) {
                      _vm.$set(_vm.socialmedia, "linkedin", $$v)
                    },
                    expression: "socialmedia.linkedin"
                  }
                })
              ],
              1
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c("vx-card", { attrs: { title: "Salary Information" } }, [
          _c("div", { staticClass: "vx-row" }, [
            _c("div", { staticClass: "vx-col w-full mb-2" }, [
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
                          attrs: { "vs-value": "0" },
                          model: {
                            value: _vm.salaryType,
                            callback: function($$v) {
                              _vm.salaryType = $$v
                            },
                            expression: "salaryType"
                          }
                        },
                        [_vm._v("Fixed")]
                      ),
                      _vm._v(
                        "\n                              \n                            "
                      ),
                      _c(
                        "vs-radio",
                        {
                          attrs: { "vs-value": "1" },
                          model: {
                            value: _vm.salaryType,
                            callback: function($$v) {
                              _vm.salaryType = $$v
                            },
                            expression: "salaryType"
                          }
                        },
                        [_vm._v("Commission")]
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
                            "\n                            Salary Type\n                            "
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
          _c("br"),
          _vm._v(" "),
          _vm.salaryType == 0
            ? _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "centerx" },
                  [
                    _c(
                      "vs-row",
                      [
                        _c("vs-col", { attrs: { "vs-w": "3" } }, [
                          _c("label", [_c("b", [_vm._v("Salary:")])])
                        ]),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          { attrs: { "vs-w": "9" } },
                          [
                            _c("vs-input-number", {
                              attrs: { step: 500 },
                              model: {
                                value: _vm.salary,
                                callback: function($$v) {
                                  _vm.salary = $$v
                                },
                                expression: "salary"
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
              ])
            : _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full mb-2" },
                  [
                    _c(
                      "vs-select",
                      {
                        staticClass: "selectExample",
                        attrs: {
                          label: "Reservation Types",
                          placeholder: "Select Reservation Types",
                          multiple: "",
                          "vs-autocomplete": ""
                        },
                        model: {
                          value: _vm.selectedReservationTypes,
                          callback: function($$v) {
                            _vm.selectedReservationTypes = $$v
                          },
                          expression: "selectedReservationTypes"
                        }
                      },
                      _vm._l(_vm.reservationTypes, function(item, index) {
                        return _c("vs-select-item", {
                          key: index,
                          attrs: { value: item.value, text: item.text }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._l(_vm.reservationTypes, function(
                      selectedReservation,
                      index
                    ) {
                      return _vm.selectedReservationTypes.includes(
                        selectedReservation.value
                      )
                        ? _c(
                            "vs-row",
                            { key: index },
                            [
                              _c("vs-col", { attrs: { "vs-w": "4" } }, [
                                _c("label", [
                                  _c("b", [
                                    _vm._v(
                                      "Commission of " +
                                        _vm._s(selectedReservation.text) +
                                        " in %: "
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                { attrs: { "vs-w": "8" } },
                                [
                                  _c("vs-input-number", {
                                    attrs: { max: "100", step: 5 },
                                    model: {
                                      value:
                                        _vm.reservationTypes[index].commission,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.reservationTypes[index],
                                          "commission",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "reservationTypes[index].commission"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    })
                  ],
                  2
                )
              ])
        ])
      ],
      1
    )
  ])
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

/***/ "./resources/js/src/views/employee/AddEmployee.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/employee/AddEmployee.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEmployee.vue?vue&type=template&id=d5611510& */ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510&");
/* harmony import */ var _AddEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEmployee.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddEmployee.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/employee/AddEmployee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEmployee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEmployee.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEmployee.vue?vue&type=template&id=d5611510& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/AddEmployee.vue?vue&type=template&id=d5611510&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEmployee_vue_vue_type_template_id_d5611510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);