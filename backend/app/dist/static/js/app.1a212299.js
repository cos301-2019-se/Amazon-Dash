(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return c.p+"static/js/"+({metrics:"metrics",register:"register"}[t]||t)+"."+{metrics:"2e7ce947",register:"e25a6b8a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={register:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="static/css/"+({metrics:"metrics",register:"register"}[t]||t)+"."+{metrics:"31d6cfe0",register:"70c5ad6a"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0484":function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});n("7f7f"),n("7514");var r=[function(t){return Math.floor(t)},function(t){return Math.ceil(t)}],a=[{id:"cpu",name:"CPU Utilization",unit:"Percentage",bound:[0,100]},{id:"netin",name:"Network In",unit:"Bytes",bound:r},{id:"netout",name:"Network Out",unit:"Bytes",bound:r},{id:"netpacketin",name:"Network Packets In",unit:"Packets",bound:r},{id:"netpacketout",name:"Network Packets Out",unit:"Packets",bound:r},{id:"diskread",name:"Disk Read",unit:"Bytes",bound:r},{id:"diskwrite",name:"Disk Write",unit:"Bytes",bound:r},{id:"diskreadops",name:"Disk Read Ops",unit:"Operations",bound:r},{id:"diskwriteops",name:"Disk Write Ops",unit:"Operations",bound:r}],i={cpu:"The CPU usage of the service in percent",netin:"The average network input in bytes",netout:"The average network output in bytes",netpacketin:"The average number of packets incoming",netpacketout:"The average number of packets outgoing",diskread:"The average number of bytes read from the disk",diskwrite:"The average number of bytes written to the disk",diskreadops:"The average number of disk read operations",diskwriteops:"The average number of disk write operations"},s=function(t){return(a.find(function(e){return e.id===t})||{bound:void 0}).bound},o=function(t){return(a.find(function(e){return e.id===t})||{name:"Unknown"}).name}},"206d":function(t,e,n){"use strict";var r=n("aac2"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("8754"),a=n.n(r);a.a},"5d99":function(t,e,n){},8754:function(t,e,n){},aac2:function(t,e,n){},b41a:function(t,e,n){"use strict";var r=n("5d99"),a=n.n(r);a.a},c079:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("58b2"),{apiUrl:"/api"}),i=n("bc3a"),s=n.n(i),o={baseURL:a.apiUrl},c=s.a.create(o);c.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)});var u={install:function(t){t.$axios=c}};u.install=function(t){t.$axios=c,window.axios=c,Object.defineProperties(t.prototype,{$axios:{get:function(){return c}}})},r["default"].use(u);var l=n("bf1a");r["default"].use(l["a"]);var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:"",color:"primary",dark:""}},[t.$vuetify.breakpoint.smAndDown&&t.authenticated?n("v-btn",{attrs:{icon:"",flat:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1):t._e(),n("v-toolbar-title",{staticClass:"toolbar-title"},[t._v("\n      Amazon Dash\n    ")]),t.$store.getters.authenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.drawerItems,function(e,r){return n("v-btn",{key:r,attrs:{flat:""},on:{click:function(n){return t.$router.push(e.href)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}),1):t._e(),n("v-spacer"),t.$store.getters.authenticated?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.$store.dispatch("logout")}}},r),[n("v-icon",[t._v("logout")])],1)]}}],null,!1,1208158604)},[n("span",[t._v("Log Out")])]):t._e()],1),t.$vuetify.breakpoint.smAndDown&&t.authenticated?n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.drawerItems,function(e,r){return n("v-list-tile",{key:r,attrs:{color:t.isCurrentRoute(e.href)?"accent":void 0},on:{click:function(n){t.$router.push(e.href),t.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:t.isCurrentRoute(e.href)?"accent":void 0}},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1):t._e(),n("v-content",[n("router-view")],1),n("v-snackbar",{attrs:{bottom:"",right:"",timeout:t.snackbar.timeout,color:t.snackbar.colour},model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v("\n    "+t._s(t.snackbar.message)+"\n  ")])],1)},f=[],h=(n("aef6"),n("d225")),p=n("b0b4"),v=n("308d"),m=n("6bb5"),g=n("4e2b"),b=n("9ab4"),k=n("60a3"),w=function(t){function e(){var t;return Object(h["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.drawer=!1,t.drawerItems=[{title:"Dashboard",href:"/",icon:"home"}],t}return Object(g["a"])(e,t),Object(p["a"])(e,[{key:"isCurrentRoute",value:function(t){return this.$router.currentRoute.path.endsWith(t)}},{key:"snackbar",get:function(){return this.$store.getters.snackbar}},{key:"authenticated",get:function(){return!!this.$store.getters.token}}]),e}(k["c"]);w=b["a"]([k["a"]],w);var y=w,_=y,C=(n("5c0b"),n("2877")),O=n("6544"),j=n.n(O),x=n("7496"),T=n("8336"),V=n("549c"),S=n("132d"),I=n("8860"),M=n("ba95"),$=n("40fe"),E=n("5d23"),P=n("f774"),A=n("2db4"),L=n("9910"),D=n("71d9"),N=n("2a7f"),F=n("3a2f"),B=Object(C["a"])(_,d,f,!1,null,null,null),U=B.exports;j()(B,{VApp:x["a"],VBtn:T["a"],VContent:V["a"],VIcon:S["a"],VList:I["a"],VListTile:M["a"],VListTileAction:$["a"],VListTileContent:E["a"],VListTileTitle:E["b"],VNavigationDrawer:P["a"],VSnackbar:A["a"],VSpacer:L["a"],VToolbar:D["a"],VToolbarItems:N["a"],VToolbarTitle:N["b"],VTooltip:F["a"]});var q=n("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:"","fill-height":""}},[t.$store.getters.instances.length?t._e():n("div",{staticClass:"progress-container"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"accent",size:80}})],1),t.$store.getters.instances.length?n("v-layout",{attrs:{row:"",wrap:"","align-content-start":"","justify-center":""}},[n("v-flex",{attrs:{sm12:"",md6:"",lg4:""}},[n("h1",{staticClass:"heading"},[t._v("Dashboard")])]),n("v-flex",{attrs:{sm12:"",md6:"",lg8:""}},[n("v-text-field",{staticClass:"search-bar",attrs:{solo:"",clearable:"","prepend-inner-icon":"search",placeholder:"Filter Instances"},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1),t._l(t.instances,function(t){return n("v-flex",{key:t.id,attrs:{xs12:"",md6:"",lg4:""}},[n("ServiceCard",{attrs:{instance:t}})],1)})],2):t._e()],1)},z=[],W=(n("7f7f"),n("6762"),n("2fdb"),n("d25f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-card",{staticClass:"mx-auto",class:"elevation-"+(r?12:2)},[n("v-sheet",{attrs:{color:t.instance.stateColour,elevation:"12",height:"200px"}},[t.instance.getMetric(t.metric.id).length?n("la-cartesian",{attrs:{data:t.instance.getMetric(t.metric.id),height:200,autoresize:"",bound:t.metric.bound}},[n("la-line",{attrs:{animated:"",curve:"",color:"white",prop:"value"}}),n("la-y-axis",{attrs:{color:"white",nbTicks:5}}),n("la-tooltip")],1):n("div",{staticClass:"loading-box"},[t._v("\n        Loading Metrics...\n      ")]),t.instance.getMetric(t.metric.id).length?n("div",{staticClass:"metric-label"},[n("span",[t._v(t._s(t.metric.name)+" ("+t._s(t.metric.unit)+")")]),n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("arrow_drop_down")])],1)]}}],null,!0)},[n("v-list",t._l(t.metricOptions,function(e,r){return n("v-list-tile",{key:r,on:{click:function(e){t.metricIndex=r}}},[n("v-list-tile-title",[t._v(t._s(e.name))])],1)}),1)],1)],1):t._e()],1),n("v-menu",[n("v-btn",{attrs:{slot:"activator",icon:"",small:"",flat:""},slot:"activator"},[n("v-icon",[t._v("more_vert")])],1),n("v-list",[t.instance.running?n("v-list-tile",{on:{click:t.stop}},[t._v("Stop")]):n("v-list-tile",{on:{click:t.start}},[t._v("Start")]),n("v-list-tile",{on:{click:t.restart}},[t._v("Restart")])],1)],1),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticStyle:{float:"right"},attrs:{icon:"",small:"",flat:""},on:{click:function(e){return t.goToMetricView(t.instance.id)}}},r),[n("v-icon",[t._v("info")])],1)]}}],null,!0)},[n("span",[t._v("View Service Details")])]),n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.instance.name))]),n("v-spacer"),n("span",{staticClass:"font-weight-light"},[t._v(t._s(t.instance.stateName))])],1)],1)}}])})}),H=[],J=n("0484"),K=function(t){function e(){var t;return Object(h["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.metricIndex=0,t.metricOptions=J["d"],t.metricPoller=-1,t}return Object(g["a"])(e,t),Object(p["a"])(e,[{key:"mounted",value:function(){var t=this;this.metricPoller=setInterval(function(){return t.getMetrics()},5e3)}},{key:"beforeDestroy",value:function(){clearInterval(this.metricPoller)}},{key:"goToMetricView",value:function(t){this.$router.push({path:"/instances/".concat(t)})}},{key:"getMetrics",value:function(){this.$store.dispatch("getInstanceMetrics",this.instance.id)}},{key:"stop",value:function(){this.$store.dispatch("stopInstance",this.instance.id)}},{key:"restart",value:function(){this.$store.dispatch("restartInstance",this.instance.id)}},{key:"start",value:function(){this.$store.dispatch("startInstance",this.instance.id)}},{key:"metric",get:function(){return this.metricOptions[this.metricIndex]}}]),e}(k["c"]);b["a"]([Object(k["b"])()],K.prototype,"instance",void 0),K=b["a"]([k["a"]],K);var Y=K,G=Y,Q=(n("ce45"),n("b0af")),X=n("12b2"),Z=n("ce87"),tt=n("e449"),et=n("8dd9"),nt=Object(C["a"])(G,W,H,!1,null,null,null),rt=nt.exports;j()(nt,{VBtn:T["a"],VCard:Q["a"],VCardTitle:X["a"],VHover:Z["a"],VIcon:S["a"],VList:I["a"],VListTile:M["a"],VListTileTitle:E["b"],VMenu:tt["a"],VSheet:et["a"],VSpacer:L["a"],VTooltip:F["a"]});var at=function(t){function e(){var t;return Object(h["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.instancePoller=-1,t.searchFilter="",t}return Object(g["a"])(e,t),Object(p["a"])(e,[{key:"beforeDestroy",value:function(){clearInterval(this.instancePoller)}},{key:"mounted",value:function(){var t=this;this.$store.dispatch("fetchInstances"),this.instancePoller=setInterval(function(){return t.$store.dispatch("fetchInstances")},5e3)}},{key:"instances",get:function(){var t=this;return this.$store.getters.instances.filter(function(e){return e.name.toLowerCase().includes((t.searchFilter||"").toLowerCase())})}}]),e}(k["c"]);at=b["a"]([Object(k["a"])({components:{ServiceCard:rt}})],at);var it=at,st=it,ot=(n("b41a"),n("a523")),ct=n("0e8f"),ut=n("a722"),lt=n("490a"),dt=n("2677"),ft=Object(C["a"])(st,R,z,!1,null,null,null),ht=ft.exports;j()(ft,{VContainer:ot["a"],VFlex:ct["a"],VLayout:ut["a"],VProgressCircular:lt["a"],VTextField:dt["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",{staticClass:"heading",attrs:{"primary-title":""}},[n("h3",{staticClass:"headline heading"},[t._v("Amazon Dash")])]),n("v-card-text",{staticClass:"card-text"},[n("v-text-field",{staticClass:"username",attrs:{label:"Username","prepend-icon":"person",required:"",rules:[function(t){return!!t||"Username is required"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-text-field",{staticClass:"password",attrs:{label:"Password",type:t.passwordShow?"text":"password","prepend-icon":"lock","append-icon":t.passwordShow?"visibility_off":"visibility",required:"",rules:[function(t){return!!t||"Password is required"}]},on:{"click:append":function(e){t.passwordShow=!t.passwordShow}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-card-actions",{staticClass:"buttons"},[n("v-btn",{staticClass:"register-button",attrs:{to:"/register",flat:""}},[t._v("\n              Create Account\n            ")]),n("button",{staticClass:"google-button",attrs:{type:"button"},on:{click:function(e){return t.googleLogin()}}}),n("v-btn",{staticClass:"login-button",attrs:{type:"submit",color:"accent"}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},vt=[],mt=function(t){function e(){var t;return Object(h["a"])(this,e),t=Object(v["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.passwordShow=!1,t.valid=!1,t.username="",t.password="",t}return Object(g["a"])(e,t),Object(p["a"])(e,[{key:"login",value:function(){var t={email:this.username,password:this.password};this.$store.dispatch("login",t)}},{key:"googleLogin",value:function(){var t=this;this.$gAuth.signIn().then(function(e){var n=e.getBasicProfile().getEmail(),r=e.getId();t.$store.dispatch("googleLogin",{email:n,userId:r})}).catch(function(e){"popup_closed_by_user"!==e.error&&t.$store.dispatch("makeErrorMessage",{message:e.error})})}}]),e}(k["c"]);mt=b["a"]([k["a"]],mt);var gt=mt,bt=gt,kt=(n("206d"),n("99d9")),wt=n("4bd4"),yt=Object(C["a"])(bt,pt,vt,!1,null,null,null),_t=yt.exports;j()(yt,{VBtn:T["a"],VCard:Q["a"],VCardActions:kt["a"],VCardText:kt["b"],VCardTitle:X["a"],VContainer:ot["a"],VFlex:ct["a"],VForm:wt["a"],VLayout:ut["a"],VTextField:dt["a"]});var Ct=n("2f62"),Ot=n("bfa9"),jt=(n("6d67"),n("57e7"),n("7514"),n("ac6a"),n("f3e2"),n("28a5"),{0:"orange",16:"green",32:"orange",48:"red",64:"orange",80:"grey"}),xt=function(){function t(e){Object(h["a"])(this,t),this.id=e.id,this.name=e.name,this.state=e.state,this.metrics=[]}return Object(p["a"])(t,[{key:"update",value:function(t){this.name=t.name,this.state=t.state}},{key:"getMetric",value:function(t){var e="cpu"===t?100:1,n=this.metrics.find(function(e){return e.id===t});return n?n.data.map(function(t){return{value:t.value*e}}):[]}},{key:"getMetrics",value:function(t){var e=(t||"").toLowerCase();return this.metrics.filter(function(t){return t.id.toLowerCase().includes(e)||Object(J["b"])(t.id).toLowerCase().includes(e)})}},{key:"stateName",get:function(){return this.state&&this.state.Name.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" ")}},{key:"stateColour",get:function(){return this.state&&jt[this.state.Code]||"grey"}},{key:"running",get:function(){return 16===this.state.Code}}]),t}(),Tt=function t(e){Object(h["a"])(this,t),this.timestamp=e.timestamp,this.value=e.value},Vt=function t(e){Object(h["a"])(this,t),this.id=e.id,this.data=e.data.map(function(t){return new Tt(t)})},St={setToken:function(t,e){t.token=e},clearToken:function(t){t.token=null},setInstances:function(t,e){e.forEach(function(n){var r=t.instances.find(function(t){return t.id===n.id});r?(r.update(n),e.splice(e.indexOf(n,1))):t.instances.push(new xt(n))})},setInstanceMetrics:function(t,e){var n=t.instances.find(function(t){return t.id===e.instance_id});n&&(n.metrics=e.metrics)},setMetrics:function(t,e){e.metrics.length?t.metrics=e.metrics.map(function(t){return new Vt(t)}):t.metrics=[]},openSnackbar:function(t,e){var n=e.message,r=e.colour,a=e.timeout,i=void 0===a?3e3:a;t.snackbar.message=n,t.snackbar.colour=r,t.snackbar.timeout=i,t.snackbar.enabled=!0,setTimeout(function(){return t.snackbar.enabled=!1},i)}},It=St,Mt={token:function(t){return t.token},instances:function(t){return t.instances},metrics:function(t){return t.metrics},snackbar:function(t){return t.snackbar},authenticated:function(t){return!!t.token}},$t=Mt,Et=(n("6b54"),n("87b3"),{get:function(t,e){var n=t.getters,r=e.url;return window.axios.get(r,{headers:{Authorization:n.token}}).catch(function(t){throw t.response?t.response.data:t.toString()}).then(function(t){return t.data})},post:function(t,e){var n=t.getters,r=e.url,a=e.body;return window.axios.post(r,a,{headers:{Authorization:n.token}}).catch(function(t){throw t.response.data}).then(function(t){return t.data})},checkAuth:function(t){var e=t.dispatch,n=t.commit;return e("get",{url:"authenticated"}).then(function(t){return!!t.result||(e("makeErrorMessage",{message:"You have been logged out by the server. Please log in again"}),n("clearToken"),Bt.push({name:"login"}),!1)}).catch(function(t){e("makeErrorMessage",{message:t})})},login:function(t,e){var n=t.dispatch,r=t.commit;n("post",{url:"login",body:e}).then(function(t){r("setToken",t.token),Bt.push({name:"home"})}).catch(function(t){return n("makeErrorMessage",{message:t})})},logout:function(t){var e=t.commit;e("setToken",null),Bt.push({name:"login"})},register:function(t,e){t.commit;var n=t.dispatch;n("post",{url:"register",body:e}).then(function(t){n("login",e)}).catch(function(t){return n("makeErrorMessage",{message:t})})},googleRegister:function(t,e){var n=t.dispatch,r=t.commit;n("post",{url:"register/google",body:e}).then(function(t){r("setToken",t.token),Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},googleLogin:function(t,e){var n=t.dispatch,r=t.commit;n("post",{url:"login/google",body:e}).then(function(t){r("setToken",t.token),Bt.push("/")}).catch(function(t){return n("makeErrorMessage",{message:t})})},fetchInstances:function(t){var e=t.dispatch,n=t.commit;t.getters;e("checkAuth").then(function(t){t&&e("get",{url:"instances"}).then(function(t){n("setInstances",t)}).catch(function(t){e("makeErrorMessage",{message:"Error fetching instances: ".concat(t)})})})},getInstanceMetrics:function(t,e){var n=t.dispatch,r=t.commit;n("checkAuth"),n("get",{url:"instances/".concat(e,"/metrics")}).then(function(t){r("setInstanceMetrics",t)})},stopInstance:function(t,e){var n=t.dispatch,r=t.getters;n("checkAuth");var a=r.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/stop")}).then(function(t){n("openSnackbar",{message:"Successfully stopped ".concat(a.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},restartInstance:function(t,e){var n=t.dispatch,r=t.getters;n("checkAuth");var a=r.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/restart")}).then(function(t){n("openSnackbar",{message:"Successfully restarted ".concat(a.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},startInstance:function(t,e){var n=t.dispatch,r=t.getters;n("checkAuth");var a=r.instances.find(function(t){return t.id===e});n("get",{url:"instances/".concat(e,"/start")}).then(function(t){n("openSnackbar",{message:"Successfully started ".concat(a.name),colour:"green"})}).catch(function(t){n("makeErrorMessage",{message:t})})},openSnackbar:function(t,e){var n=t.commit;n("openSnackbar",e)},makeErrorMessage:function(t,e){var n=t.dispatch,r=e.message,a=e.timeout;n("openSnackbar",{message:r,colour:"red",timeout:a})},fetchMetrics:function(t,e){var n=t.dispatch,r=t.commit;t.getters;n("checkAuth"),n("get",{url:"instances/".concat(e,"/metrics")}).then(function(t){r("setMetrics",t)})}}),Pt=Et;r["default"].use(Ct["a"]);var At=new Ot["a"]({storage:window.localStorage,reducer:function(t){return{token:t.token}}}),Lt=new Ct["a"].Store({state:{token:null,instances:[],metrics:[],bus:new r["default"]({}),snackbar:{enabled:!1,message:"",colour:"red",timeout:3e3}},mutations:It,getters:$t,actions:Pt,plugins:[At.plugin]}),Dt=Lt;r["default"].use(q["a"]);var Nt=function(t,e,n){Dt.getters.authenticated?n():n("/login")},Ft=function(t,e,n){Dt.getters.authenticated?n("/"):n()},Bt=new q["a"]({routes:[{path:"/",name:"home",component:ht,beforeEnter:Nt},{path:"/login",name:"login",component:_t,beforeEnter:Ft},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))},beforeEnter:Ft},{path:"/instances/:instanceId",name:"metrics",component:function(){return n.e("metrics").then(n.bind(null,"79cd"))},props:!0,beforeEnter:Nt}]}),Ut=n("9483");Object(Ut["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d5e8"),n("d1e7"),n("5363");var qt=n("bb71"),Rt=n("fcf4");n("da64");r["default"].use(qt["a"],{iconfont:"mdi",theme:{primary:Rt["a"].teal,accent:Rt["a"].pink,warn:Rt["a"].red}});var zt=n("c9bf"),Wt={clientId:"167278001228-mrqvkm3ngt1lsct9fufu86vg29du0l7h.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};r["default"].use(zt["a"],Wt),r["default"].config.productionTip=!1,new r["default"]({router:Bt,store:Dt,render:function(t){return t(U)}}).$mount("#app")},ce45:function(t,e,n){"use strict";var r=n("c079"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1a212299.js.map