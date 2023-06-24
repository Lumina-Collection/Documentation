/*! For license information please see 7b15584e.390328ea.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[557],{303:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(5893),l=n(1151);const a={slug:"/admin/configuration/localization"},s="Localization",i={unversionedId:"admin/configuration/localization",id:"admin/configuration/localization",title:"Localization",description:"Rollbound supports localization, which means that you can change nearly all messages sent by Rollbound to your liking.",source:"@site/docs/rollbound/admin/configuration/localization.md",sourceDirName:"admin/configuration",slug:"/admin/configuration/localization",permalink:"/rollbound/admin/configuration/localization",draft:!1,unlisted:!1,editUrl:"https://github.com/Lumina-Collection/Documentation/blob/main/docs/rollbound/admin/configuration/localization.md",tags:[],version:"current",lastUpdatedBy:"Benjamin Selig",lastUpdatedAt:1687601716,formattedLastUpdatedAt:"Jun 24, 2023",frontMatter:{slug:"/admin/configuration/localization"},sidebar:"primary",previous:{title:"Commands and Permissions",permalink:"/rollbound/admin/configuration/commands-and-permissions"},next:{title:"Usage Guide",permalink:"/rollbound/usage/"}},r={},c=[{value:"Localization Files",id:"localization-files",level:2},{value:"Default Localizations",id:"default-localizations",level:3},{value:"Custom Localizations",id:"custom-localizations",level:3},{value:"Changing the Language",id:"changing-the-language",level:2},{value:"Custom Success States",id:"custom-success-states",level:2}];function d(e){const o=Object.assign({h1:"h1",p:"p",admonition:"admonition",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"localization",children:"Localization"}),"\n",(0,t.jsx)(o.p,{children:"Rollbound supports localization, which means that you can change nearly all messages sent by Rollbound to your liking."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["Rollbound supports ",(0,t.jsx)(o.a,{href:"https://docs.advntr.dev/minimessage/index.html",children:"MiniMessage"})," for localization. This means that you can use MiniMessage formatting in your localization files."]})}),"\n",(0,t.jsx)(o.h2,{id:"localization-files",children:"Localization Files"}),"\n",(0,t.jsxs)(o.p,{children:["Rollbound uses Properties files for localization. These files are located in the ",(0,t.jsx)(o.code,{children:"plugins/Rollbound/i18n"})," folder."]}),"\n",(0,t.jsx)(o.h3,{id:"default-localizations",children:"Default Localizations"}),"\n",(0,t.jsxs)(o.p,{children:["The default localizaztions can be found inside the ",(0,t.jsx)(o.code,{children:"default"})," folder. These files are used when no other localization files are found."]}),"\n",(0,t.jsxs)(o.p,{children:["Rollbound supports ",(0,t.jsx)(o.code,{children:"English"})," and ",(0,t.jsx)(o.code,{children:"German"})," by default."]}),"\n",(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsxs)(o.p,{children:["The default localizations are not meant to be edited and will be reset on every server restart. If you want to change the messages, create a new localization file inside the ",(0,t.jsx)(o.code,{children:"custom"})," folder."]})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-properties",metastring:'title="plugins/Rollbound/i18n/default/default.properties"',children:'command.rollbound=<gold><name> <gray>version <gold><version>\\n\\\n<gray><description>\\n\\\n<gray>Website: <gold><website>\\n\\\n<gray>Author: <gold><author>\ncommand.rollbound.reload=<gold>Config <gray>and <gold>Messages <gray>reloaded!\ncommand.roll=<gold><player> <gray>rolls with <hover:show_text:"<results>"><dice></hover> <gray>an end-result of: <hover:show_text:"<gray>Modified by: <modifier>"><gold><total></hover> <success_state>\ncommand.roll.die=<gold><count>d<faces></gold>\ncommand.roll.result=<result_color><result>\ncommand.roll.result.seperator=<gray>, </gray>\ncommand.roll.die.seperator=<gray>, </gray>\ncommand.roll.modifier.positive=<green>+<modifier></green>\ncommand.roll.modifier.negative=<red>-<modifier></red>\ncommand.roll.success-state=<gray>- <success_state>\ncommand.roll.results=<die><gray>:</gray> <dice_group_results><newline>\nsuccess-states.text.critical-success=<green>Critical Success!\nsuccess-states.text.critical-failure=<red>Critical Failure!\ncommand.roll.meta.name=roll\ncommand.roll.meta.argument.threshold=threshold\ncommand.roll.meta.argument.roll-string=rollString\ncommand.roll.meta.short-description=A command provided by the Lumina Collection.\ncommand.proll.meta.name=proll\ncommand.proll.meta.short-description=A command provided by the Lumina Collection.\ncommand.proll.meta.argument.threshold=threshold\ncommand.proll.meta.argument.roll-string=rollString\n'})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-properties",metastring:'title="plugins/Rollbound/i18n/default/default_de.properties"',children:'command.rollbound=<gold><name> <gray>version <gold><version>\\n\\\n<gray><description>\\n\\\n<gray>Webseite: <gold><website>de/\\n\\\n<gray>Autor: <gold><author>\ncommand.rollbound.reload=<blue>Konfiguration <gray>und <blue>Nachrichten <gray>neu geladen!\ncommand.roll=<gold><player> <gray>w\xfcrfelt mit <hover:show_text:"<results>"><dice></hover> <gray>ein Gesamtergebnis von: <hover:show_text:"<gray>Modifiziert um: <modifier>"><gold><total></hover> <success_state>\ncommand.roll.die=<gold><count>w<faces></gold>\ncommand.roll.die.seperator=<gray>, </gray>\ncommand.roll.modifier.negative=<red>-<modifier></red>\ncommand.roll.modifier.positive=<green>+<modifier></green>\ncommand.roll.result=<result_color><result>\ncommand.roll.result.seperator=<gray>, </gray>\ncommand.roll.success-state=<gray>- <success_state>\ncommand.roll.results=<die><gray>:</gray> <dice_group_results><newline>\nsuccess-states.text.critical-success=<green>Kritischer Erfolg!\nsuccess-states.text.critical-failure=<red>Patzer!\ncommand.roll.meta.name=w\xfcrfeln\ncommand.roll.meta.argument.threshold=Zielwert\ncommand.roll.meta.argument.roll-string=W\xfcrfelkette\ncommand.roll.meta.short-description=Ein Befehl der Lumina Collection.\ncommand.proll.meta.name=pw\xfcrfeln\ncommand.proll.meta.short-description=Ein Befehl der Lumina Collection.\ncommand.proll.meta.argument.threshold=Zielwert\ncommand.proll.meta.argument.roll-string=W\xfcrfelkette\n'})}),"\n",(0,t.jsx)(o.h3,{id:"custom-localizations",children:"Custom Localizations"}),"\n",(0,t.jsxs)(o.p,{children:["Custom localizations can be found inside the ",(0,t.jsx)(o.code,{children:"custom"})," folder. These files will take priority over the default localizations."]}),"\n",(0,t.jsxs)(o.p,{children:["You can create a new localization file by copying the ",(0,t.jsx)(o.code,{children:"default.properties"})," file and renaming it to ",(0,t.jsx)(o.code,{children:"custom.properties"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["You can also create custom translations for the default localizations. To do this, copy the default localization file you want to translate and rename it to ",(0,t.jsx)(o.code,{children:"custom_<language>.properties"}),". For example, if you want to translate the default German localizations, you would copy the ",(0,t.jsx)(o.code,{children:"default_de.properties"})," file and rename it to ",(0,t.jsx)(o.code,{children:"custom_de.properties"}),"."]})}),"\n",(0,t.jsx)(o.p,{children:"Here is an example of a custom localization file:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-properties",metastring:'title="plugins/Rollbound/i18n/custom/custom.properties"',children:"command.proll.meta.argument.threshold=target value\n"})}),"\n",(0,t.jsx)(o.p,{children:"As you can see, you don't have to translate every message. Only the messages you want to change need to be in the file."}),"\n",(0,t.jsx)(o.h2,{id:"changing-the-language",children:"Changing the Language"}),"\n",(0,t.jsx)(o.p,{children:"Rollbound will automatically use the language of the player it sends the message to. If the player's language is not supported, it will use the default language. Messages sent to the console will be in Axios' default language."}),"\n",(0,t.jsxs)(o.p,{children:["As Rollbound relies on Axios, you can change the language of the console by setting the ",(0,t.jsx)(o.code,{children:"language"})," option in the ",(0,t.jsx)(o.code,{children:"config.yml"})," file of Axios."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",metastring:'title="plugins/Axios/config.yml"',children:"language: en\n"})}),"\n",(0,t.jsx)(o.h2,{id:"custom-success-states",children:"Custom Success States"}),"\n",(0,t.jsxs)(o.p,{children:["You can add custom success states to your localizations. To do this, add a new entry to the ",(0,t.jsx)(o.code,{children:"success-states"})," section of your localization file."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-properties",metastring:'title="plugins/Rollbound/i18n/custom/custom.properties"',children:"success-states.text.custom-success=<green>Custom Success!\nsuccess-states.text.custom-failure=<red>Custom Failure!\n"})}),"\n",(0,t.jsxs)(o.p,{children:["In the above example, we added two new success states called ",(0,t.jsx)(o.code,{children:"custom-success"})," and ",(0,t.jsx)(o.code,{children:"custom-failure"}),". This is the ",(0,t.jsx)(o.code,{children:"id"})," from our ",(0,t.jsx)(o.code,{children:"config.yml"}),"."]})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,l.ah)(),e.components);return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},5251:(e,o,n)=>{n(7418);var t=n(7294),l=60103;if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;l=a("react.element"),o.Fragment=a("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var t,a={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(d=o.ref),o)i.call(o,t)&&!r.hasOwnProperty(t)&&(a[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===a[t]&&(a[t]=o[t]);return{$$typeof:l,type:e,key:c,ref:d,props:a,_owner:s.current}}o.jsx=c,o.jsxs=c},5893:(e,o,n)=>{e.exports=n(5251)},1151:(e,o,n)=>{n.d(o,{Zo:()=>i,ah:()=>a});var t=n(7294);const l=t.createContext({});function a(e){const o=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const s={};function i({components:e,children:o,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:a(e),t.createElement(l.Provider,{value:i},o)}}}]);