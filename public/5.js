(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/*! exports provided: create, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var injectScriptTag = function (scriptId, doc, url, callback) {
    var scriptTag = doc.createElement('script');
    scriptTag.referrerPolicy = 'origin';
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    if (doc.head) {
        doc.head.appendChild(scriptTag);
    }
};
var create = function () {
    return {
        listeners: [],
        scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTinymce", function() { return getTinymce; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/*! exports provided: bindHandlers, bindModelHandlers, initEditor, uuid, isTextarea, mergePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindHandlers", function() { return bindHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModelHandlers", function() { return bindModelHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEditor", function() { return initEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextarea", function() { return isTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergePlugins", function() { return mergePlugins; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.indexOf(key) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent()) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change keyup undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || initialValue);
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var scriptState = _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__["create"]();
var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["mergePlugins"])(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["initEditor"])(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isTextarea"])(ctx.element)) {
        ctx.element.style.visibility = '';
    }
    Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__["editorProps"],
    created: function () {
        this.elementId = this.$props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var doc = this.element.ownerDocument;
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__["load"](scriptState, doc, "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js", initialise(this));
        }
    },
    beforeDestroy: function () {
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])() !== null) {
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])().remove(this.editor);
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/*! exports provided: editorProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorProps", function() { return editorProps; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "create",
  mounted: function mounted() {
    this.getPatientData();
    this.form.patient_id = this.$route.params.id;
    this.form.creator_id = this.$store.getters['auth/userData'].id;
  },
  components: {
    'editor': _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: {
        title: "Title",
        description: "",
        language: 'English',
        patient_id: null,
        creator_id: null
      },
      patient: null,
      is_requesting: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.patient_id !== null && this.form.creator_id !== null && this.form.prescription !== "";
    }
  },
  methods: {
    getPatientData: function getPatientData() {
      var _this = this;

      this.$store.dispatch('patient/view', this.$route.params.id).then(function (response) {
        _this.patient = response.data.data.data;
      })["catch"](function (error) {
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

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create",
        color: 'primary',
        scale: 0.45
      });
      this.$store.dispatch('prescription/create', this.form).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$router.push("/dashboard/report/".concat(response.data.data.data[0].id));

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
    addTemplate1: function addTemplate1() {
      var temp = "<h5>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h5>\n<h5 style=\"text-align: right;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Khaled Yasser&nbsp; :\u0627\u0644\u0627\u0633\u0645.&nbsp;&nbsp;</h5>\n<h5 style=\"text-align: right;\">1&nbsp; :\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641.&nbsp;</h5>\n<h5 style=\"text-align: right;\">&nbsp;</h5>\n<h1 style=\"text-align: center;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\u0648\u062B\u064A\u0642\u0629 \u0636\u0645\u0627\u0646&nbsp; &nbsp;</h1>\n<p>&nbsp;</p>\n<p style=\"text-align: right;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \u0640 \u0630\u0644\u0643 \u0644\u062A\u062C\u0645\u064A\u0644 \u0648 \u0639\u0644\u0627\u062C</p>\n<p style=\"text-align: right;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-1</p>\n<p style=\"text-align: right;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -2</p>\n<p style=\"text-align: right;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \u0646\u062A\u0639\u0647\u062F \u0646\u062D\u0646 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0628\u0631\u064A\u0637\u0627\u0646\u064A \u0644\u0644\u0627\u0633\u0646\u0627\u0646 \u0628\u0636\u0645\u0627\u0646 \u0627\u0644\u062A\u0631\u0643\u064A\u0628\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0631\u064A\u0636/\u0629 \u0644\u0645\u062F\u0629 \u062E\u0645\u0633\u0629 \u0639\u0634\u0631 \u0633\u0646\u0629 \u0636\u062F&nbsp; \u0623\u064A&nbsp; \u0641\u0643 \u0644\u0644\u0627\u0635\u0642 \u0623\u0648 \u0643\u0633\u0631 \u0648\u0641\u064A \u062D\u0627\u0644\u0629 \u062D\u062F\u0648\u062B \u0623\u064A \u0645\u0646 \u0630\u0644\u0643 \u064A\u062A\u0645 \u0627\u0633\u062A\u0628\u062F\u0627\u0644\u0647 \u0645\u062C\u0627\u0646\u0627 \u0628\u062F\u0648\u0646 \u0627\u0649 \u062A\u0643\u0627\u0644\u064A\u0641 \u0625\u0636\u0627\u0641\u064A\u0629</p>\n<p style=\"text-align: right;\">\u0634\u0627\u0643\u0631\u064A\u0646 \u0644\u0633\u064A\u0627\u062F\u062A\u0643\u0645 \u062D\u0633\u0646 \u062A\u0639\u0627\u0648\u0646\u0643\u0645 \u0645\u0639\u0646\u0627</p>\n<p style=\"text-align: right;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp; &nbsp; &nbsp; \u0627\u0644\u062E\u062A\u0645&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\u0627\u0644\u062A\u0648\u0642\u064A\u0639</p>";
      temp = temp.replace("##name##", "".concat(this.patient.first_name, " ").concat(this.patient.last_name));
      temp = temp.replace("##id##", this.patient.id);
      this.form.description = temp;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dob-input{\n  padding-bottom: 7px !important;\n  padding-top: 7px !important;\n}\ninput[type=date]:invalid::-webkit-datetime-edit {\n  color: rgb(220, 220, 220) !important;\n}\n.input-btn {\n  position: relative;\n  top: 17px;\n  left: -33px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.gender-container{\n  padding-top: 9px !important;\n}\n.gender-placeholder {\n  transform: translate(-3px,-70%)!important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.arabic-font{\n  font-family: monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7& ***!
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
      _vm.can("create-prescription")
        ? _c(
            "vx-card",
            {
              ref: "create",
              attrs: { title: "Create Report", "collapse-action": "" }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "12",
                        "vs-type": "flex",
                        "vs-justify": "flex-end",
                        "vs-align": "flex-end"
                      }
                    },
                    [
                      _vm.patient
                        ? _c(
                            "vs-button",
                            {
                              staticClass: "arabic-font",
                              on: { click: _vm.addTemplate1 }
                            },
                            [_vm._v("وثيقة ضمان")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { "vs-w": "12" } },
                    [
                      _c("label", { staticClass: "mb-3" }, [
                        _c("b", [_vm._v("Report: ")])
                      ]),
                      _vm._v(" "),
                      _c("editor", {
                        attrs: {
                          "api-key":
                            "dbsm75kn7l835v4zmlswhv7qwx2aj6wo2440q4uth36pcqdk",
                          initialValue: "",
                          init: {
                            height: 500,
                            menubar: true,
                            plugins: [
                              "advlist autolink lists link image charmap print preview anchor",
                              "searchreplace visualblocks code fullscreen",
                              "insertdatetime media table paste code help wordcount print"
                            ],
                            toolbar:
                              "undo redo | print | formatselect | bold italic backcolor | \
                       alignleft aligncenter alignright alignjustify | \
                       bullist numlist outdent indent | removeformat | help "
                          }
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
                      attrs: {
                        id: "btn-create",
                        disabled: !_vm.validateForm,
                        "icon-pack": "feather",
                        icon: "icon-save"
                      },
                      on: {
                        click: function($event) {
                          _vm.is_requesting
                            ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                            : _vm.create()
                        }
                      }
                    },
                    [_vm._v("Create Report")]
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

/***/ "./resources/js/src/views/prescription/create.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/prescription/create.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=39bf36f7& */ "./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/prescription/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=39bf36f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/prescription/create.vue?vue&type=template&id=39bf36f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39bf36f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);