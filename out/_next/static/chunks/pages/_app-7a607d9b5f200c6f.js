(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8888)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i,o=(i=n(7294))&&i.__esModule?i:{default:i},s=n(6273),c=n(387),l=n(7190);var u={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){s=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,l=i.useRef(),u=a(i.useState(!1),2),f=u[0],d=u[1],p=a(i.useState(t?t.current:null),2),h=p[0],m=p[1],g=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return i.useEffect((function(){if(!s&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&m(t.current)}),[t]),[g,f]};var i=n(7294),o=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map},8888:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Je}});var r=n(5893),a=(n(906),n(7294));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}},s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=o((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var l=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u=Math.abs,f=String.fromCharCode,d=Object.assign;function p(e){return e.trim()}function h(e,t,n){return e.replace(t,n)}function m(e,t){return e.indexOf(t)}function g(e,t){return 0|e.charCodeAt(t)}function v(e,t,n){return e.slice(t,n)}function y(e){return e.length}function b(e){return e.length}function k(e,t){return t.push(e),e}var w=1,x=1,C=0,A=0,O=0,S="";function _(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:w,column:x,length:o,return:""}}function j(e,t){return d(_("",null,null,"",null,null,0),e,{length:-e.length},t)}function P(){return O=A>0?g(S,--A):0,x--,10===O&&(x=1,w--),O}function E(){return O=A<C?g(S,A++):0,x++,10===O&&(x=1,w++),O}function N(){return g(S,A)}function $(){return A}function I(e,t){return v(S,e,t)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z(e){return w=x=1,C=y(S=e),A=0,[]}function M(e){return S="",e}function R(e){return p(I(A-1,F(91===e?e+2:40===e?e+1:e)))}function L(e){for(;(O=N())&&O<33;)E();return T(e)>2||T(O)>3?"":" "}function H(e,t){for(;--t&&E()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return I(e,$()+(t<6&&32==N()&&32==E()))}function F(e){for(;E();)switch(O){case e:return A;case 34:case 39:34!==e&&39!==e&&F(O);break;case 40:41===e&&F(e);break;case 92:E()}return A}function U(e,t){for(;E()&&e+O!==57&&(e+O!==84||47!==N()););return"/*"+I(t,A-1)+"*"+f(47===e?e:E())}function q(e){for(;!T(N());)E();return I(e,A)}var D="-ms-",G="-moz-",W="-webkit-",B="comm",V="rule",X="decl",Y="@keyframes";function K(e,t){for(var n="",r=b(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case"@import":case X:return e.return=e.return||e.value;case B:return"";case Y:return e.return=e.value+"{"+K(e.children,r)+"}";case V:e.value=e.props.join(",")}return y(n=K(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t){switch(function(e,t){return(((t<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3)}(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+G+e+D+e+e;case 6828:case 4268:return W+e+D+e+e;case 6165:return W+e+D+"flex-"+e+e;case 5187:return W+e+h(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return W+e+D+"flex-item-"+h(e,/flex-|-self/,"")+e;case 4675:return W+e+D+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+D+h(e,"shrink","negative")+e;case 5292:return W+e+D+h(e,"basis","preferred-size")+e;case 6060:return W+"box-"+h(e,"-grow","")+W+e+D+h(e,"grow","positive")+e;case 4554:return W+h(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(e)-1-t>6)switch(g(e,t+1)){case 109:if(45!==g(e,t+4))break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+G+(108==g(e,t+3)?"$3":"$2-$3"))+e;case 115:return~m(e,"stretch")?J(h(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==g(e,t+1))break;case 6444:switch(g(e,y(e)-3-(~m(e,"!important")&&10))){case 107:return h(e,":",":"+W)+e;case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(45===g(e,14)?"inline-":"")+"box$3$1"+W+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(g(e,t+11)){case 114:return W+e+D+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+D+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+D+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+D+e+e}return e}function Q(e){return M(ee("",null,null,null,[""],e=z(e),0,[0],e))}function ee(e,t,n,r,a,i,o,s,c){for(var l=0,u=0,d=o,p=0,g=0,v=0,b=1,w=1,x=1,C=0,A="",O=a,S=i,_=r,j=A;w;)switch(v=C,C=E()){case 40:if(108!=v&&58==j.charCodeAt(d-1)){-1!=m(j+=h(R(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:j+=R(C);break;case 9:case 10:case 13:case 32:j+=L(v);break;case 92:j+=H($()-1,7);continue;case 47:switch(N()){case 42:case 47:k(ne(U(E(),$()),t,n),c);break;default:j+="/"}break;case 123*b:s[l++]=y(j)*x;case 125*b:case 59:case 0:switch(C){case 0:case 125:w=0;case 59+u:g>0&&y(j)-d&&k(g>32?re(j+";",r,n,d-1):re(h(j," ","")+";",r,n,d-2),c);break;case 59:j+=";";default:if(k(_=te(j,t,n,l,u,a,s,A,O=[],S=[],d),i),123===C)if(0===u)ee(j,t,_,_,O,i,d,s,S);else switch(p){case 100:case 109:case 115:ee(e,_,_,r&&k(te(e,_,_,0,0,a,s,A,a,O=[],d),S),a,S,d,s,r?O:S);break;default:ee(j,_,_,_,[""],S,0,s,S)}}l=u=g=0,b=x=1,A=j="",d=o;break;case 58:d=1+y(j),g=v;default:if(b<1)if(123==C)--b;else if(125==C&&0==b++&&125==P())continue;switch(j+=f(C),C*b){case 38:x=u>0?1:(j+="\f",-1);break;case 44:s[l++]=(y(j)-1)*x,x=1;break;case 64:45===N()&&(j+=R(E())),p=N(),u=d=y(A=j+=q($())),C++;break;case 45:45===v&&2==y(j)&&(b=0)}}return i}function te(e,t,n,r,a,i,o,s,c,l,f){for(var d=a-1,m=0===a?i:[""],g=b(m),y=0,k=0,w=0;y<r;++y)for(var x=0,C=v(e,d+1,d=u(k=o[y])),A=e;x<g;++x)(A=p(k>0?m[x]+" "+C:h(C,/&\f/g,m[x])))&&(c[w++]=A);return _(e,t,n,0===a?V:s,c,l,f)}function ne(e,t,n){return _(e,t,n,B,f(O),v(e,2,-2),0)}function re(e,t,n,r){return _(e,t,n,X,v(e,0,r),v(e,r+1,-1),r)}var ae=function(e,t,n){for(var r=0,a=0;r=a,a=N(),38===r&&12===a&&(t[n]=1),!T(a);)E();return I(e,A)},ie=function(e,t){return M(function(e,t){var n=-1,r=44;do{switch(T(r)){case 0:38===r&&12===N()&&(t[n]=1),e[n]+=ae(A-1,t,n);break;case 2:e[n]+=R(r);break;case 4:if(44===r){e[++n]=58===N()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=f(r)}}while(r=E());return e}(z(e),t))},oe=new WeakMap,se=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||oe.get(n))&&!r){oe.set(e,!0);for(var a=[],i=ie(t,a),o=n.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},ce=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},le=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case X:e.return=J(e.value,e.length);break;case Y:return K([j(e,{value:h(e.value,"@","@"+W)})],r);case V:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return K([j(e,{props:[h(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return K([j(e,{props:[h(t,/:(plac\w+)/,":-webkit-input-$1")]}),j(e,{props:[h(t,/:(plac\w+)/,":-moz-$1")]}),j(e,{props:[h(t,/:(plac\w+)/,D+"input-$1")]})],r)}return""}))}}],ue=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r=e.stylisPlugins||le;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;s.push(e)}));var c,u,f=[Z,(u=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],d=function(e){var t=b(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}([se,ce].concat(r,f));i=function(e,t,n,r){c=n,K(Q(e?e+"{"+t.styles+"}":t.styles),d),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new l({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return p.sheet.hydrate(s),p};var fe=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},de={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pe=/[A-Z]|^ms/g,he=/_EMO_([^_]+?)_([^]*?)_EMO_/g,me=function(e){return 45===e.charCodeAt(1)},ge=function(e){return null!=e&&"boolean"!==typeof e},ve=o((function(e){return me(e)?e:e.replace(pe,"-$&").toLowerCase()})),ye=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(he,(function(e,t,n){return ke={name:t,styles:n,next:ke},t}))}return 1===de[e]||me(e)||"number"!==typeof t||0===t?t:t+"px"};function be(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return ke={name:n.name,styles:n.styles,next:ke},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)ke={name:r.name,styles:r.styles,next:ke},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=be(e,t,n[a])+";";else for(var i in n){var o=n[i];if("object"!==typeof o)null!=t&&void 0!==t[o]?r+=i+"{"+t[o]+"}":ge(o)&&(r+=ve(i)+":"+ye(i,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=be(e,t,o);switch(i){case"animation":case"animationName":r+=ve(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)ge(o[c])&&(r+=ve(i)+":"+ye(i,o[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var a=ke,i=n(e);return ke=a,be(e,t,i)}break;case"string":}if(null==t)return n;var o=t[n];return void 0!==o?o:n}var ke,we=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var xe=function(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";ke=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,a+=be(n,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=be(n,t,e[o]),r&&(a+=i[o]);we.lastIndex=0;for(var s,c="";null!==(s=we.exec(a));)c+="-"+s[1];return{name:fe(a)+c,styles:a,next:ke}},Ce=(0,a.createContext)("undefined"!==typeof HTMLElement?ue({key:"css"}):null);Ce.Provider;var Ae=function(e){return(0,a.forwardRef)((function(t,n){var r=(0,a.useContext)(Ce);return e(t,r,n)}))},Oe=(0,a.createContext)({});function Se(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var _e=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}},je=c,Pe=function(e){return"theme"!==e},Ee=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?je:Pe},Ne=function(e,t,n){var r;if(t){var a=t.shouldForwardProp;r=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},$e=function(){return null},Ie=function e(t,n){var r,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==n&&(r=n.label,o=n.target);var l=Ne(t,n,s),u=l||Ee(c),f=!u("as");return function(){var d=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&p.push("label:"+r+";"),null==d[0]||void 0===d[0].raw)p.push.apply(p,d);else{0,p.push(d[0][0]);for(var h=d.length,m=1;m<h;m++)p.push(d[m],d[0][m])}var g=Ae((function(e,t,n){var r=f&&e.as||c,i="",s=[],d=e;if(null==e.theme){for(var h in d={},e)d[h]=e[h];d.theme=(0,a.useContext)(Oe)}"string"===typeof e.className?i=Se(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var m=xe(p.concat(s),t.registered,d);_e(t,m,"string"===typeof r);i+=t.key+"-"+m.name,void 0!==o&&(i+=" "+o);var g=f&&void 0===l?Ee(r):u,v={};for(var y in e)f&&"as"===y||g(y)&&(v[y]=e[y]);v.className=i,v.ref=n;var b=(0,a.createElement)(r,v),k=(0,a.createElement)($e,null);return(0,a.createElement)(a.Fragment,null,k,b)}));return g.displayName=void 0!==r?r:"Styled("+("string"===typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=p,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(t,r){return e(t,i({},n,r,{shouldForwardProp:Ne(g,r,!0)})).apply(void 0,p)},g}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ie[e]=Ie(e)}));var Te=Ie,ze=(n(1664),{primary:"#4353ff",primaryLight:"rgba(67,83,255,.1)",black:"#000",white:"#fff",clay:"#f9f8f4"}),Me={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Re=a.createContext&&a.createContext(Me),Le=function(){return(Le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},He=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Fe(e){return e&&e.map((function(e,t){return a.createElement(e.tag,Le({key:t},e.attr),Fe(e.child))}))}function Ue(e){return function(t){return a.createElement(qe,Le({attr:Le({},e.attr)},t),Fe(e.child))}}function qe(e){var t=function(t){var n,r=e.attr,i=e.size,o=e.title,s=He(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",Le({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:Le(Le({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==Re?a.createElement(Re.Consumer,null,(function(e){return t(e)})):t(Me)}function De(e){return Ue({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"}}]}]})(e)}function Ge(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function We(){var e=Ge(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n\n  @media (max-width: 576px) {\n    width: 95vw;\n  }\n"]);return We=function(){return e},e}function Be(){var e=Ge(["\n  width: 120rem;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n\n  .logoContainer {\n    display: flex;\n    align-items: center;\n\n    .icon {\n      margin-right: 1rem;\n    }\n\n    .logoText {\n      font-size: 1.6rem;\n      font-weight: 600;\n    }\n  }\n\n  .links {\n    list-style: none;\n    display: flex;\n    font-size: 1.6rem;\n    font-weight: 600;\n\n    .link {\n      display: flex;\n      align-items: center;\n      margin-left: 5rem;\n      padding: 0.8rem;\n      border-radius: 8px;\n      transition: all 0.3s cubic-bezier(0, 0.55, 0.45, 1);\n\n      .linkIcon {\n        margin-left: 0.5rem;\n        transition: transform 0.6s cubic-bezier(0, 0.55, 0.45, 1);\n      }\n\n      :hover {\n        cursor: pointer;\n        color: ",";\n        background: ",";\n        .linkIcon {\n          transform: translateY(-0.5rem);\n        }\n      }\n    }\n  }\n\n  @media (max-width: 1200px) {\n    width: 95vw;\n  }\n\n  @media (max-width: 576px) {\n    .linksContainer {\n      display: none;\n    }\n  }\n"]);return Be=function(){return e},e}var Ve=Te.nav(We()),Xe=Te.div(Be(),ze.primary,ze.primaryLight),Ye=function(){return(0,r.jsx)(Ve,{children:(0,r.jsxs)(Xe,{children:[(0,r.jsxs)("div",{className:"logoContainer",children:[(0,r.jsx)("img",{src:"../assets/images/logoIcon.png",width:"20px",alt:"logo icon",className:"icon"}),(0,r.jsx)("span",{className:"logoText",children:"Dale Bandoni"})]}),(0,r.jsx)("div",{className:"linksContainer",children:(0,r.jsxs)("ul",{className:"links",children:[(0,r.jsx)("a",{href:"https://www.linkedin.com/in/dale-bandoni/",children:(0,r.jsxs)("li",{className:"link",children:["LinkedIn ",(0,r.jsx)(De,{className:"linkIcon"})]})}),(0,r.jsx)("a",{href:"https://twitter.com/dalebandoni",children:(0,r.jsxs)("li",{className:"link",children:["Twitter ",(0,r.jsx)(De,{className:"linkIcon"})]})}),(0,r.jsx)("a",{href:"https://github.com/dalebandoni",children:(0,r.jsxs)("li",{className:"link",children:["GitHub ",(0,r.jsx)(De,{className:"linkIcon"})]})})]})})]})})};function Ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ke(e,t,n[t])}))}return e}var Je=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ye,{}),(0,r.jsx)(t,Ze({},n))]})}},906:function(){},1664:function(e,t,n){n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);