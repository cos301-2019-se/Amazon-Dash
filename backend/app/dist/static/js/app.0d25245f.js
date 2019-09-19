(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"static/js/"+({costs:"costs",metrics:"metrics",register:"register"}[t]||t)+"."+{costs:"c43bc80b",metrics:"6bf3a878",register:"750e0859"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={register:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="static/css/"+({costs:"costs",metrics:"metrics",register:"register"}[t]||t)+"."+{costs:"31d6cfe0",metrics:"31d6cfe0",register:"70c5ad6a"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0484":function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});n("7f7f"),n("7514");var a=[function(t){return Math.floor(t)},function(t){return Math.ceil(t)}],r=[{id:"cpu",name:"CPU Utilization",unit:"Percentage",bound:[0,100]},{id:"netin",name:"Network In",unit:"Bytes",bound:a},{id:"netout",name:"Network Out",unit:"Bytes",bound:a},{id:"netpacketin",name:"Network Packets In",unit:"Packets",bound:a},{id:"netpacketout",name:"Network Packets Out",unit:"Packets",bound:a},{id:"diskread",name:"Disk Read",unit:"Bytes",bound:a},{id:"diskwrite",name:"Disk Write",unit:"Bytes",bound:a},{id:"diskreadops",name:"Disk Read Ops",unit:"Operations",bound:a},{id:"diskwriteops",name:"Disk Write Ops",unit:"Operations",bound:a}],i={cpu:"The CPU usage of the service in percent",netin:"The average network input in bytes",netout:"The average network output in bytes",netpacketin:"The average number of packets incoming",netpacketout:"The average number of packets outgoing",diskread:"The average number of bytes read from the disk",diskwrite:"The average number of bytes written to the disk",diskreadops:"The average number of disk read operations",diskwriteops:"The average number of disk write operations"},s=function(t){return(r.find(function(e){return e.id===t})||{bound:void 0}).bound},o=function(t){return(r.find(function(e){return e.id===t})||{name:"Unknown"}).name}},"206d":function(t,e,n){"use strict";var a=n("aac2"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("8754"),r=n.n(a);r.a},"5d99":function(t,e,n){},8754:function(t,e,n){},aac2:function(t,e,n){},b41a:function(t,e,n){"use strict";var a=n("5d99"),r=n.n(a);r.a},c079:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=(n("58b2"),{apiUrl:"/api"}),i=n("bc3a"),s=n.n(i),o={baseURL:r.apiUrl,withCredentials:!0},c=s.a.create(o);c.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)});var u={install:function(t){t.$axios=c}};u.install=function(t){t.$axios=c,window.axios=c,Object.defineProperties(t.prototype,{$axios:{get:function(){return c}}})},a["default"].use(u);var l=n("bf1a");a["default"].use(l["a"]);var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:"",color:"primary",dark:""}},[t.$vuetify.breakpoint.smAndDown&&t.authenticated?n("v-btn",{attrs:{icon:"",flat:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1):t._e(),n("v-toolbar-title",{staticClass:"toolbar-title"},[t._v("\n      Amazon Dash\n    ")]),t.$store.getters.authenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.drawerItems,function(e,a){return n("v-btn",{key:a,attrs:{flat:""},on:{click:function(n){return t.$router.push(e.href)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),1):t._e(),n("v-spacer"),t.$store.getters.authenticated?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"logout-button",attrs:{icon:""},on:{click:function(e){t.logoutDialog=!0}}},a),[n("v-icon",[t._v("logout")])],1)]}}],null,!1,1356620912)},[n("span",[t._v("Log Out")])]):t._e()],1),t.$vuetify.breakpoint.smAndDown&&t.authenticated?n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.drawerItems,function(e,a){return n("v-list-tile",{key:a,attrs:{color:t.isCurrentRoute(e.href)?"accent":void 0},on:{click:function(n){t.$router.push(e.href),t.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isCurrentRoute(e.href)?"accent":void 0}},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1):t._e(),n("v-content",[n("router-view")],1),n("v-snackbar",{attrs:{bottom:"",right:"",timeout:t.snackbar.timeout,color:t.snackbar.colour},model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v("\n    "+t._s(t.snackbar.message)+"\n  ")]),n("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.logoutDialog,callback:function(e){t.logoutDialog=e},expression:"logoutDialog"}},[n("v-card",[n("v-card-title",[t._v("\n        Logout\n      ")]),n("v-card-text",[t._v("\n        Are you sure you wish to log out?\n      ")]),n("v-card-actions",[n("div",{staticStyle:{"flex-grow":"1"}}),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.logoutDialog=!1}}},[t._v("No")]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.logout()}}},[t._v("Yes")])],1)],1)],1)],1)},f=[],p=(n("aef6"),n("d225")),h=n("b0b4"),v=n("308d"),m=n("6bb5"),g=n("4e2b"),b=n("9ab4"),k=n("60a3"),y=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.logoutDialog=!1,t.drawer=!1,t.drawerItems=[{title:"Dashboard",href:"/",icon:"home"},{title:"Costs",href:"/costs",icon:"home"}],t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"isCurrentRoute",value:function(t){return this.$router.currentRoute.path.endsWith(t)}},{key:"logout",value:function(){this.$store.dispatch("logout"),this.logoutDialog=!1}},{key:"snackbar",get:function(){return this.$store.getters.snackbar}},{key:"authenticated",get:function(){return!!this.$store.getters.token}}]),e}(k["c"]);y=b["a"]([k["a"]],y);var w=y,C=w,_=(n("5c0b"),n("2877")),x=n("6544"),O=n.n(x),V=n("7496"),S=n("8336"),j=n("b0af"),I=n("99d9"),T=n("12b2"),M=n("549c"),E=n("169a"),$=n("132d"),L=n("8860"),A=n("ba95"),D=n("40fe"),P=n("5d23"),N=n("f774"),F=n("2db4"),R=n("9910"),q=n("71d9"),B=n("2a7f"),U=n("3a2f"),z=Object(_["a"])(C,d,f,!1,null,null,null),J=z.exports;O()(z,{VApp:V["a"],VBtn:S["a"],VCard:j["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:T["a"],VContent:M["a"],VDialog:E["a"],VIcon:$["a"],VList:L["a"],VListTile:A["a"],VListTileAction:D["a"],VListTileContent:P["a"],VListTileTitle:P["b"],VNavigationDrawer:N["a"],VSnackbar:F["a"],VSpacer:R["a"],VToolbar:q["a"],VToolbarItems:B["a"],VToolbarTitle:B["b"],VTooltip:U["a"]});var W=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:"","fill-height":""}},[t.$store.getters.instances.length?t._e():n("div",{staticClass:"progress-container"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"accent",size:80}})],1),t.$store.getters.instances.length?n("v-layout",{attrs:{row:"",wrap:"","align-content-start":"","justify-center":""}},[n("v-flex",{attrs:{sm12:"",md6:"",lg4:""}},[n("h1",{staticClass:"heading"},[t._v("Dashboard")])]),n("v-flex",{attrs:{sm12:"",md6:"",lg8:""}},[n("v-text-field",{staticClass:"search-bar",attrs:{solo:"",clearable:"","prepend-inner-icon":"search",placeholder:"Filter Instances"},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1),t._l(t.instances,function(t){return n("v-flex",{key:t.id,attrs:{xs12:"",md6:"",lg4:""}},[n("ServiceCard",{staticClass:"instance",attrs:{instance:t}})],1)}),n("v-footer",{attrs:{app:""}},[n("v-dialog",{staticClass:"ma-5",attrs:{"max-width":"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"accent",dark:"",absolute:"",top:"",right:"",fab:""}},a),[n("v-icon",[t._v("add")])],1)]}}],null,!1,1238803024),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Add a service")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"Image Id",required:""},model:{value:t.imageId,callback:function(e){t.imageId=e},expression:"imageId"}}),n("v-text-field",{attrs:{label:"Instance Type",required:""},model:{value:t.instanceType,callback:function(e){t.instanceType=e},expression:"instanceType"}}),n("v-text-field",{attrs:{label:"Kernel Id",required:""},model:{value:t.kernelId,callback:function(e){t.kernelId=e},expression:"kernelId"}}),n("v-text-field",{attrs:{label:"Max Count",required:""},model:{value:t.maxCount,callback:function(e){t.maxCount=e},expression:"maxCount"}}),n("v-text-field",{attrs:{label:"Min Count",required:""},model:{value:t.minCount,callback:function(e){t.minCount=e},expression:"minCount"}}),n("v-btn",{staticClass:"mr-4",attrs:{color:"accent",right:""},on:{click:t.submitCreateInstance}},[t._v("\n              Submit\n            ")])],1)],1)],1)],1)],2):t._e()],1)},K=[],Y=(n("7f7f"),n("6762"),n("2fdb"),n("d25f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return n("v-card",{staticClass:"mx-auto",class:"elevation-"+(a?12:2)},[n("v-sheet",{attrs:{color:t.instance.stateColour,elevation:"12",height:"200px"}},[t.instance.getMetric(t.metric.id).length?n("la-cartesian",{attrs:{data:t.instance.getMetric(t.metric.id),height:200,autoresize:"",bound:t.metric.bound}},[n("la-line",{attrs:{animated:"",curve:"",color:"white",prop:"value"}}),n("la-y-axis",{attrs:{color:"white",nbTicks:5}}),n("la-tooltip")],1):t.instance.metricsLoaded()?n("div",{staticClass:"loading-box"},[t._v("\n          No Metric Data\n        ")]):n("div",{staticClass:"loading-box"},[t._v("\n          Loading Metrics...\n        ")]),t.instance.getMetric(t.metric.id).length?n("div",{staticClass:"metric-label"},[n("span",[t._v(t._s(t.metric.name)+" ("+t._s(t.metric.unit)+")")]),n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"metric-dropdown",attrs:{icon:""}},a),[n("v-icon",[t._v("arrow_drop_down")])],1)]}}],null,!0)},[n("v-list",t._l(t.metricOptions,function(e,a){return n("v-list-tile",{key:a,on:{click:function(e){t.metricIndex=a}}},[n("v-list-tile-title",[t._v(t._s(e.name))])],1)}),1)],1)],1):t._e()],1),n("v-menu",[n("v-btn",{staticClass:"menu-button",attrs:{slot:"activator",icon:"",small:"",flat:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),n("v-list",[t.instance.running?n("v-list-tile",{staticClass:"stop-button",on:{click:t.stop}},[t._v("Stop")]):n("v-list-tile",{staticClass:"start-button",on:{click:t.start}},[t._v("Start")]),n("v-list-tile",{staticClass:"restart-button",on:{click:t.restart}},[t._v("Restart")]),n("v-list-tile",{staticClass:"shell-button",on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("Shell")])],1)],1),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"view-metrics-button",staticStyle:{float:"right"},attrs:{icon:"",small:"",flat:""},on:{click:function(e){return t.goToMetricView(t.instance.id)}}},a),[n("v-icon",[t._v("info")])],1)]}}],null,!0)},[n("span",[t._v("View Service Details")])]),n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.instance.name))]),n("v-spacer"),n("span",{staticClass:"font-weight-light"},[t._v(t._s(t.instance.stateName))])],1)],1)}}])}),n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Command to launch instance in shell")]),n("v-card-text",[n("p",[t._v("Copy and paste the following command into your shell:")]),n("p",[t._v("mssh "+t._s(t.instance.id))])])],1)],1)],1)}),G=[],Q=n("0484"),X=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.metricIndex=0,t.metricOptions=Q["d"],t.dialog=!1,t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"goToMetricView",value:function(t){this.$router.push({path:"/instances/".concat(t)})}},{key:"getMetrics",value:function(){this.$store.dispatch("getInstanceMetrics",this.instance.id)}},{key:"stop",value:function(){this.$store.dispatch("stopInstance",this.instance.id)}},{key:"restart",value:function(){this.$store.dispatch("restartInstance",this.instance.id)}},{key:"start",value:function(){this.$store.dispatch("startInstance",this.instance.id)}},{key:"metric",get:function(){return this.metricOptions[this.metricIndex]}}]),e}(k["c"]);b["a"]([Object(k["b"])()],X.prototype,"instance",void 0),X=b["a"]([k["a"]],X);var Z=X,tt=Z,et=(n("ce45"),n("ce87")),nt=n("e449"),at=n("8dd9"),rt=Object(_["a"])(tt,Y,G,!1,null,null,null),it=rt.exports;O()(rt,{VBtn:S["a"],VCard:j["a"],VCardText:I["b"],VCardTitle:T["a"],VDialog:E["a"],VHover:et["a"],VIcon:$["a"],VList:L["a"],VListTile:A["a"],VListTileTitle:P["b"],VMenu:nt["a"],VSheet:at["a"],VSpacer:R["a"],VTooltip:U["a"]});var st=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.searchFilter="",t.dialog=!1,t.imageId="",t.instanceType="",t.kernelId="",t.maxCount=1,t.minCount=1,t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"beforeDestroy",value:function(){this.$store.dispatch("unsubscribe")}},{key:"mounted",value:function(){this.$store.dispatch("subscribe")}},{key:"submitCreateInstance",value:function(){var t={image_id:this.imageId,instance_type:this.instanceType,kernel_id:this.kernelId,max_count:this.maxCount,min_count:this.minCount};this.$store.dispatch("createInstance",t),this.dialog=!1,this.imageId="",this.instanceType="",this.kernelId="",this.maxCount=1,this.minCount=1}},{key:"instances",get:function(){var t=this;return this.$store.getters.instances.filter(function(e){return e.name.toLowerCase().includes((t.searchFilter||"").toLowerCase())})}}]),e}(k["c"]);st=b["a"]([Object(k["a"])({components:{ServiceCard:it}})],st);var ot=st,ct=ot,ut=(n("b41a"),n("a523")),lt=n("0e8f"),dt=n("553a"),ft=n("4bd4"),pt=n("a722"),ht=n("490a"),vt=n("2677"),mt=Object(_["a"])(ct,H,K,!1,null,null,null),gt=mt.exports;O()(mt,{VBtn:S["a"],VCard:j["a"],VCardTitle:T["a"],VContainer:ut["a"],VDialog:E["a"],VFlex:lt["a"],VFooter:dt["a"],VForm:ft["a"],VIcon:$["a"],VLayout:pt["a"],VProgressCircular:ht["a"],VTextField:vt["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"heading",attrs:{"primary-title":""}},[n("h3",{staticClass:"headline heading"},[t._v("Amazon Dash")])]),n("v-card-text",{staticClass:"card-text"},[n("v-text-field",{staticClass:"username",attrs:{label:"Username","prepend-icon":"person",required:"",rules:[function(t){return!!t||"Username is required"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-text-field",{staticClass:"password",attrs:{label:"Password",type:t.passwordShow?"text":"password","prepend-icon":"lock","append-icon":t.passwordShow?"visibility_off":"visibility",required:"",rules:[function(t){return!!t||"Password is required"}]},on:{"click:append":function(e){t.passwordShow=!t.passwordShow}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-card-actions",{staticClass:"buttons"},[n("v-btn",{staticClass:"register-button",attrs:{to:"/register",flat:""}},[t._v("\n              Create Account\n            ")]),n("button",{staticClass:"google-button",attrs:{type:"button"},on:{click:function(e){return t.googleLogin()}}}),n("v-btn",{staticClass:"login-button",attrs:{type:"submit",color:"accent"}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},kt=[],yt=function(t){function e(){var t;return Object(p["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.passwordShow=!1,t.valid=!1,t.username="",t.password="",t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"login",value:function(){var t={email:this.username,password:this.password};this.$store.dispatch("login",t)}},{key:"googleLogin",value:function(){var t=this;this.$gAuth.signIn().then(function(e){var n=e.getBasicProfile().getEmail(),a=e.getId();t.$store.dispatch("googleLogin",{email:n,userId:a})}).catch(function(e){"popup_closed_by_user"!==e.error&&t.$store.dispatch("makeErrorMessage",{message:e.error})})}}]),e}(k["c"]);yt=b["a"]([k["a"]],yt);var wt=yt,Ct=wt,_t=(n("206d"),Object(_["a"])(Ct,bt,kt,!1,null,null,null)),xt=_t.exports;O()(_t,{VBtn:S["a"],VCard:j["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:T["a"],VContainer:ut["a"],VFlex:lt["a"],VForm:ft["a"],VLayout:pt["a"],VTextField:vt["a"]});var Ot=n("2f62"),Vt=(n("6d67"),n("57e7"),n("7514"),n("ac6a"),n("f3e2"),n("28a5"),{0:"orange",16:"green",32:"orange",48:"red",64:"orange",80:"grey"}),St=function(){function t(e){Object(p["a"])(this,t),this.id=e.id,this.name=e.name,this.state=e.state,this.metrics=[]}return Object(h["a"])(t,[{key:"update",value:function(t){this.name=t.name,this.state=t.state}},{key:"getMetric",value:function(t){var e="cpu"===t?100:1,n=this.metrics.find(function(e){return e.id===t});return n?n.data.map(function(t){return{value:t.value*e}}):[]}},{key:"getMetrics",value:function(t){var e=(t||"").toLowerCase();return this.metrics.filter(function(t){return t.id.toLowerCase().includes(e)||Object(Q["b"])(t.id).toLowerCase().includes(e)})}},{key:"metricsLoaded",value:function(){return this.metrics.length>0}},{key:"stateName",get:function(){return this.state&&this.state.Name.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" ")}},{key:"stateColour",get:function(){return this.state&&Vt[this.state.Code]||"grey"}},{key:"running",get:function(){return 16===this.state.Code}}]),t}(),jt=function t(e){Object(p["a"])(this,t),this.timestamp=e.timestamp,this.value=e.value},It=function t(e){Object(p["a"])(this,t),this.id=e.id,this.data=e.data.map(function(t){return new jt(t)})},Tt={setInstances:function(t,e){e.forEach(function(n){var a=t.instances.find(function(t){return t.id===n.id});a?(a.update(n),e.splice(e.indexOf(n,1))):t.instances.push(new St(n))})},setInstanceMetrics:function(t,e){var n=t.instances.find(function(t){return t.id===e.instance_id});n&&(n.metrics=e.metrics)},setMetrics:function(t,e){e.metrics.length?t.metrics=e.metrics.map(function(t){return new It(t)}):t.metrics=[]},openSnackbar:function(t,e){var n=e.message,a=e.colour,r=e.timeout,i=void 0===r?3e3:r;t.snackbar.message=n,t.snackbar.colour=a,t.snackbar.timeout=i,t.snackbar.enabled=!0,setTimeout(function(){return t.snackbar.enabled=!1},i)}},Mt=Tt,Et={instances:function(t){return t.instances},metrics:function(t){return t.metrics},snackbar:function(t){return t.snackbar},authenticated:function(t){return t.authenticated}},$t=Et,Lt=(n("6b54"),n("87b3"),n("6ee6")),At=(n("96cf"),n("3b8d")),Dt={get:function(){var t=Object(At["a"])(regeneratorRuntime.mark(function t(e,n){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Object(Lt["a"])(e),a=n.url,t.abrupt("return",window.axios.get(a).catch(function(t){throw t.response?t.response.data:t.toString()}).then(function(t){return t.data}));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),post:function(){var t=Object(At["a"])(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Object(Lt["a"])(e),a=n.url,r=n.body,t.abrupt("return",window.axios.post(a,r).catch(function(t){throw t.response.data}).then(function(t){return t.data}));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),checkAuth:function(){var t=Object(At["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,a=e.state,t.abrupt("return",n("get",{url:"authenticated"}).then(function(t){return a.authenticated=t.result,t.result}).catch(function(t){n("makeErrorMessage",{message:t})}));case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),login:function(t,e){var n=t.dispatch;n("post",{url:"login",body:e}).then(function(){Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},logout:function(t){var e=t.dispatch;e("get",{url:"logout"}).then(function(){Bt.push({name:"login"})}).catch(function(t){e("makeErrorMessage",{message:t})})},register:function(t,e){var n=t.dispatch;n("post",{url:"register",body:e}).then(function(){Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},googleRegister:function(t,e){var n=t.dispatch;n("post",{url:"register/google",body:e}).then(function(){Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},googleLogin:function(t,e){var n=t.dispatch;n("post",{url:"login/google",body:e}).then(function(){Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},fetchInstances:function(t){var e=t.dispatch,n=t.commit;e("checkAuth").then(function(t){t&&e("get",{url:"instances"}).then(function(t){n("setInstances",t)}).catch(function(t){e("makeErrorMessage",{message:"Error fetching instances: ".concat(t)})})})},getInstanceMetrics:function(t,e){var n=t.dispatch,a=t.commit;n("checkAuth"),n("get",{url:"instances/".concat(e,"/metrics")}).then(function(t){a("setInstanceMetrics",t)})},stopInstance:function(t,e){var n=t.dispatch,a=t.getters;n("checkAuth");var r=a.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/stop")}).then(function(t){n("openSnackbar",{message:"Successfully stopped ".concat(r.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},restartInstance:function(t,e){var n=t.dispatch,a=t.getters;n("checkAuth");var r=a.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/restart")}).then(function(t){n("openSnackbar",{message:"Successfully restarted ".concat(r.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},startInstance:function(t,e){var n=t.dispatch,a=t.getters;n("checkAuth");var r=a.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/start")}).then(function(t){n("openSnackbar",{message:"Successfully started ".concat(r.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},openSnackbar:function(t,e){var n=t.commit;n("openSnackbar",e)},makeErrorMessage:function(t,e){var n=t.dispatch,a=e.message,r=e.timeout;n("openSnackbar",{message:a,colour:"red",timeout:r})},fetchMetrics:function(t,e){var n=t.dispatch,a=t.commit;n("checkAuth"),n("get",{url:"instances/".concat(e,"/metrics")}).then(function(t){a("setMetrics",t)})},createInstance:function(t,e){var n=t.dispatch;t.getters;n("post",{url:"create_instance",body:e}).catch(function(t){return n("makeErrorMessage",{message:t})})},subscribe:function(t){var e=t.commit,n=t.state,a=t.dispatch;n.evtSource&&n.evtSource.close(),n.evtSource=new EventSource("".concat(r.apiUrl,"/instances/subscribe"),{withCredentials:!0}),n.evtSource.addEventListener("instances",function(t){var n=JSON.parse(t.data);e("setInstances",n)}),n.evtSource.addEventListener("metrics",function(t){var n=JSON.parse(t.data);e("setInstanceMetrics",n)}),n.evtSource.onerror=function(){return setTimeout(function(){return a("subscribe")},2e3)}},unsubscribe:function(t){var e=t.state;e.evtSource&&e.evtSource.close()}},Pt=Dt;a["default"].use(Ot["a"]);var Nt=new Ot["a"].Store({state:{authenticated:!1,instances:[],metrics:[],bus:new a["default"]({}),snackbar:{enabled:!1,message:"",colour:"red",timeout:3e3},evtSource:void 0},mutations:Mt,getters:$t,actions:Pt}),Ft=Nt;a["default"].use(W["a"]);var Rt=function(t,e,n){Ft.dispatch("checkAuth").then(function(t){t?n():n("/login")})},qt=function(t,e,n){Ft.dispatch("checkAuth").then(function(t){t?n("/"):n()})},Bt=new W["a"]({routes:[{path:"/",name:"home",component:gt,beforeEnter:Rt},{path:"/login",name:"login",component:xt,beforeEnter:qt},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))},beforeEnter:qt},{path:"/instances/:instanceId",name:"metrics",component:function(){return n.e("metrics").then(n.bind(null,"79cd"))},props:!0,beforeEnter:Rt},{path:"/costs",name:"costs",component:function(){return n.e("costs").then(n.bind(null,"ee3e"))},beforeEnter:Rt}]}),Ut=n("9483");Object(Ut["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d5e8"),n("d1e7"),n("da64"),n("5363");var zt=n("bb71"),Jt=n("fcf4");a["default"].use(zt["a"],{iconfont:"mdi",theme:{primary:Jt["a"].teal,accent:Jt["a"].pink,warn:Jt["a"].red}});var Wt=n("c9bf"),Ht={clientId:"167278001228-mrqvkm3ngt1lsct9fufu86vg29du0l7h.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};a["default"].use(Wt["a"],Ht),a["default"].config.productionTip=!1,new a["default"]({router:Bt,store:Ft,render:function(t){return t(J)}}).$mount("#app")},ce45:function(t,e,n){"use strict";var a=n("c079"),r=n.n(a);r.a}});
//# sourceMappingURL=app.0d25245f.js.map