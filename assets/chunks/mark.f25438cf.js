function O(x,N){for(var E=0;E<N.length;E++){const v=N[E];if(typeof v!="string"&&!Array.isArray(v)){for(const m in v)if(m!=="default"&&!(m in x)){const k=Object.getOwnPropertyDescriptor(v,m);k&&Object.defineProperty(x,m,k.get?k:{enumerable:!0,get:()=>v[m]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I={},M={get exports(){return I},set exports(x){I=x}};/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/(function(x,N){(function(E,v){x.exports=v()})(T,function(){var E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},v=function(f,s){if(!(f instanceof s))throw new TypeError("Cannot call a class as a function")},m=function(){function f(s,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}return function(s,e,n){return e&&f(s.prototype,e),n&&f(s,n),s}}(),k=Object.assign||function(f){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(f[n]=e[n])}return f},R=function(){function f(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:5e3;v(this,f),this.ctx=s,this.iframes=e,this.exclude=n,this.iframesTimeout=t}return m(f,[{key:"getContexts",value:function(){var e=void 0,n=[];return typeof this.ctx>"u"||!this.ctx?e=[]:NodeList.prototype.isPrototypeOf(this.ctx)?e=Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?e=this.ctx:typeof this.ctx=="string"?e=Array.prototype.slice.call(document.querySelectorAll(this.ctx)):e=[this.ctx],e.forEach(function(t){var a=n.filter(function(r){return r.contains(t)}).length>0;n.indexOf(t)===-1&&!a&&n.push(t)}),n}},{key:"getIframeContents",value:function(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},a=void 0;try{var r=e.contentWindow;if(a=r.document,!r||!a)throw new Error("iframe inaccessible")}catch{t()}a&&n(a)}},{key:"isIframeBlank",value:function(e){var n="about:blank",t=e.getAttribute("src").trim(),a=e.contentWindow.location.href;return a===n&&t!==n&&t}},{key:"observeIframeLoad",value:function(e,n,t){var a=this,r=!1,o=null,i=function c(){if(!r){r=!0,clearTimeout(o);try{a.isIframeBlank(e)||(e.removeEventListener("load",c),a.getIframeContents(e,n,t))}catch{t()}}};e.addEventListener("load",i),o=setTimeout(i,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,n,t){try{e.contentWindow.document.readyState==="complete"?this.isIframeBlank(e)?this.observeIframeLoad(e,n,t):this.getIframeContents(e,n,t):this.observeIframeLoad(e,n,t)}catch{t()}}},{key:"waitForIframes",value:function(e,n){var t=this,a=0;this.forEachIframe(e,function(){return!0},function(r){a++,t.waitForIframes(r.querySelector("html"),function(){--a||n()})},function(r){r||n()})}},{key:"forEachIframe",value:function(e,n,t){var a=this,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){},o=e.querySelectorAll("iframe"),i=o.length,c=0;o=Array.prototype.slice.call(o);var u=function(){--i<=0&&r(c)};i||u(),o.forEach(function(l){f.matches(l,a.exclude)?u():a.onIframeReady(l,function(h){n(l)&&(c++,t(h)),u()},u)})}},{key:"createIterator",value:function(e,n,t){return document.createNodeIterator(e,n,t,!1)}},{key:"createInstanceOnIframe",value:function(e){return new f(e.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,n,t){var a=e.compareDocumentPosition(t),r=Node.DOCUMENT_POSITION_PRECEDING;if(a&r)if(n!==null){var o=n.compareDocumentPosition(t),i=Node.DOCUMENT_POSITION_FOLLOWING;if(o&i)return!0}else return!0;return!1}},{key:"getIteratorNode",value:function(e){var n=e.previousNode(),t=void 0;return n===null?t=e.nextNode():t=e.nextNode()&&e.nextNode(),{prevNode:n,node:t}}},{key:"checkIframeFilter",value:function(e,n,t,a){var r=!1,o=!1;return a.forEach(function(i,c){i.val===t&&(r=c,o=i.handled)}),this.compareNodeIframe(e,n,t)?(r===!1&&!o?a.push({val:t,handled:!0}):r!==!1&&!o&&(a[r].handled=!0),!0):(r===!1&&a.push({val:t,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,n,t,a){var r=this;e.forEach(function(o){o.handled||r.getIframeContents(o.val,function(i){r.createInstanceOnIframe(i).forEachNode(n,t,a)})})}},{key:"iterateThroughNodes",value:function(e,n,t,a,r){for(var o=this,i=this.createIterator(n,e,a),c=[],u=[],l=void 0,h=void 0,d=function(){var g=o.getIteratorNode(i);return h=g.prevNode,l=g.node,l};d();)this.iframes&&this.forEachIframe(n,function(p){return o.checkIframeFilter(l,h,p,c)},function(p){o.createInstanceOnIframe(p).forEachNode(e,function(g){return u.push(g)},a)}),u.push(l);u.forEach(function(p){t(p)}),this.iframes&&this.handleOpenIframes(c,e,t,a),r()}},{key:"forEachNode",value:function(e,n,t){var a=this,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){},o=this.getContexts(),i=o.length;i||r(),o.forEach(function(c){var u=function(){a.iterateThroughNodes(e,c,n,t,function(){--i<=0&&r()})};a.iframes?a.waitForIframes(c,u):u()})}}],[{key:"matches",value:function(e,n){var t=typeof n=="string"?[n]:n,a=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(a){var r=!1;return t.every(function(o){return a.call(e,o)?(r=!0,!1):!0}),r}else return!1}}]),f}(),S=function(){function f(s){v(this,f),this.ctx=s,this.ie=!1;var e=window.navigator.userAgent;(e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1)&&(this.ie=!0)}return m(f,[{key:"log",value:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"debug",t=this.opt.log;this.opt.debug&&(typeof t>"u"?"undefined":E(t))==="object"&&typeof t[n]=="function"&&t[n]("mark.js: "+e)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return this.opt.wildcards!=="disabled"&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),this.opt.wildcards!=="disabled"&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e),e}},{key:"createSynonymsRegExp",value:function(e){var n=this.opt.synonyms,t=this.opt.caseSensitive?"":"i",a=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var r in n)if(n.hasOwnProperty(r)){var o=n[r],i=this.opt.wildcards!=="disabled"?this.setupWildcardsRegExp(r):this.escapeStr(r),c=this.opt.wildcards!=="disabled"?this.setupWildcardsRegExp(o):this.escapeStr(o);i!==""&&c!==""&&(e=e.replace(new RegExp("("+this.escapeStr(i)+"|"+this.escapeStr(c)+")","gm"+t),a+("("+this.processSynomyms(i)+"|")+(this.processSynomyms(c)+")")+a))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return e=e.replace(/(?:\\)*\?/g,function(n){return n.charAt(0)==="\\"?"?":""}),e.replace(/(?:\\)*\*/g,function(n){return n.charAt(0)==="\\"?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var n=this.opt.wildcards==="withSpaces";return e.replace(/\u0001/g,n?"[\\S\\s]?":"\\S?").replace(/\u0002/g,n?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(n,t,a){var r=a.charAt(t+1);return/[(|)\\]/.test(r)||r===""?n:n+"\0"})}},{key:"createJoinersRegExp",value:function(e){var n=[],t=this.opt.ignorePunctuation;return Array.isArray(t)&&t.length&&n.push(this.escapeStr(t.join(""))),this.opt.ignoreJoiners&&n.push("\\u00ad\\u200b\\u200c\\u200d"),n.length?e.split(/\u0000+/).join("["+n.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var n=this.opt.caseSensitive?"":"i",t=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],a=[];return e.split("").forEach(function(r){t.every(function(o){if(o.indexOf(r)!==-1){if(a.indexOf(o)>-1)return!1;e=e.replace(new RegExp("["+o+"]","gm"+n),"["+o+"]"),a.push(o)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gmi,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var n=this,t="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿",a=this.opt.accuracy,r=typeof a=="string"?a:a.value,o=typeof a=="string"?[]:a.limiters,i="";switch(o.forEach(function(c){i+="|"+n.escapeStr(c)}),r){case"partially":default:return"()("+e+")";case"complementary":return i="\\s"+(i||this.escapeStr(t)),"()([^"+i+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var n=this,t=[];return e.forEach(function(a){n.opt.separateWordSearch?a.split(" ").forEach(function(r){r.trim()&&t.indexOf(r)===-1&&t.push(r)}):a.trim()&&t.indexOf(a)===-1&&t.push(a)}),{keywords:t.sort(function(a,r){return r.length-a.length}),length:t.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var n=this;if(!Array.isArray(e)||Object.prototype.toString.call(e[0])!=="[object Object]")return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var t=[],a=0;return e.sort(function(r,o){return r.start-o.start}).forEach(function(r){var o=n.callNoMatchOnInvalidRanges(r,a),i=o.start,c=o.end,u=o.valid;u&&(r.start=i,r.length=c-i,t.push(r),a=c)}),t}},{key:"callNoMatchOnInvalidRanges",value:function(e,n){var t=void 0,a=void 0,r=!1;return e&&typeof e.start<"u"?(t=parseInt(e.start,10),a=t+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&a-n>0&&a-t>0?r=!0:(this.log("Ignoring invalid or overlapping range: "+(""+JSON.stringify(e))),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:t,end:a,valid:r}}},{key:"checkWhitespaceRanges",value:function(e,n,t){var a=void 0,r=!0,o=t.length,i=n-o,c=parseInt(e.start,10)-i;return c=c>o?o:c,a=c+parseInt(e.length,10),a>o&&(a=o,this.log("End range automatically set to the max value of "+o)),c<0||a-c<0||c>o||a>o?(r=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):t.substring(c,a).replace(/\s+/g,"")===""&&(r=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:c,end:a,valid:r}}},{key:"getTextNodes",value:function(e){var n=this,t="",a=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(r){a.push({start:t.length,end:(t+=r.textContent).length,node:r})},function(r){return n.matchesExclude(r.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:t,nodes:a})})}},{key:"matchesExclude",value:function(e){return R.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,n,t){var a=this.opt.element?this.opt.element:"mark",r=e.splitText(n),o=r.splitText(t-n),i=document.createElement(a);return i.setAttribute("data-markjs","true"),this.opt.className&&i.setAttribute("class",this.opt.className),i.textContent=r.textContent,r.parentNode.replaceChild(i,r),o}},{key:"wrapRangeInMappedTextNode",value:function(e,n,t,a,r){var o=this;e.nodes.every(function(i,c){var u=e.nodes[c+1];if(typeof u>"u"||u.start>n){if(!a(i.node))return!1;var l=n-i.start,h=(t>i.end?i.end:t)-i.start,d=e.value.substr(0,i.start),p=e.value.substr(h+i.start);if(i.node=o.wrapRangeInTextNode(i.node,l,h),e.value=d+p,e.nodes.forEach(function(g,y){y>=c&&(e.nodes[y].start>0&&y!==c&&(e.nodes[y].start-=h),e.nodes[y].end-=h)}),t-=h,r(i.node.previousSibling,i.start),t>i.end)n=i.end;else return!1}return!0})}},{key:"wrapMatches",value:function(e,n,t,a,r){var o=this,i=n===0?0:n+1;this.getTextNodes(function(c){c.nodes.forEach(function(u){u=u.node;for(var l=void 0;(l=e.exec(u.textContent))!==null&&l[i]!=="";)if(t(l[i],u)){var h=l.index;if(i!==0)for(var d=1;d<i;d++)h+=l[d].length;u=o.wrapRangeInTextNode(u,h,h+l[i].length),a(u.previousSibling),e.lastIndex=0}}),r()})}},{key:"wrapMatchesAcrossElements",value:function(e,n,t,a,r){var o=this,i=n===0?0:n+1;this.getTextNodes(function(c){for(var u=void 0;(u=e.exec(c.value))!==null&&u[i]!=="";){var l=u.index;if(i!==0)for(var h=1;h<i;h++)l+=u[h].length;var d=l+u[i].length;o.wrapRangeInMappedTextNode(c,l,d,function(p){return t(u[i],p)},function(p,g){e.lastIndex=g,a(p)})}r()})}},{key:"wrapRangeFromIndex",value:function(e,n,t,a){var r=this;this.getTextNodes(function(o){var i=o.value.length;e.forEach(function(c,u){var l=r.checkWhitespaceRanges(c,i,o.value),h=l.start,d=l.end,p=l.valid;p&&r.wrapRangeInMappedTextNode(o,h,d,function(g){return n(g,c,o.value.substring(h,d),u)},function(g){t(g,c)})}),a()})}},{key:"unwrapMatches",value:function(e){for(var n=e.parentNode,t=document.createDocumentFragment();e.firstChild;)t.appendChild(e.removeChild(e.firstChild));n.replaceChild(t,e),this.ie?this.normalizeTextNode(n):n.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(e.nodeType===3)for(;e.nextSibling&&e.nextSibling.nodeType===3;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,n){var t=this;this.opt=n,this.log('Searching with expression "'+e+'"');var a=0,r="wrapMatches",o=function(c){a++,t.opt.each(c)};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),this[r](e,this.opt.ignoreGroups,function(i,c){return t.opt.filter(c,i,a)},o,function(){a===0&&t.opt.noMatch(e),t.opt.done(a)})}},{key:"mark",value:function(e,n){var t=this;this.opt=n;var a=0,r="wrapMatches",o=this.getSeparatedKeywords(typeof e=="string"?[e]:e),i=o.keywords,c=o.length,u=this.opt.caseSensitive?"":"i",l=function h(d){var p=new RegExp(t.createRegExp(d),"gm"+u),g=0;t.log('Searching with expression "'+p+'"'),t[r](p,1,function(y,b){return t.opt.filter(b,d,a,g)},function(y){g++,a++,t.opt.each(y)},function(){g===0&&t.opt.noMatch(d),i[c-1]===d?t.opt.done(a):h(i[i.indexOf(d)+1])})};this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),c===0?this.opt.done(a):l(i[0])}},{key:"markRanges",value:function(e,n){var t=this;this.opt=n;var a=0,r=this.checkRanges(e);r&&r.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(r)),this.wrapRangeFromIndex(r,function(o,i,c,u){return t.opt.filter(o,i,c,u)},function(o,i){a++,t.opt.each(o,i)},function(){t.opt.done(a)})):this.opt.done(a)}},{key:"unmark",value:function(e){var n=this;this.opt=e;var t=this.opt.element?this.opt.element:"*";t+="[data-markjs]",this.opt.className&&(t+="."+this.opt.className),this.log('Removal selector "'+t+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(a){n.unwrapMatches(a)},function(a){var r=R.matches(a,t),o=n.matchesExclude(a);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=k({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new R(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),f}();function w(f){var s=this,e=new S(f);return this.mark=function(n,t){return e.mark(n,t),s},this.markRegExp=function(n,t){return e.markRegExp(n,t),s},this.markRanges=function(n,t){return e.markRanges(n,t),s},this.unmark=function(n){return e.unmark(n),s},this}return w})})(M);const _=I,C=O({__proto__:null,default:_},[I]);export{C as m};
