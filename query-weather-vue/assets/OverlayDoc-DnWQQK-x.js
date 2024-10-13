import{P as te,aW as k,Z as q,Q as x,a0 as oe,aJ as B,ae as ne,af as ie,a1 as re,a2 as se,a3 as ae,i as I,a6 as ce,aX as le,a9 as ue,M as U,ap as pe,d as f,C as A,w as l,b as n,ad as de,aa as d,K as E,c as j,ab as z,e as me,ac as H,p as fe,B as K,a as i,t as F,A as T,r as p,u as ve,aY as be,o as he,aZ as ge,q as ye,f as Le,T as we}from"./index-BlT1HkFY.js";import{s as Ce}from"./index--HvzExSK.js";import{s as ke}from"./index-Cu5jXQIr.js";import{s as je}from"./index-Cnpt1SBf.js";import{s as _e}from"./index-CnY9MNOL.js";import{P as xe}from"./ProductService-BtITuo-x.js";import"./index-DnhmL6mH.js";import"./index-CqKtGezN.js";import"./index-Br-3cgV9.js";import"./index-Bg-WbENU.js";import"./index-M85sYDf4.js";import"./index-BX4YjXLu.js";import"./index-BP8pj-hj.js";import"./index-BOOD8GKY.js";import"./index-Dnyg5ffP.js";import"./index-CbSgyMFv.js";var ze=function(e){var o=e.dt;return`
.p-confirmpopup {
    position: absolute;
    margin-top: `.concat(o("confirmpopup.gutter"),`;
    top: 0;
    left: 0;
    background: `).concat(o("confirmpopup.background"),`;
    color: `).concat(o("confirmpopup.color"),`;
    border: 1px solid `).concat(o("confirmpopup.border.color"),`;
    border-radius: `).concat(o("confirmpopup.border.radius"),`;
    box-shadow: `).concat(o("confirmpopup.shadow"),`;
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: `).concat(o("confirmpopup.content.padding"),`;
    gap: `).concat(o("confirmpopup.content.gap"),`;
}

.p-confirmpopup-icon {
    font-size: `).concat(o("confirmpopup.icon.size"),`;
    width: `).concat(o("confirmpopup.icon.size"),`;
    height: `).concat(o("confirmpopup.icon.size"),`;
    color: `).concat(o("confirmpopup.icon.color"),`;
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: `).concat(o("confirmpopup.footer.gap"),`;
    padding: `).concat(o("confirmpopup.footer.padding"),`;
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(`).concat(o("confirmpopup.gutter"),` * -1);
    margin-bottom: `).concat(o("confirmpopup.gutter"),`;
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: calc(`).concat(o("confirmpopup.arrow.offset")," + ").concat(o("confirmpopup.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(`).concat(o("confirmpopup.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(o("confirmpopup.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(o("confirmpopup.background"),`;
}

.p-confirmpopup:before {
    border-width: `).concat(o("confirmpopup.gutter"),`;
    margin-left: calc(-1 * `).concat(o("confirmpopup.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(o("confirmpopup.border.color"),`;
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(o("confirmpopup.background"),`;
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(o("confirmpopup.border.color"),`;
}
`)},Pe={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},Se=te.extend({name:"confirmpopup",theme:ze,classes:Pe}),qe={name:"BaseConfirmPopup",extends:ue,props:{group:String},style:Se,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},$={name:"ConfirmPopup",extends:qe,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(o){o&&o.group===e.group&&(e.confirmation=o,e.target=o.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},k.on("confirm",this.confirmListener),k.on("close",this.closeListener)},beforeUnmount:function(){k.off("confirm",this.confirmListener),k.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(q.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.accept(),x(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.reject(),x(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),q.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,x(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){q.clear(e)},alignOverlay:function(){oe(this.container,this.target,!1);var e=B(this.container),o=B(this.target),v=0;e.left<o.left&&(v=o.left-e.left),this.container.style.setProperty(ne("confirmpopup.arrow.left").name,"".concat(v,"px")),e.top<o.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&ie(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(o){e.visible&&e.container&&!e.container.contains(o.target)&&!e.isTargetClicked(o)?(e.confirmation.onHide&&e.confirmation.onHide(),e.visible=!1):e.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new re(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!se()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){ae.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code==="Escape"&&(k.emit("close",this.closeListener),x(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e,o=this.confirmation;return o.acceptLabel||((e=o.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,o=this.confirmation;return o.rejectLabel||((e=o.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:I,Portal:ce},directives:{focustrap:le}},Ae=["aria-modal"];function Ee(t,e,o,v,c,s){var h=U("Button"),L=U("Portal"),_=pe("focustrap");return f(),A(L,null,{default:l(function(){return[n(de,d({name:"p-confirmpopup",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave},t.ptm("transition")),{default:l(function(){var g,w,y;return[c.visible?E((f(),j("div",d({key:0,ref:s.containerRef,role:"alertdialog",class:t.cx("root"),"aria-modal":c.visible,onClick:e[2]||(e[2]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)}),onKeydown:e[3]||(e[3]=function(){return s.onOverlayKeydown&&s.onOverlayKeydown.apply(s,arguments)})},t.ptmi("root")),[t.$slots.container?z(t.$slots,"container",{key:0,message:c.confirmation,acceptCallback:s.accept,rejectCallback:s.reject}):(f(),j(me,{key:1},[t.$slots.message?(f(),A(H(t.$slots.message),{key:1,message:c.confirmation},null,8,["message"])):(f(),j("div",d({key:0,class:t.cx("content")},t.ptm("content")),[z(t.$slots,"icon",{},function(){return[t.$slots.icon?(f(),A(H(t.$slots.icon),{key:0,class:fe(t.cx("icon"))},null,8,["class"])):c.confirmation.icon?(f(),j("span",d({key:1,class:[c.confirmation.icon,t.cx("icon")]},t.ptm("icon")),null,16)):K("",!0)]}),i("span",d({class:t.cx("message")},t.ptm("message")),F(c.confirmation.message),17)],16)),i("div",d({class:t.cx("footer")},t.ptm("footer")),[n(h,d({class:[t.cx("pcRejectButton"),c.confirmation.rejectClass],autofocus:c.autoFocusReject,unstyled:t.unstyled,size:((g=c.confirmation.rejectProps)===null||g===void 0?void 0:g.size)||"small",text:((w=c.confirmation.rejectProps)===null||w===void 0?void 0:w.text)||!1,onClick:e[0]||(e[0]=function(b){return s.reject()}),onKeydown:s.onRejectKeydown},c.confirmation.rejectProps,{label:s.rejectLabel,pt:t.ptm("pcRejectButton")}),T({_:2},[s.rejectIcon||t.$slots.rejecticon?{name:"icon",fn:l(function(b){return[z(t.$slots,"rejecticon",{},function(){return[i("span",d({class:[s.rejectIcon,b.class]},t.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),n(h,d({class:[t.cx("pcAcceptButton"),c.confirmation.acceptClass],autofocus:c.autoFocusAccept,unstyled:t.unstyled,size:((y=c.confirmation.acceptProps)===null||y===void 0?void 0:y.size)||"small",onClick:e[1]||(e[1]=function(b){return s.accept()}),onKeydown:s.onAcceptKeydown},c.confirmation.acceptProps,{label:s.acceptLabel,pt:t.ptm("pcAcceptButton")}),T({_:2},[s.acceptIcon||t.$slots.accepticon?{name:"icon",fn:l(function(b){return[z(t.$slots,"accepticon",{},function(){return[i("span",d({class:[s.acceptIcon,b.class]},t.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,Ae)),[[_]]):K("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}$.render=Ee;const Oe={class:"flex flex-col md:flex-row gap-8"},Re={class:"md:w-1/2"},De={class:"card"},Be=i("div",{class:"font-semibold text-xl mb-4"},"Dialog",-1),Ue=i("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),He={class:"card"},Ke=i("div",{class:"font-semibold text-xl mb-4"},"Popover",-1),Te={class:"flex flex-wrap gap-2"},Ie=["src","alt"],Fe={class:"card"},$e=i("div",{class:"font-semibold text-xl mb-4"},"Tooltip",-1),Ne={class:"inline-flex gap-4"},Ye={class:"md:w-1/2"},Ve={class:"card"},Me=i("div",{class:"font-semibold text-xl mb-4"},"Drawer",-1),Ze=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Je=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Qe=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),We=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Xe=i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ge={class:"card"},et=i("div",{class:"font-semibold text-xl mb-4"},"ConfirmPopup",-1),tt={class:"card"},ot=i("div",{class:"font-semibold text-xl mb-4"},"ConfirmDialog",-1),nt=i("div",{class:"flex items-center justify-center"},[i("i",{class:"pi pi-exclamation-triangle mr-4",style:{"font-size":"2rem"}}),i("span",null,"Are you sure you want to proceed?")],-1),Lt={__name:"OverlayDoc",setup(t){const e=p(!1),o=p(!1),v=p(!1),c=p(!1),s=p(!1),h=p(!1),L=p(!1),_=p(null),g=p(null),w=p(null),y=p(null),b=p(null),P=ve(),N=be();he(()=>{xe.getProductsSmall().then(m=>_.value=m)});function Y(){e.value=!0}function V(){e.value=!1}function M(){o.value=!0}function O(){o.value=!1}function Z(m){y.value.toggle(m)}function J(m){w.value.hide(),P.add({severity:"info",summary:"Product Selected",detail:m.data.name,life:3e3})}function Q(m){N.require({target:m.target,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Save"},accept:()=>{P.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{P.add({severity:"info",summary:"Rejected",detail:"You have rejected",life:3e3})}})}return(m,r)=>{const u=I,R=_e,S=je,W=ke,X=Ce,G=Le,C=ge,ee=$,D=we;return f(),j("div",Oe,[i("div",Re,[i("div",De,[Be,n(R,{header:"Dialog",visible:e.value,"onUpdate:visible":r[0]||(r[0]=a=>e.value=a),breakpoints:{"960px":"75vw"},style:{width:"30vw"},modal:!0},{footer:l(()=>[n(u,{label:"Save",onClick:V})]),default:l(()=>[Ue]),_:1},8,["visible"]),n(u,{label:"Show",style:{width:"auto"},onClick:Y})]),i("div",He,[Ke,i("div",Te,[n(u,{type:"button",label:"Show",onClick:Z}),n(X,{ref_key:"op2",ref:y,id:"overlay_panel",style:{width:"450px"}},{default:l(()=>[n(W,{selection:g.value,"onUpdate:selection":r[1]||(r[1]=a=>g.value=a),value:_.value,selectionMode:"single",paginator:!0,rows:5,onRowSelect:J},{default:l(()=>[n(S,{field:"name",header:"Name",sortable:"",style:{"min-width":"12rem"}}),n(S,{header:"Image"},{body:l(a=>[i("img",{src:`https://primefaces.org/cdn/primevue/images/product/${a.data.image}`,alt:a.data.image,class:"w-16 shadow-sm"},null,8,Ie)]),_:1}),n(S,{field:"price",header:"Price",sortable:"",style:{"min-width":"8rem"}},{body:l(a=>[ye(" $ "+F(a.data.price),1)]),_:1})]),_:1},8,["selection","value"])]),_:1},512)])]),i("div",Fe,[$e,i("div",Ne,[E(n(G,{type:"text",placeholder:"Username"},null,512),[[D,"Your username"]]),E(n(u,{type:"button",label:"Save"},null,512),[[D,"Click to proceed"]])])])]),i("div",Ye,[i("div",Ve,[Me,n(C,{visible:v.value,"onUpdate:visible":r[2]||(r[2]=a=>v.value=a),header:"Drawer"},{default:l(()=>[Ze]),_:1},8,["visible"]),n(C,{visible:c.value,"onUpdate:visible":r[3]||(r[3]=a=>c.value=a),header:"Drawer",position:"right"},{default:l(()=>[Je]),_:1},8,["visible"]),n(C,{visible:s.value,"onUpdate:visible":r[4]||(r[4]=a=>s.value=a),header:"Drawer",position:"top"},{default:l(()=>[Qe]),_:1},8,["visible"]),n(C,{visible:h.value,"onUpdate:visible":r[5]||(r[5]=a=>h.value=a),header:"Drawer",position:"bottom"},{default:l(()=>[We]),_:1},8,["visible"]),n(C,{visible:L.value,"onUpdate:visible":r[6]||(r[6]=a=>L.value=a),header:"Drawer",position:"full"},{default:l(()=>[Xe]),_:1},8,["visible"]),n(u,{icon:"pi pi-arrow-right",onClick:r[7]||(r[7]=a=>v.value=!0),style:{"margin-right":"0.25em"}}),n(u,{icon:"pi pi-arrow-left",onClick:r[8]||(r[8]=a=>c.value=!0),style:{"margin-right":"0.25em"}}),n(u,{icon:"pi pi-arrow-down",onClick:r[9]||(r[9]=a=>s.value=!0),style:{"margin-right":"0.25em"}}),n(u,{icon:"pi pi-arrow-up",onClick:r[10]||(r[10]=a=>h.value=!0),style:{"margin-right":"0.25em"}}),n(u,{icon:"pi pi-external-link",onClick:r[11]||(r[11]=a=>L.value=!0)})]),i("div",Ge,[et,n(ee),n(u,{ref_key:"popup",ref:b,onClick:r[12]||(r[12]=a=>Q(a)),icon:"pi pi-check",label:"Confirm",class:"mr-2"},null,512)]),i("div",tt,[ot,n(u,{label:"Delete",icon:"pi pi-trash",severity:"danger",style:{width:"auto"},onClick:M}),n(R,{header:"Confirmation",visible:o.value,"onUpdate:visible":r[13]||(r[13]=a=>o.value=a),style:{width:"350px"},modal:!0},{footer:l(()=>[n(u,{label:"No",icon:"pi pi-times",onClick:O,text:"",severity:"secondary"}),n(u,{label:"Yes",icon:"pi pi-check",onClick:O,severity:"danger",outlined:"",autofocus:""})]),default:l(()=>[nt]),_:1},8,["visible"])])])])}}};export{Lt as default};
