/*! For license information please see d0b01873.3b434cb2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[849],{3534:(e,l,o)=>{o.r(l),o.d(l,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>s});var i=o(5893),t=o(1151);const r={slug:"/usage/rolling-dice"},a="Rolling Dice",n={unversionedId:"usage/rolling-dice",id:"usage/rolling-dice",title:"Rolling Dice",description:"Rollbound supports many ways to roll dice. This page will give you a quick overview of the different ways you can roll them.",source:"@site/docs/rollbound/usage/rolling-dice.md",sourceDirName:"usage",slug:"/usage/rolling-dice",permalink:"/rollbound/usage/rolling-dice",draft:!1,unlisted:!1,editUrl:"https://github.com/Lumina-Collection/Documentation/blob/main/docs/rollbound/usage/rolling-dice.md",tags:[],version:"current",lastUpdatedBy:"Benjamin Selig",lastUpdatedAt:1687851904,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{slug:"/usage/rolling-dice"},sidebar:"primary",previous:{title:"Usage Guide",permalink:"/rollbound/usage/"}},u={},s=[{value:"Default Rolls",id:"default-rolls",level:2},{value:"Multiple Dice and Modifiers",id:"multiple-dice-and-modifiers",level:2},{value:"Private Rolls",id:"private-rolls",level:2},{value:"Exploding Dice (Future Feature)",id:"exploding-dice-future-feature",level:2},{value:"Dice Pools (Future Feature)",id:"dice-pools-future-feature",level:2},{value:"Probability (Future Feature)",id:"probability-future-feature",level:2},{value:"History (Future Feature)",id:"history-future-feature",level:2},{value:"Dice Macros (Future Feature)",id:"dice-macros-future-feature",level:2}];function d(e){const l=Object.assign({h1:"h1",admonition:"admonition",p:"p",h2:"h2",code:"code"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"rolling-dice",children:"Rolling Dice"}),"\n",(0,i.jsx)(l.admonition,{type:"info",children:(0,i.jsx)(l.p,{children:"Rollbound supports many ways to roll dice. This page will give you a quick overview of the different ways you can roll them."})}),"\n",(0,i.jsx)(l.h2,{id:"default-rolls",children:"Default Rolls"}),"\n",(0,i.jsxs)(l.p,{children:["The most basic way to roll dice is to use the ",(0,i.jsx)(l.code,{children:"/roll"})," command. This command (without any arguments) will roll a single die with a default number of sides configured by your server administrator."]}),"\n",(0,i.jsxs)(l.p,{children:["When yoo provide a number as an argument, your roll will roll against that number as a target. For example, ",(0,i.jsx)(l.code,{children:"/roll 10"})," will roll a single die and compare it to 10. Depending on the configuration of your server, you may need to roll higher or lower than the target number to succeed."]}),"\n",(0,i.jsx)(l.h2,{id:"multiple-dice-and-modifiers",children:"Multiple Dice and Modifiers"}),"\n",(0,i.jsxs)(l.p,{children:['You can roll multiple dice at once by using a so called "roll string". A roll string is a combination of dice that are separated by a dots and modifiers seperated by a ',(0,i.jsx)(l.code,{children:"+"})," or ",(0,i.jsx)(l.code,{children:"-"})," sign. For example, ",(0,i.jsx)(l.code,{children:"2d6+1"})," will roll two six-sided dice and add 1 to the result. Or ",(0,i.jsx)(l.code,{children:"2d20.5d6-1"})," will roll two twenty-sided dice, five six-sided dice and subtract 1 from the result."]}),"\n",(0,i.jsx)(l.h2,{id:"private-rolls",children:"Private Rolls"}),"\n",(0,i.jsxs)(l.p,{children:["You can roll dice privately by using the ",(0,i.jsx)(l.code,{children:"/proll"})," command. This command works exactly like the ",(0,i.jsx)(l.code,{children:"/roll"})," command, but will only be visible to you and the console."]}),"\n",(0,i.jsx)(l.h2,{id:"exploding-dice-future-feature",children:"Exploding Dice (Future Feature)"}),"\n",(0,i.jsx)(l.p,{children:"Rollbound will support exploding dice in the future. Exploding dice are dice that will roll again if they roll a maximum value. For example, if you roll a d6 and it rolls a 6, it will roll again and add the result to the previous roll. This will continue until the dice rolls a value that is not the maximum value."}),"\n",(0,i.jsx)(l.h2,{id:"dice-pools-future-feature",children:"Dice Pools (Future Feature)"}),"\n",(0,i.jsx)(l.p,{children:"Rollbound will support dice pools in the future. Dice pools are a collection of dice that are rolled together. The result of the roll is the number of dice that rolled a certain value. For example, if you roll 5d6 and get 1, 2, 3, 4, 5, the result will be 1 success. If you roll 5d6 and get 1, 1, 1, 1, 1, the result will be 5 successes."}),"\n",(0,i.jsx)(l.h2,{id:"probability-future-feature",children:"Probability (Future Feature)"}),"\n",(0,i.jsx)(l.p,{children:"Rollbound will support probability calculations in the future. This will allow you to calculate the probability of a certain roll. For example, you can calculate the probability of rolling a 6 on a d6. Or you can calculate the probability of rolling a 6 on 2d6. Or you can calculate the probability of rolling a 6 on 2d6 and adding 1 to the result."}),"\n",(0,i.jsx)(l.h2,{id:"history-future-feature",children:"History (Future Feature)"}),"\n",(0,i.jsx)(l.p,{children:"Rollbound will support a history of your rolls in the future. This will allow you and gamemasters to see what you rolled in the past."}),"\n",(0,i.jsx)(l.h2,{id:"dice-macros-future-feature",children:"Dice Macros (Future Feature)"}),"\n",(0,i.jsxs)(l.p,{children:["Rollbound will support dice macros in the future. This will allow you to save a roll string and give it a name. You can then use the name to roll the dice again. For example, you can save a roll string called ",(0,i.jsx)(l.code,{children:"attack"})," and use it to roll your attack dice. Or you can save a roll string called ",(0,i.jsx)(l.code,{children:"damage"})," and use it to roll your damage dice."]})]})}const c=function(e={}){const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?(0,i.jsx)(l,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},5251:(e,l,o)=>{o(7418);var i=o(7294),t=60103;if(l.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;t=r("react.element"),l.Fragment=r("react.fragment")}var a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,l,o){var i,r={},s=null,d=null;for(i in void 0!==o&&(s=""+o),void 0!==l.key&&(s=""+l.key),void 0!==l.ref&&(d=l.ref),l)n.call(l,i)&&!u.hasOwnProperty(i)&&(r[i]=l[i]);if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===r[i]&&(r[i]=l[i]);return{$$typeof:t,type:e,key:s,ref:d,props:r,_owner:a.current}}l.jsx=s,l.jsxs=s},5893:(e,l,o)=>{e.exports=o(5251)},1151:(e,l,o)=>{o.d(l,{Zo:()=>n,ah:()=>r});var i=o(7294);const t=i.createContext({});function r(e){const l=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(l):{...l,...e}),[l,e])}const a={};function n({components:e,children:l,disableParentContext:o}){let n;return n=o?"function"==typeof e?e({}):e||a:r(e),i.createElement(t.Provider,{value:n},l)}}}]);