import{d as Y,u as V,r as N,o as j,_ as ee,a as te,b as q,c as L,n as ne,F as oe,e as v,f as E,g as F,w as J,T as B,t as ie,h as D,p as ae,i as se,j as re,k as W,l as de,m as ce,q as z,s as M,v as O,x as Z,y as le,z as ue,A as U,B as pe}from"./entry.dIk865OX.js";import{q as fe}from"./query.-4Dl-2y1.js";import"./preview.5vhL3zaA.js";const b=o=>(ae("data-v-31cf0cff"),o=o(),se(),o),ve=b(()=>v("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[v("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),we=b(()=>v("span",null,[v("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),re(": Preview enabled")],-1)),he={key:0},ye=b(()=>v("div",{id:"__preview_background"},null,-1)),me=b(()=>v("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[v("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),_e=b(()=>v("p",null,"Initializing the preview...",-1)),ge={key:0},ke=b(()=>v("div",{id:"__preview_background"},null,-1)),Ce={id:"__preview_loader"},Ie=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(o){const a=o,r=["__nuxt_preview","__preview_enabled"],u=W(),y=V(),c=N(!0),k=N(!1),i=N(!1),l=N("");let d;const h=async()=>{D("previewToken").value="",window.sessionStorage.removeItem("previewToken"),await y.replace({query:{preview:void 0}}),window.location.reload()},R=async x=>{const w=await a.syncPreview(x);if(i.value!==!0){if(!w){setTimeout(()=>R(x),1e3);return}D("previewToken").value&&(i.value=!0,await y.replace({query:{}}),u.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&d.disconnect())}};return j(async()=>{d=(await ee(()=>import("./index.5Jz4PfUi.js"),__vite__mapDeps([]),import.meta.url)).connect(`${a.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:a.previewToken}});let w;d.on("connect",()=>{w=setTimeout(()=>{i.value||(w=setTimeout(()=>{l.value="Preview sync timed out",i.value=!1},3e4),d.emit("draft:requestSync"))},3e4)});const I=()=>{w&&(clearTimeout(w),w=null)};d.on("draft:sync",async P=>{if(I(),!P){try{d.once("draft:ready",()=>{d.emit("draft:requestSync")}),await a.requestPreviewSyncAPI()}catch(T){switch(I(),T.response.status){case 404:l.value="Preview draft not found",i.value=!1;break;default:l.value="An error occurred while syncing preview",i.value=!1}}return}R(P)}),d.on("draft:unauthorized",()=>{I(),l.value="Unauthorized preview token",i.value=!1}),d.on("disconnect",()=>{I()}),document.body.classList.add(...r),d.on("draft:update",P=>{k.value=!0,a.syncPreview(P),k.value=!1})}),te(()=>{document.body.classList.remove(...r)}),(x,w)=>(q(),L("div",null,[c.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:i.value,__preview_refreshing:k.value})},[i.value?(q(),L(oe,{key:0},[ve,we,v("button",{onClick:h}," Close ")],64)):E("",!0)],2)):E("",!0),F(B,{name:"preview-loading"},{default:J(()=>[c.value&&!i.value&&!l.value?(q(),L("div",he,[ye,v("div",{id:"__preview_loader"},[me,_e,v("button",{onClick:h}," Cancel ")])])):E("",!0)]),_:1}),F(B,{name:"preview-loading"},{default:J(()=>[l.value?(q(),L("div",ge,[ke,v("div",Ce,[v("p",null,ie(l.value),1),v("button",{onClick:h}," Exit preview ")])])):E("",!0)]),_:1})]))}}),Pe=de(Ie,[["__scopeId","data-v-31cf0cff"]]),Se=(o=[],a,r)=>{const u=[...a||[]],y=[...r||[]],c=JSON.parse(JSON.stringify(o));for(const i of u)if(i.oldPath)if(y.splice(y.findIndex(d=>d.path===i.oldPath),1),u.find(d=>d.path===i.oldPath))c.push({path:i.path,parsed:i.parsed});else{const d=c.find(h=>h.path===i.oldPath);d&&(d.path=i.path,i.parsed?d.parsed=i.parsed:i.pathMeta&&["_file","_path","_id","_locale"].forEach(h=>{d.parsed[h]=i.pathMeta[h]}))}else if(i.new)c.push({path:i.path,parsed:i.parsed});else{const l=c.find(d=>d.path===i.path);l&&Object.assign(l,{path:i.path,parsed:i.parsed})}for(const i of y)c.splice(c.findIndex(l=>l.path===i.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return c.sort((i,l)=>k.compare(i.path,l.path)),c},g={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},xe=o=>{let a;return r=>(a||(a=o()),a)};function G(o,a){for(const r in o){const u=a[r];r in a||delete o[r],u!==null&&typeof u=="object"&&G(o[r],a[r])}}function Q(o,a){for(const r in a){const u=a[r];u!==null&&typeof u=="object"?Array.isArray(u)&&Array.isArray(o[r])?o[r]=u:(o[r]=o[r]||{},Q(o[r],u)):o[r]=u}}const Te=xe(()=>JSON.parse(JSON.stringify(Z()))),H=pe((o,a,r)=>{if(Array.isArray(o[a])&&Array.isArray(r))return o[a]=r,!0}),Ne=()=>{const o=W(),{studio:a,content:r}=ce().public,u=Te();let y;const c=z("studio-client-db",()=>null),k=z("studio-preview-db-files",()=>[]);c.value||(o.hook("content:storage",t=>{c.value=t}),fe("/non-existing-path").findOne());const i=async(t,n)=>{const s=window.sessionStorage.getItem("previewToken"),p=await t.getKeys(`${s}:`);await Promise.all(p.map(e=>t.removeItem(e)));const f=new Set(n.map(e=>e.parsed._id.split(":").shift()));await t.setItem(`${s}$`,JSON.stringify({ignoreSources:Array.from(f)})),await Promise.all(n.map(e=>t.setItem(`${s}:${e.parsed._id}`,JSON.stringify(e.parsed))))},l=t=>{const n=O(o,Z);n!=null&&n.ui&&(n.ui.icons={...n.ui.icons,dynamic:!0}),Q(n,H(t,u)),t||G(n,u)},d=t=>{var s,p,f,e;const n=(e=(f=(p=(s=o==null?void 0:o.vueApp)==null?void 0:s._context)==null?void 0:p.config)==null?void 0:f.globalProperties)==null?void 0:e.$pinceauTheme;!n||!(n!=null&&n.updateTheme)||(y||(y=JSON.parse(JSON.stringify((n==null?void 0:n.theme.value)||{}))),O(o,n.updateTheme,[H(t,y)]))},h=async t=>{if(k.value=t.files=t.files||k.value||[],!c.value)return!1;const n=Se(t.files,t.additions,t.deletions),s=n.filter(e=>![g.appConfig,g.nuxtConfig,g.tokensConfig].includes(e.path));await i(c.value,s);const p=n.find(e=>e.path===g.appConfig);l(p==null?void 0:p.parsed);const f=n.find(e=>e.path===g.tokensConfig);return d(f==null?void 0:f.parsed),T(),!0},R=async()=>{const t=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:a==null?void 0:a.apiURL,method:"POST",params:{token:t}})},x=()=>{const t=window.sessionStorage.getItem("previewToken"),n=document.createElement("div");n.id="__nuxt_preview_wrapper",document.body.appendChild(n),le(Pe,{previewToken:t,apiURL:a==null?void 0:a.apiURL,syncPreview:h,requestPreviewSyncAPI:R}).mount(n)},w=async t=>{var p,f,e;const n=window.sessionStorage.getItem("previewToken");if(!t)return null;t=t.replace(/\/$/,"");let s=await((p=c.value)==null?void 0:p.getItem(`${n}:${t}`));return s||(s=await((f=c.value)==null?void 0:f.getItem(`cached:${t}`))),s||(s=s=await((e=c.value)==null?void 0:e.getItem(t))),s},I=t=>{var s;const n=window.sessionStorage.getItem("previewToken");c.value&&c.value.setItem(`${n}:${(s=t.parsed)==null?void 0:s._id}`,JSON.stringify(t.parsed))},P=async t=>{var s;const n=window.sessionStorage.getItem("previewToken");await((s=c.value)==null?void 0:s.removeItem(`${n}:${t}`))},T=async()=>{if(r!=null&&r.documentDriven){const{pages:t}=O(o,ue),n=await Promise.all(Object.keys(t.value).map(async s=>t.value[s]?await w(t.value[s]._id):null));t.value=n.reduce((s,p,f)=>(p&&(s[Object.keys(t.value)[f]]=p),s),{})}await o.hooks.callHookParallel("app:data:refresh")};return{apiURL:a==null?void 0:a.apiURL,contentStorage:c,syncPreviewFiles:i,syncPreviewAppConfig:l,syncPreviewTokensConfig:d,requestPreviewSynchronization:R,findContentWithId:w,updateContent:I,removeContentWithId:P,requestRerender:T,mountPreviewUI:x,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const t=V(),n=M(),s=N(""),p=e=>({path:e.path,query:U(e.query),params:U(e.params),fullPath:e.fullPath,meta:U(e.meta)});window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:e.key,metaKey:e.metaKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey}},"*")}),window.addEventListener("message",async e=>{if(!["https://nuxt.studio","https://dev.nuxt.studio","http://localhost:3000"].includes(e.origin))return;const{type:m,payload:A={}}=e.data||{};switch(m){case"nuxt-studio:editor:file-selected":{const _=await w(A.path);_&&(_._partial||_._path!==M().path&&(s.value=_._path,t.push(_._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:_=[],deletions:$=[]}=A;for(const C of _)await I(C);for(const C of $)await P(C.path);T();break}case"nuxt-studio:preview:sync":{h(A);break}case"nuxt-studio:config:file-changed":{const{additions:_=[],deletions:$=[]}=A,C=_.find(S=>S.path===g.appConfig);C&&l(C==null?void 0:C.parsed),$.find(S=>S.path===g.appConfig)&&l(void 0);const K=_.find(S=>S.path===g.tokensConfig);K&&d(K==null?void 0:K.parsed),$.find(S=>S.path===g.tokensConfig)&&d(void 0);break}}}),o.hook("page:finish",()=>{f(),o.payload.prerenderedAt&&T()}),o.hook("content:document-driven:finish",({route:e,page:m})=>{e.meta.studio_page_contentId=m==null?void 0:m._id}),o.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:p(M())},"*"),setTimeout(()=>{f()},100)});function f(){const e=Array.from(window.document.querySelectorAll("[data-content-id]")).map(A=>A.getAttribute("data-content-id")),m=Array.from(new Set([n.meta.studio_page_contentId,...e])).filter(Boolean);if(s.value===m[0]){s.value="";return}window.openContentInStudioEditor(m,{navigate:!0,pageContentId:n.meta.studio_page_contentId})}window.openContentInStudioEditor=(e,m={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...p(n),contentIds:e,...m}},"*")}}};export{Ne as useStudio};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
