webpackJsonp([51],{UV3M:function(e,t,i){var a=i("Y9aH");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("9baee3aa",a,!0)},VoaC:function(e,t,i){"use strict";t.a={name:"pi-homescreen-panel",props:["rpi"],data:function(){return{picPath:"/static/gogo-img/",imageSize:64,elements:[{url:":8888/screen/index.html",image:"gogo_display.png",label:"Display",color:"#2196f3",icon:"mdi-hardware-desktop-windows"},{url:":8889/filemanager/dialog.php?fldr=/",image:"gogo_filemanager.png",label:"File Manager",color:"#795548",icon:"mdi-file-folder"},{url:":8888/www/datalogging/",image:"gogo_data_log.png",label:"Data Logging",color:"#2e7d32",icon:"mdi-action-assessment"},{url:":8888/www/webui/",image:"gogo_html.png",label:"Web UI",color:"#283593",icon:"mdi-editor-insert-drive-file"},{url:":8888/www/addons/",image:"gogo_addons.png",label:"Add-ons",color:"#ff9642",icon:"mdi-action-extension"},{url:":8888/www/setting.html",image:"gogo_setting.png",label:"Settings",color:"#386ed0",icon:"mdi-setting"}]}},methods:{}}},Y9aH:function(e,t,i){t=e.exports=i("FZ+f")(!0),t.push([e.i,".homescreen-link[data-v-28a490d4]{min-width:150px;text-align:center}","",{version:3,sources:["C:/xampp/htdocs/gogotest2/src/components/raspberry/pi-elements/PiHomescreenPanel.vue"],names:[],mappings:"AACA,kCACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"PiHomescreenPanel.vue",sourcesContent:["\n.homescreen-link[data-v-28a490d4] {\n  min-width: 150px;\n  text-align: center;\n}\n"],sourceRoot:""}])},bb6G:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pi-homescreen-panel d-flex flex-wrap justify-content-center"},e._l(e.elements,function(t,a){return i("div",{key:a},[i("div",{staticClass:"text-center"},[i("div",{staticClass:"row"},[i("a",{staticClass:"homescreen-link",attrs:{href:"http://"+e.rpi.justIpAddress+t.url,target:"_blank"}},[i("img",{staticClass:"img-circle",attrs:{src:e.picPath+t.image,alt:t.label,width:e.imageSize,height:e.imageSize}})])]),e._v(" "),i("p",[i("span",[e._v(e._s(t.label))])])])])}))},n=[],o={render:a,staticRenderFns:n};t.a=o},n8oJ:function(e,t,i){"use strict";function a(e){i("UV3M")}Object.defineProperty(t,"__esModule",{value:!0});var n=i("VoaC"),o=i("bb6G"),s=i("VU/8"),l=a,r=s(n.a,o.a,!1,l,"data-v-28a490d4",null);t.default=r.exports}});
//# sourceMappingURL=51.286738171386e5fe91dc.js.map