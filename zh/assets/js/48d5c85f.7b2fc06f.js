(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3977],{29656:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>l.z,ErrorBoundaryError:()=>A.aG,ErrorBoundaryTryAgainButton:()=>A.Cw,ErrorCauseBoundary:()=>A.QW,HtmlClassNameProvider:()=>p.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>p.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>M.u,SkipToContentLink:()=>M.l,ThemeClassNames:()=>u.k,composeProviders:()=>d.Qc,createStorageSlot:()=>n.WA,duplicates:()=>k.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>y.a,isRegexpStringMatch:()=>_.F,listStorageKeys:()=>n._f,listTagsByLetters:()=>b,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>C,translateTagsPageTitle:()=>g,uniq:()=>k.j,useCollapsible:()=>l.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>T.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>i.c,usePrevious:()=>d.D9,usePrismTheme:()=>E.p,useSearchLinkCreator:()=>w.M,useSearchQueryString:()=>w.K,useStorageSlot:()=>n.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>h.i});var o=r(86668),n=r(50012),a=r(43320),s=r(53438),i=r(88824),l=r(86043),u=r(35281),c=r(91442),d=r(902),p=r(10833),f=r(92949),m=r(13102),h=r(87524),v=r(95999);const g=()=>(0,v.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function b(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[o]=t;return r.localeCompare(o)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var w=r(66177),y=r(42489),_=r(98022),k=r(67392),E=r(66412),T=r(60373),x=r(67294);function C(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=x.Children.toArray(e),r=t.find((e=>x.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=x.createElement(x.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:o}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:r}}var M=r(55225),A=r(69690)},88824:(e,t,r)=>{"use strict";r.d(t,{c:()=>c});var o=r(67294),n=r(52263),a=r(25108);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const o=e.split("|");if(1===o.length)return o[0];o.length>r.pluralForms.length&&a.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=r.select(t),s=r.pluralForms.indexOf(n);return o[Math.min(s,o.length-1)]}(r,t,e)}}},45143:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(67294)),a=o(r(93162));t.default=function(e){let{url:t,proxy:r}=e;return n.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.default.createElement("ul",{className:"export-dropdown dropdown__menu"},n.default.createElement("li",null,n.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},39620:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=o(r(67294)),a=r(29656),s=o(r(44996)),i=o(r(50941));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:r,darkLogo:o}=e,l=()=>"dark"===t?o?.altText??r?.altText:r?.altText,u=(0,s.default)(r?.url),c=(0,s.default)(o?.url);return r&&o?n.default.createElement(i.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):r||o?n.default.createElement(i.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},52767:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));r(39620),r(9472),r(85162),r(45143);const a={id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,i={unversionedId:"api/harvester-apis",id:"api/harvester-apis",title:"Harvester APIs",description:"",source:"@site/docs/api/harvester-apis.info.mdx",sourceDirName:"api",slug:"/api/harvester-apis",permalink:"/zh/v1.3/api/harvester-apis",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"api",previous:{title:"API",permalink:"/zh/v1.3/category/api"},next:{title:"List Persistent Volume Claims",permalink:"/zh/v1.3/api/list-namespaced-persistent-volume-claim"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: v1beta1"),(0,n.kt)("h1",{className:"openapi__heading"},"Harvester APIs"),(0,n.kt)("p",null,"This section introduces the APIs of the Harvester server. You can find out more about Harvester's API definitions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/tree/master/pkg/apis/harvesterhci.io"},"here"),"."))}p.isMDXComponent=!0},93162:function(e,t,r){var o,n,a,s=r(25108);n=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,r){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,r)},o.onerror=function(){s.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r.g&&r.g.global===r.g?r.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,r){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):n(l.href)?o(e,t,r):a(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,s){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),r);else if(n(e))o(e,r,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,r);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?o.apply(t,n):o)||(e.exports=a)}}]);