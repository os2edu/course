import{u as v,r as a,j as r,c as o}from"./vendor.e4257099.js";import{b as N,L,I as h}from"./index.9a05c325.js";var S=(e=>(e.LIST="LIST",e.GRID="GRID",e))(S||{});const p="course-layout-type",b=({showAll:e})=>{const d=v(),[m,y]=a.exports.useState([]),[C,g]=a.exports.useState([]),c=a.exports.useRef({popularCourses:!1,allCourses:!1}),[f,x]=a.exports.useState(localStorage.getItem(p)||"LIST"),I=e?m:C,t=e?"allCourses":"popularCourses",n=a.exports.useCallback(async()=>{if(c.current[t])return;const s=await N(!e),{courseList:i}=s;e?y(i):g(i),c.current[t]=!0},[e,t]),u=a.exports.useCallback(async()=>{n()},[n]);if(a.exports.useEffect(()=>{u()},[u]),!c.current[t])return r(L,{});const l=f==="GRID";return o("div",{className:`course-list ${l?"course-list-layout-grid":"course-list-layout-list"}`,children:[r("span",{className:"layout-icon",onClick:()=>{const s=l?"LIST":"GRID";x(s),localStorage.setItem(p,s)},children:r(h,{symbol:l?"icon-listgrid":"icon-list"})}),I.map(s=>o("div",{className:"course-item",onClick:()=>d(`/${s.courseId}`),children:[r("img",{className:"course-item-cover",src:s.coverUrl,alt:"coverUrl"}),o("div",{className:"course-item-content",children:[o("div",{className:"course-item-info",children:[r("div",{className:"info-title",children:s.title}),r("div",{className:"summary",children:s.summary})]}),o("footer",{children:[o("span",{className:"apply-num",children:[r("span",{className:"apply-num-person",children:s.applyCount})," \u4EBA\u62A5\u540D\u5B66\u4E60"]}),o("span",{className:"apply-price",children:["\xA5 ",s.price]})]})]})]},s.id))]})};export{b as C,S as E,p as l};
