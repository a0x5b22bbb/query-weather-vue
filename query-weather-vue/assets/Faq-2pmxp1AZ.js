import{s as x}from"./index-zm0wt7qO.js";import{P as g,a9 as q,ab as y,r as u,c as i,a as e,e as d,y as p,b as w,w as m,d as o,p as f,t as I,C as k}from"./index-BlT1HkFY.js";var A=g.extend({name:"accordiontab"}),$={name:"BaseAccordionTab",extends:q,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:A,provide:function(){return{$pcAccordionTab:this,$parentInstance:this}}},h={name:"AccordionTab",extends:$,inheritAttrs:!1,mounted:function(){console.warn("Deprecated since v4. Use the new structure of Accordion instead.")}};function C(s,a,r,c,l,v){return y(s.$slots,"default")}h.render=C;const B=e("div",{class:"card"},[e("div",{class:"text-surface-900 dark:text-surface-0 font-bold text-xl mb-4"},"Frequently Asked Questions"),e("p",{class:"text-surface-600 dark:text-surface-200 leading-normal"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.")],-1),S={class:"flex flex-col md:flex-row gap-8"},T={class:"card mb-0 md:w-80"},D=e("div",{class:"text-surface-900 dark:text-surface-0 block font-bold mb-4"},"Categories",-1),H={class:"list-none m-0 p-0"},P=["onClick"],F={class:"card flex-1"},N=e("p",{class:"leading-normal m-0 p-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),E={__name:"Faq",setup(s){const a=u(0),r=u([{label:"General",icon:"pi pi-fw pi-info-circle",questions:["Is there a trial period?","Do I need to sign up with credit card?","Is the subscription monthly or annual?","How many tiers are there?"]},{label:"Mailing",icon:"pi pi-fw pi-envelope",questions:["How do I setup my account?","Is there a limit on mails to send?","What is my inbox size?","How can I add attachements?"]},{label:"Support",icon:"pi pi-fw pi-question-circle",questions:["How can I get support?","What is the response time?","Is there a community forum?","Is live chat available?"]},{label:"Billing",icon:"pi pi-fw pi-credit-card",questions:["Will I receive an invoice?","How to provide my billing information?","Is VAT included?","Can I receive PDF invoices?"]}]),c=l=>{a.value=l};return(l,v)=>{const b=h,_=x;return o(),i("div",null,[B,e("div",S,[e("div",T,[D,e("ul",H,[(o(!0),i(d,null,p(r.value,(n,t)=>(o(),i("li",{key:t,onClick:V=>c(t),class:"mb-2"},[e("a",{class:f(["flex items-center cursor-pointer select-none p-4 transition-colors duration-150 rounded",{"bg-primary text-primary-contrast":a.value===t,"hover:bg-surface-100 dark:hover:bg-surface-800":a.value!==t}])},[e("i",{class:f(["mr-2 text-lg",n.icon])},null,2),e("span",null,I(n.label),1)],2)],8,P))),128))])]),e("div",F,[w(_,null,{default:m(()=>[(o(!0),i(d,null,p(r.value[a.value].questions,(n,t)=>(o(),k(b,{key:t,header:n},{default:m(()=>[N]),_:2},1032,["header"]))),128))]),_:1})])])])}}};export{E as default};
