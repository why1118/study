(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{152:function(e,n,a){"use strict";a.r(n);var t=a(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"目录规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录规范","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录规范")]),e._v(" "),a("p",[e._v("├── build                      // 构建相关"),a("br"),e._v("\n├── config                     // 配置相关"),a("br"),e._v("\n├── src                        // 源代码"),a("br"),e._v("\n│   ├── api                    // 所有请求"),a("br"),e._v("\n│   ├── assets                 // 主题 字体等静态资源"),a("br"),e._v("\n│   ├── components             // 全局公用组件"),a("br"),e._v("\n│   ├── directive              // 全局指令"),a("br"),e._v("\n│   ├── filters                // 全局 filter"),a("br"),e._v("\n│   ├── icons                  // 项目所有 svg icons"),a("br"),e._v("\n│   ├── lang                   // 国际化 language"),a("br"),e._v("\n│   ├── mock                   // 项目mock 模拟数据"),a("br"),e._v("\n│   ├── router                 // 路由"),a("br"),e._v("\n│   ├── store                  // 全局 store管理"),a("br"),e._v("\n│   ├── styles                 // 全局样式"),a("br"),e._v("\n│   ├── utils                  // 全局公用方法"),a("br"),e._v("\n│   ├── vendor                 // 公用vendor"),a("br"),e._v("\n│   ├── views                  // views 所有页面"),a("br"),e._v("\n│   ├── App.vue                // 入口页面"),a("br"),e._v("\n│   ├── main.js                // 入口文件 加载组件 初始化等"),a("br"),e._v("\n│   └── permission.js          // 权限管理"),a("br"),e._v("\n├── static                     // 第三方不打包资源"),a("br"),e._v("\n│   └── Tinymce                // 富文本"),a("br"),e._v("\n├── .babelrc                   // babel-loader 配置"),a("br"),e._v("\n├── .eslintrc.js               // eslint 配置项"),a("br"),e._v("\n├── .gitignore                 // git 忽略项"),a("br"),e._v("\n├── .travis.yml                // 自动化CI配置"),a("br"),e._v("\n├── favicon.ico                // favicon图标"),a("br"),e._v("\n├── index.html                 // html模板"),a("br"),e._v("\n└── package.json               // package.json")]),e._v(" "),a("h2",{attrs:{id:"命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规范","aria-hidden":"true"}},[e._v("#")]),e._v(" 命名规范")]),e._v(" "),a("p",[e._v("1 避免单字母的名字。用你的命名来描述功能（最好使用动词命名）。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function query() {\n  // ...\n}\n")])])]),a("p",[e._v("2 在命名对象、函数和实例时使用驼峰命名法（camelCase）。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const thisIsMyObject = {};\nfunction thisIsMyFunction() {}\n")])])]),a("p",[e._v("3 只有在命名构造器或者类的时候才用帕斯卡拼命名法。"),a("em",[e._v("（PascalCase 每个单词的第一个字母都大写）")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class User {\n  constructor(options) {\n    this.name = options.name;\n  }\n}\nconst good = new User({\n  name: 'yup',\n});\n")])])]),a("p",[e._v("4 不要使用前置或者后置下划线。")]),e._v(" "),a("p",[e._v("5 文件名应该和默认导出的名称完全匹配。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class CheckBox {\n  // ...\n}\nexport default CheckBox;\nexport default function fortyTwo() { return 42; }\nimport CheckBox from './CheckBox'; // PascalCase export/import/filename\nimport fortyTwo from './fortyTwo'; // camelCase export/import/filename\n")])])]),a("p",[e._v("8 当你导出一个构造器 / 类 / 单例 / 函数库 / 暴露的对象时应该使用帕斯卡命名法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const AirbnbStyleGuide = {\n  es6: {\n  },\n};\nexport default AirbnbStyleGuide;\n")])])]),a("p",[e._v("9 缩略词和缩写都必须是全部大写或者全部小写。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import SMSContainer from './containers/SMSContainer';\nconst HTTPRequests = [\n  // ...\n];\nconst httpRequests = [\n  // ...\n];\n")])])]),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),a("p",[e._v("1 使用 const 或者 let 来定义变量。避免污染全局命名空间。（最好使用名词命名）\n把 const 声明的放在一起，把 let 声明的放在一起。.\n这在后边如果需要根据前边的赋值变量指定一个变量时很有用。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const superPower = new SuperPower();\nconst goSportsTeam = true;\nlet dragonball;\nlet i;\n")])])]),a("p",[e._v("2 在你需要的使用定义变量，但是要把它们放在一个合理的地方。\nlet 和 const 是块级作用域而不是函数作用域。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function checkName(hasName) {\n  if (hasName === 'test') {\n    return false;\n  }\n  const name = getName();\n  if (name === 'test') {\n    this.setName('');\n    return false;\n  }\n  return name;\n}\n")])])]),a("p",[e._v("3 不要链式变量赋值。\n链式变量赋值会创建隐式全局变量。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(function example() {\n  let a = 1;\n  let b = a;\n  let c = a;\n}());\nconsole.log(a); // throws ReferenceError\nconsole.log(b); // throws ReferenceError\nconsole.log(c); // throws ReferenceError\n// 对于 `const` 也一样\n")])])]),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[e._v("#")]),e._v(" 注释")]),e._v(" "),a("p",[e._v("1 使用 /** ... */ 来进行多行注释。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n* make() returns a new element\n* based on the passed-in tag name\n*/\nfunction make(tag) {\n  // ...\n  return element;\n}\n")])])]),a("p",[e._v("2 使用 // 进行单行注释。 将单行注释放在需要注释的行的上方新行。 在注释之前放一个空行，除非它在块的第一行。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 注释\nfunction getType() {\n  console.log('fetching type...');\n\n  // set the default type to 'no type'\n  const type = this.type || 'no type';\n  return type;\n}\n")])])]),a("h2",{attrs:{id:"空格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空格","aria-hidden":"true"}},[e._v("#")]),e._v(" 空格")]),e._v(" "),a("p",[e._v("1 使用 tabs (空格字符) 设置为 2 个空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function baz() {\n∙∙let name;\n}\n")])])]),a("p",[e._v("2 在主体前放置一个空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function test() {\n  console.log('test');\n}\ndog.set('attr', {\n  age: '1 year',\n  breed: 'Bernese Mountain Dog',\n});\n")])])]),a("p",[e._v("3 在控制语句（if, while 等）开始括号之前放置一个空格。 在函数调用和是声明中，在参数列表和函数名之间没有空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (isJedi) {\n  fight();\n}\nfunction fight() {\n  console.log('Swooosh!');\n}\n")])])]),a("p",[e._v("4 用空格分离操作符。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const x = y + 5;\n")])])]),a("p",[e._v("5 在块和下一个语句之前留下一空白行。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const arr = [\n  function foo() {\n  },\n\n  function bar() {\n  },\n];\n\nreturn arr;\n")])])]),a("p",[e._v("6 不要在括号内添加空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (foo) {\n  console.log(foo);\n}\n")])])]),a("p",[e._v("7 不要在中括号中添加空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const foo = [1, 2, 3];\nconsole.log(foo[0]);\n")])])]),a("p",[e._v("8 在花括号内添加空格。\nconst foo = { clark: 'kent' };")]),e._v(" "),a("p",[e._v("9 要求打开的块标志和同一行上的标志拥有一致的间距。此规则还会在同一行关闭的块标记和前边的标记强    制实施一致的间距。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function foo() { return true; }\nif (foo) { bar = 0; }\n")])])]),a("p",[e._v("10 逗号之前避免使用空格，逗号之后需要使用空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var foo = 1, bar = 2;\nvar arr = [1, 2];\n")])])]),a("p",[e._v("11 在行的末尾避免使用空格。")]),e._v(" "),a("h2",{attrs:{id:"分号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分号","aria-hidden":"true"}},[e._v("#")]),e._v(" 分号")]),e._v(" "),a("p",[e._v("每一行结束加分号结尾")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const luke = {};\nconst leia = {};\n[luke, leia].forEach((jedi) => {\n  jedi.father = 'vader';\n});\n")])])]),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),a("p",[e._v("1 使用命名的函数表达式代替函数声明。\n函数声明是挂起的，这意味着在它在文件中定义之前，很容易引用函数。这会损害可读性和可维护性。\n// 从变量引用调用中区分的词汇名称")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const short = function longUniqueMoreDescriptiveLexicalFoo() {\n  // ...\n};\n")])])]),a("p",[e._v("2 Wrap立即调用函数表达式。\n立即调用的函数表达式是单个单元 - 包装， 并且拥有括号调用, 在括号内, 清晰的表达式。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(function () {\n  console.log('Welcome to the Internet. Please follow me.');\n}());\n")])])]),a("p",[e._v("3 切记不要在非功能块中声明函数 (if, while, 等)。 将函数赋值给变量。")]),e._v(" "),a("p",[e._v("4 避免使用默认参数的副作用。\n他们很容易混淆。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var b = 1;\ncount();  // 1\ncount();  // 2\ncount(3); // 3\ncount();  // 3\n")])])]),a("p",[e._v("5 总是把默认参数放在最后。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function handleThings(name, opts = {}) {\n  // ...\n}\n")])])]),a("p",[e._v("6 函数签名中的间距。\n一致性很好，在删除或添加名称时不需要添加或删除空格。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const x = function () {};\nconst y = function a() {};\n")])])]),a("p",[e._v("7 优先使用扩展运算符 ... 来调用可变参数函数\n它更加干净，你不需要提供上下文。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const x = [1, 2, 3, 4, 5];\nconsole.log(...x);\nnew Date(...[2016, 8, 5]);\n")])])]),a("h2",{attrs:{id:"箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 箭头函数")]),e._v(" "),a("p",[e._v("1 当你必须使用匿名函数时 (当传递内联函数时)， 使用箭头函数。\n它创建了一个在 this 上下文中执行的函数版本，它通常是你想要的，并且是一个更简洁的语法。\n如果你有一个相当复杂的函数，你可以把这个逻辑转移到它自己的命名函数表达式中。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[1, 2, 3].map((x) => {\n  const y = x + 1;\n  return x * y;\n});\n")])])]),a("p",[e._v("2 如果表达式跨越多个行，用括号将其括起来，以获得更好的可读性。\n它清楚地显示了函数的起点和终点。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("['get', 'post', 'put'].map(httpMethod => (\n  Object.prototype.hasOwnProperty.call(\n    httpMagicObjectWithAVeryLongName,\n    httpMethod,\n  )\n));\n")])])]),a("p",[e._v("3 如果你的函数接收一个参数，则可以不用括号，省略括号。 否则，为了保证清晰和一致性，需要在参数周围加上括号。\n注意：总是使用括号是可以接受的，在这种情况下，我们使用 “always” option 来配置减少视觉上的混乱。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[1, 2, 3].map(x => x * x);\n[1, 2, 3].map(number => (\n  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`\n));\n[1, 2, 3].map((x) => {\n  const y = x + 1;\n  return x * y;\n});\n")])])]),a("p",[e._v("4 避免箭头函数符号 (=>) 和比较运算符 (<=, >=) 的混淆。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);\nconst itemHeight = (item) => {\n  const { height, largeSize, smallSize } = item;\n  return height > 256 ? largeSize : smallSize;\n};\n")])])]),a("p",[e._v("5 注意带有隐式返回的箭头函数函数体的位置。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(foo) => bar;\n(foo) => (bar);\n(foo) => (\n  bar\n)\n")])])]),a("h2",{attrs:{id:"类和构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类和构造器","aria-hidden":"true"}},[e._v("#")]),e._v(" 类和构造器")]),e._v(" "),a("p",[e._v("1 尽量使用 class. 避免直接操作 prototype .\nclass 语法更简洁，更容易推理。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Queue {\n  constructor(contents = []) {\n    this.queue = [...contents];\n  }\n  pop() {\n    const value = this.queue[0];\n    this.queue.splice(0, 1);\n    return value;\n  }\n}\n")])])]),a("p",[e._v("2 使用 extends 来扩展继承。\n它是一个内置的方法，可以在不破坏 instanceof 的情况下继承原型功能。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class PeekableQueue extends Queue {\n  peek() {\n    return this.queue[0];\n  }\n}\n")])])]),a("p",[e._v("3 方法返回了 this 来供其内部方法调用。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Jedi {\n  jump() {\n    this.jumping = true;\n    return this;\n  }\n  setHeight(height) {\n    this.height = height;\n    return this;\n  }\n}\nconst luke = new Jedi();\nluke.jump()\n.setHeight(20);\n")])])]),a("p",[e._v("4 如果没有指定类，则类具有默认的构造器。 一个空的构造器或是一个代表父类的函数是没有必要的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Rey extends Jedi {\n  constructor(...args) {\n    super(...args);\n    this.name = 'Rey';\n  }\n}\n")])])]),a("p",[e._v("6 避免定义重复的类成员。\n重复的类成员声明将会默认倾向于最后一个 - 具有重复的类成员可以说是一个错误。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Foo {\n  bar() { return 1; }\n}\nclass Foo {\n  bar() { return 2; }\n}\n")])])]),a("p",[e._v("##模块")]),e._v(" "),a("p",[e._v("1 你可能经常使用模块 (import/export) 在一些非标准模块的系统上。 你也可以在你喜欢的模块系统上相互转换。\n模块是未来的趋势，让我们拥抱未来。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import AirbnbStyleGuide from './AirbnbStyleGuide';\nexport default AirbnbStyleGuide.es6;\nimport { es6 } from './AirbnbStyleGuide';\nexport default es6;\n")])])]),a("p",[e._v("2 不要使用通配符导入。\n这确定你有一个单独的默认导出。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import AirbnbStyleGuide from './AirbnbStyleGuide';\n")])])]),a("p",[e._v("3 不要直接从导入导出。\n虽然写在一行很简洁，但是有一个明确的导入和一个明确的导出能够保证一致性。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// filename es6.js\nimport { es6 } from './AirbnbStyleGuide';\nexport default es6;\n")])])]),a("p",[e._v("4 只从一个路径导入所有需要的东西。\n从同一个路径导入多个行，使代码更难以维护。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import foo, { named1, named2 } from 'foo';\nimport foo, {\n  named1,\n  named2,\n} from 'foo';\n")])])]),a("p",[e._v("5 不要导出可变的引用。\n在一般情况下，应该避免发生突变，但是在导出可变引用时及其容易发生突变。虽然在某些特殊情况下，可能需要这样，但是一般情况下只需要导出常量引用。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const foo = 3;\nexport { foo };\n")])])]),a("p",[e._v("6 在单个导出的模块中，选择默认模块而不是指定的导出。\n为了鼓励更多的文件只导出一件东西，这样可读性和可维护性更好。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default function foo() {}\n")])])]),a("p",[e._v("7 将所有的 imports 语句放在所有非导入语句的上边。\n由于所有的 imports 都被提前，保持他们在顶部是为了防止意外发生。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import foo from 'foo';\nimport bar from 'bar';\nfoo.init();\n")])])]),a("p",[e._v("8 多行导入应该像多行数组和对象一样缩进。\n花括号和其他规范一样，遵循相同的缩进规则，后边的都好一样。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {\n  longNameA,\n  longNameB,\n  longNameC,\n  longNameD,\n  longNameE,\n} from 'path';\n")])])]),a("p",[e._v("9 在模块导入语句中禁止使用 Webpack 加载器语法。\n因为在导入语句中使用 webpack 语法，将代码和模块绑定在一起。应该在 webpack.config.js 中使用加载器语法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import fooSass from 'foo.scss';\nimport barCss from 'bar.css';\n")])])]),a("p",[e._v("##属性")]),e._v(" "),a("p",[e._v("1 访问属性时使用点符号。\nconst luke = {\njedi: true,\nage: 28,\n};\nconst isJedi = luke.jedi;")]),e._v(" "),a("p",[e._v("2 使用变量访问属性时，使用 []表示法。\nconst luke = {\njedi: true,\nage: 28,\n};\nfunction getProp(prop) {\nreturn luke[prop];\n}\nconst isJedi = getProp('jedi');")]),e._v(" "),a("p",[e._v("3 计算指数时，可以使用 ** 运算符。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const binary = 2 ** 10;\n")])])]),a("h2",{attrs:{id:"比较运算符和等号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符和等号","aria-hidden":"true"}},[e._v("#")]),e._v(" 比较运算符和等号")]),e._v(" "),a("p",[e._v("1 使用 === 和 !== 而不是 == 和 !=。")]),e._v(" "),a("p",[e._v("2 条件语句，例如 if 语句使用 ToBoolean 的抽象方法来计算表达式的结果，并始终遵循以下简单的规则：\nObjects 的取值为： true\nUndefined 的取值为： false\nNull 的取值为： false\nBooleans 的取值为： 布尔值的取值\nNumbers 的取值为：如果为 +0, -0, or NaN 值为 false 否则为 true\nStrings 的取值为: 如果是一个空字符串 '' 值为 false 否则为 true")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if ([0] && []) {\n  // true\n  // 一个数组（既是是空的）是一个对象，对象的取值为 true\n}\n")])])]),a("p",[e._v("3 对于布尔值使用简写，但是对于字符串和数字进行显式比较。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (isValid) {\n  // ...\n}\nif (collection.length > 0) {\n  // ...\n}\n")])])]),a("p",[e._v("4 获取更多信息请查看 Angus Croll 的 Truth Equality and JavaScript 。")]),e._v(" "),a("p",[e._v("5 在 case 和 default 的子句中，如果存在声明 (例如. let, const, function, 和 class)，使用大括号来创建块 。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("switch (foo) {\n  case 1: {\n    let x = 1;\n    break;\n  }\n  case 2: {\n    const y = 2;\n    break;\n  }\n  case 3: {\n    function f() {\n      // ...\n    }\n    break;\n  }\n}\n")])])]),a("p",[e._v("6 三目表达式不应该嵌套，通常是单行表达式。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 分离为两个三目表达式\nconst maybeNull = value1 > value2 ? 'baz' : null;\n// better\nconst foo = maybe1 > maybe2\n  ? 'bar'\n  : maybeNull;\n\n// best\nconst foo = maybe1 > maybe2 ? 'bar' : maybeNull;\n")])])]),a("p",[e._v("7 避免不必要的三目表达式。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const foo = a || b;\nconst bar = !!c;\nconst baz = !c;\n")])])]),a("p",[e._v("8 使用该混合运算符时，使用括号括起来。 唯一例外的是标准算数运算符 (+, -, *, & /) 因为他们的优先级被广泛理解。\n这能提高可读性并且表明开发人员的意图。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const foo = (a && b < 0) || c > 0 || (d + 1 === 0);\nconst bar = (a ** b) - (5 % d);\nif (a || (b && c)) {\n  return d;\n}\nconst bar = a + b / c * d;\n")])])]),a("h2",{attrs:{id:"块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块","aria-hidden":"true"}},[e._v("#")]),e._v(" 块")]),e._v(" "),a("p",[e._v("1 当有多行代码块的时候，使用大括号包裹。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (test) return false;\nif (test) {\n  return false;\n}\n")])])]),a("p",[e._v("2 如果你使用的是 if 和 else 的多行代码块，则将 else 语句放在 if 块闭括号同一行的位置。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (test) {\n  thing1();\n  thing2();\n} else {\n  thing3();\n}\n")])])]),a("p",[e._v("3 如果一个 if 块总是执行一个 return 语句，那么接下来的 else 块就没有必要了。\n如果一个包含 return 语句的 else if 块，在一个包含了 return 语句的 if 块之后，那么可以拆成多个 if 块。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function cats() {\n  if (x) {\n    return x;\n  }\n  if (y) {\n    return y;\n  }\n}\n\nfunction dogs(x) {\n  if (x) {\n    if (z) {\n      return y;\n    }\n  } else {\n    return z;\n  }\n}\n")])])]),a("h2",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[e._v("#")]),e._v(" ESlint")]),e._v(" "),a("pre",[a("code",[e._v('```\nmodule.exports = {\n\n  //此项是用来告诉eslint找当前配置文件不能往父级查找\n  root: true,\n\n  //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析\n  parser: \'babel-eslint\',\n\n  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式\n  parserOptions: {\n    // 设置 script(默认) 或 module，如果代码是在ECMASCRIPT中的模块\n    sourceType: \'module\',\n    "ecmaVersion": 6,\n    "ecmaFeatures": {\n      "jsx": true\n    }\n  },\n\n  // 此项指定环境的全局变量，下面的配置指定为浏览器环境\n  env: {\n    "browser": true,\n    "node": true,\n    "commonjs": true,\n    "es6": true,\n    "amd": true\n  },\n  \n  // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写，如果你使用vs-code我觉得应该可以避免出错\n  extends: \'vue\',\n  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的\n  plugins: [\n    \'html\',\n    "flow-vars", \n    "react"\n  ],\n\n  /* \n  下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-\n    主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致\n    "off" -> 0 关闭规则\n    "warn" -> 1 开启警告规则\n    "error" -> 2 开启错误规则\n  */\n  rules: {\n    // 警告\n    "no-extra-parens": 1, // 非必要的括号\n    "no-empty": 1, // 块语句中的内容不能为空\n    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用\n    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数\n    "no-undef": 1, // 不可以 有未定义的变量\n    // vue\n    "flow-vars/define-flow-type": 1,\n    "flow-vars/use-flow-type": 1,\n\n    // react\n    "react/jsx-uses-react": 2,\n    "react/jsx-uses-vars": 2,\n\n    // 代码风格\n    "no-multi-spaces": 1, // 不能用多余的空格\n    "key-spacing": [1, {  // 对象字面量中冒号的前后空格\n      "beforeColon": false,\n      "afterColon": true\n    }],\n    "block-scoped-var": 2, // 块语句中使用var\n    "consistent-return": 2, // return 后面是否允许省略\n    "accessor-pairs": 2, // 在对象中使用getter/setter\n    "no-return-assign": [2, "always"], // return 语句中不能有赋值表达式\n    "no-redeclare": [2, {   // 禁止重复声明变量\n      "builtinGlobals": true\n    }],\n    "space-infix-ops": 2, // 中缀操作符周围要不要有空格\n    "curly": 1, // 必须使用 if(){} 中的{}\n\n    // common js\n    "no-duplicate-imports": 1\n  }\n}\n```\n')])]),e._v(" "),a("h2",{attrs:{id:"eslint2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint2","aria-hidden":"true"}},[e._v("#")]),e._v(" ESlint2")]),e._v(" "),a("pre",[a("code",[e._v('```\n"no-caller": 1,//禁止使用arguments.caller或arguments.callee\n"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}\n"no-empty": 2,//块语句中的内容不能为空\n"no-eq-null": 2,//禁止对null使用==或!=运算符\n"no-eval": 1,//禁止使用eval\n"no-extra-parens": 2,//禁止非必要的括号\n"no-extra-semi": 2,//禁止多余的冒号\n"no-func-assign": 2,//禁止重复的函数声明\n"no-inline-comments": 0,//禁止行内备注\n"no-label-var": 2,//label名不能与var声明的变量名相同\n"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格\n"linebreak-style": [0, "windows"],//换行风格\n"no-multi-spaces": 1,//不能用多余的空格\n"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行\n"no-redeclare": 2,//禁止重复声明变量\n"no-return-assign": 1,//return 语句中不能有赋值表达式\n"no-self-compare": 2,//不能比较自身\n"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]\n"no-trailing-spaces": 1,//一行结束后面不要有空格\n"no-this-before-super": 0,//在调用super()之前不能使用this或super\n"no-undef": 1,//不能有未定义的变量\n"no-underscore-dangle": 1,//标识符不能以_开头或结尾\n"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数\n"no-use-before-define": 2,//未定义前不能使用\n"no-var": 0,//禁用var，用let和const代替\n\n"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格\n"arrow-parens": 0,//箭头函数用小括号括起来\n"arrow-spacing": 0,//=>的前/后括号\n"accessor-pairs": 0,//在对象中使用getter/setter\n"camelcase": 2,//强制驼峰法命名\n"consistent-this": [2, "that"],//this别名\n"default-case": 2,//switch语句最后必须有default\n"eqeqeq": 2,//必须使用全等\n"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式\n"indent": [2, 4],//缩进风格\n```')])])])}],!1,null,null,null);n.default=s.exports}}]);