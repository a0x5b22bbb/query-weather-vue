import{s as V}from"./index--HvzExSK.js";import{r as g,d as l,c as u,a as e,p as I,t as p,b as o,e as w,y as k,q as y,B as U,D as S,w as $,i as T,f as A,E as j,l as B,C as D,s as L,h as q,o as M,G as N}from"./index-BlT1HkFY.js";const E={class:"flex flex-col h-full"},F={class:"flex items-center border-b border-surface-200 dark:border-surface-700 p-4 lg:p-12"},J={class:"relative flex items-center mr-4"},K=["src","alt"],O={class:"mr-2"},z={class:"text-surface-900 dark:text-surface-0 font-semibold block"},G=e("span",{class:"text-surface-700 dark:text-surface-100"},"Last active 1 hour ago",-1),H={class:"flex items-center ml-auto"},P={class:"user-message-container p-4 md:px-6 lg:px-12 lg:py-6 mt-2 overflow-y-auto",style:{"max-height":"53vh"}},Q={key:0,class:"grid gap-4 grid-nogutter mb-6"},R={class:"mr-4 mt-1"},W=["src","alt"],X={class:"col mt-4"},Y={class:"text-surface-900 dark:text-surface-0 font-semibold mb-4"},Z={class:"text-surface-700 dark:text-surface-100 inline-block font-medium border border-surface-200 dark:border-surface-700 p-4 whitespace-normal rounded",style:{"word-break":"break-word","max-width":"80%"}},ee={class:"text-surface-700 dark:text-surface-100 mt-4"},se=e("i",{class:"pi pi-check ml-2 text-green-400"},null,-1),te={key:1,class:"grid gap-4 grid-nogutter mb-6"},ae={class:"col mt-4 text-right"},re={class:"inline-block text-left font-medium border border-surface-200 dark:border-surface-700 bg-primary-100 text-primary-900 p-4 whitespace-normal rounded",style:{"word-break":"break-word","max-width":"80%"}},oe={class:"text-surface-700 dark:text-surface-100 mt-4"},ne=e("i",{class:"pi pi-check ml-2 text-green-400"},null,-1),le={class:"p-4 md:p-6 lg:p-12 flex flex-col sm:flex-row items-center mt-auto border-t border-surface-200 dark:border-surface-700 gap-4"},ce={class:"flex w-full sm:w-auto gap-4"},de={__name:"ChatBox",props:{user:{type:Object,required:!0}},emits:["send:message"],setup(s,{emit:i}){const m=g(123),x=i,n=g(null),r=g(""),b=["😀","😃","😄","😁","😆","😅","😂","🤣","😇","😉","😊","🙂","🙃","😋","😌","😍","🥰","😘","😗","😙","😚","🤪","😜","😝","😛","🤑","😎","🤓","🧐","🤠","🥳","🤗","🤡","😏","😶","😐","😑","😒","🙄","🤨","🤔","🤫","🤭","🤥","😳","😞","😟","😠","😡","🤬","😔","😟","😠","😡","🤬","😔","😕","🙁","😬","🥺","😣","😖","😫","😩","🥱","😤","😮","😱","😨","😰","😯","😦","😧","😢","😥","😪","🤤"];function h(f){return new Date(f).toTimeString().split(":").slice(0,2).join(":")}function t(){if(r.value==""||r.value===" ")return;let f={text:r.value,ownerId:123,createdAt:new Date().getTime()};x("send:message",f),r.value=""}function c(f){r.value=r.value+f,n.value.hide()}return(f,d)=>{const v=T,_=A,C=V;return l(),u(w,null,[e("div",E,[e("div",F,[e("div",J,[e("img",{src:"/demo/images/avatar/"+s.user.image,alt:s.user.name,class:"w-16 h-16 rounded-full shadow-lg"},null,8,K),e("span",{class:I(["w-4 h-4 rounded-full border-2 border-surface-200 dark:border-surface-700 absolute bottom-0 right-0",{"bg-green-400":s.user.status==="active","bg-red-400":s.user.status==="busy","bg-yellow-400":s.user.status==="away"}])},null,2)]),e("div",O,[e("span",z,p(s.user.name),1),G]),e("div",H,[o(v,{type:"button",icon:"pi pi-phone",class:"mr-4",outlined:"",severity:"secondary",rounded:""}),o(v,{type:"button",icon:"pi pi-ellipsis-v",outlined:"",severity:"secondary",rounded:""})])]),e("div",P,[(l(!0),u(w,null,k(s.user.messages,a=>(l(),u("div",{key:a},[a.ownerId!==123?(l(),u("div",Q,[e("div",R,[e("img",{src:"/demo/images/avatar/"+s.user.image,alt:s.user.name,class:"w-12 h-12 rounded-full shadow-lg"},null,8,W)]),e("div",X,[e("p",Y,p(s.user.name),1),e("span",Z,p(a.text),1),e("p",ee,[y(p(h(a.createdAt)),1),se])])])):U("",!0),a.ownerId===m.value?(l(),u("div",te,[e("div",ae,[e("span",re,p(a.text),1),e("p",oe,[y(p(h(a.createdAt))+" ",1),ne])])])):U("",!0)]))),128))]),e("div",le,[o(_,{id:"message",type:"text",placeholder:"Type a message",class:"flex-1 w-full sm:w-auto rounded",modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=a=>r.value=a),onKeydown:d[1]||(d[1]=S(a=>t(),["enter"]))},null,8,["modelValue"]),e("div",ce,[o(v,{class:"w-full sm:w-auto justify-center text-xl",severity:"secondary",onClick:d[2]||(d[2]=a=>f.$refs.op.toggle(a))},{default:$(()=>[y("😀")]),_:1}),o(v,{label:"Send",icon:"pi pi-send",class:"w-full sm:w-auto",onClick:d[3]||(d[3]=a=>t())})])])]),o(C,{ref_key:"op",ref:n,class:"w-full sm:w-[30rem]"},{default:$(()=>[(l(),u(w,null,k(b,a=>o(v,{key:a,onClick:Ie=>c(a),type:"button",label:a,class:"p-2 text-2xl",text:""},null,8,["onClick","label"])),64))]),_:1},512)],64)}}},ue="/demo/images/avatar/circle/avatar-f-1@2x.png",ie={class:"flex flex-nowrap justify-between items-center border border-surface-200 dark:border-surface-700 rounded p-4 cursor-pointer select-none hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150",tabindex:"0"},me={class:"flex items-center"},fe={class:"relative md:mr-4"},pe=["src"],he={class:"flex-col hidden md:flex"},xe={class:"text-surface-900 dark:text-surface-0 font-semibold block"},ve={class:"block text-surface-600 dark:text-surface-200 text-ellipsis overflow-hidden whitespace-nowrap w-40 text-sm"},_e={class:"text-surface-700 dark:text-surface-100 font-semibold ml-auto hidden md:inline"},ge={__name:"UserCard",props:{user:{type:Object,required:!0}},setup(s){const i=s,m=j(()=>i.user.messages[i.user.messages.length-1].text);return(x,n)=>(l(),u("div",ie,[e("div",me,[e("div",fe,[e("img",{src:"/demo/images/avatar/"+s.user.image,alt:"user",class:"w-12 h-12 rounded-full shadow-lg"},null,8,pe),e("span",{class:I(["w-4 h-4 rounded-full border-2 border-surface-200 dark:border-surface-700 absolute",{"bg-green-400":s.user.status==="active","bg-red-400":s.user.status==="busy","bg-yellow-400":s.user.status==="away"}]),style:{bottom:"2px",right:"2px"}},null,2)]),e("div",he,[e("span",xe,p(s.user.name),1),e("span",ve,p(m.value),1)])]),e("span",_e,p(s.user.lastSeen),1)]))}},be=e("div",{class:"flex flex-col items-center border-b border-surface-200 dark:border-surface-700 p-12"},[e("img",{src:ue,class:"w-24 h-24 rounded-full shadow-lg",alt:"Asiya Javayant"}),e("span",{class:"text-surface-900 dark:text-surface-0 text-xl font-semibold mt-6"},"Asiya Javayant")],-1),we={class:"w-full flex gap-y-6 flex-col border-surface-200 dark:border-surface-700 p-6"},ye={class:"flex flex-row gap-6 md:flex-col overflow-auto"},ke={__name:"ChatSidebar",props:{users:{type:Array,default:()=>[]}},emits:["change:active:user"],setup(s,{emit:i}){const m=i,x=s,n=g([]),r=g("");B(()=>x.users,t=>{n.value=t},{immediate:!0});function b(t){m("change:active:user",t)}async function h(){if(r.value===""){n.value=x.users;return}const t=n.value.filter(c=>c.name.toLowerCase().includes(r.value.toLowerCase()));n.value=[...t]}return(t,c)=>{const f=L,d=A,v=q;return l(),u(w,null,[be,e("div",we,[o(v,{class:"w-full"},{default:$(()=>[o(f,{class:"pi pi-search"}),o(d,{id:"search",type:"text",placeholder:"Search",class:"w-full",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=_=>r.value=_),onInput:h},null,8,["modelValue"])]),_:1}),e("div",ye,[(l(!0),u(w,null,k(n.value,_=>(l(),D(ge,{key:_,user:_,onClick:C=>b(_)},null,8,["user","onClick"]))),128))])])],64)}}},$e={class:"flex flex-col md:flex-row gap-8",style:{"min-height":"81vh"}},Ce={class:"md:w-[25rem] card p-0"},Ue={class:"flex-1 card p-0"},Se={__name:"Index",setup(s){const i=g(1),m=g([]);M(async()=>{m.value=await x(),h()});async function x(){const t=await fetch("/demo/data/chat.json"),{data:c}=await t.json();return c}function n(t){i.value=t.id,h()}function r(t){b().messages.push(t),h()}function b(){return m.value.find(t=>t.id===i.value)||{}}async function h(){const t=document.querySelector(".user-message-container");await N(()=>{t.scroll({top:t.scrollHeight})})}return(t,c)=>(l(),u("div",$e,[e("div",Ce,[o(ke,{"onChange:active:user":n,users:m.value},null,8,["users"])]),e("div",Ue,[o(de,{"onSend:message":r,user:b()},null,8,["user"])])]))}};export{Se as default};
