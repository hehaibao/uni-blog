var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{ae as d,aS as n,d as c,P as p,o as y,c as i,q as b,u,a8 as f,x as v,t as h,e as m,a as w,a9 as O,a5 as j,aa as g}from"./index.8b0944bc.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=c({name:"ElCard"}),$=c((k=((e,a)=>{for(var r in a||(a={}))t.call(a,r)&&l(e,r,a[r]);if(s)for(var r of s(a))o.call(a,r)&&l(e,r,a[r]);return e})({},P),a(k,r({props:S,setup(e){const a=p("card");return(e,r)=>(y(),i("div",{class:b([u(a).b(),u(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(y(),i("div",{key:0,class:b(u(a).e("header"))},[f(e.$slots,"header",{},(()=>[v(h(e.header),1)]))],2)):m("v-if",!0),w("div",{class:b(u(a).e("body")),style:O(e.bodyStyle)},[f(e.$slots,"default")],6)],2))}}))));var k;const x=g(j($,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{x as E};