(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{466:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(r,".").concat(O)]||p[O]||m[O]||l;return a?b.a.createElement(j,c(c({ref:t},o),{},{components:a})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(3),b=a(7),l=(a(0),a(466)),r={id:"options-bottomTab",title:"Bottom Tab Options",sidebar_label:"Bottom Tab"},c={unversionedId:"api/options-bottomTab",id:"version-7.13.0/api/options-bottomTab",isDocsHomePage:!1,title:"Bottom Tab Options",description:"`js",source:"@site/versioned_docs/version-7.13.0/api/options-bottomTab.mdx",slug:"/api/options-bottomTab",permalink:"/react-native-navigation/api/options-bottomTab",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.13.0/api/options-bottomTab.mdx",version:"7.13.0",sidebar_label:"Bottom Tab",sidebar:"version-7.13.0/api",previous:{title:"Bottom Tabs Options",permalink:"/react-native-navigation/api/options-bottomTabs"},next:{title:"Top Bar Options",permalink:"/react-native-navigation/api/options-stack"}},i=[{value:"<code>badge</code>",id:"badge",children:[]},{value:"<code>badgeColor</code>",id:"badgecolor",children:[]},{value:"<code>animateBadge</code>",id:"animatebadge",children:[]},{value:"<code>disableIconTint</code>",id:"disableicontint",children:[]},{value:"<code>dotIndicator</code>",id:"dotindicator",children:[]},{value:"<code>fontFamily</code>",id:"fontfamily",children:[]},{value:"<code>fontStyle</code>",id:"fontstyle",children:[]},{value:"<code>fontWeight</code>",id:"fontweight",children:[]},{value:"<code>fontSize</code>",id:"fontsize",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconWidth</code>",id:"iconwidth",children:[]},{value:"<code>iconHeight</code>",id:"iconheight",children:[]},{value:"<code>iconColor</code>",id:"iconcolor",children:[]},{value:"<code>selectedFontSize</code>",id:"selectedfontsize",children:[]},{value:"<code>selectedIcon</code>",id:"selectedicon",children:[]},{value:"<code>selectedIconColor</code>",id:"selectediconcolor",children:[]},{value:"<code>iconInsets</code>",id:"iconinsets",children:[]},{value:"<code>disableSelectedIconTint</code>",id:"disableselectedicontint",children:[]},{value:"<code>disableIconTint</code>",id:"disableicontint-1",children:[]},{value:"<code>selectedTextColor</code>",id:"selectedtextcolor",children:[]},{value:"<code>testID</code>",id:"testid",children:[{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]}]},{value:"<code>text</code>",id:"text",children:[]},{value:"<code>textColor</code>",id:"textcolor",children:[]},{value:"DotIndicator",id:"dotindicator-1",children:[]},{value:"IconInsets",id:"iconinsets-1",children:[]}],o={toc:i};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  bottomTab: {},\n};\n")),Object(l.b)("h2",{id:"badge"},Object(l.b)("inlineCode",{parentName:"h2"},"badge")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"badgecolor"},Object(l.b)("inlineCode",{parentName:"h2"},"badgeColor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"animatebadge"},Object(l.b)("inlineCode",{parentName:"h2"},"animateBadge")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"disableicontint"},Object(l.b)("inlineCode",{parentName:"h2"},"disableIconTint")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"dotindicator"},Object(l.b)("inlineCode",{parentName:"h2"},"dotIndicator")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"DotIndicator"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"fontfamily"},Object(l.b)("inlineCode",{parentName:"h2"},"fontFamily")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"fontstyle"},Object(l.b)("inlineCode",{parentName:"h2"},"fontStyle")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('normal', 'italic')"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"fontweight"},Object(l.b)("inlineCode",{parentName:"h2"},"fontWeight")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"fontsize"},Object(l.b)("inlineCode",{parentName:"h2"},"fontSize")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"icon"},Object(l.b)("inlineCode",{parentName:"h2"},"icon")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-imageResource"},"ImageResource")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"iconwidth"},Object(l.b)("inlineCode",{parentName:"h2"},"iconWidth")),Object(l.b)("p",null,"The width (in dp) of the icon."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"iconheight"},Object(l.b)("inlineCode",{parentName:"h2"},"iconHeight")),Object(l.b)("p",null,"The height (in dp) of the icon."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"iconcolor"},Object(l.b)("inlineCode",{parentName:"h2"},"iconColor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"selectedfontsize"},Object(l.b)("inlineCode",{parentName:"h2"},"selectedFontSize")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"selectedicon"},Object(l.b)("inlineCode",{parentName:"h2"},"selectedIcon")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-imageResource"},"ImageResource")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"selectediconcolor"},Object(l.b)("inlineCode",{parentName:"h2"},"selectedIconColor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"iconinsets"},Object(l.b)("inlineCode",{parentName:"h2"},"iconInsets")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"IconInsets"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"disableselectedicontint"},Object(l.b)("inlineCode",{parentName:"h2"},"disableSelectedIconTint")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"disableicontint-1"},Object(l.b)("inlineCode",{parentName:"h2"},"disableIconTint")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("h2",{id:"selectedtextcolor"},Object(l.b)("inlineCode",{parentName:"h2"},"selectedTextColor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h2"},"testID")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h3",{id:"accessibilitylabel"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(l.b)("p",null,"Overrides the text that's read by the screen reader when the user interacts with the bottomTab button."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))),Object(l.b)("h2",{id:"text"},Object(l.b)("inlineCode",{parentName:"h2"},"text")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"textcolor"},Object(l.b)("inlineCode",{parentName:"h2"},"textColor")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"color"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h2",{id:"dotindicator-1"},"DotIndicator"),Object(l.b)("h5",{id:"color-color"},"color?: color"),Object(l.b)("h5",{id:"size-number"},"size?: number"),Object(l.b)("h5",{id:"visible-boolean"},"visible?: boolean"),Object(l.b)("h5",{id:"animate-boolean"},"animate?: boolean"),Object(l.b)("h2",{id:"iconinsets-1"},"IconInsets"),Object(l.b)("h5",{id:"top-number"},"top?: number"),Object(l.b)("h5",{id:"left-number"},"left?: number"),Object(l.b)("h5",{id:"right-number"},"right?: number"),Object(l.b)("h5",{id:"bottom-number"},"bottom?: number"))}d.isMDXComponent=!0}}]);