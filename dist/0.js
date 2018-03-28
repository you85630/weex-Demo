// { "framework": "Vue"} 

webpackJsonp([0],{

/***/ 13:
/***/ (function(module, exports) {

module.exports = {
  "home": {
    "width": 100,
    "height": 100
  },
  "top-main": {
    "minHeight": 100
  },
  "bottom-nav": {
    "position": "fixed",
    "bottom": "50",
    "width": 100,
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "backgroundColor": "#60B3F9"
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      nowActive: 0,
      navList: [{
        title: '页面1',
        linkto: '/home/page1',
        icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
      }, {
        title: '页面2',
        linkto: '/home/page2',
        icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
      }, {
        title: '页面3',
        linkto: '/home/page3',
        icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
      }, {
        title: '页面4',
        linkto: '/home/page4',
        icon: '//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
      }, {
        title: '页面5',
        linkto: '/home/page5',
        icon: '//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
      }]
    };
  },

  methods: {
    jump: function jump(key) {
      this.nowActive = key;
    }
  }
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home"]
  }, [_c('div', {
    staticClass: ["top-main"]
  }, [_c('router-view')], 1), _c('div', {
    staticClass: ["bottom-nav"]
  }, _vm._l((_vm.navList), function(li, index) {
    return _c('div', {
      key: li.index,
      staticClass: ["nav"],
      class: _vm.nowActive === index ? 'active' : '',
      on: {
        "click": function($event) {
          _vm.jump(index)
        }
      }
    }, [_c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": li.icon
      }
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(_vm._s(li.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/you/Desktop/Github/weex/demo1/src/views/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-489dd9e9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ })

});