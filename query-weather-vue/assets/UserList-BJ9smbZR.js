import{s as C}from"./index-Cu5jXQIr.js";import{s as P}from"./index-DCC0JlDe.js";import{s as x}from"./index-Cnpt1SBf.js";import{z as L,r as i,o as k,c as N,b as t,w as a,F as R,d as T,a as s,q as m,t as n,p as D,s as S,f as V,h as $,i as B}from"./index-BlT1HkFY.js";import{C as F}from"./CustomerService-8FauNFEf.js";import"./index-DnhmL6mH.js";import"./index-CqKtGezN.js";import"./index-Br-3cgV9.js";import"./index-Bg-WbENU.js";import"./index-M85sYDf4.js";import"./index-BX4YjXLu.js";import"./index-BP8pj-hj.js";import"./index-BOOD8GKY.js";import"./index-Dnyg5ffP.js";import"./index-CbSgyMFv.js";const I={class:"card"},M={class:"flex flex-wrap gap-2 items-center justify-between"},U={class:"flex items-center gap-2"},A=["alt"],z={class:"inline-flex items-center"},O=["alt","src"],re={__name:"UserList",setup(j){const d=L(),u=i(null),c=i([]),o=i({global:{value:null,matchMode:R.CONTAINS}});k(async()=>{c.value=await F.getCustomersLarge()});function f(p){return new Date(p).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})}function g(){d.push({name:"user-create"})}return(p,l)=>{const h=S,_=V,w=$,v=B,r=x,y=P,b=C;return T(),N("div",I,[t(b,{ref_key:"tableRef",ref:u,value:c.value,paginator:"",rows:10,showCurrentPageReport:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",rowsPerPageOptions:[10,25,50],globalFilterFields:["name","country.name","representative.name"],filters:o.value,"onUpdate:filters":l[1]||(l[1]=e=>o.value=e)},{header:a(()=>[s("div",M,[t(w,{class:"w-full sm:w-80 order-1 sm:order-none"},{default:a(()=>[t(h,{class:"pi pi-search"}),t(_,{modelValue:o.value.global.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value.global.value=e),placeholder:"Global Search",class:"w-full"},null,8,["modelValue"])]),_:1}),t(v,{type:"button",icon:"pi pi-user-plus",label:"Add New",class:"w-full sm:w-auto order-none sm:order-1",outlined:"",onClick:g})])]),default:a(()=>[t(r,{field:"name",header:"Name",sortable:"",headerClass:"whitespace-nowrap",style:{width:"25%"}},{body:a(({data:e})=>[m(n(e.name),1)]),_:1}),t(r,{field:"country.name",header:"Country",sortable:"",headerClass:"whitespace-nowrap",style:{width:"25%"}},{body:a(({data:e})=>[s("div",U,[s("img",{alt:e.country.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D("w-8 mr-2 flag flag-"+e.country.code)},null,10,A),s("span",null,n(e.country.name),1)])]),_:1}),t(r,{field:"date",header:"Join Date",sortable:"",headerClass:"whitespace-nowrap",style:{width:"25%"}},{body:a(({data:e})=>[m(n(f(e.date)),1)]),_:1}),t(r,{field:"representative.name",header:"Created By",headerClass:"whitespace-nowrap",style:{width:"25%"},sortable:""},{body:a(({data:e})=>[s("div",z,[s("img",{alt:e.representative.name,src:`/demo/images/avatar/${e.representative.image}`,class:"w-8 mr-2"},null,8,O),s("span",null,n(e.representative.name),1)])]),_:1}),t(r,{field:"activity",header:"Activity",headerClass:"whitespace-nowrap",style:{width:"25%"},sortable:""},{body:a(({data:e})=>[t(y,{value:e.activity,showValue:!1,style:{height:".5rem"}},null,8,["value"])]),_:1})]),_:1},8,["value","filters"])])}}};export{re as default};
