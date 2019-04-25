(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{173:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"wxs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wxs","aria-hidden":"true"}},[a._v("#")]),a._v(" WXS")]),a._v(" "),t("h5",{attrs:{id:"wxs是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wxs是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" wxs是什么？")]),a._v(" "),t("blockquote",[t("p",[a._v("WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。")])]),a._v(" "),t("h5",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[a._v("#")]),a._v(" 注意")]),a._v(" "),t("ol",[t("li",[a._v("wxs 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。")]),a._v(" "),t("li",[a._v("wxs 与 javascript 是不同的语言，有自己的语法，并不和 javascript 一致。")]),a._v(" "),t("li",[a._v("wxs 的运行环境和其他 javascript 代码是隔离的，wxs 中不能调用其他 javascript文件中定义的函数，也不能调用小程序提供的API。")]),a._v(" "),t("li",[a._v("wxs 函数不能作为组件的事件回调。")]),a._v(" "),t("li",[a._v("由于运行环境的差异，在 iOS 设备上小程序内的 wxs 会比 javascript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异。")])]),a._v(" "),t("h5",{attrs:{id:"页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染","aria-hidden":"true"}},[a._v("#")]),a._v(" 页面渲染")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\x3c!--wxml--\x3e\n<wxs module="m1">\n    var msg = "hello world";\n\n    module.exports.message = msg;\n</wxs>\n\n<view> {{m1.message}} </view>\n\n\n页面输出\nhello world\n')])])]),t("h5",{attrs:{id:"数据处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据处理")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// page.js\nPage({\n  data: {\n    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]\n  }\n})\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\x3c!--wxml--\x3e\n\x3c!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 --\x3e\n<wxs module="m1">\nvar getMax = function(array) {\n  var max = undefined;\n  for (var i = 0; i < array.length; ++i) {\n    max = max === undefined ? \n      array[i] : \n      (max >= array[i] ? max : array[i]);\n  }\n  return max;\n}\n\nmodule.exports.getMax = getMax;\n</wxs>\n\n\x3c!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array --\x3e\n<view> {{m1.getMax(array)}} </view>\n')])])]),t("p",[a._v("页面输出")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("5\n")])])])])}],!1,null,null,null);e.default=r.exports}}]);