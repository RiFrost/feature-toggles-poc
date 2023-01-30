import{d as y,P as x,r as b,c as p,t as j,o as O,a as L,u as g,i as T,p as P,b as z,e as A,w as q,h as V,V as W,f as Y,F as C,g as $,j as J,k as S,l as _,m as u,n as Q,q as X,v as Z,s as D,x as ee,y as te,z as ne,A as E}from"./index-73296850.js";var N=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(N||{});let le=y({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:s,attrs:n}){return()=>{let{features:t,...o}=e,l={"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return x({ourProps:l,theirProps:o,slot:{},attrs:n,slots:s,name:"Hidden"})}}});function se(e){var s;let n=(s=e==null?void 0:e.form)!=null?s:e.closest("form");if(n){for(let t of n.elements)if(t.tagName==="INPUT"&&t.type==="submit"||t.tagName==="BUTTON"&&t.type==="submit"||t.nodeName==="INPUT"&&t.type==="image"){t.click();return}}}function ae(e,s,n){let t=b(n==null?void 0:n.value),o=p(()=>e.value!==void 0);return[p(()=>o.value?e.value:t.value),function(l){return o.value||(t.value=l),s==null?void 0:s(l)}]}let U=Symbol("DescriptionContext");function oe(){let e=T(U,null);if(e===null)throw new Error("Missing parent");return e}function re({slot:e=b({}),name:s="Description",props:n={}}={}){let t=b([]);function o(l){return t.value.push(l),()=>{let i=t.value.indexOf(l);i!==-1&&t.value.splice(i,1)}}return P(U,{register:o,slot:e,name:s,props:n}),p(()=>t.value.length>0?t.value.join(" "):void 0)}let ye=y({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${j()}`}},setup(e,{attrs:s,slots:n}){let t=oe();return O(()=>L(t.register(e.id))),()=>{let{name:o="Description",slot:l=b({}),props:i={}}=t,{id:d,...c}=e,f={...Object.entries(i).reduce((a,[v,h])=>Object.assign(a,{[v]:g(h)}),{}),id:d};return x({ourProps:f,theirProps:c,slot:l.value,attrs:s,slots:n,name:o})}}}),B=Symbol("LabelContext");function G(){let e=T(B,null);if(e===null){let s=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(s,G),s}return e}function ie({slot:e={},name:s="Label",props:n={}}={}){let t=b([]);function o(l){return t.value.push(l),()=>{let i=t.value.indexOf(l);i!==-1&&t.value.splice(i,1)}}return P(B,{register:o,slot:e,name:s,props:n}),p(()=>t.value.length>0?t.value.join(" "):void 0)}let xe=y({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${j()}`}},setup(e,{slots:s,attrs:n}){let t=G();return O(()=>L(t.register(e.id))),()=>{let{name:o="Label",slot:l={},props:i={}}=t,{id:d,passive:c,...f}=e,a={...Object.entries(i).reduce((v,[h,k])=>Object.assign(v,{[h]:g(k)}),{}),id:d};return c&&(delete a.onClick,delete f.onClick),x({ourProps:a,theirProps:f,slot:l,attrs:n,slots:s,name:o})}}}),M=Symbol("GroupContext");y({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:s,attrs:n}){let t=b(null),o=ie({name:"SwitchLabel",props:{onClick(){!t.value||(t.value.click(),t.value.focus({preventScroll:!0}))}}}),l=re({name:"SwitchDescription"});return P(M,{switchRef:t,labelledby:o,describedby:l}),()=>x({theirProps:e,ourProps:{},slot:{},slots:s,attrs:n,name:"SwitchGroup"})}});let ue=y({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${j()}`}},inheritAttrs:!1,setup(e,{emit:s,attrs:n,slots:t,expose:o}){let l=T(M,null),[i,d]=ae(p(()=>e.modelValue),r=>s("update:modelValue",r),p(()=>e.defaultChecked));function c(){d(!i.value)}let f=b(null),a=l===null?f:l.switchRef,v=z(p(()=>({as:e.as,type:n.type})),a);o({el:a,$el:a});function h(r){r.preventDefault(),c()}function k(r){r.key===$.Space?(r.preventDefault(),c()):r.key===$.Enter&&se(r.currentTarget)}function F(r){r.preventDefault()}let w=p(()=>{var r,m;return(m=(r=A(a))==null?void 0:r.closest)==null?void 0:m.call(r,"form")});return O(()=>{q([w],()=>{if(!w.value||e.defaultChecked===void 0)return;function r(){d(e.defaultChecked)}return w.value.addEventListener("reset",r),()=>{var m;(m=w.value)==null||m.removeEventListener("reset",r)}},{immediate:!0})}),()=>{let{id:r,name:m,value:H,...K}=e,I={checked:i.value},R={id:r,ref:a,role:"switch",type:v.value,tabIndex:0,"aria-checked":i.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:h,onKeyup:k,onKeypress:F};return V(C,[m!=null&&i.value!=null?V(le,W({features:N.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,name:m,value:H})):null,x({ourProps:R,theirProps:{...n,...Y(K,["modelValue","defaultChecked"])},slot:I,attrs:n,slots:t,name:"Switch"})])}}});const de={class:"flex justify-center"},ce=u("span",{class:"sr-only"},"Use setting",-1),pe={class:"flex justify-center"},fe={class:"toggle2-button mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},ve={class:"relative px-6 lg:px-8"},me={class:"mx-auto max-w-2xl py-16 sm:py-24 lg:py-28"},be={class:"text-center"},ge={class:"text-2xl font-bold tracking-tight text-blue-900 sm:text-4xl"},we={__name:"FeatureToggleView",setup(e){const s="https://poc-feature-toggles.herokuapp.com/api";var n=J(),t=b(""),o=p(()=>n.getToggles);p(()=>n.is);function l(){console.log(o.value)}async function i(){return await ee.get(`${s}/getSampleMessage`).then(d=>{t.value=d.data}).catch(d=>console.log(d))}return(d,c)=>{var f;return S(),_(C,null,[u("div",de,[(S(!0),_(C,null,Q(g(o),a=>(S(),_("div",{class:"mx-8 py-8",key:a},[te(g(ue),{modelValue:a.enabled,"onUpdate:modelValue":v=>a.enabled=v,class:E([[a.enabled?"bg-emerald-700":"bg-gray-700",a.name],"relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]),onClick:v=>g(n).updateToggle(a)},{default:ne(()=>[ce,u("span",{"aria-hidden":"true",class:E([a.enabled?"translate-x-9":"translate-x-0","pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])},null,2)]),_:2},1032,["modelValue","onUpdate:modelValue","class","onClick"]),u("h2",null,D(a.name),1)]))),128)),u("button",{onClick:c[0]||(c[0]=a=>l())},"Print Toggles")]),u("div",pe,[u("button",{onClick:c[1]||(c[1]=a=>i()),class:"mt-10 ml-3 flex w-1/4 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}," Get Message "),X(u("button",fe," Only shows when Toggle 2 is on ",512),[[Z,(f=g(o).TOGGLE_2)==null?void 0:f.enabled]])]),u("main",null,[u("div",ve,[u("div",me,[u("div",be,[u("h1",ge,D(g(t)),1)])])])])],64)}}};export{we as default};
