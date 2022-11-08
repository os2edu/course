import{r as m,c as n,j as e,F as M,M as G,d as p,I as V,p as C,q as N,B as H,t as W,E as Y,f as A,u as K,v as F,w as Q,x as X,y as J,a as Z,P as ee,z as U,_ as se}from"./vendor.48e1e332.js";import{u as D,U as te,r as ae,c as y,E as h,I as E,d as ne,e as ie,f as ce,L as le,R as O,B as _}from"./index.86e3bcac.js";const ue=a=>{const{items:c}=a,[t,l]=m.exports.useState(c[0].key),s=i=>{l(i)};return n("div",{className:"tabs",children:[e("div",{className:"tab-nav-list",children:c.map(({title:i,key:u})=>e("div",{className:`tabs-tab ${u===t?"tabs-tab-active":""}`,onClick:()=>s(u),children:i},u))}),e("div",{className:"tabs-content-list",children:c.map(({key:i,content:u})=>e("div",{className:`tabs-content-item ${i===t?"":"tabs-content-item-hidden"}`,children:u},i))})]})},re=["\u5927\u4E00","\u5927\u4E8C","\u5927\u4E09","\u5927\u56DB","\u7855\u58EB\u7814\u7A76\u751F","\u535A\u58EB\u7814\u7A76\u751F","\u5927\u5B66\u8001\u5E08","\u516C\u53F8\u6280\u672F\u5DE5\u7A0B\u5E08","\u5176\u4ED6"],w=[{value:"\u672A\u8BA2\u9605\u901A\u77E5",label:"\u4E0D\u8BA2\u9605\u901A\u77E5"},{value:"\u5DF2\u8BA2\u9605\u77ED\u4FE1\u901A\u77E5",label:"\u8BA2\u9605\u77ED\u4FE1\u901A\u77E5"},{value:"\u5DF2\u8BA2\u9605\u7535\u8BDD\u901A\u77E5",label:"\u8BA2\u9605\u7535\u8BDD\u901A\u77E5"},{value:"\u5DF2\u8BA2\u9605\u5168\u90E8\u901A\u77E5",label:"\u8BA2\u9605\u5168\u90E8\u901A\u77E5"}],oe=a=>{const[c]=p.useForm();return n(p,{form:c,className:"normal-form",onFinish:async l=>{let s={...l};s.status==2&&!s.name.endsWith("\u8001\u5E08")&&(s.name=s.name+"\u8001\u5E08"),s.status=s.status||1,s.phone=localStorage.getItem(te),s.clientId=a.courseInfo.clientId,s.courseId=a.courseInfo.courseId,s.uniCourseId=a.courseInfo.id,s.verify="1",s.classId=1;const i=await ae(s);a.onSubmit(i)},autoComplete:"off",size:"large",labelCol:{span:4},wrapperCol:{span:20},initialValues:{gender:"\u7537",tag:w[1].value},children:[e("h3",{children:"\u62A5\u540D"}),e(p.Item,{label:"\u59D3\u540D",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}],children:e(V,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"})}),e(p.Item,{label:"\u6027\u522B",name:"gender",children:n(C.Group,{children:[e(C,{value:"\u7537",children:"\u7537"}),e(C,{value:"\u5973",children:"\u5973"})]})}),e(p.Item,{label:"\u5E74\u7EA7",name:"age",children:e(N,{children:re.map(l=>e(N.Option,{value:l,children:l},l))})}),e(p.Item,{label:"\u5907\u6CE8",name:"tag",children:e(N,{children:w.map(({label:l,value:s})=>e(N.Option,{value:s,children:l},s))})}),e(p.Item,{wrapperCol:{span:24},children:e(H,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"\u786E\u8BA4"})})]})},de=a=>{const[c,t]=m.exports.useState(a.defaultVisible),{state:{myRegisters:l},dispatch:s}=D();return n(M,{children:[e("button",{className:"btn",onClick:()=>t(!0),children:"\u7ACB\u5373\u62A5\u540D"}),e(G,{width:350,open:c,footer:null,onCancel:()=>t(!1),maskClosable:!1,children:e(oe,{onSubmit:u=>{var o;s({type:"UPDATE_MY_COURSES",payload:(l||[]).concat(u)}),(o=a.onRegisterCourse)==null||o.call(a,u),t(!1)},courseInfo:a.courseInfo})})]})};const L={2:"status-teacher.png",4:"status-ta.png",5:"status-admin.png"},me=a=>{const c=y();return W(a.data)?e("div",{className:"studentlist-wrap",children:e(Y,{})}):c!=null&&c.mobile()?e("div",{className:"list-mobile",children:A(a.data,(t,l)=>n("div",{className:"list-item",children:[e("div",{className:"list-item-index",children:l+1}),n("div",{className:"list-item-main-info",children:[n("div",{className:"info-name",children:[t.name,t.status!==h.STUDENT&&e("img",{height:"14",src:`img/${L[t.status]}`,alt:"student-status-png"})]}),e("div",{className:"info-other",children:n("span",{className:"current-bg",children:[e("span",{className:"list-item-label",children:"\u804C\u4E1A:"})," ",t.age]})})]}),e("div",{className:`list-item-gender ${t.gender==="\u5973"?"woman":"man"}`,children:t.gender==="\u5973"?e(E,{symbol:"icon-nv"}):e(E,{symbol:"icon-xingbienan"})}),e("div",{className:"list-item-tag",children:t.tag})]},t.id))}):e("div",{className:"list-wrap",children:n("table",{cellSpacing:"0",cellPadding:"0",children:[e("thead",{children:n("tr",{children:[e("th",{children:e("span",{children:"\u6635\u79F0"})}),e("th",{children:e("span",{children:"\u5E74\u7EA7"})}),e("th",{children:e("span",{children:"\u6027\u522B"})}),e("th",{children:e("span",{children:"\u5907\u6CE8"})})]})}),e("tbody",{children:A(a.data,(t,l)=>n("tr",{children:[n("td",{className:"lalign",children:[e("span",{className:"index",children:l+1}),n("span",{className:"student-name",children:[t.name,t.status!==h.STUDENT&&e("img",{height:"14",src:`img/${L[t.status]}`,alt:"student-status-png"})]})]}),e("td",{children:t.age}),e("td",{children:t.gender}),e("td",{children:t.tag})]},t.id))})]})})},he=["\u6559\u5BA4\u53F7","\u8BFE\u7A0B\u540D\u79F0","\u5F00\u59CB\u65F6\u95F4","\u4E0A\u8BFE\u5730\u70B9","\u5907\u6CE8","\u8BFE\u5802\u56DE\u653E"],ge=a=>{const c=y(),t=K(),l=async s=>t(`replay/${s.id}`);return c!=null&&c.mobile()?e("div",{className:"list-mobile",children:A(a.data,s=>n("div",{className:"list-item",onClick:()=>l(s),children:[n("div",{className:"list-item-main-info",children:[n("div",{className:"info-name",children:[s.className,e("span",{className:"location-tag",children:s.location})]}),n("div",{children:[e("span",{className:"list-item-label",children:"\u6559\u5BA4\u53F7:"})," ",s.roomId]}),n("div",{children:[e("span",{className:"list-item-label",children:"\u5F00\u59CB\u65F6\u95F4:"})," ",s.startAt]}),n("div",{children:[e("span",{className:"list-item-label",children:"\u5907\u6CE8:"})," ",s.remark]})]}),e("div",{className:"list-item-actions",children:e(E,{symbol:"icon-bofang"})})]},s.id))}):e("div",{className:"list-wrap",children:n("table",{cellSpacing:"0",cellPadding:"0",children:[e("thead",{children:e("tr",{children:he.map(s=>e("th",{children:e("span",{children:s})},s))})}),e("tbody",{children:A(a.data,(s,i)=>n("tr",{children:[n("td",{className:"lalign",children:[e("span",{className:"index",children:i+1}),s.roomId]}),e("td",{children:s.className}),e("td",{children:s.startAt}),e("td",{children:s.location}),e("td",{children:s.remark}),e("td",{children:e("span",{className:"player-btn",onClick:()=>l(s),children:e(E,{symbol:"icon-bofang"})})})]},s.id))})]})})};const k=a=>{const{state:{currentUser:c,myRegisters:t},dispatch:l}=D(),{id:s}=F(),i=m.exports.useRef(null),u=m.exports.useRef(null);let o="";if(c!=null&&c.phone){const r=U(t,d=>d.courseId===s);if(r){const d=encodeURIComponent(`pages/room/room?userId=${r.phone}-m&roomId=${a.courseInfo.roomId}&role=${O[r.status]||"student"}&username=${r.name}-m`);o=`${_}/seller/api/room/path.jpg?path=${d}`}else{const d=encodeURIComponent(`pages/index/index?roomId=${a.courseInfo.roomId}`);o=`${_}/seller/api/room/path.jpg?path=${d}`}}return m.exports.useEffect(()=>{if(u.current){const r=u.current,d=new XMLSerializer().serializeToString(r);i.current.src=`data:image/svg+xml;base64,${btoa(d)}`}},[u.current]),n(M,{children:[e(se,{ref:u,style:{display:"none",height:"auto",maxWidth:"100%",width:"100%"},value:window.location.href,fgColor:"#3db477",viewBox:"0 0 256 256"}),n("div",{className:"share-box",children:[n("span",{children:[e(E,{symbol:"icon-share"}),"\u5206\u4EAB\u4E8C\u7EF4\u7801"]}),e("span",{style:{marginBottom:10},children:"\u9080\u8BF7\u597D\u53CB\u52A0\u5165\u8BFE\u5802"}),n("div",{className:`share-imgs ${a.isMobile?"share-imgs-mobile":""}`,children:[e("img",{ref:i,alt:"share-course",className:"qr-code"}),o&&e("img",{src:o,alt:"mini"})]})]})]})},pe=a=>{const{state:{currentUser:c,myRegisters:t},dispatch:l}=D(),{id:s}=F(),i=()=>{l({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:!0})},u=o=>{const{name:r,phone:d,status:B}=o,I=`https://room.os2edu.cn?username=${r}&userId=${d}&role=${O[B]||"student"}&roomId=${a.courseInfo.roomId}&video=${a.courseInfo.ishd||"480p"}`;window.open(I)};if(c!=null&&c.phone){const o=U(t,r=>r.courseId===s);return o?e("button",{className:"btn",onClick:()=>u(o),children:"\u5DF2\u62A5\u540D\uFF0C\u8FDB\u5165\u6559\u5BA4"}):e(de,{...a})}return e("button",{className:"btn",onClick:i,children:"\u767B\u5F55"})},be=()=>{var R,S,x;const[a,c]=m.exports.useState({}),[t,l]=m.exports.useState([]),s=y(),i=m.exports.useRef({}),[u,o]=m.exports.useState(!0),{id:r}=F(),d=m.exports.useCallback(async()=>{if(r){const b=await ne(r),P=await ie(r),f=Q(P,"status"),$=f[h.TEACHER]||[],j=f[h.TUTOR]||[],q=f[h.ADMIN]||[];let v=[];X(f).filter(g=>![h.TEACHER,h.TUTOR,h.ADMIN].includes(g)).forEach(g=>{v=v.concat(f[g])}),i.current.applyStudents=v,i.current.teacher=J($);const z=$.concat(j,q,v);l(z),i.current.if_teacher=!i.current.teacher;const T=await ce(r);i.current.replayList=T,i.current.validReplayList=Z(T.filter(({status:g})=>g==1)||[],g=>g.startAt),c(b),o(!1)}},[r]);if(m.exports.useEffect(()=>{d()},[d]),u)return e(le,{});const B=[{key:"intro",title:"\u8BFE\u7A0B\u4ECB\u7ECD",content:e("div",{dangerouslySetInnerHTML:{__html:a.introduction}})},{key:"student",title:`\u62A5\u540D\u6210\u5458(${(t==null?void 0:t.length)||0})`,content:e(me,{data:t})},{key:"replay",title:`\u8BFE\u5802\u56DE\u653E(${(R=i.current.validReplayList)==null?void 0:R.length})`,content:e(ge,{data:i.current.validReplayList})}],I=b=>{l((t||[]).concat(b)),i.current.applyStudents=(i.current.applyStudents||[]).concat(b)};return n("div",{className:"course-detail-wrapper",children:[n("section",{className:"main-content",children:[e("img",{src:a.coverUrl,alt:"coverUrl",className:"course-cover"}),n("div",{className:"course-main-info",children:[e("div",{className:"course-title",children:a.title}),n("div",{className:"course-info",children:[n("div",{className:"course-info-item",children:[e("span",{className:"course-info-item-label",children:"\u4EFB\u8BFE\u6559\u5E08: "}),(S=i.current.teacher)==null?void 0:S.name]}),n("div",{className:"course-info-item",children:[e("span",{className:"course-info-item-label",children:"\u5B66\u751F\u4EBA\u6570: "}),(x=i.current.applyStudents)==null?void 0:x.length," \u4EBA"]})]}),n("div",{className:"course-actions",children:[n("div",{className:"course-price",children:["\xA5 ",a.price]}),e(pe,{courseInfo:a,onRegisterCourse:I})]})]}),s!=null&&s.mobile()?e(ee,{placement:"leftTop",content:e(k,{courseInfo:a,isMobile:!0}),trigger:"click",children:e("span",{className:"share-icon",children:e(E,{symbol:"icon-share"})})}):e("div",{className:"share-area",children:e(k,{courseInfo:a})})]}),e("section",{className:"course-intro",children:e(ue,{items:B})})]})};export{be as default};
