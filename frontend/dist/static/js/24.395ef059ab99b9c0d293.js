webpackJsonp([24],{162:function(e,t,o){o(819);var a=o(71)(o(492),o(847),"data-v-652aecde",null);e.exports=a.exports},402:function(e,t,o){e.exports=o.p+"static/img/userphoto.6d73d26.jpg"},492:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tabPosition:"top",project_id:"",sysName:"自动化测试平台",collapsed:!1,sysUserName:"",sysUserAvatar:""}},methods:{handleselect:function(e,t){},onSubmit:function(){console.log("submit!")},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("token"),e.$router.push("/login")}).catch(function(){})},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("username");e&&(name=JSON.parse(e),this.sysUserName=name||""),this.project_id=this.$route.params.project_id}}},539:function(e,t,o){t=e.exports=o(155)(),t.push([e.i,".container[data-v-652aecde]{position:absolute;top:0;bottom:0;width:100%}.container .header[data-v-652aecde]{height:60px;line-height:60px;background:#20a0ff;color:#fff}.container .header .userinfo[data-v-652aecde]{text-align:right;padding-right:35px;float:right}.container .header .userinfo .userinfo-inner[data-v-652aecde]{cursor:pointer;color:#fff}.container .header .userinfo .userinfo-inner img[data-v-652aecde]{width:40px;height:40px;border-radius:20px;margin:10px 0 10px 10px;float:right}.container .header .logo[data-v-652aecde]{height:60px;font-size:22px;padding-left:20px;padding-right:20px;border-color:hsla(62,77%,76%,.3);border-right-width:1px;border-right-style:solid}.container .header .logo img[data-v-652aecde]{width:40px;float:left;margin:10px 10px 10px 18px}.container .header .logo .txt[data-v-652aecde]{color:#fff}.container .header .logo-width[data-v-652aecde]{width:230px}.container .header .logo-collapse-width[data-v-652aecde]{width:60px}.container .header .tools[data-v-652aecde]{padding:0 23px;width:14px;height:60px;line-height:60px;cursor:pointer}.container .title[data-v-652aecde]{width:200px;float:left;color:#475669;font-size:25px;margin:15px;margin-left:35px;margin-bottom:0;font-family:PingFang SC}",""])},819:function(e,t,o){var a=o(539);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(156)("4f80e8eb",a,!0)},847:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"#FFFFFF"},attrs:{to:"/projectList"}},[e._v(e._s(e.collapsed?"":e.sysName))])],1),e._v(" "),a("el-col",{staticClass:"userinfo",attrs:{span:4}},[a("el-dropdown",{attrs:{trigger:"hover"}},[a("span",{staticClass:"el-dropdown-link userinfo-inner"},[a("img",{attrs:{src:o(402)}}),e._v(" "+e._s(e.sysUserName))]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[[a("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,mode:"horizontal","unique-opened":""},on:{select:e.handleselect}},[e._l(e.$router.options.routes,function(t){return t.projectHidden?e._e():[e._l(t.children,function(t,o){return[t.leaf?a("el-menu-item",{key:t.path,attrs:{index:t.path}},[t.child?e._e():[a("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:t.name,params:{id:e.project_id}}}},[e._v(e._s(t.name))])],e._v(" "),t.child?[a("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:{name:t.children[0].name,params:{id:e.project_id}}}},[e._v(e._s(t.name))])]:e._e()],2):e._e(),e._v(" "),t.leaf?e._e():a("el-submenu",{attrs:{index:o+""}},[a("template",{slot:"title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return a("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t")])})],2)]})]})],2)],e._v(" "),a("strong",{staticClass:"title"},[e._v(e._s(e.$route.name))])],2),e._v(" "),a("el-col",{attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)},staticRenderFns:[]}}});