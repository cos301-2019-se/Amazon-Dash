(function(e){function t(t){for(var r,a,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},s=[];function o(e){return c.p+"static/js/"+({register:"register"}[e]||e)+"."+{register:"4e6c340b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={register:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="static/css/"+({register:"register"}[e]||e)+"."+{register:"37db9741"}[e]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"05ae":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=(n("58b2"),{apiUrl:"http://localhost:5000/api"}),i=n("bc3a"),s=n.n(i),o={baseURL:a.apiUrl},c=s.a.create(o);c.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),c.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var u={install:function(e){e.$axios=c}};u.install=function(e){e.$axios=c,window.axios=c,Object.defineProperties(e.prototype,{$axios:{get:function(){return c}}})},r["default"].use(u);var l=n("bf1a");r["default"].use(l["a"]);var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",[e._v("Amazon Dash")])])],1),n("v-content",[n("router-view")],1),n("v-snackbar",{attrs:{top:"",timeout:e.snackbar.timeout,color:e.snackbar.colour},model:{value:e.snackbar.enabled,callback:function(t){e.$set(e.snackbar,"enabled",t)},expression:"snackbar.enabled"}},[e._v("\n    "+e._s(e.snackbar.message)+"\n  ")])],1)},f=[],p=n("d225"),h=n("b0b4"),v=n("308d"),m=n("6bb5"),g=n("4e2b"),b=n("9ab4"),k=n("60a3"),y=function(e){function t(){return Object(p["a"])(this,t),Object(v["a"])(this,Object(m["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"snackbar",get:function(){return this.$store.getters.snackbar}}]),t}(k["c"]);y=b["a"]([k["a"]],y);var w=y,_=w,O=n("2877"),j=n("6544"),x=n.n(j),S=n("7496"),C=n("549c"),V=n("2db4"),P=n("71d9"),I=n("2a7f"),M=Object(O["a"])(_,d,f,!1,null,null,null),T=M.exports;x()(M,{VApp:S["a"],VContent:C["a"],VSnackbar:V["a"],VToolbar:P["a"],VToolbarTitle:I["a"]});var E=n("8c4f"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":"",fluid:"","fill-height":""}},[n("v-layout",{attrs:{row:"","justify-center":""}},e._l(e.instances,function(e){return n("v-flex",{key:e.id,attrs:{xs12:"",md6:"",lg4:""}},[n("ServiceCard",{attrs:{instance:e}})],1)}),1)],1)},$=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return n("v-card",{staticClass:"mx-auto",class:"elevation-"+(r?12:2)},[n("v-sheet",{attrs:{color:e.instance.stateColour,elevation:"12",height:"200px"}},[e.instance.getMetric(e.metric.id).length?n("la-cartesian",{attrs:{data:e.instance.getMetric(e.metric.id),height:200,autoresize:"",bound:e.metric.bound}},[n("la-line",{attrs:{animated:"",curve:"",color:"white",prop:"value"}}),n("la-y-axis",{attrs:{color:"white",nbTicks:5}}),n("la-tooltip")],1):n("div",{staticClass:"loading-box"},[e._v("\n        Loading Metrics...\n      ")]),e.instance.getMetric(e.metric.id).length?n("div",{staticClass:"metric-label"},[n("span",[e._v(e._s(e.metric.name)+" ("+e._s(e.metric.unit)+")")]),n("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:""}},r),[n("v-icon",[e._v("arrow_drop_down")])],1)]}}],null,!0)},[n("v-list",e._l(e.metricOptions,function(t,r){return n("v-list-tile",{key:r,on:{click:function(t){e.metricIndex=r}}},[n("v-list-tile-title",[e._v(e._s(t.name))])],1)}),1)],1)],1):e._e()],1),n("v-menu",[n("v-btn",{attrs:{slot:"activator",icon:"",small:"",flat:""},slot:"activator"},[n("v-icon",[e._v("more_vert")])],1),n("v-list",[e.instance.running?n("v-list-tile",{on:{click:e.stop}},[e._v("Stop")]):n("v-list-tile",{on:{click:e.start}},[e._v("Start")]),n("v-list-tile",{on:{click:e.restart}},[e._v("Restart")])],1)],1),n("v-btn",{staticStyle:{float:"right"},attrs:{icon:"",small:"",flat:""}},[n("v-icon",[e._v("info")])],1),n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.instance.name))]),n("v-spacer"),n("span",{staticClass:"font-weight-light"},[e._v(e._s(e.instance.stateName))])],1)],1)}}])})},L=[],D=[function(e){return Math.floor(e)},function(e){return Math.ceil(e)}],B=[{id:"cpu",name:"CPU Utilization",unit:"Percentage",bound:[0,100]},{id:"netin",name:"Network In",unit:"Bytes",bound:D},{id:"netout",name:"Network Out",unit:"Bytes",bound:D},{id:"netpacketin",name:"Network Packets In",unit:"Packets",bound:D},{id:"netpacketout",name:"Network Packets Out",unit:"Packets",bound:D},{id:"diskread",name:"Disk Read",unit:"Bytes",bound:D},{id:"diskwrite",name:"Disk Write",unit:"Bytes",bound:D},{id:"diskreadops",name:"Disk Read Ops",unit:"Operations",bound:D},{id:"diskwriteops",name:"Disk Write Ops",unit:"Operations",bound:D}],U=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(m["a"])(t).apply(this,arguments)),e.metricIndex=0,e.metricOptions=B,e.metricPoller=-1,e}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"mounted",value:function(){var e=this;this.metricPoller=setInterval(function(){return e.getMetrics()},5e3)}},{key:"beforeDestroy",value:function(){clearInterval(this.metricPoller)}},{key:"getMetrics",value:function(){this.$store.dispatch("getInstanceMetrics",this.instance.id)}},{key:"stop",value:function(){this.$store.dispatch("stopInstance",this.instance.id)}},{key:"restart",value:function(){this.$store.dispatch("restartInstance",this.instance.id)}},{key:"start",value:function(){this.$store.dispatch("startInstance",this.instance.id)}},{key:"metric",get:function(){return this.metricOptions[this.metricIndex]}}]),t}(k["c"]);b["a"]([Object(k["b"])()],U.prototype,"instance",void 0),U=b["a"]([k["a"]],U);var q=U,F=q,z=(n("ce45"),n("8336")),R=n("b0af"),H=n("12b2"),J=n("ce87"),W=n("132d"),K=n("8860"),Y=n("ba95"),G=n("5d23"),Q=n("e449"),X=n("8dd9"),Z=n("9910"),ee=Object(O["a"])(F,N,L,!1,null,null,null),te=ee.exports;x()(ee,{VBtn:z["a"],VCard:R["a"],VCardTitle:H["a"],VHover:J["a"],VIcon:W["a"],VList:K["a"],VListTile:Y["a"],VListTileTitle:G["a"],VMenu:Q["a"],VSheet:X["a"],VSpacer:Z["a"]});var ne=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(m["a"])(t).apply(this,arguments)),e.instancePoller=-1,e}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"mounted",value:function(){var e=this;this.$store.dispatch("fetchInstances"),this.instancePoller=setInterval(function(){return e.$store.dispatch("fetchInstances")},5e3)}},{key:"beforeDestroy",value:function(){clearInterval(this.instancePoller)}},{key:"instances",get:function(){return this.$store.getters.instances}}]),t}(k["c"]);ne=b["a"]([Object(k["a"])({components:{ServiceCard:te}})],ne);var re=ne,ae=re,ie=n("a523"),se=n("0e8f"),oe=n("a722"),ce=Object(O["a"])(ae,A,$,!1,null,null,null),ue=ce.exports;x()(ce,{VContainer:ie["a"],VFlex:se["a"],VLayout:oe["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",[n("v-layout",{attrs:{"justify-center":"",row:""}},[n("v-flex",{attrs:{xs4:"",md2:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v("Amazon Dash")])])])],1)],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card-text",[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticClass:"username",attrs:{label:"Username","prepend-icon":"person",required:"",rules:[function(e){return!!e||"Username is required"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{staticClass:"password",attrs:{label:"Password",type:e.passwordShow?"text":"password","prepend-icon":"lock","append-icon":e.passwordShow?"visibility_off":"visibility",required:"",rules:[function(e){return!!e||"Password is required"}]},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{type:"submit"}},[e._v("Login")]),n("v-subheader",{staticClass:"pa-0"},[e._v("Create a new account?\n                        "),n("v-btn",{on:{click:function(t){return e.$router.push("/register")}}},[e._v("\n                              Create account\n                          ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},de=[],fe=function(e){function t(){var e;return Object(p["a"])(this,t),e=Object(v["a"])(this,Object(m["a"])(t).apply(this,arguments)),e.passwordShow=!1,e.valid=!1,e.username="",e.password="",e}return Object(g["a"])(t,e),Object(h["a"])(t,[{key:"login",value:function(){var e={email:this.username,password:this.password};this.$store.dispatch("login",e)}}]),t}(k["c"]);fe=b["a"]([k["a"]],fe);var pe=fe,he=pe,ve=n("99d9"),me=n("4bd4"),ge=n("e0c7"),be=n("2677"),ke=Object(O["a"])(he,le,de,!1,null,null,null),ye=ke.exports;x()(ke,{VBtn:z["a"],VCard:R["a"],VCardText:ve["b"],VCardTitle:H["a"],VContainer:ie["a"],VFlex:se["a"],VForm:me["a"],VLayout:oe["a"],VSubheader:ge["a"],VTextField:be["a"]});var we=n("2f62"),_e=n("bfa9"),Oe=(n("57e7"),n("7514"),n("ac6a"),n("f3e2"),n("28a5"),n("6d67"),n("7f7f"),{0:"orange",16:"green",32:"orange",48:"red",64:"orange",80:"grey"}),je=function(){function e(t){Object(p["a"])(this,e),this.id=t.id,this.name=t.name,this.state=t.state,this.metrics=[]}return Object(h["a"])(e,[{key:"update",value:function(e){this.name=e.name,this.state=e.state}},{key:"getMetric",value:function(e){var t="cpu"===e?100:1,n=this.metrics.find(function(t){return t.id===e});return n?n.data.map(function(e){return{value:e.value*t}}):[]}},{key:"stateName",get:function(){return this.state&&this.state.Name.split("-").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}},{key:"stateColour",get:function(){return this.state&&Oe[this.state.Code]||"grey"}},{key:"running",get:function(){return 16===this.state.Code}}]),e}(),xe={setToken:function(e,t){e.token=t},clearToken:function(e){e.token=null},setInstances:function(e,t){t.forEach(function(n){var r=e.instances.find(function(e){return e.id===n.id});r?(r.update(n),t.splice(t.indexOf(n,1))):e.instances.push(new je(n))})},setInstanceMetrics:function(e,t){var n=e.instances.find(function(e){return e.id===t.instance_id});n&&(n.metrics=t.metrics)},openSnackbar:function(e,t){var n=t.message,r=t.colour,a=t.timeout,i=void 0===a?3e3:a;e.snackbar.message=n,e.snackbar.colour=r,e.snackbar.timeout=i,e.snackbar.enabled=!0,setTimeout(function(){return e.snackbar.enabled=!1},i)}},Se=xe,Ce={token:function(e){return e.token},instances:function(e){return e.instances},snackbar:function(e){return e.snackbar}},Ve=Ce,Pe=(n("6b54"),n("87b3"),{get:function(e,t){var n=e.getters,r=t.url;return window.axios.get(r,{headers:{Authorization:n.token}}).catch(function(e){throw e.response?e.response.data:e.toString()}).then(function(e){return e.data})},post:function(e,t){var n=e.getters,r=t.url,a=t.body;return window.axios.post(r,a,{headers:{Authorization:n.token}}).catch(function(e){throw e.response.data}).then(function(e){return e.data})},checkAuth:function(e){var t=e.dispatch,n=e.commit;return t("get",{url:"authenticated"}).then(function(e){return!!e.result||(t("makeErrorMessage",{message:"You have been logged out by the server. Please log in again"}),n("clearToken"),$e.push({name:"login"}),!1)}).catch(function(e){t("makeErrorMessage",{message:e})})},login:function(e,t){var n=e.dispatch,r=e.commit;n("post",{url:"login",body:t}).then(function(e){r("setToken",e.token),$e.push({name:"home"})}).catch(function(e){return n("makeErrorMessage",{message:e})})},register:function(e,t){e.commit;var n=e.dispatch;n("post",{url:"register",body:t}).then(function(e){n("login",t)}).catch(function(e){return n("makeErrorMessage",{message:e})})},fetchInstances:function(e){var t=e.dispatch,n=e.commit;e.getters;t("checkAuth").then(function(e){e&&t("get",{url:"instances"}).then(function(e){n("setInstances",e)}).catch(function(e){t("makeErrorMessage",{message:"Error fetching instances: ".concat(e)})})})},getInstanceMetrics:function(e,t){var n=e.dispatch,r=e.commit;n("checkAuth"),n("get",{url:"instances/".concat(t,"/metrics")}).then(function(e){r("setInstanceMetrics",e)})},stopInstance:function(e,t){var n=e.dispatch,r=e.getters;n("checkAuth");var a=r.instances.find(function(e){return e.id===t});n("get",{url:"instances/".concat(t,"/stop")}).then(function(e){n("openSnackbar",{message:"Successfully stopped ".concat(a.name),colour:"green"})})},restartInstance:function(e,t){var n=e.dispatch,r=e.getters;n("checkAuth");var a=r.instances.find(function(e){return e.id===t});n("get",{url:"instances/".concat(t,"/restart")}).then(function(e){n("openSnackbar",{message:"Successfully restarted ".concat(a.name),colour:"green"})})},startInstance:function(e,t){var n=e.dispatch,r=e.getters;n("checkAuth");var a=r.instances.find(function(e){return e.id===t});n("get",{url:"instances/".concat(t,"/start")}).then(function(e){n("openSnackbar",{message:"Successfully started ".concat(a.name),colour:"green"})})},openSnackbar:function(e,t){var n=e.commit;n("openSnackbar",t)},makeErrorMessage:function(e,t){var n=e.dispatch,r=t.message,a=t.timeout;n("openSnackbar",{message:r,colour:"red",timeout:a})}}),Ie=Pe;r["default"].use(we["a"]);var Me=new _e["a"]({storage:window.localStorage,reducer:function(e){return{token:e.token}}}),Te=new we["a"].Store({state:{token:null,instances:[],bus:new r["default"]({}),snackbar:{enabled:!1,message:"",colour:"red",timeout:3e3}},mutations:Se,getters:Ve,actions:Ie,plugins:[Me.plugin]}),Ee=Te;r["default"].use(E["a"]);var Ae=function(e,t,n){Ee.getters.token?n():n("/login")},$e=new E["a"]({routes:[{path:"/",name:"home",component:ue,beforeEnter:Ae},{path:"/login",name:"login",component:ye},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}}]}),Ne=n("9483");Object(Ne["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d5e8"),n("d1e7");var Le=n("bb71");n("da64");r["default"].use(Le["a"],{iconfont:"md"}),r["default"].config.productionTip=!1,new r["default"]({router:$e,store:Ee,render:function(e){return e(T)}}).$mount("#app")},ce45:function(e,t,n){"use strict";var r=n("05ae"),a=n.n(r);a.a}});
//# sourceMappingURL=app.48afc3eb.js.map