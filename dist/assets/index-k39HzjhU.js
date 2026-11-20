(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ho="181",ki={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fu=0,yl=1,pu=2,qc=1,mu=2,An=3,xn=0,Ct=1,Vt=2,pn=0,Wi=1,Un=2,El=3,Tl=4,xu=5,ai=100,gu=101,_u=102,vu=103,Mu=104,Su=200,bu=201,yu=202,Eu=203,ka=204,Wa=205,Tu=206,Au=207,wu=208,Ru=209,Cu=210,Pu=211,Du=212,Lu=213,Uu=214,Xa=0,Ya=1,qa=2,Yi=3,ja=4,Za=5,Ka=6,$a=7,jc=0,Iu=1,Nu=2,kn=0,Zc=1,Kc=2,$c=3,ko=4,Jc=5,Qc=6,eh=7,th=300,qi=301,ji=302,Ja=303,Qa=304,Vr=306,eo=1e3,Rn=1001,to=1002,Zt=1003,Fu=1004,ks=1005,en=1006,ea=1007,li=1008,gn=1009,nh=1010,ih=1011,ws=1012,Wo=1013,ui=1014,dn=1015,mn=1016,Xo=1017,Yo=1018,Rs=1020,sh=35902,rh=35899,ah=1021,oh=1022,on=1023,Cs=1026,Ps=1027,qo=1028,jo=1029,Zo=1030,Ko=1031,$o=1033,br=33776,yr=33777,Er=33778,Tr=33779,no=35840,io=35841,so=35842,ro=35843,ao=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,xo=37814,go=37815,_o=37816,vo=37817,Mo=37818,So=37819,bo=37820,yo=37821,Eo=36492,To=36494,Ao=36495,wo=36283,Ro=36284,Co=36285,Po=36286,Ou=3200,Bu=3201,lh=0,zu=1,Vn="",Rt="srgb",Zi="srgb-linear",Pr="linear",tt="srgb",bi=7680,Al=519,Vu=512,Gu=513,Hu=514,ch=515,ku=516,Wu=517,Xu=518,Yu=519,Do=35044,Gr=35048,wl="300 es",fn=2e3,Dr=2001;function hh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qu(){const i=Lr("canvas");return i.style.display="block",i}const Rl={};function Ur(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ne(...i){const e="THREE."+i.shift();console.warn(e,...i)}function pt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ds(...i){const e=i.join(" ");e in Rl||(Rl[e]=!0,Ne(...i))}function ju(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Ts=Math.PI/180,Ls=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Jo(i,e){return(i%e+e)%e}function Zu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ku(i,e,t){return i!==e?(t-i)/(e-i):0}function As(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,n){return As(i,e,1-Math.exp(-t*n))}function Ju(i,e=1){return e-Math.abs(Jo(i,e*2)-e)}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function td(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nd(i,e){return i+Math.random()*(e-i)}function id(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(Cl=i);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(i){return i*Ts}function ad(i){return i*Ls}function od(i){return(i&i-1)===0&&i!==0}function ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gt={DEG2RAD:Ts,RAD2DEG:Ls,generateUUID:Cn,clamp:We,euclideanModulo:Jo,mapLinear:Zu,inverseLerp:Ku,lerp:As,damp:$u,pingpong:Ju,smoothstep:Qu,smootherstep:ed,randInt:td,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:ad,isPowerOfTwo:od,ceilPowerOfTwo:ld,floorPowerOfTwo:cd,setQuaternionFromProperEuler:hd,normalize:nt,denormalize:an};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let x=l*f+c*m+h*g+d*_;x<0&&(f=-f,m=-m,g=-g,_=-_,x=-x);let u=1-o;if(x<.9995){const y=Math.acos(x),E=Math.sin(y);u=Math.sin(u*y)/E,o=Math.sin(o*y)/E,l=l*u+f*o,c=c*u+m*o,h=h*u+g*o,d=d*u+_*o}else{l=l*u+f*o,c=c*u+m*o,h=h*u+g*o,d=d*u+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-o*m,e[t+2]=c*g+h*m+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new w,Pl=new di;class Be{constructor(e,t,n,s,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],x=s[3],u=s[6],y=s[1],E=s[4],T=s[7],R=s[2],A=s[5],C=s[8];return r[0]=a*_+o*y+l*R,r[3]=a*x+o*E+l*A,r[6]=a*u+o*T+l*C,r[1]=c*_+h*y+d*R,r[4]=c*x+h*E+d*A,r[7]=c*u+h*T+d*C,r[2]=f*_+m*y+g*R,r[5]=f*x+m*E+g*A,r[8]=f*u+m*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Be,Dl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Dl,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Dl,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const je=ud();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class dd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Lr("canvas")),yi.width=e.width,yi.height=e.height;const s=yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0;class Qo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ia(s[a].image)):r.push(ia(s[a]))}else r=ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let pd=0;const sa=new w;class Ut extends xi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Rn,s=Rn,r=en,a=li,o=on,l=gn,c=Ut.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Cn(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=th;Ut.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],x=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(m+1)/2,R=(u+1)/2,A=(h+f)/4,C=(d+_)/4,N=(g+x)/4;return E>T&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=C/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=N/r),this.set(n,s,r,t),this}let y=Math.sqrt((x-g)*(x-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Xs.subVectors(this.max,rs),Ei.subVectors(e.a,rs),Ti.subVectors(e.b,rs),Ai.subVectors(e.c,rs),In.subVectors(Ti,Ei),Nn.subVectors(Ai,Ti),Qn.subVectors(Ei,Ai);let t=[0,-In.z,In.y,0,-Nn.z,Nn.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Nn.z,0,-Nn.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Nn.y,Nn.x,0,-Qn.y,Qn.x,0];return!ra(t,Ei,Ti,Ai,Xs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,Ei,Ti,Ai,Xs))?!1:(Ys.crossVectors(In,Nn),t=[Ys.x,Ys.y,Ys.z],ra(t,Ei,Ti,Ai,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new w,new w,new w,new w,new w,new w,new w,new w],tn=new w,Ws=new gi,Ei=new w,Ti=new w,Ai=new w,In=new w,Nn=new w,Qn=new w,rs=new w,Xs=new w,Ys=new w,ei=new w;function ra(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const gd=new gi,as=new w,aa=new w;class _i{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(aa)),this.expandByPoint(as.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new w,oa=new w,qs=new w,Fn=new w,la=new w,js=new w,ca=new w;class Bs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=Fn.dot(this.direction),l=-Fn.dot(qs),c=Fn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(qs,f),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){la.subVectors(t,e),js.subVectors(n,e),ca.crossVectors(la,js);let a=this.direction.dot(ca),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);const l=o*this.direction.dot(js.crossVectors(Fn,js));if(l<0)return null;const c=o*this.direction.dot(la.cross(Fn));if(c<0||l+c>a)return null;const h=-o*Fn.dot(ca);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,h,d,f,m,g,_,x){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,m,g,_,x)}set(e,t,n,s,r,a,o,l,c,h,d,f,m,g,_,x){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/wi.setFromMatrixColumn(e,0).length(),r=1/wi.setFromMatrixColumn(e,1).length(),a=1/wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_d,e,vd)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),On.crossVectors(n,Xt),On.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),On.crossVectors(n,Xt)),On.normalize(),Zs.crossVectors(Xt,On),s[0]=On.x,s[4]=Zs.x,s[8]=Xt.x,s[1]=On.y,s[5]=Zs.y,s[9]=Xt.y,s[2]=On.z,s[6]=Zs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],x=n[10],u=n[14],y=n[3],E=n[7],T=n[11],R=n[15],A=s[0],C=s[4],N=s[8],b=s[12],v=s[1],L=s[5],B=s[9],H=s[13],Y=s[2],q=s[6],Z=s[10],ee=s[14],X=s[3],se=s[7],ae=s[11],ye=s[15];return r[0]=a*A+o*v+l*Y+c*X,r[4]=a*C+o*L+l*q+c*se,r[8]=a*N+o*B+l*Z+c*ae,r[12]=a*b+o*H+l*ee+c*ye,r[1]=h*A+d*v+f*Y+m*X,r[5]=h*C+d*L+f*q+m*se,r[9]=h*N+d*B+f*Z+m*ae,r[13]=h*b+d*H+f*ee+m*ye,r[2]=g*A+_*v+x*Y+u*X,r[6]=g*C+_*L+x*q+u*se,r[10]=g*N+_*B+x*Z+u*ae,r[14]=g*b+_*H+x*ee+u*ye,r[3]=y*A+E*v+T*Y+R*X,r[7]=y*C+E*L+T*q+R*se,r[11]=y*N+E*B+T*Z+R*ae,r[15]=y*b+E*H+T*ee+R*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],x=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+x*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],x=e[14],u=e[15],y=d*x*c-_*f*c+_*l*m-o*x*m-d*l*u+o*f*u,E=g*f*c-h*x*c-g*l*m+a*x*m+h*l*u-a*f*u,T=h*_*c-g*d*c+g*o*m-a*_*m-h*o*u+a*d*u,R=g*d*l-h*_*l-g*o*f+a*_*f+h*o*x-a*d*x,A=t*y+n*E+s*T+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=y*C,e[1]=(_*f*r-d*x*r-_*s*m+n*x*m+d*s*u-n*f*u)*C,e[2]=(o*x*r-_*l*r+_*s*c-n*x*c-o*s*u+n*l*u)*C,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*C,e[4]=E*C,e[5]=(h*x*r-g*f*r+g*s*m-t*x*m-h*s*u+t*f*u)*C,e[6]=(g*l*r-a*x*r-g*s*c+t*x*c+a*s*u-t*l*u)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*m+t*l*m)*C,e[8]=T*C,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*C,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*u+t*o*u)*C,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*m-t*o*m)*C,e[12]=R*C,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*x+t*d*x)*C,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*x-t*o*x)*C,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,_=a*h,x=a*d,u=o*d,y=l*c,E=l*h,T=l*d,R=n.x,A=n.y,C=n.z;return s[0]=(1-(_+u))*R,s[1]=(m+T)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(f+u))*A,s[6]=(x+y)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(x-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,h=1/a,d=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===fn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===fn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const wi=new w,nn=new st,_d=new w(0,0,0),vd=new w(1,1,1),On=new w,Zs=new w,Xt=new w,Ul=new st,Il=new di;class _n{constructor(e=0,t=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const Nl=new w,Ri=new di,bn=new st,Ks=new w,os=new w,Sd=new w,bd=new di,Fl=new w(1,0,0),Ol=new w(0,1,0),Bl=new w(0,0,1),zl={type:"added"},yd={type:"removed"},Ci={type:"childadded",child:null},ha={type:"childremoved",child:null};class bt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new w,t=new _n,n=new di,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(os,Ks,this.up):bn.lookAt(Ks,os,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new w(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new w,yn=new w,ua=new w,En=new w,Pi=new w,Di=new w,Vl=new w,da=new w,fa=new w,pa=new w,ma=new lt,xa=new lt,ga=new lt;class Qt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){sn.subVectors(s,t),yn.subVectors(n,t),ua.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(yn),l=sn.dot(ua),c=yn.dot(yn),h=yn.dot(ua),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ma.setScalar(0),xa.setScalar(0),ga.setScalar(0),ma.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(xa,r.y),a.addScaledVector(ga,r.z),a}static isFrontFacing(e,t,n,s){return sn.subVectors(n,t),yn.subVectors(e,t),sn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Di.subVectors(r,n),da.subVectors(e,n);const l=Pi.dot(da),c=Di.dot(da);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,s);const h=Pi.dot(fa),d=Di.dot(fa);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Pi,a);pa.subVectors(e,r);const m=Pi.dot(pa),g=Di.dot(pa);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Di,o);const x=h*g-m*d;if(x<=0&&d-h>=0&&m-g>=0)return Vl.subVectors(r,s),o=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Vl,o);const u=1/(x+_+f);return a=_*u,o=f*u,t.copy(n).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Jo(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_a(a,r,e+1/3),this.g=_a(a,r,e),this.b=_a(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.workingToColorSpace(Lt.copy(this),e),Math.round(We(Lt.r*255,0,255))*65536+Math.round(We(Lt.g*255,0,255))*256+Math.round(We(Lt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Rt){je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL($s);const n=As(Bn.h,$s.h,t),s=As(Bn.s,$s.s,t),r=As(Bn.l,$s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Re;Re.NAMES=dh;let Ed=0;class Zn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Wi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Wa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hr extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new w,Js=new me;let Td=0;class ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}}class fh extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ad=0;const Jt=new st,va=new bt,Li=new w,Yt=new gi,ls=new gi,wt=new w;class rt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?ph:fh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,ls.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,ls.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(ls.min),Yt.expandByPoint(ls.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),wt.add(Li)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new w,l[N]=new w;const c=new w,h=new w,d=new w,f=new me,m=new me,g=new me,_=new w,x=new w;function u(N,b,v){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),x.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(_),o[b].add(_),o[v].add(_),l[N].add(x),l[b].add(x),l[v].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,b=y.length;N<b;++N){const v=y[N],L=v.start,B=v.count;for(let H=L,Y=L+B;H<Y;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new w,T=new w,R=new w,A=new w;function C(N){R.fromBufferAttribute(s,N),A.copy(R);const b=o[N];E.copy(b),E.sub(R.multiplyScalar(R.dot(b))).normalize(),T.crossVectors(A,b);const L=T.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,L)}for(let N=0,b=y.length;N<b;++N){const v=y[N],L=v.start,B=v.count;for(let H=L,Y=L+B;H<Y;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,d=new w;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,x=l.length;_<x;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new ct(f,h,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new st,ti=new Bs,Qs=new _i,Hl=new w,er=new w,tr=new w,nr=new w,Ma=new w,ir=new w,kl=new w,sr=new w;class it extends bt{constructor(e=new rt,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ma.fromBufferAttribute(d,e),a?ir.addScaledVector(Ma,h):ir.addScaledVector(Ma.sub(t),h))}t.add(ir)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Qs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Qs,Hl)===null||ti.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Gl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const x=f[g],u=a[x.materialIndex],y=Math.max(x.start,m.start),E=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let T=y,R=E;T<R;T+=3){const A=o.getX(T),C=o.getX(T+1),N=o.getX(T+2);s=rr(this,u,e,n,c,h,d,A,C,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let x=g,u=_;x<u;x+=3){const y=o.getX(x),E=o.getX(x+1),T=o.getX(x+2);s=rr(this,a,e,n,c,h,d,y,E,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const x=f[g],u=a[x.materialIndex],y=Math.max(x.start,m.start),E=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let T=y,R=E;T<R;T+=3){const A=T,C=T+1,N=T+2;s=rr(this,u,e,n,c,h,d,A,C,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let x=g,u=_;x<u;x+=3){const y=x,E=x+1,T=x+2;s=rr(this,a,e,n,c,h,d,y,E,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function wd(i,e,t,n,s,r,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===xn,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(c,nr);const h=wd(i,e,t,n,er,tr,nr,kl);if(h){const d=new w;Qt.getBarycoord(kl,er,tr,nr,d),s&&(h.uv=Qt.getInterpolatedAttribute(s,o,l,c,d,new me)),r&&(h.uv1=Qt.getInterpolatedAttribute(r,o,l,c,d,new me)),a&&(h.normal=Qt.getInterpolatedAttribute(a,o,l,c,d,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new w,materialIndex:0};Qt.getNormal(er,tr,nr,f.normal),h.face=f,h.barycoord=d}return h}class Dn extends rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function g(_,x,u,y,E,T,R,A,C,N,b){const v=T/C,L=R/N,B=T/2,H=R/2,Y=A/2,q=C+1,Z=N+1;let ee=0,X=0;const se=new w;for(let ae=0;ae<Z;ae++){const ye=ae*L-H;for(let Xe=0;Xe<q;Xe++){const $e=Xe*v-B;se[_]=$e*y,se[x]=ye*E,se[u]=Y,c.push(se.x,se.y,se.z),se[_]=0,se[x]=0,se[u]=A>0?1:-1,h.push(se.x,se.y,se.z),d.push(Xe/C),d.push(1-ae/N),ee+=1}}for(let ae=0;ae<N;ae++)for(let ye=0;ye<C;ye++){const Xe=f+ye+q*ae,$e=f+ye+q*(ae+1),Qe=f+(ye+1)+q*(ae+1),et=f+(ye+1)+q*ae;l.push(Xe,$e,et),l.push($e,Qe,et),X+=6}o.addGroup(m,X,b),m+=X,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Ki(i[t]);for(const s in n)e[s]=n[s]}return e}function Rd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Us={clone:Ki,merge:Ft};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new w,Wl=new me,Xl=new me;class qt extends xh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Wl,Xl),t.subVectors(Xl,Wl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ii=1;class Dd extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(Ui,Ii,e,t);s.layers=this.layers,this.add(s);const r=new qt(Ui,Ii,e,t);r.layers=this.layers,this.add(r);const a=new qt(Ui,Ii,e,t);a.layers=this.layers,this.add(a);const o=new qt(Ui,Ii,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ui,Ii,e,t);l.layers=this.layers,this.add(l);const c=new qt(Ui,Ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Ut{constructor(e=[],t=qi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dn(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:pn});r.uniforms.tEquirect.value=t;const a=new it(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=en),new Dd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ke extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const x=t.getJointPose(_,n),u=this._getHandJoint(c,_);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Id extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new w;class Ir{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zs extends Zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ni;const cs=new w,Fi=new w,Oi=new w,Bi=new me,hs=new me,_h=new st,ar=new w,us=new w,or=new w,Yl=new me,ba=new me,ql=new me;class kr extends bt{constructor(e=new zs){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new rt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nd(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Ir(n,3,0,!1)),Ni.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Ni,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),_h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;lr(ar.set(-.5,-.5,0),Oi,a,Fi,s,r),lr(us.set(.5,-.5,0),Oi,a,Fi,s,r),lr(or.set(.5,.5,0),Oi,a,Fi,s,r),Yl.set(0,0),ba.set(1,0),ql.set(1,1);let o=e.ray.intersectTriangle(ar,us,or,!1,cs);if(o===null&&(lr(us.set(-.5,.5,0),Oi,a,Fi,s,r),ba.set(0,1),o=e.ray.intersectTriangle(ar,or,us,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:Qt.getInterpolation(cs,ar,us,or,Yl,ba,ql,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lr(i,e,t,n,s,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(hs.x=r*Bi.x-s*Bi.y,hs.y=s*Bi.x+r*Bi.y):hs.copy(Bi),i.copy(e),i.x+=hs.x,i.y+=hs.y,i.applyMatrix4(_h)}class vh extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Zt,h=Zt,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zi=new st,Zl=new st,cr=[],Kl=new gi,Fd=new st,ds=new it,fs=new _i;class Od extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),Kl.copy(e.boundingBox).applyMatrix4(zi),this.boundingBox.union(Kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),fs.copy(e.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),Zl.multiplyMatrices(n,zi),ds.matrixWorld=Zl,ds.raycast(e,cr);for(let a=0,o=cr.length;a<o;a++){const l=cr[a];l.instanceId=r,l.object=this,t.push(l)}cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vh(new Float32Array(s*this.count),s,this.count,qo,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ya=new w,Bd=new w,zd=new Be;class rn{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ya.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),s=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new _i,Vd=new me(.5,.5),hr=new w;class tl{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],m=r[7],g=r[8],_=r[9],x=r[10],u=r[11],y=r[12],E=r[13],T=r[14],R=r[15];if(s[0].setComponents(c-a,m-h,u-g,R-y).normalize(),s[1].setComponents(c+a,m+h,u+g,R+y).normalize(),s[2].setComponents(c+o,m+d,u+_,R+E).normalize(),s[3].setComponents(c-o,m-d,u-_,R-E).normalize(),n)s[4].setComponents(l,f,x,T).normalize(),s[5].setComponents(c-l,m-f,u-x,R-T).normalize();else if(s[4].setComponents(c-l,m-f,u-x,R-T).normalize(),t===fn)s[5].setComponents(c+l,m+f,u+x,R+T).normalize();else if(t===Dr)s[5].setComponents(l,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Vd.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(hr.x=s.normal.x>0?e.max.x:e.min.x,hr.y=s.normal.y>0?e.max.y:e.min.y,hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $i extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new w,Fr=new w,$l=new st,ps=new Bs,ur=new _i,Ea=new w,Jl=new w;class Mh extends bt{constructor(e=new rt,t=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nr.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nr.distanceTo(Fr);e.setAttribute("lineDistance",new vt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;$l.copy(s).invert(),ps.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,x=g-1;_<x;_+=c){const u=h.getX(_),y=h.getX(_+1),E=dr(this,e,ps,l,u,y,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),x=h.getX(m),u=dr(this,e,ps,l,_,x,g-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=m,x=g-1;_<x;_+=c){const u=dr(this,e,ps,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){const _=dr(this,e,ps,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Nr.fromBufferAttribute(o,s),Fr.fromBufferAttribute(o,r),t.distanceSqToSegment(Nr,Fr,Ea,Jl)>n)return;Ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ea);if(!(c<e.near||c>e.far))return{distance:c,point:Jl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Or extends Mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fi extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ql=new st,Lo=new Bs,fr=new _i,pr=new w;class Ji extends bt{constructor(e=new rt,t=new fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),fr.radius+=r,e.ray.intersectsSphere(fr)===!1)return;Ql.copy(s).invert(),Lo.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,_=m;g<_;g++){const x=c.getX(g);pr.fromBufferAttribute(d,x),ec(pr,x,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,_=m;g<_;g++)pr.fromBufferAttribute(d,g),ec(pr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ec(i,e,t,n,s,r,a){const o=Lo.distanceSqToPoint(i);if(o<t){const l=new w;Lo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wr extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sh extends Ut{constructor(e,t,n=ui,s,r,a,o=Zt,l=Zt,c,h=Cs,d=1){if(h!==Cs&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bh extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xr extends rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],x=n/2;let u=0;y(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(m,2));function y(){const T=new w,R=new w;let A=0;const C=(t-e)/n;for(let N=0;N<=r;N++){const b=[],v=N/r,L=v*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,Y=H*l+o,q=Math.sin(Y),Z=Math.cos(Y);R.x=L*q,R.y=-v*n+x,R.z=L*Z,d.push(R.x,R.y,R.z),T.set(q,C,Z).normalize(),f.push(T.x,T.y,T.z),m.push(H,1-v),b.push(g++)}_.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){const v=_[b][N],L=_[b+1][N],B=_[b+1][N+1],H=_[b][N+1];(e>0||b!==0)&&(h.push(v,L,H),A+=3),(t>0||b!==r-1)&&(h.push(L,B,H),A+=3)}c.addGroup(u,A,0),u+=A}function E(T){const R=g,A=new me,C=new w;let N=0;const b=T===!0?e:t,v=T===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,x*v,0),f.push(0,v,0),m.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const Y=B/s*l+o,q=Math.cos(Y),Z=Math.sin(Y);C.x=b*Z,C.y=x*v,C.z=b*q,d.push(C.x,C.y,C.z),f.push(0,v,0),A.x=q*.5+.5,A.y=Z*.5*v+.5,m.push(A.x,A.y),g++}for(let B=0;B<s;B++){const H=R+B,Y=L+B;T===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),N+=3}c.addGroup(u,N,T===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nl extends Xr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new nl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class il extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new w,T=new w,R=new w;for(let A=0;A<t.length;A+=3)m(t[A+0],E),m(t[A+1],T),m(t[A+2],R),l(E,T,R,y)}function l(y,E,T,R){const A=R+1,C=[];for(let N=0;N<=A;N++){C[N]=[];const b=y.clone().lerp(T,N/A),v=E.clone().lerp(T,N/A),L=A-N;for(let B=0;B<=L;B++)B===0&&N===A?C[N][B]=b:C[N][B]=b.clone().lerp(v,B/L)}for(let N=0;N<A;N++)for(let b=0;b<2*(A-N)-1;b++){const v=Math.floor(b/2);b%2===0?(f(C[N][v+1]),f(C[N+1][v]),f(C[N][v])):(f(C[N][v+1]),f(C[N+1][v+1]),f(C[N+1][v]))}}function c(y){const E=new w;for(let T=0;T<r.length;T+=3)E.x=r[T+0],E.y=r[T+1],E.z=r[T+2],E.normalize().multiplyScalar(y),r[T+0]=E.x,r[T+1]=E.y,r[T+2]=E.z}function h(){const y=new w;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const T=x(y)/2/Math.PI+.5,R=u(y)/Math.PI+.5;a.push(T,1-R)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const E=a[y+0],T=a[y+2],R=a[y+4],A=Math.max(E,T,R),C=Math.min(E,T,R);A>.9&&C<.1&&(E<.2&&(a[y+0]+=1),T<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,E){const T=y*3;E.x=e[T+0],E.y=e[T+1],E.z=e[T+2]}function g(){const y=new w,E=new w,T=new w,R=new w,A=new me,C=new me,N=new me;for(let b=0,v=0;b<r.length;b+=9,v+=6){y.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),A.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),N.set(a[v+4],a[v+5]),R.copy(y).add(E).add(T).divideScalar(3);const L=x(R);_(A,v+0,y,L),_(C,v+2,E,L),_(N,v+4,T,L)}}function _(y,E,T,R){R<0&&y.x===1&&(a[E]=y.x-1),T.x===0&&T.z===0&&(a[E]=R/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.vertices,e.indices,e.radius,e.details)}}class Yr extends il{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yr(e.radius,e.detail)}}class qr extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,m=[],g=[],_=[],x=[];for(let u=0;u<h;u++){const y=u*f-a;for(let E=0;E<c;E++){const T=E*d-r;g.push(T,-y,0),_.push(0,0,1),x.push(E/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const E=y+c*u,T=y+c*(u+1),R=y+1+c*(u+1),A=y+1+c*u;m.push(E,T,A),m.push(T,R,A)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Is extends rt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/s,m=new w,g=new me;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){const u=r+x/n*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const x=_*(n+1);for(let u=0;u<n;u++){const y=u+x,E=y,T=y+n+1,R=y+n+2,A=y+1;o.push(E,T,A),o.push(T,R,A)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xn extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new w,f=new w,m=[],g=[],_=[],x=[];for(let u=0;u<=n;u++){const y=[],E=u/n;let T=0;u===0&&a===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),x.push(A+T,1-E),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const E=h[u][y+1],T=h[u][y],R=h[u+1][y],A=h[u+1][y+1];(u!==0||a>0)&&m.push(E,T,A),(u!==n-1||l<Math.PI)&&m.push(T,R,A)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gd extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ln extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hd extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kd extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ta=new st,tc=new w,nc=new w;class yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ic=new st,ms=new w,Aa=new w;class Wd extends yh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Aa.copy(n.position),Aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Aa),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic,n.coordinateSystem,n.reversedDepth)}}class Xd extends sl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends xh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yd extends yh{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jd extends sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zd extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Eh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sc=new st;class Kd{constructor(e,t,n=0,s=1/0){this.ray=new Bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(e,t=!0,n=[]){return Uo(e,this,n,t),n.sort(rc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Uo(e[s],this,n,t);return n.sort(rc),n}}function rc(i,e){return i.distance-e.distance}function Uo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Uo(r[a],e,t,!0)}}class ac{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $d extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function oc(i,e,t,n){const s=Jd(n);switch(t){case ah:return i*e;case qo:return i*e/s.components*s.byteLength;case jo:return i*e/s.components*s.byteLength;case Zo:return i*e*2/s.components*s.byteLength;case Ko:return i*e*2/s.components*s.byteLength;case oh:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case br:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case ro:return Math.max(i,16)*Math.max(e,8)/4;case no:case so:return Math.max(i,8)*Math.max(e,8)/2;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wo:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jd(i){switch(i){case gn:case nh:return{byteLength:1,components:1};case ws:case ih:case mn:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case ui:case Wo:case dn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);function Th(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,Qf=`uniform sampler2D dfgLUT;
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
}`,ep=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,x0=`#define LAMBERT
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,S0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,w0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:xf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:yf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:wf,displacementmap_vertex:Rf,emissivemap_fragment:Cf,emissivemap_pars_fragment:Pf,colorspace_fragment:Df,colorspace_pars_fragment:Lf,envmap_fragment:Uf,envmap_common_pars_fragment:If,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:qf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:jf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Kf,lights_phong_pars_fragment:$f,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:xp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:wp,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Dp,dithering_fragment:Lp,dithering_pars_fragment:Up,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Hp,skinnormal_vertex:kp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:qp,transmission_fragment:jp,transmission_pars_fragment:Zp,uv_pars_fragment:Kp,uv_pars_vertex:$p,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:e0,background_frag:t0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:x0,meshlambert_frag:g0,meshmatcap_vert:_0,meshmatcap_frag:v0,meshnormal_vert:M0,meshnormal_frag:S0,meshphong_vert:b0,meshphong_frag:y0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:w0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:D0,sprite_vert:L0,sprite_frag:U0},he={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},un={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};un.physical={uniforms:Ft([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const mr={r:0,b:0,g:0},ii=new _n,I0=new st;function N0(i,e,t,n,s,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function _(E){let T=!1;const R=g(E);R===null?u(o,l):R&&R.isColor&&(u(R,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,T){const R=g(T);R&&(R.isCubeTexture||R.mapping===Vr)?(h===void 0&&(h=new it(new Dn(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Ki(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(T.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(ii)),h.material.toneMapped=je.getTransfer(R.colorSpace)!==tt,(d!==R||f!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new it(new qr(2,2),new gt({name:"BackgroundMaterial",uniforms:Ki(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=je.getTransfer(R.colorSpace)!==tt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,T){E.getRGB(mr,mh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,T,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,T=1){o.set(E),l=T,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:_,addToRenderList:x,dispose:y}}function F0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,L,B,H,Y){let q=!1;const Z=d(H,B,L);r!==Z&&(r=Z,c(r.object)),q=m(v,H,B,Y),q&&g(v,H,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,T(v,L,B,H),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,L,B){const H=B.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let q=Y[L.id];q===void 0&&(q={},Y[L.id]=q);let Z=q[H];return Z===void 0&&(Z=f(l()),q[H]=Z),Z}function f(v){const L=[],B=[],H=[];for(let Y=0;Y<t;Y++)L[Y]=0,B[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:H,object:v,attributes:{},index:null}}function m(v,L,B,H){const Y=r.attributes,q=L.attributes;let Z=0;const ee=B.getAttributes();for(const X in ee)if(ee[X].location>=0){const ae=Y[X];let ye=q[X];if(ye===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor)),ae===void 0||ae.attribute!==ye||ye&&ae.data!==ye.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function g(v,L,B,H){const Y={},q=L.attributes;let Z=0;const ee=B.getAttributes();for(const X in ee)if(ee[X].location>=0){let ae=q[X];ae===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const ye={};ye.attribute=ae,ae&&ae.data&&(ye.data=ae.data),Y[X]=ye,Z++}r.attributes=Y,r.attributesNum=Z,r.index=H}function _(){const v=r.newAttributes;for(let L=0,B=v.length;L<B;L++)v[L]=0}function x(v){u(v,0)}function u(v,L){const B=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;B[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),Y[v]!==L&&(i.vertexAttribDivisor(v,L),Y[v]=L)}function y(){const v=r.newAttributes,L=r.enabledAttributes;for(let B=0,H=L.length;B<H;B++)L[B]!==v[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function E(v,L,B,H,Y,q,Z){Z===!0?i.vertexAttribIPointer(v,L,B,Y,q):i.vertexAttribPointer(v,L,B,H,Y,q)}function T(v,L,B,H){_();const Y=H.attributes,q=B.getAttributes(),Z=L.defaultAttributeValues;for(const ee in q){const X=q[ee];if(X.location>=0){let se=Y[ee];if(se===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const ae=se.normalized,ye=se.itemSize,Xe=e.get(se);if(Xe===void 0)continue;const $e=Xe.buffer,Qe=Xe.type,et=Xe.bytesPerElement,K=Qe===i.INT||Qe===i.UNSIGNED_INT||se.gpuType===Wo;if(se.isInterleavedBufferAttribute){const J=se.data,fe=J.stride,Ie=se.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<X.locationSize;Ee++)u(X.location+Ee,J.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<X.locationSize;Ee++)x(X.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Ee=0;Ee<X.locationSize;Ee++)E(X.location+Ee,ye/X.locationSize,Qe,ae,fe*et,(Ie+ye/X.locationSize*Ee)*et,K)}else{if(se.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)u(X.location+J,se.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let J=0;J<X.locationSize;J++)x(X.location+J);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let J=0;J<X.locationSize;J++)E(X.location+J,ye/X.locationSize,Qe,ae,ye*et,ye/X.locationSize*J*et,K)}}else if(Z!==void 0){const ae=Z[ee];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(X.location,ae);break;case 3:i.vertexAttrib3fv(X.location,ae);break;case 4:i.vertexAttrib4fv(X.location,ae);break;default:i.vertexAttrib1fv(X.location,ae)}}}}y()}function R(){N();for(const v in n){const L=n[v];for(const B in L){const H=L[B];for(const Y in H)h(H[Y].object),delete H[Y];delete L[B]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const B in L){const H=L[B];for(const Y in H)h(H[Y].object),delete H[Y];delete L[B]}delete n[v.id]}function C(v){for(const L in n){const B=n[L];if(B[v.id]===void 0)continue;const H=B[v.id];for(const Y in H)h(H[Y].object),delete H[Y];delete B[v.id]}}function N(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:x,disableUnusedAttributes:y}}function O0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];t.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function B0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!N)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:T,vertexTextures:R,maxSamples:A}}function z0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new rn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,x=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!x)r?h(null):c();else{const y=r?0:n,E=y*4;let T=u.clippingState||null;l.value=T,T=h(g,f,E,m);for(let R=0;R!==E;++R)T[R]=t[R];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let x=null;if(_!==0){if(x=l.value,g!==!0||x===null){const u=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<u)&&(x=new Float32Array(u));for(let E=0,T=m;E!==_;++E,T+=4)a.copy(d[E]).applyMatrix4(y,o),a.normal.toArray(x,T),x[T+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}function V0(i){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=qi:o===Qa&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===Qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ld(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gn=4,lc=[.125,.215,.35,.446,.526,.582],oi=20,G0=256,xs=new rl,cc=new Re;let wa=null,Ra=0,Ca=0,Pa=!1;const H0=new w;class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=H0}=r;wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,Vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:mn,format:on,colorSpace:Zi,depthBuffer:!1},s=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k0(r)),this._blurMaterial=X0(r,e,t),this._ggxMaterial=W0(r,e,t)}return s}_compileMaterial(e){const t=new it(new rt,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,s,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(cc),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Dn,new Hr({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,x=_.material;let u=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,u=!0):(x.color.copy(cc),u=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):T===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const R=this._cubeSize;Vi(s,T*R,E>2?R:0,R,R),d.setRenderTarget(s),u&&d.render(_,l),d.render(e,l)}d.toneMapping=m,d.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=.05+c*.95,m=d*f,{_lodMax:g}=this,_=this._sizeLods[n],x=3*_*(n>g-Gn?n-g+Gn:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Vi(r,x,u,3*_,2*_),s.setRenderTarget(r),s.render(o,xs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Vi(e,x,u,3*_,2*_),s.setRenderTarget(e),s.render(o,xs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),_=r/g,x=isFinite(r)?1+Math.floor(h*_):oi;x>oi&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${oi}`);const u=[];let y=0;for(let C=0;C<oi;++C){const N=C/_,b=Math.exp(-N*N/2);u.push(b),C===0?y+=b:C<x&&(y+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/y;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const T=this._sizeLods[s],R=3*T*(s>E-Gn?s-E+Gn:0),A=4*(this._cubeSize-T);Vi(t,R,A,3*T,2*T),l.setRenderTarget(t),l.render(d,xs)}}function k0(i){const e=[],t=[],n=[];let s=i;const r=i-Gn+1+lc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Gn?l=lc[a-i+Gn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,x=2,u=1,y=new Float32Array(_*g*m),E=new Float32Array(x*g*m),T=new Float32Array(u*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,N=A>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];y.set(b,_*g*A),E.set(f,x*g*A);const v=[A,A,A,A,A,A];T.set(v,u*g*A)}const R=new rt;R.setAttribute("position",new ct(y,_)),R.setAttribute("uv",new ct(E,x)),R.setAttribute("faceIndex",new ct(T,u)),n.push(new it(R,null)),s>Gn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function uc(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function W0(i,e,t){return new gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function X0(i,e,t){const n=new Float32Array(oi),s=new w(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function dc(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function fc(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function jr(){return`

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
	`}function Y0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===Qa,h=l===qi||l===ji;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new hc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new hc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function q0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function j0(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let E=0,T=y.length;E<T;E+=3){const R=y[E+0],A=y[E+1],C=y[E+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,T=y.length/3-1;E<T;E+=3){const R=E+0,A=E+1,C=E+2;f.push(R,A,A,C,C,R)}}else return;const x=new(hh(f)?ph:fh)(f,1);x.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,x)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Z0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let x=0;for(let u=0;u<g;u++)x+=m[u];t.update(x,n,1)}function d(f,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],_[u]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=m[y]*_[y];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function K0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let v=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let R=o.attributes.position.count*T,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*d),N=new uh(C,R,A,d);N.type=dn,N.needsUpdate=!0;const b=T*4;for(let L=0;L<d;L++){const B=u[L],H=y[L],Y=E[L],q=R*A*4*L;for(let Z=0;Z<B.count;Z++){const ee=Z*b;g===!0&&(s.fromBufferAttribute(B,Z),C[q+ee+0]=s.x,C[q+ee+1]=s.y,C[q+ee+2]=s.z,C[q+ee+3]=0),_===!0&&(s.fromBufferAttribute(H,Z),C[q+ee+4]=s.x,C[q+ee+5]=s.y,C[q+ee+6]=s.z,C[q+ee+7]=0),x===!0&&(s.fromBufferAttribute(Y,Z),C[q+ee+8]=s.x,C[q+ee+9]=s.y,C[q+ee+10]=s.z,C[q+ee+11]=Y.itemSize===4?s.w:1)}}f={count:d,texture:N,size:new me(R,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function J0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ah=new Ut,pc=new Sh(1,1),wh=new uh,Rh=new xd,Ch=new gh,mc=[],xc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zr(i,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),At(t,n)}}function sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),At(t,n)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),At(t,n)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pc.compareFunction=ch,r=pc):r=Ah,t.setTexture2D(e||r,s)}function mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rh,s)}function xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ch,s)}function gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wh,s)}function _m(i){switch(i){case 5126:return Q0;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(i,e){i.uniform1fv(this.addr,e)}function Mm(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Sm(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function bm(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function ym(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Em(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tm(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Am(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Rm(i,e){i.uniform3iv(this.addr,e)}function Cm(i,e){i.uniform4iv(this.addr,e)}function Pm(i,e){i.uniform1uiv(this.addr,e)}function Dm(i,e){i.uniform2uiv(this.addr,e)}function Lm(i,e){i.uniform3uiv(this.addr,e)}function Um(i,e){i.uniform4uiv(this.addr,e)}function Im(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ah,r[a])}function Nm(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rh,r[a])}function Fm(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ch,r[a])}function Om(i,e,t){const n=this.cache,s=e.length,r=Zr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wh,r[a])}function Bm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return bm;case 35674:return ym;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}}class Gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Da=/(\w+)(\])?(\[|\.)?/g;function Mc(i,e){i.seq.push(e),i.map[e.id]=e}function Hm(i,e,t){const n=i.name,s=n.length;for(Da.lastIndex=0;;){const r=Da.exec(n),a=Da.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mc(t,c===void 0?new zm(o,i,e):new Vm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Gm(o),Mc(t,d)),t=d}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Hm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const km=37297;let Wm=0;function Xm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const bc=new Be;function Ym(i){je._getMatrix(bc,je.workingColorSpace,i);const e=`mat3( ${bc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(e),o)}else return r}function qm(i,e){const t=Ym(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jm(i,e){let t;switch(e){case Zc:t="Linear";break;case Kc:t="Reinhard";break;case $c:t="Cineon";break;case ko:t="ACESFilmic";break;case Qc:t="AgX";break;case eh:t="Neutral";break;case Jc:t="Custom";break;default:Ne("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new w;function Zm(){je.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function $m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ys(i){return i!==""}function Ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Qm,tx)}const ex=new Map;function tx(i,e){let t=ze[e];if(t===void 0){const n=ex.get(e);if(n!==void 0)t=ze[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(nx,ix)}function ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function sx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function rx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case ji:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ax(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(e="ENVMAP_MODE_REFRACTION"),e}function ox(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Iu:e="ENVMAP_BLENDING_MIX";break;case Nu:e="ENVMAP_BLENDING_ADD";break}return e}function lx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sx(t),c=rx(t),h=ax(t),d=ox(t),f=lx(t),m=Km(t),g=$m(r),_=s.createProgram();let x,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),u.length>0&&(u+=`
`)):(x=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),u=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ze.tonemapping_pars_fragment:"",t.toneMapping!==kn?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,qm("linearToOutputTexel",t.outputColorSpace),Zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=Io(a),a=Ec(a,t),a=Tc(a,t),o=Io(o),o=Ec(o,t),o=Tc(o,t),a=Ac(a),o=Ac(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=y+x+a,T=y+u+o,R=Sc(s,s.VERTEX_SHADER,E),A=Sc(s,s.FRAGMENT_SHADER,T);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",Y=s.getShaderInfoLog(A)||"",q=B.trim(),Z=H.trim(),ee=Y.trim();let X=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,A);else{const ae=yc(s,R,"vertex"),ye=yc(s,A,"fragment");pt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+ae+`
`+ye)}else q!==""?Ne("WebGLProgram: Program Info Log:",q):(Z===""||ee==="")&&(se=!1);se&&(L.diagnostics={runnable:X,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:ee,prefix:u}})}s.deleteShader(R),s.deleteShader(A),N=new Ar(s,_),b=Jm(s,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,km)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let hx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dx(e),t.set(e,n)),n}}class dx{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function fx(i,e,t,n,s,r,a){const o=new el,l=new ux,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,v,L,B,H){const Y=B.fog,q=H.geometry,Z=b.isMeshStandardMaterial?B.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),X=ee&&ee.mapping===Vr?ee.image.height:null,se=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&Ne("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ye=ae!==void 0?ae.length:0;let Xe=0;q.morphAttributes.position!==void 0&&(Xe=1),q.morphAttributes.normal!==void 0&&(Xe=2),q.morphAttributes.color!==void 0&&(Xe=3);let $e,Qe,et,K;if(se){const Je=un[se];$e=Je.vertexShader,Qe=Je.fragmentShader}else $e=b.vertexShader,Qe=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),K=l.getFragmentShaderID(b);const J=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,Ve=!!b.map,Mt=!!b.matcap,Ge=!!ee,qe=!!b.aoMap,P=!!b.lightMap,He=!!b.bumpMap,Fe=!!b.normalMap,Ze=!!b.displacementMap,pe=!!b.emissiveMap,ut=!!b.metalnessMap,I=!!b.roughnessMap,j=b.anisotropy>0,S=b.clearcoat>0,p=b.dispersion>0,U=b.iridescence>0,z=b.sheen>0,W=b.transmission>0,V=j&&!!b.anisotropyMap,xe=S&&!!b.clearcoatMap,ne=S&&!!b.clearcoatNormalMap,Se=S&&!!b.clearcoatRoughnessMap,ve=U&&!!b.iridescenceMap,Q=U&&!!b.iridescenceThicknessMap,ie=z&&!!b.sheenColorMap,Ce=z&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,ue=!!b.specularColorMap,De=!!b.specularIntensityMap,D=W&&!!b.transmissionMap,ce=W&&!!b.thicknessMap,oe=!!b.gradientMap,le=!!b.alphaMap,te=b.alphaTest>0,$=!!b.alphaHash,_e=!!b.extensions;let be=kn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(be=i.toneMapping);const Oe={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:$e,fragmentShader:Qe,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zi,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:Mt,envMap:Ge,envMapMode:Ge&&ee.mapping,envMapCubeUVHeight:X,aoMap:qe,lightMap:P,bumpMap:He,normalMap:Fe,displacementMap:f&&Ze,emissiveMap:pe,normalMapObjectSpace:Fe&&b.normalMapType===zu,normalMapTangentSpace:Fe&&b.normalMapType===lh,metalnessMap:ut,roughnessMap:I,anisotropy:j,anisotropyMap:V,clearcoat:S,clearcoatMap:xe,clearcoatNormalMap:ne,clearcoatRoughnessMap:Se,dispersion:p,iridescence:U,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:z,sheenColorMap:ie,sheenRoughnessMap:Ce,specularMap:Ae,specularColorMap:ue,specularIntensityMap:De,transmission:W,transmissionMap:D,thicknessMap:ce,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Wi&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:te,alphaHash:$,combine:b.combine,mapUv:Ve&&_(b.map.channel),aoMapUv:qe&&_(b.aoMap.channel),lightMapUv:P&&_(b.lightMap.channel),bumpMapUv:He&&_(b.bumpMap.channel),normalMapUv:Fe&&_(b.normalMap.channel),displacementMapUv:Ze&&_(b.displacementMap.channel),emissiveMapUv:pe&&_(b.emissiveMap.channel),metalnessMapUv:ut&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:V&&_(b.anisotropyMap.channel),clearcoatMapUv:xe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(b.sheenRoughnessMap.channel),specularMapUv:Ae&&_(b.specularMap.channel),specularColorMapUv:ue&&_(b.specularColorMap.channel),specularIntensityMapUv:De&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:ce&&_(b.thicknessMap.channel),alphaMapUv:le&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Fe||j),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Ve||le),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===tt,decodeVideoTextureEmissive:pe&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vt,flipSided:b.side===Ct,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:_e&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&b.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function u(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)v.push(L),v.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(v,b),E(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function y(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function T(b){const v=g[b.type];let L;if(v){const B=un[v];L=Us.clone(B.uniforms)}else L=b.uniforms;return L}function R(b,v){let L;for(let B=0,H=h.length;B<H;B++){const Y=h[B];if(Y.cacheKey===v){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new cx(i,v,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function N(){l.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:T,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:N}}function px(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,_,x){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:x},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=x),e++,u}function o(d,f,m,g,_,x){const u=a(d,f,m,g,_,x);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,_,x){const u=a(d,f,m,g,_,x);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||mx),n.length>1&&n.sort(f||Rc),s.length>1&&s.sort(f||Rc)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function xx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new Re};break;case"SpotLight":t={position:new w,direction:new w,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function _x(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vx=0;function Mx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sx(i){const e=new gx,t=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,r=new st,a=new st;function o(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,_=0,x=0,u=0,y=0,E=0,T=0,R=0,A=0,C=0;c.sort(Mx);for(let b=0,v=c.length;b<v;b++){const L=c[b],B=L.color,H=L.intensity,Y=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],H);C++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=L.shadow.matrix,y++}n.directional[m]=Z,m++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(B).multiplyScalar(H),Z.distance=Y,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[_]=Z;const ee=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ee.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=ee.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=q,T++}_++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(B).multiplyScalar(H),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=Z,x++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ee=L.shadow,X=t.get(L);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(H),Z.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[u]=Z,u++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==x||N.hemiLength!==u||N.numDirectionalShadows!==y||N.numPointShadows!==E||N.numSpotShadows!==T||N.numSpotMaps!==R||N.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=x,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=T+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=x,N.hemiLength=u,N.numDirectionalShadows=y,N.numPointShadows=E,N.numSpotShadows=T,N.numSpotMaps=R,N.numLightProbes=C,n.version=vx++)}function l(c,h){let d=0,f=0,m=0,g=0,_=0;const x=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const E=c[u];if(E.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),d++}else if(E.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),m++}else if(E.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),a.identity(),r.copy(E.matrixWorld),r.premultiply(x),a.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(x),_++}}}return{setup:o,setupView:l,state:n}}function Pc(i){const e=new Sx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function bx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Pc(i),e.set(s,[o])):r>=a.length?(o=new Pc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`;function Tx(i,e,t){let n=new tl;const s=new me,r=new me,a=new lt,o=new Hd({depthPacking:Bu}),l=new kd,c={},h=t.maxTextureSize,d={[xn]:Ct,[Ct]:xn,[Vt]:Vt},f=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:yx,fragmentShader:Ex}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new rt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let u=this.type;this.render=function(A,C,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=u!==An&&this.type===An,Y=u===An&&this.type!==An;for(let q=0,Z=A.length;q<Z;q++){const ee=A[q],X=ee.shadow;if(X===void 0){Ne("WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const se=X.getFrameExtents();if(s.multiply(se),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,X.mapSize.y=r.y)),X.map===null||H===!0||Y===!0){const ye=this.type!==An?{minFilter:Zt,magFilter:Zt}:{};X.map!==null&&X.map.dispose(),X.map=new cn(s.x,s.y,ye),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ae=X.getViewportCount();for(let ye=0;ye<ae;ye++){const Xe=X.getViewport(ye);a.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),B.viewport(a),X.updateMatrices(ee,ye),n=X.getFrustum(),T(C,N,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===An&&y(X,N),X.needsUpdate=!1}u=this.type,x.needsUpdate=!1,i.setRenderTarget(b,v,L)};function y(A,C){const N=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,N,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,N,m,_,null)}function E(A,C,N,b){let v=null;const L=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)v=L;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=v.uuid,H=C.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let q=Y[H];q===void 0&&(q=v.clone(),Y[H]=q,C.addEventListener("dispose",R)),v=q}if(v.visible=C.visible,v.wireframe=C.wireframe,b===An?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:d[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=i.properties.get(v);B.light=N}return v}function T(A,C,N,b,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const H=e.update(A),Y=A.material;if(Array.isArray(Y)){const q=H.groups;for(let Z=0,ee=q.length;Z<ee;Z++){const X=q[Z],se=Y[X.materialIndex];if(se&&se.visible){const ae=E(A,se,b,v);A.onBeforeShadow(i,A,C,N,H,ae,X),i.renderBufferDirect(N,null,H,ae,A,X),A.onAfterShadow(i,A,C,N,H,ae,X)}}}else if(Y.visible){const q=E(A,Y,b,v);A.onBeforeShadow(i,A,C,N,H,q,null),i.renderBufferDirect(N,null,H,q,A,null),A.onAfterShadow(i,A,C,N,H,q,null)}}const B=A.children;for(let H=0,Y=B.length;H<Y;H++)T(B[H],C,N,b,v)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const b=c[N],v=A.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const Ax={[Xa]:Ya,[qa]:Ka,[ja]:$a,[Yi]:Za,[Ya]:Xa,[Ka]:qa,[$a]:ja,[Za]:Yi};function wx(i,e){function t(){let D=!1;const ce=new lt;let oe=null;const le=new lt(0,0,0,0);return{setMask:function(te){oe!==te&&!D&&(i.colorMask(te,te,te,te),oe=te)},setLocked:function(te){D=te},setClear:function(te,$,_e,be,Oe){Oe===!0&&(te*=be,$*=be,_e*=be),ce.set(te,$,_e,be),le.equals(ce)===!1&&(i.clearColor(te,$,_e,be),le.copy(ce))},reset:function(){D=!1,oe=null,le.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,oe=null,le=null,te=null;return{setReversed:function($){if(ce!==$){const _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ce=$;const be=te;te=null,this.setClear(be)}},getReversed:function(){return ce},setTest:function($){$?J(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function($){oe!==$&&!D&&(i.depthMask($),oe=$)},setFunc:function($){if(ce&&($=Ax[$]),le!==$){switch($){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=$}},setLocked:function($){D=$},setClear:function($){te!==$&&(ce&&($=1-$),i.clearDepth($),te=$)},reset:function(){D=!1,oe=null,le=null,te=null,ce=!1}}}function s(){let D=!1,ce=null,oe=null,le=null,te=null,$=null,_e=null,be=null,Oe=null;return{setTest:function(Je){D||(Je?J(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!D&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,Kt,Ht){(oe!==Je||le!==Kt||te!==Ht)&&(i.stencilFunc(Je,Kt,Ht),oe=Je,le=Kt,te=Ht)},setOp:function(Je,Kt,Ht){($!==Je||_e!==Kt||be!==Ht)&&(i.stencilOp(Je,Kt,Ht),$=Je,_e=Kt,be=Ht)},setLocked:function(Je){D=Je},setClear:function(Je){Oe!==Je&&(i.clearStencil(Je),Oe=Je)},reset:function(){D=!1,ce=null,oe=null,le=null,te=null,$=null,_e=null,be=null,Oe=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,x=null,u=null,y=null,E=null,T=null,R=null,A=null,C=new Re(0,0,0),N=0,b=!1,v=null,L=null,B=null,H=null,Y=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ee>=2);let se=null,ae={};const ye=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),$e=new lt().fromArray(ye),Qe=new lt().fromArray(Xe);function et(D,ce,oe,le){const te=new Uint8Array(4),$=i.createTexture();i.bindTexture(D,$),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<oe;_e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ce+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return $}const K={};K[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Yi),He(!1),Fe(yl),J(i.CULL_FACE),qe(pn);function J(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function fe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ie(D,ce){return d[D]!==ce?(i.bindFramebuffer(D,ce),d[D]=ce,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(D,ce){let oe=m,le=!1;if(D){oe=f.get(ce),oe===void 0&&(oe=[],f.set(ce,oe));const te=D.textures;if(oe.length!==te.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,_e=te.length;$<_e;$++)oe[$]=i.COLOR_ATTACHMENT0+$;oe.length=te.length,le=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,le=!0);le&&i.drawBuffers(oe)}function Ve(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Mt={[ai]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};Mt[vu]=i.MIN,Mt[Mu]=i.MAX;const Ge={[Su]:i.ZERO,[bu]:i.ONE,[yu]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[wu]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function qe(D,ce,oe,le,te,$,_e,be,Oe,Je){if(D===pn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),D!==xu){if(D!==x||Je!==b){if((u!==ai||T!==ai)&&(i.blendEquation(i.FUNC_ADD),u=ai,T=ai),Je)switch(D){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",D);break}else switch(D){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",D);break}y=null,E=null,R=null,A=null,C.set(0,0,0),N=0,x=D,b=Je}return}te=te||ce,$=$||oe,_e=_e||le,(ce!==u||te!==T)&&(i.blendEquationSeparate(Mt[ce],Mt[te]),u=ce,T=te),(oe!==y||le!==E||$!==R||_e!==A)&&(i.blendFuncSeparate(Ge[oe],Ge[le],Ge[$],Ge[_e]),y=oe,E=le,R=$,A=_e),(be.equals(C)===!1||Oe!==N)&&(i.blendColor(be.r,be.g,be.b,Oe),C.copy(be),N=Oe),x=D,b=!1}function P(D,ce){D.side===Vt?fe(i.CULL_FACE):J(i.CULL_FACE);let oe=D.side===Ct;ce&&(oe=!oe),He(oe),D.blending===Wi&&D.transparent===!1?qe(pn):qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const le=D.stencilWrite;o.setTest(le),le&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function Fe(D){D!==fu?(J(i.CULL_FACE),D!==L&&(D===yl?i.cullFace(i.BACK):D===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),L=D}function Ze(D){D!==B&&(Z&&i.lineWidth(D),B=D)}function pe(D,ce,oe){D?(J(i.POLYGON_OFFSET_FILL),(H!==ce||Y!==oe)&&(i.polygonOffset(ce,oe),H=ce,Y=oe)):fe(i.POLYGON_OFFSET_FILL)}function ut(D){D?J(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function I(D){D===void 0&&(D=i.TEXTURE0+q-1),se!==D&&(i.activeTexture(D),se=D)}function j(D,ce,oe){oe===void 0&&(se===null?oe=i.TEXTURE0+q-1:oe=se);let le=ae[oe];le===void 0&&(le={type:void 0,texture:void 0},ae[oe]=le),(le.type!==D||le.texture!==ce)&&(se!==oe&&(i.activeTexture(oe),se=oe),i.bindTexture(D,ce||K[D]),le.type=D,le.texture=ce)}function S(){const D=ae[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function p(){try{i.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function z(){try{i.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function W(){try{i.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ne(){try{i.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Se(){try{i.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ve(){try{i.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ie(D){$e.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function Ce(D){Qe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Qe.copy(D))}function Ae(D,ce){let oe=c.get(ce);oe===void 0&&(oe=new WeakMap,c.set(ce,oe));let le=oe.get(D);le===void 0&&(le=i.getUniformBlockIndex(ce,D.name),oe.set(D,le))}function ue(D,ce){const le=c.get(ce).get(D);l.get(ce)!==le&&(i.uniformBlockBinding(ce,le,D.__bindingPointIndex),l.set(ce,le))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ae={},d={},f=new WeakMap,m=[],g=null,_=!1,x=null,u=null,y=null,E=null,T=null,R=null,A=null,C=new Re(0,0,0),N=0,b=!1,v=null,L=null,B=null,H=null,Y=null,$e.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:fe,bindFramebuffer:Ie,drawBuffers:Ee,useProgram:Ve,setBlending:qe,setMaterial:P,setFlipSided:He,setCullFace:Fe,setLineWidth:Ze,setPolygonOffset:pe,setScissorTest:ut,activeTexture:I,bindTexture:j,unbindTexture:S,compressedTexImage2D:p,compressedTexImage3D:U,texImage2D:ve,texImage3D:Q,updateUBOMapping:Ae,uniformBlockBinding:ue,texStorage2D:ne,texStorage3D:Se,texSubImage2D:z,texSubImage3D:W,compressedTexSubImage2D:V,compressedTexSubImage3D:xe,scissor:ie,viewport:Ce,reset:De}}function Rx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,p){return m?new OffscreenCanvas(S,p):Lr("canvas")}function _(S,p,U){let z=1;const W=j(S);if((W.width>U||W.height>U)&&(z=U/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(z*W.width),xe=Math.floor(z*W.height);d===void 0&&(d=g(V,xe));const ne=p?g(V,xe):d;return ne.width=V,ne.height=xe,ne.getContext("2d").drawImage(S,0,0,V,xe),Ne("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+V+"x"+xe+")."),ne}else return"data"in S&&Ne("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function x(S){return S.generateMipmaps}function u(S){i.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(S,p,U,z,W=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=p;if(p===i.RED&&(U===i.FLOAT&&(V=i.R32F),U===i.HALF_FLOAT&&(V=i.R16F),U===i.UNSIGNED_BYTE&&(V=i.R8)),p===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.R8UI),U===i.UNSIGNED_SHORT&&(V=i.R16UI),U===i.UNSIGNED_INT&&(V=i.R32UI),U===i.BYTE&&(V=i.R8I),U===i.SHORT&&(V=i.R16I),U===i.INT&&(V=i.R32I)),p===i.RG&&(U===i.FLOAT&&(V=i.RG32F),U===i.HALF_FLOAT&&(V=i.RG16F),U===i.UNSIGNED_BYTE&&(V=i.RG8)),p===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RG8UI),U===i.UNSIGNED_SHORT&&(V=i.RG16UI),U===i.UNSIGNED_INT&&(V=i.RG32UI),U===i.BYTE&&(V=i.RG8I),U===i.SHORT&&(V=i.RG16I),U===i.INT&&(V=i.RG32I)),p===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGB8UI),U===i.UNSIGNED_SHORT&&(V=i.RGB16UI),U===i.UNSIGNED_INT&&(V=i.RGB32UI),U===i.BYTE&&(V=i.RGB8I),U===i.SHORT&&(V=i.RGB16I),U===i.INT&&(V=i.RGB32I)),p===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),U===i.UNSIGNED_INT&&(V=i.RGBA32UI),U===i.BYTE&&(V=i.RGBA8I),U===i.SHORT&&(V=i.RGBA16I),U===i.INT&&(V=i.RGBA32I)),p===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),p===i.RGBA){const xe=W?Pr:je.getTransfer(z);U===i.FLOAT&&(V=i.RGBA32F),U===i.HALF_FLOAT&&(V=i.RGBA16F),U===i.UNSIGNED_BYTE&&(V=xe===tt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function T(S,p){let U;return S?p===null||p===ui||p===Rs?U=i.DEPTH24_STENCIL8:p===dn?U=i.DEPTH32F_STENCIL8:p===ws&&(U=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===ui||p===Rs?U=i.DEPTH_COMPONENT24:p===dn?U=i.DEPTH_COMPONENT32F:p===ws&&(U=i.DEPTH_COMPONENT16),U}function R(S,p){return x(S)===!0||S.isFramebufferTexture&&S.minFilter!==Zt&&S.minFilter!==en?Math.log2(Math.max(p.width,p.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?p.mipmaps.length:1}function A(S){const p=S.target;p.removeEventListener("dispose",A),N(p),p.isVideoTexture&&h.delete(p)}function C(S){const p=S.target;p.removeEventListener("dispose",C),v(p)}function N(S){const p=n.get(S);if(p.__webglInit===void 0)return;const U=S.source,z=f.get(U);if(z){const W=z[p.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(S),Object.keys(z).length===0&&f.delete(U)}n.remove(S)}function b(S){const p=n.get(S);i.deleteTexture(p.__webglTexture);const U=S.source,z=f.get(U);delete z[p.__cacheKey],a.memory.textures--}function v(S){const p=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(p.__webglFramebuffer[z]))for(let W=0;W<p.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(p.__webglFramebuffer[z][W]);else i.deleteFramebuffer(p.__webglFramebuffer[z]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[z])}else{if(Array.isArray(p.__webglFramebuffer))for(let z=0;z<p.__webglFramebuffer.length;z++)i.deleteFramebuffer(p.__webglFramebuffer[z]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let z=0;z<p.__webglColorRenderbuffer.length;z++)p.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[z]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const U=S.textures;for(let z=0,W=U.length;z<W;z++){const V=n.get(U[z]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(S)}let L=0;function B(){L=0}function H(){const S=L;return S>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),L+=1,S}function Y(S){const p=[];return p.push(S.wrapS),p.push(S.wrapT),p.push(S.wrapR||0),p.push(S.magFilter),p.push(S.minFilter),p.push(S.anisotropy),p.push(S.internalFormat),p.push(S.format),p.push(S.type),p.push(S.generateMipmaps),p.push(S.premultiplyAlpha),p.push(S.flipY),p.push(S.unpackAlignment),p.push(S.colorSpace),p.join()}function q(S,p){const U=n.get(S);if(S.isVideoTexture&&ut(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const z=S.image;if(z===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,S,p);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+p)}function Z(S,p){const U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){K(U,S,p);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+p)}function ee(S,p){const U=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){K(U,S,p);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+p)}function X(S,p){const U=n.get(S);if(S.version>0&&U.__version!==S.version){J(U,S,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+p)}const se={[eo]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ae={[Zt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ye={[Vu]:i.NEVER,[Yu]:i.ALWAYS,[Gu]:i.LESS,[ch]:i.LEQUAL,[Hu]:i.EQUAL,[Xu]:i.GEQUAL,[ku]:i.GREATER,[Wu]:i.NOTEQUAL};function Xe(S,p){if(p.type===dn&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===en||p.magFilter===ea||p.magFilter===ks||p.magFilter===li||p.minFilter===en||p.minFilter===ea||p.minFilter===ks||p.minFilter===li)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,se[p.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,se[p.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,se[p.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ae[p.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ae[p.minFilter]),p.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ye[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Zt||p.minFilter!==ks&&p.minFilter!==li||p.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function $e(S,p){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,p.addEventListener("dispose",A));const z=p.source;let W=f.get(z);W===void 0&&(W={},f.set(z,W));const V=Y(p);if(V!==S.__cacheKey){W[V]===void 0&&(W[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[V].usedTimes++;const xe=W[S.__cacheKey];xe!==void 0&&(W[S.__cacheKey].usedTimes--,xe.usedTimes===0&&b(p)),S.__cacheKey=V,S.__webglTexture=W[V].texture}return U}function Qe(S,p,U){return Math.floor(Math.floor(S/U)/p)}function et(S,p,U,z){const V=S.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,U,z,p.data);else{V.sort((Q,ie)=>Q.start-ie.start);let xe=0;for(let Q=1;Q<V.length;Q++){const ie=V[xe],Ce=V[Q],Ae=ie.start+ie.count,ue=Qe(Ce.start,p.width,4),De=Qe(ie.start,p.width,4);Ce.start<=Ae+1&&ue===De&&Qe(Ce.start+Ce.count-1,p.width,4)===ue?ie.count=Math.max(ie.count,Ce.start+Ce.count-ie.start):(++xe,V[xe]=Ce)}V.length=xe+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Q=0,ie=V.length;Q<ie;Q++){const Ce=V[Q],Ae=Math.floor(Ce.start/4),ue=Math.ceil(Ce.count/4),De=Ae%p.width,D=Math.floor(Ae/p.width),ce=ue,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,De,D,ce,oe,U,z,p.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function K(S,p,U){let z=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(z=i.TEXTURE_3D);const W=$e(S,p),V=p.source;t.bindTexture(z,S.__webglTexture,i.TEXTURE0+U);const xe=n.get(V);if(V.version!==xe.__version||W===!0){t.activeTexture(i.TEXTURE0+U);const ne=je.getPrimaries(je.workingColorSpace),Se=p.colorSpace===Vn?null:je.getPrimaries(p.colorSpace),ve=p.colorSpace===Vn||ne===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=_(p.image,!1,s.maxTextureSize);Q=I(p,Q);const ie=r.convert(p.format,p.colorSpace),Ce=r.convert(p.type);let Ae=E(p.internalFormat,ie,Ce,p.colorSpace,p.isVideoTexture);Xe(z,p);let ue;const De=p.mipmaps,D=p.isVideoTexture!==!0,ce=xe.__version===void 0||W===!0,oe=V.dataReady,le=R(p,Q);if(p.isDepthTexture)Ae=T(p.format===Ps,p.type),ce&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ie,Ce,null));else if(p.isDataTexture)if(De.length>0){D&&ce&&t.texStorage2D(i.TEXTURE_2D,le,Ae,De[0].width,De[0].height);for(let te=0,$=De.length;te<$;te++)ue=De[te],D?oe&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ie,Ce,ue.data);p.generateMipmaps=!1}else D?(ce&&t.texStorage2D(i.TEXTURE_2D,le,Ae,Q.width,Q.height),oe&&et(p,Q,ie,Ce)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,ie,Ce,Q.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){D&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ae,De[0].width,De[0].height,Q.depth);for(let te=0,$=De.length;te<$;te++)if(ue=De[te],p.format!==on)if(ie!==null)if(D){if(oe)if(p.layerUpdates.size>0){const _e=oc(ue.width,ue.height,p.format,p.type);for(const be of p.layerUpdates){const Oe=ue.data.subarray(be*_e/ue.data.BYTES_PER_ELEMENT,(be+1)*_e/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,be,ue.width,ue.height,1,ie,Oe)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Q.depth,ie,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,Q.depth,0,ue.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Q.depth,ie,Ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Ae,ue.width,ue.height,Q.depth,0,ie,Ce,ue.data)}else{D&&ce&&t.texStorage2D(i.TEXTURE_2D,le,Ae,De[0].width,De[0].height);for(let te=0,$=De.length;te<$;te++)ue=De[te],p.format!==on?ie!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ie,Ce,ue.data):t.texImage2D(i.TEXTURE_2D,te,Ae,ue.width,ue.height,0,ie,Ce,ue.data)}else if(p.isDataArrayTexture)if(D){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Ae,Q.width,Q.height,Q.depth),oe)if(p.layerUpdates.size>0){const te=oc(Q.width,Q.height,p.format,p.type);for(const $ of p.layerUpdates){const _e=Q.data.subarray($*te/Q.data.BYTES_PER_ELEMENT,($+1)*te/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ie,Ce,_e)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,Ce,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,ie,Ce,Q.data);else if(p.isData3DTexture)D?(ce&&t.texStorage3D(i.TEXTURE_3D,le,Ae,Q.width,Q.height,Q.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,Ce,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,ie,Ce,Q.data);else if(p.isFramebufferTexture){if(ce)if(D)t.texStorage2D(i.TEXTURE_2D,le,Ae,Q.width,Q.height);else{let te=Q.width,$=Q.height;for(let _e=0;_e<le;_e++)t.texImage2D(i.TEXTURE_2D,_e,Ae,te,$,0,ie,Ce,null),te>>=1,$>>=1}}else if(De.length>0){if(D&&ce){const te=j(De[0]);t.texStorage2D(i.TEXTURE_2D,le,Ae,te.width,te.height)}for(let te=0,$=De.length;te<$;te++)ue=De[te],D?oe&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ie,Ce,ue):t.texImage2D(i.TEXTURE_2D,te,Ae,ie,Ce,ue);p.generateMipmaps=!1}else if(D){if(ce){const te=j(Q);t.texStorage2D(i.TEXTURE_2D,le,Ae,te.width,te.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Ce,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ie,Ce,Q);x(p)&&u(z),xe.__version=V.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function J(S,p,U){if(p.image.length!==6)return;const z=$e(S,p),W=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+U);const V=n.get(W);if(W.version!==V.__version||z===!0){t.activeTexture(i.TEXTURE0+U);const xe=je.getPrimaries(je.workingColorSpace),ne=p.colorSpace===Vn?null:je.getPrimaries(p.colorSpace),Se=p.colorSpace===Vn||xe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ve=p.isCompressedTexture||p.image[0].isCompressedTexture,Q=p.image[0]&&p.image[0].isDataTexture,ie=[];for(let $=0;$<6;$++)!ve&&!Q?ie[$]=_(p.image[$],!0,s.maxCubemapSize):ie[$]=Q?p.image[$].image:p.image[$],ie[$]=I(p,ie[$]);const Ce=ie[0],Ae=r.convert(p.format,p.colorSpace),ue=r.convert(p.type),De=E(p.internalFormat,Ae,ue,p.colorSpace),D=p.isVideoTexture!==!0,ce=V.__version===void 0||z===!0,oe=W.dataReady;let le=R(p,Ce);Xe(i.TEXTURE_CUBE_MAP,p);let te;if(ve){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,De,Ce.width,Ce.height);for(let $=0;$<6;$++){te=ie[$].mipmaps;for(let _e=0;_e<te.length;_e++){const be=te[_e];p.format!==on?Ae!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,De,be.width,be.height,0,be.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,be.width,be.height,Ae,ue,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,De,be.width,be.height,0,Ae,ue,be.data)}}}else{if(te=p.mipmaps,D&&ce){te.length>0&&le++;const $=j(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,De,$.width,$.height)}for(let $=0;$<6;$++)if(Q){D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ie[$].width,ie[$].height,Ae,ue,ie[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,ie[$].width,ie[$].height,0,Ae,ue,ie[$].data);for(let _e=0;_e<te.length;_e++){const Oe=te[_e].image[$].image;D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Oe.width,Oe.height,Ae,ue,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,De,Oe.width,Oe.height,0,Ae,ue,Oe.data)}}else{D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,ue,ie[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,Ae,ue,ie[$]);for(let _e=0;_e<te.length;_e++){const be=te[_e];D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Ae,ue,be.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,De,Ae,ue,be.image[$])}}}x(p)&&u(i.TEXTURE_CUBE_MAP),V.__version=W.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function fe(S,p,U,z,W,V){const xe=r.convert(U.format,U.colorSpace),ne=r.convert(U.type),Se=E(U.internalFormat,xe,ne,U.colorSpace),ve=n.get(p),Q=n.get(U);if(Q.__renderTarget=p,!ve.__hasExternalTextures){const ie=Math.max(1,p.width>>V),Ce=Math.max(1,p.height>>V);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,V,Se,ie,Ce,p.depth,0,xe,ne,null):t.texImage2D(W,V,Se,ie,Ce,0,xe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,Q.__webglTexture,0,Ze(p)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,Q.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(S,p,U){if(i.bindRenderbuffer(i.RENDERBUFFER,S),p.depthBuffer){const z=p.depthTexture,W=z&&z.isDepthTexture?z.type:null,V=T(p.stencilBuffer,W),xe=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Ze(p);pe(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,V,p.width,p.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,V,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,V,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,S)}else{const z=p.textures;for(let W=0;W<z.length;W++){const V=z[W],xe=r.convert(V.format,V.colorSpace),ne=r.convert(V.type),Se=E(V.internalFormat,xe,ne,V.colorSpace),ve=Ze(p);U&&pe(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Se,p.width,p.height):pe(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,Se,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,Se,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(S,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(p.depthTexture);z.__renderTarget=p,(!z.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),q(p.depthTexture,0);const W=z.__webglTexture,V=Ze(p);if(p.depthTexture.format===Cs)pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(p.depthTexture.format===Ps)pe(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ve(S){const p=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),z){const W=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),p.__depthDisposeCallback=W}p.__boundDepthTexture=z}if(S.depthTexture&&!p.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const z=S.texture.mipmaps;z&&z.length>0?Ee(p.__webglFramebuffer[0],S):Ee(p.__webglFramebuffer,S)}else if(U){p.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[z]),p.__webglDepthbuffer[z]===void 0)p.__webglDepthbuffer[z]=i.createRenderbuffer(),Ie(p.__webglDepthbuffer[z],S,!1);else{const W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=p.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,V)}}else{const z=S.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ie(p.__webglDepthbuffer,S,!1);else{const W=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(S,p,U){const z=n.get(S);p!==void 0&&fe(z.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ve(S)}function Ge(S){const p=S.texture,U=n.get(S),z=n.get(p);S.addEventListener("dispose",C);const W=S.textures,V=S.isWebGLCubeRenderTarget===!0,xe=W.length>1;if(xe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=p.version,a.memory.textures++),V){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let Se=0;Se<p.mipmaps.length;Se++)U.__webglFramebuffer[ne][Se]=i.createFramebuffer()}else U.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<p.mipmaps.length;ne++)U.__webglFramebuffer[ne]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ne=0,Se=W.length;ne<Se;ne++){const ve=n.get(W[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&pe(S)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<W.length;ne++){const Se=W[ne];U.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const ve=r.convert(Se.format,Se.colorSpace),Q=r.convert(Se.type),ie=E(Se.internalFormat,ve,Q,Se.colorSpace,S.isXRRenderTarget===!0),Ce=Ze(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,p);for(let ne=0;ne<6;ne++)if(p.mipmaps&&p.mipmaps.length>0)for(let Se=0;Se<p.mipmaps.length;Se++)fe(U.__webglFramebuffer[ne][Se],S,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se);else fe(U.__webglFramebuffer[ne],S,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);x(p)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ne=0,Se=W.length;ne<Se;ne++){const ve=W[ne],Q=n.get(ve);let ie=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ie=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Xe(ie,ve),fe(U.__webglFramebuffer,S,ve,i.COLOR_ATTACHMENT0+ne,ie,0),x(ve)&&u(ie)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ne=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,z.__webglTexture),Xe(ne,p),p.mipmaps&&p.mipmaps.length>0)for(let Se=0;Se<p.mipmaps.length;Se++)fe(U.__webglFramebuffer[Se],S,p,i.COLOR_ATTACHMENT0,ne,Se);else fe(U.__webglFramebuffer,S,p,i.COLOR_ATTACHMENT0,ne,0);x(p)&&u(ne),t.unbindTexture()}S.depthBuffer&&Ve(S)}function qe(S){const p=S.textures;for(let U=0,z=p.length;U<z;U++){const W=p[U];if(x(W)){const V=y(S),xe=n.get(W).__webglTexture;t.bindTexture(V,xe),u(V),t.unbindTexture()}}}const P=[],He=[];function Fe(S){if(S.samples>0){if(pe(S)===!1){const p=S.textures,U=S.width,z=S.height;let W=i.COLOR_BUFFER_BIT;const V=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(S),ne=p.length>1;if(ne)for(let ve=0;ve<p.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Se=S.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<p.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=n.get(p[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,W,i.NEAREST),l===!0&&(P.length=0,He.length=0,P.push(i.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(P.push(V),He.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<p.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=n.get(p[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const p=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function Ze(S){return Math.min(s.maxSamples,S.samples)}function pe(S){const p=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function ut(S){const p=a.render.frame;h.get(S)!==p&&(h.set(S,p),S.update())}function I(S,p){const U=S.colorSpace,z=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==Zi&&U!==Vn&&(je.getTransfer(U)===tt?(z!==on||W!==gn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",U)),p}function j(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Mt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=pe}function Cx(i,e){function t(n,s=Vn){let r;const a=je.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===oh)return i.RGB;if(n===on)return i.RGBA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Zo)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===br||n===yr||n===Er||n===Tr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ao||n===oo)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===xo||n===go||n===_o||n===vo||n===Mo||n===So||n===bo||n===yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===To||n===Ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===Ro||n===Co||n===Po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:Px,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",x=new Lx,u={},y=t.getContextAttributes();let E=null,T=null;const R=[],A=[],C=new me;let N=null;const b=new qt;b.viewport=new lt;const v=new qt;v.viewport=new lt;const L=[b,v],B=new Zd;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=R[K];return J===void 0&&(J=new Sa,R[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=R[K];return J===void 0&&(J=new Sa,R[K]=J),J.getGripSpace()},this.getHand=function(K){let J=R[K];return J===void 0&&(J=new Sa,R[K]=J),J.getHandSpace()};function q(K){const J=A.indexOf(K.inputSource);if(J===-1)return;const fe=R[J];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||a),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ee);for(let K=0;K<R.length;K++){const J=A[K];J!==null&&(A[K]=null,R[K].disconnect(J))}H=null,Y=null,x.reset();for(const K in u)delete u[K];e.setRenderTarget(E),m=null,f=null,d=null,s=null,T=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ps:Cs,Ie=y.stencil?Rs:ui);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new cn(f.textureWidth,f.textureHeight,{format:on,type:gn,depthTexture:new Sh(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new cn(m.framebufferWidth,m.framebufferHeight,{format:on,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(K){for(let J=0;J<K.removed.length;J++){const fe=K.removed[J],Ie=A.indexOf(fe);Ie>=0&&(A[Ie]=null,R[Ie].disconnect(fe))}for(let J=0;J<K.added.length;J++){const fe=K.added[J];let Ie=A.indexOf(fe);if(Ie===-1){for(let Ve=0;Ve<R.length;Ve++)if(Ve>=A.length){A.push(fe),Ie=Ve;break}else if(A[Ve]===null){A[Ve]=fe,Ie=Ve;break}if(Ie===-1)break}const Ee=R[Ie];Ee&&Ee.connect(fe)}}const X=new w,se=new w;function ae(K,J,fe){X.setFromMatrixPosition(J.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const Ie=X.distanceTo(se),Ee=J.projectionMatrix.elements,Ve=fe.projectionMatrix.elements,Mt=Ee[14]/(Ee[10]-1),Ge=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],P=(Ee[9]-1)/Ee[5],He=(Ee[8]-1)/Ee[0],Fe=(Ve[8]+1)/Ve[0],Ze=Mt*He,pe=Mt*Fe,ut=Ie/(-He+Fe),I=ut*-He;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(I),K.translateZ(ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const j=Mt+ut,S=Ge+ut,p=Ze-I,U=pe+(Ie-I),z=qe*Ge/S*j,W=P*Ge/S*j;K.projectionMatrix.makePerspective(p,U,z,W,j,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ye(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,fe=K.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),B.near=v.near=b.near=J,B.far=v.far=b.far=fe,(H!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,Y=B.far),B.layers.mask=K.layers.mask|6,b.layers.mask=B.layers.mask&3,v.layers.mask=B.layers.mask&5;const Ie=K.parent,Ee=B.cameras;ye(B,Ie);for(let Ve=0;Ve<Ee.length;Ve++)ye(Ee[Ve],Ie);Ee.length===2?ae(B,b,v):B.projectionMatrix.copy(b.projectionMatrix),Xe(K,B,Ie)};function Xe(K,J,fe){fe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ls*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(K){return u[K]};let $e=null;function Qe(K,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Ie=!1;fe.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let Ge=0;Ge<fe.length;Ge++){const qe=fe[Ge];let P=null;if(m!==null)P=m.getViewport(qe);else{const Fe=d.getViewSubImage(f,qe);P=Fe.viewport,Ge===0&&(e.setRenderTargetTextures(T,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(T))}let He=L[Ge];He===void 0&&(He=new qt,He.layers.enable(Ge),He.viewport=new lt,L[Ge]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(P.x,P.y,P.width,P.height),Ge===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(He)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ge=d.getDepthInformation(fe[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ge=0;Ge<fe.length;Ge++){const qe=fe[Ge].camera;if(qe){let P=u[qe];P||(P=new bh,u[qe]=P);const He=d.getCameraImage(qe);P.sourceTexture=He}}}}for(let fe=0;fe<R.length;fe++){const Ie=A[fe],Ee=R[fe];Ie!==null&&Ee!==void 0&&Ee.update(Ie,J,c||a)}$e&&$e(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const et=new Th;et.setAnimationLoop(Qe),this.setAnimationLoop=function(K){$e=K},this.dispose=function(){}}}const si=new _n,Ix=new st;function Nx(i,e){function t(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function n(x,u){u.color.getRGB(x.fogColor.value,mh(i)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function s(x,u,y,E,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(x,u):u.isMeshToonMaterial?(r(x,u),d(x,u)):u.isMeshPhongMaterial?(r(x,u),h(x,u)):u.isMeshStandardMaterial?(r(x,u),f(x,u),u.isMeshPhysicalMaterial&&m(x,u,T)):u.isMeshMatcapMaterial?(r(x,u),g(x,u)):u.isMeshDepthMaterial?r(x,u):u.isMeshDistanceMaterial?(r(x,u),_(x,u)):u.isMeshNormalMaterial?r(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,y,E):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,t(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,t(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===Ct&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,t(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===Ct&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,t(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,t(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const y=e.get(u),E=y.envMap,T=y.envMapRotation;E&&(x.envMap.value=E,si.copy(T),si.x*=-1,si.y*=-1,si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),x.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(si)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,t(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,y,E){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*y,x.scale.value=E*.5,u.map&&(x.map.value=u.map,t(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,t(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function h(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function d(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function f(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,y){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,u){u.matcap&&(x.matcap.value=u.matcap)}function _(x,u){const y=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const T=E.program;n.uniformBlockBinding(y,T)}function c(y,E){let T=s[y.id];T===void 0&&(g(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",x));const R=E.program;n.updateUBOMapping(y,R);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const E=d();y.__bindingPointIndex=E;const T=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=T.length;A<C;A++){const N=Array.isArray(T[A])?T[A]:[T[A]];for(let b=0,v=N.length;b<v;b++){const L=N[b];if(m(L,A,b,R)===!0){const B=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let q=0;q<H.length;q++){const Z=H[q],ee=_(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,Y),Y+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,T,R){const A=y.value,C=E+"_"+T;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const N=R[C];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[C]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(y){const E=y.uniforms;let T=0;const R=16;for(let C=0,N=E.length;C<N;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,L=b.length;v<L;v++){const B=b[v],H=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,q=H.length;Y<q;Y++){const Z=H[Y],ee=_(Z),X=T%R,se=X%ee.boundary,ae=X+se;T+=se,ae!==0&&R-ae<ee.storage&&(T+=R-ae),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=ee.storage}}}const A=T%R;return A>0&&(T+=R-A),y.__size=T,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",y),E}function x(y){const E=y.target;E.removeEventListener("dispose",x);const T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}const Ox=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Tn=null;function Bx(){return Tn===null&&(Tn=new vh(Ox,32,32,Zo,mn),Tn.minFilter=en,Tn.magFilter=en,Tn.wrapS=Rn,Tn.wrapT=Rn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class zx{constructor(e={}){const{canvas:t=qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Set([$o,Ko,jo]),_=new Set([gn,ui,ws,Rs,Xo,Yo]),x=new Uint32Array(4),u=new Int32Array(4);let y=null,E=null;const T=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1;this._outputColorSpace=Rt;let N=0,b=0,v=null,L=-1,B=null;const H=new lt,Y=new lt;let q=null;const Z=new Re(0);let ee=0,X=t.width,se=t.height,ae=1,ye=null,Xe=null;const $e=new lt(0,0,X,se),Qe=new lt(0,0,X,se);let et=!1;const K=new tl;let J=!1,fe=!1;const Ie=new st,Ee=new w,Ve=new lt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function qe(){return v===null?ae:1}let P=n;function He(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){const F="webgl2";if(P=He(F,M),P===null)throw He(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let Fe,Ze,pe,ut,I,j,S,p,U,z,W,V,xe,ne,Se,ve,Q,ie,Ce,Ae,ue,De,D,ce;function oe(){Fe=new q0(P),Fe.init(),De=new Cx(P,Fe),Ze=new B0(P,Fe,e,De),pe=new wx(P,Fe),Ze.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),ut=new K0(P),I=new px,j=new Rx(P,Fe,pe,I,Ze,De,ut),S=new V0(A),p=new Y0(A),U=new Qd(P),D=new F0(P,U),z=new j0(P,U,ut,D),W=new J0(P,z,U,ut),Ce=new $0(P,Ze,j),ve=new z0(I),V=new fx(A,S,p,Fe,Ze,D,ve),xe=new Nx(A,I),ne=new xx,Se=new bx(Fe),ie=new N0(A,S,p,pe,W,m,l),Q=new Tx(A,W,Ze),ce=new Fx(P,ut,Ze,pe),Ae=new O0(P,Fe,ut),ue=new Z0(P,Fe,ut),ut.programs=V.programs,A.capabilities=Ze,A.extensions=Fe,A.properties=I,A.renderLists=ne,A.shadowMap=Q,A.state=pe,A.info=ut}oe();const le=new Ux(A,P);this.xr=le,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(M){M!==void 0&&(ae=M,this.setSize(X,se,!1))},this.getSize=function(M){return M.set(X,se)},this.setSize=function(M,F,G=!0){if(le.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,se=F,t.width=Math.floor(M*ae),t.height=Math.floor(F*ae),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*ae,se*ae).floor()},this.setDrawingBufferSize=function(M,F,G){X=M,se=F,ae=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy($e)},this.setViewport=function(M,F,G,k){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,F,G,k),pe.viewport(H.copy($e).multiplyScalar(ae).round())},this.getScissor=function(M){return M.copy(Qe)},this.setScissor=function(M,F,G,k){M.isVector4?Qe.set(M.x,M.y,M.z,M.w):Qe.set(M,F,G,k),pe.scissor(Y.copy(Qe).multiplyScalar(ae).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){pe.setScissorTest(et=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Xe=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,G=!0){let k=0;if(M){let O=!1;if(v!==null){const re=v.texture.format;O=g.has(re)}if(O){const re=v.texture.type,de=_.has(re),Me=ie.getClearColor(),ge=ie.getClearAlpha(),Pe=Me.r,Le=Me.g,Te=Me.b;de?(x[0]=Pe,x[1]=Le,x[2]=Te,x[3]=ge,P.clearBufferuiv(P.COLOR,0,x)):(u[0]=Pe,u[1]=Le,u[2]=Te,u[3]=ge,P.clearBufferiv(P.COLOR,0,u))}else k|=P.COLOR_BUFFER_BIT}F&&(k|=P.DEPTH_BUFFER_BIT),G&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ie.dispose(),ne.dispose(),Se.dispose(),I.dispose(),S.dispose(),p.dispose(),W.dispose(),D.dispose(),ce.dispose(),V.dispose(),le.dispose(),le.removeEventListener("sessionstart",xl),le.removeEventListener("sessionend",gl),$n.stop()};function te(M){M.preventDefault(),Ur("WebGLRenderer: Context Lost."),C=!0}function $(){Ur("WebGLRenderer: Context Restored."),C=!1;const M=ut.autoReset,F=Q.enabled,G=Q.autoUpdate,k=Q.needsUpdate,O=Q.type;oe(),ut.autoReset=M,Q.enabled=F,Q.autoUpdate=G,Q.needsUpdate=k,Q.type=O}function _e(M){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function be(M){const F=M.target;F.removeEventListener("dispose",be),Oe(F)}function Oe(M){Je(M),I.remove(M)}function Je(M){const F=I.get(M).programs;F!==void 0&&(F.forEach(function(G){V.releaseProgram(G)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,k,O,re){F===null&&(F=Mt);const de=O.isMesh&&O.matrixWorld.determinant()<0,Me=ou(M,F,G,k,O);pe.setMaterial(k,de);let ge=G.index,Pe=1;if(k.wireframe===!0){if(ge=z.getWireframeAttribute(G),ge===void 0)return;Pe=2}const Le=G.drawRange,Te=G.attributes.position;let Ye=Le.start*Pe,at=(Le.start+Le.count)*Pe;re!==null&&(Ye=Math.max(Ye,re.start*Pe),at=Math.min(at,(re.start+re.count)*Pe)),ge!==null?(Ye=Math.max(Ye,0),at=Math.min(at,ge.count)):Te!=null&&(Ye=Math.max(Ye,0),at=Math.min(at,Te.count));const mt=at-Ye;if(mt<0||mt===1/0)return;D.setup(O,k,Me,G,ge);let xt,ht=Ae;if(ge!==null&&(xt=U.get(ge),ht=ue,ht.setIndex(xt)),O.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*qe()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(O.isLine){let we=k.linewidth;we===void 0&&(we=1),pe.setLineWidth(we*qe()),O.isLineSegments?ht.setMode(P.LINES):O.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else O.isPoints?ht.setMode(P.POINTS):O.isSprite&&ht.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ds("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const we=O._multiDrawStarts,dt=O._multiDrawCounts,Ke=O._multiDrawCount,kt=ge?U.get(ge).bytesPerElement:1,Si=I.get(k).currentProgram.getUniforms();for(let Wt=0;Wt<Ke;Wt++)Si.setValue(P,"_gl_DrawID",Wt),ht.render(we[Wt]/kt,dt[Wt])}else if(O.isInstancedMesh)ht.renderInstances(Ye,mt,O.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dt=Math.min(G.instanceCount,we);ht.renderInstances(Ye,mt,dt)}else ht.render(Ye,mt)};function Kt(M,F,G){M.transparent===!0&&M.side===Vt&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,Hs(M,F,G),M.side=xn,M.needsUpdate=!0,Hs(M,F,G),M.side=Vt):Hs(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),E=Se.get(G),E.init(F),R.push(E),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights();const k=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const Me=re[de];Kt(Me,G,O),k.add(Me)}else Kt(re,G,O),k.add(re)}),E=R.pop(),k},this.compileAsync=function(M,F,G=null){const k=this.compile(M,F,G);return new Promise(O=>{function re(){if(k.forEach(function(de){I.get(de).currentProgram.isReady()&&k.delete(de)}),k.size===0){O(M);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ht=null;function au(M){Ht&&Ht(M)}function xl(){$n.stop()}function gl(){$n.start()}const $n=new Th;$n.setAnimationLoop(au),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){Ht=M,le.setAnimationLoop(M),M===null?$n.stop():$n.start()},le.addEventListener("sessionstart",xl),le.addEventListener("sessionend",gl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,F,v),E=Se.get(M,R.length),E.init(F),R.push(E),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Ie,fn,F.reversedDepth),fe=this.localClippingEnabled,J=ve.init(this.clippingPlanes,fe),y=ne.get(M,T.length),y.init(),T.push(y),le.enabled===!0&&le.isPresenting===!0){const re=A.xr.getDepthSensingMesh();re!==null&&Jr(re,F,-1/0,A.sortObjects)}Jr(M,F,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ye,Xe),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&ie.addToRenderList(y,M),this.info.render.frame++,J===!0&&ve.beginShadows();const G=E.state.shadowsArray;Q.render(G,M,F),J===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,O=y.transmissive;if(E.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let de=0,Me=re.length;de<Me;de++){const ge=re[de];vl(k,O,M,ge)}Ge&&ie.render(M);for(let de=0,Me=re.length;de<Me;de++){const ge=re[de];_l(y,M,ge,ge.viewport)}}else O.length>0&&vl(k,O,M,F),Ge&&ie.render(M),_l(y,M,F);v!==null&&b===0&&(j.updateMultisampleRenderTarget(v),j.updateRenderTargetMipmap(v)),M.isScene===!0&&M.onAfterRender(A,M,F),D.resetDefaultState(),L=-1,B=null,R.pop(),R.length>0?(E=R[R.length-1],J===!0&&ve.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function Jr(M,F,G,k){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){k&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const de=W.update(M),Me=M.material;Me.visible&&y.push(M,de,Me,G,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const de=W.update(M),Me=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ve.copy(de.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(Me)){const ge=de.groups;for(let Pe=0,Le=ge.length;Pe<Le;Pe++){const Te=ge[Pe],Ye=Me[Te.materialIndex];Ye&&Ye.visible&&y.push(M,de,Ye,G,Ve.z,Te)}}else Me.visible&&y.push(M,de,Me,G,Ve.z,null)}}const re=M.children;for(let de=0,Me=re.length;de<Me;de++)Jr(re[de],F,G,k)}function _l(M,F,G,k){const{opaque:O,transmissive:re,transparent:de}=M;E.setupLightsView(G),J===!0&&ve.setGlobalState(A.clippingPlanes,G),k&&pe.viewport(H.copy(k)),O.length>0&&Gs(O,F,G),re.length>0&&Gs(re,F,G),de.length>0&&Gs(de,F,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function vl(M,F,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[k.id]===void 0&&(E.state.transmissionRenderTarget[k.id]=new cn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?mn:gn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const re=E.state.transmissionRenderTarget[k.id],de=k.viewport||H;re.setSize(de.z*A.transmissionResolutionScale,de.w*A.transmissionResolutionScale);const Me=A.getRenderTarget(),ge=A.getActiveCubeFace(),Pe=A.getActiveMipmapLevel();A.setRenderTarget(re),A.getClearColor(Z),ee=A.getClearAlpha(),ee<1&&A.setClearColor(16777215,.5),A.clear(),Ge&&ie.render(G);const Le=A.toneMapping;A.toneMapping=kn;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),J===!0&&ve.setGlobalState(A.clippingPlanes,k),Gs(M,G,k),j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,mt=F.length;at<mt;at++){const xt=F[at],{object:ht,geometry:we,material:dt,group:Ke}=xt;if(dt.side===Vt&&ht.layers.test(k.layers)){const kt=dt.side;dt.side=Ct,dt.needsUpdate=!0,Ml(ht,G,k,we,dt,Ke),dt.side=kt,dt.needsUpdate=!0,Ye=!0}}Ye===!0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re))}A.setRenderTarget(Me,ge,Pe),A.setClearColor(Z,ee),Te!==void 0&&(k.viewport=Te),A.toneMapping=Le}function Gs(M,F,G){const k=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=M.length;O<re;O++){const de=M[O],{object:Me,geometry:ge,group:Pe}=de;let Le=de.material;Le.allowOverride===!0&&k!==null&&(Le=k),Me.layers.test(G.layers)&&Ml(Me,F,G,ge,Le,Pe)}}function Ml(M,F,G,k,O,re){M.onBeforeRender(A,F,G,k,O,re),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(A,F,G,k,M,re),O.transparent===!0&&O.side===Vt&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,A.renderBufferDirect(G,F,k,O,M,re),O.side=xn,O.needsUpdate=!0,A.renderBufferDirect(G,F,k,O,M,re),O.side=Vt):A.renderBufferDirect(G,F,k,O,M,re),M.onAfterRender(A,F,G,k,O,re)}function Hs(M,F,G){F.isScene!==!0&&(F=Mt);const k=I.get(M),O=E.state.lights,re=E.state.shadowsArray,de=O.state.version,Me=V.getParameters(M,O.state,re,F,G),ge=V.getProgramCacheKey(Me);let Pe=k.programs;k.environment=M.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(M.isMeshStandardMaterial?p:S).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",be),Pe=new Map,k.programs=Pe);let Le=Pe.get(ge);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===de)return bl(M,Me),Le}else Me.uniforms=V.getUniforms(M),M.onBeforeCompile(Me,A),Le=V.acquireProgram(Me,ge),Pe.set(ge,Le),k.uniforms=Me.uniforms;const Te=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=ve.uniform),bl(M,Me),k.needsLights=cu(M),k.lightsStateVersion=de,k.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function Sl(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ar.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function bl(M,F){const G=I.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ou(M,F,G,k,O){F.isScene!==!0&&(F=Mt),j.resetTextureUnits();const re=F.fog,de=k.isMeshStandardMaterial?F.environment:null,Me=v===null?A.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Zi,ge=(k.isMeshStandardMaterial?p:S).get(k.envMap||de),Pe=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,at=!!G.morphAttributes.color;let mt=kn;k.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(mt=A.toneMapping);const xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=xt!==void 0?xt.length:0,we=I.get(k),dt=E.state.lights;if(J===!0&&(fe===!0||M!==B)){const It=M===B&&k.id===L;ve.setState(k,M,It)}let Ke=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==dt.state.version||we.outputColorSpace!==Me||O.isBatchedMesh&&we.batching===!1||!O.isBatchedMesh&&we.batching===!0||O.isBatchedMesh&&we.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&we.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&we.instancing===!1||!O.isInstancedMesh&&we.instancing===!0||O.isSkinnedMesh&&we.skinning===!1||!O.isSkinnedMesh&&we.skinning===!0||O.isInstancedMesh&&we.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&we.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&we.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&we.instancingMorph===!1&&O.morphTexture!==null||we.envMap!==ge||k.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ve.numPlanes||we.numIntersection!==ve.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==Te||we.morphNormals!==Ye||we.morphColors!==at||we.toneMapping!==mt||we.morphTargetsCount!==ht)&&(Ke=!0):(Ke=!0,we.__version=k.version);let kt=we.currentProgram;Ke===!0&&(kt=Hs(k,F,O));let Si=!1,Wt=!1,ss=!1;const ft=kt.getUniforms(),Ot=we.uniforms;if(pe.useProgram(kt.program)&&(Si=!0,Wt=!0,ss=!0),k.id!==L&&(L=k.id,Wt=!0),Si||B!==M){pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",M.projectionMatrix),ft.setValue(P,"viewMatrix",M.matrixWorldInverse);const Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(P,Ee.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Wt=!0,ss=!0)}if(O.isSkinnedMesh){ft.setOptional(P,O,"bindMatrix"),ft.setOptional(P,O,"bindMatrixInverse");const It=O.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ft.setValue(P,"boneTexture",It.boneTexture,j))}O.isBatchedMesh&&(ft.setOptional(P,O,"batchingTexture"),ft.setValue(P,"batchingTexture",O._matricesTexture,j),ft.setOptional(P,O,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",O._indirectTexture,j),ft.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",O._colorsTexture,j));const $t=G.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Ce.update(O,G,kt),(Wt||we.receiveShadow!==O.receiveShadow)&&(we.receiveShadow=O.receiveShadow,ft.setValue(P,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ot.envMap.value=ge,Ot.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(Ot.envMapIntensity.value=F.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Bx()),Wt&&(ft.setValue(P,"toneMappingExposure",A.toneMappingExposure),we.needsLights&&lu(Ot,ss),re&&k.fog===!0&&xe.refreshFogUniforms(Ot,re),xe.refreshMaterialUniforms(Ot,k,ae,se,E.state.transmissionRenderTarget[M.id]),Ar.upload(P,Sl(we),Ot,j)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ar.upload(P,Sl(we),Ot,j),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(P,"center",O.center),ft.setValue(P,"modelViewMatrix",O.modelViewMatrix),ft.setValue(P,"normalMatrix",O.normalMatrix),ft.setValue(P,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const It=k.uniformsGroups;for(let Bt=0,Qr=It.length;Bt<Qr;Bt++){const Jn=It[Bt];ce.update(Jn,kt),ce.bind(Jn,kt)}}return kt}function lu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function cu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(M,F,G){const k=I.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),I.get(M.texture).__webglTexture=F,I.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const G=I.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const hu=P.createFramebuffer();this.setRenderTarget=function(M,F=0,G=0){v=M,N=F,b=G;let k=!0,O=null,re=!1,de=!1;if(M){const ge=I.get(M);if(ge.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(ge.__hasExternalTextures)j.rebindTextures(M,I.get(M.texture).__webglTexture,I.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(ge.__boundDepthTexture!==Te){if(Te!==null&&I.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);const Le=I.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?O=Le[F][G]:O=Le[F],re=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?O=I.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,H.copy(M.viewport),Y.copy(M.scissor),q=M.scissorTest}else H.copy($e).multiplyScalar(ae).floor(),Y.copy(Qe).multiplyScalar(ae).floor(),q=et;if(G!==0&&(O=hu),pe.bindFramebuffer(P.FRAMEBUFFER,O)&&k&&pe.drawBuffers(M,O),pe.viewport(H),pe.scissor(Y),pe.setScissorTest(q),re){const ge=I.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ge.__webglTexture,G)}else if(de){const ge=F;for(let Pe=0;Pe<M.textures.length;Pe++){const Le=I.get(M.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,G,ge)}}else if(M!==null&&G!==0){const ge=I.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,G)}L=-1},this.readRenderTargetPixels=function(M,F,G,k,O,re,de,Me=0){if(!(M&&M.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=I.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){pe.bindFramebuffer(P.FRAMEBUFFER,ge);try{const Pe=M.textures[Me],Le=Pe.format,Te=Pe.type;if(!Ze.textureFormatReadable(Le)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Te)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-k&&G>=0&&G<=M.height-O&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,G,k,O,De.convert(Le),De.convert(Te),re))}finally{const Pe=v!==null?I.get(v).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,k,O,re,de,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=I.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(F>=0&&F<=M.width-k&&G>=0&&G<=M.height-O){pe.bindFramebuffer(P.FRAMEBUFFER,ge);const Pe=M.textures[Me],Le=Pe.format,Te=Pe.type;if(!Ze.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,G,k,O,De.convert(Le),De.convert(Te),0);const at=v!==null?I.get(v).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,at);const mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ju(P,mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(Ye),P.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,G=0){const k=Math.pow(2,-G),O=Math.floor(M.image.width*k),re=Math.floor(M.image.height*k),de=F!==null?F.x:0,Me=F!==null?F.y:0;j.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,de,Me,O,re),pe.unbindTexture()};const uu=P.createFramebuffer(),du=P.createFramebuffer();this.copyTextureToTexture=function(M,F,G=null,k=null,O=0,re=null){re===null&&(O!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let de,Me,ge,Pe,Le,Te,Ye,at,mt;const xt=M.isCompressedTexture?M.mipmaps[re]:M.image;if(G!==null)de=G.max.x-G.min.x,Me=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,Le=G.min.y,Te=G.isBox3?G.min.z:0;else{const $t=Math.pow(2,-O);de=Math.floor(xt.width*$t),Me=Math.floor(xt.height*$t),M.isDataArrayTexture?ge=xt.depth:M.isData3DTexture?ge=Math.floor(xt.depth*$t):ge=1,Pe=0,Le=0,Te=0}k!==null?(Ye=k.x,at=k.y,mt=k.z):(Ye=0,at=0,mt=0);const ht=De.convert(F.format),we=De.convert(F.type);let dt;F.isData3DTexture?(j.setTexture3D(F,0),dt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),dt=P.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),kt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Si=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),ss=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const ft=M.isDataArrayTexture||M.isData3DTexture,Ot=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const $t=I.get(M),It=I.get(F),Bt=I.get($t.__renderTarget),Qr=I.get(It.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Jn=0;Jn<ge;Jn++)ft&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(M).__webglTexture,O,Te+Jn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(F).__webglTexture,re,mt+Jn)),P.blitFramebuffer(Pe,Le,de,Me,Ye,at,de,Me,P.DEPTH_BUFFER_BIT,P.NEAREST);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||I.has(M)){const $t=I.get(M),It=I.get(F);pe.bindFramebuffer(P.READ_FRAMEBUFFER,uu),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,du);for(let Bt=0;Bt<ge;Bt++)ft?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$t.__webglTexture,O,Te+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$t.__webglTexture,O),Ot?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,It.__webglTexture,re,mt+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,It.__webglTexture,re),O!==0?P.blitFramebuffer(Pe,Le,de,Me,Ye,at,de,Me,P.COLOR_BUFFER_BIT,P.NEAREST):Ot?P.copyTexSubImage3D(dt,re,Ye,at,mt+Bt,Pe,Le,de,Me):P.copyTexSubImage2D(dt,re,Ye,at,Pe,Le,de,Me);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ot?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(dt,re,Ye,at,mt,de,Me,ge,ht,we,xt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(dt,re,Ye,at,mt,de,Me,ge,ht,xt.data):P.texSubImage3D(dt,re,Ye,at,mt,de,Me,ge,ht,we,xt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,Ye,at,de,Me,ht,we,xt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,Ye,at,xt.width,xt.height,ht,xt.data):P.texSubImage2D(P.TEXTURE_2D,re,Ye,at,de,Me,ht,we,xt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,kt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Si),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ss),re===0&&F.generateMipmaps&&P.generateMipmap(dt),pe.unbindTexture()},this.initRenderTarget=function(M){I.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),pe.unbindTexture()},this.resetState=function(){N=0,b=0,v=null,pe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Dc={type:"change"},al={type:"start"},Ph={type:"end"},gr=new Bs,Lc=new rn,Vx=Math.cos(70*Gt.DEG2RAD),yt=new w,zt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},La=1e-6;class Gx extends $d{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new di,this._lastTargetPosition=new w,this._quat=new di().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ac,this._sphericalDelta=new ac,this._scale=1,this._panOffset=new w,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new w,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=Wx.bind(this),this._onContextMenu=$x.bind(this),this._onMouseWheel=qx.bind(this),this._onKeyDown=jx.bind(this),this._onTouchStart=Zx.bind(this),this._onTouchMove=Kx.bind(this),this._onMouseDown=Xx.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Jx.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(gr.origin.copy(this.object.position),gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gr.direction))<Vx?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),gr.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>La||8*(1-this._lastQuaternion.dot(this.object.quaternion))>La||this._lastTargetPosition.distanceToSquared(this.target)>La?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function kx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Wx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ph),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ot.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(al)}function Yx(i){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(i.preventDefault(),this.dispatchEvent(al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ph))}function jx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Zx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ot.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ot.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(al)}function Kx(i){switch(this._trackPointer(i),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ot.NONE}}function $x(i){this.enabled!==!1&&i.preventDefault()}function Jx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eg=new rl(-1,1,1,-1,0,1);class tg extends rt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}}const ng=new tg;class ol{constructor(e){this._mesh=new it(ng,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dh extends ts{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Us.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ol(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uc extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ig extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dh(wr),this.copyPass.material.blending=pn,this.clock=new Eh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uc!==void 0&&(a instanceof Uc?n=!0:a instanceof ig&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rg extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ag={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Qi extends ts{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new Re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new cn(r,a,{type:mn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new cn(r,a,{type:mn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=ag;this.highPassUniforms=Us.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Us.clone(wr.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Re,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new ol(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Qi.BlurDirectionX=new me(1,0);Qi.BlurDirectionY=new me(0,1);const _r={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class og extends ts{constructor(){super(),this.uniforms=Us.clone(_r.uniforms),this.material=new Gd({name:_r.name,uniforms:this.uniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader}),this._fsQuad=new ol(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const lg=`
  varying vec3 vDirection;

  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cg=`
  uniform float uTime;
  varying vec3 vDirection;

  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    return mix(mix(x00, x10, f.y), mix(x01, x11, f.y), f.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.52;
    mat3 rotation = mat3(
       0.00,  0.80,  0.60,
      -0.80,  0.36, -0.48,
      -0.60, -0.48,  0.64
    );

    for (int i = 0; i < 5; i++) {
      value += noise3(p) * amplitude;
      p = rotation * p * 2.03 + 13.7;
      amplitude *= 0.49;
    }

    return value;
  }

  void main() {
    vec3 direction = normalize(vDirection);
    vec3 p = direction * 4.4;

    // Multi-scale turbulence makes the clouds look like layered gas, not smooth fog.
    vec3 warp = vec3(
      fbm(p * 1.05 + vec3(0.0, 0.0, uTime * 0.008)),
      fbm(p * 1.05 + vec3(17.2, 4.3, 2.1)),
      fbm(p * 1.05 + vec3(3.7, 19.1, 8.4))
    );
    float broadNoise = fbm(p * 2.0 + warp * 2.1);
    float fineNoise = fbm(p * 6.0 + warp * 3.7);
    float filament = pow(max(1.0 - abs(fineNoise - 0.49) * 3.1, 0.0), 3.0);

    // Four distinct nebula formations. Most of the sky between them stays black.
    // Place the formations on the far hemisphere seen from inside the sky dome.
    vec3 cloudA = normalize(vec3(-0.58, 0.52, -0.63));
    vec3 cloudB = normalize(vec3(0.62, 0.32, -0.72));
    vec3 cloudC = normalize(vec3(-0.20, -0.35, -0.91));
    vec3 cloudD = normalize(vec3(0.92, 0.18, -0.31));

    float lobeA = exp(-pow(acos(clamp(dot(direction, cloudA), -1.0, 1.0)) * 2.8, 2.0));
    float lobeB = exp(-pow(acos(clamp(dot(direction, cloudB), -1.0, 1.0)) * 2.6, 2.0));
    float lobeC = exp(-pow(acos(clamp(dot(direction, cloudC), -1.0, 1.0)) * 3.0, 2.0));
    float lobeD = exp(-pow(acos(clamp(dot(direction, cloudD), -1.0, 1.0)) * 3.1, 2.0));

    float cloudDensity = smoothstep(0.37, 0.66, broadNoise);
    float wisps = smoothstep(0.28, 0.72, filament);
    float blueCloud = lobeA * cloudDensity;
    float violetCloud = lobeB * smoothstep(0.34, 0.64, broadNoise);
    float tealCloud = lobeC * smoothstep(0.39, 0.68, broadNoise);
    float distantCloud = lobeD * smoothstep(0.42, 0.70, fineNoise);

    vec3 color = vec3(0.00035, 0.00065, 0.0022);
    color += vec3(0.002, 0.004, 0.014) * (0.5 + direction.y * 0.5);

    // Concentrated blue, violet, and teal gas with brighter textured filaments.
    color += vec3(0.018, 0.070, 0.19) * blueCloud * 1.15;
    color += vec3(0.070, 0.018, 0.16) * violetCloud * 1.05;
    color += vec3(0.012, 0.075, 0.13) * tealCloud * 0.95;
    color += vec3(0.10, 0.035, 0.022) * distantCloud * 0.55;

    float filamentMask = (blueCloud + violetCloud + tealCloud) * wisps;
    color += vec3(0.030, 0.085, 0.17) * filamentMask * 0.48;

    // A very dim galactic dust lane adds depth; it never becomes a white backdrop.
    float galacticBand = exp(-pow((direction.y + direction.x * 0.18) * 4.2, 2.0));
    float bandNoise = fbm(direction * 8.0 + vec3(2.0, 5.0, uTime * 0.004));
    color += vec3(0.0015, 0.004, 0.012) * galacticBand * (0.15 + bandNoise * 0.30);

    gl_FragColor = vec4(color, 1.0);
  }
`,hg={uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    varying vec2 vUv;

    float grain(vec2 uv) {
      return fract(sin(dot(uv, vec2(127.1, 311.7)) + uTime * 17.0) * 43758.5453);
    }

    void main() {
      vec4 source = texture2D(tDiffuse, vUv);
      vec2 centered = (vUv - 0.5) * vec2(1.0, 0.86);
      // Use a defined smoothstep range: the reversed-edge form is undefined in GLSL.
      float vignette = 1.0 - smoothstep(0.18, 0.72, length(centered));
      source.rgb *= mix(0.48, 1.0, vignette);

      float fineGrain = (grain(vUv * vec2(1700.0, 950.0)) - 0.5) * 0.004;
      source.rgb += fineGrain;

      // Cool shadows and restrained highlights; keep the nebula saturated.
      source.rgb *= vec3(0.92, 0.94, 1.04);
      gl_FragColor = source;
    }
  `};function ug(i,e,t){const n=new gt({uniforms:{uTime:{value:0}},vertexShader:lg,fragmentShader:cg,side:Ct,depthWrite:!1,depthTest:!1,fog:!1}),s=new it(new Xn(1800,96,64),n);s.renderOrder=-1e3,i.add(s);const r=new sg(t);r.addPass(new rg(i,e));const a=new Qi(new me(window.innerWidth,window.innerHeight),.68,.42,.72);r.addPass(a);const o=new Dh(hg);return r.addPass(o),r.addPass(new og),{update(l){n.uniforms.uTime.value=l,o.uniforms.uTime.value=l},render(){r.render()},resize(l,c,h){r.setPixelRatio(h),r.setSize(l,c)}}}const Ue=(i,e)=>i+Math.random()*(e-i);function Gi(i,e="rgba(218,232,255,0.94)"){const t=document.createElement("canvas");t.width=512,t.height=96;const n=t.getContext("2d");if(!n)throw new Error("Canvas 2D context is unavailable.");n.font="500 34px monospace",n.textAlign="center",n.textBaseline="middle",n.fillStyle=e,n.fillText(i.toUpperCase(),256,48);const s=new Wr(t);s.colorSpace=Rt;const r=new kr(new zs({map:s,transparent:!0,depthTest:!0,depthWrite:!1}));return r.scale.set(.92,.17,1),r.renderOrder=5,r}function Rr(i,e,t=.12,n=0){const s=[];for(let l=0;l<180;l+=1){const c=l/180*Math.PI*2;s.push(new w(Math.cos(c)*e,0,Math.sin(c)*e))}const a=new rt().setFromPoints(s),o=new Or(a,new $i({color:9545673,transparent:!0,opacity:t,depthWrite:!1}));return o.rotation.x=n,i.add(o),o}function gs(i,e,t,n,s,r,a,o,l=0,c,h,d=.08){const f=new Float32Array(e*3),m=new Float32Array(e*3),g=r.map(u=>new Re(u));for(let u=0;u<e;u+=1){let y=Ue(t,n);if(h?.length)for(let Y=0;Y<18&&h.some(Z=>Math.abs(y-Z.center)<Z.width);Y+=1)y=Ue(t,n);let E;c?.length?E=c[Math.floor(Math.random()*c.length)]+(Math.random()-.5)*.72:E=Math.random()*Math.PI*2;const T=(Math.random()-.5)*s*.08;y+=T;const R=Math.cos(E)*y,A=Math.sin(E)*y,C=Ue(-d,d),N=Math.random()*Math.PI*2,b=y*Math.sin(C)*Math.sin(E-N),v=.58+.42*Math.abs(Math.sin(E*2.7+y*1.8)),L=b+(Math.random()-.5)*s*v;f[u*3]=R,f[u*3+1]=L,f[u*3+2]=A;const B=g[Math.floor(Math.random()*g.length)],H=Ue(.55,1.2);m[u*3]=B.r*H,m[u*3+1]=B.g*H,m[u*3+2]=B.b*H}const _=new rt;_.setAttribute("position",new ct(f,3)),_.setAttribute("color",new ct(m,3));const x=new Ji(_,new fi({size:a,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:o,depthWrite:!1}));return x.rotation.x=l,x.frustumCulled=!1,i.add(x),x}function dg(i,e,t,n,s){const r=new Float32Array(e*3),a=new Float32Array(e*3),o=t.map(h=>new Re(h));for(let h=0;h<e;h+=1){const d=Ue(2.7,5.5),f=Ue(.12,.58),m=Math.random()*Math.PI*2,g=Ue(-.42,.42),_=d*(Math.cos(m)-f),x=d*Math.sqrt(1-f*f)*Math.sin(m),u=x*Math.sin(g)+Ue(-.08,.08),y=x*Math.cos(g);r[h*3]=_,r[h*3+1]=u,r[h*3+2]=y;const E=o[Math.floor(Math.random()*o.length)],T=Ue(.58,1.12);a[h*3]=E.r*T,a[h*3+1]=E.g*T,a[h*3+2]=E.b*T}const l=new rt;l.setAttribute("position",new ct(r,3)),l.setAttribute("color",new ct(a,3));const c=new Ji(l,new fi({size:n,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:s,depthWrite:!1}));return c.frustumCulled=!1,i.add(c),c}function vr(i,e,t,n,s,r){const a=new Yr(1,1),o=new ln({color:16777215,roughness:.88,metalness:.015,emissive:4797218,emissiveIntensity:.58,flatShading:!0,vertexColors:!0}),l=new Od(a,o,e);l.frustumCulled=!1,l.castShadow=!1,l.receiveShadow=!1;const c=new bt,h=r.map(d=>new Re(d));for(let d=0;d<e;d+=1){const f=t(),m=Ue(n,s);c.position.copy(f),c.rotation.set(Ue(0,Math.PI*2),Ue(0,Math.PI*2),Ue(0,Math.PI*2)),c.scale.set(m*Ue(.72,1.3),m*Ue(.65,1.05),m*Ue(.72,1.2)),c.updateMatrix(),l.setMatrixAt(d,c.matrix);const g=h[Math.floor(Math.random()*h.length)];l.setColorAt(d,g.clone().multiplyScalar(Ue(.72,1.16)))}return l.instanceMatrix.needsUpdate=!0,l.instanceColor&&(l.instanceColor.needsUpdate=!0),i.add(l),l}function Ic(i,e,t,n){const s=Ue(i,e),r=Math.random()*Math.PI*2,a=Ue(-n,n),o=Math.random()*Math.PI*2,l=s*Math.sin(a)*Math.sin(r-o)+Ue(-t*.5,t*.5);return new w(Math.cos(r)*s,l,Math.sin(r)*s)}function Nc(i,e,t,n,s,r,a){const o=new Float32Array(e*3),l=new Float32Array(e*3),c=s.map(f=>new Re(f));for(let f=0;f<e;f+=1){const m=Ue(-1,1),g=Math.random()*Math.PI*2,_=Math.sqrt(1-m*m),x=Ue(t,n);o[f*3]=Math.cos(g)*_*x,o[f*3+1]=m*x,o[f*3+2]=Math.sin(g)*_*x;const u=c[Math.floor(Math.random()*c.length)],y=Ue(.45,1.15);l[f*3]=u.r*y,l[f*3+1]=u.g*y,l[f*3+2]=u.b*y}const h=new rt;h.setAttribute("position",new ct(o,3)),h.setAttribute("color",new ct(l,3));const d=new Ji(h,new fi({size:r,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:a,depthWrite:!1}));return d.frustumCulled=!1,i.add(d),d}function Es(i,e){const t=new Yr(i,1),n=t.getAttribute("position");for(let s=0;s<n.count;s+=1){const r=Ue(.88,1.12);n.setXYZ(s,n.getX(s)*r,n.getY(s)*r,n.getZ(s)*r)}return t.computeVertexNormals(),new it(t,new ln({color:e,roughness:.94,metalness:.02,emissive:e,emissiveIntensity:.08}))}function fg(i,e,t,n,s){const r=new ke;e.add(r);const a=new ke;a.rotation.y=Math.random()*Math.PI*2,a.rotation.z=Ue(-.12,.12),r.add(a);const o=1.75,l=2;Rr(a,t.distance*l,.17,Ue(-.08,.08));const c=Es(t.radius,t.color);return c.scale.setScalar(o),c.position.set(t.distance*l,0,0),c.userData.celestialName=t.name,a.add(c),n.push({anchor:r,orbit:a,parent:i,mesh:c,speed:t.speed,spin:Ue(-.3,.3)}),c}function Ua(i,e=13227748){const t=new ke,n=new ln({color:e,metalness:.72,roughness:.35,emissive:2373196,emissiveIntensity:.18}),s=new ln({color:2378886,metalness:.5,roughness:.42,emissive:1059149,emissiveIntensity:.32}),r=new ln({color:13212494,metalness:.78,roughness:.32}),a=new it(new Dn(.065,.055,.085),n);t.add(a);for(const l of[-1,1]){const c=new it(new Dn(.15,.06,.006),s);c.position.set(l*.115,0,0),t.add(c);for(let h=-2;h<=2;h+=1){const d=new it(new Dn(.002,.055,.007),r);d.position.set(l*.115+h*.026,0,.004),t.add(d)}}const o=new it(new nl(.045,.025,12,1,!0),new ln({color:14542057,metalness:.82,roughness:.28,side:Vt}));return o.rotation.x=Math.PI/2,o.position.set(0,.042,0),t.add(o),t.userData.celestialName=i,t}function Ia(i,e,t=2){const n=new rt;n.setAttribute("position",new ct(new Float32Array(t*3),3).setUsage(Gr)),n.setDrawRange(0,t);const s=new Mh(n,new $i({color:i,transparent:!0,opacity:e,depthWrite:!1}));return s.frustumCulled=!1,s}function Na(i,e,t,n,s){const r=e*Math.sin(t),a=e*Math.cos(t),o=Math.cos(n),l=Math.sin(n);return s.set(i*o+a*l,r,-i*l+a*o)}function pg(i,e){const t={dwarfs:new ke,moons:new ke,asteroids:new ke,transneptunian:new ke,comets:new ke,medium:new ke,spacecraft:new ke,heliosphere:new ke};for(const[I,j]of Object.entries(t))j.name=I,i.add(j);const n=new Map(e.map(I=>[I.name,I])),s=new Map,r=[],a=[],o=[],l=[],c=[],h=[{name:"CERES",distance:6.12,radius:.052,color:9801606,speed:.17,phase:1.1,inclination:.08,ascendingNode:.7},{name:"PLUTO",distance:16.2,radius:.078,color:12160373,speed:.032,phase:2.4,inclination:.28,ascendingNode:1.9},{name:"HAUMEA",distance:17.1,radius:.069,color:12368306,speed:.028,phase:4.2,flattening:.56,hasRing:!0,inclination:.18,ascendingNode:2.8},{name:"MAKEMAKE",distance:18.45,radius:.066,color:11103557,speed:.025,phase:.55,inclination:.22,ascendingNode:4.1},{name:"ERIS",distance:20.6,radius:.075,color:13226198,speed:.021,phase:5.4,inclination:.31,ascendingNode:5.3}];for(const I of h){const j=new ke;j.rotation.order="YXZ",j.rotation.y=I.phase,j.rotation.z=I.inclination,j.rotation.x=I.ascendingNode,i.add(j);const S=Rr(t.dwarfs,I.distance,.1);S.rotation.order="YXZ",S.rotation.z=I.inclination,S.rotation.x=I.ascendingNode;const p=Es(I.radius,I.color);p.position.set(I.distance,0,0),I.flattening?p.scale.set(1.25*1.7,I.flattening*1.7,.9*1.7):p.scale.setScalar(1.7),j.add(p);const U=Gi(I.name,"rgba(225,235,250,0.92)");if(U.position.set(I.distance,I.radius*1.7+.2,0),U.scale.set(.65,.12,1),j.add(U),I.hasRing){const W=new it(new Is(I.radius*1.25,I.radius*1.7,72),new ln({color:12170409,transparent:!0,opacity:.25,side:Vt,roughness:.8,depthWrite:!1}));W.rotation.x=-Math.PI/2,p.add(W)}const z={name:I.name,mesh:p,pivot:j,radius:I.radius,distance:I.distance,speed:I.speed,phase:I.phase};s.set(I.name,z),r.push({pivot:j,mesh:p,speed:I.speed,spin:Ue(.25,.8)})}const d={JUPITER:[{inner:.36,outer:.4,color:12429706,opacity:.17},{inner:.405,outer:.43,color:9273451,opacity:.1}],SATURN:[{inner:.67,outer:.73,color:15390897,opacity:.44},{inner:.75,outer:.92,color:13218189,opacity:.26},{inner:.95,outer:1.04,color:15062453,opacity:.34}],URANUS:[{inner:.37,outer:.405,color:8427938,opacity:.18}],NEPTUNE:[{inner:.235,outer:.265,color:7902387,opacity:.18},{inner:.275,outer:.3,color:5466503,opacity:.1}]};for(const[I,j]of Object.entries(d)){const S=n.get(I);if(!S)continue;const p=new ke;S.mesh.add(p);for(const U of j){const z=new it(new Is(U.inner,U.outer,128),new ln({color:U.color,side:Vt,transparent:!0,opacity:U.opacity,roughness:.9,metalness:.05,depthWrite:!1}));z.rotation.x=-Math.PI/2,z.rotation.z=Ue(-.1,.1),p.add(z)}}const f=new Map,m=[{name:"243 IDA",key:"IDA",distance:6.02,radius:.028,color:9339253,speed:.18,phase:.9},{name:"65803 DIDYMOS",key:"DIDYMOS",distance:4.92,radius:.026,color:10259064,speed:.32,phase:2.3},{name:"BENNU",key:"BENNU",distance:3.82,radius:.019,color:7826272,speed:.48,phase:4.5},{name:"RYUGU",key:"RYUGU",distance:4.16,radius:.022,color:6708308,speed:.41,phase:1.8},{name:"APOPHIS",key:"APOPHIS",distance:4.65,radius:.018,color:10522494,speed:.35,phase:5.4}];for(const I of m){const j=new ke;j.rotation.y=I.phase,t.asteroids.add(j),Rr(t.asteroids,I.distance,.085,Ue(-.08,.08));const S=Es(I.radius,I.color);S.position.set(I.distance,0,0),S.userData.celestialName=I.name,j.add(S),f.set(I.key,S);const p=Gi(I.name,"rgba(191,180,166,0.9)");p.position.set(I.distance,I.radius+.1,0),p.scale.set(.7,.12,1),j.add(p),r.push({pivot:j,mesh:S,speed:I.speed,spin:Ue(.2,.75)})}const g=[{name:"Moon",parent:"EARTH",radius:.044,distance:.43,speed:1.8,color:12172742},{name:"Phobos",parent:"MARS",radius:.014,distance:.18,speed:2.6,color:7828333},{name:"Deimos",parent:"MARS",radius:.011,distance:.25,speed:1.5,color:10261124},{name:"Io",parent:"JUPITER",radius:.034,distance:.56,speed:1.15,color:14202463},{name:"Europa",parent:"JUPITER",radius:.029,distance:.72,speed:.84,color:13156776},{name:"Ganymede",parent:"JUPITER",radius:.047,distance:.91,speed:.62,color:9208178},{name:"Callisto",parent:"JUPITER",radius:.042,distance:1.12,speed:.46,color:6116428},{name:"Amalthea",parent:"JUPITER",radius:.014,distance:.43,speed:1.5,color:10115392},{name:"Titan",parent:"SATURN",radius:.047,distance:.72,speed:.62,color:12093256},{name:"Enceladus",parent:"SATURN",radius:.019,distance:.47,speed:1.2,color:14542571},{name:"Rhea",parent:"SATURN",radius:.027,distance:.89,speed:.48,color:12895944},{name:"Iapetus",parent:"SATURN",radius:.024,distance:1.16,speed:.32,color:10787468},{name:"Mimas",parent:"SATURN",radius:.015,distance:.38,speed:1.6,color:11909568},{name:"Titania",parent:"URANUS",radius:.027,distance:.42,speed:.64,color:11184547},{name:"Oberon",parent:"URANUS",radius:.025,distance:.56,speed:.48,color:9210242},{name:"Ariel",parent:"URANUS",radius:.018,distance:.34,speed:.85,color:12633023},{name:"Triton",parent:"NEPTUNE",radius:.031,distance:.46,speed:-.72,color:13156792},{name:"Nereid",parent:"NEPTUNE",radius:.014,distance:.68,speed:.32,color:9866627},{name:"Charon",parent:"PLUTO",radius:.036,distance:.16,speed:.58,color:11183261},{name:"Nix",parent:"PLUTO",radius:.01,distance:.23,speed:.42,color:12104616},{name:"Hydra",parent:"PLUTO",radius:.01,distance:.28,speed:.33,color:12104616},{name:"Hiʻiaka",parent:"HAUMEA",radius:.014,distance:.15,speed:.78,color:12171442},{name:"Namaka",parent:"HAUMEA",radius:.01,distance:.2,speed:.55,color:9276809},{name:"Dysnomia",parent:"ERIS",radius:.016,distance:.17,speed:.62,color:10922413},{name:"MK2",parent:"MAKEMAKE",radius:.01,distance:.14,speed:.7,color:9405047},{name:"Dactyl",parent:"IDA",radius:.009,distance:.052,speed:1.8,color:11182228},{name:"Dimorphos",parent:"DIDYMOS",radius:.011,distance:.061,speed:2.4,color:9142645}],_=new Map,x=new Map;for(const I of e)_.set(I.name,I.mesh);for(const I of s.values())_.set(I.name,I.mesh);for(const[I,j]of f)_.set(I,j);for(const I of g){const j=_.get(I.parent);j&&x.set(I.name,fg(j,t.moons,I,a))}function u(I,j,S,p,U,z){const W=new ke;t.spacecraft.add(W);const V=new ke;W.add(V);const xe=Math.cos(U),ne=new w(xe*Math.cos(p),Math.sin(U),xe*Math.sin(p)).normalize();V.position.copy(ne).multiplyScalar(S*1.012),V.quaternion.setFromUnitVectors(new w(0,1,0),ne);const Se=Ua(I,13217148);Se.scale.setScalar(z),V.add(Se),a.push({anchor:W,orbit:V,parent:j,mesh:Se,speed:0,spin:0})}const y=n.get("MARS");y&&(u("VIKING 1 LANDER",y.mesh,.105*2.4,.55,.22,.22),u("VIKING 2 LANDER",y.mesh,.105*2.4,2.65,-.18,.22),u("INSIGHT LANDER",y.mesh,.105*2.4,4.7,.08,.22));const E=x.get("Titan");E&&u("HUYGENS LANDER",E,.047*1.75,1.2,.3,.075);const T=[{parent:"JUPITER",count:50},{parent:"SATURN",count:58},{parent:"URANUS",count:28},{parent:"NEPTUNE",count:26},{parent:"EARTH",count:3},{parent:"MARS",count:5},{parent:"PLUTO",count:3},{parent:"HAUMEA",count:2},{parent:"MAKEMAKE",count:2},{parent:"ERIS",count:3}];let R=0;for(const I of T){const j=_.get(I.parent);if(j)for(let S=0;S<I.count;S+=1){const p=(Ue(.34,.98)+S*.009)*1.8,U=new ke;t.moons.add(U);const z=new ke;z.rotation.y=Math.random()*Math.PI*2,z.rotation.z=Ue(-.24,.24),U.add(z);const W=Es(Ue(.0065,.0125),[9670537,12104358,7305086,10323830][S%4]);W.position.set(p,0,0),z.add(W),a.push({anchor:U,orbit:z,parent:j,mesh:W,speed:Ue(.22,1.35)*(Math.random()<.5?-1:1),spin:Ue(-.5,.5)}),R+=1}}const A=[7826787,10194298,11970708,6446944,9142131],C=new ke;t.asteroids.add(C),gs(C,3200,5.5,6.88,1.15,A,1.05,.24,.035,void 0,[{center:5.82,width:.075},{center:6.06,width:.055},{center:6.39,width:.065}],.16),vr(C,280,()=>Ic(5.5,6.88,.62,.16),.022,.043,A),c.push({group:C,speed:.012});const N=new ke;t.asteroids.add(N),dg(N,220,[12756363,9208184,11183002],1,.28),vr(N,80,()=>{const I=Ue(2.7,5.5),j=Ue(.12,.58),S=Math.random()*Math.PI*2,p=Ue(-.42,.42),U=I*Math.sqrt(1-j*j)*Math.sin(S);return new w(I*(Math.cos(S)-j),U*Math.sin(p),U*Math.cos(p))},.02,.038,[12756363,9208184,11183002]),c.push({group:N,speed:.018});const b=new ke;t.asteroids.add(b),gs(b,1050,6.82,7.48,.48,[9865337,7628636,11706763],1.15,.34,.06,[5.2+Math.PI/3,5.2-Math.PI/3],void 0,.13),vr(b,90,()=>{const j=(Math.random()<.5?5.2+Math.PI/3:5.2-Math.PI/3)+(Math.random()-.5)*.72,S=Ue(6.82,7.48),p=Ue(-.42,.42)+S*Math.sin(Ue(-.13,.13))*Math.sin(j);return new w(Math.cos(j)*S,p,Math.sin(j)*S)},.02,.038,[9865337,7628636,11706763]),c.push({group:b,speed:.21});const v=new ke;t.asteroids.add(v),gs(v,680,10.1,14.9,2.8,[9342353,9337964,7173513],1.2,.28,.22,void 0,void 0,.18),vr(v,110,()=>Ic(10.1,14.9,2.8,.22),.022,.043,[9342353,9337964,7173513]),c.push({group:v,speed:.055});const L=new ke;t.transneptunian.add(L),gs(L,4200,15.2,19.4,1.25,[11118242,8945024,7965339,10125683],1.3,.36,.025,void 0,void 0,.1),c.push({group:L,speed:.012});const B=new ke;t.transneptunian.add(B),gs(B,1600,19.1,30,4.2,[10062985,8226197,10329249],1.2,.3,.22,void 0,void 0,.28),c.push({group:B,speed:.006});const H=[{name:"SEDNA",distance:34,radius:.045,color:10251871,speed:.0035,phase:1.8},{name:"GONGGONG",distance:27.5,radius:.038,color:9133909,speed:.005,phase:4.4},{name:"QUAOAR",distance:23.2,radius:.034,color:10058857,speed:.008,phase:2.6},{name:"ORCUS",distance:21.7,radius:.031,color:9147554,speed:.009,phase:5.1}];for(const I of H){const j=new ke;j.rotation.y=I.phase,t.transneptunian.add(j),Rr(t.transneptunian,I.distance,.11,Ue(-.22,.22));const S=Es(I.radius,I.color);S.position.set(I.distance,Ue(-.4,.4),0),S.scale.setScalar(1.25),j.add(S);const p=Gi(I.name,"rgba(180,202,230,0.88)");p.position.set(I.distance,I.radius*1.25+.1,0),p.scale.set(.62,.11,1),j.add(p),r.push({pivot:j,mesh:S,speed:I.speed,spin:Ue(.15,.5)})}const Y=new ke;t.transneptunian.add(Y),Nc(Y,3800,130,260,[9215938,7901364,11642784,7899549],1.1,.2),c.push({group:Y,speed:8e-4});const q=[{name:"HALLEY",a:18.2,e:.967,inclination:.42,node:.28,period:.016,phase:.2,color:10272232,tail:2.3},{name:"ENCKE",a:6.9,e:.85,inclination:.12,node:1.72,period:.19,phase:2.2,color:11978460,tail:.85},{name:"HALE-BOPP",a:25,e:.995,inclination:.31,node:2.48,period:.008,phase:4.2,color:13813685,tail:3.4},{name:"67P / CHURYUMOV-GERASIMENKO",a:8.9,e:.64,inclination:.25,node:3.36,period:.09,phase:1.5,color:7828332,tail:1.1},{name:"BORRELLY",a:10.2,e:.62,inclination:.38,node:4.12,period:.065,phase:5.3,color:7170920,tail:1.2},{name:"WILD 2",a:9.7,e:.54,inclination:.09,node:5.18,period:.075,phase:3.2,color:8749435,tail:1},{name:"LEONARD",a:22,e:.98,inclination:.58,node:5.78,period:.011,phase:.9,color:10135996,tail:2.6}],Z=new Map,ee=24,X=48;for(const I of q){const j=new it(new Xn(.035,12,10),new Hr({color:I.color}));t.comets.add(j),j.userData.celestialName=I.name,Z.set(I.name,j);const S=[];for(let xe=0;xe<260;xe+=1){const ne=xe/260*Math.PI*2,Se=I.a*(Math.cos(ne)-I.e),ve=I.a*Math.sqrt(1-I.e*I.e)*Math.sin(ne);S.push(Na(Se,ve,I.inclination,I.node,new w))}const p=new Or(new rt().setFromPoints(S),new $i({color:I.color,transparent:!0,opacity:.2,depthWrite:!1}));p.frustumCulled=!1,t.comets.add(p);const U=Ia(I.color,.62,X);U.geometry.setDrawRange(0,0),t.comets.add(U);const z=Ia(7522815,.66,ee),W=Ia(16765851,.38,ee);t.comets.add(z,W);const V=Gi(I.name,"rgba(168,213,255,0.94)");V.scale.set(.82,.15,1),t.comets.add(V),j.userData.label=V,o.push({head:j,orbitA:I.a,eccentricity:I.e,inclination:I.inclination,period:I.period,phase:I.phase,ascendingNode:I.node,orbitTrack:p,motionTrail:U,history:[],historyTimer:0,tailIon:z,tailDust:W,tailLength:I.tail,tailSegments:ee})}const se=Z.get("67P / CHURYUMOV-GERASIMENKO");se&&u("PHILAE LANDER",se,.035,2.1,.18,.045);const ae=new ke;t.medium.add(ae),Nc(ae,2600,.65,26,[8293020,10129539,12102289,6452623],.95,.22),c.push({group:ae,speed:.0035});const ye=460,Xe=new Float32Array(ye*3),$e=[],Qe=new Float32Array(ye),et=new Float32Array(ye);for(let I=0;I<ye;I+=1){const j=Ue(-1,1),S=Math.random()*Math.PI*2,p=Math.sqrt(1-j*j);$e.push(new w(Math.cos(S)*p,j,Math.sin(S)*p)),Qe[I]=Math.random(),et[I]=Ue(.035,.12)}const K=new rt;K.setAttribute("position",new ct(Xe,3).setUsage(Gr));const J=new Ji(K,new fi({color:16762235,size:1.25,sizeAttenuation:!1,transparent:!0,opacity:.32,depthWrite:!1}));J.frustumCulled=!1,t.medium.add(J);const fe=32;for(let I=0;I<3;I+=1){const j=[];for(let p=0;p<240;p+=1){const U=p/240*Math.PI*2,z=Math.cos(U)*fe,W=Math.sin(U)*fe;I===0?j.push(new w(z,W,0)):I===1?j.push(new w(z,0,W)):j.push(new w(0,z,W))}const S=new Or(new rt().setFromPoints(j),new $i({color:4951997,transparent:!0,opacity:.085,depthWrite:!1}));t.heliosphere.add(S)}const Ie=Gi("HELIOPAUSE","rgba(116,173,218,0.8)");Ie.position.set(0,fe*.78,fe*.42),Ie.scale.set(1.6,.28,1),t.heliosphere.add(Ie);const Ee=[{name:"VOYAGER 1",x:29,y:2.2,z:-8,speed:.014,phase:.2,drift:1},{name:"VOYAGER 2",x:-27,y:-1.8,z:11,speed:.012,phase:2.4,drift:.9},{name:"NEW HORIZONS",x:22,y:2.6,z:13,speed:.018,phase:3.5,drift:.8},{name:"PARKER SOLAR PROBE",x:2.1,y:.3,z:-.8,speed:.14,phase:1.2,drift:.24},{name:"JUNO",x:7.8,y:.3,z:.2,speed:.055,phase:3,drift:.22},{name:"CASSINI",x:10.2,y:-.35,z:-.5,speed:.041,phase:4.4,drift:.18}];for(const I of Ee){const j=Ua(I.name);j.position.set(I.x,I.y,I.z),j.scale.setScalar(I.name.startsWith("VOYAGER")?.75:.62),t.spacecraft.add(j);const S=Gi(I.name,"rgba(174,217,255,0.9)");S.scale.set(.88,.15,1),j.add(S),S.position.set(0,.15,0),l.push({group:j,base:new w(I.x,I.y,I.z),travel:new w(I.z*.3,I.drift,-I.x*.25),speed:I.speed,phase:I.phase})}const Ve=n.get("EARTH");if(Ve)for(const[I,j,S]of[["HUBBLE SPACE TELESCOPE",.22,1.7],["INTERNATIONAL SPACE STATION",.28,2]]){const p=new ke;t.spacecraft.add(p);const U=new ke;p.add(U);const z=Ua(I,13950183);z.scale.setScalar(.55),z.position.set(j*2,0,0),U.add(z),a.push({anchor:p,orbit:U,parent:Ve.mesh,mesh:z,speed:S,spin:.2})}const Mt=n.get("MARS");if(Mt)for(const[I,j]of[["PERSEVERANCE",.25],["CURIOSITY",2.2]]){const S=new ke,p=new it(new Dn(.034,.018,.046),new ln({color:12951658,metalness:.45,roughness:.6}));S.add(p);const U=new it(new Xr(.0035,.004,.025,8),new ln({color:13949407,metalness:.7,roughness:.3}));U.position.y=.018,S.add(U),S.position.set(Math.cos(j)*.1*2.4,Math.sin(j)*.1*2.4,.045*2.4),S.scale.setScalar(1.35),S.rotation.z=j,S.userData.celestialName=I;const z=new ke;t.spacecraft.add(z);const W=new ke;z.add(W),W.add(S),a.push({anchor:z,orbit:W,parent:Mt.mesh,mesh:S,speed:0,spin:0})}const Ge={dwarfPlanets:h.length,namedMoons:g.length,generatedMoonlets:R,namedAsteroids:m.length,smallBodies:17350,comets:q.length,spacecraft:Ee.length+4+5},qe=new w,P=new w,He=new w,Fe=new w,Ze=new w,pe=new w;function ut(I,j){for(const p of r)p.pivot.rotation.y+=p.speed*I,p.mesh.rotation.y+=p.spin*I;i.updateMatrixWorld(!0);for(const p of a){const U=p.parent.getWorldPosition(new w);i.worldToLocal(U),p.anchor.position.copy(U),p.orbit.rotation.y+=p.speed*I,p.mesh.rotation.y+=p.spin*I}for(const p of c)p.group.rotation.y+=p.speed*I;for(const p of o){const U=j*p.period+p.phase;let z=U;for(let be=0;be<5;be+=1)z-=(z-p.eccentricity*Math.sin(z)-U)/(1-p.eccentricity*Math.cos(z));const W=p.orbitA,V=p.eccentricity,xe=Math.sqrt(1-V*V),ne=Math.cos(z),Se=Math.sin(z),ve=W*(ne-V),Q=W*xe*Se;Na(ve,Q,p.inclination,p.ascendingNode,qe),p.head.position.copy(qe),P.copy(qe).normalize();const ie=p.period/(1-V*ne),Ce=-W*Se*ie,Ae=W*xe*ne*ie;Na(Ce,Ae,p.inclination,p.ascendingNode,He),Fe.copy(He).normalize(),p.historyTimer+=I,p.historyTimer>=.075&&(p.historyTimer%=.075,p.history.push(qe.clone()),p.history.length>X&&p.history.shift());const ue=p.motionTrail.geometry.getAttribute("position");for(let be=0;be<p.history.length;be+=1){const Oe=p.history[be];ue.setXYZ(be,Oe.x,Oe.y,Oe.z)}ue.needsUpdate=!0,p.motionTrail.geometry.setDrawRange(0,p.history.length),p.motionTrail.material.opacity=.12+.48*(p.history.length/X);const De=qe.length(),D=1-Gt.smoothstep(De,4.5,24),ce=p.tailLength*(.04+D*1.35),oe=p.tailIon.material,le=p.tailDust.material;oe.opacity=.015+D*.74,le.opacity=.01+D*.46;const te=p.tailIon.geometry.getAttribute("position"),$=p.tailDust.geometry.getAttribute("position");for(let be=0;be<p.tailSegments;be+=1){const Oe=be/(p.tailSegments-1),Je=1-Oe;Ze.copy(qe).addScaledVector(P,ce*Oe);const Kt=Math.sin(j*3.2+Oe*7+p.phase)*.012*D*Oe;Ze.addScaledVector(Fe,Kt),te.setXYZ(be,Ze.x,Ze.y,Ze.z),pe.copy(qe).addScaledVector(P,ce*.78*Oe).addScaledVector(Fe,ce*.34*Oe*Oe);const Ht=Math.sin(j*1.7+Oe*5.5+p.phase)*.025*D*Oe;pe.addScaledVector(Fe,Ht),pe.addScaledVector(P,-ce*.08*Oe*Oe*(1-Je)),$.setXYZ(be,pe.x,pe.y,pe.z)}te.needsUpdate=!0,$.needsUpdate=!0;const _e=p.head.userData.label;_e&&_e.position.copy(qe).add(new w(0,.22,0))}const S=K.getAttribute("position");for(let p=0;p<ye;p+=1){const z=1.35+(Qe[p]+j*et[p])%1*26,W=$e[p];S.setXYZ(p,W.x*z,W.y*z,W.z*z)}S.needsUpdate=!0;for(const p of l){const U=Math.sin(j*p.speed+p.phase);p.group.position.copy(p.base).addScaledVector(p.travel,U),p.group.rotation.y+=I*.16}}return{layers:t,update:ut,counts:Ge}}const Vs=`
  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i);
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float x00 = mix(n000, n100, f.x);
    float x10 = mix(n010, n110, f.x);
    float x01 = mix(n001, n101, f.x);
    float x11 = mix(n011, n111, f.x);
    return mix(mix(x00, x10, f.y), mix(x01, x11, f.y), f.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int octave = 0; octave < 5; octave++) {
      value += noise3(p) * amplitude;
      p = p * 2.03 + 17.17;
      amplitude *= 0.49;
    }
    return value;
  }
`,Lh=`
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vLocalPosition = position;
    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);

    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;

    gl_Position = projectionMatrix * viewPosition;
  }
`,mg=`
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  ${Vs}

  void main() {
    vLocalPosition = position;
    float cellNoise = fbm(position * 11.0 + vec3(0.0, uTime * 0.035, 0.0));
    float bulge = (cellNoise - 0.48) * 0.025;
    vec3 displaced = position + normal * bulge;

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`,xg=`
  uniform float uTime;
  uniform float uStyle;
  uniform float uSeed;

  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  ${Vs}

  void main() {
    vec3 displaced = position;

    // Small real vertex relief gives rocky bodies a broken, non-perfect silhouette.
    if (uStyle < 0.5) {
      float highlands = fbm(position * 22.0 + vec3(uSeed * 3.0));
      float ridges = noise3(position * 48.0 + vec3(2.0, uSeed, 5.0));
      float relief = ((highlands - 0.48) * 0.10 + (ridges - 0.5) * 0.035) * length(position);
      displaced += normal * relief;
    } else if (uStyle > 1.5) {
      float turbulence = fbm(position * 8.0 + vec3(uSeed, uTime * 0.006, 0.0));
      displaced += normal * ((turbulence - 0.5) * 0.008);
    }

    vLocalPosition = displaced;
    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
    vec4 viewPosition = modelViewMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPosition.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vViewPosition = -viewPosition.xyz;

    gl_Position = projectionMatrix * viewPosition;
  }
`,gg=`
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  ${Vs}

  void main() {
    vec3 spherePoint = normalize(vLocalPosition);
    vec3 warpedPoint = spherePoint * 4.2;

    // Convective cells and turbulent plasma flow at several scales.
    vec3 warp = vec3(
      fbm(warpedPoint * 1.4 + vec3(0.0, uTime * 0.055, 0.0)),
      fbm(warpedPoint * 1.4 + vec3(8.2, 3.1, 5.7)),
      fbm(warpedPoint * 1.4 + vec3(4.4, 9.3, 2.6))
    );

    float convection = fbm(warpedPoint * 4.8 + warp * 2.0 + vec3(0.0, uTime * 0.055, uTime * 0.018));
    float granulation = fbm(warpedPoint * 13.0 + warp * 1.8 + vec3(uTime * 0.075, 0.0, uTime * 0.035));
    float filaments = abs(noise3(warpedPoint * 8.5 + warp * 2.7 + vec3(0.0, uTime * 0.06, 0.0)) - 0.5);

    float hotCells = smoothstep(0.36, 0.70, convection);
    float granularLight = smoothstep(0.32, 0.73, granulation);
    float darkLanes = 1.0 - smoothstep(0.02, 0.14, filaments);

    vec3 deepOrange = vec3(0.78, 0.075, 0.006);
    vec3 orange = vec3(1.0, 0.25, 0.018);
    vec3 gold = vec3(1.0, 0.66, 0.12);
    vec3 hotYellow = vec3(1.0, 0.94, 0.62);

    vec3 plasma = mix(deepOrange, orange, hotCells);
    plasma = mix(plasma, gold, granularLight * 0.68);
    plasma = mix(plasma, hotYellow, smoothstep(0.68, 0.86, convection) * 0.72);
    // The photosphere is self-luminous: keep its baseline radiance high everywhere.
    plasma *= 0.90 + granularLight * 0.25;
    plasma *= 1.0 - darkLanes * 0.18;

    // A few slowly evolving sunspot groups break the otherwise spherical surface.
    float spotA = length((spherePoint.xz - vec2(-0.28, 0.28)) * vec2(1.0, 1.6));
    float spotB = length((spherePoint.xz - vec2(0.34, -0.18)) * vec2(1.4, 1.0));
    float spots = (1.0 - smoothstep(0.035, 0.105, spotA)) * 0.55;
    spots += (1.0 - smoothstep(0.025, 0.075, spotB)) * 0.38;
    // Sunspots are local surface features, not a light/shadow boundary.
    plasma *= 1.0 - spots * 0.22;

    // Emit the same base radiance across the entire visible disk. Texture variation
    // comes from plasma convection and granulation, never from an external light vector.
    gl_FragColor = vec4(plasma * 1.62, 1.0);
  }
`,_g=`
  uniform float uTime;
  varying vec3 vLocalPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  ${Vs}

  void main() {
    vec3 p = normalize(vLocalPosition);
    vec3 viewDirection = normalize(vViewPosition);
    float fresnel = 1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0);
    float turbulence = fbm(p * 8.0 + vec3(0.0, uTime * 0.035, 0.0));
    float threads = fbm(p * 19.0 + vec3(uTime * 0.025, 4.0, 2.0));

    float rim = pow(fresnel, 2.4);
    float filaments = smoothstep(0.32, 0.78, threads + turbulence * 0.35);
    float alpha = rim * (0.018 + filaments * 0.075);
    vec3 corona = mix(vec3(0.42, 0.025, 0.002), vec3(1.0, 0.28, 0.025), filaments);

    gl_FragColor = vec4(corona * (0.22 + turbulence * 0.42), alpha);
  }
`,vg=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Mg=`
  uniform float uTime;
  uniform float uOpacity;
  varying vec2 vUv;

  void main() {
    float wave = 0.5 + 0.5 * sin(uTime * 2.4 + vUv.x * 12.0);
    float filament = 0.5 + 0.5 * sin(vUv.x * 38.0 - uTime * 3.2 + sin(vUv.x * 9.0) * 2.0);
    float brightness = 0.5 + wave * 0.28 + filament * 0.22;
    vec3 deep = vec3(0.82, 0.045, 0.004);
    vec3 hot = vec3(1.0, 0.58, 0.12);
    vec3 color = mix(deep, hot, filament * 0.62 + wave * 0.2);
    float edgeFade = smoothstep(0.0, 0.10, vUv.y) * (1.0 - smoothstep(0.90, 1.0, vUv.y));
    float core = 1.0 - smoothstep(0.0, 0.22, abs(vUv.y - 0.5));
    color = mix(color, vec3(1.0, 0.82, 0.48), core * 0.58);
    gl_FragColor = vec4(color * brightness * 1.35, (0.42 + brightness * 0.26) * uOpacity * edgeFade);
  }
`,Sg=`
  uniform float uTime;
  uniform vec3 uAtmosphereColor;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;

  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDirection = normalize(vViewPosition);
    float facing = max(dot(normal, viewDirection), 0.0);
    float rim = pow(1.0 - facing, 2.7);
    float softWave = 0.82 + 0.18 * sin(uTime * 0.7 + normal.y * 8.0);
    float alpha = rim * 0.24 * softWave;
    vec3 color = uAtmosphereColor * (0.45 + rim * 1.5);
    gl_FragColor = vec4(color, alpha);
  }
`,bg=`
  uniform float uTime;
  uniform float uStyle;
  uniform float uSeed;
  uniform vec3 uBaseColor;
  uniform vec3 uDetailColor;
  uniform vec3 uSunPosition;

  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  ${Vs}

  void main() {
    vec3 n = normalize(vLocalPosition);
    vec3 surface = uBaseColor;
    float relief = 0.0;

    if (uStyle < 0.5) {
      // Rocky worlds: mottled mineral regions, eroded ridges, impact basins.
      vec3 p = n * (7.0 + uSeed * 0.31);
      float continents = fbm(p * 2.2);
      float rockGrain = fbm(p * 18.0);
      float fineGrain = noise3(p * 52.0);
      float craterNoise = fbm(p * 10.0 + vec3(3.1, 8.2, uSeed));
      float ridges = abs(noise3(p * 8.0) - 0.5);

      surface = mix(uBaseColor * 0.62, uDetailColor, smoothstep(0.34, 0.68, continents) * 0.72);
      surface *= 0.72 + rockGrain * 0.54 + ridges * 0.28;
      surface *= 0.88 + fineGrain * 0.26;
      surface *= 1.0 - smoothstep(0.66, 0.82, craterNoise) * 0.30;
      relief = (rockGrain - 0.48) * 0.12;
    } else if (uStyle < 1.5) {
      // Earth-like worlds: deep oceans, fragmented continents, moving cloud decks.
      float continentNoise = fbm(n * 5.6 + vec3(uSeed, 2.0, 7.0));
      float landMask = smoothstep(0.43, 0.57, continentNoise);
      float terrain = fbm(n * 17.0);
      vec3 ocean = uBaseColor * vec3(0.43, 0.72, 1.25);
      vec3 land = mix(uDetailColor * 0.62, uDetailColor * 1.34, terrain);
      vec3 desert = vec3(0.47, 0.31, 0.13);
      land = mix(land, desert, smoothstep(0.54, 0.68, terrain) * 0.42);
      surface = mix(ocean, land, landMask);

      float polarIce = smoothstep(0.79, 0.94, abs(n.y));
      surface = mix(surface, vec3(0.78, 0.88, 0.94), polarIce * 0.82);

      float cloudNoise = fbm(n * 18.0 + vec3(uTime * 0.018, uSeed * 3.0, uTime * 0.009));
      float cloudStreak = fbm(n * 34.0 + vec3(-uTime * 0.012, 2.0, uSeed));
      float clouds = smoothstep(0.57, 0.72, cloudNoise + cloudStreak * 0.22);
      surface = mix(surface, vec3(0.82, 0.89, 0.96), clouds * 0.62);
      relief = (terrain - 0.5) * 0.08;
    } else {
      // Gas giants: flowing latitude bands and a rotating storm system.
      float bandWarp = fbm(n * 5.0 + vec3(uTime * 0.012, uSeed, 3.0));
      float latitude = n.y + (bandWarp - 0.5) * 0.11;
      float bands = sin((latitude * (25.0 + uSeed * 1.8) + uSeed) * 3.14159);
      float bandMask = smoothstep(-0.34, 0.44, bands);
      float turbulence = fbm(n * 15.0 + vec3(0.0, uTime * 0.016, uSeed * 2.0));
      surface = mix(uBaseColor * 0.62, uDetailColor * 1.12, bandMask * 0.72);
      surface *= 0.83 + turbulence * 0.38;

      vec2 stormCenter = vec2(0.35 * cos(uSeed), 0.22 * sin(uSeed));
      vec2 stormPoint = n.xz - stormCenter;
      float stormRadius = length(stormPoint * vec2(1.0, 1.65));
      float storm = 1.0 - smoothstep(0.045, 0.18, stormRadius + (turbulence - 0.5) * 0.035);
      float swirl = sin(atan(stormPoint.y, stormPoint.x) * 3.0 + turbulence * 8.0 + uTime * 0.12);
      vec3 stormColor = mix(uDetailColor * 0.48, uDetailColor * 1.25, swirl * 0.5 + 0.5);
      surface = mix(surface, stormColor, storm * 0.92);
      relief = (turbulence - 0.5) * 0.06;
    }

    vec3 normal = normalize(vWorldNormal);
    vec3 lightDirection = normalize(uSunPosition - vWorldPosition);
    vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
    float diffuse = max(dot(normal, lightDirection), 0.0);
    float ambient = 0.21;
    float lighting = ambient + diffuse * 0.98;

    // A restrained broad specular glint and stronger atmospheric rim help
    // the spherical silhouette read as a lit 3D body at system-wide zoom.
    vec3 halfVector = normalize(lightDirection + viewDirection);
    float specular = pow(max(dot(normal, halfVector), 0.0), 28.0) * 0.16;
    float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 3.0);
    vec3 rimColor = uStyle > 0.5 && uStyle < 1.5
      ? vec3(0.10, 0.46, 0.95)
      : mix(uDetailColor, vec3(0.32, 0.42, 0.72), 0.45);

    surface *= lighting;
    surface += vec3(1.0, 0.82, 0.62) * specular;
    surface += rimColor * rim * 0.40;
    surface += vec3(0.012, 0.018, 0.035) * (1.0 - diffuse) * 0.35;
    surface *= 1.0 + relief;

    gl_FragColor = vec4(surface, 1.0);
  }
`;function yg(){return new gt({uniforms:{uTime:{value:0}},vertexShader:mg,fragmentShader:gg,side:xn})}function Eg(){return new gt({uniforms:{uTime:{value:0}},vertexShader:Lh,fragmentShader:_g,side:Ct,transparent:!0,blending:Un,depthWrite:!1,depthTest:!0})}function Uh(){return new gt({uniforms:{uTime:{value:0},uOpacity:{value:0}},vertexShader:vg,fragmentShader:Mg,transparent:!0,blending:Un,depthWrite:!1,depthTest:!0,side:Vt})}function Tg(i){return new gt({uniforms:{uTime:{value:0},uAtmosphereColor:{value:new Re(i)}},vertexShader:Lh,fragmentShader:Sg,side:Ct,transparent:!0,blending:Un,depthWrite:!1,depthTest:!0})}function Ag(i){const e=i.style==="rocky"?0:i.style==="earth"?1:2;return new gt({uniforms:{uTime:{value:0},uStyle:{value:e},uSeed:{value:i.seed},uBaseColor:{value:new Re(i.baseColor)},uDetailColor:{value:new Re(i.detailColor)},uSunPosition:{value:new w(0,0,0)}},vertexShader:xg,fragmentShader:bg,side:xn})}function _s(i,e){const t=i.uniforms.uTime;t&&(t.value=e)}const Kr=document.querySelector("#app"),Ih=document.querySelector("#scene-canvas"),Nh=document.querySelector("#status-label"),No=document.querySelector("#status-dot"),ll=document.querySelector("#center-hint"),Fh=document.querySelector("#reset-button"),Fo=document.querySelector("#layers-toggle"),cl=document.querySelector("#layers-panel");if(!Kr||!Ih||!Nh||!No||!ll||!Fh||!Fo||!cl)throw new Error("The scene could not be initialized: required UI elements are missing.");const ns=new Id;ns.background=new Re(198417);const vn=new qt(44,window.innerWidth/window.innerHeight,.1,4200);vn.position.set(9,18,30);const Pt=new zx({canvas:Ih,antialias:!0,alpha:!1});Pt.setPixelRatio(Math.min(window.devicePixelRatio,2));Pt.setSize(window.innerWidth,window.innerHeight);Pt.outputColorSpace=Rt;Pt.toneMapping=ko;Pt.toneMappingExposure=.98;const Et=new Gx(vn,Pt.domElement);Et.enableDamping=!0;Et.dampingFactor=.055;Et.enablePan=!1;Et.enableZoom=!1;Et.minDistance=8;Et.maxDistance=1120;Et.maxPolarAngle=Math.PI*.49;Et.target.set(0,0,0);Et.update();Pt.domElement.style.touchAction="none";function wg(i){if(i.preventDefault(),!Et.enabled)return;const e=vn.position.clone().sub(Et.target),t=e.length(),n=Gt.clamp(t*Math.exp(i.deltaY*.0012),Et.minDistance,Et.maxDistance);e.setLength(n),vn.position.copy(Et.target).add(e),Et.update()}window.addEventListener("wheel",wg,{passive:!1,capture:!0});ns.add(new jd(7439541,.3));const Oh=new qd(10205672,.62);Oh.position.set(18,14,22);ns.add(Oh);const Oo=ug(ns,vn,Pt),hn=4200,ci=new Float32Array(hn*3),ri=new Float32Array(hn*3),Bh=new Float32Array(hn),zh=new Float32Array(hn),Vh=new Float32Array(hn),hl=new Int32Array(hn).fill(-1);function Rg(){const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d");if(!e)throw new Error("Canvas 2D context is unavailable.");const t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.12,"rgba(255,255,255,0.72)"),t.addColorStop(.35,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new Wr(i);return n.colorSpace=Rt,n}function Cg(){const i=new Float32Array(hn*3),e=new Float32Array(hn*3),t=[],n=[],s=[new Re(16777215),new Re(12179455),new Re(16769469),new Re(8560127),new Re(10420205)];for(let d=0;d<hn;d+=1){const f=new w(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),m=720+Math.random()*330,g=f.x*m,_=f.y*m,x=f.z*m;i.set([g,_,x],d*3),ci.set([g,_,x],d*3);const u=s[Math.floor(Math.random()*s.length)],y=.32+Math.pow(Math.random(),1.45)*1.28;Bh[d]=Math.random()*Math.PI*2,zh[d]=.6+Math.random()*2.8,Vh[d]=Math.random()<.16?.65+Math.random()*.32:.08+Math.random()*.2;const E=u.r*y,T=u.g*y,R=u.b*y;ri.set([E,T,R],d*3),e.set([E,T,R],d*3),Math.random()<.09&&(hl[d]=t.length/3,t.push(g,_,x),n.push(E,T,R))}const r=new rt;r.setAttribute("position",new ct(i,3)),r.setAttribute("color",new ct(e,3));const a=new fi({size:2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.94,depthWrite:!1}),o=new Ji(r,a);o.frustumCulled=!1;const l=new rt;l.setAttribute("position",new ct(new Float32Array(t),3)),l.setAttribute("color",new ct(new Float32Array(n),3));const c=new fi({map:Rg(),size:7.5,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.86,blending:Un,depthWrite:!1}),h=new Ji(l,c);return h.frustumCulled=!1,{points:o,glowPoints:h}}const Gh=Cg(),vi=Gh.points,ul=Gh.glowPoints;ns.add(vi,ul);function Pg(){const i=document.createElement("canvas");i.width=256,i.height=256;const e=i.getContext("2d");if(!e)throw new Error("Canvas 2D context is unavailable.");const t=e.createRadialGradient(128,128,8,128,128,128);t.addColorStop(0,"rgba(255, 245, 190, 0.92)"),t.addColorStop(.18,"rgba(255, 170, 55, 0.55)"),t.addColorStop(.42,"rgba(255, 104, 20, 0.18)"),t.addColorStop(1,"rgba(255, 70, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new Wr(i);return n.colorSpace=Rt,n}const Hh=Pg(),hi=1.12,dl=2,Dg=.72,Lg=.9,Ug=1.65,Fc=2.4,_t=new ke;_t.scale.setScalar(Ug);ns.add(_t);const kh=new kr(new zs({map:Hh,color:16752955,transparent:!0,blending:Un,depthWrite:!1}));kh.scale.set(4.6,4.6,1);_t.add(kh);const Wh=new kr(new zs({map:Hh,color:16761707,transparent:!0,blending:Un,depthWrite:!1}));Wh.scale.set(2.35,2.35,1);_t.add(Wh);const Mi=new ke;Mi.rotation.z=Gt.degToRad(7.25);_t.add(Mi);const Xh=yg(),is=new it(new Xn(hi,128,96),Xh),Yh=Eg(),qh=new it(new Xn(hi*1.055,96,72),Yh);qh.renderOrder=2;Mi.add(qh);is.castShadow=!1;is.receiveShadow=!1;Mi.add(is);const Ig=new Xd(16756815,145,100,2);_t.add(Ig);const jh=[],fl=[],vs=34,Yn=9,Ng=Math.PI*(3-Math.sqrt(5)),Fg=.6180339887498949;function $r(i,e,t=0){const n=i+t*e,r=1-2*(n*Fg%1),a=Math.sqrt(Math.max(0,1-r*r)),o=n*Ng+(Math.random()-.5)*.22;return new w(a*Math.cos(o),r,a*Math.sin(o)).normalize()}function Ns(i){const e=Math.abs(i.y)>.88?new w(1,0,0):new w(0,1,0);return new w().crossVectors(i,e).normalize()}function Og(i){const e=$r(i,Yn),t=Ns(e),n=new rt,s=(vs+1)*2,r=new Float32Array(s*3),a=new Float32Array(s*2),o=[];for(let h=0;h<=vs;h+=1){const d=h/vs,f=h*2;a[f*2]=d,a[f*2+1]=0,a[(f+1)*2]=d,a[(f+1)*2+1]=1,h<vs&&(o.push(f,f+1,f+2),o.push(f+1,f+3,f+2))}n.setAttribute("position",new ct(r,3).setUsage(Gr)),n.setAttribute("uv",new ct(a,2)),n.setIndex(o);const l=Uh();fl.push(l);const c=new it(n,l);c.frustumCulled=!1,c.renderOrder=3,Mi.add(c),jh.push({geometry:n,material:l,direction:e,tangent:t,phase:(i/Yn+Math.random()*.08)%1,cycleSpeed:.12+Math.random()*.11,height:.13+Math.random()*.21,spread:.075+Math.random()*.1,bend:(Math.random()-.5)*.42,segments:vs,cycleIndex:0,index:i})}for(let i=0;i<Yn;i+=1)Og(i);const Fa=new w,Oa=new w,Mr=new w,Sr=new w,Oc=new w,Ms=new w,Bc=new w,zc=new w,pl=new w;function Bg(){vn.getWorldPosition(zc),pl.copy(Mi.worldToLocal(zc.clone())).normalize()}function zg(i){for(const e of jh){const t=i*e.cycleSpeed+e.phase,n=Math.floor(t),s=t-n;n!==e.cycleIndex&&(e.cycleIndex=n,e.direction.copy($r(e.index,Yn,n)),e.tangent.copy(Ns(e.direction)),e.height=.13+Math.random()*.21,e.spread=.075+Math.random()*.1,e.bend=(Math.random()-.5)*.42);const r=Gt.smoothstep(s,.02,.22),a=1-Gt.smoothstep(s,.68,.98),o=r*a,l=e.height*o,c=e.spread*(.45+o*.55),h=Math.cos(c),d=Math.sin(c);Fa.copy(e.direction).multiplyScalar(h).addScaledVector(e.tangent,-d).multiplyScalar(hi*1.006),Oa.copy(e.direction).multiplyScalar(h).addScaledVector(e.tangent,d).multiplyScalar(hi*1.006),Mr.copy(e.direction).multiplyScalar(hi+l).addScaledVector(e.tangent,e.bend*l);const f=e.geometry.getAttribute("position");for(let m=0;m<=e.segments;m+=1){const g=m/e.segments,_=1-g;Sr.copy(Fa).multiplyScalar(_*_).addScaledVector(Mr,2*_*g).addScaledVector(Oa,g*g);const x=Math.sin(i*2.6+e.phase*Math.PI*2+g*5)*.018*o*Math.sin(Math.PI*g);Sr.addScaledVector(e.tangent,x),Oc.copy(Mr).sub(Fa).multiplyScalar(2*_).addScaledVector(Oa.clone().sub(Mr),2*g),Bc.copy(pl),Ms.crossVectors(Oc,Bc).normalize(),Ms.lengthSq()<1e-4&&Ms.copy(e.tangent);const u=Math.pow(Math.sin(Math.PI*g),.72),y=(.003+o*.018)*u,E=Sr.clone().addScaledVector(Ms,y),T=Sr.clone().addScaledVector(Ms,-y);f.setXYZ(m*2,E.x,E.y,E.z),f.setXYZ(m*2+1,T.x,T.y,T.z)}f.needsUpdate=!0,e.material.uniforms.uTime.value=i+e.phase*12,e.material.uniforms.uOpacity.value=o}}const Zh=[],Br=14,Ss=18;function Vg(i){const e=$r(Yn+i,Yn+Br),t=Ns(e),n=(Ss+1)*2,s=new Float32Array(n*3),r=new Float32Array(n*2),a=[];for(let h=0;h<=Ss;h+=1){const d=h/Ss,f=h*2;r[f*2]=d,r[f*2+1]=0,r[(f+1)*2]=d,r[(f+1)*2+1]=1,h<Ss&&(a.push(f,f+1,f+2),a.push(f+1,f+3,f+2))}const o=new rt;o.setAttribute("position",new ct(s,3).setUsage(Gr)),o.setAttribute("uv",new ct(r,2)),o.setIndex(a);const l=Uh();fl.push(l);const c=new it(o,l);c.frustumCulled=!1,c.renderOrder=4,Mi.add(c),Zh.push({geometry:o,material:l,direction:e,side:t,phase:(i/Br+Math.random()*.06)%1,speed:.17+Math.random()*.1,length:.28+Math.random()*.34,bend:(Math.random()-.5)*.18,segments:Ss,cycleIndex:0,index:i})}for(let i=0;i<Br;i+=1)Vg(i);const Ba=new w;function Gg(i){for(const e of Zh){const t=i*e.speed+e.phase,n=Math.floor(t),s=t-n;n!==e.cycleIndex&&(e.cycleIndex=n,e.direction.copy($r(Yn+e.index,Yn+Br,n)),e.side.copy(Ns(e.direction)),e.length=.28+Math.random()*.34,e.bend=(Math.random()-.5)*.18);const r=Gt.smoothstep(s,.04,.26),a=1-Gt.smoothstep(s,.65,.96),o=r*a,l=e.length*o,c=e.geometry.getAttribute("position");e.side.crossVectors(e.direction,pl).normalize(),e.side.lengthSq()<1e-4&&e.side.copy(Ns(e.direction));for(let h=0;h<=e.segments;h+=1){const d=h/e.segments,f=Math.sin(i*3.1+d*9+e.phase*14);Ba.copy(e.direction).multiplyScalar(hi*1.004+l*d).addScaledVector(e.side,e.bend*o*d*d+f*.012*o*d);const m=Math.pow(1-d,1.25)*Math.sin(Math.PI*(d*.92+.04)),g=(.003+o*.018)*m,_=Ba.clone().addScaledVector(e.side,g),x=Ba.clone().addScaledVector(e.side,-g);c.setXYZ(h*2,_.x,_.y,_.z),c.setXYZ(h*2+1,x.x,x.y,x.z)}c.needsUpdate=!0,e.material.uniforms.uTime.value=i+e.phase*10,e.material.uniforms.uOpacity.value=o*.72}}const Vc=[{name:"MERCURY",distance:2.15,radius:.085,color:"#96918a",detail:"#ded3c3",textureStyle:"rocky",orbitSpeed:.92,rotationSpeed:.35,phase:.2,inclination:.12,ascendingNode:.35},{name:"VENUS",distance:3.05,radius:.125,color:"#bd8750",detail:"#f3c78b",textureStyle:"rocky",orbitSpeed:.68,rotationSpeed:-.16,phase:1.45,inclination:-.075,ascendingNode:1.4},{name:"EARTH",distance:4.15,radius:.14,color:"#2f73bd",detail:"#70b77b",textureStyle:"earth",orbitSpeed:.5,rotationSpeed:.95,phase:2.65,inclination:.035,ascendingNode:2.35},{name:"MARS",distance:5.25,radius:.105,color:"#b95132",detail:"#e99a68",textureStyle:"rocky",orbitSpeed:.39,rotationSpeed:.85,phase:4.2,inclination:.08,ascendingNode:3.1},{name:"JUPITER",distance:7.15,radius:.34,color:"#c18d65",detail:"#70432e",textureStyle:"bands",orbitSpeed:.21,rotationSpeed:1.2,phase:5.2,inclination:-.055,ascendingNode:4.2},{name:"SATURN",distance:9.55,radius:.29,color:"#d6b77d",detail:"#8c704b",textureStyle:"bands",orbitSpeed:.15,rotationSpeed:.9,phase:3.35,inclination:.1,ascendingNode:5.1},{name:"URANUS",distance:12,radius:.21,color:"#75c6ce",detail:"#d0ffff",textureStyle:"bands",orbitSpeed:.105,rotationSpeed:-.56,phase:.95,inclination:-.075,ascendingNode:.8},{name:"NEPTUNE",distance:14.35,radius:.22,color:"#386cce",detail:"#a0b9ff",textureStyle:"bands",orbitSpeed:.082,rotationSpeed:.82,phase:4.65,inclination:.07,ascendingNode:3.8}],Kn=[],Kh=[],$h=[],Gc=new w;function Hg(i,e){const t=[];for(let a=0;a<240;a+=1){const o=a/240*Math.PI*2;t.push(new w(Math.cos(o)*i,0,Math.sin(o)*i))}const s=new rt().setFromPoints(t),r=new $i({color:8623804,transparent:!0,opacity:e,depthWrite:!1});return new Or(s,r)}function kg(i){const e=document.createElement("canvas");e.width=512,e.height=96;const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context is unavailable.");t.font="500 34px monospace",t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(205, 221, 248, 0.92)",t.fillText(i,256,48);const n=new Wr(e);n.colorSpace=Rt;const s=new kr(new zs({map:n,transparent:!0,depthTest:!1,depthWrite:!1}));return s.scale.set(1.25,.24,1),s.renderOrder=4,s}for(const i of Vc){const e=new ke;e.rotation.order="YXZ",e.rotation.y=i.phase,e.rotation.z=i.inclination,e.rotation.x=i.ascendingNode,_t.add(e);const t=Hg(i.distance,.12);t.rotation.order="YXZ",t.rotation.z=i.inclination,t.rotation.x=i.ascendingNode,_t.add(t);const n=Ag({baseColor:i.color,detailColor:i.detail,style:i.textureStyle,seed:Vc.indexOf(i)+1});Kh.push(n);const s=new it(new Xn(i.radius,96,64),n);s.position.set(i.distance,0,0),s.scale.setScalar(Fc),s.rotation.z=Gt.degToRad(i.name==="URANUS"?82:8),s.castShadow=!1,s.receiveShadow=!1,e.add(s);const a={VENUS:"#ffb36b",EARTH:"#4c9eff",MARS:"#ff784f",NEPTUNE:"#397cff"}[i.name];if(a){const l=Tg(a);$h.push(l);const c=new it(new Xn(i.radius*1.075,64,48),l);c.renderOrder=1,s.add(c)}if(i.ring){const l=new it(new Is(i.ring.inner,i.ring.outer,128),new ln({color:i.ring.color,side:Vt,transparent:!0,opacity:i.ring.opacity,roughness:.82,metalness:.08,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.rotation.z=Gt.degToRad(18),s.add(l)}const o=kg(i.name);o.position.set(i.distance,i.radius*Fc+.4,0),e.add(o),Kn.push({pivot:e,mesh:s,orbitPath:t,orbitRadius:i.distance,orbitPhase:i.phase,orbitSpeed:i.orbitSpeed,rotationSpeed:i.rotationSpeed,name:i.name,isReturning:!1,returnStartAngle:i.phase,returnStartRadius:i.distance,returnElapsed:0})}const ml=pg(_t,Kn),Hc=document.querySelector("#population-summary");if(Hc){const i=ml.counts;Hc.textContent=`${i.dwarfPlanets} dwarf planets · ${i.namedMoons} named moons + ${i.generatedMoonlets} generated moonlets · ${i.namedAsteroids} named asteroids · ${i.smallBodies.toLocaleString()} generated small-body particles · ${i.comets} comets · ${i.spacecraft} spacecraft`}Fo.addEventListener("click",()=>{const i=cl.classList.toggle("is-open");Fo.setAttribute("aria-expanded",String(i))});cl.querySelectorAll("[data-layer]").forEach(i=>{const e=i.dataset.layer;e&&i.addEventListener("change",()=>{ml.layers[e].visible=i.checked})});const jt=new Kd;jt.params.Points={threshold:3};const za=new me,Jh=new rn(new w(0,1,0),-dl),Bo=new rn,Qh=new rn,Hn=new w,zo=new w,Vo=new w,kc=new w,Wc=new w,Va=new w,bs=new w,Ln=[],Ga=new w,Xc=new w,Wg=.8,Xg=.85;let qn=!1,Fs=!1,pi=null,jn=null,mi=!1,wn=0,Os=null;const eu=new w,tu=new w,Go=new w;function nu(i){const e=Pt.domElement.getBoundingClientRect();za.x=(i.clientX-e.left)/e.width*2-1,za.y=-((i.clientY-e.top)/e.height)*2+1,jt.setFromCamera(za,vn)}function Wn(i){const e=i.startsWith("RETURNING");Nh.textContent=i,No.classList.toggle("is-active",i!=="READY"&&!e),No.classList.toggle("is-returning",e)}function Cr(){const i=Kn.some(e=>e.isReturning);!qn&&!mi&&!i&&Ln.length===0&&Wn("READY")}function Yg(i){let e=i;for(;e;){const t=Kn.find(n=>n.mesh===e);if(t)return t;e=e.parent}return null}function Ha(i){qn=!0,Os=i.pointerId,mi=!1,Et.enabled=!1,Pt.domElement.setPointerCapture(i.pointerId),Kr.classList.add("is-dragging"),ll.classList.add("is-hidden"),i.preventDefault()}function qg(i){if(i.button!==0||qn||mi)return;nu(i);const e=jt.intersectObjects(Kn.map(s=>s.mesh),!0);if(e.length>0){const s=Yg(e[0].object);if(s){if(s.mesh.getWorldPosition(Va),Bo.setFromNormalAndCoplanarPoint(new w(0,1,0),Va),!jt.ray.intersectPlane(Bo,Hn))return;pi=s,s.isReturning=!1,Vo.copy(Va).sub(Hn),Vo.y=0,Ha(i),Wn(`MOVING ${s.name}`);return}}if(jt.intersectObject(is,!1).length>0){if(!jt.ray.intersectPlane(Jh,Hn))return;eu.copy(_t.position),zo.copy(_t.position).sub(Hn),zo.y=0,_t.position.y=dl,Fs=!0,Ha(i),Wn("MOVING SUN");return}const n=jt.intersectObject(vi,!1)[0];if(n&&n.index!==void 0){jn=n.index;for(let s=Ln.length-1;s>=0;s-=1)Ln[s].index===jn&&Ln.splice(s,1);Wc.copy(vn.getWorldDirection(new w)),Qh.setFromNormalAndCoplanarPoint(Wc,n.point),Ha(i),Wn("MOVING STAR")}}function jg(i){if(!jt.ray.intersectPlane(Bo,Hn))return;const e=Hn.add(Vo);bs.copy(_t.worldToLocal(e));const t=Gt.clamp(Math.hypot(bs.x,bs.z),hi+.55,16.5);i.pivot.rotation.y=Math.atan2(-bs.z,bs.x),i.mesh.position.x=t,i.mesh.position.z=0}function zr(i,e){const t=vi.geometry.getAttribute("position");t.setXYZ(i,e.x,e.y,e.z),t.needsUpdate=!0;const n=hl[i];if(n>=0){const s=ul.geometry.getAttribute("position");s.setXYZ(n,e.x,e.y,e.z),s.needsUpdate=!0}}function Zg(){if(jn===null||!jt.ray.intersectPlane(Qh,kc))return;const i=vi.worldToLocal(kc.clone());zr(jn,i)}function Kg(i){if(nu(i),qn){if(Os!==i.pointerId)return;if(pi){jg(pi);return}if(jn!==null){Zg();return}if(Fs&&jt.ray.intersectPlane(Jh,Hn)){const s=Hn.add(zo);_t.position.x=Gt.clamp(s.x,-18,18),_t.position.z=Gt.clamp(s.z,-18,18),_t.position.y=dl}return}const e=jt.intersectObjects(Kn.map(s=>s.mesh),!0).length>0,t=jt.intersectObject(is,!1).length>0,n=jt.intersectObject(vi,!1).length>0;Pt.domElement.style.cursor=e||t||n?"grab":"default"}function iu(i){if(!qn||i&&Os!==i.pointerId)return;const e=pi,t=jn,n=Fs;if(qn=!1,Os=null,Et.enabled=!0,Kr.classList.remove("is-dragging"),Pt.domElement.style.cursor="default",e&&(e.isReturning=!0,e.returnStartAngle=e.pivot.rotation.y,e.returnStartRadius=e.mesh.position.x,e.returnElapsed=0,Wn(`RETURNING ${e.name}`)),t!==null){const s=vi.geometry.getAttribute("position");Ln.push({index:t,start:new w(s.getX(t),s.getY(t),s.getZ(t)),elapsed:0}),Wn("RETURNING STAR")}pi=null,jn=null,n?(Fs=!1,mi=!0,wn=0,tu.copy(_t.position),Go.copy(eu),Wn("RETURNING SUN")):!e&&t===null&&Cr()}Pt.domElement.addEventListener("pointerdown",qg);Pt.domElement.addEventListener("pointermove",Kg);window.addEventListener("pointerup",iu);window.addEventListener("pointercancel",iu);function su(){qn=!1,Fs=!1,pi=null,jn=null,mi=!1,wn=0,Os=null,Et.enabled=!0,Kr.classList.remove("is-dragging"),Ln.length=0;for(const i of Kn)i.isReturning=!1,i.pivot.rotation.y=i.orbitPhase,i.mesh.position.set(i.orbitRadius,0,0);for(let i=0;i<hn;i+=1){const e=i*3;zr(i,new w(ci[e],ci[e+1],ci[e+2]))}_t.position.set(0,0,0),Pt.domElement.style.cursor="default",ll.classList.remove("is-hidden"),Wn("READY")}Fh.addEventListener("click",su);window.addEventListener("keydown",i=>{i.key.toLowerCase()==="r"&&su()});const Yc=new Eh;function ru(){const i=Math.min(Yc.getDelta(),.04),e=Yc.elapsedTime;is.rotation.y+=i*.22,_s(Xh,e),_s(Yh,e);for(const s of fl)_s(s,e);Bg(),zg(e),Gg(e),_t.getWorldPosition(Gc);for(const s of Kh)_s(s,e),s.uniforms.uSunPosition.value.copy(Gc);for(const s of $h)_s(s,e);for(const s of Kn){if(s.orbitPhase+=s.orbitSpeed*i,pi!==s)if(s.isReturning){s.returnElapsed+=i;const r=Math.min(s.returnElapsed/Xg,1),a=r*r*(3-2*r),o=Math.atan2(Math.sin(s.orbitPhase-s.returnStartAngle),Math.cos(s.orbitPhase-s.returnStartAngle));s.pivot.rotation.y=s.returnStartAngle+o*a,s.mesh.position.x=Gt.lerp(s.returnStartRadius,s.orbitRadius,a),s.mesh.position.z=0,r>=1&&(s.pivot.rotation.y=s.orbitPhase,s.mesh.position.set(s.orbitRadius,0,0),s.isReturning=!1,Cr())}else s.pivot.rotation.y=s.orbitPhase;s.mesh.rotation.y+=s.rotationSpeed*i}ml.update(i,e);const t=vi.geometry.getAttribute("color"),n=ul.geometry.getAttribute("color");for(let s=0;s<hn;s+=1){const r=(Math.sin(e*zh[s]+Bh[s])+1)*.5,a=Vh[s],o=a>.55?.2+Math.pow(r,12)*(1.15+a*.45):.82+(r-.5)*a*.72,l=ri[s*3]*o,c=ri[s*3+1]*o,h=ri[s*3+2]*o;t.setXYZ(s,l,c,h);const d=hl[s];if(d>=0){const f=o*1.4;n.setXYZ(d,ri[s*3]*f,ri[s*3+1]*f,ri[s*3+2]*f)}}t.needsUpdate=!0,n.needsUpdate=!0;for(let s=Ln.length-1;s>=0;s-=1){const r=Ln[s];r.elapsed+=i;const a=Math.min(r.elapsed/Wg,1),o=a*a*(3-2*a),l=r.index*3;Ga.set(ci[l],ci[l+1],ci[l+2]),Xc.lerpVectors(r.start,Ga,o),zr(r.index,Xc),a>=1&&(zr(r.index,Ga),Ln.splice(s,1),Cr())}if(mi&&!qn){wn=Math.min(wn+i/Dg,1);const s=wn*wn*(3-2*wn);_t.position.lerpVectors(tu,Go,s),_t.position.y+=Math.sin(Math.PI*wn)*Lg,wn>=1&&(_t.position.copy(Go),mi=!1,Cr())}Oo.update(e),Et.update(),Oo.render(),requestAnimationFrame(ru)}function $g(){vn.aspect=window.innerWidth/window.innerHeight,vn.updateProjectionMatrix();const i=Math.min(window.devicePixelRatio,2);Pt.setPixelRatio(i),Pt.setSize(window.innerWidth,window.innerHeight),Oo.resize(window.innerWidth,window.innerHeight,i)}window.addEventListener("resize",$g);ru();
