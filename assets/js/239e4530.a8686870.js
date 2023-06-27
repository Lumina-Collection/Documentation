/*! For license information please see 239e4530.a8686870.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[763],{9215:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(7294),o=n(6010),a=n(8729),i=n(1128),c=n(5602),s=n(4699),l=n(4804);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return r.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer)},t)}function m({href:e,icon:t,title:n,description:a}){return r.createElement(d,{href:e},r.createElement(l.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:n},t," ",n),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a},a))}function f({item:e}){var t;const n=(0,a.LM)(e);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p({item:e}){var t,n;const o=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(m,{href:e.href,icon:o,title:e.label,description:null!=(n=e.description)?n:null==i?void 0:i.description})}function g({item:e}){switch(e.type){case"link":return r.createElement(p,{item:e});case"category":return r.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(y)for(var n of y(t))E.call(t,n)&&v(e,n,t[n]);return e};function x({className:e}){const t=(0,a.jA)();return r.createElement(_,{items:t.items,className:e})}function _(e){const{items:t,className:n}=e;if(!t)return r.createElement(x,j({},e));const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},6496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(5893),o=n(1151),a=n(9215),i=n(8729);const c={},s="Usage Guide",l={unversionedId:"usage/README",id:"usage/README",title:"Usage Guide",description:"Welcome to the Rollbound Usage Guide! This guide includes information and tutorials for players",source:"@site/docs/rollbound/usage/README.mdx",sourceDirName:"usage",slug:"/usage/",permalink:"/rollbound/usage/",draft:!1,unlisted:!1,editUrl:"https://github.com/Lumina-Collection/Documentation/blob/main/docs/rollbound/usage/README.mdx",tags:[],version:"current",lastUpdatedBy:"Benjamin Selig",lastUpdatedAt:1687851904,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{},sidebar:"primary",previous:{title:"Localization",permalink:"/rollbound/admin/configuration/localization"},next:{title:"Rolling Dice",permalink:"/rollbound/usage/rolling-dice"}},u={},d=[];function m(e){const t=Object.assign({h1:"h1",p:"p",hr:"hr"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usage-guide",children:"Usage Guide"}),"\n",(0,r.jsx)(t.p,{children:"Welcome to the Rollbound Usage Guide! This guide includes information and tutorials for players\non how to use Rollbound properly."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(a.Z,{items:(0,i.jA)().items})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},5251:(e,t,n)=>{n(7418);var r=n(7294),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},5893:(e,t,n)=>{e.exports=n(5251)},1151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var r=n(7294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:c},t)}}}]);