import{s as x}from"./index-BcFd46DZ.js";import{j as f,z as g,r as h,c as w,a as t,J as r,b as s,w as e,p as b,d as y,q as d,s as k,f as v,h as C,i as $}from"./index-BlT1HkFY.js";import{_ as N,a as B}from"./appname-gray-zZ5hlTXw.js";const I={class:"login-image w-6/12 h-screen hidden md:block",style:{"max-width":"490px"}},P=["src"],T={class:"w-full",style:{background:"var(--surface-ground)"}},V={class:"flex flex-col"},j={class:"flex items-center mb-12 logo-container"},z=["src"],E=["src"],F={class:"form-container text-left",style:{"max-width":"320px","min-width":"270px"}},q=t("span",{class:"text-2xl font-semibold m-0"},"New Password",-1),D=t("span",{class:"block text-surface-600 dark:text-surface-200 font-medium mb-6 mt-4"},"Enter your new password",-1),H={class:"button-container mt-6",style:{"max-width":"320px","min-width":"270px"}},J={class:"buttons flex items-center gap-4"},L=t("div",{class:"login-footer flex items-center absolute",style:{bottom:"75px"}},[t("div",{class:"flex items-center login-footer-logo-container pr-6 mr-6 border-r border-surface-200 dark:border-surface-700"},[t("img",{src:N,class:"login-footer-logo",style:{width:"22px"}}),t("img",{src:B,class:"login-footer-appname ml-2",style:{width:"45px"}})]),t("span",{class:"text-sm text-surface-500 dark:text-surface-400 mr-4"},"Copyright 2024")],-1),O={__name:"NewPassword",setup(R){const{isDarkTheme:o}=f(),m=g(),p=h(!1);function a(){return o.value?"light":"dark"}function u(){m.push("/")}return(S,A)=>{const l=k,n=v,c=C,i=$,_=x;return y(),w("div",{class:b("login-body flex min-h-screen  "+(r(o)?"layout-dark":"layout-light"))},[t("div",I,[t("img",{src:"/demo/images/pages/newpassword-"+(r(o)?"ondark":"onlight")+".png",alt:"atlantis",class:"h-screen w-full"},null,8,P)]),t("div",T,[s(_,{class:"min-h-screen text-center w-full flex items-center md:items-start justify-center flex-col bg-auto md:bg-contain bg-no-repeat",style:{padding:"20% 10% 20% 10%",background:"var(--exception-pages-image)"}},{default:e(()=>[t("div",V,[t("div",j,[t("img",{src:`/layout/images/logo/logo-${a()}.png`,class:"login-logo",style:{width:"45px"}},null,8,z),t("img",{src:`/layout/images/logo/appname-${a()}.png`,class:"login-appname ml-4",style:{width:"100px"}},null,8,E)]),t("div",F,[q,D,s(c,null,{default:e(()=>[s(l,{class:"pi pi-key"}),s(n,{type:"password",autocomplete:"off",placeholder:"Password",class:"block mb-4",style:{"max-width":"320px","min-width":"270px"}})]),_:1}),s(c,null,{default:e(()=>[s(l,{class:"pi pi-key"}),s(n,{type:"password",autocomplete:"off",placeholder:"Password",class:"block mb-4",style:{"max-width":"320px","min-width":"270px"}})]),_:1})]),t("div",H,[t("div",J,[s(i,{type:"button",onClick:u,class:"block",severity:"danger",outlined:"",style:{"max-width":"320px","margin-bottom":"32px"}},{default:e(()=>[d("Cancel")]),_:1}),s(i,{type:"button",onClick:p.value,class:"block",style:{"max-width":"320px","margin-bottom":"32px"}},{default:e(()=>[d("Submit")]),_:1},8,["onClick"])])])]),L]),_:1})])],2)}}};export{O as default};
