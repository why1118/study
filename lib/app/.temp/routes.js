import Vue from 'vue'
Vue.component("Bit", () => import("G:\\web-point\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-7a2c53c2dcaeb",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\README.md").then(comp => {
        Vue.component("v-7a2c53c2dcaeb", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-49caf4650ae81",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\config\\README.md").then(comp => {
        Vue.component("v-49caf4650ae81", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-33456def5bede",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-33456def5bede", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-f9623ae75ae31",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\README.md").then(comp => {
        Vue.component("v-f9623ae75ae31", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-eb3e659a1372b",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-eb3e659a1372b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e806d1f62ceea",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-e806d1f62ceea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2f5b3e4c8dd6",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-f2f5b3e4c8dd6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-594cd32a99649",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-594cd32a99649", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b89df5bdd64b",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-0b89df5bdd64b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-98a434c8b624e",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-98a434c8b624e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3971f09f91a1d",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-3971f09f91a1d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-93761de6ac8a3",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-93761de6ac8a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4531c1828257a",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\README.md").then(comp => {
        Vue.component("v-4531c1828257a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-12704130d195c",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-12704130d195c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50d8912250311",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-50d8912250311", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d343333cfc2f",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-1d343333cfc2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f573c72a9e324",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-f573c72a9e324", comp.default)
        next()
      })
    }
  },
  {
    name: "v-12922d8234b0a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-12922d8234b0a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-daee618448c96",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-daee618448c96", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-0bb60b6b0b5c6",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-0bb60b6b0b5c6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-ddc8be505c41f",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-ddc8be505c41f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-2ef01abca5642",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-2ef01abca5642", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ff8e588f0037",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-0ff8e588f0037", comp.default)
        next()
      })
    }
  },
  {
    name: "v-249106811dc66",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-249106811dc66", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e5dd4aa66a4f",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-7e5dd4aa66a4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-310777ac08b15",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-310777ac08b15", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5015e70f84b8f",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-5015e70f84b8f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a3b09ef9991c4",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-a3b09ef9991c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-839493108b6ad",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-839493108b6ad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c070dc387c05c",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-c070dc387c05c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d856a2248ab",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-2d856a2248ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4dad543b4666e",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4dad543b4666e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0cd18fd28f38a",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-0cd18fd28f38a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcde983de99ec",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-dcde983de99ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e100df69158c2",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-e100df69158c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-691f06b66df64",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-691f06b66df64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40f09077ba888",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-40f09077ba888", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-b67bd44196ff2",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-b67bd44196ff2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79acee0910807",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-79acee0910807", comp.default)
        next()
      })
    }
  },
  {
    name: "v-438662f5e7d0a",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-438662f5e7d0a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e6da32b22aa02",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-e6da32b22aa02", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-a7c3d60c8d24b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-a7c3d60c8d24b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-49359f1105777",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-49359f1105777", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-fbf9a1693785c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-fbf9a1693785c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-66e7f0e74fa1b",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-66e7f0e74fa1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a9f3a7b576a5",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-2a9f3a7b576a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2276a6be46cac",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-2276a6be46cac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6231d4d790d5c",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-6231d4d790d5c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-a5cd70c886665",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-a5cd70c886665", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-0da91198c2c8c",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-0da91198c2c8c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a06dd78c7bc47",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-a06dd78c7bc47", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-cb391594c8e4e",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-cb391594c8e4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3427982929173",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-3427982929173", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-e8ab170c15276",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-e8ab170c15276", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e2ffdf5ffd4a9",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-e2ffdf5ffd4a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-83b484da80559",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-83b484da80559", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a070abfbe88d7",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-a070abfbe88d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1722c93beda",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b1722c93beda", comp.default)
        next()
      })
    }
  },
  {
    name: "v-404947417ca34",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-404947417ca34", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ead790372c03",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-ead790372c03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-416be91472756",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-416be91472756", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95c89477a4075",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-95c89477a4075", comp.default)
        next()
      })
    }
  },
  {
    name: "v-518f65ff00c59",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-518f65ff00c59", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-0cafba9d0802c",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-0cafba9d0802c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35c9a7101231b",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-35c9a7101231b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-9635bd2236ea4",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-9635bd2236ea4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-ac4cca5c04bf6",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-ac4cca5c04bf6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-d3a7c9801df9b",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-d3a7c9801df9b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-84ac65435f34c",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-84ac65435f34c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-88b57273bd508",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-88b57273bd508", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff29400b2c80f",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-ff29400b2c80f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79aa680461aca",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("G:\\web-point\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-79aa680461aca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]