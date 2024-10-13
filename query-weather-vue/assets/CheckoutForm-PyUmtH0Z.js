import{s as v}from"./index--7NpXa9D.js";import{r as l,o as g,c as y,a as e,b as s,w as k,m as n,d as w,i as C,f as V}from"./index-BlT1HkFY.js";import{s as B}from"./index-Bg-WbENU.js";import{s as I}from"./index-CqKtGezN.js";import{s as S}from"./index-BOOD8GKY.js";import{C as j}from"./CountryService-DCLybesZ.js";import"./index-M85sYDf4.js";import"./index-Br-3cgV9.js";import"./index-Dnyg5ffP.js";const N="/demo/images/ecommerce/shop/shop-1.png",$="/demo/images/ecommerce/shop/flag.png",U={class:"card"},L={class:"grid grid-cols-12 gap-4 grid-nogutter"},P=e("div",{class:"col-span-12 px-6 mt-6 md:mt-12 md:px-12"},[e("span",{class:"text-surface-900 dark:text-surface-0 block font-bold text-xl"},"Checkout")],-1),A={class:"col-span-12 lg:col-span-6 h-full px-6 py-6 md:px-12"},E=n('<ul class="flex list-none flex-wrap p-0 mb-12"><li class="flex items-center text-primary mr-2">Cart <i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li><li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Information<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li><li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Shipping<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li><li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Payment</li></ul>',1),F={class:"grid grid-cols-12 gap-4"},R={class:"col-span-12 mb-12"},T=e("span",{class:"text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8"},"Contact Information",-1),q=e("input",{id:"email",placeholder:"Email",type:"text",class:"p-inputtext w-full mb-6"},null,-1),z={class:"flex items-center"},G=e("label",{class:"ml-2",for:"checkbox-1"},"Email me with news and offers",-1),M={class:"col-span-12 mb-6"},Y=e("span",{class:"text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8"},"Shipping",-1),D=n('<div class="col-span-12 lg:col-span-6 mb-6"><input id="name" placeholder="Name" type="text" class="p-inputtext w-full"></div><div class="col-span-12 lg:col-span-6 mb-6"><input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full"></div><div class="col-span-12 mb-6"><input id="address" placeholder="Address" type="text" class="p-inputtext w-full"></div><div class="col-span-12 mb-6"><input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full"></div><div class="col-span-12 lg:col-span-6 mb-6"><input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full"></div><div class="col-span-12 lg:col-span-6 mb-6"><input id="city" placeholder="City" type="text" class="p-inputtext w-full"></div>',6),H={class:"col-span-12 lg:col-span-6 mb-6"},J={class:"flex items-center"},K=e("label",{class:"ml-2",for:"checkbox-2"},"Save for next purchase",-1),O={class:"col-span-12 flex flex-col lg:flex-row justify-center items-center lg:justify-end my-12"},Q={class:"col-span-12 lg:col-span-6 px-6 py-6 md:px-12"},W=e("div",{class:"pb-4 border-surface-200 dark:border-surface-700"},[e("span",{class:"text-surface-900 dark:text-surface-0 font-medium text-xl"},"Your Cart")],-1),X={class:"flex flex-col lg:flex-row flex-wrap lg:items-center py-2 mt-4 border-surface-200 dark:border-surface-700"},Z=e("img",{src:N,class:"w-32 h-32 flex-shrink-0 mb-4",alt:"product"},null,-1),ee={class:"flex-auto lg:ml-4"},te=e("div",{class:"flex items-center justify-between mb-4"},[e("span",{class:"text-surface-900 dark:text-surface-0 font-bold"},"Product Name"),e("span",{class:"text-surface-900 dark:text-surface-0 font-bold"},"$123.00")],-1),se=e("div",{class:"text-surface-600 dark:text-surface-200 text-sm mb-4"},"Black | Large",-1),ae={class:"flex flex-auto justify-between items-center"},le={class:"py-2 mt-4 border-surface-200 dark:border-surface-700"},oe=n('<div class="py-2 mt-4"><div class="flex justify-between items-center mb-4"><span class="text-surface-900 dark:text-surface-0 font-medium">Subtotal</span><span class="text-surface-900 dark:text-surface-0">$123.00</span></div><div class="flex justify-between items-center mb-4"><span class="text-surface-900 dark:text-surface-0 font-medium">Shipping</span><span class="text-primary font-bold">Free</span></div><div class="flex justify-between items-center mb-4"><span class="text-surface-900 dark:text-surface-0 font-bold">Total</span><span class="text-surface-900 dark:text-surface-0 font-medium text-xl">$123.00</span></div></div><div class="py-2 mt-4 bg-yellow-100 flex items-center justify-center rounded"><img src="'+$+'" class="mr-2" alt="Country Flag"><span class="text-black/90 font-medium">No additional duties or taxes.</span></div>',2),_e={__name:"CheckoutForm",setup(ce){const c=l(""),r=l([1,1,1]),i=l(!0),d=l(!0),p=l(null),u=l([]);return g(()=>{j.getCountries().then(m=>u.value=m)}),(m,t)=>{const x=S,f=I,o=C,_=B,b=V,h=v;return w(),y("div",U,[e("div",L,[P,e("div",A,[E,e("div",F,[e("div",R,[T,q,e("div",z,[s(x,{name:"checkbox-1",modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),binary:"",inputId:"checkbox-1"},null,8,["modelValue"]),G])]),e("div",M,[Y,s(f,{options:u.value,modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a),placeholder:"Country / Region",optionLabel:"name",showClear:"",class:"w-full"},null,8,["options","modelValue"])]),D,e("div",H,[e("div",J,[s(x,{name:"checkbox-2",modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=a=>d.value=a),binary:"",inputId:"checkbox-2"},null,8,["modelValue"]),K])]),e("div",O,[s(o,{class:"mt-4 lg:mt-0 w-full lg:w-auto order-2 lg:order-1 lg:mr-6",severity:"secondary",outlined:"",label:"Return to Cart",icon:"pi pi-fw pi-arrow-left"}),s(o,{class:"w-full lg:w-auto order-1 lg:order-2",label:"Continue to Shipping",icon:"pi pi-fw pi-check"})])])]),e("div",Q,[W,e("div",X,[Z,e("div",ee,[te,se,e("div",ae,[s(_,{showButtons:"",buttonLayout:"horizontal",min:0,inputClass:"w-8 text-center py-2 px-1 border-transparent outline-0 shadow-none",modelValue:r.value[0],"onUpdate:modelValue":t[3]||(t[3]=a=>r.value[0]=a),class:"border border-surface-200 dark:border-surface-700 rounded",decrementButtonClass:"p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1",incrementButtonClass:"p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue"]),s(o,{icon:"pi pi-trash",text:"",rounded:""})])])]),e("div",le,[s(h,{class:"mt-4"},{default:k(()=>[s(b,{type:"text",modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=a=>c.value=a),placeholder:"Promo code",class:"w-full"},null,8,["modelValue"]),s(o,{type:"button",label:"Apply",disabled:!c.value},null,8,["disabled"])]),_:1})]),oe])])])}}};export{_e as default};
