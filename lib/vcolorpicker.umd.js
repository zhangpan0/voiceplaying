(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcolorpicker"] = factory();
	else
		root["vcolorpicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4c63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_id_6797c160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_id_6797c160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_id_6797c160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_id_6797c160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cbce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"30335211-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/voice-play/src/voice.vue?vue&type=template&id=6797c160&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-wrap"},[_c('div',{staticClass:"_nb_blog_block_ad"},[_c('div',{staticClass:"sound_container pointer",on:{"click":_vm.play}},[_c('div',{staticClass:"sound",class:{'play':_vm.isPlay}},[(_vm.isPlay)?_c('svg',{attrs:{"width":"30","height":"30","viewBox":"0 0 30 30","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',[_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(0, 153, 255)","d":"M4,12.5  A5,5 0 0 1 4,17.5"}}),_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(0, 153, 255)","d":"M8,10  A10,10 0 0 1 8,20"}}),_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(0, 153, 255)","d":"M13,7  A15,15 0 0 1 13,23"}})])]):_c('svg',{attrs:{"width":"30","height":"30","viewBox":"0 0 30 30","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',[_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(51, 51, 51)","d":"M4,12.5  A5,5 0 0 1 4,17.5"}}),_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(51, 51, 51)","d":"M8,10  A10,10 0 0 1 8,20"}}),_c('path',{attrs:{"fill":"none","stroke-width":"2","stroke":"rgb(51, 51, 51)","d":"M13,7  A15,15 0 0 1 13,23"}})])])]),_c('div',{staticClass:"duration hidden-text"},[_c('div',{staticClass:"audio-name hidden-text",class:{'com-color':_vm.isPlay}},[_vm._v(" "+_vm._s(_vm.text)+" ")])]),_c('div',[_c('div',{class:[_vm.isPlay ? 'com-theme':'audio-time']},[_c('span',[_vm._v(_vm._s(_vm.countDown)+" /")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.duration))])]),_c('span',{staticClass:"del-audio",on:{"click":function($event){$event.stopPropagation();return _vm.deleteAudio($event)}}},[_vm._v(" × ")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/voice-play/src/voice.vue?vue&type=template&id=6797c160&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/voice-play/src/voice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var voicevue_type_script_lang_js_ = ({
    name:'colorPicker',
    props:{
        src:{
            type:String,
            default:""
        },
        text:{
            type:String,
            default:"录音文件"
        }
    },
    data() {
        return {
            isPlay:false,
            audio:null,
            animate:false,
            timer2:null,
            duration:null,
            countDown:"00:00",
            isStart:false,
        };
    },
    methods: {
        // 开始播放
        play(){
            window.audioList.forEach(audio=>{//开始前先关闭所有可能正在运行的实例
                audio.pause();
            })
            // if(this.audio.paused){
            //     this.audio.play();         //播放开始
            // }else{
            //     this.audio.pause()         // 播放暂停
            // }
            return this.isPlay ? this.audio.pause() : this.audio.play();
        },
        // 转成成时间
        format(s){
            var t='';
            if(s > -1){
                var min = Math.floor(s/60) % 60;
                var sec = s % 60;

                if(min < 10){t += "0";}
                t += min + ":";
                if(sec < 10){t += "0";}
                // t += sec.toFixed(2);
                t += Math.round(sec);
            }
            // t=t.replace('.','\:')
            return t;
        },
        
        // 计时播放
        countDownT () {
            var time=0;        // 秒
            this.timer2 = setInterval(() => {
                time+=1;
                var minute = parseInt(time/60);
                if (minute < 10) {minute = '0' + minute}
                var second = parseInt(time%60);
                if (second < 10) {second = '0' + second}
                this.countDown=minute+':'+second;
                if (time > Math.round(this.audio.duration)) {
                    this.isPlay = false;
                    this.audio.pause();
                    this.countDown = "00:00";
                    clearInterval(this.timer2);
                }
            },1000);
        },
        // 删除音频文件
        deleteAudio () {
            this.$emit('deleteAudio',this.text);
        }
    },
    created() {

    },
    mounted() {
        this.audio=new Audio();
        this.audio.src=this.src;
        this.audio.addEventListener('canplaythrough',()=>{
            this.duration=this.format(this.audio.duration)
        })
        // 当开始播放
        this.audio.onplay=()=>{
            this.isPlay = true;
            this.countDownT();
        }
        // 暂停播放
        this.audio.onpause=()=>{
            this.isPlay = false;
            this.audio.currentTime = 0;
            this.countDown = "00:00";
            this.timer2 && clearInterval(this.timer2)
        }
        // 播放结束了
        this.audio.onended=()=>{
            this.isPlay = false;
            this.countDown = "00:00";
            this.timer2 && clearInterval(this.timer2)
        }
        window.audioList.push(this.audio)//所有实例加入全局变量
    },
    computed: {},
    watch: {
        
    },
    components: {},
});

// CONCATENATED MODULE: ./packages/voice-play/src/voice.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_voicevue_type_script_lang_js_ = (voicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/voice-play/src/voice.vue?vue&type=style&index=0&id=6797c160&lang=scss&scoped=true&
var voicevue_type_style_index_0_id_6797c160_lang_scss_scoped_true_ = __webpack_require__("4c63");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/voice-play/src/voice.vue






/* normalize component */

var component = normalizeComponent(
  src_voicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6797c160",
  null
  
)

/* harmony default export */ var voice = (component.exports);
// CONCATENATED MODULE: ./packages/voice-play/index.js

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
voice.install = function (Vue) {
  Vue.component(voice.name, voice)
}

// 默认导出组件
/* harmony default export */ var voice_play = (voice);
// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [
  voice_play
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  window.audioList=[]
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  colorPicker: voice_play
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vcolorpicker.umd.js.map