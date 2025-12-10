(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ia="181",Ml=0,uo=1,Sl=2,uc=1,bl=2,Ln=3,Qn=0,$t=1,Un=2,Fn=0,Fi=1,Ws=2,fo=3,ho=4,yl=5,ui=100,El=101,Tl=102,Al=103,wl=104,Rl=200,Cl=201,Pl=202,Dl=203,Xs=204,Ys=205,Ll=206,Ul=207,Il=208,Nl=209,Fl=210,Ol=211,Bl=212,zl=213,Vl=214,qs=0,js=1,Ks=2,Bi=3,Zs=4,$s=5,Js=6,Qs=7,fc=0,Gl=1,Hl=2,Jn=0,kl=1,Wl=2,Xl=3,Yl=4,ql=5,jl=6,Kl=7,hc=300,zi=301,Vi=302,ea=303,ta=304,ts=306,na=1e3,In=1001,ia=1002,sn=1003,Zl=1004,yr=1005,hn=1006,ds=1007,hi=1008,Bn=1009,dc=1010,pc=1011,ar=1012,Na=1013,pi=1014,Nn=1015,ki=1016,Fa=1017,Oa=1018,or=1020,mc=35902,xc=35899,gc=1021,_c=1022,_n=1023,cr=1026,lr=1027,vc=1028,Ba=1029,za=1030,Va=1031,Ga=1033,Yr=33776,qr=33777,jr=33778,Kr=33779,ra=35840,sa=35841,aa=35842,oa=35843,ca=36196,la=37492,ua=37496,fa=37808,ha=37809,da=37810,pa=37811,ma=37812,xa=37813,ga=37814,_a=37815,va=37816,Ma=37817,Sa=37818,ba=37819,ya=37820,Ea=37821,Ta=36492,Aa=36494,wa=36495,Ra=36283,Ca=36284,Pa=36285,Da=36286,$l=3200,Jl=3201,Ql=0,eu=1,Zn="",un="srgb",Gi="srgb-linear",$r="linear",_t="srgb",Si=7680,po=519,tu=512,nu=513,iu=514,Mc=515,ru=516,su=517,au=518,ou=519,mo=35044,xo="300 es",bn=2e3,Jr=2001;function Sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=Qr("canvas");return i.style.display="block",i}const go={};function _o(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Rt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ur(...i){const e=i.join(" ");e in go||(go[e]=!0,Ke(...i))}function lu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vo=1234567;const rr=Math.PI/180,fr=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Ha(i,e){return(i%e+e)%e}function uu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function fu(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function hu(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function du(i,e=1){return e-Math.abs(Ha(i,e*2)-e)}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gu(i,e){return i+Math.random()*(e-i)}function _u(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(vo=i);let e=vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mu(i){return i*rr}function Su(i){return i*fr}function bu(i){return(i&i-1)===0&&i!==0}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,e,t,n,r){const a=Math.cos,o=Math.sin,c=a(t/2),f=o(t/2),u=a((e+n)/2),d=o((e+n)/2),m=a((e-n)/2),x=o((e-n)/2),v=a((n-e)/2),y=o((n-e)/2);switch(r){case"XYX":i.set(c*d,f*m,f*x,c*u);break;case"YZY":i.set(f*x,c*d,f*m,c*u);break;case"ZXZ":i.set(f*m,f*x,c*d,c*u);break;case"XZX":i.set(c*d,f*y,f*v,c*u);break;case"YXY":i.set(f*v,c*d,f*y,c*u);break;case"ZYZ":i.set(f*y,f*v,c*d,c*u);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ps={DEG2RAD:rr,RAD2DEG:fr,generateUUID:Xi,clamp:st,euclideanModulo:Ha,mapLinear:uu,inverseLerp:fu,lerp:sr,damp:hu,pingpong:du,smoothstep:pu,smootherstep:mu,randInt:xu,randFloat:gu,randFloatSpread:_u,seededRandom:vu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:bu,ceilPowerOfTwo:yu,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:Tu,normalize:Yt,denormalize:Ni};class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,c){let f=n[r+0],u=n[r+1],d=n[r+2],m=n[r+3],x=a[o+0],v=a[o+1],y=a[o+2],T=a[o+3];if(c<=0){e[t+0]=f,e[t+1]=u,e[t+2]=d,e[t+3]=m;return}if(c>=1){e[t+0]=x,e[t+1]=v,e[t+2]=y,e[t+3]=T;return}if(m!==T||f!==x||u!==v||d!==y){let _=f*x+u*v+d*y+m*T;_<0&&(x=-x,v=-v,y=-y,T=-T,_=-_);let p=1-c;if(_<.9995){const I=Math.acos(_),D=Math.sin(I);p=Math.sin(p*I)/D,c=Math.sin(c*I)/D,f=f*p+x*c,u=u*p+v*c,d=d*p+y*c,m=m*p+T*c}else{f=f*p+x*c,u=u*p+v*c,d=d*p+y*c,m=m*p+T*c;const I=1/Math.sqrt(f*f+u*u+d*d+m*m);f*=I,u*=I,d*=I,m*=I}}e[t]=f,e[t+1]=u,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,o){const c=n[r],f=n[r+1],u=n[r+2],d=n[r+3],m=a[o],x=a[o+1],v=a[o+2],y=a[o+3];return e[t]=c*y+d*m+f*v-u*x,e[t+1]=f*y+d*x+u*m-c*v,e[t+2]=u*y+d*v+c*x-f*m,e[t+3]=d*y-c*m-f*x-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,c=Math.cos,f=Math.sin,u=c(n/2),d=c(r/2),m=c(a/2),x=f(n/2),v=f(r/2),y=f(a/2);switch(o){case"XYZ":this._x=x*d*m+u*v*y,this._y=u*v*m-x*d*y,this._z=u*d*y+x*v*m,this._w=u*d*m-x*v*y;break;case"YXZ":this._x=x*d*m+u*v*y,this._y=u*v*m-x*d*y,this._z=u*d*y-x*v*m,this._w=u*d*m+x*v*y;break;case"ZXY":this._x=x*d*m-u*v*y,this._y=u*v*m+x*d*y,this._z=u*d*y+x*v*m,this._w=u*d*m-x*v*y;break;case"ZYX":this._x=x*d*m-u*v*y,this._y=u*v*m+x*d*y,this._z=u*d*y-x*v*m,this._w=u*d*m+x*v*y;break;case"YZX":this._x=x*d*m+u*v*y,this._y=u*v*m+x*d*y,this._z=u*d*y-x*v*m,this._w=u*d*m-x*v*y;break;case"XZY":this._x=x*d*m-u*v*y,this._y=u*v*m-x*d*y,this._z=u*d*y+x*v*m,this._w=u*d*m+x*v*y;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],c=t[5],f=t[9],u=t[2],d=t[6],m=t[10],x=n+c+m;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(d-f)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(d-f)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(f+d)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(f+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,c=t._x,f=t._y,u=t._z,d=t._w;return this._x=n*d+o*c+r*u-a*f,this._y=r*d+o*f+a*c-n*u,this._z=a*d+o*u+n*f-r*c,this._w=o*d-n*c-r*f-a*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,o=-o,c=-c);let f=1-t;if(c<.9995){const u=Math.acos(c),d=Math.sin(u);f=Math.sin(f*u)/d,t=Math.sin(t*u)/d,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+o*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,c=e.z,f=e.w,u=2*(o*r-c*n),d=2*(c*t-a*r),m=2*(a*n-o*t);return this.x=t+f*u+o*m-c*d,this.y=n+f*d+c*u-a*m,this.z=r+f*m+a*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*o-n*f,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new ee,Mo=new hr;class $e{constructor(e,t,n,r,a,o,c,f,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,c,f,u)}set(e,t,n,r,a,o,c,f,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=a,d[5]=f,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],c=n[3],f=n[6],u=n[1],d=n[4],m=n[7],x=n[2],v=n[5],y=n[8],T=r[0],_=r[3],p=r[6],I=r[1],D=r[4],U=r[7],G=r[2],L=r[5],B=r[8];return a[0]=o*T+c*I+f*G,a[3]=o*_+c*D+f*L,a[6]=o*p+c*U+f*B,a[1]=u*T+d*I+m*G,a[4]=u*_+d*D+m*L,a[7]=u*p+d*U+m*B,a[2]=x*T+v*I+y*G,a[5]=x*_+v*D+y*L,a[8]=x*p+v*U+y*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8];return t*o*d-t*c*u-n*a*d+n*c*f+r*a*u-r*o*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8],m=d*o-c*u,x=c*f-d*a,v=u*a-o*f,y=t*m+n*x+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=m*T,e[1]=(r*u-d*n)*T,e[2]=(c*n-r*o)*T,e[3]=x*T,e[4]=(d*t-r*f)*T,e[5]=(r*a-c*t)*T,e[6]=v*T,e[7]=(n*f-u*t)*T,e[8]=(o*t-n*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,c){const f=Math.cos(a),u=Math.sin(a);return this.set(n*f,n*u,-n*(f*o+u*c)+o+e,-r*u,r*f,-r*(-u*o+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(xs.makeScale(e,t)),this}rotate(e){return this.premultiply(xs.makeRotation(-e)),this}translate(e,t){return this.premultiply(xs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xs=new $e,So=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bo=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===_t&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?$r:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:$r,toXYZ:So,fromXYZ:bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:So,fromXYZ:bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const ht=Au();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class wu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Qr("canvas")),bi.width=e.width,bi.height=e.height;const r=bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=On(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ru=0;class ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?a.push(gs(r[o].image)):a.push(gs(r[o]))}else a=gs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Cu=0;const _s=new ee;class jt extends Wi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=In,r=In,a=hn,o=hi,c=_n,f=Bn,u=jt.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Xi(),this.name="",this.source=new ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=f,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_s).x}get height(){return this.source.getSize(_s).y}get depth(){return this.source.getSize(_s).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=hc;jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,u=f[0],d=f[4],m=f[8],x=f[1],v=f[5],y=f[9],T=f[2],_=f[6],p=f[10];if(Math.abs(d-x)<.01&&Math.abs(m-T)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+x)<.1&&Math.abs(m+T)<.1&&Math.abs(y+_)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(u+1)/2,U=(v+1)/2,G=(p+1)/2,L=(d+x)/4,B=(m+T)/4,q=(y+_)/4;return D>U&&D>G?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=L/n,a=B/n):U>G?U<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(U),n=L/r,a=q/r):G<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(G),n=B/a,r=q/a),this.set(n,r,a,t),this}let I=Math.sqrt((_-y)*(_-y)+(m-T)*(m-T)+(x-d)*(x-d));return Math.abs(I)<.001&&(I=1),this.x=(_-y)/I,this.y=(m-T)/I,this.z=(x-d)/I,this.w=Math.acos((u+v+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new jt(r);this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ka(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Pu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bc extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=a.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(a,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Tr.subVectors(this.max,Ji),yi.subVectors(e.a,Ji),Ei.subVectors(e.b,Ji),Ti.subVectors(e.c,Ji),Wn.subVectors(Ei,yi),Xn.subVectors(Ti,Ei),ii.subVectors(yi,Ti);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ii.z,ii.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ii.z,0,-ii.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ii.y,ii.x,0];return!vs(t,yi,Ei,Ti,Tr)||(t=[1,0,0,0,1,0,0,0,1],!vs(t,yi,Ei,Ti,Tr))?!1:(Ar.crossVectors(Wn,Xn),t=[Ar.x,Ar.y,Ar.z],vs(t,yi,Ei,Ti,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],pn=new ee,Er=new dr,yi=new ee,Ei=new ee,Ti=new ee,Wn=new ee,Xn=new ee,ii=new ee,Ji=new ee,Tr=new ee,Ar=new ee,ri=new ee;function vs(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){ri.fromArray(i,a);const c=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),f=e.dot(ri),u=t.dot(ri),d=n.dot(ri);if(Math.max(-Math.max(f,u,d),Math.min(f,u,d))>c)return!1}return!0}const Lu=new dr,Qi=new ee,Ms=new ee;class ns{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Ms)),this.expandByPoint(Qi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new ee,Ss=new ee,wr=new ee,Yn=new ee,bs=new ee,Rr=new ee,ys=new ee;class yc{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ss.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ss);const a=e.distanceTo(t)*.5,o=-this.direction.dot(wr),c=Yn.dot(this.direction),f=-Yn.dot(wr),u=Yn.lengthSq(),d=Math.abs(1-o*o);let m,x,v,y;if(d>0)if(m=o*f-c,x=o*c-f,y=a*d,m>=0)if(x>=-y)if(x<=y){const T=1/d;m*=T,x*=T,v=m*(m+o*x+2*c)+x*(o*m+x+2*f)+u}else x=a,m=Math.max(0,-(o*x+c)),v=-m*m+x*(x+2*f)+u;else x=-a,m=Math.max(0,-(o*x+c)),v=-m*m+x*(x+2*f)+u;else x<=-y?(m=Math.max(0,-(-o*a+c)),x=m>0?-a:Math.min(Math.max(-a,-f),a),v=-m*m+x*(x+2*f)+u):x<=y?(m=0,x=Math.min(Math.max(-a,-f),a),v=x*(x+2*f)+u):(m=Math.max(0,-(o*a+c)),x=m>0?a:Math.min(Math.max(-a,-f),a),v=-m*m+x*(x+2*f)+u);else x=o>0?-a:a,m=Math.max(0,-(o*x+c)),v=-m*m+x*(x+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ss).addScaledVector(wr,x),v}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),r=wn.dot(wn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),c=n-o,f=n+o;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,c,f;const u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,x=this.origin;return u>=0?(n=(e.min.x-x.x)*u,r=(e.max.x-x.x)*u):(n=(e.max.x-x.x)*u,r=(e.min.x-x.x)*u),d>=0?(a=(e.min.y-x.y)*d,o=(e.max.y-x.y)*d):(a=(e.max.y-x.y)*d,o=(e.min.y-x.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),m>=0?(c=(e.min.z-x.z)*m,f=(e.max.z-x.z)*m):(c=(e.max.z-x.z)*m,f=(e.min.z-x.z)*m),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,r,a){bs.subVectors(t,e),Rr.subVectors(n,e),ys.crossVectors(bs,Rr);let o=this.direction.dot(ys),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const f=c*this.direction.dot(Rr.crossVectors(Yn,Rr));if(f<0)return null;const u=c*this.direction.dot(bs.cross(Yn));if(u<0||f+u>o)return null;const d=-c*Yn.dot(ys);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,a,o,c,f,u,d,m,x,v,y,T,_){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,c,f,u,d,m,x,v,y,T,_)}set(e,t,n,r,a,o,c,f,u,d,m,x,v,y,T,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=c,p[13]=f,p[2]=u,p[6]=d,p[10]=m,p[14]=x,p[3]=v,p[7]=y,p[11]=T,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),a=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),c=Math.sin(n),f=Math.cos(r),u=Math.sin(r),d=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const x=o*d,v=o*m,y=c*d,T=c*m;t[0]=f*d,t[4]=-f*m,t[8]=u,t[1]=v+y*u,t[5]=x-T*u,t[9]=-c*f,t[2]=T-x*u,t[6]=y+v*u,t[10]=o*f}else if(e.order==="YXZ"){const x=f*d,v=f*m,y=u*d,T=u*m;t[0]=x+T*c,t[4]=y*c-v,t[8]=o*u,t[1]=o*m,t[5]=o*d,t[9]=-c,t[2]=v*c-y,t[6]=T+x*c,t[10]=o*f}else if(e.order==="ZXY"){const x=f*d,v=f*m,y=u*d,T=u*m;t[0]=x-T*c,t[4]=-o*m,t[8]=y+v*c,t[1]=v+y*c,t[5]=o*d,t[9]=T-x*c,t[2]=-o*u,t[6]=c,t[10]=o*f}else if(e.order==="ZYX"){const x=o*d,v=o*m,y=c*d,T=c*m;t[0]=f*d,t[4]=y*u-v,t[8]=x*u+T,t[1]=f*m,t[5]=T*u+x,t[9]=v*u-y,t[2]=-u,t[6]=c*f,t[10]=o*f}else if(e.order==="YZX"){const x=o*f,v=o*u,y=c*f,T=c*u;t[0]=f*d,t[4]=T-x*m,t[8]=y*m+v,t[1]=m,t[5]=o*d,t[9]=-c*d,t[2]=-u*d,t[6]=v*m+y,t[10]=x-T*m}else if(e.order==="XZY"){const x=o*f,v=o*u,y=c*f,T=c*u;t[0]=f*d,t[4]=-m,t[8]=u*d,t[1]=x*m+T,t[5]=o*d,t[9]=v*m-y,t[2]=y*m-v,t[6]=c*d,t[10]=T*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Iu)}lookAt(e,t,n){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),qn.crossVectors(n,nn),qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),qn.crossVectors(n,nn)),qn.normalize(),Cr.crossVectors(nn,qn),r[0]=qn.x,r[4]=Cr.x,r[8]=nn.x,r[1]=qn.y,r[5]=Cr.y,r[9]=nn.y,r[2]=qn.z,r[6]=Cr.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],c=n[4],f=n[8],u=n[12],d=n[1],m=n[5],x=n[9],v=n[13],y=n[2],T=n[6],_=n[10],p=n[14],I=n[3],D=n[7],U=n[11],G=n[15],L=r[0],B=r[4],q=r[8],A=r[12],g=r[1],E=r[5],V=r[9],k=r[13],J=r[2],Q=r[6],z=r[10],$=r[14],Y=r[3],se=r[7],fe=r[11],De=r[15];return a[0]=o*L+c*g+f*J+u*Y,a[4]=o*B+c*E+f*Q+u*se,a[8]=o*q+c*V+f*z+u*fe,a[12]=o*A+c*k+f*$+u*De,a[1]=d*L+m*g+x*J+v*Y,a[5]=d*B+m*E+x*Q+v*se,a[9]=d*q+m*V+x*z+v*fe,a[13]=d*A+m*k+x*$+v*De,a[2]=y*L+T*g+_*J+p*Y,a[6]=y*B+T*E+_*Q+p*se,a[10]=y*q+T*V+_*z+p*fe,a[14]=y*A+T*k+_*$+p*De,a[3]=I*L+D*g+U*J+G*Y,a[7]=I*B+D*E+U*Q+G*se,a[11]=I*q+D*V+U*z+G*fe,a[15]=I*A+D*k+U*$+G*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],c=e[5],f=e[9],u=e[13],d=e[2],m=e[6],x=e[10],v=e[14],y=e[3],T=e[7],_=e[11],p=e[15];return y*(+a*f*m-r*u*m-a*c*x+n*u*x+r*c*v-n*f*v)+T*(+t*f*v-t*u*x+a*o*x-r*o*v+r*u*d-a*f*d)+_*(+t*u*m-t*c*v-a*o*m+n*o*v+a*c*d-n*u*d)+p*(-r*c*d-t*f*m+t*c*x+r*o*m-n*o*x+n*f*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],f=e[6],u=e[7],d=e[8],m=e[9],x=e[10],v=e[11],y=e[12],T=e[13],_=e[14],p=e[15],I=m*_*u-T*x*u+T*f*v-c*_*v-m*f*p+c*x*p,D=y*x*u-d*_*u-y*f*v+o*_*v+d*f*p-o*x*p,U=d*T*u-y*m*u+y*c*v-o*T*v-d*c*p+o*m*p,G=y*m*f-d*T*f-y*c*x+o*T*x+d*c*_-o*m*_,L=t*I+n*D+r*U+a*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=I*B,e[1]=(T*x*a-m*_*a-T*r*v+n*_*v+m*r*p-n*x*p)*B,e[2]=(c*_*a-T*f*a+T*r*u-n*_*u-c*r*p+n*f*p)*B,e[3]=(m*f*a-c*x*a-m*r*u+n*x*u+c*r*v-n*f*v)*B,e[4]=D*B,e[5]=(d*_*a-y*x*a+y*r*v-t*_*v-d*r*p+t*x*p)*B,e[6]=(y*f*a-o*_*a-y*r*u+t*_*u+o*r*p-t*f*p)*B,e[7]=(o*x*a-d*f*a+d*r*u-t*x*u-o*r*v+t*f*v)*B,e[8]=U*B,e[9]=(y*m*a-d*T*a-y*n*v+t*T*v+d*n*p-t*m*p)*B,e[10]=(o*T*a-y*c*a+y*n*u-t*T*u-o*n*p+t*c*p)*B,e[11]=(d*c*a-o*m*a-d*n*u+t*m*u+o*n*v-t*c*v)*B,e[12]=G*B,e[13]=(d*T*r-y*m*r+y*n*x-t*T*x-d*n*_+t*m*_)*B,e[14]=(y*c*r-o*T*r-y*n*f+t*T*f+o*n*_-t*c*_)*B,e[15]=(o*m*r-d*c*r+d*n*f-t*m*f-o*n*x+t*c*x)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,c=e.y,f=e.z,u=a*o,d=a*c;return this.set(u*o+n,u*c-r*f,u*f+r*c,0,u*c+r*f,d*c+n,d*f-r*o,0,u*f-r*c,d*f+r*o,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,c=t._z,f=t._w,u=a+a,d=o+o,m=c+c,x=a*u,v=a*d,y=a*m,T=o*d,_=o*m,p=c*m,I=f*u,D=f*d,U=f*m,G=n.x,L=n.y,B=n.z;return r[0]=(1-(T+p))*G,r[1]=(v+U)*G,r[2]=(y-D)*G,r[3]=0,r[4]=(v-U)*L,r[5]=(1-(x+p))*L,r[6]=(_+I)*L,r[7]=0,r[8]=(y+D)*B,r[9]=(_-I)*B,r[10]=(1-(x+T))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ai.set(r[0],r[1],r[2]).length();const o=Ai.set(r[4],r[5],r[6]).length(),c=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/a,d=1/o,m=1/c;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=m,mn.elements[9]*=m,mn.elements[10]*=m,t.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,a,o,c=bn,f=!1){const u=this.elements,d=2*a/(t-e),m=2*a/(n-r),x=(t+e)/(t-e),v=(n+r)/(n-r);let y,T;if(f)y=a/(o-a),T=o*a/(o-a);else if(c===bn)y=-(o+a)/(o-a),T=-2*o*a/(o-a);else if(c===Jr)y=-o/(o-a),T=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,a,o,c=bn,f=!1){const u=this.elements,d=2/(t-e),m=2/(n-r),x=-(t+e)/(t-e),v=-(n+r)/(n-r);let y,T;if(f)y=1/(o-a),T=o/(o-a);else if(c===bn)y=-2/(o-a),T=-(o+a)/(o-a);else if(c===Jr)y=-1/(o-a),T=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=d,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=m,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new ee,mn=new Dt,Uu=new ee(0,0,0),Iu=new ee(1,1,1),qn=new ee,Cr=new ee,nn=new ee,yo=new Dt,Eo=new hr;class zn{constructor(e=0,t=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],c=r[8],f=r[1],u=r[5],d=r[9],m=r[2],x=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(st(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-st(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nu=0;const To=new ee,wi=new hr,Rn=new Dt,Pr=new ee,er=new ee,Fu=new ee,Ou=new hr,Ao=new ee(1,0,0),wo=new ee(0,1,0),Ro=new ee(0,0,1),Co={type:"added"},Bu={type:"removed"},Ri={type:"childadded",child:null},Es={type:"childremoved",child:null};class Jt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new ee,t=new zn,n=new hr,r=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new $e}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Ao,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(Ro,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ao,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(Ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(er,Pr,this.up):Rn.lookAt(Pr,er,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Co),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu),Es.child=e,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Co),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let u=0,d=f.length;u<d;u++){const m=f[u];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,u=this.material.length;f<u;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=o(e.geometries),f=o(e.materials),u=o(e.textures),d=o(e.images),m=o(e.shapes),x=o(e.skeletons),v=o(e.animations),y=o(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(c){const f=[];for(const u in c){const d=c[u];delete d.metadata,f.push(d)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new ee(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new ee,Cn=new ee,Ts=new ee,Pn=new ee,Ci=new ee,Pi=new ee,Po=new ee,As=new ee,ws=new ee,Rs=new ee,Cs=new Ct,Ps=new Ct,Ds=new Ct;class gn{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){xn.subVectors(r,t),Cn.subVectors(n,t),Ts.subVectors(e,t);const o=xn.dot(xn),c=xn.dot(Cn),f=xn.dot(Ts),u=Cn.dot(Cn),d=Cn.dot(Ts),m=o*u-c*c;if(m===0)return a.set(0,0,0),null;const x=1/m,v=(u*f-c*d)*x,y=(o*d-c*f)*x;return a.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,a,o,c,f){return this.getBarycoord(e,t,n,r,Pn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Pn.x),f.addScaledVector(o,Pn.y),f.addScaledVector(c,Pn.z),f)}static getInterpolatedAttribute(e,t,n,r,a,o){return Cs.setScalar(0),Ps.setScalar(0),Ds.setScalar(0),Cs.fromBufferAttribute(e,t),Ps.fromBufferAttribute(e,n),Ds.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cs,a.x),o.addScaledVector(Ps,a.y),o.addScaledVector(Ds,a.z),o}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Cn.subVectors(e,t),xn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),xn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,c;Ci.subVectors(r,n),Pi.subVectors(a,n),As.subVectors(e,n);const f=Ci.dot(As),u=Pi.dot(As);if(f<=0&&u<=0)return t.copy(n);ws.subVectors(e,r);const d=Ci.dot(ws),m=Pi.dot(ws);if(d>=0&&m<=d)return t.copy(r);const x=f*m-d*u;if(x<=0&&f>=0&&d<=0)return o=f/(f-d),t.copy(n).addScaledVector(Ci,o);Rs.subVectors(e,a);const v=Ci.dot(Rs),y=Pi.dot(Rs);if(y>=0&&v<=y)return t.copy(a);const T=v*u-f*y;if(T<=0&&u>=0&&y<=0)return c=u/(u-y),t.copy(n).addScaledVector(Pi,c);const _=d*y-v*m;if(_<=0&&m-d>=0&&v-y>=0)return Po.subVectors(a,r),c=(m-d)/(m-d+(v-y)),t.copy(r).addScaledVector(Po,c);const p=1/(_+T+x);return o=T*p,c=x*p,t.copy(n).addScaledVector(Ci,o).addScaledVector(Pi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ls(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=Ha(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Ls(o,a,e+1/3),this.g=Ls(o,a,e),this.b=Ls(o,a,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function n(a){a!==void 0&&parseFloat(a)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ht.workingToColorSpace(kt.copy(this),e),Math.round(st(kt.r*255,0,255))*65536+Math.round(st(kt.g*255,0,255))*256+Math.round(st(kt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,a=kt.b,o=Math.max(n,r,a),c=Math.min(n,r,a);let f,u;const d=(c+o)/2;if(c===o)f=0,u=0;else{const m=o-c;switch(u=d<=.5?m/(o+c):m/(2-o-c),o){case n:f=(r-a)/m+(r<a?6:0);break;case r:f=(a-n)/m+2;break;case a:f=(n-r)/m+4;break}f/=6}return e.h=f,e.s=u,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=un){ht.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Dr);const n=sr(jn.h,Dr.h,t),r=sr(jn.s,Dr.s,t),a=sr(jn.l,Dr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new pt;pt.NAMES=Tc;let zu=0;class pr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Fi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=Ys,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const c in a){const f=a[c];delete f.metadata,o.push(f)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ac extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new ee,Lr=new vt;let Vu=0;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),a=Yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}}class wc extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class di extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gu=0;const ln=new Dt,Us=new Jt,Di=new ee,rn=new dr,tr=new dr,Nt=new ee;class yn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Rc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new $e().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Us.lookAt(e),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const c=t[a];tr.setFromBufferAttribute(c),this.morphTargetsRelative?(Nt.addVectors(rn.min,tr.min),rn.expandByPoint(Nt),Nt.addVectors(rn.max,tr.max),rn.expandByPoint(Nt)):(rn.expandByPoint(tr.min),rn.expandByPoint(tr.max))}rn.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Nt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let a=0,o=t.length;a<o;a++){const c=t[a],f=this.morphTargetsRelative;for(let u=0,d=c.count;u<d;u++)Nt.fromBufferAttribute(c,u),f&&(Di.fromBufferAttribute(e,u),Nt.add(Di)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],f=[];for(let q=0;q<n.count;q++)c[q]=new ee,f[q]=new ee;const u=new ee,d=new ee,m=new ee,x=new vt,v=new vt,y=new vt,T=new ee,_=new ee;function p(q,A,g){u.fromBufferAttribute(n,q),d.fromBufferAttribute(n,A),m.fromBufferAttribute(n,g),x.fromBufferAttribute(a,q),v.fromBufferAttribute(a,A),y.fromBufferAttribute(a,g),d.sub(u),m.sub(u),v.sub(x),y.sub(x);const E=1/(v.x*y.y-y.x*v.y);isFinite(E)&&(T.copy(d).multiplyScalar(y.y).addScaledVector(m,-v.y).multiplyScalar(E),_.copy(m).multiplyScalar(v.x).addScaledVector(d,-y.x).multiplyScalar(E),c[q].add(T),c[A].add(T),c[g].add(T),f[q].add(_),f[A].add(_),f[g].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,A=I.length;q<A;++q){const g=I[q],E=g.start,V=g.count;for(let k=E,J=E+V;k<J;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const D=new ee,U=new ee,G=new ee,L=new ee;function B(q){G.fromBufferAttribute(r,q),L.copy(G);const A=c[q];D.copy(A),D.sub(G.multiplyScalar(G.dot(A))).normalize(),U.crossVectors(L,A);const E=U.dot(f[q])<0?-1:1;o.setXYZW(q,D.x,D.y,D.z,E)}for(let q=0,A=I.length;q<A;++q){const g=I[q],E=g.start,V=g.count;for(let k=E,J=E+V;k<J;k+=3)B(e.getX(k+0)),B(e.getX(k+1)),B(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,v=n.count;x<v;x++)n.setXYZ(x,0,0,0);const r=new ee,a=new ee,o=new ee,c=new ee,f=new ee,u=new ee,d=new ee,m=new ee;if(e)for(let x=0,v=e.count;x<v;x+=3){const y=e.getX(x+0),T=e.getX(x+1),_=e.getX(x+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,T),o.fromBufferAttribute(t,_),d.subVectors(o,a),m.subVectors(r,a),d.cross(m),c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),c.add(d),f.add(d),u.add(d),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(T,f.x,f.y,f.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let x=0,v=t.count;x<v;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),o.fromBufferAttribute(t,x+2),d.subVectors(o,a),m.subVectors(r,a),d.cross(m),n.setXYZ(x+0,d.x,d.y,d.z),n.setXYZ(x+1,d.x,d.y,d.z),n.setXYZ(x+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(c,f){const u=c.array,d=c.itemSize,m=c.normalized,x=new u.constructor(f.length*d);let v=0,y=0;for(let T=0,_=f.length;T<_;T++){c.isInterleavedBufferAttribute?v=f[T]*c.data.stride+c.offset:v=f[T]*d;for(let p=0;p<d;p++)x[y++]=u[v++]}return new vn(x,d,m)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],u=e(f,n);t.setAttribute(c,u)}const a=this.morphAttributes;for(const c in a){const f=[],u=a[c];for(let d=0,m=u.length;d<m;d++){const x=u[d],v=e(x,n);f.push(v)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],d=[];for(let m=0,x=u.length;m<x;m++){const v=u[m];d.push(v.toJSON(e.data))}d.length>0&&(r[f]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],m=a[u];for(let x=0,v=m.length;x<v;x++)d.push(m[x].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new Dt,si=new yc,Ur=new ns,Lo=new ee,Ir=new ee,Nr=new ee,Fr=new ee,Is=new ee,Or=new ee,Uo=new ee,Br=new ee;class ei extends Jt{constructor(e=new yn,t=new Ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Or.set(0,0,0);for(let f=0,u=a.length;f<u;f++){const d=c[f],m=a[f];d!==0&&(Is.fromBufferAttribute(m,e),o?Or.addScaledVector(Is,d):Or.addScaledVector(Is.sub(t),d))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(a),si.copy(e.ray).recast(e.near),!(Ur.containsPoint(si.origin)===!1&&(si.intersectSphere(Ur,Lo)===null||si.origin.distanceToSquared(Lo)>(e.far-e.near)**2))&&(Do.copy(a).invert(),si.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,c=a.index,f=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,x=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(o))for(let y=0,T=x.length;y<T;y++){const _=x[y],p=o[_.materialIndex],I=Math.max(_.start,v.start),D=Math.min(c.count,Math.min(_.start+_.count,v.start+v.count));for(let U=I,G=D;U<G;U+=3){const L=c.getX(U),B=c.getX(U+1),q=c.getX(U+2);r=zr(this,p,e,n,u,d,m,L,B,q),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),T=Math.min(c.count,v.start+v.count);for(let _=y,p=T;_<p;_+=3){const I=c.getX(_),D=c.getX(_+1),U=c.getX(_+2);r=zr(this,o,e,n,u,d,m,I,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(o))for(let y=0,T=x.length;y<T;y++){const _=x[y],p=o[_.materialIndex],I=Math.max(_.start,v.start),D=Math.min(f.count,Math.min(_.start+_.count,v.start+v.count));for(let U=I,G=D;U<G;U+=3){const L=U,B=U+1,q=U+2;r=zr(this,p,e,n,u,d,m,L,B,q),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let _=y,p=T;_<p;_+=3){const I=_,D=_+1,U=_+2;r=zr(this,o,e,n,u,d,m,I,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Hu(i,e,t,n,r,a,o,c){let f;if(e.side===$t?f=n.intersectTriangle(o,a,r,!0,c):f=n.intersectTriangle(r,a,o,e.side===Qn,c),f===null)return null;Br.copy(c),Br.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Br);return u<t.near||u>t.far?null:{distance:u,point:Br.clone(),object:i}}function zr(i,e,t,n,r,a,o,c,f,u){i.getVertexPosition(c,Ir),i.getVertexPosition(f,Nr),i.getVertexPosition(u,Fr);const d=Hu(i,e,t,n,Ir,Nr,Fr,Uo);if(d){const m=new ee;gn.getBarycoord(Uo,Ir,Nr,Fr,m),r&&(d.uv=gn.getInterpolatedAttribute(r,c,f,u,m,new vt)),a&&(d.uv1=gn.getInterpolatedAttribute(a,c,f,u,m,new vt)),o&&(d.normal=gn.getInterpolatedAttribute(o,c,f,u,m,new ee),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const x={a:c,b:f,c:u,normal:new ee,materialIndex:0};gn.getNormal(Ir,Nr,Fr,x.normal),d.face=x,d.barycoord=m}return d}class mr extends yn{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const c=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const f=[],u=[],d=[],m=[];let x=0,v=0;y("z","y","x",-1,-1,n,t,e,o,a,0),y("z","y","x",1,-1,n,t,-e,o,a,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new di(u,3)),this.setAttribute("normal",new di(d,3)),this.setAttribute("uv",new di(m,2));function y(T,_,p,I,D,U,G,L,B,q,A){const g=U/B,E=G/q,V=U/2,k=G/2,J=L/2,Q=B+1,z=q+1;let $=0,Y=0;const se=new ee;for(let fe=0;fe<z;fe++){const De=fe*E-k;for(let Ye=0;Ye<Q;Ye++){const Je=Ye*g-V;se[T]=Je*I,se[_]=De*D,se[p]=J,u.push(se.x,se.y,se.z),se[T]=0,se[_]=0,se[p]=L>0?1:-1,d.push(se.x,se.y,se.z),m.push(Ye/B),m.push(1-fe/q),$+=1}}for(let fe=0;fe<q;fe++)for(let De=0;De<B;De++){const Ye=x+De+Q*fe,Je=x+De+Q*(fe+1),ot=x+(De+1)+Q*(fe+1),ct=x+(De+1)+Q*fe;f.push(Ye,Je,ct),f.push(Je,ot,ct),Y+=6}c.addGroup(v,Y,A),v+=Y,x+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function ku(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Wu={clone:Hi,merge:qt};var Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pc extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new ee,Io=new vt,No=new vt;class fn extends Pc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Io,No),t.subVectors(No,Io)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const f=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/f,t-=o.offsetY*n/u,r*=o.width/f,n*=o.height/u}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ui=1;class qu extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Li,Ui,e,t);r.layers=this.layers,this.add(r);const a=new fn(Li,Ui,e,t);a.layers=this.layers,this.add(a);const o=new fn(Li,Ui,e,t);o.layers=this.layers,this.add(o);const c=new fn(Li,Ui,e,t);c.layers=this.layers,this.add(c);const f=new fn(Li,Ui,e,t);f.layers=this.layers,this.add(f);const u=new fn(Li,Ui,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,c,f]=t;for(const u of t)this.remove(u);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,c,f,u,d]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(m,x,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Dc extends jt{constructor(e=[],t=zi,n,r,a,o,c,f,u,d){super(e,t,n,r,a,o,c,f,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ju extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mr(5,5,5),a=new Vn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Fn});a.uniforms.tEquirect.value=t;const o=new ei(r,a),c=t.minFilter;return t.minFilter===hi&&(t.minFilter=hn),new qu(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}class Vr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const c=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,n),p=this._getHandJoint(u,T);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],x=d.position.distanceTo(m.position),v=.02,y=.005;u.inputState.pinching&&x>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&x<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Zu extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $u extends jt{constructor(e=null,t=1,n=1,r,a,o,c,f,u=sn,d=sn,m,x){super(null,o,c,f,u,d,r,a,m,x),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fs=new ee,Ju=new ee,Qu=new $e;class li{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fs.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),r=this.coplanarPoint(Fs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new ns,ef=new vt(.5,.5),Gr=new ee;class Lc{constructor(e=new li,t=new li,n=new li,r=new li,a=new li,o=new li){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const r=this.planes,a=e.elements,o=a[0],c=a[1],f=a[2],u=a[3],d=a[4],m=a[5],x=a[6],v=a[7],y=a[8],T=a[9],_=a[10],p=a[11],I=a[12],D=a[13],U=a[14],G=a[15];if(r[0].setComponents(u-o,v-d,p-y,G-I).normalize(),r[1].setComponents(u+o,v+d,p+y,G+I).normalize(),r[2].setComponents(u+c,v+m,p+T,G+D).normalize(),r[3].setComponents(u-c,v-m,p-T,G-D).normalize(),n)r[4].setComponents(f,x,_,U).normalize(),r[5].setComponents(u-f,v-x,p-_,G-U).normalize();else if(r[4].setComponents(u-f,v-x,p-_,G-U).normalize(),t===bn)r[5].setComponents(u+f,v+x,p+_,G+U).normalize();else if(t===Jr)r[5].setComponents(f,x,_,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=ef.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Gr.x=r.normal.x>0?e.max.x:e.min.x,Gr.y=r.normal.y>0?e.max.y:e.min.y,Gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fo=new Dt,La=new yc,Hr=new ns,kr=new ee;class tf extends Jt{constructor(e=new yn,t=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Hr.radius+=a,e.ray.intersectsSphere(Hr)===!1)return;Fo.copy(r).invert(),La.copy(e.ray).applyMatrix4(Fo);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,u=n.index,m=n.attributes.position;if(u!==null){const x=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=x,T=v;y<T;y++){const _=u.getX(y);kr.fromBufferAttribute(m,_),Oo(kr,_,f,r,e,t,this)}}else{const x=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=x,T=v;y<T;y++)kr.fromBufferAttribute(m,y),Oo(kr,y,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Oo(i,e,t,n,r,a,o){const c=La.distanceSqToPoint(i);if(c<t){const f=new ee;La.closestPointToPoint(i,f),f.applyMatrix4(n);const u=r.ray.origin.distanceTo(f);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ic extends jt{constructor(e,t,n=pi,r,a,o,c=sn,f=sn,u,d=cr,m=1){if(d!==cr&&d!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:m};super(x,r,a,o,c,f,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nc extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class is extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,c=Math.floor(n),f=Math.floor(r),u=c+1,d=f+1,m=e/c,x=t/f,v=[],y=[],T=[],_=[];for(let p=0;p<d;p++){const I=p*x-o;for(let D=0;D<u;D++){const U=D*m-a;y.push(U,-I,0),T.push(0,0,1),_.push(D/c),_.push(1-p/f)}}for(let p=0;p<f;p++)for(let I=0;I<c;I++){const D=I+u*p,U=I+u*(p+1),G=I+1+u*(p+1),L=I+1+u*p;v.push(D,U,L),v.push(U,G,L)}this.setIndex(v),this.setAttribute("position",new di(y,3)),this.setAttribute("normal",new di(T,3)),this.setAttribute("uv",new di(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class nf extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rf extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sf extends Pc{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,c-=d*this.view.offsetY,f=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class af extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bo(i,e,t,n){const r=of(n);switch(t){case gc:return i*e;case vc:return i*e/r.components*r.byteLength;case Ba:return i*e/r.components*r.byteLength;case za:return i*e*2/r.components*r.byteLength;case Va:return i*e*2/r.components*r.byteLength;case _c:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case Ga:return i*e*4/r.components*r.byteLength;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(e,8)/4;case ra:case aa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function of(i){switch(i){case Bn:case dc:return{byteLength:1,components:1};case ar:case pc:case ki:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case pi:case Na:case Nn:return{byteLength:4,components:1};case mc:case xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);function Fc(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function cf(i){const e=new WeakMap;function t(c,f){const u=c.array,d=c.usage,m=u.byteLength,x=i.createBuffer();i.bindBuffer(f,x),i.bufferData(f,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,u){const d=f.array,m=f.updateRanges;if(i.bindBuffer(u,c),m.length===0)i.bufferSubData(u,0,d);else{m.sort((v,y)=>v.start-y.start);let x=0;for(let v=1;v<m.length;v++){const y=m[x],T=m[v];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++x,m[x]=T)}m.length=x+1;for(let v=0,y=m.length;v<y;v++){const T=m[v];i.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function o(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,f));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,f),u.version=c.version}}return{get:r,remove:a,update:o}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,If=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ch=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ih=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,td=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,md=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:lf,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:hf,alphatest_fragment:df,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:xf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:Df,common:Lf,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:If,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:Vf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:kf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:th,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:$f,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:eh,lights_toon_fragment:nh,lights_toon_pars_fragment:ih,lights_phong_fragment:rh,lights_phong_pars_fragment:sh,lights_physical_fragment:ah,lights_physical_pars_fragment:oh,lights_fragment_begin:ch,lights_fragment_maps:lh,lights_fragment_end:uh,logdepthbuf_fragment:fh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:dh,logdepthbuf_vertex:ph,map_fragment:mh,map_pars_fragment:xh,map_particle_fragment:gh,map_particle_pars_fragment:_h,metalnessmap_fragment:vh,metalnessmap_pars_fragment:Mh,morphinstance_vertex:Sh,morphcolor_vertex:bh,morphnormal_vertex:yh,morphtarget_pars_vertex:Eh,morphtarget_vertex:Th,normal_fragment_begin:Ah,normal_fragment_maps:wh,normal_pars_fragment:Rh,normal_pars_vertex:Ch,normal_vertex:Ph,normalmap_pars_fragment:Dh,clearcoat_normal_fragment_begin:Lh,clearcoat_normal_fragment_maps:Uh,clearcoat_pars_fragment:Ih,iridescence_pars_fragment:Nh,opaque_fragment:Fh,packing:Oh,premultiplied_alpha_fragment:Bh,project_vertex:zh,dithering_fragment:Vh,dithering_pars_fragment:Gh,roughnessmap_fragment:Hh,roughnessmap_pars_fragment:kh,shadowmap_pars_fragment:Wh,shadowmap_pars_vertex:Xh,shadowmap_vertex:Yh,shadowmask_pars_fragment:qh,skinbase_vertex:jh,skinning_pars_vertex:Kh,skinning_vertex:Zh,skinnormal_vertex:$h,specularmap_fragment:Jh,specularmap_pars_fragment:Qh,tonemapping_fragment:ed,tonemapping_pars_fragment:td,transmission_fragment:nd,transmission_pars_fragment:id,uv_pars_fragment:rd,uv_pars_vertex:sd,uv_vertex:ad,worldpos_vertex:od,background_vert:cd,background_frag:ld,backgroundCube_vert:ud,backgroundCube_frag:fd,cube_vert:hd,cube_frag:dd,depth_vert:pd,depth_frag:md,distanceRGBA_vert:xd,distanceRGBA_frag:gd,equirect_vert:_d,equirect_frag:vd,linedashed_vert:Md,linedashed_frag:Sd,meshbasic_vert:bd,meshbasic_frag:yd,meshlambert_vert:Ed,meshlambert_frag:Td,meshmatcap_vert:Ad,meshmatcap_frag:wd,meshnormal_vert:Rd,meshnormal_frag:Cd,meshphong_vert:Pd,meshphong_frag:Dd,meshphysical_vert:Ld,meshphysical_frag:Ud,meshtoon_vert:Id,meshtoon_frag:Nd,points_vert:Fd,points_frag:Od,shadow_vert:Bd,shadow_frag:zd,sprite_vert:Vd,sprite_frag:Gd},Me={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Sn={basic:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new pt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:qt([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:qt([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:qt([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:qt([Me.common,Me.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:qt([Me.lights,Me.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Sn.physical={uniforms:qt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Wr={r:0,b:0,g:0},oi=new zn,Hd=new Dt;function kd(i,e,t,n,r,a,o){const c=new pt(0);let f=a===!0?0:1,u,d,m=null,x=0,v=null;function y(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?t:e).get(U)),U}function T(D){let U=!1;const G=y(D);G===null?p(c,f):G&&G.isColor&&(p(G,1),U=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(D,U){const G=y(U);G&&(G.isCubeTexture||G.mapping===ts)?(d===void 0&&(d=new ei(new mr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Hi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,B,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),oi.copy(U.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),d.material.uniforms.envMap.value=G,d.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(oi)),d.material.toneMapped=ht.getTransfer(G.colorSpace)!==_t,(m!==G||x!==G.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,m=G,x=G.version,v=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):G&&G.isTexture&&(u===void 0&&(u=new ei(new is(2,2),new Vn({name:"BackgroundMaterial",uniforms:Hi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=G,u.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,u.material.toneMapped=ht.getTransfer(G.colorSpace)!==_t,G.matrixAutoUpdate===!0&&G.updateMatrix(),u.material.uniforms.uvTransform.value.copy(G.matrix),(m!==G||x!==G.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,m=G,x=G.version,v=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function p(D,U){D.getRGB(Wr,Cc(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,U,o)}function I(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,U=1){c.set(D),f=U,p(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,p(c,f)},render:T,addToRenderList:_,dispose:I}}function Wd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let a=r,o=!1;function c(g,E,V,k,J){let Q=!1;const z=m(k,V,E);a!==z&&(a=z,u(a.object)),Q=v(g,k,V,J),Q&&y(g,k,V,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,U(g,E,V,k),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return i.createVertexArray()}function u(g){return i.bindVertexArray(g)}function d(g){return i.deleteVertexArray(g)}function m(g,E,V){const k=V.wireframe===!0;let J=n[g.id];J===void 0&&(J={},n[g.id]=J);let Q=J[E.id];Q===void 0&&(Q={},J[E.id]=Q);let z=Q[k];return z===void 0&&(z=x(f()),Q[k]=z),z}function x(g){const E=[],V=[],k=[];for(let J=0;J<t;J++)E[J]=0,V[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:g,attributes:{},index:null}}function v(g,E,V,k){const J=a.attributes,Q=E.attributes;let z=0;const $=V.getAttributes();for(const Y in $)if($[Y].location>=0){const fe=J[Y];let De=Q[Y];if(De===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(De=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(De=g.instanceColor)),fe===void 0||fe.attribute!==De||De&&fe.data!==De.data)return!0;z++}return a.attributesNum!==z||a.index!==k}function y(g,E,V,k){const J={},Q=E.attributes;let z=0;const $=V.getAttributes();for(const Y in $)if($[Y].location>=0){let fe=Q[Y];fe===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(fe=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(fe=g.instanceColor));const De={};De.attribute=fe,fe&&fe.data&&(De.data=fe.data),J[Y]=De,z++}a.attributes=J,a.attributesNum=z,a.index=k}function T(){const g=a.newAttributes;for(let E=0,V=g.length;E<V;E++)g[E]=0}function _(g){p(g,0)}function p(g,E){const V=a.newAttributes,k=a.enabledAttributes,J=a.attributeDivisors;V[g]=1,k[g]===0&&(i.enableVertexAttribArray(g),k[g]=1),J[g]!==E&&(i.vertexAttribDivisor(g,E),J[g]=E)}function I(){const g=a.newAttributes,E=a.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==g[V]&&(i.disableVertexAttribArray(V),E[V]=0)}function D(g,E,V,k,J,Q,z){z===!0?i.vertexAttribIPointer(g,E,V,J,Q):i.vertexAttribPointer(g,E,V,k,J,Q)}function U(g,E,V,k){T();const J=k.attributes,Q=V.getAttributes(),z=E.defaultAttributeValues;for(const $ in Q){const Y=Q[$];if(Y.location>=0){let se=J[$];if(se===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(se=g.instanceColor)),se!==void 0){const fe=se.normalized,De=se.itemSize,Ye=e.get(se);if(Ye===void 0)continue;const Je=Ye.buffer,ot=Ye.type,ct=Ye.bytesPerElement,ie=ot===i.INT||ot===i.UNSIGNED_INT||se.gpuType===Na;if(se.isInterleavedBufferAttribute){const ce=se.data,Te=ce.stride,je=se.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<Y.locationSize;Le++)p(Y.location+Le,ce.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<Y.locationSize;Le++)_(Y.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Le=0;Le<Y.locationSize;Le++)D(Y.location+Le,De/Y.locationSize,ot,fe,Te*ct,(je+De/Y.locationSize*Le)*ct,ie)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)p(Y.location+ce,se.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<Y.locationSize;ce++)_(Y.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ce=0;ce<Y.locationSize;ce++)D(Y.location+ce,De/Y.locationSize,ot,fe,De*ct,De/Y.locationSize*ce*ct,ie)}}else if(z!==void 0){const fe=z[$];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Y.location,fe);break;case 3:i.vertexAttrib3fv(Y.location,fe);break;case 4:i.vertexAttrib4fv(Y.location,fe);break;default:i.vertexAttrib1fv(Y.location,fe)}}}}I()}function G(){q();for(const g in n){const E=n[g];for(const V in E){const k=E[V];for(const J in k)d(k[J].object),delete k[J];delete E[V]}delete n[g]}}function L(g){if(n[g.id]===void 0)return;const E=n[g.id];for(const V in E){const k=E[V];for(const J in k)d(k[J].object),delete k[J];delete E[V]}delete n[g.id]}function B(g){for(const E in n){const V=n[E];if(V[g.id]===void 0)continue;const k=V[g.id];for(const J in k)d(k[J].object),delete k[J];delete V[g.id]}}function q(){A(),o=!0,a!==r&&(a=r,u(a.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:q,resetDefaultState:A,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:_,disableUnusedAttributes:I}}function Xd(i,e,t){let n;function r(u){n=u}function a(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function o(u,d,m){m!==0&&(i.drawArraysInstanced(n,u,d,m),t.update(d,n,m))}function c(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,m);let v=0;for(let y=0;y<m;y++)v+=d[y];t.update(v,n,1)}function f(u,d,m,x){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<u.length;y++)o(u[y],d[y],x[y]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,d,0,x,0,m);let y=0;for(let T=0;T<m;T++)y+=d[T]*x[T];t.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Yd(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(B){return!(B!==_n&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){const q=B===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Bn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Nn&&!q)}function f(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=f(u);d!==u&&(Ke("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:v,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:G,maxSamples:L}}function qd(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new li,c=new $e,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const v=m.length!==0||x||n!==0||r;return r=x,n=m.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){t=d(m,x,0)},this.setState=function(m,x,v){const y=m.clippingPlanes,T=m.clipIntersection,_=m.clipShadows,p=i.get(m);if(!r||y===null||y.length===0||a&&!_)a?d(null):u();else{const I=a?0:n,D=I*4;let U=p.clippingState||null;f.value=U,U=d(y,x,D,v);for(let G=0;G!==D;++G)U[G]=t[G];p.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,x,v,y){const T=m!==null?m.length:0;let _=null;if(T!==0){if(_=f.value,y!==!0||_===null){const p=v+T*4,I=x.matrixWorldInverse;c.getNormalMatrix(I),(_===null||_.length<p)&&(_=new Float32Array(p));for(let D=0,U=v;D!==T;++D,U+=4)o.copy(m[D]).applyMatrix4(I,c),o.normal.toArray(_,U),_[U+3]=o.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function jd(i){let e=new WeakMap;function t(o,c){return c===ea?o.mapping=zi:c===ta&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===ea||c===ta)if(e.has(o)){const f=e.get(o).texture;return t(f,o.mapping)}else{const f=o.image;if(f&&f.height>0){const u=new ju(f.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const c=o.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const $n=4,zo=[.125,.215,.35,.446,.526,.582],fi=20,Kd=256,nr=new sf,Vo=new pt;let Os=null,Bs=0,zs=0,Vs=!1;const Zd=new ee;class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:o=256,position:c=Zd}=a;Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Bs,zs),this._renderer.xr.enabled=Vs,e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ki,format:_n,colorSpace:Gi,depthBuffer:!1},r=Ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$d(a)),this._blurMaterial=Qd(a,e,t),this._ggxMaterial=Jd(a,e,t)}return r}_compileMaterial(e){const t=new ei(new yn,e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,r,a){const f=new fn(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,v=m.toneMapping;m.getClearColor(Vo),m.toneMapping=Jn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new mr,new Ac({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let p=!1;const I=e.background;I?I.isColor&&(_.color.copy(I),e.background=null,p=!0):(_.color.copy(Vo),p=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(f.up.set(0,u[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+d[D],a.y,a.z)):U===1?(f.up.set(0,0,u[D]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+d[D],a.z)):(f.up.set(0,u[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+d[D]));const G=this._cubeSize;Ii(r,U*G,D>2?G:0,G,G),m.setRenderTarget(r),p&&m.render(T,f),m.render(e,f)}m.toneMapping=v,m.autoClear=x,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zi||e.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ii(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const f=o.uniforms,u=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-d*d),x=.05+u*.95,v=m*x,{_lodMax:y}=this,T=this._sizeLods[n],_=3*T*(n>y-$n?n-y+$n:0),p=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=v,f.mipInt.value=y-t,Ii(a,_,p,3*T,2*T),r.setRenderTarget(a),r.render(c,nr),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=y-n,Ii(e,_,p,3*T,2*T),r.setRenderTarget(e),r.render(c,nr)}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,c){const f=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const d=3,m=this._lodMeshes[r];m.material=u;const x=u.uniforms,v=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*fi-1),T=a/y,_=isFinite(a)?1+Math.floor(d*T):fi;_>fi&&Ke(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${fi}`);const p=[];let I=0;for(let B=0;B<fi;++B){const q=B/T,A=Math.exp(-q*q/2);p.push(A),B===0?I+=A:B<_&&(I+=2*A)}for(let B=0;B<p.length;B++)p[B]=p[B]/I;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=p,x.latitudinal.value=o==="latitudinal",c&&(x.poleAxis.value=c);const{_lodMax:D}=this;x.dTheta.value=y,x.mipInt.value=D-n;const U=this._sizeLods[r],G=3*U*(r>D-$n?r-D+$n:0),L=4*(this._cubeSize-U);Ii(t,G,L,3*U,2*U),f.setRenderTarget(t),f.render(m,nr)}}function $d(i){const e=[],t=[],n=[];let r=i;const a=i-$n+1+zo.length;for(let o=0;o<a;o++){const c=Math.pow(2,r);e.push(c);let f=1/c;o>i-$n?f=zo[o-i+$n-1]:o===0&&(f=0),t.push(f);const u=1/(c-2),d=-u,m=1+u,x=[d,d,m,d,m,m,d,d,m,m,d,m],v=6,y=6,T=3,_=2,p=1,I=new Float32Array(T*y*v),D=new Float32Array(_*y*v),U=new Float32Array(p*y*v);for(let L=0;L<v;L++){const B=L%3*2/3-1,q=L>2?0:-1,A=[B,q,0,B+2/3,q,0,B+2/3,q+1,0,B,q,0,B+2/3,q+1,0,B,q+1,0];I.set(A,T*y*L),D.set(x,_*y*L);const g=[L,L,L,L,L,L];U.set(g,p*y*L)}const G=new yn;G.setAttribute("position",new vn(I,T)),G.setAttribute("uv",new vn(D,_)),G.setAttribute("faceIndex",new vn(U,p)),n.push(new ei(G,null)),r>$n&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ho(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jd(i,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Qd(i,e,t){const n=new Float32Array(fi),r=new ee(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ko(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Wo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,u=f===ea||f===ta,d=f===zi||f===Vi;if(u||d){let m=e.get(c);const x=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==x)return t===null&&(t=new Go(i)),m=u?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return u&&v&&v.height>0||d&&v&&r(v)?(t===null&&(t=new Go(i)),m=u?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function r(c){let f=0;const u=6;for(let d=0;d<u;d++)c[d]!==void 0&&f++;return f===u}function a(c){const f=c.target;f.removeEventListener("dispose",a);const u=e.get(f);u!==void 0&&(e.delete(f),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ur("WebGLRenderer: "+n+" extension not supported."),r}}}function np(i,e,t,n){const r={},a=new WeakMap;function o(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const y in x.attributes)e.remove(x.attributes[y]);x.removeEventListener("dispose",o),delete r[x.id];const v=a.get(x);v&&(e.remove(v),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(m,x){return r[x.id]===!0||(x.addEventListener("dispose",o),r[x.id]=!0,t.memory.geometries++),x}function f(m){const x=m.attributes;for(const v in x)e.update(x[v],i.ARRAY_BUFFER)}function u(m){const x=[],v=m.index,y=m.attributes.position;let T=0;if(v!==null){const I=v.array;T=v.version;for(let D=0,U=I.length;D<U;D+=3){const G=I[D+0],L=I[D+1],B=I[D+2];x.push(G,L,L,B,B,G)}}else if(y!==void 0){const I=y.array;T=y.version;for(let D=0,U=I.length/3-1;D<U;D+=3){const G=D+0,L=D+1,B=D+2;x.push(G,L,L,B,B,G)}}else return;const _=new(Sc(x)?Rc:wc)(x,1);_.version=T;const p=a.get(m);p&&e.remove(p),a.set(m,_)}function d(m){const x=a.get(m);if(x){const v=m.index;v!==null&&x.version<v.version&&u(m)}else u(m);return a.get(m)}return{get:c,update:f,getWireframeAttribute:d}}function ip(i,e,t){let n;function r(x){n=x}let a,o;function c(x){a=x.type,o=x.bytesPerElement}function f(x,v){i.drawElements(n,v,a,x*o),t.update(v,n,1)}function u(x,v,y){y!==0&&(i.drawElementsInstanced(n,v,a,x*o,y),t.update(v,n,y))}function d(x,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,x,0,y);let _=0;for(let p=0;p<y;p++)_+=v[p];t.update(_,n,1)}function m(x,v,y,T){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<x.length;p++)u(x[p]/o,v[p],T[p]);else{_.multiDrawElementsInstancedWEBGL(n,v,0,a,x,0,T,0,y);let p=0;for(let I=0;I<y;I++)p+=v[I]*T[I];t.update(p,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function rp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:Rt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function sp(i,e,t){const n=new WeakMap,r=new Ct;function a(o,c,f){const u=o.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0;let x=n.get(c);if(x===void 0||x.count!==m){let g=function(){q.dispose(),n.delete(c),c.removeEventListener("dispose",g)};var v=g;x!==void 0&&x.texture.dispose();const y=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],I=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let U=0;y===!0&&(U=1),T===!0&&(U=2),_===!0&&(U=3);let G=c.attributes.position.count*U,L=1;G>e.maxTextureSize&&(L=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const B=new Float32Array(G*L*4*m),q=new bc(B,G,L,m);q.type=Nn,q.needsUpdate=!0;const A=U*4;for(let E=0;E<m;E++){const V=p[E],k=I[E],J=D[E],Q=G*L*4*E;for(let z=0;z<V.count;z++){const $=z*A;y===!0&&(r.fromBufferAttribute(V,z),B[Q+$+0]=r.x,B[Q+$+1]=r.y,B[Q+$+2]=r.z,B[Q+$+3]=0),T===!0&&(r.fromBufferAttribute(k,z),B[Q+$+4]=r.x,B[Q+$+5]=r.y,B[Q+$+6]=r.z,B[Q+$+7]=0),_===!0&&(r.fromBufferAttribute(J,z),B[Q+$+8]=r.x,B[Q+$+9]=r.y,B[Q+$+10]=r.z,B[Q+$+11]=J.itemSize===4?r.w:1)}}x={count:m,texture:q,size:new vt(G,L)},n.set(c,x),c.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let y=0;for(let _=0;_<u.length;_++)y+=u[_];const T=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",u)}f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function ap(i,e,t,n){let r=new WeakMap;function a(f){const u=n.render.frame,d=f.geometry,m=e.get(f,d);if(r.get(m)!==u&&(e.update(m),r.set(m,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==u&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,u))),f.isSkinnedMesh){const x=f.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return m}function o(){r=new WeakMap}function c(f){const u=f.target;u.removeEventListener("dispose",c),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Oc=new jt,Xo=new Ic(1,1),Bc=new bc,zc=new Du,Vc=new Dc,Yo=[],qo=[],jo=new Float32Array(16),Ko=new Float32Array(9),Zo=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Yo[r];if(a===void 0&&(a=new Float32Array(r),Yo[r]=a),e!==0){n.toArray(a,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(a,c)}return a}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ss(i,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function op(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function fp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),It(t,n)}}function hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;Ko.set(n),i.uniformMatrix3fv(this.addr,!1,Ko),It(t,n)}}function dp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),It(t,n)}}function pp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function _p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function bp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Xo.compareFunction=Mc,a=Xo):a=Oc,t.setTexture2D(e||a,r)}function yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zc,r)}function Ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vc,r)}function Tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bc,r)}function Ap(i){switch(i){case 5126:return op;case 35664:return cp;case 35665:return lp;case 35666:return up;case 35674:return fp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return xp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return vp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function wp(i,e){i.uniform1fv(this.addr,e)}function Rp(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pp(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Dp(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lp(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Up(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ip(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Fp(i,e){i.uniform3iv(this.addr,e)}function Op(i,e){i.uniform4iv(this.addr,e)}function Bp(i,e){i.uniform1uiv(this.addr,e)}function zp(i,e){i.uniform2uiv(this.addr,e)}function Vp(i,e){i.uniform3uiv(this.addr,e)}function Gp(i,e){i.uniform4uiv(this.addr,e)}function Hp(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oc,a[o])}function kp(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zc,a[o])}function Wp(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vc,a[o])}function Xp(i,e,t){const n=this.cache,r=e.length,a=ss(t,r);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Bc,a[o])}function Yp(i){switch(i){case 5126:return wp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Dp;case 35675:return Lp;case 35676:return Up;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return Bp;case 36294:return zp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class Kp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function $o(i,e){i.seq.push(e),i.map[e.id]=e}function Zp(i,e,t){const n=i.name,r=n.length;for(Gs.lastIndex=0;;){const a=Gs.exec(n),o=Gs.lastIndex;let c=a[1];const f=a[2]==="]",u=a[3];if(f&&(c=c|0),u===void 0||u==="["&&o+2===r){$o(t,u===void 0?new qp(c,i,e):new jp(c,i,e));break}else{let m=t.map[c];m===void 0&&(m=new Kp(c),$o(t,m)),t=m}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Zp(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Jo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $p=37297;let Jp=0;function Qp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const Qo=new $e;function e0(i){ht._getMatrix(Qo,ht.workingColorSpace,i);const e=`mat3( ${Qo.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case $r:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Qp(i.getShaderSource(e),c)}else return a}function t0(i,e){const t=e0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n0(i,e){let t;switch(e){case kl:t="Linear";break;case Wl:t="Reinhard";break;case Xl:t="Cineon";break;case Yl:t="ACESFilmic";break;case jl:t="AgX";break;case Kl:t="Neutral";break;case ql:t="Custom";break;default:Ke("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new ee;function i0(){ht.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function s0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function ir(i){return i!==""}function tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(i){return i.replace(o0,l0)}const c0=new Map;function l0(i,e){let t=et[e];if(t===void 0){const n=c0.get(e);if(n!==void 0)t=et[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ua(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(u0,f0)}function f0(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function rc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function d0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Vi:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gl:e="ENVMAP_BLENDING_MIX";break;case Hl:e="ENVMAP_BLENDING_ADD";break}return e}function x0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function g0(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,c=t.fragmentShader;const f=h0(t),u=d0(t),d=p0(t),m=m0(t),x=x0(t),v=r0(t),y=s0(a),T=r.createProgram();let _,p,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ir).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(_=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?et.tonemapping_pars_fragment:"",t.toneMapping!==Jn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),o=Ua(o),o=tc(o,t),o=nc(o,t),c=Ua(c),c=tc(c,t),c=nc(c,t),o=ic(o),c=ic(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=I+_+o,U=I+p+c,G=Jo(r,r.VERTEX_SHADER,D),L=Jo(r,r.FRAGMENT_SHADER,U);r.attachShader(T,G),r.attachShader(T,L),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(E){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(T)||"",k=r.getShaderInfoLog(G)||"",J=r.getShaderInfoLog(L)||"",Q=V.trim(),z=k.trim(),$=J.trim();let Y=!0,se=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,G,L);else{const fe=ec(r,G,"vertex"),De=ec(r,L,"fragment");Rt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+Q+`
`+fe+`
`+De)}else Q!==""?Ke("WebGLProgram: Program Info Log:",Q):(z===""||$==="")&&(se=!1);se&&(E.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:z,prefix:_},fragmentShader:{log:$,prefix:p}})}r.deleteShader(G),r.deleteShader(L),q=new Zr(r,T),A=a0(r,T)}let q;this.getUniforms=function(){return q===void 0&&B(this),q};let A;this.getAttributes=function(){return A===void 0&&B(this),A};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(T,$p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=L,this}let _0=0;class v0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M0(e),t.set(e,n)),n}}class M0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function S0(i,e,t,n,r,a,o){const c=new Ec,f=new v0,u=new Set,d=[],m=r.logarithmicDepthBuffer,x=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return u.add(A),A===0?"uv":`uv${A}`}function _(A,g,E,V,k){const J=V.fog,Q=k.geometry,z=A.isMeshStandardMaterial?V.environment:null,$=(A.isMeshStandardMaterial?t:e).get(A.envMap||z),Y=$&&$.mapping===ts?$.image.height:null,se=y[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&Ke("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,De=fe!==void 0?fe.length:0;let Ye=0;Q.morphAttributes.position!==void 0&&(Ye=1),Q.morphAttributes.normal!==void 0&&(Ye=2),Q.morphAttributes.color!==void 0&&(Ye=3);let Je,ot,ct,ie;if(se){const lt=Sn[se];Je=lt.vertexShader,ot=lt.fragmentShader}else Je=A.vertexShader,ot=A.fragmentShader,f.update(A),ct=f.getVertexShaderID(A),ie=f.getFragmentShaderID(A);const ce=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),je=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,Ze=!!A.map,Lt=!!A.matcap,Ue=!!$,Qe=!!A.aoMap,N=!!A.lightMap,rt=!!A.bumpMap,tt=!!A.normalMap,mt=!!A.displacementMap,we=!!A.emissiveMap,Mt=!!A.metalnessMap,Ne=!!A.roughnessMap,qe=A.anisotropy>0,R=A.clearcoat>0,S=A.dispersion>0,X=A.iridescence>0,ne=A.sheen>0,ae=A.transmission>0,te=qe&&!!A.anisotropyMap,Pe=R&&!!A.clearcoatMap,ve=R&&!!A.clearcoatNormalMap,Oe=R&&!!A.clearcoatRoughnessMap,Re=X&&!!A.iridescenceMap,oe=X&&!!A.iridescenceThicknessMap,de=ne&&!!A.sheenColorMap,Ge=ne&&!!A.sheenRoughnessMap,ze=!!A.specularMap,be=!!A.specularColorMap,He=!!A.specularIntensityMap,F=ae&&!!A.transmissionMap,ge=ae&&!!A.thicknessMap,pe=!!A.gradientMap,me=!!A.alphaMap,ue=A.alphaTest>0,re=!!A.alphaHash,Ee=!!A.extensions;let ke=Jn;A.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ke=i.toneMapping);const xt={shaderID:se,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:ot,defines:A.defines,customVertexShaderID:ct,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:je,instancingColor:je&&k.instanceColor!==null,instancingMorph:je&&k.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Gi,alphaToCoverage:!!A.alphaToCoverage,map:Ze,matcap:Lt,envMap:Ue,envMapMode:Ue&&$.mapping,envMapCubeUVHeight:Y,aoMap:Qe,lightMap:N,bumpMap:rt,normalMap:tt,displacementMap:x&&mt,emissiveMap:we,normalMapObjectSpace:tt&&A.normalMapType===eu,normalMapTangentSpace:tt&&A.normalMapType===Ql,metalnessMap:Mt,roughnessMap:Ne,anisotropy:qe,anisotropyMap:te,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Oe,dispersion:S,iridescence:X,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:ne,sheenColorMap:de,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:be,specularIntensityMap:He,transmission:ae,transmissionMap:F,thicknessMap:ge,gradientMap:pe,opaque:A.transparent===!1&&A.blending===Fi&&A.alphaToCoverage===!1,alphaMap:me,alphaTest:ue,alphaHash:re,combine:A.combine,mapUv:Ze&&T(A.map.channel),aoMapUv:Qe&&T(A.aoMap.channel),lightMapUv:N&&T(A.lightMap.channel),bumpMapUv:rt&&T(A.bumpMap.channel),normalMapUv:tt&&T(A.normalMap.channel),displacementMapUv:mt&&T(A.displacementMap.channel),emissiveMapUv:we&&T(A.emissiveMap.channel),metalnessMapUv:Mt&&T(A.metalnessMap.channel),roughnessMapUv:Ne&&T(A.roughnessMap.channel),anisotropyMapUv:te&&T(A.anisotropyMap.channel),clearcoatMapUv:Pe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:ve&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:de&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&T(A.sheenRoughnessMap.channel),specularMapUv:ze&&T(A.specularMap.channel),specularColorMapUv:be&&T(A.specularColorMap.channel),specularIntensityMapUv:He&&T(A.specularIntensityMap.channel),transmissionMapUv:F&&T(A.transmissionMap.channel),thicknessMapUv:ge&&T(A.thicknessMap.channel),alphaMapUv:me&&T(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(tt||qe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(Ze||me),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ye,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&A.map.isVideoTexture===!0&&ht.getTransfer(A.map.colorSpace)===_t,decodeVideoTextureEmissive:we&&A.emissiveMap.isVideoTexture===!0&&ht.getTransfer(A.emissiveMap.colorSpace)===_t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Un,flipSided:A.side===$t,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ee&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&A.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function p(A){const g=[];if(A.shaderID?g.push(A.shaderID):(g.push(A.customVertexShaderID),g.push(A.customFragmentShaderID)),A.defines!==void 0)for(const E in A.defines)g.push(E),g.push(A.defines[E]);return A.isRawShaderMaterial===!1&&(I(g,A),D(g,A),g.push(i.outputColorSpace)),g.push(A.customProgramCacheKey),g.join()}function I(A,g){A.push(g.precision),A.push(g.outputColorSpace),A.push(g.envMapMode),A.push(g.envMapCubeUVHeight),A.push(g.mapUv),A.push(g.alphaMapUv),A.push(g.lightMapUv),A.push(g.aoMapUv),A.push(g.bumpMapUv),A.push(g.normalMapUv),A.push(g.displacementMapUv),A.push(g.emissiveMapUv),A.push(g.metalnessMapUv),A.push(g.roughnessMapUv),A.push(g.anisotropyMapUv),A.push(g.clearcoatMapUv),A.push(g.clearcoatNormalMapUv),A.push(g.clearcoatRoughnessMapUv),A.push(g.iridescenceMapUv),A.push(g.iridescenceThicknessMapUv),A.push(g.sheenColorMapUv),A.push(g.sheenRoughnessMapUv),A.push(g.specularMapUv),A.push(g.specularColorMapUv),A.push(g.specularIntensityMapUv),A.push(g.transmissionMapUv),A.push(g.thicknessMapUv),A.push(g.combine),A.push(g.fogExp2),A.push(g.sizeAttenuation),A.push(g.morphTargetsCount),A.push(g.morphAttributeCount),A.push(g.numDirLights),A.push(g.numPointLights),A.push(g.numSpotLights),A.push(g.numSpotLightMaps),A.push(g.numHemiLights),A.push(g.numRectAreaLights),A.push(g.numDirLightShadows),A.push(g.numPointLightShadows),A.push(g.numSpotLightShadows),A.push(g.numSpotLightShadowsWithMaps),A.push(g.numLightProbes),A.push(g.shadowMapType),A.push(g.toneMapping),A.push(g.numClippingPlanes),A.push(g.numClipIntersection),A.push(g.depthPacking)}function D(A,g){c.disableAll(),g.supportsVertexTextures&&c.enable(0),g.instancing&&c.enable(1),g.instancingColor&&c.enable(2),g.instancingMorph&&c.enable(3),g.matcap&&c.enable(4),g.envMap&&c.enable(5),g.normalMapObjectSpace&&c.enable(6),g.normalMapTangentSpace&&c.enable(7),g.clearcoat&&c.enable(8),g.iridescence&&c.enable(9),g.alphaTest&&c.enable(10),g.vertexColors&&c.enable(11),g.vertexAlphas&&c.enable(12),g.vertexUv1s&&c.enable(13),g.vertexUv2s&&c.enable(14),g.vertexUv3s&&c.enable(15),g.vertexTangents&&c.enable(16),g.anisotropy&&c.enable(17),g.alphaHash&&c.enable(18),g.batching&&c.enable(19),g.dispersion&&c.enable(20),g.batchingColor&&c.enable(21),g.gradientMap&&c.enable(22),A.push(c.mask),c.disableAll(),g.fog&&c.enable(0),g.useFog&&c.enable(1),g.flatShading&&c.enable(2),g.logarithmicDepthBuffer&&c.enable(3),g.reversedDepthBuffer&&c.enable(4),g.skinning&&c.enable(5),g.morphTargets&&c.enable(6),g.morphNormals&&c.enable(7),g.morphColors&&c.enable(8),g.premultipliedAlpha&&c.enable(9),g.shadowMapEnabled&&c.enable(10),g.doubleSided&&c.enable(11),g.flipSided&&c.enable(12),g.useDepthPacking&&c.enable(13),g.dithering&&c.enable(14),g.transmission&&c.enable(15),g.sheen&&c.enable(16),g.opaque&&c.enable(17),g.pointsUvs&&c.enable(18),g.decodeVideoTexture&&c.enable(19),g.decodeVideoTextureEmissive&&c.enable(20),g.alphaToCoverage&&c.enable(21),A.push(c.mask)}function U(A){const g=y[A.type];let E;if(g){const V=Sn[g];E=Wu.clone(V.uniforms)}else E=A.uniforms;return E}function G(A,g){let E;for(let V=0,k=d.length;V<k;V++){const J=d[V];if(J.cacheKey===g){E=J,++E.usedTimes;break}}return E===void 0&&(E=new g0(i,g,A,a),d.push(E)),E}function L(A){if(--A.usedTimes===0){const g=d.indexOf(A);d[g]=d[d.length-1],d.pop(),A.destroy()}}function B(A){f.remove(A)}function q(){f.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:U,acquireProgram:G,releaseProgram:L,releaseShaderCache:B,programs:d,dispose:q}}function b0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,f){i.get(o)[c]=f}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function y0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ac(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(m,x,v,y,T,_){let p=i[e];return p===void 0?(p={id:m.id,object:m,geometry:x,material:v,groupOrder:y,renderOrder:m.renderOrder,z:T,group:_},i[e]=p):(p.id=m.id,p.object=m,p.geometry=x,p.material=v,p.groupOrder=y,p.renderOrder=m.renderOrder,p.z=T,p.group=_),e++,p}function c(m,x,v,y,T,_){const p=o(m,x,v,y,T,_);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function f(m,x,v,y,T,_){const p=o(m,x,v,y,T,_);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(m,x){t.length>1&&t.sort(m||y0),n.length>1&&n.sort(x||sc),r.length>1&&r.sort(x||sc)}function d(){for(let m=e,x=i.length;m<x;m++){const v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:f,finish:d,sort:u}}function E0(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new ac,i.set(n,[o])):r>=a.length?(o=new ac,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function T0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new pt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function A0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let w0=0;function R0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){const e=new T0,t=A0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ee);const r=new ee,a=new Dt,o=new Dt;function c(u){let d=0,m=0,x=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,y=0,T=0,_=0,p=0,I=0,D=0,U=0,G=0,L=0,B=0;u.sort(R0);for(let A=0,g=u.length;A<g;A++){const E=u[A],V=E.color,k=E.intensity,J=E.distance,Q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=V.r*k,m+=V.g*k,x+=V.b*k;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],k);B++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,Y=t.get(E);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[v]=Y,n.directionalShadowMap[v]=Q,n.directionalShadowMatrix[v]=E.shadow.matrix,I++}n.directional[v]=z,v++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(V).multiplyScalar(k),z.distance=J,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[T]=z;const $=E.shadow;if(E.map&&(n.spotLightMap[G]=E.map,G++,$.updateMatrices(E),E.castShadow&&L++),n.spotLightMatrix[T]=$.matrix,E.castShadow){const Y=t.get(E);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[T]=Y,n.spotShadowMap[T]=Q,U++}T++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(V).multiplyScalar(k),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[_]=z,_++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const $=E.shadow,Y=t.get(E);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=Q,n.pointShadowMatrix[y]=E.shadow.matrix,D++}n.point[y]=z,y++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(k),z.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=x;const q=n.hash;(q.directionalLength!==v||q.pointLength!==y||q.spotLength!==T||q.rectAreaLength!==_||q.hemiLength!==p||q.numDirectionalShadows!==I||q.numPointShadows!==D||q.numSpotShadows!==U||q.numSpotMaps!==G||q.numLightProbes!==B)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=_,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=U+G-L,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,q.directionalLength=v,q.pointLength=y,q.spotLength=T,q.rectAreaLength=_,q.hemiLength=p,q.numDirectionalShadows=I,q.numPointShadows=D,q.numSpotShadows=U,q.numSpotMaps=G,q.numLightProbes=B,n.version=w0++)}function f(u,d){let m=0,x=0,v=0,y=0,T=0;const _=d.matrixWorldInverse;for(let p=0,I=u.length;p<I;p++){const D=u[p];if(D.isDirectionalLight){const U=n.directional[m];U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),m++}else if(D.isSpotLight){const U=n.spot[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),v++}else if(D.isRectAreaLight){const U=n.rectArea[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),o.identity(),a.copy(D.matrixWorld),a.premultiply(_),o.extractRotation(a),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),y++}else if(D.isPointLight){const U=n.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),x++}else if(D.isHemisphereLight){const U=n.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(_),T++}}}return{setup:c,setupView:f,state:n}}function oc(i){const e=new C0(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o}}function P0(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new oc(i),e.set(r,[c])):a>=o.length?(c=new oc(i),o.push(c)):c=o[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U0(i,e,t){let n=new Lc;const r=new vt,a=new vt,o=new Ct,c=new nf({depthPacking:Jl}),f=new rf,u={},d=t.maxTextureSize,m={[Qn]:$t,[$t]:Qn,[Un]:Un},x=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:D0,fragmentShader:L0}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const y=new yn;y.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ei(y,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let p=this.type;this.render=function(L,B,q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const A=i.getRenderTarget(),g=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Fn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Ln&&this.type===Ln,J=p===Ln&&this.type!==Ln;for(let Q=0,z=L.length;Q<z;Q++){const $=L[Q],Y=$.shadow;if(Y===void 0){Ke("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const se=Y.getFrameExtents();if(r.multiply(se),a.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/se.x),r.x=a.x*se.x,Y.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/se.y),r.y=a.y*se.y,Y.mapSize.y=a.y)),Y.map===null||k===!0||J===!0){const De=this.type!==Ln?{minFilter:sn,magFilter:sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mi(r.x,r.y,De),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const fe=Y.getViewportCount();for(let De=0;De<fe;De++){const Ye=Y.getViewport(De);o.set(a.x*Ye.x,a.y*Ye.y,a.x*Ye.z,a.y*Ye.w),V.viewport(o),Y.updateMatrices($,De),n=Y.getFrustum(),U(B,q,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Ln&&I(Y,q),Y.needsUpdate=!1}p=this.type,_.needsUpdate=!1,i.setRenderTarget(A,g,E)};function I(L,B){const q=e.update(T);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new mi(r.x,r.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(B,null,q,x,T,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(B,null,q,v,T,null)}function D(L,B,q,A){let g=null;const E=q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)g=E;else if(g=q.isPointLight===!0?f:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const V=g.uuid,k=B.uuid;let J=u[V];J===void 0&&(J={},u[V]=J);let Q=J[k];Q===void 0&&(Q=g.clone(),J[k]=Q,B.addEventListener("dispose",G)),g=Q}if(g.visible=B.visible,g.wireframe=B.wireframe,A===Ln?g.side=B.shadowSide!==null?B.shadowSide:B.side:g.side=B.shadowSide!==null?B.shadowSide:m[B.side],g.alphaMap=B.alphaMap,g.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,g.map=B.map,g.clipShadows=B.clipShadows,g.clippingPlanes=B.clippingPlanes,g.clipIntersection=B.clipIntersection,g.displacementMap=B.displacementMap,g.displacementScale=B.displacementScale,g.displacementBias=B.displacementBias,g.wireframeLinewidth=B.wireframeLinewidth,g.linewidth=B.linewidth,q.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=i.properties.get(g);V.light=q}return g}function U(L,B,q,A,g){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&g===Ln)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld);const k=e.update(L),J=L.material;if(Array.isArray(J)){const Q=k.groups;for(let z=0,$=Q.length;z<$;z++){const Y=Q[z],se=J[Y.materialIndex];if(se&&se.visible){const fe=D(L,se,A,g);L.onBeforeShadow(i,L,B,q,k,fe,Y),i.renderBufferDirect(q,null,k,fe,L,Y),L.onAfterShadow(i,L,B,q,k,fe,Y)}}}else if(J.visible){const Q=D(L,J,A,g);L.onBeforeShadow(i,L,B,q,k,Q,null),i.renderBufferDirect(q,null,k,Q,L,null),L.onAfterShadow(i,L,B,q,k,Q,null)}}const V=L.children;for(let k=0,J=V.length;k<J;k++)U(V[k],B,q,A,g)}function G(L){L.target.removeEventListener("dispose",G);for(const q in u){const A=u[q],g=L.target.uuid;g in A&&(A[g].dispose(),delete A[g])}}}const I0={[qs]:js,[Ks]:Js,[Zs]:Qs,[Bi]:$s,[js]:qs,[Js]:Ks,[Qs]:Zs,[$s]:Bi};function N0(i,e){function t(){let F=!1;const ge=new Ct;let pe=null;const me=new Ct(0,0,0,0);return{setMask:function(ue){pe!==ue&&!F&&(i.colorMask(ue,ue,ue,ue),pe=ue)},setLocked:function(ue){F=ue},setClear:function(ue,re,Ee,ke,xt){xt===!0&&(ue*=ke,re*=ke,Ee*=ke),ge.set(ue,re,Ee,ke),me.equals(ge)===!1&&(i.clearColor(ue,re,Ee,ke),me.copy(ge))},reset:function(){F=!1,pe=null,me.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,pe=null,me=null,ue=null;return{setReversed:function(re){if(ge!==re){const Ee=e.get("EXT_clip_control");re?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ge=re;const ke=ue;ue=null,this.setClear(ke)}},getReversed:function(){return ge},setTest:function(re){re?ce(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(re){pe!==re&&!F&&(i.depthMask(re),pe=re)},setFunc:function(re){if(ge&&(re=I0[re]),me!==re){switch(re){case qs:i.depthFunc(i.NEVER);break;case js:i.depthFunc(i.ALWAYS);break;case Ks:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case Zs:i.depthFunc(i.EQUAL);break;case $s:i.depthFunc(i.GEQUAL);break;case Js:i.depthFunc(i.GREATER);break;case Qs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=re}},setLocked:function(re){F=re},setClear:function(re){ue!==re&&(ge&&(re=1-re),i.clearDepth(re),ue=re)},reset:function(){F=!1,pe=null,me=null,ue=null,ge=!1}}}function r(){let F=!1,ge=null,pe=null,me=null,ue=null,re=null,Ee=null,ke=null,xt=null;return{setTest:function(lt){F||(lt?ce(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!F&&(i.stencilMask(lt),ge=lt)},setFunc:function(lt,Wt,Qt){(pe!==lt||me!==Wt||ue!==Qt)&&(i.stencilFunc(lt,Wt,Qt),pe=lt,me=Wt,ue=Qt)},setOp:function(lt,Wt,Qt){(re!==lt||Ee!==Wt||ke!==Qt)&&(i.stencilOp(lt,Wt,Qt),re=lt,Ee=Wt,ke=Qt)},setLocked:function(lt){F=lt},setClear:function(lt){xt!==lt&&(i.clearStencil(lt),xt=lt)},reset:function(){F=!1,ge=null,pe=null,me=null,ue=null,re=null,Ee=null,ke=null,xt=null}}}const a=new t,o=new n,c=new r,f=new WeakMap,u=new WeakMap;let d={},m={},x=new WeakMap,v=[],y=null,T=!1,_=null,p=null,I=null,D=null,U=null,G=null,L=null,B=new pt(0,0,0),q=0,A=!1,g=null,E=null,V=null,k=null,J=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=$>=2);let se=null,fe={};const De=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),Je=new Ct().fromArray(De),ot=new Ct().fromArray(Ye);function ct(F,ge,pe,me){const ue=new Uint8Array(4),re=i.createTexture();i.bindTexture(F,re),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<pe;Ee++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ge+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return re}const ie={};ie[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Bi),rt(!1),tt(uo),ce(i.CULL_FACE),Qe(Fn);function ce(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function Te(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function je(F,ge){return m[F]!==ge?(i.bindFramebuffer(F,ge),m[F]=ge,F===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ge),F===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Le(F,ge){let pe=v,me=!1;if(F){pe=x.get(ge),pe===void 0&&(pe=[],x.set(ge,pe));const ue=F.textures;if(pe.length!==ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ee=ue.length;re<Ee;re++)pe[re]=i.COLOR_ATTACHMENT0+re;pe.length=ue.length,me=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,me=!0);me&&i.drawBuffers(pe)}function Ze(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const Lt={[ui]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[Tl]:i.FUNC_REVERSE_SUBTRACT};Lt[Al]=i.MIN,Lt[wl]=i.MAX;const Ue={[Rl]:i.ZERO,[Cl]:i.ONE,[Pl]:i.SRC_COLOR,[Xs]:i.SRC_ALPHA,[Fl]:i.SRC_ALPHA_SATURATE,[Il]:i.DST_COLOR,[Ll]:i.DST_ALPHA,[Dl]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Nl]:i.ONE_MINUS_DST_COLOR,[Ul]:i.ONE_MINUS_DST_ALPHA,[Ol]:i.CONSTANT_COLOR,[Bl]:i.ONE_MINUS_CONSTANT_COLOR,[zl]:i.CONSTANT_ALPHA,[Vl]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,ge,pe,me,ue,re,Ee,ke,xt,lt){if(F===Fn){T===!0&&(Te(i.BLEND),T=!1);return}if(T===!1&&(ce(i.BLEND),T=!0),F!==yl){if(F!==_||lt!==A){if((p!==ui||U!==ui)&&(i.blendEquation(i.FUNC_ADD),p=ui,U=ui),lt)switch(F){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fo:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ho:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",F);break}I=null,D=null,G=null,L=null,B.set(0,0,0),q=0,_=F,A=lt}return}ue=ue||ge,re=re||pe,Ee=Ee||me,(ge!==p||ue!==U)&&(i.blendEquationSeparate(Lt[ge],Lt[ue]),p=ge,U=ue),(pe!==I||me!==D||re!==G||Ee!==L)&&(i.blendFuncSeparate(Ue[pe],Ue[me],Ue[re],Ue[Ee]),I=pe,D=me,G=re,L=Ee),(ke.equals(B)===!1||xt!==q)&&(i.blendColor(ke.r,ke.g,ke.b,xt),B.copy(ke),q=xt),_=F,A=!1}function N(F,ge){F.side===Un?Te(i.CULL_FACE):ce(i.CULL_FACE);let pe=F.side===$t;ge&&(pe=!pe),rt(pe),F.blending===Fi&&F.transparent===!1?Qe(Fn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),a.setMask(F.colorWrite);const me=F.stencilWrite;c.setTest(me),me&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),we(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){g!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),g=F)}function tt(F){F!==Ml?(ce(i.CULL_FACE),F!==E&&(F===uo?i.cullFace(i.BACK):F===Sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),E=F}function mt(F){F!==V&&(z&&i.lineWidth(F),V=F)}function we(F,ge,pe){F?(ce(i.POLYGON_OFFSET_FILL),(k!==ge||J!==pe)&&(i.polygonOffset(ge,pe),k=ge,J=pe)):Te(i.POLYGON_OFFSET_FILL)}function Mt(F){F?ce(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Ne(F){F===void 0&&(F=i.TEXTURE0+Q-1),se!==F&&(i.activeTexture(F),se=F)}function qe(F,ge,pe){pe===void 0&&(se===null?pe=i.TEXTURE0+Q-1:pe=se);let me=fe[pe];me===void 0&&(me={type:void 0,texture:void 0},fe[pe]=me),(me.type!==F||me.texture!==ge)&&(se!==pe&&(i.activeTexture(pe),se=pe),i.bindTexture(F,ge||ie[F]),me.type=F,me.texture=ge)}function R(){const F=fe[se];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ne(){try{i.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ae(){try{i.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ve(){try{i.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Oe(){try{i.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Re(){try{i.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function oe(){try{i.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function de(F){Je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function Ge(F){ot.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ot.copy(F))}function ze(F,ge){let pe=u.get(ge);pe===void 0&&(pe=new WeakMap,u.set(ge,pe));let me=pe.get(F);me===void 0&&(me=i.getUniformBlockIndex(ge,F.name),pe.set(F,me))}function be(F,ge){const me=u.get(ge).get(F);f.get(ge)!==me&&(i.uniformBlockBinding(ge,me,F.__bindingPointIndex),f.set(ge,me))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,fe={},m={},x=new WeakMap,v=[],y=null,T=!1,_=null,p=null,I=null,D=null,U=null,G=null,L=null,B=new pt(0,0,0),q=0,A=!1,g=null,E=null,V=null,k=null,J=null,Je.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:ce,disable:Te,bindFramebuffer:je,drawBuffers:Le,useProgram:Ze,setBlending:Qe,setMaterial:N,setFlipSided:rt,setCullFace:tt,setLineWidth:mt,setPolygonOffset:we,setScissorTest:Mt,activeTexture:Ne,bindTexture:qe,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Re,texImage3D:oe,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:ve,texStorage3D:Oe,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:te,compressedTexSubImage3D:Pe,scissor:de,viewport:Ge,reset:He}}function F0(i,e,t,n,r,a,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new vt,d=new WeakMap;let m;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return v?new OffscreenCanvas(R,S):Qr("canvas")}function T(R,S,X){let ne=1;const ae=qe(R);if((ae.width>X||ae.height>X)&&(ne=X/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(ne*ae.width),Pe=Math.floor(ne*ae.height);m===void 0&&(m=y(te,Pe));const ve=S?y(te,Pe):m;return ve.width=te,ve.height=Pe,ve.getContext("2d").drawImage(R,0,0,te,Pe),Ke("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Pe+")."),ve}else return"data"in R&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function _(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(R,S,X,ne,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=S;if(S===i.RED&&(X===i.FLOAT&&(te=i.R32F),X===i.HALF_FLOAT&&(te=i.R16F),X===i.UNSIGNED_BYTE&&(te=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.R8UI),X===i.UNSIGNED_SHORT&&(te=i.R16UI),X===i.UNSIGNED_INT&&(te=i.R32UI),X===i.BYTE&&(te=i.R8I),X===i.SHORT&&(te=i.R16I),X===i.INT&&(te=i.R32I)),S===i.RG&&(X===i.FLOAT&&(te=i.RG32F),X===i.HALF_FLOAT&&(te=i.RG16F),X===i.UNSIGNED_BYTE&&(te=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RG8UI),X===i.UNSIGNED_SHORT&&(te=i.RG16UI),X===i.UNSIGNED_INT&&(te=i.RG32UI),X===i.BYTE&&(te=i.RG8I),X===i.SHORT&&(te=i.RG16I),X===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGB8UI),X===i.UNSIGNED_SHORT&&(te=i.RGB16UI),X===i.UNSIGNED_INT&&(te=i.RGB32UI),X===i.BYTE&&(te=i.RGB8I),X===i.SHORT&&(te=i.RGB16I),X===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),X===i.UNSIGNED_INT&&(te=i.RGBA32UI),X===i.BYTE&&(te=i.RGBA8I),X===i.SHORT&&(te=i.RGBA16I),X===i.INT&&(te=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),S===i.RGBA){const Pe=ae?$r:ht.getTransfer(ne);X===i.FLOAT&&(te=i.RGBA32F),X===i.HALF_FLOAT&&(te=i.RGBA16F),X===i.UNSIGNED_BYTE&&(te=Pe===_t?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function U(R,S){let X;return R?S===null||S===pi||S===or?X=i.DEPTH24_STENCIL8:S===Nn?X=i.DEPTH32F_STENCIL8:S===ar&&(X=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pi||S===or?X=i.DEPTH_COMPONENT24:S===Nn?X=i.DEPTH_COMPONENT32F:S===ar&&(X=i.DEPTH_COMPONENT16),X}function G(R,S){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),q(S),S.isVideoTexture&&d.delete(S)}function B(R){const S=R.target;S.removeEventListener("dispose",B),g(S)}function q(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,ne=x.get(X);if(ne){const ae=ne[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(R),Object.keys(ne).length===0&&x.delete(X)}n.remove(R)}function A(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const X=R.source,ne=x.get(X);delete ne[S.__cacheKey],o.memory.textures--}function g(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let ae=0;ae<S.__webglFramebuffer[ne].length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ne][ae]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,ae=X.length;ne<ae;ne++){const te=n.get(X[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(X[ne])}n.remove(R)}let E=0;function V(){E=0}function k(){const R=E;return R>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){const X=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,R,S);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function z(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){ie(X,R,S);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function $(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){ie(X,R,S);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function Y(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ce(X,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const se={[na]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},fe={[sn]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ds]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},De={[tu]:i.NEVER,[ou]:i.ALWAYS,[nu]:i.LESS,[Mc]:i.LEQUAL,[iu]:i.EQUAL,[au]:i.GEQUAL,[ru]:i.GREATER,[su]:i.NOTEQUAL};function Ye(R,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===ds||S.magFilter===yr||S.magFilter===hi||S.minFilter===hn||S.minFilter===ds||S.minFilter===yr||S.minFilter===hi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,se[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==yr&&S.minFilter!==hi||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Je(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const ne=S.source;let ae=x.get(ne);ae===void 0&&(ae={},x.set(ne,ae));const te=J(S);if(te!==R.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ae[te].usedTimes++;const Pe=ae[R.__cacheKey];Pe!==void 0&&(ae[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(S)),R.__cacheKey=te,R.__webglTexture=ae[te].texture}return X}function ot(R,S,X){return Math.floor(Math.floor(R/X)/S)}function ct(R,S,X,ne){const te=R.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,ne,S.data);else{te.sort((oe,de)=>oe.start-de.start);let Pe=0;for(let oe=1;oe<te.length;oe++){const de=te[Pe],Ge=te[oe],ze=de.start+de.count,be=ot(Ge.start,S.width,4),He=ot(de.start,S.width,4);Ge.start<=ze+1&&be===He&&ot(Ge.start+Ge.count-1,S.width,4)===be?de.count=Math.max(de.count,Ge.start+Ge.count-de.start):(++Pe,te[Pe]=Ge)}te.length=Pe+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let oe=0,de=te.length;oe<de;oe++){const Ge=te[oe],ze=Math.floor(Ge.start/4),be=Math.ceil(Ge.count/4),He=ze%S.width,F=Math.floor(ze/S.width),ge=be,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,He,F,ge,pe,X,ne,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function ie(R,S,X){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const ae=Je(R,S),te=S.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+X);const Pe=n.get(te);if(te.version!==Pe.__version||ae===!0){t.activeTexture(i.TEXTURE0+X);const ve=ht.getPrimaries(ht.workingColorSpace),Oe=S.colorSpace===Zn?null:ht.getPrimaries(S.colorSpace),Re=S.colorSpace===Zn||ve===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=T(S.image,!1,r.maxTextureSize);oe=Ne(S,oe);const de=a.convert(S.format,S.colorSpace),Ge=a.convert(S.type);let ze=D(S.internalFormat,de,Ge,S.colorSpace,S.isVideoTexture);Ye(ne,S);let be;const He=S.mipmaps,F=S.isVideoTexture!==!0,ge=Pe.__version===void 0||ae===!0,pe=te.dataReady,me=G(S,oe);if(S.isDepthTexture)ze=U(S.format===lr,S.type),ge&&(F?t.texStorage2D(i.TEXTURE_2D,1,ze,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ze,oe.width,oe.height,0,de,Ge,null));else if(S.isDataTexture)if(He.length>0){F&&ge&&t.texStorage2D(i.TEXTURE_2D,me,ze,He[0].width,He[0].height);for(let ue=0,re=He.length;ue<re;ue++)be=He[ue],F?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,Ge,be.data):t.texImage2D(i.TEXTURE_2D,ue,ze,be.width,be.height,0,de,Ge,be.data);S.generateMipmaps=!1}else F?(ge&&t.texStorage2D(i.TEXTURE_2D,me,ze,oe.width,oe.height),pe&&ct(S,oe,de,Ge)):t.texImage2D(i.TEXTURE_2D,0,ze,oe.width,oe.height,0,de,Ge,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ze,He[0].width,He[0].height,oe.depth);for(let ue=0,re=He.length;ue<re;ue++)if(be=He[ue],S.format!==_n)if(de!==null)if(F){if(pe)if(S.layerUpdates.size>0){const Ee=Bo(be.width,be.height,S.format,S.type);for(const ke of S.layerUpdates){const xt=be.data.subarray(ke*Ee/be.data.BYTES_PER_ELEMENT,(ke+1)*Ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,ke,be.width,be.height,1,de,xt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,oe.depth,de,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ze,be.width,be.height,oe.depth,0,be.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,oe.depth,de,Ge,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ze,be.width,be.height,oe.depth,0,de,Ge,be.data)}else{F&&ge&&t.texStorage2D(i.TEXTURE_2D,me,ze,He[0].width,He[0].height);for(let ue=0,re=He.length;ue<re;ue++)be=He[ue],S.format!==_n?de!==null?F?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ze,be.width,be.height,0,be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,Ge,be.data):t.texImage2D(i.TEXTURE_2D,ue,ze,be.width,be.height,0,de,Ge,be.data)}else if(S.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ze,oe.width,oe.height,oe.depth),pe)if(S.layerUpdates.size>0){const ue=Bo(oe.width,oe.height,S.format,S.type);for(const re of S.layerUpdates){const Ee=oe.data.subarray(re*ue/oe.data.BYTES_PER_ELEMENT,(re+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,de,Ge,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,de,Ge,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,oe.width,oe.height,oe.depth,0,de,Ge,oe.data);else if(S.isData3DTexture)F?(ge&&t.texStorage3D(i.TEXTURE_3D,me,ze,oe.width,oe.height,oe.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,de,Ge,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,oe.width,oe.height,oe.depth,0,de,Ge,oe.data);else if(S.isFramebufferTexture){if(ge)if(F)t.texStorage2D(i.TEXTURE_2D,me,ze,oe.width,oe.height);else{let ue=oe.width,re=oe.height;for(let Ee=0;Ee<me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,ze,ue,re,0,de,Ge,null),ue>>=1,re>>=1}}else if(He.length>0){if(F&&ge){const ue=qe(He[0]);t.texStorage2D(i.TEXTURE_2D,me,ze,ue.width,ue.height)}for(let ue=0,re=He.length;ue<re;ue++)be=He[ue],F?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,de,Ge,be):t.texImage2D(i.TEXTURE_2D,ue,ze,de,Ge,be);S.generateMipmaps=!1}else if(F){if(ge){const ue=qe(oe);t.texStorage2D(i.TEXTURE_2D,me,ze,ue.width,ue.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ge,oe)}else t.texImage2D(i.TEXTURE_2D,0,ze,de,Ge,oe);_(S)&&p(ne),Pe.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ce(R,S,X){if(S.image.length!==6)return;const ne=Je(R,S),ae=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const te=n.get(ae);if(ae.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+X);const Pe=ht.getPrimaries(ht.workingColorSpace),ve=S.colorSpace===Zn?null:ht.getPrimaries(S.colorSpace),Oe=S.colorSpace===Zn||Pe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!Re&&!oe?de[re]=T(S.image[re],!0,r.maxCubemapSize):de[re]=oe?S.image[re].image:S.image[re],de[re]=Ne(S,de[re]);const Ge=de[0],ze=a.convert(S.format,S.colorSpace),be=a.convert(S.type),He=D(S.internalFormat,ze,be,S.colorSpace),F=S.isVideoTexture!==!0,ge=te.__version===void 0||ne===!0,pe=ae.dataReady;let me=G(S,Ge);Ye(i.TEXTURE_CUBE_MAP,S);let ue;if(Re){F&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,He,Ge.width,Ge.height);for(let re=0;re<6;re++){ue=de[re].mipmaps;for(let Ee=0;Ee<ue.length;Ee++){const ke=ue[Ee];S.format!==_n?ze!==null?F?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,He,ke.width,ke.height,0,ke.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,ke.width,ke.height,ze,be,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,He,ke.width,ke.height,0,ze,be,ke.data)}}}else{if(ue=S.mipmaps,F&&ge){ue.length>0&&me++;const re=qe(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,He,re.width,re.height)}for(let re=0;re<6;re++)if(oe){F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,ze,be,de[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,de[re].width,de[re].height,0,ze,be,de[re].data);for(let Ee=0;Ee<ue.length;Ee++){const xt=ue[Ee].image[re].image;F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,xt.width,xt.height,ze,be,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,He,xt.width,xt.height,0,ze,be,xt.data)}}else{F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,be,de[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,ze,be,de[re]);for(let Ee=0;Ee<ue.length;Ee++){const ke=ue[Ee];F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,ze,be,ke.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,He,ze,be,ke.image[re])}}}_(S)&&p(i.TEXTURE_CUBE_MAP),te.__version=ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Te(R,S,X,ne,ae,te){const Pe=a.convert(X.format,X.colorSpace),ve=a.convert(X.type),Oe=D(X.internalFormat,Pe,ve,X.colorSpace),Re=n.get(S),oe=n.get(X);if(oe.__renderTarget=S,!Re.__hasExternalTextures){const de=Math.max(1,S.width>>te),Ge=Math.max(1,S.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,Oe,de,Ge,S.depth,0,Pe,ve,null):t.texImage2D(ae,te,Oe,de,Ge,0,Pe,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),we(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ae,oe.__webglTexture,0,mt(S)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ae,oe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const ne=S.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,te=U(S.stencilBuffer,ae),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=mt(S);we(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,te,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,R)}else{const ne=S.textures;for(let ae=0;ae<ne.length;ae++){const te=ne[ae],Pe=a.convert(te.format,te.colorSpace),ve=a.convert(te.type),Oe=D(te.internalFormat,Pe,ve,te.colorSpace),Re=mt(S);X&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Oe,S.width,S.height):we(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const ae=ne.__webglTexture,te=mt(S);if(S.depthTexture.format===cr)we(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===lr)we(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ze(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=ne}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const ne=R.texture.mipmaps;ne&&ne.length>0?Le(S.__webglFramebuffer[0],R):Le(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),je(S.__webglDepthbuffer[ne],R,!1);else{const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),je(S.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,S,X){const ne=n.get(R);S!==void 0&&Te(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ze(R)}function Ue(R){const S=R.texture,X=n.get(R),ne=n.get(S);R.addEventListener("dispose",B);const ae=R.textures,te=R.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,o.memory.textures++),te){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)X.__webglFramebuffer[ve][Oe]=i.createFramebuffer()}else X.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)X.__webglFramebuffer[ve]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ve=0,Oe=ae.length;ve<Oe;ve++){const Re=n.get(ae[ve]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Oe=ae[ve];X.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const Re=a.convert(Oe.format,Oe.colorSpace),oe=a.convert(Oe.type),de=D(Oe.internalFormat,Re,oe,Oe.colorSpace,R.isXRRenderTarget===!0),Ge=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),je(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,S);for(let ve=0;ve<6;ve++)if(S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)Te(X.__webglFramebuffer[ve][Oe],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe);else Te(X.__webglFramebuffer[ve],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ve=0,Oe=ae.length;ve<Oe;ve++){const Re=ae[ve],oe=n.get(Re);let de=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,oe.__webglTexture),Ye(de,Re),Te(X.__webglFramebuffer,R,Re,i.COLOR_ATTACHMENT0+ve,de,0),_(Re)&&p(de)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ne.__webglTexture),Ye(ve,S),S.mipmaps&&S.mipmaps.length>0)for(let Oe=0;Oe<S.mipmaps.length;Oe++)Te(X.__webglFramebuffer[Oe],R,S,i.COLOR_ATTACHMENT0,ve,Oe);else Te(X.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ve,0);_(S)&&p(ve),t.unbindTexture()}R.depthBuffer&&Ze(R)}function Qe(R){const S=R.textures;for(let X=0,ne=S.length;X<ne;X++){const ae=S[X];if(_(ae)){const te=I(R),Pe=n.get(ae).__webglTexture;t.bindTexture(te,Pe),p(te),t.unbindTexture()}}}const N=[],rt=[];function tt(R){if(R.samples>0){if(we(R)===!1){const S=R.textures,X=R.width,ne=R.height;let ae=i.COLOR_BUFFER_BIT;const te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(R),ve=S.length>1;if(ve)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Oe=R.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const oe=n.get(S[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,ae,i.NEAREST),f===!0&&(N.length=0,rt.length=0,N.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(N.push(te),rt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const oe=n.get(S[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&f){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function mt(R){return Math.min(r.maxSamples,R.samples)}function we(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ne(R,S){const X=R.colorSpace,ne=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Gi&&X!==Zn&&(ht.getTransfer(X)===_t?(ne!==_n||ae!==Bn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",X)),S}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Lt,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=we}function O0(i,e){function t(n,r=Zn){let a;const o=ht.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===pc)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===gc)return i.ALPHA;if(n===_c)return i.RGB;if(n===_n)return i.RGBA;if(n===cr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===za)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===Yr||n===qr||n===jr||n===Kr)if(o===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===sa||n===aa||n===oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ua)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ca||n===la)return o===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ua)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===ha||n===da||n===pa||n===ma||n===xa||n===ga||n===_a||n===va||n===Ma||n===Sa||n===ba||n===ya||n===Ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===fa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Aa||n===wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ta)return o===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Da)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ra)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:B0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G0 extends Wi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,c="local-floor",f=1,u=null,d=null,m=null,x=null,v=null,y=null;const T=typeof XRWebGLBinding<"u",_=new V0,p={},I=t.getContextAttributes();let D=null,U=null;const G=[],L=[],B=new vt;let q=null;const A=new fn;A.viewport=new Ct;const g=new fn;g.viewport=new Ct;const E=[A,g],V=new af;let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=G[ie];return ce===void 0&&(ce=new Ns,G[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=G[ie];return ce===void 0&&(ce=new Ns,G[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=G[ie];return ce===void 0&&(ce=new Ns,G[ie]=ce),ce.getHandSpace()};function Q(ie){const ce=L.indexOf(ie.inputSource);if(ce===-1)return;const Te=G[ce];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,u||o),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let ie=0;ie<G.length;ie++){const ce=L[ie];ce!==null&&(L[ie]=null,G[ie].disconnect(ce))}k=null,J=null,_.reset();for(const ie in p)delete p[ie];e.setRenderTarget(D),v=null,x=null,m=null,r=null,U=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(q),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),I.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,je=null,Le=null;I.depth&&(Le=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=I.stencil?lr:cr,je=I.stencil?or:pi);const Ze={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};m=this.getBinding(),x=m.createProjectionLayer(Ze),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new mi(x.textureWidth,x.textureHeight,{format:_n,type:Bn,depthTexture:new Ic(x.textureWidth,x.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new mi(v.framebufferWidth,v.framebufferHeight,{format:_n,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),u=null,o=await r.requestReferenceSpace(c),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ie){for(let ce=0;ce<ie.removed.length;ce++){const Te=ie.removed[ce],je=L.indexOf(Te);je>=0&&(L[je]=null,G[je].disconnect(Te))}for(let ce=0;ce<ie.added.length;ce++){const Te=ie.added[ce];let je=L.indexOf(Te);if(je===-1){for(let Ze=0;Ze<G.length;Ze++)if(Ze>=L.length){L.push(Te),je=Ze;break}else if(L[Ze]===null){L[Ze]=Te,je=Ze;break}if(je===-1)break}const Le=G[je];Le&&Le.connect(Te)}}const Y=new ee,se=new ee;function fe(ie,ce,Te){Y.setFromMatrixPosition(ce.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);const je=Y.distanceTo(se),Le=ce.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,Lt=Le[14]/(Le[10]-1),Ue=Le[14]/(Le[10]+1),Qe=(Le[9]+1)/Le[5],N=(Le[9]-1)/Le[5],rt=(Le[8]-1)/Le[0],tt=(Ze[8]+1)/Ze[0],mt=Lt*rt,we=Lt*tt,Mt=je/(-rt+tt),Ne=Mt*-rt;if(ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ne),ie.translateZ(Mt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Le[10]===-1)ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=Lt+Mt,R=Ue+Mt,S=mt-Ne,X=we+(je-Ne),ne=Qe*Ue/R*qe,ae=N*Ue/R*qe;ie.projectionMatrix.makePerspective(S,X,ne,ae,qe,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function De(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ce=ie.near,Te=ie.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),V.near=g.near=A.near=ce,V.far=g.far=A.far=Te,(k!==V.near||J!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,J=V.far),V.layers.mask=ie.layers.mask|6,A.layers.mask=V.layers.mask&3,g.layers.mask=V.layers.mask&5;const je=ie.parent,Le=V.cameras;De(V,je);for(let Ze=0;Ze<Le.length;Ze++)De(Le[Ze],je);Le.length===2?fe(V,A,g):V.projectionMatrix.copy(A.projectionMatrix),Ye(ie,V,je)};function Ye(ie,ce,Te){Te===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=fr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(x===null&&v===null))return f},this.setFoveation=function(ie){f=ie,x!==null&&(x.fixedFoveation=ie),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(ie){return p[ie]};let Je=null;function ot(ie,ce){if(d=ce.getViewerPose(u||o),y=ce,d!==null){const Te=d.views;v!==null&&(e.setRenderTargetFramebuffer(U,v.framebuffer),e.setRenderTarget(U));let je=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,je=!0);for(let Ue=0;Ue<Te.length;Ue++){const Qe=Te[Ue];let N=null;if(v!==null)N=v.getViewport(Qe);else{const tt=m.getViewSubImage(x,Qe);N=tt.viewport,Ue===0&&(e.setRenderTargetTextures(U,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(U))}let rt=E[Ue];rt===void 0&&(rt=new fn,rt.layers.enable(Ue),rt.viewport=new Ct,E[Ue]=rt),rt.matrix.fromArray(Qe.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Qe.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(N.x,N.y,N.width,N.height),Ue===0&&(V.matrix.copy(rt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),je===!0&&V.cameras.push(rt)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){m=n.getBinding();const Ue=m.getDepthInformation(Te[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(Ue,r.renderState)}if(Le&&Le.includes("camera-access")&&T){e.state.unbindTexture(),m=n.getBinding();for(let Ue=0;Ue<Te.length;Ue++){const Qe=Te[Ue].camera;if(Qe){let N=p[Qe];N||(N=new Nc,p[Qe]=N);const rt=m.getCameraImage(Qe);N.sourceTexture=rt}}}}for(let Te=0;Te<G.length;Te++){const je=L[Te],Le=G[Te];je!==null&&Le!==void 0&&Le.update(je,ce,u||o)}Je&&Je(ie,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),y=null}const ct=new Fc;ct.setAnimationLoop(ot),this.setAnimationLoop=function(ie){Je=ie},this.dispose=function(){}}}const ci=new zn,H0=new Dt;function k0(i,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Cc(i)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,I,D,U){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(_,p):p.isMeshToonMaterial?(a(_,p),m(_,p)):p.isMeshPhongMaterial?(a(_,p),d(_,p)):p.isMeshStandardMaterial?(a(_,p),x(_,p),p.isMeshPhysicalMaterial&&v(_,p,U)):p.isMeshMatcapMaterial?(a(_,p),y(_,p)):p.isMeshDepthMaterial?a(_,p):p.isMeshDistanceMaterial?(a(_,p),T(_,p)):p.isMeshNormalMaterial?a(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&c(_,p)):p.isPointsMaterial?f(_,p,I,D):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===$t&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===$t&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const I=e.get(p),D=I.envMap,U=I.envMapRotation;D&&(_.envMap.value=D,ci.copy(U),ci.x*=-1,ci.y*=-1,ci.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),_.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(ci)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function c(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function f(_,p,I,D){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*I,_.scale.value=D*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function m(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function x(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function v(_,p,I){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,p){p.matcap&&(_.matcap.value=p.matcap)}function T(_,p){const I=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function W0(i,e,t,n){let r={},a={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,D){const U=D.program;n.uniformBlockBinding(I,U)}function u(I,D){let U=r[I.id];U===void 0&&(y(I),U=d(I),r[I.id]=U,I.addEventListener("dispose",_));const G=D.program;n.updateUBOMapping(I,G);const L=e.render.frame;a[I.id]!==L&&(x(I),a[I.id]=L)}function d(I){const D=m();I.__bindingPointIndex=D;const U=i.createBuffer(),G=I.__size,L=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,G,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function m(){for(let I=0;I<c;I++)if(o.indexOf(I)===-1)return o.push(I),I;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=r[I.id],U=I.uniforms,G=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let L=0,B=U.length;L<B;L++){const q=Array.isArray(U[L])?U[L]:[U[L]];for(let A=0,g=q.length;A<g;A++){const E=q[A];if(v(E,L,A,G)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let J=0;for(let Q=0;Q<k.length;Q++){const z=k[Q],$=T(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+J,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,J),J+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(I,D,U,G){const L=I.value,B=D+"_"+U;if(G[B]===void 0)return typeof L=="number"||typeof L=="boolean"?G[B]=L:G[B]=L.clone(),!0;{const q=G[B];if(typeof L=="number"||typeof L=="boolean"){if(q!==L)return G[B]=L,!0}else if(q.equals(L)===!1)return q.copy(L),!0}return!1}function y(I){const D=I.uniforms;let U=0;const G=16;for(let B=0,q=D.length;B<q;B++){const A=Array.isArray(D[B])?D[B]:[D[B]];for(let g=0,E=A.length;g<E;g++){const V=A[g],k=Array.isArray(V.value)?V.value:[V.value];for(let J=0,Q=k.length;J<Q;J++){const z=k[J],$=T(z),Y=U%G,se=Y%$.boundary,fe=Y+se;U+=se,fe!==0&&G-fe<$.storage&&(U+=G-fe),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=U,U+=$.storage}}}const L=U%G;return L>0&&(U+=G-L),I.__size=U,I.__cache={},this}function T(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",I),D}function _(I){const D=I.target;D.removeEventListener("dispose",_);const U=o.indexOf(D.__bindingPointIndex);o.splice(U,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function p(){for(const I in r)i.deleteBuffer(r[I]);o=[],r={},a={}}return{bind:f,update:u,dispose:p}}const X0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Dn=null;function Y0(){return Dn===null&&(Dn=new $u(X0,32,32,za,ki),Dn.minFilter=hn,Dn.magFilter=hn,Dn.wrapS=In,Dn.wrapT=In,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class q0{constructor(e={}){const{canvas:t=cu(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const y=new Set([Ga,Va,Ba]),T=new Set([Bn,pi,ar,or,Fa,Oa]),_=new Uint32Array(4),p=new Int32Array(4);let I=null,D=null;const U=[],G=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=un;let q=0,A=0,g=null,E=-1,V=null;const k=new Ct,J=new Ct;let Q=null;const z=new pt(0);let $=0,Y=t.width,se=t.height,fe=1,De=null,Ye=null;const Je=new Ct(0,0,Y,se),ot=new Ct(0,0,Y,se);let ct=!1;const ie=new Lc;let ce=!1,Te=!1;const je=new Dt,Le=new ee,Ze=new Ct,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function Qe(){return g===null?fe:1}let N=n;function rt(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),N===null){const H="webgl2";if(N=rt(H,b),N===null)throw rt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let tt,mt,we,Mt,Ne,qe,R,S,X,ne,ae,te,Pe,ve,Oe,Re,oe,de,Ge,ze,be,He,F,ge;function pe(){tt=new tp(N),tt.init(),He=new O0(N,tt),mt=new Yd(N,tt,e,He),we=new N0(N,tt),mt.reversedDepthBuffer&&x&&we.buffers.depth.setReversed(!0),Mt=new rp(N),Ne=new b0,qe=new F0(N,tt,we,Ne,mt,He,Mt),R=new jd(L),S=new ep(L),X=new cf(N),F=new Wd(N,X),ne=new np(N,X,Mt,F),ae=new ap(N,ne,X,Mt),Ge=new sp(N,mt,qe),Re=new qd(Ne),te=new S0(L,R,S,tt,mt,F,Re),Pe=new k0(L,Ne),ve=new E0,Oe=new P0(tt),de=new kd(L,R,S,we,ae,v,f),oe=new U0(L,ae,mt),ge=new W0(N,Mt,mt,we),ze=new Xd(N,tt,Mt),be=new ip(N,tt,Mt),Mt.programs=te.programs,L.capabilities=mt,L.extensions=tt,L.properties=Ne,L.renderLists=ve,L.shadowMap=oe,L.state=we,L.info=Mt}pe();const me=new G0(L,N);this.xr=me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(b){b!==void 0&&(fe=b,this.setSize(Y,se,!1))},this.getSize=function(b){return b.set(Y,se)},this.setSize=function(b,H,K=!0){if(me.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,se=H,t.width=Math.floor(b*fe),t.height=Math.floor(H*fe),K===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Y*fe,se*fe).floor()},this.setDrawingBufferSize=function(b,H,K){Y=b,se=H,fe=K,t.width=Math.floor(b*K),t.height=Math.floor(H*K),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(Je)},this.setViewport=function(b,H,K,Z){b.isVector4?Je.set(b.x,b.y,b.z,b.w):Je.set(b,H,K,Z),we.viewport(k.copy(Je).multiplyScalar(fe).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,H,K,Z){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,H,K,Z),we.scissor(J.copy(ot).multiplyScalar(fe).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){we.setScissorTest(ct=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){Ye=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,K=!0){let Z=0;if(b){let W=!1;if(g!==null){const he=g.texture.format;W=y.has(he)}if(W){const he=g.texture.type,xe=T.has(he),Ae=de.getClearColor(),ye=de.getClearAlpha(),Ce=Ae.r,Ve=Ae.g,Fe=Ae.b;xe?(_[0]=Ce,_[1]=Ve,_[2]=Fe,_[3]=ye,N.clearBufferuiv(N.COLOR,0,_)):(p[0]=Ce,p[1]=Ve,p[2]=Fe,p[3]=ye,N.clearBufferiv(N.COLOR,0,p))}else Z|=N.COLOR_BUFFER_BIT}H&&(Z|=N.DEPTH_BUFFER_BIT),K&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),de.dispose(),ve.dispose(),Oe.dispose(),Ne.dispose(),R.dispose(),S.dispose(),ae.dispose(),F.dispose(),ge.dispose(),te.dispose(),me.dispose(),me.removeEventListener("sessionstart",xr),me.removeEventListener("sessionend",an),Xt.stop()};function ue(b){b.preventDefault(),_o("WebGLRenderer: Context Lost."),B=!0}function re(){_o("WebGLRenderer: Context Restored."),B=!1;const b=Mt.autoReset,H=oe.enabled,K=oe.autoUpdate,Z=oe.needsUpdate,W=oe.type;pe(),Mt.autoReset=b,oe.enabled=H,oe.autoUpdate=K,oe.needsUpdate=Z,oe.type=W}function Ee(b){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ke(b){const H=b.target;H.removeEventListener("dispose",ke),xt(H)}function xt(b){lt(b),Ne.remove(b)}function lt(b){const H=Ne.get(b).programs;H!==void 0&&(H.forEach(function(K){te.releaseProgram(K)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,K,Z,W,he){H===null&&(H=Lt);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Ae=ni(b,H,K,Z,W);we.setMaterial(Z,xe);let ye=K.index,Ce=1;if(Z.wireframe===!0){if(ye=ne.getWireframeAttribute(K),ye===void 0)return;Ce=2}const Ve=K.drawRange,Fe=K.attributes.position;let nt=Ve.start*Ce,ut=(Ve.start+Ve.count)*Ce;he!==null&&(nt=Math.max(nt,he.start*Ce),ut=Math.min(ut,(he.start+he.count)*Ce)),ye!==null?(nt=Math.max(nt,0),ut=Math.min(ut,ye.count)):Fe!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Fe.count));const At=ut-nt;if(At<0||At===1/0)return;F.setup(W,Z,Ae,K,ye);let wt,dt=ze;if(ye!==null&&(wt=X.get(ye),dt=be,dt.setIndex(wt)),W.isMesh)Z.wireframe===!0?(we.setLineWidth(Z.wireframeLinewidth*Qe()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(W.isLine){let Be=Z.linewidth;Be===void 0&&(Be=1),we.setLineWidth(Be*Qe()),W.isLineSegments?dt.setMode(N.LINES):W.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else W.isPoints?dt.setMode(N.POINTS):W.isSprite&&dt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ur("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Be=W._multiDrawStarts,St=W._multiDrawCounts,at=W._multiDrawCount,gt=ye?X.get(ye).bytesPerElement:1,Tn=Ne.get(Z).currentProgram.getUniforms();for(let Gt=0;Gt<at;Gt++)Tn.setValue(N,"_gl_DrawID",Gt),dt.render(Be[Gt]/gt,St[Gt])}else if(W.isInstancedMesh)dt.renderInstances(nt,At,W.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,St=Math.min(K.instanceCount,Be);dt.renderInstances(nt,At,St)}else dt.render(nt,At)};function Wt(b,H,K){b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=$t,b.needsUpdate=!0,En(b,H,K),b.side=Qn,b.needsUpdate=!0,En(b,H,K),b.side=Un):En(b,H,K)}this.compile=function(b,H,K=null){K===null&&(K=b),D=Oe.get(K),D.init(H),G.push(D),K.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),b!==K&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),D.setupLights();const Z=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const Ae=he[xe];Wt(Ae,K,W),Z.add(Ae)}else Wt(he,K,W),Z.add(he)}),D=G.pop(),Z},this.compileAsync=function(b,H,K=null){const Z=this.compile(b,H,K);return new Promise(W=>{function he(){if(Z.forEach(function(xe){Ne.get(xe).currentProgram.isReady()&&Z.delete(xe)}),Z.size===0){W(b);return}setTimeout(he,10)}tt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qt=null;function Gn(b){Qt&&Qt(b)}function xr(){Xt.stop()}function an(){Xt.start()}const Xt=new Fc;Xt.setAnimationLoop(Gn),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(b){Qt=b,me.setAnimationLoop(b),b===null?Xt.stop():Xt.start()},me.addEventListener("sessionstart",xr),me.addEventListener("sessionend",an),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,H,g),D=Oe.get(b,G.length),D.init(H),G.push(D),je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(je,bn,H.reversedDepth),Te=this.localClippingEnabled,ce=Re.init(this.clippingPlanes,Te),I=ve.get(b,U.length),I.init(),U.push(I),me.enabled===!0&&me.isPresenting===!0){const he=L.xr.getDepthSensingMesh();he!==null&&xi(he,H,-1/0,L.sortObjects)}xi(b,H,0,L.sortObjects),I.finish(),L.sortObjects===!0&&I.sort(De,Ye),Ue=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ue&&de.addToRenderList(I,b),this.info.render.frame++,ce===!0&&Re.beginShadows();const K=D.state.shadowsArray;oe.render(K,b,H),ce===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=I.opaque,W=I.transmissive;if(D.setupLights(),H.isArrayCamera){const he=H.cameras;if(W.length>0)for(let xe=0,Ae=he.length;xe<Ae;xe++){const ye=he[xe];en(Z,W,b,ye)}Ue&&de.render(b);for(let xe=0,Ae=he.length;xe<Ae;xe++){const ye=he[xe];Tt(I,b,ye,ye.viewport)}}else W.length>0&&en(Z,W,b,H),Ue&&de.render(b),Tt(I,b,H);g!==null&&A===0&&(qe.updateMultisampleRenderTarget(g),qe.updateRenderTargetMipmap(g)),b.isScene===!0&&b.onAfterRender(L,b,H),F.resetDefaultState(),E=-1,V=null,G.pop(),G.length>0?(D=G[G.length-1],ce===!0&&Re.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?I=U[U.length-1]:I=null};function xi(b,H,K,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ie.intersectsSprite(b)){Z&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);const xe=ae.update(b),Ae=b.material;Ae.visible&&I.push(b,xe,Ae,K,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ie.intersectsObject(b))){const xe=ae.update(b),Ae=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ze.copy(xe.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(Ae)){const ye=xe.groups;for(let Ce=0,Ve=ye.length;Ce<Ve;Ce++){const Fe=ye[Ce],nt=Ae[Fe.materialIndex];nt&&nt.visible&&I.push(b,xe,nt,K,Ze.z,Fe)}}else Ae.visible&&I.push(b,xe,Ae,K,Ze.z,null)}}const he=b.children;for(let xe=0,Ae=he.length;xe<Ae;xe++)xi(he[xe],H,K,Z)}function Tt(b,H,K,Z){const{opaque:W,transmissive:he,transparent:xe}=b;D.setupLightsView(K),ce===!0&&Re.setGlobalState(L.clippingPlanes,K),Z&&we.viewport(k.copy(Z)),W.length>0&&Hn(W,H,K),he.length>0&&Hn(he,H,K),xe.length>0&&Hn(xe,H,K),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function en(b,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[Z.id]===void 0&&(D.state.transmissionRenderTarget[Z.id]=new mi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?ki:Bn,minFilter:hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const he=D.state.transmissionRenderTarget[Z.id],xe=Z.viewport||k;he.setSize(xe.z*L.transmissionResolutionScale,xe.w*L.transmissionResolutionScale);const Ae=L.getRenderTarget(),ye=L.getActiveCubeFace(),Ce=L.getActiveMipmapLevel();L.setRenderTarget(he),L.getClearColor(z),$=L.getClearAlpha(),$<1&&L.setClearColor(16777215,.5),L.clear(),Ue&&de.render(K);const Ve=L.toneMapping;L.toneMapping=Jn;const Fe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),D.setupLightsView(Z),ce===!0&&Re.setGlobalState(L.clippingPlanes,Z),Hn(b,K,Z),qe.updateMultisampleRenderTarget(he),qe.updateRenderTargetMipmap(he),tt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ut=0,At=H.length;ut<At;ut++){const wt=H[ut],{object:dt,geometry:Be,material:St,group:at}=wt;if(St.side===Un&&dt.layers.test(Z.layers)){const gt=St.side;St.side=$t,St.needsUpdate=!0,gr(dt,K,Z,Be,St,at),St.side=gt,St.needsUpdate=!0,nt=!0}}nt===!0&&(qe.updateMultisampleRenderTarget(he),qe.updateRenderTargetMipmap(he))}L.setRenderTarget(Ae,ye,Ce),L.setClearColor(z,$),Fe!==void 0&&(Z.viewport=Fe),L.toneMapping=Ve}function Hn(b,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,he=b.length;W<he;W++){const xe=b[W],{object:Ae,geometry:ye,group:Ce}=xe;let Ve=xe.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),Ae.layers.test(K.layers)&&gr(Ae,H,K,ye,Ve,Ce)}}function gr(b,H,K,Z,W,he){b.onBeforeRender(L,H,K,Z,W,he),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(L,H,K,Z,b,he),W.transparent===!0&&W.side===Un&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,L.renderBufferDirect(K,H,Z,W,b,he),W.side=Qn,W.needsUpdate=!0,L.renderBufferDirect(K,H,Z,W,b,he),W.side=Un):L.renderBufferDirect(K,H,Z,W,b,he),b.onAfterRender(L,H,K,Z,W,he)}function En(b,H,K){H.isScene!==!0&&(H=Lt);const Z=Ne.get(b),W=D.state.lights,he=D.state.shadowsArray,xe=W.state.version,Ae=te.getParameters(b,W.state,he,H,K),ye=te.getProgramCacheKey(Ae);let Ce=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?S:R).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",ke),Ce=new Map,Z.programs=Ce);let Ve=Ce.get(ye);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===xe)return ti(b,Ae),Ve}else Ae.uniforms=te.getUniforms(b),b.onBeforeCompile(Ae,L),Ve=te.acquireProgram(Ae,ye),Ce.set(ye,Ve),Z.uniforms=Ae.uniforms;const Fe=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Re.uniform),ti(b,Ae),Z.needsLights=qi(b),Z.lightsStateVersion=xe,Z.needsLights&&(Fe.ambientLightColor.value=W.state.ambient,Fe.lightProbe.value=W.state.probe,Fe.directionalLights.value=W.state.directional,Fe.directionalLightShadows.value=W.state.directionalShadow,Fe.spotLights.value=W.state.spot,Fe.spotLightShadows.value=W.state.spotShadow,Fe.rectAreaLights.value=W.state.rectArea,Fe.ltc_1.value=W.state.rectAreaLTC1,Fe.ltc_2.value=W.state.rectAreaLTC2,Fe.pointLights.value=W.state.point,Fe.pointLightShadows.value=W.state.pointShadow,Fe.hemisphereLights.value=W.state.hemi,Fe.directionalShadowMap.value=W.state.directionalShadowMap,Fe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Fe.spotShadowMap.value=W.state.spotShadowMap,Fe.spotLightMatrix.value=W.state.spotLightMatrix,Fe.spotLightMap.value=W.state.spotLightMap,Fe.pointShadowMap.value=W.state.pointShadowMap,Fe.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function gi(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Zr.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function ti(b,H){const K=Ne.get(b);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function ni(b,H,K,Z,W){H.isScene!==!0&&(H=Lt),qe.resetTextureUnits();const he=H.fog,xe=Z.isMeshStandardMaterial?H.environment:null,Ae=g===null?L.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:Gi,ye=(Z.isMeshStandardMaterial?S:R).get(Z.envMap||xe),Ce=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,ut=!!K.morphAttributes.color;let At=Jn;Z.toneMapped&&(g===null||g.isXRRenderTarget===!0)&&(At=L.toneMapping);const wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=wt!==void 0?wt.length:0,Be=Ne.get(Z),St=D.state.lights;if(ce===!0&&(Te===!0||b!==V)){const Ot=b===V&&Z.id===E;Re.setState(Z,b,Ot)}let at=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==St.state.version||Be.outputColorSpace!==Ae||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==ye||Z.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Re.numPlanes||Be.numIntersection!==Re.numIntersection)||Be.vertexAlphas!==Ce||Be.vertexTangents!==Ve||Be.morphTargets!==Fe||Be.morphNormals!==nt||Be.morphColors!==ut||Be.toneMapping!==At||Be.morphTargetsCount!==dt)&&(at=!0):(at=!0,Be.__version=Z.version);let gt=Be.currentProgram;at===!0&&(gt=En(Z,H,W));let Tn=!1,Gt=!1,Mn=!1;const bt=gt.getUniforms(),Ft=Be.uniforms;if(we.useProgram(gt.program)&&(Tn=!0,Gt=!0,Mn=!0),Z.id!==E&&(E=Z.id,Gt=!0),Tn||V!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),bt.setValue(N,"projectionMatrix",b.projectionMatrix),bt.setValue(N,"viewMatrix",b.matrixWorldInverse);const Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(N,Le.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&bt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Gt=!0,Mn=!0)}if(W.isSkinnedMesh){bt.setOptional(N,W,"bindMatrix"),bt.setOptional(N,W,"bindMatrixInverse");const Ot=W.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),bt.setValue(N,"boneTexture",Ot.boneTexture,qe))}W.isBatchedMesh&&(bt.setOptional(N,W,"batchingTexture"),bt.setValue(N,"batchingTexture",W._matricesTexture,qe),bt.setOptional(N,W,"batchingIdTexture"),bt.setValue(N,"batchingIdTexture",W._indirectTexture,qe),bt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",W._colorsTexture,qe));const Kt=K.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Ge.update(W,K,gt),(Gt||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,bt.setValue(N,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ft.envMap.value=ye,Ft.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Ft.envMapIntensity.value=H.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Y0()),Gt&&(bt.setValue(N,"toneMappingExposure",L.toneMappingExposure),Be.needsLights&&_r(Ft,Mn),he&&Z.fog===!0&&Pe.refreshFogUniforms(Ft,he),Pe.refreshMaterialUniforms(Ft,Z,fe,se,D.state.transmissionRenderTarget[b.id]),Zr.upload(N,gi(Be),Ft,qe)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Zr.upload(N,gi(Be),Ft,qe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&bt.setValue(N,"center",W.center),bt.setValue(N,"modelViewMatrix",W.modelViewMatrix),bt.setValue(N,"normalMatrix",W.normalMatrix),bt.setValue(N,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ot=Z.uniformsGroups;for(let Bt=0,_i=Ot.length;Bt<_i;Bt++){const on=Ot[Bt];ge.update(on,gt),ge.bind(on,gt)}}return gt}function _r(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function qi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(b,H,K){const Z=Ne.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ne.get(b.texture).__webglTexture=H,Ne.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const K=Ne.get(b);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const ji=N.createFramebuffer();this.setRenderTarget=function(b,H=0,K=0){g=b,q=H,A=K;let Z=!0,W=null,he=!1,xe=!1;if(b){const ye=Ne.get(b);if(ye.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(ye.__webglFramebuffer===void 0)qe.setupRenderTarget(b);else if(ye.__hasExternalTextures)qe.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(ye.__boundDepthTexture!==Fe){if(Fe!==null&&Ne.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(b)}}const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);const Ve=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?W=Ve[H][K]:W=Ve[H],he=!0):b.samples>0&&qe.useMultisampledRTT(b)===!1?W=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[K]:W=Ve,k.copy(b.viewport),J.copy(b.scissor),Q=b.scissorTest}else k.copy(Je).multiplyScalar(fe).floor(),J.copy(ot).multiplyScalar(fe).floor(),Q=ct;if(K!==0&&(W=ji),we.bindFramebuffer(N.FRAMEBUFFER,W)&&Z&&we.drawBuffers(b,W),we.viewport(k),we.scissor(J),we.setScissorTest(Q),he){const ye=Ne.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,K)}else if(xe){const ye=H;for(let Ce=0;Ce<b.textures.length;Ce++){const Ve=Ne.get(b.textures[Ce]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ce,Ve.__webglTexture,K,ye)}}else if(b!==null&&K!==0){const ye=Ne.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,K)}E=-1},this.readRenderTargetPixels=function(b,H,K,Z,W,he,xe,Ae=0){if(!(b&&b.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){we.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Ce=b.textures[Ae],Ve=Ce.format,Fe=Ce.type;if(!mt.textureFormatReadable(Ve)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Fe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&K>=0&&K<=b.height-W&&(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(H,K,Z,W,He.convert(Ve),He.convert(Fe),he))}finally{const Ce=g!==null?Ne.get(g).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,H,K,Z,W,he,xe,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(H>=0&&H<=b.width-Z&&K>=0&&K<=b.height-W){we.bindFramebuffer(N.FRAMEBUFFER,ye);const Ce=b.textures[Ae],Ve=Ce.format,Fe=Ce.type;if(!mt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ae),N.readPixels(H,K,Z,W,He.convert(Ve),He.convert(Fe),0);const ut=g!==null?Ne.get(g).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,ut);const At=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lu(N,At,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.deleteBuffer(nt),N.deleteSync(At),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,K=0){const Z=Math.pow(2,-K),W=Math.floor(b.image.width*Z),he=Math.floor(b.image.height*Z),xe=H!==null?H.x:0,Ae=H!==null?H.y:0;qe.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,xe,Ae,W,he),we.unbindTexture()};const vr=N.createFramebuffer(),tn=N.createFramebuffer();this.copyTextureToTexture=function(b,H,K=null,Z=null,W=0,he=null){he===null&&(W!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=W,W=0):he=0);let xe,Ae,ye,Ce,Ve,Fe,nt,ut,At;const wt=b.isCompressedTexture?b.mipmaps[he]:b.image;if(K!==null)xe=K.max.x-K.min.x,Ae=K.max.y-K.min.y,ye=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,Ve=K.min.y,Fe=K.isBox3?K.min.z:0;else{const Kt=Math.pow(2,-W);xe=Math.floor(wt.width*Kt),Ae=Math.floor(wt.height*Kt),b.isDataArrayTexture?ye=wt.depth:b.isData3DTexture?ye=Math.floor(wt.depth*Kt):ye=1,Ce=0,Ve=0,Fe=0}Z!==null?(nt=Z.x,ut=Z.y,At=Z.z):(nt=0,ut=0,At=0);const dt=He.convert(H.format),Be=He.convert(H.type);let St;H.isData3DTexture?(qe.setTexture3D(H,0),St=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(qe.setTexture2DArray(H,0),St=N.TEXTURE_2D_ARRAY):(qe.setTexture2D(H,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const at=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Gt=N.getParameter(N.UNPACK_SKIP_ROWS),Mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);const bt=b.isDataArrayTexture||b.isData3DTexture,Ft=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Kt=Ne.get(b),Ot=Ne.get(H),Bt=Ne.get(Kt.__renderTarget),_i=Ne.get(Ot.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let on=0;on<ye;on++)bt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(b).__webglTexture,W,Fe+on),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.get(H).__webglTexture,he,At+on)),N.blitFramebuffer(Ce,Ve,xe,Ae,nt,ut,xe,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Ne.has(b)){const Kt=Ne.get(b),Ot=Ne.get(H);we.bindFramebuffer(N.READ_FRAMEBUFFER,vr),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,tn);for(let Bt=0;Bt<ye;Bt++)bt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,W,Fe+Bt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,W),Ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,he,At+Bt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ot.__webglTexture,he),W!==0?N.blitFramebuffer(Ce,Ve,xe,Ae,nt,ut,xe,Ae,N.COLOR_BUFFER_BIT,N.NEAREST):Ft?N.copyTexSubImage3D(St,he,nt,ut,At+Bt,Ce,Ve,xe,Ae):N.copyTexSubImage2D(St,he,nt,ut,Ce,Ve,xe,Ae);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(St,he,nt,ut,At,xe,Ae,ye,dt,Be,wt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(St,he,nt,ut,At,xe,Ae,ye,dt,wt.data):N.texSubImage3D(St,he,nt,ut,At,xe,Ae,ye,dt,Be,wt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,nt,ut,xe,Ae,dt,Be,wt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,nt,ut,wt.width,wt.height,dt,wt.data):N.texSubImage2D(N.TEXTURE_2D,he,nt,ut,xe,Ae,dt,Be,wt);N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Mn),he===0&&H.generateMipmaps&&N.generateMipmap(St),we.unbindTexture()},this.initRenderTarget=function(b){Ne.get(b).__webglFramebuffer===void 0&&qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?qe.setTextureCube(b,0):b.isData3DTexture?qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?qe.setTexture2DArray(b,0):qe.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){q=0,A=0,g=null,we.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class j0{constructor(e){this.container=e,this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new Zu,this.camera=new fn(75,this.width/this.height,.1,1e3),this.camera.position.z=30,this.renderer=new q0({alpha:!0,antialias:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}render(){this.renderer.render(this.scene,this.camera)}}class K0{constructor(e){this.scene=e,this.count=1e4,this.particles=null,this.geometry=null,this.material=null,this.color=new pt("#00ffff"),this.baseSize=.05,this.currentShape="sphere",this.expansion=1,this.tension=0,this.targetPositions=new Float32Array(this.count*3),this.currentPositions=new Float32Array(this.count*3),this.init()}init(){this.geometry=new yn,this.calculateShape("sphere",this.currentPositions),this.calculateShape("sphere",this.targetPositions),this.geometry.setAttribute("position",new vn(this.currentPositions,3)),this.material=new Uc({size:this.baseSize,color:this.color,transparent:!0,opacity:.8,blending:Ws,depthWrite:!1}),this.particles=new tf(this.geometry,this.material),this.scene.add(this.particles)}calculateShape(e,t){for(let n=0;n<this.count;n++){const r=n*3;let a,o,c;if(e==="sphere"){const f=5*Math.cbrt(Math.random()),u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);a=f*Math.sin(d)*Math.cos(u),o=f*Math.sin(d)*Math.sin(u),c=f*Math.cos(d)}else if(e==="heart"){const f=Math.random()*Math.PI*2,u=Math.random()*Math.PI;a=16*Math.pow(Math.sin(f),3),o=13*Math.cos(f)-5*Math.cos(2*f)-2*Math.cos(3*f)-Math.cos(4*f),c=u*2-3;const d=Math.random();a*=d*.3,o*=d*.3,c*=d*.3}else if(e==="flower"){const f=5*Math.sqrt(Math.random()),u=Math.random()*Math.PI*2,m=Math.sin(u*5),x=f*(.5+.5*m);a=x*Math.cos(u),o=x*Math.sin(u),c=(Math.random()-.5)*2}else if(e==="saturn")if(n<this.count*.3){const f=3*Math.cbrt(Math.random()),u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);a=f*Math.sin(d)*Math.cos(u),o=f*Math.sin(d)*Math.sin(u),c=f*Math.cos(d)}else{const f=5+Math.random()*4,u=Math.random()*Math.PI*2;a=f*Math.cos(u),c=f*Math.sin(u),o=(Math.random()-.5)*.5}else if(e==="buddha"){const f=Math.random();if(f<.3){const u=1.5*Math.cbrt(Math.random()),d=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1);a=u*Math.sin(m)*Math.cos(d),o=u*Math.sin(m)*Math.sin(d)+4,c=u*Math.cos(m)}else if(f<.7){const u=2.5*Math.cbrt(Math.random()),d=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1);a=u*Math.sin(m)*Math.cos(d),o=u*Math.sin(m)*Math.sin(d),c=u*Math.cos(m)}else{const u=4*Math.sqrt(Math.random()),d=Math.random()*Math.PI;a=u*Math.cos(d),o=-2.5+(Math.random()-.5),c=u*Math.sin(d)*.5}}else if(e==="fireworks"){const f=8*Math.pow(Math.random(),.5),u=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);a=f*Math.sin(d)*Math.cos(u),o=f*Math.sin(d)*Math.sin(u),c=f*Math.cos(d)}t[r]=a,t[r+1]=o,t[r+2]=c}}update(e,t){t?(this.expansion=ps.lerp(this.expansion,t.expansion,.1),this.tension=ps.lerp(this.tension,t.tension,.1),this.particles.rotation.z=ps.lerp(this.particles.rotation.z,t.rotation,.05)):this.particles.rotation.y+=.001;const n=this.geometry.attributes.position.array;for(let r=0;r<this.count;r++){const a=r*3;n[a]+=(this.targetPositions[a]-n[a])*.05,n[a+1]+=(this.targetPositions[a+1]-n[a+1])*.05,n[a+2]+=(this.targetPositions[a+2]-n[a+2])*.05}this.geometry.attributes.position.needsUpdate=!0,this.material.size=this.baseSize*(1+this.tension*.5),this.particles.scale.setScalar(this.expansion)}setColor(e){this.color.set(e),this.material.color.copy(this.color)}setShape(e){this.currentShape=e,this.calculateShape(e,this.targetPositions)}}var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hs={},cc;function Z0(){return cc||(cc=1,(function(){var i;function e(s){var l=0;return function(){return l<s.length?{done:!1,value:s[l++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function a(s,l){if(l)e:{var h=r;s=s.split(".");for(var M=0;M<s.length-1;M++){var w=s[M];if(!(w in h))break e;h=h[w]}s=s[s.length-1],M=h[s],l=l(M),l!=M&&l!=null&&t(h,s,{configurable:!0,writable:!0,value:l})}}a("Symbol",function(s){function l(P){if(this instanceof l)throw new TypeError("Symbol is not a constructor");return new h(M+(P||"")+"_"+w++,P)}function h(P,C){this.h=P,t(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;h.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return l}),a("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var l="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<l.length;h++){var M=r[l[h]];typeof M=="function"&&typeof M.prototype[s]!="function"&&t(M.prototype,s,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return s});function o(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function c(s){var l=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return l?l.call(s):{next:e(s)}}function f(s){if(!(s instanceof Array)){s=c(s);for(var l,h=[];!(l=s.next()).done;)h.push(l.value);s=h}return s}var u=typeof Object.assign=="function"?Object.assign:function(s,l){for(var h=1;h<arguments.length;h++){var M=arguments[h];if(M)for(var w in M)Object.prototype.hasOwnProperty.call(M,w)&&(s[w]=M[w])}return s};a("Object.assign",function(s){return s||u});var d=typeof Object.create=="function"?Object.create:function(s){function l(){}return l.prototype=s,new l},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var x;e:{var v={a:!0},y={};try{y.__proto__=v,x=y.a;break e}catch{}x=!1}m=x?function(s,l){if(s.__proto__=l,s.__proto__!==l)throw new TypeError(s+" is not extensible");return s}:null}var T=m;function _(s,l){if(s.prototype=d(l.prototype),s.prototype.constructor=s,T)T(s,l);else for(var h in l)if(h!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(l,h);M&&Object.defineProperty(s,h,M)}else s[h]=l[h];s.ya=l.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function I(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}p.prototype.u=function(s){this.i=s};function D(s,l){s.l={ma:l,na:!0},s.h=s.s||s.v}p.prototype.return=function(s){this.l={return:s},this.h=this.v};function U(s,l,h){return s.h=h,{value:l}}function G(s){this.h=new p,this.i=s}function L(s,l){I(s.h);var h=s.h.j;return h?B(s,"return"in h?h.return:function(M){return{value:M,done:!0}},l,s.h.return):(s.h.return(l),q(s))}function B(s,l,h,M){try{var w=l.call(s.h.j,h);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return s.h.m=!1,w;var P=w.value}catch(C){return s.h.j=null,D(s.h,C),q(s)}return s.h.j=null,M.call(s.h,P),q(s)}function q(s){for(;s.h.h;)try{var l=s.i(s.h);if(l)return s.h.m=!1,{value:l.value,done:!1}}catch(h){s.h.i=void 0,D(s.h,h)}if(s.h.m=!1,s.h.l){if(l=s.h.l,s.h.l=null,l.na)throw l.ma;return{value:l.return,done:!0}}return{value:void 0,done:!0}}function A(s){this.next=function(l){return I(s.h),s.h.j?l=B(s,s.h.j.next,l,s.h.u):(s.h.u(l),l=q(s)),l},this.throw=function(l){return I(s.h),s.h.j?l=B(s,s.h.j.throw,l,s.h.u):(D(s.h,l),l=q(s)),l},this.return=function(l){return L(s,l)},this[Symbol.iterator]=function(){return this}}function g(s){function l(M){return s.next(M)}function h(M){return s.throw(M)}return new Promise(function(M,w){function P(C){C.done?M(C.value):Promise.resolve(C.value).then(l,h).then(P,w)}P(s.next())})}function E(s){return g(new A(new G(s)))}a("Promise",function(s){function l(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var O=this.l();try{C(O.resolve,O.reject)}catch(j){O.reject(j)}}function h(){this.h=null}function M(C){return C instanceof l?C:new l(function(O){O(C)})}if(s)return s;h.prototype.i=function(C){if(this.h==null){this.h=[];var O=this;this.j(function(){O.m()})}this.h.push(C)};var w=r.setTimeout;h.prototype.j=function(C){w(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var O=0;O<C.length;++O){var j=C[O];C[O]=null;try{j()}catch(le){this.l(le)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},l.prototype.l=function(){function C(le){return function(_e){j||(j=!0,le.call(O,_e))}}var O=this,j=!1;return{resolve:C(this.I),reject:C(this.m)}},l.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof l)this.L(C);else{e:switch(typeof C){case"object":var O=C!=null;break e;case"function":O=!0;break e;default:O=!1}O?this.F(C):this.s(C)}},l.prototype.F=function(C){var O=void 0;try{O=C.then}catch(j){this.m(j);return}typeof O=="function"?this.M(O,C):this.s(C)},l.prototype.m=function(C){this.v(2,C)},l.prototype.s=function(C){this.v(1,C)},l.prototype.v=function(C,O){if(this.i!=0)throw Error("Cannot settle("+C+", "+O+"): Promise already settled in state"+this.i);this.i=C,this.j=O,this.i===2&&this.K(),this.H()},l.prototype.K=function(){var C=this;w(function(){if(C.D()){var O=r.console;typeof O<"u"&&O.error(C.j)}},1)},l.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,O=r.Event,j=r.dispatchEvent;return typeof j>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof O=="function"?C=new O("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,j(C))},l.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)P.i(this.h[C]);this.h=null}};var P=new h;return l.prototype.L=function(C){var O=this.l();C.T(O.resolve,O.reject)},l.prototype.M=function(C,O){var j=this.l();try{C.call(O,j.resolve,j.reject)}catch(le){j.reject(le)}},l.prototype.then=function(C,O){function j(Ie,Se){return typeof Ie=="function"?function(Xe){try{le(Ie(Xe))}catch(it){_e(it)}}:Se}var le,_e,We=new l(function(Ie,Se){le=Ie,_e=Se});return this.T(j(C,le),j(O,_e)),We},l.prototype.catch=function(C){return this.then(void 0,C)},l.prototype.T=function(C,O){function j(){switch(le.i){case 1:C(le.j);break;case 2:O(le.j);break;default:throw Error("Unexpected state: "+le.i)}}var le=this;this.h==null?P.i(j):this.h.push(j),this.u=!0},l.resolve=M,l.reject=function(C){return new l(function(O,j){j(C)})},l.race=function(C){return new l(function(O,j){for(var le=c(C),_e=le.next();!_e.done;_e=le.next())M(_e.value).T(O,j)})},l.all=function(C){var O=c(C),j=O.next();return j.done?M([]):new l(function(le,_e){function We(Xe){return function(it){Ie[Xe]=it,Se--,Se==0&&le(Ie)}}var Ie=[],Se=0;do Ie.push(void 0),Se++,M(j.value).T(We(Ie.length-1),_e),j=O.next();while(!j.done)})},l});function V(s,l){s instanceof String&&(s+="");var h=0,M=!1,w={next:function(){if(!M&&h<s.length){var P=h++;return{value:l(P,s[P]),done:!1}}return M=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}a("Array.prototype.keys",function(s){return s||function(){return V(this,function(l){return l})}}),a("Array.prototype.fill",function(s){return s||function(l,h,M){var w=this.length||0;for(0>h&&(h=Math.max(0,w+h)),(M==null||M>w)&&(M=w),M=Number(M),0>M&&(M=Math.max(0,w+M)),h=Number(h||0);h<M;h++)this[h]=l;return this}});function k(s){return s||Array.prototype.fill}a("Int8Array.prototype.fill",k),a("Uint8Array.prototype.fill",k),a("Uint8ClampedArray.prototype.fill",k),a("Int16Array.prototype.fill",k),a("Uint16Array.prototype.fill",k),a("Int32Array.prototype.fill",k),a("Uint32Array.prototype.fill",k),a("Float32Array.prototype.fill",k),a("Float64Array.prototype.fill",k),a("Object.is",function(s){return s||function(l,h){return l===h?l!==0||1/l===1/h:l!==l&&h!==h}}),a("Array.prototype.includes",function(s){return s||function(l,h){var M=this;M instanceof String&&(M=String(M));var w=M.length;for(h=h||0,0>h&&(h=Math.max(h+w,0));h<w;h++){var P=M[h];if(P===l||Object.is(P,l))return!0}return!1}}),a("String.prototype.includes",function(s){return s||function(l,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(l instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(l,h||0)!==-1}});var J=this||self;function Q(s,l){s=s.split(".");var h=J;s[0]in h||typeof h.execScript>"u"||h.execScript("var "+s[0]);for(var M;s.length&&(M=s.shift());)s.length||l===void 0?h[M]&&h[M]!==Object.prototype[M]?h=h[M]:h=h[M]={}:h[M]=l}function z(s){var l;e:{if((l=J.navigator)&&(l=l.userAgent))break e;l=""}return l.indexOf(s)!=-1}var $=Array.prototype.map?function(s,l){return Array.prototype.map.call(s,l,void 0)}:function(s,l){for(var h=s.length,M=Array(h),w=typeof s=="string"?s.split(""):s,P=0;P<h;P++)P in w&&(M[P]=l.call(void 0,w[P],P,s));return M},Y={},se=null;function fe(s){var l=s.length,h=3*l/4;h%3?h=Math.floor(h):"=.".indexOf(s[l-1])!=-1&&(h="=.".indexOf(s[l-2])!=-1?h-2:h-1);var M=new Uint8Array(h),w=0;return De(s,function(P){M[w++]=P}),w!==h?M.subarray(0,w):M}function De(s,l){function h(j){for(;M<s.length;){var le=s.charAt(M++),_e=se[le];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(le))throw Error("Unknown base64 encoding at char: "+le)}return j}Ye();for(var M=0;;){var w=h(-1),P=h(0),C=h(64),O=h(64);if(O===64&&w===-1)break;l(w<<2|P>>4),C!=64&&(l(P<<4&240|C>>2),O!=64&&l(C<<6&192|O))}}function Ye(){if(!se){se={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),l=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var M=s.concat(l[h].split(""));Y[h]=M;for(var w=0;w<M.length;w++){var P=M[w];se[P]===void 0&&(se[P]=w)}}}}var Je=typeof Uint8Array<"u",ot=!(z("Trident")||z("MSIE"))&&typeof J.btoa=="function";function ct(s){if(!ot){var l;l===void 0&&(l=0),Ye(),l=Y[l];for(var h=Array(Math.floor(s.length/3)),M=l[64]||"",w=0,P=0;w<s.length-2;w+=3){var C=s[w],O=s[w+1],j=s[w+2],le=l[C>>2];C=l[(C&3)<<4|O>>4],O=l[(O&15)<<2|j>>6],j=l[j&63],h[P++]=le+C+O+j}switch(le=0,j=M,s.length-w){case 2:le=s[w+1],j=l[(le&15)<<2]||M;case 1:s=s[w],h[P]=l[s>>2]+l[(s&3)<<4|le>>4]+j+M}return h.join("")}for(l="";10240<s.length;)l+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return l+=String.fromCharCode.apply(null,s),btoa(l)}var ie=RegExp("[-_.]","g");function ce(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Te(s){if(!ot)return fe(s);ie.test(s)&&(s=s.replace(ie,ce)),s=atob(s);for(var l=new Uint8Array(s.length),h=0;h<s.length;h++)l[h]=s.charCodeAt(h);return l}var je;function Le(){return je||(je=new Uint8Array(0))}var Ze={},Lt=typeof Uint8Array.prototype.slice=="function",Ue=0,Qe=0;function N(s){var l=0>s;s=Math.abs(s);var h=s>>>0;s=Math.floor((s-h)/4294967296),l&&(h=c(tt(h,s)),l=h.next().value,s=h.next().value,h=l),Ue=h>>>0,Qe=s>>>0}var rt=typeof BigInt=="function";function tt(s,l){return l=~l,s?s=~s+1:l+=1,[s,l]}function mt(s,l){this.i=s>>>0,this.h=l>>>0}function we(s){if(!s)return Mt||(Mt=new mt(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)N(Number(s));else if(rt)s=BigInt(s),Ue=Number(s&BigInt(4294967295))>>>0,Qe=Number(s>>BigInt(32)&BigInt(4294967295));else{var l=+(s[0]==="-");Qe=Ue=0;for(var h=s.length,M=l,w=(h-l)%6+l;w<=h;M=w,w+=6)M=Number(s.slice(M,w)),Qe*=1e6,Ue=1e6*Ue+M,4294967296<=Ue&&(Qe+=Ue/4294967296|0,Ue%=4294967296);l&&(l=c(tt(Ue,Qe)),s=l.next().value,l=l.next().value,Ue=s,Qe=l)}return new mt(Ue,Qe)}var Mt;function Ne(s,l){return Error("Invalid wire type: "+s+" (at position "+l+")")}function qe(){return Error("Failed to read varint, encoding is invalid.")}function R(s,l){return Error("Tried to read past the end of the data "+l+" > "+s)}function S(){throw Error("Invalid UTF8")}function X(s,l){return l=String.fromCharCode.apply(null,l),s==null?l:s+l}var ne=void 0,ae,te=typeof TextDecoder<"u",Pe,ve=typeof TextEncoder<"u",Oe;function Re(s){if(s!==Ze)throw Error("illegal external caller")}function oe(s,l){if(Re(l),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function de(){return Oe||(Oe=new oe(null,Ze))}function Ge(s){Re(Ze);var l=s.V;return l=l==null||Je&&l!=null&&l instanceof Uint8Array?l:typeof l=="string"?Te(l):null,l==null?l:s.V=l}function ze(s){if(typeof s=="string")return{buffer:Te(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===oe)return{buffer:Ge(s)||Le(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function be(s,l){this.i=null,this.m=!1,this.h=this.j=this.l=0,He(this,s,l)}function He(s,l,h){h=h===void 0?{}:h,s.S=h.S===void 0?!1:h.S,l&&(l=ze(l),s.i=l.buffer,s.m=l.C,s.l=0,s.j=s.i.length,s.h=s.l)}be.prototype.reset=function(){this.h=this.l};function F(s,l){if(s.h=l,l>s.j)throw R(s.j,l)}function ge(s){var l=s.i,h=s.h,M=l[h++],w=M&127;if(M&128&&(M=l[h++],w|=(M&127)<<7,M&128&&(M=l[h++],w|=(M&127)<<14,M&128&&(M=l[h++],w|=(M&127)<<21,M&128&&(M=l[h++],w|=M<<28,M&128&&l[h++]&128&&l[h++]&128&&l[h++]&128&&l[h++]&128&&l[h++]&128)))))throw qe();return F(s,h),w}function pe(s,l){if(0>l)throw Error("Tried to read a negative byte length: "+l);var h=s.h,M=h+l;if(M>s.j)throw R(l,s.j-h);return s.h=M,h}var me=[];function ue(){this.h=[]}ue.prototype.length=function(){return this.h.length},ue.prototype.end=function(){var s=this.h;return this.h=[],s};function re(s,l,h){for(;0<h||127<l;)s.h.push(l&127|128),l=(l>>>7|h<<25)>>>0,h>>>=7;s.h.push(l)}function Ee(s,l){for(;127<l;)s.h.push(l&127|128),l>>>=7;s.h.push(l)}function ke(s,l){if(me.length){var h=me.pop();He(h,s,l),s=h}else s=new be(s,l);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(l)}ke.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},ke.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function xt(s){var l=s.h;if(l.h==l.j)return!1;s.j=s.h.h;var h=ge(s.h)>>>0;if(l=h>>>3,h&=7,!(0<=h&&5>=h))throw Ne(h,s.j);if(1>l)throw Error("Invalid field number: "+l+" (at position "+s.j+")");return s.l=l,s.i=h,!0}function lt(s){switch(s.i){case 0:if(s.i!=0)lt(s);else e:{s=s.h;for(var l=s.h,h=l+10,M=s.i;l<h;)if((M[l++]&128)===0){F(s,l);break e}throw qe()}break;case 1:s=s.h,F(s,s.h+8);break;case 2:s.i!=2?lt(s):(l=ge(s.h)>>>0,s=s.h,F(s,s.h+l));break;case 5:s=s.h,F(s,s.h+4);break;case 3:l=s.l;do{if(!xt(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=l)throw Error("Unmatched end-group tag");break}lt(s)}while(!0);break;default:throw Ne(s.i,s.j)}}var Wt=[];function Qt(){this.j=[],this.i=0,this.h=new ue}function Gn(s,l){l.length!==0&&(s.j.push(l),s.i+=l.length)}function xr(s,l){if(l=l.R){Gn(s,s.h.end());for(var h=0;h<l.length;h++)Gn(s,Ge(l[h])||Le())}}var an=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Xt(s,l){return an?s[an]|=l:s.A!==void 0?s.A|=l:(Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}}),l)}function xi(s,l){an?s[an]&&(s[an]&=~l):s.A!==void 0&&(s.A&=~l)}function Tt(s){var l;return an?l=s[an]:l=s.A,l??0}function en(s,l){an?s[an]=l:s.A!==void 0?s.A=l:Object.defineProperties(s,{A:{value:l,configurable:!0,writable:!0,enumerable:!1}})}function Hn(s){return Xt(s,1),s}function gr(s,l){en(l,(s|0)&-51)}function En(s,l){en(l,(s|18)&-41)}var gi={};function ti(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var ni,_r=[];en(_r,23),ni=Object.freeze(_r);function qi(s){if(Tt(s.o)&2)throw Error("Cannot mutate an immutable Message")}function ji(s){var l=s.length;(l=l?s[l-1]:void 0)&&ti(l)?l.g=1:(l={},s.push((l.g=1,l)))}function vr(s){var l=s.i+s.G;return s.B||(s.B=s.o[l]={})}function tn(s,l){return l===-1?null:l>=s.i?s.B?s.B[l]:void 0:s.o[l+s.G]}function b(s,l,h,M){qi(s),H(s,l,h,M)}function H(s,l,h,M){s.j&&(s.j=void 0),l>=s.i||M?vr(s)[l]=h:(s.o[l+s.G]=h,(s=s.B)&&l in s&&delete s[l])}function K(s,l,h,M){var w=tn(s,l);Array.isArray(w)||(w=ni);var P=Tt(w);if(P&1||Hn(w),M)P&2||Xt(w,2),h&1||Object.freeze(w);else{M=!(h&2);var C=P&2;h&1||!C?M&&P&16&&!C&&xi(w,16):(w=Hn(Array.prototype.slice.call(w)),H(s,l,w))}return w}function Z(s,l){var h=tn(s,l),M=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return M!=null&&M!==h&&H(s,l,M),M}function W(s,l,h,M,w){s.h||(s.h={});var P=s.h[h],C=K(s,h,3,w);if(!P){var O=C;P=[];var j=!!(Tt(s.o)&16);C=!!(Tt(O)&2);var le=O;!w&&C&&(O=Array.prototype.slice.call(O));for(var _e=C,We=0;We<O.length;We++){var Ie=O[We],Se=l,Xe=!1;if(Xe=Xe===void 0?!1:Xe,Ie=Array.isArray(Ie)?new Se(Ie):Xe?new Se:void 0,Ie!==void 0){Se=Ie.o;var it=Xe=Tt(Se);C&&(it|=2),j&&(it|=16),it!=Xe&&en(Se,it),Se=it,_e=_e||!!(2&Se),P.push(Ie)}}return s.h[h]=P,j=Tt(O),l=j|33,l=_e?l&-9:l|8,j!=l&&(_e=O,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),en(_e,l),O=_e),le!==O&&H(s,h,O),(w||M&&C)&&Xt(P,2),M&&Object.freeze(P),P}return w||(w=Object.isFrozen(P),M&&!w?Object.freeze(P):!M&&w&&(P=Array.prototype.slice.call(P),s.h[h]=P)),P}function he(s,l,h){var M=!!(Tt(s.o)&2);if(l=W(s,l,h,M,M),s=K(s,h,3,M),!(M||Tt(s)&8)){for(M=0;M<l.length;M++){if(h=l[M],Tt(h.o)&2){var w=at(h,!1);w.j=h}else w=h;h!==w&&(l[M]=w,s[M]=w.o)}Xt(s,8)}return l}function xe(s,l,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);b(s,l,h)}function Ae(s,l,h,M,w){qi(s);var P=W(s,h,l,!1,!1);return h=M??new h,s=K(s,l,2,!1),w!=null?(P.splice(w,0,h),s.splice(w,0,h.o)):(P.push(h),s.push(h.o)),h.C()&&xi(s,8),h}function ye(s,l){return s??l}function Ce(s,l,h){return h=h===void 0?0:h,ye(Z(s,l),h)}var Ve;function Fe(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if((Tt(s)&128)!==0)return s=Array.prototype.slice.call(s),ji(s),s}else{if(Je&&s!=null&&s instanceof Uint8Array)return ct(s);if(s instanceof oe){var l=s.V;return l==null?"":typeof l=="string"?l:s.V=ct(l)}}}return s}function nt(s,l,h,M){if(s!=null){if(Array.isArray(s))s=ut(s,l,h,M!==void 0);else if(ti(s)){var w={},P;for(P in s)w[P]=nt(s[P],l,h,M);s=w}else s=l(s,M);return s}}function ut(s,l,h,M){var w=Tt(s);M=M?!!(w&16):void 0,s=Array.prototype.slice.call(s);for(var P=0;P<s.length;P++)s[P]=nt(s[P],l,h,M);return h(w,s),s}function At(s){return s.ja===gi?s.toJSON():Fe(s)}function wt(s,l){s&128&&ji(l)}function dt(s,l,h){if(h=h===void 0?En:h,s!=null){if(Je&&s instanceof Uint8Array)return s.length?new oe(new Uint8Array(s),Ze):de();if(Array.isArray(s)){var M=Tt(s);return M&2?s:l&&!(M&32)&&(M&16||M===0)?(en(s,M|2),s):(s=ut(s,dt,M&4?En:h,!0),l=Tt(s),l&4&&l&2&&Object.freeze(s),s)}return s.ja===gi?St(s):s}}function Be(s,l,h,M,w,P,C){if(s=s.h&&s.h[h]){if(M=Tt(s),M&2?M=s:(P=$(s,St),En(M,P),Object.freeze(P),M=P),qi(l),C=M==null?ni:Hn([]),M!=null){for(P=!!M.length,s=0;s<M.length;s++){var O=M[s];P=P&&!(Tt(O.o)&2),C[s]=O.o}P=(P?8:0)|1,s=Tt(C),(s&P)!==P&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),en(C,s|P)),l.h||(l.h={}),l.h[h]=M}else l.h&&(l.h[h]=void 0);H(l,h,C,w)}else b(l,h,dt(M,P,C),w)}function St(s){return Tt(s.o)&2||(s=at(s,!0),Xt(s.o,2)),s}function at(s,l){var h=s.o,M=[];Xt(M,16);var w=s.constructor.h;if(w&&M.push(w),w=s.B,w){M.length=h.length,M.fill(void 0,M.length,h.length);var P={};M[M.length-1]=P}(Tt(h)&128)!==0&&ji(M),l=l||s.C()?En:gr,P=s.constructor,Ve=M,M=new P(M),Ve=void 0,s.R&&(M.R=s.R.slice()),P=!!(Tt(h)&16);for(var C=w?h.length-1:h.length,O=0;O<C;O++)Be(s,M,O-s.G,h[O],!1,P,l);if(w)for(var j in w)Be(s,M,+j,w[j],!0,P,l);return M}function gt(s,l,h){s==null&&(s=Ve),Ve=void 0;var M=this.constructor.i||0,w=0<M,P=this.constructor.h,C=!1;if(s==null){s=P?[P]:[];var O=48,j=!0;w&&(M=0,O|=128),en(s,O)}else{if(!Array.isArray(s)||P&&P!==s[0])throw Error();var le=O=Xt(s,0);if((j=(16&le)!==0)&&((C=(32&le)!==0)||(le|=32)),w){if(128&le)M=0;else if(0<s.length){var _e=s[s.length-1];if(ti(_e)&&"g"in _e){M=0,le|=128,delete _e.g;var We=!0,Ie;for(Ie in _e){We=!1;break}We&&s.pop()}}}else if(128&le)throw Error();O!==le&&en(s,le)}this.G=(P?0:-1)-M,this.h=void 0,this.o=s;e:{if(P=this.o.length,M=P-1,P&&(P=this.o[M],ti(P))){this.B=P,this.i=M-this.G;break e}l!==void 0&&-1<l?(this.i=Math.max(l,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){l=j&&!C&&!0,w=this.i;var Se;for(j=0;j<h.length;j++)C=h[j],C<w?(C+=this.G,(M=s[C])?Tn(M,l):s[C]=ni):(Se||(Se=vr(this)),(M=Se[C])?Tn(M,l):Se[C]=ni)}}gt.prototype.toJSON=function(){return ut(this.o,At,wt)},gt.prototype.C=function(){return!!(Tt(this.o)&2)};function Tn(s,l){if(Array.isArray(s)){var h=Tt(s),M=1;!l||h&2||(M|=16),(h&M)!==M&&en(s,h|M)}}gt.prototype.ja=gi,gt.prototype.toString=function(){return this.o.toString()};function Gt(s,l,h){if(h){var M={},w;for(w in h){var P=h[w],C=P.qa;C||(M.J=P.wa||P.oa.W,P.ia?(M.aa=Wa(P.ia),C=(function(O){return function(j,le,_e){return O.J(j,le,_e,O.aa)}})(M)):P.ka?(M.Z=Xa(P.da.P,P.ka),C=(function(O){return function(j,le,_e){return O.J(j,le,_e,O.Z)}})(M)):C=M.J,P.qa=C),C(l,s,P.da),M={J:M.J,aa:M.aa,Z:M.Z}}}xr(l,s)}var Mn=Symbol();function bt(s,l,h){return s[Mn]||(s[Mn]=function(M,w){return l(M,w,h)})}function Ft(s){var l=s[Mn];if(!l){var h=os(s);l=function(M,w){return Ya(M,w,h)},s[Mn]=l}return l}function Kt(s){var l=s.ia;if(l)return Ft(l);if(l=s.va)return bt(s.da.P,l,s.ka)}function Ot(s){var l=Kt(s),h=s.da,M=s.oa.U;return l?function(w,P){return M(w,P,h,l)}:function(w,P){return M(w,P,h)}}function Bt(s,l){var h=s[l];return typeof h=="function"&&h.length===0&&(h=h(),s[l]=h),Array.isArray(h)&&(Zi in h||Ki in h||0<h.length&&typeof h[0]=="function")?h:void 0}function _i(s,l,h,M,w,P){l.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var O=s[C++];h(l,O)}for(;C<s.length;){h=s[C++];for(var j=C+1;j<s.length&&typeof s[j]!="number";)j++;switch(O=s[C++],j-=C,j){case 0:M(l,h,O);break;case 1:(j=Bt(s,C))?(C++,w(l,h,O,j)):M(l,h,O,s[C++]);break;case 2:j=C++,j=Bt(s,j),w(l,h,O,j,s[C++]);break;case 3:P(l,h,O,s[C++],s[C++],s[C++]);break;case 4:P(l,h,O,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+j)}}return l}var on=Symbol();function Wa(s){var l=s[on];if(!l){var h=as(s);l=function(M,w){return qa(M,w,h)},s[on]=l}return l}function Xa(s,l){var h=s[on];return h||(h=function(M,w){return Gt(M,w,l)},s[on]=h),h}var Ki=Symbol();function Wc(s,l){s.push(l)}function Xc(s,l,h){s.push(l,h.W)}function Yc(s,l,h,M){var w=Wa(M),P=as(M).P,C=h.W;s.push(l,function(O,j,le){return C(O,j,le,P,w)})}function qc(s,l,h,M,w,P){var C=Xa(M,P),O=h.W;s.push(l,function(j,le,_e){return O(j,le,_e,M,C)})}function as(s){var l=s[Ki];return l||(l=_i(s,s[Ki]=[],Wc,Xc,Yc,qc),Zi in s&&Ki in s&&(s.length=0),l)}var Zi=Symbol();function jc(s,l){s[0]=l}function Kc(s,l,h,M){var w=h.U;s[l]=M?function(P,C,O){return w(P,C,O,M)}:w}function Zc(s,l,h,M,w){var P=h.U,C=Ft(M),O=os(M).P;s[l]=function(j,le,_e){return P(j,le,_e,O,C,w)}}function $c(s,l,h,M,w,P,C){var O=h.U,j=bt(M,w,P);s[l]=function(le,_e,We){return O(le,_e,We,M,j,C)}}function os(s){var l=s[Zi];return l||(l=_i(s,s[Zi]={},jc,Kc,Zc,$c),Zi in s&&Ki in s&&(s.length=0),l)}function Ya(s,l,h){for(;xt(l)&&l.i!=4;){var M=l.l,w=h[M];if(!w){var P=h[0];P&&(P=P[M])&&(w=h[M]=Ot(P))}if(!w||!w(l,s,M)){w=l,M=s,P=w.j,lt(w);var C=w;if(!C.ca){if(w=C.h.h-P,C.h.h=P,C=C.h,w==0)w=de();else{if(P=pe(C,w),C.S&&C.m)w=C.i.subarray(P,P+w);else{C=C.i;var O=P;w=P+w,w=O===w?Le():Lt?C.slice(O,w):new Uint8Array(C.subarray(O,w))}w=w.length==0?de():new oe(w,Ze)}(P=M.R)?P.push(w):M.R=[w]}}}return s}function qa(s,l,h){for(var M=h.length,w=M%2==1,P=w?1:0;P<M;P+=2)(0,h[P+1])(l,s,h[P]);Gt(s,l,w?h[0]:void 0)}function $i(s,l){return{U:s,W:l}}var dn=$i(function(s,l,h){if(s.i!==5)return!1;s=s.h;var M=s.i,w=s.h,P=M[w],C=M[w+1],O=M[w+2];return M=M[w+3],F(s,s.h+4),C=(P<<0|C<<8|O<<16|M<<24)>>>0,s=2*(C>>31)+1,P=C>>>23&255,C&=8388607,b(l,h,P==255?C?NaN:1/0*s:P==0?s*Math.pow(2,-149)*C:s*Math.pow(2,P-150)*(C+Math.pow(2,23))),!0},function(s,l,h){if(l=Z(l,h),l!=null){Ee(s.h,8*h+5),s=s.h;var M=+l;M===0?0<1/M?Ue=Qe=0:(Qe=0,Ue=2147483648):isNaN(M)?(Qe=0,Ue=2147483647):(M=(h=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(Qe=0,Ue=(h|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),Qe=0,Ue=(h|M)>>>0):(l=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-l),M=Math.round(8388608*M),16777216<=M&&++l,Qe=0,Ue=(h|l+127<<23|M&8388607)>>>0)),h=Ue,s.h.push(h>>>0&255),s.h.push(h>>>8&255),s.h.push(h>>>16&255),s.h.push(h>>>24&255)}}),Jc=$i(function(s,l,h){if(s.i!==0)return!1;var M=s.h,w=0,P=s=0,C=M.i,O=M.h;do{var j=C[O++];w|=(j&127)<<P,P+=7}while(32>P&&j&128);for(32<P&&(s|=(j&127)>>4),P=3;32>P&&j&128;P+=7)j=C[O++],s|=(j&127)<<P;if(F(M,O),128>j)M=w>>>0,j=s>>>0,(s=j&2147483648)&&(M=~M+1>>>0,j=~j>>>0,M==0&&(j=j+1>>>0)),M=4294967296*j+(M>>>0);else throw qe();return b(l,h,s?-M:M),!0},function(s,l,h){l=tn(l,h),l!=null&&(typeof l=="string"&&we(l),l!=null&&(Ee(s.h,8*h),typeof l=="number"?(s=s.h,N(l),re(s,Ue,Qe)):(h=we(l),re(s.h,h.i,h.h))))}),Qc=$i(function(s,l,h){return s.i!==0?!1:(b(l,h,ge(s.h)),!0)},function(s,l,h){if(l=tn(l,h),l!=null&&l!=null)if(Ee(s.h,8*h),s=s.h,h=l,0<=h)Ee(s,h);else{for(l=0;9>l;l++)s.h.push(h&127|128),h>>=7;s.h.push(1)}}),ja=$i(function(s,l,h){if(s.i!==2)return!1;var M=ge(s.h)>>>0;s=s.h;var w=pe(s,M);if(s=s.i,te){var P=s,C;(C=ae)||(C=ae=new TextDecoder("utf-8",{fatal:!0})),s=w+M,P=w===0&&s===P.length?P:P.subarray(w,s);try{var O=C.decode(P)}catch(We){if(ne===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),ne=!0}catch{ne=!1}}throw!ne&&(ae=void 0),We}}else{O=w,M=O+M,w=[];for(var j=null,le,_e;O<M;)le=s[O++],128>le?w.push(le):224>le?O>=M?S():(_e=s[O++],194>le||(_e&192)!==128?(O--,S()):w.push((le&31)<<6|_e&63)):240>le?O>=M-1?S():(_e=s[O++],(_e&192)!==128||le===224&&160>_e||le===237&&160<=_e||((P=s[O++])&192)!==128?(O--,S()):w.push((le&15)<<12|(_e&63)<<6|P&63)):244>=le?O>=M-2?S():(_e=s[O++],(_e&192)!==128||(le<<28)+(_e-144)>>30!==0||((P=s[O++])&192)!==128||((C=s[O++])&192)!==128?(O--,S()):(le=(le&7)<<18|(_e&63)<<12|(P&63)<<6|C&63,le-=65536,w.push((le>>10&1023)+55296,(le&1023)+56320))):S(),8192<=w.length&&(j=X(j,w),w.length=0);O=X(j,w)}return b(l,h,O),!0},function(s,l,h){if(l=tn(l,h),l!=null){var M=!1;if(M=M===void 0?!1:M,ve){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(l))throw Error("Found an unpaired surrogate");l=(Pe||(Pe=new TextEncoder)).encode(l)}else{for(var w=0,P=new Uint8Array(3*l.length),C=0;C<l.length;C++){var O=l.charCodeAt(C);if(128>O)P[w++]=O;else{if(2048>O)P[w++]=O>>6|192;else{if(55296<=O&&57343>=O){if(56319>=O&&C<l.length){var j=l.charCodeAt(++C);if(56320<=j&&57343>=j){O=1024*(O-55296)+j-56320+65536,P[w++]=O>>18|240,P[w++]=O>>12&63|128,P[w++]=O>>6&63|128,P[w++]=O&63|128;continue}else C--}if(M)throw Error("Found an unpaired surrogate");O=65533}P[w++]=O>>12|224,P[w++]=O>>6&63|128}P[w++]=O&63|128}}l=w===P.length?P:P.subarray(0,w)}Ee(s.h,8*h+2),Ee(s.h,l.length),Gn(s,s.h.end()),Gn(s,l)}}),Ka=$i(function(s,l,h,M,w){if(s.i!==2)return!1;l=Ae(l,h,M),h=s.h.j,M=ge(s.h)>>>0;var P=s.h.h+M,C=P-h;if(0>=C&&(s.h.j=P,w(l,s,void 0,void 0,void 0),C=P-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=P,s.h.j=h,!0},function(s,l,h,M,w){if(l=he(l,M,h),l!=null)for(M=0;M<l.length;M++){var P=s;Ee(P.h,8*h+2);var C=P.h.end();Gn(P,C),C.push(P.i),P=C,w(l[M],s),C=s;var O=P.pop();for(O=C.i+C.h.length()-O;127<O;)P.push(O&127|128),O>>>=7,C.i++;P.push(O),C.i++}});function cs(s){return function(l,h){e:{if(Wt.length){var M=Wt.pop();M.setOptions(h),He(M.h,l,h),l=M}else l=new ke(l,h);try{var w=os(s),P=Ya(new w.P,l,w);break e}finally{w=l.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,l.l=-1,l.i=-1,100>Wt.length&&Wt.push(l)}P=void 0}return P}}function ls(s){return function(){var l=new Qt;qa(this,l,as(s)),Gn(l,l.h.end());for(var h=new Uint8Array(l.i),M=l.j,w=M.length,P=0,C=0;C<w;C++){var O=M[C];h.set(O,P),P+=O.length}return l.j=[h],h}}function vi(s){gt.call(this,s)}_(vi,gt);var Za=[vi,1,Qc,2,dn,3,ja,4,ja];vi.prototype.l=ls(Za);function us(s){gt.call(this,s,-1,el)}_(us,gt),us.prototype.addClassification=function(s,l){return Ae(this,1,vi,s,l),this};var el=[1],$a=cs([us,1,Ka,Za]);function Mi(s){gt.call(this,s)}_(Mi,gt);var Ja=[Mi,1,dn,2,dn,3,dn,4,dn,5,dn];Mi.prototype.l=ls(Ja);function Qa(s){gt.call(this,s,-1,tl)}_(Qa,gt);var tl=[1],eo=cs([Qa,1,Ka,Ja]);function Mr(s){gt.call(this,s)}_(Mr,gt);var to=[Mr,1,dn,2,dn,3,dn,4,dn,5,dn,6,Jc],nl=cs(to);Mr.prototype.l=ls(to);function no(s,l,h){if(h=s.createShader(h===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(h,l),s.compileShader(h),!s.getShaderParameter(h,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(h));return h}function io(s){return he(s,vi,1).map(function(l){var h=tn(l,1);return{index:h??0,score:Ce(l,2),label:tn(l,3)!=null?ye(tn(l,3),""):void 0,displayName:tn(l,4)!=null?ye(tn(l,4),""):void 0}})}function ro(s){return{x:Ce(s,1),y:Ce(s,2),z:Ce(s,3),visibility:Z(s,4)!=null?Ce(s,4):void 0}}function so(s){return s.map(function(l){return he(eo(l),Mi,1).map(ro)})}function fs(s,l){this.i=s,this.h=l,this.m=0}function ao(s,l,h){return il(s,l),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):h?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(M){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),M(s.j)}))}function il(s,l){var h=s.h;if(s.s===void 0){var M=no(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=no(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=h.createProgram();if(h.attachShader(P,M),h.attachShader(P,w),h.linkProgram(P),!h.getProgramParameter(P,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(P));M=s.s=P,h.useProgram(M),w=h.getUniformLocation(M,"sampler0"),s.l={O:h.getAttribLocation(M,"aVertex"),N:h.getAttribLocation(M,"aTex"),xa:w},s.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.enableVertexAttribArray(s.l.O),h.vertexAttribPointer(s.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),s.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.enableVertexAttribArray(s.l.N),h.vertexAttribPointer(s.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(w,0)}M=s.l,h.useProgram(s.s),h.canvas.width=l.width,h.canvas.height=l.height,h.viewport(0,0,l.width,l.height),h.activeTexture(h.TEXTURE0),s.i.bindTexture2d(l.glName),h.enableVertexAttribArray(M.O),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.vertexAttribPointer(M.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(M.N),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.vertexAttribPointer(M.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(M.O),h.disableVertexAttribArray(M.N),h.bindBuffer(h.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function rl(s){this.h=s}var sl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function al(s,l){return l+s}function oo(s,l){window[s]=l}function ol(s){var l=document.createElement("script");return l.setAttribute("src",s),l.setAttribute("crossorigin","anonymous"),new Promise(function(h){l.addEventListener("load",function(){h()},!1),l.addEventListener("error",function(){h()},!1),document.body.appendChild(l)})}function cl(){return E(function(s){switch(s.h){case 1:return s.s=2,U(s,WebAssembly.instantiate(sl),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function hs(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||al,typeof window=="object")var l=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")l=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=l,s.options){l=c(Object.keys(s.options));for(var h=l.next();!h.done;h=l.next()){h=h.value;var M=s.options[h].default;M!==void 0&&(this.l[h]=typeof M=="function"?M():M)}}}i=hs.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function ll(s){var l,h,M,w,P,C,O,j,le,_e,We;return E(function(Ie){switch(Ie.h){case 1:return s.ga?(l=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,U(Ie,cl(),2)):Ie.return();case 2:if(h=Ie.i,typeof window=="object")return oo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),oo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=l.filter(function(Se){return Se.data!==void 0}),O=l.filter(function(Se){return Se.data===void 0}),j=Promise.all(C.map(function(Se){var Xe=Sr(s,Se.url);if(Se.path!==void 0){var it=Se.path;Xe=Xe.then(function(Et){return s.overrideFile(it,Et),Promise.resolve(Et)})}return Xe})),le=Promise.all(O.map(function(Se){return Se.simd===void 0||Se.simd&&h||!Se.simd&&!h?ol(s.locateFile(Se.url,s.ha)):Promise.resolve()})).then(function(){var Se,Xe,it;return E(function(Et){if(Et.h==1)return Se=window.createMediapipeSolutionsWasm,Xe=window.createMediapipeSolutionsPackedAssets,it=s,U(Et,Se(Xe),2);it.i=Et.i,Et.h=0})}),_e=(function(){return E(function(Se){return s.h.graph&&s.h.graph.url?Se=U(Se,Sr(s,s.h.graph.url),0):(Se.h=0,Se=void 0),Se})})(),U(Ie,Promise.all([le,j,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=l.filter(function(Se){return Se.simd===void 0||Se.simd&&h||!Se.simd&&!h}).map(function(Se){return s.locateFile(Se.url,s.ha)}),importScripts.apply(null,f(M)),w=s,U(Ie,createMediapipeSolutionsWasm(Module),6);case 6:w.i=Ie.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,P=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(P),Ie.h=4;break;case 7:if(s.m=document.createElement("canvas"),We=s.m.getContext("webgl2",{}),!We&&(We=s.m.getContext("webgl",{}),!We))return alert("Failed to create WebGL canvas context when passing video frame."),Ie.return();s.K=We,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,Ie.h=0}})}function ul(s){var l,h,M,w,P,C,O,j;return E(function(le){if(le.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return le.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){le.h=2;return}return s.fa=s.h.graph.url,U(le,Sr(s,s.h.graph.url),3)}for(le.h!=2&&(l=le.i,s.j.loadGraph(l)),h=c(Object.keys(s.D)),M=h.next();!M.done;M=h.next())w=M.value,s.j.overrideFile(w,s.D[w]);if(s.D={},s.h.listeners)for(P=c(s.h.listeners),C=P.next();!C.done;C=P.next())O=C.value,pl(s,O);j=s.l,s.l={},s.setOptions(j),le.h=0})}i.reset=function(){var s=this;return E(function(l){s.j&&(s.j.reset(),s.s={},s.v={}),l.h=0})},i.setOptions=function(s,l){var h=this;if(l=l||this.h.options){for(var M=[],w=[],P={},C=c(Object.keys(s)),O=C.next();!O.done;P={X:P.X,Y:P.Y},O=C.next())if(O=O.value,!(O in this.l&&this.l[O]===s[O])){this.l[O]=s[O];var j=l[O];j!==void 0&&(j.onChange&&(P.X=j.onChange,P.Y=s[O],M.push((function(le){return function(){var _e;return E(function(We){if(We.h==1)return U(We,le.X(le.Y),2);_e=We.i,_e===!0&&(h.u=!0),We.h=0})}})(P))),j.graphOptionXref&&(O=Object.assign({},{calculatorName:"",calculatorIndex:0},j.graphOptionXref,{valueNumber:j.type===1?s[O]:0,valueBoolean:j.type===0?s[O]:!1,valueString:j.type===2?s[O]:""}),w.push(O)))}(M.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(M))}};function fl(s){var l,h,M,w,P,C,O;return E(function(j){switch(j.h){case 1:if(!s.u)return j.return();if(!s.F){j.h=2;break}l=c(s.F),h=l.next();case 3:if(h.done){j.h=5;break}return M=h.value,U(j,M(),4);case 4:h=l.next(),j.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(w=new s.i.GraphOptionChangeRequestList,P=c(s.H),C=P.next();!C.done;C=P.next())O=C.value,w.push_back(O);s.j.changeOptions(w),w.delete(),s.H=void 0}s.u=!1,j.h=0}})}i.initialize=function(){var s=this;return E(function(l){return l.h==1?U(l,ll(s),2):l.h!=3?U(l,ul(s),3):U(l,fl(s),0)})};function Sr(s,l){var h,M;return E(function(w){return l in s.L?w.return(s.L[l]):(h=s.locateFile(l,""),M=fetch(h).then(function(P){return P.arrayBuffer()}),s.L[l]=M,w.return(M))})}i.overrideFile=function(s,l){this.j?this.j.overrideFile(s,l):this.D[s]=l},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,l){var h=this,M,w,P,C,O,j,le,_e,We;return E(function(Ie){switch(Ie.h){case 1:return h.h.inputs?(M=1e3*(l??performance.now()),U(Ie,h.I,2)):Ie.return();case 2:return U(Ie,h.initialize(),3);case 3:for(w=new h.i.PacketDataList,P=c(Object.keys(s)),C=P.next();!C.done;C=P.next())if(O=C.value,j=h.h.inputs[O]){e:{var Se=s[O];switch(j.type){case"video":var Xe=h.s[j.stream];if(Xe||(Xe=new fs(h.i,h.K),h.s[j.stream]=Xe),Xe.m===0&&(Xe.m=Xe.i.createTexture()),typeof HTMLVideoElement<"u"&&Se instanceof HTMLVideoElement)var it=Se.videoWidth,Et=Se.videoHeight;else typeof HTMLImageElement<"u"&&Se instanceof HTMLImageElement?(it=Se.naturalWidth,Et=Se.naturalHeight):(it=Se.width,Et=Se.height);Et={glName:Xe.m,width:it,height:Et},it=Xe.h,it.canvas.width=Et.width,it.canvas.height=Et.height,it.activeTexture(it.TEXTURE0),Xe.i.bindTexture2d(Xe.m),it.texImage2D(it.TEXTURE_2D,0,it.RGBA,it.RGBA,it.UNSIGNED_BYTE,Se),Xe.i.bindTexture2d(0),Xe=Et;break e;case"detections":for(Xe=h.s[j.stream],Xe||(Xe=new rl(h.i),h.s[j.stream]=Xe),Xe.data||(Xe.data=new Xe.h.DetectionListData),Xe.data.reset(Se.length),Et=0;Et<Se.length;++Et){it=Se[Et];var yt=Xe.data,zt=yt.setBoundingBox,cn=Et,Zt=it.la,ft=new Mr;if(xe(ft,1,Zt.ra),xe(ft,2,Zt.sa),xe(ft,3,Zt.height),xe(ft,4,Zt.width),xe(ft,5,Zt.rotation),b(ft,6,Zt.pa),Zt=ft.l(),zt.call(yt,cn,Zt),it.ea)for(yt=0;yt<it.ea.length;++yt){ft=it.ea[yt],zt=Xe.data,cn=zt.addNormalizedLandmark,Zt=Et,ft=Object.assign({},ft,{visibility:ft.visibility?ft.visibility:0});var Vt=new Mi;xe(Vt,1,ft.x),xe(Vt,2,ft.y),xe(Vt,3,ft.z),ft.visibility&&xe(Vt,4,ft.visibility),ft=Vt.l(),cn.call(zt,Zt,ft)}if(it.ba)for(yt=0;yt<it.ba.length;++yt)zt=Xe.data,cn=zt.addClassification,Zt=Et,ft=it.ba[yt],Vt=new vi,xe(Vt,2,ft.score),ft.index&&b(Vt,1,ft.index),ft.label&&b(Vt,3,ft.label),ft.displayName&&b(Vt,4,ft.displayName),ft=Vt.l(),cn.call(zt,Zt,ft)}Xe=Xe.data;break e;default:Xe={}}}switch(le=Xe,_e=j.stream,j.type){case"video":w.pushTexture2d(Object.assign({},le,{stream:_e,timestamp:M}));break;case"detections":We=le,We.stream=_e,We.timestamp=M,w.pushDetectionList(We);break;default:throw Error("Unknown input config type: '"+j.type+"'")}}return h.j.send(w),U(Ie,h.I,4);case 4:w.delete(),Ie.h=0}})};function hl(s,l,h){var M,w,P,C,O,j,le,_e,We,Ie,Se,Xe,it,Et;return E(function(yt){switch(yt.h){case 1:if(!h)return yt.return(l);for(M={},w=0,P=c(Object.keys(h)),C=P.next();!C.done;C=P.next())O=C.value,j=h[O],typeof j!="string"&&j.type==="texture"&&l[j.stream]!==void 0&&++w;1<w&&(s.M=!1),le=c(Object.keys(h)),C=le.next();case 2:if(C.done){yt.h=4;break}if(_e=C.value,We=h[_e],typeof We=="string")return it=M,Et=_e,U(yt,dl(s,_e,l[We]),14);if(Ie=l[We.stream],We.type==="detection_list"){if(Ie){for(var zt=Ie.getRectList(),cn=Ie.getLandmarksList(),Zt=Ie.getClassificationsList(),ft=[],Vt=0;Vt<zt.size();++Vt){var kn=nl(zt.get(Vt)),ml=Ce(kn,1),xl=Ce(kn,2),gl=Ce(kn,3),_l=Ce(kn,4),vl=Ce(kn,5,0),br=void 0;br=br===void 0?0:br,kn={la:{ra:ml,sa:xl,height:gl,width:_l,rotation:vl,pa:ye(tn(kn,6),br)},ea:he(eo(cn.get(Vt)),Mi,1).map(ro),ba:io($a(Zt.get(Vt)))},ft.push(kn)}zt=ft}else zt=[];M[_e]=zt,yt.h=7;break}if(We.type==="proto_list"){if(Ie){for(zt=Array(Ie.size()),cn=0;cn<Ie.size();cn++)zt[cn]=Ie.get(cn);Ie.delete()}else zt=[];M[_e]=zt,yt.h=7;break}if(Ie===void 0){yt.h=3;break}if(We.type==="float_list"){M[_e]=Ie,yt.h=7;break}if(We.type==="proto"){M[_e]=Ie,yt.h=7;break}if(We.type!=="texture")throw Error("Unknown output config type: '"+We.type+"'");return Se=s.v[_e],Se||(Se=new fs(s.i,s.K),s.v[_e]=Se),U(yt,ao(Se,Ie,s.M),13);case 13:Xe=yt.i,M[_e]=Xe;case 7:We.transform&&M[_e]&&(M[_e]=We.transform(M[_e])),yt.h=3;break;case 14:it[Et]=yt.i;case 3:C=le.next(),yt.h=2;break;case 4:return yt.return(M)}})}function dl(s,l,h){var M;return E(function(w){return typeof h=="number"||h instanceof Uint8Array||h instanceof s.i.Uint8BlobList?w.return(h):h instanceof s.i.Texture2dDataOut?(M=s.v[l],M||(M=new fs(s.i,s.K),s.v[l]=M),w.return(ao(M,h,s.M))):w.return(void 0)})}function pl(s,l){for(var h=l.name||"$",M=[].concat(f(l.wants)),w=new s.i.StringList,P=c(l.wants),C=P.next();!C.done;C=P.next())w.push_back(C.value);P=s.i.PacketListener.implement({onResults:function(O){for(var j={},le=0;le<l.wants.length;++le)j[M[le]]=O.get(le);var _e=s.listeners[h];_e&&(s.I=hl(s,j,l.outs).then(function(We){We=_e(We);for(var Ie=0;Ie<l.wants.length;++Ie){var Se=j[M[Ie]];typeof Se=="object"&&Se.hasOwnProperty&&Se.hasOwnProperty("delete")&&Se.delete()}We&&(s.I=We)}))}}),s.j.attachMultiListener(w,P),w.delete()}i.onResults=function(s,l){this.listeners[l||"$"]=s},Q("Solution",hs),Q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function co(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function lo(s){var l=this;s=s||{},this.h=new hs({locateFile:s.locateFile,files:function(h){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:co(h.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:so},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:so},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(h){return h.map(function(M){return io($a(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var M,w,P;return E(function(C){return C.h==1?(M=co(h),w="third_party/mediapipe/modules/hand_landmark/"+M,U(C,Sr(l.h,M),2)):(P=C.i,l.h.overrideFile(w,P),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=lo.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return E(function(l){return U(l,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var l=this;return E(function(h){return U(h,l.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},Q("Hands",lo),Q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),Q("VERSION","0.4.1675469240")}).call(Hs)),Hs}var $0=Z0(),ks={},lc;function J0(){return lc||(lc=1,(function(){function i(g){var E=0;return function(){return E<g.length?{done:!1,value:g[E++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,E,V){return g==Array.prototype||g==Object.prototype||(g[E]=V.value),g};function t(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var E=0;E<g.length;++E){var V=g[E];if(V&&V.Math==Math)return V}throw Error("Cannot find global object")}var n=t(this);function r(g,E){if(E)e:{var V=n;g=g.split(".");for(var k=0;k<g.length-1;k++){var J=g[k];if(!(J in V))break e;V=V[J]}g=g[g.length-1],k=V[g],E=E(k),E!=k&&E!=null&&e(V,g,{configurable:!0,writable:!0,value:E})}}r("Symbol",function(g){function E(Q){if(this instanceof E)throw new TypeError("Symbol is not a constructor");return new V(k+(Q||"")+"_"+J++,Q)}function V(Q,z){this.g=Q,e(this,"description",{configurable:!0,writable:!0,value:z})}if(g)return g;V.prototype.toString=function(){return this.g};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",J=0;return E}),r("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var E="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),V=0;V<E.length;V++){var k=n[E[V]];typeof k=="function"&&typeof k.prototype[g]!="function"&&e(k.prototype,g,{configurable:!0,writable:!0,value:function(){return a(i(this))}})}return g});function a(g){return g={next:g},g[Symbol.iterator]=function(){return this},g}function o(g){var E=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return E?E.call(g):{next:i(g)}}function c(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function f(g){if(g.i)throw new TypeError("Generator is already running");g.i=!0}c.prototype.l=function(g){this.o=g};function u(g,E){g.h={F:E,G:!0},g.j=g.m}c.prototype.return=function(g){this.h={return:g},this.j=this.m};function d(g){this.g=new c,this.h=g}function m(g,E){f(g.g);var V=g.g.g;return V?x(g,"return"in V?V.return:function(k){return{value:k,done:!0}},E,g.g.return):(g.g.return(E),v(g))}function x(g,E,V,k){try{var J=E.call(g.g.g,V);if(!(J instanceof Object))throw new TypeError("Iterator result "+J+" is not an object");if(!J.done)return g.g.i=!1,J;var Q=J.value}catch(z){return g.g.g=null,u(g.g,z),v(g)}return g.g.g=null,k.call(g.g,Q),v(g)}function v(g){for(;g.g.j;)try{var E=g.h(g.g);if(E)return g.g.i=!1,{value:E.value,done:!1}}catch(V){g.g.o=void 0,u(g.g,V)}if(g.g.i=!1,g.g.h){if(E=g.g.h,g.g.h=null,E.G)throw E.F;return{value:E.return,done:!0}}return{value:void 0,done:!0}}function y(g){this.next=function(E){return f(g.g),g.g.g?E=x(g,g.g.g.next,E,g.g.l):(g.g.l(E),E=v(g)),E},this.throw=function(E){return f(g.g),g.g.g?E=x(g,g.g.g.throw,E,g.g.l):(u(g.g,E),E=v(g)),E},this.return=function(E){return m(g,E)},this[Symbol.iterator]=function(){return this}}function T(g){function E(k){return g.next(k)}function V(k){return g.throw(k)}return new Promise(function(k,J){function Q(z){z.done?k(z.value):Promise.resolve(z.value).then(E,V).then(Q,J)}Q(g.next())})}r("Promise",function(g){function E(z){this.h=0,this.i=void 0,this.g=[],this.o=!1;var $=this.j();try{z($.resolve,$.reject)}catch(Y){$.reject(Y)}}function V(){this.g=null}function k(z){return z instanceof E?z:new E(function($){$(z)})}if(g)return g;V.prototype.h=function(z){if(this.g==null){this.g=[];var $=this;this.i(function(){$.l()})}this.g.push(z)};var J=n.setTimeout;V.prototype.i=function(z){J(z,0)},V.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var $=0;$<z.length;++$){var Y=z[$];z[$]=null;try{Y()}catch(se){this.j(se)}}}this.g=null},V.prototype.j=function(z){this.i(function(){throw z})},E.prototype.j=function(){function z(se){return function(fe){Y||(Y=!0,se.call($,fe))}}var $=this,Y=!1;return{resolve:z(this.A),reject:z(this.l)}},E.prototype.A=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof E)this.C(z);else{e:switch(typeof z){case"object":var $=z!=null;break e;case"function":$=!0;break e;default:$=!1}$?this.v(z):this.m(z)}},E.prototype.v=function(z){var $=void 0;try{$=z.then}catch(Y){this.l(Y);return}typeof $=="function"?this.D($,z):this.m(z)},E.prototype.l=function(z){this.u(2,z)},E.prototype.m=function(z){this.u(1,z)},E.prototype.u=function(z,$){if(this.h!=0)throw Error("Cannot settle("+z+", "+$+"): Promise already settled in state"+this.h);this.h=z,this.i=$,this.h===2&&this.B(),this.H()},E.prototype.B=function(){var z=this;J(function(){if(z.I()){var $=n.console;typeof $<"u"&&$.error(z.i)}},1)},E.prototype.I=function(){if(this.o)return!1;var z=n.CustomEvent,$=n.Event,Y=n.dispatchEvent;return typeof Y>"u"?!0:(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof $=="function"?z=new $("unhandledrejection",{cancelable:!0}):(z=n.document.createEvent("CustomEvent"),z.initCustomEvent("unhandledrejection",!1,!0,z)),z.promise=this,z.reason=this.i,Y(z))},E.prototype.H=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)Q.h(this.g[z]);this.g=null}};var Q=new V;return E.prototype.C=function(z){var $=this.j();z.s($.resolve,$.reject)},E.prototype.D=function(z,$){var Y=this.j();try{z.call($,Y.resolve,Y.reject)}catch(se){Y.reject(se)}},E.prototype.then=function(z,$){function Y(Ye,Je){return typeof Ye=="function"?function(ot){try{se(Ye(ot))}catch(ct){fe(ct)}}:Je}var se,fe,De=new E(function(Ye,Je){se=Ye,fe=Je});return this.s(Y(z,se),Y($,fe)),De},E.prototype.catch=function(z){return this.then(void 0,z)},E.prototype.s=function(z,$){function Y(){switch(se.h){case 1:z(se.i);break;case 2:$(se.i);break;default:throw Error("Unexpected state: "+se.h)}}var se=this;this.g==null?Q.h(Y):this.g.push(Y),this.o=!0},E.resolve=k,E.reject=function(z){return new E(function($,Y){Y(z)})},E.race=function(z){return new E(function($,Y){for(var se=o(z),fe=se.next();!fe.done;fe=se.next())k(fe.value).s($,Y)})},E.all=function(z){var $=o(z),Y=$.next();return Y.done?k([]):new E(function(se,fe){function De(ot){return function(ct){Ye[ot]=ct,Je--,Je==0&&se(Ye)}}var Ye=[],Je=0;do Ye.push(void 0),Je++,k(Y.value).s(De(Ye.length-1),fe),Y=$.next();while(!Y.done)})},E});var _=typeof Object.assign=="function"?Object.assign:function(g,E){for(var V=1;V<arguments.length;V++){var k=arguments[V];if(k)for(var J in k)Object.prototype.hasOwnProperty.call(k,J)&&(g[J]=k[J])}return g};r("Object.assign",function(g){return g||_});var p=this||self,I={facingMode:"user",width:640,height:480};function D(g,E){this.video=g,this.i=0,this.h=Object.assign(Object.assign({},I),E)}D.prototype.stop=function(){var g=this,E,V,k,J;return T(new y(new d(function(Q){if(g.g){for(E=g.g.getTracks(),V=o(E),k=V.next();!k.done;k=V.next())J=k.value,J.stop();g.g=void 0}Q.j=0})))},D.prototype.start=function(){var g=this,E;return T(new y(new d(function(V){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),E=g.h,V.return(navigator.mediaDevices.getUserMedia({video:{facingMode:E.facingMode,width:E.width,height:E.height}}).then(function(k){G(g,k)}).catch(function(k){var J="Failed to acquire camera feed: "+k;throw console.error(J),alert(J),k}))})))};function U(g){window.requestAnimationFrame(function(){L(g)})}function G(g,E){g.g=E,g.video.srcObject=E,g.video.onloadedmetadata=function(){g.video.play(),U(g)}}function L(g){var E=null;g.video.paused||g.video.currentTime===g.i||(g.i=g.video.currentTime,E=g.h.onFrame()),E?E.then(function(){U(g)}):U(g)}var B=["Camera"],q=p;B[0]in q||typeof q.execScript>"u"||q.execScript("var "+B[0]);for(var A;B.length&&(A=B.shift());)B.length||D===void 0?q[A]&&q[A]!==Object.prototype[A]?q=q[A]:q=q[A]={}:q[A]=D}).call(ks)),ks}var Q0=J0();class em{constructor(e,t){this.videoElement=e,this.onResultsCallback=t,this.hands=new $0.Hands({locateFile:n=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${n}`}),this.hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.hands.onResults(this.onResults.bind(this)),this.camera=new Q0.Camera(this.videoElement,{onFrame:async()=>{await this.hands.send({image:this.videoElement})},width:640,height:480})}start(){this.camera.start()}onResults(e){let t={expansion:1,tension:0,rotation:0,handsDetected:0};if(e.multiHandLandmarks&&e.multiHandLandmarks.length>0){t.handsDetected=e.multiHandLandmarks.length;const n=e.multiHandLandmarks[0],r=n[0],a=[4,8,12,16,20];let o=0;a.forEach(_=>{const p=n[_].x-r.x,I=n[_].y-r.y;o+=Math.sqrt(p*p+I*I)}),o/=5;const c=.15,u=Math.max(0,Math.min(1,(o-c)/(.4-c)));t.expansion=.2+u*1.8;const d=n[4],m=n[8];Math.sqrt(Math.pow(d.x-m.x,2)+Math.pow(d.y-m.y,2))<.05&&(t.expansion=.1);const v=n[9],y=v.x-r.x,T=v.y-r.y;t.rotation=-Math.atan2(y,T)+Math.PI,t.tension=1-u}this.onResultsCallback(t)}}class tm{constructor(e){this.particleSystem=e,this.createUI()}createUI(){const e=document.createElement("div");e.className="ui-container";const t=["Sphere","Heart","Flower","Saturn","Buddha","Fireworks"],n=document.createElement("div");n.className="panel",n.innerHTML="<h3>Templates</h3>",t.forEach(o=>{const c=document.createElement("button");c.textContent=o,c.onclick=()=>this.particleSystem.setShape(o.toLowerCase()),n.appendChild(c)});const r=document.createElement("div");r.className="panel",r.innerHTML="<h3>Color</h3>";const a=document.createElement("input");a.type="color",a.value="#00ffff",a.oninput=o=>this.particleSystem.setColor(o.target.value),r.appendChild(a),e.appendChild(n),e.appendChild(r),document.body.appendChild(e)}}const nm=document.querySelector("#app"),im=document.querySelector("#input-video"),Gc=new j0(nm),Hc=new K0(Gc.scene);new tm(Hc);const rm=new em(im,i=>{Hc.update(.016,i)});rm.start();function kc(){requestAnimationFrame(kc),Gc.render()}kc();
