(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",d="quarter",c="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",g={};g[_]=m;var $=function(t){return t instanceof M},b=function t(e,n,i){var s;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;g[a]=e,s=a}return!i&&s&&(_=s),s||!i&&_},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},w=y;w.l=b,w.i=$,w.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,d=!!w.u(e)||e,p=w.p(t),h=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?i:i.endOf(o)},f=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(p){case c:return d?h(1,0):h(31,11);case l:return d?h(1,v):h(0,v+1);case a:var g=this.$locale().weekStart||0,$=(m<g?m+7:m)-g;return h(d?y-$:y+(6-$),v);case o:case u:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,d=w.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[l]=p+"Month",a[c]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[d],f=d===o?this.$D+(e-this.$W):e;if(d===l||d===c){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,d){var u,p=this;n=Number(n);var h=w.p(d),f=function(t){var e=C(p);return w.w(e.date(e.date()+Math.round(t*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[h]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return w.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:c(n.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var h,f=w.p(u),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,_=w.m(this,m);return _=(h={},h[c]=_/12,h[l]=_,h[d]=_/3,h[a]=(y-v)/6048e5,h[o]=(y-v)/864e5,h[r]=y/e,h[s]=y/t,h[i]=y/1e3,h)[f]||y,p?_:w.a(_)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=M.prototype;return C.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",u]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,M,C),t.$i=!0),C},C.locale=b,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=g[_],C.Ls=g,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof _},p=function(t,e,n){return new _(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*c[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(d);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,d=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+d+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*c[h(e)]:u(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],d=i.base?l[0]+i.base:l[0],c=r[d]||0,u="".concat(d," ").concat(c);r[d]=c+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),d=0;d<r.length;d++){var c=n(r[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";let t=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const e=["Amsterdam","Geneva","Chamonix"],i=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],s=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],r="day",o="event",a="time",l="price",d="offers";function c(t){return t[Math.floor(Math.random()*t.length)]}function u(t){return`${t[0].toUpperCase()}${t.slice(1)}`}function p(t,e){return t.map((t=>t.id===e.id?e:t))}const h=[{id:"1",basePrice:6318,dateFrom:"2023-10-27T00:28:01.397Z",dateTo:"2023-10-28T00:28:01.397Z",destination:"1",isFavorite:!0,offers:[],type:"restaurant"},{id:"2",basePrice:6801,dateFrom:"2023-10-28T00:28:01.397Z",dateTo:"2023-10-28T15:28:01.397Z",destination:"2",isFavorite:!1,offers:["1"],type:"check-in"},{id:"3",basePrice:7079,dateFrom:"2023-10-28T15:28:01.397Z",dateTo:"2023-10-29T20:28:01.397Z",destination:"3",isFavorite:!0,offers:["1","2"],type:"drive"},{id:"4",basePrice:2399,dateFrom:"2023-10-29T20:28:01.397Z",dateTo:"2023-10-31T07:28:01.397Z",destination:"1",isFavorite:!0,offers:["1","2","3"],type:"train"},{id:"5",basePrice:9713,dateFrom:"2023-10-31T21:28:01.397Z",dateTo:"2023-11-01T08:28:01.397Z",destination:"2",isFavorite:!0,offers:["1","2","3","4"],type:"sightseeing"},{id:"6",basePrice:4401,dateFrom:"2023-11-01T08:28:01.397Z",dateTo:"2023-11-02T22:28:01.397Z",destination:"3",isFavorite:!1,offers:[],type:"taxi"},{id:"7",basePrice:3089,dateFrom:"2023-11-02T22:28:01.397Z",dateTo:"2023-11-03T04:28:01.397Z",destination:"1",isFavorite:!1,offers:["1"],type:"flight"},{id:"8",basePrice:226,dateFrom:"2023-11-04T06:28:01.397Z",dateTo:"2023-11-05T07:28:01.397Z",destination:"2",isFavorite:!0,offers:["1","2"],type:"bus"},{id:"9",basePrice:8274,dateFrom:"2023-11-17T17:28:01.397Z",dateTo:"2023-11-19T16:28:01.397Z",destination:"3",isFavorite:!0,offers:["1","2","3"],type:"ship"}],f=[{id:"1",description:c(s),name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)}]},{id:"2",description:c(s),name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)},{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)}]},{id:"3",description:c(s),name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)},{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)},{src:`https://loremflickr.com/248/152?random=${Math.floor(10*Math.random())}`,description:c(s)}]}],m=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:70},{id:"2",title:"Choose the radio station",price:140},{id:"3",title:"Choose temperature",price:63},{id:"4",title:"Drive quickly",price:84}]},{type:"bus",offers:[{id:"1",title:"Infotainment system",price:61},{id:"2",title:"Order meal",price:63},{id:"3",title:"Choose seats",price:161}]},{type:"train",offers:[{id:"1",title:"Book a taxi at the arrival point",price:55},{id:"2",title:"Order a breakfast",price:137},{id:"3",title:"Wake up at a certain time",price:71}]},{type:"flight",offers:[{id:"1",title:"Choose meal",price:138},{id:"2",title:"Choose seats",price:68},{id:"3",title:"Upgrade to comfort class",price:48},{id:"4",title:"Add luggage",price:188}]},{type:"check-in",offers:[{id:"1",title:"Choose the time of check-in",price:122},{id:"2",title:"Choose the time of check-out",price:170},{id:"3",title:"Add breakfast",price:114},{id:"4",title:"Laundry",price:168},{id:"5",title:"Order a meal from the restaurant",price:45}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"1",title:"Choose meal",price:91},{id:"2",title:"Choose seats",price:71},{id:"3",title:"Upgrade to comfort class",price:113},{id:"4",title:"Upgrade to business class",price:30},{id:"5",title:"Add luggage",price:172},{id:"6",title:"Business lounge",price:177}]},{type:"drive",offers:[{id:"1",title:"With automatic transmission",price:30},{id:"2",title:"With air conditioning",price:103}]},{type:"restaurant",offers:[{id:"1",title:"Choose live music",price:50},{id:"2",title:"Choose VIP area",price:61}]}];function v(){return{id:t(),...c(h)}}var y=n(379),_=n.n(y),g=n(795),$=n.n(g),b=n(569),C=n.n(b),w=n(565),M=n.n(w),S=n(216),T=n.n(S),E=n(589),F=n.n(E),k=n(10),D={};D.styleTagTransform=F(),D.setAttributes=M(),D.insert=C().bind(null,"head"),D.domAPI=$(),D.insertStyleElement=T(),_()(k.Z,D),k.Z&&k.Z.locals&&k.Z.locals;const A="shake";class x{#t=null;constructor(){if(new.target===x)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(A),setTimeout((()=>{this.element.classList.remove(A),t?.()}),600)}}const H={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function W(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H.BEFOREEND;if(!(t instanceof x))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function L(t,e){if(!(t instanceof x&&e instanceof x))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function B(t){if(null!==t){if(!(t instanceof x))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var O=n(484),I=n.n(O),P=n(646),Y=n.n(P);I().extend(Y());const N=36e5;function Z(t,e){return t?I()(t).format(e):""}const j={everything:t=>t.sort(((t,e)=>{return n=t.dateFrom,i=e.dateFrom,I()(n).unix()-I()(i).unix();var n,i})),future:t=>t.filter((t=>{return e=t.dateFrom,I()().isBefore(I()(e),"D");var e})),present:t=>t.filter((t=>{return e=t.dateFrom,I()().isSame(I()(e),"D");var e})),past:t=>t.filter((t=>{return e=t.dateFrom,I()().isAfter(I()(e),"D");var e}))};class q extends x{get template(){return'<section class="trip-main__trip-info  trip-info">\n       <div class="trip-info__main">\n         <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n         <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n       </div>\n\n       <p class="trip-info__cost">\n         Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n       </p>\n     </section>'}}class U extends x{#e=null;constructor(t){let{filters:e}=t;super(),this.#e=e}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,count:i}=t;return`<div class="trip-filters__filter">\n       <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${e?"checked":""} ${0===i?"disabled":""}>\n       <label class="trip-filters__filter-label" for="filter-${n}">${u(n)}</label>\n     </div>`}(t,0===e))).join("");return`<form class="trip-filters" action="#" method="get">\n       ${e}\n\n       <button class="visually-hidden" type="submit">Accept filter</button>\n     </form>`}(this.#e)}}function R(t){return I()(t.dateTo).diff(I()(t.dateFrom))}function G(t){return t.sort(((t,e)=>e.basePrice-t.basePrice))}class V extends x{#n=null;constructor(t){let{onSortTypeChange:e}=t;super(),this.#n=e,this.element.addEventListener("click",this.#i)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n       <div class="trip-sort__item  trip-sort__item--day">\n         <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n         <label class="trip-sort__btn" for="sort-day" data-sort-type=${r}>Day</label>\n       </div>\n\n       <div class="trip-sort__item  trip-sort__item--event">\n         <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n         <label class="trip-sort__btn" for="sort-event" data-sort-type=${o}>Event</label>\n       </div>\n\n       <div class="trip-sort__item  trip-sort__item--time">\n         <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n         <label class="trip-sort__btn" for="sort-time" data-sort-type=${a}>Time</label>\n       </div>\n\n       <div class="trip-sort__item  trip-sort__item--price">\n         <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n         <label class="trip-sort__btn" for="sort-price" data-sort-type=${l}>Price</label>\n       </div>\n\n       <div class="trip-sort__item  trip-sort__item--offer">\n         <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n         <label class="trip-sort__btn" for="sort-offer" data-sort-type=${d}>Offers</label>\n       </div>\n     </form>`}#i=t=>{"LABEL"===t.target.tagName&&t.target.dataset.sortType!==o&&t.target.dataset.sortType!==d&&(t.preventDefault(),this.#n(t.target.dataset.sortType))}}class z extends x{get template(){return'<p class="trip-events__msg">\n       Click New Event to create your first point\n     </p>'}}class J extends x{get template(){return'<ul class="trip-events__list"></ul>'}}const X="HH:mm";class K extends x{#s=null;#r=null;#o=null;#a=null;#l=null;constructor(t){let{onFavoriteClick:e,onEditClick:n,destination:i,waypoint:s,offers:r}=t;super(),this.#s=e,this.#r=n,this.#o=i,this.#a=s,this.#l=r,this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#d),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,isFavorite:o,type:a}=e,l=Z(s,"YYYY-MM-DD"),d=Z(s,"MMM DD"),c=Z(s,X),u=Z(r,X),p=function(t,e){const n=I()(e).diff(t);let i=0;switch(!0){case n>=864e5:i=I().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=N:i=I().duration(n).format("HH[H] mm[M]");break;case n<N:i=I().duration(n).format("mm[M]")}return i}(s,r),h=o?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n       <div class="event">\n         <time class="event__date" datetime="${l}">${d}</time>\n         <div class="event__type">\n           <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n         </div>\n         <h3 class="event__title">${a} ${t.name}</h3>\n         <div class="event__schedule">\n           <p class="event__time">\n             <time class="event__start-time" datetime="${l}T${c}">${c}</time>\n             &mdash;\n             <time class="event__end-time" datetime="${l}T${u}">${u}</time>\n           </p>\n           <p class="event__duration">${p}</p>\n         </div>\n         <p class="event__price">\n           &euro;&nbsp;<span class="event__price-value">${i}</span>\n         </p>\n         <h4 class="visually-hidden">Offers:</h4>\n         <ul class="event__selected-offers">\n           ${f=n,f.map((t=>`<li class="event__offer">\n         <span class="event__offer-title">${t.title}</span>\n         &plus;&euro;&nbsp;\n         <span class="event__offer-price">${t.price}</span>\n       </li>`)).join("")}\n         </ul>\n         <button class="event__favorite-btn ${h}" type="button">\n           <span class="visually-hidden">Add to favorite</span>\n           <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n             <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n           </svg>\n         </button>\n         <button class="event__rollup-btn" type="button">\n           <span class="visually-hidden">Open event</span>\n         </button>\n       </div>\n      </li>`;var f}(this.#o,this.#a,this.#l)}#d=t=>{t.preventDefault(),this.#s()};#c=t=>{t.preventDefault(),this.#r()}}class Q extends x{_state={};updateElement(t){t&&(this._setState(t),this.#u())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(t){this._state=structuredClone({...this._state,...t})}#u(){const t=this.element,e=t.parentElement;this.removeElement();const n=this.element;e.replaceChild(n,t),this._restoreHandlers()}}const tt="DD/MM/YY HH:mm";class et extends Q{#p=null;#h=null;#f=null;#a=null;#m=null;constructor(t){let{onFormSubmit:e,onFormCancel:n,destinationModel:i,waypoint:s,offersModel:r}=t;super(),this.#p=e,this.#h=n,this.#f=i,this._setState(et.parseWaypointToState(s)),this.#m=r,this._restoreHandlers()}get template(){return function(t,n,s){const{basePrice:r,dateFrom:o,dateTo:a,type:l}=n,d=Z(o,tt),c=Z(a,tt);return`<li class="trip-events__item">\n       <form class="event event--edit" action="#" method="post">\n         <header class="event__header">\n           <div class="event__type-wrapper">\n             <label class="event__type  event__type-btn" for="event-type-toggle-1">\n               <span class="visually-hidden">Choose event type</span>\n               <img class="event__type-icon" width="17" height="17" ${l?`src="img/icons/${l}.png"`:""} alt="Event type icon">\n             </label>\n             <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n             <div class="event__type-list">\n               <fieldset class="event__type-group">\n                 <legend class="visually-hidden">Event type</legend>\n                 ${m=i,m.map((t=>`<div class="event__type-item">\n         <input id="event-type-${t.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t.toLowerCase()}">\n         <label class="event__type-label  event__type-label--${t.toLowerCase()}" for="event-type-${t.toLowerCase()}-1">${t}</label>\n       </div>`)).join("")}\n               </fieldset>\n             </div>\n           </div>\n\n           <div class="event__field-group  event__field-group--destination">\n             <label class="event__label  event__type-output" for="event-destination-1">\n               ${l?u(l):""}\n             </label>\n             <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t?t.name:""}" list="destination-list-1">\n             <datalist id="destination-list-1">\n               ${f=e,f.map((t=>`<option value="${t}"></option>`)).join("")}\n             </datalist>\n           </div>\n\n           <div class="event__field-group  event__field-group--time">\n             <label class="visually-hidden" for="event-start-time-1">From</label>\n             <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${d}">\n             &mdash;\n             <label class="visually-hidden" for="event-end-time-1">To</label>\n             <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${c}">\n           </div>\n\n           <div class="event__field-group  event__field-group--price">\n             <label class="event__label" for="event-price-1">\n               <span class="visually-hidden">Price</span>\n               &euro;\n             </label>\n             <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n           </div>\n\n           <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n           <button class="event__reset-btn" type="reset">Cancel</button>\n           <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n           </button>\n         </header>\n         <section class="event__details">\n           <section class="event__section  event__section--offers">\n             <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n             <div class="event__available-offers">\n               ${s?(h=s,h.map((t=>`<div class="event__offer-selector">\n         <input class="event__offer-checkbox  visually-hidden" id="event-offer-${l}-${t.id}" value="${t.id}" type="checkbox" name="event-offer-${l}" ${n.offers.includes(t.id)?"checked":""}>\n         <label class="event__offer-label" for="event-offer-${l}-${t.id}">\n           <span class="event__offer-title">${t.title}</span>\n           &plus;&euro;&nbsp;\n           <span class="event__offer-price">${t.price}</span>\n         </label>\n       </div>`)).join("")):""}\n             </div>\n           </section>\n\n           ${t?`<section class="event__section  event__section--destination">\n              <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n              <p class="event__destination-description">${t.description}</p>\n\n              <div class="event__photos-container">\n                <div class="event__photos-tape">\n                  ${p=t.pictures,p.map((t=>`<img class="event__photo" src="${t.src}" alt="Event photo">`)).join("")}\n                </div>\n              </div>\n            </section>`:""}\n         </section>\n       </form>\n     </li>`;var p,h,f,m}(this.#f.getById(this._state.destination),this._state,this.#m.getByType(this._state.type))}reset(t){this.updateElement(et.parseWaypointToState(t))}_restoreHandlers(){this.element.querySelector("form").addEventListener("submit",this.#v),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#y),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#y),this.element.querySelector(".event__type-group").addEventListener("change",this.#_),this.element.querySelector(".event__input--destination").addEventListener("change",this.#g),this.element.querySelector(".event__available-offers").addEventListener("change",this.#$)}#_=t=>{this.updateElement({type:t.target.value})};#g=t=>{this.updateElement({destination:this.#f.getByName(t.target.value).id})};#$=t=>{const e=t.target.value;t.target.checked?this.updateElement({offers:[...this._state.offers,e]}):this.updateElement({offers:[...this._state.offers.filter((t=>t!==e))]})};#v=t=>{t.preventDefault(),this.#p(et.parseStateToWaypoint(this._state))};#y=t=>{t.preventDefault(),this.#h()};static parseWaypointToState(t){return{...t}}static parseStateToWaypoint(t){return{...t}}}const nt="DEFAULT",it="EDITING";class st{#b=null;#C=null;#w=null;#m=null;#M=null;#S=null;#T=null;#E=null;#a=null;#F=nt;constructor(t){let{waypointsListContainer:e,destinationsModel:n,waypointsModel:i,offersModel:s,onDataChange:r,onModeChange:o}=t;this.#b=e,this.#C=n,this.#w=i,this.#m=s,this.#M=r,this.#S=o}init(t){this.#a=t;const e=this.#a.destination,n=this.#a.type,i=this.#a.offers,s=this.#C.getById(e),r=this.#m.getById(n,i),o=this.#T,a=this.#E;this.#T=new K({destination:s,waypoint:t,offers:r,onEditClick:this.#r,onFavoriteClick:this.#s}),this.#E=new et({destinationModel:this.#C,waypoint:t,offersModel:this.#m,onFormSubmit:this.#p,onFormCancel:this.#h}),null!==o&&null!==a?(this.#F===nt&&L(this.#T,o),this.#F===it&&L(this.#E,a),B(o),B(a)):W(this.#T,this.#b)}destroy(){B(this.#T),B(this.#E)}resetView(){this.#F!==nt&&(this.#E.reset(this.#a),this.#k())}#D(){L(this.#E,this.#T),document.addEventListener("keydown",this.#A),this.#S(),this.#F=it}#k(){L(this.#T,this.#E),document.removeEventListener("keydown",this.#A),this.#F=nt}#A=t=>{"Escape"===t.key&&(t.preventDefault(),this.#E.reset(this.#a),this.#k())};#r=()=>{this.#D()};#s=()=>{this.#M({...this.#a,isFavorite:!this.#a.isFavorite})};#p=t=>{this.#M(t),this.#k()};#h=()=>{this.#E.reset(this.#a),this.#k()}}const rt=document.querySelector(".trip-main"),ot=document.querySelector(".trip-events"),at=document.querySelector(".trip-controls__filters"),lt=new class{#x=f;get destinations(){return this.#x}getById(t){return this.#x.find((e=>e.id===t))}getByName(t){return this.#x.find((e=>e.name===t))}},dt=new class{#H=Array.from({length:3},v);get waypoints(){return this.#H}},ct=new class{#l=m;get offers(){return this.#l}getByType(t){const e=this.#l.find((e=>e.type===t));if(e)return e.offers}getById(t,e){return this.getByType(t).filter((t=>e.includes(t.id)))}},ut=new class{#W=null;#L=null;#w=null;#e=[];#B=new q;#O=null;constructor(t){let{tripInfoContainer:e,filtersContainer:n,waypointsModel:i}=t;var s;this.#W=e,this.#L=n,this.#w=i,this.#e=(s=this.#w.waypoints,Object.entries(j).map((t=>{let[e,n]=t;return{type:e,count:n(s).length}})))}init(){this.#I(),this.#P()}#I(){W(this.#B,this.#W,H.AFTERBEGIN)}#P(){W(new U({filters:this.#e}),this.#L)}}({tripInfoContainer:rt,filtersContainer:at,waypointsModel:dt}),pt=new class{#Y=null;#C=null;#w=null;#m=null;#N=null;#Z=new z;#j=new J;#q=[];#U=new Map;#R=r;#G=[];constructor(t){let{boardContainer:e,destinationsModel:n,waypointsModel:i,offersModel:s}=t;this.#Y=e,this.#C=n,this.#w=i,this.#m=s}init(){this.#q=[...this.#w.waypoints],this.#G=[...this.#w.waypoints],this.#V()}#S=()=>{this.#U.forEach((t=>t.resetView()))};#z=t=>{this.#q=p(this.#q,t),this.#G=p(this.#G,t),this.#U.get(t.id).init(t)};#n=t=>{this.#R!==t&&(this.#J(t),this.#X(),this.#K())};#J(t){switch(t){case a:this.#q=[...(e=this.#q,e.sort(((t,e)=>R(e)-R(t))))];break;case l:this.#q=[...G(this.#q)];break;default:this.#q=[...this.#G]}var e;this.#R=t}#Q(){this.#N=new V({onSortTypeChange:this.#n}),W(this.#N,this.#Y)}#tt(){W(this.#Z,this.#Y,H.AFTERBEGIN)}#et(t){const e=new st({waypointsListContainer:this.#j.element,destinationsModel:this.#C,waypointsModel:this.#w,offersModel:this.#m,onDataChange:this.#z,onModeChange:this.#S});e.init(t),this.#U.set(t.id,e)}#K(){W(this.#j,this.#Y);for(let t=0;t<this.#q.length;t++)this.#et(this.#q[t])}#V(){W(this.#j,this.#Y),this.#q.length?(this.#Q(),this.#K()):this.#tt()}#X(){this.#U.forEach((t=>t.destroy())),this.#U.clear()}}({boardContainer:ot,destinationsModel:lt,waypointsModel:dt,offersModel:ct});ut.init(),pt.init()})()})();
//# sourceMappingURL=bundle.d244e82d67694a72cb83.js.map