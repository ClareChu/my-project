webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App",created:function(){},methods:{}},a,!1,function(e){n("oYXr")},null,null).exports,i=n("/ocq"),r={name:"HelloWorld",data:function(){return{id:"",vvurl:"http://api.visaok.net/?url=https://www.iqiyi.com/v_19rqym70lc.html",msg:"Welcome to Your Vue.js App",isFull:!1}},created:function(){var e=this.$route.query.id;this.id=e,console.info("id",void 0==e),void 0!=e&&this.getData()},methods:{clickFull:function(){console.log("click"),this.isFull=!0},getData:function(){console.log("xxx"),this.$http("login/test/"+this.id,"get",{}).then(function(e){console.log(e)})}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("iframe",{class:this.isFull?"full":"",attrs:{id:"ifr",src:this.vvurl}})])},staticRenderFns:[]};var c=n("VU/8")(r,l,!1,function(e){n("p691")},"data-v-3932a46a",null).exports,u={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},d=n("VU/8")(null,u,!1,null,null,null).exports;o.a.use(i.a);var p=new i.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/index",name:"Index",component:d}]}),h=n("Dd8w"),v=n.n(h),g=n("d7EF"),f=n.n(g),m=n("mvHQ"),k=n.n(m),w=n("//Fk"),F=n.n(w),_=n("mtWM"),b=n.n(_),x={login:{getOauth:"/hidevopsio/hiadmin/oauth/url",oauthGetInfo:"/hidevopsio/hiadmin/oauth/code/",login:"/hidevopsio/hiadmin/login",test:"/appPlayWeb/"}},y="http://119.23.38.106/video";console.log(y),b.a.defaults.headers["Content-Type"]="application/json",b.a.interceptors.request.use(function(e){return e},function(e){return F.a.reject(e)}),b.a.interceptors.response.use(function(e){e&&200===e.status||console.log("网络错误");var t=e.data.ResultCode?1*e.data.ResultCode:1*e.data.returnCode;e.data.Message?e.data.Message:e.data.message;switch(t){case 1e3:case 2018:case 1002:return e.data;case 1003:console.log("数据错误");break;case 1004:console.log("服务器繁忙，请喝杯茶休息一会儿");break;case 1006:console.log("参数不全");break;case 1007:console.log("请求超时");break;case 1009:console.log("登陆状态已失效"),p.push("/Login")}return e.data},function(e){var t=JSON.parse(k()(e));if(401!=t.response.status)return t.code,F.a.reject(e);p.push("/Login")});var R=function(e,t,n){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var o=void 0;if(3==e.split("/").length){var a=e.split("/"),s=f()(a,3),i=s[0],r=s[1],l=s[2];o=x[i][r]+l}else if(5==e.split("/").length){var c=e.split("/"),u=f()(c,5),d=u[0],p=u[1],h=u[2],g=u[3],m=u[4];o=x[d][p]+h+"/"+g+"/"+m}else{var k=e.split("/"),w=f()(k,2),F=w[0],_=w[1];o=x[F][_]}o||console.log("api列表未发现此接口，请检查！");var R=v()({},n),W={baseURL:y,method:t,headers:{Authorization:"Bearer "+(sessionStorage.getItem("token")?sessionStorage.getItem("token"):"")},url:o,timeout:1e4,params:R,data:R};return"get"==t?delete W.data:delete W.params,b()(W)};o.a.config.productionTip=!1,o.a.prototype.$http=R,new o.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},oYXr:function(e,t){},p691:function(e,t){}},["NHnr"]);