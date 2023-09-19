import{r as i,R as A,a as y,j as n}from"./jsx-runtime.f1af5f51.js";import{A as G}from"./index.b3bf8735.js";import{u as E,T as l,i as V,c as Y,C as k,a as J,S as O,b as I,K,U as X,o as D,d as x,e as N}from"./index.58eaf1b0.js";import{V as Q}from"./fixtures.e9667a2d.js";import{b as Z,t as ee,C as te,s as T}from"./theme.64990531.js";import"./index.484a71f2.js";import{L as $}from"./index.20599644.js";import{n as p}from"./index.cc4ea04d.js";import"./index.ff687748.js";import"./index.9b4210f2.js";import{c as oe}from"./index.509cc253.js";import"./index.dfbb7462.js";import"./index.8cd10cfd.js";import"./index.f2718895.js";import"./index.fe947515.js";import"./index.7c47736a.js";import"./index.8fe0b1b7.js";import"./index.8c48fbf4.js";import"./index.520dfeb4.js";import"./index.d1198f96.js";import"./iframe.f1455ed3.js";import"./index.d661ef94.js";import"./variants.935b7353.js";import"./top-caret.79f464e8.js";import"./is-plain-object.ed97bcae.js";const j=e=>{const[r,s]=i.exports.useState("");return i.exports.useEffect(()=>{e!=null&&e.color&&s(Z({color:e.color}))},[e==null?void 0:e.color]),r},re=380,ie=800,M=ee(te.WIDGET),d=T(M("div","chat"),{width:re,overflow:"hidden",borderRadius:"$2",boxShadow:"0 2px 48px rgba(19,33,68,0.16), 0 0 0 1px $shadow4",height:"90%",maxHeight:ie,"@mobile":{position:"fixed",height:"unset",maxHeight:"unset",width:"unset",left:0,right:0,top:0,bottom:0,borderRadius:0,boxShadow:"none"}}),u=T(M("div","launcher"),{}),H={opacity:1,pointerEvents:"auto",transform:"translateY(0%)",transition:"transform 300ms cubic-bezier(0, 0.95, 0.1, 1), opacity 150ms linear"},_={opacity:0,pointerEvents:"none",transform:"translateY(100%)",transition:"transform 300ms cubic-bezier(0.85, 0, 0.6, 1), opacity 150ms linear"},W=T(M("div"),{position:"fixed",inset:0,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",pointerEvents:"none",zIndex:1e4,[`
    & > ${u},
    & > ${d}
  `]:{position:"absolute"},variants:{withChat:{true:{[`& > ${d}`]:{...H},[`& > ${u}`]:{..._}},false:{[`& > ${d}`]:{..._},[`& > ${u}`]:{...H}}},isHidden:{true:{display:"none"}}}}),ne=({children:e,chatAPI:r,sendMessage:s,assistant:o})=>{var c;const[w,h]=i.exports.useState(!1),[C,f]=i.exports.useState(!1),t=i.exports.useMemo(()=>window.matchMedia("(max-width: 768px)").matches,[]),g=j(o);E(l.CLOSE,()=>h(!1)),E(l.OPEN,()=>h(!0));const b=A.useCallback(()=>s({type:l.OPEN}),[]),v=A.useCallback(()=>s({type:l.CLOSE}),[]);i.exports.useEffect(()=>{if(!!V(r))return Object.assign(r,{open:b,close:v,hide:()=>f(!0),show:()=>f(!1),interact:m=>s({type:l.INTERACT,payload:m})}),()=>{Object.assign(r,{open:p,hide:p,show:p,close:p,interact:p})}},[]);const R=(c=o==null?void 0:o.position)!=null?c:Y.ChatPosition.RIGHT,a={bottom:o==null?void 0:o.spacing.bottom,[R]:o==null?void 0:o.spacing.side};return y(W,{withChat:w,isHidden:C,className:g,children:[!!o&&n(u,{style:a,children:n($,{onClick:b,image:o.launcher})}),n(d,{style:t?{}:a,children:e})]})},se=Object.assign(ne,{Launcher:$,Container:W,ChatContainer:d,LauncherContainer:u});const F=T("div",{height:"100%",[`& ${k.Container}`]:{height:"100%"}}),L=e=>{const r=JSON.stringify(e);window.postMessage(r),window.parent.postMessage(r,"*")},ae=({assistant:e,versionID:r,verify:s,user:o,url:w,session:h})=>{const C=i.exports.useCallback(()=>L({type:l.CLOSE}),[]),f=i.exports.useCallback(a=>L({type:l.SAVE_SESSION,payload:a}),[]),t=J({versionID:r,verify:s,url:w,user:o,session:h,saveSession:f},[s.projectID]);E(l.INTERACT,({payload:a})=>t.interact(a)),E(l.OPEN,async()=>{t.isStatus(O.IDLE)&&await g()});const g=async()=>{await t.launch()},b=i.exports.useCallback(()=>{t.setStatus(O.ENDED),C()},[]),v=j(e),R=i.exports.useCallback(a=>{const c=t.session.turns[a-1];return(c==null?void 0:c.type)===I.USER?c:null},[t.session.turns]);return n(oe,{...t,children:n(F,{className:v,children:y(k,{title:e.title,description:e.description,image:e.image,avatar:e.avatar,withWatermark:!0,startTime:t.session.startTime,hasEnded:t.isStatus(O.ENDED),isLoading:!t.session.turns.length,onStart:g,onEnd:b,onSend:t.reply,onMinimize:C,children:[t.session.turns.map((a,c)=>K(a).with({type:I.USER},({id:m,...S})=>i.exports.createElement(X,{...D(S,["type"]),key:m})).with({type:I.SYSTEM},({id:m,...S})=>n(x,{...D(S,["type"]),feedback:e.feedback?{onClick:B=>{t.feedback(B,S.messages,R(c))}}:void 0,avatar:e.avatar,isLast:c===t.session.turns.length-1},m)).exhaustive()),t.indicator&&n(x.Indicator,{avatar:e.avatar})]})})})};Object.assign(ae,{sendMessage:L,Container:F});const q="https://source.unsplash.com/featured/248x150",P={title:"First Card",description:"Lorem ipsum dolor sit amet",image:q,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]},U=[P,{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:q},{title:"Third Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",actions:[{request:{},name:"Fourth Button"},{request:{},name:"Fifth Button"}]}],$e={title:"Components/Carousel",component:N},z=e=>n(N,{...e}),ce=z.bind({});ce.args={cards:[P]};const le=z.bind({});le.args={cards:U};const me=e=>{const r=i.exports.useRef(null),s=i.exports.useRef(null);return n(se.ChatContainer,{children:y(k.Dialog,{children:[n(x.Controls,{ref:s}),y(x.Container,{ref:r,withImage:!0,scrollable:!0,children:[n(G,{avatar:Q}),n(N,{...e,controlsRef:s,containerRef:r})]})]})})},pe=me.bind({});pe.args={cards:U};export{le as MultipleCards,ce as SingleCard,pe as WithControls,$e as default};
//# sourceMappingURL=Carousel.story.f8e9772d.js.map
