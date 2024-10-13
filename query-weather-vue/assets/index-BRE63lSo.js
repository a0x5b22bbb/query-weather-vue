import{P as s,a9 as l,d,c,a as o,ab as t,aa as r}from"./index-BlT1HkFY.js";var p=function(n){var e=n.dt;return`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: `.concat(e("toolbar.padding"),`;
    background: `).concat(e("toolbar.background"),`;
    border: 1px solid `).concat(e("toolbar.border.color"),`;
    color: `).concat(e("toolbar.color"),`;
    border-radius: `).concat(e("toolbar.border.radius"),`;
    gap: `).concat(e("toolbar.gap"),`;
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`)},i={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},b=s.extend({name:"toolbar",theme:p,classes:i}),m={name:"BaseToolbar",extends:l,props:{ariaLabelledby:{type:String,default:null}},style:b,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},u={name:"Toolbar",extends:m,inheritAttrs:!1},v=["aria-labelledby"];function y(a,n,e,$,f,g){return d(),c("div",r({class:a.cx("root"),role:"toolbar","aria-labelledby":a.ariaLabelledby},a.ptmi("root")),[o("div",r({class:a.cx("start")},a.ptm("start")),[t(a.$slots,"start")],16),o("div",r({class:a.cx("center")},a.ptm("center")),[t(a.$slots,"center")],16),o("div",r({class:a.cx("end")},a.ptm("end")),[t(a.$slots,"end")],16)],16,v)}u.render=y;export{u as s};
