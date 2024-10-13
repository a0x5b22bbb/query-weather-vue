import{P as s,aN as r,M as l,d,c as i,ab as p,b as c,aa as n}from"./index-BlT1HkFY.js";var v=function(t){var a=t.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(a("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(a("overlaybadge.outline.color"),`;
}
`)},g={root:"p-overlaybadge"},m=s.extend({name:"overlaybadge",theme:v,classes:g}),u={name:"OverlayBadge",extends:r,style:m,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:u,inheritAttrs:!1,components:{Badge:r}};function B(e,t,a,b,h,$){var o=l("Badge");return d(),i("div",n({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default"),c(o,n(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=B;export{y as s};
