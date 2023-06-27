/*! For license information please see 815d91bf.b7657a89.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[646],{9215:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(7294),i=n(6010),o=n(8729),a=n(1128),c=n(5602),s=n(4699),l=n(4804);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return r.createElement(a.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer)},t)}function m({href:e,icon:t,title:n,description:o}){return r.createElement(u,{href:e},r.createElement(l.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n},t," ",n),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o},o))}function f({item:e}){var t;const n=(0,o.LM)(e);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p({item:e}){var t,n;const i=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(m,{href:e.href,icon:i,title:e.label,description:null!=(n=e.description)?n:null==a?void 0:a.description})}function h({item:e}){switch(e.type){case"link":return r.createElement(p,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&v(e,n,t[n]);if(g)for(var n of g(t))E.call(t,n)&&v(e,n,t[n]);return e};function x({className:e}){const t=(0,o.jA)();return r.createElement(_,{items:t.items,className:e})}function _(e){const{items:t,className:n}=e;if(!t)return r.createElement(x,j({},e));const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},8300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(5893),i=n(1151),o=n(9215),a=n(8729);const c={},s="Administration Guide",l={unversionedId:"admin/README",id:"admin/README",title:"Administration Guide",description:"Welcome to the Rollbound Administration Guide! This guide includes information and tutorials for server administrators on how to install and configure the plugin.",source:"@site/docs/rollbound/admin/README.mdx",sourceDirName:"admin",slug:"/admin/",permalink:"/rollbound/admin/",draft:!1,unlisted:!1,editUrl:"https://github.com/Lumina-Collection/Documentation/blob/main/docs/rollbound/admin/README.mdx",tags:[],version:"current",lastUpdatedBy:"Benjamin Selig",lastUpdatedAt:1687879716,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{},sidebar:"primary",previous:{title:"Welcome to Rollbound \ud83d\udc4b",permalink:"/rollbound/"},next:{title:"Getting Started",permalink:"/rollbound/admin/getting-started"}},d={},u=[];function m(e){const t=Object.assign({h1:"h1",p:"p",hr:"hr"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"administration-guide",children:"Administration Guide"}),"\n",(0,r.jsx)(t.p,{children:"Welcome to the Rollbound Administration Guide! This guide includes information and tutorials for server administrators on how to install and configure the plugin."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(o.Z,{items:(0,a.jA)().items})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},5251:(e,t,n)=>{n(7418);var r=n(7294),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:a.current}}t.jsx=l,t.jsxs=l},5893:(e,t,n)=>{e.exports=n(5251)},1151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>o});var r=n(7294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:c},t)}}}]);