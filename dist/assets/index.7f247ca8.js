import{r as d,o as u,c as f,a as c,b as a,t as i,F as p,w as _,v as h,d as y,e as g,f as v,g as b,h as w}from"./vendor.b4a1eb0c.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};k();var m=(o,e)=>{const r=o.__vccOpts||o;for(const[l,t]of e)r[l]=t;return r};const x={};function V(o,e){const r=d("RouterView");return u(),f(r)}var C=m(x,[["render",V]]),D={state(){return{}}};const L={name:"home",data(){return{title:"Random user",name:"",email:"",image:""}},created(){this.fetchNew()},methods:{async fetchNew(){const e=await fetch("https://randomuser.me/api/"),{results:r}=await e.json();console.log(r),this.name=`${r[0].name.first} ${r[0].name.last}`,this.image=r[0].picture.large}}},N=["src"];function A(o,e,r,l,t,n){return u(),c(p,null,[a("h1",null,i(t.title),1),a("img",{src:t.image},null,8,N),a("span",null,i(t.name),1),a("button",{onClick:e[0]||(e[0]=(...s)=>n.fetchNew&&n.fetchNew(...s))},"Get new")],64)}var E=m(L,[["render",A],["__scopeId","data-v-86494b2a"]]);const M={name:"users",data(){return{title:"Users list",nameValue:"",people:[],personEmail:"",data:{},obj:{title:"title",articles:[{tit:1,body:"bod1"},{tit:2,body:"bod2"},{tit:3,body:"bod3"}]}}},created(){this.fetchData(),this.sumThis()},methods:{async fetchData(){const r=await fetch("https://randomuser.me/api/?page=2&results=20",{method:"GET",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"}}),{results:l}=await r.json();this.people=l,console.log("HereMyCLientID_envproduction")},findPerson(){const o=this.people.find(e=>e.name.first===this.nameValue);this.personEmail=o.email},onlyMale(){const o=this.people.filter(e=>e.gender==="male");this.people=o},sortAlpha(){const o=this.people.sort((e,r)=>e.name.last>r.name.last?1:e.name.last<r.name.last?-1:0);this.people=o},sumThis(){const e=[1,4,6,9].reduce((r,l)=>l+r,10);console.log(e)}}};function O(o,e,r,l,t,n){return u(),c(p,null,[a("h1",null,i(t.title),1),_(a("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>t.nameValue=s)},null,512),[[h,t.nameValue]]),a("span",null,i(t.nameValue),1),a("span",null,i(t.personEmail),1),a("ul",null,[(u(!0),c(p,null,y(t.people,s=>(u(),c("li",{key:s.id.value},i(s.name.first)+" "+i(s.name.last),1))),128))]),a("button",{onClick:e[1]||(e[1]=(...s)=>n.fetchData&&n.fetchData(...s)),class:"button-getnew"},"Get new list"),a("button",{onClick:e[2]||(e[2]=(...s)=>n.findPerson&&n.findPerson(...s))},"get email"),a("button",{onClick:e[3]||(e[3]=(...s)=>n.onlyMale&&n.onlyMale(...s))},"Only male"),a("button",{onClick:e[4]||(e[4]=(...s)=>n.sortAlpha&&n.sortAlpha(...s))},"Sorting")],64)}var P=m(M,[["render",O],["__scopeId","data-v-3d9cab70"]]),T=[{name:"home",path:"/",component:E},{name:"users",path:"/users",component:P}];const j=g(D),B=v({routes:T,history:b()});w(C).use(j).use(B).mount("#app");
