(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var n={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},r={duration:.5,overwrite:!1,delay:0},i,a,o,s=1e8,c=1/s,l=Math.PI*2,u=l/4,d=0,f=Math.sqrt,p=Math.cos,m=Math.sin,h=function(e){return typeof e==`string`},g=function(e){return typeof e==`function`},_=function(e){return typeof e==`number`},v=function(e){return e===void 0},y=function(e){return typeof e==`object`},b=function(e){return e!==!1},x=function(){return typeof window<`u`},S=function(e){return g(e)||h(e)},C=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},w=Array.isArray,T=/random\([^)]+\)/g,E=/,\s*/g,D=/(?:-?\.?\d|\.)+/gi,O=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,k=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,A=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j=/[+-]=-?[.\d]+/,M=/[^,'"\[\]\s]+/gi,ee=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,N,P,te,ne,F={},re={},I,ie=function(e){return(re=W(e,F))&&qn},ae=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},L=function(e,t){return!t&&console.warn(e)},oe=function(e,t){return e&&(F[e]=t)&&re&&(re[e]=t)||F},se=function(){return 0},ce={suppressEvents:!0,isStart:!0,kill:!1},R={suppressEvents:!0,kill:!1},le={suppressEvents:!0},ue={},z=[],de={},fe,pe={},me={},he=30,ge=[],_e=``,ve=function(e){var t=e[0],n,r;if(y(t)||g(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ge.length;r--&&!ge[r].targetTest(t););n=ge[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new nn(e[r],n)))||e.splice(r,1);return e},ye=function(e){return e._gsap||ve(dt(e))[0]._gsap},B=function(e,t,n){return(n=e[t])&&g(n)?e[t]():v(n)&&e.getAttribute&&e.getAttribute(t)||n},be=function(e,t){return(e=e.split(`,`)).forEach(t)||e},V=function(e){return Math.round(e*1e5)/1e5||0},H=function(e){return Math.round(e*1e7)/1e7||0},xe=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Se=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ce=function(){var e=z.length,t=z.slice(0),n,r;for(de={},z.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},we=function(e){return!!(e._initted||e._startAt||e.add)},Te=function(e,t,n,r){z.length&&!a&&Ce(),e.render(t,n,r||!!(a&&t<0&&we(e))),z.length&&!a&&Ce()},Ee=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(M).length<2?t:h(e)?e.trim():e},De=function(e){return e},U=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oe=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},W=function(e,t){for(var n in t)e[n]=t[n];return e},ke=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=y(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Ae=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},je=function(e){var t=e.parent||N,n=e.keyframes?Oe(w(e.keyframes)):U;if(b(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Me=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ne=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Pe=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Fe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ie=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Le=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Re=function(e,t,n,r){return e._startAt&&(a?e._startAt.revert(R):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ze=function e(t){return!t||t._ts&&e(t.parent)},Be=function(e){return e._repeat?Ve(e._tTime,e=e.duration()+e._rDelay)*e:0},Ve=function(e,t){var n=Math.floor(e=H(e/t));return e&&n===e?n-1:n},He=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ue=function(e){return e._end=H(e._start+(e._tDur/Math.abs(e._ts||e._rts||c)||0))},We=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=H(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ue(e),n._dirty||Ie(n,e)),e},Ge=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=He(e.rawTime(),t),(!t._dur||at(0,t.totalDuration(),n)-t._tTime>c)&&t.render(n,!0)),Ie(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-c}},Ke=function(e,t,n,r){return t.parent&&Fe(t),t._start=H((_(n)?n:n||e!==N?nt(e,n,t):e._time)+t._delay),t._end=H(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ne(e,t,`_first`,`_last`,e._sort?`_start`:0),Xe(t)||(e._recent=t),r||Ge(e,t),e._ts<0&&We(e,e._tTime),e},qe=function(e,t){return(F.ScrollTrigger||ae(`scrollTrigger`,t))&&F.ScrollTrigger.create(t,e)},Je=function(e,t,n,r,i){if(fn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!a&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fe!==Ut.frame)return z.push(e),e._lazy=[i,r],1},Ye=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Xe=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Ze=function(e,t,n,r){var i=e.ratio,o=t<0||!t&&(!e._start&&Ye(e)&&(e._initted||!Xe(e))||(e._ts<0||e._dp._ts<0)&&!Xe(e))?0:1,s=e._rDelay,l=0,u,d,f;if(s&&e._repeat&&(l=at(0,e._tDur,t),d=Ve(l,s),e._yoyo&&d&1&&(o=1-o),d!==Ve(e._tTime,s)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||a||r||e._zTime===c||!t&&e._zTime){if(!e._initted&&Je(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?c:0),n||=t&&!f,e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Re(e,t,n,!0),e._onUpdate&&!n&&Ot(e,`onUpdate`),l&&e._repeat&&!n&&e.parent&&Ot(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fe(e,1),!n&&!a&&(Ot(e,o?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Qe=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},$e=function(e,t,n,r){var i=e._repeat,a=H(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:H(a*(i+1)+e._rDelay*i):a,o>0&&!r&&We(e,e._tTime=e._tDur*o),e.parent&&Ue(e),n||Ie(e.parent,e),e},et=function(e){return e instanceof an?Ie(e):$e(e,e._dur)},tt={_start:0,endTime:se,totalDuration:se},nt=function e(t,n,r){var i=t.labels,a=t._recent||tt,o=t.duration()>=s?a.endTime(!1):t._dur,c,l,u;return h(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)===`%`,c=n.indexOf(`=`),l===`<`||l===`>`?(c>=0&&(n=n.replace(/=/,``)),(l===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(c<0?a:r).totalDuration()/100:1)):c<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(c-1)+n.substr(c+1)),u&&r&&(l=l/100*(w(r)?r[0]:r).totalDuration()),c>1?e(t,n.substr(0,c-1),r)+l:o+l)):n==null?o:+n},rt=function(e,t,n){var r=_(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=b(s.vars.inherit)&&s.parent;a.immediateRender=b(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new yn(t[0],a,t[i+1])},it=function(e,t){return e||e===0?t(e):t},at=function(e,t,n){return n<e?e:n>t?t:n},ot=function(e,t){return!h(e)||!(t=ee.exec(e))?``:t[1]},st=function(e,t,n){return it(n,function(n){return at(e,t,n)})},ct=[].slice,lt=function(e,t){return e&&y(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&y(e[0]))&&!e.nodeType&&e!==P},ut=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return h(e)&&!t||lt(e,1)?(r=n).push.apply(r,dt(e)):n.push(e)})||n},dt=function(e,t,n){return o&&!t&&o.selector?o.selector(e):h(e)&&!n&&(te||!Wt())?ct.call((t||ne).querySelectorAll(e),0):w(e)?ut(e,n):lt(e)?ct.call(e,0):e?[e]:[]},ft=function(e){return e=dt(e)[0]||L(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return dt(t,n.querySelectorAll?n:n===e?L(`Invalid scope`)||ne.createElement(`div`):e)}},pt=function(e){return e.sort(function(){return .5-Math.random()})},mt=function(e){if(g(e))return e;var t=y(e)?e:{each:e},n=Zt(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,d=r;return h(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],d=r[1]),function(e,o,p){var m=(p||t).length,h=a[m],g,_,v,y,b,x,S,C,w;if(!h){if(w=t.grid===`auto`?0:(t.grid||[1,s])[1],!w){for(S=-s;S<(S=p[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(h=a[m]=[],g=c?Math.min(w,m)*u-.5:r%w,_=w===s?0:c?m*d/w-.5:r/w|0,S=0,C=s,x=0;x<m;x++)v=x%w-g,y=_-(x/w|0),h[x]=b=l?Math.abs(l===`y`?y:v):f(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&pt(h),h.max=S-C,h.min=C,h.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:l?l===`y`?m/w:w:Math.max(w,m/w))||0)*(r===`edges`?-1:1),h.b=m<0?i-m:i,h.u=ot(t.amount||t.each)||0,n=n&&m<0?Xt(n):n}return m=(h[e]-h.min)/h.max||0,H(h.b+(n?n(m):m)*h.v)+h.u}},ht=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=H(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_(n)?0:ot(n))}},gt=function(e,t){var n=w(e),r,i;return!n&&y(e)&&(r=n=e.radius||s,e.values?(e=dt(e.values),(i=!_(e[0]))&&(r*=r)):e=ht(e.increment)),it(t,n?g(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=s,c=0,l=e.length,u,d;l--;)i?(u=e[l].x-n,d=e[l].y-a,u=u*u+d*d):u=Math.abs(e[l]-n),u<o&&(o=u,c=l);return c=!r||o<=r?e[c]:t,i||c===t||_(t)?c:c+ot(t)}:ht(e))},_t=function(e,t,n,r){return it(w(e)?!t:n===!0?!!(n=0):!r,function(){return w(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},vt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},yt=function(e,t){return function(n){return e(parseFloat(n))+(t||ot(n))}},bt=function(e,t,n){return Tt(e,t,0,1,n)},xt=function(e,t,n){return it(n,function(n){return e[~~t(n)]})},St=function e(t,n,r){var i=n-t;return w(t)?xt(t,e(0,t.length),n):it(r,function(e){return(i+(e-t)%i)%i+t})},Ct=function e(t,n,r){var i=n-t,a=i*2;return w(t)?xt(t,e(0,t.length-1),n):it(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},wt=function(e){return e.replace(T,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(E);return _t(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Tt=function(e,t,n,r,i){var a=t-e,o=r-n;return it(i,function(t){return n+((t-e)/a*o||0)})},Et=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=h(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(w(t)&&!w(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=W(w(t)?[]:{},t));if(!u){for(c in n)sn.call(s,t,c,`get`,n[c]);a=function(e){return On(e,s)||(o?t.p:t)}}}return it(r,a)},Dt=function(e,t,n){var r=e.labels,i=s,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(c=a,i=o);return c},Ot=function(e,t,n){var r=e.vars,i=r[t],a=o,s=e._ctx,c,l,u;if(i)return c=r[t+`Params`],l=r.callbackScope||e,n&&z.length&&Ce(),s&&(o=s),u=c?i.apply(l,c):i.call(l),o=a,u},kt=function(e){return Fe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!a),e.progress()<1&&Ot(e,`onInterrupt`),e},At,jt=[],Mt=function(e){if(e){if(e=!e.name&&e.default||e,x()||e.headless){var t=e.name,n=g(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:se,render:On,add:sn,kill:An,modifier:kn,rawVars:0},a={targetTest:0,get:0,getSetter:wn,aliases:{},register:0};if(Wt(),e!==r){if(pe[t])return;U(r,U(Ae(e,i),a)),W(r.prototype,W(i,Ae(e,a))),pe[r.prop=t]=r,e.targetTest&&(ge.push(r),ue[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}oe(t,r),e.register&&e.register(qn,r,Nn)}else jt.push(e)}},Nt=255,Pt={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Ft=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Nt+.5|0},It=function(e,t,n){var r=e?_(e)?[e>>16,e>>8&Nt,e&Nt]:0:Pt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Pt[e])r=Pt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Nt,r&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(D),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Ft(s+1/3,i,a),r[1]=Ft(s,i,a),r[2]=Ft(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(O),n&&r.length<4&&(r[3]=1),r}else r=e.match(D)||Pt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Nt,a=r[1]/Nt,o=r[2]/Nt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Lt=function(e){var t=[],n=[],r=-1;return e.split(zt).forEach(function(e){var i=e.match(k)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Rt=function(e,t,n){var r=``,i=(e+r).match(zt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=It(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Lt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(zt,`1`).split(k),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(zt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},zt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Pt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Bt=/hsl[a]?\(/,Vt=function(e){var t=e.join(` `),n;if(zt.lastIndex=0,zt.test(t))return n=Bt.test(t),e[1]=Rt(e[1],n),e[0]=Rt(e[0],n,Lt(e[1])),!0},Ht,Ut=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){I&&(!te&&x()&&(P=te=window,ne=P.document||{},F.gsap=qn,(P.gsapVersions||(P.gsapVersions=[])).push(qn.version),ie(re||P.GreenSockGlobals||!P.gsap&&P||{}),jt.forEach(Mt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Ht=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ht=0,l=se},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Wt(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Wt=function(){return!Ht&&Ut.wake()},G={},Gt=/^[\d.\-M][\d.\-,\s]/,Kt=/["']/g,qt=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Kt,``).trim():+c,r=s.substr(o+1).trim();return t},Jt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Yt=function(e){var t=(e+``).split(`(`),n=G[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[qt(t[1])]:Jt(e).split(`,`).map(Ee)):G._CE&&Gt.test(e)?G._CE(``,e):n},Xt=function(e){return function(t){return 1-e(1-t)}},Zt=function(e,t){return e&&(g(e)?e:G[e]||Yt(e))||t},Qt=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return be(e,function(e){for(var t in G[e]=F[e]=i,G[a=e.toLowerCase()]=n,i)G[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=G[e+`.`+t]=i[t]}),i},$t=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},en=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/l*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*m((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:$t(s);return a=l/a,c.config=function(n,r){return e(t,n,r)},c},tn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:$t(r);return i.config=function(n){return e(t,n)},i};be(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Qt(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),G.Linear.easeNone=G.none=G.Linear.easeIn,Qt(`Elastic`,en(`in`),en(`out`),en()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Qt(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Qt(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Qt(`Circ`,function(e){return-(f(1-e*e)-1)}),Qt(`Sine`,function(e){return e===1?1:-p(e*u)+1}),Qt(`Back`,tn(`in`),tn(`out`),tn()),G.SteppedEase=G.steps=F.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-c;return function(e){return((r*at(0,a,e)|0)+i)*n}}},r.ease=G[`quad.out`],be(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return _e+=e+`,`+e+`Params,`});var nn=function(e,t){this.id=d++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:B,this.set=t?t.getSetter:wn},rn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,$e(this,+e.duration,1,1),this.data=e.data,o&&(this._ctx=o,o.data.push(this)),Ht||Ut.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,$e(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Wt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(We(this,e),!n._dp||n.parent||Ge(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Ke(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===c||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Te(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Be(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Be(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Ve(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-c?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?He(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-c?0:this._rts,this.totalTime(at(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Ue(this),Le(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==c&&(this._tTime-=c)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=H(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Ke(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(b(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?He(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=le);var t=a;return a=e,we(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),a=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,et(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,et(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(nt(this,e),b(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,b(t)),this._dur||(this._zTime=-c),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-c:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-c,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-c)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=g(e)?e:De,a=function(){var e=t.then;t.then=null,n&&n(),g(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){kt(this)},e}();U(rn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-c,_prom:0,_ps:!1,_rts:1});var an=function(r){t(i,r);function i(t,n){var i;return t===void 0&&(t={}),i=r.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=b(t.sortChildren),N&&Ke(t.parent||N,e(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&qe(e(i),t.scrollTrigger),i}var o=i.prototype;return o.to=function(e,t,n){return rt(0,arguments,this),this},o.from=function(e,t,n){return rt(1,arguments,this),this},o.fromTo=function(e,t,n,r){return rt(2,arguments,this),this},o.set=function(e,t,n){return t.duration=0,t.parent=this,je(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new yn(e,t,nt(this,n),1),this},o.call=function(e,t,n){return Ke(this,yn.delayedCall(0,e,t),n)},o.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new yn(e,n,nt(this,i)),this},o.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,je(n).immediateRender=b(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},o.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,je(r).immediateRender=b(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},o.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,o=this._dur,s=e<=0?0:H(e),l=this._zTime<0!=e<0&&(this._initted||!o),u,d,f,p,m,h,g,_,v,y,b,x;if(this!==N&&s>i&&e>=0&&(s=i),s!==this._tTime||n||l){if(r!==this._time&&o&&(s+=this._time-r,e+=this._time-r),u=s,v=this._start,_=this._ts,h=!_,l&&(o||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=o+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(u=H(s%m),s===i?(p=this._repeat,u=o):(y=H(s/m),p=~~y,p&&p===y&&(u=o,p--),u>o&&(u=o)),y=Ve(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(u=o-u,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:s%o?o:s,this._lock=1,this.render(r||(x?0:H(p*m)),t,!o)._lock=0,this._tTime=s,!t&&this.parent&&Ot(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=p),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(o=this._dur,i=this._tDur,C&&(this._lock=2,r=S?o:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Qe(this,H(r),H(u)),g&&(s-=u-(u=g._start))),this._tTime=s,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&s&&o&&!t&&!y&&(Ot(this,`onStart`),this._tTime!==s))return this;if(u>=r&&e>=0)for(d=this._first;d;){if(f=d._next,(d._act||u>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,t,n),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=-c);break}}d=f}else{d=this._last;for(var w=e<0?e:u;d;){if(f=d._prev,(d._act||w<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,t,n||a&&we(d)),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=w?-c:c);break}}d=f}}if(g&&!t&&(this.pause(),g.render(u>=r?0:-c)._zTime=u>=r?1:-1,this._ts))return this._start=v,Ue(this),this.render(e,t,n);this._onUpdate&&!t&&Ot(this,`onUpdate`,!0),(s===i&&this._tTime>=this.totalDuration()||!s&&r)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!o)&&(s===i&&this._ts>0||!s&&this._ts<0)&&Fe(this,1),!t&&!(e<0&&!r)&&(s||r||!i)&&(Ot(this,s===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom())))}return this},o.add=function(e,t){var n=this;if(_(t)||(t=nt(this,t,e)),!(e instanceof rn)){if(w(e))return e.forEach(function(e){return n.add(e,t)}),this;if(h(e))return this.addLabel(e,t);if(g(e))e=yn.delayedCall(0,e);else return this}return this===e?this:Ke(this,e,t)},o.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-s);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof yn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},o.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},o.remove=function(e){return h(e)?this.removeLabel(e):g(e)?this.killTweensOf(e):(e.parent===this&&Pe(this,e),e===this._recent&&(this._recent=this._last),Ie(this))},o.totalTime=function(e,t){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=H(Ut.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),r.prototype.totalTime.call(this,e,t),this._forcing=0,this):this._tTime},o.addLabel=function(e,t){return this.labels[e]=nt(this,t),this},o.removeLabel=function(e){return delete this.labels[e],this},o.addPause=function(e,t,n){var r=yn.delayedCall(0,t||se,n);return r.data=`isPause`,this._hasPause=1,Ke(this,r,nt(this,e))},o.removePause=function(e){var t=this._first;for(e=nt(this,e);t;)t._start===e&&t.data===`isPause`&&Fe(t),t=t._next},o.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)un!==r[i]&&r[i].kill(e,t);return this},o.getTweensOf=function(e,t){for(var n=[],r=dt(e),i=this._first,a=_(t),o;i;)i instanceof yn?Se(i._targets,r)&&(a?(!un||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},o.tweenTo=function(e,t){t||={};var n=this,r=nt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,l=i.immediateRender,u,d=yn.to(n,U({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||c,onStart:function(){if(n.pause(),!u){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());d._dur!==e&&$e(d,e,0,1).render(d._time,!0,!0),u=1}o&&o.apply(d,s||[])}},t));return l?d.render(0):d},o.tweenFromTo=function(e,t,n){return this.tweenTo(t,U({startAt:{time:nt(this,e)}},n))},o.recent=function(){return this._recent},o.nextLabel=function(e){return e===void 0&&(e=this._time),Dt(this,nt(this,e))},o.previousLabel=function(e){return e===void 0&&(e=this._time),Dt(this,nt(this,e),1)},o.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+c)},o.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=H(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Ie(this)},o.invalidate=function(e){var t=this._first;for(this._lock=0;t;)t.invalidate(e),t=t._next;return r.prototype.invalidate.call(this,e)},o.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Ie(this)},o.totalDuration=function(e){var t=0,n=this,r=n._last,i=s,a,o,c;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(c=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Ke(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!c&&!n._dp||c&&c.smoothChildTiming)&&(n._start+=H(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;$e(n,n===N&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},i.updateRoot=function(e){if(N._ts&&(Te(N,He(e,N)),fe=Ut.frame),Ut.frame>=he){he+=n.autoSleep||120;var t=N._first;if((!t||!t._ts)&&n.autoSleep&&Ut._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Ut.sleep()}}},i}(rn);U(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var on=function(e,t,n,r,i,a,o){var s=new Nn(this._pt,e,t,0,1,Dn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=wt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(A)||[];u=A.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?xe(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=A.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(j.test(r)||g)&&(s.e=0),this._pt=s,s},sn=function(e,t,r,i,a,o,s,c,l,u){g(i)&&(i=i(a||0,e,o));var d=e[t],f=r===`get`?g(d)?l?e[t.indexOf(`set`)||!g(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:r,p=g(d)?l?Sn:xn:bn,m;if(h(i)&&(~i.indexOf(`random(`)&&(i=wt(i)),i.charAt(1)===`=`&&(m=xe(f,i)+(ot(f)||0),(m||m===0)&&(i=m))),!u||f!==i||dn)return!isNaN(f*i)&&i!==``?(m=new Nn(this._pt,e,t,+f||0,i-(f||0),typeof d==`boolean`?En:Tn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&ae(t,i),on.call(this,e,t,f,i,p,c||n.stringFilter,l))},cn=function(e,t,n,r,i){if(g(e)&&(e=gn(e,i,t,n,r)),!y(e)||e.style&&e.nodeType||w(e)||C(e))return h(e)?gn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=gn(e[o],i,t,n,r);return a},ln=function(e,t,n,r,i,a){var o,s,c,l;if(pe[e]&&(o=new pe[e]).init(i,o.rawVars?t[e]:cn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Nn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==At))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},un,dn,fn=function e(t,n,o){var l=t.vars,u=l.ease,d=l.startAt,f=l.immediateRender,p=l.lazy,m=l.onUpdate,h=l.runBackwards,g=l.yoyoEase,_=l.keyframes,v=l.autoRevert,y=t._dur,x=t._startAt,S=t._targets,C=t.parent,w=C&&C.data===`nested`?C.vars.targets:S,T=t._overwrite===`auto`&&!i,E=t.timeline,D=l.easeReverse||g,O,k,A,j,M,ee,P,te,ne,F,re,I,ie;if(E&&(!_||!u)&&(u=`none`),t._ease=Zt(u,r.ease),t._rEase=D&&(Zt(D)||t._ease),t._from=!E&&!!l.runBackwards,t._from&&(t.ratio=1),!E||_&&!l.stagger){if(te=S[0]?ye(S[0]).harness:0,I=te&&l[te.prop],O=Ae(l,ue),x&&(x._zTime<0&&x.progress(1),n<0&&h&&f&&!v?x.render(-1,!0):x.revert(h&&y?R:ce),x._lazy=0),d){if(Fe(t._startAt=yn.set(S,U({data:`isStart`,overwrite:!1,parent:C,immediateRender:!0,lazy:!x&&b(p),startAt:null,delay:0,onUpdate:m&&function(){return Ot(t,`onUpdate`)},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a||!f&&!v)&&t._startAt.revert(R),f&&y&&n<=0&&o<=0){n&&(t._zTime=n);return}}else if(h&&y&&!x){if(n&&(f=!1),A=U({overwrite:!1,data:`isFromStart`,lazy:f&&!x&&b(p),immediateRender:f,stagger:0,parent:C},O),I&&(A[te.prop]=I),Fe(t._startAt=yn.set(S,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a?t._startAt.revert(R):t._startAt.render(-1,!0)),t._zTime=n,!f)e(t._startAt,c,c);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&b(p)||p&&!y,k=0;k<S.length;k++){if(M=S[k],P=M._gsap||ve(S)[k]._gsap,t._ptLookup[k]=F={},de[P.id]&&z.length&&Ce(),re=w===S?k:w.indexOf(M),te&&(ne=new te).init(M,I||O,t,re,w)!==!1&&(t._pt=j=new Nn(t._pt,M,ne.name,0,1,ne.render,ne,0,ne.priority),ne._props.forEach(function(e){F[e]=j}),ne.priority&&(ee=1)),!te||I)for(A in O)pe[A]&&(ne=ln(A,O,t,re,M,w))?ne.priority&&(ee=1):F[A]=j=sn.call(t,M,A,`get`,O[A],re,w,0,l.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),T&&t._pt&&(un=t,N.killTweensOf(M,F,t.globalTime(n)),ie=!t.parent,un=0),t._pt&&p&&(de[P.id]=1)}ee&&Mn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!ie,_&&n<=0&&E.render(s,!0,!0)},pn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return dn=1,e.vars[t]=`+=0`,fn(e,o),dn=0,s?L(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=V(n)+ot(u.e)),u.b&&(u.b=l.s+ot(u.b))},mn=function(e,t){var n=e[0]?ye(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=W({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},hn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(w(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},gn=function(e,t,n,r,i){return g(e)?e.call(t,n,r,i):h(e)&&~e.indexOf(`random(`)?wt(e):e},_n=_e+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,vn={};be(_n+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return vn[e]=1});var yn=function(r){t(o,r);function o(t,a,o,s){var l;typeof a==`number`&&(o.duration=a,a=o,o=null),l=r.call(this,s?a:je(a))||this;var u=l.vars,d=u.duration,f=u.delay,p=u.immediateRender,m=u.stagger,h=u.overwrite,g=u.keyframes,v=u.defaults,x=u.scrollTrigger,T=a.parent||N,E=(w(t)||C(t)?_(t[0]):`length`in a)?[t]:dt(t),D,O,k,A,j,M,ee,P;if(l._targets=E.length?ve(E):L(`GSAP target `+t+` not found. https://gsap.com`,!n.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,g||m||S(d)||S(f)){a=l.vars;var te=a.easeReverse||a.yoyoEase;if(D=l.timeline=new an({data:`nested`,defaults:v||{},targets:T&&T.data===`nested`?T.vars.targets:E}),D.kill(),D.parent=D._dp=e(l),D._start=0,m||S(d)||S(f)){if(A=E.length,ee=m&&mt(m),y(m))for(j in m)~_n.indexOf(j)&&(P||={},P[j]=m[j]);for(O=0;O<A;O++)k=Ae(a,vn),k.stagger=0,te&&(k.easeReverse=te),P&&W(k,P),M=E[O],k.duration=+gn(d,e(l),O,M,E),k.delay=(+gn(f,e(l),O,M,E)||0)-l._delay,!m&&A===1&&k.delay&&(l._delay=f=k.delay,l._start+=f,k.delay=0),D.to(M,k,ee?ee(O,M,E):0),D._ease=G.none;D.duration()?d=f=0:l.timeline=0}else if(g){je(U(D.vars.defaults,{ease:`none`})),D._ease=Zt(g.ease||a.ease||`none`);var ne=0,F,re,I;if(w(g))g.forEach(function(e){return D.to(E,e,`>`)}),D.duration();else{for(j in k={},g)j===`ease`||j===`easeEach`||hn(j,g[j],k,g.easeEach);for(j in k)for(F=k[j].sort(function(e,t){return e.t-t.t}),ne=0,O=0;O<F.length;O++)re=F[O],I={ease:re.e,duration:(re.t-(O?F[O-1].t:0))/100*d},I[j]=re.v,D.to(E,I,ne),ne+=I.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||l.duration(d=D.duration())}else l.timeline=0;return h===!0&&!i&&(un=e(l),N.killTweensOf(E),un=0),Ke(T,e(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),(p||!d&&!g&&l._start===H(T._time)&&b(p)&&ze(e(l))&&T.data!==`nested`)&&(l._tTime=-c,l.render(Math.max(0,-f)||0)),x&&qe(e(l),x),l}var s=o.prototype;return s.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-c&&!o?i:e<c?0:e,l,u,d,f,p,m,h,g;if(!a)Ze(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(l=s,g=this.timeline,this._repeat){if(f=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(f*100+e,t,n);if(l=H(s%f),s===i?(d=this._repeat,l=a):(p=H(s/f),d=~~p,d&&d===p?(l=a,d--):l>a&&(l=a)),m=this._yoyo&&d&1,m&&(l=a-l),p=Ve(this._tTime,f),l===r&&!n&&this._initted&&d===p)return this._tTime=s,this;d!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&l!==f&&this._initted&&(this._lock=n=1,this.render(H(f*d),!0).invalidate()._lock=0)}if(!this._initted){if(Je(this,o?e:l,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&d!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=l<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=h=this._invRatio+this._invScale*this._invEase((l-this._invTime)*this._invRecip)}else this.ratio=h=this._ease(l/a);if(this._from&&(this.ratio=h=1-h),this._tTime=s,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!p&&(Ot(this,`onStart`),this._tTime!==s))return this;for(u=this._pt;u;)u.r(h,u.d),u=u._next;g&&g.render(e<0?e:g._dur*g._ease(l/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Re(this,e,t,n),Ot(this,`onUpdate`)),this._repeat&&d!==p&&this.vars.onRepeat&&!t&&this.parent&&Ot(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Re(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Fe(this,1),!t&&(!o||r)&&(s||r||m)&&(Ot(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},s.targets=function(){return this._targets},s.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),r.prototype.invalidate.call(this,e)},s.resetTo=function(e,t,n,r,i){Ht||Ut.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||fn(this,a),o=this._ease(a/this._dur),pn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(We(this,0),this.parent||Ne(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},s.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?kt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!a),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,un&&un.vars.overwrite!==!0)._first||kt(this),this.parent&&n!==this.timeline.totalDuration()&&$e(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?dt(e):r,o=this._ptLookup,s=this._pt,c,l,u,d,f,p,m;if((!t||t===`all`)&&Me(r,i))return t===`all`&&(this._pt=0),kt(this);for(c=this._op=this._op||[],t!==`all`&&(h(t)&&(f={},be(t,function(e){return f[e]=1}),t=f),t=mn(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(f in l=o[m],t===`all`?(c[m]=t,d=l,u={}):(u=c[m]=c[m]||{},d=t),d)p=l&&l[f],p&&((!(`kill`in p.d)||p.d.kill(f)===!0)&&Pe(this,p,`_pt`),delete l[f]),u!==`all`&&(u[f]=1);return this._initted&&!this._pt&&s&&kt(this),this},o.to=function(e,t){return new o(e,t,arguments[2])},o.from=function(e,t){return rt(1,arguments)},o.delayedCall=function(e,t,n,r){return new o(t,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:t,onReverseComplete:t,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:r})},o.fromTo=function(e,t,n){return rt(2,arguments)},o.set=function(e,t){return t.duration=0,t.repeatDelay||(t.repeat=0),new o(e,t)},o.killTweensOf=function(e,t,n){return N.killTweensOf(e,t,n)},o}(rn);U(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),be(`staggerTo,staggerFrom,staggerFromTo`,function(e){yn[e]=function(){var t=new an,n=ct.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var bn=function(e,t,n){return e[t]=n},xn=function(e,t,n){return e[t](n)},Sn=function(e,t,n,r){return e[t](r.fp,n)},Cn=function(e,t,n){return e.setAttribute(t,n)},wn=function(e,t){return g(e[t])?xn:v(e[t])&&e.setAttribute?Cn:bn},Tn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},En=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},On=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},An=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Pe(this,t,`_pt`):t.dep||(n=1),t=r;return!n},jn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Mn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Nn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Tn,this.d=o||this,this.set=s||bn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=jn,this.m=e,this.mt=n,this.tween=t},e}();be(_e+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return ue[e]=1}),F.TweenMax=F.TweenLite=yn,F.TimelineLite=F.TimelineMax=an,N=new an({sortChildren:!1,defaults:r,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),n.stringFilter=Vt;var Pn=[],Fn={},In=[],Ln=0,Rn=0,zn=function(e){return(Fn[e]||In).map(function(e){return e()})},Bn=function(){var e=Date.now(),t=[];e-Ln>2&&(zn(`matchMediaInit`),Pn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=P.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),zn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Ln=e,zn(`matchMedia`))},Vn=function(){function e(e,t){this.selector=t&&ft(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Rn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){g(e)&&(n=t,t=e,e=g);var r=this,i=function(){var e=o,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=ft(n)),o=r,a=t.apply(r,arguments),g(a)&&r._r.push(a),o=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===g?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=o;o=null,e(this),o=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof yn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof an?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof yn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Pn.length;r--;)Pn[r].id===this.id&&Pn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Hn=function(){function e(e){this.contexts=[],this.scope=e,o&&o.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){y(e)||(e={matches:e});var r=new Vn(0,n||this.scope),i=r.conditions={},a,s,c;for(s in o&&!r.selector&&(r.selector=o.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)s===`all`?c=1:(a=P.matchMedia(e[s]),a&&(Pn.indexOf(r)<0&&Pn.push(r),(i[s]=a.matches)&&(c=1),a.addListener?a.addListener(Bn):a.addEventListener(`change`,Bn)));return c&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Un={registerPlugin:function(){[...arguments].forEach(function(e){return Mt(e)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return N.getTweensOf(e,t)},getProperty:function(e,t,n,r){h(e)&&(e=dt(e)[0]);var i=ye(e||{}).get,a=n?De:Ee;return n===`native`&&(n=``),e&&(t?a((pe[t]&&pe[t].get||i)(e,t,n,r)):function(t,n,r){return a((pe[t]&&pe[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=dt(e),e.length>1){var r=e.map(function(e){return qn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=pe[t],o=ye(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;At._pt=0,r.init(e,n?t+n:t,At,0,[e]),r.render(1,r),At._pt&&On(1,At)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=qn.to(e,U((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return N.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zt(e.ease,r.ease)),ke(r,e||{})},config:function(e){return ke(n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!pe[e]&&!F[e]&&L(t+` effect requires `+e+` plugin.`)}),me[t]=function(e,t,r){return n(dt(e),U(t||{},i),r)},a&&(an.prototype[t]=function(e,n,r){return this.add(me[t](e,y(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){G[e]=Zt(t)},parseEase:function(e,t){return arguments.length?Zt(e,t):G},getById:function(e){return N.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),r,i;for(n.smoothChildTiming=b(e.smoothChildTiming),N.remove(n),n._dp=0,n._time=n._tTime=N._time,r=N._first;r;)i=r._next,(t||!(!r._dur&&r instanceof yn&&r.vars.onComplete===r._targets[0]))&&Ke(n,r,r._start-r._delay),r=i;return Ke(N,n,0),n},context:function(e,t){return e?new Vn(e,t):o},matchMedia:function(e){return new Hn(e)},matchMediaRefresh:function(){return Pn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Bn()},addEventListener:function(e,t){var n=Fn[e]||(Fn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:St,wrapYoyo:Ct,distribute:mt,random:_t,snap:gt,normalize:bt,getUnit:ot,clamp:st,splitColor:It,toArray:dt,selector:ft,mapRange:Tt,pipe:vt,unitize:yt,interpolate:Et,shuffle:pt},install:ie,effects:me,ticker:Ut,updateRoot:an.updateRoot,plugins:pe,globalTimeline:N,core:{PropTween:Nn,globals:oe,Tween:yn,Timeline:an,Animation:rn,getCache:ye,_removeLinkedListItem:Pe,reverting:function(){return a},context:function(e){return e&&o&&(o.data.push(e),e._ctx=o),o},suppressOverwrites:function(e){return i=e}}};be(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Un[e]=yn[e]}),Ut.add(an.updateRoot),At=Un.to({},{duration:0});var Wn=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Gn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Wn(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Kn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(h(n)&&(r={},be(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Gn(e,n)}}}},qn=Un.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)a?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kn(`roundProps`,ht),Kn(`modifiers`),Kn(`snap`,gt))||Un;yn.version=an.version=qn.version=`3.15.0`,I=1,x()&&Wt(),G.Power0,G.Power1,G.Power2,G.Power3,G.Power4,G.Linear,G.Quad,G.Cubic,G.Quart,G.Quint,G.Strong,G.Elastic,G.Back,G.SteppedEase,G.Bounce,G.Sine,G.Expo,G.Circ;var Jn,Yn,Xn,Zn,Qn,$n,er,tr=function(){return typeof window<`u`},nr={},rr=180/Math.PI,ir=Math.PI/180,ar=Math.atan2,or=1e8,sr=/([A-Z])/g,cr=/(left|right|width|margin|padding|x)/i,lr=/[\s,\(]\S/,ur={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},dr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_r=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},vr=function(e,t,n){return e.style[t]=n},yr=function(e,t,n){return e.style.setProperty(t,n)},br=function(e,t,n){return e._gsap[t]=n},xr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Sr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Cr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},wr=`transform`,Tr=wr+`Origin`,Er=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in nr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=ur[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Gr(i,e)}):this.tfm[t]=o.x?o[t]:Gr(i,t),t===Tr&&(this.tfm.zOrigin=o.zOrigin);else return ur.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(wr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Tr,n,``)),t=wr}(a||n)&&this.props.push(t,n,a[t])},Dr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Or=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(sr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=er(),(!i||!i.isStart)&&!n[wr]&&(Dr(n),r.zOrigin&&n[Tr]&&(n[Tr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kr=function(e,t){var n={target:e,props:[],revert:Or,save:Er};return e._gsap||qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Ar,jr=function(e,t){var n=Yn.createElementNS?Yn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Yn.createElement(e);return n&&n.style?n:Yn.createElement(e)},Mr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(sr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Pr(n)||n,1)||``},Nr=`O,Moz,ms,Ms,Webkit`.split(`,`),Pr=function(e,t,n){var r=(t||Qn).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Nr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Nr[i]:``)+e},Fr=function(){tr()&&window.document&&(Jn=window,Yn=Jn.document,Xn=Yn.documentElement,Qn=jr(`div`)||{style:{}},jr(`div`),wr=Pr(wr),Tr=wr+`Origin`,Qn.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Ar=!!Pr(`perspective`),er=qn.core.reverting,Zn=1)},Ir=function(e){var t=e.ownerSVGElement,n=jr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Xn.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Xn.removeChild(n),i},Lr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rr=function(e){var t,n;try{t=e.getBBox()}catch{t=Ir(e),n=1}return t&&(t.width||t.height)||n||(t=Ir(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lr(e,[`x`,`cx`,`x1`])||0,y:+Lr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},zr=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Rr(e))},Br=function(e,t){if(t){var n=e.style,r;t in nr&&t!==Tr&&(t=wr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(sr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,r,i,a){var o=new Nn(e._pt,t,n,0,1,a?_r:gr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Hr={deg:1,rad:1,turn:1},Ur={grid:1,flex:1},Wr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Qn.style,c=cr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Hr[i]||Hr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&zr(t),(p||o===`%`)&&(nr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],V(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Yn||!h.appendChild)&&(h=Yn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Ut.time&&!g.uncache)return V(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Br(t,n)}else(p||o===`%`)&&!Ur[Mr(h,`display`)]&&(s.position=Mr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Qn),m=Qn[u],h.removeChild(Qn),s.position=`absolute`;return c&&p&&(g=ye(h),g.time=Ut.time,g.width=h[u]),V(f?m*a/d:m&&a?d/m*a:0)},Gr=function(e,t,n,r){var i;return Zn||Fr(),t in ur&&t!==`transform`&&(t=ur[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),nr[t]&&t!==`transform`?(i=ri(e,r),i=t===`transformOrigin`?i.svg?i.origin:ii(Mr(e,Tr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Xr[t]&&Xr[t](e,t,n)||Mr(e,t)||B(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Wr(e,t,i,n)+n:i},Kr=function(e,t,r,i){if(!r||r===`none`){var a=Pr(t,e,1),o=a&&Mr(e,a,1);o&&o!==r?(t=a,r=o):t===`borderColor`&&(r=Mr(e,`borderTopColor`))}var s=new Nn(this._pt,e.style,t,0,1,Dn),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=r,s.e=i,r+=``,i+=``,i.substring(0,6)===`var(--`&&(i=Mr(e,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(h=e.style[t],e.style[t]=i,i=Mr(e,t)||i,h?e.style[t]=h:Br(e,t)),u=[r,i],Vt(u),r=u[0],i=u[1],f=r.match(k)||[],x=i.match(k)||[],x.length){for(;d=k.exec(i);)g=d[0],v=i.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=xe(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=k.lastIndex-y.length,y||(y=y||n.units[t]||b,c===i.length&&(i+=y,s.e+=y)),b!==y&&(p=Wr(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<i.length?i.substring(c,i.length):``}else s.r=t===`display`&&i===`none`?_r:gr;return j.test(i)&&(s.e=0),this._pt=s,s},qr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Jr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=qr[n]||n,t[1]=qr[r]||r,t.join(` `)},Yr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],nr[o]&&(s=1,o=o===`transformOrigin`?Tr:wr),Br(n,o);s&&(Br(n,wr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ri(n,1),a.uncache=1,Dr(r)))}},Xr={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Nn(e._pt,t,n,0,0,Yr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Zr=[1,0,0,1,0,0],Qr={},$r=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ei=function(e){var t=Mr(e,wr);return $r(t)?Zr:t.substr(7).match(O).map(V)},ti=function(e,t){var n=e._gsap||ye(e),r=e.style,i=ei(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Zr:i):(i===Zr&&!e.offsetParent&&e!==Xn&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Xn.appendChild(e)),i=ei(e),s?r.display=s:Br(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Xn.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ni=function(e,t,n,r,i,a){var o=e._gsap,s=i||ti(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Zr&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Rr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Tr]=`0px 0px`,a&&(Vr(a,o,`xOrigin`,c,y),Vr(a,o,`yOrigin`,l,b),Vr(a,o,`xOffset`,u,o.xOffset),Vr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ri=function(e,t){var r=e._gsap||new nn(e);if(`x`in r&&!t&&!r.uncache)return r;var i=e.style,a=r.scaleX<0,o=`px`,s=`deg`,c=getComputedStyle(e),l=Mr(e,Tr)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,ee,N,P,te,ne,F,re,I,ie;return r.svg=!!(e.getCTM&&zr(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(i[wr]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[wr]===`none`?``:c[wr])),i.scale=i.rotate=i.translate=`none`),C=ti(e,r.svg),r.svg&&(r.uncache?(N=e.getBBox(),l=r.xOrigin-N.x+`px `+(r.yOrigin-N.y)+`px`,ee=``):ee=!t&&e.getAttribute(`data-svg-origin`),ni(e,ee||l,!!ee||r.originIsAbsolute,r.smooth!==!1,C)),x=r.xOrigin||0,S=r.yOrigin||0,C!==Zr&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?ar(O,D)*rr:0,v=k||A?ar(k,A)*rr+h:0,v&&(m*=Math.abs(Math.cos(v*ir))),r.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(ie=C[6],re=C[7],te=C[8],ne=C[9],F=C[10],I=C[11],u=C[12],d=C[13],f=C[14],w=ar(ie,F),g=w*rr,w&&(T=Math.cos(-w),E=Math.sin(-w),ee=j*T+te*E,N=M*T+ne*E,P=ie*T+F*E,te=j*-E+te*T,ne=M*-E+ne*T,F=ie*-E+F*T,I=re*-E+I*T,j=ee,M=N,ie=P),w=ar(-k,F),_=w*rr,w&&(T=Math.cos(-w),E=Math.sin(-w),ee=D*T-te*E,N=O*T-ne*E,P=k*T-F*E,I=A*E+I*T,D=ee,O=N,k=P),w=ar(O,D),h=w*rr,w&&(T=Math.cos(w),E=Math.sin(w),ee=D*T+O*E,N=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=ee,j=N),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=V(Math.sqrt(D*D+O*O+k*k)),m=V(Math.sqrt(M*M+ie*ie)),w=ar(j,M),v=Math.abs(w)>2e-4?w*rr:0,b=I?1/(I<0?-I:I):0),r.svg&&(ee=e.getAttribute(`transform`),r.forceCSS=e.setAttribute(`transform`,``)||!$r(Mr(e,wr)),ee&&e.setAttribute(`transform`,ee))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=f+o,r.scaleX=V(p),r.scaleY=V(m),r.rotation=V(h)+s,r.rotationX=V(g)+s,r.rotationY=V(_)+s,r.skewX=v+s,r.skewY=y+s,r.transformPerspective=b+o,(r.zOrigin=parseFloat(l.split(` `)[2])||!t&&r.zOrigin||0)&&(i[Tr]=ii(l)),r.xOffset=r.yOffset=0,r.force3D=n.force3D,r.renderTransform=r.svg?di:Ar?ui:oi,r.uncache=0,r},ii=function(e){return(e=e.split(` `))[0]+` `+e[1]},ai=function(e,t,n){var r=ot(t);return V(parseFloat(t)+parseFloat(Wr(e,`x`,n+`px`,r)))+r},oi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,ui(e,t)},si=`0deg`,ci=`0px`,li=`) `,ui=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==si||l!==si)){var x=parseFloat(l)*ir,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*ir,w=Math.cos(x),a=ai(_,a,S*w*-v),o=ai(_,o,-Math.sin(x)*-v),s=ai(_,s,C*w*-v+v)}h!==ci&&(y+=`perspective(`+h+li),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ci||o!==ci||s!==ci)&&(y+=s!==ci||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+li),c!==si&&(y+=`rotate(`+c+li),l!==si&&(y+=`rotateY(`+l+li),u!==si&&(y+=`rotateX(`+u+li),(d!==si||f!==si)&&(y+=`skew(`+d+`, `+f+li),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+li),_.style[wr]=y||`translate(0, 0)`},di=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=ir,c*=ir,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=ir,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=V(b),x=V(x),S=V(S),C=V(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Wr(f,`x`,a,`px`),y=Wr(f,`y`,o,`px`)),(p||m||h||g)&&(v=V(v+p-(p*b+m*S)+h),y=V(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=V(v+r/100*w.width),y=V(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[wr]=w)},fi=function(e,t,n,r,i){var a=360,o=h(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?rr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*or)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*or)%a-~~(s/a)*a)),e._pt=u=new Nn(e._pt,t,n,r,s,fr),u.e=c,u.u=`deg`,e._props.push(n),u},pi=function(e,t){for(var n in t)e[n]=t[n];return e},mi=function(e,t,n){var r=pi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[wr]=t,o=ri(n,1),Br(n,wr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[wr],a[wr]=t,o=ri(n,1),a[wr]=c),nr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=ot(c),p=ot(l),u=f===p?parseFloat(c):Wr(n,s,c,p),d=parseFloat(l),e._pt=new Nn(e._pt,o,s,u,d-u,dr),e._pt.u=p||0,e._props.push(s));pi(o,r)};be(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Xr[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Gr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var hi={name:`css`,register:Fr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,a){var o=this._props,s=e.style,c=r.vars.startAt,l,u,d,f,p,m,g,_,v,y,b,x,S,C,w,T,E;for(g in Zn||Fr(),this.styles=this.styles||kr(e),T=this.styles.props,this.tween=r,t)if(g!==`autoRound`&&(u=t[g],!(pe[g]&&ln(g,t,r,i,e,a)))){if(p=typeof u,m=Xr[g],p===`function`&&(u=u.call(r,i,e,a),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=wt(u)),m)m(this,e,g,u,r)&&(w=1);else if(g.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(g)+``).trim(),u+=``,zt.lastIndex=0,zt.test(l)||(_=ot(l),v=ot(u),v?_!==v&&(l=Wr(e,g,l,v)+v):_&&(u+=_)),this.add(s,`setProperty`,l,u,i,a,0,0,g),o.push(g),T.push(g,0,s[g]);else if(p!==`undefined`){if(c&&g in c?(l=typeof c[g]==`function`?c[g].call(r,i,e,a):c[g],h(l)&&~l.indexOf(`random(`)&&(l=wt(l)),ot(l+``)||l===`auto`||(l+=n.units[g]||ot(Gr(e,g))||``),(l+``).charAt(1)===`=`&&(l=Gr(e,g))):l=Gr(e,g),f=parseFloat(l),y=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),g in ur&&(g===`autoAlpha`&&(f===1&&Gr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Vr(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),g!==`scale`&&g!==`transform`&&(g=ur[g],~g.indexOf(`,`)&&(g=g.split(`,`)[0]))),b=g in nr,b){if(this.styles.save(g),E=u,p===`string`&&u.substring(0,6)===`var(--`){if(u=Mr(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=u,u=Mr(e,`perspective`),D?e.style.perspective=D:Br(e,`perspective`)}d=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||ri(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Nn(this._pt,s,wr,0,1,S.renderTransform,S,0,-1),x.dep=1),g===`scale`)this._pt=new Nn(this._pt,S,`scaleY`,S.scaleY,(y?xe(S.scaleY,y+d):d)-S.scaleY||0,dr),this._pt.u=0,o.push(`scaleY`,g),g+=`X`;else if(g===`transformOrigin`){T.push(Tr,0,s[Tr]),u=Jr(u),S.svg?ni(e,u,0,C,0,this):(v=parseFloat(u.split(` `)[2])||0,v!==S.zOrigin&&Vr(this,S,`zOrigin`,S.zOrigin,v),Vr(this,s,g,ii(l),ii(u)));continue}else if(g===`svgOrigin`){ni(e,u,1,C,0,this);continue}else if(g in Qr){fi(this,S,g,f,y?xe(f,y+u):u);continue}else if(g===`smoothOrigin`){Vr(this,S,`smooth`,S.smooth,u);continue}else if(g===`force3D`){S[g]=u;continue}else if(g===`transform`){mi(this,u,e);continue}}else g in s||(g=Pr(g)||g);if(b||(d||d===0)&&(f||f===0)&&!lr.test(u)&&g in s)_=(l+``).substr((f+``).length),d||=0,v=ot(u)||(g in n.units?n.units[g]:_),_!==v&&(f=Wr(e,g,l,v)),this._pt=new Nn(this._pt,b?S:s,g,f,(y?xe(f,y+d):d)-f,!b&&(v===`px`||g===`zIndex`)&&t.autoRound!==!1?hr:dr),this._pt.u=v||0,b&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=mr):_!==v&&v!==`%`&&(this._pt.b=l,this._pt.r=pr);else if(g in s)Kr.call(this,e,g,l,y?y+u:u);else if(g in e)this.add(e,g,l||e[g],y?y+u:u,i,a);else if(g!==`parseTransform`){ae(g,u);continue}b||(g in s?T.push(g,0,s[g]):typeof e[g]==`function`?T.push(g,2,e[g]()):T.push(g,1,l||e[g])),o.push(g)}}w&&Mn(this)},render:function(e,t){if(t.tween._time||!er())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gr,aliases:ur,getSetter:function(e,t,n){var r=ur[t];return r&&r.indexOf(`,`)<0&&(t=r),t in nr&&t!==Tr&&(e._gsap.x||Gr(e,`x`))?n&&$n===n?t===`scale`?xr:br:($n=n||{})&&(t===`scale`?Sr:Cr):e.style&&!v(e.style[t])?vr:~t.indexOf(`-`)?yr:wn(e,t)},core:{_removeProperty:Br,_getMatrix:ti}};qn.utils.checkPrefix=Pr,qn.core.getStyleSaver=kr,(function(e,t,r,i){var a=be(e+`,`+t+`,`+r,function(e){nr[e]=1});be(t,function(e){n.units[e]=`deg`,Qr[e]=1}),ur[a[13]]=e+`,`+t,be(i,function(e){var t=e.split(`:`);ur[t[1]]=a[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),be(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){n.units[e]=`px`}),qn.registerPlugin(hi);var K=qn.registerPlugin(hi)||qn;K.core.Tween;var gi=new class{constructor(){this.currentEpisode=null,this.isPlaying=!1,this.currentTime=0,this.totalDuration=3240,this.volume=.85,this.playbackRate=1,this.playbackRates=[1,1.25,1.5,2],this.currentRateIndex=0,this.listeners=new Set,this.timerId=null,this.audioCtx=null,this.ambientNodes=[],this.gainNode=null,this.initAudioContext()}initAudioContext(){}startWebAudio(){try{if(!this.audioCtx){let e=window.AudioContext||window.webkitAudioContext;this.audioCtx=new e}this.audioCtx.state===`suspended`&&this.audioCtx.resume(),this.stopWebAudio(),this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.setValueAtTime(.001,this.audioCtx.currentTime),this.gainNode.gain.exponentialRampToValueAtTime(.04*this.volume,this.audioCtx.currentTime+1.2),this.gainNode.connect(this.audioCtx.destination);let e=[108,216,324,432];this.ambientNodes=e.map((e,t)=>{let n=this.audioCtx.createOscillator(),r=this.audioCtx.createStereoPanner?this.audioCtx.createStereoPanner():null;return n.type=t%2==0?`sine`:`triangle`,n.frequency.setValueAtTime(e,this.audioCtx.currentTime),r?(r.pan.setValueAtTime((t-1.5)*.4,this.audioCtx.currentTime),n.connect(r),r.connect(this.gainNode)):n.connect(this.gainNode),n.start(),n})}catch(e){console.warn(`AudioContext init handled:`,e)}}stopWebAudio(){if(this.gainNode&&this.audioCtx)try{this.gainNode.gain.setValueAtTime(this.gainNode.gain.value,this.audioCtx.currentTime),this.gainNode.gain.exponentialRampToValueAtTime(1e-4,this.audioCtx.currentTime+.3)}catch{}setTimeout(()=>{this.ambientNodes.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.ambientNodes=[]},350)}playEpisode(e){if(!e)return;let t=!this.currentEpisode||this.currentEpisode.id!==e.id;if(this.currentEpisode=e,t){this.currentTime=0;let t=e.duration?e.duration.match(/\d+/):null;this.totalDuration=t?parseInt(t[0],10)*60:3240}this.isPlaying=!0,this.startWebAudio(),this.startTimer(),this.notify()}togglePlay(){this.currentEpisode&&(this.isPlaying=!this.isPlaying,this.isPlaying?(this.startWebAudio(),this.startTimer()):(this.stopWebAudio(),this.stopTimer()),this.notify())}seek(e){this.currentTime=Math.max(0,Math.min(e,this.totalDuration)),this.notify()}skip(e){this.seek(this.currentTime+e)}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.gainNode&&this.audioCtx&&this.isPlaying&&this.gainNode.gain.setValueAtTime(.04*this.volume,this.audioCtx.currentTime),this.notify()}cycleRate(){this.currentRateIndex=(this.currentRateIndex+1)%this.playbackRates.length,this.playbackRate=this.playbackRates[this.currentRateIndex],this.notify()}startTimer(){this.stopTimer(),this.timerId=setInterval(()=>{this.isPlaying&&(this.currentTime+=1*this.playbackRate,this.currentTime>=this.totalDuration&&(this.currentTime=this.totalDuration,this.isPlaying=!1,this.stopWebAudio(),this.stopTimer()),this.notify())},1e3)}stopTimer(){this.timerId&&=(clearInterval(this.timerId),null)}subscribe(e){return this.listeners.add(e),e(this.getState()),()=>this.listeners.delete(e)}notify(){let e=this.getState();this.listeners.forEach(t=>t(e))}getState(){return{episode:this.currentEpisode,isPlaying:this.isPlaying,currentTime:this.currentTime,totalDuration:this.totalDuration,progress:this.totalDuration>0?this.currentTime/this.totalDuration*100:0,formattedCurrentTime:this.formatTime(this.currentTime),formattedTotalDuration:this.formatTime(this.totalDuration),volume:this.volume,playbackRate:this.playbackRate}}formatTime(e){let t=Math.floor(e/60),n=Math.floor(e%60);return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}};function _i(){let e=document.getElementById(`global-player`);if(!e)return;let t=e.querySelector(`#player-toggle`),n=e.querySelector(`#player-play-icon`),r=e.querySelector(`#player-pause-icon`),i=e.querySelector(`#player-progress`),a=e.querySelector(`#player-progress-fill`),o=e.querySelector(`#player-current-time`),s=e.querySelector(`#player-total-time`),c=e.querySelector(`#player-title`),l=e.querySelector(`#player-guest`),u=e.querySelector(`#player-cover`),d=e.querySelector(`#player-skip-back`),f=e.querySelector(`#player-skip-fwd`),p=e.querySelector(`#player-speed-btn`),m=e.querySelector(`#player-volume`),h=e.querySelector(`#player-view-notes`),g=e.querySelectorAll(`.player-vis-bar`),_=null;function v(e){e?_||(_=K.timeline({repeat:-1,yoyo:!0}),g.forEach((e,t)=>{K.to(e,{scaleY:()=>.2+Math.random()*.8,duration:.2+t%3*.1,repeat:-1,yoyo:!0,ease:`sine.inOut`,transformOrigin:`bottom center`})})):(g.forEach(e=>{K.killTweensOf(e),K.to(e,{scaleY:.15,duration:.3,ease:`power2.out`,transformOrigin:`bottom center`})}),_=null)}gi.subscribe(t=>{if(!t.episode){e.classList.add(`hidden`);return}e.classList.remove(`hidden`),c&&(c.textContent=t.episode.title),l&&(l.textContent=`${t.episode.guest.name} • Ep #${t.episode.number}`),u&&(u.src=t.episode.guest.avatar),a&&(a.style.width=`${t.progress}%`),o&&(o.textContent=t.formattedCurrentTime),s&&(s.textContent=t.formattedTotalDuration),p&&(p.textContent=`${t.playbackRate}x`),t.isPlaying?(n?.classList.add(`hidden`),r?.classList.remove(`hidden`),e.classList.add(`is-playing`),v(!0)):(n?.classList.remove(`hidden`),r?.classList.add(`hidden`),e.classList.remove(`is-playing`),v(!1))}),t?.addEventListener(`click`,()=>{gi.togglePlay()}),d?.addEventListener(`click`,()=>{gi.skip(-15)}),f?.addEventListener(`click`,()=>{gi.skip(30)}),p?.addEventListener(`click`,()=>{gi.cycleRate()}),i&&i.addEventListener(`click`,e=>{let t=i.getBoundingClientRect(),n=e.clientX-t.left,r=Math.max(0,Math.min(1,n/t.width))*gi.totalDuration;gi.seek(r)}),m?.addEventListener(`input`,e=>{gi.setVolume(parseFloat(e.target.value))}),h?.addEventListener(`click`,()=>{gi.currentEpisode&&window.openEpisodeDetail&&window.openEpisodeDetail(gi.currentEpisode.id)})}var vi=JSON.parse(`[{"id":"ep-108","number":"108","title":"Learning to Sit With the Silence: Why We Rush to Fix What Only Needs to Be Felt","guest":{"name":"Dr. Elena Rostova","role":"Somatic Psychologist & Author","avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80","bio":"Dr. Elena Rostova has spent over 18 years researching how emotional suppression manifests as physical tension, and how compassionate witnessing can heal trauma without hurried advice."},"date":"Sep 28, 2026","duration":"54 min","category":"Mental Health","summary":"When someone shares deep grief, our instinct is often to offer immediate solutions or toxic positivity. In this episode, Dr. Elena explores somatic listening and the transformative power of being fully present without trying to fix anything.","featured":true,"tags":["Somatic Therapy","Empathy","Grief Support","Silence"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["Why the impulse to 'fix' is often our own anxiety about discomfort.","How physical breathwork anchors our capacity to be present for others.","Practical phrases that communicate unconditional empathy without giving unsolicited advice.","The neuroscience of co-regulation through calm vocal cadence."],"transcript":[{"time":"00:00","speaker":"Host (Maya)","text":"Welcome back to Care 2 Listen. Today we are tackling something so simple yet so extraordinarily difficult: sitting in silence with someone who is hurting."},{"time":"02:15","speaker":"Dr. Elena","text":"When we jump to offer advice, we often think we are being helpful. But biologically, our nervous system is just trying to stop feeling the pain reflected back at us."},{"time":"06:40","speaker":"Host (Marcus)","text":"That resonates so deeply. In my therapy practice, the turning points almost never happen when I make an intellectual observation. They happen in the quiet moments."},{"time":"14:20","speaker":"Dr. Elena","text":"Exactly. The body knows when it is being tolerated versus when it is being welcomed. Real healing begins when people feel safe enough to lower their defenses."}]},{"id":"ep-107","number":"107","title":"Walking Away from the Golden Handcuffs: Redefining Worth Beyond Career Titles","guest":{"name":"Julian Rivera","role":"Former Tech Executive & Founder of The Unwound Life","avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80","bio":"Julian walked away from a senior vice presidency at a tier-one tech unicorn after a severe panic attack during a board meeting made him re-evaluate everything."},"date":"Sep 21, 2026","duration":"48 min","category":"Career","summary":"Julian Rivera uncovers the psychological trap of tying your entire self-esteem to a job title, navigating the fear of letting people down, and rebuilding a life centered on rest, human connection, and genuine curiosity.","featured":false,"tags":["Burnout","Identity","Career Pivot","Work-Life Balance"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["The distinction between productive ambition and compulsive achievement.","How to separate your identity from corporate validation.","Financial triage and emotional groundwork needed before making a leap.","Reconnecting with hobbies where there is zero financial incentive."],"transcript":[{"time":"00:00","speaker":"Host (Marcus)","text":"We live in a culture that asks children 'what do you want to be' instead of 'how do you want to feel'. Today Julian Rivera shares his exit from high-stress corporate life."},{"time":"03:10","speaker":"Julian Rivera","text":"I remember looking at my bank account while having an ambulance called to my apartment. I had everything I thought I wanted, and I felt hollowed out."},{"time":"11:45","speaker":"Host (Maya)","text":"How did your friends and colleagues respond when you announced you were walking away without another offer lined up?"}]},{"id":"ep-106","number":"106","title":"The Invisible Weight of Chronic Illness: Finding Joy in the In-Between","guest":{"name":"Amara Okonjo","role":"Disability Justice Advocate & Poet","avatar":"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80","bio":"Diagnosed with an autoimmune condition at 24, Amara crafts essays and community workshops exploring the intersection of chronic illness, hope, and vulnerability."},"date":"Sep 14, 2026","duration":"52 min","category":"Resilience","summary":"Living with an illness that nobody can see from the outside requires an immense reserve of patience. Amara talks about grief for former abilities, advocating for oneself in medical rooms, and cultivating pockets of daily beauty.","featured":true,"tags":["Chronic Illness","Resilience","Self-Advocacy","Mental Health"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["Managing the grief cycle when a chronic diagnosis alters your life plans.","Communicating boundary needs to friends without feeling like an inconvenience.","How artistic expression serves as non-verbal processing.","Why pacing oneself is the highest form of self-respect."],"transcript":[{"time":"00:00","speaker":"Host (Maya)","text":"Amara Okonjo joins us to speak about invisible illness, and the exhausting reality of having to look 'fine' while enduring severe pain."},{"time":"05:00","speaker":"Amara Okonjo","text":"People always say 'you look so good!'. And you have to smile, even when your cells feel like they are vibrating with fatigue."}]},{"id":"ep-105","number":"105","title":"Navigating Sibling Estrangement: The Taboo Family Conversation","guest":{"name":"Kiran & David Shah","role":"Authors of 'Blood & Boundaries'","avatar":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80","bio":"After four years of complete estrangement, Kiran and David worked through guided mediation to understand the generational patterns that drove them apart."},"date":"Sep 07, 2026","duration":"61 min","category":"Relationships","summary":"Sibling estrangement is one of the least discussed forms of relational grief. In this vulnerable conversation, two brothers unpack the unsaid expectations, childhood roles, and the bumpy road to mutual respect.","featured":false,"tags":["Family Dynamics","Boundaries","Conflict Resolution","Reconciliation"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["The role of parental triangulation in creating sibling rivalry.","When taking a pause in contact is healthier than forced intimacy.","Guidelines for opening a dialogue after years of silence.","Accepting family members as they are, rather than who we wish them to be."],"transcript":[{"time":"00:00","speaker":"Host (Marcus)","text":"Today we have a rare conversation. Two siblings who did not speak for four full years, sharing how they found a path back to honest dialogue."},{"time":"04:30","speaker":"David Shah","text":"We were cast into roles when we were eight years old. I was the 'smart one', he was the 'wild one'. We spent thirty years rebelling against those boxes."}]},{"id":"ep-104","number":"104","title":"Grieving Someone Who Is Still Alive: Memory, Dementia, and Love","guest":{"name":"Hannah Lindqvist","role":"Caregiver, Filmmaker & Speaker","avatar":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80","bio":"Hannah documented her mother's journey through early-onset Alzheimer's in an award-winning independent documentary, giving voice to millions of young caregivers."},"date":"Aug 31, 2026","duration":"58 min","category":"Grief","summary":"Ambiguous loss is a unique kind of heartache. Hannah describes what it feels like to grieve a parent who is physically present but slipping away in memory, and how humor and small sensory rituals sustain her.","featured":true,"tags":["Ambiguous Loss","Caregiving","Dementia","Family Love"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["Defining ambiguous loss and why typical grief rituals often fail to support it.","Finding moments of joy in music, touch, and shared sensory experiences.","Combating caregiver burnout when you feel you cannot take a day off.","The vital importance of community caregiver support groups."],"transcript":[{"time":"00:00","speaker":"Host (Maya)","text":"Caregiving is an extraordinary act of love that often comes with immense isolation. Hannah Lindqvist joins us today."},{"time":"07:15","speaker":"Hannah Lindqvist","text":"There's a guilt in grieving someone who can still hold your hand. But your heart knows that parts of them have already said goodbye."}]},{"id":"ep-103","number":"103","title":"Rebuilding Self-Trust After Toxic Relationships & Gaslighting","guest":{"name":"Tariq Bennett","role":"Relationship Counselor & Men's Mental Health Advocate","avatar":"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80","bio":"Tariq works with survivors of psychological abuse, focusing on restoring intuition, healthy assertion, and dismantling shame in male survivors."},"date":"Aug 24, 2026","duration":"46 min","category":"Identity","summary":"When you have been told repeatedly that your feelings are irrational, your internal compass stops working. Tariq breaks down the step-by-step process of learning to believe yourself again.","featured":false,"tags":["Self-Trust","Gaslighting Recovery","Men's Health","Boundaries"],"spotifyUrl":"https://open.spotify.com","appleUrl":"https://podcasts.apple.com","youtubeId":"dQw4w9WgXcQ","takeaways":["Signs that you are second-guessing your own reality after abuse.","How to reconnect with somatic gut feelings and instinctual cues.","Establishing non-negotiable personal boundaries without apologizing.","De-stigmatizing emotional vulnerability among men."],"transcript":[{"time":"00:00","speaker":"Host (Marcus)","text":"Gaslighting is a buzzword now, but the actual lived experience is terrifying because you lose belief in your own senses. Tariq, welcome."},{"time":"03:45","speaker":"Tariq Bennett","text":"The insidious part of gaslighting isn't just that someone lied to you; it's that you learned to lie to yourself to keep the peace."}]}]`),yi=[`All`,`Mental Health`,`Resilience`,`Grief`,`Relationships`,`Identity`,`Career`],q=[...vi],bi=[...yi];function xi(){q.forEach(e=>{e.category&&!bi.includes(e.category)&&bi.push(e.category)})}xi();async function Si(){if(typeof window>`u`||!window.fetch)return q;try{let e=await fetch(`/api/episodes`);if(e.ok){let t=await e.json();if(Array.isArray(t)&&t.length>0)return q.splice(0,q.length,...t),xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),q}}catch(e){console.warn(`[Backend Client] Failed to fetch /api/episodes, using local dataset:`,e)}return q}typeof window<`u`&&Si();async function Ci(e){let t={...e,id:e.id||`ep-${e.number||Date.now()}`,number:String(e.number).trim()};try{let e=await fetch(`/api/episodes`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});if(e.ok){let t=await e.json(),n=q.findIndex(e=>e.id===t.id||String(e.number)===String(t.number));return n===-1?q.unshift(t):q[n]={...q[n],...t},xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),t}}catch(e){console.error(`[Backend Client] Save failed:`,e)}let n=q.findIndex(e=>e.id===t.id||String(e.number)===String(t.number));return n===-1?q.unshift(t):q[n]={...q[n],...t},xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),t}async function wi(e){try{if((await fetch(`/api/episodes/${e}`,{method:`DELETE`})).ok){let t=q.findIndex(t=>t.id===e||String(t.number)===String(e));if(t!==-1)return q.splice(t,1),xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),!0}}catch(e){console.error(`[Backend Client] Delete failed:`,e)}let t=q.findIndex(t=>t.id===e||String(t.number)===String(e));return t!==-1&&(q.splice(t,1),xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),!0)}async function Ti(){try{await fetch(`/api/episodes/import`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(vi)})}catch(e){console.warn(`Reset to default on server failed:`,e)}q.splice(0,q.length,...JSON.parse(JSON.stringify(vi))),bi.splice(0,bi.length,...yi),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}}))}async function Ei(e){try{let t=JSON.parse(e);return Array.isArray(t)&&t.length>0?(await fetch(`/api/episodes/import`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)}),q.splice(0,q.length,...t),xi(),window.dispatchEvent(new CustomEvent(`care2listen:episodes-updated`,{detail:{episodes:q}})),{success:!0,count:t.length}):{success:!1,error:`JSON must be a non-empty array of episodes.`}}catch(e){return{success:!1,error:e.message}}}function Di(){return JSON.stringify(q,null,2)}function Oi(){let e=document.getElementById(`episode-modal`),t=document.getElementById(`modal-backdrop`),n=document.getElementById(`modal-close`),r=document.getElementById(`modal-body-container`);if(!e||!t||!n||!r)return;function i(){K.to(e,{opacity:0,scale:.96,duration:.25,ease:`power2.in`,onComplete:()=>{e.classList.add(`hidden`),document.body.classList.remove(`modal-open`)}}),K.to(t,{opacity:0,duration:.25,onComplete:()=>t.classList.add(`hidden`)})}n.addEventListener(`click`,i),t.addEventListener(`click`,i),window.addEventListener(`keydown`,t=>{t.key===`Escape`&&!e.classList.contains(`hidden`)&&i()}),window.openEpisodeDetail=function(n){let i=q.find(e=>e.id===n)||q[0];if(!i)return;r.innerHTML=`
      <div class="ep-detail-header">
        <div class="ep-detail-badge-row">
          <span class="badge badge-accent">EPISODE #${i.number}</span>
          <span class="badge badge-category">${i.category}</span>
          <span class="ep-detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${i.duration}
          </span>
          <span class="ep-detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${i.date}
          </span>
        </div>

        <h2 class="ep-detail-title">${i.title}</h2>

        <div class="ep-guest-profile-card">
          <img src="${i.guest.avatar}" alt="${i.guest.name}" class="ep-guest-avatar" />
          <div class="ep-guest-info">
            <h4 class="ep-guest-name">${i.guest.name}</h4>
            <p class="ep-guest-role">${i.guest.role}</p>
            <p class="ep-guest-bio">${i.guest.bio}</p>
          </div>
        </div>

        <div class="ep-action-bar">
          <button id="modal-play-trigger" class="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>Listen to Episode (${i.duration})</span>
          </button>
          
          <button id="modal-copy-link" class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <span>Share</span>
          </button>

          <a href="${i.spotifyUrl}" target="_blank" rel="noopener" class="btn btn-ghost" title="Open in Spotify">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.625.625 0 0 1-.28-1.218c3.81-.872 7.076-.503 9.715 1.118a.623.623 0 0 1 .207.857zm1.224-2.721a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 1 1-.453-1.493c3.632-1.102 8.147-.568 11.233 1.33a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.89 9.38 8.71 6.302 9.645a.936.936 0 1 1-.543-1.791c3.528-1.071 9.409-.861 13.193 1.386a.936.936 0 0 1-1.037 1.628z"/></svg>
            <span>Spotify</span>
          </a>
        </div>
      </div>

      <div class="ep-detail-tabs">
        <button class="modal-tab-btn active" data-tab="overview">Show Notes & Takeaways</button>
        <button class="modal-tab-btn" data-tab="transcript">Interactive Transcript</button>
      </div>

      <div id="tab-overview" class="modal-tab-pane active">
        <div class="ep-section-block">
          <h3 class="ep-section-heading">Episode Summary</h3>
          <p class="ep-summary-text">${i.summary}</p>
        </div>

        <div class="ep-section-block">
          <h3 class="ep-section-heading">Key Topics Covered</h3>
          <ul class="ep-takeaways-list">
            ${i.takeaways.map(e=>`
              <li class="ep-takeaway-item">
                <span class="takeaway-bullet">✦</span>
                <span>${e}</span>
              </li>
            `).join(``)}
          </ul>
        </div>

        <div class="ep-section-block">
          <h3 class="ep-section-heading">Tags & Themes</h3>
          <div class="ep-tags-cloud">
            ${i.tags.map(e=>`<span class="tag-pill">#${e}</span>`).join(``)}
          </div>
        </div>
      </div>

      <div id="tab-transcript" class="modal-tab-pane">
        <div class="transcript-intro">
          <p class="transcript-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            Click any timestamp to jump directly to that point in the podcast audio.
          </p>
        </div>
        <div class="transcript-list">
          ${i.transcript.map(e=>{let[t,n]=e.time.split(`:`).map(Number),r=t*60+(n||0);return`
              <div class="transcript-item" data-time="${r}">
                <button class="transcript-time-btn" data-seek="${r}">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  ${e.time}
                </button>
                <div class="transcript-dialogue">
                  <span class="transcript-speaker">${e.speaker}</span>
                  <p class="transcript-text">${e.text}</p>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `;let a=r.querySelectorAll(`.modal-tab-btn`),o=r.querySelectorAll(`.modal-tab-pane`);a.forEach(e=>{e.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),o.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=r.querySelector(`#tab-${e.dataset.tab}`);t&&t.classList.add(`active`)})}),r.querySelector(`#modal-play-trigger`)?.addEventListener(`click`,()=>{gi.playEpisode(i)});let s=r.querySelector(`#modal-copy-link`);s?.addEventListener(`click`,()=>{navigator.clipboard?.writeText(window.location.origin+`#episodes?id=`+i.id);let e=s.querySelector(`span`);if(e){let t=e.textContent;e.textContent=`Copied to Clipboard!`,setTimeout(()=>e.textContent=t,2500)}}),r.querySelectorAll(`[data-seek]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseFloat(e.dataset.seek);gi.currentEpisode?.id!==i.id&&gi.playEpisode(i),gi.seek(t),gi.isPlaying||gi.togglePlay()})}),t.classList.remove(`hidden`),e.classList.remove(`hidden`),document.body.classList.add(`modal-open`),K.set(t,{opacity:0}),K.to(t,{opacity:1,duration:.3}),K.set(e,{opacity:0,scale:.95,y:20}),K.to(e,{opacity:1,scale:1,y:0,duration:.35,ease:`power3.out`})}}var ki=[{id:`review-1`,author:`Elena Vasquez`,role:`ER Nurse & Lifelong Listener`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80`,quote:`After grueling 14-hour hospital shifts, listening to Care 2 Listen is the only thing that brings my nervous system down from red alert. It feels like someone sitting next to you and handing you a cup of tea without demanding anything back.`,rating:5,city:`Chicago, IL`,episodeMentioned:`Ep #108`},{id:`review-2`,author:`Marcus Chen`,role:`Architect & Father`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80`,quote:`Episode 105 on sibling estrangement helped me make the first call to my brother in five years. We wept for an hour. Thank you Maya and Marcus for having the courage to host conversations nobody else will touch.`,rating:5,city:`Vancouver, BC`,episodeMentioned:`Ep #105`},{id:`review-3`,author:`Sophie Dubois`,role:`Graduate Student in Bioethics`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,quote:`This isn't another generic self-help podcast where an influencer tells you to wake up at 5 AM. It's raw, tender, and deeply intelligent. Every single episode teaches me how to be a better friend.`,rating:5,city:`Montréal, QC`,episodeMentioned:`Ep #106`},{id:`review-4`,author:`Darius Washington`,role:`Community Organizer`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80`,quote:`Care 2 Listen treats listeners with dignity. The sound design is warm, the questions are profound, and the absence of performative posturing is such a breath of fresh air.`,rating:5,city:`Atlanta, GA`,episodeMentioned:`Ep #103`}],Ai=[{id:`post-1`,platform:`instagram`,handle:`@care2listenpodcast`,time:`2 hours ago`,badge:`EPISODE SNIPPET`,quote:`“The impulse to give advice is often just our anxiety wanting to turn off someone else’s pain because it feels too loud inside our own chest.”`,likes:`2,419`,comments:`148`,image:`https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80`},{id:`post-2`,platform:`tiktok`,handle:`@care2listen`,time:`Yesterday`,badge:`BEHIND THE MIC`,quote:`Maya Lin breaks down the 3-second pause technique that prevents arguments from escalating into relationship walls.`,likes:`48.2K`,comments:`892`,image:`https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80`},{id:`post-3`,platform:`twitter`,handle:`@care2listenpod`,time:`2 days ago`,badge:`LISTENER NOTE`,quote:`“I used to think being strong meant holding everything together with white knuckles. Listening to this podcast taught me strength is unclamping your fists.”`,likes:`1,102`,comments:`94`,image:`https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80`}],ji=[{q:`How long is a recording session?`,a:`Standard recordings run between 60 to 75 minutes. We always schedule a 15-minute soundcheck and grounding chat beforehand to help you settle in comfortably before the mics go live.`},{q:`Do I need professional studio audio equipment?`,a:`No! If recording remotely, all you need is a quiet, carpeted room, wired headphones with a built-in microphone (or any basic USB mic), and a stable internet connection. If you're near our Seattle or New York recording studios, we would love to host you in person.`},{q:`Will I get to review the episode before it is published?`,a:`Yes. We operate on a 'dignity first' editorial model. We send you an advance private master cut 7 days before public release. You can flag anything that feels uncomfortable, and our sound engineer will respectfully trim it.`},{q:`Is there monetary compensation for guests?`,a:`While podcast interviews are generally unpaid, we provide all guests with high-definition promotional video cut-downs, a dedicated guest bio page, social amplification to our 50K+ audience, and direct backlinks to your book, non-profit, or practice.`},{q:`Can I remain anonymous or use a pseudonym?`,a:`Absolutely. We have supported several guests who chose pseudonyms or voice modulation to protect their safety, privacy, or family relationships. We honor your boundaries unconditionally.`}];function Mi(e){let t=q[0];e.innerHTML=`
    <!-- SECTION 001: HERO SECTION WITH SCROLL-DRIVEN IMAGE SWITCH -->
    <section class="swiss-section hero-swiss-section" data-section="001">
      <div class="swiss-gutter">
        <span class="gutter-num">001</span>
        <span class="gutter-dash">-001</span>
      </div>

      <div class="swiss-hero-grid">
        <div class="hero-left-col">
          <div class="hero-title-group">
            <h1 class="hero-giant-title">
              STORIES<br/>
              MADE<br/>
              <span class="text-vermilion">HEALING.</span>
            </h1>

            <div class="hero-dash-rule">
              <span class="dash-text">-001</span>
              <span class="dash-line"></span>
            </div>
          </div>

          <div class="hero-lead-group">
            <p class="hero-editorial-bio">
              An independent audio sanctuary shaping honest conversations, digital experiences, and visual culture.
            </p>

            <div class="hero-meta-block">
              <span class="meta-label">SELECTED WORK / 2026</span>
              <span class="meta-tags">SOMATIC · GRIEF · IDENTITY · HUMAN CONDITION</span>
            </div>

            <div class="hero-actions-row">
              <a href="episodes.html" class="link-editorial-arrow">View Selected Work ↘</a>
              <button id="hero-listen-trigger" class="btn-editorial-pill">
                <span class="play-triangle">▶</span>
                <span>Listen to Latest (Ep #${t.number})</span>
              </button>
            </div>
          </div>
        </div>

        <div class="hero-right-cover">
          <div class="collage-top-bar">
            <span class="crosshair-mark">+</span>
            <span class="studio-tag" id="hero-studio-tag">AW / 26 — STUDIO 01</span>
            <span class="crosshair-mark right-mark">+</span>
          </div>

          <div class="hero-cover-visual">
            <div class="hero-cover-img-wrap">
              <!-- Initial Image: Meaningful Listening with Dr. Elena -->
              <img src="/assets/hero_meaningful_listening.jpg" alt="Care 2 Listen soundstage — empathetic dialogue and active listening" class="hero-cover-img hero-img-listening" />
              <!-- Scroll Switch Image: Cinematic Soundstage Studio -->
              <img src="/assets/hero_studio_wide.jpg" alt="Care 2 Listen recording studio soundstage" class="hero-cover-img hero-img-studio" />
            </div>
            <div class="hero-yellow-strip"></div>

            <div class="hero-cover-coords">
              <span class="coord-text">47.6062° N<br/>122.3321° W</span>
              <span class="crosshair-mark">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 002: MANIFESTO & PROCESS -->
    <section class="swiss-section manifesto-swiss-section" data-section="002">
      <div class="swiss-gutter">
        <span class="gutter-num">002</span>
      </div>

      <div class="manifesto-inner-grid">
        <div class="manifesto-headline-col">
          <h2 class="manifesto-giant-headline">
            WE CREATE IDENTITIES /<br/>
            DIGITAL EXPERIENCES /<br/>
            VISUAL CULTURE /<br/>
            HONEST CONVERSATIONS.
          </h2>
        </div>

        <div class="manifesto-desc-col">
          <p class="manifesto-desc-text">
            Care 2 Listen operates as a weekly sonic laboratory exploring grief, healing, trauma, and identity. We believe listening is an intentional craft — stripping away corporate gloss to reveal raw human truths.
          </p>
          <a href="about.html" class="link-editorial-arrow" style="margin-top: 20px; display: inline-block;">Our Complete Philosophy ↗</a>
        </div>

        <!-- 4 Step Process Horizontal Bar -->
        <div class="manifesto-process-bar">
          <div class="process-col">
            <span class="p-step-num">01 / INTAKE</span>
            <p class="p-step-desc">Identifying unresolved narratives through confidential community submissions.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">02 / DIALOGUE</span>
            <p class="p-step-desc">Unscripted studio sessions in Seattle and Brooklyn with zero corporate filters.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">03 / HARMONY</span>
            <p class="p-step-desc">Binaural spatial mastering designed for intimate headphone contemplation.</p>
          </div>
          <div class="process-col">
            <span class="p-step-num">04 / DISPATCH</span>
            <p class="p-step-desc">Weekly worldwide broadcast accompanied by clinical toolkits and crisis support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 003: 4 EDITORIAL VERTICAL COLUMNS -->
    <section class="swiss-section columns-swiss-section" data-section="003">
      <div class="swiss-gutter">
        <span class="gutter-num">003</span>
      </div>

      <div class="columns-quad-grid">
        <!-- COL 01: ARCHIVE -->
        <div class="quad-col col-archive">
          <div class="col-head">
            <span class="col-idx">01</span>
            <span class="col-label">ARCHIVE // 108 EPS</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_01_arch.jpg" alt="Episode Archive" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title">DEEP CATALOGUE</h3>
            <p class="col-copy">Over 108 recorded hours spanning ambiguous loss, sibling estrangement, and creative resurrection.</p>
            <a href="episodes.html" class="col-action-link">Explore Episodes ⟶</a>
          </div>
        </div>

        <!-- COL 02: GUESTS (COBALT BLUE CARD) -->
        <div class="quad-col col-blue">
          <div class="col-head">
            <span class="col-idx">02</span>
            <span class="col-label">VOICES // 2026</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_02_aura.jpg" alt="Guests spotlight" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title text-white">GUEST ROSTER</h3>
            <p class="col-copy text-white-dim">Psychologists, poets, somatic healers, and everyday people with extraordinary courage.</p>
            <a href="guests.html" class="col-action-link link-white">Meet The Guests ⟶</a>
          </div>
        </div>

        <!-- COL 03: MISSION (VERMILION RED CARD) -->
        <div class="quad-col col-vermilion">
          <div class="col-head">
            <span class="col-idx">03</span>
            <span class="col-label">PLEDGE // 24/7</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_03_cutout.jpg" alt="Our Mission" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title text-white">ETHICAL CARE</h3>
            <p class="col-copy text-white-dim">A radical pledge to never sensationalize trauma or exploit human vulnerability for algorithms.</p>
            <a href="mission.html" class="col-action-link link-white">Read Our Mission ⟶</a>
          </div>
        </div>

        <!-- COL 04: STUDIO/HOSTS (ACID YELLOW CARD) -->
        <div class="quad-col col-hosts">
          <div class="col-head">
            <span class="col-idx">04</span>
            <span class="col-label">SOUNDSTAGE</span>
          </div>

          <div class="col-media-frame">
            <img src="/assets/card_04_zine.jpg" alt="Soundstage & Hosts" class="col-img" />
          </div>

          <div class="col-content">
            <h3 class="col-title">THE HOSTS</h3>
            <p class="col-copy">Maya Lin and Marcus Vance bring clinical nuance and investigative warmth to the broadcast desk.</p>
            <a href="hosts.html" class="col-action-link">Meet Hosts ⟶</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 004: FULL-BLEED SLOGAN STRIP -->
    <section class="swiss-section banner-swiss-section" data-section="004">
      <div class="swiss-gutter dark-gutter">
        <span class="gutter-num" style="color: #fff;">004</span>
      </div>

      <div class="banner-slogan-wrap">
        <div class="banner-slogan-top">
          <span class="banner-giant-text">
            LISTEN ─ HEAL ─ GROW ─ CARE 2 LISTEN ─ LISTEN ─ HEAL ─ GROW
          </span>
        </div>
        <div class="banner-sub-meta">
          <span>BROADCAST SOUNDSTAGE // SEATTLE WA 98101</span>
          <span>DUMBO BROOKLYN 11201</span>
          <span>108 EPISODES RELEASED // 24/7 CRISIS SUPPORT</span>
        </div>
      </div>
    </section>

    <!-- SECTION 005: CALL TO ACTION & STUDIO CONTACT STRIP -->
    <section class="swiss-section cta-swiss-section" data-section="005">
      <div class="swiss-gutter">
        <span class="gutter-num">005</span>
      </div>

      <div class="cta-inner-grid">
        <!-- Col 1: B&W Soundstage Portrait -->
        <div class="cta-portrait-col">
          <span class="crosshair-mark">+</span>
          <img src="/assets/card_05_bw.jpg" alt="Studio Soundstage Portrait" class="cta-bw-img" />
          <div class="portrait-caption">STUDIO DESK // 2026</div>
        </div>

        <!-- Col 2: Headline & CTA Button -->
        <div class="cta-lead-col">
          <span class="cta-mini-label">HAVE A STORY TO SHARE?</span>
          <h2 class="cta-headline">
            LET'S BUILD<br/>
            SOMETHING<br/>
            EXTRAORDINARY<br/>
            TOGETHER.
          </h2>
          <a href="become-a-guest.html" class="link-start-project">Apply to Be a Guest on Care 2 Listen ↗</a>
        </div>

        <!-- Col 3: Studio Directory & Socials -->
        <div class="cta-info-col">
          <div class="info-block">
            <span class="info-lbl">SEATTLE STUDIO (PRIMARY)</span>
            <p class="info-val">Pike Place Soundstage<br/>Seattle, WA 98101</p>
          </div>

          <div class="info-block">
            <span class="info-lbl">BROOKLYN SOUNDSTAGE</span>
            <p class="info-val">DUMBO Water Street<br/>Brooklyn, NY 11201</p>
          </div>

          <div class="info-block">
            <span class="info-lbl">DIRECT PRODUCTION INQUIRIES</span>
            <p class="info-val"><a href="mailto:hello@care2listen.com">hello@care2listen.com</a></p>
          </div>

          <div class="info-social-block">
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">INSTAGRAM ↗</a>
            <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link">YOUTUBE ↗</a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener" class="social-link">SPOTIFY ↗</a>
            <a href="https://podcasts.apple.com" target="_blank" rel="noopener" class="social-link">APPLE ↗</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 006: MASTER SWISS BRUTALIST FOOTER -->
    <footer class="swiss-section footer-swiss-section" data-section="006" role="contentinfo">
      <div class="swiss-gutter">
        <span class="gutter-num">006</span>
        <span class="gutter-label">FOOTER</span>
      </div>

      <div class="footer-inner-content">
        <!-- Top Newsletter Strip -->
        <div class="footer-newsletter-bar">
          <div class="fn-left">
            <span class="fn-index">01 // WEEKLY REFLECTIONS</span>
            <h3 class="fn-heading">SUBSCRIBE TO THE TUESDAY GROUNDING LETTER</h3>
            <p class="fn-sub">Curated episode deep-dives, somatic prompts, and certified mental health resources delivered weekly to 34,000+ readers.</p>
          </div>
          <div class="fn-right">
            <form id="footer-nl-form" class="swiss-form-inline">
              <input type="email" id="footer-nl-email" required placeholder="ENTER YOUR EMAIL ADDRESS..." class="swiss-input" />
              <button type="submit" id="footer-nl-btn" class="btn-editorial-pill">SUBSCRIBE ⟶</button>
            </form>
            <span id="footer-nl-msg" class="nl-feedback-text hidden">✓ Subscribed! Welcome to our reflection network.</span>
          </div>
        </div>

        <!-- 4-Column Swiss Sitemap Grid -->
        <div class="footer-sitemap-grid">
          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">01 //</span>
            <h4 class="sitemap-col-title">THE PODCAST</h4>
            <ul class="sitemap-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="episodes.html">Episodes Archive</a></li>
              <li><a href="hosts.html">Meet The Hosts</a></li>
              <li><a href="guests.html">Guest Directory</a></li>
              <li><a href="videos.html">4K Video Channel</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">02 //</span>
            <h4 class="sitemap-col-title">PHILOSOPHY</h4>
            <ul class="sitemap-links">
              <li><a href="about.html">Our Story & Ethos</a></li>
              <li><a href="mission.html">Mission & 4 Pillars</a></li>
              <li><a href="mission.html#pledge">Ethical Broadcast Pledge</a></li>
              <li><a href="become-a-guest.html">Become a Guest</a></li>
              <li><a href="become-a-guest.html#faq">Guest FAQ Accordion</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">03 //</span>
            <h4 class="sitemap-col-title">SUPPORT & TOOLS</h4>
            <ul class="sitemap-links">
              <li><a href="resources.html">24/7 Crisis Helplines</a></li>
              <li><a href="resources.html#books">Curated Reading List</a></li>
              <li><a href="resources.html#apps">Recommended Wellness Apps</a></li>
              <li><a href="community.html">Listener Testimonials</a></li>
              <li><a href="community.html#social">Community Voices</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">04 //</span>
            <h4 class="sitemap-col-title">STUDIOS & INQUIRIES</h4>
            <ul class="sitemap-links">
              <li><a href="contact.html">Seattle Soundstage</a></li>
              <li><a href="contact.html">Brooklyn Soundstage</a></li>
              <li><a href="mailto:press@care2listen.com">Press & Media</a></li>
              <li><a href="mailto:hello@care2listen.com">Listener Inquiries</a></li>
              <li><a href="contact.html">Send Us a Direct Note ↗</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Technical Meta Bar -->
        <div class="footer-meta-bottom-bar">
          <div class="meta-copy-cell">
            <strong>© 2026 CARE 2 LISTEN PODCAST PRACTICE.</strong>
            <span>AN INDEPENDENT BROADCAST LABORATORY. ALL RIGHTS RESERVED.</span>
          </div>

          <div class="meta-clinical-disclaimer">
            NON-CLINICAL EDUCATIONAL STORYTELLING. IF IN ACTIVE DISTRESS, DIAL OR TEXT <strong>988</strong> FOR FREE 24/7 CRISIS SUPPORT.
          </div>

          <div class="meta-actions-cell">
            <span class="meta-coords">SEATTLE 47.6062° N, 122.3321° W</span>
            <button id="back-to-top-btn" class="btn-back-to-top" title="Scroll to top of page">TOP ↑</button>
          </div>
        </div>
      </div>
    </footer>
  `,e.querySelector(`#hero-listen-trigger`)?.addEventListener(`click`,()=>{gi.playEpisode(t)});let n=e.querySelector(`#footer-nl-form`),r=e.querySelector(`#footer-nl-email`),i=e.querySelector(`#footer-nl-btn`),a=e.querySelector(`#footer-nl-msg`);n?.addEventListener(`submit`,e=>{e.preventDefault(),r.value.includes(`@`)&&(i.textContent=`SUBSCRIBED!`,a.classList.remove(`hidden`),r.value=``)}),e.querySelector(`#back-to-top-btn`)?.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})})}function Ni(e){e.innerHTML=`
    <section class="swiss-section" data-section="ABOUT">
      <div class="swiss-gutter">
        <span class="gutter-num">002</span>
        <span class="gutter-label">ORIGIN</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">002 // OUR ORIGIN STORY</span>
        <h1 class="view-giant-headline">THE STORY BEHIND CARE 2 LISTEN.</h1>
        <p class="view-lead-copy">Care 2 Listen started with a simple conviction: people don't need advice — they need to be heard. In a world full of algorithmic noise, we wanted to build something quieter. Something honest.</p>

        <!-- Manifesto Split Block -->
        <div class="about-manifesto-grid">
          <div class="manifesto-left-copy">
            <h2 class="manifesto-callout">
              “WHAT BEGAN AS A LATE-NIGHT CONVERSATION BETWEEN TWO FRIENDS HAS GROWN INTO A GLOBAL AUDIO SANCTUARY.”
            </h2>
            <p class="manifesto-p">
              We're not therapists giving clinical lectures. We're not influencers selling productivity hacks. We are listeners — and we believe that empathetic listening is one of the most powerful and neglected forms of care in the modern world.
            </p>
            <p class="manifesto-p">
              Every week, guests from all walks of life sit down at our microphones in Seattle and Brooklyn to share what people usually keep quiet: grief, ambiguous loss, sibling estrangement, chronic illness, career rebirth, and the messy, beautiful reality of being human.
            </p>
          </div>

          <div class="manifesto-right-media">
            <div class="manifesto-photo-frame">
              <span class="crosshair-mark top-left">+</span>
              <span class="crosshair-mark top-right">+</span>
              <img src="/assets/hero_editorial_model.jpg" alt="Care 2 Listen studio ethos" class="manifesto-img" />
              <div class="manifesto-caption">AW / 26 — SEATTLE SOUNDSTAGE ARCHIVE</div>
            </div>
          </div>
        </div>

        <!-- How It Started: Milestone Timeline -->
        <div class="timeline-section-swiss">
          <div class="section-title-bar">
            <span class="section-idx">01 // TIMELINE</span>
            <h3 class="section-heading-sm">MILESTONES IN MINDFUL LISTENING</h3>
          </div>

          <div class="timeline-swiss-list">
            <div class="timeline-entry">
              <div class="t-year">2022</div>
              <div class="t-content">
                <strong>THE BASEMENT RECORDINGS (SEATTLE)</strong>
                <p>Maya Lin and Marcus Vance record Episode #001 on two borrowed Shure mics in a basement apartment in Seattle.</p>
              </div>
            </div>
            <div class="timeline-entry">
              <div class="t-year">2023</div>
              <div class="t-content">
                <strong>10,000 MONTHLY LISTENERS</strong>
                <p>Episode #24 on caregiver burnout sparks international resonance, establishing our permanent weekly broadcast format.</p>
              </div>
            </div>
            <div class="timeline-entry">
              <div class="t-year">2025</div>
              <div class="t-content">
                <strong>BROADCAST STUDIO LAUNCH & 4K VIDEO</strong>
                <p>Constructed our permanent acoustic soundstage in Seattle's Market District and expanded into full 4K multicam video.</p>
              </div>
            </div>
            <div class="timeline-entry current-entry">
              <div class="t-year">2026</div>
              <div class="t-content">
                <strong>108+ EPISODES & 30+ COUNTRIES</strong>
                <p>Surpassed 50,000 monthly listeners and launched our 24/7 crisis support resource directory.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Core Values Grid -->
        <div class="values-section-swiss">
          <div class="section-title-bar">
            <span class="section-idx">02 // ETHOS</span>
            <h3 class="section-heading-sm">OUR FOUR CORE VALUES</h3>
          </div>

          <div class="values-quad-grid">
            <div class="val-card">
              <span class="val-num">01</span>
              <h4>EMPATHY FIRST</h4>
              <p>Every guest is treated with reverence and deep hospitality. No interruptions, no judgment.</p>
            </div>
            <div class="val-card highlight-val">
              <span class="val-num">02</span>
              <h4>UNFILTERED HONESTY</h4>
              <p>No corporate scripts, no toxic positivity. We lean into the unresolved, authentic spaces of life.</p>
            </div>
            <div class="val-card">
              <span class="val-num">03</span>
              <h4>INCLUSIVE SPACE</h4>
              <p>All backgrounds, all stories welcome. Healing expands when diverse voices hold the mic.</p>
            </div>
            <div class="val-card">
              <span class="val-num">04</span>
              <h4>COMMUNITY OVER CONTENT</h4>
              <p>We are building enduring human relationships that extend far beyond podcast algorithms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Pi(e){e.innerHTML=`
    <section class="swiss-section" data-section="MISSION">
      <div class="swiss-gutter">
        <span class="gutter-num">003</span>
        <span class="gutter-label">PURPOSE</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">003 // OUR NORTH STAR</span>
        <h1 class="view-giant-headline">OUR MISSION.</h1>
        
        <!-- Big Mission Statement -->
        <div class="mission-statement-card">
          <p class="mission-giant-quote">
            “TO CREATE A SAFE SPACE WHERE PEOPLE FEEL TRULY HEARD — AND TO REMIND THE WORLD THAT LISTENING IS ONE OF THE MOST POWERFUL FORMS OF CARE.”
          </p>
        </div>

        <!-- Impact Stats Grid -->
        <div class="impact-stats-grid">
          <div class="impact-stat-box">
            <span class="stat-giant-num">108+</span>
            <span class="stat-unit-lbl">EPISODES RELEASED</span>
          </div>
          <div class="impact-stat-box highlight-stat">
            <span class="stat-giant-num">50K+</span>
            <span class="stat-unit-lbl">MONTHLY LISTENERS</span>
          </div>
          <div class="impact-stat-box">
            <span class="stat-giant-num">30+</span>
            <span class="stat-unit-lbl">COUNTRIES REACHED</span>
          </div>
          <div class="impact-stat-box">
            <span class="stat-giant-num">100%</span>
            <span class="stat-unit-lbl">LISTENER SUPPORTED</span>
          </div>
        </div>

        <!-- The 4 Mission Pillars -->
        <div class="pillars-section-swiss">
          <div class="section-title-bar">
            <span class="section-idx">PILLARS // 04</span>
            <h3 class="section-heading-sm">FOUR PILLARS GUIDING EVERY RECORDING</h3>
          </div>

          <div class="pillars-quad-grid">
            <div class="pillar-box">
              <span class="p-index">01</span>
              <h3 class="p-title">BREAK THE STIGMA</h3>
              <p class="p-desc">Normalize open, honest dialogues around mental health, depression, loss, and trauma without sensationalism or shame.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">02</span>
              <h3 class="p-title">AMPLIFY UNHEARD VOICES</h3>
              <p class="p-desc">Provide a high-production broadcast platform for caregivers, survivors, and neurodivergent storytellers who are often overlooked.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">03</span>
              <h3 class="p-title">BUILD GENUINE COMMUNITY</h3>
              <p class="p-desc">Transform isolated digital listeners into an active, compassionate network rooted in mutual empathy and vulnerability.</p>
            </div>
            <div class="pillar-box">
              <span class="p-index">04</span>
              <h3 class="p-title">PRACTICAL EMPOWERMENT</h3>
              <p class="p-desc">Anchor personal stories in practical, certified mental health resources, vetted literature, and verified crisis helplines.</p>
            </div>
          </div>
        </div>

        <!-- Ethical Pledge Banner -->
        <div class="ethical-pledge-banner">
          <h4 class="pledge-title">THE CARE 2 LISTEN ETHICAL BROADCAST PLEDGE</h4>
          <p class="pledge-text">
            We pledge to never exploit personal trauma for viral engagement. Every guest maintains editorial agency over their story, receives a pre-broadcast preview cut, and can pause or redact sensitive audio without hesitation.
          </p>
        </div>
      </div>
    </section>
  `}var Fi=[{id:`maya-lin`,name:`Maya Lin`,title:`Co-Host & Executive Producer`,pronouns:`she/her`,avatar:`https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80`,quote:`True listening is not waiting for your turn to speak. It is creating a room where the other person finally feels safe enough to put down their luggage.`,bio:`Maya spent over a decade as an investigative audio journalist uncovering overlooked stories across North America and Europe. After losing a childhood friend to suicide, Maya pivoted her career toward empathetic storytelling and trauma-informed dialogue. She founded Care 2 Listen with Marcus to build a sanctuary where vulnerability is celebrated as courage.`,favoriteEpisode:{epNumber:`108`,title:`Learning to Sit With the Silence`,reason:`It captured the exact essence of why I left fast-paced daily news: some stories are not headlines to be dissected, but hearts to be held.`},funFacts:[`Cannot record an episode without a mug of hot chamomile tea and oat milk.`,`Lives in Seattle with an adopted greyhound named Echo.`,`Reads at least 3 poetry collections every single month.`],gear:`Shure SM7B Mic • Cloudlifter CL-1 • Universal Audio Apollo Twin`,socials:{instagram:`https://instagram.com`,twitter:`https://twitter.com`,linkedin:`https://linkedin.com`,substack:`https://substack.com`}},{id:`marcus-vance`,name:`Marcus Vance, LMFT`,title:`Co-Host & Relational Clinician`,pronouns:`he/him`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80`,quote:`People do not heal in isolation. We heal in the presence of someone whose eyes tell us: 'I see all of you, and I am not walking away.'`,bio:`Marcus is a licensed Marriage & Family Therapist who has worked with over 1,200 individuals and couples navigating grief, relational repair, and systemic burnout. Known for his warm, grounded presence, Marcus brings clinical depth and gentle humor to difficult conversations, stripping away therapy jargon to make emotional wellness genuinely accessible.`,favoriteEpisode:{epNumber:`105`,title:`Navigating Sibling Estrangement`,reason:`Watching two estranged brothers lower their armor in real time in our studio brought tears to everyone in the booth.`},funFacts:[`Former collegiate jazz bassist before training in clinical psychology.`,`Collects mid-century vinyl records and vintage mechanical wristwatches.`,`Believes 20 minutes of daily barefoot walking resets any nervous system.`],gear:`Electro-Voice RE20 • FetHead • Rødecaster Pro II`,socials:{instagram:`https://instagram.com`,twitter:`https://twitter.com`,linkedin:`https://linkedin.com`}}];function Ii(e){e.innerHTML=`
    <section class="swiss-section" data-section="HOSTS">
      <div class="swiss-gutter">
        <span class="gutter-num">004</span>
        <span class="gutter-label">VOICES</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">004 // MEET THE CO-HOSTS</span>
        <h1 class="view-giant-headline">MEET THE VOICES BEHIND THE MIC.</h1>
        <p class="view-lead-copy">Maya Lin and Marcus Vance bring clinical depth, investigative rigor, and deep human hospitality to the studio.</p>

        <div class="hosts-deep-grid">
          ${Fi.map((e,t)=>`
            <div class="host-profile-block">
              <div class="host-profile-header">
                <span class="host-num">0${t+1} // ${e.pronouns.toUpperCase()}</span>
                <span class="host-location-spec">SEATTLE SOUNDSTAGE // 2026</span>
              </div>

              <div class="host-profile-split">
                <div class="host-photo-col">
                  <div class="host-frame">
                    <img src="${e.avatar}" alt="${e.name}" class="host-img-portrait" />
                    <span class="crosshair-mark top-right">+</span>
                  </div>
                </div>

                <div class="host-bio-col">
                  <h2 class="host-fullname">${e.name.toUpperCase()}</h2>
                  <span class="host-title-role">${e.title}</span>

                  <blockquote class="host-credo-quote">
                    “${e.quote}”
                  </blockquote>

                  <p class="host-full-bio-text">${e.bio}</p>

                  <!-- Favorite Episode Box with direct Play button -->
                  <div class="host-fav-episode-card">
                    <div class="fav-tag">FAVORITE EPISODE PICK</div>
                    <div class="fav-ep-title">EP #${e.favoriteEpisode.epNumber} — “${e.favoriteEpisode.title}”</div>
                    <p class="fav-reason">${e.favoriteEpisode.reason}</p>
                    <button class="btn-play-fav" data-fav-ep="ep-${e.favoriteEpisode.epNumber}">
                      ▶ PLAY EPISODE #${e.favoriteEpisode.epNumber}
                    </button>
                  </div>

                  <!-- Fun Facts & Behind the scenes -->
                  <div class="host-trivia-section">
                    <h4 class="trivia-title">BEHIND THE SCENES RITUALS</h4>
                    <ul class="trivia-ul">
                      ${e.funFacts.map(e=>`<li><span class="bullet-cross">+</span> ${e}</li>`).join(``)}
                    </ul>
                  </div>

                  <!-- Gear Spec -->
                  <div class="host-gear-panel">
                    <span class="gear-tag">STUDIO HARDWARE:</span>
                    <span class="gear-spec">${e.gear}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `,e.querySelectorAll(`[data-fav-ep]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=q.find(t=>t.id===e.dataset.favEp);t&&gi.playEpisode(t)})})}function Li(e){let t=`All`,n=``,r=`newest`,i=!0,a=null;function o(e){a&&=(a.revert(),null);let t=e.querySelector(`#ep-hover-preview`),n=e.querySelector(`.ep-table-body`),r=e.querySelectorAll(`.ep-table-row`);t&&n&&r.length!==0&&(a=K.context(()=>{let e=t.querySelector(`#ep-preview-img`),i=t.querySelector(`#ep-preview-badge`),a=t.querySelector(`#ep-preview-guest`),o=t.querySelector(`#ep-preview-role`),s=t.querySelector(`.ep-hover-preview-card`);K.matchMedia().add(`(hover: hover) and (pointer: fine)`,()=>{let c=K.quickTo(t,`x`,{duration:.38,ease:`power3.out`}),l=K.quickTo(t,`y`,{duration:.38,ease:`power3.out`}),u=K.quickTo(t,`rotation`,{duration:.5,ease:`power3.out`}),d=!1,f=0,p=null;K.set(t,{scale:.85,opacity:0,rotation:0,transformOrigin:`center center`,visibility:`hidden`});let m=(e,t)=>{let n=e+26;n+260>window.innerWidth-20&&(n=e-260-26);let r=t-118,i=window.innerHeight-235-88;return r>i&&(r=i),r<60&&(r=60),{targetX:n,targetY:r}},h=e=>{let t=e.clientX-f;f=e.clientX;let n=Math.max(-10,Math.min(10,t*.45));u(n),clearTimeout(p),p=setTimeout(()=>{u(0)},110);let{targetX:r,targetY:i}=m(e.clientX,e.clientY);c(r),l(i)};r.forEach(n=>{n.addEventListener(`mouseenter`,r=>{let c=n.dataset.previewImg,l=n.dataset.previewNum,u=n.dataset.previewTopic,p=n.dataset.previewGuest,g=n.dataset.previewRole;if(e&&c&&e.getAttribute(`src`)!==c&&(e.src=c),i&&(i.textContent=`EP // ${l} • ${u}`),a&&(a.textContent=p),o&&(o.textContent=g),d)e&&K.fromTo(e,{scale:1.08,opacity:.65},{scale:1,opacity:1,duration:.26,ease:`power2.out`,overwrite:`auto`}),s&&K.fromTo(s,{y:-3},{y:0,duration:.22,ease:`power2.out`,overwrite:`auto`});else{f=r.clientX;let{targetX:n,targetY:i}=m(r.clientX,r.clientY);K.set(t,{x:n,y:i,rotation:0,visibility:`visible`}),K.to(t,{scale:1,opacity:1,duration:.32,ease:`power2.out`,overwrite:`auto`}),e&&K.fromTo(e,{scale:1.15,filter:`grayscale(25%)`},{scale:1,filter:`grayscale(0%)`,duration:.42,ease:`power2.out`,overwrite:`auto`}),d=!0}h(r)}),n.addEventListener(`mousemove`,e=>{h(e)})});let g=()=>{d&&(d=!1,clearTimeout(p),K.to(t,{scale:.85,opacity:0,rotation:0,duration:.22,ease:`power2.in`,overwrite:`auto`,onComplete:()=>{K.set(t,{visibility:`hidden`})}}))};n.addEventListener(`mouseleave`,g),window.addEventListener(`scroll`,g,{passive:!0})})},e))}function s(){let s=q.filter(e=>{let r=t===`All`||e.category===t,i=n.toLowerCase().trim(),a=!i||e.title.toLowerCase().includes(i)||e.guest.name.toLowerCase().includes(i)||e.summary.toLowerCase().includes(i)||e.tags.some(e=>e.toLowerCase().includes(i));return r&&a});r===`newest`?s.sort((e,t)=>parseInt(t.number,10)-parseInt(e.number,10)):r===`guest`&&s.sort((e,t)=>e.guest.name.localeCompare(t.guest.name));let c=e.querySelector(`#episodes-output-container`);if(c){if(s.length===0){a&&=(a.revert(),null),c.innerHTML=`
        <div class="empty-state-swiss">
          <div class="empty-tag">00 // NO RESULTS</div>
          <h3>NO EPISODES FOUND MATCHING "${n.toUpperCase()}"</h3>
          <p>Try searching another keyword or reset the category filter.</p>
        </div>
      `;return}i?(c.innerHTML=`
        <div class="episodes-swiss-table">
          <div class="ep-table-header">
            <div class="ep-cell ep-cell-num">INDEX</div>
            <div class="ep-cell ep-cell-title">EPISODE / GUEST</div>
            <div class="ep-cell ep-cell-category">TOPIC</div>
            <div class="ep-cell ep-cell-duration">LENGTH</div>
            <div class="ep-cell ep-cell-date">RELEASED</div>
            <div class="ep-cell ep-cell-actions">ACTION</div>
          </div>
          <div class="ep-table-body">
            ${s.map(e=>`
              <div class="ep-table-row"
                   data-epid="${e.id}"
                   data-preview-img="${e.guest?.avatar||`/assets/hero_meaningful_listening.jpg`}"
                   data-preview-num="${e.number}"
                   data-preview-topic="${e.category.toUpperCase()}"
                   data-preview-guest="${e.guest?.name||``}"
                   data-preview-role="${e.guest?.role||``}"
              >
                <div class="ep-cell ep-cell-num">EP // ${e.number}</div>
                <div class="ep-cell ep-cell-title">
                  <strong>${e.title}</strong>
                  <span class="ep-guest-sub">${e.guest.name} — ${e.guest.role}</span>
                </div>
                <div class="ep-cell ep-cell-category"><span class="swiss-pill">${e.category.toUpperCase()}</span></div>
                <div class="ep-cell ep-cell-duration">${e.duration}</div>
                <div class="ep-cell ep-cell-date">${e.date}</div>
                <div class="ep-cell ep-cell-actions">
                  <button class="btn-swiss-play" data-play-ep="${e.id}">▶ PLAY</button>
                  <button class="btn-swiss-notes" data-notes-ep="${e.id}">NOTES ↗</button>
                </div>
              </div>
            `).join(``)}
          </div>

          <!-- GSAP FLOATING HOVER PREVIEW CARD -->
          <div class="ep-hover-preview-wrap" id="ep-hover-preview" aria-hidden="true">
            <div class="ep-hover-preview-card">
              <div class="ep-hover-preview-top">
                <span class="ep-hover-badge" id="ep-preview-badge">EP // 108 • MENTAL HEALTH</span>
                <span class="ep-hover-live"><span class="rec-blink-dot"></span> LIVE ARCHIVE</span>
              </div>
              <div class="ep-hover-media">
                <img id="ep-preview-img" src="" alt="Episode feature" class="ep-hover-img" />
                <div class="ep-hover-overlay-tag">ARCHIVE 2026</div>
              </div>
              <div class="ep-hover-preview-info">
                <div class="ep-hover-guest-name" id="ep-preview-guest">Dr. Elena Rostova</div>
                <div class="ep-hover-guest-role" id="ep-preview-role">Somatic Psychologist & Author</div>
              </div>
            </div>
          </div>
        </div>
      `,o(c)):(a&&=(a.revert(),null),c.innerHTML=`
        <div class="episodes-cards-grid-swiss">
          ${s.map(e=>`
            <div class="episode-card-swiss" data-epid="${e.id}">
              <div class="ep-card-top-bar">
                <span class="ep-num-pill">EP // ${e.number}</span>
                <span class="ep-cat-pill">${e.category.toUpperCase()}</span>
              </div>
              <div class="ep-card-media-box">
                <img src="${e.guest.avatar}" alt="${e.guest.name}" class="ep-card-photo" />
              </div>
              <div class="ep-card-content-box">
                <span class="ep-dur-date">${e.duration} • ${e.date.toUpperCase()}</span>
                <h3 class="ep-card-headline">${e.title}</h3>
                <p class="ep-card-guest-name">FEAT. <strong>${e.guest.name.toUpperCase()}</strong></p>
                <p class="ep-card-excerpt">${e.summary}</p>
                <div class="ep-card-btns">
                  <button class="btn-swiss-play" data-play-ep="${e.id}">▶ PLAY</button>
                  <button class="btn-swiss-notes" data-notes-ep="${e.id}">NOTES & TRANSCRIPT ↗</button>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      `),c.querySelectorAll(`[data-play-ep]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=q.find(t=>t.id===e.dataset.playEp);n&&gi.playEpisode(n)})}),c.querySelectorAll(`[data-notes-ep]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),window.openEpisodeDetail&&window.openEpisodeDetail(e.dataset.notesEp)})})}}e.innerHTML=`
    <section class="swiss-section" data-section="EPISODES">
      <div class="swiss-gutter">
        <span class="gutter-num">005</span>
        <span class="gutter-label">ARCHIVE</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">005 // FULL EPISODES ARCHIVE</span>
        <h1 class="view-giant-headline">ALL EPISODES.</h1>
        <p class="view-lead-copy">Unfiltered audio dialogues exploring trauma, somatic healing, career transitions, and the human condition.</p>

        <!-- Swiss Filter & Search Toolbar -->
        <div class="episodes-swiss-toolbar">
          <div class="search-cell">
            <span class="search-icon">🔍</span>
            <input type="text" id="ep-search" placeholder="FILTER BY GUEST, KEYWORD OR THEME..." class="swiss-search-input" />
          </div>

          <div class="toolbar-controls-row">
            <div class="sort-select-box">
              <label for="ep-sort" class="sort-lbl">SORT:</label>
              <select id="ep-sort" class="swiss-select">
                <option value="newest">NEWEST FIRST</option>
                <option value="guest">GUEST (A-Z)</option>
              </select>
            </div>

            <div class="view-toggle-btns">
              <button id="toggle-table-btn" class="toggle-mode-btn active" title="Table View">LIST</button>
              <button id="toggle-grid-btn" class="toggle-mode-btn" title="Grid View">CARDS</button>
            </div>
          </div>

          <div class="filter-pills-row">
            ${bi.map(e=>`
              <button class="filter-pill-btn ${e===`All`?`active`:``}" data-cat="${e}">${e.toUpperCase()}</button>
            `).join(``)}
          </div>
        </div>

        <div id="episodes-output-container"></div>
      </div>
    </section>
  `,e.querySelector(`#ep-search`)?.addEventListener(`input`,e=>{n=e.target.value,s()}),e.querySelector(`#ep-sort`)?.addEventListener(`change`,e=>{r=e.target.value,s()});function c(){e.querySelectorAll(`.filter-pill-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`.filter-pill-btn`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t=n.dataset.cat,s()})})}c();let l=e.querySelector(`#toggle-table-btn`),u=e.querySelector(`#toggle-grid-btn`);l?.addEventListener(`click`,()=>{i=!0,l.classList.add(`active`),u.classList.remove(`active`),s()}),u?.addEventListener(`click`,()=>{i=!1,u.classList.add(`active`),l.classList.remove(`active`),s()}),window.addEventListener(`care2listen:episodes-updated`,()=>{let n=e.querySelector(`.filter-pills-row`);n&&(n.innerHTML=bi.map(e=>`
        <button class="filter-pill-btn ${t===e?`active`:``}" data-cat="${e}">${e.toUpperCase()}</button>
      `).join(``),c()),s()}),s()}var Ri=[{id:`vid-1`,title:`Why We Rush to Fix What Only Needs to Be Felt | Dr. Elena Rostova`,category:`Full Episodes`,duration:`54:12`,views:`84.2K views`,date:`4 days ago`,thumbnail:`https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=80`,youtubeId:`YQHsXMglC9A`,description:`Full in-studio video interview with Dr. Elena Rostova exploring somatic listening, why offering advice is often anxiety in disguise, and nervous system regulation.`},{id:`vid-2`,title:`Walking Away from a $400K Tech Salary Saved My Life | Julian Rivera`,category:`Full Episodes`,duration:`48:05`,views:`128K views`,date:`2 weeks ago`,thumbnail:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80`,youtubeId:`dQw4w9WgXcQ`,description:`Julian Rivera sits down in our Austin studio to explain the day he walked away from executive corporate life, and how he rebuilt a grounded relationship with work.`},{id:`vid-3`,title:`The 3-Second Breath Technique to Prevent Relationship Blowups (Clip)`,category:`Clips & Highlights`,duration:`04:18`,views:`215K views`,date:`1 month ago`,thumbnail:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80`,youtubeId:`kJQP7kiw5Fk`,description:`Marcus Vance demonstrates the nervous system physiology behind pausing for three seconds when feeling defensive during arguments.`},{id:`vid-4`,title:`Inside the Sound Booth: How We Record Care 2 Listen (Studio Tour)`,category:`Behind The Scenes`,duration:`11:40`,views:`42.1K views`,date:`2 months ago`,thumbnail:`https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=80`,youtubeId:`L_LUpnjgPso`,description:`Maya Lin takes you behind the glass of our Seattle soundstage: microphones, acoustic treatment, tea recipes, and pre-interview grounding rituals.`},{id:`vid-5`,title:`When Loved Ones Forget: Loving Someone Through Memory Loss`,category:`Clips & Highlights`,duration:`06:45`,views:`93.4K views`,date:`1 month ago`,thumbnail:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80`,youtubeId:`fJ9rUzIMcZQ`,description:`Hannah Lindqvist shares an intimate story of finding humor, music, and quiet joy with her mother who lives with Alzheimer's.`},{id:`vid-6`,title:`Men and Emotional Sobriety: Unpacking Shame With Tariq Bennett`,category:`Full Episodes`,duration:`46:32`,views:`67.8K views`,date:`1 month ago`,thumbnail:`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80`,youtubeId:`3JZ_D3ELwOQ`,description:`A deeply moving discussion on dismantling traditional emotional repression and rebuilding authentic brotherhood.`}];function zi(e){let t=`All`;function n(){let n=Ri.filter(e=>t===`All`||e.category===t),i=e.querySelector(`#videos-grid-target`);i&&(i.innerHTML=n.map(e=>`
      <div class="video-swiss-card">
        <div class="video-thumb-container">
          <img src="${e.thumbnail}" alt="${e.title}" class="v-thumb" />
          <span class="v-duration">${e.duration}</span>
          <span class="v-cat-badge">${e.category.toUpperCase()}</span>
          <button class="v-play-center" data-embed="${e.youtubeId}">▶</button>
        </div>
        <div class="video-info-box">
          <span class="v-views">${e.views} • ${e.date.toUpperCase()}</span>
          <h3 class="v-title">${e.title}</h3>
          <p class="v-description">${e.description}</p>
        </div>
      </div>
    `).join(``),i.querySelectorAll(`[data-embed]`).forEach(e=>{e.addEventListener(`click`,()=>{r(e.dataset.embed)})}))}function r(e){let t=document.getElementById(`video-embed-modal`);t||(t=document.createElement(`div`),t.id=`video-embed-modal`,t.className=`modal-wrapper`,document.body.appendChild(t)),t.innerHTML=`
      <div class="modal-backdrop" id="video-backdrop"></div>
      <div class="modal-card video-modal-card">
        <button class="modal-close-btn" id="close-video-modal">&times;</button>
        <div class="video-frame-wrap">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${e}?autoplay=1&rel=0" 
            title="Care 2 Listen Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `,t.classList.remove(`hidden`);let n=t.querySelector(`#close-video-modal`),r=t.querySelector(`#video-backdrop`),i=()=>{t.innerHTML=``,t.classList.add(`hidden`)};n?.addEventListener(`click`,i),r?.addEventListener(`click`,i)}e.innerHTML=`
    <section class="swiss-section" data-section="VIDEOS">
      <div class="swiss-gutter">
        <span class="gutter-num">006</span>
        <span class="gutter-label">STUDIO FEED</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">006 // 4K VIDEO CHANNEL</span>
        <h1 class="view-giant-headline">WATCH CARE 2 LISTEN.</h1>
        <p class="view-lead-copy">Broadcast-grade 4K multicam video feeds, intimate soundstage interviews, and behind-the-scenes diaries.</p>

        <!-- Studio Statistics Ribbon -->
        <div class="video-stats-ribbon">
          <div class="v-stat-cell">
            <span class="v-stat-val">52.4K</span>
            <span class="v-stat-lbl">SUBSCRIBERS</span>
          </div>
          <div class="v-stat-cell">
            <span class="v-stat-val">1.4M+</span>
            <span class="v-stat-lbl">LIFETIME VIEWS</span>
          </div>
          <div class="v-stat-cell">
            <span class="v-stat-val">4K UHD</span>
            <span class="v-stat-lbl">PRODUCTION</span>
          </div>
          <div class="v-stat-action-cell">
            <a href="https://youtube.com" target="_blank" rel="noopener" class="btn-subscribe-yt">
              SUBSCRIBE ON YOUTUBE ↗
            </a>
          </div>
        </div>

        <!-- Video Category Pills -->
        <div class="filter-pills-row" style="margin: 24px 0;">
          ${[`All`,`Full Episodes`,`Clips & Highlights`,`Behind The Scenes`].map(e=>`
            <button class="filter-pill-btn ${e===`All`?`active`:``}" data-vtab="${e}">${e.toUpperCase()}</button>
          `).join(``)}
        </div>

        <div id="videos-grid-target" class="videos-swiss-grid"></div>
      </div>
    </section>
  `,e.querySelectorAll(`[data-vtab]`).forEach(r=>{r.addEventListener(`click`,()=>{e.querySelectorAll(`[data-vtab]`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),t=r.dataset.vtab,n()})}),n()}var Bi=[{id:`elena-rostova`,name:`Dr. Elena Rostova`,role:`Somatic Psychologist & Author`,location:`Zurich, Switzerland`,avatar:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80`,topic:`Mental Health & Trauma`,quote:`The body keeps the unspoken score. Healing occurs when the breath is welcomed back into the quiet corners of your chest.`,epId:`ep-108`,epTitle:`Learning to Sit With the Silence`,spotlight:!0,website:`https://example.com/elena`,social:`@drelenarostova`},{id:`julian-rivera`,name:`Julian Rivera`,role:`Former Tech Exec & Founder of The Unwound Life`,location:`Austin, Texas`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`,topic:`Burnout & Career Transformation`,quote:`You can be deeply admired by thousands on LinkedIn and still feel like a ghost at dinner with yourself.`,epId:`ep-107`,epTitle:`Walking Away from the Golden Handcuffs`,spotlight:!1,website:`https://example.com/julian`,social:`@unwoundlife`},{id:`amara-okonjo`,name:`Amara Okonjo`,role:`Disability Justice Advocate & Poet`,location:`London, UK`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80`,topic:`Chronic Illness & Resilience`,quote:`Joy is not a luxury reserved for the pain-free. It is an act of defiance we claim every morning.`,epId:`ep-106`,epTitle:`The Invisible Weight of Chronic Illness`,spotlight:!1,website:`https://example.com/amara`,social:`@amaraokonjo`},{id:`kiran-david-shah`,name:`Kiran & David Shah`,role:`Authors of 'Blood & Boundaries'`,location:`Toronto, Canada`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80`,topic:`Family Dynamics & Estrangement`,quote:`Forgiveness doesn't mean pretending the fracture never happened. It means refusing to keep sharpening the shards.`,epId:`ep-105`,epTitle:`Navigating Sibling Estrangement`,spotlight:!1,website:`https://example.com/shahbrothers`,social:`@shahfamilywork`},{id:`hannah-lindqvist`,name:`Hannah Lindqvist`,role:`Filmmaker & Caregiver Advocate`,location:`Stockholm, Sweden`,avatar:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80`,topic:`Ambiguous Loss & Caregiving`,quote:`When memory dissolves, presence is all that remains. And presence is more than enough.`,epId:`ep-104`,epTitle:`Grieving Someone Who Is Still Alive`,spotlight:!1,website:`https://example.com/hannah`,social:`@hannahlindqvist`},{id:`tariq-bennett`,name:`Tariq Bennett`,role:`Men's Mental Health Counselor`,location:`Chicago, Illinois`,avatar:`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80`,topic:`Relationships & Emotional Sobriety`,quote:`Vulnerability isn't weakness. Weakness is pretending you never bleed while your house is burning down.`,epId:`ep-103`,epTitle:`Rebuilding Self-Trust After Toxic Relationships`,spotlight:!1,website:`https://example.com/tariq`,social:`@tariqbennett`}];function Vi(e){let t=Bi.find(e=>e.spotlight)||Bi[0],n=``;function r(){let t=Bi.filter(e=>{let t=n.toLowerCase().trim();return!t||e.name.toLowerCase().includes(t)||e.topic.toLowerCase().includes(t)||e.location.toLowerCase().includes(t)}),r=e.querySelector(`#guests-cards-target`);r&&(r.innerHTML=t.map((e,t)=>`
      <div class="guest-swiss-entry">
        <div class="guest-idx-strip">
          <span>0${t+1}</span>
          <span>${e.location.toUpperCase()}</span>
        </div>
        <div class="guest-portrait-box">
          <img src="${e.avatar}" alt="${e.name}" class="guest-photo" />
        </div>
        <h3 class="guest-entry-name">${e.name.toUpperCase()}</h3>
        <span class="guest-entry-role">${e.role}</span>
        <p class="guest-entry-quote">“${e.quote}”</p>
        <button class="btn-guest-ep" data-open-ep="${e.epId}">LISTEN: ${e.epTitle} ⟶</button>
      </div>
    `).join(``),r.querySelectorAll(`[data-open-ep]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=q.find(t=>t.id===e.dataset.openEp);t&&gi.playEpisode(t)})}))}e.innerHTML=`
    <section class="swiss-section" data-section="GUESTS">
      <div class="swiss-gutter">
        <span class="gutter-num">007</span>
        <span class="gutter-label">ROSTER</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">007 // VOICES THAT SHAPED OUR SHOW</span>
        <h1 class="view-giant-headline">GUEST ROSTER.</h1>
        <p class="view-lead-copy">Psychologists, poets, caregivers, and executives sharing unfiltered truths about healing and resilience.</p>

        <!-- Spotlight Guest Card -->
        <div class="guest-spotlight-card-swiss">
          <div class="spotlight-top-strip">
            <span>★ GUEST SPOTLIGHT OF THE MONTH</span>
            <span>AW / 26 // EPISODE #${t.epId.replace(`ep-`,``)}</span>
          </div>

          <div class="spotlight-content-grid">
            <div class="spotlight-photo-frame">
              <img src="${t.avatar}" alt="${t.name}" class="spotlight-photo" />
            </div>

            <div class="spotlight-info-pane">
              <span class="spotlight-cat-tag">${t.topic.toUpperCase()}</span>
              <h2 class="spotlight-fullname">${t.name.toUpperCase()}</h2>
              <p class="spotlight-role-loc">${t.role} • ${t.location}</p>
              
              <blockquote class="spotlight-quote-large">
                “${t.quote}”
              </blockquote>

              <div class="spotlight-actions">
                <button class="btn-spotlight-listen" data-open-ep="${t.epId}">
                  ▶ LISTEN TO ${t.name.toUpperCase()}'S EPISODE
                </button>
                <a href="become-a-guest.html" class="link-editorial-arrow">Apply to Be a Guest ↗</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search-cell" style="margin: 32px 0 24px;">
          <span class="search-icon">🔍</span>
          <input type="text" id="guest-search-input" placeholder="SEARCH GUESTS BY NAME, FIELD OF WORK, OR TOPIC..." class="swiss-search-input" />
        </div>

        <div id="guests-cards-target" class="guests-swiss-columns"></div>
      </div>
    </section>
  `,e.querySelector(`#guest-search-input`)?.addEventListener(`input`,e=>{n=e.target.value,r()}),e.querySelectorAll(`[data-open-ep]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=q.find(t=>t.id===e.dataset.openEp);t&&gi.playEpisode(t)})}),r()}function Hi(e){e.innerHTML=`
    <section class="swiss-section" data-section="GUEST_APP">
      <div class="swiss-gutter">
        <span class="gutter-num">008</span>
        <span class="gutter-label">CASTING</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">008 // CASTING & COMMUNITY STORIES</span>
        <h1 class="view-giant-headline">HAVE A STORY? WE WANT TO HEAR IT.</h1>
        <p class="view-lead-copy">Care 2 Listen exists because of real people who refuse to stay silent about what truly matters. If you have lived through trauma, overcome burnout, re-evaluated relationships, or navigated an untold personal journey, our studio is your safe space.</p>

        <!-- 3 Guidelines Cards -->
        <div class="guidelines-card-grid">
          <div class="guideline-card">
            <span class="guideline-num">01</span>
            <h4 class="guideline-title">RADICAL AUTHENTICITY</h4>
            <p class="guideline-text">No corporate scripts or performative optimism. We value honest, grounded lived experiences over polished pitches.</p>
          </div>
          <div class="guideline-card">
            <span class="guideline-num">02</span>
            <h4 class="guideline-title">DIGNITY FIRST</h4>
            <p class="guideline-text">You maintain complete agency over your narrative. We never sensationalize pain or probe beyond your boundaries.</p>
          </div>
          <div class="guideline-card">
            <span class="guideline-num">03</span>
            <h4 class="guideline-title">PRACTICAL HEALING</h4>
            <p class="guideline-text">We connect personal struggles to broader insights and practical resources that empower our global community.</p>
          </div>
        </div>

        <div class="guest-content-split">
          <!-- Application Form Card -->
          <div class="form-wrapper-card">
            <div class="form-header">
              <h3 class="form-title">GUEST APPLICATION FORM</h3>
              <p class="form-subtitle">Fields marked with an asterisk (<span class="req">*</span>) are mandatory.</p>
            </div>

            <form id="guest-form" class="application-form" novalidate>
              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-name" class="form-label">FULL NAME <span class="req">*</span></label>
                  <input type="text" id="guest-name" name="name" required placeholder="e.g. Dr. Maya Patel" class="form-input" />
                  <span class="field-error" id="error-name"></span>
                </div>
                
                <div class="form-group">
                  <label for="guest-email" class="form-label">EMAIL ADDRESS <span class="req">*</span></label>
                  <input type="email" id="guest-email" name="email" required placeholder="you@domain.com" class="form-input" />
                  <span class="field-error" id="error-email"></span>
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-phone" class="form-label">PHONE NUMBER (OPTIONAL)</label>
                  <input type="tel" id="guest-phone" name="phone" placeholder="+1 (555) 000-0000" class="form-input" />
                </div>

                <div class="form-group">
                  <label for="guest-location" class="form-label">LOCATION (CITY, COUNTRY)</label>
                  <input type="text" id="guest-location" name="location" placeholder="e.g. London, UK or Austin, TX" class="form-input" />
                </div>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-occupation" class="form-label">OCCUPATION / FIELD OF EXPERTISE</label>
                  <input type="text" id="guest-occupation" name="occupation" placeholder="e.g. Somatic Therapist, Artist, Caregiver" class="form-input" />
                </div>

                <div class="form-group">
                  <label for="guest-links" class="form-label">SOCIAL MEDIA OR WEBSITE LINKS</label>
                  <input type="url" id="guest-links" name="links" placeholder="https://instagram.com/yourhandle" class="form-input" />
                </div>
              </div>

              <div class="form-group">
                <label for="guest-topic" class="form-label">TOPIC OR CORE THEME <span class="req">*</span></label>
                <input type="text" id="guest-topic" name="topic" required placeholder="e.g. Recovering identity after caregiving burnout" class="form-input" />
                <span class="field-error" id="error-topic"></span>
              </div>

              <div class="form-group">
                <div class="label-with-counter">
                  <label for="guest-story" class="form-label">BRIEF SUMMARY OF YOUR STORY <span class="req">*</span></label>
                  <span class="word-counter" id="word-count-badge">0 / 300 words</span>
                </div>
                <textarea id="guest-story" name="story" rows="5" required placeholder="Tell us what you lived through, what you learned, and the message you wish to share..." class="form-textarea"></textarea>
                <span class="field-error" id="error-story"></span>
              </div>

              <div class="form-grid-2">
                <div class="form-group">
                  <label for="guest-comfort" class="form-label">COMFORT LEVEL ON SENSITIVE TOPICS</label>
                  <select id="guest-comfort" class="form-select">
                    <option value="open">Fully open to discuss any dimension</option>
                    <option value="some-boundaries">Open with specific agreed boundaries</option>
                    <option value="anonymous">Prefer identity/name to be disguised</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="guest-format" class="form-label">RECORDING PREFERENCE</label>
                  <select id="guest-format" class="form-select">
                    <option value="studio-seattle">In-Person (Seattle Studio)</option>
                    <option value="studio-brooklyn">In-Person (Brooklyn Studio)</option>
                    <option value="remote-video">Remote High-Def Video (Riverside)</option>
                    <option value="audio-only">Audio-Only (Voice Call / Studio Feed)</option>
                  </select>
                </div>
              </div>

              <div class="form-checkbox-group">
                <label class="checkbox-container">
                  <input type="checkbox" id="consent-check" required />
                  <span class="checkbox-label">I consent to being contacted by the Care 2 Listen editorial team regarding this application. <span class="req">*</span></span>
                </label>
                <span class="field-error" id="error-consent"></span>
              </div>

              <div class="form-submit-row">
                <button type="submit" id="submit-application-btn" class="btn-editorial-pill" style="font-size: 0.9rem; padding: 12px 24px;">
                  SUBMIT GUEST APPLICATION ⟶
                </button>
              </div>
            </form>

            <div id="form-success-message" class="form-success-card hidden">
              <div class="success-icon-wrap">✓</div>
              <h3 class="success-title">APPLICATION RECEIVED.</h3>
              <p class="success-text">Thank you for trusting us with your story. Marcus, Maya, and our editorial committee review every submission with intentional care. We will reach out via email within 5 business days.</p>
              <button id="reset-form-btn" class="btn-swiss-notes">SUBMIT ANOTHER STORY</button>
            </div>
          </div>

          <!-- FAQ Accordion Sidebar -->
          <div class="faq-sidebar">
            <div class="faq-card-sticky">
              <div class="faq-header">
                <span class="section-idx">HELP & PROCESS</span>
                <h3 class="faq-title">FREQUENTLY ASKED QUESTIONS</h3>
              </div>

              <div class="accordion-list">
                ${ji.map((e,t)=>`
                  <div class="accordion-item" data-faq="${t}">
                    <button class="accordion-trigger" aria-expanded="${t===0}">
                      <span class="accordion-q">${e.q}</span>
                      <span class="accordion-icon">${t===0?`−`:`+`}</span>
                    </button>
                    <div class="accordion-panel ${t===0?`open`:``}">
                      <p class="accordion-text">${e.a}</p>
                    </div>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;let t=e.querySelectorAll(`.accordion-item`);t.forEach(e=>{let n=e.querySelector(`.accordion-trigger`),r=e.querySelector(`.accordion-panel`),i=e.querySelector(`.accordion-icon`);n?.addEventListener(`click`,()=>{let e=r.classList.contains(`open`);t.forEach(e=>{e.querySelector(`.accordion-panel`)?.classList.remove(`open`);let t=e.querySelector(`.accordion-icon`);t&&(t.textContent=`+`)}),e||(r.classList.add(`open`),i&&(i.textContent=`−`))})});let n=e.querySelector(`#guest-story`),r=e.querySelector(`#word-count-badge`);n?.addEventListener(`input`,()=>{let e=n.value.trim().split(/\s+/).filter(Boolean),t=n.value.trim()===``?0:e.length;r&&(r.textContent=`${t} / 300 words`,t>300?r.classList.add(`word-limit-exceeded`):r.classList.remove(`word-limit-exceeded`))});let i=e.querySelector(`#guest-form`),a=e.querySelector(`#form-success-message`),o=e.querySelector(`#reset-form-btn`);i?.addEventListener(`submit`,e=>{e.preventDefault();let t=i.querySelector(`#guest-name`),n=i.querySelector(`#guest-email`),r=i.querySelector(`#guest-topic`),o=i.querySelector(`#guest-story`),s=i.querySelector(`#consent-check`);if(!t.value.trim()||!n.value.includes(`@`)||!r.value.trim()||!o.value.trim()||!s.checked){alert(`Please complete all mandatory fields (*)`);return}i.classList.add(`hidden`),a.classList.remove(`hidden`)}),o?.addEventListener(`click`,()=>{i.reset(),i.classList.remove(`hidden`),a.classList.add(`hidden`),r&&(r.textContent=`0 / 300 words`)})}var Ui=[{name:`988 Suicide & Crisis Lifeline`,region:`United States & Canada`,contact:`988`,type:`phone`,desc:`Free, confidential 24/7 support for anyone experiencing mental health distress, suicidal thoughts, or substance use concerns.`,badge:`24/7 Available`},{name:`Crisis Text Line`,region:`US, UK & Canada`,contact:`Text HOME to 741741`,type:`text`,desc:`Connect via SMS with a trained volunteer crisis counselor 24 hours a day, 7 days a week.`,badge:`Free SMS`},{name:`The Trevor Project`,region:`North America (LGBTQ+ Focus)`,contact:`1-866-488-7386`,type:`phone`,desc:`24/7 suicide prevention and crisis intervention services for LGBTQ young people.`,badge:`LGBTQ+ Youth`},{name:`Befrienders Worldwide`,region:`Global Directory (40+ Countries)`,contact:`befrienders.org`,type:`web`,desc:`Find confidential emotional support services across Europe, Asia, Latin America, Australia, and Africa.`,badge:`International`}],Wi=[{title:`The Body Keeps the Score`,author:`Bessel van der Kolk, M.D.`,category:`Trauma & Somatics`,desc:`How trauma reshapes both body and brain, and innovative paths toward recovery.`,tag:`Staff Essential`},{title:`Maybe You Should Talk to Someone`,author:`Lori Gottlieb`,category:`Therapy & Human Condition`,desc:`A therapist, her therapist, and our lives revealed in an insightful memoir.`,tag:`Host Pick`},{title:`Atlas of the Heart`,author:`Brené Brown, Ph.D.`,category:`Emotions & Language`,desc:`Mapping meaningful connection and the language of human experience.`,tag:`Community Favorite`},{title:`It's OK That You're Not OK`,author:`Megan Devine`,category:`Grief & Bereavement`,desc:`Meeting grief and loss in a culture that doesn't understand.`,tag:`Recommended by Guests`}],Gi=[{name:`Waking Up`,type:`Meditation & Philosophy`,desc:`Beyond generic relaxation: a deep exploration into the nature of mind and consciousness.`,linkText:`Visit Site`},{name:`Open`,type:`Breathwork & Movement`,desc:`Mindfulness studio combining breathwork, sound, and movement to regulate the nervous system.`,linkText:`Explore`},{name:`Stoic`,type:`Mental Health Journaling`,desc:`Daily reflection prompts, emotional tracking, and CBT-informed morning routines.`,linkText:`Download`},{name:`Psychology Today Directory`,type:`Therapist Search`,desc:`Comprehensive database to filter licensed therapists by insurance, specialty, and location.`,linkText:`Find Therapist`}];function Ki(e){e.innerHTML=`
    <section class="swiss-section" data-section="RESOURCES">
      <div class="swiss-gutter">
        <span class="gutter-num">009</span>
        <span class="gutter-label">DIRECTORY</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">009 // CRISIS & SUPPORT DIRECTORY</span>
        <h1 class="view-giant-headline">TOOLS & SUPPORT BEYOND THE PODCAST.</h1>
        <p class="view-lead-copy">Listening creates space, but certified clinical support saves lives. Explore verified emergency crisis helplines, curated reading lists, and digital wellness tools.</p>

        <!-- Clinical Alert Strip -->
        <div class="crisis-alert-strip">
          ⚠️ <strong>IMPORTANT CLINICAL NOTICE:</strong> Care 2 Listen is an educational and storytelling platform, not a substitute for licensed psychological or psychiatric therapy. If you or someone you know is in active distress, connect directly with the free 24/7 emergency resources below.
        </div>

        <!-- Crisis Hotlines Grid -->
        <div class="section-title-bar" style="margin-top: 36px;">
          <span class="section-idx">HOTLINES // 24/7</span>
          <h3 class="section-heading-sm">FREE EMERGENCY CRISIS HELPLINES</h3>
        </div>

        <div class="crisis-swiss-grid">
          ${Ui.map(e=>`
            <div class="crisis-swiss-cell">
              <div class="crisis-cell-header">
                <span class="crisis-badge">${e.badge}</span>
                <span class="crisis-region-tag">${e.region}</span>
              </div>
              <h3 class="crisis-cell-name">${e.name}</h3>
              <p class="crisis-cell-desc">${e.desc}</p>
              <div class="crisis-dial-row">
                <span class="dial-code">${e.contact}</span>
                <button class="btn-copy-dial" data-dial="${e.contact}">COPY NUMBER ↗</button>
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Recommended Books -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">LITERATURE // CURATED</span>
          <h3 class="section-heading-sm">BOOKS CURATED BY HOSTS & GUESTS</h3>
        </div>

        <div class="books-grid-swiss">
          ${Wi.map(e=>`
            <div class="book-card-swiss">
              <span class="book-tag-pill">${e.tag.toUpperCase()}</span>
              <h3 class="book-title-swiss">${e.title}</h3>
              <p class="book-author-swiss">BY ${e.author.toUpperCase()}</p>
              <span class="book-cat-tag">${e.category.toUpperCase()}</span>
              <p class="book-desc-swiss">${e.desc}</p>
            </div>
          `).join(``)}
        </div>

        <!-- Recommended Apps -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">DIGITAL TOOLS // WELLNESS</span>
          <h3 class="section-heading-sm">RECOMMENDED APPS & DIRECTORIES</h3>
        </div>

        <div class="apps-grid-swiss">
          ${Gi.map(e=>`
            <div class="app-card-swiss">
              <div class="app-card-top">
                <h4 class="app-name-swiss">${e.name.toUpperCase()}</h4>
                <span class="app-cat-label">${e.type.toUpperCase()}</span>
              </div>
              <p class="app-desc-swiss">${e.desc}</p>
              <a href="https://google.com/search?q=${encodeURIComponent(e.name)}" target="_blank" rel="noopener" class="link-editorial-arrow">EXPLORE ↗</a>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `,e.querySelectorAll(`.btn-copy-dial`).forEach(e=>{e.addEventListener(`click`,()=>{navigator.clipboard?.writeText(e.dataset.dial),e.textContent=`COPIED!`,setTimeout(()=>e.textContent=`COPY NUMBER ↗`,2e3)})})}function qi(e){e.innerHTML=`
    <section class="swiss-section" data-section="COMMUNITY">
      <div class="swiss-gutter">
        <span class="gutter-num">010</span>
        <span class="gutter-label">NETWORK</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">010 // EMPATHY NETWORK</span>
        <h1 class="view-giant-headline">YOU'RE NOT JUST A LISTENER — YOU'RE FAMILY.</h1>
        <p class="view-lead-copy">Care 2 Listen is powered by an empathetic global network of over 50,000 listeners who believe in vulnerability without shame.</p>

        <!-- Newsletter Card -->
        <div class="nl-swiss-card">
          <div class="nl-card-split">
            <div class="nl-left-info">
              <span class="section-idx">WEEKLY EMPATHY DIGEST</span>
              <h2 class="nl-heading">THE TUESDAY GROUNDING LETTER</h2>
              <p class="nl-text">Join 34,000+ readers who receive our weekly reflection letter: episode deep-dives, book excerpts, mental health toolkits, and invitations to monthly community Zoom circles.</p>
            </div>
            <div class="nl-right-form">
              <form id="community-nl-form" class="swiss-form-inline">
                <input type="email" id="nl-email-field" required placeholder="ENTER YOUR EMAIL..." class="swiss-input" />
                <button type="submit" id="nl-submit-btn" class="btn-editorial-pill">SUBSCRIBE ⟶</button>
              </form>
              <span id="nl-msg" class="nl-feedback-text hidden">✓ Welcome! Check your inbox for our latest reflection letter.</span>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="section-title-bar" style="margin-top: 48px;">
          <span class="section-idx">TESTIMONIALS</span>
          <h3 class="section-heading-sm">WHAT OUR LISTENERS SAY</h3>
        </div>

        <div class="reviews-swiss-grid">
          ${ki.map(e=>`
            <div class="review-swiss-card">
              <div class="rev-header">
                <span class="rev-stars">★★★★★</span>
                <span class="rev-ep">${e.episodeMentioned}</span>
              </div>
              <p class="rev-quote">“${e.quote}”</p>
              <div class="rev-author-bar">
                <img src="${e.avatar}" alt="${e.author}" class="rev-author-img" />
                <div>
                  <strong>${e.author.toUpperCase()}</strong>
                  <span>${e.role} • ${e.city}</span>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Social Media Feed Wall -->
        <div class="section-title-bar" style="margin-top: 50px;">
          <span class="section-idx">SOCIAL VOICES</span>
          <h3 class="section-heading-sm">CONVERSATIONS ACROSS THE WEB</h3>
        </div>

        <div class="social-cards-grid-swiss">
          ${Ai.map(e=>`
            <div class="social-post-card-swiss">
              <div class="social-card-top">
                <span class="social-handle-swiss">${e.handle}</span>
                <span class="social-badge-tag">${e.badge}</span>
              </div>
              <p class="social-quote-swiss">${e.quote}</p>
              <div class="social-img-box">
                <img src="${e.image}" alt="Social post" class="social-thumb" />
              </div>
              <div class="social-bottom-meta">
                <span>❤️ ${e.likes}</span>
                <span>💬 ${e.comments}</span>
                <span style="margin-left: auto;">${e.time}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `;let t=e.querySelector(`#community-nl-form`),n=e.querySelector(`#nl-email-field`),r=e.querySelector(`#nl-msg`),i=e.querySelector(`#nl-submit-btn`);t?.addEventListener(`submit`,e=>{e.preventDefault(),n.value.includes(`@`)&&(i.textContent=`SUBSCRIBED!`,r.classList.remove(`hidden`),n.value=``)})}function Ji(e){e.innerHTML=`
    <section class="swiss-section" data-section="CONTACT">
      <div class="swiss-gutter">
        <span class="gutter-num">011</span>
        <span class="gutter-label">STUDIO</span>
      </div>

      <div class="view-header-strip">
        <span class="view-sub-label">011 // PRODUCTION & PRESS</span>
        <h1 class="view-giant-headline">GET IN TOUCH.</h1>
        <p class="view-lead-copy">Whether you have feedback on an episode, a press inquiry, sponsorship proposal, or a guest suggestion, reach out directly.</p>

        <div class="contact-swiss-grid">
          <form id="contact-form" class="swiss-form" style="padding: 40px;">
            <div class="form-group">
              <label class="form-label">YOUR FULL NAME *</label>
              <input type="text" required placeholder="Alex Mercer" class="form-input" />
            </div>

            <div class="form-group">
              <label class="form-label">EMAIL ADDRESS *</label>
              <input type="email" required placeholder="alex@domain.com" class="form-input" />
            </div>

            <div class="form-group">
              <label class="form-label">SUBJECT / INQUIRY CATEGORY *</label>
              <select class="form-select">
                <option>General Inquiry & Listener Note</option>
                <option>Press & Media Coverage</option>
                <option>Sponsorship & Brand Partnership</option>
                <option>Guest Booking Question</option>
                <option>Audio / Website Technical Issue</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">YOUR MESSAGE *</label>
              <textarea rows="5" required placeholder="What's on your mind?..." class="form-textarea"></textarea>
            </div>

            <button type="submit" id="contact-submit-btn" class="btn-editorial-pill" style="font-size: 0.9rem; padding: 12px 24px; margin-top: 10px;">
              SEND MESSAGE ⟶
            </button>

            <span id="contact-success" class="contact-feedback-msg hidden">✓ Thank you! Your message was sent to Maya and Marcus.</span>
          </form>

          <div class="contact-info-panel">
            <h3 class="info-panel-title">STUDIO LOCATIONS</h3>
            <div class="studio-loc-box">
              <strong>SEATTLE SOUNDSTAGE (PRIMARY)</strong>
              <p>Pike Place Market District, Seattle, WA</p>
            </div>

            <div class="studio-loc-box">
              <strong>BROOKLYN SOUNDSTAGE (SECONDARY)</strong>
              <p>DUMBO Waterfront, Brooklyn, NY</p>
            </div>

            <div class="info-rule"></div>

            <div class="contact-meta-row">
              <span class="c-lbl">DIRECT EMAIL:</span>
              <a href="mailto:hello@care2listen.com" class="c-val">HELLO@CARE2LISTEN.COM</a>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">PRESS & MEDIA:</span>
              <a href="mailto:press@care2listen.com" class="c-val">PRESS@CARE2LISTEN.COM</a>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">TELEPHONE:</span>
              <span class="c-val">+1 206 555 0192</span>
            </div>

            <div class="contact-meta-row">
              <span class="c-lbl">RESPONSE TIME:</span>
              <span class="c-val" style="color: var(--color-vermilion);">UNDER 48 HOURS (EST)</span>
            </div>

            <div class="info-rule"></div>

            <div class="social-tags-row">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">INSTAGRAM</a>
              <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link">YOUTUBE</a>
              <a href="https://open.spotify.com" target="_blank" rel="noopener" class="social-link">SPOTIFY</a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener" class="social-link">APPLE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;let t=e.querySelector(`#contact-form`),n=e.querySelector(`#contact-success`),r=e.querySelector(`#contact-submit-btn`);t?.addEventListener(`submit`,e=>{e.preventDefault(),r.disabled=!0,r.textContent=`SENDING...`,setTimeout(()=>{r.textContent=`MESSAGE SENT!`,n.classList.remove(`hidden`)},600)})}var Yi=[{id:`sub-101`,title:`The Neurobiology of Compassion Fatigue: When Caring Hurts`,category:`Neuroscience`,duration:`55 min`,guest:{name:`Dr. Kenji Sato`,role:`Neuroscientist & Trauma Clinician`,email:`kenji.sato@neurocare.org`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`,bio:`Director of the Cognitive Resilience Institute. Researches autonomic nervous system burnout in first responders and therapists.`},summary:`Exploring why frontline caregivers experience emotional numbness, the vagal nerve mechanics behind secondary trauma, and daily neuro-somatic resets.`,takeaways:[`Compassion fatigue is physiological downregulation, not a moral failure.`,`The 3-minute bilateral stimulation technique for emergency resetting.`,`How to build clinical boundaries that preserve empathy.`],audioUrl:``,status:`pending`,submittedAt:`2026-10-10T14:30:00.000Z`},{id:`sub-102`,title:`Unspoken Grief: Navigating Ambiguous Loss in Family Caregiving`,category:`Grief`,duration:`48 min`,guest:{name:`Elena Vance, MSW`,role:`Palliative Care Counselor & Essayist`,email:`elena.vance@caregivingjournal.com`,avatar:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80`,bio:`Specializes in dementia caregiver support and chronic illness bereavement. Author of 'The Living Goodbye'.`},summary:`A compassionate dialogue on the psychological weight of grieving someone who is still physically present, such as in progressive cognitive decline.`,takeaways:[`Defining ambiguous loss and freeing families from caregiver guilt.`,`Creating micro-rituals of acknowledgment within everyday care routines.`,`Communicating through non-verbal somatic presence when memory fades.`],audioUrl:``,status:`pending`,submittedAt:`2026-10-11T09:15:00.000Z`}];async function Xi(){try{let e=await fetch(`/api/submissions`);if(e.ok)return Yi=await e.json(),Yi}catch{console.warn(`[Submissions] Backend /api/submissions unavailable, using in-memory store.`)}return Yi}async function Zi(e){let t={...e,id:`sub-${Date.now()}`,status:`pending`,submittedAt:new Date().toISOString()};try{let e=await fetch(`/api/submissions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)});if(e.ok){let t=await e.json();return Yi.unshift(t),window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0,submission:t}}}catch(e){console.warn(`[Submissions] POST failed, saving locally:`,e)}return Yi.unshift(t),window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0,submission:t}}async function Qi(e,t){try{let n=await fetch(`/api/submissions/${e}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})});if(n.ok){let t=await n.json(),r=Yi.findIndex(t=>t.id===e);return r!==-1&&(Yi[r]=t),window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0,submission:t}}}catch(e){console.warn(`[Submissions] PATCH failed, updating locally:`,e)}let n=Yi.findIndex(t=>t.id===e);return n===-1?{success:!1,error:`Not found`}:(Yi[n].status=t,window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0,submission:Yi[n]})}async function $i(e){try{if((await fetch(`/api/submissions/${e}`,{method:`DELETE`})).ok)return Yi=Yi.filter(t=>t.id!==e),window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0}}catch(e){console.warn(`[Submissions] DELETE failed, updating locally:`,e)}return Yi=Yi.filter(t=>t.id!==e),window.dispatchEvent(new CustomEvent(`care2listen:submissions-updated`)),{success:!0}}Xi().catch(()=>{});var ea=[{name:`Elena (Somatic / Clinical)`,url:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80`},{name:`Julian (Founder / Tech)`,url:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`},{name:`Amara (Advocate / Poet)`,url:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80`},{name:`Kiran & David (Family / Mediation)`,url:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80`},{name:`Hannah (Filmmaker / Caregiver)`,url:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80`},{name:`Tariq (Counselor / Recovery)`,url:`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80`},{name:`Marcus (Investigative Host)`,url:`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80`},{name:`Maya (Somatic Co-Host)`,url:`https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80`}];function ta(e){let t=``,n=`All`,r=null,i=`episodes`,a=`all`,o=null;function s(){let e=q.length,t=0;return q.forEach(e=>{let n=e.duration?.match(/(\d+)/);n&&(t+=parseInt(n[1],10))}),{totalCount:e,durationLabel:`${Math.floor(t/60)}h ${t%60}m`,uniqueTopics:new Set(q.map(e=>e.category)).size,featuredCount:q.filter(e=>e.featured).length}}function c(e,t=!1){let n=document.getElementById(`cms-toast-notification`);n||(n=document.createElement(`div`),n.id=`cms-toast-notification`,n.className=`cms-toast`,document.body.appendChild(n)),n.textContent=e,n.className=`cms-toast show ${t?`error`:`success`}`,setTimeout(()=>{n.className=`cms-toast`},3500)}let l=`care2listen_admin_auth`;function u(){return sessionStorage.getItem(l)===`true`}function d(){e.innerHTML=`
      <section class="swiss-section admin-gate-section" data-section="AUTH">
        <div class="swiss-gutter">
          <span class="gutter-num">000</span>
          <span class="gutter-label">SECURITY</span>
        </div>

        <div class="admin-gate-wrapper">
          <div class="admin-gate-grid">
            <!-- CARD 1: ADMINISTRATOR LOGIN CARD -->
            <div class="admin-gate-card">
              <div class="admin-gate-top">
                <span class="admin-security-tag"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> RESTRICTED CONSOLE // ADMIN ONLY</span>
                <span class="admin-sys-time">SYS/AUTH 2026</span>
              </div>

              <div class="admin-gate-headline-area">
                <h1 class="admin-gate-title">STUDIO ARCHIVE GATE.</h1>
                <p class="admin-gate-desc">
                  Administrative authorization is required to access the broadcast studio, publish new episodes, and approve guest submissions.
                </p>
              </div>

              <form id="admin-login-form" class="admin-gate-form">
                <div class="form-group" style="margin-bottom: 14px;">
                  <label for="admin-passcode" class="form-label" style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; margin-bottom: 6px; display: block;">ADMINISTRATOR PASSCODE *</label>
                  <div class="passcode-input-wrap">
                    <input
                      type="password"
                      id="admin-passcode"
                      class="form-input form-input-mono"
                      placeholder="ENTER PASSCODE..."
                      required
                      autocomplete="current-password"
                      autofocus
                      style="border: 1px solid var(--border-black); padding: 12px 14px; font-family: var(--font-mono); font-size: 0.95rem;"
                    />
                    <button type="button" id="toggle-passcode-visibility" class="btn-toggle-eye" aria-label="Toggle password visibility">SHOW</button>
                  </div>
                </div>

                <div id="admin-auth-error" class="admin-error-box hidden">
                  <span class="error-icon">✕</span> ACCESS DENIED: Invalid administrator passcode.
                </div>

                <div class="admin-gate-actions">
                  <button type="submit" class="btn-cms-primary" style="width: 100%; justify-content: center;">
                    UNLOCK STUDIO CONSOLE ⟶
                  </button>
                  <a href="episodes.html" class="btn-cms-secondary" style="width: 100%; text-align: center; justify-content: center; text-decoration: none;">
                    RETURN TO PUBLIC EPISODES ↗
                  </a>
                </div>
              </form>

              <div class="admin-gate-hint-box">
                <span class="hint-label">DEFAULT ACCESS CREDENTIAL:</span>
                <span class="hint-code">admin2026</span>
                <span class="hint-sub">(Or "admin")</span>
              </div>
            </div>

            <!-- CARD 2: VISITOR / GUEST EPISODE PITCH CARD -->
            <div class="admin-gate-card admin-gate-guest-card">
              <div class="admin-gate-top">
                <span class="admin-security-tag" style="color: var(--color-vermilion);"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> VISITOR / GUEST ACCESS // OPEN PORTAL</span>
                <span class="admin-sys-time">OPEN CALL 2026</span>
              </div>

              <div class="admin-gate-headline-area">
                <h2 class="admin-gate-title">REQUEST AN EPISODE.</h2>
                <p class="admin-gate-desc">
                  Are you a researcher, survivor, clinician, or thinker with an unscripted story? Submit your episode proposal directly to our editorial curatorial board.
                </p>
              </div>

              <ul class="guest-card-points">
                <li>
                  <strong>01 // Direct Editorial Pitch:</strong>
                  <span>Submit episode synopsis, custom narrative angle, and somatic takeaways.</span>
                </li>
                <li>
                  <strong>02 // Curatorial Review:</strong>
                  <span>Our editorial team reviews all submissions directly within the Studio Approval Queue.</span>
                </li>
                <li>
                  <strong>03 // Broadcast Release:</strong>
                  <span>Approved episodes are instantly converted into full archive releases and published.</span>
                </li>
              </ul>

              <div class="admin-gate-actions" style="margin-top: auto;">
                <a href="request-episode.html" class="btn-cms-primary" style="width: 100%; justify-content: center; text-decoration: none; text-align: center;">
                  + REQUEST / PITCH AN EPISODE ⟶
                </a>
                <a href="become-a-guest.html" class="btn-cms-secondary" style="width: 100%; justify-content: center; text-decoration: none; text-align: center;">
                  GUEST PARTICIPATION INFO ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;let t=e.querySelector(`#admin-login-form`),n=e.querySelector(`#admin-passcode`),r=e.querySelector(`#admin-auth-error`),i=e.querySelector(`#toggle-passcode-visibility`);i?.addEventListener(`click`,()=>{n.type===`password`?(n.type=`text`,i.textContent=`HIDE`):(n.type=`password`,i.textContent=`SHOW`)}),t?.addEventListener(`submit`,e=>{e.preventDefault();let t=n.value.trim().toLowerCase();t===`admin2026`||t===`admin`||t===`c2ladmin`?(sessionStorage.setItem(l,`true`),c(`✓ Administrator authenticated. Welcome to Studio CMS.`),f()):(r?.classList.remove(`hidden`),n?.classList.add(`input-error`),n?.focus(),c(`✕ Access denied: Incorrect passcode.`,!0))})}function f(){let t=s(),n=Yi.filter(e=>e.status===`pending`).length;e.innerHTML=`
      <section class="swiss-section cms-dashboard-section" data-section="CMS">
        <div class="swiss-gutter">
          <span class="gutter-num">007</span>
          <span class="gutter-label">STUDIO CMS</span>
        </div>

        <div class="view-header-strip cms-header-strip">
          <div class="cms-top-breadcrumbs">
            <span class="view-sub-label">007 // BROADCAST MANAGEMENT STUDIO</span>
            <div class="admin-auth-status-cluster">
              <span class="live-sync-indicator"><span class="rec-blink-dot"></span> LIVE SYNC ACTIVE</span>
              <span class="admin-badge-active"><span class="auth-dot"></span> ADMIN: AUTHORIZED</span>
              <button id="btn-admin-logout" class="btn-admin-lock" title="Lock admin console and log out">LOCK CONSOLE ✕</button>
            </div>
          </div>

          <div class="cms-headline-row">
            <div>
              <h1 class="view-giant-headline">EPISODES STUDIO.</h1>
              <p class="view-lead-copy">Manage published episodes, curate guest audio pitches, review unscripted session proposals, and publish directly to the live archive.</p>
            </div>
            <div class="cms-primary-cta-group">
              <button id="btn-create-episode-top" class="btn-cms-primary">
                <span class="plus-sign">+</span> PUBLISH NEW EPISODE
              </button>
              <a href="episodes.html" class="btn-cms-secondary">
                VIEW ARCHIVE ↗
              </a>
            </div>
          </div>

          <!-- CMS VIEW SWITCHER TABS -->
          <div class="cms-view-switcher-bar">
            <button type="button" id="cms-tab-episodes" class="cms-view-tab-btn ${i===`episodes`?`active`:``}">
              01 // EPISODES ARCHIVE (${t.totalCount})
            </button>
            <button type="button" id="cms-tab-submissions" class="cms-view-tab-btn ${i===`submissions`?`active`:``}">
              02 // GUEST SUBMISSION APPROVALS
              <span class="cms-sub-badge-count" style="${n===0?`background: #166534;`:``}">
                ${n} PENDING
              </span>
            </button>
          </div>

          <!-- DYNAMIC VIEW CONTAINER -->
          <div id="cms-main-content-panel"></div>
        </div>
      </section>

      <!-- CMS EPISODE EDITOR MODAL -->
      <div id="cms-editor-modal" class="modal-wrapper hidden" role="dialog" aria-modal="true">
        <div class="modal-backdrop" id="cms-modal-backdrop"></div>
        <div class="modal-card cms-modal-card">
          <div class="cms-modal-header">
            <div>
              <span class="cms-modal-tag" id="cms-modal-tag">007 // EPISODE EDITOR</span>
              <h2 class="cms-modal-title" id="cms-modal-title">NEW EPISODE ARCHIVE ENTRY</h2>
            </div>
            <button class="modal-close-btn" id="cms-modal-close" aria-label="Close modal">&times;</button>
          </div>

          <form id="cms-episode-form" class="cms-form-scrollable" novalidate>
            <!-- Form body dynamically loaded -->
            <div id="cms-form-fields-container"></div>

            <div class="cms-form-bottom-actions">
              <button type="button" class="btn-swiss-notes" id="cms-btn-cancel">CANCEL</button>
              <button type="submit" class="btn-cms-primary" id="cms-btn-submit">
                ✓ SAVE &amp; PUBLISH TO ARCHIVE
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- JSON IMPORT MODAL -->
      <div id="cms-import-modal" class="modal-wrapper hidden" role="dialog" aria-modal="true">
        <div class="modal-backdrop" id="cms-import-backdrop"></div>
        <div class="modal-card" style="max-width: 600px;">
          <div class="cms-modal-header">
            <h3 class="cms-modal-title">IMPORT EPISODES JSON</h3>
            <button class="modal-close-btn" id="cms-import-close">&times;</button>
          </div>
          <div style="padding: 24px;">
            <p style="font-size: 0.88rem; color: #444; margin-bottom: 12px;">Paste valid JSON array containing episode records. This will replace or update current archive records.</p>
            <textarea id="cms-import-textarea" rows="12" class="swiss-textarea" style="width: 100%; font-family: var(--font-mono); font-size: 0.75rem; padding: 12px;"></textarea>
            <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
              <button type="button" class="btn-swiss-notes" id="cms-import-cancel">CANCEL</button>
              <button type="button" class="btn-cms-primary" id="cms-import-submit">IMPORT DATA ↗</button>
            </div>
          </div>
        </div>
      </div>
    `,p(),y()}function p(){let t=e.querySelector(`#cms-main-content-panel`);t&&(i===`episodes`?m(t):h(t))}function m(r){let i=s();r.innerHTML=`
      <!-- KEY STATS STRIP -->
      <div class="cms-stats-grid">
        <div class="cms-stat-box">
          <span class="cms-stat-num">${i.totalCount}</span>
          <span class="cms-stat-lbl">TOTAL EPISODES</span>
        </div>
        <div class="cms-stat-box">
          <span class="cms-stat-num">${i.durationLabel}</span>
          <span class="cms-stat-lbl">TOTAL AUDIO ARCHIVE</span>
        </div>
        <div class="cms-stat-box">
          <span class="cms-stat-num">${i.uniqueTopics}</span>
          <span class="cms-stat-lbl">ACTIVE TOPICS</span>
        </div>
        <div class="cms-stat-box highlight-stat">
          <span class="cms-stat-num">${i.featuredCount}</span>
          <span class="cms-stat-lbl">FEATURED STORIES</span>
        </div>
      </div>

      <!-- TOOLBAR & FILTERS -->
      <div class="cms-toolbar">
        <div class="cms-search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="cms-search-input" value="${t}" placeholder="SEARCH EPISODES BY TITLE, GUEST, TOPIC OR TAG..." class="swiss-search-input" />
        </div>

        <div class="cms-toolbar-actions">
          <div class="sort-select-box">
            <label for="cms-cat-filter" class="sort-lbl">TOPIC:</label>
            <select id="cms-cat-filter" class="swiss-select">
              <option value="All" ${n===`All`?`selected`:``}>ALL TOPICS</option>
              ${bi.filter(e=>e!==`All`).map(e=>`
                <option value="${e}" ${n===e?`selected`:``}>${e.toUpperCase()}</option>
              `).join(``)}
            </select>
          </div>

          <button id="btn-export-json" class="btn-swiss-notes" title="Download backup of all episodes">
            EXPORT JSON ↓
          </button>
          <button id="btn-import-json" class="btn-swiss-notes" title="Import episodes from JSON">
            IMPORT JSON ↑
          </button>
          <button id="btn-reset-defaults" class="btn-cms-danger" title="Restore factory demo episodes">
            RESET DEFAULTS ↺
          </button>
        </div>
      </div>

      <!-- EPISODES LISTING TABLE -->
      <div class="cms-table-wrapper" id="cms-table-container"></div>
    `,g(),r.querySelector(`#cms-search-input`)?.addEventListener(`input`,e=>{t=e.target.value,g()}),r.querySelector(`#cms-cat-filter`)?.addEventListener(`change`,e=>{n=e.target.value,g()}),r.querySelector(`#btn-export-json`)?.addEventListener(`click`,()=>{let e=Di(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`care2listen-episodes-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{}),c(`✓ Exported JSON downloaded & copied to clipboard!`)});let a=e.querySelector(`#cms-import-modal`);r.querySelector(`#btn-import-json`)?.addEventListener(`click`,()=>{a&&(e.querySelector(`#cms-import-textarea`).value=Di(),a.classList.remove(`hidden`),document.body.style.overflow=`hidden`)}),r.querySelector(`#btn-reset-defaults`)?.addEventListener(`click`,async()=>{confirm(`Reset archive to factory demo episodes? Custom additions will be overwritten.`)&&await Ti()&&(c(`↺ Archive reset to factory demo episodes.`),f())})}function h(e){let t=Yi.filter(e=>e.status===`pending`).length,n=Yi.filter(e=>e.status===`approved`).length,r=Yi.filter(e=>e.status===`declined`).length,i=Yi.filter(e=>a===`all`||e.status===a);e.innerHTML=`
      <!-- SUBMISSIONS QUEUE HEADER & FILTER BAR -->
      <div class="cms-toolbar" style="margin-bottom: 24px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 700; color: #555; margin-right: 6px;">FILTER STATUS:</span>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${a===`all`?`active`:``}" data-filter="all" style="${a===`all`?`background: #0d0d0d; color: #fff;`:``}">
            ALL (${Yi.length})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${a===`pending`?`active`:``}" data-filter="pending" style="${a===`pending`?`background: #0d0d0d; color: #fff;`:``}">
            PENDING (${t})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${a===`approved`?`active`:``}" data-filter="approved" style="${a===`approved`?`background: #0d0d0d; color: #fff;`:``}">
            APPROVED (${n})
          </button>
          <button type="button" class="btn-swiss-notes sub-filter-pill ${a===`declined`?`active`:``}" data-filter="declined" style="${a===`declined`?`background: #0d0d0d; color: #fff;`:``}">
            DECLINED (${r})
          </button>
        </div>

        <div class="cms-toolbar-actions">
          <a href="request-episode.html" class="btn-swiss-notes" target="_blank" title="Open visitor pitch form">
            OPEN VISITOR PITCH FORM ↗
          </a>
        </div>
      </div>

      <!-- QUEUE LIST -->
      <div id="cms-queue-list">
        ${i.length===0?`
          <div class="empty-state-swiss">
            <div class="empty-tag">00 // QUEUE EMPTY</div>
            <h3>NO SUBMISSIONS FOUND</h3>
            <p>There are no guest proposals currently matching status "${a.toUpperCase()}".</p>
          </div>
        `:i.map(e=>`
          <div class="cms-queue-card" data-sub-id="${e.id}">
            <div class="cms-queue-card-top">
              <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <span class="cms-status-pill ${e.status}">${e.status}</span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #777;">ID: ${e.id}</span>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #777;">SUBMITTED: ${e.submittedAt?new Date(e.submittedAt).toLocaleDateString():`Recent`}</span>
              </div>
              <span class="swiss-pill">${(e.category||`GENERAL`).toUpperCase()}</span>
            </div>

            <div class="cms-queue-body">
              <img src="${e.guestAvatar||`/assets/hero_meaningful_listening.jpg`}" alt="${e.guestName}" class="cms-queue-avatar" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />

              <div class="cms-queue-content">
                <h3>${b(e.title||`Untitled Proposal`)}</h3>
                <div class="cms-queue-guest-meta">
                  GUEST: <strong>${b(e.guestName||`Anonymous`)}</strong>
                  ${e.guestRole?` — <span>${b(e.guestRole)}</span>`:``}
                  ${e.guestEmail?` · <a href="mailto:${e.guestEmail}" style="text-decoration: underline; color: inherit;">${b(e.guestEmail)}</a>`:``}
                </div>
                ${e.guestBio?`<p style="font-size: 0.82rem; color: #555; margin-bottom: 8px;"><strong>Guest Bio:</strong> ${b(e.guestBio)}</p>`:``}
                <div class="cms-queue-summary">
                  <strong>Pitch Summary:</strong> ${b(e.summary||`No summary provided.`)}
                </div>
                ${e.takeaways&&e.takeaways.length?`
                  <div class="cms-queue-takeaways-box">
                    <div class="cms-queue-takeaways-title">PROPOSED LISTENER TAKEAWAYS:</div>
                    <ul class="cms-queue-takeaways-list">
                      ${e.takeaways.map(e=>`<li>${b(e)}</li>`).join(``)}
                    </ul>
                  </div>
                `:``}
              </div>

              <div class="cms-queue-actions">
                ${e.status===`approved`?`
                  <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #166534; font-weight: 700; text-align: center; padding: 6px; background: #eef8ee; border: 1px solid #4ade80;">
                    ✓ PUBLISHED TO ARCHIVE
                  </div>
                `:`
                  <button type="button" class="btn-approve-publish" data-approve-id="${e.id}">
                    ✓ APPROVE &amp; PUBLISH
                  </button>
                `}
                <button type="button" class="btn-review-edit" data-review-id="${e.id}">
                  ✎ REVIEW &amp; EDIT
                </button>
                ${e.status===`pending`?`
                  <button type="button" class="btn-cms-secondary btn-decline-pitch" data-decline-id="${e.id}" style="font-size: 0.7rem; justify-content: center; padding: 6px;">
                    ✕ DECLINE PITCH
                  </button>
                `:``}
                <button type="button" class="btn-cms-del" data-del-sub-id="${e.id}" title="Remove submission proposal" style="align-self: flex-end;">
                  ✕
                </button>
              </div>
            </div>
          </div>
        `).join(``)}
      </div>
    `,e.querySelectorAll(`.sub-filter-pill`).forEach(t=>{t.addEventListener(`click`,()=>{a=t.dataset.filter,h(e)})}),e.querySelectorAll(`[data-approve-id]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=Yi.find(t=>t.id===e.dataset.approveId);if(!t)return;e.disabled=!0,e.textContent=`PUBLISHING...`;let n=String(Math.max(...q.map(e=>parseInt(e.number,10)||0),100)+1),r=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date);await Ci({id:`ep-${n}`,number:n,title:t.title||`Special Session with ${t.guestName}`,category:t.category||`Mental Health`,duration:`48 min`,date:r,featured:!1,guest:{name:t.guestName,role:t.guestRole||`Guest Contributor`,avatar:t.guestAvatar||ea[0].url,bio:t.guestBio||``},summary:t.summary||``,tags:[t.category||`Mental Health`,`Community`],spotifyUrl:`https://open.spotify.com`,appleUrl:`https://podcasts.apple.com`,youtubeId:`dQw4w9WgXcQ`,audioUrl:``,takeaways:t.takeaways&&t.takeaways.length?t.takeaways:[`Clinical and experiential insight from guest conversation.`,`Key somatic practice for presence and regulation.`],transcript:[{time:`00:00`,speaker:`Host`,text:`Welcome to Care 2 Listen. In this episode we are joined by ${t.guestName}.`},{time:`02:15`,speaker:t.guestName,text:t.summary||`Thank you for creating space for this conversation.`}]}),await Qi(t.id,`approved`),c(`✓ Proposal from ${t.guestName} approved & published as Episode #${n}!`),f()})}),e.querySelectorAll(`[data-review-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Yi.find(t=>t.id===e.dataset.reviewId);if(!t)return;let n=String(Math.max(...q.map(e=>parseInt(e.number,10)||0),100)+1),r=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date);_({number:n,title:t.title||``,category:t.category||`Mental Health`,duration:`50 min`,date:r,featured:!1,guest:{name:t.guestName||``,role:t.guestRole||``,avatar:t.guestAvatar||ea[0].url,bio:t.guestBio||``},summary:t.summary||``,tags:[t.category||`Mental Health`],spotifyUrl:`https://open.spotify.com`,appleUrl:`https://podcasts.apple.com`,youtubeId:`dQw4w9WgXcQ`,audioUrl:``,takeaways:t.takeaways&&t.takeaways.length?t.takeaways:[`Key takeaway insight.`],transcript:[{time:`00:00`,speaker:`Host`,text:`Welcome to Care 2 Listen Episode #${n}.`},{time:`01:45`,speaker:t.guestName||`Guest`,text:t.summary||``}]},t.id)})}),e.querySelectorAll(`[data-decline-id]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=Yi.find(t=>t.id===e.dataset.declineId);t&&confirm(`Decline proposal "${t.title}" from ${t.guestName}?`)&&(await Qi(t.id,`declined`),c(`Proposal marked as declined.`),f())})}),e.querySelectorAll(`[data-del-sub-id]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.delSubId;confirm(`Delete this submission proposal permanently?`)&&(await $i(t),c(`Submission removed from queue.`),f())})})}function g(){let r=e.querySelector(`#cms-table-container`);if(!r)return;let i=q.filter(e=>{let r=n===`All`||e.category===n,i=t.toLowerCase().trim(),a=!i||e.title.toLowerCase().includes(i)||e.guest.name.toLowerCase().includes(i)||e.number.includes(i)||e.tags?.some(e=>e.toLowerCase().includes(i));return r&&a});if(i.sort((e,t)=>parseInt(t.number,10)-parseInt(e.number,10)),i.length===0){r.innerHTML=`
        <div class="empty-state-swiss">
          <div class="empty-tag">00 // NO MATCHING RECORDS</div>
          <h3>NO EPISODES FOUND</h3>
          <p>No records match query "${t}". Click "+ PUBLISH NEW EPISODE" to add a new broadcast entry.</p>
        </div>
      `;return}r.innerHTML=`
      <div class="cms-table">
        <div class="cms-table-head">
          <div class="cms-cell-idx">INDEX</div>
          <div class="cms-cell-thumb">ARTWORK</div>
          <div class="cms-cell-title">EPISODE / GUEST INFORMATION</div>
          <div class="cms-cell-cat">TOPIC</div>
          <div class="cms-cell-meta">DURATION / DATE</div>
          <div class="cms-cell-feat">FEATURED</div>
          <div class="cms-cell-act">ACTIONS</div>
        </div>

        <div class="cms-table-rows">
          ${i.map(e=>`
            <div class="cms-row" data-epid="${e.id}">
              <div class="cms-cell-idx">
                <span class="cms-idx-pill">EP // ${e.number}</span>
              </div>
              <div class="cms-cell-thumb">
                <div class="cms-thumb-box">
                  <img src="${e.guest?.avatar||`/assets/hero_meaningful_listening.jpg`}" alt="${e.guest?.name||`Guest`}" class="cms-thumb-img" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                </div>
              </div>
              <div class="cms-cell-title">
                <strong class="cms-ep-title">${e.title}</strong>
                <span class="cms-guest-line">
                  <strong>${e.guest?.name||`TBD`}</strong> — ${e.guest?.role||`Guest`}
                </span>
                <span class="cms-tags-line">TAGS: ${(e.tags||[]).join(` · `)}</span>
              </div>
              <div class="cms-cell-cat">
                <span class="swiss-pill">${(e.category||`GENERAL`).toUpperCase()}</span>
              </div>
              <div class="cms-cell-meta">
                <span class="meta-dur">${e.duration||`N/A`}</span>
                <span class="meta-date">${e.date||`Pending`}</span>
              </div>
              <div class="cms-cell-feat">
                ${e.featured?`<span class="cms-badge-feat">★ YES</span>`:`<span class="cms-badge-dim">NO</span>`}
              </div>
              <div class="cms-cell-act">
                <button class="btn-cms-edit" data-edit-id="${e.id}" title="Edit all fields of this episode">
                  EDIT ✎
                </button>
                <button class="btn-swiss-play" data-play-id="${e.id}" title="Test audio playback">
                  ▶
                </button>
                <button class="btn-cms-del" data-del-id="${e.id}" data-del-num="${e.number}" title="Delete episode record">
                  ✕
                </button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    `,r.querySelectorAll(`[data-edit-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=q.find(t=>t.id===e.dataset.editId);t&&_(t)})}),r.querySelectorAll(`[data-play-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=q.find(t=>t.id===e.dataset.playId);t&&gi.playEpisode(t)})}),r.querySelectorAll(`[data-del-id]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.delId,n=e.dataset.delNum;confirm(`Are you sure you want to delete Episode #${n}? This will remove it from the archive.`)&&await wi(t)&&(c(`✓ Episode #${n} removed from Archive.`),f())})})}function _(t=null,n=null){let i=e.querySelector(`#cms-editor-modal`),a=e.querySelector(`#cms-modal-title`),s=e.querySelector(`#cms-modal-tag`),c=e.querySelector(`#cms-form-fields-container`);if(!i||!c)return;r=t?t.id:null,o=n,t?(s.textContent=`007 // EDITING EPISODE #${t.number}`,a.textContent=`MODIFY ARCHIVE ENTRY: EP // ${t.number}`):(s.textContent=`007 // NEW EPISODE PUBLICATION`,a.textContent=`PUBLISH NEW EPISODE TO ARCHIVE`);let l=t?t.number:String(Math.max(...q.map(e=>parseInt(e.number,10)||0),100)+1),u=new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`2-digit`,year:`numeric`}).format(new Date),d=t||{number:l,title:``,category:`Mental Health`,duration:`52 min`,date:u,featured:!1,guest:{name:``,role:``,avatar:ea[0].url,bio:``},summary:``,tags:[`Mental Health`,`Somatic`,`Healing`],spotifyUrl:`https://open.spotify.com`,appleUrl:`https://podcasts.apple.com`,youtubeId:`dQw4w9WgXcQ`,audioUrl:``,takeaways:[`Core clinical insight from unscripted studio dialogue.`,`Practical self-regulation somatic technique.`],transcript:[{time:`00:00`,speaker:`Host (Maya)`,text:`Welcome back to Care 2 Listen. In this session we unpack an honest conversation.`},{time:`04:15`,speaker:`Guest`,text:`When you finally pause and listen to what your body is holding, everything shifts.`}]};c.innerHTML=`
      <!-- TAB NAVIGATION -->
      <div class="cms-form-tabs">
        <button type="button" class="cms-tab-btn active" data-tab="tab-core">01 // CORE & GUEST</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-editorial">02 // SUMMARY & LINKS</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-content">03 // TAKEAWAYS & TRANSCRIPT</button>
        <button type="button" class="cms-tab-btn" data-tab="tab-preview">04 // LIVE PREVIEW</button>
      </div>

      <!-- TAB 1: CORE & GUEST -->
      <div class="cms-tab-panel active" id="tab-core">
        <div class="cms-form-grid-3">
          <div class="form-group">
            <label class="form-label" for="f-num">EPISODE NUMBER <span class="req">*</span></label>
            <input type="number" id="f-num" required class="form-input" value="${d.number}" placeholder="109" />
          </div>

          <div class="form-group">
            <label class="form-label" for="f-category">TOPIC / CATEGORY <span class="req">*</span></label>
            <input type="text" id="f-category" required list="cat-suggestions" class="form-input" value="${d.category}" placeholder="e.g. Mental Health" />
            <datalist id="cat-suggestions">
              ${bi.filter(e=>e!==`All`).map(e=>`<option value="${e}"></option>`).join(``)}
              <option value="Somatic"></option>
              <option value="Neuroscience"></option>
              <option value="Creativity"></option>
            </datalist>
          </div>

          <div class="form-group">
            <label class="form-label" for="f-duration">DURATION <span class="req">*</span></label>
            <input type="text" id="f-duration" required class="form-input" value="${d.duration||`52 min`}" placeholder="e.g. 52 min" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="f-title">EPISODE HEADLINE / TITLE <span class="req">*</span></label>
          <input type="text" id="f-title" required class="form-input" value="${b(d.title)}" placeholder="e.g. Learning to Sit With the Silence: Why We Rush to Fix What Needs to Be Felt" />
        </div>

        <div class="cms-form-grid-2">
          <div class="form-group">
            <label class="form-label" for="f-date">RELEASE DATE</label>
            <input type="text" id="f-date" class="form-input" value="${d.date||u}" placeholder="e.g. Oct 06, 2026" />
          </div>

          <div class="form-group" style="justify-content: center;">
            <label class="cms-checkbox-label">
              <input type="checkbox" id="f-featured" ${d.featured?`checked`:``} class="cms-checkbox" />
              <span><strong>★ FEATURED EPISODE</strong> (Promote on hero and spotlight banners)</span>
            </label>
          </div>
        </div>

        <!-- GUEST DETAILS BOX -->
        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">GUEST PROFILE & ARTWORK</span>
            <span class="sub-card-note">Displayed in hover preview & show notes</span>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-guest-name">GUEST FULL NAME <span class="req">*</span></label>
              <input type="text" id="f-guest-name" required class="form-input" value="${b(d.guest?.name||``)}" placeholder="e.g. Dr. Elena Rostova" />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-guest-role">GUEST ROLE / SPECIALTY <span class="req">*</span></label>
              <input type="text" id="f-guest-role" required class="form-input" value="${b(d.guest?.role||``)}" placeholder="e.g. Somatic Psychologist & Author" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="f-guest-avatar">GUEST PORTRAIT / FEATURE IMAGE URL <span class="req">*</span></label>
            <div class="cms-avatar-input-row">
              <input type="url" id="f-guest-avatar" required class="form-input" value="${d.guest?.avatar||``}" placeholder="https://images.unsplash.com/..." />
              <div class="cms-avatar-live-thumb">
                <img id="f-avatar-preview-img" src="${d.guest?.avatar||`/assets/hero_meaningful_listening.jpg`}" alt="Preview" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
              </div>
            </div>
          </div>

          <!-- Quick Select Preset Avatars -->
          <div class="cms-presets-row">
            <span class="presets-lbl">1-CLICK HIGH-RES PORTRAIT PRESETS:</span>
            <div class="presets-pills">
              ${ea.map((e,t)=>`
                <button type="button" class="btn-preset-avatar" data-preset-url="${e.url}">
                  ${e.name}
                </button>
              `).join(``)}
            </div>
          </div>

          <div class="form-group" style="margin-top: 14px;">
            <label class="form-label" for="f-guest-bio">GUEST BIOGRAPHY</label>
            <textarea id="f-guest-bio" rows="3" class="form-textarea" placeholder="Detailed bio describing their clinical research, books, or lived experiences...">${b(d.guest?.bio||``)}</textarea>
          </div>
        </div>
      </div>

      <!-- TAB 2: EDITORIAL & LINKS -->
      <div class="cms-tab-panel" id="tab-editorial">
        <div class="form-group">
          <label class="form-label" for="f-summary">EPISODE SYNOPSIS / EXCERPT <span class="req">*</span></label>
          <textarea id="f-summary" rows="4" required class="form-textarea" placeholder="A compelling 2-4 sentence overview of the conversation...">${b(d.summary||``)}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label" for="f-tags">TOPIC TAGS (COMMA SEPARATED)</label>
          <input type="text" id="f-tags" class="form-input" value="${(d.tags||[]).join(`, `)}" placeholder="e.g. Somatic Therapy, Empathy, Silence, Recovery" />
          <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #777; margin-top: 4px;">Separate each keyword with a comma. Used for site search filtering.</span>
        </div>

        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">BROADCAST & EXTERNAL STREAMING LINKS</span>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-spotify">SPOTIFY URL</label>
              <input type="url" id="f-spotify" class="form-input" value="${d.spotifyUrl||`https://open.spotify.com`}" placeholder="https://open.spotify.com/episode/..." />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-apple">APPLE PODCASTS URL</label>
              <input type="url" id="f-apple" class="form-input" value="${d.appleUrl||`https://podcasts.apple.com`}" placeholder="https://podcasts.apple.com/..." />
            </div>
          </div>

          <div class="cms-form-grid-2">
            <div class="form-group">
              <label class="form-label" for="f-youtube">YOUTUBE VIDEO ID</label>
              <input type="text" id="f-youtube" class="form-input" value="${d.youtubeId||`dQw4w9WgXcQ`}" placeholder="e.g. dQw4w9WgXcQ" />
            </div>

            <div class="form-group">
              <label class="form-label" for="f-audio-url">DIRECT MP3 STREAM (OPTIONAL)</label>
              <input type="url" id="f-audio-url" class="form-input" value="${d.audioUrl||``}" placeholder="https://cdn.care2listen.com/audio/ep109.mp3" />
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: TAKEAWAYS & TRANSCRIPT -->
      <div class="cms-tab-panel" id="tab-content">
        <!-- KEY TAKEAWAYS REPEATER -->
        <div class="cms-sub-card">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">KEY LESSONS & CLINICAL TAKEAWAYS</span>
            <button type="button" id="btn-add-takeaway" class="btn-cms-secondary-sm">+ ADD TAKEAWAY</button>
          </div>
          <div id="takeaways-list-container" class="cms-repeater-list">
            ${(d.takeaways&&d.takeaways.length?d.takeaways:[`Core takeaway lesson`]).map((e,t)=>`
              <div class="repeater-row takeaway-item">
                <span class="repeater-num">${String(t+1).padStart(2,`0`)}</span>
                <input type="text" class="form-input takeaway-input" value="${b(e)}" placeholder="Key takeaway point..." />
                <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- TRANSCRIPT REPEATER -->
        <div class="cms-sub-card" style="margin-top: 20px;">
          <div class="cms-sub-card-header">
            <span class="sub-card-title">INTERACTIVE AUDIO TRANSCRIPT HIGHLIGHTS</span>
            <button type="button" id="btn-add-transcript" class="btn-cms-secondary-sm">+ ADD DIALOGUE TURN</button>
          </div>
          <div id="transcript-list-container" class="cms-repeater-list">
            ${(d.transcript&&d.transcript.length?d.transcript:[{time:`00:00`,speaker:`Host`,text:``}]).map(e=>`
              <div class="repeater-row transcript-item">
                <input type="text" class="form-input transcript-time" style="max-width: 90px;" value="${e.time||`00:00`}" placeholder="00:00" />
                <input type="text" class="form-input transcript-speaker" style="max-width: 160px;" value="${b(e.speaker||`Host`)}" placeholder="Speaker" />
                <input type="text" class="form-input transcript-text" style="flex: 1;" value="${b(e.text||``)}" placeholder="Dialogue utterance..." />
                <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

      <!-- TAB 4: LIVE PREVIEW -->
      <div class="cms-tab-panel" id="tab-preview">
        <div class="cms-preview-section">
          <div class="preview-box-header">
            <span>LIVE ARCHIVE CARD & TABLE ROW SIMULATION</span>
            <span class="preview-badge">REAL-TIME SYNC</span>
          </div>

          <div class="preview-stage">
            <!-- Simulated Table Row -->
            <div class="preview-table-mock">
              <div class="ep-table-row preview-simulated-row">
                <div class="ep-cell ep-cell-num" id="prev-num">EP // ${d.number}</div>
                <div class="ep-cell ep-cell-title">
                  <strong id="prev-title">${b(d.title||`Your Episode Title Here`)}</strong>
                  <span class="ep-guest-sub" id="prev-guest-sub">${b(d.guest?.name||`Guest Name`)} — ${b(d.guest?.role||`Guest Role`)}</span>
                </div>
                <div class="ep-cell ep-cell-category"><span class="swiss-pill" id="prev-cat">${(d.category||`TOPIC`).toUpperCase()}</span></div>
                <div class="ep-cell ep-cell-duration" id="prev-dur">${d.duration||`52 min`}</div>
                <div class="ep-cell ep-cell-date" id="prev-date">${d.date||u}</div>
                <div class="ep-cell ep-cell-actions">
                  <button type="button" class="btn-swiss-play">▶ PLAY</button>
                  <button type="button" class="btn-swiss-notes">NOTES ↗</button>
                </div>
              </div>
            </div>

            <!-- Simulated Hover Preview Card -->
            <div class="preview-card-wrap">
              <span class="preview-wrap-lbl">SIMULATED GSAP HOVER PREVIEW:</span>
              <div class="ep-hover-preview-card" style="max-width: 260px; margin-top: 10px;">
                <div class="ep-hover-preview-top">
                  <span class="ep-hover-badge" id="prev-hover-badge">EP // ${d.number} • ${(d.category||`TOPIC`).toUpperCase()}</span>
                  <span class="ep-hover-live"><span class="rec-blink-dot"></span> LIVE ARCHIVE</span>
                </div>
                <div class="ep-hover-media" style="height: 155px;">
                  <img id="prev-hover-img" src="${d.guest?.avatar||`/assets/hero_meaningful_listening.jpg`}" alt="Preview" class="ep-hover-img" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                  <div class="ep-hover-overlay-tag">ARCHIVE 2026</div>
                </div>
                <div class="ep-hover-preview-info">
                  <div class="ep-hover-guest-name" id="prev-hover-guest">${d.guest?.name||`GUEST NAME`}</div>
                  <div class="ep-hover-guest-role" id="prev-hover-role">${d.guest?.role||`Guest Specialty`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,c.querySelectorAll(`.cms-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{c.querySelectorAll(`.cms-tab-btn`).forEach(e=>e.classList.remove(`active`)),c.querySelectorAll(`.cms-tab-panel`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=c.querySelector(`#${e.dataset.tab}`);t&&t.classList.add(`active`)})}),c.querySelectorAll(`.btn-preset-avatar`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.presetUrl,n=c.querySelector(`#f-guest-avatar`),r=c.querySelector(`#f-avatar-preview-img`),i=c.querySelector(`#prev-hover-img`);n&&(n.value=t),r&&(r.src=t),i&&(i.src=t)})}),c.querySelector(`#f-guest-avatar`)?.addEventListener(`input`,e=>{let t=e.target.value.trim()||`/assets/hero_meaningful_listening.jpg`,n=c.querySelector(`#f-avatar-preview-img`),r=c.querySelector(`#prev-hover-img`);n&&(n.src=t),r&&(r.src=t)});let f=()=>{let e=c.querySelector(`#f-num`)?.value||`109`,t=c.querySelector(`#f-title`)?.value||`Episode Title`,n=c.querySelector(`#f-category`)?.value||`TOPIC`,r=c.querySelector(`#f-duration`)?.value||`52 min`,i=c.querySelector(`#f-date`)?.value||u,a=c.querySelector(`#f-guest-name`)?.value||`Guest Name`,o=c.querySelector(`#f-guest-role`)?.value||`Guest Specialty`,s=c.querySelector(`#prev-num`),l=c.querySelector(`#prev-title`),d=c.querySelector(`#prev-guest-sub`),f=c.querySelector(`#prev-cat`),p=c.querySelector(`#prev-dur`),m=c.querySelector(`#prev-date`),h=c.querySelector(`#prev-hover-badge`),g=c.querySelector(`#prev-hover-guest`),_=c.querySelector(`#prev-hover-role`);s&&(s.textContent=`EP // ${e}`),l&&(l.textContent=t),d&&(d.textContent=`${a} — ${o}`),f&&(f.textContent=n.toUpperCase()),p&&(p.textContent=r),m&&(m.textContent=i),h&&(h.textContent=`EP // ${e} • ${n.toUpperCase()}`),g&&(g.textContent=a),_&&(_.textContent=o)};c.querySelectorAll(`input, textarea`).forEach(e=>{e.addEventListener(`input`,f)});let p=c.querySelector(`#takeaways-list-container`);c.querySelector(`#btn-add-takeaway`)?.addEventListener(`click`,()=>{let e=p.querySelectorAll(`.takeaway-item`).length+1,t=document.createElement(`div`);t.className=`repeater-row takeaway-item`,t.innerHTML=`
        <span class="repeater-num">${String(e).padStart(2,`0`)}</span>
        <input type="text" class="form-input takeaway-input" placeholder="Another key lesson or clinical observation..." />
        <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
      `,p.appendChild(t),h(t)});let m=c.querySelector(`#transcript-list-container`);c.querySelector(`#btn-add-transcript`)?.addEventListener(`click`,()=>{let e=document.createElement(`div`);e.className=`repeater-row transcript-item`,e.innerHTML=`
        <input type="text" class="form-input transcript-time" style="max-width: 90px;" value="00:00" placeholder="00:00" />
        <input type="text" class="form-input transcript-speaker" style="max-width: 160px;" value="Guest" placeholder="Speaker" />
        <input type="text" class="form-input transcript-text" style="flex: 1;" placeholder="Dialogue utterance..." />
        <button type="button" class="btn-repeater-del" title="Remove">&times;</button>
      `,m.appendChild(e),h(e)}),c.querySelectorAll(`.btn-repeater-del`).forEach(e=>{e.addEventListener(`click`,()=>{e.closest(`.repeater-row`)?.remove()})});function h(e){e.querySelector(`.btn-repeater-del`)?.addEventListener(`click`,()=>{e.remove()})}i.classList.remove(`hidden`),document.body.style.overflow=`hidden`;let g=i.querySelector(`.cms-form-scrollable`);g&&(g.scrollTop=0)}function v(){let t=e.querySelector(`#cms-editor-modal`);t&&t.classList.add(`hidden`),document.body.style.overflow=``,r=null,o=null}function y(){e.querySelector(`#btn-admin-logout`)?.addEventListener(`click`,()=>{sessionStorage.removeItem(l),c(`🔒 Admin session locked. Console restricted.`),d()}),e.querySelector(`#cms-tab-episodes`)?.addEventListener(`click`,()=>{i!==`episodes`&&(i=`episodes`,e.querySelector(`#cms-tab-episodes`)?.classList.add(`active`),e.querySelector(`#cms-tab-submissions`)?.classList.remove(`active`),p())}),e.querySelector(`#cms-tab-submissions`)?.addEventListener(`click`,()=>{i!==`submissions`&&(i=`submissions`,e.querySelector(`#cms-tab-submissions`)?.classList.add(`active`),e.querySelector(`#cms-tab-episodes`)?.classList.remove(`active`),p())}),e.querySelector(`#btn-create-episode-top`)?.addEventListener(`click`,()=>{_(null)}),e.querySelector(`#cms-modal-close`)?.addEventListener(`click`,v),e.querySelector(`#cms-modal-backdrop`)?.addEventListener(`click`,v),e.querySelector(`#cms-btn-cancel`)?.addEventListener(`click`,v);let t=e.querySelector(`#cms-import-modal`),n=()=>{t&&(t.classList.add(`hidden`),document.body.style.overflow=``)};e.querySelector(`#cms-import-close`)?.addEventListener(`click`,n),e.querySelector(`#cms-import-backdrop`)?.addEventListener(`click`,n),e.querySelector(`#cms-import-cancel`)?.addEventListener(`click`,n);let a=e=>{e.key===`Escape`&&(v(),n())};window.removeEventListener(`keydown`,a),window.addEventListener(`keydown`,a),e.querySelector(`#cms-import-submit`)?.addEventListener(`click`,async()=>{let t=await Ei(e.querySelector(`#cms-import-textarea`)?.value||``);t.success?(n(),c(`✓ Successfully imported ${t.count} episodes!`),f()):alert(`Import Error: ${t.error}`)});let s=e.querySelector(`#cms-episode-form`);s?.addEventListener(`submit`,async t=>{t.preventDefault();let n=s.querySelector(`#f-num`)?.value.trim(),i=s.querySelector(`#f-title`)?.value.trim(),a=s.querySelector(`#f-category`)?.value.trim()||`Mental Health`,l=s.querySelector(`#f-duration`)?.value.trim()||`50 min`,u=s.querySelector(`#f-date`)?.value.trim()||`Oct 06, 2026`,d=s.querySelector(`#f-featured`)?.checked||!1,p=s.querySelector(`#f-guest-name`)?.value.trim(),m=s.querySelector(`#f-guest-role`)?.value.trim()||`Guest Specialist`,h=s.querySelector(`#f-guest-avatar`)?.value.trim()||`/assets/hero_meaningful_listening.jpg`,g=s.querySelector(`#f-guest-bio`)?.value.trim()||``,_=t=>{e.querySelectorAll(`.cms-tab-btn`).forEach(e=>{e.classList.toggle(`active`,e.dataset.tab===t)}),e.querySelectorAll(`.cms-tab-panel`).forEach(e=>{e.classList.toggle(`active`,e.id===t)})};if(!n){_(`tab-core`),s.querySelector(`#f-num`)?.focus(),c(`✕ Please enter an episode number.`,!0);return}if(!i){_(`tab-core`),s.querySelector(`#f-title`)?.focus(),c(`✕ Please enter an episode headline/title.`,!0);return}if(!p){_(`tab-core`),s.querySelector(`#f-guest-name`)?.focus(),c(`✕ Please enter the guest full name.`,!0);return}let y=s.querySelector(`#f-summary`)?.value.trim()||``,b=(s.querySelector(`#f-tags`)?.value.trim()||``).split(`,`).map(e=>e.trim()).filter(Boolean),x=s.querySelector(`#f-spotify`)?.value.trim()||`https://open.spotify.com`,S=s.querySelector(`#f-apple`)?.value.trim()||`https://podcasts.apple.com`,C=s.querySelector(`#f-youtube`)?.value.trim()||`dQw4w9WgXcQ`,w=s.querySelector(`#f-audio-url`)?.value.trim()||``,T=[];s.querySelectorAll(`.takeaway-input`).forEach(e=>{let t=e.value.trim();t&&T.push(t)});let E=[];s.querySelectorAll(`.transcript-item`).forEach(e=>{let t=e.querySelector(`.transcript-time`)?.value.trim()||`00:00`,n=e.querySelector(`.transcript-speaker`)?.value.trim()||`Host`,r=e.querySelector(`.transcript-text`)?.value.trim()||``;r&&E.push({time:t,speaker:n,text:r})}),await Ci({id:r||`ep-${n||Date.now()}`,number:n,title:i,category:a,duration:l,date:u,featured:d,guest:{name:p,role:m,avatar:h,bio:g},summary:y,tags:b.length?b:[a],spotifyUrl:x,appleUrl:S,youtubeId:C,audioUrl:w,takeaways:T.length?T:[`Core conversation insight.`],transcript:E.length?E:[{time:`00:00`,speaker:`Host`,text:y}]}),o&&=(await Qi(o,`approved`),null),v(),c(`✓ Episode #${n} saved! Persisted to archive database.`),f()})}function b(e){return e?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}window.addEventListener(`care2listen:episodes-updated`,()=>{document.querySelector(`.cms-dashboard-section`)&&g()}),window.addEventListener(`care2listen:submissions-updated`,()=>{document.querySelector(`.cms-dashboard-section`)&&f()}),u()?f():d()}var na=[{name:`Dr. Elena (Clinical)`,url:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80`},{name:`Julian (Tech/Founder)`,url:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`},{name:`Amara (Poet/Advocate)`,url:`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80`},{name:`Kiran (Family Mediation)`,url:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80`},{name:`Hannah (Caregiver)`,url:`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80`},{name:`Tariq (Recovery Counselor)`,url:`https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80`}];function ra(e){e.innerHTML=`
    <!-- SECTION 008: REQUEST AN EPISODE PITCH -->
    <section class="swiss-section request-episode-section" data-section="008">
      <div class="swiss-gutter">
        <span class="gutter-num">008</span>
        <span class="gutter-label">PROPOSAL</span>
      </div>

      <div class="view-header-strip">
        <div class="cms-top-breadcrumbs">
          <span class="view-sub-label">008 // GUEST BROADCAST APPLICATION</span>
          <span class="live-sync-indicator"><span class="rec-blink-dot" style="background: var(--color-vermilion);"></span> SUBMISSIONS OPEN</span>
        </div>

        <div class="cms-headline-row">
          <div>
            <h1 class="view-giant-headline">REQUEST AN EPISODE.</h1>
            <p class="view-lead-copy">
              Have an unscripted story, clinical insight, or transformative human experience to share? Pitch a conversation to Care 2 Listen. Every submission enters our editorial review queue for host review.
            </p>
          </div>
          <div class="cms-primary-cta-group">
            <a href="episodes.html" class="btn-cms-secondary">
              BROWSE ARCHIVE ↗
            </a>
          </div>
        </div>

        <!-- FORM CONTAINER -->
        <div style="max-width: 920px; margin: 32px 0; background: #ffffff; border: 2px solid var(--border-black); box-shadow: 6px 6px 0 var(--border-black); padding: 36px 32px;">
          <div style="border-bottom: 2px solid var(--border-black); padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: var(--color-vermilion); letter-spacing: 0.08em; display: block;">PROPOSAL SPECIFICATION</span>
              <h2 style="font-family: var(--font-sub); font-size: 1.35rem; font-weight: 800; margin: 4px 0 0; color: #0d0d0d;">SUBMIT GUEST & EPISODE PROPOSAL</h2>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #666; font-weight: 600;">AVERAGE REVIEW TIME: 48-72 HOURS</span>
          </div>

          <form id="request-episode-form" style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Core Proposal Details -->
            <div class="cms-form-grid-2">
              <div class="form-group">
                <label class="form-label" for="req-title">PROPOSED EPISODE TITLE / THEME <span class="req">*</span></label>
                <input type="text" id="req-title" required class="form-input" placeholder="e.g. Somatic Healing After Chronic Burnout" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-cat">TOPIC CATEGORY <span class="req">*</span></label>
                <select id="req-cat" required class="form-input">
                  ${bi.filter(e=>e!==`All`).map(e=>`<option value="${e}">${e.toUpperCase()}</option>`).join(``)}
                  <option value="Philosophy">PHILOSOPHY</option>
                  <option value="Somatic">SOMATIC</option>
                  <option value="Identity">IDENTITY</option>
                </select>
              </div>
            </div>

            <div class="cms-form-grid-3">
              <div class="form-group">
                <label class="form-label" for="req-name">YOUR FULL NAME <span class="req">*</span></label>
                <input type="text" id="req-name" required class="form-input" placeholder="e.g. Dr. Jordan Reed" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-role">YOUR ROLE / CREDENTIALS <span class="req">*</span></label>
                <input type="text" id="req-role" required class="form-input" placeholder="e.g. Somatic Clinician & Author" />
              </div>

              <div class="form-group">
                <label class="form-label" for="req-email">CONTACT EMAIL <span class="req">*</span></label>
                <input type="email" id="req-email" required class="form-input" placeholder="jordan@domain.com" />
              </div>
            </div>

            <!-- Avatar & Presets -->
            <div class="form-group">
              <label class="form-label" for="req-avatar">PORTRAIT / HEADSHOT IMAGE URL</label>
              <div style="display: flex; gap: 12px; align-items: center;">
                <input type="url" id="req-avatar" class="form-input" placeholder="https://images.unsplash.com/..." value="${na[0].url}" />
                <div style="width: 50px; height: 50px; border: 1.5px solid var(--border-black); background: #111; flex-shrink: 0; overflow: hidden;">
                  <img id="req-avatar-preview" src="${na[0].url}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/assets/hero_meaningful_listening.jpg'" />
                </div>
              </div>
              <div style="margin-top: 8px;">
                <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #666; font-weight: 700;">OR SELECT PRESET AVATAR:</span>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
                  ${na.map(e=>`
                    <button type="button" class="btn-preset-avatar req-preset-btn" data-url="${e.url}">${e.name}</button>
                  `).join(``)}
                </div>
              </div>
            </div>

            <!-- Bio -->
            <div class="form-group">
              <label class="form-label" for="req-bio">BRIEF GUEST BIO</label>
              <textarea id="req-bio" rows="2" class="form-textarea" placeholder="Brief 2-3 sentences about your background, clinical work, or lived experience..."></textarea>
            </div>

            <!-- Episode Pitch Summary -->
            <div class="form-group">
              <label class="form-label" for="req-summary">CONVERSATION SUMMARY / WHY THIS MATTERS <span class="req">*</span></label>
              <textarea id="req-summary" required rows="4" class="form-textarea" placeholder="Describe the core dialogue, unscripted moments, and philosophical questions you would like to explore..."></textarea>
            </div>

            <!-- Proposed Key Takeaways -->
            <div class="form-group">
              <label class="form-label">KEY TAKEAWAYS FOR LISTENERS (1-3 BULLETS)</label>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 1: Core insight or somatic technique..." />
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 2: Practical self-regulation lesson..." />
                <input type="text" class="form-input req-takeaway" placeholder="Takeaway 3: Reflection prompt (optional)..." />
              </div>
            </div>

            <!-- Submission Feedback Notice -->
            <div id="req-feedback-box" class="hidden" style="padding: 16px; border: 1.5px solid var(--border-black); font-family: var(--font-mono); font-size: 0.8rem;"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1.5px solid var(--border-black); padding-top: 20px; flex-wrap: wrap; gap: 14px;">
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #555;">All accepted pitches will be reviewed in the studio queue.</span>
              <button type="submit" id="btn-submit-pitch" class="btn-cms-primary" style="padding: 12px 28px; font-size: 0.82rem;">
                SUBMIT EPISODE PROPOSAL ⟶
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;let t=e.querySelector(`#req-avatar`),n=e.querySelector(`#req-avatar-preview`);e.querySelectorAll(`.req-preset-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.url;t&&(t.value=r),n&&(n.src=r)})}),t?.addEventListener(`input`,e=>{n&&(n.src=e.target.value.trim()||`/assets/hero_meaningful_listening.jpg`)});let r=e.querySelector(`#request-episode-form`),i=e.querySelector(`#req-feedback-box`),a=e.querySelector(`#btn-submit-pitch`);r?.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.querySelector(`#req-title`)?.value.trim(),o=e.querySelector(`#req-cat`)?.value.trim()||`Mental Health`,s=e.querySelector(`#req-name`)?.value.trim(),c=e.querySelector(`#req-role`)?.value.trim(),l=e.querySelector(`#req-email`)?.value.trim(),u=e.querySelector(`#req-avatar`)?.value.trim()||na[0].url,d=e.querySelector(`#req-bio`)?.value.trim()||``,f=e.querySelector(`#req-summary`)?.value.trim(),p=[];if(e.querySelectorAll(`.req-takeaway`).forEach(e=>{let t=e.value.trim();t&&p.push(t)}),!n||!s||!c||!l||!f){alert(`Please fill in all required fields.`);return}a.disabled=!0,a.textContent=`SUBMITTING PROPOSAL...`;let m=await Zi({title:n,category:o,duration:`50 min`,guest:{name:s,role:c,email:l,avatar:u,bio:d},summary:f,takeaways:p.length?p:[`Core conversation insight.`],status:`pending`});a.disabled=!1,a.textContent=`SUBMIT EPISODE PROPOSAL ⟶`,m.success?(r.reset(),i.className=``,i.style.background=`#eef8ee`,i.style.borderColor=`#4ade80`,i.style.color=`#166534`,i.innerHTML=`
        <strong>✓ PROPOSAL RECEIVED SUCCESSFULLY!</strong><br/>
        Thank you, ${s}. Your episode pitch <em>"${n}"</em> has been added to our editorial review queue.
        Our hosts review submissions weekly and will follow up at <strong>${l}</strong>.
      `):(i.className=``,i.style.background=`#fee2e2`,i.style.borderColor=`#f87171`,i.style.color=`#991b1b`,i.textContent=`✕ Error submitting proposal. Please try again.`)})}function ia(e=`006`){return`
    <!-- SECTION ${e}: MASTER SWISS BRUTALIST FOOTER -->
    <footer class="swiss-section footer-swiss-section" data-section="${e}" role="contentinfo">
      <div class="swiss-gutter">
        <span class="gutter-num">${e}</span>
        <span class="gutter-label">FOOTER</span>
      </div>

      <div class="footer-inner-content">
        <!-- Top Newsletter Strip -->
        <div class="footer-newsletter-bar">
          <div class="fn-left">
            <span class="fn-index">01 // WEEKLY REFLECTIONS</span>
            <h3 class="fn-heading">SUBSCRIBE TO THE TUESDAY GROUNDING LETTER</h3>
            <p class="fn-sub">Curated episode deep-dives, somatic prompts, and certified mental health resources delivered weekly to 34,000+ readers.</p>
          </div>
          <div class="fn-right">
            <form id="footer-nl-form" class="swiss-form-inline">
              <input type="email" id="footer-nl-email" required placeholder="ENTER YOUR EMAIL ADDRESS..." class="swiss-input" />
              <button type="submit" id="footer-nl-btn" class="btn-editorial-pill">SUBSCRIBE ⟶</button>
            </form>
            <span id="footer-nl-msg" class="nl-feedback-text hidden">✓ Subscribed! Welcome to our reflection network.</span>
          </div>
        </div>

        <!-- 4-Column Swiss Sitemap Grid -->
        <div class="footer-sitemap-grid">
          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">01 //</span>
            <h4 class="sitemap-col-title">THE PODCAST</h4>
            <ul class="sitemap-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="episodes.html">Episodes Archive</a></li>
              <li><a href="hosts.html">Meet The Hosts</a></li>
              <li><a href="guests.html">Guest Directory</a></li>
              <li><a href="videos.html">4K Video Channel</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">02 //</span>
            <h4 class="sitemap-col-title">PHILOSOPHY</h4>
            <ul class="sitemap-links">
              <li><a href="about.html">Our Story & Ethos</a></li>
              <li><a href="mission.html">Mission & 4 Pillars</a></li>
              <li><a href="mission.html#pledge">Ethical Broadcast Pledge</a></li>
              <li><a href="become-a-guest.html">Become a Guest</a></li>
              <li><a href="become-a-guest.html#faq">Guest FAQ Accordion</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">03 //</span>
            <h4 class="sitemap-col-title">SUPPORT & TOOLS</h4>
            <ul class="sitemap-links">
              <li><a href="resources.html">24/7 Crisis Helplines</a></li>
              <li><a href="resources.html#books">Curated Reading List</a></li>
              <li><a href="resources.html#apps">Recommended Wellness Apps</a></li>
              <li><a href="community.html">Listener Testimonials</a></li>
              <li><a href="community.html#social">Community Voices</a></li>
            </ul>
          </div>

          <div class="footer-sitemap-col">
            <span class="sitemap-col-num">04 //</span>
            <h4 class="sitemap-col-title">STUDIOS & INQUIRIES</h4>
            <ul class="sitemap-links">
              <li><a href="contact.html">Seattle Soundstage</a></li>
              <li><a href="contact.html">Brooklyn Soundstage</a></li>
              <li><a href="mailto:press@care2listen.com">Press & Media</a></li>
              <li><a href="mailto:hello@care2listen.com">Listener Inquiries</a></li>
              <li><a href="contact.html">Send Us a Direct Note ↗</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Technical Meta Bar -->
        <div class="footer-meta-bottom-bar">
          <div class="meta-copy-cell">
            <strong>© 2026 CARE 2 LISTEN PODCAST PRACTICE.</strong>
            <span>AN INDEPENDENT BROADCAST LABORATORY. ALL RIGHTS RESERVED.</span>
          </div>

          <div class="meta-clinical-disclaimer">
            NON-CLINICAL EDUCATIONAL STORYTELLING. IF IN ACTIVE DISTRESS, DIAL OR TEXT <strong>988</strong> FOR FREE 24/7 CRISIS SUPPORT.
          </div>

          <div class="meta-actions-cell">
            <span class="meta-coords">SEATTLE 47.6062° N, 122.3321° W</span>
            <button id="back-to-top-btn" class="btn-back-to-top" title="Scroll to top of page">TOP ↑</button>
          </div>
        </div>
      </div>
    </footer>
  `}function aa(e){let t=e.querySelector(`#footer-nl-form`),n=e.querySelector(`#footer-nl-email`),r=e.querySelector(`#footer-nl-btn`),i=e.querySelector(`#footer-nl-msg`);t?.addEventListener(`submit`,e=>{e.preventDefault(),n.value.includes(`@`)&&(r.textContent=`SUBSCRIBED!`,i?.classList.remove(`hidden`),n.value=``)}),e.querySelector(`#back-to-top-btn`)?.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})})}function oa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sa(e,t,n){return t&&oa(e.prototype,t),n&&oa(e,n),e}var ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa=function(){return ca||typeof window<`u`&&(ca=window.gsap)&&ca.registerPlugin&&ca},Sa=1,Ca=[],J=[],wa=[],Ta=Date.now,Ea=function(e,t){return t},Da=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,J),r.push.apply(r,wa),J=n,wa=r,Ea=function(e,n){return t[e](n)}},Oa=function(e,t){return~wa.indexOf(e)&&wa[wa.indexOf(e)+1][t]},ka=function(e){return!!~_a.indexOf(e)},Aa=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},ja=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ma=`scrollLeft`,Na=`scrollTop`,Pa=function(){return va&&va.isPressed||J.cache++},Fa=function(e,t){var n=function n(r){if(r||r===0){Sa&&(ua.history.scrollRestoration=`manual`);var i=va&&va.isPressed;r=n.v=Math.round(r)||(va&&va.iOS?1:0),e(r),n.cacheID=J.cache,i&&Ea(`ss`,r)}else(t||J.cache!==n.cacheID||Ea(`ref`))&&(n.cacheID=J.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Ia={s:Ma,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Fa(function(e){return arguments.length?ua.scrollTo(e,La.sc()):ua.pageXOffset||da[Ma]||fa[Ma]||pa[Ma]||0})},La={s:Na,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Ia,sc:Fa(function(e){return arguments.length?ua.scrollTo(Ia.sc(),e):ua.pageYOffset||da[Na]||fa[Na]||pa[Na]||0})},Ra=function(e,t){return(t&&t._ctx&&t._ctx.selector||ca.utils.toArray)(e)[0]||(typeof e==`string`&&ca.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},za=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ba=function(e,t){var n=t.s,r=t.sc;ka(e)&&(e=da.scrollingElement||fa);var i=J.indexOf(e),a=r===La.sc?1:2;!~i&&(i=J.push(e)-1),J[i+a]||Aa(e,`scroll`,Pa);var o=J[i+a],s=o||(J[i+a]=Fa(Oa(e,n),!0)||(ka(e)?r:Fa(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=ca.getProperty(e,`scrollBehavior`)===`smooth`),s},Va=function(e,t,n){var r=e,i=e,a=Ta(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Ta();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Ta();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Ha=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ua=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Wa=function(){ga=ca.core.globals().ScrollTrigger,ga&&ga.core&&Da()},Ga=function(e){return ca=e||xa(),!la&&ca&&typeof document<`u`&&document.body&&(ua=window,da=document,fa=da.documentElement,pa=da.body,_a=[ua,da,fa,pa],ca.utils.clamp,ba=ca.core.context||function(){},ha=`onpointerenter`in pa?`pointer`:`mouse`,ma=Ka.isTouch=ua.matchMedia&&ua.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in ua||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ya=Ka.eventTypes=(`ontouchstart`in fa?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in fa?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Sa=0},500),la=1),ga||Wa(),la};Ia.op=La,J.cache=0;var Ka=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){la||Ga(ca)||console.warn(`Please gsap.registerPlugin(Observer)`),ga||Wa();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,ee=e.onGestureEnd,N=e.onWheel,P=e.onEnable,te=e.onDisable,ne=e.onClick,F=e.scrollSpeed,re=e.capture,I=e.allowClicks,ie=e.lockAxis,ae=e.onLockAxis;this.target=i=Ra(i)||fa,this.vars=e,u&&=ca.utils.toArray(u),t||=1e-9,n||=0,d||=1,F||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(ua.getComputedStyle(pa).lineHeight)||22;var L,oe,se,ce,R,le,ue,z=this,de=0,fe=0,pe=e.passive||!s&&e.passive!==!1,me=Ba(i,Ia),he=Ba(i,La),ge=me(),_e=he(),ve=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&ya[0]===`pointerdown`,ye=ka(i),B=i.ownerDocument||da,be=[0,0,0],V=[0,0,0],H=0,xe=function(){return H=Ta()},Se=function(e,t){return(z.event=e)&&u&&za(e.target,u)||t&&ve&&e.pointerType!==`touch`||A&&A(e,t)},Ce=function(){z._vx.reset(),z._vy.reset(),oe.pause(),c&&c(z)},we=function(){var e=z.deltaX=Ua(be),n=z.deltaY=Ua(V),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(z,e,n,be,V),r&&(v&&z.deltaX>0&&v(z),y&&z.deltaX<0&&y(z),S&&S(z),T&&z.deltaX<0!=de<0&&T(z),de=z.deltaX,be[0]=be[1]=be[2]=0),i&&(x&&z.deltaY>0&&x(z),b&&z.deltaY<0&&b(z),C&&C(z),E&&z.deltaY<0!=fe<0&&E(z),fe=z.deltaY,V[0]=V[1]=V[2]=0),(ce||se)&&(k&&k(z),se&&=(p&&se===1&&p(z),h&&h(z),0),ce=!1),le&&!(le=!1)&&ae&&ae(z),R&&=(N(z),!1),L=0},Te=function(e,t,n){be[n]+=e,V[n]+=t,z._vx.update(e),z._vy.update(t),o?L||=requestAnimationFrame(we):we()},Ee=function(e,t){ie&&!ue&&(z.axis=ue=Math.abs(e)>Math.abs(t)?`x`:`y`,le=!0),ue!==`y`&&(be[2]+=e,z._vx.update(e,!0)),ue!==`x`&&(V[2]+=t,z._vy.update(t,!0)),o?L||=requestAnimationFrame(we):we()},De=function(e){if(!Se(e,1)){e=Ha(e,s);var t=e.clientX,r=e.clientY,i=t-z.x,a=r-z.y,o=z.isDragging;z.x=t,z.y=r,(o||(i||a)&&(Math.abs(z.startX-t)>=n||Math.abs(z.startY-r)>=n))&&(se||=o?2:1,o||(z.isDragging=!0),Ee(i,a))}},U=z.onPress=function(e){Se(e,1)||e&&e.button||(z.axis=ue=null,oe.pause(),z.isPressed=!0,e=Ha(e),de=fe=0,z.startX=z.x=e.clientX,z.startY=z.y=e.clientY,z._vx.reset(),z._vy.reset(),Aa(j?i:B,ya[1],De,pe,!0),z.deltaX=z.deltaY=0,g&&g(z))},Oe=z.onRelease=function(e){if(!Se(e,1)){ja(j?i:B,ya[1],De,!0);var t=!isNaN(z.y-z.startY),n=z.isDragging,r=n&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),a=Ha(e);!r&&t&&(z._vx.reset(),z._vy.reset(),s&&I&&ca.delayedCall(.08,function(){if(Ta()-H>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(B.createEvent){var t=B.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,ua,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,c&&n&&!j&&oe.restart(!0),se&&we(),m&&n&&m(z),_&&_(z,r)}},W=function(e){return e.touches&&e.touches.length>1&&(z.isGesturing=!0)&&M(e,z.isDragging)},ke=function(){return(z.isGesturing=!1)||ee(z)},Ae=function(e){if(!Se(e)){var t=me(),n=he();Te((t-ge)*F,(n-_e)*F,1),ge=t,_e=n,c&&oe.restart(!0)}},je=function(e){if(!Se(e)){e=Ha(e,s),N&&(R=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?ua.innerHeight:1)*d;Te(e.deltaX*t,e.deltaY*t,0),c&&!j&&oe.restart(!0)}},Me=function(e){if(!Se(e)){var t=e.clientX,n=e.clientY,r=t-z.x,i=n-z.y;z.x=t,z.y=n,ce=!0,c&&oe.restart(!0),(r||i)&&Ee(r,i)}},Ne=function(e){z.event=e,D(z)},Pe=function(e){z.event=e,O(z)},Fe=function(e){return Se(e)||Ha(e,s)&&ne(z)};oe=z._dc=ca.delayedCall(l||.25,Ce).pause(),z.deltaX=z.deltaY=0,z._vx=Va(0,50,!0),z._vy=Va(0,50,!0),z.scrollX=me,z.scrollY=he,z.isDragging=z.isGesturing=z.isPressed=!1,ba(this),z.enable=function(e){return z.isEnabled||(Aa(ye?B:i,`scroll`,Pa),r.indexOf(`scroll`)>=0&&Aa(ye?B:i,`scroll`,Ae,pe,re),r.indexOf(`wheel`)>=0&&Aa(i,`wheel`,je,pe,re),(r.indexOf(`touch`)>=0&&ma||r.indexOf(`pointer`)>=0)&&(Aa(i,ya[0],U,pe,re),Aa(B,ya[2],Oe),Aa(B,ya[3],Oe),I&&Aa(i,`click`,xe,!0,!0),ne&&Aa(i,`click`,Fe),M&&Aa(B,`gesturestart`,W),ee&&Aa(B,`gestureend`,ke),D&&Aa(i,ha+`enter`,Ne),O&&Aa(i,ha+`leave`,Pe),k&&Aa(i,ha+`move`,Me)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=ce=se=!1,z._vx.reset(),z._vy.reset(),ge=me(),_e=he(),e&&e.type&&U(e),P&&P(z)),z},z.disable=function(){z.isEnabled&&(Ca.filter(function(e){return e!==z&&ka(e.target)}).length||ja(ye?B:i,`scroll`,Pa),z.isPressed&&(z._vx.reset(),z._vy.reset(),ja(j?i:B,ya[1],De,!0)),ja(ye?B:i,`scroll`,Ae,re),ja(i,`wheel`,je,re),ja(i,ya[0],U,re),ja(B,ya[2],Oe),ja(B,ya[3],Oe),ja(i,`click`,xe,!0),ja(i,`click`,Fe),ja(B,`gesturestart`,W),ja(B,`gestureend`,ke),ja(i,ha+`enter`,Ne),ja(i,ha+`leave`,Pe),ja(i,ha+`move`,Me),z.isEnabled=z.isPressed=z.isDragging=!1,te&&te(z))},z.kill=z.revert=function(){z.disable();var e=Ca.indexOf(z);e>=0&&Ca.splice(e,1),va===z&&(va=0)},Ca.push(z),j&&ka(i)&&(va=z),z.enable(f)},sa(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();Ka.version=`3.15.0`,Ka.create=function(e){return new Ka(e)},Ka.register=Ga,Ka.getAll=function(){return Ca.slice()},Ka.getById=function(e){return Ca.filter(function(t){return t.vars.id===e})[0]},xa()&&ca.registerPlugin(Ka);var Y,qa,X,Ja,Ya,Z,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To=1,Eo=Date.now,Do=Eo(),Oo=0,ko=0,Ao=function(e,t,n){var r=Ko(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},jo=function(e,t){return t&&(!Ko(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Mo=function e(){return ko&&requestAnimationFrame(e)},No=function(){return ro=1},Po=function(){return ro=0},Fo=function(e){return e},Io=function(e){return Math.round(e*1e5)/1e5||0},Lo=function(){return typeof window<`u`},Ro=function(){return Y||Lo()&&(Y=window.gsap)&&Y.registerPlugin&&Y},zo=function(e){return!!~Xa.indexOf(e)},Bo=function(e){return(e===`Height`?xo:X[`inner`+e])||Ya[`client`+e]||Z[`client`+e]},Vo=function(e){return Oa(e,`getBoundingClientRect`)||(zo(e)?function(){return pc.width=X.innerWidth,pc.height=xo,pc}:function(){return _s(e)})},Ho=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Oa(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Bo(i):e[`client`+i])||0}},Uo=function(e,t){return!t||~wa.indexOf(e)?Vo(e):function(){return pc}},Wo=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Oa(e,n))?a()-Vo(e)()[i]:zo(e)?(Ya[n]||Z[n])-Bo(r):e[n]-e[`offset`+r])},Go=function(e,t){for(var n=0;n<co.length;n+=3)(!t||~t.indexOf(co[n+1]))&&e(co[n],co[n+1],co[n+2])},Ko=function(e){return typeof e==`string`},qo=function(e){return typeof e==`function`},Jo=function(e){return typeof e==`number`},Yo=function(e){return typeof e==`object`},Xo=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},Zo=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Qo=Math.abs,$o=`left`,es=`top`,ts=`right`,ns=`bottom`,rs=`width`,is=`height`,as=`Right`,os=`Left`,ss=`Top`,cs=`Bottom`,ls=`padding`,us=`margin`,ds=`Width`,fs=`Height`,ps=`px`,ms=function(e){return X.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hs=function(e){var t=ms(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},gs=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_s=function(e,t){var n=t&&ms(e)[io]!==`matrix(1, 0, 0, 1, 0, 0)`&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},vs=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},ys=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},bs=function(e){return function(t){return Y.utils.snap(ys(e),t)}},xs=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Ss=function(e){return function(t,n){return xs(ys(e))(t,n.direction)}},Cs=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},ws=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Ts=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Es=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Ds={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Os={toggleActions:`play`,anticipatePin:0},ks={top:0,left:0,center:.5,bottom:1,right:1},As=function(e,t){if(Ko(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in ks?ks[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},js=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=Ja.createElement(`div`),m=zo(n)||Oa(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?Z:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===La?ts:ns)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Ms(p,0,r,_),p},Ms=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+ds]=1,i[`border`+o+ds]=0,i[n.p]=t+`px`,Y.set(e,i)},Q=[],Ns={},Ps,Fs=function(){return Eo()-Oo>34&&(Ps||=requestAnimationFrame(ic))},Is=function(){(!po||!po.isPressed||po.startX>Z.clientWidth)&&(J.cache++,po?Ps||=requestAnimationFrame(ic):ic(),Oo||Hs(`scrollStart`),Oo=Eo())},Ls=function(){go=X.innerWidth,ho=X.innerHeight},Rs=function(e){J.cache++,(e===!0||!no&&!fo&&!Ja.fullscreenElement&&!Ja.webkitFullscreenElement&&(!mo||go!==X.innerWidth||Math.abs(X.innerHeight-ho)>X.innerHeight*.25))&&Za.restart(!0)},zs={},Bs=[],Vs=function e(){return Ts($,`scrollEnd`,e)||ec(!0)},Hs=function(e){return zs[e]&&zs[e].map(function(e){return e()})||Bs},Us=[],Ws=function(e){for(var t=0;t<Us.length;t+=5)(!e||Us[t+4]&&Us[t+4].query===e)&&(Us[t].style.cssText=Us[t+1],Us[t].getBBox&&Us[t].setAttribute(`transform`,Us[t+2]||``),Us[t+3].uncache=1)},Gs=function(){return J.forEach(function(e){return qo(e)&&++e.cacheID&&(e.rec=e())})},Ks=function(e,t){var n;for(ao=0;ao<Q.length;ao++)n=Q[ao],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));So=!0,t&&Ws(t),t||Hs(`revert`)},qs=function(e,t){J.cache++,(t||!Js)&&J.forEach(function(e){return qo(e)&&e.cacheID++&&(e.rec=0)}),Ko(e)&&(X.history.scrollRestoration=yo=e)},Js,Ys=0,Xs,Zs=function(){if(Xs!==Ys){var e=Xs=Ys;requestAnimationFrame(function(){return e===Ys&&ec(!0)})}},Qs=function(){Z.appendChild(bo),xo=!po&&bo.offsetHeight||X.innerHeight,Z.removeChild(bo)},$s=function(e){return Qa(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},ec=function(e,t){if(Ya=Ja.documentElement,Z=Ja.body,Xa=[X,Ja,Ya,Z],Oo&&!e&&!So){ws($,`scrollEnd`,Vs);return}Qs(),Js=$.isRefreshing=!0,So||Gs();var n=Hs(`refreshInit`);lo&&$.sort(),t||Ks(),J.forEach(function(e){qo(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Q.slice(0).forEach(function(e){return e.refresh()}),So=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Co=1,$s(!0),Q.forEach(function(e){var t=Wo(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),$s(!1),Co=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),J.forEach(function(e){qo(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),qs(yo,1),Za.pause(),Ys++,Js=2,ic(2),Q.forEach(function(e){return qo(e.vars.onRefresh)&&e.vars.onRefresh(e)}),Js=$.isRefreshing=!1,Hs(`refresh`)},tc=0,nc=1,rc,ic=function(e){if(e===2||!Js&&!So){$.isUpdating=!0,rc&&rc.update(0);var t=Q.length,n=Eo(),r=n-Do>=50,i=t&&Q[0].scroll();if(nc=tc>i?-1:1,Js||(tc=i),r&&(Oo&&!ro&&n-Oo>200&&(Oo=0,Hs(`scrollEnd`)),eo=Do,Do=n),nc<0){for(ao=t;ao-->0;)Q[ao]&&Q[ao].update(0,r);nc=1}else for(ao=0;ao<t;ao++)Q[ao]&&Q[ao].update(0,r);$.isUpdating=!1}Ps=0},ac=[$o,es,ns,ts,us+cs,us+as,us+ss,us+os,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],oc=ac.concat([rs,is,`boxSizing`,`max`+ds,`max`+fs,`position`,us,ls,ls+ss,ls+as,ls+cs,ls+os]),sc=function(e,t,n){uc(n);var r=e._gsap;if(r.spacerIsNative)uc(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},cc=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=ac.length,a=t.style,o=e.style,s;i--;)s=ac[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[ns]=o[ts]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[rs]=vs(e,Ia)+ps,a[is]=vs(e,La)+ps,a[ls]=o[us]=o[es]=o[$o]=`0`,uc(r),o[rs]=o[`max`+ds]=n[rs],o[is]=o[`max`+fs]=n[is],o[ls]=n[ls],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},lc=/([A-Z])/g,uc=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(lc,`-$1`).toLowerCase())}},dc=function(e){for(var t=oc.length,n=e.style,r=[],i=0;i<t;i++)r.push(oc[i],n[oc[i]]);return r.t=e,r},fc=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},pc={left:0,top:0},mc=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){qo(e)&&(e=e(s)),Ko(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?As(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),Jo(e))f&&(e=Y.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Ms(o,n,r,!0);else{qo(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Ra(t,s)||Z,y=_s(_)||{},(!y||!y.left&&!y.top)&&ms(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=_s(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=As(v[0],y[r.d]),x=As(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Ms(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Ms(a,C,r,w&&C>20||!w&&(u?Math.max(Z[h],Ya[h]):a.parentNode[h])<=C+1),u&&(c=_s(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+ps))}return f&&_&&(h=_s(_),f.seek(d),g=_s(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},hc=/(webkit|moz|length|cssText|inset)/i,gc=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===Z){for(a in e._stOrig=i.cssText,o=ms(e),o)!+a&&!hc.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},_c=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},vc=function(e,t,n){var r={};r[t.p]=`+=`+n,Y.set(e,r)},yc=function(e,t){var n=Ba(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=_c(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){J.cache++,t.tween&&ic()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Y.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},ws(e,`wheel`,n.wheelHandler),$.isTouch&&ws(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){qa||e.register(Y)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),vo(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ko){this.update=this.refresh=this.kill=Fo;return}t=gs(Ko(t)||Jo(t)||t.nodeType?{trigger:t}:t,Os);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Ia:La,T=!l&&l!==0,E=Ra(t.scroller||X),D=Y.core.getCache(E),O=zo(E),k=(`pinType`in t?t.pinType:Oa(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Os.markers,ee=O?0:parseFloat(ms(E)[`border`+w.p2+ds])||0,N=this,P=t.onRefreshInit&&function(){return t.onRefreshInit(N)},te=Ho(E,O,w),ne=Uo(E,O),F=0,re=0,I=0,ie=Ba(E,w),ae,L,oe,se,ce,R,le,ue,z,de,fe,pe,me,he,ge,_e,ve,ye,B,be,V,H,xe,Se,Ce,we,Te,Ee,De,U,Oe,W,ke,Ae,je,Me,Ne,Pe,Fe;if(N._startClamp=N._endClamp=!1,N._dir=w,m*=45,N.scroller=E,N.scroll=x?x.time.bind(x):ie,se=ie(),N.vars=t,n||=t.animation,`refreshPriority`in t&&(lo=1,t.refreshPriority===-9999&&(rc=N)),D.tweenScroll=D.tweenScroll||{top:yc(E,La),left:yc(E,Ia)},N.tweenTo=ae=D.tweenScroll[w.p],N.scrubDuration=function(e){ke=Jo(e)&&e,ke?W?W.duration(e):W=Y.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:ke,paused:!0,onComplete:function(){return h&&h(N)}}):(W&&W.progress(1).kill(),W=0)},n&&(n.vars.lazy=!1,n._initted&&!N.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),N.animation=n.pause(),n.scrollTrigger=N,N.scrubDuration(l),U=0,o||=n.vars.id),v&&((!Yo(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in Z.style&&Y.set(O?[Z,Ya]:E,{scrollBehavior:`auto`}),J.forEach(function(e){return qo(e)&&e.target===(O?Ja.scrollingElement||Ya:E)&&(e.smooth=!1)}),oe=qo(v.snapTo)?v.snapTo:v.snapTo===`labels`?bs(n):v.snapTo===`labelsDirectional`?Ss(n):v.directional===!1?Y.utils.snap(v.snapTo):function(e,t){return xs(v.snapTo)(e,Eo()-re<500?0:t.direction)},Ae=v.duration||{min:.1,max:2},Ae=Yo(Ae)?$a(Ae.min,Ae.max):$a(Ae,Ae),je=Y.delayedCall(v.delay||ke/2||.1,function(){var e=ie(),t=Eo()-re<500,r=ae.tween;if((t||Math.abs(N.getVelocity())<10)&&!r&&!ro&&F!==e){var i=(e-R)/he,a=n&&!T?n.totalProgress():i,o=t?0:(a-Oe)/(Eo()-eo)*1e3||0,s=Y.utils.clamp(-i,1-i,Qo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=oe(c,N),Jo(l)||(l=c),u=Math.max(0,Math.round(R+l*he)),e<=le&&e>=R&&u!==e){if(r&&!r._initted&&r.data<=Qo(u-e))return;v.inertia===!1&&(s=l-i),ae(u,{duration:Ae(Qo(Math.max(Qo(c-a),Qo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:Qo(u-e),onInterrupt:function(){return je.restart(!0)&&p&&Zo(N,p)},onComplete:function(){N.update(),F=ie(),n&&!T&&(W?W.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),U=Oe=n&&!T?n.totalProgress():N.progress,g&&g(N),m&&Zo(N,m)}},e,s*he,u-e-s*he),f&&Zo(N,f,ae.tween)}}else N.isActive&&F!==e&&je.restart(!0)}).pause()),o&&(Ns[o]=N),u=N.trigger=Ra(u||d!==!0&&d),Fe=u&&u._gsap&&u._gsap.stRevert,Fe&&=Fe(N),d=d===!0?u:Ra(d),Ko(a)&&(a={targets:u,className:a}),d&&(f===!1||f===us||(f=!f&&d.parentNode&&d.parentNode.style&&ms(d.parentNode).display===`flex`?!1:ls),N.pin=d,L=Y.core.getCache(d),L.spacer?ge=L.pinState:(b&&(b=Ra(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),L.spacerIsNative=!!b,b&&(L.spacerState=dc(b))),L.spacer=ye=b||Ja.createElement(`div`),ye.classList.add(`pin-spacer`),o&&ye.classList.add(`pin-spacer-`+o),L.pinState=ge=dc(d)),t.force3D!==!1&&Y.set(d,{force3D:!0}),N.spacer=ye=L.spacer,De=ms(d),Se=De[f+w.os2],be=Y.getProperty(d),V=Y.quickSetter(d,w.a,ps),cc(d,ye,De),ve=dc(d)),M){pe=Yo(M)?gs(M,Ds):Ds,de=js(`scroller-start`,o,E,w,pe,0),fe=js(`scroller-end`,o,E,w,pe,0,de),B=de[`offset`+w.op.d2];var Ie=Ra(Oa(E,`content`)||E);ue=this.markerStart=js(`start`,o,Ie,w,pe,B,0,x),z=this.markerEnd=js(`end`,o,Ie,w,pe,B,0,x),x&&(Pe=Y.quickSetter([ue,z],w.a,ps)),!k&&!(wa.length&&Oa(E,`fixedMarkers`)===!0)&&(hs(O?Z:E),Y.set([de,fe],{force3D:!0}),we=Y.quickSetter(de,w.a,ps),Ee=Y.quickSetter(fe,w.a,ps))}if(x){var Le=x.vars.onUpdate,Re=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){N.update(0,0,1),Le&&Le.apply(x,Re||[])})}if(N.previous=function(){return Q[Q.indexOf(N)-1]},N.next=function(){return Q[Q.indexOf(N)+1]},N.revert=function(e,t){if(!t)return N.kill(!0);var r=e!==!1||!N.enabled,i=no;r!==N.isReverted&&(r&&(Me=Math.max(ie(),N.scroll.rec||0),I=N.progress,Ne=n&&n.progress()),ue&&[ue,z,de,fe].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(no=N,N.update(r)),d&&(!y||!N.isActive)&&(r?sc(d,ye,ge):cc(d,ye,ms(d),Ce)),r||N.update(r),no=i,N.isReverted=r)},N.refresh=function(r,i,a,o){if(!no&&N.enabled||i){if(d&&r&&Oo){ws(e,`scrollEnd`,Vs);return}!Js&&P&&P(N),no=N,ae.tween&&!a&&(ae.tween.kill(),ae.tween=0),W&&W.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var s=te(),l=ne(),m=x?x.duration():Wo(E,w),h=he<=.01||!he,g=0,_=o||0,v=Yo(a)?a.end:t.end,b=t.endTrigger||u,S=Yo(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=N.pinnedContainer=t.pinnedContainer&&Ra(t.pinnedContainer,N),D=u&&Math.max(0,Q.indexOf(N))||0,A=D,j,L,oe,pe,B,V,Se,we,Ee,De,U,Oe,ke;for(M&&Yo(a)&&(Oe=Y.getProperty(de,w.p),ke=Y.getProperty(fe,w.p));A-->0;)V=Q[A],V.end||V.refresh(0,1)||(no=N),Se=V.pin,Se&&(Se===u||Se===d||Se===C)&&!V.isReverted&&(De||=[],De.unshift(V),V.revert(!0,!0)),V!==Q[A]&&(D--,A--);for(qo(S)&&(S=S(N)),S=Ao(S,`start`,N),R=mc(S,u,s,w,ie(),ue,de,N,l,ee,k,m,x,N._startClamp&&`_startClamp`)||(d?-.001:0),qo(v)&&(v=v(N)),Ko(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(Ko(S)?S.split(` `)[0]:``)+v:(g=As(v.substr(2),s),v=Ko(S)?S:(x?Y.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,R):R)+g,b=u)),v=Ao(v,`end`,N),le=Math.max(R,mc(v||(b?`100% 0`:m),b,s,w,ie()+g,z,fe,N,l,ee,k,m,x,N._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)V=Q[A]||{},Se=V.pin,Se&&V.start-V._pinPush<=R&&!x&&V.end>0&&(j=V.end-(N._startClamp?Math.max(0,V.start):V.start),(Se===u&&V.start-V._pinPush<R||Se===C)&&isNaN(S)&&(g+=j*(1-V.progress)),Se===d&&(_+=j));if(R+=g,le+=g,N._startClamp&&(N._startClamp+=g),N._endClamp&&!Js&&(N._endClamp=le||-.001,le=Math.min(le,Wo(E,w))),he=le-R||(R-=.01)&&.001,h&&(I=Y.utils.clamp(0,1,Y.utils.normalize(R,le,Me))),N._pinPush=_,ue&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+ie()),Y.set([ue,z],j)),d&&!(Co&&N.end>=Wo(E,w)))j=ms(d),pe=w===La,oe=ie(),H=parseFloat(be(w.a))+_,!m&&le>1&&(U=(O?Ja.scrollingElement||Ya:E).style,U={style:U,value:U[`overflow`+w.a.toUpperCase()]},O&&ms(Z)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(U.style[`overflow`+w.a.toUpperCase()]=`scroll`)),cc(d,ye,j),ve=dc(d),L=_s(d,!0),we=k&&Ba(E,pe?Ia:La)(),f?(Ce=[f+w.os2,he+_+ps],Ce.t=ye,A=f===ls?vs(d,w)+he+_:0,A&&(Ce.push(w.d,A+ps),ye.style.flexBasis!==`auto`&&(ye.style.flexBasis=A+ps)),uc(Ce),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&ie(Me)):(A=vs(d,w),A&&ye.style.flexBasis!==`auto`&&(ye.style.flexBasis=A+ps)),k&&(B={top:L.top+(pe?oe-R:we)+ps,left:L.left+(pe?we:oe-R)+ps,boxSizing:`border-box`,position:`fixed`},B[rs]=B[`max`+ds]=Math.ceil(L.width)+ps,B[is]=B[`max`+fs]=Math.ceil(L.height)+ps,B[us]=B[us+ss]=B[us+as]=B[us+cs]=B[us+os]=`0`,B[ls]=j[ls],B[ls+ss]=j[ls+ss],B[ls+as]=j[ls+as],B[ls+cs]=j[ls+cs],B[ls+os]=j[ls+os],_e=fc(ge,B,y),Js&&ie(0)),n?(Ee=n._initted,uo(1),n.render(n.duration(),!0,!0),xe=be(w.a)-H+he+_,Te=Math.abs(he-xe)>1,k&&Te&&_e.splice(_e.length-2,2),n.render(0,!0,!0),Ee||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),uo(0)):xe=he,U&&(U.value?U.style[`overflow`+w.a.toUpperCase()]=U.value:U.style.removeProperty(`overflow-`+w.a));else if(u&&ie()&&!x)for(L=u.parentNode;L&&L!==Z;)L._pinOffset&&(R-=L._pinOffset,le-=L._pinOffset),L=L.parentNode;De&&De.forEach(function(e){return e.revert(!1,!0)}),N.start=R,N.end=le,se=ce=Js?Me:ie(),!x&&!Js&&(se<Me&&ie(Me),N.scroll.rec=0),N.revert(!1,!0),re=Eo(),je&&(F=-1,je.restart(!0)),no=0,n&&T&&(n._initted||Ne)&&n.progress()!==Ne&&n.progress(Ne||0,!0).render(n.time(),!0,!0),(h||I!==N.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||I||n.vars.immediateRender!==!1)&&n.totalProgress(x&&R<-.001&&!I?Y.utils.normalize(R,le,0):I,!0),N.progress=h||(se-R)/he===I?0:I),d&&f&&(ye._pinOffset=Math.round(N.progress*xe)),W&&W.invalidate(),isNaN(Oe)||(Oe-=Y.getProperty(de,w.p),ke-=Y.getProperty(fe,w.p),vc(de,w,Oe),vc(ue,w,Oe-(o||0)),vc(fe,w,ke),vc(z,w,ke-(o||0))),h&&!Js&&N.update(),c&&!Js&&!me&&(me=!0,c(N),me=!1)}},N.getVelocity=function(){return(ie()-ce)/(Eo()-eo)*1e3||0},N.endAnimation=function(){Xo(N.callbackAnimation),n&&(W?W.progress(1):n.paused()?T||Xo(n,N.direction<0,1):Xo(n,n.reversed()))},N.labelToScroll=function(e){return n&&n.labels&&(R||N.refresh()||R)+n.labels[e]/n.duration()*he||0},N.getTrailing=function(e){var t=Q.indexOf(N),n=N.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(Ko(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return N.direction>0?e.end<=R:e.start>=le})},N.update=function(e,t,r){if(!x||r||e){var o=Js===!0?Me:N.scroll(),c=e?0:(o-R)/he,u=c<0?0:c>1?1:c||0,p=N.progress,h,g,b,D,O,M,ee,P;if(t&&(ce=se,se=x?ie():o,v&&(Oe=U,U=n&&!T?n.totalProgress():u)),m&&d&&!no&&!To&&Oo&&(!u&&R<o+(o-ce)/(Eo()-eo)*m?u=1e-4:u===1&&le>o+(o-ce)/(Eo()-eo)*m&&(u=.9999)),u!==p&&N.enabled){if(h=N.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,N.direction=u>p?1:-1,N.progress=u,O&&!no&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],P=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||P)&&(P||l||!n)&&(qo(C)?C(N):N.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(W&&!no&&!To?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo(`totalProgress`,u,n._tTime/n._tDur):(W.vars.totalProgress=u,W.invalidate().restart())):n&&n.totalProgress(u,!!(no&&(re||e)))),d){if(e&&f&&(ye.style[f+w.os2]=Se),!k)V(Io(H+xe*u));else if(O){if(ee=!e&&u>p&&le+1>o&&o+1>=Wo(E,w),y){if(!e&&(h||ee)){var te=_s(d,!0),ne=o-R;gc(d,Z,te.top+(w===La?ne:0)+ps,te.left+(w===La?0:ne)+ps)}else gc(d,ye)}uc(h||ee?_e:ve),Te&&u<1&&h||V(H+(u===1&&!ee?xe:0))}}v&&!ae.tween&&!no&&!To&&je.restart(!0),a&&(M||_&&u&&(u<1||!wo))&&Qa(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(N),O&&!no?(T&&(P&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(N)),(M||!wo)&&(s&&M&&Zo(N,s),A[b]&&Zo(N,A[b]),_&&(u===1?N.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&Zo(N,A[b]))),S&&!h&&Math.abs(N.getVelocity())>(Jo(S)?S:2500)&&(Xo(N.callbackAnimation),W?W.progress(1):Xo(n,D===`reverse`?1:!u,1))):T&&i&&!no&&i(N)}if(Ee){var F=x?o/x.duration()*(x._caScrollDist||0):o;we(F+ +!!de._isFlipped),Ee(F)}Pe&&Pe(-o/x.duration()*(x._caScrollDist||0))}},N.enable=function(t,n){N.enabled||(N.enabled=!0,ws(E,`resize`,Rs),O||ws(E,`scroll`,Is),P&&ws(e,`refreshInit`,P),t!==!1&&(N.progress=I=0,se=ce=F=ie()),n!==!1&&N.refresh())},N.getTween=function(e){return e&&ae?ae.tween:W},N.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}N.refresh(!1,!1,{start:jo(e,n&&!!N._startClamp),end:jo(t,n&&!!N._endClamp)},r),N.update()},N.adjustPinSpacing=function(e){if(Ce&&e){var t=Ce.indexOf(w.d)+1;Ce[t]=parseFloat(Ce[t])+e+ps,Ce[1]=parseFloat(Ce[1])+e+ps,uc(Ce)}},N.disable=function(t,n){if(t!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,n||W&&W.pause(),Me=0,L&&(L.uncache=1),P&&Ts(e,`refreshInit`,P),je&&(je.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==N)return;Ts(E,`resize`,Rs),O||Ts(E,`scroll`,Is)}},N.kill=function(e,r){N.disable(e,r),W&&!r&&W.kill(),o&&delete Ns[o];var i=Q.indexOf(N);i>=0&&Q.splice(i,1),i===ao&&nc>0&&ao--,i=0,Q.forEach(function(e){return e.scroller===N.scroller&&(i=1)}),i||Js||(N.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),ue&&[ue,z,de,fe].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),rc===N&&(rc=0),d&&(L&&(L.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++}),i||(L.spacer=0)),t.onKill&&t.onKill(N)},Q.push(N),N.enable(!1,!1),Fe&&Fe(N),n&&n.add&&!he){var ze=N.update;N.update=function(){N.update=ze,J.cache++,R||le||N.refresh()},Y.delayedCall(.01,N.update),he=.01,R=le=0}else N.refresh();d&&Zs()},e.register=function(t){return qa||=(Y=t||Ro(),Lo()&&window.document&&e.enable(),ko),qa},e.defaults=function(e){if(e)for(var t in e)Os[t]=e[t];return Os},e.disable=function(e,t){ko=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)}),Ts(X,`wheel`,Is),Ts(Ja,`scroll`,Is),clearInterval(to),Ts(Ja,`touchcancel`,Fo),Ts(Z,`touchstart`,Fo),Cs(Ts,Ja,`pointerdown,touchstart,mousedown`,No),Cs(Ts,Ja,`pointerup,touchend,mouseup`,Po),Za.kill(),Go(Ts);for(var n=0;n<J.length;n+=3)Es(Ts,J[n],J[n+1]),Es(Ts,J[n],J[n+2])},e.enable=function(){if(X=window,Ja=document,Ya=Ja.documentElement,Z=Ja.body,Y){if(Qa=Y.utils.toArray,$a=Y.utils.clamp,vo=Y.core.context||Fo,uo=Y.core.suppressOverwrites||Fo,yo=X.history.scrollRestoration||`auto`,tc=X.pageYOffset||0,Y.core.globals(`ScrollTrigger`,e),Z){ko=1,bo=document.createElement(`div`),bo.style.height=`100vh`,bo.style.position=`absolute`,Qs(),Mo(),Ka.register(Y),e.isTouch=Ka.isTouch,_o=Ka.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mo=Ka.isTouch===1,ws(X,`wheel`,Is),Xa=[X,Ja,Ya,Z],Y.matchMedia?(e.matchMedia=function(e){var t=Y.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Y.addEventListener(`matchMediaInit`,function(){Gs(),Ks()}),Y.addEventListener(`matchMediaRevert`,function(){return Ws()}),Y.addEventListener(`matchMedia`,function(){ec(0,1),Hs(`matchMedia`)}),Y.matchMedia().add(`(orientation: portrait)`,function(){return Ls(),Ls})):console.warn(`Requires GSAP 3.11.0 or later`),Ls(),ws(Ja,`scroll`,Is);var t=Z.hasAttribute(`style`),n=Z.style,r=n.borderTopStyle,i=Y.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=_s(Z),La.m=Math.round(a.top+La.sc())||0,Ia.m=Math.round(a.left+Ia.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(Z.setAttribute(`style`,``),Z.removeAttribute(`style`)),to=setInterval(Fs,250),Y.delayedCall(.5,function(){return To=0}),ws(Ja,`touchcancel`,Fo),ws(Z,`touchstart`,Fo),Cs(ws,Ja,`pointerdown,touchstart,mousedown`,No),Cs(ws,Ja,`pointerup,touchend,mouseup`,Po),io=Y.utils.checkPrefix(`transform`),oc.push(io),qa=Eo(),Za=Y.delayedCall(.2,ec).pause(),co=[Ja,`visibilitychange`,function(){var e=X.innerWidth,t=X.innerHeight;Ja.hidden?(oo=e,so=t):(oo!==e||so!==t)&&Rs()},Ja,`DOMContentLoaded`,ec,X,`load`,ec,X,`resize`,Rs],Go(ws),Q.forEach(function(e){return e.enable(0,1)}),o=0;o<J.length;o+=3)Es(Ts,J[o],J[o+1]),Es(Ts,J[o],J[o+2])}else Ja&&Ja.addEventListener(`DOMContentLoaded`,function t(){e.enable(),Ja.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(wo=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(to)||(to=n)&&setInterval(Fs,n),`ignoreMobileResize`in t&&(mo=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(Go(Ts)||Go(ws,t.autoRefreshEvents||`none`),fo=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Ra(e),r=J.indexOf(n),i=zo(n);~r&&J.splice(r,i?6:2),t&&(i?wa.unshift(X,t,Z,t,Ya,t):wa.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(Ko(e)?Ra(e):e).getBoundingClientRect(),i=r[n?rs:is]*t||0;return n?r.right-i>0&&r.left+i<X.innerWidth:r.bottom-i>0&&r.top+i<X.innerHeight},e.positionInViewport=function(e,t,n){Ko(e)&&(e=Ra(e));var r=e.getBoundingClientRect(),i=r[n?rs:is],a=t==null?i/2:t in ks?ks[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/X.innerWidth:(r.top+a)/X.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=zs.killAll||[];zs={},t.forEach(function(e){return e()})}},e}();$.version=`3.15.0`,$.saveStyles=function(e){return e?Qa(e).forEach(function(e){if(e&&e.style){var t=Us.indexOf(e);t>=0&&Us.splice(t,5),Us.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Y.core.getCache(e),vo())}}):Us},$.revert=function(e,t){return Ks(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?Rs(!0):(qa||$.register())&&ec(!0)},$.update=function(e){return++J.cache&&ic(e===!0?2:0)},$.clearScrollMemory=qs,$.maxScroll=function(e,t){return Wo(e,t?Ia:La)},$.getScrollFunc=function(e,t){return Ba(Ra(e),t?Ia:La)},$.getById=function(e){return Ns[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!Oo},$.snapDirectional=xs,$.addEventListener=function(e,t){var n=zs[e]||(zs[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=zs[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=Y.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&qo(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return qo(a)&&(a=a(),ws($,`refresh`,function(){return a=t.batchMax()})),Qa(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n};var bc=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},xc=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(Ka.isTouch?` pinch-zoom`:``):`none`,t===Ya&&e(Z,n)},Sc={auto:1,scroll:1},Cc=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Y.core.getCache(i),o=Eo(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==Z&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Sc[(s=ms(i)).overflowY]||Sc[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!zo(i)&&(Sc[(s=ms(i)).overflowY]||Sc[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},wc=function(e,t,n,r){return Ka.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Cc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ws(Ja,Ka.eventTypes[0],Dc,!1,!0)},onDisable:function(){return Ts(Ja,Ka.eventTypes[0],Dc,!0)}})},Tc=/(input|label|select|textarea)/i,Ec,Dc=function(e){var t=Tc.test(e.target.tagName);(t||Ec)&&(e._gsapAllow=!0,Ec=t)},Oc=function(e){Yo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Ra(e.target)||Ya,l=Y.core.globals().ScrollSmoother,u=l&&l.get(),d=_o&&(e.content&&Ra(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Ba(c,La),p=Ba(c,Ia),m=1,h=(Ka.isTouch&&X.visualViewport?X.visualViewport.scale*X.visualViewport.width:X.outerWidth)/X.innerWidth,g=0,_=qo(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=wc(c,e.type,!0,i),x=function(){return y=!1},S=Fo,C=Fo,w=function(){s=Wo(c,La),C=$a(+!!_o,s),n&&(S=$a(0,Wo(c,Ia))),v=Ys},T=function(){d._gsap.y=Io(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Io(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Io((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=J.cache,ic()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Y.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return _o&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Io((X.visualViewport&&X.visualViewport.scale||1)/h),D.pause(),e!==m&&xc(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=Ys},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{J.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=bc(p,i,o,Wo(c,Ia)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=bc(f,i,o,Wo(c,La)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(_o&&D.vars.scrollY>=s||i>=s-1)&&Y.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Eo()-g>1e3&&(v=0,g=Eo())},e.onChange=function(e,t,r,i,a){if(Ys!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&ic()},e.onEnable=function(){xc(c,!n&&`x`),$.addEventListener(`refresh`,j),ws(X,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){xc(c,!0),Ts(X,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ka(e),o.iOS=_o,_o&&!f()&&f(1),_o&&Y.ticker.add(Fo),A=o._dc,D=Y.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:_c(f,f(),function(){return D.pause()})},onUpdate:ic,onComplete:A.vars.onComplete}),o};$.sort=function(e){if(qo(e))return Q.sort(e);var t=X.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+X.innerHeight}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new Ka(e)},$.normalizeScroll=function(e){if(e===void 0)return po;if(e===!0&&po)return po.enable();if(e===!1){po&&po.kill(),po=e;return}var t=e instanceof Ka?e:Oc(e);return po&&po.target===t.target&&po.kill(),zo(t.target)&&(po=t),t},$.core={_getVelocityProp:Va,_inputObserver:wc,_scrollers:J,_proxies:wa,bridge:{ss:function(){Oo||Hs(`scrollStart`),Oo=Eo()},ref:function(){return no}}},Ro()&&Y.registerPlugin($),K.registerPlugin($);var kc=null;function Ac(e=document){return kc&&=(kc.revert(),null),kc=K.context(()=>{K.matchMedia().add(`(prefers-reduced-motion: no-preference)`,()=>{let e=document.querySelector(`.hero-swiss-section`);if(e){let t=e.querySelector(`.hero-img-studio`),n=e.querySelector(`#hero-studio-tag`);t&&K.to(t,{opacity:1,ease:`power1.out`,scrollTrigger:{trigger:e,start:`top top`,end:`+=160`,scrub:.3,onUpdate:e=>{n&&(e.progress>.4?n.textContent=`AW / 26 — SOUNDSTAGE B`:n.textContent=`AW / 26 — STUDIO 01`)}}});let r=e.querySelector(`.hero-img-listening`);r&&K.fromTo(r,{yPercent:0},{yPercent:8,ease:`none`,scrollTrigger:{trigger:e,start:`top top`,end:`bottom top`,scrub:1}});let i=e.querySelector(`.hero-giant-title`);i&&K.to(i,{yPercent:-6,ease:`none`,scrollTrigger:{trigger:e,start:`top top`,end:`bottom top`,scrub:.8}})}let t=document.querySelector(`.manifesto-swiss-section`);if(t){let e=t.querySelector(`.manifesto-giant-headline`);e&&K.from(e,{x:-30,opacity:.85,ease:`power2.out`,scrollTrigger:{trigger:t,start:`top 85%`,end:`top 40%`,scrub:.8}})}let n=K.utils.toArray(`.quad-col`);n.length>0&&n.forEach((e,t)=>{let n=e.querySelector(`.col-img`);n&&K.fromTo(n,{yPercent:-10},{yPercent:10,ease:`none`,scrollTrigger:{trigger:e,start:`top bottom`,end:`bottom top`,scrub:1}}),t%2==1&&window.innerWidth>860&&K.fromTo(e,{y:16},{y:-16,ease:`none`,scrollTrigger:{trigger:e,start:`top bottom`,end:`bottom top`,scrub:1.2}})});let r=document.querySelector(`.banner-swiss-section`);if(r){let e=r.querySelector(`.banner-giant-text`);e&&K.fromTo(e,{xPercent:6},{xPercent:-18,ease:`none`,scrollTrigger:{trigger:r,start:`top bottom`,end:`bottom top`,scrub:1.2}})}let i=document.querySelector(`.cta-swiss-section`);if(i){let e=i.querySelector(`.cta-bw-img`);e&&K.fromTo(e,{yPercent:-12},{yPercent:12,ease:`none`,scrollTrigger:{trigger:i,start:`top bottom`,end:`bottom top`,scrub:1}})}K.utils.toArray(`.manifesto-img, .host-img-portrait, .spotlight-img, .video-thumb-img`).forEach(e=>{let t=e.parentElement||e;K.fromTo(e,{yPercent:-8},{yPercent:8,ease:`none`,scrollTrigger:{trigger:t,start:`top bottom`,end:`bottom top`,scrub:1}})})})},e),$.refresh(),kc}var jc=document.getElementById(`app-content`),Mc=document.querySelectorAll(`.nav-link`),Nc=document.querySelectorAll(`.drawer-link`),Pc=document.getElementById(`mobile-menu-btn`),Fc=document.getElementById(`mobile-drawer`),Ic=document.getElementById(`drawer-backdrop`),Lc=document.getElementById(`drawer-close`),Rc={home:e=>Mi(e),about:e=>Ni(e),mission:e=>Pi(e),hosts:e=>Ii(e),episodes:e=>Li(e),videos:e=>zi(e),guests:e=>Vi(e),guest:e=>Hi(e),"become-a-guest":e=>Hi(e),"request-episode":e=>ra(e),request:e=>ra(e),resources:e=>Ki(e),community:e=>qi(e),contact:e=>Ji(e),dashboard:e=>ta(e),admin:e=>ta(e)};function zc(){let e=window.location.pathname.toLowerCase();if(e.endsWith(`/admin`)||e.endsWith(`/admin/`))return`admin`;let t=e.match(/\/([a-z0-9_-]+)\.html/);if(t){let e=t[1];if(e===`index`)return`home`;if(Rc[e])return e;if(e===`become-a-guest`)return`guest`}let n=(window.location.hash.replace(`#`,``).toLowerCase()||`home`).split(`?`)[0];return Rc[n]?n:`home`}function Bc(e){let t=e=>e?e.replace(`#`,``).replace(`.html`,``).replace(`./`,``).toLowerCase():``,n=e===`become-a-guest`?`guest`:e;Mc.forEach(e=>{let r=t(e.getAttribute(`href`));r===n||n===`home`&&(r===`home`||r===`index`||r===``)?e.classList.add(`active`):e.classList.remove(`active`)}),Nc.forEach(e=>{let r=t(e.getAttribute(`href`));r===n||n===`home`&&(r===`home`||r===`index`||r===``)?e.classList.add(`active`):e.classList.remove(`active`)})}function Vc(e){if(!jc)return;let t=window.location.hash.match(/id=([^&]+)/);K.to(jc,{opacity:0,y:8,duration:.18,ease:`power2.in`,onComplete:()=>{if(window.scrollTo({top:0,behavior:`instant`}),(Rc[e]||Rc.home)(jc),!jc.querySelector(`footer.footer-swiss-section`)){let e=document.createElement(`div`);e.innerHTML=ia(),e.firstElementChild&&jc.appendChild(e.firstElementChild),aa(jc)}Bc(e),t&&t[1]&&window.openEpisodeDetail&&window.openEpisodeDetail(t[1]),Ac(jc),K.fromTo(jc,{opacity:0,y:12},{opacity:1,y:0,duration:.28,ease:`power2.out`})}})}function Hc(){Fc&&(Fc.style.display=`flex`),K.fromTo(Ic,{opacity:0},{opacity:1,duration:.25}),K.fromTo(`.drawer-panel`,{x:-320},{x:0,duration:.3,ease:`power3.out`})}function Uc(){K.to(Ic,{opacity:0,duration:.2}),K.to(`.drawer-panel`,{x:-320,duration:.25,ease:`power3.in`,onComplete:()=>{Fc&&(Fc.style.display=`none`)}})}Pc?.addEventListener(`click`,Hc),Ic?.addEventListener(`click`,Uc),Lc?.addEventListener(`click`,Uc),Nc.forEach(e=>{e.addEventListener(`click`,()=>{Uc()})}),window.addEventListener(`hashchange`,()=>{Vc(zc())}),document.addEventListener(`DOMContentLoaded`,()=>{_i(),Oi(),q.length>0&&(gi.currentEpisode=q[0],gi.notify());function e(){let e=document.getElementById(`swiss-local-clock`);if(e)try{let t=new Date;e.textContent=new Intl.DateTimeFormat(`en-US`,{timeZone:`America/Los_Angeles`,hour:`2-digit`,minute:`2-digit`,hour12:!1}).format(t)}catch{e.textContent=`13:42`}}e(),setInterval(e,1e4),Vc(zc())});