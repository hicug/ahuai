(this["webpackJsonpahuai-wiki"]=this["webpackJsonpahuai-wiki"]||[]).push([[0],{281:function(t,e,a){"use strict";a.r(e);var n=a(12),r=a.n(n),i=a(0),c=a.n(i),o=a(8),l=a(24),p=a(31),s=a(39),x=a(310),d=a(317),g=a(83),b=a(316),u=a(226),h=a.n(u),j=a(332),f=a(6),m=window.questionData,O=Object(x.a)((function(t){return{root:{padding:"2px 2px",display:"flex",alignItems:"center",maxWidth:700},input:{marginLeft:t.spacing(1),marginRight:0,flex:1},iconButton:{padding:10},textField:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"white"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"white"}}}}));function v(t){var e=O(),a=t.action,n=t.style,r=t.q;a=window.location.origin+"/#"+a;var i=c.a.useState(r||""),o=Object(l.a)(i,2),p=o[0],x=o[1],u=m?m.map((function(t){return t.q})):[];return Object(f.jsx)("div",{style:n,children:Object(f.jsxs)(g.a,{id:"form",component:"form",action:a,className:e.root,onSubmit:function(t){t.preventDefault(),window.location.href=a+"?q="+p},children:[Object(f.jsx)(j.a,{value:p,id:"q",name:"q",freeSolo:!0,className:e.input,disableClearable:!0,onChange:function(t){x(t.target.value||t.target.textContent),t.target.textContent&&(window.location.href=a+"?q="+t.target.textContent)},options:u,renderInput:function(t){return Object(f.jsx)(d.a,Object(s.a)(Object(s.a)({},t),{},{autoFocus:!0,className:e.textField,variant:"outlined",placeholder:"\u8f93\u5165\u5173\u952e\u8bcd\uff0c\u4ee5\u7a7a\u683c\u9694\u5f00",name:"q"}))}}),Object(f.jsx)(b.a,{className:e.iconButton,"aria-label":"search",onClick:function(){window.location.href=a+"?q="+document.getElementById("q").value},children:Object(f.jsx)(h.a,{})})]})})}var y=a(319),w=a(290),k=a(320),C=a(334),S=a(234);function I(){var t=Object(x.a)((function(t){return{layout:Object(p.a)({width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2),marginTop:100},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginTop:200,marginLeft:"auto",marginRight:"auto"}),avatar:{margin:"auto",height:150,width:150,backgroundColor:t.palette.secondary.main},littlebad:Object(p.a)({backgroundImage:"url(/assets/littlebad.png)",width:150,height:50,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"top center",margin:"auto"},t.breakpoints.up(960),{marginLeft:0,width:240,height:80}),"@font-face":{fontFamily:"title",src:'url("/assets/font/title.ttf")'},bigTitle:Object(p.a)({fontSize:"60px !important",textAlign:"center",fontFamily:"title"},t.breakpoints.up(960),{textAlign:"left",fontSize:"90px !important"})}}))(),e=c.a.useState(!1),a=Object(l.a)(e,2),n=(a[0],a[1]);return Object(f.jsxs)(c.a.Fragment,{children:[Object(f.jsx)(y.a,{}),Object(f.jsx)("main",{className:t.layout,children:Object(f.jsx)(w.a,{in:!0,children:Object(f.jsxs)(k.a,{direction:"column",spacing:1,container:!0,children:[Object(f.jsxs)(k.a,{item:!0,container:!0,alignItems:"center",spacing:1,children:[Object(f.jsx)(k.a,{item:!0,xs:12,md:4,children:Object(f.jsx)(C.a,{src:"/assets/favicon.jpg",className:t.avatar,onClick:function(){n(!0)}})}),Object(f.jsx)(k.a,{item:!0,xs:12,md:8,children:Object(f.jsx)(S.a,{className:t.bigTitle,src:"ahuaiwiki.svg",width:"100%",height:"10px"})})]}),Object(f.jsx)(k.a,{item:!0,children:Object(f.jsx)(v,{action:"/search"})})]})})})]})}var q=a(63);function B(t){var e,a=String(window.location.hash);if(e=new RegExp("(^|)"+t+"=([^&]*)(&|$)","gi").exec(a))return e[2]}function W(t,e){for(var a=t.length,n=e.length,r=function(t){for(var e=t.length,a=new Array(e).fill(0),n=0;n<e;n++)for(var r=t.slice(0,n),i=0;i<n-1;i++)r.slice(0,i+1)===r.slice(n-i-1)&&(a[n]=i+1);return a}(e),i=0,c=0;i<a&&c<n;)if(t[i]===e[c])++i,++c;else{if(0===c){++i;continue}c=r[c]}return c===n?i-c:-1}var E=a(26),F=a(109),R=a(327),z=a(328),N=a(329),L=a(231),M=a.n(L),T=a(321),D=a(322),A=a(323),J=a(324),P=a(325),U=a(326);function $(t){var e=Object(s.a)({},t),a=e.open,n=e.onClose,r=e.content,i=e.text,c=e.title,o=e.afterClose,l=e.actions,p=function(t){"function"===typeof n&&(n(),"function"===typeof o&&o())};return Object(f.jsxs)(T.a,Object(s.a)(Object(s.a)({open:a,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},t),{},{children:[Object(f.jsx)(D.a,{id:"alert-dialog-title",children:c}),Object(f.jsx)(A.a,{children:i?Object(f.jsx)(J.a,{id:"alert-dialog-description",children:r}):r}),Object(f.jsx)(P.a,{children:l.map((function(t){return Object(f.jsx)(U.a,{onClick:function(){"function"===typeof t.handle&&t.handle(),p()},color:"primary",autoFocus:!0,children:t.name},t.name)}))})]}))}var V=a(331),G=window.questionData,H=/\[.*?]\[[0-9]]/g;function K(){var t,e=this,a=decodeURI(B("q")).replace(/\+/g," ")||"",n=c.a.useState(Object(f.jsx)(f.Fragment,{})),r=Object(l.a)(n,2),i=r[0],s=r[1],d=c.a.useState(Object(f.jsx)(f.Fragment,{children:"\u8be6\u7ec6\u4fe1\u606f"})),b=Object(l.a)(d,2),u=b[0],h=b[1],j=c.a.useState(!1),m=Object(l.a)(j,2),O=m[0],y=m[1],w=c.a.useState(parseInt(decodeURI(B("p")))||1),k=Object(l.a)(w,2),S=k[0],I=k[1],L=c.a.useState([{src:""}]),T=Object(l.a)(L,2),D=T[0],A=T[1],J=a.split(/\s* /),P=[],U=Object(q.a)(J);try{for(U.s();!(t=U.n()).done;){var K,Q=t.value,X=Object(q.a)(G);try{for(X.s();!(K=X.n()).done;){var Y=K.value;(W(Y.q,Q)>-1||W(Y.a,Q)>-1)&&P.push(Y)}}catch(ct){X.e(ct)}finally{X.f()}}}catch(ct){U.e(ct)}finally{U.f()}var Z=10*(S-1);P=function(t,e){var a=[];try{var n,r=Object(q.a)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;-1===a.indexOf(i)&&a.push(i)}}catch(ct){r.e(ct)}finally{r.f()}return a}catch(c){return t}}(P);var _=Math.floor(P.length/10)+1;window.addEventListener("scroll",(function(t){var e=t.target.scrollingElement.scrollTop,a=document.getElementById("appBar");a.style=a&&e>80?"":"box-shadow:none"}));var tt=Object(x.a)((function(t){return{searchBar:{display:"flex",alignItems:"center",flexDirection:"row",backgroundColor:E.a.common.white,padding:10},avatar:{height:50,width:50,backgroundColor:t.palette.secondary.main},layout:Object(p.a)({width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{maxWidth:600+2*t.spacing(2),marginLeft:60}),selected:{backgroundColor:t.palette.primary.light},unselected:{backgroundColor:t.palette.background.default}}}))(),et=function(t){return"[".concat(t,"]")},at="",nt=function(t){!function(t){if(t){var e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}}(et(t+1)),document.getElementById(et(t+1)).style="background-color:rgb(197,218,241)",""!==at&&document.getElementById(at)&&(document.getElementById(at).style="background-color:#ffffff"),at=et(t+1)},rt=function(t){var a=t.a.match(H);y(!0),h(Object(f.jsxs)("div",{style:{minWidth:400},children:[Object(f.jsx)(F.a,{variant:"body1",children:t.column}),Object(f.jsx)(F.a,{variant:"body2",color:"primary",component:R.a,href:"javascript:;",onClick:function(){window.open(t.columnRef)},children:"\u67e5\u770b\u539f\u8bf4\u8bf4"})]})),s(Object(f.jsxs)(g.a,{style:{maxWidth:700},elevation:0,children:[Object(f.jsx)(F.a,{variant:"body1",gutterBottom:!0,children:t.a.split(H).map((function(t,n){return function(t){var e=new RegExp("^[ ]+$");return"undefined"===typeof t||null===t||""===t||e.test(t)}(t)?"":Object(f.jsxs)(f.Fragment,{children:[t,Object(f.jsxs)(R.a,{color:"primary",href:"javascript:;",onClick:nt.bind(e,n),children:[a[n].replace("[","").replace("]","").replace(/\[[0-9]]/,""),Object(f.jsx)("sup",{children:et(n+1)})]})]})}))}),t.aRefs.map((function(t,a){return Object(f.jsxs)(F.a,{variant:"body2",id:et(a+1),style:{display:"flex",alignItems:"center"},gutterBottom:!0,children:[et(a+1),Object(f.jsx)("div",{style:{height:70,width:"100%",backgroundImage:"url("+t+")",marginLeft:10,backgroundSize:"cover",backgroundPosition:"center 0"},onClick:A.bind(e,[{src:t}])})]})}))]}))},it=Object(o.e)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(z.a,{position:"fixed",className:tt.searchBar,id:"appBar",style:{boxShadow:"none"},children:[Object(f.jsx)(C.a,{src:"/assets/favicon.jpg",className:tt.avatar,onClick:function(){it("/")}}),Object(f.jsx)(v,{action:"/search",q:a,style:{width:700,marginLeft:10}})]}),Object(f.jsxs)("main",{id:"main",style:{marginTop:100},className:tt.layout,children:[P.length?P.slice(Z,Z+10).map((function(t){return Object(f.jsxs)(N.a,{elevation:0,style:{marginBottom:20},children:[Object(f.jsx)(R.a,{href:"javascript:;",onClick:rt.bind(e,t),children:Object(f.jsx)(F.a,{variant:"h3",color:"primary",gutterBottom:!0,noWrap:!0,children:t.q})}),Object(f.jsx)(F.a,{variant:"body1",paragraph:!0,children:t.a.replace(H,"")})]},t.q)})):Object(f.jsx)(F.a,{variant:"body1",align:"center",color:"textSecondary",children:"\u6682\u65e0\u67e5\u8be2\u7ed3\u679c"}),_>1?Object(f.jsx)(V.a,{count:_,color:"primary",page:S,onChange:function(t,e){I(e),it("/search?q="+a+"&p="+e)}}):""]}),Object(f.jsx)($,{actions:[{handle:function(){},name:"\u597d\u6ef4"}],content:i,open:O,title:u,text:!1,onClose:function(){return y(!1)},maxWidth:"xl"}),Object(f.jsx)(M.a,{imgs:D,currImg:0,isOpen:D.length&&""!==D[0].src,onClose:function(){A([])}})]})}var Q=[{path:"/",element:Object(f.jsx)(I,{})},{path:"index",element:Object(f.jsx)(I,{})},{path:"search",element:Object(f.jsx)(K,{})}],X=function(){return Object(o.g)(Q)},Y=a(232),Z=a(233),_=Object(Z.a)({palette:{background:{default:"#f4f6f8",paper:E.a.common.white},primary:{contrastText:"#ffffff",main:"#2479CC"},text:{primary:"#172b4d",secondary:"#6b778c"}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"],typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}}}),tt=a(330);r.a.render(Object(f.jsx)(tt.a,{theme:_,children:Object(f.jsx)(Y.a,{children:Object(f.jsx)(X,{})})}),document.getElementById("root"))}},[[281,1,2]]]);