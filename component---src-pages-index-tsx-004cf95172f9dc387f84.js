"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{2978:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var n={};r.r(n),r.d(n,{exclude:function(){return Q},extract:function(){return T},parse:function(){return G},parseUrl:function(){return K},pick:function(){return H},stringify:function(){return J},stringifyUrl:function(){return Y}});var o=r(4316),a=r(7294),i=r(8032),s=r(917);const l=(0,o.Z)(i.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var c=function(e){let{profileImage:t}=e;return(0,s.tZ)(l,{image:t,alt:"Profile Image"})};const u=(0,o.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),p=(0,o.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),d=(0,o.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),f=(0,o.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var g=function(e){let{profileImage:t}=e;return(0,s.tZ)(u,null,(0,s.tZ)(p,null,(0,s.tZ)(c,{profileImage:t}),(0,s.tZ)("div",null,(0,s.tZ)(d,null,"Nice to Meet You,"),(0,s.tZ)(f,null,"I'm Junior Developer Eunji."))))},m=r(7462),y=r(1883);const x=(0,o.Z)("div",{target:"e1eg5kak7"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),h=(0,o.Z)(y.rU,{target:"e1eg5kak6"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),b=(0,o.Z)(i.G,{target:"e1eg5kak5"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),w=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),k=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),v=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),Z=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),j=(0,o.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var I=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,s.tZ)(h,{to:i},(0,s.tZ)(b,{image:a,alt:"Post Item Image"}),(0,s.tZ)(x,null,(0,s.tZ)(w,null,t),(0,s.tZ)(k,null,r),(0,s.tZ)(v,null,n.map((e=>(0,s.tZ)(Z,{key:e},e)))),(0,s.tZ)(j,null,o)))};var F=function(e,t){const r=(0,a.useRef)(null),{0:n,1:o}=(0,a.useState)(1),i=(0,a.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]),s=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(o((e=>e+1)),t.disconnect())}));return(0,a.useEffect)((()=>o(1)),[e]),(0,a.useEffect)((()=>{10*n>=i.length||null===r.current||0===r.current.children.length||s.observe(r.current.children[r.current.children.length-1])}),[n,e]),{containerRef:r,postList:i.slice(0,10*n)}};const O=(0,o.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var S=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=F(t,r);return(0,s.tZ)(O,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,s.tZ)(I,(0,m.Z)({},n,{link:r,key:t}))})))};const E="%[a-f0-9]{2}",C=new RegExp("("+E+")|([^%]+?)","gi"),R=new RegExp("("+E+")+","gi");function A(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],A(r),A(n))}function N(e){try{return decodeURIComponent(e)}catch{let t=e.match(C)||[];for(let r=1;r<t.length;r++)t=(e=A(t,r).join("")).match(C)||[];return e}}function U(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=R.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=N(r[0]);e!==r[0]&&(t[r[0]]=e)}r=R.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function $(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function z(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const L=Symbol("encodeFragmentIdentifier");function q(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function P(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function D(e,t){return t.decode?U(e):e}function M(e){return Array.isArray(e)?e.sort():"object"==typeof e?M(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function _(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function B(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function T(e){const t=(e=_(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function G(e,t){q((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&D(r,e).includes(e.arrayFormatSeparator);r=a?D(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>D(t,e))):null===r?r:D(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?D(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>D(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=$(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:D(i,t),r(D(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=B(r,t);else n[o]=B(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=M(r):e[t]=r,e}),Object.create(null))}function J(e,t){if(!e)return"";q((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[P(t,e),"[",o,"]"].join("")]:[...r,[P(t,e),"[",P(o,e),"]=",P(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[P(t,e),"[]"].join("")]:[...r,[P(t,e),"[]=",P(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[P(t,e),":list="].join("")]:[...r,[P(t,e),":list=",P(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[P(r,e),t,P(o,e)].join("")]:[[n,P(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,P(t,e)]:[...r,[P(t,e),"=",P(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?P(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?P(r,t)+"[]":o.reduce(n(r),[]).join("&"):P(r,t)+"="+P(o,t)})).filter((e=>e.length>0)).join("&")}function K(e,t){t={decode:!0,...t};let[r,n]=$(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:G(T(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:D(n,t)}:{}}}function Y(e,t){t={encode:!0,strict:!0,[L]:!0,...t};const r=_(e.url).split("?")[0]||"";let n=J({...G(T(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[L]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function H(e,t,r){r={parseFragmentIdentifier:!0,[L]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=K(e,r);return Y({url:n,query:z(o,t),fragmentIdentifier:a},r)}function Q(e,t,r){return H(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var V=n;const W=(0,o.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),X=(0,o.Z)((e=>{let{active:t,...r}=e;return(0,s.tZ)(y.rU,r)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var ee=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,s.tZ)(W,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.tZ)(X,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},te=r(6450);var re=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:o}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l},publicURL:c}}}=e;const u=V.parse(t),p="string"==typeof u.category&&u.category?u.category:"All",d=(0,a.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,s.tZ)(te.Z,{title:r,description:n,url:o,image:c},(0,s.tZ)(g,{profileImage:l}),(0,s.tZ)(ee,{selectedCategory:p,categoryList:d}),(0,s.tZ)(S,{selectedCategory:p,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-004cf95172f9dc387f84.js.map