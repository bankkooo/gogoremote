webpackJsonp([35],{I1UB:function(t,e,i){"use strict";var s=(i("NYxO"),i("GDE4")),a=i.n(s),n=i("IhTM"),r=i.n(n),o=i("162o");i.n(o);e.a={name:"lab-detail-panel",props:{parentData:Number,parentData2:String},components:{vueSlider:a.a,VueSlideBar:r.a},data:function(){return{message:"You loaded this page on ",lab:1,lab_selected:0,form:{name:""}}},methods:{etr:function(){1==this.parentDat?this.$swalDetail1({}):2==this.parentDat?this.$swalDetail2({}):3==this.parentDat?this.$swalDetail3({}):this.$swalDetail1({}),this.lab=0,console.log(this.lab)}},mounted:function(){},updated:function(){},computed:{labselected:function(){return 99}}}},IhTM:function(t,e,i){/*!
 * vue-slide-bar v1.1.2
 * (c) 2018-present Pongsatorn Nitithammawoot <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(e,i){t.exports=i()}(0,function(){"use strict";return function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),i=" .vue-slide-bar-component[data-v-68863e48] { position: relative; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding-top: 40px !important; } .vue-slide-bar[data-v-68863e48] { position: relative; display: block; border-radius: 15px; background-color: #d8d8d8; cursor: pointer; } .vue-slide-bar[data-v-68863e48]::after { content: ''; position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 2; } .vue-slide-bar-process[data-v-68863e48] { position: absolute; border-radius: 15px; background-color: #1066FD; -webkit-transition: all 0s; transition: all 0s; z-index: 1; width: 0; height: 100%; top: 0; left: 0; will-change: width; } .vue-slide-bar-dot[data-v-68863e48] { position: absolute; -webkit-transition: all 0s; transition: all 0s; will-change: transform; cursor: pointer; z-index: 3; left: 0; top: -16px; } .vue-slide-bar-tooltip-wrap[data-v-68863e48] { /* display: none; */ position: absolute; z-index: 9; width: 100%; height: 100%; display: block !important; } .vue-slide-bar-tooltip-top[data-v-68863e48] { top: -12px; left: 40%; -webkit-transform: translate(-50%, -100%); transform: translate(-50%, -100%); } .vue-slide-bar-tooltip[data-v-68863e48] { position: relative; font-size: 14px; white-space: nowrap; padding: 2px 5px; min-width: 20px; text-align: center; color: #fff; border-radius: 5px; border: 1px solid #1066FD; background-color: #1066FD; } .vue-slide-bar-tooltip[data-v-68863e48]::before { content: ''; position: absolute; bottom: -10px; left: 50%; width: 0; height: 0; border: 5px solid transparent; border-top-color: inherit; -webkit-transform: translate(-50%, 0); transform: translate(-50%, 0); } .vue-slide-bar-range[data-v-68863e48] { display: -webkit-box; display: -ms-flexbox; display: flex; padding: 5px 0; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; } .vue-slide-bar-separate[data-v-68863e48] { position: relative; width: 2px; background-color: #9e9e9e; height: 5px; cursor: pointer; } .vue-slide-bar-separate-text[data-v-68863e48] { text-align: center; position: absolute; white-space: nowrap; -webkit-transform: translate(-50%, 0); transform: translate(-50%, 0); top: 6px; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}}(),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrap",staticClass:"vue-slide-bar-component vue-slide-bar-horizontal",style:t.calculateMinHeight,on:{click:t.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slide-bar",style:{height:t.lineHeight+"px"}},[[i("div",{ref:"dot",staticClass:"vue-slide-bar-always vue-slide-bar-dot",style:{width:t.iconWidth+"px"},on:{mousedown:t.moveStart,touchstart:t.moveStart}},[t.showTooltip?i("span",{staticClass:"vue-slide-bar-tooltip-top vue-slide-bar-tooltip-wrap"},[t._t("tooltip",[i("span",{staticClass:"vue-slide-bar-tooltip",style:t.tooltipStyles},[t._v(t._s(t.val))])])],2):t._e()])],t._v(" "),i("div",{ref:"process",staticClass:"vue-slide-bar-process",style:t.processStyle})],2),t._v(" "),t.range?i("div",{staticClass:"vue-slide-bar-range"},t._l(t.range,function(e,s){return i("div",{key:s,staticClass:"vue-slide-bar-separate",style:t.dataLabelStyles},[e.isHide?t._e():i("span",{staticClass:"vue-slide-bar-separate-text"},[t._v(" "+t._s(e.label)+" ")])])})):t._e()])},staticRenderFns:[],_scopeId:"data-v-68863e48",name:"VueSlideBar",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0,isComponentExists:!0,interval:1,lazy:!1,realTime:!1,dataLabelStyles:Object.assign({color:"#4a4a4a","font-family":"Arial, sans-serif","font-size":"12px"},this.$props.labelStyles)}},props:{data:{type:Array,default:null},range:{type:Array,default:null},speed:{type:Number,default:.5},lineHeight:{type:Number,default:5},iconWidth:{type:Number,default:20},value:{type:[String,Number],default:0},min:{type:Number,default:0},max:{type:Number,default:100},showTooltip:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},tooltipStyles:Object,labelStyles:Object,processStyle:Object},computed:{slider:function(){return this.$refs.dot},val:{get:function(){return this.data?this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data){var e=this.data.indexOf(t);e>-1&&(this.currentValue=e)}else this.currentValue=t}},currentIndex:function(){return(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return[0,this.currentIndex]},minimum:function(){return this.data?0:this.min},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var t=(""+this.interval).split(".")[1];return t?Math.pow(10,t.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("[VueSlider error]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return[0,this.size]},valueLimit:function(){return[this.minimum,this.maximum]},calculateMinHeight:function(){return this.range?{minHeight:"100px"}:{}}},watch:{value:function(t){this.flag?this.setValue(t,!0):this.setValue(t,!0,this.speed)},max:function(t){if(t<this.min)return this.printError("[VueSlider error]: The maximum value can not be less than the minimum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()},min:function(t){if(t>this.max)return this.printError("[VueSlider error]: The minimum value can not be greater than the maximum value.");var e=this.limitValue(this.val);this.setValue(e),this.refresh()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),window.addEventListener("resize",this.refresh)},unbindEvents:function(){window.removeEventListener("resize",this.refresh),document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd)},getPos:function(t){return this.realTime&&this.getStaticData(),t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled)return!1;var e=this.getPos(t);this.setValueOnPos(e)},moveStart:function(t,e){this.flag=!0,this.$emit("drag-start",this)},moving:function(t){if(!this.flag)return!1;t.preventDefault(),t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),this.setValueOnPos(this.getPos(t),!0)},moveEnd:function(t){if(!this.flag)return!1;this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,this.setPosition()},setValueOnPos:function(t,e){var i=this.limit,s=this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var a=(Math.round(t/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(a,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){if(t<this.minimum||t>this.maximum)return!1;this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||this.syncValue()),e||this.setPosition()},setIndex:function(t){t=this.spacing*t+this.minimum,this.setCurrentValue(t)},setValue:function(t,e,i){var s=this;if(this.isDiff(this.val,t)){var a=this.limitValue(t);this.val=a,this.syncValue(e)}this.$nextTick(function(){return s.setPosition(i)})},setPosition:function(t){this.flag?this.setTransitionTime(0):this.setTransitionTime(void 0===t?this.speed:t),this.setTransform(this.position)},setTransform:function(t){var e="translateX("+(t-8)+"px)";this.slider.style.transform=e,this.slider.style.WebkitTransform=e,this.slider.style.msTransform=e,this.$refs.process.style.width=t+"px",this.$refs.process.style.left=0},setTransitionTime:function(t){this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},limitValue:function(t){var e=this;if(this.data)return t;var i;return(i=t)<e.min?(e.printError("[VueSlider warn]: The value of the slider is "+t+", the minimum value is "+e.min+", the value of this slider can not be less than the minimum value"),e.min):i>e.max?(e.printError("[VueSlider warn]: The value of the slider is "+t+", the maximum value is "+e.max+", the value of this slider can not be greater than the maximum value"),e.max):i},syncValue:function(t){var e=this.val;this.range&&this.$emit("callbackRange",this.range[this.currentIndex]),this.$emit("input",e),t||this.$emit("callback",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size=this.$refs.elem.offsetWidth,this.offset=this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())},printError:function(t){console.error(t)}},mounted:function(){var t=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("[VueSlider error]: window or document is undefined, can not be initialization.");this.$nextTick(function(){t.isComponentExists&&(t.getStaticData(),t.setValue(t.limitValue(t.value),!0,0),t.bindEvents())})},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}}})},NoAk:function(t,e,i){var s=i("oZOb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("736db774",s,!0)},YyAU:function(t,e,i){"use strict";function s(t){i("NoAk")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("I1UB"),n=i("cwa3"),r=i("VU/8"),o=s,l=r(a.a,n.a,!1,o,"data-v-1f41a1af",null);e.default=l.exports},cwa3:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lab-status-panel"},[i("div",{staticClass:"row justify-content-center"},[i("span",[i("h2",[t._v(t._s(t._f("translate")("gogoboard.labdetail_panel.lab"+t.parentData)))])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6 text-right",staticStyle:{"background-color":"white"}},[i("h5",[i("p",[t._v(t._s(t._f("translate")("gogoboard.labstatus_panel.name"))+" :")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12 text-right",staticStyle:{"background-color":"white"}},[i("p",[t._v(t._s(t._f("translate")("gogoboard.labstatus_panel.internet"))+" :")])]),t._v(" "),i("div",{staticClass:"col-sm-12 text-right",staticStyle:{"background-color":"white"}},[i("p",[t._v(t._s("Battery")+" :")])])])])]),t._v(" "),i("div",{staticClass:"col-sm-6 text-left",staticStyle:{"background-color":"white"}},[i("p",[t._v(t._s(t.parentData2||"unknown"))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12 text-left"},[i("p",[t._v(t._s("READY"))])]),t._v(" "),i("div",{staticClass:"col-sm-12 text-left"},[i("p",[t._v(t._s("READY"))])])])])])])},a=[],n={render:s,staticRenderFns:a};e.a=n},oZOb:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"LabStatusPanel.vue",sourceRoot:""}])}});
//# sourceMappingURL=35.6898992c441c46a84654.js.map