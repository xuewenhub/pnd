(function(e){function t(t){for(var i,r,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)r=s[c],o[r]&&d.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={app:0},o={app:0},a=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-081d4dcc":"cdd366aa","chunk-2d0be6a0":"1ba48faf","chunk-3980955e":"94430ba8"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-081d4dcc":1,"chunk-3980955e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-081d4dcc":"1690b4ca","chunk-2d0be6a0":"31d6cfe0","chunk-3980955e":"55e5debb"}[e]+".css",o=l.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===i||c===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===i||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise(function(t,n){i=o[e]=[t,n]});t.push(i[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e),u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");a.type=i,a.request=r,n[1](a)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0147":function(e,t,n){},"034f":function(e,t,n){"use strict";var i=n("917f"),r=n.n(i);r.a},"34ad":function(e,t,n){"use strict";var i=n("0147"),r=n.n(i);r.a},"36b1":function(e,t,n){"use strict";var i=n("f759"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("5c07"),n("53da"),n("2556"),n("d0f8");var i=n("6e6d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),"close"!==e.$store.state.fileUploadComponentStatus?n("Upload"):e._e()],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"file-upload-layout",class:["open"===e.status?"open":"close"]},[n("div",{staticClass:"dialog-header",on:{click:function(t){return e.operationWindow("collapse")}}},[n("span",{staticClass:"dialog-header-title"},[e._v("文件上传")]),n("div",{staticClass:"dialog-control"},[n("span",{on:{click:function(t){return e.operationWindow("collapse")}}},[e._v("-")]),n("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.operationWindow("close")}}},[e._v("x")])])]),n("div",{staticClass:"dialog-body"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"360"}},[n("el-table-column",{attrs:{prop:"fileName",label:"文件名",width:"180"}}),n("el-table-column",{attrs:{prop:"size",label:"大小",formatter:e.formatterSize,width:"80"}}),n("el-table-column",{attrs:{prop:"targetFolderName",label:"上传目录"}}),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("FileUploadStatus",{attrs:{fileStatus:e.row.status,description:e.row.description}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["paused"===t.row.status?n("i",{staticClass:"el-icon-caret-right file-upload-operation",attrs:{title:"恢复上传"},on:{click:function(n){return e.resumeFileUpload(t.row.id)}}}):"uploading"===t.row.status?n("span",{staticClass:"file-upload-operation file-upload-suspend",attrs:{title:"暂停"},on:{click:function(n){return e.pauseFile(t.row.id)}}}):e._e(),n("i",{staticClass:"el-icon-close file-upload-operation",attrs:{title:"删除"},on:{click:function(n){return e.deleteFile(t.row.id)}}})]}}])})],1)],1)]),n("div",{staticClass:"file-upload-layout collapse-header",class:["collapse"===e.status?"collapse":"close"],on:{click:function(t){return e.operationWindow("open")}}},[n("div",{staticClass:"dialog-header"},[n("span",{staticClass:"dialog-header-title"},[e._v("文件上传")]),n("div",{staticClass:"dialog-control"},[n("span",{on:{click:function(t){return e.operationWindow("open")}}},[e._v("□")]),n("span",{on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.operationWindow("close")}}},[e._v("x")])])])])])},s=[],l=n("3556"),u=n("6d5a"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"file-status"},["success"===e.fileStatus?n("i",{staticClass:"el-icon-success",staticStyle:{color:"#3794ff"}}):"check"===e.fileStatus?n("span",[e._v("校验中...")]):"preupload"===e.fileStatus?n("span",[e._v("等待中...")]):"uploading"===e.fileStatus?n("span",[e._v(e._s(e.description))]):"paused"===e.fileStatus?n("span",[e._v("已暂停")]):n("span",[e._v(e._s(e.description))])])},d=[],f={props:{fileStatus:String,description:String}},p=f,h=(n("36b1"),n("17cc")),m=Object(h["a"])(p,c,d,!1,null,"8fbaab1e",null),v=m.exports,g=n("6c6e"),b=n("52c1"),y=(n("a1d1"),n("7415"),n("3a23"),n("962b")),F=n("78e7"),k=n("897d"),w=n.n(k),S=function(e,t){var n=1048576,i=Math.ceil(e.size/n),r=0,o="",a=new FileReader;function s(){var t=r*n,i=t+n>=e.size?e.size:t+n;a.readAsBinaryString(e.slice(t,i))}a.onload=function(e){r+=50,o+=w()(e.target.result),r<i?s():t(w()(o))},s()},I=function(e,t){return e=parseFloat(e),t=parseFloat(t),isNaN(e)||isNaN(t)?"-":t<=0?"0%":Math.round(e/t*1e4)/100+"%"};function U(){}var C=function(){function e(t,n,i,r,o){Object(y["a"])(this,e),this.maxConcurrentUploadNumber=t,this.chunkByteSize=n,this.clientId=i,this.id=0,this.originFileArr=r,this.successCallback=o||U}return Object(F["a"])(e,[{key:"getAndIncreateId",value:function(){return this.id++}},{key:"addNewFiles",value:function(e){for(var t in e){var n=e[t],i={id:this.getAndIncreateId(),fileName:n.file.name,status:"preupload",description:"等待中...",size:n.file.size,targetFolderName:n.targetFolderName,targetFolderId:n.targetFolderId,blob:n.file,completionBytes:0,resourceId:0};_(this.originFileArr,i)||this.originFileArr.push(i)}this.upload()}},{key:"go",value:function(e,t){var n=e.completionBytes+t.chunkByteSize;n>e.size&&(n=e.size);var i=e.blob.slice(e.completionBytes,n),r=new FileReader,o=new FormData;o.set("resourceId",e.resourceId),o.set("clientId",t.clientId),o.append("file",i),r.onloadend=function(n){n.target.readyState==FileReader.DONE&&Object(g["h"])(o).then(function(n){e.completionBytes=n.data.completeBytes,0!==n.data.code?(O(e),t.upload()):e.completionBytes===e.size?(j(e),t.successCallback(),t.upload()):(e.description=I(e.completionBytes,e.size),setTimeout(t.go,2,e,t))})},r.readAsBinaryString(i)}},{key:"upload0",value:function(e,t){"preupload"===e.status?A(e,function(n){Object(g["c"])({resourceId:n,name:e.fileName,parentId:e.targetFolderId}).then(function(){t.successCallback(),j(e),t.upload()})},function(n){Object(g["k"])(t.clientId,e.size,n,e.fileName,e.targetFolderId).then(function(n){e.resourceId=n.data.resourceId,L(e),t.go(e,t)})}):"resume"===e.status&&(L(e),t.go(e,t))}},{key:"upload",value:function(e){e=e||this;var t=e.maxConcurrentUploadNumber-x(e.originFileArr);if(t>0)for(var n=0;n<e.originFileArr.length&&t>0;n++){var i=e.originFileArr[n];"preupload"!==i.status&&"resume"!==i.status||(setTimeout(e.upload0,5,i,e),t--)}}},{key:"pause",value:function(e){var t=this.originFileArr.find(function(t){return t.id===e}),n=this;Object(g["a"])(this.clientId,t.resourceId,"pause").then(function(){O(t),n.upload()})}},{key:"resume",value:function(e){var t=this.originFileArr.find(function(t){return t.id===e}),n=this;Object(g["a"])(this.clientId,t.resourceId,"resume").then(function(){E(t),n.upload()})}},{key:"delete",value:function(e){var t=this.originFileArr.findIndex(function(t){return t.id===e});"uploading"===this.originFileArr[t].status&&this.pause(e);var n=this.originFileArr.slice(t+1);this.originFileArr.length=t,this.originFileArr.push.apply(this.originFileArr,n)}},{key:"pauseAll",value:function(){for(var e in this.originFileArr){var t=this.originFileArr[e];"uploading"===t.status&&this.pause(t.id)}}}]),e}();function _(e,t){for(var n in e){var i=e[n];if(i.fileName===t.fileName&&i.size===t.size&&i.targetFileId===t.targetFileId)return!0}return!1}function x(e){var t=0;for(var n in e){var i=e[n];"uploading"===i.status&&t++}return t}function A(e,t,n){N(e),S(e.blob,function(e){Object(g["m"])(e).then(function(i){i.data.exist?t(i.data.resourceId):n(e)})})}function j(e){e.status="success",e.description="上传成功"}function N(e){e.status="check",e.description="校验中..."}function O(e){e.status="paused",e.description="已中断"}function E(e){e.status="resume",e.description="等待中..."}function L(e){e.status="uploading",e.description="上传中..."}var T={components:{FileUploadStatus:v},data:function(){return{tableData:[],fileUploader:null}},computed:Object(l["a"])({},Object(b["b"])({status:function(e){return e.fileUploadComponentStatus}})),watch:{"$store.state.fileUploadList":function(e){this.fileUploader.addNewFiles(e)}},methods:{operationWindow:function(e){var t=this;if("close"===e){for(var n=0,i=0;i<this.tableData.length;i++)"success"!==this.tableData[i].status&&n++;0!==n?this.$confirm("还有 "+n+" 个未完成的上传任务，是否确定取消？","取消上传",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.fileUploader.pauseAll(),t.$store.commit("operationFileUploadWindow","close")}).catch(function(){}):this.$store.commit("operationFileUploadWindow","close")}else this.$store.commit("operationFileUploadWindow",e)},formatterSize:function(e){return Object(u["b"])(e.size)},statusChange:function(e,t){for(var n=0;n<this.tableData.length;n++)if(this.isEqualsOfFiles(this.tableData[n],e)){this.tableData[n].status=t;break}},pauseFile:function(e){this.fileUploader.pause(e)},resumeFileUpload:function(e){this.fileUploader.resume(e)},deleteFile:function(e){var t=this;this.$confirm("确定删除该条上传信息吗？","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.fileUploader.delete(e)}).catch(function(){})}},created:function(){var e=this;Object(g["i"])().then(function(t){e.fileUploader=new C(t.data.maxConcurrentUploadNumbers,t.data.chunkByteSize,t.data.clientId,e.tableData,function(){e.$store.commit("flushFileListEvent")}),e.fileUploader.addNewFiles(e.$store.state.fileUploadList)})}},z=T,B=(n("34ad"),Object(h["a"])(z,a,s,!1,null,"4ed49594",null)),D=B.exports,$={components:{Upload:D}},M=$,P=(n("034f"),Object(h["a"])(M,r,o,!1,null,null,null)),W=P.exports,R=n("1e6f");i["default"].use(R["a"]);var q=new R["a"]({base:"/",routes:[{path:"/",redirect:"/file",name:"首页"},{path:"/",name:"home",component:function(){return n.e("chunk-081d4dcc").then(n.bind(null,"cd56"))},children:[{path:"file",component:function(){return n.e("chunk-3980955e").then(n.bind(null,"14de"))}},{path:"white",component:function(){return n.e("chunk-2d0be6a0").then(n.bind(null,"2fc9"))}}]}]});i["default"].use(b["a"]);var V=new b["a"].Store({state:{asideStatus:"inline-block",fileUploadComponentStatus:"close",fileUploadList:[],levelList:[],fileTreeDialogVisible:!1,fileTreeInfo:{title:"设置"},flushFileListEvent:0},mutations:{toggleAside:function(e){e.asideStatus="inline-block"===e.asideStatus?"none":"inline-block"},operationFileUploadWindow:function(e,t){e.fileUploadComponentStatus=t},addUploadFile:function(e,t){e.fileUploadList.push(t)},clearFileUploadList:function(e){e.fileUploadList=[]},pushLevelList:function(e,t){e.levelList.push(t)},spliceLevelList:function(e,t){e.levelList.splice(t+1,e.levelList.length-t)},openFileTreeDialog:function(e,t){e.fileTreeDialogVisible=!0,e.fileTreeInfo=t},closeFileTreeDialog:function(e){e.fileTreeDialogVisible=!1},flushFileListEvent:function(e){e.flushFileListEvent++}},actions:{}}),H=n("bea0"),J=n.n(H);n("5b17");i["default"].config.productionTip=!1,i["default"].use(J.a),new i["default"]({router:q,store:V,render:function(e){return e(W)}}).$mount("#app")},"6c6e":function(e,t,n){"use strict";var i=n("7f43"),r=n.n(i),o=n("bea0"),a=n("6d5a"),s=r.a.create({baseURL:a["a"],timeout:1e4});s.interceptors.response.use(function(e){return e.data},function(e){var t=e;return e.response&&e.response.data&&e.response.data.msg&&(t=e.response.data.msg),Object(o["Message"])({message:t,type:"error",duration:3e3}),Promise.reject(e)});var l=s;function u(e){return l({url:"/v1/file",method:"get",params:{parentId:e}})}function c(e,t){return l({url:"/v1/file/folder",method:"post",params:{parentId:e,folderName:t}})}function d(e){return l({url:"/v1/file",method:"post",data:e})}function f(e,t){return l({url:"/v1/file/"+e,method:"put",params:{fileName:t}})}function p(e){return l({url:"/v1/file/"+e,method:"delete"})}function h(e){return l({url:"/v1/file/"+e+"/subfolder",method:"get"})}function m(e,t){return l({url:"/v1/file/"+e+"/move/"+t,method:"put"})}function v(e,t){return l({url:"/v1/file/"+e+"/copy",method:"post",data:t})}function g(){return l({url:"v1/rs/config"})}function b(e){return l({url:"/v1/rs/fingerPrint",params:{fingerPrint:e}})}function y(e,t,n,i,r){return l({url:"/v1/rs/preparation",method:"post",params:{clientId:e,size:t,md5:n,fileName:i,parentId:r}})}function F(e){return l({url:"/v1/rs",method:"post",config:{headers:{"Content-Type":"multipart/form-data"}},data:e})}n.d(t,"f",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"l",function(){return f}),n.d(t,"e",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"j",function(){return m}),n.d(t,"b",function(){return v}),n.d(t,"i",function(){return g}),n.d(t,"m",function(){return b}),n.d(t,"k",function(){return y}),n.d(t,"h",function(){return F}),n.d(t,"a",function(){return k});var k=function(e,t,n){return l({url:"/v1/rs/state",method:"put",params:{clientId:e,resourceId:t,type:n}})}},"6d5a":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o});n("5f33"),n("f91a");var i="/",r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),"S+":e.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)if(new RegExp("("+i+")").test(t)){for(var r="",o=1;o<=RegExp.$1.length;o++)r+="0";var a="";if(1==RegExp.$1.length)a=n[i];else{r+=n[i];var s=(""+n[i]).length;r=r.substr(s),a=r}t=t.replace(RegExp.$1,a)}return t},o=function(e){return e=parseInt(e),e<1024?e+"B":e<1048576?(e/1024).toFixed(1)+"K":e<1073741824?(e/1048576).toFixed(1)+"M":(e/1073741824).toFixed(1)+"G"}},"917f":function(e,t,n){},f759:function(e,t,n){}});
//# sourceMappingURL=app.6d718ee9.js.map