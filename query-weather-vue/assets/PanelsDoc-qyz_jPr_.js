import{P,aR as pe,aS as he,$ as S,aT as z,aH as K,aU as me,a9 as L,d as p,c as m,e as U,y as fe,C as x,ac as M,aa as u,a as i,B as b,ab as g,U as w,a8 as G,ap as ge,t as A,K as B,p as H,b as r,w as l,aV as F,ad as V,i as W,M as ve,r as k,q as v,s as be,f as _e,h as ye}from"./index-BlT1HkFY.js";import{s as Se}from"./index-DQkmNblx.js";import{s as ze}from"./index-Df7uiNQl.js";import{s as xe}from"./index-D9ylhxm9.js";import{s as X}from"./index-Dnyg5ffP.js";import{s as Y}from"./index-CbSgyMFv.js";import{s as we,a as Pe,b as Le}from"./index-D2MNglNl.js";import{s as Ee,a as qe}from"./index-TT1yRgXW.js";import{s as $e,a as Te,b as Ie,c as ke}from"./index-zm0wt7qO.js";import{s as Ae}from"./index-BRE63lSo.js";import{s as Be}from"./index-DGop8y4b.js";import"./index-DY3MTXxN.js";import"./index-BX4YjXLu.js";var De=function(t){var n=t.dt;return`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid `.concat(n("splitter.border.color"),`;
    background: `).concat(n("splitter.background"),`;
    border-radius: `).concat(n("border.radius.md"),`;
    color: `).concat(n("splitter.color"),`;
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: `).concat(n("splitter.gutter.background"),`;
}

.p-splitter-gutter-handle {
    border-radius: `).concat(n("splitter.handle.border.radius"),`;
    background: `).concat(n("splitter.handle.background"),`;
    transition: outline-color `).concat(n("splitter.transition.duration"),", box-shadow ").concat(n("splitter.transition.duration"),`;
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: `).concat(n("splitter.handle.focus.ring.shadow"),`;
    outline: `).concat(n("splitter.handle.focus.ring.width")," ").concat(n("splitter.handle.focus.ring.style")," ").concat(n("splitter.handle.focus.ring.color"),`;
    outline-offset: `).concat(n("splitter.handle.focus.ring.offset"),`;
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: `).concat(n("splitter.handle.size"),`;
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: `).concat(n("splitter.handle.size"),`;
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`)},Me={root:function(t){var n=t.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Oe={root:function(t){var n=t.props;return[{display:"flex","flex-wrap":"nowrap"},n.layout==="vertical"?{"flex-direction":"column"}:""]}},je=P.extend({name:"splitter",theme:De,classes:Me,inlineStyles:Oe}),Ke={name:"BaseSplitter",extends:L,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:je,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function R(e){return Ne(e)||Ce(e)||Re(e)||Ue()}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t){if(e){if(typeof e=="string")return D(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function Ce(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ne(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var J={name:"Splitter",extends:Ke,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){var t=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var a=R(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"}),o=[];this.panels.map(function(s,c){var d=s.props&&s.props.size?s.props.size:null,f=d||100/t.panels.length;o[c]=f,a[c].style.flexBasis="calc("+f+"% - "+(t.panels.length-1)*t.gutterSize+"px)"}),this.panelSizes=o,this.prevSize=parseFloat(o[0]).toFixed(4)}}},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(t){return t.type.name==="SplitterPanel"},onResizeStart:function(t,n,a){this.gutterElement=t.currentTarget||t.target.parentElement,this.size=this.horizontal?pe(this.$el):he(this.$el),a||(this.dragging=!0,this.startPos=this.layout==="horizontal"?t.pageX||t.changedTouches[0].pageX:t.pageY||t.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,a?(this.prevPanelSize=this.horizontal?S(this.prevPanelElement,!0):z(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?S(this.nextPanelElement,!0):z(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?S(this.prevPanelElement,!0):z(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?S(this.nextPanelElement,!0):z(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:t,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(t,n,a){var o,s,c;a?this.horizontal?(s=100*(this.prevPanelSize+n)/this.size,c=100*(this.nextPanelSize-n)/this.size):(s=100*(this.prevPanelSize-n)/this.size,c=100*(this.nextPanelSize+n)/this.size):(this.horizontal?o=t.pageX*100/this.size-this.startPos*100/this.size:o=t.pageY*100/this.size-this.startPos*100/this.size,s=this.prevPanelSize+o,c=this.nextPanelSize-o),this.validateResize(s,c)&&(this.prevPanelElement.style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+c+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=s,this.panelSizes[this.prevPanelIndex+1]=c,this.prevSize=parseFloat(s).toFixed(4)),this.$emit("resize",{originalEvent:t,sizes:this.panelSizes})},onResizeEnd:function(t){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:t,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(t,n,a){this.onResizeStart(t,n,!0),this.onResize(t,a,!0)},setTimer:function(t,n,a){var o=this;this.timer||(this.timer=setInterval(function(){o.repeat(t,n,a)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(t,n){switch(t.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(t,n,this.step*-1),t.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(t,n,this.step),t.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(t,n,this.step*-1),t.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(t,n,this.step),t.preventDefault();break}}},onGutterMouseDown:function(t,n){this.onResizeStart(t,n),this.bindMouseListeners()},onGutterTouchStart:function(t,n){this.onResizeStart(t,n),this.bindTouchListeners(),t.preventDefault()},onGutterTouchMove:function(t){this.onResize(t),t.preventDefault()},onGutterTouchEnd:function(t){this.onResizeEnd(t),this.unbindTouchListeners(),t.preventDefault()},bindMouseListeners:function(){var t=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return t.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){t.onResizeEnd(n),t.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var t=this;this.touchMoveListener||(this.touchMoveListener=function(n){return t.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){t.resizeEnd(n),t.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(t,n){if(t>100||t<0||n>100||n<0)return!1;var a=K(this.panels[this.prevPanelIndex],"minSize");if(this.panels[this.prevPanelIndex].props&&a&&a>t)return!1;var o=K(this.panels[this.prevPanelIndex+1],"minSize");return!(this.panels[this.prevPanelIndex+1].props&&o&&o>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){me(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var t=this,n=this.getStorage(),a=n.getItem(this.stateKey);if(a){this.panelSizes=JSON.parse(a);var o=R(this.$el.children).filter(function(s){return s.getAttribute("data-pc-name")==="splitterpanel"});return o.forEach(function(s,c){s.style.flexBasis="calc("+t.panelSizes[c]+"% - "+(t.panels.length-1)*t.gutterSize+"px)"}),!0}return!1}},computed:{panels:function(){var t=this,n=[];return this.$slots.default().forEach(function(a){t.isSplitterPanel(a)?n.push(a):a.children instanceof Array&&a.children.forEach(function(o){t.isSplitterPanel(o)&&n.push(o)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var t;return{context:{nested:(t=this.$parentInstance)===null||t===void 0?void 0:t.nestedState}}}}},Ge=["onMousedown","onTouchstart","onTouchmove","onTouchend"],He=["aria-orientation","aria-valuenow","onKeydown"];function Fe(e,t,n,a,o,s){return p(),m("div",u({class:e.cx("root"),style:e.sx("root"),"data-p-resizing":!1},e.ptmi("root",s.getPTOptions)),[(p(!0),m(U,null,fe(s.panels,function(c,d){return p(),m(U,{key:d},[(p(),x(M(c),{tabindex:"-1"})),d!==s.panels.length-1?(p(),m("div",u({key:0,ref_for:!0,ref:"gutter",class:e.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(h){return s.onGutterMouseDown(h,d)},onTouchstart:function(h){return s.onGutterTouchStart(h,d)},onTouchmove:function(h){return s.onGutterTouchMove(h,d)},onTouchend:function(h){return s.onGutterTouchEnd(h,d)},"data-p-gutter-resizing":!1},e.ptm("gutter")),[i("div",u({class:e.cx("gutterHandle"),tabindex:"0",style:[s.gutterStyle],"aria-orientation":e.layout,"aria-valuenow":o.prevSize,onKeyup:t[0]||(t[0]=function(){return s.onGutterKeyUp&&s.onGutterKeyUp.apply(s,arguments)}),onKeydown:function(h){return s.onGutterKeyDown(h,d)},ref_for:!0},e.ptm("gutterHandle")),null,16,He)],16,Ge)):b("",!0)],64)}),128))],16)}J.render=Fe;var Ve={root:function(t){var n=t.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},We=P.extend({name:"splitterpanel",classes:Ve}),Xe={name:"BaseSplitterPanel",extends:L,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:We,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},Q={name:"SplitterPanel",extends:Xe,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var t=this;return this.$slots.default().some(function(n){return t.nestedState=n.type.name==="Splitter"?!0:null,t.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function Ye(e,t,n,a,o,s){return p(),m("div",u({ref:"container",class:e.cx("root")},e.ptmi("root",s.getPTOptions)),[g(e.$slots,"default")],16)}Q.render=Ye;var Je=function(t){var n=t.dt;return`
.p-fieldset {
    background: `.concat(n("fieldset.background"),`;
    border: 1px solid `).concat(n("fieldset.border.color"),`;
    border-radius: `).concat(n("fieldset.border.radius"),`;
    color: `).concat(n("fieldset.color"),`;
    padding:  `).concat(n("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(n("fieldset.legend.background"),`;
    border-radius: `).concat(n("fieldset.legend.border.radius"),`;
    border-width: `).concat(n("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(n("fieldset.legend.border.color"),`;
    padding: `).concat(n("fieldset.legend.padding"),`;
    transition: background `).concat(n("fieldset.transition.duration"),", color ").concat(n("fieldset.transition.duration"),", outline-color ").concat(n("fieldset.transition.duration"),", box-shadow ").concat(n("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(n("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(n("fieldset.legend.border.radius"),`;
    transition: background `).concat(n("fieldset.transition.duration"),", color ").concat(n("fieldset.transition.duration"),", outline-color ").concat(n("fieldset.transition.duration"),", box-shadow ").concat(n("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(n("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(n("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(n("fieldset.legend.focus.ring.width")," ").concat(n("fieldset.legend.focus.ring.style")," ").concat(n("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(n("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(n("fieldset.legend.hover.color"),`;
    background: `).concat(n("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(n("fieldset.toggle.icon.color"),`;
    transition: color `).concat(n("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(n("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(n("fieldset.content.padding"),`;
}
`)},Qe={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},Ze=P.extend({name:"fieldset",theme:Je,classes:Qe}),et={name:"BaseFieldset",extends:L,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Ze,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Z={name:"Fieldset",extends:et,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||w()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||w()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:G},components:{PlusIcon:Y,MinusIcon:X}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(a){tt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tt(e,t,n){return(t=nt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nt(e){var t=it(e,"string");return _(t)=="symbol"?t:t+""}function it(e,t){if(_(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(_(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ot=["id"],st=["id","aria-controls","aria-expanded","aria-label"],rt=["id","aria-labelledby"];function at(e,t,n,a,o,s){var c=ge("ripple");return p(),m("fieldset",u({class:e.cx("root")},e.ptmi("root")),[i("legend",u({class:e.cx("legend")},e.ptm("legend")),[g(e.$slots,"legend",{toggleCallback:s.toggle},function(){return[e.toggleable?b("",!0):(p(),m("span",u({key:0,id:o.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),A(e.legend),17,ot)),e.toggleable?B((p(),m("button",u({key:1,id:o.id+"_header",type:"button","aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,"aria-label":s.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),onKeydown:t[1]||(t[1]=function(){return s.onKeyDown&&s.onKeyDown.apply(s,arguments)})},N(N({},e.toggleButtonProps),e.ptm("toggleButton"))),[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed,class:H(e.cx("toggleIcon"))},function(){return[(p(),x(M(o.d_collapsed?"PlusIcon":"MinusIcon"),u({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),i("span",u({class:e.cx("legendLabel")},e.ptm("legendLabel")),A(e.legend),17)],16,st)),[[c]]):b("",!0)]})],16),r(V,u({name:"p-toggleable-content"},e.ptm("transition")),{default:l(function(){return[B(i("div",u({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[i("div",u({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16)],16,rt),[[F,!o.d_collapsed]])]}),_:3},16)],16)}Z.render=at;var lt=function(t){var n=t.dt;return`
.p-panel {
    border: 1px solid `.concat(n("panel.border.color"),`;
    border-radius: `).concat(n("panel.border.radius"),`;
    background: `).concat(n("panel.background"),`;
    color: `).concat(n("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(n("panel.header.padding"),`;
    background: `).concat(n("panel.header.background"),`;
    color: `).concat(n("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(n("panel.header.border.width"),`;
    border-color: `).concat(n("panel.header.border.color"),`;
    border-radius: `).concat(n("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(n("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(n("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(n("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(n("panel.footer.padding"),`;
}
`)},ut={root:function(t){var n=t.props;return["p-panel p-component",{"p-panel-toggleable":n.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},ct=P.extend({name:"panel",theme:lt,classes:ut}),dt={name:"BasePanel",extends:L,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:ct,provide:function(){return{$pcPanel:this,$parentInstance:this}}},ee={name:"Panel",extends:dt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||w()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||w()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:Y,MinusIcon:X,Button:W},directives:{ripple:G}},pt=["id"],ht=["id","aria-labelledby"];function mt(e,t,n,a,o,s){var c=ve("Button");return p(),m("div",u({class:e.cx("root")},e.ptmi("root")),[i("div",u({class:e.cx("header")},e.ptm("header")),[g(e.$slots,"header",{id:o.id+"_header",class:H(e.cx("title"))},function(){return[e.header?(p(),m("span",u({key:0,id:o.id+"_header",class:e.cx("title")},e.ptm("title")),A(e.header),17,pt)):b("",!0)]}),i("div",u({class:e.cx("headerActions")},e.ptm("headerActions")),[g(e.$slots,"icons"),e.toggleable?(p(),x(c,u({key:0,id:o.id+"_header",class:e.cx("pcToggleButton"),"aria-label":s.buttonAriaLabel,"aria-controls":o.id+"_content","aria-expanded":!o.d_collapsed,unstyled:e.unstyled,onClick:s.toggle,onKeydown:s.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:l(function(d){return[g(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:o.d_collapsed},function(){return[(p(),x(M(o.d_collapsed?"PlusIcon":"MinusIcon"),u({class:d.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):b("",!0)],16)],16),r(V,u({name:"p-toggleable-content"},e.ptm("transition")),{default:l(function(){return[B(i("div",u({id:o.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":o.id+"_header"},e.ptm("contentContainer")),[i("div",u({class:e.cx("content")},e.ptm("content")),[g(e.$slots,"default")],16),e.$slots.footer?(p(),m("div",u({key:0,class:e.cx("footer")},e.ptm("footer")),[g(e.$slots,"footer")],16)):b("",!0)],16,ht),[[F,!o.d_collapsed]])]}),_:3},16)],16)}ee.render=mt;const ft={class:"flex flex-col"},gt={class:"card"},vt=i("div",{class:"font-semibold text-xl mb-4"},"Toolbar",-1),bt=i("i",{class:"pi pi-search"},null,-1),_t={class:"flex flex-col md:flex-row gap-8"},yt={class:"md:w-1/2"},St={class:"card"},zt=i("div",{class:"font-semibold text-xl mb-4"},"Accordion",-1),xt=i("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),wt=i("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),Pt=i("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1),Lt={class:"card"},Et=i("div",{class:"font-semibold text-xl mb-4"},"Tabs",-1),qt=i("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),$t=i("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),Tt=i("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1),It={class:"md:w-1/2 mt-6 md:mt-0"},kt={class:"card"},At=i("div",{class:"font-semibold text-xl mb-4"},"Panel",-1),Bt=i("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Dt={class:"card"},Mt=i("div",{class:"font-semibold text-xl mb-4"},"Fieldset",-1),Ot=i("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),jt={class:"flex items-center justify-between mb-0"},Kt=i("div",{class:"font-semibold text-xl mb-4"},"Card",-1),Ut=i("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Rt={class:"card mt-8"},Ct=i("div",{class:"font-semibold text-xl mb-4"},"Divider",-1),Nt={class:"flex flex-col md:flex-row"},Gt={class:"w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5"},Ht={class:"flex flex-col gap-2"},Ft=i("label",{for:"username"},"Username",-1),Vt={class:"flex flex-col gap-2"},Wt=i("label",{for:"password"},"Password",-1),Xt={class:"flex"},Yt={class:"w-full md:w-2/12"},Jt=i("b",null,"OR",-1),Qt=i("b",null,"OR",-1),Zt={class:"w-full md:w-5/12 flex items-center justify-center py-5"},en={class:"card"},tn=i("div",{class:"font-semibold text-xl mb-4"},"Splitter",-1),nn=i("div",{className:"h-full flex items-center justify-center"},"Panel 1",-1),on=i("div",{className:"h-full flex items-center justify-center"},"Panel 2",-1),sn=i("div",{className:"h-full flex items-center justify-center"},"Panel 3",-1),_n={__name:"PanelsDoc",setup(e){const t=k([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]),n=k([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),a=k(null);function o(){a.value.toggle(event)}return(s,c)=>{const d=W,f=be,h=_e,te=ye,ne=Be,ie=Ae,E=Te,q=Ie,$=ke,oe=$e,T=Pe,se=Le,I=Ee,re=qe,ae=we,le=ee,ue=Z,ce=xe,de=ze,O=Se,y=Q,j=J;return p(),m("div",ft,[i("div",gt,[vt,r(ie,null,{start:l(()=>[r(d,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",text:""}),r(d,{icon:"pi pi-print",class:"mr-2",severity:"secondary",text:""}),r(d,{icon:"pi pi-upload",severity:"secondary",text:""})]),center:l(()=>[r(te,null,{default:l(()=>[r(f,null,{default:l(()=>[bt]),_:1}),r(h,{placeholder:"Search"})]),_:1})]),end:l(()=>[r(ne,{label:"Save",model:t.value},null,8,["model"])]),_:1})]),i("div",_t,[i("div",yt,[i("div",St,[zt,r(oe,{value:"0"},{default:l(()=>[r($,{value:"0"},{default:l(()=>[r(E,null,{default:l(()=>[v("Header I")]),_:1}),r(q,null,{default:l(()=>[xt]),_:1})]),_:1}),r($,{value:"1"},{default:l(()=>[r(E,null,{default:l(()=>[v("Header II")]),_:1}),r(q,null,{default:l(()=>[wt]),_:1})]),_:1}),r($,{value:"2"},{default:l(()=>[r(E,null,{default:l(()=>[v("Header III")]),_:1}),r(q,null,{default:l(()=>[Pt]),_:1})]),_:1})]),_:1})]),i("div",Lt,[Et,r(ae,{value:"0"},{default:l(()=>[r(se,null,{default:l(()=>[r(T,{value:"0"},{default:l(()=>[v("Header I")]),_:1}),r(T,{value:"1"},{default:l(()=>[v("Header II")]),_:1}),r(T,{value:"2"},{default:l(()=>[v("Header III")]),_:1})]),_:1}),r(re,null,{default:l(()=>[r(I,{value:"0"},{default:l(()=>[qt]),_:1}),r(I,{value:"1"},{default:l(()=>[$t]),_:1}),r(I,{value:"2"},{default:l(()=>[Tt]),_:1})]),_:1})]),_:1})])]),i("div",It,[i("div",kt,[At,r(le,{header:"Header",toggleable:!0},{default:l(()=>[Bt]),_:1})]),i("div",Dt,[Mt,r(ue,{legend:"Legend",toggleable:!0},{default:l(()=>[Ot]),_:1})]),r(de,null,{title:l(()=>[i("div",jt,[Kt,r(d,{icon:"pi pi-plus",class:"p-button-text",onClick:o})]),r(ce,{id:"config_menu",ref_key:"menuRef",ref:a,model:n.value,popup:!0},null,8,["model"])]),content:l(()=>[Ut]),_:1})])]),i("div",Rt,[Ct,i("div",Nt,[i("div",Gt,[i("div",Ht,[Ft,r(h,{id:"username",type:"text"})]),i("div",Vt,[Wt,r(h,{id:"password",type:"password"})]),i("div",Xt,[r(d,{label:"Login",icon:"pi pi-user",class:"w-full max-w-[17.35rem] mx-auto"})])]),i("div",Yt,[r(O,{layout:"vertical",class:"!hidden md:!flex"},{default:l(()=>[Jt]),_:1}),r(O,{layout:"horizontal",class:"!flex md:!hidden",align:"center"},{default:l(()=>[Qt]),_:1})]),i("div",Zt,[r(d,{label:"Sign Up",icon:"pi pi-user-plus",severity:"success",class:"w-full max-w-[17.35rem] mx-auto"})])])]),i("div",en,[tn,r(j,{style:{height:"300px"},class:"mb-8"},{default:l(()=>[r(y,{size:30,minSize:10},{default:l(()=>[nn]),_:1}),r(y,{size:70},{default:l(()=>[r(j,{layout:"vertical"},{default:l(()=>[r(y,{size:15},{default:l(()=>[on]),_:1}),r(y,{size:50},{default:l(()=>[sn]),_:1})]),_:1})]),_:1})]),_:1})])])}}};export{_n as default};
