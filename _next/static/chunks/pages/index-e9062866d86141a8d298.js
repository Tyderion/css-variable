(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6475:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return E}});var r=a(4679),i=a(2958),s=a(4184),o=a.n(s),t=a(7294),l=a(7825),c=a(8281),u=a(5893),h=function(e){var n=e.children,a=e.className;return(0,u.jsx)(l.Z,{className:o()("cf7m0q7",a),language:"typescript",style:c.Z,children:n})},m=(0,i.z)("div")({name:"CodeExampleWithPreviewWrapper",class:"c1orwgci"}),d=(0,i.z)("button")({name:"CodeSwitchButton",class:"c1m7klxr"}),p="g196gy89",b="i1cakw1f",S=function(e){var n=e.children,a=e.preview,r=e.title,i=(0,t.useState)(!1),s=i[0],l=i[1];return(0,u.jsxs)(m,{children:[(0,u.jsxs)(d,{onClick:function(){return l(!s)},children:[s?"hide":"show"," ".concat(r)]}),(0,u.jsx)(h,{className:o()(p,s&&b),children:n}),(0,u.jsx)(h,{className:o()(p,!s&&b),children:a})]})};a(1371);var f=(0,i.z)("button")({name:"ThemeSwitchButton",class:"t1sf0z65"}),x=function(){return(0,u.jsx)(f,{onClick:function(){return document.body.classList.toggle("ijqncwj")}})};a(6953);var v=a(9008),y=(0,r.z)("header")({name:"HeaderWrapper",class:"hscj91m"}),j=(0,r.z)("div")({name:"Header",class:"h1cugfug"}),C=(0,r.z)("h1")({name:"TextLogo",class:"tq0ye8l"}),w=(0,r.z)("a")({name:"HeaderLink",class:"h1syp24u"}),g=(0,r.z)("main")({name:"Main",class:"mefbdzk"}),V=(0,r.z)("div")({name:"Gradient",class:"g1aenrjz"}),k=(0,r.z)("h2")({name:"Intro",class:"i17hrsy1"}),z=(0,r.z)("p")({name:"Outro",class:"ojloh0"}),_=(0,r.z)("h2")({name:"Headline",class:"hjjocwf"}),T=(0,r.z)("p")({name:"Text",class:"t1181149"}),E=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.default,{children:(0,u.jsx)("link",{rel:"shortcut icon",href:"/static/favicon.png"})}),(0,u.jsx)(y,{children:(0,u.jsxs)(j,{children:[(0,u.jsx)(C,{children:"CSS Variable"}),(0,u.jsx)(w,{href:"/documentation",children:"Documentation"}),(0,u.jsx)(w,{href:"https://github.com/jantimon/css-variable",children:"Github"}),(0,u.jsx)(x,{})]})}),(0,u.jsx)(V,{}),(0,u.jsxs)(g,{children:[(0,u.jsx)(k,{children:"Typesafe CSS Variable definitions for your CSS-in-JS solution"}),(0,u.jsx)(h,{children:"\nimport { CSSVariable } from 'css-variable';\n\nexport const theme = {\n  primary: new CSSVariable(),\n  secondary: new CSSVariable(),\n}\n"}),(0,u.jsx)(h,{children:"\nimport { theme } from './theme' \n\nexport const Headline = styled.h1`\n  color: ${theme.primary};\n`;\n        "}),(0,u.jsx)(_,{children:"Export CSSVariables with your components"}),(0,u.jsx)(T,{children:"CSSVariables allow you to make a component stylable without css overwrites"}),(0,u.jsx)(S,{title:"css variables",preview:'\nimport { CSSVariable } from \'css-variable\';\n\nexport const color = new CSSVariable("1isauia0", {value: "#3a5779"});\nexport const hoverColor = new CSSVariable("1isauia1", {value: "#23374e"});\n\nexport const Button = styled.button`\n  color: var(--1isauia0, #3a5779);\n  :hover { \n    color: var(--1isauia1, #23374e);\n  }\n`;\n      ',children:'\nimport { CSSVariable } from \'css-variable\';\n\nexport const color = new CSSVariable({value: "#3a5779"});\nexport const hoverColor = new CSSVariable({value: "#23374e"});\n\nexport const Button = styled.button`\n  color: ${color};\n  :hover { \n    color: ${hoverColor};\n  }\n`;\n        '}),(0,u.jsx)(_,{children:"Modify CSSVariables"}),(0,u.jsx)(T,{children:"Set values of your CSS Variables in wrapper components"}),(0,u.jsx)(S,{title:"css variables",preview:"\nimport { Button, color, hoverColor } from './Button'\n\nexport const Teaser = styled.button`\n  background: #C2E7DA;\n\n  --1isauia0: #3a5779;\n  --1isauia1: #23374e;\n\n  @media (prefers-color-scheme: dark) {\n    background: #23374e;\n    --1isauia0: #5886bb;\n    --1isauia1: #679cda;\n  }\n`\n\nexport const TeaserDark = styled.button`\n  background: #23374e;\n\n  --1isauia0: #5886bb;\n  --1isauia1: #679cda;\n\n  @media (prefers-color-scheme: dark) {\n    background: #C2E7DA;\n    --1isauia0: #3a5779;\n    --1isauia1: #23374e;\n  }\n`\n      ",children:'\nimport { Button, color, hoverColor } from \'./Button\'\n\nexport const Teaser = styled.button`\n  background: #C2E7DA;\n\n  ${color.toStyle("#3a5779")};\n  ${hoverColor.toStyle("#23374e")};\n\n  @media (prefers-color-scheme: dark) {\n    background: #23374e;\n    ${color.toStyle("#5886bb")};\n    ${hoverColor.toStyle("#679cda")};\n  }\n`\n\nexport const TeaserDark = styled.button`\n  background: #23374e;\n\n  ${color.toStyle("#5886bb")};\n  ${hoverColor.toStyle("#679cda")};\n\n  @media (prefers-color-scheme: dark) {\n    background: #C2E7DA;\n    ${color.toStyle("#3a5779")};\n    ${hoverColor.toStyle("#23374e")};\n  }\n`\n        '}),(0,u.jsx)(_,{children:"Use CSSVariables for themes"}),(0,u.jsx)(T,{children:"Set values of your CSS Variables in wrapper components"}),(0,u.jsx)(S,{title:"css variables",preview:'\nimport { CSSVariable, serializeThemeValues } from \'css-variable\';\n\nexport const theme = {\n  primary: new CSSVariable("1isauia0"),\n  secondary: new CSSVariable("1isauia1"),\n};\n\nconst lightThemeCSS = `\n  --1isauia0: #3a5779;\n  --1isauia1: #23374e;\n`;\n\nconst darkThemeCSS = `\n  --1isauia0: #6191c9;\n  --1isauia1: #4d79aa;\n`;\n        ',children:'\nimport { CSSVariable, serializeThemeValues } from \'css-variable\';\n\nexport const theme = {\n  primary: new CSSVariable(),\n  secondary: new CSSVariable(),\n};\n\nconst lightThemeCSS = serializeThemeValues(theme, {\n  primary: "#3a5779",\n  secondary: "#23374e"\n});\n\nconst darkThemeCSS = serializeThemeValues(theme, {\n  primary: "#6191c9",\n  secondary: "#4d79aa"\n});\n'}),(0,u.jsx)(_,{children:"Unique and consistent variable names"}),(0,u.jsx)(T,{children:"The optional babel plugin generates unique variable names during build time"}),(0,u.jsx)(h,{children:'\n{\n  "plugins": [\n      "css-variable/babel"\n  ]\n}'}),(0,u.jsx)(T,{children:'For better DX the variable name will be used as prefix for the css variable name unlesss either BABEL_ENV or NODE_ENV is set to "production"'}),(0,u.jsx)(S,{title:"transpiled",preview:'\nimport { CSSVariable } from \'css-variable\';\n\nexport const theme = {\n  primary: new /*@__PURE__*/CSSVariable("primary--1isauia0"),\n  secondary: new /*@__PURE__*/CSSVariable("secondary--1isauia1"),\n};\n        ',children:"\nimport { CSSVariable } from 'css-variable';\n\nexport const theme = {\n  primary: new CSSVariable(),\n  secondary: new CSSVariable(),\n};\n        "}),(0,u.jsx)(T,{children:"In case that the name is passed as a variable the prefix will be concatinated to provide a unique name."}),(0,u.jsx)(S,{title:"transpiled",preview:"\nimport { CSSVariable } from 'css-variable';\n\nexport const values = ['primary', 'secondary']\n  .map((name) => new /*@__PURE__*/CSSVariable(\"1isauia0\", name));\n\nconsole.log(values[0].val); // -> var(--1isauia0-primary)\n        ",children:"\nimport { CSSVariable } from 'css-variable';\n\nexport const values = ['primary', 'secondary']\n  .map((name) => new CSSVariable(name));\n\nconsole.log(values[0].val); // -> var(--1isauia0-primary)\n        "}),(0,u.jsx)(z,{children:"MIT License"})]})]})};a(6706)},5653:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6475)}])},1371:function(e){e.exports={cf7m0q7:"cf7m0q7",c1orwgci:"c1orwgci",c1m7klxr:"c1m7klxr",g196gy89:"g196gy89",i1cakw1f:"i1cakw1f"}},6953:function(e){e.exports={ijqncwj:"ijqncwj",t1sf0z65:"t1sf0z65"}},6706:function(e){e.exports={hscj91m:"hscj91m",h1cugfug:"h1cugfug",tq0ye8l:"tq0ye8l",h1syp24u:"h1syp24u",mefbdzk:"mefbdzk",g1aenrjz:"g1aenrjz",i17hrsy1:"i17hrsy1",ojloh0:"ojloh0",hjjocwf:"hjjocwf",t1181149:"t1181149"}}},function(e){e.O(0,[774,120,888,179],(function(){return n=5653,e(e.s=n);var n}));var n=e.O();_N_E=n}]);