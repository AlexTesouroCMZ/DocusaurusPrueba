"use strict";(self.webpackChunkdocusaurus_prueba=self.webpackChunkdocusaurus_prueba||[]).push([[5514],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>d});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),c=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},u=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?t.createElement(g,s(s({ref:a},u),{},{components:r})):t.createElement(g,s({ref:a},u))}));function d(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3785:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},s="Branching Strategy",l={unversionedId:"branching-strategy",id:"branching-strategy",title:"Branching Strategy",description:"Problem\xe1tica:",source:"@site/docs/branching-strategy.md",sourceDirName:".",slug:"/branching-strategy",permalink:"/DocusaurusPrueba/docs/branching-strategy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/branching-strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Titulo de la Prueba",permalink:"/DocusaurusPrueba/docs/hoja-estilos"}},i={},c=[{value:"Problem\xe1tica:",id:"problem\xe1tica",level:2},{value:"Estrategia:",id:"estrategia",level:2}],u={toc:c};function m(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"branching-strategy"},"Branching Strategy"),(0,n.kt)("h2",{id:"problem\xe1tica"},"Problem\xe1tica:"),(0,n.kt)("p",null,"Hasta ahora se ha estado trabajando con la de herramienta de versionado de subversi\xf3n sobre una misma rama (Master) y de manera excepcional se generaban ramas para trabajar las caracter\xedsticas. Al ir aumentando el equipo de desarrollo esta forma de trabajo resulta ineficiente. Tampoco se encontraba definido el momento en que se actualiza el repositorio (antes o despu\xe9s de una publicaci\xf3n). Por todo esto y aprovechando la migraci\xf3n a GIT vemos la oportunidad de establecer una estrategia clara de desarrollo en equipo y que sirva de base para futuras mejoras."),(0,n.kt)("h2",{id:"estrategia"},"Estrategia:"),(0,n.kt)("p",null,"Para nuestros repositorios seguiremos la metodolog\xeda de tener un branch principal 'master', un branch 'dev' para comprobar que todo funcione antes de enviar los cambios a master y m\xfaltiples 'feature' branches para que cada colaborador pueda encargarse de una tarea definida, trabajarla y probarla a gusto antes de reunir los cambios en 'dev'.  "),(0,n.kt)("p",null,"Si durante el testeo de la rama Dev detectamos alg\xfan problema se deber\xe1 trabajar en su rama correspondiente, a menos que sea un error peque\xf1o y se pueda solucionar de forma \xe1gil, en estos casos lo haremos sobre Dev a modo de Hotfix."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:r(6733).Z},(0,n.kt)("img",{src:"./images/bs.png",width:"550",height:"650"}))),(0,n.kt)("p",null,"En este ejemplo hemos representado dos branches de Features: Features A y Features B. Tambi\xe9n hemos hecho uso de los hotfixes para representar como se realizar\xedan en nuestra estrategia."),(0,n.kt)("p",null,"Paso a paso:"),(0,n.kt)("p",null,"Para llegar del 'Primer commit' al 'Release 1' se realizan los siguientes pasos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1 - Realizar el primer commit del c\xf3digo al Master, este commit deber\xeda de ser la \xfaltima versi\xf3n productiva. (Una sola vez al comienzo para generar la arquitectura)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2 - Creamos la rama Dev a partir de la rama Master, al hacerlo tendremos el mismo c\xf3digo en ambas ramas.  (Una sola vez al comienzo para generar la arquitectura)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3 - Creamos ramas de Features para empezar a desarrollar, esto se realiza siempre que se necesite desarrollar una nueva caracter\xedsticas, en un feature podr\xe1n trabajar varias personas al mismo tiempo si es necesario. Al crearlas lo haremos a partir de la rama Dev.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"4 - Ejemplo: desarrollamos en la rama 'Feature A' la caracter\xedstica ","[A 1]",", una vez terminada nos interesa hacer un commit en la rama 'Feature A', para ello haremos un commit local y push a la rama:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add *\ngit commit -m "A 1"\ngit push\n')),(0,n.kt)("p",null,"Para el desarrollo de la caracter\xedstica ","[A 2]"," realizar\xedamos los mismos pasos, as\xed como se har\xe1n en la rama 'Feature B' para la caracter\xedstica ","[B 1]","."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5 - Terminados los desarrollos de 'Feature A' y 'Feature B' los pasaremos a preproducci\xf3n 'Dev'. Para ello debemos hacer un merge donde uniremos las caracter\xedsticas desarrolladas con Dev.")),(0,n.kt)("p",null,"Nos posicionamos en la rama Dev:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout Dev\ngit merge Feature A\ngit merge Feature B\ngit push\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"6 - Podemos desplegar una versi\xf3n de prueba del c\xf3digo que se encuentra en la rama Dev, si hay alg\xfan problema lo solucionamos de la siguiente manera:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"6.1 - Si el problema es de \xe1gil soluci\xf3n: Desarrollamos el cambio en la misma rama y hacemos un push, a esto lo llamamos 'Hotfix', tras ello volvemos al paso 6."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add *\ngit commit -m "Test versi\xf3n Hotfix"\ngit push\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6.2 - Si el problema no es de \xe1gil soluci\xf3n: Desarrollamos los cambios en la rama o ramas correspondientes, para ello actualizamos el estado de estas ramas con la \xfaltima versi\xf3n de Dev. Tras ello volvemos al paso 6.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout Feature A\ngit merge Dev\ngit push\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"7 - Si todo funciona correctamente hacemos merge de la rama Dev a la rama Master, una vez realizado esto podemos publicar en producci\xf3n.")))}m.isMDXComponent=!0},6733:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/files/bs-00716e9d67f89f9fd2b7548e16a61794.png"}}]);