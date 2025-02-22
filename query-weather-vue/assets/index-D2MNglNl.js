import{P as y,U as B,a9 as T,d as r,c as d,ab as p,aa as s,aR as l,a4 as f,aT as P,aJ as u,$ as V,aS as I,b1 as O,aO as S,a8 as k,ap as x,K as v,C as g,ac as m,B as $,a as h,ay as b,Q as z,am as E,w as R,p as F}from"./index-BlT1HkFY.js";var D=function(t){var n=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},H={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},W=y.extend({name:"tabs",theme:D,classes:H}),U={name:"BaseTabs",extends:T,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:W,provide:function(){return{$pcTabs:this,$parentInstance:this}}},_={name:"Tabs",extends:U,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||B()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||B()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function j(a,t,n,e,o,i){return r(),d("div",s({class:a.cx("root")},a.ptmi("root")),[p(a.$slots,"default")],16)}_.render=j;var q={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},J=y.extend({name:"tablist",classes:q}),Q={name:"BaseTabList",extends:T,props:{},style:J,provide:function(){return{$pcTabList:this,$parentInstance:this}}},G={name:"TabList",extends:Q,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=l(t),e=t.scrollLeft-n;t.scrollLeft=e<=0?0:e},onNextButtonClick:function(){var t=this.$refs.content,n=l(t)-this.getVisibleButtonWidths(),e=t.scrollLeft+n,o=t.scrollWidth-n;t.scrollLeft=e>=o?o:e},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,e=t.inkbar,o=t.tabs,i=f(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(e.style.height=P(i)+"px",e.style.top=u(i).top-u(o).top+"px"):(e.style.width=V(i)+"px",e.style.left=u(i).left-u(o).left+"px")},updateButtonState:function(){var t=this.$refs,n=t.list,e=t.content,o=e.scrollLeft,i=e.scrollTop,c=e.scrollWidth,C=e.scrollHeight,L=e.offsetWidth,N=e.offsetHeight,w=[l(e),I(e)],A=w[0],K=w[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=N&&parseInt(i)!==C-K):(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=n.offsetWidth>=L&&parseInt(o)!==c-A)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevBtn,e=t.nextBtn;return[n,e].reduce(function(o,i){return i?o+l(i):o},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:O,ChevronRightIcon:S},directives:{ripple:k}},M=["aria-label","tabindex"],X=["aria-orientation"],Y=["aria-label","tabindex"];function Z(a,t,n,e,o,i){var c=x("ripple");return r(),d("div",s({ref:"list",class:a.cx("root")},a.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?v((r(),d("button",s({key:0,ref:"prevButton",class:a.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),g(m(i.templates.previcon||"ChevronLeftIcon"),s({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,M)),[[c]]):$("",!0),h("div",s({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},a.ptm("content")),[h("div",s({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[p(a.$slots,"default"),h("span",s({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,X)],16),i.showNavigators&&o.isNextButtonEnabled?v((r(),d("button",s({key:1,ref:"nextButton",class:a.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),g(m(i.templates.nexticon||"ChevronRightIcon"),s({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,Y)),[[c]]):$("",!0)],16)}G.render=Z;var tt={root:function(t){var n=t.instance,e=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":e.disabled}]}},nt=y.extend({name:"tab",classes:tt}),at={name:"BaseTab",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:nt,provide:function(){return{$pcTab:this,$parentInstance:this}}},et={name:"Tab",extends:at,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=n?t:t.nextElementSibling;return e?b(e,"data-p-disabled")||b(e,"data-pc-section")==="inkbar"?this.findNextTab(e):f(e,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=n?t:t.previousElementSibling;return e?b(e,"data-p-disabled")||b(e,"data-pc-section")==="inkbar"?this.findPrevTab(e):f(e,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){z(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return E((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return s(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:k}};function it(a,t,n,e,o,i){var c=x("ripple");return a.asChild?p(a.$slots,"default",{key:1,class:F(a.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):v((r(),g(m(a.as),s({key:0,class:a.cx("root"),onClick:i.onClick},i.attrs),{default:R(function(){return[p(a.$slots,"default")]}),_:3},16,["class","onClick"])),[[c]])}et.render=it;export{et as a,G as b,_ as s};
