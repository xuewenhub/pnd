(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3980955e"],{"14de":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-main",[i("div",{staticClass:"main-button"},[i("div",{staticClass:"upload",on:{click:e.triggerFileUpload}},[i("el-button",{attrs:{type:"primary"}},[i("i",{staticClass:"el-icon-upload"}),i("span",[e._v("上传文件")])]),i("input",{ref:"fileInput",staticClass:"upload-input",attrs:{type:"file",name:"file",multiple:""},on:{change:e.dealWithFileUpload}})],1),i("el-button",{attrs:{plain:""},on:{click:e.createFolder}},[i("i",{staticClass:"el-icon-document"}),i("span",[e._v("新建文件夹")])])],1),i("div",{staticClass:"content"},[i("Breadcrumb"),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","default-sort":{prop:"fileName",order:"descending"}}},[i("el-table-column",{attrs:{label:"文件名",prop:"name",sortable:"","min-width":"54"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("FileIcon",{attrs:{type:t.row.type}}),"folder"===t.row.type?i("a",{staticClass:"file-name",on:{click:function(i){return e.getFileList(t.row.id,t.row.name)}}},[e._v("\n                        "+e._s(t.row.name)+"\n                    ")]):"video"===t.row.type?i("a",{staticClass:"file-name",attrs:{target:"_blank"},on:{click:function(i){return e.openVideo(t.row.resourceId,t.row.name)}}},[e._v("\n                        "+e._s(t.row.name)+"\n                    ")]):i("a",{staticClass:"file-name",attrs:{href:e.baseURL+"v1/rs/"+t.row.resourceId+"?fileName="+t.row.name}},[e._v("\n                        "+e._s(t.row.name)+"\n                    ")])]}}])}),i("el-table-column",{attrs:{prop:"size",label:"大小",formatter:e.formatterSize,"min-width":"22"}}),i("el-table-column",{attrs:{prop:"gmtModified",label:"修改日期",sortable:"","min-width":"22",formatter:e.formatterTime,"show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"操作","min-width":"22"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("FileOperation",{attrs:{scope:t},on:{flush:e.flushAccordingToLevelList}})]}}])})],1)],1),e.$store.state.fileTreeDialogVisible?i("FileTree",{on:{flush:e.flushAccordingToLevelList}}):e._e()],1)},o=[],r=(i("b5ad"),i("2db2"),i("612f"),i("3a23"),i("ea65"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-icon",class:[e.type]})}),s=[],a={props:{type:{validator:function(e){return-1!==["default","folder","pdf","compress_file","web","video","audio","picture","doc","txt","torrent","ppt","code"].indexOf(e)}}}},l=a,c=(i("ab21"),i("17cc")),u=Object(c["a"])(l,r,s,!1,null,"2ac62f06",null),f=u.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navigation"},[e.levelList.length>1?i("div",{staticClass:"navigation-prefix"},[i("span",{staticClass:"go-back",on:{click:e.goBack}},[e._v("返回上一级")]),i("span",{staticClass:"navigation-separator"},[e._v("|")])]):e._e(),i("div",{staticClass:"breadcrumb"},e._l(e.levelList,function(t,n){return i("div",{key:n,staticClass:"breadcrumb-item"},[e.levelList.length-1!==n?i("span",{staticClass:"breadcrumb-item-val",on:{click:function(t){return e.forwardTo(n)}}},[e._v(e._s(t.name))]):i("span",{staticClass:"breadcrumb-item-val"},[e._v(e._s(t.name))]),e.levelList.length-1!==n?i("span",{staticClass:"breadcrumb-sparator"},[e._v("/")]):e._e()])}),0)])},h=[],p={computed:{levelList:function(){return this.$store.state.levelList}},methods:{forwardTo:function(e){this.$store.commit("spliceLevelList",e)},goBack:function(){this.$store.commit("spliceLevelList",this.levelList.length-2)}}},m=p,v=(i("5f49"),Object(c["a"])(m,d,h,!1,null,"30ecfdd4",null)),g=v.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dropdown",[i("span",{staticClass:"el-dropdown-link"},[i("i",{staticClass:"el-icon-more operation"})]),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{nativeOn:{click:function(t){return e.move(t)}}},[e._v("移动到")]),"folder"!==e.scope.row.type?i("el-dropdown-item",{nativeOn:{click:function(t){return e.copy(t)}}},[e._v("复制到")]):e._e(),i("el-dropdown-item",{nativeOn:{click:function(t){return e.rename(t)}}},[e._v("重命名")]),"folder"!==e.scope.row.type?i("el-dropdown-item",{nativeOn:{click:function(t){return e.download(t)}}},[e._v("\n            下载\n            "),i("a",{ref:"resourceDown",staticStyle:{display:"none"},attrs:{download:"",href:e.baseURL+"/v1/rs/"+e.scope.row.resourceId+"?fileName="+e.scope.row.name}},[e._v("下载")])]):e._e(),i("el-dropdown-item",{nativeOn:{click:function(t){return e.deleteResource(t)}}},[e._v("删除")])],1)],1)},L=[],w=i("6d5a"),y=i("6c6e"),T={props:["scope"],data:function(){return{baseURL:w["a"]}},methods:{move:function(){this.$store.commit("openFileTreeDialog",{title:"["+this.scope.row.name+"] 移动到",id:this.scope.row.id,type:"move"})},copy:function(){this.$store.commit("openFileTreeDialog",{title:"["+this.scope.row.name+"] 复制到",id:this.scope.row.id,type:"copy"})},rename:function(){var e=this;this.$prompt("请输入新的文件名","重新命名",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:this.scope.row.name}).then(function(t){var i=t.value;Object(y["l"])(e.scope.row.id,i).then(function(){e.$emit("flush")})}).catch(function(){})},download:function(){var e=document.createElement("a");e.href=this.baseURL+"v1/rs/"+this.scope.row.resourceId+"?fileName="+this.scope.row.name,e.click()},deleteResource:function(){var e=this;this.$confirm("是否确定要删除该文件？","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(y["e"])(e.scope.row.id).then(function(){e.$emit("flush")})}).catch(function(){})}}},_=T,$=(i("983a"),Object(c["a"])(_,b,L,!1,null,"2c6dfaf8",null)),k=$.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:e.$store.state.fileTreeInfo.title,visible:e.$store.state.fileTreeDialogVisible},on:{"update:visible":function(t){return e.$set(e.$store.state,"fileTreeDialogVisible",t)}}},[i("el-tree",{ref:"fileTree",attrs:{props:e.defaultProps,load:e.loadNode,"node-key":"id","empty-text":"没有文件夹",lazy:"","check-strictly":"","highlight-current":"","show-checkbox":""}}),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){return e.$store.commit("closeFileTreeDialog")}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.operateNode}},[e._v("确 定")])],1)],1)},C=[],x={data:function(){return{defaultProps:{label:"name"}}},methods:{loadNode:function(e,t){var i=this;0===e.level?t([{id:0,name:"全部文件"}]):Object(y["g"])(e.data.id).then(function(e){"move"===i.$store.state.fileTreeInfo.type?t(e.data.filter(function(e){return e.id!==i.$store.state.fileTreeInfo.id})):t(e.data)})},operateNode:function(){"move"===this.$store.state.fileTreeInfo.type?this.moveNode():"copy"===this.$store.state.fileTreeInfo.type&&this.copyNode()},moveNode:function(){var e=this,t=this.$refs.fileTree.getCheckedKeys();1!==t.length?this.$message({message:"请选择一个将要移动的目标文件夹",type:"warning",duration:3e3}):Object(y["j"])(this.$store.state.fileTreeInfo.id,t[0]).then(function(){e.$emit("flush"),e.$store.commit("closeFileTreeDialog")})},copyNode:function(){var e=this,t=this.$refs.fileTree.getCheckedKeys();0===t.length?this.$message({message:"请选择将要复制到的目标文件夹",type:"warning",duration:3e3}):Object(y["b"])(this.$store.state.fileTreeInfo.id,t).then(function(){e.$message({message:"复制成功",type:"success",duration:3e3}),e.$store.commit("closeFileTreeDialog")})}}},F=x,I=Object(c["a"])(F,S,C,!1,null,null,null),O=I.exports,D={components:{FileIcon:f,Breadcrumb:g,FileOperation:k,FileTree:O},data:function(){return{tableData:[],fileTreeDialogVisible:!1,dialogVisible:"设置",baseURL:w["a"]}},computed:{levelList:function(){return this.$store.state.levelList}},watch:{levelList:function(){this.flushAccordingToLevelList()},"$store.state.flushFileListEvent":function(){this.flushAccordingToLevelList()}},methods:{createFolder:function(){var e=this,t=this.levelList[this.levelList.length-1].parentId;this.$prompt("请输入文件夹名","新建文件夹",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(i){var n=i.value;Object(y["d"])(t,n).then(function(){e.flushAccordingToLevelList()})}).catch(function(){})},getFileList:function(e,t){var i=this;Object(y["f"])(e).then(function(n){i.tableData=n.data;var o=i.levelList.length;0!==o&&i.levelList[o-1].parentId===e||i.$store.commit("pushLevelList",{parentId:e,name:t})})},openVideo:function(e,t){var i=this.baseURL+"v1/rs/"+e+"?fileName="+t,n=["mp4","ogg","mkv"],o=t.split("."),r=o[o.length-1];if(n.some(function(e){return e===r})){var s=window.open(),a="<head><title>视频播放</title></head><body style='background:black'><div style='width:80%; height: 80%; margin:60px auto;'><video style='display:inline-block;margin: 0 auto' controls height='80%' width='80%' autoplay src='"+i+"'></video></div></body>";s.document.write(a)}else this.$confirm("该视频浏览器不支持播放，是否下载？","下载",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=document.createElement("a");e.href=i,e.click()}).catch(function(){})},flushAccordingToLevelList:function(){var e=this.levelList[this.levelList.length-1];this.getFileList(e.parentId,e.name)},formatterTime:function(e){return Object(w["c"])(new Date(e.gmtModified))},formatterSize:function(e){return"folder"===e.type?"-":Object(w["b"])(e.size)},triggerFileUpload:function(){this.$refs.fileInput.click()},dealWithFileUpload:function(e){var t=this;this.$store.commit("clearFileUploadList");var i=e.target.files,n=this.levelList[this.levelList.length-1];Array.from(i).forEach(function(e){var i={targetFolderId:n.parentId,targetFolderName:n.name,file:e};t.$store.commit("addUploadFile",i),t.$store.commit("operationFileUploadWindow","open")})}},created:function(){0===this.levelList.length?this.getFileList(0,"全部文件"):this.flushAccordingToLevelList()}},N=D,A=(i("e7f3"),Object(c["a"])(N,n,o,!1,null,"51160b6b",null));t["default"]=A.exports},"2db2":function(e,t,i){"use strict";var n=i("0709"),o=i("2d2c"),r=i("aa91"),s=i("181f"),a=i("577d"),l=i("33f2"),c=i("f418"),u=i("a5de");o(o.S+o.F*!i("fbd3")(function(e){Array.from(e)}),"Array",{from:function(e){var t,i,o,f,d=r(e),h="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,g=0,b=u(d);if(v&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==b||h==Array&&a(b))for(t=l(d.length),i=new h(t);t>g;g++)c(i,g,v?m(d[g],g):d[g]);else for(f=b.call(d),i=new h;!(o=f.next()).done;g++)c(i,g,v?s(f,m,[o.value,g],!0):o.value);return i.length=g,i}})},"578c":function(e,t,i){},"5f49":function(e,t,i){"use strict";var n=i("788d"),o=i.n(n);o.a},"612f":function(e,t,i){for(var n=i("5c07"),o=i("d753"),r=i("7f00"),s=i("4839"),a=i("c84b"),l=i("f03e"),c=i("f3ae"),u=c("iterator"),f=c("toStringTag"),d=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=o(h),m=0;m<p.length;m++){var v,g=p[m],b=h[g],L=s[g],w=L&&L.prototype;if(w&&(w[u]||a(w,u,d),w[f]||a(w,f,g),l[g]=d,b))for(v in n)w[v]||r(w,v,n[v],!0)}},"788d":function(e,t,i){},8870:function(e,t,i){},"983a":function(e,t,i){"use strict";var n=i("c4df"),o=i.n(n);o.a},ab21:function(e,t,i){"use strict";var n=i("578c"),o=i.n(n);o.a},b5ad:function(e,t,i){"use strict";var n=i("caa4")(!0);i("1145")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,i=this._i;return i>=t.length?{value:void 0,done:!0}:(e=n(t,i),this._i+=e.length,{value:e,done:!1})})},c4df:function(e,t,i){},e7f3:function(e,t,i){"use strict";var n=i("8870"),o=i.n(n);o.a},ea65:function(e,t,i){"use strict";var n=i("d635"),o=i("4d65"),r=i("d4f6"),s=i("1ff3"),a=i("33f2"),l=i("b21e"),c=i("31d0"),u=i("201d"),f=Math.min,d=[].push,h="split",p="length",m="lastIndex",v=4294967295,g=!u(function(){RegExp(v,"y")});i("c5aa")("split",2,function(e,t,i,u){var b;return b="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(o,e,t);var r,s,a,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?v:t>>>0,g=new RegExp(e.source,u+"g");while(r=c.call(g,o)){if(s=g[m],s>f&&(l.push(o.slice(f,r.index)),r[p]>1&&r.index<o[p]&&d.apply(l,r.slice(1)),a=r[0][p],f=s,l[p]>=h))break;g[m]===r.index&&g[m]++}return f===o[p]?!a&&g.test("")||l.push(""):l.push(o.slice(f)),l[p]>h?l.slice(0,h):l}:"0"[h](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)}:i,[function(i,n){var o=e(this),r=void 0==i?void 0:i[t];return void 0!==r?r.call(i,o,n):b.call(String(o),i,n)},function(e,t){var n=u(b,e,this,t,b!==i);if(n.done)return n.value;var c=o(e),d=String(this),h=r(c,RegExp),p=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),L=new h(g?c:"^(?:"+c.source+")",m),w=void 0===t?v:t>>>0;if(0===w)return[];if(0===d.length)return null===l(L,d)?[d]:[];var y=0,T=0,_=[];while(T<d.length){L.lastIndex=g?T:0;var $,k=l(L,g?d:d.slice(T));if(null===k||($=f(a(L.lastIndex+(g?0:T)),d.length))===y)T=s(d,T,p);else{if(_.push(d.slice(y,T)),_.length===w)return _;for(var S=1;S<=k.length-1;S++)if(_.push(k[S]),_.length===w)return _;T=y=$}}return _.push(d.slice(y)),_}]})},f418:function(e,t,i){"use strict";var n=i("694f"),o=i("b915");e.exports=function(e,t,i){t in e?n.f(e,t,o(0,i)):e[t]=i}}}]);
//# sourceMappingURL=chunk-3980955e.94430ba8.js.map