import{_ as a,h as l,$ as e,g as s,i as n,Q as t,be as i,m as d,n as o,o as u,c as r,a as m,s as c,b as p,w as f,F as v,v as b,e as k,f as _,x as g,t as h,u as y,bf as j,bg as w,y as x}from"./index.8b0944bc.js";import{v as V}from"./el-loading.b62d3c1b.js";import{E,a as $}from"./el-form-item.1a7a9474.js";import{E as A}from"./el-empty.3cd9bc86.js";import{E as L,a as R}from"./el-col.668843ca.js";import{E as U}from"./el-card.d1343cac.js";import{E as z}from"./el-link.44b80be3.js";import"./_arrayPush.e7419095.js";var C=a({__name:"links",setup(a){l((a=>{e("setRightStyle",{type:"putRightMenuActiveKey",data:"友情链接"}),K()}));const C=s([]),F=s(!0),I=s(!1),K=()=>{F.value=!0,n("getLinks",{isApproved:!0}).then((a=>{F.value=!1,C.value=a.data})).catch((()=>{F.value=!1}))},M=t({name:"",link:""}),P=()=>M.name?M.link?/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(M.link)?(I.value=!0,void n("addLinks",{name:M.name,link:M.link}).then((a=>{I.value=!1,x.success("已提交，等待审核通过后即可展示..."),M.name="",M.link=""})).catch((()=>{I.value=!1}))):x.warning("请输入正确的链接"):x.warning("请填写链接"):x.warning("请填写名称");return(a,l)=>{const e=z,s=U,n=L,t=R,x=A,K=i,Q=d,S=E,q=o,B=$,D=V;return u(),r("div",{class:"main"},[m("span",{class:"navigation-name"},"友情链接"),c((u(),r("div",{class:"main-max-width post-list"},[C.value.length>0?(u(),p(t,{key:0,gutter:12},{default:f((()=>[(u(!0),r(v,null,b(C.value,((a,l)=>(u(),p(n,{key:a._id,span:8},{default:f((()=>[_(s,{"body-style":{padding:"0px"}},{default:f((()=>[m("div",{style:{padding:"14px"}},[_(e,{class:"link",href:`${a.link}`,target:"_blank"},{default:f((()=>[g(h(a.name),1)])),_:2},1032,["href"]),m("div",{class:"link-name"},h(a.link),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):F.value?k("",!0):(u(),p(x,{key:1,description:"这里暂时没有数据～"})),_(K,{"border-style":"dashed"}),_(K,{"border-style":"dashed"}),m("div",{class:"desc"},[_(K,{"content-position":"left"},{default:f((()=>[g("申请友链须知：")])),_:1}),m("ul",null,[m("li",null,"在您申请本站友链之前，请先加好本站链接，否则不会通过，谢谢！"),m("li",null,"您的网站必须已被搜索引擎收录，并且是已备案过的一级域名。"),m("li",null,"不接受购物站、采集站、广告过多的网站、内容较少的网站。"),m("li",null,"如果您申请的链接24小时以内没有通过，即表示暂不添加您的链接。")]),_(K,{"content-position":"left"},{default:f((()=>[g("友链格式如下：")])),_:1}),m("div",{class:"desc-box"},[m("div",{class:"c-row"},[m("span",{class:"bold"},"名称："),g(h(y(j)),1)]),m("div",{class:"c-row"},[m("span",{class:"bold"},"链接："),g(h(y(w)),1)])])]),m("div",{class:"apply-form"},[_(K,{"content-position":"left"},{default:f((()=>[g("在线申请友链：")])),_:1}),_(B,{inline:!0,model:M,class:"demo-form-inline"},{default:f((()=>[_(S,{label:"名称"},{default:f((()=>[_(Q,{modelValue:M.name,"onUpdate:modelValue":l[0]||(l[0]=a=>M.name=a),placeholder:"请填写名称"},null,8,["modelValue"])])),_:1}),_(S,{label:"链接"},{default:f((()=>[_(Q,{modelValue:M.link,"onUpdate:modelValue":l[1]||(l[1]=a=>M.link=a),placeholder:"请填写链接"},null,8,["modelValue"])])),_:1}),_(S,null,{default:f((()=>[_(q,{type:"primary",loading:I.value,onClick:P},{default:f((()=>[g("提交申请")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])])),[[D,F.value]])])}}},[["__scopeId","data-v-34dbaf06"]]);export{C as default};
