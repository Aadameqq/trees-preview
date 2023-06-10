(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{1017:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(7294),i=r(3241),o=r(8427),a=r(2623);let s=(0,n.createContext)({padding:0}),l=s.Provider,c=()=>(0,n.useContext)(s).padding;var d=r(6817),u=r(4258),h=r(6768),p=(0,d.k)((e,{padding:t,withBorder:r,inheritPadding:n})=>{let i=(0,u.a)({size:t,sizes:e.spacing}),o=`calc(-1 * ${i})`,a="dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3];return{cardSection:{display:"block",marginLeft:o,marginRight:o,paddingLeft:n?i:void 0,paddingRight:n?i:void 0,borderTop:r?`${(0,h.h)(1)} solid ${a}`:void 0,borderBottom:r?`${(0,h.h)(1)} solid ${a}`:void 0,"& + &":{borderTop:0},"&[data-first]":{marginTop:o,borderTop:0,borderBottom:r?`${(0,h.h)(1)} solid ${a}`:void 0},"&[data-last]":{marginBottom:o,borderBottom:0}}}}),f=r(4523),m=Object.defineProperty,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&b(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&b(e,r,t[r]);return e},j=(e,t)=>{var r={};for(var n in e)g.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))0>t.indexOf(n)&&v.call(e,n)&&(r[n]=e[n]);return r};let w={withBorder:!1,inheritPadding:!1},O=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("CardSection",w,e),{className:o,withBorder:a,inheritPadding:s,unstyled:l,variant:d}=r,u=j(r,["className","withBorder","inheritPadding","unstyled","variant"]),{classes:h,cx:m}=p({padding:c(),withBorder:a,inheritPadding:s},{name:"Card",unstyled:l,variant:d});return n.createElement(f.x,x({className:m(h.cardSection,o),ref:t},u))});O.displayName="@mantine/core/CardSection";let k=(0,o.F)(O);var z=(0,d.k)(e=>({root:{position:"relative",overflow:"hidden",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}})),C=Object.defineProperty,P=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&N(e,r,t[r]);if(P)for(var r of P(t))S.call(t,r)&&N(e,r,t[r]);return e},R=(e,t)=>{var r={};for(var n in e)M.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&P)for(var n of P(e))0>t.indexOf(n)&&S.call(e,n)&&(r[n]=e[n]);return r};let B={padding:"md"},T=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("Card",B,e),{className:o,padding:s,radius:c,children:d,unstyled:u,variant:h}=r,p=R(r,["className","padding","radius","children","unstyled","variant"]),{classes:f,cx:m}=z(null,{name:"Card",unstyled:u,variant:h}),y=n.Children.toArray(d),g=y.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===k?(0,n.cloneElement)(e,{variant:h,padding:s,"data-first":0===t||void 0,"data-last":t===y.length-1||void 0}):e);return n.createElement(l,{value:{padding:s}},n.createElement(a.X,E({className:m(f.root,o),radius:c,p:s,ref:t},p),g))});T.Section=k,T.displayName="@mantine/core/Card";let I=(0,o.F)(T)},3523:function(e,t,r){"use strict";r.d(t,{M:function(){return y}});var n=r(7294),i=r(3241),o=r(8427),a=(0,r(6817).k)((e,{inline:t})=>({root:{display:t?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}})),s=r(4523),l=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&h(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&h(e,r,t[r]);return e},f=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r};let m=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("Center",{},e),{inline:o,className:l,unstyled:c,variant:d}=r,u=f(r,["inline","className","unstyled","variant"]),{classes:h,cx:m}=a({inline:o},{name:"Center",unstyled:c,variant:d});return n.createElement(s.x,p({ref:t,className:m(h.root,l)},u))});m.displayName="@mantine/core/Center";let y=(0,o.F)(m)},9876:function(e,t,r){"use strict";r.d(t,{k:function(){return x}});var n=r(7294),i=r(3241),o=r(7818);let a={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var s=r(4523),l=r(1686),c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(h)for(var r of h(t))f.call(t,r)&&m(e,r,t[r]);return e},g=(e,t)=>d(e,u(t)),v=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&f.call(e,n)&&(r[n]=e[n]);return r};let b={},x=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("Flex",b,e),{gap:c,rowGap:d,columnGap:u,align:h,justify:p,wrap:f,direction:m,sx:x}=r,j=v(r,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return n.createElement(s.x,g(y({},j),{sx:[{display:"flex"},e=>(0,l.M)({gap:c,rowGap:d,columnGap:u,align:h,justify:p,wrap:f,direction:m},e,a),...(0,o.R)(x)],ref:t}))});x.displayName="@mantine/core/Flex"},9236:function(e,t,r){"use strict";r.d(t,{D:function(){return C}});var n=r(7294),i=r(3241),o=r(6768),a=r(6817),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))h.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>l(e,c(t)),y=(0,a.k)((e,{element:t,weight:r,inline:n},{size:i})=>({root:m(f({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:r||e.headings.sizes[t].fontWeight||e.headings.fontWeight,fontSize:void 0!==i?i in e.headings.sizes?e.headings.sizes[i].fontSize:(0,o.h)(i):e.headings.sizes[t].fontSize,lineHeight:n?1:void 0!==i&&i in e.headings.sizes?e.headings.sizes[i].lineHeight:e.headings.sizes[t].lineHeight,margin:0})})),g=r(5117),v=Object.defineProperty,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&w(e,r,t[r]);if(b)for(var r of b(t))j.call(t,r)&&w(e,r,t[r]);return e},k=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&b)for(var n of b(e))0>t.indexOf(n)&&j.call(e,n)&&(r[n]=e[n]);return r};let z={order:1},C=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("Title",z,e),{className:o,order:a,children:s,unstyled:l,size:c,weight:d,inline:u,variant:h}=r,p=k(r,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:f,cx:m}=y({element:`h${a}`,weight:d,inline:u},{name:"Title",unstyled:l,variant:h,size:c});return[1,2,3,4,5,6].includes(a)?n.createElement(g.x,O({variant:h,component:`h${a}`,ref:t,className:m(f.root,o)},p),s):null});C.displayName="@mantine/core/Title"},7818:function(e,t,r){"use strict";function n(e){return Array.isArray(e)?e:[e]}r.d(t,{R:function(){return n}})},8433:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(853).Z)("clock-hour-3","IconClockHour3",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 12h3.5",key:"svg-1"}],["path",{d:"M12 7v5",key:"svg-2"}]])},2891:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(853).Z)("map-pin","IconMapPin",[["path",{d:"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z",key:"svg-1"}]])},7283:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(853).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},5580:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ads/manage",function(){return r(6007)}])},2412:function(e,t,r){"use strict";r.d(t,{_:function(){return y}});var n=r(5893),i=r(7294),o=r(4809),a=r(6817),s=r(6768),l=r(9876),c=r(9236),d=r(5117),u=r(7841),h=r(1664),p=r.n(h);let f=(0,a.k)(e=>({label:{textAlign:"center",fontWeight:900,fontSize:(0,s.h)(220),lineHeight:1,marginBottom:"calc(".concat(e.spacing.xl," * 1.5)"),color:e.colors.gray[2],[e.fn.smallerThan("sm")]:{fontSize:(0,s.h)(120)}},title:{textAlign:"center",fontWeight:900,fontSize:(0,s.h)(38),marginBottom:20,[e.fn.smallerThan("sm")]:{fontSize:(0,s.h)(32)}},description:{maxWidth:(0,s.h)(500),margin:"auto",marginTop:e.spacing.xl,marginBottom:"calc(".concat(e.spacing.xl," * 1.5)")}}));function m(){let{classes:e}=f();return(0,n.jsxs)(l.k,{align:"center",justify:"center",direction:"column",wrap:"nowrap",style:{height:"calc(100vh - 180px)",paddingBottom:(0,s.h)(80)},children:[(0,n.jsx)("div",{className:e.label,children:"401"}),(0,n.jsx)(c.D,{className:e.title,children:"Brak uprawnień"}),(0,n.jsx)(d.x,{color:"dimmed",size:"lg",align:"center",className:e.description,children:"By wejść na tą podstronę musisz mieć do niej dostęp oraz być zalogowany"}),(0,n.jsx)(p(),{href:"/login",children:(0,n.jsx)(u.z,{variant:"outline",size:"md",radius:30,children:"Zaloguj się"})})]})}function y(e){let{children:t}=e,{isAuth:r}=(0,i.useContext)(o.V);return r()?(0,n.jsx)(n.Fragment,{children:t}):(0,n.jsx)(m,{})}},3011:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var n=r(5893),i=r(3241),o=r(7841);function a(e){let{children:t,isLoading:r=!1,disabled:a,...s}=e,l=(0,i.rZ)();return(0,n.jsx)(o.z,{...s,disabled:r||a,sx:{":disabled":{color:l.colors.dark[3],backgroundColor:l.colors.gray[3]}},children:r?"Ładowanie...":t})}r(7294)},6007:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return eM}});var n=r(5893),i=r(3523),o=r(5117),a=r(966),s=r(9876),l=r(6817),c=r(6768),d=r(1017),u=r(6137),h=r(5864),p=r(9834),f=r(7294),m=r(3241),y=r(8216);let[g,v]=(0,y.R)("Modal component was not found in tree");var b=r(4258);let x={xs:(0,c.h)(320),sm:(0,c.h)(380),md:(0,c.h)(440),lg:(0,c.h)(620),xl:(0,c.h)(780)};var j=(0,l.k)((e,{yOffset:t,xOffset:r,centered:n,fullScreen:i},{size:o})=>({content:{flex:i?"0 0 100%":`0 0 ${(0,b.a)({size:o,sizes:x})}`,maxWidth:"100%",maxHeight:i?void 0:`calc(100vh - (${(0,c.h)(t)} * 2))`,height:i?"100vh":void 0,borderRadius:i?0:void 0,overflowY:"auto"},inner:{paddingTop:i?0:t,paddingBottom:i?0:t,paddingLeft:i?0:r,paddingRight:i?0:r,display:"flex",justifyContent:"center",alignItems:n?"center":"flex-start"}})),w=r(5903),O=Object.defineProperty,k=Object.defineProperties,z=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,S=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,N=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&S(e,r,t[r]);if(C)for(var r of C(t))M.call(t,r)&&S(e,r,t[r]);return e},E=(e,t)=>k(e,z(t)),R=(e,t)=>{var r={};for(var n in e)P.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&C)for(var n of C(e))0>t.indexOf(n)&&M.call(e,n)&&(r[n]=e[n]);return r};let B=E(N({},w.K),{yOffset:"5vh",xOffset:"5vw"});function T(e){let t=(0,m.N4)("ModalRoot",B,e),{classNames:r,variant:n,size:i,yOffset:o,xOffset:a,scrollAreaComponent:s,radius:l,centered:c,fullScreen:d}=t,u=R(t,["classNames","variant","size","yOffset","xOffset","scrollAreaComponent","radius","centered","fullScreen"]),{classes:h,cx:p}=j({yOffset:o,xOffset:a,centered:c,fullScreen:d},{name:"Modal",variant:n,size:i});return f.createElement(g,{value:{yOffset:o,scrollAreaComponent:s,radius:l}},f.createElement(w.e,N({__staticSelector:"Modal",size:i,variant:n,classNames:E(N({},r),{content:p(h.content,null==r?void 0:r.content),inner:p(h.inner,null==r?void 0:r.inner)})},u)))}var I=Object.defineProperty,Z=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&A(e,r,t[r]);if(Z)for(var r of Z(t))_.call(t,r)&&A(e,r,t[r]);return e},$=(e,t)=>{var r={};for(var n in e)D.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&Z)for(var n of Z(e))0>t.indexOf(n)&&_.call(e,n)&&(r[n]=e[n]);return r};let F={shadow:"xl"},L=(0,f.forwardRef)((e,t)=>{let r=(0,m.N4)("ModalContent",F,e),{children:n,scrollAreaComponent:i}=r,o=$(r,["children","scrollAreaComponent"]),a=v(),s=i||a.scrollAreaComponent||w.e.NativeScrollArea;return f.createElement(w.e.Content,W({ref:t,radius:a.radius},o),f.createElement(s,{style:{maxHeight:`calc(100vh - (${(0,c.h)(a.yOffset)} * 2))`}},n))});var H=Object.defineProperty,U=Object.defineProperties,G=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&J(e,r,t[r]);if(V)for(var r of V(t))q.call(t,r)&&J(e,r,t[r]);return e},Y=(e,t)=>{var r={};for(var n in e)X.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&V)for(var n of V(e))0>t.indexOf(n)&&q.call(e,n)&&(r[n]=e[n]);return r};let Q=U(K({},w.K),G({transitionProps:{duration:200,transition:"pop"},withOverlay:!0,withCloseButton:!0}));function ee(e){let t=(0,m.N4)("Modal",Q,e),{title:r,withOverlay:n,overlayProps:i,withCloseButton:o,closeButtonProps:a,children:s}=t,l=Y(t,["title","withOverlay","overlayProps","withCloseButton","closeButtonProps","children"]);return f.createElement(T,K({},l),n&&f.createElement(w.e.Overlay,K({},i)),f.createElement(L,null,(!!r||o)&&f.createElement(w.e.Header,null,r&&f.createElement(w.e.Title,null,r),o&&f.createElement(w.e.CloseButton,K({},a))),f.createElement(w.e.Body,null,s)))}ee.Root=T,ee.CloseButton=w.e.CloseButton,ee.Overlay=w.e.Overlay,ee.Content=L,ee.Header=w.e.Header,ee.Title=w.e.Title,ee.Body=w.e.Body,ee.NativeScrollArea=w.e.NativeScrollArea;var et=r(853),er=(0,et.Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),en=r(7283),ei=(0,et.Z)("dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),eo=r(2891),ea=r(8433),es=(0,et.Z)("trash-x","IconTrashX",[["path",{d:"M4 7h16",key:"svg-0"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-1"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-2"}],["path",{d:"M10 12l4 4m0 -4l-4 4",key:"svg-3"}]]),el=r(1759),ec=r(3011),ed=r(8228),eu=r(3575),eh=r(1664),ep=r.n(eh);let ef=(0,l.k)(e=>({card:{backgroundColor:e.white,width:"1000px",[e.fn.smallerThan(1100)]:{width:"100%"}},btn:{maxWidth:100},title:{[e.fn.smallerThan(680)]:{fontSize:15}},footer:{padding:"".concat(e.spacing.xs," ").concat(e.spacing.lg),marginTop:e.spacing.md,borderTop:"".concat((0,c.h)(1)," solid ").concat(e.colors.gray[2])}})),em=e=>e.getTime()<Date.now()?"red":e.getTime()<Date.now()+3456e5?"yellow":"green",ey=e=>e<10?"0".concat(e):e.toString(),eg=e=>{let t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return"".concat(ey(n),".").concat(ey(r),".").concat(t)},ev=()=>(0,ed.D)(e=>{let{id:t}=e;return new Promise((e,r)=>{try{let r=JSON.parse(localStorage.getItem("ads")||"[]"),n=r.filter(e=>e.id!==t);localStorage.setItem("ads",JSON.stringify(n)),e({success:!0})}catch(e){r(e)}})});function eb(e){let{ad:t}=e,[r,{open:i,close:a}]=(0,el.q)(!1),{mutate:s,isLoading:l}=ev(),{classes:c}=ef(),f=()=>{s({id:t.id},{onSuccess:()=>{eu.N9.show({withCloseButton:!0,autoClose:5e3,title:"Usunięto",message:"Ogłoszenie zostało usunięte",color:"green",withBorder:!0,icon:(0,n.jsx)(er,{})}),a()},onError:()=>{eu.N9.show({withCloseButton:!0,autoClose:5e3,withBorder:!0,title:"Doszło do błędu podczas usuwania",message:"Spr\xf3buj ponownie",color:"red",icon:(0,n.jsx)(en.Z,{})}),a()}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.Z,{withBorder:!0,padding:"lg",radius:"md",className:c.card,shadow:"md",children:[(0,n.jsxs)(u.Z,{position:"apart",noWrap:!0,children:[(0,n.jsx)(o.x,{fw:500,size:"lg",className:c.title,children:t.title}),(0,n.jsxs)(h.v,{shadow:"md",width:200,withinPortal:!0,children:[(0,n.jsx)(h.v.Target,{children:(0,n.jsx)(p.A,{children:(0,n.jsx)(ei,{color:"grey"})})}),(0,n.jsxs)(h.v.Dropdown,{children:[(0,n.jsx)(h.v.Label,{children:"Zarządzanie"}),(0,n.jsx)(ep(),{href:"/ads/".concat(t.id,"/edit"),style:{textDecoration:"none"},children:(0,n.jsx)(h.v.Item,{children:"Edytuj"})}),(0,n.jsx)(ep(),{href:"/ads/".concat(t.id),style:{textDecoration:"none"},children:(0,n.jsx)(h.v.Item,{children:"Podgląd"})}),(0,n.jsx)(h.v.Divider,{}),(0,n.jsx)(h.v.Label,{children:"Nieodwracalne działania"}),(0,n.jsx)(h.v.Item,{color:"red",onClick:i,children:"Usuń"})]})]})]}),(0,n.jsxs)(u.Z,{mt:"lg",noWrap:!0,children:[(0,n.jsx)("span",{style:{width:24,marginTop:4},children:(0,n.jsx)(eo.Z,{stroke:1})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.x,{fw:500,children:t.city}),(0,n.jsx)(o.x,{fz:"xs",c:"dimmed",children:t.specificPlace})]})]}),(0,n.jsxs)(u.Z,{mt:"md",mb:15,noWrap:!0,children:[(0,n.jsx)("span",{style:{width:24,marginTop:5},children:(0,n.jsx)(ea.Z,{stroke:1})}),(0,n.jsx)(o.x,{fw:700,color:"".concat(em(t.date),".9"),fz:"sm",children:"".concat(eg(t.date)," ").concat(t.time)})]})]}),(0,n.jsxs)(ee,{opened:r,onClose:a,title:"Czy na pewno chcesz usunąć poniższe ogłoszenie?",children:[(0,n.jsxs)(u.Z,{noWrap:!0,style:{alignItems:"center"},children:[(0,n.jsx)("span",{style:{width:30,paddingTop:4},children:(0,n.jsx)(es,{stroke:1.25,size:30})}),(0,n.jsx)(o.x,{fw:500,fz:14,children:t.title})]}),(0,n.jsx)(u.Z,{position:"right",mt:30,children:(0,n.jsx)(ec.f,{isLoading:l,onClick:f,color:"red",children:"Usuń"})})]})]})}var ex=(0,et.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]);let ej=(0,l.k)(e=>({card:{backgroundColor:e.white[4],width:"1000px",[e.fn.smallerThan(1100)]:{width:"100%"}}}));function ew(){let{classes:e}=ej();return(0,n.jsx)(d.Z,{withBorder:!0,padding:"lg",radius:"md",className:e.card,shadow:"md",children:(0,n.jsx)(ep(),{href:"/ads/create",style:{width:"100%"},children:(0,n.jsx)(i.M,{style:{width:"100%"},children:(0,n.jsx)(ex,{size:50,color:"grey"})})})})}var eO=r(7848),ek=r(2412);let ez=()=>new Promise(e=>{let t=JSON.parse(localStorage.getItem("ads")||"[]"),r=t.map(e=>({...e,date:new Date(e.date)}));e(r)}),eC=()=>(0,eO.a)({queryKey:["getManagedAds"],queryFn:ez});function eP(){let{isLoading:e,isError:t,data:r}=eC();return t?(0,n.jsx)(i.M,{style:{height:"calc(100vh - 180px)"},children:(0,n.jsx)(o.x,{fw:500,fz:40,color:"red",align:"center",children:"Doszło do błędu podczas ładowania ogłoszeń"})}):e?(0,n.jsx)(i.M,{style:{height:"calc(100vh - 180px)"},children:(0,n.jsx)(a.a,{size:50})}):(0,n.jsxs)(s.k,{align:"center",justify:"center",gap:20,style:{width:"100%"},direction:"column",children:[r.map(e=>(0,n.jsx)(eb,{ad:e},e.id)),0===r.length&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.x,{fz:18,mb:0,children:"Brak ogłoszeń"}),(0,n.jsx)(o.x,{fz:18,children:"Utw\xf3rz nowe ogłoszenie poniższym przyciskiem"})]}),(0,n.jsx)(ew,{})]})}function eM(){return(0,n.jsx)(ek._,{children:(0,n.jsx)(eP,{})})}},8228:function(e,t,r){"use strict";r.d(t,{D:function(){return h}});var n=r(7294),i=r(464),o=r(2161),a=r(9886),s=r(81),l=r(3989);class c extends l.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),(0,o.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,a.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){s.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,n,i,o,a,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(n=(i=this.mutateOptions).onSettled)||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}var d=r(5945),u=r(4798);function h(e,t,r){let a=(0,o.lV)(e,t,r),l=(0,d.NL)({context:a.context}),[h]=n.useState(()=>new c(l,a));n.useEffect(()=>{h.setOptions(a)},[h,a]);let f=(0,i.$)(n.useCallback(e=>h.subscribe(s.V.batchCalls(e)),[h]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),m=n.useCallback((e,t)=>{h.mutate(e,t).catch(p)},[h]);if(f.error&&(0,u.L)(h.options.useErrorBoundary,[f.error]))throw f.error;return{...f,mutate:m,mutateAsync:f.mutate}}function p(){}}},function(e){e.O(0,[428,774,888,179],function(){return e(e.s=5580)}),_N_E=e.O()}]);