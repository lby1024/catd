(function(){var __webpack_modules__={34688:function(l,c,e){"use strict";e.d(c,{kG:function(){return h}});function i(x){return Math.floor(Math.log(x)*Math.LOG10E)}function s(x,E){if(typeof x.repeat=="function")return x.repeat(E);for(var w=new Array(E),C=0;C<w.length;C++)w[C]=x;return w.join("")}function o(x,E,w,C){x.get(E)||x.set(E,Object.create(null));var j=x.get(E);j[w]=C}function r(x,E,w){for(var C=0,j=Object.keys(w);C<j.length;C++){var N=j[C];o(x,E,N,w[N])}}function d(x,E,w){return m(x,E,w)[w]}function m(x,E){for(var w=[],C=2;C<arguments.length;C++)w[C-2]=arguments[C];var j=x.get(E);if(!j)throw new TypeError("".concat(E," InternalSlot has not been initialized"));return w.reduce(function(N,D){return N[D]=j[D],N},Object.create(null))}function v(x){return x.type==="literal"}function y(x,E,w){var C=w.value;Object.defineProperty(x,E,{configurable:!0,enumerable:!1,writable:!0,value:C})}var b=/-u(?:-[0-9a-z]{2,8})+/gi;function h(x,E,w){if(w===void 0&&(w=Error),!x)throw new w(E)}},19956:function(l,c,e){"use strict";e.d(c,{A:function(){return E},Z:function(){return i}});function i(w,C){var j=C&&C.cache?C.cache:x,N=C&&C.serializer?C.serializer:b,D=C&&C.strategy?C.strategy:m;return D(w,{cache:j,serializer:N})}function s(w){return w==null||typeof w=="number"||typeof w=="boolean"}function o(w,C,j,N){var D=s(N)?N:j(N),B=C.get(D);return typeof B=="undefined"&&(B=w.call(this,N),C.set(D,B)),B}function r(w,C,j){var N=Array.prototype.slice.call(arguments,3),D=j(N),B=C.get(D);return typeof B=="undefined"&&(B=w.apply(this,N),C.set(D,B)),B}function d(w,C,j,N,D){return j.bind(C,w,N,D)}function m(w,C){var j=w.length===1?o:r;return d(w,this,j,C.cache.create(),C.serializer)}function v(w,C){return d(w,this,r,C.cache.create(),C.serializer)}function y(w,C){return d(w,this,o,C.cache.create(),C.serializer)}var b=function(){return JSON.stringify(arguments)};function h(){this.cache=Object.create(null)}h.prototype.get=function(w){return this.cache[w]},h.prototype.set=function(w,C){this.cache[w]=C};var x={create:function(){return new h}},E={variadic:v,monadic:y}},29585:function(l,c,e){"use strict";e.d(c,{wD:function(){return o},VG:function(){return m},rp:function(){return y},Ii:function(){return j},O4:function(){return d},uf:function(){return v},Wh:function(){return C},Jo:function(){return x},yx:function(){return E},Wi:function(){return h},HI:function(){return w},pe:function(){return b},Qc:function(){return Tt}});var i=e(96583),s;(function(S){S[S.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",S[S.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",S[S.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",S[S.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",S[S.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",S[S.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",S[S.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",S[S.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",S[S.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",S[S.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",S[S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",S[S.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",S[S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",S[S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",S[S.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",S[S.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",S[S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",S[S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",S[S.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",S[S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",S[S.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",S[S.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",S[S.INVALID_TAG=23]="INVALID_TAG",S[S.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",S[S.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",S[S.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(s||(s={}));var o;(function(S){S[S.literal=0]="literal",S[S.argument=1]="argument",S[S.number=2]="number",S[S.date=3]="date",S[S.time=4]="time",S[S.select=5]="select",S[S.plural=6]="plural",S[S.pound=7]="pound",S[S.tag=8]="tag"})(o||(o={}));var r;(function(S){S[S.number=0]="number",S[S.dateTime=1]="dateTime"})(r||(r={}));function d(S){return S.type===o.literal}function m(S){return S.type===o.argument}function v(S){return S.type===o.number}function y(S){return S.type===o.date}function b(S){return S.type===o.time}function h(S){return S.type===o.select}function x(S){return S.type===o.plural}function E(S){return S.type===o.pound}function w(S){return S.type===o.tag}function C(S){return!!(S&&typeof S=="object"&&S.type===r.number)}function j(S){return!!(S&&typeof S=="object"&&S.type===r.dateTime)}function N(S){return{type:o.literal,value:S}}function D(S,ie){return{type:o.number,value:S,style:ie}}var B=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,M=/[\t-\r \x85\u200E\u200F\u2028\u2029]/,Q=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function F(S){var ie={};return S.replace(Q,function(Ce){var _e=Ce.length;switch(Ce[0]){case"G":ie.era=_e===4?"long":_e===5?"narrow":"short";break;case"y":ie.year=_e===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":ie.month=["numeric","2-digit","short","long","narrow"][_e-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":ie.day=["numeric","2-digit"][_e-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":ie.weekday=_e===4?"short":_e===5?"narrow":"short";break;case"e":if(_e<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");ie.weekday=["short","long","narrow","short"][_e-4];break;case"c":if(_e<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");ie.weekday=["short","long","narrow","short"][_e-4];break;case"a":ie.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":ie.hourCycle="h12",ie.hour=["numeric","2-digit"][_e-1];break;case"H":ie.hourCycle="h23",ie.hour=["numeric","2-digit"][_e-1];break;case"K":ie.hourCycle="h11",ie.hour=["numeric","2-digit"][_e-1];break;case"k":ie.hourCycle="h24",ie.hour=["numeric","2-digit"][_e-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":ie.minute=["numeric","2-digit"][_e-1];break;case"s":ie.second=["numeric","2-digit"][_e-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":ie.timeZoneName=_e<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),ie}var H=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function K(S){if(S.length===0)throw new Error("Number skeleton cannot be empty");for(var ie=S.split(H).filter(function(ln){return ln.length>0}),Ce=[],_e=0,be=ie;_e<be.length;_e++){var rt=be[_e],lt=rt.split("/");if(lt.length===0)throw new Error("Invalid number skeleton");for(var Ct=lt[0],Wt=lt.slice(1),Bt=0,Mt=Wt;Bt<Mt.length;Bt++){var hn=Mt[Bt];if(hn.length===0)throw new Error("Invalid number skeleton")}Ce.push({stem:Ct,options:Wt})}return Ce}function Y(S){return S.replace(/^(.*?)-/,"")}var re=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ce=/^(@+)?(\+|#+)?[rs]?$/g,Se=/(\*)(0+)|(#+)(0+)|(0+)/g,se=/^(0+)$/;function Te(S){var ie={};return S[S.length-1]==="r"?ie.roundingPriority="morePrecision":S[S.length-1]==="s"&&(ie.roundingPriority="lessPrecision"),S.replace(ce,function(Ce,_e,be){return typeof be!="string"?(ie.minimumSignificantDigits=_e.length,ie.maximumSignificantDigits=_e.length):be==="+"?ie.minimumSignificantDigits=_e.length:_e[0]==="#"?ie.maximumSignificantDigits=_e.length:(ie.minimumSignificantDigits=_e.length,ie.maximumSignificantDigits=_e.length+(typeof be=="string"?be.length:0)),""}),ie}function le(S){switch(S){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ue(S){var ie;if(S[0]==="E"&&S[1]==="E"?(ie={notation:"engineering"},S=S.slice(2)):S[0]==="E"&&(ie={notation:"scientific"},S=S.slice(1)),ie){var Ce=S.slice(0,2);if(Ce==="+!"?(ie.signDisplay="always",S=S.slice(2)):Ce==="+?"&&(ie.signDisplay="exceptZero",S=S.slice(2)),!se.test(S))throw new Error("Malformed concise eng/scientific notation");ie.minimumIntegerDigits=S.length}return ie}function V(S){var ie={},Ce=le(S);return Ce||ie}function L(S){for(var ie={},Ce=0,_e=S;Ce<_e.length;Ce++){var be=_e[Ce];switch(be.stem){case"percent":case"%":ie.style="percent";continue;case"%x100":ie.style="percent",ie.scale=100;continue;case"currency":ie.style="currency",ie.currency=be.options[0];continue;case"group-off":case",_":ie.useGrouping=!1;continue;case"precision-integer":case".":ie.maximumFractionDigits=0;continue;case"measure-unit":case"unit":ie.style="unit",ie.unit=Y(be.options[0]);continue;case"compact-short":case"K":ie.notation="compact",ie.compactDisplay="short";continue;case"compact-long":case"KK":ie.notation="compact",ie.compactDisplay="long";continue;case"scientific":ie=(0,i.pi)((0,i.pi)((0,i.pi)({},ie),{notation:"scientific"}),be.options.reduce(function(Wt,Bt){return(0,i.pi)((0,i.pi)({},Wt),V(Bt))},{}));continue;case"engineering":ie=(0,i.pi)((0,i.pi)((0,i.pi)({},ie),{notation:"engineering"}),be.options.reduce(function(Wt,Bt){return(0,i.pi)((0,i.pi)({},Wt),V(Bt))},{}));continue;case"notation-simple":ie.notation="standard";continue;case"unit-width-narrow":ie.currencyDisplay="narrowSymbol",ie.unitDisplay="narrow";continue;case"unit-width-short":ie.currencyDisplay="code",ie.unitDisplay="short";continue;case"unit-width-full-name":ie.currencyDisplay="name",ie.unitDisplay="long";continue;case"unit-width-iso-code":ie.currencyDisplay="symbol";continue;case"scale":ie.scale=parseFloat(be.options[0]);continue;case"integer-width":if(be.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");be.options[0].replace(Se,function(Wt,Bt,Mt,hn,ln,Mn){if(Bt)ie.minimumIntegerDigits=Mt.length;else{if(hn&&ln)throw new Error("We currently do not support maximum integer digits");if(Mn)throw new Error("We currently do not support exact integer digits")}return""});continue}if(se.test(be.stem)){ie.minimumIntegerDigits=be.stem.length;continue}if(re.test(be.stem)){if(be.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");be.stem.replace(re,function(Wt,Bt,Mt,hn,ln,Mn){return Mt==="*"?ie.minimumFractionDigits=Bt.length:hn&&hn[0]==="#"?ie.maximumFractionDigits=hn.length:ln&&Mn?(ie.minimumFractionDigits=ln.length,ie.maximumFractionDigits=ln.length+Mn.length):(ie.minimumFractionDigits=Bt.length,ie.maximumFractionDigits=Bt.length),""});var rt=be.options[0];rt==="w"?ie=(0,i.pi)((0,i.pi)({},ie),{trailingZeroDisplay:"stripIfInteger"}):rt&&(ie=(0,i.pi)((0,i.pi)({},ie),Te(rt)));continue}if(ce.test(be.stem)){ie=(0,i.pi)((0,i.pi)({},ie),Te(be.stem));continue}var lt=le(be.stem);lt&&(ie=(0,i.pi)((0,i.pi)({},ie),lt));var Ct=ue(be.stem);Ct&&(ie=(0,i.pi)((0,i.pi)({},ie),Ct))}return ie}var z={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function X(S,ie){for(var Ce="",_e=0;_e<S.length;_e++){var be=S.charAt(_e);if(be==="j"){for(var rt=0;_e+1<S.length&&S.charAt(_e+1)===be;)rt++,_e++;var lt=1+(rt&1),Ct=rt<2?1:3+(rt>>1),Wt="a",Bt=P(ie);for((Bt=="H"||Bt=="k")&&(Ct=0);Ct-- >0;)Ce+=Wt;for(;lt-- >0;)Ce=Bt+Ce}else be==="J"?Ce+="H":Ce+=be}return Ce}function P(S){var ie=S.hourCycle;if(ie===void 0&&S.hourCycles&&S.hourCycles.length&&(ie=S.hourCycles[0]),ie)switch(ie){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var Ce=S.language,_e;Ce!=="root"&&(_e=S.maximize().region);var be=z[_e||""]||z[Ce||""]||z["".concat(Ce,"-001")]||z["001"];return be[0]}var J,ge=new RegExp("^".concat(B.source,"*")),We=new RegExp("".concat(B.source,"*$"));function we(S,ie){return{start:S,end:ie}}var he=!!String.prototype.startsWith,ze=!!String.fromCodePoint,Le=!!Object.fromEntries,Ne=!!String.prototype.codePointAt,_=!!String.prototype.trimStart,pe=!!String.prototype.trimEnd,me=!!Number.isSafeInteger,Re=me?Number.isSafeInteger:function(S){return typeof S=="number"&&isFinite(S)&&Math.floor(S)===S&&Math.abs(S)<=9007199254740991},ot=!0;try{var at=$("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ot=((J=at.exec("a"))===null||J===void 0?void 0:J[0])==="a"}catch(S){ot=!1}var dt=he?function(ie,Ce,_e){return ie.startsWith(Ce,_e)}:function(ie,Ce,_e){return ie.slice(_e,_e+Ce.length)===Ce},Me=ze?String.fromCodePoint:function(){for(var ie=[],Ce=0;Ce<arguments.length;Ce++)ie[Ce]=arguments[Ce];for(var _e="",be=ie.length,rt=0,lt;be>rt;){if(lt=ie[rt++],lt>1114111)throw RangeError(lt+" is not a valid code point");_e+=lt<65536?String.fromCharCode(lt):String.fromCharCode(((lt-=65536)>>10)+55296,lt%1024+56320)}return _e},Oe=Le?Object.fromEntries:function(ie){for(var Ce={},_e=0,be=ie;_e<be.length;_e++){var rt=be[_e],lt=rt[0],Ct=rt[1];Ce[lt]=Ct}return Ce},Ee=Ne?function(ie,Ce){return ie.codePointAt(Ce)}:function(ie,Ce){var _e=ie.length;if(!(Ce<0||Ce>=_e)){var be=ie.charCodeAt(Ce),rt;return be<55296||be>56319||Ce+1===_e||(rt=ie.charCodeAt(Ce+1))<56320||rt>57343?be:(be-55296<<10)+(rt-56320)+65536}},xe=_?function(ie){return ie.trimStart()}:function(ie){return ie.replace(ge,"")},q=pe?function(ie){return ie.trimEnd()}:function(ie){return ie.replace(We,"")};function $(S,ie){return new RegExp(S,ie)}var W;if(ot){var te=$("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");W=function(ie,Ce){var _e;te.lastIndex=Ce;var be=te.exec(ie);return(_e=be[1])!==null&&_e!==void 0?_e:""}}else W=function(ie,Ce){for(var _e=[];;){var be=Ee(ie,Ce);if(be===void 0||Ze(be)||xt(be))break;_e.push(be),Ce+=be>=65536?2:1}return Me.apply(void 0,_e)};var ae=function(){function S(ie,Ce){Ce===void 0&&(Ce={}),this.message=ie,this.position={offset:0,line:1,column:1},this.ignoreTag=!!Ce.ignoreTag,this.locale=Ce.locale,this.requiresOtherClause=!!Ce.requiresOtherClause,this.shouldParseSkeletons=!!Ce.shouldParseSkeletons}return S.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},S.prototype.parseMessage=function(ie,Ce,_e){for(var be=[];!this.isEOF();){var rt=this.char();if(rt===123){var lt=this.parseArgument(ie,_e);if(lt.err)return lt;be.push(lt.val)}else{if(rt===125&&ie>0)break;if(rt===35&&(Ce==="plural"||Ce==="selectordinal")){var Ct=this.clonePosition();this.bump(),be.push({type:o.pound,location:we(Ct,this.clonePosition())})}else if(rt===60&&!this.ignoreTag&&this.peek()===47){if(_e)break;return this.error(s.UNMATCHED_CLOSING_TAG,we(this.clonePosition(),this.clonePosition()))}else if(rt===60&&!this.ignoreTag&&ve(this.peek()||0)){var lt=this.parseTag(ie,Ce);if(lt.err)return lt;be.push(lt.val)}else{var lt=this.parseLiteral(ie,Ce);if(lt.err)return lt;be.push(lt.val)}}}return{val:be,err:null}},S.prototype.parseTag=function(ie,Ce){var _e=this.clonePosition();this.bump();var be=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:o.literal,value:"<".concat(be,"/>"),location:we(_e,this.clonePosition())},err:null};if(this.bumpIf(">")){var rt=this.parseMessage(ie+1,Ce,!0);if(rt.err)return rt;var lt=rt.val,Ct=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ve(this.char()))return this.error(s.INVALID_TAG,we(Ct,this.clonePosition()));var Wt=this.clonePosition(),Bt=this.parseTagName();return be!==Bt?this.error(s.UNMATCHED_CLOSING_TAG,we(Wt,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:o.tag,value:be,children:lt,location:we(_e,this.clonePosition())},err:null}:this.error(s.INVALID_TAG,we(Ct,this.clonePosition())))}else return this.error(s.UNCLOSED_TAG,we(_e,this.clonePosition()))}else return this.error(s.INVALID_TAG,we(_e,this.clonePosition()))},S.prototype.parseTagName=function(){var ie=this.offset();for(this.bump();!this.isEOF()&&Ae(this.char());)this.bump();return this.message.slice(ie,this.offset())},S.prototype.parseLiteral=function(ie,Ce){for(var _e=this.clonePosition(),be="";;){var rt=this.tryParseQuote(Ce);if(rt){be+=rt;continue}var lt=this.tryParseUnquoted(ie,Ce);if(lt){be+=lt;continue}var Ct=this.tryParseLeftAngleBracket();if(Ct){be+=Ct;continue}break}var Wt=we(_e,this.clonePosition());return{val:{type:o.literal,value:be,location:Wt},err:null}},S.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Be(this.peek()||0))?(this.bump(),"<"):null},S.prototype.tryParseQuote=function(ie){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(ie==="plural"||ie==="selectordinal")break;return null;default:return null}this.bump();var Ce=[this.char()];for(this.bump();!this.isEOF();){var _e=this.char();if(_e===39)if(this.peek()===39)Ce.push(39),this.bump();else{this.bump();break}else Ce.push(_e);this.bump()}return Me.apply(void 0,Ce)},S.prototype.tryParseUnquoted=function(ie,Ce){if(this.isEOF())return null;var _e=this.char();return _e===60||_e===123||_e===35&&(Ce==="plural"||Ce==="selectordinal")||_e===125&&ie>0?null:(this.bump(),Me(_e))},S.prototype.parseArgument=function(ie,Ce){var _e=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE,we(_e,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(s.EMPTY_ARGUMENT,we(_e,this.clonePosition()));var be=this.parseIdentifierIfPossible().value;if(!be)return this.error(s.MALFORMED_ARGUMENT,we(_e,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE,we(_e,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:o.argument,value:be,location:we(_e,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE,we(_e,this.clonePosition())):this.parseArgumentOptions(ie,Ce,be,_e);default:return this.error(s.MALFORMED_ARGUMENT,we(_e,this.clonePosition()))}},S.prototype.parseIdentifierIfPossible=function(){var ie=this.clonePosition(),Ce=this.offset(),_e=W(this.message,Ce),be=Ce+_e.length;this.bumpTo(be);var rt=this.clonePosition(),lt=we(ie,rt);return{value:_e,location:lt}},S.prototype.parseArgumentOptions=function(ie,Ce,_e,be){var rt,lt=this.clonePosition(),Ct=this.parseIdentifierIfPossible().value,Wt=this.clonePosition();switch(Ct){case"":return this.error(s.EXPECT_ARGUMENT_TYPE,we(lt,Wt));case"number":case"date":case"time":{this.bumpSpace();var Bt=null;if(this.bumpIf(",")){this.bumpSpace();var Mt=this.clonePosition(),hn=this.parseSimpleArgStyleIfPossible();if(hn.err)return hn;var ln=q(hn.val);if(ln.length===0)return this.error(s.EXPECT_ARGUMENT_STYLE,we(this.clonePosition(),this.clonePosition()));var Mn=we(Mt,this.clonePosition());Bt={style:ln,styleLocation:Mn}}var $n=this.tryParseArgumentClose(be);if($n.err)return $n;var ut=we(be,this.clonePosition());if(Bt&&dt(Bt==null?void 0:Bt.style,"::",0)){var it=xe(Bt.style.slice(2));if(Ct==="number"){var hn=this.parseNumberSkeletonFromString(it,Bt.styleLocation);return hn.err?hn:{val:{type:o.number,value:_e,location:ut,style:hn.val},err:null}}else{if(it.length===0)return this.error(s.EXPECT_DATE_TIME_SKELETON,ut);var St=it;this.locale&&(St=X(it,this.locale));var ln={type:r.dateTime,pattern:St,location:Bt.styleLocation,parsedOptions:this.shouldParseSkeletons?F(St):{}},Ht=Ct==="date"?o.date:o.time;return{val:{type:Ht,value:_e,location:ut,style:ln},err:null}}}return{val:{type:Ct==="number"?o.number:Ct==="date"?o.date:o.time,value:_e,location:ut,style:(rt=Bt==null?void 0:Bt.style)!==null&&rt!==void 0?rt:null},err:null}}case"plural":case"selectordinal":case"select":{var en=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(s.EXPECT_SELECT_ARGUMENT_OPTIONS,we(en,(0,i.pi)({},en)));this.bumpSpace();var Yt=this.parseIdentifierIfPossible(),Ln=0;if(Ct!=="select"&&Yt.value==="offset"){if(!this.bumpIf(":"))return this.error(s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,we(this.clonePosition(),this.clonePosition()));this.bumpSpace();var hn=this.tryParseDecimalInteger(s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,s.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(hn.err)return hn;this.bumpSpace(),Yt=this.parseIdentifierIfPossible(),Ln=hn.val}var Pn=this.tryParsePluralOrSelectOptions(ie,Ct,Ce,Yt);if(Pn.err)return Pn;var $n=this.tryParseArgumentClose(be);if($n.err)return $n;var Dn=we(be,this.clonePosition());return Ct==="select"?{val:{type:o.select,value:_e,options:Oe(Pn.val),location:Dn},err:null}:{val:{type:o.plural,value:_e,options:Oe(Pn.val),offset:Ln,pluralType:Ct==="plural"?"cardinal":"ordinal",location:Dn},err:null}}default:return this.error(s.INVALID_ARGUMENT_TYPE,we(lt,Wt))}},S.prototype.tryParseArgumentClose=function(ie){return this.isEOF()||this.char()!==125?this.error(s.EXPECT_ARGUMENT_CLOSING_BRACE,we(ie,this.clonePosition())):(this.bump(),{val:!0,err:null})},S.prototype.parseSimpleArgStyleIfPossible=function(){for(var ie=0,Ce=this.clonePosition();!this.isEOF();){var _e=this.char();switch(_e){case 39:{this.bump();var be=this.clonePosition();if(!this.bumpUntil("'"))return this.error(s.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,we(be,this.clonePosition()));this.bump();break}case 123:{ie+=1,this.bump();break}case 125:{if(ie>0)ie-=1;else return{val:this.message.slice(Ce.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(Ce.offset,this.offset()),err:null}},S.prototype.parseNumberSkeletonFromString=function(ie,Ce){var _e=[];try{_e=K(ie)}catch(be){return this.error(s.INVALID_NUMBER_SKELETON,Ce)}return{val:{type:r.number,tokens:_e,location:Ce,parsedOptions:this.shouldParseSkeletons?L(_e):{}},err:null}},S.prototype.tryParsePluralOrSelectOptions=function(ie,Ce,_e,be){for(var rt,lt=!1,Ct=[],Wt=new Set,Bt=be.value,Mt=be.location;;){if(Bt.length===0){var hn=this.clonePosition();if(Ce!=="select"&&this.bumpIf("=")){var ln=this.tryParseDecimalInteger(s.EXPECT_PLURAL_ARGUMENT_SELECTOR,s.INVALID_PLURAL_ARGUMENT_SELECTOR);if(ln.err)return ln;Mt=we(hn,this.clonePosition()),Bt=this.message.slice(hn.offset,this.offset())}else break}if(Wt.has(Bt))return this.error(Ce==="select"?s.DUPLICATE_SELECT_ARGUMENT_SELECTOR:s.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,Mt);Bt==="other"&&(lt=!0),this.bumpSpace();var Mn=this.clonePosition();if(!this.bumpIf("{"))return this.error(Ce==="select"?s.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:s.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,we(this.clonePosition(),this.clonePosition()));var $n=this.parseMessage(ie+1,Ce,_e);if($n.err)return $n;var ut=this.tryParseArgumentClose(Mn);if(ut.err)return ut;Ct.push([Bt,{value:$n.val,location:we(Mn,this.clonePosition())}]),Wt.add(Bt),this.bumpSpace(),rt=this.parseIdentifierIfPossible(),Bt=rt.value,Mt=rt.location}return Ct.length===0?this.error(Ce==="select"?s.EXPECT_SELECT_ARGUMENT_SELECTOR:s.EXPECT_PLURAL_ARGUMENT_SELECTOR,we(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!lt?this.error(s.MISSING_OTHER_CLAUSE,we(this.clonePosition(),this.clonePosition())):{val:Ct,err:null}},S.prototype.tryParseDecimalInteger=function(ie,Ce){var _e=1,be=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(_e=-1);for(var rt=!1,lt=0;!this.isEOF();){var Ct=this.char();if(Ct>=48&&Ct<=57)rt=!0,lt=lt*10+(Ct-48),this.bump();else break}var Wt=we(be,this.clonePosition());return rt?(lt*=_e,Re(lt)?{val:lt,err:null}:this.error(Ce,Wt)):this.error(ie,Wt)},S.prototype.offset=function(){return this.position.offset},S.prototype.isEOF=function(){return this.offset()===this.message.length},S.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},S.prototype.char=function(){var ie=this.position.offset;if(ie>=this.message.length)throw Error("out of bound");var Ce=Ee(this.message,ie);if(Ce===void 0)throw Error("Offset ".concat(ie," is at invalid UTF-16 code unit boundary"));return Ce},S.prototype.error=function(ie,Ce){return{val:null,err:{kind:ie,message:this.message,location:Ce}}},S.prototype.bump=function(){if(!this.isEOF()){var ie=this.char();ie===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=ie<65536?1:2)}},S.prototype.bumpIf=function(ie){if(dt(this.message,ie,this.offset())){for(var Ce=0;Ce<ie.length;Ce++)this.bump();return!0}return!1},S.prototype.bumpUntil=function(ie){var Ce=this.offset(),_e=this.message.indexOf(ie,Ce);return _e>=0?(this.bumpTo(_e),!0):(this.bumpTo(this.message.length),!1)},S.prototype.bumpTo=function(ie){if(this.offset()>ie)throw Error("targetOffset ".concat(ie," must be greater than or equal to the current offset ").concat(this.offset()));for(ie=Math.min(ie,this.message.length);;){var Ce=this.offset();if(Ce===ie)break;if(Ce>ie)throw Error("targetOffset ".concat(ie," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},S.prototype.bumpSpace=function(){for(;!this.isEOF()&&Ze(this.char());)this.bump()},S.prototype.peek=function(){if(this.isEOF())return null;var ie=this.char(),Ce=this.offset(),_e=this.message.charCodeAt(Ce+(ie>=65536?2:1));return _e!=null?_e:null},S}();function ve(S){return S>=97&&S<=122||S>=65&&S<=90}function Be(S){return ve(S)||S===47}function Ae(S){return S===45||S===46||S>=48&&S<=57||S===95||S>=97&&S<=122||S>=65&&S<=90||S==183||S>=192&&S<=214||S>=216&&S<=246||S>=248&&S<=893||S>=895&&S<=8191||S>=8204&&S<=8205||S>=8255&&S<=8256||S>=8304&&S<=8591||S>=11264&&S<=12271||S>=12289&&S<=55295||S>=63744&&S<=64975||S>=65008&&S<=65533||S>=65536&&S<=983039}function Ze(S){return S>=9&&S<=13||S===32||S===133||S>=8206&&S<=8207||S===8232||S===8233}function xt(S){return S>=33&&S<=35||S===36||S>=37&&S<=39||S===40||S===41||S===42||S===43||S===44||S===45||S>=46&&S<=47||S>=58&&S<=59||S>=60&&S<=62||S>=63&&S<=64||S===91||S===92||S===93||S===94||S===96||S===123||S===124||S===125||S===126||S===161||S>=162&&S<=165||S===166||S===167||S===169||S===171||S===172||S===174||S===176||S===177||S===182||S===187||S===191||S===215||S===247||S>=8208&&S<=8213||S>=8214&&S<=8215||S===8216||S===8217||S===8218||S>=8219&&S<=8220||S===8221||S===8222||S===8223||S>=8224&&S<=8231||S>=8240&&S<=8248||S===8249||S===8250||S>=8251&&S<=8254||S>=8257&&S<=8259||S===8260||S===8261||S===8262||S>=8263&&S<=8273||S===8274||S===8275||S>=8277&&S<=8286||S>=8592&&S<=8596||S>=8597&&S<=8601||S>=8602&&S<=8603||S>=8604&&S<=8607||S===8608||S>=8609&&S<=8610||S===8611||S>=8612&&S<=8613||S===8614||S>=8615&&S<=8621||S===8622||S>=8623&&S<=8653||S>=8654&&S<=8655||S>=8656&&S<=8657||S===8658||S===8659||S===8660||S>=8661&&S<=8691||S>=8692&&S<=8959||S>=8960&&S<=8967||S===8968||S===8969||S===8970||S===8971||S>=8972&&S<=8991||S>=8992&&S<=8993||S>=8994&&S<=9e3||S===9001||S===9002||S>=9003&&S<=9083||S===9084||S>=9085&&S<=9114||S>=9115&&S<=9139||S>=9140&&S<=9179||S>=9180&&S<=9185||S>=9186&&S<=9254||S>=9255&&S<=9279||S>=9280&&S<=9290||S>=9291&&S<=9311||S>=9472&&S<=9654||S===9655||S>=9656&&S<=9664||S===9665||S>=9666&&S<=9719||S>=9720&&S<=9727||S>=9728&&S<=9838||S===9839||S>=9840&&S<=10087||S===10088||S===10089||S===10090||S===10091||S===10092||S===10093||S===10094||S===10095||S===10096||S===10097||S===10098||S===10099||S===10100||S===10101||S>=10132&&S<=10175||S>=10176&&S<=10180||S===10181||S===10182||S>=10183&&S<=10213||S===10214||S===10215||S===10216||S===10217||S===10218||S===10219||S===10220||S===10221||S===10222||S===10223||S>=10224&&S<=10239||S>=10240&&S<=10495||S>=10496&&S<=10626||S===10627||S===10628||S===10629||S===10630||S===10631||S===10632||S===10633||S===10634||S===10635||S===10636||S===10637||S===10638||S===10639||S===10640||S===10641||S===10642||S===10643||S===10644||S===10645||S===10646||S===10647||S===10648||S>=10649&&S<=10711||S===10712||S===10713||S===10714||S===10715||S>=10716&&S<=10747||S===10748||S===10749||S>=10750&&S<=11007||S>=11008&&S<=11055||S>=11056&&S<=11076||S>=11077&&S<=11078||S>=11079&&S<=11084||S>=11085&&S<=11123||S>=11124&&S<=11125||S>=11126&&S<=11157||S===11158||S>=11159&&S<=11263||S>=11776&&S<=11777||S===11778||S===11779||S===11780||S===11781||S>=11782&&S<=11784||S===11785||S===11786||S===11787||S===11788||S===11789||S>=11790&&S<=11798||S===11799||S>=11800&&S<=11801||S===11802||S===11803||S===11804||S===11805||S>=11806&&S<=11807||S===11808||S===11809||S===11810||S===11811||S===11812||S===11813||S===11814||S===11815||S===11816||S===11817||S>=11818&&S<=11822||S===11823||S>=11824&&S<=11833||S>=11834&&S<=11835||S>=11836&&S<=11839||S===11840||S===11841||S===11842||S>=11843&&S<=11855||S>=11856&&S<=11857||S===11858||S>=11859&&S<=11903||S>=12289&&S<=12291||S===12296||S===12297||S===12298||S===12299||S===12300||S===12301||S===12302||S===12303||S===12304||S===12305||S>=12306&&S<=12307||S===12308||S===12309||S===12310||S===12311||S===12312||S===12313||S===12314||S===12315||S===12316||S===12317||S>=12318&&S<=12319||S===12320||S===12336||S===64830||S===64831||S>=65093&&S<=65094}function Nt(S){S.forEach(function(ie){if(delete ie.location,h(ie)||x(ie))for(var Ce in ie.options)delete ie.options[Ce].location,Nt(ie.options[Ce].value);else v(ie)&&C(ie.style)||(y(ie)||b(ie))&&j(ie.style)?delete ie.style.location:w(ie)&&Nt(ie.children)})}function Tt(S,ie){ie===void 0&&(ie={}),ie=(0,i.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},ie);var Ce=new ae(S,ie).parse();if(Ce.err){var _e=SyntaxError(s[Ce.err.kind]);throw _e.location=Ce.err.location,_e.originalMessage=Ce.err.message,_e}return ie!=null&&ie.captureLocation||Nt(Ce.val),Ce.val}var Dt=null},89375:function(l,c,e){"use strict";e.d(c,{$6:function(){return b},OV:function(){return d},Qe:function(){return v},Rw:function(){return o},X9:function(){return y},bc:function(){return s},gb:function(){return m},wI:function(){return r}});var i=e(96583),s;(function(h){h.FORMAT_ERROR="FORMAT_ERROR",h.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",h.INVALID_CONFIG="INVALID_CONFIG",h.MISSING_DATA="MISSING_DATA",h.MISSING_TRANSLATION="MISSING_TRANSLATION"})(s||(s={}));var o=function(h){(0,i.ZT)(x,h);function x(E,w,C){var j=this,N=C?C instanceof Error?C:new Error(String(C)):void 0;return j=h.call(this,"[@formatjs/intl Error ".concat(E,"] ").concat(w,`
`).concat(N?`
`.concat(N.message,`
`).concat(N.stack):""))||this,j.code=E,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(j,x),j}return x}(Error),r=function(h){(0,i.ZT)(x,h);function x(E,w){return h.call(this,s.UNSUPPORTED_FORMATTER,E,w)||this}return x}(o),d=function(h){(0,i.ZT)(x,h);function x(E,w){return h.call(this,s.INVALID_CONFIG,E,w)||this}return x}(o),m=function(h){(0,i.ZT)(x,h);function x(E,w){return h.call(this,s.MISSING_DATA,E,w)||this}return x}(o),v=function(h){(0,i.ZT)(x,h);function x(E,w,C){return h.call(this,s.FORMAT_ERROR,"".concat(E,`
Locale: `).concat(w,`
`),C)||this}return x}(o),y=function(h){(0,i.ZT)(x,h);function x(E,w,C,j){var N=h.call(this,"".concat(E,`
MessageID: `).concat(C==null?void 0:C.id,`
Default Message: `).concat(C==null?void 0:C.defaultMessage,`
Description: `).concat(C==null?void 0:C.description,`
`),w,j)||this;return N.descriptor=C,N}return x}(v),b=function(h){(0,i.ZT)(x,h);function x(E,w){var C=h.call(this,s.MISSING_TRANSLATION,'Missing message: "'.concat(E.id,'" for locale "').concat(w,'", using ').concat(E.defaultMessage?"default message (".concat(typeof E.defaultMessage=="string"?E.defaultMessage:E.defaultMessage.map(function(j){var N;return(N=j.value)!==null&&N!==void 0?N:JSON.stringify(j)}).join(),")"):"id"," as fallback."))||this;return C.descriptor=E,C}return x}(o)},37363:function(l,c,e){"use strict";e.d(c,{L6:function(){return d},Sn:function(){return b},TB:function(){return E},Z0:function(){return y},ax:function(){return x}});var i=e(96583),s=e(33712),o=e(19956),r=e(89375);function d(w,C,j){return j===void 0&&(j={}),C.reduce(function(N,D){return D in w?N[D]=w[D]:D in j&&(N[D]=j[D]),N},{})}var m=function(w){},v=function(w){},y={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:m,onWarn:v};function b(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function h(w){return{create:function(){return{get:function(C){return w[C]},set:function(C,j){w[C]=j}}}}}function x(w){w===void 0&&(w=b());var C=Intl.RelativeTimeFormat,j=Intl.ListFormat,N=Intl.DisplayNames,D=(0,o.Z)(function(){for(var Q,F=[],H=0;H<arguments.length;H++)F[H]=arguments[H];return new((Q=Intl.DateTimeFormat).bind.apply(Q,(0,i.ev)([void 0],F,!1)))},{cache:h(w.dateTime),strategy:o.A.variadic}),B=(0,o.Z)(function(){for(var Q,F=[],H=0;H<arguments.length;H++)F[H]=arguments[H];return new((Q=Intl.NumberFormat).bind.apply(Q,(0,i.ev)([void 0],F,!1)))},{cache:h(w.number),strategy:o.A.variadic}),M=(0,o.Z)(function(){for(var Q,F=[],H=0;H<arguments.length;H++)F[H]=arguments[H];return new((Q=Intl.PluralRules).bind.apply(Q,(0,i.ev)([void 0],F,!1)))},{cache:h(w.pluralRules),strategy:o.A.variadic});return{getDateTimeFormat:D,getNumberFormat:B,getMessageFormat:(0,o.Z)(function(Q,F,H,K){return new s.C(Q,F,H,(0,i.pi)({formatters:{getNumberFormat:B,getDateTimeFormat:D,getPluralRules:M}},K||{}))},{cache:h(w.message),strategy:o.A.variadic}),getRelativeTimeFormat:(0,o.Z)(function(){for(var Q=[],F=0;F<arguments.length;F++)Q[F]=arguments[F];return new(C.bind.apply(C,(0,i.ev)([void 0],Q,!1)))},{cache:h(w.relativeTime),strategy:o.A.variadic}),getPluralRules:M,getListFormat:(0,o.Z)(function(){for(var Q=[],F=0;F<arguments.length;F++)Q[F]=arguments[F];return new(j.bind.apply(j,(0,i.ev)([void 0],Q,!1)))},{cache:h(w.list),strategy:o.A.variadic}),getDisplayNames:(0,o.Z)(function(){for(var Q=[],F=0;F<arguments.length;F++)Q[F]=arguments[F];return new(N.bind.apply(N,(0,i.ev)([void 0],Q,!1)))},{cache:h(w.displayNames),strategy:o.A.variadic})}}function E(w,C,j,N){var D=w&&w[C],B;if(D&&(B=D[j]),B)return B;N(new r.wI("No ".concat(C," format named: ").concat(j)))}},8634:function(l,c,e){"use strict";e.d(c,{f:function(){return y},m:function(){return m}});var i=e(31077),s=e.n(i),o=e(86378),r=e.n(o),d=e(18280),m,v="/";function y(x){var E;return x.type==="hash"?E=(0,d.q_)():x.type==="memory"?E=(0,d.PP)(x):E=(0,d.lX)(),x.basename&&(v=x.basename),m=r()(r()({},E),{},{push:function(C,j){E.push(b(C,E),j)},replace:function(C,j){E.replace(b(C,E),j)},get location(){return E.location},get action(){return E.action}}),E}function b(x,E){if(typeof x=="string")return"".concat(h(v)).concat(x);if(s()(x)==="object"){var w=E.location.pathname;return r()(r()({},x),{},{pathname:x.pathname?"".concat(h(v)).concat(x.pathname):w})}else throw new Error("Unexpected to: ".concat(x))}function h(x){return x.slice(-1)==="/"?x.slice(0,-1):x}},79864:function(l,c,e){"use strict";e.d(c,{Dl:function(){return B},dY:function(){return Ne},_H:function(){return b},ql:function(){return i.ql},rU:function(){return i.rU},OL:function(){return i.OL},m8:function(){return i.m8},fp:function(){return i.fp},il:function(){return xe},Sc:function(){return ut},Ov:function(){return i.Ov},cc:function(){return it},yh:function(){return Gr},YB:function(){return r.Z},bU:function(){return St.b},TH:function(){return i.TH},OK:function(){return Pr},pC:function(){return i.pC},UO:function(){return i.UO},OI:function(){return hu},Qt:function(){return i.Qt},eL:function(){return Ls},lr:function(){return i.lr},tx:function(){return Xi},WF:function(){return x.W},OO:function(){return Ya}});var i=e(55344),s=e(96583),o=e(50959),r=e(36946),d=e(53496);function m(k,ee){var G=k.values,ye=(0,s._T)(k,["values"]),je=ee.values,tt=(0,s._T)(ee,["values"]);return(0,d.wU)(je,G)&&(0,d.wU)(ye,tt)}function v(k){var ee=(0,r.Z)(),G=ee.formatMessage,ye=ee.textComponent,je=ye===void 0?o.Fragment:ye,tt=k.id,pt=k.description,gt=k.defaultMessage,Ut=k.values,Kt=k.children,sn=k.tagName,fn=sn===void 0?je:sn,an=k.ignoreTag,pn={id:tt,description:pt,defaultMessage:gt},En=G(pn,Ut,{ignoreTag:an});return typeof Kt=="function"?Kt(Array.isArray(En)?En:[En]):fn?o.createElement(fn,null,o.Children.toArray(En)):o.createElement(o.Fragment,null,En)}v.displayName="FormattedMessage";var y=o.memo(v,m);y.displayName="MemoizedFormattedMessage";var b=y,h=e(52120),x=e(14422),E=e(82850),w=e(49813),C=e(56198),j=e(91815);function N(){return N=Object.assign?Object.assign.bind():function(k){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee];for(var ye in G)Object.prototype.hasOwnProperty.call(G,ye)&&(k[ye]=G[ye])}return k},N.apply(this,arguments)}var D=function(ee){return o.createElement(j.ErrorBoundary,{fallbackRender:function(ye){var je=ye.error;return o.createElement(w.Z,{type:"error"},o.createElement("p",null,o.createElement("strong",null,je.message||"This demo has been crashed.")),je.stack&&o.createElement("p",null,o.createElement("details",{open:!0},o.createElement("summary",null,"Error stack"),o.createElement("pre",null,je.stack))))}},ee.children)},B=function(ee){var G=(0,x.W)(),ye=G.demos,je=(0,i.Ov)(),tt=je.basename,pt=ye[ee.demo.id],gt=pt.component,Ut=pt.asset;return ee.previewerProps.debug?null:ee.demo.inline?o.createElement(D,null,(0,o.createElement)(gt)):o.createElement(C.Z,N({asset:Ut,demoUrl:ee.previewerProps.demoUrl||"".concat(tt).concat(E.SP_ROUTE_PREFIX,"demos/").concat(ee.demo.id)},ee.previewerProps),ee.previewerProps.iframe?null:o.createElement(D,null,(0,o.createElement)(gt)))};function M(){return M=Object.assign?Object.assign.bind():function(k){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee];for(var ye in G)Object.prototype.hasOwnProperty.call(G,ye)&&(k[ye]=G[ye])}return k},M.apply(this,arguments)}function Q(k,ee){return re(k)||Y(k,ee)||H(k,ee)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(k,ee){if(k){if(typeof k=="string")return K(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return K(k,ee)}}function K(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function Y(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function re(k){if(Array.isArray(k))return k}var ce=function(ee){var G=useRouteMeta(),ye=G.frontmatter,je=useCallback(function(Kt,sn){var fn,an=[],pn=sn.filter(function(Fn){return!Fn.previewerProps.debug});if((fn=Kt.demo)!==null&&fn!==void 0&&fn.cols&&Kt.demo.cols>1&&(typeof window=="undefined"||window.innerWidth>1024)){for(var En=0;En<pn.length;En+=Kt.demo.cols)pn.slice(En,En+Kt.demo.cols).forEach(function(Fn,ir){var br;(br=an[ir])!==null&&br!==void 0||(an[ir]=[]),an[ir].push(Fn)});return an}else an.push(pn);return an},[]),tt=useState(function(){return je(ye,ee.items)}),pt=Q(tt,2),gt=pt[0],Ut=pt[1];return useEffect(function(){var Kt=function(){return Ut(je(ye,ee.items))};return window.addEventListener("resize",Kt),function(){return window.removeEventListener("resize",Kt)}},[]),React.createElement("div",{style:{display:"flex",margin:-8},"data-dumi-demo-grid":!0},gt.map(function(Kt,sn){return React.createElement("section",{style:{flex:1,padding:8,width:0},key:String(sn)},Kt.map(function(fn){return React.createElement(DumiDemo,M({key:fn.demo.id},fn))}))}))},Se=function(ee){var G=ee.tabs,ye=ee.tabKey,je=ee.onChange,tt=(0,r.Z)();return Boolean(G==null?void 0:G.length)?o.createElement("ul",{className:"dumi-default-content-tabs"},o.createElement("li",{onClick:function(){return je()},"data-active":!ye||void 0},o.createElement("button",{type:"button"},tt.formatMessage({id:"content.tabs.default"}))),G.map(function(pt){return o.createElement("li",{key:pt.key,onClick:function(){return je(pt)},"data-active":ye===pt.key||void 0},o.createElement("button",{type:"button"},pt.titleIntlId?tt.formatMessage({id:pt.titleIntlId}):pt.meta.frontmatter.title))})):null},se=Se;function Te(k,ee){return z(k)||L(k,ee)||ue(k,ee)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(k,ee){if(k){if(typeof k=="string")return V(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return V(k,ee)}}function V(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function L(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function z(k){if(Array.isArray(k))return k}var X="tab",P=function(){var ee=(0,i.TH)(),G=ee.pathname,ye=(0,i.lr)(),je=Te(ye,1),tt=je[0],pt=(0,o.useCallback)(function(gt){gt?tt.set(X,gt):tt.delete(X),i.m8.push({pathname:G,search:tt.toString()})},[tt]);return[tt.get(X),pt]},J=function(){var ee,G=useRouteMeta(),ye=G.tabs,je=P(),tt=Te(je,1),pt=tt[0];return ye==null||(ee=ye.find(function(gt){var Ut=gt.key;return pt===Ut}))===null||ee===void 0?void 0:ee.meta};function ge(k,ee){return Le(k)||ze(k,ee)||we(k,ee)||We()}function We(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(k,ee){if(k){if(typeof k=="string")return he(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return he(k,ee)}}function he(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function ze(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function Le(k){if(Array.isArray(k))return k}var Ne=function(ee){var G=Ls(),ye=G.tabs,je=P(),tt=ge(je,2),pt=tt[0],gt=tt[1],Ut=(0,o.useState)(function(){return ye==null?void 0:ye.find(function(En){var Fn=En.key;return Fn===pt})}),Kt=ge(Ut,2),sn=Kt[0],fn=Kt[1],an=(0,x.W)(),pn=an.setLoading;return(0,o.useEffect)(function(){pn(!1)},[]),o.createElement(o.Fragment,null,o.createElement(se,{tabs:ye,tabKey:pt,onChange:function(Fn){fn(Fn),gt(Fn==null?void 0:Fn.key)}}),sn?o.createElement(sn.components.default):ee.children)},_=e(52253),pe=e(67541);function me(k,ee){return Me(k)||dt(k,ee)||ot(k,ee)||Re()}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(k,ee){if(k){if(typeof k=="string")return at(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return at(k,ee)}}function at(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function dt(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function Me(k){if(Array.isArray(k))return k}var Oe="https://codesandbox.io/api/v1/sandboxes/define";function Ee(k){var ee,G,ye,je,tt,pt=Boolean((ee=k.asset.dependencies)===null||ee===void 0?void 0:ee["index.tsx"]),gt=pt?".tsx":".jsx",Ut={},Kt={},sn="index".concat(gt);return Object.entries(k.asset.dependencies).forEach(function(fn){var an=me(fn,2),pn=an[0],En=an[1],Fn=En.type,ir=En.value;Fn==="NPM"?Kt[pn]=ir:Ut[pn===sn?"App".concat(gt):pn]={content:ir,isBinary:!1}}),(ye=Kt[G="react"])!==null&&ye!==void 0||(Kt[G]="latest"),(tt=Kt[je="react-dom"])!==null&&tt!==void 0||(Kt[je]=Kt.react),Ut["sandbox.config.json"]={content:JSON.stringify({template:"create-react-app"},null,2),isBinary:!1},Ut["package.json"]={content:JSON.stringify({name:k.title,description:k.description||"An auto-generated demo by dumi",main:sn,dependencies:Kt,devDependencies:pt?{typescript:"^4"}:{}},null,2),isBinary:!1},Ut["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},Ut[sn]={content:(0,pe.AM)(Kt.react),isBinary:!1},(0,_.Z)({files:Ut})}var xe=function(ee,G){var ye,je=document.createElement("form"),tt=document.createElement("input"),pt=Ee(ee);je.method="POST",je.target="_blank",je.style.display="none",je.action=(G==null?void 0:G.api)||Oe,je.appendChild(tt),je.setAttribute("data-demo",((ye=ee.assets)===null||ye===void 0?void 0:ye.id)||""),tt.name="parameters",tt.value=pt,document.body.appendChild(je),je.submit(),je.remove()},q=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],$={clickToLoad:function(k){return te("ctl",k)},devToolsHeight:function(k){return ae("devtoolsheight",k)},forceEmbedLayout:function(k){return te("embed",k)},hideDevTools:function(k){return te("hidedevtools",k)},hideExplorer:function(k){return te("hideExplorer",k)},hideNavigation:function(k){return te("hideNavigation",k)},showSidebar:function(k){return function(ee,G){return typeof G=="boolean"?"showSidebar="+(G?"1":"0"):""}(0,k)},openFile:function(k){return function(ee,G){return(Array.isArray(G)?G:[G]).filter(function(ye){return typeof ye=="string"&&ye.trim()!==""}).map(function(ye){return"file="+encodeURIComponent(ye.trim())})}(0,k).join("&")},terminalHeight:function(k){return ae("terminalHeight",k)},theme:function(k){return ve("theme",["light","dark"],k)},view:function(k){return ve("view",["preview","editor"],k)}};function W(k){k===void 0&&(k={});var ee=Object.entries(k).map(function(G){var ye=G[0],je=G[1];return je!=null&&$.hasOwnProperty(ye)?$[ye](je):""}).filter(Boolean);return ee.length?"?"+ee.join("&"):""}function te(k,ee){return ee===!0?k+"=1":""}function ae(k,ee){return typeof ee=="number"&&ee>=0&&ee<=100?k+"="+Math.round(ee):""}function ve(k,ee,G){return typeof G=="string"&&ee.includes(G)?k+"="+G:""}function Be(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function Ae(k,ee){return""+xt(ee)+k+W(ee)}function Ze(k,ee){var G={forceEmbedLayout:!0};return ee&&typeof ee=="object"&&Object.assign(G,ee),""+xt(G)+k+W(G)}function xt(k){return k===void 0&&(k={}),typeof k.origin=="string"?k.origin:"https://stackblitz.com"}function Nt(k,ee,G){if(!ee||!k||!k.parentNode)throw new Error("Invalid Element");k.id&&(ee.id=k.id),k.className&&(ee.className=k.className),function(ye,je){je&&typeof je=="object"&&(Object.hasOwnProperty.call(je,"height")&&(ye.height=""+je.height),Object.hasOwnProperty.call(je,"width")&&(ye.width=""+je.width)),ye.height||(ye.height="300"),ye.width||ye.setAttribute("style","width:100%;")}(ee,G),k.parentNode.replaceChild(ee,k)}function Tt(k){if(typeof k=="string"){var ee=document.getElementById(k);if(!ee)throw new Error("Could not find element with id '"+k+"'");return ee}if(k instanceof HTMLElement)return k;throw new Error("Invalid element: "+k)}function Dt(k){return k&&k.newWindow===!1?"_self":"_blank"}function S(){return S=Object.assign||function(k){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee];for(var ye in G)Object.prototype.hasOwnProperty.call(G,ye)&&(k[ye]=G[ye])}return k},S.apply(this,arguments)}var ie=function(){function k(G){this.port=void 0,this.pending={},this.port=G,this.port.onmessage=this.messageListener.bind(this)}var ee=k.prototype;return ee.request=function(G){var ye=this,je=G.type,tt=G.payload,pt=Be();return new Promise(function(gt,Ut){ye.pending[pt]={resolve:gt,reject:Ut},ye.port.postMessage({type:je,payload:S({},tt,{__reqid:pt})})})},ee.messageListener=function(G){var ye;if(typeof((ye=G.data.payload)==null?void 0:ye.__reqid)=="string"){var je=G.data,tt=je.type,pt=je.payload,gt=pt.__reqid,Ut=pt.__error;this.pending[gt]&&(pt.__success?this.pending[gt].resolve(function(Kt){var sn=S({},Kt);return delete sn.__reqid,delete sn.__success,delete sn.__error,Object.keys(sn).length?sn:null}(pt)):this.pending[gt].reject(Ut?tt+": "+Ut:tt),delete this.pending[gt])}},k}(),Ce=function(){function k(G,ye){var je=this;this._rdc=void 0,this.editor={openFile:function(tt){return je._rdc.request({type:"SDK_OPEN_FILE",payload:{path:tt}})},setCurrentFile:function(tt){return je._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:tt}})},setTheme:function(tt){return je._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:tt}})},setView:function(tt){return je._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:tt}})},showSidebar:function(tt){return tt===void 0&&(tt=!0),je._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:tt}})}},this.preview={origin:"",getUrl:function(){return je._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(function(tt){var pt;return(pt=tt==null?void 0:tt.url)!=null?pt:null})},setUrl:function(tt){if(tt===void 0&&(tt="/"),typeof tt!="string"||!tt.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+tt+"'");return je._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:tt}})}},this._rdc=new ie(G),Object.defineProperty(this.preview,"origin",{value:typeof ye.previewOrigin=="string"?ye.previewOrigin:null,writable:!1})}var ee=k.prototype;return ee.applyFsDiff=function(G){var ye=function(je){return je!==null&&typeof je=="object"};if(!ye(G)||!ye(G.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(G.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:G})},ee.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},ee.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},k}(),_e=[],be=function(k){var ee=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=Be(),this.element=k,this.pending=new Promise(function(G,ye){var je=function(Kt){var sn=Kt.data;(sn==null?void 0:sn.action)==="SDK_INIT_SUCCESS"&&sn.id===ee.id&&(ee.vm=new Ce(Kt.ports[0],sn.payload),G(ee.vm),pt())},tt=function(){var Kt;(Kt=ee.element.contentWindow)==null||Kt.postMessage({action:"SDK_INIT",id:ee.id},"*")};function pt(){window.clearInterval(Ut),window.removeEventListener("message",je)}window.addEventListener("message",je),tt();var gt=0,Ut=window.setInterval(function(){if(ee.vm)pt();else{if(gt>=20)return pt(),ye("Timeout: Unable to establish a connection with the StackBlitz VM"),void _e.forEach(function(Kt,sn){Kt.id===ee.id&&_e.splice(sn,1)});gt++,tt()}},500)}),_e.push(this)};function rt(k,ee){var G=document.createElement("input");return G.type="hidden",G.name=k,G.value=ee,G}function lt(k){if(!q.includes(k.template)){var ee=q.map(function(je){return"'"+je+"'"}).join(", ");console.warn("Unsupported project.template: must be one of "+ee)}var G=k.template==="node",ye=document.createElement("form");return ye.method="POST",ye.setAttribute("style","display:none!important;"),ye.appendChild(rt("project[title]",k.title)),ye.appendChild(rt("project[description]",k.description)),ye.appendChild(rt("project[template]",k.template)),k.dependencies&&(G?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):ye.appendChild(rt("project[dependencies]",JSON.stringify(k.dependencies)))),k.settings&&ye.appendChild(rt("project[settings]",JSON.stringify(k.settings))),Object.keys(k.files).forEach(function(je){var tt="project[files]"+function(gt){return"["+gt.replace(/\[/g,"%5B").replace(/\]/g,"%5D")+"]"}(je),pt=k.files[je];typeof pt=="string"&&ye.appendChild(rt(tt,pt))}),ye}function Ct(k){var ee,G,ye,je;return k!=null&&k.contentWindow?(je=(G=k)instanceof Element?"element":"id",(ee=(ye=_e.find(function(tt){return tt[je]===G}))!=null?ye:null)!=null?ee:new be(k)).pending:Promise.reject("Provided element is not an iframe.")}var Wt={connect:Ct,embedGithubProject:function(k,ee,G){var ye=Tt(k),je=document.createElement("iframe");return je.src=Ze("/github/"+ee,G),Nt(ye,je,G),Ct(je)},embedProject:function(k,ee,G){var ye,je=Tt(k),tt=function(gt,Ut){var Kt=lt(gt);return Kt.action=Ze("/run",Ut),Kt.id="sb","<html><head><title></title></head><body>"+Kt.outerHTML+"<script>document.getElementById('"+Kt.id+"').submit();<\/script></body></html>"}(ee,G),pt=document.createElement("iframe");return Nt(je,pt,G),(ye=pt.contentDocument)==null||ye.write(tt),Ct(pt)},embedProjectId:function(k,ee,G){var ye=Tt(k),je=document.createElement("iframe");return je.src=Ze("/edit/"+ee,G),Nt(ye,je,G),Ct(je)},openGithubProject:function(k,ee){var G=Ae("/github/"+k,ee),ye=Dt(ee);window.open(G,ye)},openProject:function(k,ee){(function(G,ye){var je=lt(G);je.action=Ae("/run",ye),je.target=Dt(ye),document.body.appendChild(je),je.submit(),document.body.removeChild(je)})(k,ee)},openProjectId:function(k,ee){var G=Ae("/edit/"+k,ee),ye=Dt(ee);window.open(G,ye)}};function Bt(k,ee){return $n(k)||Mn(k,ee)||hn(k,ee)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hn(k,ee){if(k){if(typeof k=="string")return ln(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return ln(k,ee)}}function ln(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function Mn(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function $n(k){if(Array.isArray(k))return k}var ut=function(ee){var G,ye,je,tt,pt,gt=Boolean((G=ee.asset.dependencies)===null||G===void 0?void 0:G["index.tsx"]),Ut=gt?".tsx":".jsx",Kt={},sn="index".concat(Ut),fn={"index.html":'<div style="margin: 16px;" id="root"></div>'},an={title:ee.title||"",description:ee.description||"An auto-generated demo by dumi",template:"create-react-app",files:{}};Object.entries(ee.asset.dependencies).forEach(function(pn){var En=Bt(pn,2),Fn=En[0],ir=En[1],br=ir.type,Ea=ir.value;br==="NPM"?Kt[Fn]=Ea:fn[Fn===sn?"App".concat(Ut):Fn]=Ea}),(je=Kt[ye="react"])!==null&&je!==void 0||(Kt[ye]="latest"),(pt=Kt[tt="react-dom"])!==null&&pt!==void 0||(Kt[tt]=Kt.react),fn["package.json"]=JSON.stringify({name:ee.title,description:ee.description||"An auto-generated demo by dumi",dependencies:Kt,devDependencies:gt?{typescript:"^4"}:{}},null,2),fn[sn]=(0,pe.AM)(Kt.react),an.files=fn,Wt.openProject(an)},it=function(){var ee=(0,x.W)(),G=ee.components;return{components:G}},St=e(15475);function Ht(k,ee){return Dn(k)||Pn(k,ee)||Yt(k,ee)||en()}function en(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yt(k,ee){if(k){if(typeof k=="string")return Ln(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return Ln(k,ee)}}function Ln(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function Pn(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function Dn(k){if(Array.isArray(k))return k}var Pr=function(){var ee=(0,St.b)(),G=(0,pe.RX)(),ye=(0,x.W)(),je=ye.themeConfig,tt=Gr(),pt=(0,pe.M7)(),gt=(0,o.useState)(function(){if(je.nav)return Array.isArray(je.nav)?je.nav:je.nav[ee.id];var sn=Object.entries(tt).map(function(fn){var an=Ht(fn,2),pn=an[0],En=an[1],Fn=Object.values(G).reduce(function(ir,br){return br.path.startsWith(pn.slice(1))&&(0,pe.qu)(ir,"nav",br.meta.frontmatter),ir},{});return{title:Fn.title||En[0].title||En[0].children[0].title,order:Fn.order||0,link:En[0].children[0].link,activePath:pn}});return sn.sort(pt)}),Ut=Ht(gt,1),Kt=Ut[0];return Kt};function jn(k,ee){return ho(k)||Na(k,ee)||Ps(k,ee)||zr()}function zr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ps(k,ee){if(k){if(typeof k=="string")return mo(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return mo(k,ee)}}function mo(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function Na(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function ho(k){if(Array.isArray(k))return k}function ko(k,ee){if(!(k instanceof ee))throw new TypeError("Cannot call a class as a function")}function Rs(k,ee){for(var G=0;G<ee.length;G++){var ye=ee[G];ye.enumerable=ye.enumerable||!1,ye.configurable=!0,"value"in ye&&(ye.writable=!0),Object.defineProperty(k,ye.key,ye)}}function wn(k,ee,G){return ee&&Rs(k.prototype,ee),G&&Rs(k,G),Object.defineProperty(k,"prototype",{writable:!1}),k}function pi(k,ee,G){return ee in k?Object.defineProperty(k,ee,{value:G,enumerable:!0,configurable:!0,writable:!0}):k[ee]=G,k}var oa,Ns=function(){function k(ee){var G=this;ko(this,k),pi(this,"color",void 0),pi(this,"prefersColor",void 0),pi(this,"callbacks",[]),this.prefersColor=navigator.cookieEnabled&&localStorage.getItem(E.PREFERS_COLOR_LS_KEY)||ee.default,this.color=document.documentElement.getAttribute(E.PREFERS_COLOR_ATTR),["light","dark"].forEach(function(ye){var je=G.getColorMedia(ye),tt=function(gt){gt.matches&&G.prefersColor==="auto"&&(G.color=ye,document.documentElement.setAttribute(E.PREFERS_COLOR_ATTR,ye),G.applyCallbacks())};je.addEventListener?je.addEventListener("change",tt):je.addListener&&je.addListener(tt)})}return wn(k,[{key:"getColorMedia",value:function(G){return window.matchMedia("(prefers-color-scheme: ".concat(G,")"))}},{key:"isColorMode",value:function(G){return this.getColorMedia(G).matches}},{key:"applyCallbacks",value:function(){var G=this;this.callbacks.forEach(function(ye){return ye({color:G.color,prefersColor:G.prefersColor})})}},{key:"listen",value:function(G){this.callbacks.push(G)}},{key:"unlisten",value:function(G){this.callbacks.splice(this.callbacks.indexOf(G),1)}},{key:"tryPrefersColor",value:function(G){return navigator.cookieEnabled&&localStorage.setItem(E.PREFERS_COLOR_LS_KEY,G),this.prefersColor=G,this.color=G==="auto"?this.isColorMode("dark")?"dark":"light":G,document.documentElement.setAttribute(E.PREFERS_COLOR_ATTR,G),this.applyCallbacks(),G}}]),k}(),hu=function(){var ee=(0,x.W)(),G=ee.themeConfig,ye=(0,o.useState)(),je=jn(ye,2),tt=je[0],pt=je[1],gt=(0,o.useState)(),Ut=jn(gt,2),Kt=Ut[0],sn=Ut[1],fn=(0,o.useCallback)(function(pn){oa.tryPrefersColor(pn)},[]),an=(0,o.useCallback)(function(pn){pt(pn.color),sn(pn.prefersColor)},[]);return(0,o.useEffect)(function(){var pn;return(pn=oa)!==null&&pn!==void 0||(oa=new Ns({default:G.prefersColor.default})),oa.listen(an),pt(oa.color),sn(oa.prefersColor),function(){return oa.unlisten(an)}},[]),[tt,Kt,fn]};function yu(k,ee){return go(k)||vi(k,ee)||Ki(k,ee)||lr()}function lr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ki(k,ee){if(k){if(typeof k=="string")return yo(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return yo(k,ee)}}function yo(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function vi(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function go(k){if(Array.isArray(k))return k}var Ls=function(){var ee=(0,i.Qt)(),G=ee.route,ye=(0,i.TH)(),je=ye.pathname,tt=(0,i.Ov)(),pt=tt.clientRoutes,gt=(0,o.useCallback)(function(){var an;if(G.path===je&&!("isLayout"in G))an=G.meta;else{var pn,En,Fn=(pn=(0,i.fp)(pt,je))===null||pn===void 0?void 0:pn.pop();an=Fn==null||(En=Fn.route)===null||En===void 0?void 0:En.meta}return an||{frontmatter:{},toc:[],texts:[]}},[pt.length,je]),Ut=(0,o.useState)(gt),Kt=yu(Ut,2),sn=Kt[0],fn=Kt[1];return(0,pe.LI)(function(){fn(gt)},[pt.length,je]),sn};function Fo(k,ee){var G=Object.keys(k);if(Object.getOwnPropertySymbols){var ye=Object.getOwnPropertySymbols(k);ee&&(ye=ye.filter(function(je){return Object.getOwnPropertyDescriptor(k,je).enumerable})),G.push.apply(G,ye)}return G}function jo(k){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee]!=null?arguments[ee]:{};ee%2?Fo(Object(G),!0).forEach(function(ye){ba(k,ye,G[ye])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(G)):Fo(Object(G)).forEach(function(ye){Object.defineProperty(k,ye,Object.getOwnPropertyDescriptor(G,ye))})}return k}function ba(k,ee,G){return ee in k?Object.defineProperty(k,ee,{value:G,enumerable:!0,configurable:!0,writable:!0}):k[ee]=G,k}function Ds(k,ee){var G=typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(!G){if(Array.isArray(k)||(G=Ka(k))||ee&&k&&typeof k.length=="number"){G&&(k=G);var ye=0,je=function(){};return{s:je,n:function(){return ye>=k.length?{done:!0}:{done:!1,value:k[ye++]}},e:function(Kt){throw Kt},f:je}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tt=!0,pt=!1,gt;return{s:function(){G=G.call(k)},n:function(){var Kt=G.next();return tt=Kt.done,Kt},e:function(Kt){pt=!0,gt=Kt},f:function(){try{!tt&&G.return!=null&&G.return()}finally{if(pt)throw gt}}}}function ia(k){return Bo(k)||ll(k)||Ka(k)||gu()}function gu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ll(k){if(typeof Symbol!="undefined"&&k[Symbol.iterator]!=null||k["@@iterator"]!=null)return Array.from(k)}function Bo(k){if(Array.isArray(k))return xo(k)}function Ia(k,ee){return bu(k)||xu(k,ee)||Ka(k,ee)||mi()}function mi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ka(k,ee){if(k){if(typeof k=="string")return xo(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return xo(k,ee)}}function xo(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function xu(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function bu(k){if(Array.isArray(k))return k}var Zi="$default-group-title",Yi=function(ee,G){return"base"in G?ee.replace(G.base.slice(1),"").replace(/^\//,""):ee},Gr=function(){var ee=(0,St.b)(),G=(0,pe.RX)(),ye=(0,x.W)(),je=ye.themeConfig,tt=(0,pe.M7)(),pt=(0,o.useState)(function(){var Kt=Object.values(G).reduce(function(fn,an){var pn=Yi(an.path,ee);if(pn&&an.meta){var En,Fn,ir,br="/".concat(an.path.replace(pn,function(Io){return Io.replace(/\/[^/]+$/,"")})),Ea=(0,pe.qu)({order:0},"group",an.meta.frontmatter),Yr=Ea.title,_o=Ea.order,Xr=Yr||Zi;(En=fn[br])!==null&&En!==void 0||(fn[br]={}),fn[br][Xr]={title:Yr,order:((Fn=fn[br][Xr])===null||Fn===void 0?void 0:Fn.order)||_o,children:[].concat(ia(((ir=fn[br][Xr])===null||ir===void 0?void 0:ir.children)||[]),[{title:an.meta.frontmatter.title,link:"/".concat(an.path),order:an.meta.frontmatter.order||0,frontmatter:an.meta.frontmatter}])}}return fn},{}),sn=Object.entries(Kt).reduce(function(fn,an){var pn=Ia(an,2),En=pn[0],Fn=pn[1];return fn[En]=Object.values(Fn).sort(tt),fn[En].forEach(function(ir){return ir.children.sort(tt)}),fn},{});return Object.assign(sn,je.sidebar)}),gt=Ia(pt,1),Ut=gt[0];return Ut};function La(k){var ee={order:0,title:""},G=Ds(k),ye;try{for(G.s();!(ye=G.n()).done;){var je=ye.value,tt=Ds(je.children),pt;try{for(tt.s();!(pt=tt.n()).done;){var gt=pt.value;"frontmatter"in gt&&pickRouteSortMeta(ee,"nav",gt.frontmatter)}}catch(Ut){tt.e(Ut)}finally{tt.f()}}}catch(Ut){G.e(Ut)}finally{G.f()}return ee}var ks=function(){var ee=Gr(),G=useRouteDataComparer(),ye=useState(function(){var pt=Object.entries(ee).sort(function(gt,Ut){return Ut[0].split("/").length-gt[0].split("/").length}).reduce(function(gt,Ut){var Kt=Ia(Ut,2),sn=Kt[0],fn=Kt[1],an=sn.replace(/\/[^/]+$/,"");if(an){var pn;if((pn=gt[an])!==null&&pn!==void 0||(gt[an]=jo({path:an,children:ee[an]||[]},La(ee[an]||[]))),gt[sn])gt[sn].children.sort(G),gt[an].children.push(gt[sn]),delete gt[sn];else{var En;(En=gt[an].children).push.apply(En,ia(fn))}}else fn.sort(G),gt[sn]=jo({path:sn,children:fn},La(fn));return gt},{});return Object.values(pt)}),je=Ia(ye,1),tt=je[0];return tt},Xi=function(){var ee=(0,St.b)(),G=Gr(),ye=(0,i.TH)(),je=ye.pathname,tt=Yi(je.slice(1),ee),pt=tt?je.replace(tt,function(gt){return gt.replace(/([^/]+)(\/[^/]+\/?)$/,"$1")}):je;return pt?G[pt]:[]},Vn='"use strict";(()=>{var P=Object.create;var k=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(i,e,n)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,I=(i,e)=>{for(var n in e||(e={}))E.call(e,n)&&O(i,n,e[n]);if(R)for(var n of R(e))L.call(e,n)&&O(i,n,e[n]);return i};var N=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var F=(i,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!E.call(i,r)&&r!==n&&k(i,r,{get:()=>e[r],enumerable:!(u=z(e,r))||u.enumerable});return i};var W=(i,e,n)=>(n=i!=null?P(B(i)):{},F(e||!i||!i.__esModule?k(n,"default",{value:i,enumerable:!0}):n,i));var j=N((K,w)=>{w.exports=function(i){var e={};function n(u){if(e[u])return e[u].exports;var r=e[u]={exports:{},id:u,loaded:!1};return i[u].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=i,n.c=e,n.p="",n(0)}([function(i,e,n){i.exports=n(1)},function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(2);Object.defineProperty(e,"combineChunks",{enumerable:!0,get:function(){return u.combineChunks}}),Object.defineProperty(e,"fillInChunks",{enumerable:!0,get:function(){return u.fillInChunks}}),Object.defineProperty(e,"findAll",{enumerable:!0,get:function(){return u.findAll}}),Object.defineProperty(e,"findChunks",{enumerable:!0,get:function(){return u.findChunks}})},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.findAll=function(t){var g=t.autoEscape,c=t.caseSensitive,f=c===void 0?!1:c,d=t.findChunks,o=d===void 0?r:d,h=t.sanitize,v=t.searchWords,T=t.textToHighlight;return l({chunksToHighlight:u({chunks:o({autoEscape:g,caseSensitive:f,sanitize:h,searchWords:v,textToHighlight:T})}),totalLength:T?T.length:0})},u=e.combineChunks=function(t){var g=t.chunks;return g=g.sort(function(c,f){return c.start-f.start}).reduce(function(c,f){if(c.length===0)return[f];var d=c.pop();if(f.start<=d.end){var o=Math.max(d.end,f.end);c.push({highlight:!1,start:d.start,end:o})}else c.push(d,f);return c},[]),g},r=function(t){var g=t.autoEscape,c=t.caseSensitive,f=t.sanitize,d=f===void 0?p:f,o=t.searchWords,h=t.textToHighlight;return h=d(h),o.filter(function(v){return v}).reduce(function(v,T){T=d(T),g&&(T=a(T));for(var m=new RegExp(T,c?"g":"gi"),y=void 0;y=m.exec(h);){var S=y.index,$=m.lastIndex;$>S&&v.push({highlight:!1,start:S,end:$}),y.index===m.lastIndex&&m.lastIndex++}return v},[])};e.findChunks=r;var l=e.fillInChunks=function(t){var g=t.chunksToHighlight,c=t.totalLength,f=[],d=function(v,T,m){T-v>0&&f.push({start:v,end:T,highlight:m})};if(g.length===0)d(0,c,!1);else{var o=0;g.forEach(function(h){d(o,h.start,!1),d(h.start,h.end,!0),o=h.end}),d(o,c,!1)}return f};function p(s){return s}function a(s){return s.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}}])});var C=W(j()),H="tab";function M(i,e,n,u,r){let l=r!==void 0,p=u.reduce((a,s)=>(s.tocIndex===r&&(a[s.paraId]=(a[s.paraId]||"").concat(s.value)),a),[]).filter(Boolean);return Boolean(p.length)||l?{rawTitle:i,title:e,link:n,paragraphs:u.reduce((a,s)=>{var t,g;return s.tocIndex===r&&((g=a[t=s.paraId])!=null||(a[t]=""),a[s.paraId]+=s.value),a},[]).filter(Boolean)}:null}function x(i){return[i.title,i.subtitle].filter(Boolean).join(" ")}function _(i,e,n){let u=[],r=Object.values(e).reduce((l,p)=>{var a,s;return p.asset&&((s=l[a=p.routeId])!=null||(l[a]=[]),l[p.routeId].push(p)),l},{});return Object.values(i).forEach(l=>{var p;if("meta"in l&&!("isLayout"in l)){let a=l.meta,s=l.path.replace(/^([^/])/,"/$1")||"/",t=n.find(o=>s===o.link||s.startsWith(`${o.activePath}/`)),g=(r[l.id]||[]).map(o=>{var h;return(h=o.asset)==null?void 0:h.id}),c=M("",x(a.frontmatter),s,a.texts),f=a.toc.reduce((o,h,v)=>(!g.includes(h.id)&&h.depth>1&&o.push(M(h.title,`${x(a.frontmatter)} - ${h.title}`,`${s}#${h.id}`,a.texts,v)),o),[]),d=(a.tabs||[]).reduce((o,{key:h,meta:v})=>{let T=M("",`${x(a.frontmatter)} - ${v.frontmatter.title}`,`${s}?${H}=${h}`,v.texts);return T&&o.push(T),o.push(...v.toc.map((m,y)=>M(m.title,`${x(a.frontmatter)} - ${v.frontmatter.title} - ${m.title}`,`${s}?${H}=${h}#${m.id}`,v.texts,y))),o},[]);u.push({navTitle:t==null?void 0:t.title,navOrder:t?n.indexOf(t):1/0,title:x(a.frontmatter),link:s,sections:[...c?[c]:[],...f,...d],demos:((p=r[l.id])==null?void 0:p.map(o=>({link:`${s}#${o.asset.id}`,rawTitle:o.asset.title||"",title:o.asset.title||x(a.frontmatter),description:o.asset.description||"",keywords:o.asset.keywords||[]})))||[]})}}),u}function b(i="",e,n=1){let u=(0,C.findAll)({textToHighlight:i,searchWords:e,autoEscape:!0}),r={};return[u.map(({start:l,end:p,highlight:a},s)=>{let t={text:i.slice(l,p)};return s===0&&!a&&u.length>1&&t.text.length>20&&(t.text=`...${t.text.slice(-20)}`),a&&(t.highlighted=!0,r[e.find(g=>t.text.includes(g))]=n),t}),r]}function Y(i,e){let n=e.split(" "),u=new RegExp(e.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(" ","|"),"gi"),r={};return i.forEach(l=>{var a,s;let p=[];if(l.sections.forEach(t=>{for(let g of t.paragraphs)if(u.test(g)){let[c,f]=b(t.title,n,10),[d,o]=b(g,n);p.push({type:"content",link:t.link,priority:Object.values(I(I({},o),f)).reduce((h,v)=>h+v,0),highlightTitleTexts:c,highlightTexts:d});return}if(u.test(t.rawTitle)){let[g,c]=b(t.title,n,10);p.push({type:"title",link:t.link,priority:Object.values(c).reduce((f,d)=>f+d,0),highlightTitleTexts:g,highlightTexts:b(t.paragraphs[0]||"",n)[0]})}}),l.demos.forEach(t=>{if(u.test(t.rawTitle)||u.test(t.description)){let[g,c]=b(t.title,n,10),[f,d]=b(t.description,n);p.push({type:"demo",link:t.link,priority:Object.values(I(I({},d),c)).reduce((o,h)=>o+h,0),highlightTitleTexts:g,highlightTexts:f})}}),u.test(l.title)){let[t,g]=b(l.title,n,100);p.push({type:"page",link:l.link,priority:Object.values(g).reduce((c,f)=>c+f,0),highlightTitleTexts:t,highlightTexts:b(((a=l.sections[0])==null?void 0:a.paragraphs[0])||"",n)[0]})}if(p.length){let t=l.navTitle||"$ROOT";(s=r[t])!=null||(r[t]={title:l.navTitle,priority:l.navOrder*1e3,hints:[]}),r[t].hints.push(...p)}}),Object.values(r).forEach(({hints:l})=>{l.sort((p,a)=>a.priority-p.priority)}),Object.values(r).sort((l,p)=>p.priority-l.priority)}var A;self.onmessage=({data:i})=>{switch(i.action){case"generate-metadata":A=_(i.args.routes,i.args.demos,i.args.nav);break;case"get-search-result":self.postMessage(Y(A,i.args.keywords));break;default:}};})();\n';function Fs(k,ee){var G=Object.keys(k);if(Object.getOwnPropertySymbols){var ye=Object.getOwnPropertySymbols(k);ee&&(ye=ye.filter(function(je){return Object.getOwnPropertyDescriptor(k,je).enumerable})),G.push.apply(G,ye)}return G}function hi(k){for(var ee=1;ee<arguments.length;ee++){var G=arguments[ee]!=null?arguments[ee]:{};ee%2?Fs(Object(G),!0).forEach(function(ye){yi(k,ye,G[ye])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(G)):Fs(Object(G)).forEach(function(ye){Object.defineProperty(k,ye,Object.getOwnPropertyDescriptor(G,ye))})}return k}function yi(k,ee,G){return ee in k?Object.defineProperty(k,ee,{value:G,enumerable:!0,configurable:!0,writable:!0}):k[ee]=G,k}function gi(k,ee){return Za(k)||oo(k,ee)||Qi(k,ee)||xi()}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qi(k,ee){if(k){if(typeof k=="string")return bo(k,ee);var G=Object.prototype.toString.call(k).slice(8,-1);if(G==="Object"&&k.constructor&&(G=k.constructor.name),G==="Map"||G==="Set")return Array.from(k);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return bo(k,ee)}}function bo(k,ee){(ee==null||ee>k.length)&&(ee=k.length);for(var G=0,ye=new Array(ee);G<ee;G++)ye[G]=k[G];return ye}function oo(k,ee){var G=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(G!=null){var ye=[],je=!0,tt=!1,pt,gt;try{for(G=G.call(k);!(je=(pt=G.next()).done)&&(ye.push(pt.value),!(ee&&ye.length===ee));je=!0);}catch(Ut){tt=!0,gt=Ut}finally{try{!je&&G.return!=null&&G.return()}finally{if(tt)throw gt}}return ye}}function Za(k){if(Array.isArray(k))return k}var da;typeof window!="undefined"&&(da=new Worker(URL.createObjectURL(new Blob([Vn],{type:"application/javascript"}))));var Ya=function(){var ee=(0,o.useRef)(),G=(0,pe.RX)(),ye=(0,x.W)(),je=ye.demos,tt=(0,o.useState)(!1),pt=gi(tt,2),gt=pt[0],Ut=pt[1],Kt=(0,o.useState)(""),sn=gi(Kt,2),fn=sn[0],an=sn[1],pn=Pr(),En=(0,o.useState)([]),Fn=gi(En,2),ir=Fn[0],br=Fn[1],Ea=(0,o.useCallback)(function(Yr){Ut(!0),an(Yr)},[]);return(0,o.useEffect)(function(){da.onmessage=function(Yr){br(Yr.data),Ut(!1)}},[]),(0,o.useEffect)(function(){var Yr=Object.entries(je).reduce(function(_o,Xr){var Io=gi(Xr,2),zo=Io[0],Sa=Io[1],bi=Sa.asset,Uo=Sa.routeId;return hi(hi({},_o),{},yi({},zo,{asset:bi,routeId:Uo}))},{});da.postMessage({action:"generate-metadata",args:{routes:JSON.parse(JSON.stringify(G)),nav:pn,demos:Yr}})},[G,je,pn]),(0,o.useEffect)(function(){var Yr=fn.trim();Yr?(clearTimeout(ee.current),ee.current=window.setTimeout(function(){da.postMessage({action:"get-search-result",args:{keywords:Yr}})},200)):br([])},[fn]),{keywords:fn,setKeywords:Ea,result:ir,loading:gt}}},43513:function(l,c,e){"use strict";e.d(c,{k:function(){return i},s:function(){return s}});var i=[{id:"zh-CN",name:"\u4E2D\u6587",base:"/"}],s={"en-US":{"header.search.placeholder":"Type keywords...","header.color.mode.light":"Light Mode","header.color.mode.dark":"Dark Mode","header.color.mode.auto":"Follow System","header.social.github":"GitHub","header.social.weibo":"Weibo","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"Zhihu","header.social.yuque":"Yuque","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"Show Code","previewer.actions.code.shrink":"Hide Code","previewer.actions.codesandbox":"Open in CodeSandbox","previewer.actions.codepen":"Open in CodePen (Not implemented)","previewer.actions.stackblitz":"Open in StackBlitz","previewer.actions.separate":"Open in separate page","404.title":"PAGE NOT FOUND","404.back":"Back to homepage","api.component.name":"Name","api.component.description":"Description","api.component.type":"Type","api.component.default":"Default","api.component.required":"(required)","api.component.unavailable":"apiParser must be enabled to use auto-generated API","api.component.loading":"Properties definition is resolving, wait a moment...","api.component.not.found":"Properties definition not found for {id} component","content.tabs.default":"Doc","search.not.found":"No content was found","layout.sidebar.btn":"Sidebar"},"zh-CN":{"header.search.placeholder":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22...","header.color.mode.light":"\u4EAE\u8272\u6A21\u5F0F","header.color.mode.dark":"\u6697\u8272\u6A21\u5F0F","header.color.mode.auto":"\u8DDF\u968F\u7CFB\u7EDF","header.social.github":"GitHub","header.social.weibo":"\u5FAE\u535A","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"\u77E5\u4E4E","header.social.yuque":"\u8BED\u96C0","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"\u5C55\u5F00\u4EE3\u7801","previewer.actions.code.shrink":"\u6536\u8D77\u4EE3\u7801","previewer.actions.codesandbox":"\u5728 CodeSandbox \u4E2D\u6253\u5F00","previewer.actions.codepen":"\u5728 CodePen \u4E2D\u6253\u5F00\uFF08\u672A\u5B9E\u73B0\uFF09","previewer.actions.stackblitz":"\u5728 StackBlitz \u4E2D\u6253\u5F00","previewer.actions.separate":"\u5728\u72EC\u7ACB\u9875\u9762\u4E2D\u6253\u5F00","404.title":"\u9875\u9762\u672A\u627E\u5230","404.back":"\u8FD4\u56DE\u9996\u9875","api.component.name":"\u5C5E\u6027\u540D","api.component.description":"\u63CF\u8FF0","api.component.type":"\u7C7B\u578B","api.component.default":"\u9ED8\u8BA4\u503C","api.component.required":"(\u5FC5\u9009)","api.component.unavailable":"\u5FC5\u987B\u542F\u7528 apiParser \u624D\u80FD\u4F7F\u7528\u81EA\u52A8 API \u7279\u6027","api.component.loading":"\u5C5E\u6027\u5B9A\u4E49\u6B63\u5728\u89E3\u6790\u4E2D\uFF0C\u7A0D\u7B49\u7247\u523B...","api.component.not.found":"\u672A\u627E\u5230 {id} \u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49","content.tabs.default":"\u6587\u6863","search.not.found":"\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9","layout.sidebar.btn":"\u4FA7\u8FB9\u83DC\u5355"}}},35207:function(l,c,e){"use strict";e.d(c,{wx:function(){return ut},DE:function(){return Ht},C3:function(){return St},eA:function(){return it}});var i=e(30577),s=e.n(i),o=e(50959),r={},d={title:"Guide",toc:"menu",filename:"docs/guide.md",nav:"\u6307\u5357"},m=[{id:"\u5B89\u88C5",depth:3,title:"\u5B89\u88C5"},{id:"\u793A\u4F8B",depth:3,title:"\u793A\u4F8B"}],v=[{value:`npm install catd --save
`,paraId:0,tocIndex:0},{value:`import { Icon } from 'catd';

export const App = () => <Icon name="add" size="30" />;
`,paraId:1,tocIndex:1}],y={},b={title:"Docs",toc:"menu",filename:"docs/index.md",hero:{title:"Cat Design",description:"\u52A9\u529B\u8BBE\u8BA1\u5F00\u53D1\u8005\u300C\u66F4\u7075\u6D3B\u300D\u5730\u642D\u5EFA\u51FA\u300C\u66F4\u7F8E\u300D\u7684\u4EA7\u54C1\uFF0C\u8BA9\u7528\u6237\u300C\u5FEB\u4E50\u5DE5\u4F5C\u300D\uFF5E",actions:[{text:"Start",link:"/guide"},{text:"Github",link:"https://github.com/lby1024"}]}},h=[],x=[],E={"src-auto-complate-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,68356))}),asset:{type:"BLOCK",id:"src-auto-complate-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16916).Z},catd:{type:"NPM",value:"1.0.4"},"jsonp.ts":{type:"FILE",value:e(9025).Z}}}},"src-auto-complate-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,45939))}),asset:{type:"BLOCK",id:"src-auto-complate-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9746).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-auto-complate-demo-demo03":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,70115))}),asset:{type:"BLOCK",id:"src-auto-complate-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66520).Z},"styled-components":{type:"NPM",value:"5.3.6"},catd:{type:"NPM",value:"1.0.4"},"jsonp.ts":{type:"FILE",value:e(9025).Z}}}}},w={title:"AutoComplate",toc:"content",filename:"src/AutoComplate/index.md",nav:"\u7EC4\u4EF6",order:555,group:{title:"\u8868\u5355",order:2}},C=[{id:"autocomplate",depth:1,title:"AutoComplate"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u90AE\u7BB1",depth:3,title:"\u90AE\u7BB1"},{id:"\u81EA\u5B9A\u4E49",depth:3,title:"\u81EA\u5B9A\u4E49"},{id:"api",depth:3,title:"API"}],j=[{value:`

  
  
  
  
  
  
  
  
`,paraId:0},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"size",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5927\u5C0F",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"'large' | 'small' | 'default'",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"addOnBefore",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"addOnAfter",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"prefix",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"suffix",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"onSearch",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u641C\u7D22\u8865\u5168\u9879\u7684\u65F6\u5019\u8C03\u7528",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"function(value)",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"onSelect",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value \u503C	",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"function(item)",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"renderItem",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49item\u6837\u5F0F",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"item => ReactNode",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4}],N={"src-button-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,21246))}),asset:{type:"BLOCK",id:"src-button-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39688).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-button-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,11620))}),asset:{type:"BLOCK",id:"src-button-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65347).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-button-demo-demo03":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,79030))}),asset:{type:"BLOCK",id:"src-button-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(97240).Z},catd:{type:"NPM",value:"1.0.4"}}}}},D={title:"Button",toc:"content",filename:"src/Button/index.md",group:{title:"\u901A\u7528",order:1},order:55},B=[{id:"\u6309\u94AE\u7C7B\u578B",depth:3,title:"\u6309\u94AE\u7C7B\u578B"},{id:"\u6309\u94AE\u5C3A\u5BF8",depth:3,title:"\u6309\u94AE\u5C3A\u5BF8"},{id:"\u6309\u94AE\u72B6\u6001",depth:3,title:"\u6309\u94AE\u72B6\u6001"},{id:"api",depth:3,title:"API"}],M=[{value:`

  
  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u63CF\u8FF0",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u662F\u5426\u53EF\u7528",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"size",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u5C3A\u5BF8",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'lg' | 'sm' | 'md'",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"md",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"btnType",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u6309\u94AE\u7C7B\u578B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'primary' | 'default' | 'danger' | 'link'",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"'default'",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"loading",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"\u663E\u793A\u52A0\u8F7D\u52A8\u753B",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"boolen",paraId:1,tocIndex:3},{value:`
    `,paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:`
  `,paraId:1,tocIndex:3}],Q={"src-calendar-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,89813))}),asset:{type:"BLOCK",id:"src-calendar-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55166).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-calendar-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,39691))}),asset:{type:"BLOCK",id:"src-calendar-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(50123).Z},catd:{type:"NPM",value:"1.0.4"}}}}},F={title:"Calendar",toc:"content",filename:"src/Calendar/index.md",group:{title:"\u901A\u7528",order:1},order:2,description:"\u6BCF\u67083\u53F7\u7981\u9009"},H=[{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u7981\u9009",depth:3,title:"\u7981\u9009"},{id:"api",depth:3,title:"API"}],K=[{value:"\u6BCF\u67083\u53F7\u7981\u9009",paraId:0,tocIndex:1}],Y={"src-dropdown-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,41256))}),asset:{type:"BLOCK",id:"src-dropdown-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(46381).Z},catd:{type:"NPM",value:"1.0.4"}}}}},re={title:"Dropdown",toc:"content",filename:"src/Dropdown/index.md",group:{title:"\u901A\u7528",order:1},order:55},ce=[{id:"dropdown",depth:3,title:"Dropdown"},{id:"api",depth:3,title:"API"}],Se=[],se={"src-form-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,49645))}),asset:{type:"BLOCK",id:"src-form-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7743).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-form-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,96505))}),asset:{type:"BLOCK",id:"src-form-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(22753).Z},catd:{type:"NPM",value:"1.0.4"}}}}},Te={title:"Form",toc:"content",filename:"src/Form/index.md",order:221,group:{title:"\u8868\u5355",order:2},description:"Form"},le=[{id:"form",depth:1,title:"Form"},{id:"\u6CE8\u518C",depth:3,title:"\u6CE8\u518C"},{id:"\u767B\u5F55",depth:3,title:"\u767B\u5F55"},{id:"api",depth:3,title:"API"}],ue=[{value:"Form",paraId:0,tocIndex:3},{value:"FormItem",paraId:1},{value:`

  
  
  
  `,paraId:2},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"\u5C5E\u6027\u540D",paraId:3},{value:`
    `,paraId:3},{value:"\u63CF\u8FF0",paraId:3},{value:`
    `,paraId:3},{value:"\u7C7B\u578B",paraId:3},{value:`
    `,paraId:3},{value:"\u9ED8\u8BA4\u503C",paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"label",paraId:3},{value:`
    `,paraId:3},{value:"\u6807\u7B7E\u7684\u6587\u672C",paraId:3},{value:`
    `,paraId:3},{value:"string",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"name",paraId:3},{value:`
    `,paraId:3},{value:"\u5C3A\u5BF8\u5B57\u6BB5\u540D",paraId:3},{value:`
    `,paraId:3},{value:"string",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"trigger",paraId:3},{value:`
    `,paraId:3},{value:"\u8BBE\u7F6E\u6536\u96C6\u5B57\u6BB5\u503C\u53D8\u66F4\u7684\u65F6\u673A",paraId:3},{value:`
    `,paraId:3},{value:"'onChange' | 'onBlur'",paraId:3},{value:`
    `,paraId:3},{value:"'onChange'",paraId:3},{value:`
  `,paraId:3},{value:`
    `,paraId:3},{value:"rules",paraId:3},{value:`
    `,paraId:3},{value:"\u6821\u9A8C\u89C4\u5219\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u7684\u6821\u9A8C\u903B\u8F91\u3002",paraId:3},{value:`
    `,paraId:3},{value:"FormItemRule[]",paraId:3},{value:`
    `,paraId:3},{value:`
  `,paraId:3}],V={"src-icon-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,1943))}),asset:{type:"BLOCK",id:"src-icon-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60138).Z},catd:{type:"NPM",value:"1.0.4"},"styled-components":{type:"NPM",value:"5.3.6"}}}}},L={title:"Icon",toc:"content",filename:"src/Icon/index.md",order:55,group:{title:"\u901A\u7528",order:1}},z=[{id:"icon",depth:1,title:"Icon"},{id:"\u5217\u8868",depth:3,title:"\u5217\u8868"},{id:"api",depth:3,title:"API"}],X=[{value:`

  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u63CF\u8FF0",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"name",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u56FE\u6807\u540D",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"color",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u989C\u8272",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"hoverColor",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"\u60AC\u505C\u65F6\u7684\u989C\u8272",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:`
    `,paraId:1,tocIndex:2},{value:`
  `,paraId:1,tocIndex:2}],P={"src-input-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,16938))}),asset:{type:"BLOCK",id:"src-input-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12353).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-input-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,57838))}),asset:{type:"BLOCK",id:"src-input-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28409).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-input-demo-demo03":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,47495))}),asset:{type:"BLOCK",id:"src-input-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1553).Z},catd:{type:"NPM",value:"1.0.4"}}}}},J={title:"Input",toc:"content",filename:"src/Input/index.md",order:555,group:{title:"\u8868\u5355",order:2}},ge=[{id:"input",depth:1,title:"Input"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u6807\u7B7E",depth:3,title:"\u6807\u7B7E"},{id:"\u4E09\u79CD\u5927\u5C0F",depth:3,title:"\u4E09\u79CD\u5927\u5C0F"},{id:"api",depth:3,title:"Api"}],We=[{value:`

  
  
  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"size",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5927\u5C0F",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"'large' | 'small' | 'default'",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"default",paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"addOnBefore",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"addOnAfter",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5C3A\u5BF8\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"prefix",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"suffix",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:"string | ReactElement",paraId:1,tocIndex:4},{value:`
    `,paraId:1,tocIndex:4},{value:`
  `,paraId:1,tocIndex:4}],we={"src-menu-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,84183))}),asset:{type:"BLOCK",id:"src-menu-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38570).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-menu-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,53705))}),asset:{type:"BLOCK",id:"src-menu-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82721).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-menu-demo-demo03":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,73213))}),asset:{type:"BLOCK",id:"src-menu-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88245).Z},catd:{type:"NPM",value:"1.0.4"}}}}},he={title:"Menu",toc:"content",filename:"src/Menu/index.md",order:9,group:{title:"\u901A\u7528",order:9}},ze=[{id:"menu",depth:1,title:"Menu"},{id:"horizon",depth:2,title:"horizon"},{id:"inline",depth:2,title:"inline"},{id:"vertical",depth:2,title:"vertical"},{id:"api",depth:2,title:"API"},{id:"menu-1",depth:3,title:"Menu"},{id:"menusub",depth:3,title:"Menu.Sub"},{id:"memuitem",depth:3,title:"Memu.Item"}],Le=[{value:`

  
  
  `,paraId:0},{value:`
  `,paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:`
  `,paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"name",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"item \u7684\u552F\u4E00\u6807\u5FD7",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:`
  `,paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"title",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u83DC\u5355\u9879\u6807\u9898",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:`
  `,paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"mode",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"\u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u652F\u6301\u5782\u76F4\u3001\u6C34\u5E73\u3001\u548C\u5185\u5D4C\u6A21\u5F0F\u4E09\u79CD",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"'inline' | 'vertical' | 'horizon'",paraId:1,tocIndex:6},{value:`
    `,paraId:1,tocIndex:6},{value:"'inline'",paraId:1,tocIndex:6},{value:`
  `,paraId:1,tocIndex:6},{value:`

  `,paraId:0},{value:`
  `,paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"\u63CF\u8FF0",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:`
  `,paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"name",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"item \u7684\u552F\u4E00\u6807\u5FD7",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:`
    `,paraId:2,tocIndex:7},{value:`
  `,paraId:2,tocIndex:7}],Ne={"src-message-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,83348))}),asset:{type:"BLOCK",id:"src-message-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86353).Z},catd:{type:"NPM",value:"1.0.4"}}}}},_={title:"Message",toc:"content",filename:"src/Message/index.md",group:{title:"\u5F39\u6846",order:3}},pe=[{id:"message",depth:3,title:"Message"},{id:"api",depth:3,title:"Api"}],me=[{value:`Message.success('\u63D0\u793A\u5185\u5BB9');
Message.error('\u63D0\u793A\u5185\u5BB9');
Message.warning('\u63D0\u793A\u5185\u5BB9');
Message.info('\u63D0\u793A\u5185\u5BB9');
`,paraId:0,tocIndex:1}],Re={"src-overlay-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,97824))}),asset:{type:"BLOCK",id:"src-overlay-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96744).Z},catd:{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.2.0"},"styled-components":{type:"NPM",value:"5.3.6"}}}},"src-overlay-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,55714))}),asset:{type:"BLOCK",id:"src-overlay-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41775).Z},catd:{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.2.0"},"styled-components":{type:"NPM",value:"5.3.6"}}}}},ot={title:"Overlay",toc:"content",filename:"src/Overlay/index.md",group:{title:"\u5F39\u6846",order:3}},at=[{id:"overlay",depth:1,title:"Overlay"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u5B9A\u4F4D",depth:3,title:"\u5B9A\u4F4D"},{id:"api",depth:3,title:"API"}],dt=[],Me={"src-popup-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,27972))}),asset:{type:"BLOCK",id:"src-popup-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57295).Z},catd:{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.2.0"},"styled-components":{type:"NPM",value:"5.3.6"}}}},"src-popup-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,67073))}),asset:{type:"BLOCK",id:"src-popup-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38728).Z},catd:{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.2.0"},"styled-components":{type:"NPM",value:"5.3.6"}}}}},Oe={title:"Popup",toc:"content",filename:"src/Popup/index.md",group:{title:"\u5F39\u6846",order:3}},Ee=[{id:"popup",depth:1,title:"Popup"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u89E6\u53D1\u4E8B\u4EF6",depth:3,title:"\u89E6\u53D1\u4E8B\u4EF6"},{id:"api",depth:3,title:"API"}],xe=[],q={"src-progress-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,34737))}),asset:{type:"BLOCK",id:"src-progress-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92738).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-progress-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,20337))}),asset:{type:"BLOCK",id:"src-progress-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33850).Z},catd:{type:"NPM",value:"1.0.4"}}}}},$={title:"Progress",toc:"content",filename:"src/Progress/index.md",group:{title:"\u901A\u7528",order:1},order:1},W=[{id:"\u8FDB\u5EA6\u6761",depth:2,title:"\u8FDB\u5EA6\u6761"},{id:"\u8FDB\u5EA6\u73AF",depth:2,title:"\u8FDB\u5EA6\u73AF"},{id:"api",depth:2,title:"API"}],te=[],ae=e(58357),ve=e.n(ae),Be=e(71977),Ae=e.n(Be),Ze={"src-radio-demo-0":{component:o.lazy(Ae()(ve()().mark(function en(){var Yt,Ln,Pn,Dn;return ve()().wrap(function(jn){for(;;)switch(jn.prev=jn.next){case 0:return jn.next=2,Promise.resolve().then(e.t.bind(e,50959,19));case 2:return Yt=jn.sent,Ln=Yt.default,jn.next=6,Promise.all([e.e(976),e.e(383),e.e(313)]).then(e.bind(e,16383));case 6:return Pn=jn.sent,Dn=Pn.Radio,jn.abrupt("return",{default:function(){return o.createElement(Dn.Item,null,"Radio")}});case 9:case"end":return jn.stop()}},en)}))),asset:{type:"BLOCK",id:"src-radio-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Radio } from '../index';

export default () => <Radio.Item>Radio</Radio.Item>;`},react:{type:"NPM",value:"18.2.0"},"index.ts":{type:"FILE",value:e(72803).Z}}}},"src-radio-demo-1":{component:o.lazy(Ae()(ve()().mark(function en(){var Yt,Ln,Pn,Dn;return ve()().wrap(function(jn){for(;;)switch(jn.prev=jn.next){case 0:return jn.next=2,Promise.resolve().then(e.t.bind(e,50959,19));case 2:return Yt=jn.sent,Ln=Yt.default,jn.next=6,Promise.all([e.e(976),e.e(383),e.e(313)]).then(e.bind(e,16383));case 6:return Pn=jn.sent,Dn=Pn.Radio,jn.abrupt("return",{default:function(){return o.createElement(o.Fragment,null,o.createElement(Dn.Item,{disabled:!0,checked:!0},"Disabled"),o.createElement(Dn.Item,{disabled:!0},"Disabled"))}});case 9:case"end":return jn.stop()}},en)}))),asset:{type:"BLOCK",id:"src-radio-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Radio } from 'catd';

export default () => (
  <>
    <Radio.Item disabled={true} checked={true}>
      Disabled
    </Radio.Item>
    <Radio.Item disabled={true}>Disabled</Radio.Item>
  </>
);`},react:{type:"NPM",value:"18.2.0"},catd:{type:"NPM",value:"1.0.4"}}}},"src-radio-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,83433))}),asset:{type:"BLOCK",id:"src-radio-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61745).Z},catd:{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.2.0"}}}}},xt={title:"Radio",toc:"content",filename:"src/Radio/index.md",order:555,group:{title:"\u8868\u5355",order:2},description:"RadioGroup"},Nt=[{id:"radio",depth:1,title:"Radio"},{id:"\u57FA\u7840",depth:3,title:"\u57FA\u7840"},{id:"\u4E0D\u53EF\u7528",depth:3,title:"\u4E0D\u53EF\u7528"},{id:"\u5355\u9009\u7EC4\u5408",depth:3,title:"\u5355\u9009\u7EC4\u5408"},{id:"api",depth:3,title:"API"}],Tt=[{value:"RadioGroup",paraId:0,tocIndex:4},{value:"RadioItem",paraId:1,tocIndex:4},{value:`

  
  
  
  
`,paraId:2},{value:`
  `,paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u63CF\u8FF0",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:`
  `,paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"checked",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:`
  `,paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"disabled",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u7981\u7528 Radio",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:`
  `,paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"value",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u6839\u636E value \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5224\u65AD\u662F\u5426\u9009\u4E2D",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:`
  `,paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"onChange",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"\u9009\u9879\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:"(e: string) => void",paraId:3,tocIndex:4},{value:`
    `,paraId:3,tocIndex:4},{value:`
  `,paraId:3,tocIndex:4}],Dt={"src-select-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,19830))}),asset:{type:"BLOCK",id:"src-select-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(48902).Z},"Select.tsx":{type:"FILE",value:e(17354).Z},react:{type:"NPM",value:"18.2.0"},classnames:{type:"NPM",value:"2.3.2"},"index.css":{type:"FILE",value:e(11536).Z},"index.ts":{type:"FILE",value:e(87985).Z},"tool.ts":{type:"FILE",value:e(80552).Z},"Input/index.ts":{type:"FILE",value:e(62030).Z},"Icon/index.ts":{type:"FILE",value:e(8734).Z},"static/base.css":{type:"FILE",value:e(93374).Z},"static/reset.css":{type:"FILE",value:e(79704).Z},"Menu/index.ts":{type:"FILE",value:e(42538).Z},"interface.ts":{type:"FILE",value:e(28651).Z},"Radio/index.ts":{type:"FILE",value:e(97640).Z},"Progress/index.ts":{type:"FILE",value:e(92959).Z},"Alert/index.ts":{type:"FILE",value:e(50197).Z},"Message/index.ts":{type:"FILE",value:e(44491).Z},"Form/index.ts":{type:"FILE",value:e(90966).Z},"Show/index.ts":{type:"FILE",value:e(5354).Z},"Popup/index.ts":{type:"FILE",value:e(99861).Z},"AutoComplate/index.ts":{type:"FILE",value:e(37333).Z},"Overlay/index.ts":{type:"FILE",value:e(80983).Z},"Dropdown/index.ts":{type:"FILE",value:e(13389).Z},"Uploader/index.ts":{type:"FILE",value:e(17034).Z},"Calendar/index.ts":{type:"FILE",value:e(62783).Z},"Button/index.ts":{type:"FILE",value:e(58492).Z},"Tooltip/index.ts":{type:"FILE",value:e(88891).Z},"Message/Message.tsx":{type:"FILE",value:e(43581).Z},"Progress/Progress.tsx":{type:"FILE",value:e(44070).Z},"Popup/Popup.tsx":{type:"FILE",value:e(80662).Z},"Overlay/Overlay.tsx":{type:"FILE",value:e(68457).Z},"Uploader/Uploader.tsx":{type:"FILE",value:e(56322).Z},"Tooltip/Tooltip.tsx":{type:"FILE",value:e(87344).Z},"Icon/Icon.tsx":{type:"FILE",value:e(29959).Z},"Show/Show.tsx":{type:"FILE",value:e(62925).Z},"Alert/Alert.tsx":{type:"FILE",value:e(45326).Z},"Calendar/Calendar.tsx":{type:"FILE",value:e(12649).Z},"AutoComplate/AutoComplete.tsx":{type:"FILE",value:e(40825).Z},"Button/Button.tsx":{type:"FILE",value:e(72729).Z},"Dropdown/Dropdown.tsx":{type:"FILE",value:e(1149).Z},"Input/Textarea.tsx":{type:"FILE",value:e(94699).Z},"Input/Input.tsx":{type:"FILE",value:e(96702).Z},"Radio/RadioGroup.tsx":{type:"FILE",value:e(19357).Z},"Radio/RadioItem.tsx":{type:"FILE",value:e(10037).Z},"Form/Form.tsx":{type:"FILE",value:e(20856).Z},"Form/FormItem.tsx":{type:"FILE",value:e(75287).Z},"react-dom":{type:"NPM",value:"18.2.0"},"Menu/SubMenu.tsx":{type:"FILE",value:e(28278).Z},"Menu/MenuItem.tsx":{type:"FILE",value:e(81665).Z},"Menu/MenuGroup.tsx":{type:"FILE",value:e(75369).Z},"Progress/index.css":{type:"FILE",value:e(66587).Z},"Message/MessageList.tsx":{type:"FILE",value:e(97751).Z},"Alert/index.css":{type:"FILE",value:e(94715).Z},"Show/index.css":{type:"FILE",value:e(90329).Z},"Input/tool.ts":{type:"FILE",value:e(48230).Z},"Button/index.css":{type:"FILE",value:e(20384).Z},"Tooltip/index.css":{type:"FILE",value:e(86832).Z},"Input/index.css":{type:"FILE",value:e(29939).Z},"Radio/index.css":{type:"FILE",value:e(63672).Z},"Icon/index.css":{type:"FILE",value:e(44132).Z},"Icon/iconfont.js":{type:"FILE",value:e(26480).Z},"Form/useForm.ts":{type:"FILE",value:e(263).Z},"tools/hooks.ts":{type:"FILE",value:e(49767).Z},"Popup/index.css":{type:"FILE",value:e(3908).Z},"AutoComplate/index.css":{type:"FILE",value:e(64214).Z},"Dropdown/index.css":{type:"FILE",value:e(65734).Z},"Dropdown/DropdownItem.tsx":{type:"FILE",value:e(42128).Z},"Overlay/index.css":{type:"FILE",value:e(29711).Z},"Overlay/tool.ts":{type:"FILE",value:e(89051).Z},"Uploader/tool.ts":{type:"FILE",value:e(44314).Z},"Uploader/uploaderList.tsx":{type:"FILE",value:e(99850).Z},"Uploader/index.css":{type:"FILE",value:e(13485).Z},"Menu/useMenu.ts":{type:"FILE",value:e(81681).Z},"Calendar/tool.ts":{type:"FILE",value:e(57219).Z},"Form/index.css":{type:"FILE",value:e(19803).Z},"Calendar/CalendarItem.tsx":{type:"FILE",value:e(81408).Z},"Calendar/index.css":{type:"FILE",value:e(20901).Z},axios:{type:"NPM",value:"1.3.2"},"Menu/index.css":{type:"FILE",value:e(65110).Z},"Message/index.css":{type:"FILE",value:e(73607).Z},"Form/valitate.ts":{type:"FILE",value:e(7808).Z},"Uploader/UploaderProgress.tsx":{type:"FILE",value:e(55763).Z}}}}},S={title:"Select",toc:"content",filename:"src/Select/index.md",group:{title:"\u8868\u5355",order:2},order:555},ie=[{id:"select",depth:3,title:"Select"},{id:"api",depth:3,title:"API"}],Ce=[],_e={"src-textarea-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,17608))}),asset:{type:"BLOCK",id:"src-textarea-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59447).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-textarea-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,89093))}),asset:{type:"BLOCK",id:"src-textarea-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(4588).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-textarea-demo-demo03":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,43823))}),asset:{type:"BLOCK",id:"src-textarea-demo-demo03",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28182).Z},catd:{type:"NPM",value:"1.0.4"}}}}},be={title:"TextArea",toc:"content",filename:"src/Textarea/index.md",order:555,group:{title:"\u8868\u5355",order:2},description:"\u6700\u5C0F3\u884C, \u6700\u59277\u884C"},rt=[{id:"textarea",depth:1,title:"TextArea"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u81EA\u52A8\u6491\u9AD8",depth:3,title:"\u81EA\u52A8\u6491\u9AD8"},{id:"\u6700\u5927\u884C\u6700\u5C0F\u884C",depth:3,title:"\u6700\u5927\u884C\u6700\u5C0F\u884C"},{id:"api",depth:3,title:"Api"}],lt=[{value:"\u6700\u5C0F3\u884C, \u6700\u59277\u884C",paraId:0,tocIndex:3},{value:`

  
  
  
  `,paraId:1},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"autoSize",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true | false \u6216\u5BF9\u8C61\uFF1A{ minRows: 2, maxRows: 6 }",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"boolean | object",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"showCount",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u662F\u5426\u5C55\u793A\u5B57\u6570",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"value",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u8F93\u5165\u6846\u5185\u5BB9",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"defaultValue",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:`
    `,paraId:2,tocIndex:4},{value:`
  `,paraId:2,tocIndex:4}],Ct={"src-tooltip-demo-demo":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,30676))}),asset:{type:"BLOCK",id:"src-tooltip-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56015).Z},catd:{type:"NPM",value:"1.0.4"}}}},"src-tooltip-demo-demo02":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,84410))}),asset:{type:"BLOCK",id:"src-tooltip-demo-demo02",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17159).Z},catd:{type:"NPM",value:"1.0.4"}}}}},Wt={title:"Tooltip",toc:"content",filename:"src/Tooltip/index.md",group:{title:"\u5F39\u6846",order:3}},Bt=[{id:"tooltip",depth:1,title:"Tooltip"},{id:"\u57FA\u672C\u4F7F\u7528",depth:3,title:"\u57FA\u672C\u4F7F\u7528"},{id:"\u5B9A\u4F4D",depth:3,title:"\u5B9A\u4F4D"},{id:"api",depth:3,title:"API"}],Mt=[],hn={"src-uploader-demo-demo01":{component:o.lazy(function(){return Promise.all([e.e(976),e.e(251),e.e(383),e.e(433)]).then(e.bind(e,61458))}),asset:{type:"BLOCK",id:"src-uploader-demo-demo01",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(46806).Z},react:{type:"NPM",value:"18.2.0"},catd:{type:"NPM",value:"1.0.4"}}}}},ln={title:"Uploader",toc:"content",filename:"src/Uploader/index.md",group:{title:"\u8868\u5355",order:2},order:222},Mn=[],$n=[],ut=null,it={},St={"docs/guide":{frontmatter:d,toc:m,texts:v,demos:r},"docs/index":{frontmatter:b,toc:h,texts:x,demos:y},"components/AutoComplate/index":{frontmatter:w,toc:C,texts:j,demos:E},"components/Button/index":{frontmatter:D,toc:B,texts:M,demos:N},"components/Calendar/index":{frontmatter:F,toc:H,texts:K,demos:Q},"components/Dropdown/index":{frontmatter:re,toc:ce,texts:Se,demos:Y},"components/Form/index":{frontmatter:Te,toc:le,texts:ue,demos:se},"components/Icon/index":{frontmatter:L,toc:z,texts:X,demos:V},"components/Input/index":{frontmatter:J,toc:ge,texts:We,demos:P},"components/Menu/index":{frontmatter:he,toc:ze,texts:Le,demos:we},"components/Message/index":{frontmatter:_,toc:pe,texts:me,demos:Ne},"components/Overlay/index":{frontmatter:ot,toc:at,texts:dt,demos:Re},"components/Popup/index":{frontmatter:Oe,toc:Ee,texts:xe,demos:Me},"components/Progress/index":{frontmatter:$,toc:W,texts:te,demos:q},"components/Radio/index":{frontmatter:xt,toc:Nt,texts:Tt,demos:Ze},"components/Select/index":{frontmatter:S,toc:ie,texts:Ce,demos:Dt},"components/Textarea/index":{frontmatter:be,toc:rt,texts:lt,demos:_e},"components/Tooltip/index":{frontmatter:Wt,toc:Bt,texts:Mt,demos:Ct},"components/Uploader/index":{frontmatter:ln,toc:Mn,texts:$n,demos:hn}},Ht=Object.entries(St).reduce(function(en,Yt){var Ln=s()(Yt,2),Pn=Ln[0],Dn=Ln[1];return Object.values(Dn.demos).forEach(function(Pr){Pr.routeId=Pn}),Object.assign(en,Dn.demos),delete Dn.demos,en},{})},55344:function(l,c,e){"use strict";e.d(c,{Ac:function(){return Ne},ql:function(){return K.ql},rU:function(){return H},OL:function(){return C},Q$:function(){return _},m8:function(){return pe.m},fp:function(){return s.fp},Ov:function(){return Q.Ov},TH:function(){return s.TH},pC:function(){return s.pC},UO:function(){return s.UO},Qt:function(){return Y.Q},lr:function(){return N}});var i=e(50959),s=e(44492),o=e(18280);function r(){return r=Object.assign||function(q){for(var $=1;$<arguments.length;$++){var W=arguments[$];for(var te in W)Object.prototype.hasOwnProperty.call(W,te)&&(q[te]=W[te])}return q},r.apply(this,arguments)}function d(q,$){if(q==null)return{};var W={},te=Object.keys(q),ae,ve;for(ve=0;ve<te.length;ve++)ae=te[ve],!($.indexOf(ae)>=0)&&(W[ae]=q[ae]);return W}const m=["onClick","reloadDocument","replace","state","target","to"],v=["aria-current","caseSensitive","className","end","style","to","children"];function y(q,$){if(!q){typeof console!="undefined"&&console.warn($);try{throw new Error($)}catch(W){}}}function b(q){let{basename:$,children:W,window:te}=q,ae=useRef();ae.current==null&&(ae.current=createBrowserHistory({window:te}));let ve=ae.current,[Be,Ae]=useState({action:ve.action,location:ve.location});return useLayoutEffect(()=>ve.listen(Ae),[ve]),createElement(Router,{basename:$,children:W,location:Be.location,navigationType:Be.action,navigator:ve})}function h(q){let{basename:$,children:W,window:te}=q,ae=useRef();ae.current==null&&(ae.current=createHashHistory({window:te}));let ve=ae.current,[Be,Ae]=useState({action:ve.action,location:ve.location});return useLayoutEffect(()=>ve.listen(Ae),[ve]),createElement(Router,{basename:$,children:W,location:Be.location,navigationType:Be.action,navigator:ve})}function x(q){let{basename:$,children:W,history:te}=q;const[ae,ve]=useState({action:te.action,location:te.location});return useLayoutEffect(()=>te.listen(ve),[te]),createElement(Router,{basename:$,children:W,location:ae.location,navigationType:ae.action,navigator:te})}function E(q){return!!(q.metaKey||q.altKey||q.ctrlKey||q.shiftKey)}const w=(0,i.forwardRef)(function($,W){let{onClick:te,reloadDocument:ae,replace:ve=!1,state:Be,target:Ae,to:Ze}=$,xt=d($,m),Nt=(0,s.oQ)(Ze),Tt=j(Ze,{replace:ve,state:Be,target:Ae});function Dt(S){te&&te(S),!S.defaultPrevented&&!ae&&Tt(S)}return(0,i.createElement)("a",r({},xt,{href:Nt,onClick:Dt,ref:W,target:Ae}))}),C=(0,i.forwardRef)(function($,W){let{"aria-current":te="page",caseSensitive:ae=!1,className:ve="",end:Be=!1,style:Ae,to:Ze,children:xt}=$,Nt=d($,v),Tt=(0,s.TH)(),Dt=(0,s.WU)(Ze),S=Tt.pathname,ie=Dt.pathname;ae||(S=S.toLowerCase(),ie=ie.toLowerCase());let Ce=S===ie||!Be&&S.startsWith(ie)&&S.charAt(ie.length)==="/",_e=Ce?te:void 0,be;typeof ve=="function"?be=ve({isActive:Ce}):be=[ve,Ce?"active":null].filter(Boolean).join(" ");let rt=typeof Ae=="function"?Ae({isActive:Ce}):Ae;return(0,i.createElement)(w,r({},Nt,{"aria-current":_e,className:be,ref:W,style:rt,to:Ze}),typeof xt=="function"?xt({isActive:Ce}):xt)});function j(q,$){let{target:W,replace:te,state:ae}=$===void 0?{}:$,ve=(0,s.s0)(),Be=(0,s.TH)(),Ae=(0,s.WU)(q);return(0,i.useCallback)(Ze=>{if(Ze.button===0&&(!W||W==="_self")&&!E(Ze)){Ze.preventDefault();let xt=!!te||(0,o.Ep)(Be)===(0,o.Ep)(Ae);ve(q,{replace:xt,state:ae})}},[Be,ve,Ae,te,ae,W,q])}function N(q){let $=(0,i.useRef)(D(q)),W=(0,s.TH)(),te=(0,i.useMemo)(()=>{let Be=D(W.search);for(let Ae of $.current.keys())Be.has(Ae)||$.current.getAll(Ae).forEach(Ze=>{Be.append(Ae,Ze)});return Be},[W.search]),ae=(0,s.s0)(),ve=(0,i.useCallback)((Be,Ae)=>{ae("?"+D(Be),Ae)},[ae]);return[te,ve]}function D(q){return q===void 0&&(q=""),new URLSearchParams(typeof q=="string"||Array.isArray(q)||q instanceof URLSearchParams?q:Object.keys(q).reduce(($,W)=>{let te=q[W];return $.concat(Array.isArray(te)?te.map(ae=>[W,ae]):[[W,te]])},[]))}var B=e(15882),M=e(30486),Q=e(2386),F=["prefetch"];function H(q){var $,W=q.prefetch,te=(0,M.Z)(q,F),ae=(0,Q.Ov)(),ve=typeof q.to=="string"?q.to:($=q.to)===null||$===void 0?void 0:$.pathname;return ve?i.createElement(w,(0,B.Z)({onMouseEnter:function(){var Ae;return W&&ve&&((Ae=ae.preloadRoute)===null||Ae===void 0?void 0:Ae.call(ae,ve))}},te),q.children):null}var K=e(87593),Y=e(52155),re=e(54465);function ce(){"use strict";ce=function(){return q};var q={},$=Object.prototype,W=$.hasOwnProperty,te=Object.defineProperty||function(ut,it,St){ut[it]=St.value},ae=typeof Symbol=="function"?Symbol:{},ve=ae.iterator||"@@iterator",Be=ae.asyncIterator||"@@asyncIterator",Ae=ae.toStringTag||"@@toStringTag";function Ze(ut,it,St){return Object.defineProperty(ut,it,{value:St,enumerable:!0,configurable:!0,writable:!0}),ut[it]}try{Ze({},"")}catch(ut){Ze=function(St,Ht,en){return St[Ht]=en}}function xt(ut,it,St,Ht){var en=it&&it.prototype instanceof Dt?it:Dt,Yt=Object.create(en.prototype),Ln=new ln(Ht||[]);return te(Yt,"_invoke",{value:Wt(ut,St,Ln)}),Yt}function Nt(ut,it,St){try{return{type:"normal",arg:ut.call(it,St)}}catch(Ht){return{type:"throw",arg:Ht}}}q.wrap=xt;var Tt={};function Dt(){}function S(){}function ie(){}var Ce={};Ze(Ce,ve,function(){return this});var _e=Object.getPrototypeOf,be=_e&&_e(_e(Mn([])));be&&be!==$&&W.call(be,ve)&&(Ce=be);var rt=ie.prototype=Dt.prototype=Object.create(Ce);function lt(ut){["next","throw","return"].forEach(function(it){Ze(ut,it,function(St){return this._invoke(it,St)})})}function Ct(ut,it){function St(en,Yt,Ln,Pn){var Dn=Nt(ut[en],ut,Yt);if(Dn.type!=="throw"){var Pr=Dn.arg,jn=Pr.value;return jn&&(0,re.Z)(jn)=="object"&&W.call(jn,"__await")?it.resolve(jn.__await).then(function(zr){St("next",zr,Ln,Pn)},function(zr){St("throw",zr,Ln,Pn)}):it.resolve(jn).then(function(zr){Pr.value=zr,Ln(Pr)},function(zr){return St("throw",zr,Ln,Pn)})}Pn(Dn.arg)}var Ht;te(this,"_invoke",{value:function(Yt,Ln){function Pn(){return new it(function(Dn,Pr){St(Yt,Ln,Dn,Pr)})}return Ht=Ht?Ht.then(Pn,Pn):Pn()}})}function Wt(ut,it,St){var Ht="suspendedStart";return function(en,Yt){if(Ht==="executing")throw new Error("Generator is already running");if(Ht==="completed"){if(en==="throw")throw Yt;return $n()}for(St.method=en,St.arg=Yt;;){var Ln=St.delegate;if(Ln){var Pn=Bt(Ln,St);if(Pn){if(Pn===Tt)continue;return Pn}}if(St.method==="next")St.sent=St._sent=St.arg;else if(St.method==="throw"){if(Ht==="suspendedStart")throw Ht="completed",St.arg;St.dispatchException(St.arg)}else St.method==="return"&&St.abrupt("return",St.arg);Ht="executing";var Dn=Nt(ut,it,St);if(Dn.type==="normal"){if(Ht=St.done?"completed":"suspendedYield",Dn.arg===Tt)continue;return{value:Dn.arg,done:St.done}}Dn.type==="throw"&&(Ht="completed",St.method="throw",St.arg=Dn.arg)}}}function Bt(ut,it){var St=it.method,Ht=ut.iterator[St];if(Ht===void 0)return it.delegate=null,St==="throw"&&ut.iterator.return&&(it.method="return",it.arg=void 0,Bt(ut,it),it.method==="throw")||St!=="return"&&(it.method="throw",it.arg=new TypeError("The iterator does not provide a '"+St+"' method")),Tt;var en=Nt(Ht,ut.iterator,it.arg);if(en.type==="throw")return it.method="throw",it.arg=en.arg,it.delegate=null,Tt;var Yt=en.arg;return Yt?Yt.done?(it[ut.resultName]=Yt.value,it.next=ut.nextLoc,it.method!=="return"&&(it.method="next",it.arg=void 0),it.delegate=null,Tt):Yt:(it.method="throw",it.arg=new TypeError("iterator result is not an object"),it.delegate=null,Tt)}function Mt(ut){var it={tryLoc:ut[0]};1 in ut&&(it.catchLoc=ut[1]),2 in ut&&(it.finallyLoc=ut[2],it.afterLoc=ut[3]),this.tryEntries.push(it)}function hn(ut){var it=ut.completion||{};it.type="normal",delete it.arg,ut.completion=it}function ln(ut){this.tryEntries=[{tryLoc:"root"}],ut.forEach(Mt,this),this.reset(!0)}function Mn(ut){if(ut){var it=ut[ve];if(it)return it.call(ut);if(typeof ut.next=="function")return ut;if(!isNaN(ut.length)){var St=-1,Ht=function en(){for(;++St<ut.length;)if(W.call(ut,St))return en.value=ut[St],en.done=!1,en;return en.value=void 0,en.done=!0,en};return Ht.next=Ht}}return{next:$n}}function $n(){return{value:void 0,done:!0}}return S.prototype=ie,te(rt,"constructor",{value:ie,configurable:!0}),te(ie,"constructor",{value:S,configurable:!0}),S.displayName=Ze(ie,Ae,"GeneratorFunction"),q.isGeneratorFunction=function(ut){var it=typeof ut=="function"&&ut.constructor;return!!it&&(it===S||(it.displayName||it.name)==="GeneratorFunction")},q.mark=function(ut){return Object.setPrototypeOf?Object.setPrototypeOf(ut,ie):(ut.__proto__=ie,Ze(ut,Ae,"GeneratorFunction")),ut.prototype=Object.create(rt),ut},q.awrap=function(ut){return{__await:ut}},lt(Ct.prototype),Ze(Ct.prototype,Be,function(){return this}),q.AsyncIterator=Ct,q.async=function(ut,it,St,Ht,en){en===void 0&&(en=Promise);var Yt=new Ct(xt(ut,it,St,Ht),en);return q.isGeneratorFunction(it)?Yt:Yt.next().then(function(Ln){return Ln.done?Ln.value:Yt.next()})},lt(rt),Ze(rt,Ae,"Generator"),Ze(rt,ve,function(){return this}),Ze(rt,"toString",function(){return"[object Generator]"}),q.keys=function(ut){var it=Object(ut),St=[];for(var Ht in it)St.push(Ht);return St.reverse(),function en(){for(;St.length;){var Yt=St.pop();if(Yt in it)return en.value=Yt,en.done=!1,en}return en.done=!0,en}},q.values=Mn,ln.prototype={constructor:ln,reset:function(it){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(hn),!it)for(var St in this)St.charAt(0)==="t"&&W.call(this,St)&&!isNaN(+St.slice(1))&&(this[St]=void 0)},stop:function(){this.done=!0;var it=this.tryEntries[0].completion;if(it.type==="throw")throw it.arg;return this.rval},dispatchException:function(it){if(this.done)throw it;var St=this;function Ht(Pr,jn){return Ln.type="throw",Ln.arg=it,St.next=Pr,jn&&(St.method="next",St.arg=void 0),!!jn}for(var en=this.tryEntries.length-1;en>=0;--en){var Yt=this.tryEntries[en],Ln=Yt.completion;if(Yt.tryLoc==="root")return Ht("end");if(Yt.tryLoc<=this.prev){var Pn=W.call(Yt,"catchLoc"),Dn=W.call(Yt,"finallyLoc");if(Pn&&Dn){if(this.prev<Yt.catchLoc)return Ht(Yt.catchLoc,!0);if(this.prev<Yt.finallyLoc)return Ht(Yt.finallyLoc)}else if(Pn){if(this.prev<Yt.catchLoc)return Ht(Yt.catchLoc,!0)}else{if(!Dn)throw new Error("try statement without catch or finally");if(this.prev<Yt.finallyLoc)return Ht(Yt.finallyLoc)}}}},abrupt:function(it,St){for(var Ht=this.tryEntries.length-1;Ht>=0;--Ht){var en=this.tryEntries[Ht];if(en.tryLoc<=this.prev&&W.call(en,"finallyLoc")&&this.prev<en.finallyLoc){var Yt=en;break}}Yt&&(it==="break"||it==="continue")&&Yt.tryLoc<=St&&St<=Yt.finallyLoc&&(Yt=null);var Ln=Yt?Yt.completion:{};return Ln.type=it,Ln.arg=St,Yt?(this.method="next",this.next=Yt.finallyLoc,Tt):this.complete(Ln)},complete:function(it,St){if(it.type==="throw")throw it.arg;return it.type==="break"||it.type==="continue"?this.next=it.arg:it.type==="return"?(this.rval=this.arg=it.arg,this.method="return",this.next="end"):it.type==="normal"&&St&&(this.next=St),Tt},finish:function(it){for(var St=this.tryEntries.length-1;St>=0;--St){var Ht=this.tryEntries[St];if(Ht.finallyLoc===it)return this.complete(Ht.completion,Ht.afterLoc),hn(Ht),Tt}},catch:function(it){for(var St=this.tryEntries.length-1;St>=0;--St){var Ht=this.tryEntries[St];if(Ht.tryLoc===it){var en=Ht.completion;if(en.type==="throw"){var Yt=en.arg;hn(Ht)}return Yt}}throw new Error("illegal catch attempt")},delegateYield:function(it,St,Ht){return this.delegate={iterator:Mn(it),resultName:St,nextLoc:Ht},this.method==="next"&&(this.arg=void 0),Tt}},q}var Se=e(56453);function se(q,$,W,te,ae,ve,Be){try{var Ae=q[ve](Be),Ze=Ae.value}catch(xt){W(xt);return}Ae.done?$(Ze):Promise.resolve(Ze).then(te,ae)}function Te(q){return function(){var $=this,W=arguments;return new Promise(function(te,ae){var ve=q.apply($,W);function Be(Ze){se(ve,te,ae,Be,Ae,"next",Ze)}function Ae(Ze){se(ve,te,ae,Be,Ae,"throw",Ze)}Be(void 0)})}}var le=e(52469),ue=e(99046);function V(q){if(typeof Symbol!="undefined"&&q[Symbol.iterator]!=null||q["@@iterator"]!=null)return Array.from(q)}var L=e(79020),z=e(52557);function X(q){return(0,ue.Z)(q)||V(q)||(0,L.Z)(q)||(0,z.Z)()}function P(q,$){if(!(q instanceof $))throw new TypeError("Cannot call a class as a function")}var J=e(26690);function ge(q,$){for(var W=0;W<$.length;W++){var te=$[W];te.enumerable=te.enumerable||!1,te.configurable=!0,"value"in te&&(te.writable=!0),Object.defineProperty(q,(0,J.Z)(te.key),te)}}function We(q,$,W){return $&&ge(q.prototype,$),W&&ge(q,W),Object.defineProperty(q,"prototype",{writable:!1}),q}var we=e(24255);function he(q,$){if(!q)throw new Error($)}function ze(q){var $=q.fns,W=q.args;if($.length===1)return $[0];var te=$.pop();return $.reduce(function(ae,ve){return function(){return ve(ae,W)}},te)}function Le(q){return!!q&&(0,re.Z)(q)==="object"&&typeof q.then=="function"}var Ne;(function(q){q.compose="compose",q.modify="modify",q.event="event"})(Ne||(Ne={}));var _=function(){function q($){P(this,q),(0,we.Z)(this,"opts",void 0),(0,we.Z)(this,"hooks",{}),this.opts=$}return We(q,[{key:"register",value:function(W){var te=this;he(W.apply,"plugin register failed, apply must supplied"),Object.keys(W.apply).forEach(function(ae){he(te.opts.validKeys.indexOf(ae)>-1,"register failed, invalid key ".concat(ae," ").concat(W.path?"from plugin ".concat(W.path):"",".")),te.hooks[ae]=(te.hooks[ae]||[]).concat(W.apply[ae])})}},{key:"getHooks",value:function(W){var te=W.split("."),ae=X(te),ve=ae[0],Be=ae.slice(1),Ae=this.hooks[ve]||[];return Be.length&&(Ae=Ae.map(function(Ze){try{var xt=Ze,Nt=(0,le.Z)(Be),Tt;try{for(Nt.s();!(Tt=Nt.n()).done;){var Dt=Tt.value;xt=xt[Dt]}}catch(S){Nt.e(S)}finally{Nt.f()}return xt}catch(S){return null}}).filter(Boolean)),Ae}},{key:"applyPlugins",value:function(W){var te=W.key,ae=W.type,ve=W.initialValue,Be=W.args,Ae=W.async,Ze=this.getHooks(te)||[];switch(Be&&he((0,re.Z)(Be)==="object","applyPlugins failed, args must be plain object."),Ae&&he(ae===Ne.modify||ae===Ne.event,"async only works with modify and event type."),ae){case Ne.modify:return Ae?Ze.reduce(function(){var xt=Te(ce().mark(function Nt(Tt,Dt){var S;return ce().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:if(he(typeof Dt=="function"||(0,re.Z)(Dt)==="object"||Le(Dt),"applyPlugins failed, all hooks for key ".concat(te," must be function, plain object or Promise.")),!Le(Tt)){Ce.next=5;break}return Ce.next=4,Tt;case 4:Tt=Ce.sent;case 5:if(typeof Dt!="function"){Ce.next=16;break}if(S=Dt(Tt,Be),!Le(S)){Ce.next=13;break}return Ce.next=10,S;case 10:return Ce.abrupt("return",Ce.sent);case 13:return Ce.abrupt("return",S);case 14:Ce.next=21;break;case 16:if(!Le(Dt)){Ce.next=20;break}return Ce.next=19,Dt;case 19:Dt=Ce.sent;case 20:return Ce.abrupt("return",(0,Se.Z)((0,Se.Z)({},Tt),Dt));case 21:case"end":return Ce.stop()}},Nt)}));return function(Nt,Tt){return xt.apply(this,arguments)}}(),Le(ve)?ve:Promise.resolve(ve)):Ze.reduce(function(xt,Nt){return he(typeof Nt=="function"||(0,re.Z)(Nt)==="object","applyPlugins failed, all hooks for key ".concat(te," must be function or plain object.")),typeof Nt=="function"?Nt(xt,Be):(0,Se.Z)((0,Se.Z)({},xt),Nt)},ve);case Ne.event:return Te(ce().mark(function xt(){var Nt,Tt,Dt,S;return ce().wrap(function(Ce){for(;;)switch(Ce.prev=Ce.next){case 0:Nt=(0,le.Z)(Ze),Ce.prev=1,Nt.s();case 3:if((Tt=Nt.n()).done){Ce.next=12;break}if(Dt=Tt.value,he(typeof Dt=="function","applyPlugins failed, all hooks for key ".concat(te," must be function.")),S=Dt(Be),!(Ae&&Le(S))){Ce.next=10;break}return Ce.next=10,S;case 10:Ce.next=3;break;case 12:Ce.next=17;break;case 14:Ce.prev=14,Ce.t0=Ce.catch(1),Nt.e(Ce.t0);case 17:return Ce.prev=17,Nt.f(),Ce.finish(17);case 20:case"end":return Ce.stop()}},xt,null,[[1,14,17,20]])}))();case Ne.compose:return function(){return ze({fns:Ze.concat(ve),args:Be})()}}}}],[{key:"create",value:function(W){var te=new q({validKeys:W.validKeys});return W.plugins.forEach(function(ae){te.register(ae)}),te}}]),q}(),pe=e(8634),me=e(31077),Re=e.n(me),ot=0,at=0;function dt(q,$){if(!1)var W}function Me(q){return JSON.stringify(q,null,2)}function Oe(q){var $=q.length>1?q.map(Ee).join(" "):q[0];return Re()($)==="object"?"".concat(Me($)):$.toString()}function Ee(q){return Re()(q)==="object"?"".concat(JSON.stringify(q)):q.toString()}var xe={log:function(){for(var $=arguments.length,W=new Array($),te=0;te<$;te++)W[te]=arguments[te];dt("log",Oe(W))},info:function(){for(var $=arguments.length,W=new Array($),te=0;te<$;te++)W[te]=arguments[te];dt("info",Oe(W))},warn:function(){for(var $=arguments.length,W=new Array($),te=0;te<$;te++)W[te]=arguments[te];dt("warn",Oe(W))},error:function(){for(var $=arguments.length,W=new Array($),te=0;te<$;te++)W[te]=arguments[te];dt("error",Oe(W))},group:function(){at++},groupCollapsed:function(){at++},groupEnd:function(){at&&--at},clear:function(){dt("clear")},trace:function(){var $;($=console).trace.apply($,arguments)},profile:function(){var $;($=console).profile.apply($,arguments)},profileEnd:function(){var $;($=console).profileEnd.apply($,arguments)}}},52120:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var dumi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(79864),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50959);function ownKeys(l,c){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);c&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable})),e.push.apply(e,i)}return e}function _objectSpread(l){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?ownKeys(Object(e),!0).forEach(function(i){_defineProperty(l,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(e,i))})}return l}function _defineProperty(l,c,e){return c in l?Object.defineProperty(l,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[c]=e,l}function _slicedToArray(l,c){return _arrayWithHoles(l)||_iterableToArrayLimit(l,c)||_unsupportedIterableToArray(l,c)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(l,c){if(l){if(typeof l=="string")return _arrayLikeToArray(l,c);var e=Object.prototype.toString.call(l).slice(8,-1);if(e==="Object"&&l.constructor&&(e=l.constructor.name),e==="Map"||e==="Set")return Array.from(l);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(l,c)}}function _arrayLikeToArray(l,c){(c==null||c>l.length)&&(c=l.length);for(var e=0,i=new Array(c);e<c;e++)i[e]=l[e];return i}function _iterableToArrayLimit(l,c){var e=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(e!=null){var i=[],s=!0,o=!1,r,d;try{for(e=e.call(l);!(s=(r=e.next()).done)&&(i.push(r.value),!(c&&i.length===c));s=!0);}catch(m){o=!0,d=m}finally{try{!s&&e.return!=null&&e.return()}finally{if(o)throw d}}return i}}function _arrayWithHoles(l){if(Array.isArray(l))return l}function _typeof(l){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},_typeof(l)}function builtInProcessor(entity,entryExports){var mod;switch(entity.$$__type){case"function":return eval(entity.$$__body.sourceCode);case"element":return mod=entity.$$__body.componentName.split(".").reduce(function(l,c){return l[c]},entryExports),mod===void 0?entity.$$__body.componentName:"_InternalPanelDoNotUseOrYouWillBeFired"in mod?mod._InternalPanelDoNotUseOrYouWillBeFired:mod}}function deepReplace(l,c){return Array.isArray(l)?l.map(function(e){return deepReplace(e,c)}):_typeof(l)==="object"&&(l==null?void 0:l.$$__type)==="element"?translatePresetToReact(l.$$__body,c):_typeof(l)==="object"&&Object.prototype.toString.call(l)==="[object Object]"?Object.entries(l).reduce(function(e,i){var s=_slicedToArray(i,2),o=s[0],r=s[1];return _objectSpread(_objectSpread({},e),{},_defineProperty({},o,deepReplace(r,c)))},{}):l}function translatePresetToReact(l,c){var e=l.props,i=l.size,s=c({$$__type:"element",$$__body:l});return React.createElement(s,deepReplace(_objectSpread(_objectSpread({},e),{},{style:_objectSpread(_objectSpread({},e.style),i)}),c))}var AtomRenderer=function l(c){var e=useSiteData(),i=e.entryExports;switch(c.type){case"COMPONENT":return translatePresetToReact(c.value,function(s){var o,r;return(o=(r=c.processor)===null||r===void 0?void 0:r.call(c,s,i))!==null&&o!==void 0?o:builtInProcessor(s,i)});default:return React.createElement(React.Fragment,null,c.type," atom is not supported.")}}},14422:function(l,c,e){"use strict";e.d(c,{D:function(){return s},W:function(){return o}});var i=e(50959),s=(0,i.createContext)({pkg:{},entryExports:{},demos:{},components:{},locales:[],themeConfig:{},loading:!1,setLoading:function(){}}),o=function(){return(0,i.useContext)(s)}},15475:function(l,c,e){"use strict";e.d(c,{b:function(){return b}});var i=e(79864),s=e(50959);function o(h,x){return y(h)||v(h,x)||d(h,x)||r()}function r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(h,x){if(h){if(typeof h=="string")return m(h,x);var E=Object.prototype.toString.call(h).slice(8,-1);if(E==="Object"&&h.constructor&&(E=h.constructor.name),E==="Map"||E==="Set")return Array.from(h);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return m(h,x)}}function m(h,x){(x==null||x>h.length)&&(x=h.length);for(var E=0,w=new Array(x);E<x;E++)w[E]=h[E];return w}function v(h,x){var E=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(E!=null){var w=[],C=!0,j=!1,N,D;try{for(E=E.call(h);!(C=(N=E.next()).done)&&(w.push(N.value),!(x&&w.length===x));C=!0);}catch(B){j=!0,D=B}finally{try{!C&&E.return!=null&&E.return()}finally{if(j)throw D}}return w}}function y(h){if(Array.isArray(h))return h}var b=function(){var x=(0,i.YB)(),E=(0,i.WF)(),w=E.locales,C=(0,s.useState)(function(){return w.find(function(D){var B=D.id;return B===x.locale})}),j=o(C,1),N=j[0];return N}},67541:function(l,c,e){"use strict";e.d(c,{AM:function(){return E},LI:function(){return w},M7:function(){return C},RX:function(){return x},qu:function(){return j}});var i=e(79864),s=e(50959),o=e(15475);function r(N){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},r(N)}function d(N,D){return h(N)||b(N,D)||v(N,D)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(N,D){if(N){if(typeof N=="string")return y(N,D);var B=Object.prototype.toString.call(N).slice(8,-1);if(B==="Object"&&N.constructor&&(B=N.constructor.name),B==="Map"||B==="Set")return Array.from(N);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return y(N,D)}}function y(N,D){(D==null||D>N.length)&&(D=N.length);for(var B=0,M=new Array(D);B<D;B++)M[B]=N[B];return M}function b(N,D){var B=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(B!=null){var M=[],Q=!0,F=!1,H,K;try{for(B=B.call(N);!(Q=(H=B.next()).done)&&(M.push(H.value),!(D&&M.length===D));Q=!0);}catch(Y){F=!0,K=Y}finally{try{!Q&&B.return!=null&&B.return()}finally{if(F)throw K}}return M}}function h(N){if(Array.isArray(N))return N}var x=function(){var D=(0,i.YB)(),B=(0,i.Ov)(),M=B.routes,Q=(0,i.WF)(),F=Q.locales,H=(0,s.useState)(function(){var re=F.slice().reverse();return Object.values(M).reduce(function(ce,Se){var se=re.find(function(Te){return"suffix"in Te?Se.path.endsWith(Te.suffix):Se.path.startsWith(Te.base.slice(1))});return Se.parentId==="DocLayout"&&se.id===D.locale&&(ce[Se.id]=Se),ce},{})}),K=d(H,1),Y=K[0];return Y},E=function(D){var B=`/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */`;return D.startsWith("18.")||D==="latest"?"".concat(B,`

import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`):"".concat(B,`

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`)},w=typeof window!="undefined"?s.useLayoutEffect:s.useEffect,C=function(){var D=(0,o.b)();return(0,s.useCallback)(function(B,M){return("order"in B&&"order"in M?B.order-M.order:0)||("link"in B&&"link"in M?B.link.split("/").length-M.link.split("/").length:0)||("path"in B&&"path"in M?B.path.split("/").length-M.path.split("/").length:0)||(B.title?B.title.localeCompare(M.title||"",D.id):-1)},[])},j=function(D,B,M){var Q,F=M[B];switch(r(F)){case"object":D.title=F.title||D.title,D.order=(Q=F.order)!==null&&Q!==void 0?Q:D.order;break;case"string":D.title=F||D.title;break;default:}return D}},2386:function(l,c,e){"use strict";e.d(c,{Il:function(){return s},Ov:function(){return o}});var i=e(50959),s=i.createContext({});function o(){return i.useContext(s)}function r(){var v=useLocation(),y=o(),b=y.clientRoutes,h=matchRoutes(b,v.pathname);return h||[]}function d(){var v=useRouteData(),y=o();return{data:y.serverLoaderData[v.route.id]}}function m(){var v=useRouteData(),y=o();return{data:y.clientLoaderData[v.route.id]}}},52155:function(l,c,e){"use strict";e.d(c,{Q:function(){return o},X:function(){return s}});var i=e(50959),s=i.createContext(void 0);function o(){return i.useContext(s)}},84875:function(l,c){var e,i;(function(){"use strict";var s={}.hasOwnProperty,o="[native code]";function r(){for(var d=[],m=0;m<arguments.length;m++){var v=arguments[m];if(v){var y=typeof v;if(y==="string"||y==="number")d.push(v);else if(Array.isArray(v)){if(v.length){var b=r.apply(null,v);b&&d.push(b)}}else if(y==="object"){if(v.toString!==Object.prototype.toString&&!v.toString.toString().includes("[native code]")){d.push(v.toString());continue}for(var h in v)s.call(v,h)&&v[h]&&d.push(h)}}}return d.join(" ")}l.exports?(r.default=r,l.exports=r):(e=[],i=function(){return r}.apply(c,e),i!==void 0&&(l.exports=i))})()},874:function(l,c,e){"use strict";var i=e(24328),s={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function r(m){var v=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return m.replace(/#{\s*key\s*}/g,v)}function d(m,v){var y,b,h,x,E,w,C=!1;v||(v={}),y=v.debug||!1;try{h=i(),x=document.createRange(),E=document.getSelection(),w=document.createElement("span"),w.textContent=m,w.ariaHidden="true",w.style.all="unset",w.style.position="fixed",w.style.top=0,w.style.clip="rect(0, 0, 0, 0)",w.style.whiteSpace="pre",w.style.webkitUserSelect="text",w.style.MozUserSelect="text",w.style.msUserSelect="text",w.style.userSelect="text",w.addEventListener("copy",function(N){if(N.stopPropagation(),v.format)if(N.preventDefault(),typeof N.clipboardData=="undefined"){y&&console.warn("unable to use e.clipboardData"),y&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var D=s[v.format]||s.default;window.clipboardData.setData(D,m)}else N.clipboardData.clearData(),N.clipboardData.setData(v.format,m);v.onCopy&&(N.preventDefault(),v.onCopy(N.clipboardData))}),document.body.appendChild(w),x.selectNodeContents(w),E.addRange(x);var j=document.execCommand("copy");if(!j)throw new Error("copy command was unsuccessful");C=!0}catch(N){y&&console.error("unable to copy using execCommand: ",N),y&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(v.format||"text",m),v.onCopy&&v.onCopy(window.clipboardData),C=!0}catch(D){y&&console.error("unable to copy using clipboardData: ",D),y&&console.error("falling back to prompt"),b=r("message"in v?v.message:o),window.prompt(b,m)}}finally{E&&(typeof E.removeRange=="function"?E.removeRange(x):E.removeAllRanges()),w&&document.body.removeChild(w),h()}return C}l.exports=d},41052:function(l,c,e){var i=e(68045),s=e(47819),o=TypeError;l.exports=function(r){if(i(r))return r;throw o(s(r)+" is not a function")}},87203:function(l,c,e){var i=e(55336),s=e(47819),o=TypeError;l.exports=function(r){if(i(r))return r;throw o(s(r)+" is not a constructor")}},52372:function(l,c,e){var i=e(70821).has;l.exports=function(s){return i(s),s}},76106:function(l,c,e){var i=e(68045),s=String,o=TypeError;l.exports=function(r){if(typeof r=="object"||i(r))return r;throw o("Can't set "+s(r)+" as a prototype")}},66149:function(l,c,e){var i=e(58618).has;l.exports=function(s){return i(s),s}},25996:function(l,c,e){var i=e(19178).has;l.exports=function(s){return i(s),s}},63696:function(l,c,e){var i=e(93489).has;l.exports=function(s){return i(s),s}},4943:function(l,c,e){var i=e(21288),s=e(24972),o=e(34410).f,r=i("unscopables"),d=Array.prototype;d[r]==null&&o(d,r,{configurable:!0,value:s(null)}),l.exports=function(m){d[r][m]=!0}},70911:function(l,c,e){var i=e(15726),s=TypeError;l.exports=function(o,r){if(i(r,o))return o;throw s("Incorrect invocation")}},60930:function(l,c,e){var i=e(34157),s=String,o=TypeError;l.exports=function(r){if(i(r))return r;throw o(s(r)+" is not an object")}},15705:function(l){l.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"},27466:function(l,c,e){var i=e(7979);l.exports=i(function(){if(typeof ArrayBuffer=="function"){var s=new ArrayBuffer(8);Object.isExtensible(s)&&Object.defineProperty(s,"a",{value:8})}})},12287:function(l,c,e){"use strict";var i=e(15705),s=e(33974),o=e(33463),r=e(68045),d=e(34157),m=e(21220),v=e(959),y=e(47819),b=e(2888),h=e(19866),x=e(34410).f,E=e(15726),w=e(59831),C=e(60466),j=e(21288),N=e(60536),D=e(34402),B=D.enforce,M=D.get,Q=o.Int8Array,F=Q&&Q.prototype,H=o.Uint8ClampedArray,K=H&&H.prototype,Y=Q&&w(Q),re=F&&w(F),ce=Object.prototype,Se=o.TypeError,se=j("toStringTag"),Te=N("TYPED_ARRAY_TAG"),le="TypedArrayConstructor",ue=i&&!!C&&v(o.opera)!=="Opera",V=!1,L,z,X,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},J={BigInt64Array:8,BigUint64Array:8},ge=function(pe){if(!d(pe))return!1;var me=v(pe);return me==="DataView"||m(P,me)||m(J,me)},We=function(_){var pe=w(_);if(d(pe)){var me=M(pe);return me&&m(me,le)?me[le]:We(pe)}},we=function(_){if(!d(_))return!1;var pe=v(_);return m(P,pe)||m(J,pe)},he=function(_){if(we(_))return _;throw Se("Target is not a typed array")},ze=function(_){if(r(_)&&(!C||E(Y,_)))return _;throw Se(y(_)+" is not a typed array constructor")},Le=function(_,pe,me,Re){if(s){if(me)for(var ot in P){var at=o[ot];if(at&&m(at.prototype,_))try{delete at.prototype[_]}catch(dt){try{at.prototype[_]=pe}catch(Me){}}}(!re[_]||me)&&h(re,_,me?pe:ue&&F[_]||pe,Re)}},Ne=function(_,pe,me){var Re,ot;if(s){if(C){if(me){for(Re in P)if(ot=o[Re],ot&&m(ot,_))try{delete ot[_]}catch(at){}}if(!Y[_]||me)try{return h(Y,_,me?pe:ue&&Y[_]||pe)}catch(at){}else return}for(Re in P)ot=o[Re],ot&&(!ot[_]||me)&&h(ot,_,pe)}};for(L in P)z=o[L],X=z&&z.prototype,X?B(X)[le]=z:ue=!1;for(L in J)z=o[L],X=z&&z.prototype,X&&(B(X)[le]=z);if((!ue||!r(Y)||Y===Function.prototype)&&(Y=function(){throw Se("Incorrect invocation")},ue))for(L in P)o[L]&&C(o[L],Y);if((!ue||!re||re===ce)&&(re=Y.prototype,ue))for(L in P)o[L]&&C(o[L].prototype,re);if(ue&&w(K)!==re&&C(K,re),s&&!m(re,se)){V=!0,x(re,se,{get:function(){return d(this)?this[Te]:void 0}});for(L in P)o[L]&&b(o[L],Te,L)}l.exports={NATIVE_ARRAY_BUFFER_VIEWS:ue,TYPED_ARRAY_TAG:V&&Te,aTypedArray:he,aTypedArrayConstructor:ze,exportTypedArrayMethod:Le,exportTypedArrayStaticMethod:Ne,getTypedArrayConstructor:We,isView:ge,isTypedArray:we,TypedArray:Y,TypedArrayPrototype:re}},39133:function(l,c,e){"use strict";var i=e(46861),s=e(56393),o=e(63947),r=e(55336),d=e(42195),m=e(45245),v=e(78049),y=e(95879),b=e(24368),h=e(76232),x=e(75605),E=e(21288),w=e(83491),C=e(81e3).toArray,j=E("asyncIterator"),N=s(h("Array").values),D=s(N([]).next),B=function(){return new M(this)},M=function(Q){this.iterator=N(Q)};M.prototype.next=function(){return D(this.iterator)},l.exports=function(F){var H=this,K=arguments.length,Y=K>1?arguments[1]:void 0,re=K>2?arguments[2]:void 0;return new(x("Promise"))(function(ce){var Se=o(F);Y!==void 0&&(Y=i(Y,re));var se=b(Se,j),Te=se?void 0:y(Se)||B,le=r(H)?new H:[],ue=se?d(Se,se):new w(v(m(Se,Te)));ce(C(ue,Y,le))})}},96028:function(l,c,e){var i=e(63354);l.exports=function(s,o){for(var r=0,d=i(o),m=new s(d);d>r;)m[r]=o[r++];return m}},42666:function(l,c,e){"use strict";var i=e(46861),s=e(56393),o=e(44063),r=e(63947),d=e(63354),m=e(70821),v=m.Map,y=m.get,b=m.has,h=m.set,x=s([].push);l.exports=function(w){for(var C=r(this),j=o(C),N=i(w,arguments.length>1?arguments[1]:void 0),D=new v,B=d(j),M=0,Q,F;B>M;M++)F=j[M],Q=N(F,M,C),b(D,Q)?x(y(D,Q),F):h(D,Q,[F]);return D}},38035:function(l,c,e){var i=e(46861),s=e(56393),o=e(44063),r=e(63947),d=e(51505),m=e(63354),v=e(24972),y=e(96028),b=Array,h=s([].push);l.exports=function(x,E,w,C){for(var j=r(x),N=o(j),D=i(E,w),B=v(null),M=m(N),Q=0,F,H,K;M>Q;Q++)K=N[Q],H=d(D(K,Q,j)),H in B?h(B[H],K):B[H]=[K];if(C&&(F=C(j),F!==b))for(H in B)B[H]=y(F,B[H]);return B}},87423:function(l,c,e){var i=e(19114),s=e(90753),o=e(63354),r=function(d){return function(m,v,y){var b=i(m),h=o(b),x=s(y,h),E;if(d&&v!=v){for(;h>x;)if(E=b[x++],E!=E)return!0}else for(;h>x;x++)if((d||x in b)&&b[x]===v)return d||x||0;return!d&&-1}};l.exports={includes:r(!0),indexOf:r(!1)}},57773:function(l,c,e){var i=e(46861),s=e(44063),o=e(63947),r=e(63354),d=function(m){var v=m==1;return function(y,b,h){for(var x=o(y),E=s(x),w=i(b,h),C=r(E),j,N;C-- >0;)if(j=E[C],N=w(j,C,x),N)switch(m){case 0:return j;case 1:return C}return v?-1:void 0}};l.exports={findLast:d(0),findLastIndex:d(1)}},6318:function(l,c,e){var i=e(46861),s=e(56393),o=e(44063),r=e(63947),d=e(63354),m=e(69599),v=s([].push),y=function(b){var h=b==1,x=b==2,E=b==3,w=b==4,C=b==6,j=b==7,N=b==5||C;return function(D,B,M,Q){for(var F=r(D),H=o(F),K=i(B,M),Y=d(H),re=0,ce=Q||m,Se=h?ce(D,Y):x||j?ce(D,0):void 0,se,Te;Y>re;re++)if((N||re in H)&&(se=H[re],Te=K(se,re,F),b))if(h)Se[re]=Te;else if(Te)switch(b){case 3:return!0;case 5:return se;case 6:return re;case 2:v(Se,se)}else switch(b){case 4:return!1;case 7:v(Se,se)}return C?-1:E||w?w:Se}};l.exports={forEach:y(0),map:y(1),filter:y(2),some:y(3),every:y(4),find:y(5),findIndex:y(6),filterReject:y(7)}},74773:function(l,c,e){"use strict";var i=e(7979);l.exports=function(s,o){var r=[][s];return!!r&&i(function(){r.call(null,o||function(){return 1},1)})}},79742:function(l,c,e){var i=e(41052),s=e(63947),o=e(44063),r=e(63354),d=TypeError,m=function(v){return function(y,b,h,x){i(b);var E=s(y),w=o(E),C=r(E),j=v?C-1:0,N=v?-1:1;if(h<2)for(;;){if(j in w){x=w[j],j+=N;break}if(j+=N,v?j<0:C<=j)throw d("Reduce of empty array with no initial value")}for(;v?j>=0:C>j;j+=N)j in w&&(x=b(x,w[j],j,E));return x}};l.exports={left:m(!1),right:m(!0)}},27116:function(l,c,e){"use strict";var i=e(33974),s=e(89494),o=TypeError,r=Object.getOwnPropertyDescriptor,d=i&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(m){return m instanceof TypeError}}();l.exports=d?function(m,v){if(s(m)&&!r(m,"length").writable)throw o("Cannot set read only .length");return m.length=v}:function(m,v){return m.length=v}},52787:function(l,c,e){var i=e(90753),s=e(63354),o=e(8181),r=Array,d=Math.max;l.exports=function(m,v,y){for(var b=s(m),h=i(v,b),x=i(y===void 0?b:y,b),E=r(d(x-h,0)),w=0;h<x;h++,w++)o(E,w,m[h]);return E.length=w,E}},54064:function(l,c,e){var i=e(56393);l.exports=i([].slice)},73524:function(l,c,e){var i=e(89494),s=e(55336),o=e(34157),r=e(21288),d=r("species"),m=Array;l.exports=function(v){var y;return i(v)&&(y=v.constructor,s(y)&&(y===m||i(y.prototype))?y=void 0:o(y)&&(y=y[d],y===null&&(y=void 0))),y===void 0?m:y}},69599:function(l,c,e){var i=e(73524);l.exports=function(s,o){return new(i(s))(o===0?0:o)}},43268:function(l,c,e){var i=e(63354);l.exports=function(s,o){for(var r=i(s),d=new o(r),m=0;m<r;m++)d[m]=s[r-m-1];return d}},72145:function(l,c,e){"use strict";var i=e(56393),s=e(41052),o=e(60689),r=e(63354),d=e(63947),m=e(70821),v=e(36924),y=m.Map,b=m.has,h=m.set,x=i([].push);l.exports=function(w){var C=d(this),j=r(C),N=[],D=new y,B=o(w)?function(H){return H}:s(w),M,Q,F;for(M=0;M<j;M++)Q=C[M],F=B(Q),b(D,F)||h(D,F,Q);return v(D,function(H){x(N,H)}),N}},24122:function(l,c,e){var i=e(63354),s=e(54622),o=RangeError;l.exports=function(r,d,m,v){var y=i(r),b=s(m),h=b<0?y+b:b;if(h>=y||h<0)throw o("Incorrect index");for(var x=new d(y),E=0;E<y;E++)x[E]=E===h?v:r[E];return x}},83491:function(l,c,e){"use strict";var i=e(72995),s=e(60930),o=e(24972),r=e(24368),d=e(23204),m=e(34402),v=e(75605),y=e(99217),b=e(71025),h=v("Promise"),x="AsyncFromSyncIterator",E=m.set,w=m.getterFor(x),C=function(N,D,B){var M=N.done;h.resolve(N.value).then(function(Q){D(b(Q,M))},B)},j=function(D){D.type=x,E(this,D)};j.prototype=d(o(y),{next:function(){var D=w(this);return new h(function(B,M){var Q=s(i(D.next,D.iterator));C(Q,B,M)})},return:function(){var N=w(this).iterator;return new h(function(D,B){var M=r(N,"return");if(M===void 0)return D(b(void 0,!0));var Q=s(i(M,N));C(Q,D,B)})}}),l.exports=j},70694:function(l,c,e){var i=e(72995),s=e(75605),o=e(24368);l.exports=function(r,d,m,v){try{var y=o(r,"return");if(y)return s("Promise").resolve(i(y,r)).then(function(){d(m)},function(b){v(b)})}catch(b){return v(b)}d(m)}},18037:function(l,c,e){"use strict";var i=e(72995),s=e(40383),o=e(60930),r=e(24972),d=e(2888),m=e(23204),v=e(21288),y=e(34402),b=e(75605),h=e(24368),x=e(99217),E=e(71025),w=e(76079),C=b("Promise"),j="AsyncIteratorHelper",N="WrapForValidAsyncIterator",D=y.set,B=v("toStringTag"),M=function(H){var K=!H,Y=H?N:j,re=y.getterFor(Y),ce=function(Te){var le=s(function(){return re(Te)}),ue=le.error,V=le.value;return ue||K&&V.done?{exit:!0,value:ue?C.reject(V):C.resolve(E(void 0,!0))}:{exit:!1,value:V}},Se=function(Te,le){var ue=function(){var V=le();if(K){Te.awaiting=V;var L=function(){Te.awaiting===V&&(Te.awaiting=null)};V.then(L,L)}return V};return Te.awaiting?Te.awaiting=Te.awaiting.then(ue,ue):ue()},se=m(r(x),{next:function(){var le=ce(this),ue=le.exit,V=le.value;return ue?V:Se(V,function(){var L=s(function(){return o(V.nextHandler(C))}),z=L.error,X=L.value;return z&&(V.done=!0),z?C.reject(X):C.resolve(X)})},return:function(){var Te=ce(this),le=Te.exit,ue=Te.value;return le?ue:Se(ue,function(){ue.done=!0;var V=ue.iterator,L,z,X=s(function(){if(ue.inner)try{w(ue.inner.iterator,"return")}catch(P){return w(V,"throw",P)}return h(V,"return")});return L=z=X.value,X.error?C.reject(z):L===void 0?C.resolve(E(void 0,!0)):(X=s(function(){return i(L,V)}),z=X.value,X.error?C.reject(z):H?C.resolve(z):C.resolve(z).then(function(P){return o(P),E(void 0,!0)}))})}});return K&&d(se,B,"Async Iterator Helper"),se},Q=M(!1),F=M(!0);l.exports=function(H,K){var Y=K?N:j,re=function(Se,se){se?(se.iterator=Se.iterator,se.next=Se.next):se=Se,se.type=Y,se.nextHandler=H,se.counter=0,se.done=!1,se.awaiting=null,D(this,se)};return re.prototype=K?F:Q,re}},82454:function(l,c,e){"use strict";var i=e(72995),s=e(85802),o=function(r,d){return[d,r]};l.exports=function(){return i(s,this,o)}},81e3:function(l,c,e){"use strict";var i=e(72995),s=e(41052),o=e(60930),r=e(34157),d=e(4705),m=e(75605),v=e(78049),y=e(70694),b=function(h){var x=h==0,E=h==1,w=h==2,C=h==3;return function(j,N,D){var B=v(j),M=m("Promise"),Q=B.iterator,F=B.next,H=0,K=N!==void 0;return(K||!x)&&s(N),new M(function(Y,re){var ce=function(se){y(Q,re,se,re)},Se=function(){try{if(K)try{d(H)}catch(se){ce(se)}M.resolve(o(i(F,Q))).then(function(se){try{if(o(se).done)x?(D.length=H,Y(D)):Y(C?!1:w||void 0);else{var Te=se.value;try{if(K){var le=N(Te,H),ue=function(V){if(E)Se();else if(w)V?Se():y(Q,Y,!1,re);else if(x)try{D[H++]=V,Se()}catch(L){ce(L)}else V?y(Q,Y,C||Te,re):Se()};r(le)?M.resolve(le).then(ue,ce):ue(le)}else D[H++]=Te,Se()}catch(V){ce(V)}}}catch(V){re(V)}},re)}catch(se){re(se)}};Se()})}};l.exports={toArray:b(0),forEach:b(1),every:b(2),some:b(3),find:b(4)}},85802:function(l,c,e){"use strict";var i=e(72995),s=e(41052),o=e(60930),r=e(34157),d=e(78049),m=e(18037),v=e(71025),y=e(70694),b=m(function(h){var x=this,E=x.iterator,w=x.mapper;return new h(function(C,j){var N=function(B){x.done=!0,j(B)},D=function(B){y(E,N,B,N)};h.resolve(o(i(x.next,E))).then(function(B){try{if(o(B).done)x.done=!0,C(v(void 0,!0));else{var M=B.value;try{var Q=w(M,x.counter++),F=function(H){C(v(H,!1))};r(Q)?h.resolve(Q).then(F,D):F(Q)}catch(H){D(H)}}}catch(H){N(H)}},N)})});l.exports=function(x){return new b(d(this),{mapper:s(x)})}},99217:function(l,c,e){var i=e(33463),s=e(25085),o=e(68045),r=e(24972),d=e(59831),m=e(19866),v=e(21288),y=e(21214),b="USE_FUNCTION_CONSTRUCTOR",h=v("asyncIterator"),x=i.AsyncIterator,E=s.AsyncIteratorPrototype,w,C;if(E)w=E;else if(o(x))w=x.prototype;else if(s[b]||i[b])try{C=d(d(d(Function("return async function*(){}()")()))),d(C)===Object.prototype&&(w=C)}catch(j){}w?y&&(w=r(w)):w={},o(w[h])||m(w,h,function(){return this}),l.exports=w},20612:function(l,c,e){var i=e(72995),s=e(18037);l.exports=s(function(){return i(this.next,this.iterator)},!0)},44658:function(l,c,e){var i=e(60930),s=e(76079);l.exports=function(o,r,d,m){try{return m?r(i(d)[0],d[1]):r(d)}catch(v){s(o,"throw",v)}}},39433:function(l,c,e){var i=e(21288),s=i("iterator"),o=!1;try{var r=0,d={next:function(){return{done:!!r++}},return:function(){o=!0}};d[s]=function(){return this},Array.from(d,function(){throw 2})}catch(m){}l.exports=function(m,v){if(!v&&!o)return!1;var y=!1;try{var b={};b[s]=function(){return{next:function(){return{done:y=!0}}}},m(b)}catch(h){}return y}},44100:function(l,c,e){var i=e(56393),s=i({}.toString),o=i("".slice);l.exports=function(r){return o(s(r),8,-1)}},959:function(l,c,e){var i=e(93356),s=e(68045),o=e(44100),r=e(21288),d=r("toStringTag"),m=Object,v=o(function(){return arguments}())=="Arguments",y=function(b,h){try{return b[h]}catch(x){}};l.exports=i?o:function(b){var h,x,E;return b===void 0?"Undefined":b===null?"Null":typeof(x=y(h=m(b),d))=="string"?x:v?o(h):(E=o(h))=="Object"&&s(h.callee)?"Arguments":E}},79202:function(l,c,e){"use strict";var i=e(46861),s=e(72995),o=e(41052),r=e(87203),d=e(60689),m=e(7291),v=[].push;l.exports=function(b){var h=arguments.length,x=h>1?arguments[1]:void 0,E,w,C,j;return r(this),E=x!==void 0,E&&o(x),d(b)?new this:(w=[],E?(C=0,j=i(x,h>2?arguments[2]:void 0),m(b,function(N){s(v,w,j(N,C++))})):m(b,v,{that:w}),new this(w))}},64533:function(l,c,e){"use strict";var i=e(54064);l.exports=function(){return new this(i(arguments))}},58913:function(l,c,e){"use strict";var i=e(34410).f,s=e(24972),o=e(23204),r=e(46861),d=e(70911),m=e(60689),v=e(7291),y=e(62291),b=e(71025),h=e(34345),x=e(33974),E=e(34840).fastKey,w=e(34402),C=w.set,j=w.getterFor;l.exports={getConstructor:function(N,D,B,M){var Q=N(function(re,ce){d(re,F),C(re,{type:D,index:s(null),first:void 0,last:void 0,size:0}),x||(re.size=0),m(ce)||v(ce,re[M],{that:re,AS_ENTRIES:B})}),F=Q.prototype,H=j(D),K=function(re,ce,Se){var se=H(re),Te=Y(re,ce),le,ue;return Te?Te.value=Se:(se.last=Te={index:ue=E(ce,!0),key:ce,value:Se,previous:le=se.last,next:void 0,removed:!1},se.first||(se.first=Te),le&&(le.next=Te),x?se.size++:re.size++,ue!=="F"&&(se.index[ue]=Te)),re},Y=function(re,ce){var Se=H(re),se=E(ce),Te;if(se!=="F")return Se.index[se];for(Te=Se.first;Te;Te=Te.next)if(Te.key==ce)return Te};return o(F,{clear:function(){for(var ce=this,Se=H(ce),se=Se.index,Te=Se.first;Te;)Te.removed=!0,Te.previous&&(Te.previous=Te.previous.next=void 0),delete se[Te.index],Te=Te.next;Se.first=Se.last=void 0,x?Se.size=0:ce.size=0},delete:function(re){var ce=this,Se=H(ce),se=Y(ce,re);if(se){var Te=se.next,le=se.previous;delete Se.index[se.index],se.removed=!0,le&&(le.next=Te),Te&&(Te.previous=le),Se.first==se&&(Se.first=Te),Se.last==se&&(Se.last=le),x?Se.size--:ce.size--}return!!se},forEach:function(ce){for(var Se=H(this),se=r(ce,arguments.length>1?arguments[1]:void 0),Te;Te=Te?Te.next:Se.first;)for(se(Te.value,Te.key,this);Te&&Te.removed;)Te=Te.previous},has:function(ce){return!!Y(this,ce)}}),o(F,B?{get:function(ce){var Se=Y(this,ce);return Se&&Se.value},set:function(ce,Se){return K(this,ce===0?0:ce,Se)}}:{add:function(ce){return K(this,ce=ce===0?0:ce,ce)}}),x&&i(F,"size",{get:function(){return H(this).size}}),Q},setStrong:function(N,D,B){var M=D+" Iterator",Q=j(D),F=j(M);y(N,D,function(H,K){C(this,{type:M,target:H,state:Q(H),kind:K,last:void 0})},function(){for(var H=F(this),K=H.kind,Y=H.last;Y&&Y.removed;)Y=Y.previous;return!H.target||!(H.last=Y=Y?Y.next:H.state.first)?(H.target=void 0,b(void 0,!0)):K=="keys"?b(Y.key,!1):K=="values"?b(Y.value,!1):b([Y.key,Y.value],!1)},B?"entries":"values",!B,!0),h(D)}}},40763:function(l,c,e){"use strict";var i=e(56393),s=e(23204),o=e(34840).getWeakData,r=e(70911),d=e(60930),m=e(60689),v=e(34157),y=e(7291),b=e(6318),h=e(21220),x=e(34402),E=x.set,w=x.getterFor,C=b.find,j=b.findIndex,N=i([].splice),D=0,B=function(F){return F.frozen||(F.frozen=new M)},M=function(){this.entries=[]},Q=function(F,H){return C(F.entries,function(K){return K[0]===H})};M.prototype={get:function(F){var H=Q(this,F);if(H)return H[1]},has:function(F){return!!Q(this,F)},set:function(F,H){var K=Q(this,F);K?K[1]=H:this.entries.push([F,H])},delete:function(F){var H=j(this.entries,function(K){return K[0]===F});return~H&&N(this.entries,H,1),!!~H}},l.exports={getConstructor:function(F,H,K,Y){var re=F(function(Te,le){r(Te,ce),E(Te,{type:H,id:D++,frozen:void 0}),m(le)||y(le,Te[Y],{that:Te,AS_ENTRIES:K})}),ce=re.prototype,Se=w(H),se=function(Te,le,ue){var V=Se(Te),L=o(d(le),!0);return L===!0?B(V).set(le,ue):L[V.id]=ue,Te};return s(ce,{delete:function(Te){var le=Se(this);if(!v(Te))return!1;var ue=o(Te);return ue===!0?B(le).delete(Te):ue&&h(ue,le.id)&&delete ue[le.id]},has:function(le){var ue=Se(this);if(!v(le))return!1;var V=o(le);return V===!0?B(ue).has(le):V&&h(V,ue.id)}}),s(ce,K?{get:function(le){var ue=Se(this);if(v(le)){var V=o(le);return V===!0?B(ue).get(le):V?V[ue.id]:void 0}},set:function(le,ue){return se(this,le,ue)}}:{add:function(le){return se(this,le,!0)}}),re}}},7778:function(l,c,e){"use strict";var i=e(51481),s=e(33463),o=e(56393),r=e(23322),d=e(19866),m=e(34840),v=e(7291),y=e(70911),b=e(68045),h=e(60689),x=e(34157),E=e(7979),w=e(39433),C=e(30160),j=e(13888);l.exports=function(N,D,B){var M=N.indexOf("Map")!==-1,Q=N.indexOf("Weak")!==-1,F=M?"set":"add",H=s[N],K=H&&H.prototype,Y=H,re={},ce=function(L){var z=o(K[L]);d(K,L,L=="add"?function(P){return z(this,P===0?0:P),this}:L=="delete"?function(X){return Q&&!x(X)?!1:z(this,X===0?0:X)}:L=="get"?function(P){return Q&&!x(P)?void 0:z(this,P===0?0:P)}:L=="has"?function(P){return Q&&!x(P)?!1:z(this,P===0?0:P)}:function(P,J){return z(this,P===0?0:P,J),this})},Se=r(N,!b(H)||!(Q||K.forEach&&!E(function(){new H().entries().next()})));if(Se)Y=B.getConstructor(D,N,M,F),m.enable();else if(r(N,!0)){var se=new Y,Te=se[F](Q?{}:-0,1)!=se,le=E(function(){se.has(1)}),ue=w(function(L){new H(L)}),V=!Q&&E(function(){for(var L=new H,z=5;z--;)L[F](z,z);return!L.has(-0)});ue||(Y=D(function(L,z){y(L,K);var X=j(new H,L,Y);return h(z)||v(z,X[F],{that:X,AS_ENTRIES:M}),X}),Y.prototype=K,K.constructor=Y),(le||V)&&(ce("delete"),ce("has"),M&&ce("get")),(V||Te)&&ce(F),Q&&K.clear&&delete K.clear}return re[N]=Y,i({global:!0,constructor:!0,forced:Y!=H},re),C(Y,N),Q||B.setStrong(Y,N,M),Y}},54580:function(l,c,e){e(40163),e(36355);var i=e(75605),s=e(24972),o=e(34157),r=Object,d=TypeError,m=i("Map"),v=i("WeakMap"),y=function(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=s(null)};y.prototype.get=function(h,x){return this[h]||(this[h]=x())},y.prototype.next=function(h,x,E){var w=E?this.objectsByIndex[h]||(this.objectsByIndex[h]=new v):this.primitives||(this.primitives=new m),C=w.get(x);return C||w.set(x,C=new y),C};var b=new y;l.exports=function(){var h=b,x=arguments.length,E,w;for(E=0;E<x;E++)o(w=arguments[E])&&(h=h.next(E,w,!0));if(this===r&&h===b)throw d("Composite keys must contain a non-primitive component");for(E=0;E<x;E++)o(w=arguments[E])||(h=h.next(E,w,!1));return h}},64254:function(l,c,e){var i=e(21220),s=e(36616),o=e(87142),r=e(34410);l.exports=function(d,m,v){for(var y=s(m),b=r.f,h=o.f,x=0;x<y.length;x++){var E=y[x];!i(d,E)&&!(v&&i(v,E))&&b(d,E,h(m,E))}}},67556:function(l,c,e){var i=e(7979);l.exports=!i(function(){function s(){}return s.prototype.constructor=null,Object.getPrototypeOf(new s)!==s.prototype})},71025:function(l){l.exports=function(c,e){return{value:c,done:e}}},2888:function(l,c,e){var i=e(33974),s=e(34410),o=e(31506);l.exports=i?function(r,d,m){return s.f(r,d,o(1,m))}:function(r,d,m){return r[d]=m,r}},31506:function(l){l.exports=function(c,e){return{enumerable:!(c&1),configurable:!(c&2),writable:!(c&4),value:e}}},8181:function(l,c,e){"use strict";var i=e(51505),s=e(34410),o=e(31506);l.exports=function(r,d,m){var v=i(d);v in r?s.f(r,v,o(0,m)):r[v]=m}},82792:function(l,c,e){var i=e(78137),s=e(34410);l.exports=function(o,r,d){return d.get&&i(d.get,r,{getter:!0}),d.set&&i(d.set,r,{setter:!0}),s.f(o,r,d)}},19866:function(l,c,e){var i=e(68045),s=e(34410),o=e(78137),r=e(99010);l.exports=function(d,m,v,y){y||(y={});var b=y.enumerable,h=y.name!==void 0?y.name:m;if(i(v)&&o(v,h,y),y.global)b?d[m]=v:r(m,v);else{try{y.unsafe?d[m]&&(b=!0):delete d[m]}catch(x){}b?d[m]=v:s.f(d,m,{value:v,enumerable:!1,configurable:!y.nonConfigurable,writable:!y.nonWritable})}return d}},23204:function(l,c,e){var i=e(19866);l.exports=function(s,o,r){for(var d in o)i(s,d,o[d],r);return s}},99010:function(l,c,e){var i=e(33463),s=Object.defineProperty;l.exports=function(o,r){try{s(i,o,{value:r,configurable:!0,writable:!0})}catch(d){i[o]=r}return r}},33974:function(l,c,e){var i=e(7979);l.exports=!i(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},77780:function(l,c,e){var i=e(56393),s=e(46861),o=e(60930),r=e(60689),d=e(24368),m=e(21288),v=m("asyncDispose"),y=m("dispose"),b=i([].push),h=function(w,C){return C=="async-dispose"&&d(w,v)||d(w,y)},x=function(w,C,j){return s(j||h(w,C),w)},E=function(w,C,j,N){var D;if(N)r(C)?D=x(void 0,j,N):D=x(o(C),j,N);else{if(r(C))return;D=x(C,j)}b(w.stack,D)};l.exports={getDisposeMethod:h,addDisposableResource:E}},94302:function(l){var c=typeof document=="object"&&document.all,e=typeof c=="undefined"&&c!==void 0;l.exports={all:c,IS_HTMLDDA:e}},7815:function(l,c,e){var i=e(33463),s=e(34157),o=i.document,r=s(o)&&s(o.createElement);l.exports=function(d){return r?o.createElement(d):{}}},4705:function(l){var c=TypeError,e=9007199254740991;l.exports=function(i){if(i>e)throw c("Maximum allowed index exceeded");return i}},76703:function(l){l.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},65523:function(l,c,e){var i=e(24297),s=e(14531);l.exports=!i&&!s&&typeof window=="object"&&typeof document=="object"},28070:function(l){l.exports=typeof Bun=="function"&&Bun&&typeof Bun.version=="string"},24297:function(l){l.exports=typeof Deno=="object"&&Deno&&typeof Deno.version=="object"},86653:function(l,c,e){var i=e(52788);l.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},14531:function(l,c,e){var i=e(44100),s=e(33463);l.exports=i(s.process)=="process"},52788:function(l,c,e){var i=e(75605);l.exports=i("navigator","userAgent")||""},66480:function(l,c,e){var i=e(33463),s=e(52788),o=i.process,r=i.Deno,d=o&&o.versions||r&&r.version,m=d&&d.v8,v,y;m&&(v=m.split("."),y=v[0]>0&&v[0]<4?1:+(v[0]+v[1])),!y&&s&&(v=s.match(/Edge\/(\d+)/),(!v||v[1]>=74)&&(v=s.match(/Chrome\/(\d+)/),v&&(y=+v[1]))),l.exports=y},76232:function(l,c,e){var i=e(33463);l.exports=function(s){return i[s].prototype}},4369:function(l){l.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},46367:function(l,c,e){var i=e(56393),s=Error,o=i("".replace),r=function(v){return String(s(v).stack)}("zxcasd"),d=/\n\s*at [^:]*:[^\n]*/,m=d.test(r);l.exports=function(v,y){if(m&&typeof v=="string"&&!s.prepareStackTrace)for(;y--;)v=o(v,d,"");return v}},18307:function(l,c,e){var i=e(7979),s=e(31506);l.exports=!i(function(){var o=Error("a");return"stack"in o?(Object.defineProperty(o,"stack",s(1,7)),o.stack!==7):!0})},51481:function(l,c,e){var i=e(33463),s=e(87142).f,o=e(2888),r=e(19866),d=e(99010),m=e(64254),v=e(23322);l.exports=function(y,b){var h=y.target,x=y.global,E=y.stat,w,C,j,N,D,B;if(x?C=i:E?C=i[h]||d(h,{}):C=(i[h]||{}).prototype,C)for(j in b){if(D=b[j],y.dontCallGetSet?(B=s(C,j),N=B&&B.value):N=C[j],w=v(x?j:h+(E?".":"#")+j,y.forced),!w&&N!==void 0){if(typeof D==typeof N)continue;m(D,N)}(y.sham||N&&N.sham)&&o(D,"sham",!0),r(C,j,D,y)}}},7979:function(l){l.exports=function(c){try{return!!c()}catch(e){return!0}}},42166:function(l,c,e){var i=e(7979);l.exports=!i(function(){return Object.isExtensible(Object.preventExtensions({}))})},24684:function(l,c,e){var i=e(31191),s=Function.prototype,o=s.apply,r=s.call;l.exports=typeof Reflect=="object"&&Reflect.apply||(i?r.bind(o):function(){return r.apply(o,arguments)})},46861:function(l,c,e){var i=e(67101),s=e(41052),o=e(31191),r=i(i.bind);l.exports=function(d,m){return s(d),m===void 0?d:o?r(d,m):function(){return d.apply(m,arguments)}}},31191:function(l,c,e){var i=e(7979);l.exports=!i(function(){var s=function(){}.bind();return typeof s!="function"||s.hasOwnProperty("prototype")})},72995:function(l,c,e){var i=e(31191),s=Function.prototype.call;l.exports=i?s.bind(s):function(){return s.apply(s,arguments)}},20022:function(l,c,e){var i=e(33974),s=e(21220),o=Function.prototype,r=i&&Object.getOwnPropertyDescriptor,d=s(o,"name"),m=d&&function(){}.name==="something",v=d&&(!i||i&&r(o,"name").configurable);l.exports={EXISTS:d,PROPER:m,CONFIGURABLE:v}},67101:function(l,c,e){var i=e(44100),s=e(56393);l.exports=function(o){if(i(o)==="Function")return s(o)}},56393:function(l,c,e){var i=e(31191),s=Function.prototype,o=s.call,r=i&&s.bind.bind(o,o);l.exports=i?r:function(d){return function(){return o.apply(d,arguments)}}},40737:function(l,c,e){var i=e(72995),s=e(68045),o=e(60930),r=e(78049),d=e(95879),m=e(24368),v=e(21288),y=e(83491),b=v("asyncIterator");l.exports=function(x){var E=o(x),w=!0,C=m(E,b),j;return s(C)||(C=d(E),w=!1),s(C)?j=i(C,E):(j=E,w=!0),o(j),r(w?j:new y(r(j)))}},42195:function(l,c,e){var i=e(72995),s=e(83491),o=e(60930),r=e(45245),d=e(78049),m=e(24368),v=e(21288),y=v("asyncIterator");l.exports=function(b,h){var x=arguments.length<2?m(b,y):h;return x?o(i(x,b)):new s(d(r(b)))}},75605:function(l,c,e){var i=e(33463),s=e(68045),o=function(r){return s(r)?r:void 0};l.exports=function(r,d){return arguments.length<2?o(i[r]):i[r]&&i[r][d]}},78049:function(l,c,e){var i=e(41052),s=e(60930);l.exports=function(o){return{iterator:o,next:i(s(o).next)}}},11324:function(l,c,e){var i=e(72995),s=e(68045),o=e(60930),r=e(78049),d=e(95879);l.exports=function(m){var v=o(m),y=d(v);return r(o(s(y)?i(y,v):v))}},95879:function(l,c,e){var i=e(959),s=e(24368),o=e(60689),r=e(97735),d=e(21288),m=d("iterator");l.exports=function(v){if(!o(v))return s(v,m)||s(v,"@@iterator")||r[i(v)]}},45245:function(l,c,e){var i=e(72995),s=e(41052),o=e(60930),r=e(47819),d=e(95879),m=TypeError;l.exports=function(v,y){var b=arguments.length<2?d(v):y;if(s(b))return o(i(b,v));throw m(r(v)+" is not iterable")}},24368:function(l,c,e){var i=e(41052),s=e(60689);l.exports=function(o,r){var d=o[r];return s(d)?void 0:i(d)}},46541:function(l,c,e){var i=e(41052),s=e(60930),o=e(72995),r=e(54622),d=TypeError,m=function(v,y,b,h){this.set=v,this.size=y,this.has=b,this.keys=h};m.prototype={getIterator:function(){return s(o(this.keys,this.set))},includes:function(v){return o(this.has,this.set,v)}},l.exports=function(v){s(v);var y=+v.size;if(y!=y)throw d("Invalid size");return new m(v,r(y),i(v.has),i(v.keys))}},43033:function(l,c,e){var i=e(56393),s=e(63947),o=Math.floor,r=i("".charAt),d=i("".replace),m=i("".slice),v=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,y=/\$([$&'`]|\d{1,2})/g;l.exports=function(b,h,x,E,w,C){var j=x+b.length,N=E.length,D=y;return w!==void 0&&(w=s(w),D=v),d(C,D,function(B,M){var Q;switch(r(M,0)){case"$":return"$";case"&":return b;case"`":return m(h,0,x);case"'":return m(h,j);case"<":Q=w[m(M,1,-1)];break;default:var F=+M;if(F===0)return B;if(F>N){var H=o(F/10);return H===0?B:H<=N?E[H-1]===void 0?r(M,1):E[H-1]+r(M,1):B}Q=E[F-1]}return Q===void 0?"":Q})}},33463:function(l,c,e){var i=function(s){return s&&s.Math==Math&&s};l.exports=i(typeof globalThis=="object"&&globalThis)||i(typeof window=="object"&&window)||i(typeof self=="object"&&self)||i(typeof e.g=="object"&&e.g)||function(){return this}()||Function("return this")()},21220:function(l,c,e){var i=e(56393),s=e(63947),o=i({}.hasOwnProperty);l.exports=Object.hasOwn||function(d,m){return o(s(d),m)}},22568:function(l){l.exports={}},51802:function(l,c,e){var i=e(33463);l.exports=function(s,o){var r=i.console;r&&r.error&&(arguments.length==1?r.error(s):r.error(s,o))}},55732:function(l,c,e){var i=e(75605);l.exports=i("document","documentElement")},97423:function(l,c,e){var i=e(33974),s=e(7979),o=e(7815);l.exports=!i&&!s(function(){return Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a!=7})},44063:function(l,c,e){var i=e(56393),s=e(7979),o=e(44100),r=Object,d=i("".split);l.exports=s(function(){return!r("z").propertyIsEnumerable(0)})?function(m){return o(m)=="String"?d(m,""):r(m)}:r},13888:function(l,c,e){var i=e(68045),s=e(34157),o=e(60466);l.exports=function(r,d,m){var v,y;return o&&i(v=d.constructor)&&v!==m&&s(y=v.prototype)&&y!==m.prototype&&o(r,y),r}},86225:function(l,c,e){var i=e(56393),s=e(68045),o=e(25085),r=i(Function.toString);s(o.inspectSource)||(o.inspectSource=function(d){return r(d)}),l.exports=o.inspectSource},78211:function(l,c,e){var i=e(34157),s=e(2888);l.exports=function(o,r){i(r)&&"cause"in r&&s(o,"cause",r.cause)}},34840:function(l,c,e){var i=e(51481),s=e(56393),o=e(22568),r=e(34157),d=e(21220),m=e(34410).f,v=e(49354),y=e(14396),b=e(94656),h=e(60536),x=e(42166),E=!1,w=h("meta"),C=0,j=function(F){m(F,w,{value:{objectID:"O"+C++,weakData:{}}})},N=function(F,H){if(!r(F))return typeof F=="symbol"?F:(typeof F=="string"?"S":"P")+F;if(!d(F,w)){if(!b(F))return"F";if(!H)return"E";j(F)}return F[w].objectID},D=function(F,H){if(!d(F,w)){if(!b(F))return!0;if(!H)return!1;j(F)}return F[w].weakData},B=function(F){return x&&E&&b(F)&&!d(F,w)&&j(F),F},M=function(){Q.enable=function(){},E=!0;var F=v.f,H=s([].splice),K={};K[w]=1,F(K).length&&(v.f=function(Y){for(var re=F(Y),ce=0,Se=re.length;ce<Se;ce++)if(re[ce]===w){H(re,ce,1);break}return re},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:y.f}))},Q=l.exports={enable:M,fastKey:N,getWeakData:D,onFreeze:B};o[w]=!0},34402:function(l,c,e){var i=e(62682),s=e(33463),o=e(34157),r=e(2888),d=e(21220),m=e(25085),v=e(69971),y=e(22568),b="Object already initialized",h=s.TypeError,x=s.WeakMap,E,w,C,j=function(M){return C(M)?w(M):E(M,{})},N=function(M){return function(Q){var F;if(!o(Q)||(F=w(Q)).type!==M)throw h("Incompatible receiver, "+M+" required");return F}};if(i||m.state){var D=m.state||(m.state=new x);D.get=D.get,D.has=D.has,D.set=D.set,E=function(M,Q){if(D.has(M))throw h(b);return Q.facade=M,D.set(M,Q),Q},w=function(M){return D.get(M)||{}},C=function(M){return D.has(M)}}else{var B=v("state");y[B]=!0,E=function(M,Q){if(d(M,B))throw h(b);return Q.facade=M,r(M,B,Q),Q},w=function(M){return d(M,B)?M[B]:{}},C=function(M){return d(M,B)}}l.exports={set:E,get:w,has:C,enforce:j,getterFor:N}},81078:function(l,c,e){var i=e(21288),s=e(97735),o=i("iterator"),r=Array.prototype;l.exports=function(d){return d!==void 0&&(s.Array===d||r[o]===d)}},89494:function(l,c,e){var i=e(44100);l.exports=Array.isArray||function(o){return i(o)=="Array"}},13087:function(l,c,e){var i=e(959),s=e(56393),o=s("".slice);l.exports=function(r){return o(i(r),0,3)==="Big"}},68045:function(l,c,e){var i=e(94302),s=i.all;l.exports=i.IS_HTMLDDA?function(o){return typeof o=="function"||o===s}:function(o){return typeof o=="function"}},55336:function(l,c,e){var i=e(56393),s=e(7979),o=e(68045),r=e(959),d=e(75605),m=e(86225),v=function(){},y=[],b=d("Reflect","construct"),h=/^\s*(?:class|function)\b/,x=i(h.exec),E=!h.exec(v),w=function(N){if(!o(N))return!1;try{return b(v,y,N),!0}catch(D){return!1}},C=function(N){if(!o(N))return!1;switch(r(N)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return E||!!x(h,m(N))}catch(D){return!0}};C.sham=!0,l.exports=!b||s(function(){var j;return w(w.call)||!w(Object)||!w(function(){j=!0})||j})?C:w},23322:function(l,c,e){var i=e(7979),s=e(68045),o=/#|\.prototype\./,r=function(b,h){var x=m[d(b)];return x==y?!0:x==v?!1:s(h)?i(h):!!h},d=r.normalize=function(b){return String(b).replace(o,".").toLowerCase()},m=r.data={},v=r.NATIVE="N",y=r.POLYFILL="P";l.exports=r},16967:function(l,c,e){var i=e(959),s=e(21220),o=e(60689),r=e(21288),d=e(97735),m=r("iterator"),v=Object;l.exports=function(y){if(o(y))return!1;var b=v(y);return b[m]!==void 0||"@@iterator"in b||s(d,i(b))}},60689:function(l){l.exports=function(c){return c==null}},34157:function(l,c,e){var i=e(68045),s=e(94302),o=s.all;l.exports=s.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:i(r)||r===o}:function(r){return typeof r=="object"?r!==null:i(r)}},21214:function(l){l.exports=!1},89501:function(l,c,e){var i=e(34157),s=e(44100),o=e(21288),r=o("match");l.exports=function(d){var m;return i(d)&&((m=d[r])!==void 0?!!m:s(d)=="RegExp")}},38555:function(l,c,e){var i=e(75605),s=e(68045),o=e(15726),r=e(8689),d=Object;l.exports=r?function(m){return typeof m=="symbol"}:function(m){var v=i("Symbol");return s(v)&&o(v.prototype,d(m))}},54544:function(l,c,e){var i=e(72995);l.exports=function(s,o,r){for(var d=r||s.next,m,v;!(m=i(d,s)).done;)if(v=o(m.value),v!==void 0)return v}},7291:function(l,c,e){var i=e(46861),s=e(72995),o=e(60930),r=e(47819),d=e(81078),m=e(63354),v=e(15726),y=e(45245),b=e(95879),h=e(76079),x=TypeError,E=function(C,j){this.stopped=C,this.result=j},w=E.prototype;l.exports=function(C,j,N){var D=N&&N.that,B=!!(N&&N.AS_ENTRIES),M=!!(N&&N.IS_RECORD),Q=!!(N&&N.IS_ITERATOR),F=!!(N&&N.INTERRUPTED),H=i(j,D),K,Y,re,ce,Se,se,Te,le=function(V){return K&&h(K,"normal",V),new E(!0,V)},ue=function(V){return B?(o(V),F?H(V[0],V[1],le):H(V[0],V[1])):F?H(V,le):H(V)};if(M)K=C.iterator;else if(Q)K=C;else{if(Y=b(C),!Y)throw x(r(C)+" is not iterable");if(d(Y)){for(re=0,ce=m(C);ce>re;re++)if(Se=ue(C[re]),Se&&v(w,Se))return Se;return new E(!1)}K=y(C,Y)}for(se=M?C.next:K.next;!(Te=s(se,K)).done;){try{Se=ue(Te.value)}catch(V){h(K,"throw",V)}if(typeof Se=="object"&&Se&&v(w,Se))return Se}return new E(!1)}},76079:function(l,c,e){var i=e(72995),s=e(60930),o=e(24368);l.exports=function(r,d,m){var v,y;s(r);try{if(v=o(r,"return"),!v){if(d==="throw")throw m;return m}v=i(v,r)}catch(b){y=!0,v=b}if(d==="throw")throw m;if(y)throw v;return s(v),m}},1306:function(l,c,e){"use strict";var i=e(2709).IteratorPrototype,s=e(24972),o=e(31506),r=e(30160),d=e(97735),m=function(){return this};l.exports=function(v,y,b,h){var x=y+" Iterator";return v.prototype=s(i,{next:o(+!h,b)}),r(v,x,!1,!0),d[x]=m,v}},48320:function(l,c,e){"use strict";var i=e(72995),s=e(24972),o=e(2888),r=e(23204),d=e(21288),m=e(34402),v=e(24368),y=e(2709).IteratorPrototype,b=e(71025),h=e(76079),x="IteratorHelper",E="WrapForValidIterator",w=m.set,C=d("toStringTag"),j=function(B){var M=B?E:x,Q=m.getterFor(M),F=r(s(y),{next:function(){var K=Q(this);if(B)return K.nextHandler();try{var Y=K.done?void 0:K.nextHandler();return b(Y,K.done)}catch(re){throw K.done=!0,re}},return:function(){var H=Q(this),K=H.iterator;if(H.done=!0,B){var Y=v(K,"return");return Y?i(Y,K):b(void 0,!0)}if(H.inner)try{h(H.inner.iterator,"return")}catch(re){return h(K,"throw",re)}return h(K,"return"),b(void 0,!0)}});return B||o(F,C,"Iterator Helper"),F},N=j(!1),D=j(!0);l.exports=function(B,M){var Q=M?E:x,F=function(K,Y){Y?(Y.iterator=K.iterator,Y.next=K.next):Y=K,Y.type=Q,Y.nextHandler=B,Y.counter=0,Y.done=!1,w(this,Y)};return F.prototype=M?D:N,F}},62291:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(21214),r=e(20022),d=e(68045),m=e(1306),v=e(59831),y=e(60466),b=e(30160),h=e(2888),x=e(19866),E=e(21288),w=e(97735),C=e(2709),j=r.PROPER,N=r.CONFIGURABLE,D=C.IteratorPrototype,B=C.BUGGY_SAFARI_ITERATORS,M=E("iterator"),Q="keys",F="values",H="entries",K=function(){return this};l.exports=function(Y,re,ce,Se,se,Te,le){m(ce,re,Se);var ue=function(he){if(he===se&&P)return P;if(!B&&he in z)return z[he];switch(he){case Q:return function(){return new ce(this,he)};case F:return function(){return new ce(this,he)};case H:return function(){return new ce(this,he)}}return function(){return new ce(this)}},V=re+" Iterator",L=!1,z=Y.prototype,X=z[M]||z["@@iterator"]||se&&z[se],P=!B&&X||ue(se),J=re=="Array"&&z.entries||X,ge,We,we;if(J&&(ge=v(J.call(new Y)),ge!==Object.prototype&&ge.next&&(!o&&v(ge)!==D&&(y?y(ge,D):d(ge[M])||x(ge,M,K)),b(ge,V,!0,!0),o&&(w[V]=K))),j&&se==F&&X&&X.name!==F&&(!o&&N?h(z,"name",F):(L=!0,P=function(){return s(X,this)})),se)if(We={values:ue(F),keys:Te?P:ue(Q),entries:ue(H)},le)for(we in We)(B||L||!(we in z))&&x(z,we,We[we]);else i({target:re,proto:!0,forced:B||L},We);return(!o||le)&&z[M]!==P&&x(z,M,P,{name:se}),w[re]=P,We}},72508:function(l,c,e){"use strict";var i=e(72995),s=e(60966),o=function(r,d){return[d,r]};l.exports=function(){return i(s,this,o)}},60966:function(l,c,e){"use strict";var i=e(72995),s=e(41052),o=e(60930),r=e(78049),d=e(48320),m=e(44658),v=d(function(){var y=this.iterator,b=o(i(this.next,y)),h=this.done=!!b.done;if(!h)return m(y,this.mapper,[b.value,this.counter++],!0)});l.exports=function(b){return new v(r(this),{mapper:s(b)})}},2709:function(l,c,e){"use strict";var i=e(7979),s=e(68045),o=e(34157),r=e(24972),d=e(59831),m=e(19866),v=e(21288),y=e(21214),b=v("iterator"),h=!1,x,E,w;[].keys&&(w=[].keys(),"next"in w?(E=d(d(w)),E!==Object.prototype&&(x=E)):h=!0);var C=!o(x)||i(function(){var j={};return x[b].call(j)!==j});C?x={}:y&&(x=r(x)),s(x[b])||m(x,b,function(){return this}),l.exports={IteratorPrototype:x,BUGGY_SAFARI_ITERATORS:h}},97735:function(l){l.exports={}},63354:function(l,c,e){var i=e(65176);l.exports=function(s){return i(s.length)}},78137:function(l,c,e){var i=e(7979),s=e(68045),o=e(21220),r=e(33974),d=e(20022).CONFIGURABLE,m=e(86225),v=e(34402),y=v.enforce,b=v.get,h=Object.defineProperty,x=r&&!i(function(){return h(function(){},"length",{value:8}).length!==8}),E=String(String).split("String"),w=l.exports=function(C,j,N){String(j).slice(0,7)==="Symbol("&&(j="["+String(j).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),N&&N.getter&&(j="get "+j),N&&N.setter&&(j="set "+j),(!o(C,"name")||d&&C.name!==j)&&(r?h(C,"name",{value:j,configurable:!0}):C.name=j),x&&N&&o(N,"arity")&&C.length!==N.arity&&h(C,"length",{value:N.arity});try{N&&o(N,"constructor")&&N.constructor?r&&h(C,"prototype",{writable:!1}):C.prototype&&(C.prototype=void 0)}catch(B){}var D=y(C);return o(D,"source")||(D.source=E.join(typeof j=="string"?j:"")),C};Function.prototype.toString=w(function(){return s(this)&&b(this).source||m(this)},"toString")},70821:function(l,c,e){var i=e(56393),s=Map.prototype;l.exports={Map,set:i(s.set),get:i(s.get),has:i(s.has),remove:i(s.delete),proto:s}},36924:function(l,c,e){var i=e(56393),s=e(54544),o=e(70821),r=o.Map,d=o.proto,m=i(d.forEach),v=i(d.entries),y=v(new r).next;l.exports=function(b,h,x){return x?s(v(b),function(E){return h(E[1],E[0])},y):m(b,h)}},85781:function(l,c,e){"use strict";var i=e(72995),s=e(41052),o=e(68045),r=e(60930),d=TypeError;l.exports=function(v,y){var b=r(this),h=s(b.get),x=s(b.has),E=s(b.set),w=arguments.length>2?arguments[2]:void 0,C;if(!o(y)&&!o(w))throw d("At least one callback required");return i(x,b,v)?(C=i(h,b,v),o(y)&&(C=y(C),i(E,b,v,C))):o(w)&&(C=w(),i(E,b,v,C)),C}},92998:function(l,c,e){var i=e(69624),s=Math.abs,o=Math.pow,r=o(2,-52),d=o(2,-23),m=o(2,127)*(2-d),v=o(2,-126),y=function(b){return b+1/r-1/r};l.exports=Math.fround||function(h){var x=+h,E=s(x),w=i(x),C,j;return E<v?w*y(E/v/d)*v*d:(C=(1+d/r)*E,j=C-(C-E),j>m||j!=j?w*(1/0):w*j)}},31418:function(l){l.exports=Math.scale||function(e,i,s,o,r){var d=+e,m=+i,v=+s,y=+o,b=+r;return d!=d||m!=m||v!=v||y!=y||b!=b?NaN:d===1/0||d===-1/0?d:(d-m)*(b-y)/(v-m)+y}},69624:function(l){l.exports=Math.sign||function(e){var i=+e;return i==0||i!=i?i:i<0?-1:1}},38890:function(l){var c=Math.ceil,e=Math.floor;l.exports=Math.trunc||function(s){var o=+s;return(o>0?e:c)(o)}},35749:function(l,c,e){"use strict";var i=e(41052),s=TypeError,o=function(r){var d,m;this.promise=new r(function(v,y){if(d!==void 0||m!==void 0)throw s("Bad Promise constructor");d=v,m=y}),this.resolve=i(d),this.reject=i(m)};l.exports.f=function(r){return new o(r)}},87901:function(l,c,e){var i=e(13312);l.exports=function(s,o){return s===void 0?arguments.length<2?"":o:i(s)}},32717:function(l){var c=RangeError;l.exports=function(e){if(e===e)return e;throw c("NaN is not allowed")}},33829:function(l,c,e){var i=e(33463),s=i.isFinite;l.exports=Number.isFinite||function(r){return typeof r=="number"&&s(r)}},35685:function(l,c,e){var i=e(33463),s=e(7979),o=e(56393),r=e(13312),d=e(36646).trim,m=e(78135),v=i.parseInt,y=i.Symbol,b=y&&y.iterator,h=/^[+-]?0x/i,x=o(h.exec),E=v(m+"08")!==8||v(m+"0x16")!==22||b&&!s(function(){v(Object(b))});l.exports=E?function(C,j){var N=d(r(C));return v(N,j>>>0||(x(h,N)?16:10))}:v},58976:function(l,c,e){"use strict";var i=e(34402),s=e(1306),o=e(71025),r=e(60689),d=e(34157),m=e(45611).f,v=e(33974),y="Incorrect Number.range arguments",b="NumericRangeIterator",h=i.set,x=i.getterFor(b),E=RangeError,w=TypeError,C=s(function(D,B,M,Q,F,H){if(typeof D!=Q||B!==1/0&&B!==-1/0&&typeof B!=Q)throw w(y);if(D===1/0||D===-1/0)throw E(y);var K=B>D,Y=!1,re;if(M===void 0)re=void 0;else if(d(M))re=M.step,Y=!!M.inclusive;else if(typeof M==Q)re=M;else throw w(y);if(r(re)&&(re=K?H:-H),typeof re!=Q)throw w(y);if(re===1/0||re===-1/0||re===F&&D!==B)throw E(y);var ce=D!=D||B!=B||re!=re||B>D!=re>F;h(this,{type:b,start:D,end:B,step:re,inclusiveEnd:Y,hitsEnd:ce,currentCount:F,zero:F}),v||(this.start=D,this.end=B,this.step=re,this.inclusive=Y)},b,function(){var D=x(this);if(D.hitsEnd)return o(void 0,!0);var B=D.start,M=D.end,Q=D.step,F=B+Q*D.currentCount++;F===M&&(D.hitsEnd=!0);var H=D.inclusiveEnd,K;return M>B?K=H?F>M:F>=M:K=H?M>F:M>=F,K?(D.hitsEnd=!0,o(void 0,!0)):o(F,!1)}),j=function(N){return{get:N,set:function(){},configurable:!0,enumerable:!1}};v&&m(C.prototype,{start:j(function(){return x(this).start}),end:j(function(){return x(this).end}),inclusive:j(function(){return x(this).inclusiveEnd}),step:j(function(){return x(this).step})}),l.exports=C},24972:function(l,c,e){var i=e(60930),s=e(45611),o=e(4369),r=e(22568),d=e(55732),m=e(7815),v=e(69971),y=">",b="<",h="prototype",x="script",E=v("IE_PROTO"),w=function(){},C=function(M){return b+x+y+M+b+"/"+x+y},j=function(M){M.write(C("")),M.close();var Q=M.parentWindow.Object;return M=null,Q},N=function(){var M=m("iframe"),Q="java"+x+":",F;return M.style.display="none",d.appendChild(M),M.src=String(Q),F=M.contentWindow.document,F.open(),F.write(C("document.F=Object")),F.close(),F.F},D,B=function(){try{D=new ActiveXObject("htmlfile")}catch(Q){}B=typeof document!="undefined"?document.domain&&D?j(D):N():j(D);for(var M=o.length;M--;)delete B[h][o[M]];return B()};r[E]=!0,l.exports=Object.create||function(Q,F){var H;return Q!==null?(w[h]=i(Q),H=new w,w[h]=null,H[E]=Q):H=B(),F===void 0?H:s.f(H,F)}},45611:function(l,c,e){var i=e(33974),s=e(66100),o=e(34410),r=e(60930),d=e(19114),m=e(53338);c.f=i&&!s?Object.defineProperties:function(y,b){r(y);for(var h=d(b),x=m(b),E=x.length,w=0,C;E>w;)o.f(y,C=x[w++],h[C]);return y}},34410:function(l,c,e){var i=e(33974),s=e(97423),o=e(66100),r=e(60930),d=e(51505),m=TypeError,v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,b="enumerable",h="configurable",x="writable";c.f=i?o?function(w,C,j){if(r(w),C=d(C),r(j),typeof w=="function"&&C==="prototype"&&"value"in j&&x in j&&!j[x]){var N=y(w,C);N&&N[x]&&(w[C]=j.value,j={configurable:h in j?j[h]:N[h],enumerable:b in j?j[b]:N[b],writable:!1})}return v(w,C,j)}:v:function(w,C,j){if(r(w),C=d(C),r(j),s)try{return v(w,C,j)}catch(N){}if("get"in j||"set"in j)throw m("Accessors not supported");return"value"in j&&(w[C]=j.value),w}},87142:function(l,c,e){var i=e(33974),s=e(72995),o=e(37662),r=e(31506),d=e(19114),m=e(51505),v=e(21220),y=e(97423),b=Object.getOwnPropertyDescriptor;c.f=i?b:function(x,E){if(x=d(x),E=m(E),y)try{return b(x,E)}catch(w){}if(v(x,E))return r(!s(o.f,x,E),x[E])}},14396:function(l,c,e){var i=e(44100),s=e(19114),o=e(49354).f,r=e(52787),d=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],m=function(v){try{return o(v)}catch(y){return r(d)}};l.exports.f=function(y){return d&&i(y)=="Window"?m(y):o(s(y))}},49354:function(l,c,e){var i=e(47049),s=e(4369),o=s.concat("length","prototype");c.f=Object.getOwnPropertyNames||function(d){return i(d,o)}},42033:function(l,c){c.f=Object.getOwnPropertySymbols},59831:function(l,c,e){var i=e(21220),s=e(68045),o=e(63947),r=e(69971),d=e(67556),m=r("IE_PROTO"),v=Object,y=v.prototype;l.exports=d?v.getPrototypeOf:function(b){var h=o(b);if(i(h,m))return h[m];var x=h.constructor;return s(x)&&h instanceof x?x.prototype:h instanceof v?y:null}},94656:function(l,c,e){var i=e(7979),s=e(34157),o=e(44100),r=e(27466),d=Object.isExtensible,m=i(function(){d(1)});l.exports=m||r?function(y){return!s(y)||r&&o(y)=="ArrayBuffer"?!1:d?d(y):!0}:d},15726:function(l,c,e){var i=e(56393);l.exports=i({}.isPrototypeOf)},18603:function(l,c,e){"use strict";var i=e(34402),s=e(1306),o=e(71025),r=e(21220),d=e(53338),m=e(63947),v="Object Iterator",y=i.set,b=i.getterFor(v);l.exports=s(function(x,E){var w=m(x);y(this,{type:v,mode:E,object:w,keys:d(w),index:0})},"Object",function(){for(var x=b(this),E=x.keys;;){if(E===null||x.index>=E.length)return x.object=x.keys=null,o(void 0,!0);var w=E[x.index++],C=x.object;if(r(C,w)){switch(x.mode){case"keys":return o(w,!1);case"values":return o(C[w],!1)}return o([w,C[w]],!1)}}})},47049:function(l,c,e){var i=e(56393),s=e(21220),o=e(19114),r=e(87423).indexOf,d=e(22568),m=i([].push);l.exports=function(v,y){var b=o(v),h=0,x=[],E;for(E in b)!s(d,E)&&s(b,E)&&m(x,E);for(;y.length>h;)s(b,E=y[h++])&&(~r(x,E)||m(x,E));return x}},53338:function(l,c,e){var i=e(47049),s=e(4369);l.exports=Object.keys||function(r){return i(r,s)}},37662:function(l,c){"use strict";var e={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!e.call({1:2},1);c.f=s?function(r){var d=i(this,r);return!!d&&d.enumerable}:e},60466:function(l,c,e){var i=e(56393),s=e(60930),o=e(76106);l.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,d={},m;try{m=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),m(d,[]),r=d instanceof Array}catch(v){}return function(y,b){return s(y),o(b),r?m(y,b):y.__proto__=b,y}}():void 0)},9736:function(l,c,e){var i=e(33463),s=e(68045),o=e(21288),r=o("observable"),d=i.Observable,m=d&&d.prototype;l.exports=!s(d)||!s(d.from)||!s(d.of)||!s(m.subscribe)||!s(m[r])},9115:function(l,c,e){var i=e(72995),s=e(68045),o=e(34157),r=TypeError;l.exports=function(d,m){var v,y;if(m==="string"&&s(v=d.toString)&&!o(y=i(v,d))||s(v=d.valueOf)&&!o(y=i(v,d))||m!=="string"&&s(v=d.toString)&&!o(y=i(v,d)))return y;throw r("Can't convert object to primitive value")}},36616:function(l,c,e){var i=e(75605),s=e(56393),o=e(49354),r=e(42033),d=e(60930),m=s([].concat);l.exports=i("Reflect","ownKeys")||function(y){var b=o.f(d(y)),h=r.f;return h?m(b,h(y)):b}},2900:function(l,c,e){var i=e(33463);l.exports=i},40383:function(l){l.exports=function(c){try{return{error:!1,value:c()}}catch(e){return{error:!0,value:e}}}},50924:function(l,c,e){var i=e(34410).f;l.exports=function(s,o,r){r in s||i(s,r,{configurable:!0,get:function(){return o[r]},set:function(d){o[r]=d}})}},35974:function(l,c,e){e(40163),e(36355);var i=e(75605),s=e(56393),o=e(59090),r=i("Map"),d=i("WeakMap"),m=s([].push),v=o("metadata"),y=v.store||(v.store=new d),b=function(j,N,D){var B=y.get(j);if(!B){if(!D)return;y.set(j,B=new r)}var M=B.get(N);if(!M){if(!D)return;B.set(N,M=new r)}return M},h=function(j,N,D){var B=b(N,D,!1);return B===void 0?!1:B.has(j)},x=function(j,N,D){var B=b(N,D,!1);return B===void 0?void 0:B.get(j)},E=function(j,N,D,B){b(D,B,!0).set(j,N)},w=function(j,N){var D=b(j,N,!1),B=[];return D&&D.forEach(function(M,Q){m(B,Q)}),B},C=function(j){return j===void 0||typeof j=="symbol"?j:String(j)};l.exports={store:y,getMap:b,has:h,get:x,set:E,keys:w,toKey:C}},49263:function(l,c,e){"use strict";var i=e(60930);l.exports=function(){var s=i(this),o="";return s.hasIndices&&(o+="d"),s.global&&(o+="g"),s.ignoreCase&&(o+="i"),s.multiline&&(o+="m"),s.dotAll&&(o+="s"),s.unicode&&(o+="u"),s.unicodeSets&&(o+="v"),s.sticky&&(o+="y"),o}},10586:function(l,c,e){var i=e(72995),s=e(21220),o=e(15726),r=e(49263),d=RegExp.prototype;l.exports=function(m){var v=m.flags;return v===void 0&&!("flags"in d)&&!s(m,"flags")&&o(d,m)?i(r,m):v}},10601:function(l,c,e){var i=e(60689),s=TypeError;l.exports=function(o){if(i(o))throw s("Can't call method on "+o);return o}},27442:function(l){l.exports=function(c,e){return c===e||c!=c&&e!=e}},37522:function(l,c,e){"use strict";var i=e(33463),s=e(24684),o=e(68045),r=e(28070),d=e(52788),m=e(54064),v=e(51084),y=i.Function,b=/MSIE .\./.test(d)||r&&function(){var h=i.Bun.version.split(".");return h.length<3||h[0]==0&&(h[1]<3||h[1]==3&&h[2]==0)}();l.exports=function(h,x){var E=x?2:1;return b?function(w,C){var j=v(arguments.length,1)>E,N=o(w)?w:y(w),D=j?m(arguments,E):[],B=j?function(){s(N,this,D)}:N;return x?h(B,C):h(B)}:h}},53405:function(l,c,e){var i=e(58618),s=e(87667),o=i.Set,r=i.add;l.exports=function(d){var m=new o;return s(d,function(v){r(m,v)}),m}},26455:function(l,c,e){"use strict";var i=e(66149),s=e(58618),o=e(53405),r=e(2349),d=e(46541),m=e(87667),v=e(54544),y=s.has,b=s.remove;l.exports=function(x){var E=i(this),w=d(x),C=o(E);return r(E)<=w.size?m(E,function(j){w.includes(j)&&b(C,j)}):v(w.getIterator(),function(j){y(E,j)&&b(C,j)}),C}},58618:function(l,c,e){var i=e(56393),s=Set.prototype;l.exports={Set,add:i(s.add),has:i(s.has),remove:i(s.delete),proto:s,$has:s.has,$keys:s.keys}},58506:function(l,c,e){"use strict";var i=e(66149),s=e(58618),o=e(2349),r=e(46541),d=e(87667),m=e(54544),v=s.Set,y=s.add,b=s.has,h=s.$has,x=s.$keys,E=function(w){return w.has===h&&w.keys===x};l.exports=function(C){var j=i(this),N=r(C),D=new v;if(!E(N)&&o(j)>N.size){if(m(N.getIterator(),function(M){b(j,M)&&y(D,M)}),o(D)<2)return D;var B=D;D=new v,d(j,function(M){b(B,M)&&y(D,M)})}else d(j,function(M){N.includes(M)&&y(D,M)});return D}},90497:function(l,c,e){"use strict";var i=e(66149),s=e(58618).has,o=e(2349),r=e(46541),d=e(87667),m=e(54544);l.exports=function(y){var b=i(this),h=r(y);return(o(b)<=h.size?d(b,function(x){if(h.includes(x))return!1},!0):m(h.getIterator(),function(x){if(s(b,x))return!1}))!==!1}},16903:function(l,c,e){"use strict";var i=e(66149),s=e(2349),o=e(87667),r=e(46541);l.exports=function(m){var v=i(this),y=r(m);return s(v)>y.size?!1:o(v,function(b){if(!y.includes(b))return!1},!0)!==!1}},32583:function(l,c,e){"use strict";var i=e(66149),s=e(58618).has,o=e(2349),r=e(46541),d=e(54544);l.exports=function(v){var y=i(this),b=r(v);return o(y)<b.size?!1:d(b.getIterator(),function(h){if(s(y,h)===!1)return!1})!==!1}},87667:function(l,c,e){var i=e(56393),s=e(54544),o=e(58618),r=o.Set,d=o.proto,m=i(d.forEach),v=i(d.keys),y=v(new r).next;l.exports=function(b,h,x){return x?s(v(b),h,y):m(b,h)}},69122:function(l,c,e){var i=e(75605),s=function(){return{size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};l.exports=function(o){try{var r=i("Set");return new r()[o](s()),!0}catch(d){return!1}}},2349:function(l,c,e){var i=e(33974),s=e(56393),o=e(58618);l.exports=i?s(Object.getOwnPropertyDescriptor(o.proto,"size").get):function(r){return r.size}},34345:function(l,c,e){"use strict";var i=e(75605),s=e(34410),o=e(21288),r=e(33974),d=o("species");l.exports=function(m){var v=i(m),y=s.f;r&&v&&!v[d]&&y(v,d,{configurable:!0,get:function(){return this}})}},82116:function(l,c,e){"use strict";var i=e(66149),s=e(58618),o=e(53405),r=e(46541),d=e(54544),m=s.add,v=s.has,y=s.remove;l.exports=function(h){var x=i(this),E=r(h).getIterator(),w=o(x);return d(E,function(C){v(x,C)?y(w,C):m(w,C)}),w}},30160:function(l,c,e){var i=e(34410).f,s=e(21220),o=e(21288),r=o("toStringTag");l.exports=function(d,m,v){d&&!v&&(d=d.prototype),d&&!s(d,r)&&i(d,r,{configurable:!0,value:m})}},94986:function(l,c,e){"use strict";var i=e(66149),s=e(58618).add,o=e(53405),r=e(46541),d=e(54544);l.exports=function(v){var y=i(this),b=r(v).getIterator(),h=o(y);return d(b,function(x){s(h,x)}),h}},69971:function(l,c,e){var i=e(59090),s=e(60536),o=i("keys");l.exports=function(r){return o[r]||(o[r]=s(r))}},25085:function(l,c,e){var i=e(33463),s=e(99010),o="__core-js_shared__",r=i[o]||s(o,{});l.exports=r},59090:function(l,c,e){var i=e(21214),s=e(25085);(l.exports=function(o,r){return s[o]||(s[o]=r!==void 0?r:{})})("versions",[]).push({version:"3.27.1",mode:i?"pure":"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},66455:function(l,c,e){var i=e(60930),s=e(87203),o=e(60689),r=e(21288),d=r("species");l.exports=function(m,v){var y=i(m).constructor,b;return y===void 0||o(b=i(y)[d])?v:s(b)}},17093:function(l,c,e){var i=e(56393),s=e(19114),o=e(13312),r=e(63354),d=TypeError,m=i([].push),v=i([].join);l.exports=function(b){for(var h=s(b),x=r(h),E=arguments.length,w=[],C=0;;){var j=h[C++];if(j===void 0)throw d("Incorrect template");if(m(w,o(j)),C===x)return v(w,"");C<E&&m(w,o(arguments[C]))}}},40711:function(l,c,e){var i=e(56393),s=e(54622),o=e(13312),r=e(10601),d=i("".charAt),m=i("".charCodeAt),v=i("".slice),y=function(b){return function(h,x){var E=o(r(h)),w=s(x),C=E.length,j,N;return w<0||w>=C?b?"":void 0:(j=m(E,w),j<55296||j>56319||w+1===C||(N=m(E,w+1))<56320||N>57343?b?d(E,w):j:b?v(E,w,w+2):(j-55296<<10)+(N-56320)+65536)}};l.exports={codeAt:y(!1),charAt:y(!0)}},97931:function(l,c,e){var i=e(75605),s=e(56393),o=String.fromCharCode,r=i("String","fromCodePoint"),d=s("".charAt),m=s("".charCodeAt),v=s("".indexOf),y=s("".slice),b=48,h=57,x=97,E=102,w=65,C=70,j=function(B,M){var Q=m(B,M);return Q>=b&&Q<=h},N=function(B,M,Q){if(Q>=B.length)return-1;for(var F=0;M<Q;M++){var H=D(m(B,M));if(H===-1)return-1;F=F*16+H}return F},D=function(B){return B>=b&&B<=h?B-b:B>=x&&B<=E?B-x+10:B>=w&&B<=C?B-w+10:-1};l.exports=function(B){for(var M="",Q=0,F=0,H;(F=v(B,"\\",F))>-1;){if(M+=y(B,Q,F),++F===B.length)return;var K=d(B,F++);switch(K){case"b":M+="\b";break;case"t":M+="	";break;case"n":M+=`
`;break;case"v":M+="\v";break;case"f":M+="\f";break;case"r":M+="\r";break;case"\r":F<B.length&&d(B,F)===`
`&&++F;case`
`:case"\u2028":case"\u2029":break;case"0":if(j(B,F))return;M+="\0";break;case"x":if(H=N(B,F,F+2),H===-1)return;F+=2,M+=o(H);break;case"u":if(F<B.length&&d(B,F)==="{"){var Y=v(B,"}",++F);if(Y===-1)return;H=N(B,F,Y),F=Y+1}else H=N(B,F,F+4),F+=4;if(H===-1||H>1114111)return;M+=r(H);break;default:if(j(K,0))return;M+=K}Q=F}return M+y(B,Q)}},36646:function(l,c,e){var i=e(56393),s=e(10601),o=e(13312),r=e(78135),d=i("".replace),m="["+r+"]",v=RegExp("^"+m+m+"*"),y=RegExp(m+m+"*$"),b=function(h){return function(x){var E=o(s(x));return h&1&&(E=d(E,v,"")),h&2&&(E=d(E,y,"")),E}};l.exports={start:b(1),end:b(2),trim:b(3)}},4214:function(l,c,e){var i=e(66480),s=e(7979);l.exports=!!Object.getOwnPropertySymbols&&!s(function(){var o=Symbol();return!String(o)||!(Object(o)instanceof Symbol)||!Symbol.sham&&i&&i<41})},60971:function(l,c,e){var i=e(33463),s=e(24684),o=e(46861),r=e(68045),d=e(21220),m=e(7979),v=e(55732),y=e(54064),b=e(7815),h=e(51084),x=e(86653),E=e(14531),w=i.setImmediate,C=i.clearImmediate,j=i.process,N=i.Dispatch,D=i.Function,B=i.MessageChannel,M=i.String,Q=0,F={},H="onreadystatechange",K,Y,re,ce;try{K=i.location}catch(ue){}var Se=function(ue){if(d(F,ue)){var V=F[ue];delete F[ue],V()}},se=function(ue){return function(){Se(ue)}},Te=function(ue){Se(ue.data)},le=function(ue){i.postMessage(M(ue),K.protocol+"//"+K.host)};(!w||!C)&&(w=function(V){h(arguments.length,1);var L=r(V)?V:D(V),z=y(arguments,1);return F[++Q]=function(){s(L,void 0,z)},Y(Q),Q},C=function(V){delete F[V]},E?Y=function(ue){j.nextTick(se(ue))}:N&&N.now?Y=function(ue){N.now(se(ue))}:B&&!x?(re=new B,ce=re.port2,re.port1.onmessage=Te,Y=o(ce.postMessage,ce)):i.addEventListener&&r(i.postMessage)&&!i.importScripts&&K&&K.protocol!=="file:"&&!m(le)?(Y=le,i.addEventListener("message",Te,!1)):H in b("script")?Y=function(ue){v.appendChild(b("script"))[H]=function(){v.removeChild(this),Se(ue)}}:Y=function(ue){setTimeout(se(ue),0)}),l.exports={set:w,clear:C}},90753:function(l,c,e){var i=e(54622),s=Math.max,o=Math.min;l.exports=function(r,d){var m=i(r);return m<0?s(m+d,0):o(m,d)}},43789:function(l,c,e){var i=e(85132),s=TypeError;l.exports=function(o){var r=i(o,"number");if(typeof r=="number")throw s("Can't convert number to bigint");return BigInt(r)}},19114:function(l,c,e){var i=e(44063),s=e(10601);l.exports=function(o){return i(s(o))}},54622:function(l,c,e){var i=e(38890);l.exports=function(s){var o=+s;return o!==o||o===0?0:i(o)}},65176:function(l,c,e){var i=e(54622),s=Math.min;l.exports=function(o){return o>0?s(i(o),9007199254740991):0}},63947:function(l,c,e){var i=e(10601),s=Object;l.exports=function(o){return s(i(o))}},38414:function(l,c,e){var i=e(85738),s=RangeError;l.exports=function(o,r){var d=i(o);if(d%r)throw s("Wrong offset");return d}},85738:function(l,c,e){var i=e(54622),s=RangeError;l.exports=function(o){var r=i(o);if(r<0)throw s("The argument can't be less than 0");return r}},85132:function(l,c,e){var i=e(72995),s=e(34157),o=e(38555),r=e(24368),d=e(9115),m=e(21288),v=TypeError,y=m("toPrimitive");l.exports=function(b,h){if(!s(b)||o(b))return b;var x=r(b,y),E;if(x){if(h===void 0&&(h="default"),E=i(x,b,h),!s(E)||o(E))return E;throw v("Can't convert object to primitive value")}return h===void 0&&(h="number"),d(b,h)}},51505:function(l,c,e){var i=e(85132),s=e(38555);l.exports=function(o){var r=i(o,"string");return s(r)?r:r+""}},5920:function(l,c,e){var i=e(75605),s=e(68045),o=e(16967),r=e(34157),d=i("Set"),m=function(v){return r(v)&&typeof v.size=="number"&&s(v.has)&&s(v.keys)};l.exports=function(v){if(m(v))return v;if(o(v))return new d(v)}},93356:function(l,c,e){var i=e(21288),s=i("toStringTag"),o={};o[s]="z",l.exports=String(o)==="[object z]"},13312:function(l,c,e){var i=e(959),s=String;l.exports=function(o){if(i(o)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return s(o)}},47819:function(l){var c=String;l.exports=function(e){try{return c(e)}catch(i){return"Object"}}},59468:function(l,c,e){var i=e(96028),s=e(39201);l.exports=function(o,r){return i(s(o),r)}},39201:function(l,c,e){var i=e(12287),s=e(66455),o=i.aTypedArrayConstructor,r=i.getTypedArrayConstructor;l.exports=function(d){return o(s(d,r(d)))}},60536:function(l,c,e){var i=e(56393),s=0,o=Math.random(),r=i(1 .toString);l.exports=function(d){return"Symbol("+(d===void 0?"":d)+")_"+r(++s+o,36)}},8689:function(l,c,e){var i=e(4214);l.exports=i&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},66100:function(l,c,e){var i=e(33974),s=e(7979);l.exports=i&&s(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},51084:function(l){var c=TypeError;l.exports=function(e,i){if(e<i)throw c("Not enough arguments");return e}},62682:function(l,c,e){var i=e(33463),s=e(68045),o=i.WeakMap;l.exports=s(o)&&/native code/.test(String(o))},19178:function(l,c,e){var i=e(56393),s=WeakMap.prototype;l.exports={WeakMap,set:i(s.set),get:i(s.get),has:i(s.has),remove:i(s.delete)}},93489:function(l,c,e){var i=e(56393),s=WeakSet.prototype;l.exports={WeakSet,add:i(s.add),has:i(s.has),remove:i(s.delete)}},76486:function(l,c,e){var i=e(2900),s=e(21220),o=e(62365),r=e(34410).f;l.exports=function(d){var m=i.Symbol||(i.Symbol={});s(m,d)||r(m,d,{value:o.f(d)})}},62365:function(l,c,e){var i=e(21288);c.f=i},21288:function(l,c,e){var i=e(33463),s=e(59090),o=e(21220),r=e(60536),d=e(4214),m=e(8689),v=s("wks"),y=i.Symbol,b=y&&y.for,h=m?y:y&&y.withoutSetter||r;l.exports=function(x){if(!o(v,x)||!(d||typeof v[x]=="string")){var E="Symbol."+x;d&&o(y,x)?v[x]=y[x]:m&&b?v[x]=b(E):v[x]=h(E)}return v[x]}},78135:function(l){l.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},15259:function(l,c,e){"use strict";var i=e(75605),s=e(21220),o=e(2888),r=e(15726),d=e(60466),m=e(64254),v=e(50924),y=e(13888),b=e(87901),h=e(78211),x=e(46367),E=e(18307),w=e(33974),C=e(21214);l.exports=function(j,N,D,B){var M="stackTraceLimit",Q=B?2:1,F=j.split("."),H=F[F.length-1],K=i.apply(null,F);if(K){var Y=K.prototype;if(!C&&s(Y,"cause")&&delete Y.cause,!D)return K;var re=i("Error"),ce=N(function(Se,se){var Te=b(B?se:Se,void 0),le=B?new K(Se):new K;return Te!==void 0&&o(le,"message",Te),E&&o(le,"stack",x(le.stack,2)),this&&r(Y,this)&&y(le,this,ce),arguments.length>Q&&h(le,arguments[Q]),le});if(ce.prototype=Y,H!=="Error"?d?d(ce,re):m(ce,re,{name:!0}):w&&M in K&&(v(ce,K,M),v(ce,K,"prepareStackTrace")),m(ce,K),!C)try{Y.name!==H&&o(Y,"name",H),Y.constructor=ce}catch(Se){}return ce}}},22822:function(l,c,e){var i=e(51481),s=e(75605),o=e(24684),r=e(7979),d=e(15259),m="AggregateError",v=s(m),y=!r(function(){return v([1]).errors[0]!==1})&&r(function(){return v([1],m,{cause:7}).cause!==7});i({global:!0,constructor:!0,arity:2,forced:y},{AggregateError:d(m,function(b){return function(x,E){return o(b,this,arguments)}},y,!0)})},66703:function(l,c,e){"use strict";var i=e(51481),s=e(15726),o=e(59831),r=e(60466),d=e(64254),m=e(24972),v=e(2888),y=e(31506),b=e(46367),h=e(78211),x=e(7291),E=e(87901),w=e(21288),C=e(18307),j=w("toStringTag"),N=Error,D=[].push,B=function(F,H){var K=arguments.length>2?arguments[2]:void 0,Y=s(M,this),re;r?re=r(N(),Y?o(this):M):(re=Y?this:m(M),v(re,j,"Error")),H!==void 0&&v(re,"message",E(H)),C&&v(re,"stack",b(re.stack,1)),h(re,K);var ce=[];return x(F,D,{that:ce}),v(re,"errors",ce),re};r?r(B,N):d(B,N,{name:!0});var M=B.prototype=m(N.prototype,{constructor:y(1,B),message:y(1,""),name:y(1,"AggregateError")});i({global:!0,constructor:!0,arity:2},{AggregateError:B})},69041:function(l,c,e){e(66703)},67432:function(l,c,e){"use strict";var i=e(51481),s=e(63947),o=e(63354),r=e(54622),d=e(4943);i({target:"Array",proto:!0},{at:function(v){var y=s(this),b=o(y),h=r(v),x=h>=0?h:b+h;return x<0||x>=b?void 0:y[x]}}),d("at")},85717:function(l,c,e){"use strict";var i=e(51481),s=e(57773).findLastIndex,o=e(4943);i({target:"Array",proto:!0},{findLastIndex:function(d){return s(this,d,arguments.length>1?arguments[1]:void 0)}}),o("findLastIndex")},58584:function(l,c,e){"use strict";var i=e(51481),s=e(57773).findLast,o=e(4943);i({target:"Array",proto:!0},{findLast:function(d){return s(this,d,arguments.length>1?arguments[1]:void 0)}}),o("findLast")},73927:function(l,c,e){"use strict";var i=e(51481),s=e(63947),o=e(63354),r=e(27116),d=e(4705),m=e(7979),v=m(function(){return[].push.call({length:4294967296},1)!==4294967297}),y=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(b){return b instanceof TypeError}}();i({target:"Array",proto:!0,arity:1,forced:v||y},{push:function(h){var x=s(this),E=o(x),w=arguments.length;d(E+w);for(var C=0;C<w;C++)x[E]=arguments[C],E++;return r(x,E),E}})},83122:function(l,c,e){"use strict";var i=e(51481),s=e(79742).right,o=e(74773),r=e(66480),d=e(14531),m=o("reduceRight"),v=!d&&r>79&&r<83;i({target:"Array",proto:!0,forced:!m||v},{reduceRight:function(b){return s(this,b,arguments.length,arguments.length>1?arguments[1]:void 0)}})},73566:function(l,c,e){"use strict";var i=e(51481),s=e(79742).left,o=e(74773),r=e(66480),d=e(14531),m=o("reduce"),v=!d&&r>79&&r<83;i({target:"Array",proto:!0,forced:!m||v},{reduce:function(b){var h=arguments.length;return s(this,b,h,h>1?arguments[1]:void 0)}})},43316:function(l,c,e){var i=e(51481),s=e(33463),o=e(24684),r=e(15259),d="WebAssembly",m=s[d],v=Error("e",{cause:7}).cause!==7,y=function(h,x){var E={};E[h]=r(h,x,v),i({global:!0,constructor:!0,arity:1,forced:v},E)},b=function(h,x){if(m&&m[h]){var E={};E[h]=r(d+"."+h,x,v),i({target:d,stat:!0,constructor:!0,arity:1,forced:v},E)}};y("Error",function(h){return function(E){return o(h,this,arguments)}}),y("EvalError",function(h){return function(E){return o(h,this,arguments)}}),y("RangeError",function(h){return function(E){return o(h,this,arguments)}}),y("ReferenceError",function(h){return function(E){return o(h,this,arguments)}}),y("SyntaxError",function(h){return function(E){return o(h,this,arguments)}}),y("TypeError",function(h){return function(E){return o(h,this,arguments)}}),y("URIError",function(h){return function(E){return o(h,this,arguments)}}),b("CompileError",function(h){return function(E){return o(h,this,arguments)}}),b("LinkError",function(h){return function(E){return o(h,this,arguments)}}),b("RuntimeError",function(h){return function(E){return o(h,this,arguments)}})},18578:function(l,c,e){"use strict";var i=e(7778),s=e(58913);i("Map",function(o){return function(){return o(this,arguments.length?arguments[0]:void 0)}},s)},40163:function(l,c,e){e(18578)},47233:function(l,c,e){var i=e(51481),s=e(21220);i({target:"Object",stat:!0},{hasOwn:s})},28958:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(75605),d=e(35749),m=e(40383),v=e(7291),y="No one promise resolved";i({target:"Promise",stat:!0},{any:function(h){var x=this,E=r("AggregateError"),w=d.f(x),C=w.resolve,j=w.reject,N=m(function(){var D=o(x.resolve),B=[],M=0,Q=1,F=!1;v(h,function(H){var K=M++,Y=!1;Q++,s(D,x,H).then(function(re){Y||F||(F=!0,C(re))},function(re){Y||F||(Y=!0,B[K]=re,--Q||j(new E(B,y)))})}),--Q||j(new E(B,y))});return N.error&&j(N.value),w.promise}})},28605:function(l,c,e){var i=e(51481),s=e(33463),o=e(30160);i({global:!0},{Reflect:{}}),o(s.Reflect,"Reflect",!0)},14905:function(l,c,e){var i=e(33463),s=e(33974),o=e(82792),r=e(49263),d=e(7979),m=i.RegExp,v=m.prototype,y=s&&d(function(){var b=!0;try{m(".","d")}catch(D){b=!1}var h={},x="",E=b?"dgimsy":"gimsy",w=function(D,B){Object.defineProperty(h,D,{get:function(){return x+=B,!0}})},C={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};b&&(C.hasIndices="d");for(var j in C)w(j,C[j]);var N=Object.getOwnPropertyDescriptor(v,"flags").get.call(h);return N!==E||x!==E});y&&o(v,"flags",{configurable:!0,get:r})},65232:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(10601),r=e(54622),d=e(13312),m=e(7979),v=s("".charAt),y=m(function(){return"\u{20BB7}".at(-2)!=="\uD842"});i({target:"String",proto:!0,forced:y},{at:function(h){var x=d(o(this)),E=x.length,w=r(h),C=w>=0?w:E+w;return C<0||C>=E?void 0:v(x,C)}})},18134:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(56393),r=e(10601),d=e(68045),m=e(60689),v=e(89501),y=e(13312),b=e(24368),h=e(10586),x=e(43033),E=e(21288),w=e(21214),C=E("replace"),j=TypeError,N=o("".indexOf),D=o("".replace),B=o("".slice),M=Math.max,Q=function(F,H,K){return K>F.length?-1:H===""?K:N(F,H,K)};i({target:"String",proto:!0},{replaceAll:function(H,K){var Y=r(this),re,ce,Se,se,Te,le,ue,V,L,z=0,X=0,P="";if(!m(H)){if(re=v(H),re&&(ce=y(r(h(H))),!~N(ce,"g")))throw j("`.replaceAll` does not allow non-global regexes");if(Se=b(H,C),Se)return s(Se,H,Y,K);if(w&&re)return D(y(Y),H,K)}for(se=y(Y),Te=y(H),le=d(K),le||(K=y(K)),ue=Te.length,V=M(1,ue),z=Q(se,Te,0);z!==-1;)L=le?y(K(Te,z,se)):x(Te,se,z,[],void 0,K),P+=B(se,X,z)+L,X=z+ue,z=Q(se,Te,z+V);return X<se.length&&(P+=B(se,X)),P}})},8973:function(l,c,e){"use strict";var i=e(12287),s=e(63354),o=e(54622),r=i.aTypedArray,d=i.exportTypedArrayMethod;d("at",function(v){var y=r(this),b=s(y),h=o(v),x=h>=0?h:b+h;return x<0||x>=b?void 0:y[x]})},63504:function(l,c,e){"use strict";var i=e(12287),s=e(57773).findLastIndex,o=i.aTypedArray,r=i.exportTypedArrayMethod;r("findLastIndex",function(m){return s(o(this),m,arguments.length>1?arguments[1]:void 0)})},60262:function(l,c,e){"use strict";var i=e(12287),s=e(57773).findLast,o=i.aTypedArray,r=i.exportTypedArrayMethod;r("findLast",function(m){return s(o(this),m,arguments.length>1?arguments[1]:void 0)})},27446:function(l,c,e){"use strict";var i=e(33463),s=e(72995),o=e(12287),r=e(63354),d=e(38414),m=e(63947),v=e(7979),y=i.RangeError,b=i.Int8Array,h=b&&b.prototype,x=h&&h.set,E=o.aTypedArray,w=o.exportTypedArrayMethod,C=!v(function(){var N=new Uint8ClampedArray(2);return s(x,N,{length:1,0:3},1),N[1]!==3}),j=C&&o.NATIVE_ARRAY_BUFFER_VIEWS&&v(function(){var N=new b(2);return N.set(1),N.set("2",1),N[0]!==0||N[1]!==2});w("set",function(D){E(this);var B=d(arguments.length>1?arguments[1]:void 0,1),M=m(D);if(C)return s(x,this,M,B);var Q=this.length,F=r(M),H=0;if(F+B>Q)throw y("Wrong length");for(;H<F;)this[B+H]=M[H++]},!C||j)},5725:function(l,c,e){"use strict";var i=e(42166),s=e(33463),o=e(56393),r=e(23204),d=e(34840),m=e(7778),v=e(40763),y=e(34157),b=e(34402).enforce,h=e(7979),x=e(62682),E=Object,w=Array.isArray,C=E.isExtensible,j=E.isFrozen,N=E.isSealed,D=E.freeze,B=E.seal,M={},Q={},F=!s.ActiveXObject&&"ActiveXObject"in s,H,K=function(ue){return function(){return ue(this,arguments.length?arguments[0]:void 0)}},Y=m("WeakMap",K,v),re=Y.prototype,ce=o(re.set),Se=function(){return i&&h(function(){var ue=D([]);return ce(new Y,ue,1),!j(ue)})};if(x)if(F){H=v.getConstructor(K,"WeakMap",!0),d.enable();var se=o(re.delete),Te=o(re.has),le=o(re.get);r(re,{delete:function(ue){if(y(ue)&&!C(ue)){var V=b(this);return V.frozen||(V.frozen=new H),se(this,ue)||V.frozen.delete(ue)}return se(this,ue)},has:function(V){if(y(V)&&!C(V)){var L=b(this);return L.frozen||(L.frozen=new H),Te(this,V)||L.frozen.has(V)}return Te(this,V)},get:function(V){if(y(V)&&!C(V)){var L=b(this);return L.frozen||(L.frozen=new H),Te(this,V)?le(this,V):L.frozen.get(V)}return le(this,V)},set:function(V,L){if(y(V)&&!C(V)){var z=b(this);z.frozen||(z.frozen=new H),Te(this,V)?ce(this,V,L):z.frozen.set(V,L)}else ce(this,V,L);return this}})}else Se()&&r(re,{set:function(V,L){var z;return w(V)&&(j(V)?z=M:N(V)&&(z=Q)),ce(this,V,L),z==M&&D(V),z==Q&&B(V),this}})},36355:function(l,c,e){e(5725)},42075:function(l,c,e){"use strict";var i=e(51481),s=e(6318).filterReject,o=e(4943);i({target:"Array",proto:!0,forced:!0},{filterOut:function(d){return s(this,d,arguments.length>1?arguments[1]:void 0)}}),o("filterOut")},21145:function(l,c,e){"use strict";var i=e(51481),s=e(6318).filterReject,o=e(4943);i({target:"Array",proto:!0,forced:!0},{filterReject:function(d){return s(this,d,arguments.length>1?arguments[1]:void 0)}}),o("filterReject")},82281:function(l,c,e){var i=e(51481),s=e(39133);i({target:"Array",stat:!0},{fromAsync:s})},96086:function(l,c,e){var i=e(51481),s=e(74773),o=e(4943),r=e(42666),d=e(21214);i({target:"Array",proto:!0,name:"groupToMap",forced:d||!s("groupByToMap")},{groupByToMap:r}),o("groupByToMap")},32801:function(l,c,e){"use strict";var i=e(51481),s=e(38035),o=e(74773),r=e(4943);i({target:"Array",proto:!0,forced:!o("groupBy")},{groupBy:function(m){var v=arguments.length>1?arguments[1]:void 0;return s(this,m,v)}}),r("groupBy")},49470:function(l,c,e){var i=e(51481),s=e(4943),o=e(42666),r=e(21214);i({target:"Array",proto:!0,forced:r},{groupToMap:o}),s("groupToMap")},28717:function(l,c,e){"use strict";var i=e(51481),s=e(38035),o=e(4943);i({target:"Array",proto:!0},{group:function(d){var m=arguments.length>1?arguments[1]:void 0;return s(this,d,m)}}),o("group")},24212:function(l,c,e){var i=e(51481),s=e(89494),o=Object.isFrozen,r=function(d,m){if(!o||!s(d)||!o(d))return!1;for(var v=0,y=d.length,b;v<y;)if(b=d[v++],!(typeof b=="string"||m&&b===void 0))return!1;return y!==0};i({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(m){if(!r(m,!0))return!1;var v=m.raw;return v.length===m.length&&r(v,!1)}})},40608:function(l,c,e){"use strict";var i=e(33974),s=e(4943),o=e(63947),r=e(63354),d=e(82792);i&&(d(Array.prototype,"lastIndex",{configurable:!0,get:function(){var v=o(this),y=r(v);return y==0?0:y-1}}),s("lastIndex"))},30125:function(l,c,e){"use strict";var i=e(33974),s=e(4943),o=e(63947),r=e(63354),d=e(82792);i&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var v=o(this),y=r(v);return y==0?void 0:v[y-1]},set:function(v){var y=o(this),b=r(y);return y[b==0?0:b-1]=v}}),s("lastItem"))},30148:function(l,c,e){"use strict";var i=e(51481),s=e(43268),o=e(19114),r=e(4943),d=Array;i({target:"Array",proto:!0},{toReversed:function(){return s(o(this),d)}}),r("toReversed")},13335:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(41052),r=e(19114),d=e(96028),m=e(76232),v=e(4943),y=Array,b=s(m("Array").sort);i({target:"Array",proto:!0},{toSorted:function(x){x!==void 0&&o(x);var E=r(this),w=d(y,E);return b(w,x)}}),v("toSorted")},29703:function(l,c,e){"use strict";var i=e(51481),s=e(4943),o=e(4705),r=e(63354),d=e(90753),m=e(19114),v=e(54622),y=Array,b=Math.max,h=Math.min;i({target:"Array",proto:!0},{toSpliced:function(E,w){var C=m(this),j=r(C),N=d(E,j),D=arguments.length,B=0,M,Q,F,H;for(D===0?M=Q=0:D===1?(M=0,Q=j-N):(M=D-2,Q=h(b(v(w),0),j-N)),F=o(j+M-Q),H=y(F);B<N;B++)H[B]=C[B];for(;B<N+M;B++)H[B]=arguments[B-N+2];for(;B<F;B++)H[B]=C[B+Q-M];return H}}),s("toSpliced")},14429:function(l,c,e){"use strict";var i=e(51481),s=e(4943),o=e(72145);i({target:"Array",proto:!0,forced:!0},{uniqueBy:o}),s("uniqueBy")},48944:function(l,c,e){"use strict";var i=e(51481),s=e(24122),o=e(19114),r=Array;i({target:"Array",proto:!0},{with:function(d,m){return s(o(this),r,d,m)}})},98723:function(l,c,e){"use strict";var i=e(51481),s=e(33974),o=e(75605),r=e(41052),d=e(60930),m=e(70911),v=e(60689),y=e(19866),b=e(23204),h=e(82792),x=e(21288),E=e(34402),w=e(77780),C=o("Promise"),j=o("SuppressedError"),N=ReferenceError,D=x("asyncDispose"),B=x("toStringTag"),M=w.getDisposeMethod,Q=w.addDisposableResource,F="AsyncDisposableStack",H=E.set,K=E.getterFor(F),Y="async-dispose",re="disposed",ce="pending",Se=F+" already disposed",se=function(){H(m(this,Te),{type:F,state:ce,stack:[]}),s||(this.disposed=!1)},Te=se.prototype;b(Te,{disposeAsync:function(){var ue=this;return new C(function(V,L){var z=K(ue);if(z.state==re)return V(void 0);z.state=re,s||(ue.disposed=!0);var X=z.stack,P=X.length,J=!1,ge,We=function(he){J?ge=new j(he,ge):(J=!0,ge=he),we()},we=function(){if(P){var he=X[--P];X[P]=null;try{C.resolve(he()).then(we,We)}catch(ze){We(ze)}}else z.stack=null,J?L(ge):V(void 0)};we()})},use:function(ue){var V=K(this);if(V.state==re)throw N(Se);if(!v(ue)){d(ue);var L=r(M(ue,Y));Q(V,ue,Y,L)}return ue},adopt:function(ue,V){var L=K(this);if(L.state==re)throw N(Se);return r(V),Q(L,void 0,Y,function(){V(ue)}),ue},defer:function(ue){var V=K(this);if(V.state==re)throw N(Se);r(ue),Q(V,void 0,Y,ue)},move:function(){var ue=K(this);if(ue.state==re)throw N(Se);var V=new se;return K(V).stack=ue.stack,ue.stack=[],V}}),s&&h(Te,"disposed",{configurable:!0,get:function(){return K(this).state==re}}),y(Te,D,Te.disposeAsync,{name:"disposeAsync"}),y(Te,B,F,{nonWritable:!0}),i({global:!0,constructor:!0,forced:!0},{AsyncDisposableStack:se})},16761:function(l,c,e){var i=e(51481),s=e(82454);i({target:"AsyncIterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:s})},199:function(l,c,e){"use strict";var i=e(72995),s=e(19866),o=e(75605),r=e(24368),d=e(21220),m=e(21288),v=e(99217),y=m("asyncDispose"),b=o("Promise");d(v,y)||s(v,y,function(){var h=this;return new b(function(x,E){var w=r(h,"return");w?b.resolve(i(w,h)).then(function(){x(void 0)},E):x(void 0)})})},80706:function(l,c,e){"use strict";var i=e(51481),s=e(70911),o=e(2888),r=e(21220),d=e(21288),m=e(99217),v=e(21214),y=d("toStringTag"),b=function(){s(this,m)};b.prototype=m,r(m,y)||o(m,y,"AsyncIterator"),(v||!r(m,"constructor")||m.constructor===Object)&&o(m,"constructor",b),i({global:!0,constructor:!0,forced:v},{AsyncIterator:b})},32649:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(60930),r=e(78049),d=e(32717),m=e(85738),v=e(18037),y=e(71025),b=v(function(h){var x=this;return new h(function(E,w){var C=function(N){x.done=!0,w(N)},j=function(){try{h.resolve(o(s(x.next,x.iterator))).then(function(N){try{o(N).done?(x.done=!0,E(y(void 0,!0))):x.remaining?(x.remaining--,j()):E(y(N.value,!1))}catch(D){C(D)}},C)}catch(N){C(N)}};j()})});i({target:"AsyncIterator",proto:!0,real:!0},{drop:function(x){return new b(r(this),{remaining:m(d(+x))})}})},65611:function(l,c,e){"use strict";var i=e(51481),s=e(81e3).every;i({target:"AsyncIterator",proto:!0,real:!0},{every:function(r){return s(this,r)}})},47482:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(60930),d=e(34157),m=e(78049),v=e(18037),y=e(71025),b=e(70694),h=v(function(x){var E=this,w=E.iterator,C=E.predicate;return new x(function(j,N){var D=function(Q){E.done=!0,N(Q)},B=function(Q){b(w,D,Q,D)},M=function(){try{x.resolve(r(s(E.next,w))).then(function(Q){try{if(r(Q).done)E.done=!0,j(y(void 0,!0));else{var F=Q.value;try{var H=C(F,E.counter++),K=function(Y){Y?j(y(F,!1)):M()};d(H)?x.resolve(H).then(K,B):K(H)}catch(Y){B(Y)}}}catch(Y){D(Y)}},D)}catch(Q){D(Q)}};M()})});i({target:"AsyncIterator",proto:!0,real:!0},{filter:function(E){return new h(m(this),{predicate:o(E)})}})},34651:function(l,c,e){"use strict";var i=e(51481),s=e(81e3).find;i({target:"AsyncIterator",proto:!0,real:!0},{find:function(r){return s(this,r)}})},1845:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(60930),d=e(34157),m=e(78049),v=e(18037),y=e(71025),b=e(40737),h=e(70694),x=v(function(E){var w=this,C=w.iterator,j=w.mapper;return new E(function(N,D){var B=function(H){w.done=!0,D(H)},M=function(H){h(C,B,H,B)},Q=function(){try{E.resolve(r(s(w.next,C))).then(function(H){try{if(r(H).done)w.done=!0,N(y(void 0,!0));else{var K=H.value;try{var Y=j(K,w.counter++),re=function(ce){try{w.inner=b(ce),F()}catch(Se){M(Se)}};d(Y)?E.resolve(Y).then(re,M):re(Y)}catch(ce){M(ce)}}}catch(ce){B(ce)}},B)}catch(H){B(H)}},F=function(){var H=w.inner;if(H)try{E.resolve(r(s(H.next,H.iterator))).then(function(K){try{r(K).done?(w.inner=null,Q()):N(y(K.value,!1))}catch(Y){M(Y)}},M)}catch(K){M(K)}else Q()};F()})});i({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function(w){return new x(m(this),{mapper:o(w),inner:null})}})},72159:function(l,c,e){"use strict";var i=e(51481),s=e(81e3).forEach;i({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(r){return s(this,r)}})},609:function(l,c,e){var i=e(51481),s=e(63947),o=e(15726),r=e(40737),d=e(99217),m=e(20612);i({target:"AsyncIterator",stat:!0},{from:function(y){var b=r(typeof y=="string"?s(y):y);return o(d,b.iterator)?b.iterator:new m(b)}})},32183:function(l,c,e){var i=e(51481),s=e(82454);i({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{indexed:s})},74658:function(l,c,e){var i=e(51481),s=e(85802);i({target:"AsyncIterator",proto:!0,real:!0},{map:s})},27814:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(60930),d=e(34157),m=e(75605),v=e(78049),y=e(70694),b=m("Promise"),h=TypeError;i({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(E){var w=v(this),C=w.iterator,j=w.next,N=arguments.length<2,D=N?void 0:arguments[1],B=0;return o(E),new b(function(M,Q){var F=function(K){y(C,Q,K,Q)},H=function(){try{b.resolve(r(s(j,C))).then(function(K){try{if(r(K).done)N?Q(h("Reduce of empty iterator with no initial value")):M(D);else{var Y=K.value;if(N)N=!1,D=Y,H();else try{var re=E(D,Y,B),ce=function(Se){D=Se,H()};d(re)?b.resolve(re).then(ce,F):ce(re)}catch(Se){F(Se)}}B++}catch(Se){Q(Se)}},Q)}catch(K){Q(K)}};H()})}})},16243:function(l,c,e){"use strict";var i=e(51481),s=e(81e3).some;i({target:"AsyncIterator",proto:!0,real:!0},{some:function(r){return s(this,r)}})},11743:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(60930),r=e(78049),d=e(32717),m=e(85738),v=e(18037),y=e(71025),b=v(function(h){var x=this,E=x.iterator,w;if(!x.remaining--){var C=y(void 0,!0);return x.done=!0,w=E.return,w!==void 0?h.resolve(s(w,E,void 0)).then(function(){return C}):C}return h.resolve(s(x.next,E)).then(function(j){return o(j).done?(x.done=!0,y(void 0,!0)):y(j.value,!1)}).then(null,function(j){throw x.done=!0,j})});i({target:"AsyncIterator",proto:!0,real:!0},{take:function(x){return new b(r(this),{remaining:m(d(+x))})}})},29413:function(l,c,e){"use strict";var i=e(51481),s=e(81e3).toArray;i({target:"AsyncIterator",proto:!0,real:!0},{toArray:function(){return s(this,void 0,[])}})},45707:function(l,c,e){"use strict";var i=e(51481),s=e(58976);typeof BigInt=="function"&&i({target:"BigInt",stat:!0,forced:!0},{range:function(r,d,m){return new s(r,d,m,"bigint",BigInt(0),BigInt(1))}})},95596:function(l,c,e){var i=e(51481),s=e(24684),o=e(54580),r=e(75605),d=e(24972),m=Object,v=function(){var y=r("Object","freeze");return y?y(d(null)):d(null)};i({global:!0,forced:!0},{compositeKey:function(){return s(o,m,arguments).get("object",v)}})},99944:function(l,c,e){var i=e(51481),s=e(54580),o=e(75605),r=e(24684);i({global:!0,forced:!0},{compositeSymbol:function(){return arguments.length==1&&typeof arguments[0]=="string"?o("Symbol").for(arguments[0]):r(s,null,arguments).get("symbol",o("Symbol"))}})},62074:function(l,c,e){"use strict";var i=e(51481),s=e(33974),o=e(75605),r=e(41052),d=e(60930),m=e(70911),v=e(60689),y=e(19866),b=e(23204),h=e(82792),x=e(21288),E=e(34402),w=e(77780),C=o("SuppressedError"),j=ReferenceError,N=x("dispose"),D=x("toStringTag"),B=w.getDisposeMethod,M=w.addDisposableResource,Q="DisposableStack",F=E.set,H=E.getterFor(Q),K="sync-dispose",Y="disposed",re="pending",ce=Q+" already disposed",Se=function(){F(m(this,se),{type:Q,state:re,stack:[]}),s||(this.disposed=!1)},se=Se.prototype;b(se,{dispose:function(){var le=H(this);if(le.state!=Y){le.state=Y,s||(this.disposed=!0);for(var ue=le.stack,V=ue.length,L=!1,z;V;){var X=ue[--V];ue[V]=null;try{X()}catch(P){L?z=new C(P,z):(L=!0,z=P)}}if(le.stack=null,L)throw z}},use:function(le){var ue=H(this);if(ue.state==Y)throw j(ce);if(!v(le)){d(le);var V=r(B(le,K));M(ue,le,K,V)}return le},adopt:function(le,ue){var V=H(this);if(V.state==Y)throw j(ce);return r(ue),M(V,void 0,K,function(){ue(le)}),le},defer:function(le){var ue=H(this);if(ue.state==Y)throw j(ce);r(le),M(ue,void 0,K,le)},move:function(){var le=H(this);if(le.state==Y)throw j(ce);var ue=new Se;return H(ue).stack=le.stack,le.stack=[],ue}}),s&&h(se,"disposed",{configurable:!0,get:function(){return H(this).state==Y}}),y(se,N,se.dispose,{name:"dispose"}),y(se,D,Q,{nonWritable:!0}),i({global:!0,constructor:!0},{DisposableStack:Se})},7311:function(l,c,e){var i=e(51481),s=e(56393),o=e(68045),r=e(86225),d=e(21220),m=e(33974),v=Object.getOwnPropertyDescriptor,y=/^\s*class\b/,b=s(y.exec),h=function(x){try{if(!m||!b(y,r(x)))return!1}catch(w){}var E=v(x,"prototype");return!!E&&d(E,"writable")&&!E.writable};i({target:"Function",stat:!0,sham:!0,forced:!0},{isCallable:function(E){return o(E)&&!h(E)}})},36313:function(l,c,e){var i=e(51481),s=e(55336);i({target:"Function",stat:!0,forced:!0},{isConstructor:s})},15887:function(l,c,e){var i=e(51481),s=e(56393),o=e(41052);i({target:"Function",proto:!0,forced:!0},{unThis:function(){return s(o(this))}})},13436:function(l,c,e){var i=e(51481),s=e(72508);i({target:"Iterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:s})},63789:function(l,c,e){"use strict";var i=e(51481),s=e(33463),o=e(70911),r=e(68045),d=e(2888),m=e(7979),v=e(21220),y=e(21288),b=e(2709).IteratorPrototype,h=e(21214),x=y("toStringTag"),E=s.Iterator,w=h||!r(E)||E.prototype!==b||!m(function(){E({})}),C=function(){o(this,b)};v(b,x)||d(b,x,"Iterator"),(w||!v(b,"constructor")||b.constructor===Object)&&d(b,"constructor",C),C.prototype=b,i({global:!0,constructor:!0,forced:w},{Iterator:C})},76642:function(l,c,e){"use strict";var i=e(72995),s=e(19866),o=e(24368),r=e(21220),d=e(21288),m=e(2709).IteratorPrototype,v=d("dispose");r(m,v)||s(m,v,function(){var y=o(this,"return");y&&i(y,this)})},22228:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(60930),r=e(78049),d=e(32717),m=e(85738),v=e(48320),y=v(function(){for(var b=this.iterator,h=this.next,x,E;this.remaining;)if(this.remaining--,x=o(s(h,b)),E=this.done=!!x.done,E)return;if(x=o(s(h,b)),E=this.done=!!x.done,!E)return x.value});i({target:"Iterator",proto:!0,real:!0},{drop:function(h){return new y(r(this),{remaining:m(d(+h))})}})},50920:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(41052),r=e(78049);i({target:"Iterator",proto:!0,real:!0},{every:function(m){var v=r(this),y=0;return o(m),!s(v,function(b,h){if(!m(b,y++))return h()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},62298:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(60930),d=e(78049),m=e(48320),v=e(44658),y=m(function(){for(var b=this.iterator,h=this.predicate,x=this.next,E,w,C;;){if(E=r(s(x,b)),w=this.done=!!E.done,w)return;if(C=E.value,v(b,h,[C,this.counter++],!0))return C}});i({target:"Iterator",proto:!0,real:!0},{filter:function(h){return new y(d(this),{predicate:o(h)})}})},63018:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(41052),r=e(78049);i({target:"Iterator",proto:!0,real:!0},{find:function(m){var v=r(this),y=0;return o(m),s(v,function(b,h){if(m(b,y++))return h(b)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},63904:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(41052),r=e(60930),d=e(78049),m=e(11324),v=e(48320),y=e(76079),b=v(function(){for(var h=this.iterator,x=this.mapper,E,w;;){if(w=this.inner)try{if(E=r(s(w.next,w.iterator)),!E.done)return E.value;this.inner=null}catch(C){y(h,"throw",C)}if(E=r(s(this.next,h)),this.done=!!E.done)return;try{this.inner=m(x(E.value,this.counter++))}catch(C){y(h,"throw",C)}}});i({target:"Iterator",proto:!0,real:!0},{flatMap:function(x){return new b(d(this),{mapper:o(x),inner:null})}})},50118:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(41052),r=e(78049);i({target:"Iterator",proto:!0,real:!0},{forEach:function(m){var v=r(this),y=0;o(m),s(v,function(b){m(b,y++)},{IS_RECORD:!0})}})},10142:function(l,c,e){var i=e(51481),s=e(72995),o=e(63947),r=e(15726),d=e(2709).IteratorPrototype,m=e(48320),v=e(11324),y=m(function(){return s(this.next,this.iterator)},!0);i({target:"Iterator",stat:!0},{from:function(h){var x=v(typeof h=="string"?o(h):h);return r(d,x.iterator)?x.iterator:new y(x)}})},58475:function(l,c,e){var i=e(51481),s=e(72508);i({target:"Iterator",proto:!0,real:!0,forced:!0},{indexed:s})},2256:function(l,c,e){var i=e(51481),s=e(60966);i({target:"Iterator",proto:!0,real:!0},{map:s})},90883:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(41052),r=e(78049),d=TypeError;i({target:"Iterator",proto:!0,real:!0},{reduce:function(v){var y=r(this);o(v);var b=arguments.length<2,h=b?void 0:arguments[1],x=0;if(s(y,function(E){b?(b=!1,h=E):h=v(h,E,x),x++},{IS_RECORD:!0}),b)throw d("Reduce of empty iterator with no initial value");return h}})},84217:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(41052),r=e(78049);i({target:"Iterator",proto:!0,real:!0},{some:function(m){var v=r(this),y=0;return o(m),s(v,function(b,h){if(m(b,y++))return h()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},32271:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(60930),r=e(78049),d=e(32717),m=e(85738),v=e(48320),y=e(76079),b=v(function(){var h=this.iterator;if(!this.remaining--)return this.done=!0,y(h,"normal",void 0);var x=o(s(this.next,h)),E=this.done=!!x.done;if(!E)return x.value});i({target:"Iterator",proto:!0,real:!0},{take:function(x){return new b(r(this),{remaining:m(d(+x))})}})},63700:function(l,c,e){"use strict";var i=e(51481),s=e(7291),o=e(78049),r=[].push;i({target:"Iterator",proto:!0,real:!0},{toArray:function(){var m=[];return s(o(this),r,{that:m,IS_RECORD:!0}),m}})},4924:function(l,c,e){"use strict";var i=e(51481),s=e(83491),o=e(20612),r=e(78049);i({target:"Iterator",proto:!0,real:!0},{toAsync:function(){return new o(r(new s(r(this))))}})},22895:function(l,c,e){"use strict";var i=e(51481),s=e(52372),o=e(70821).remove;i({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=s(this),m=!0,v,y=0,b=arguments.length;y<b;y++)v=o(d,arguments[y]),m=m&&v;return!!m}})},62715:function(l,c,e){"use strict";var i=e(51481),s=e(52372),o=e(70821),r=o.get,d=o.has,m=o.set;i({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(y,b){var h=s(this),x,E;return d(h,y)?(x=r(h,y),"update"in b&&(x=b.update(x,y,h),m(h,y,x)),x):(E=b.insert(y,h),m(h,y,E),E)}})},6069:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{every:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0);return r(v,function(b,h){if(!y(b,h,v))return!1},!0)!==!1}})},81929:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(70821),d=e(36924),m=r.Map,v=r.set;i({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(b){var h=o(this),x=s(b,arguments.length>1?arguments[1]:void 0),E=new m;return d(h,function(w,C){x(w,C,h)&&v(E,C,w)}),E}})},40160:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0),b=r(v,function(h,x){if(y(h,x,v))return{key:x}},!0);return b&&b.key}})},24838:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{find:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0),b=r(v,function(h,x){if(y(h,x,v))return{value:h}},!0);return b&&b.value}})},43383:function(l,c,e){var i=e(51481),s=e(79202);i({target:"Map",stat:!0,forced:!0},{from:s})},80276:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(56393),r=e(68045),d=e(41052),m=e(7291),v=e(70821).Map,y=o([].push);i({target:"Map",stat:!0,forced:!0},{groupBy:function(h,x){var E=r(this)?this:v,w=new E;d(x);var C=d(w.has),j=d(w.get),N=d(w.set);return m(h,function(D){var B=x(D);s(C,w,B)?y(s(j,w,B),D):s(N,w,B,[D])}),w}})},56377:function(l,c,e){"use strict";var i=e(51481),s=e(27442),o=e(52372),r=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(m){return r(o(this),function(v){if(s(v,m))return!0},!0)===!0}})},34063:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(7291),r=e(68045),d=e(41052),m=e(70821).Map;i({target:"Map",stat:!0,forced:!0},{keyBy:function(y,b){var h=r(this)?this:m,x=new h;d(b);var E=d(x.set);return o(y,function(w){s(E,x,b(w),w)}),x}})},68839:function(l,c,e){"use strict";var i=e(51481),s=e(52372),o=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(d){var m=o(s(this),function(v,y){if(v===d)return{key:y}},!0);return m&&m.key}})},18665:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(70821),d=e(36924),m=r.Map,v=r.set;i({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(b){var h=o(this),x=s(b,arguments.length>1?arguments[1]:void 0),E=new m;return d(h,function(w,C){v(E,x(w,C,h),w)}),E}})},35802:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(70821),d=e(36924),m=r.Map,v=r.set;i({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(b){var h=o(this),x=s(b,arguments.length>1?arguments[1]:void 0),E=new m;return d(h,function(w,C){v(E,C,x(w,C,h))}),E}})},45512:function(l,c,e){"use strict";var i=e(51481),s=e(52372),o=e(7291),r=e(70821).set;i({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(m){for(var v=s(this),y=arguments.length,b=0;b<y;)o(arguments[b++],function(h,x){r(v,h,x)},{AS_ENTRIES:!0});return v}})},8584:function(l,c,e){var i=e(51481),s=e(64533);i({target:"Map",stat:!0,forced:!0},{of:s})},66693:function(l,c,e){"use strict";var i=e(51481),s=e(41052),o=e(52372),r=e(36924),d=TypeError;i({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(v){var y=o(this),b=arguments.length<2,h=b?void 0:arguments[1];if(s(v),r(y,function(x,E){b?(b=!1,h=x):h=v(h,x,E,y)}),b)throw d("Reduce of empty map with no initial value");return h}})},32152:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(52372),r=e(36924);i({target:"Map",proto:!0,real:!0,forced:!0},{some:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0);return r(v,function(b,h){if(y(b,h,v))return!0},!0)===!0}})},47262:function(l,c,e){"use strict";var i=e(51481),s=e(85781);i({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:s})},33001:function(l,c,e){"use strict";var i=e(51481),s=e(41052),o=e(52372),r=e(70821),d=TypeError,m=r.get,v=r.has,y=r.set;i({target:"Map",proto:!0,real:!0,forced:!0},{update:function(h,x){var E=o(this),w=arguments.length;s(x);var C=v(E,h);if(!C&&w<3)throw d("Updating absent value");var j=C?m(E,h):s(w>2?arguments[2]:void 0)(h,E);return y(E,h,x(j,h,E)),E}})},86327:function(l,c,e){"use strict";var i=e(51481),s=e(85781);i({target:"Map",proto:!0,real:!0,forced:!0},{upsert:s})},35418:function(l,c,e){var i=e(51481),s=Math.min,o=Math.max;i({target:"Math",stat:!0,forced:!0},{clamp:function(d,m,v){return s(v,o(m,d))}})},90843:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{DEG_PER_RAD:Math.PI/180})},15438:function(l,c,e){var i=e(51481),s=180/Math.PI;i({target:"Math",stat:!0,forced:!0},{degrees:function(r){return r*s}})},20348:function(l,c,e){var i=e(51481),s=e(31418),o=e(92998);i({target:"Math",stat:!0,forced:!0},{fscale:function(d,m,v,y,b){return o(s(d,m,v,y,b))}})},53350:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,forced:!0},{iaddh:function(o,r,d,m){var v=o>>>0,y=r>>>0,b=d>>>0;return y+(m>>>0)+((v&b|(v|b)&~(v+b>>>0))>>>31)|0}})},95187:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,forced:!0},{imulh:function(o,r){var d=65535,m=+o,v=+r,y=m&d,b=v&d,h=m>>16,x=v>>16,E=(h*b>>>0)+(y*b>>>16);return h*x+(E>>16)+((y*x>>>0)+(E&d)>>16)}})},92965:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,forced:!0},{isubh:function(o,r,d,m){var v=o>>>0,y=r>>>0,b=d>>>0;return y-(m>>>0)-((~v&b|~(v^b)&v-b>>>0)>>>31)|0}})},51125:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},63681:function(l,c,e){var i=e(51481),s=Math.PI/180;i({target:"Math",stat:!0,forced:!0},{radians:function(r){return r*s}})},68652:function(l,c,e){var i=e(51481),s=e(31418);i({target:"Math",stat:!0,forced:!0},{scale:s})},55377:function(l,c,e){var i=e(51481),s=e(60930),o=e(33829),r=e(1306),d=e(71025),m=e(34402),v="Seeded Random",y=v+" Generator",b='Math.seededPRNG() argument should have a "seed" field with a finite value.',h=m.set,x=m.getterFor(y),E=TypeError,w=r(function(j){h(this,{type:y,seed:j%2147483647})},v,function(){var j=x(this),N=j.seed=(j.seed*1103515245+12345)%2147483647;return d((N&1073741823)/1073741823,!1)});i({target:"Math",stat:!0,forced:!0},{seededPRNG:function(j){var N=s(j).seed;if(!o(N))throw E(b);return new w(N)}})},94571:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,forced:!0},{signbit:function(o){var r=+o;return r==r&&r==0?1/r==-1/0:r<0}})},93908:function(l,c,e){var i=e(51481);i({target:"Math",stat:!0,forced:!0},{umulh:function(o,r){var d=65535,m=+o,v=+r,y=m&d,b=v&d,h=m>>>16,x=v>>>16,E=(h*b>>>0)+(y*b>>>16);return h*x+(E>>>16)+((y*x>>>0)+(E&d)>>>16)}})},25397:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(54622),r=e(35685),d="Invalid number representation",m="Invalid radix",v=RangeError,y=SyntaxError,b=TypeError,h=/^[\da-z]+$/,x=s("".charAt),E=s(h.exec),w=s(1 .toString),C=s("".slice);i({target:"Number",stat:!0,forced:!0},{fromString:function(N,D){var B=1,M,Q;if(typeof N!="string")throw b(d);if(!N.length||x(N,0)=="-"&&(B=-1,N=C(N,1),!N.length))throw y(d);if(M=D===void 0?10:o(D),M<2||M>36)throw v(m);if(!E(h,N)||w(Q=r(N,M),M)!==N)throw y(d);return B*Q}})},44260:function(l,c,e){"use strict";var i=e(51481),s=e(58976);i({target:"Number",stat:!0,forced:!0},{range:function(r,d,m){return new s(r,d,m,"number",0,1)}})},97864:function(l,c,e){"use strict";var i=e(51481),s=e(18603);i({target:"Object",stat:!0,forced:!0},{iterateEntries:function(r){return new s(r,"entries")}})},91609:function(l,c,e){"use strict";var i=e(51481),s=e(18603);i({target:"Object",stat:!0,forced:!0},{iterateKeys:function(r){return new s(r,"keys")}})},33358:function(l,c,e){"use strict";var i=e(51481),s=e(18603);i({target:"Object",stat:!0,forced:!0},{iterateValues:function(r){return new s(r,"values")}})},69385:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(33974),r=e(34345),d=e(41052),m=e(60930),v=e(70911),y=e(68045),b=e(60689),h=e(34157),x=e(24368),E=e(19866),w=e(23204),C=e(82792),j=e(51802),N=e(21288),D=e(34402),B=e(9736),M=N("observable"),Q="Observable",F="Subscription",H="SubscriptionObserver",K=D.getterFor,Y=D.set,re=K(Q),ce=K(F),Se=K(H),se=function(L){this.observer=m(L),this.cleanup=void 0,this.subscriptionObserver=void 0};se.prototype={type:F,clean:function(){var L=this.cleanup;if(L){this.cleanup=void 0;try{L()}catch(z){j(z)}}},close:function(){if(!o){var L=this.facade,z=this.subscriptionObserver;L.closed=!0,z&&(z.closed=!0)}this.observer=void 0},isClosed:function(){return this.observer===void 0}};var Te=function(L,z){var X=Y(this,new se(L)),P;o||(this.closed=!1);try{(P=x(L,"start"))&&s(P,L,this)}catch(we){j(we)}if(!X.isClosed()){var J=X.subscriptionObserver=new le(X);try{var ge=z(J),We=ge;b(ge)||(X.cleanup=y(ge.unsubscribe)?function(){We.unsubscribe()}:d(ge))}catch(we){J.error(we);return}X.isClosed()&&X.clean()}};Te.prototype=w({},{unsubscribe:function(){var z=ce(this);z.isClosed()||(z.close(),z.clean())}}),o&&C(Te.prototype,"closed",{configurable:!0,get:function(){return ce(this).isClosed()}});var le=function(L){Y(this,{type:H,subscriptionState:L}),o||(this.closed=!1)};le.prototype=w({},{next:function(z){var X=Se(this).subscriptionState;if(!X.isClosed()){var P=X.observer;try{var J=x(P,"next");J&&s(J,P,z)}catch(ge){j(ge)}}},error:function(z){var X=Se(this).subscriptionState;if(!X.isClosed()){var P=X.observer;X.close();try{var J=x(P,"error");J?s(J,P,z):j(z)}catch(ge){j(ge)}X.clean()}},complete:function(){var z=Se(this).subscriptionState;if(!z.isClosed()){var X=z.observer;z.close();try{var P=x(X,"complete");P&&s(P,X)}catch(J){j(J)}z.clean()}}}),o&&C(le.prototype,"closed",{configurable:!0,get:function(){return Se(this).subscriptionState.isClosed()}});var ue=function(z){v(this,V),Y(this,{type:Q,subscriber:d(z)})},V=ue.prototype;w(V,{subscribe:function(z){var X=arguments.length;return new Te(y(z)?{next:z,error:X>1?arguments[1]:void 0,complete:X>2?arguments[2]:void 0}:h(z)?z:{},re(this).subscriber)}}),E(V,M,function(){return this}),i({global:!0,constructor:!0,forced:B},{Observable:ue}),r(Q)},37279:function(l,c,e){"use strict";var i=e(51481),s=e(75605),o=e(72995),r=e(60930),d=e(55336),m=e(45245),v=e(24368),y=e(7291),b=e(21288),h=e(9736),x=b("observable");i({target:"Observable",stat:!0,forced:h},{from:function(w){var C=d(this)?this:s("Observable"),j=v(r(w),x);if(j){var N=r(o(j,w));return N.constructor===C?N:new C(function(B){return N.subscribe(B)})}var D=m(w);return new C(function(B){y(D,function(M,Q){if(B.next(M),B.closed)return Q()},{IS_ITERATOR:!0,INTERRUPTED:!0}),B.complete()})}})},5855:function(l,c,e){e(69385),e(37279),e(38528)},38528:function(l,c,e){"use strict";var i=e(51481),s=e(75605),o=e(55336),r=e(9736),d=s("Array");i({target:"Observable",stat:!0,forced:r},{of:function(){for(var v=o(this)?this:s("Observable"),y=arguments.length,b=d(y),h=0;h<y;)b[h]=arguments[h++];return new v(function(x){for(var E=0;E<y;E++)if(x.next(b[E]),x.closed)return;x.complete()})}})},5037:function(l,c,e){"use strict";var i=e(51481),s=e(35749),o=e(40383);i({target:"Promise",stat:!0,forced:!0},{try:function(r){var d=s.f(this),m=o(r);return(m.error?d.reject:d.resolve)(m.value),d.promise}})},38804:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.toKey,d=s.set;i({target:"Reflect",stat:!0},{defineMetadata:function(v,y,b){var h=arguments.length<4?void 0:r(arguments[3]);d(v,y,o(b),h)}})},20700:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.toKey,d=s.getMap,m=s.store;i({target:"Reflect",stat:!0},{deleteMetadata:function(y,b){var h=arguments.length<3?void 0:r(arguments[2]),x=d(o(b),h,!1);if(x===void 0||!x.delete(y))return!1;if(x.size)return!0;var E=m.get(b);return E.delete(h),!!E.size||m.delete(b)}})},4607:function(l,c,e){var i=e(51481),s=e(56393),o=e(35974),r=e(60930),d=e(59831),m=e(72145),v=s(m),y=s([].concat),b=o.keys,h=o.toKey,x=function(E,w){var C=b(E,w),j=d(E);if(j===null)return C;var N=x(j,w);return N.length?C.length?v(y(C,N)):N:C};i({target:"Reflect",stat:!0},{getMetadataKeys:function(w){var C=arguments.length<2?void 0:h(arguments[1]);return x(r(w),C)}})},31949:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=e(59831),d=s.has,m=s.get,v=s.toKey,y=function(b,h,x){var E=d(b,h,x);if(E)return m(b,h,x);var w=r(h);return w!==null?y(b,w,x):void 0};i({target:"Reflect",stat:!0},{getMetadata:function(h,x){var E=arguments.length<3?void 0:v(arguments[2]);return y(h,o(x),E)}})},99040:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.keys,d=s.toKey;i({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(v){var y=arguments.length<2?void 0:d(arguments[1]);return r(o(v),y)}})},65689:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.get,d=s.toKey;i({target:"Reflect",stat:!0},{getOwnMetadata:function(v,y){var b=arguments.length<3?void 0:d(arguments[2]);return r(v,o(y),b)}})},28309:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=e(59831),d=s.has,m=s.toKey,v=function(y,b,h){var x=d(y,b,h);if(x)return!0;var E=r(b);return E!==null?v(y,E,h):!1};i({target:"Reflect",stat:!0},{hasMetadata:function(b,h){var x=arguments.length<3?void 0:m(arguments[2]);return v(b,o(h),x)}})},62015:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.has,d=s.toKey;i({target:"Reflect",stat:!0},{hasOwnMetadata:function(v,y){var b=arguments.length<3?void 0:d(arguments[2]);return r(v,o(y),b)}})},20106:function(l,c,e){var i=e(51481),s=e(35974),o=e(60930),r=s.toKey,d=s.set;i({target:"Reflect",stat:!0},{metadata:function(v,y){return function(h,x){d(v,y,o(h),r(x))}}})},76086:function(l,c,e){"use strict";var i=e(51481),s=e(66149),o=e(58618).add;i({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var d=s(this),m=0,v=arguments.length;m<v;m++)o(d,arguments[m]);return d}})},13239:function(l,c,e){"use strict";var i=e(51481),s=e(66149),o=e(58618).remove;i({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=s(this),m=!0,v,y=0,b=arguments.length;y<b;y++)v=o(d,arguments[y]),m=m&&v;return!!m}})},42164:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(26455);i({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(m){return s(r,this,o(m))}})},61306:function(l,c,e){var i=e(51481),s=e(26455),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:s})},78165:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(66149),r=e(87667);i({target:"Set",proto:!0,real:!0,forced:!0},{every:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0);return r(v,function(b){if(!y(b,b,v))return!1},!0)!==!1}})},44732:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(66149),r=e(58618),d=e(87667),m=r.Set,v=r.add;i({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(b){var h=o(this),x=s(b,arguments.length>1?arguments[1]:void 0),E=new m;return d(h,function(w){x(w,w,h)&&v(E,w)}),E}})},86731:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(66149),r=e(87667);i({target:"Set",proto:!0,real:!0,forced:!0},{find:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0),b=r(v,function(h){if(y(h,h,v))return{value:h}},!0);return b&&b.value}})},86767:function(l,c,e){var i=e(51481),s=e(79202);i({target:"Set",stat:!0,forced:!0},{from:s})},80031:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(58506);i({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(m){return s(r,this,o(m))}})},60419:function(l,c,e){var i=e(51481),s=e(58506),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("intersection")},{intersection:s})},65257:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(90497);i({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(m){return s(r,this,o(m))}})},74797:function(l,c,e){var i=e(51481),s=e(90497),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:s})},40736:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(16903);i({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(m){return s(r,this,o(m))}})},88990:function(l,c,e){var i=e(51481),s=e(16903),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:s})},75737:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(32583);i({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(m){return s(r,this,o(m))}})},85081:function(l,c,e){var i=e(51481),s=e(32583),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:s})},43270:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(66149),r=e(87667),d=e(13312),m=s([].join),v=s([].push);i({target:"Set",proto:!0,real:!0,forced:!0},{join:function(b){var h=o(this),x=b===void 0?",":d(b),E=[];return r(h,function(w){v(E,w)}),m(E,x)}})},49930:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(66149),r=e(58618),d=e(87667),m=r.Set,v=r.add;i({target:"Set",proto:!0,real:!0,forced:!0},{map:function(b){var h=o(this),x=s(b,arguments.length>1?arguments[1]:void 0),E=new m;return d(h,function(w){v(E,x(w,w,h))}),E}})},38141:function(l,c,e){var i=e(51481),s=e(64533);i({target:"Set",stat:!0,forced:!0},{of:s})},10429:function(l,c,e){"use strict";var i=e(51481),s=e(41052),o=e(66149),r=e(87667),d=TypeError;i({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(v){var y=o(this),b=arguments.length<2,h=b?void 0:arguments[1];if(s(v),r(y,function(x){b?(b=!1,h=x):h=v(h,x,x,y)}),b)throw d("Reduce of empty set with no initial value");return h}})},60862:function(l,c,e){"use strict";var i=e(51481),s=e(46861),o=e(66149),r=e(87667);i({target:"Set",proto:!0,real:!0,forced:!0},{some:function(m){var v=o(this),y=s(m,arguments.length>1?arguments[1]:void 0);return r(v,function(b){if(y(b,b,v))return!0},!0)===!0}})},66505:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(82116);i({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(m){return s(r,this,o(m))}})},7719:function(l,c,e){var i=e(51481),s=e(82116),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:s})},4456:function(l,c,e){"use strict";var i=e(51481),s=e(72995),o=e(5920),r=e(94986);i({target:"Set",proto:!0,real:!0,forced:!0},{union:function(m){return s(r,this,o(m))}})},62616:function(l,c,e){var i=e(51481),s=e(94986),o=e(69122);i({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:s})},28763:function(l,c,e){"use strict";var i=e(51481),s=e(40711).charAt,o=e(10601),r=e(54622),d=e(13312);i({target:"String",proto:!0,forced:!0},{at:function(v){var y=d(o(this)),b=y.length,h=r(v),x=h>=0?h:b+h;return x<0||x>=b?void 0:s(y,x)}})},26515:function(l,c,e){"use strict";var i=e(51481),s=e(1306),o=e(71025),r=e(10601),d=e(13312),m=e(34402),v=e(40711),y=v.codeAt,b=v.charAt,h="String Iterator",x=m.set,E=m.getterFor(h),w=s(function(j){x(this,{type:h,string:j,index:0})},"String",function(){var j=E(this),N=j.string,D=j.index,B;return D>=N.length?o(void 0,!0):(B=b(N,D),j.index+=B.length,o({codePoint:y(B,0),position:D},!1))});i({target:"String",proto:!0,forced:!0},{codePoints:function(){return new w(d(r(this)))}})},19020:function(l,c,e){var i=e(51481),s=e(17093);i({target:"String",stat:!0,forced:!0},{cooked:s})},48585:function(l,c,e){"use strict";var i=e(42166),s=e(51481),o=e(59090),r=e(75605),d=e(78137),m=e(56393),v=e(24684),y=e(60930),b=e(63947),h=e(68045),x=e(63354),E=e(34410).f,w=e(52787),C=e(17093),j=e(97931),N=e(78135),D=r("WeakMap"),B=o("GlobalDedentRegistry",new D);B.has=B.has,B.get=B.get,B.set=B.set;var M=Array,Q=TypeError,F=Object.freeze||Object,H=Object.isFrozen,K=Math.min,Y=m("".charAt),re=m("".slice),ce=m("".split),Se=m(/./.exec),se=/([\n\u2028\u2029]|\r\n?)/g,Te=RegExp("^["+N+"]*"),le=RegExp("[^"+N+"]"),ue="Invalid tag",V="Invalid opening line",L="Invalid closing line",z=function(we){var he=we.raw;if(i&&!H(he))throw Q("Raw template should be frozen");if(B.has(he))return B.get(he);var ze=X(he),Le=J(ze);return E(Le,"raw",{value:F(ze)}),F(Le),B.set(he,Le),Le},X=function(we){var he=b(we),ze=x(he),Le=M(ze),Ne=M(ze),_=0,pe,me;if(!ze)throw Q(ue);for(;_<ze;_++){var Re=he[_];if(typeof Re=="string")Le[_]=ce(Re,se);else throw Q(ue)}for(_=0;_<ze;_++){var ot=_+1===ze;if(pe=Le[_],_===0){if(pe.length===1||pe[0].length>0)throw Q(V);pe[1]=""}if(ot){if(pe.length===1||Se(le,pe[pe.length-1]))throw Q(L);pe[pe.length-2]="",pe[pe.length-1]=""}for(var at=2;at<pe.length;at+=2){var dt=pe[at],Me=at+1===pe.length&&!ot,Oe=Se(Te,dt)[0];if(!Me&&Oe.length===dt.length){pe[at]="";continue}me=P(Oe,me)}}var Ee=me?me.length:0;for(_=0;_<ze;_++){pe=Le[_];for(var xe=pe[0],q=1;q<pe.length;q+=2)xe+=pe[q]+re(pe[q+1],Ee);Ne[_]=xe}return Ne},P=function(we,he){if(he===void 0||we===he)return we;for(var ze=0,Le=K(we.length,he.length);ze<Le&&Y(we,ze)===Y(he,ze);ze++);return re(we,0,ze)},J=function(we){for(var he=0,ze=we.length,Le=M(ze);he<ze;he++)Le[he]=j(we[he]);return Le},ge=function(we){return d(function(he){var ze=w(arguments);return ze[0]=z(y(he)),v(we,this,ze)},"")},We=ge(C);s({target:"String",stat:!0,forced:!0},{dedent:function(he){return y(he),h(he)?ge(he):v(We,this,arguments)}})},71809:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(10601),r=e(13312),d=s("".charCodeAt);i({target:"String",proto:!0},{isWellFormed:function(){for(var v=r(o(this)),y=v.length,b=0;b<y;b++){var h=d(v,b);if((h&63488)==55296&&(h>=56320||++b>=y||(d(v,b)&64512)!=56320))return!1}return!0}})},76081:function(l,c,e){"use strict";var i=e(51481),s=e(56393),o=e(10601),r=e(13312),d=Array,m=s("".charAt),v=s("".charCodeAt),y=s([].join),b="\uFFFD";i({target:"String",proto:!0},{toWellFormed:function(){for(var x=r(o(this)),E=x.length,w=d(E),C=0;C<E;C++){var j=v(x,C);(j&63488)!=55296?w[C]=m(x,C):j>=56320||C+1>=E||(v(x,C+1)&64512)!=56320?w[C]=b:(w[C]=m(x,C),w[++C]=m(x,C))}return y(w,"")}})},92754:function(l,c,e){"use strict";var i=e(51481),s=e(15726),o=e(59831),r=e(60466),d=e(64254),m=e(24972),v=e(2888),y=e(31506),b=e(46367),h=e(78211),x=e(87901),E=e(21288),w=e(18307),C=E("toStringTag"),j=Error,N=function(M,Q,F){var H=arguments.length>3?arguments[3]:void 0,K=s(D,this),Y;return r?Y=r(j(),K?o(this):D):(Y=K?this:m(D),v(Y,C,"Error")),F!==void 0&&v(Y,"message",x(F)),w&&v(Y,"stack",b(Y.stack,1)),h(Y,H),v(Y,"error",M),v(Y,"suppressed",Q),Y};r?r(N,j):d(N,j,{name:!0});var D=N.prototype=m(j.prototype,{constructor:y(1,N),message:y(1,""),name:y(1,"SuppressedError")});i({global:!0,constructor:!0,arity:3},{SuppressedError:N})},23901:function(l,c,e){var i=e(76486);i("asyncDispose")},13985:function(l,c,e){var i=e(76486);i("dispose")},73584:function(l,c,e){var i=e(76486);i("matcher")},89848:function(l,c,e){var i=e(76486);i("metadataKey")},17517:function(l,c,e){var i=e(76486);i("metadata")},51360:function(l,c,e){var i=e(76486);i("observable")},66875:function(l,c,e){var i=e(76486);i("patternMatch")},1906:function(l,c,e){var i=e(76486);i("replaceAll")},256:function(l,c,e){"use strict";var i=e(12287),s=e(6318).filterReject,o=e(59468),r=i.aTypedArray,d=i.exportTypedArrayMethod;d("filterOut",function(v){var y=s(r(this),v,arguments.length>1?arguments[1]:void 0);return o(this,y)},!0)},20911:function(l,c,e){"use strict";var i=e(12287),s=e(6318).filterReject,o=e(59468),r=i.aTypedArray,d=i.exportTypedArrayMethod;d("filterReject",function(v){var y=s(r(this),v,arguments.length>1?arguments[1]:void 0);return o(this,y)},!0)},24569:function(l,c,e){"use strict";var i=e(75605),s=e(87203),o=e(39133),r=e(12287),d=e(96028),m=r.aTypedArrayConstructor,v=r.exportTypedArrayStaticMethod;v("fromAsync",function(b){var h=this,x=arguments.length,E=x>1?arguments[1]:void 0,w=x>2?arguments[2]:void 0;return new(i("Promise"))(function(C){s(h),C(o(b,E,w))}).then(function(C){return d(m(h),C)})},!0)},98859:function(l,c,e){"use strict";var i=e(12287),s=e(38035),o=e(39201),r=i.aTypedArray,d=i.exportTypedArrayMethod;d("groupBy",function(v){var y=arguments.length>1?arguments[1]:void 0;return s(r(this),v,y,o)},!0)},43191:function(l,c,e){"use strict";var i=e(43268),s=e(12287),o=s.aTypedArray,r=s.exportTypedArrayMethod,d=s.getTypedArrayConstructor;r("toReversed",function(){return i(o(this),d(this))})},43392:function(l,c,e){"use strict";var i=e(12287),s=e(56393),o=e(41052),r=e(96028),d=i.aTypedArray,m=i.getTypedArrayConstructor,v=i.exportTypedArrayMethod,y=s(i.TypedArrayPrototype.sort);v("toSorted",function(h){h!==void 0&&o(h);var x=d(this),E=r(m(x),x);return y(E,h)})},43777:function(l,c,e){"use strict";var i=e(12287),s=e(63354),o=e(13087),r=e(90753),d=e(43789),m=e(54622),v=e(7979),y=i.aTypedArray,b=i.getTypedArrayConstructor,h=i.exportTypedArrayMethod,x=Math.max,E=Math.min,w=!v(function(){var C=new Int8Array([1]),j=C.toSpliced(1,0,{valueOf:function(){return C[0]=2,3}});return j[0]!==2||j[1]!==3});h("toSpliced",function(j,N){var D=y(this),B=b(D),M=s(D),Q=r(j,M),F=arguments.length,H=0,K,Y,re,ce,Se,se,Te;if(F===0)K=Y=0;else if(F===1)K=0,Y=M-Q;else if(Y=E(x(m(N),0),M-Q),K=F-2,K){ce=new B(K),re=o(ce);for(var le=2;le<F;le++)Se=arguments[le],ce[le-2]=re?d(Se):+Se}for(se=M+K-Y,Te=new B(se);H<Q;H++)Te[H]=D[H];for(;H<Q+K;H++)Te[H]=ce[H-Q];for(;H<se;H++)Te[H]=D[H+Y-K];return Te},!w)},15010:function(l,c,e){"use strict";var i=e(56393),s=e(12287),o=e(96028),r=e(72145),d=s.aTypedArray,m=s.getTypedArrayConstructor,v=s.exportTypedArrayMethod,y=i(r);v("uniqueBy",function(h){return d(this),o(m(this),y(this,h))},!0)},3688:function(l,c,e){"use strict";var i=e(24122),s=e(12287),o=e(13087),r=e(54622),d=e(43789),m=s.aTypedArray,v=s.getTypedArrayConstructor,y=s.exportTypedArrayMethod,b=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(h){return h===8}}();y("with",function(h,x){var E=m(this),w=r(h),C=o(E)?d(x):+x;return i(E,v(E),w,C)},!b)},74625:function(l,c,e){"use strict";var i=e(51481),s=e(25996),o=e(19178).remove;i({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=s(this),m=!0,v,y=0,b=arguments.length;y<b;y++)v=o(d,arguments[y]),m=m&&v;return!!m}})},56308:function(l,c,e){"use strict";var i=e(51481),s=e(25996),o=e(19178),r=o.get,d=o.has,m=o.set;i({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:function(y,b){var h=s(this),x,E;return d(h,y)?(x=r(h,y),"update"in b&&(x=b.update(x,y,h),m(h,y,x)),x):(E=b.insert(y,h),m(h,y,E),E)}})},90592:function(l,c,e){var i=e(51481),s=e(79202);i({target:"WeakMap",stat:!0,forced:!0},{from:s})},96219:function(l,c,e){var i=e(51481),s=e(64533);i({target:"WeakMap",stat:!0,forced:!0},{of:s})},61410:function(l,c,e){"use strict";var i=e(51481),s=e(85781);i({target:"WeakMap",proto:!0,real:!0,forced:!0},{upsert:s})},31827:function(l,c,e){"use strict";var i=e(51481),s=e(63696),o=e(93489).add;i({target:"WeakSet",proto:!0,real:!0,forced:!0},{addAll:function(){for(var d=s(this),m=0,v=arguments.length;m<v;m++)o(d,arguments[m]);return d}})},68215:function(l,c,e){"use strict";var i=e(51481),s=e(63696),o=e(93489).remove;i({target:"WeakSet",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=s(this),m=!0,v,y=0,b=arguments.length;y<b;y++)v=o(d,arguments[y]),m=m&&v;return!!m}})},51704:function(l,c,e){var i=e(51481),s=e(79202);i({target:"WeakSet",stat:!0,forced:!0},{from:s})},28555:function(l,c,e){var i=e(51481),s=e(64533);i({target:"WeakSet",stat:!0,forced:!0},{of:s})},21692:function(l,c,e){var i=e(51481),s=e(33463),o=e(60971).clear;i({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==o},{clearImmediate:o})},24714:function(l,c,e){"use strict";var i=e(51481),s=e(33463),o=e(75605),r=e(31506),d=e(34410).f,m=e(21220),v=e(70911),y=e(13888),b=e(87901),h=e(76703),x=e(46367),E=e(33974),w=e(21214),C="DOMException",j=o("Error"),N=o(C),D=function(){v(this,B);var le=arguments.length,ue=b(le<1?void 0:arguments[0]),V=b(le<2?void 0:arguments[1],"Error"),L=new N(ue,V),z=j(ue);return z.name=C,d(L,"stack",r(1,x(z.stack,1))),y(L,this,D),L},B=D.prototype=N.prototype,M="stack"in j(C),Q="stack"in new N(1,2),F=N&&E&&Object.getOwnPropertyDescriptor(s,C),H=!!F&&!(F.writable&&F.configurable),K=M&&!H&&!Q;i({global:!0,constructor:!0,forced:w||K},{DOMException:K?D:N});var Y=o(C),re=Y.prototype;if(re.constructor!==Y){w||d(re,"constructor",r(1,Y));for(var ce in h)if(m(h,ce)){var Se=h[ce],se=Se.s;m(Y,se)||d(Y,se,r(6,Se.c))}}},99740:function(l,c,e){e(21692),e(53556)},40690:function(l,c,e){"use strict";var i=e(51481),s=e(33463),o=e(82792),r=e(33974),d=TypeError,m=Object.defineProperty,v=s.self!==s;try{if(r){var y=Object.getOwnPropertyDescriptor(s,"self");(v||!y||!y.get||!y.enumerable)&&o(s,"self",{get:function(){return s},set:function(h){if(this!==s)throw d("Illegal invocation");m(s,"self",{value:h,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else i({global:!0,simple:!0,forced:v},{self:s})}catch(b){}},53556:function(l,c,e){var i=e(51481),s=e(33463),o=e(60971).set,r=e(37522),d=s.setImmediate?r(o,!1):o;i({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==d},{setImmediate:d})},6353:function(l,c,e){var i=e(21214),s=e(51481),o=e(33463),r=e(75605),d=e(56393),m=e(7979),v=e(60536),y=e(68045),b=e(55336),h=e(60689),x=e(34157),E=e(38555),w=e(7291),C=e(60930),j=e(959),N=e(21220),D=e(8181),B=e(2888),M=e(63354),Q=e(51084),F=e(10586),H=e(70821),K=e(58618),Y=e(18307),re=e(66480),ce=e(65523),Se=e(24297),se=e(14531),Te=o.Object,le=o.Array,ue=o.Date,V=o.Error,L=o.EvalError,z=o.RangeError,X=o.ReferenceError,P=o.SyntaxError,J=o.TypeError,ge=o.URIError,We=o.PerformanceMark,we=o.WebAssembly,he=we&&we.CompileError||V,ze=we&&we.LinkError||V,Le=we&&we.RuntimeError||V,Ne=r("DOMException"),_=H.Map,pe=H.has,me=H.get,Re=H.set,ot=K.Set,at=K.add,dt=r("Object","keys"),Me=d([].push),Oe=d((!0).valueOf),Ee=d(1 .valueOf),xe=d("".valueOf),q=d(ue.prototype.getTime),$=v("structuredClone"),W="DataCloneError",te="Transferring",ae=function(be){return!m(function(){var rt=new o.Set([7]),lt=be(rt),Ct=be(Te(7));return lt==rt||!lt.has(7)||typeof Ct!="object"||Ct!=7})&&be},ve=function(be,rt){return!m(function(){var lt=new rt,Ct=be({a:lt,b:lt});return!(Ct&&Ct.a===Ct.b&&Ct.a instanceof rt&&Ct.a.stack===lt.stack)})},Be=function(be){return!m(function(){var rt=be(new o.AggregateError([1],$,{cause:3}));return rt.name!="AggregateError"||rt.errors[0]!=1||rt.message!=$||rt.cause!=3})},Ae=o.structuredClone,Ze=i||!ve(Ae,V)||!ve(Ae,Ne)||!Be(Ae),xt=!Ae&&ae(function(be){return new We($,{detail:be}).detail}),Nt=ae(Ae)||xt,Tt=function(be){throw new Ne("Uncloneable type: "+be,W)},Dt=function(be,rt){throw new Ne((rt||"Cloning")+" of "+be+" cannot be properly polyfilled in this engine",W)},S=function(){var be;try{be=new o.DataTransfer}catch(rt){try{be=new o.ClipboardEvent("").clipboardData}catch(lt){}}return be&&be.items&&be.files?be:null},ie=function(be,rt){if(E(be)&&Tt("Symbol"),!x(be))return be;if(rt){if(pe(rt,be))return me(rt,be)}else rt=new _;var lt=j(be),Ct=!1,Wt,Bt,Mt,hn,ln,Mn,$n,ut,it,St;switch(lt){case"Array":Mt=le(M(be)),Ct=!0;break;case"Object":Mt={},Ct=!0;break;case"Map":Mt=new _,Ct=!0;break;case"Set":Mt=new ot,Ct=!0;break;case"RegExp":Mt=new RegExp(be.source,F(be));break;case"Error":switch(Bt=be.name,Bt){case"AggregateError":Mt=r("AggregateError")([]);break;case"EvalError":Mt=L();break;case"RangeError":Mt=z();break;case"ReferenceError":Mt=X();break;case"SyntaxError":Mt=P();break;case"TypeError":Mt=J();break;case"URIError":Mt=ge();break;case"CompileError":Mt=he();break;case"LinkError":Mt=ze();break;case"RuntimeError":Mt=Le();break;default:Mt=V()}Ct=!0;break;case"DOMException":Mt=new Ne(be.message,be.name),Ct=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":Wt=o[lt],x(Wt)||Dt(lt),Mt=new Wt(ie(be.buffer,rt),be.byteOffset,lt==="DataView"?be.byteLength:be.length);break;case"DOMQuad":try{Mt=new DOMQuad(ie(be.p1,rt),ie(be.p2,rt),ie(be.p3,rt),ie(be.p4,rt))}catch(Ht){Nt?Mt=Nt(be):Dt(lt)}break;case"FileList":if(hn=S(),hn){for(ln=0,Mn=M(be);ln<Mn;ln++)hn.items.add(ie(be[ln],rt));Mt=hn.files}else Nt?Mt=Nt(be):Dt(lt);break;case"ImageData":try{Mt=new ImageData(ie(be.data,rt),be.width,be.height,{colorSpace:be.colorSpace})}catch(Ht){Nt?Mt=Nt(be):Dt(lt)}break;default:if(Nt)Mt=Nt(be);else switch(lt){case"BigInt":Mt=Te(be.valueOf());break;case"Boolean":Mt=Te(Oe(be));break;case"Number":Mt=Te(Ee(be));break;case"String":Mt=Te(xe(be));break;case"Date":Mt=new ue(q(be));break;case"ArrayBuffer":Wt=o.DataView,!Wt&&typeof be.slice!="function"&&Dt(lt);try{if(typeof be.slice=="function")Mt=be.slice(0);else for(Mn=be.byteLength,Mt=new ArrayBuffer(Mn),it=new Wt(be),St=new Wt(Mt),ln=0;ln<Mn;ln++)St.setUint8(ln,it.getUint8(ln))}catch(Ht){throw new Ne("ArrayBuffer is detached",W)}break;case"SharedArrayBuffer":Mt=be;break;case"Blob":try{Mt=be.slice(0,be.size,be.type)}catch(Ht){Dt(lt)}break;case"DOMPoint":case"DOMPointReadOnly":Wt=o[lt];try{Mt=Wt.fromPoint?Wt.fromPoint(be):new Wt(be.x,be.y,be.z,be.w)}catch(Ht){Dt(lt)}break;case"DOMRect":case"DOMRectReadOnly":Wt=o[lt];try{Mt=Wt.fromRect?Wt.fromRect(be):new Wt(be.x,be.y,be.width,be.height)}catch(Ht){Dt(lt)}break;case"DOMMatrix":case"DOMMatrixReadOnly":Wt=o[lt];try{Mt=Wt.fromMatrix?Wt.fromMatrix(be):new Wt(be)}catch(Ht){Dt(lt)}break;case"AudioData":case"VideoFrame":y(be.clone)||Dt(lt);try{Mt=be.clone()}catch(Ht){Tt(lt)}break;case"File":try{Mt=new File([be],be.name,be)}catch(Ht){Dt(lt)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":Dt(lt);default:Tt(lt)}}if(Re(rt,be,Mt),Ct)switch(lt){case"Array":case"Object":for($n=dt(be),ln=0,Mn=M($n);ln<Mn;ln++)ut=$n[ln],D(Mt,ut,ie(be[ut],rt));break;case"Map":be.forEach(function(Ht,en){Re(Mt,ie(en,rt),ie(Ht,rt))});break;case"Set":be.forEach(function(Ht){at(Mt,ie(Ht,rt))});break;case"Error":B(Mt,"message",ie(be.message,rt)),N(be,"cause")&&B(Mt,"cause",ie(be.cause,rt)),Bt=="AggregateError"&&(Mt.errors=ie(be.errors,rt));case"DOMException":Y&&B(Mt,"stack",ie(be.stack,rt))}return Mt},Ce=Ae&&!m(function(){if(Se&&re>92||se&&re>94||ce&&re>97)return!1;var be=new ArrayBuffer(8),rt=Ae(be,{transfer:[be]});return be.byteLength!=0||rt.byteLength!=8}),_e=function(be,rt){if(!x(be))throw J("Transfer option cannot be converted to a sequence");var lt=[];w(be,function(it){Me(lt,C(it))});var Ct=0,Wt=M(lt),Bt,Mt,hn,ln,Mn,$n,ut;if(Ce)for(ln=Ae(lt,{transfer:lt});Ct<Wt;)Re(rt,lt[Ct],ln[Ct++]);else for(;Ct<Wt;){if(Bt=lt[Ct++],pe(rt,Bt))throw new Ne("Duplicate transferable",W);switch(Mt=j(Bt),Mt){case"ImageBitmap":hn=o.OffscreenCanvas,b(hn)||Dt(Mt,te);try{$n=new hn(Bt.width,Bt.height),ut=$n.getContext("bitmaprenderer"),ut.transferFromImageBitmap(Bt),Mn=$n.transferToImageBitmap()}catch(it){}break;case"AudioData":case"VideoFrame":(!y(Bt.clone)||!y(Bt.close))&&Dt(Mt,te);try{Mn=Bt.clone(),Bt.close()}catch(it){}break;case"ArrayBuffer":case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":Dt(Mt,te)}if(Mn===void 0)throw new Ne("This object cannot be transferred: "+Mt,W);Re(rt,Bt,Mn)}};s({global:!0,enumerable:!0,sham:!Ce,forced:Ze},{structuredClone:function(rt){var lt=Q(arguments.length,1)>1&&!h(arguments[1])?C(arguments[1]):void 0,Ct=lt?lt.transfer:void 0,Wt;return Ct!==void 0&&(Wt=new _,_e(Ct,Wt)),ie(rt,Wt)}})},67251:function(l){"use strict";var c=function(D){return e(D)&&!i(D)};function e(N){return!!N&&typeof N=="object"}function i(N){var D=Object.prototype.toString.call(N);return D==="[object RegExp]"||D==="[object Date]"||r(N)}var s=typeof Symbol=="function"&&Symbol.for,o=s?Symbol.for("react.element"):60103;function r(N){return N.$$typeof===o}function d(N){return Array.isArray(N)?[]:{}}function m(N,D){return D.clone!==!1&&D.isMergeableObject(N)?C(d(N),N,D):N}function v(N,D,B){return N.concat(D).map(function(M){return m(M,B)})}function y(N,D){if(!D.customMerge)return C;var B=D.customMerge(N);return typeof B=="function"?B:C}function b(N){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(N).filter(function(D){return Object.propertyIsEnumerable.call(N,D)}):[]}function h(N){return Object.keys(N).concat(b(N))}function x(N,D){try{return D in N}catch(B){return!1}}function E(N,D){return x(N,D)&&!(Object.hasOwnProperty.call(N,D)&&Object.propertyIsEnumerable.call(N,D))}function w(N,D,B){var M={};return B.isMergeableObject(N)&&h(N).forEach(function(Q){M[Q]=m(N[Q],B)}),h(D).forEach(function(Q){E(N,Q)||(x(N,Q)&&B.isMergeableObject(D[Q])?M[Q]=y(Q,B)(N[Q],D[Q],B):M[Q]=m(D[Q],B))}),M}function C(N,D,B){B=B||{},B.arrayMerge=B.arrayMerge||v,B.isMergeableObject=B.isMergeableObject||c,B.cloneUnlessOtherwiseSpecified=m;var M=Array.isArray(D),Q=Array.isArray(N),F=M===Q;return F?M?B.arrayMerge(N,D,B):w(N,D,B):m(D,B)}C.all=function(D,B){if(!Array.isArray(D))throw new Error("first argument should be an array");return D.reduce(function(M,Q){return C(M,Q,B)},{})};var j=C;l.exports=j},82850:function(l){var c=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,o=(D,B)=>{for(var M in B)c(D,M,{get:B[M],enumerable:!0})},r=(D,B,M,Q)=>{if(B&&typeof B=="object"||typeof B=="function")for(let F of i(B))!s.call(D,F)&&F!==M&&c(D,F,{get:()=>B[F],enumerable:!(Q=e(B,F))||Q.enumerable});return D},d=D=>r(c({},"__esModule",{value:!0}),D),m={};o(m,{CLIENT_DEPS:()=>j,LOCAL_DUMI_DIR:()=>v,LOCAL_PAGES_DIR:()=>b,LOCAL_THEME_DIR:()=>y,PICKED_PKG_FIELDS:()=>C,PREFERS_COLOR_ATTR:()=>E,PREFERS_COLOR_LS_KEY:()=>w,SP_ROUTE_PREFIX:()=>x,THEME_PREFIX:()=>h,USELESS_TMP_FILES:()=>N}),l.exports=d(m);var v=".dumi",y=`${v}/theme`,b=`${v}/pages`,h="dumi-theme-",x="~",E="data-prefers-color",w="dumi:prefers-color",C={name:"",description:"",version:"",license:"",repository:"",author:"",authors:""},j=["@ant-design/icons-svg","@makotot/ghostui","deepmerge","lodash.throttle","prism-react-renderer","prismjs","rc-tabs","react-copy-to-clipboard","react-intl"],N=["tsconfig.json","typings.d.ts"]},49813:function(l,c,e){"use strict";e.d(c,{Z:function(){return ze}});var i=e(50959),s=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(Le,Ne,_)=>Ne in Le?s(Le,Ne,{enumerable:!0,configurable:!0,writable:!0,value:_}):Le[Ne]=_,v=(Le,Ne)=>{for(var _ in Ne||(Ne={}))r.call(Ne,_)&&m(Le,_,Ne[_]);if(o)for(var _ of o(Ne))d.call(Ne,_)&&m(Le,_,Ne[_]);return Le};const y=Le=>i.createElement("svg",v({viewBox:"64 64 896 896"},Le),i.createElement("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}),i.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var b="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6Ii8+PC9zdmc+",h=Object.defineProperty,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(Le,Ne,_)=>Ne in Le?h(Le,Ne,{enumerable:!0,configurable:!0,writable:!0,value:_}):Le[Ne]=_,j=(Le,Ne)=>{for(var _ in Ne||(Ne={}))E.call(Ne,_)&&C(Le,_,Ne[_]);if(x)for(var _ of x(Ne))w.call(Ne,_)&&C(Le,_,Ne[_]);return Le};const N=Le=>i.createElement("svg",j({viewBox:"64 64 896 896"},Le),i.createElement("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}),i.createElement("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var D="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwIDAtMS45IDUuMmMwIDQuNCAzLjYgOCA4IDhsNjYuMS0uM0w1MTIgNTY0LjRsOTkuMyAxMTguNCA2NiAuM2M0LjQgMCA4LTMuNSA4LTggMC0xLjktLjctMy43LTEuOS01LjJMNTUzLjUgNTE1bDEzMC4xLTE1NWMxLjItMS40IDEuOC0zLjMgMS44LTUuMnoiLz48cGF0aCBkPSJNNTEyIDY1QzI2NC42IDY1IDY0IDI2NS42IDY0IDUxM3MyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NSA1MTIgNjV6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjwvc3ZnPg==",B=Object.defineProperty,M=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,H=(Le,Ne,_)=>Ne in Le?B(Le,Ne,{enumerable:!0,configurable:!0,writable:!0,value:_}):Le[Ne]=_,K=(Le,Ne)=>{for(var _ in Ne||(Ne={}))Q.call(Ne,_)&&H(Le,_,Ne[_]);if(M)for(var _ of M(Ne))F.call(Ne,_)&&H(Le,_,Ne[_]);return Le};const Y=Le=>i.createElement("svg",K({viewBox:"64 64 896 896"},Le),i.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),i.createElement("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}));var re="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik00NjQgMzM2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMHptNzIgMTEyaC00OGMtNC40IDAtOCAzLjYtOCA4djI3MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQ1NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",ce=Object.defineProperty,Se=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,le=(Le,Ne,_)=>Ne in Le?ce(Le,Ne,{enumerable:!0,configurable:!0,writable:!0,value:_}):Le[Ne]=_,ue=(Le,Ne)=>{for(var _ in Ne||(Ne={}))se.call(Ne,_)&&le(Le,_,Ne[_]);if(Se)for(var _ of Se(Ne))Te.call(Ne,_)&&le(Le,_,Ne[_]);return Le};const V=Le=>i.createElement("svg",ue({viewBox:"64 64 896 896"},Le),i.createElement("path",{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}));var L="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDY0IDcyMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwLTk2IDB6bTE2LTMwNHYxODRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0MTZjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4em00NzUuNyA0NDAtNDE2LTcyMGMtNi4yLTEwLjctMTYuOS0xNi0yNy43LTE2cy0yMS42IDUuMy0yNy43IDE2bC00MTYgNzIwQzU2IDg3Ny40IDcxLjQgOTA0IDk2IDkwNGg4MzJjMjQuNiAwIDQwLTI2LjYgMjcuNy00OHptLTc4My41LTI3LjlMNTEyIDIzOS45bDMzOS44IDU4OC4ySDE3Mi4yeiIvPjwvc3ZnPg==";function z(Le,Ne){return We(Le)||ge(Le,Ne)||P(Le,Ne)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(Le,Ne){if(Le){if(typeof Le=="string")return J(Le,Ne);var _=Object.prototype.toString.call(Le).slice(8,-1);if(_==="Object"&&Le.constructor&&(_=Le.constructor.name),_==="Map"||_==="Set")return Array.from(Le);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return J(Le,Ne)}}function J(Le,Ne){(Ne==null||Ne>Le.length)&&(Ne=Le.length);for(var _=0,pe=new Array(Ne);_<Ne;_++)pe[_]=Le[_];return pe}function ge(Le,Ne){var _=Le==null?null:typeof Symbol!="undefined"&&Le[Symbol.iterator]||Le["@@iterator"];if(_!=null){var pe=[],me=!0,Re=!1,ot,at;try{for(_=_.call(Le);!(me=(ot=_.next()).done)&&(pe.push(ot.value),!(Ne&&pe.length===Ne));me=!0);}catch(dt){Re=!0,at=dt}finally{try{!me&&_.return!=null&&_.return()}finally{if(Re)throw at}}return pe}}function We(Le){if(Array.isArray(Le))return Le}var we={info:Y,warning:V,success:y,error:N},he=function(Ne){var _=(0,i.useState)(function(){return we[Ne.type]}),pe=z(_,1),me=pe[0];return i.createElement("div",{className:"dumi-default-container markdown","data-type":Ne.type},i.createElement(me,null),i.createElement("h4",null,Ne.title||Ne.type.toUpperCase()),i.createElement("section",null,Ne.children))},ze=he},56198:function(l,c,e){"use strict";e.d(c,{Z:function(){return Wl}});var i=e(84875),s=e.n(i),o=e(79864),r=e(50959),d=Object.defineProperty,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(u,p,g)=>p in u?d(u,p,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[p]=g,h=(u,p)=>{for(var g in p||(p={}))v.call(p,g)&&b(u,g,p[g]);if(m)for(var g of m(p))y.call(p,g)&&b(u,g,p[g]);return u};const x=u=>r.createElement("svg",h({viewBox:"64 64 896 896"},u),r.createElement("path",{d:"m709.6 210 .4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6 339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"}));var E="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNzA5LjYgMjEwIC40LS4yaC4yTDUxMiA5NiAzMTMuOSAyMDkuOGgtLjJsLjcuM0wxNTEuNSAzMDR2NDE2TDUxMiA5MjhsMzYwLjUtMjA4VjMwNGwtMTYyLjktOTR6TTQ4Mi43IDg0My42IDMzOS42IDc2MVY2MjEuNEwyMTAgNTQ3LjhWMzcyLjlsMjcyLjcgMTU3LjN2MzEzLjR6TTIzOC4yIDMyMS41bDEzNC43LTc3LjggMTM4LjkgNzkuNyAxMzkuMS03OS45IDEzNS4yIDc4LTI3My45IDE1OC0yNzQtMTU4ek04MTQgNTQ4LjNsLTEyOC44IDczLjF2MTM5LjFsLTE0My45IDgzVjUzMC40TDgxNCAzNzMuMXYxNzUuMnoiLz48L3N2Zz4=",w=Object.defineProperty,C=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,D=(u,p,g)=>p in u?w(u,p,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[p]=g,B=(u,p)=>{for(var g in p||(p={}))j.call(p,g)&&D(u,g,p[g]);if(C)for(var g of C(p))N.call(p,g)&&D(u,g,p[g]);return u};const M=u=>r.createElement("svg",B({viewBox:"64 64 896 896"},u),r.createElement("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}));var Q="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ4IDM1OS4zSDYyNy43TDgyNS44IDEwOWM0LjEtNS4zLjQtMTMtNi4zLTEzSDQzNmMtMi44IDAtNS41IDEuNS02LjkgNEwxNzAgNTQ3LjVjLTMuMSA1LjMuNyAxMiA2LjkgMTJoMTc0LjRsLTg5LjQgMzU3LjZjLTEuOSA3LjggNy41IDEzLjMgMTMuMyA3LjdMODUzLjUgMzczYzUuMi00LjkgMS43LTEzLjctNS41LTEzLjd6TTM3OC4yIDczMi41bDYwLjMtMjQxSDI4MS4xbDE4OS42LTMyNy40aDIyNC42TDQ4NyA0MjcuNGgyMTFMMzc4LjIgNzMyLjV6Ii8+PC9zdmc+",F=e(57905),H=function(){return r.createElement(r.Fragment,null)},K=H;function Y(){return Y=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var g=arguments[p];for(var T in g)Object.prototype.hasOwnProperty.call(g,T)&&(u[T]=g[T])}return u},Y.apply(this,arguments)}function re(u){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},re(u)}function ce(u,p){if(re(u)!=="object"||u===null)return u;var g=u[Symbol.toPrimitive];if(g!==void 0){var T=g.call(u,p||"default");if(re(T)!=="object")return T;throw new TypeError("@@toPrimitive must return a primitive value.")}return(p==="string"?String:Number)(u)}function Se(u){var p=ce(u,"string");return re(p)==="symbol"?p:String(p)}function se(u,p,g){return p=Se(p),p in u?Object.defineProperty(u,p,{value:g,enumerable:!0,configurable:!0,writable:!0}):u[p]=g,u}function Te(u,p){var g=Object.keys(u);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(u);p&&(T=T.filter(function(R){return Object.getOwnPropertyDescriptor(u,R).enumerable})),g.push.apply(g,T)}return g}function le(u){for(var p=1;p<arguments.length;p++){var g=arguments[p]!=null?arguments[p]:{};p%2?Te(Object(g),!0).forEach(function(T){se(u,T,g[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(g)):Te(Object(g)).forEach(function(T){Object.defineProperty(u,T,Object.getOwnPropertyDescriptor(g,T))})}return u}function ue(u){if(Array.isArray(u))return u}function V(u,p){var g=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var T,R,U,A,oe=[],ne=!0,fe=!1;try{if(U=(g=g.call(u)).next,p===0){if(Object(g)!==g)return;ne=!1}else for(;!(ne=(T=U.call(g)).done)&&(oe.push(T.value),oe.length!==p);ne=!0);}catch(De){fe=!0,R=De}finally{try{if(!ne&&g.return!=null&&(A=g.return(),Object(A)!==A))return}finally{if(fe)throw R}}return oe}}function L(u,p){(p==null||p>u.length)&&(p=u.length);for(var g=0,T=new Array(p);g<p;g++)T[g]=u[g];return T}function z(u,p){if(u){if(typeof u=="string")return L(u,p);var g=Object.prototype.toString.call(u).slice(8,-1);if(g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set")return Array.from(u);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return L(u,p)}}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(u,p){return ue(u)||V(u,p)||z(u,p)||X()}function J(u,p){if(u==null)return{};var g={},T=Object.keys(u),R,U;for(U=0;U<T.length;U++)R=T[U],!(p.indexOf(R)>=0)&&(g[R]=u[R]);return g}function ge(u,p){if(u==null)return{};var g=J(u,p),T,R;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(u);for(R=0;R<U.length;R++)T=U[R],!(p.indexOf(T)>=0)&&Object.prototype.propertyIsEnumerable.call(u,T)&&(g[T]=u[T])}return g}var We=function(){if(typeof navigator=="undefined"||typeof window=="undefined")return!1;var u=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(u)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(u==null?void 0:u.substr(0,4))};function we(u){var p=r.useRef();p.current=u;var g=r.useCallback(function(){for(var T,R=arguments.length,U=new Array(R),A=0;A<R;A++)U[A]=arguments[A];return(T=p.current)===null||T===void 0?void 0:T.call.apply(T,[p].concat(U))},[]);return g}function he(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}var ze=he()?r.useLayoutEffect:r.useEffect,Le=ze,Ne=function(p,g){var T=r.useRef(!0);ze(function(){if(!T.current)return p()},g),ze(function(){return T.current=!1,function(){T.current=!0}},[])};function _(u){var p=r.useRef(!1),g=r.useState(u),T=P(g,2),R=T[0],U=T[1];r.useEffect(function(){return p.current=!1,function(){p.current=!0}},[]);function A(oe,ne){ne&&p.current||U(oe)}return[R,A]}function pe(u){return u!==void 0}function me(u,p){var g=p||{},T=g.defaultValue,R=g.value,U=g.onChange,A=g.postState,oe=_(function(){return pe(R)?R:pe(T)?typeof T=="function"?T():T:typeof u=="function"?u():u}),ne=P(oe,2),fe=ne[0],De=ne[1],ke=R!==void 0?R:fe,Ue=A?A(ke):ke,He=we(U),Ve=_([ke]),st=P(Ve,2),mt=st[0],It=st[1];Ne(function(){var ft=mt[0];fe!==ft&&He(fe,ft)},[mt]),Ne(function(){pe(R)||De(R)},[R]);var ct=we(function(ft,At){De(ft,At),It([ke],At)});return[Ue,ct]}var Re=e(10422);function ot(u){return u instanceof HTMLElement?u:u instanceof r.Component?Re.findDOMNode(u):null}var at=e(62606);function dt(u,p,g){var T=r.useRef({});return(!("value"in T.current)||g(T.current.condition,p))&&(T.current.value=u(),T.current.condition=p),T.current.value}function Me(u,p){typeof u=="function"?u(p):re(u)==="object"&&u&&"current"in u&&(u.current=p)}function Oe(){for(var u=arguments.length,p=new Array(u),g=0;g<u;g++)p[g]=arguments[g];var T=p.filter(function(R){return R});return T.length<=1?T[0]:function(R){p.forEach(function(U){Me(U,R)})}}function Ee(){for(var u=arguments.length,p=new Array(u),g=0;g<u;g++)p[g]=arguments[g];return dt(function(){return Oe.apply(void 0,p)},p,function(T,R){return T.length===R.length&&T.every(function(U,A){return U===R[A]})})}function xe(u){var p,g,T=(0,at.isMemo)(u)?u.type.type:u.type;return!(typeof T=="function"&&!((p=T.prototype)!==null&&p!==void 0&&p.render)||typeof u=="function"&&!((g=u.prototype)!==null&&g!==void 0&&g.render))}function q(u,p){var g={};return g[u.toLowerCase()]=p.toLowerCase(),g["Webkit".concat(u)]="webkit".concat(p),g["Moz".concat(u)]="moz".concat(p),g["ms".concat(u)]="MS".concat(p),g["O".concat(u)]="o".concat(p.toLowerCase()),g}function $(u,p){var g={animationend:q("Animation","AnimationEnd"),transitionend:q("Transition","TransitionEnd")};return u&&("AnimationEvent"in p||delete g.animationend.animation,"TransitionEvent"in p||delete g.transitionend.transition),g}var W=$(he(),typeof window!="undefined"?window:{}),te={};if(he()){var ae=document.createElement("div");te=ae.style}var ve={};function Be(u){if(ve[u])return ve[u];var p=W[u];if(p)for(var g=Object.keys(p),T=g.length,R=0;R<T;R+=1){var U=g[R];if(Object.prototype.hasOwnProperty.call(p,U)&&U in te)return ve[u]=p[U],ve[u]}return""}var Ae=Be("animationend"),Ze=Be("transitionend"),xt=!!(Ae&&Ze),Nt=Ae||"animationend",Tt=Ze||"transitionend";function Dt(u,p){if(!u)return null;if(re(u)==="object"){var g=p.replace(/-\w/g,function(T){return T[1].toUpperCase()});return u[g]}return"".concat(u,"-").concat(p)}var S="none",ie="appear",Ce="enter",_e="leave",be="none",rt="prepare",lt="start",Ct="active",Wt="end",Bt=function(p){return+setTimeout(p,16)},Mt=function(p){return clearTimeout(p)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(Bt=function(p){return window.requestAnimationFrame(p)},Mt=function(p){return window.cancelAnimationFrame(p)});var hn=0,ln=new Map;function Mn(u){ln.delete(u)}var $n=function(p){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;hn+=1;var T=hn;function R(U){if(U===0)Mn(T),p();else{var A=Bt(function(){R(U-1)});ln.set(T,A)}}return R(g),T};$n.cancel=function(u){var p=ln.get(u);return Mn(p),Mt(p)};var ut=$n,it=function(){var u=r.useRef(null);function p(){ut.cancel(u.current)}function g(T){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;p();var U=ut(function(){R<=1?T({isCanceled:function(){return U!==u.current}}):g(T,R-1)});u.current=U}return r.useEffect(function(){return function(){p()}},[]),[g,p]},St=he()?r.useLayoutEffect:r.useEffect,Ht=St,en=[rt,lt,Ct,Wt],Yt=!1,Ln=!0;function Pn(u){return u===Ct||u===Wt}var Dn=function(u,p){var g=_(be),T=P(g,2),R=T[0],U=T[1],A=it(),oe=P(A,2),ne=oe[0],fe=oe[1];function De(){U(rt,!0)}return Ht(function(){if(R!==be&&R!==Wt){var ke=en.indexOf(R),Ue=en[ke+1],He=p(R);He===Yt?U(Ue,!0):ne(function(Ve){function st(){Ve.isCanceled()||U(Ue,!0)}He===!0?st():Promise.resolve(He).then(st)})}},[u,R]),r.useEffect(function(){return function(){fe()}},[]),[De,R]},Pr=function(u){var p=(0,r.useRef)(),g=(0,r.useRef)(u);g.current=u;var T=r.useCallback(function(A){g.current(A)},[]);function R(A){A&&(A.removeEventListener(Tt,T),A.removeEventListener(Nt,T))}function U(A){p.current&&p.current!==A&&R(p.current),A&&A!==p.current&&(A.addEventListener(Tt,T),A.addEventListener(Nt,T),p.current=A)}return r.useEffect(function(){return function(){R(p.current)}},[]),[U,R]};function jn(u,p,g,T){var R=T.motionEnter,U=R===void 0?!0:R,A=T.motionAppear,oe=A===void 0?!0:A,ne=T.motionLeave,fe=ne===void 0?!0:ne,De=T.motionDeadline,ke=T.motionLeaveImmediately,Ue=T.onAppearPrepare,He=T.onEnterPrepare,Ve=T.onLeavePrepare,st=T.onAppearStart,mt=T.onEnterStart,It=T.onLeaveStart,ct=T.onAppearActive,ft=T.onEnterActive,At=T.onLeaveActive,zt=T.onAppearEnd,Pt=T.onEnterEnd,Ot=T.onLeaveEnd,Xt=T.onVisibleChanged,qe=_(),Vt=P(qe,2),bt=Vt[0],nt=Vt[1],$e=_(S),Xe=P($e,2),yt=Xe[0],Lt=Xe[1],kt=_(null),Zt=P(kt,2),xn=Zt[0],Cn=Zt[1],Tn=(0,r.useRef)(!1),jt=(0,r.useRef)(null);function $t(){return g()}var dn=(0,r.useRef)(!1);function Rn(Nn){var In=$t();if(!(Nn&&!Nn.deadline&&Nn.target!==In)){var on=dn.current,_n;yt===ie&&on?_n=zt==null?void 0:zt(In,Nn):yt===Ce&&on?_n=Pt==null?void 0:Pt(In,Nn):yt===_e&&on&&(_n=Ot==null?void 0:Ot(In,Nn)),yt!==S&&on&&_n!==!1&&(Lt(S,!0),Cn(null,!0))}}var Qn=Pr(Rn),Jn=P(Qn,1),nr=Jn[0],Hn=r.useMemo(function(){var Nn,In,on;switch(yt){case ie:return Nn={},se(Nn,rt,Ue),se(Nn,lt,st),se(Nn,Ct,ct),Nn;case Ce:return In={},se(In,rt,He),se(In,lt,mt),se(In,Ct,ft),In;case _e:return on={},se(on,rt,Ve),se(on,lt,It),se(on,Ct,At),on;default:return{}}},[yt]),mr=Dn(yt,function(Nn){if(Nn===rt){var In=Hn[rt];return In?In($t()):Yt}if(An in Hn){var on;Cn(((on=Hn[An])===null||on===void 0?void 0:on.call(Hn,$t(),null))||null)}return An===Ct&&(nr($t()),De>0&&(clearTimeout(jt.current),jt.current=setTimeout(function(){Rn({deadline:!0})},De))),Ln}),cr=P(mr,2),wr=cr[0],An=cr[1],Cr=Pn(An);dn.current=Cr,Ht(function(){nt(p);var Nn=Tn.current;if(Tn.current=!0,!!u){var In;!Nn&&p&&oe&&(In=ie),Nn&&p&&U&&(In=Ce),(Nn&&!p&&fe||!Nn&&ke&&!p&&fe)&&(In=_e),In&&(Lt(In),wr())}},[p]),(0,r.useEffect)(function(){(yt===ie&&!oe||yt===Ce&&!U||yt===_e&&!fe)&&Lt(S)},[oe,U,fe]),(0,r.useEffect)(function(){return function(){Tn.current=!1,clearTimeout(jt.current)}},[]);var fr=r.useRef(!1);(0,r.useEffect)(function(){bt&&(fr.current=!0),bt!==void 0&&yt===S&&((fr.current||bt)&&(Xt==null||Xt(bt)),fr.current=!0)},[bt,yt]);var bn=xn;return Hn[rt]&&An===lt&&(bn=le({transition:"none"},bn)),[yt,An,bn,bt!=null?bt:p]}function zr(u,p){if(!(u instanceof p))throw new TypeError("Cannot call a class as a function")}function Ps(u,p){for(var g=0;g<p.length;g++){var T=p[g];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(u,Se(T.key),T)}}function mo(u,p,g){return p&&Ps(u.prototype,p),g&&Ps(u,g),Object.defineProperty(u,"prototype",{writable:!1}),u}function Na(u,p){return Na=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(T,R){return T.__proto__=R,T},Na(u,p)}function ho(u,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(p&&p.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),Object.defineProperty(u,"prototype",{writable:!1}),p&&Na(u,p)}function ko(u){return ko=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(g){return g.__proto__||Object.getPrototypeOf(g)},ko(u)}function Rs(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(u){return!1}}function wn(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function pi(u,p){if(p&&(re(p)==="object"||typeof p=="function"))return p;if(p!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wn(u)}function oa(u){var p=Rs();return function(){var T=ko(u),R;if(p){var U=ko(this).constructor;R=Reflect.construct(T,arguments,U)}else R=T.apply(this,arguments);return pi(this,R)}}var Ns=function(u){ho(g,u);var p=oa(g);function g(){return zr(this,g),p.apply(this,arguments)}return mo(g,[{key:"render",value:function(){return this.props.children}}]),g}(r.Component),hu=Ns;function yu(u){var p=u;re(u)==="object"&&(p=u.transitionSupport);function g(R){return!!(R.motionName&&p)}var T=r.forwardRef(function(R,U){var A=R.visible,oe=A===void 0?!0:A,ne=R.removeOnLeave,fe=ne===void 0?!0:ne,De=R.forceRender,ke=R.children,Ue=R.motionName,He=R.leavedClassName,Ve=R.eventProps,st=g(R),mt=(0,r.useRef)(),It=(0,r.useRef)();function ct(){try{return mt.current instanceof HTMLElement?mt.current:ot(It.current)}catch(kt){return null}}var ft=jn(st,oe,ct,R),At=P(ft,4),zt=At[0],Pt=At[1],Ot=At[2],Xt=At[3],qe=r.useRef(Xt);Xt&&(qe.current=!0);var Vt=r.useCallback(function(kt){mt.current=kt,Me(U,kt)},[U]),bt,nt=le(le({},Ve),{},{visible:oe});if(!ke)bt=null;else if(zt===S||!g(R))Xt?bt=ke(le({},nt),Vt):!fe&&qe.current&&He?bt=ke(le(le({},nt),{},{className:He}),Vt):De||!fe&&!He?bt=ke(le(le({},nt),{},{style:{display:"none"}}),Vt):bt=null;else{var $e,Xe;Pt===rt?Xe="prepare":Pn(Pt)?Xe="active":Pt===lt&&(Xe="start"),bt=ke(le(le({},nt),{},{className:s()(Dt(Ue,zt),($e={},se($e,Dt(Ue,"".concat(zt,"-").concat(Xe)),Xe),se($e,Ue,typeof Ue=="string"),$e)),style:Ot}),Vt)}if(r.isValidElement(bt)&&xe(bt)){var yt=bt,Lt=yt.ref;Lt||(bt=r.cloneElement(bt,{ref:Vt}))}return r.createElement(hu,{ref:It},bt)});return T.displayName="CSSMotion",T}var lr=yu(xt),Ki="add",yo="keep",vi="remove",go="removed";function Ls(u){var p;return u&&re(u)==="object"&&"key"in u?p=u:p={key:u},le(le({},p),{},{key:String(p.key)})}function Fo(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return u.map(Ls)}function jo(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],g=[],T=0,R=p.length,U=Fo(u),A=Fo(p);U.forEach(function(fe){for(var De=!1,ke=T;ke<R;ke+=1){var Ue=A[ke];if(Ue.key===fe.key){T<ke&&(g=g.concat(A.slice(T,ke).map(function(He){return le(le({},He),{},{status:Ki})})),T=ke),g.push(le(le({},Ue),{},{status:yo})),T+=1,De=!0;break}}De||g.push(le(le({},fe),{},{status:vi}))}),T<R&&(g=g.concat(A.slice(T).map(function(fe){return le(le({},fe),{},{status:Ki})})));var oe={};g.forEach(function(fe){var De=fe.key;oe[De]=(oe[De]||0)+1});var ne=Object.keys(oe).filter(function(fe){return oe[fe]>1});return ne.forEach(function(fe){g=g.filter(function(De){var ke=De.key,Ue=De.status;return ke!==fe||Ue!==vi}),g.forEach(function(De){De.key===fe&&(De.status=yo)})}),g}var ba=["component","children","onVisibleChanged","onAllRemoved"],Ds=["status"],ia=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function gu(u){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lr,g=function(T){ho(U,T);var R=oa(U);function U(){var A;zr(this,U);for(var oe=arguments.length,ne=new Array(oe),fe=0;fe<oe;fe++)ne[fe]=arguments[fe];return A=R.call.apply(R,[this].concat(ne)),se(wn(A),"state",{keyEntities:[]}),se(wn(A),"removeKey",function(De){var ke=A.state.keyEntities,Ue=ke.map(function(He){return He.key!==De?He:le(le({},He),{},{status:go})});return A.setState({keyEntities:Ue}),Ue.filter(function(He){var Ve=He.status;return Ve!==go}).length}),A}return mo(U,[{key:"render",value:function(){var oe=this,ne=this.state.keyEntities,fe=this.props,De=fe.component,ke=fe.children,Ue=fe.onVisibleChanged,He=fe.onAllRemoved,Ve=ge(fe,ba),st=De||r.Fragment,mt={};return ia.forEach(function(It){mt[It]=Ve[It],delete Ve[It]}),delete Ve.keys,r.createElement(st,Ve,ne.map(function(It){var ct=It.status,ft=ge(It,Ds),At=ct===Ki||ct===yo;return r.createElement(p,Y({},mt,{key:ft.key,visible:At,eventProps:ft,onVisibleChanged:function(Pt){if(Ue==null||Ue(Pt,{key:ft.key}),!Pt){var Ot=oe.removeKey(ft.key);Ot===0&&He&&He()}}}),ke)}))}}],[{key:"getDerivedStateFromProps",value:function(oe,ne){var fe=oe.keys,De=ne.keyEntities,ke=Fo(fe),Ue=jo(De,ke);return{keyEntities:Ue.filter(function(He){var Ve=De.find(function(st){var mt=st.key;return He.key===mt});return!(Ve&&Ve.status===go&&He.status===vi)})}}}]),U}(r.Component);return se(g,"defaultProps",{component:"div"}),g}var ll=gu(xt),Bo=lr,Ia=(0,r.createContext)(null),mi=r.forwardRef(function(u,p){var g=u.prefixCls,T=u.className,R=u.style,U=u.id,A=u.active,oe=u.tabKey,ne=u.children;return r.createElement("div",{id:U&&"".concat(U,"-panel-").concat(oe),role:"tabpanel",tabIndex:A?0:-1,"aria-labelledby":U&&"".concat(U,"-tab-").concat(oe),"aria-hidden":!A,style:R,className:s()(g,A&&"".concat(g,"-active"),T),ref:p},ne)}),Ka=mi,xo=["key","forceRender","style","className"];function xu(u){var p=u.id,g=u.activeKey,T=u.animated,R=u.tabPosition,U=u.destroyInactiveTabPane,A=r.useContext(Ia),oe=A.prefixCls,ne=A.tabs,fe=T.tabPane,De="".concat(oe,"-tabpane");return r.createElement("div",{className:s()("".concat(oe,"-content-holder"))},r.createElement("div",{className:s()("".concat(oe,"-content"),"".concat(oe,"-content-").concat(R),se({},"".concat(oe,"-content-animated"),fe))},ne.map(function(ke){var Ue=ke.key,He=ke.forceRender,Ve=ke.style,st=ke.className,mt=ge(ke,xo),It=Ue===g;return r.createElement(Bo,Y({key:Ue,visible:It,forceRender:He,removeOnLeave:!!U,leavedClassName:"".concat(De,"-hidden")},T.tabPaneMotion),function(ct,ft){var At=ct.style,zt=ct.className;return r.createElement(Ka,Y({},mt,{prefixCls:De,id:p,tabKey:Ue,animated:fe,active:It,style:le(le({},Ve),At),className:s()(st,zt),ref:ft}))})})))}function bu(u){if(Array.isArray(u))return L(u)}function Zi(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function Yi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(u){return bu(u)||Zi(u)||z(u)||Yi()}function La(u){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=[];return r.Children.forEach(u,function(T){T==null&&!p.keepEmpty||(Array.isArray(T)?g=g.concat(La(T)):(0,at.isFragment)(T)&&T.props?g=g.concat(La(T.props.children,p)):g.push(T))}),g}var ks={};function Xi(u,p){}function Vn(u,p){}function Fs(){ks={}}function hi(u,p,g){!p&&!ks[g]&&(u(!1,g),ks[g]=!0)}function yi(u,p){hi(Xi,u,p)}function gi(u,p){hi(Vn,u,p)}var xi=yi,Qi=function(){if(typeof Map!="undefined")return Map;function u(p,g){var T=-1;return p.some(function(R,U){return R[0]===g?(T=U,!0):!1}),T}return function(){function p(){this.__entries__=[]}return Object.defineProperty(p.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),p.prototype.get=function(g){var T=u(this.__entries__,g),R=this.__entries__[T];return R&&R[1]},p.prototype.set=function(g,T){var R=u(this.__entries__,g);~R?this.__entries__[R][1]=T:this.__entries__.push([g,T])},p.prototype.delete=function(g){var T=this.__entries__,R=u(T,g);~R&&T.splice(R,1)},p.prototype.has=function(g){return!!~u(this.__entries__,g)},p.prototype.clear=function(){this.__entries__.splice(0)},p.prototype.forEach=function(g,T){T===void 0&&(T=null);for(var R=0,U=this.__entries__;R<U.length;R++){var A=U[R];g.call(T,A[1],A[0])}},p}()}(),bo=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,oo=function(){return typeof e.g!="undefined"&&e.g.Math===Math?e.g:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),Za=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(oo):function(u){return setTimeout(function(){return u(Date.now())},1e3/60)}}(),da=2;function Ya(u,p){var g=!1,T=!1,R=0;function U(){g&&(g=!1,u()),T&&oe()}function A(){Za(U)}function oe(){var ne=Date.now();if(g){if(ne-R<da)return;T=!0}else g=!0,T=!1,setTimeout(A,p);R=ne}return oe}var k=20,ee=["top","right","bottom","left","width","height","size","weight"],G=typeof MutationObserver!="undefined",ye=function(){function u(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Ya(this.refresh.bind(this),k)}return u.prototype.addObserver=function(p){~this.observers_.indexOf(p)||this.observers_.push(p),this.connected_||this.connect_()},u.prototype.removeObserver=function(p){var g=this.observers_,T=g.indexOf(p);~T&&g.splice(T,1),!g.length&&this.connected_&&this.disconnect_()},u.prototype.refresh=function(){var p=this.updateObservers_();p&&this.refresh()},u.prototype.updateObservers_=function(){var p=this.observers_.filter(function(g){return g.gatherActive(),g.hasActive()});return p.forEach(function(g){return g.broadcastActive()}),p.length>0},u.prototype.connect_=function(){!bo||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),G?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},u.prototype.disconnect_=function(){!bo||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},u.prototype.onTransitionEnd_=function(p){var g=p.propertyName,T=g===void 0?"":g,R=ee.some(function(U){return!!~T.indexOf(U)});R&&this.refresh()},u.getInstance=function(){return this.instance_||(this.instance_=new u),this.instance_},u.instance_=null,u}(),je=function(u,p){for(var g=0,T=Object.keys(p);g<T.length;g++){var R=T[g];Object.defineProperty(u,R,{value:p[R],enumerable:!1,writable:!1,configurable:!0})}return u},tt=function(u){var p=u&&u.ownerDocument&&u.ownerDocument.defaultView;return p||oo},pt=ir(0,0,0,0);function gt(u){return parseFloat(u)||0}function Ut(u){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return p.reduce(function(T,R){var U=u["border-"+R+"-width"];return T+gt(U)},0)}function Kt(u){for(var p=["top","right","bottom","left"],g={},T=0,R=p;T<R.length;T++){var U=R[T],A=u["padding-"+U];g[U]=gt(A)}return g}function sn(u){var p=u.getBBox();return ir(0,0,p.width,p.height)}function fn(u){var p=u.clientWidth,g=u.clientHeight;if(!p&&!g)return pt;var T=tt(u).getComputedStyle(u),R=Kt(T),U=R.left+R.right,A=R.top+R.bottom,oe=gt(T.width),ne=gt(T.height);if(T.boxSizing==="border-box"&&(Math.round(oe+U)!==p&&(oe-=Ut(T,"left","right")+U),Math.round(ne+A)!==g&&(ne-=Ut(T,"top","bottom")+A)),!pn(u)){var fe=Math.round(oe+U)-p,De=Math.round(ne+A)-g;Math.abs(fe)!==1&&(oe-=fe),Math.abs(De)!==1&&(ne-=De)}return ir(R.left,R.top,oe,ne)}var an=function(){return typeof SVGGraphicsElement!="undefined"?function(u){return u instanceof tt(u).SVGGraphicsElement}:function(u){return u instanceof tt(u).SVGElement&&typeof u.getBBox=="function"}}();function pn(u){return u===tt(u).document.documentElement}function En(u){return bo?an(u)?sn(u):fn(u):pt}function Fn(u){var p=u.x,g=u.y,T=u.width,R=u.height,U=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,A=Object.create(U.prototype);return je(A,{x:p,y:g,width:T,height:R,top:g,right:p+T,bottom:R+g,left:p}),A}function ir(u,p,g,T){return{x:u,y:p,width:g,height:T}}var br=function(){function u(p){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ir(0,0,0,0),this.target=p}return u.prototype.isActive=function(){var p=En(this.target);return this.contentRect_=p,p.width!==this.broadcastWidth||p.height!==this.broadcastHeight},u.prototype.broadcastRect=function(){var p=this.contentRect_;return this.broadcastWidth=p.width,this.broadcastHeight=p.height,p},u}(),Ea=function(){function u(p,g){var T=Fn(g);je(this,{target:p,contentRect:T})}return u}(),Yr=function(){function u(p,g,T){if(this.activeObservations_=[],this.observations_=new Qi,typeof p!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=p,this.controller_=g,this.callbackCtx_=T}return u.prototype.observe=function(p){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(p instanceof tt(p).Element))throw new TypeError('parameter 1 is not of type "Element".');var g=this.observations_;g.has(p)||(g.set(p,new br(p)),this.controller_.addObserver(this),this.controller_.refresh())}},u.prototype.unobserve=function(p){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(p instanceof tt(p).Element))throw new TypeError('parameter 1 is not of type "Element".');var g=this.observations_;g.has(p)&&(g.delete(p),g.size||this.controller_.removeObserver(this))}},u.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},u.prototype.gatherActive=function(){var p=this;this.clearActive(),this.observations_.forEach(function(g){g.isActive()&&p.activeObservations_.push(g)})},u.prototype.broadcastActive=function(){if(this.hasActive()){var p=this.callbackCtx_,g=this.activeObservations_.map(function(T){return new Ea(T.target,T.broadcastRect())});this.callback_.call(p,g,p),this.clearActive()}},u.prototype.clearActive=function(){this.activeObservations_.splice(0)},u.prototype.hasActive=function(){return this.activeObservations_.length>0},u}(),_o=typeof WeakMap!="undefined"?new WeakMap:new Qi,Xr=function(){function u(p){if(!(this instanceof u))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var g=ye.getInstance(),T=new Yr(p,g,this);_o.set(this,T)}return u}();["observe","unobserve","disconnect"].forEach(function(u){Xr.prototype[u]=function(){var p;return(p=_o.get(this))[u].apply(p,arguments)}});var Io=function(){return typeof oo.ResizeObserver!="undefined"?oo.ResizeObserver:Xr}(),zo=Io,Sa=new Map;function bi(u){u.forEach(function(p){var g,T=p.target;(g=Sa.get(T))===null||g===void 0||g.forEach(function(R){return R(T)})})}var Uo=new zo(bi),tc=null,wa=null;function Ii(u,p){Sa.has(u)||(Sa.set(u,new Set),Uo.observe(u)),Sa.get(u).add(p)}function Iu(u,p){Sa.has(u)&&(Sa.get(u).delete(p),Sa.get(u).size||(Uo.unobserve(u),Sa.delete(u)))}var Ji=function(u){ho(g,u);var p=oa(g);function g(){return zr(this,g),p.apply(this,arguments)}return mo(g,[{key:"render",value:function(){return this.props.children}}]),g}(r.Component),Eu=r.createContext(null);function Su(u){var p=u.children,g=u.onBatchResize,T=r.useRef(0),R=r.useRef([]),U=r.useContext(Eu),A=r.useCallback(function(oe,ne,fe){T.current+=1;var De=T.current;R.current.push({size:oe,element:ne,data:fe}),Promise.resolve().then(function(){De===T.current&&(g==null||g(R.current),R.current=[])}),U==null||U(oe,ne,fe)},[g,U]);return r.createElement(Eu.Provider,{value:A},p)}function wu(u,p){var g=u.children,T=u.disabled,R=r.useRef(null),U=r.useRef(null),A=r.useContext(Eu),oe=typeof g=="function",ne=oe?g(R):g,fe=r.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),De=!oe&&r.isValidElement(ne)&&xe(ne),ke=De?ne.ref:null,Ue=r.useMemo(function(){return Oe(ke,R)},[ke,R]),He=function(){return ot(R.current)||ot(U.current)};r.useImperativeHandle(p,function(){return He()});var Ve=r.useRef(u);Ve.current=u;var st=r.useCallback(function(mt){var It=Ve.current,ct=It.onResize,ft=It.data,At=mt.getBoundingClientRect(),zt=At.width,Pt=At.height,Ot=mt.offsetWidth,Xt=mt.offsetHeight,qe=Math.floor(zt),Vt=Math.floor(Pt);if(fe.current.width!==qe||fe.current.height!==Vt||fe.current.offsetWidth!==Ot||fe.current.offsetHeight!==Xt){var bt={width:qe,height:Vt,offsetWidth:Ot,offsetHeight:Xt};fe.current=bt;var nt=Ot===Math.round(zt)?zt:Ot,$e=Xt===Math.round(Pt)?Pt:Xt,Xe=le(le({},bt),{},{offsetWidth:nt,offsetHeight:$e});A==null||A(Xe,mt,ft),ct&&Promise.resolve().then(function(){ct(Xe,mt)})}},[]);return r.useEffect(function(){var mt=He();return mt&&!T&&Ii(mt,st),function(){return Iu(mt,st)}},[R.current,T]),r.createElement(Ji,{ref:U},De?r.cloneElement(ne,{ref:Ue}):ne)}var qi=r.forwardRef(wu),js=qi,cl="rc-observer-key";function nc(u,p){var g=u.children,T=typeof g=="function"?[g]:La(g);return T.map(function(R,U){var A=(R==null?void 0:R.key)||"".concat(cl,"-").concat(U);return r.createElement(js,Y({},u,{key:A,ref:U===0?p:void 0}),R)})}var fl=r.forwardRef(nc);fl.Collection=Su;var Bs=fl,_s={width:0,height:0,left:0,top:0};function rc(u,p,g){return(0,r.useMemo)(function(){for(var T,R=new Map,U=p.get((T=u[0])===null||T===void 0?void 0:T.key)||_s,A=U.left+U.width,oe=0;oe<u.length;oe+=1){var ne=u[oe].key,fe=p.get(ne);if(!fe){var De;fe=p.get((De=u[oe-1])===null||De===void 0?void 0:De.key)||_s}var ke=R.get(ne)||le({},fe);ke.right=A-ke.left-ke.width,R.set(ne,ke)}return R},[u.map(function(T){return T.key}).join("_"),p,g])}function dl(u){var p=(0,r.useRef)(),g=(0,r.useRef)(!1);function T(){for(var R=arguments.length,U=new Array(R),A=0;A<R;A++)U[A]=arguments[A];g.current||(ut.cancel(p.current),p.current=ut(function(){u.apply(void 0,U)}))}return(0,r.useEffect)(function(){return g.current=!1,function(){g.current=!0,ut.cancel(p.current)}},[]),T}function ac(u){var p=(0,r.useRef)([]),g=(0,r.useState)({}),T=P(g,2),R=T[1],U=(0,r.useRef)(typeof u=="function"?u():u),A=dl(function(){var ne=U.current;p.current.forEach(function(fe){ne=fe(ne)}),p.current=[],U.current=ne,R({})});function oe(ne){p.current.push(ne),A()}return[U.current,oe]}function pl(u,p){var g=r.useRef(u),T=r.useState({}),R=P(T,2),U=R[1];function A(oe){var ne=typeof oe=="function"?oe(g.current):oe;ne!==g.current&&p(ne,g.current),g.current=ne,U({})}return[g.current,A]}var oc=.1,es=.01,Ca=20,Cu=Math.pow(.995,Ca);function vl(u,p){var g=(0,r.useState)(),T=P(g,2),R=T[0],U=T[1],A=(0,r.useState)(0),oe=P(A,2),ne=oe[0],fe=oe[1],De=(0,r.useState)(0),ke=P(De,2),Ue=ke[0],He=ke[1],Ve=(0,r.useState)(),st=P(Ve,2),mt=st[0],It=st[1],ct=(0,r.useRef)();function ft(qe){var Vt=qe.touches[0],bt=Vt.screenX,nt=Vt.screenY;U({x:bt,y:nt}),window.clearInterval(ct.current)}function At(qe){if(R){qe.preventDefault();var Vt=qe.touches[0],bt=Vt.screenX,nt=Vt.screenY;U({x:bt,y:nt});var $e=bt-R.x,Xe=nt-R.y;p($e,Xe);var yt=Date.now();fe(yt),He(yt-ne),It({x:$e,y:Xe})}}function zt(){if(R&&(U(null),It(null),mt)){var qe=mt.x/Ue,Vt=mt.y/Ue,bt=Math.abs(qe),nt=Math.abs(Vt);if(Math.max(bt,nt)<oc)return;var $e=qe,Xe=Vt;ct.current=window.setInterval(function(){if(Math.abs($e)<es&&Math.abs(Xe)<es){window.clearInterval(ct.current);return}$e*=Cu,Xe*=Cu,p($e*Ca,Xe*Ca)},Ca)}}var Pt=(0,r.useRef)();function Ot(qe){var Vt=qe.deltaX,bt=qe.deltaY,nt=0,$e=Math.abs(Vt),Xe=Math.abs(bt);$e===Xe?nt=Pt.current==="x"?Vt:bt:$e>Xe?(nt=Vt,Pt.current="x"):(nt=bt,Pt.current="y"),p(-nt,-nt)&&qe.preventDefault()}var Xt=(0,r.useRef)(null);Xt.current={onTouchStart:ft,onTouchMove:At,onTouchEnd:zt,onWheel:Ot},r.useEffect(function(){function qe($e){Xt.current.onTouchStart($e)}function Vt($e){Xt.current.onTouchMove($e)}function bt($e){Xt.current.onTouchEnd($e)}function nt($e){Xt.current.onWheel($e)}return document.addEventListener("touchmove",Vt,{passive:!1}),document.addEventListener("touchend",bt,{passive:!1}),u.current.addEventListener("touchstart",qe,{passive:!1}),u.current.addEventListener("wheel",nt),function(){document.removeEventListener("touchmove",Vt),document.removeEventListener("touchend",bt)}},[])}var Tu={width:0,height:0,left:0,top:0,right:0};function zs(u,p,g,T,R,U,A){var oe=A.tabs,ne=A.tabPosition,fe=A.rtl,De,ke,Ue;return["top","bottom"].includes(ne)?(De="width",ke=fe?"right":"left",Ue=Math.abs(g)):(De="height",ke="top",Ue=-g),(0,r.useMemo)(function(){if(!oe.length)return[0,0];for(var He=oe.length,Ve=He,st=0;st<He;st+=1){var mt=u.get(oe[st].key)||Tu;if(mt[ke]+mt[De]>Ue+p){Ve=st-1;break}}for(var It=0,ct=He-1;ct>=0;ct-=1){var ft=u.get(oe[ct].key)||Tu;if(ft[ke]<Ue){It=ct+1;break}}return[It,Ve]},[u,p,T,R,U,Ue,ne,oe.map(function(He){return He.key}).join("_"),fe])}function Ou(u){var p;return u instanceof Map?(p={},u.forEach(function(g,T){p[T]=g})):p=u,JSON.stringify(p)}function Us(u,p){var g=u.prefixCls,T=u.editable,R=u.locale,U=u.style;return!T||T.showAdd===!1?null:r.createElement("button",{ref:p,type:"button",className:"".concat(g,"-nav-add"),style:U,"aria-label":(R==null?void 0:R.addAriaLabel)||"Add tab",onClick:function(oe){T.onEdit("add",{event:oe})}},T.addIcon||"+")}var qt=r.forwardRef(Us),Au=r.forwardRef(function(u,p){var g=u.position,T=u.prefixCls,R=u.extra;if(!R)return null;var U,A={};return re(R)==="object"&&!r.isValidElement(R)?A=R:A.right=R,g==="right"&&(U=A.right),g==="left"&&(U=A.left),U?r.createElement("div",{className:"".concat(T,"-extra-content"),ref:p},U):null}),Ei=Au;function Ta(u,p){if(!u)return!1;if(u.contains)return u.contains(p);for(var g=p;g;){if(g===u)return!0;g=g.parentNode}return!1}function Eo(u,p,g,T){var R=Re.unstable_batchedUpdates?function(A){Re.unstable_batchedUpdates(g,A)}:g;return u.addEventListener&&u.addEventListener(p,R,T),{remove:function(){u.removeEventListener&&u.removeEventListener(p,R,T)}}}var ml=(0,r.forwardRef)(function(u,p){var g=u.didUpdate,T=u.getContainer,R=u.children,U=(0,r.useRef)(),A=(0,r.useRef)();(0,r.useImperativeHandle)(p,function(){return{}});var oe=(0,r.useRef)(!1);return!oe.current&&he()&&(A.current=T(),U.current=A.current.parentNode,oe.current=!0),(0,r.useEffect)(function(){g==null||g(u)}),(0,r.useEffect)(function(){return A.current.parentNode===null&&U.current!==null&&U.current.appendChild(A.current),function(){var ne,fe;(ne=A.current)===null||ne===void 0||(fe=ne.parentNode)===null||fe===void 0||fe.removeChild(A.current)}},[]),A.current?Re.createPortal(R,A.current):null}),hl=ml;function Mu(u,p,g){return g?u[0]===p[0]:u[0]===p[0]&&u[1]===p[1]}function yl(u,p,g){var T=u[p]||{};return le(le({},T),g)}function ts(u,p,g,T){for(var R=g.points,U=Object.keys(u),A=0;A<U.length;A+=1){var oe=U[A];if(Mu(u[oe].points,R,T))return"".concat(p,"-placement-").concat(oe)}return""}function Ho(u){var p=u.prefixCls,g=u.motion,T=u.animation,R=u.transitionName;return g||(T?{motionName:"".concat(p,"-").concat(T)}:R?{motionName:R}:null)}function gl(u){var p=u.prefixCls,g=u.visible,T=u.zIndex,R=u.mask,U=u.maskMotion,A=u.maskAnimation,oe=u.maskTransitionName;if(!R)return null;var ne={};return(U||oe||A)&&(ne=le({motionAppear:!0},Ho({motion:U,prefixCls:p,transitionName:oe,animation:A}))),r.createElement(Bo,Y({},ne,{visible:g,removeOnLeave:!0}),function(fe){var De=fe.className;return r.createElement("div",{style:{zIndex:T},className:s()("".concat(p,"-mask"),De)})})}function Hs(u,p){var g=Object.keys(u);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(u);p&&(T=T.filter(function(R){return Object.getOwnPropertyDescriptor(u,R).enumerable})),g.push.apply(g,T)}return g}function $s(u){for(var p=1;p<arguments.length;p++){var g=arguments[p]!=null?arguments[p]:{};p%2?Hs(Object(g),!0).forEach(function(T){rs(u,T,g[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(g)):Hs(Object(g)).forEach(function(T){Object.defineProperty(u,T,Object.getOwnPropertyDescriptor(g,T))})}return u}function ns(u){return ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},ns(u)}function rs(u,p,g){return p in u?Object.defineProperty(u,p,{value:g,enumerable:!0,configurable:!0,writable:!0}):u[p]=g,u}var Si,$o={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function as(){if(Si!==void 0)return Si;Si="";var u=document.createElement("p").style,p="Transform";for(var g in $o)g+p in u&&(Si=g);return Si}function Pu(){return as()?"".concat(as(),"TransitionProperty"):"transitionProperty"}function os(){return as()?"".concat(as(),"Transform"):"transform"}function Vs(u,p){var g=Pu();g&&(u.style[g]=p,g!=="transitionProperty"&&(u.style.transitionProperty=p))}function is(u,p){var g=os();g&&(u.style[g]=p,g!=="transform"&&(u.style.transform=p))}function So(u){return u.style.transitionProperty||u.style[Pu()]}function Da(u){var p=window.getComputedStyle(u,null),g=p.getPropertyValue("transform")||p.getPropertyValue(os());if(g&&g!=="none"){var T=g.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(T[12]||T[4],0),y:parseFloat(T[13]||T[5],0)}}return{x:0,y:0}}var xl=/matrix\((.*)\)/,ss=/matrix3d\((.*)\)/;function bl(u,p){var g=window.getComputedStyle(u,null),T=g.getPropertyValue("transform")||g.getPropertyValue(os());if(T&&T!=="none"){var R,U=T.match(xl);if(U)U=U[1],R=U.split(",").map(function(oe){return parseFloat(oe,10)}),R[4]=p.x,R[5]=p.y,is(u,"matrix(".concat(R.join(","),")"));else{var A=T.match(ss)[1];R=A.split(",").map(function(oe){return parseFloat(oe,10)}),R[12]=p.x,R[13]=p.y,is(u,"matrix3d(".concat(R.join(","),")"))}}else is(u,"translateX(".concat(p.x,"px) translateY(").concat(p.y,"px) translateZ(0)"))}var Ru=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,wo;function Vo(u){var p=u.style.display;u.style.display="none",u.offsetHeight,u.style.display=p}function Ir(u,p,g){var T=g;if(ns(p)==="object"){for(var R in p)p.hasOwnProperty(R)&&Ir(u,R,p[R]);return}if(typeof T!="undefined"){typeof T=="number"&&(T="".concat(T,"px")),u.style[p]=T;return}return wo(u,p)}function Gn(u){var p,g,T,R=u.ownerDocument,U=R.body,A=R&&R.documentElement;return p=u.getBoundingClientRect(),g=Math.floor(p.left),T=Math.floor(p.top),g-=A.clientLeft||U.clientLeft||0,T-=A.clientTop||U.clientTop||0,{left:g,top:T}}function us(u,p){var g=u["page".concat(p?"Y":"X","Offset")],T="scroll".concat(p?"Top":"Left");if(typeof g!="number"){var R=u.document;g=R.documentElement[T],typeof g!="number"&&(g=R.body[T])}return g}function Go(u){return us(u)}function Nu(u){return us(u,!0)}function wi(u){var p=Gn(u),g=u.ownerDocument,T=g.defaultView||g.parentWindow;return p.left+=Go(T),p.top+=Nu(T),p}function Wn(u){return u!=null&&u==u.window}function Lu(u){return Wn(u)?u.document:u.nodeType===9?u:u.ownerDocument}function Qr(u,p,g){var T=g,R="",U=Lu(u);return T=T||U.defaultView.getComputedStyle(u,null),T&&(R=T.getPropertyValue(p)||T[p]),R}var Wo=new RegExp("^(".concat(Ru,")(?!px)[a-z%]+$"),"i"),Gs=/^(top|right|bottom|left)$/,Ko="currentStyle",ls="runtimeStyle",Xa="left",Ws="px";function Il(u,p){var g=u[Ko]&&u[Ko][p];if(Wo.test(g)&&!Gs.test(p)){var T=u.style,R=T[Xa],U=u[ls][Xa];u[ls][Xa]=u[Ko][Xa],T[Xa]=p==="fontSize"?"1em":g||0,g=T.pixelLeft+Ws,T[Xa]=R,u[ls][Xa]=U}return g===""?"auto":g}typeof window!="undefined"&&(wo=window.getComputedStyle?Qr:Il);function Oa(u,p){return u==="left"?p.useCssRight?"right":u:p.useCssBottom?"bottom":u}function Co(u){if(u==="left")return"right";if(u==="right")return"left";if(u==="top")return"bottom";if(u==="bottom")return"top"}function cs(u,p,g){Ir(u,"position")==="static"&&(u.style.position="relative");var T=-999,R=-999,U=Oa("left",g),A=Oa("top",g),oe=Co(U),ne=Co(A);U!=="left"&&(T=999),A!=="top"&&(R=999);var fe="",De=wi(u);("left"in p||"top"in p)&&(fe=So(u)||"",Vs(u,"none")),"left"in p&&(u.style[oe]="",u.style[U]="".concat(T,"px")),"top"in p&&(u.style[ne]="",u.style[A]="".concat(R,"px")),Vo(u);var ke=wi(u),Ue={};for(var He in p)if(p.hasOwnProperty(He)){var Ve=Oa(He,g),st=He==="left"?T:R,mt=De[He]-ke[He];Ve===He?Ue[Ve]=st+mt:Ue[Ve]=st-mt}Ir(u,Ue),Vo(u),("left"in p||"top"in p)&&Vs(u,fe);var It={};for(var ct in p)if(p.hasOwnProperty(ct)){var ft=Oa(ct,g),At=p[ct]-De[ct];ct===ft?It[ft]=Ue[ft]+At:It[ft]=Ue[ft]-At}Ir(u,It)}function Ci(u,p){var g=wi(u),T=Da(u),R={x:T.x,y:T.y};"left"in p&&(R.x=T.x+p.left-g.left),"top"in p&&(R.y=T.y+p.top-g.top),bl(u,R)}function fs(u,p,g){if(g.ignoreShake){var T=wi(u),R=T.left.toFixed(0),U=T.top.toFixed(0),A=p.left.toFixed(0),oe=p.top.toFixed(0);if(R===A&&U===oe)return}g.useCssRight||g.useCssBottom?cs(u,p,g):g.useCssTransform&&os()in document.body.style?Ci(u,p):cs(u,p,g)}function To(u,p){for(var g=0;g<u.length;g++)p(u[g])}function Ti(u){return wo(u,"boxSizing")==="border-box"}var Zo=["margin","border","padding"],Oi=-1,Du=2,Yo=1,ku=0;function Fu(u,p,g){var T={},R=u.style,U;for(U in p)p.hasOwnProperty(U)&&(T[U]=R[U],R[U]=p[U]);g.call(u);for(U in p)p.hasOwnProperty(U)&&(R[U]=T[U])}function Xo(u,p,g){var T=0,R,U,A;for(U=0;U<p.length;U++)if(R=p[U],R)for(A=0;A<g.length;A++){var oe=void 0;R==="border"?oe="".concat(R).concat(g[A],"Width"):oe=R+g[A],T+=parseFloat(wo(u,oe))||0}return T}var pa={getParent:function(p){var g=p;do g.nodeType===11&&g.host?g=g.host:g=g.parentNode;while(g&&g.nodeType!==1&&g.nodeType!==9);return g}};To(["Width","Height"],function(u){pa["doc".concat(u)]=function(p){var g=p.document;return Math.max(g.documentElement["scroll".concat(u)],g.body["scroll".concat(u)],pa["viewport".concat(u)](g))},pa["viewport".concat(u)]=function(p){var g="client".concat(u),T=p.document,R=T.body,U=T.documentElement,A=U[g];return T.compatMode==="CSS1Compat"&&A||R&&R[g]||A}});function Ks(u,p,g){var T=g;if(Wn(u))return p==="width"?pa.viewportWidth(u):pa.viewportHeight(u);if(u.nodeType===9)return p==="width"?pa.docWidth(u):pa.docHeight(u);var R=p==="width"?["Left","Right"]:["Top","Bottom"],U=Math.floor(p==="width"?u.getBoundingClientRect().width:u.getBoundingClientRect().height),A=Ti(u),oe=0;(U==null||U<=0)&&(U=void 0,oe=wo(u,p),(oe==null||Number(oe)<0)&&(oe=u.style[p]||0),oe=Math.floor(parseFloat(oe))||0),T===void 0&&(T=A?Yo:Oi);var ne=U!==void 0||A,fe=U||oe;return T===Oi?ne?fe-Xo(u,["border","padding"],R):oe:ne?T===Yo?fe:fe+(T===Du?-Xo(u,["border"],R):Xo(u,["margin"],R)):oe+Xo(u,Zo.slice(T),R)}var ju={position:"absolute",visibility:"hidden",display:"block"};function ka(){for(var u=arguments.length,p=new Array(u),g=0;g<u;g++)p[g]=arguments[g];var T,R=p[0];return R.offsetWidth!==0?T=Ks.apply(void 0,p):Fu(R,ju,function(){T=Ks.apply(void 0,p)}),T}To(["width","height"],function(u){var p=u.charAt(0).toUpperCase()+u.slice(1);pa["outer".concat(p)]=function(T,R){return T&&ka(T,u,R?ku:Yo)};var g=u==="width"?["Left","Right"]:["Top","Bottom"];pa[u]=function(T,R){var U=R;if(U!==void 0){if(T){var A=Ti(T);return A&&(U+=Xo(T,["padding","border"],g)),Ir(T,u,U)}return}return T&&ka(T,u,Oi)}});function ds(u,p){for(var g in p)p.hasOwnProperty(g)&&(u[g]=p[g]);return u}var yn={getWindow:function(p){if(p&&p.document&&p.setTimeout)return p;var g=p.ownerDocument||p;return g.defaultView||g.parentWindow},getDocument:Lu,offset:function(p,g,T){if(typeof g!="undefined")fs(p,g,T||{});else return wi(p)},isWindow:Wn,each:To,css:Ir,clone:function(p){var g,T={};for(g in p)p.hasOwnProperty(g)&&(T[g]=p[g]);var R=p.overflow;if(R)for(g in p)p.hasOwnProperty(g)&&(T.overflow[g]=p.overflow[g]);return T},mix:ds,getWindowScrollLeft:function(p){return Go(p)},getWindowScrollTop:function(p){return Nu(p)},merge:function(){for(var p={},g=0;g<arguments.length;g++)yn.mix(p,g<0||arguments.length<=g?void 0:arguments[g]);return p},viewportWidth:0,viewportHeight:0};ds(yn,pa);var Zs=yn.getParent;function Ys(u){if(yn.isWindow(u)||u.nodeType===9)return null;var p=yn.getDocument(u),g=p.body,T,R=yn.css(u,"position"),U=R==="fixed"||R==="absolute";if(!U)return u.nodeName.toLowerCase()==="html"?null:Zs(u);for(T=Zs(u);T&&T!==g&&T.nodeType!==9;T=Zs(T))if(R=yn.css(T,"position"),R!=="static")return T;return null}var Qo=yn.getParent;function El(u){if(yn.isWindow(u)||u.nodeType===9)return!1;var p=yn.getDocument(u),g=p.body,T=null;for(T=Qo(u);T&&T!==g&&T!==p;T=Qo(T)){var R=yn.css(T,"position");if(R==="fixed")return!0}return!1}function Jo(u,p){for(var g={left:0,right:1/0,top:0,bottom:1/0},T=Ys(u),R=yn.getDocument(u),U=R.defaultView||R.parentWindow,A=R.body,oe=R.documentElement;T;){if((navigator.userAgent.indexOf("MSIE")===-1||T.clientWidth!==0)&&T!==A&&T!==oe&&yn.css(T,"overflow")!=="visible"){var ne=yn.offset(T);ne.left+=T.clientLeft,ne.top+=T.clientTop,g.top=Math.max(g.top,ne.top),g.right=Math.min(g.right,ne.left+T.clientWidth),g.bottom=Math.min(g.bottom,ne.top+T.clientHeight),g.left=Math.max(g.left,ne.left)}else if(T===A||T===oe)break;T=Ys(T)}var fe=null;if(!yn.isWindow(u)&&u.nodeType!==9){fe=u.style.position;var De=yn.css(u,"position");De==="absolute"&&(u.style.position="fixed")}var ke=yn.getWindowScrollLeft(U),Ue=yn.getWindowScrollTop(U),He=yn.viewportWidth(U),Ve=yn.viewportHeight(U),st=oe.scrollWidth,mt=oe.scrollHeight,It=window.getComputedStyle(A);if(It.overflowX==="hidden"&&(st=U.innerWidth),It.overflowY==="hidden"&&(mt=U.innerHeight),u.style&&(u.style.position=fe),p||El(u))g.left=Math.max(g.left,ke),g.top=Math.max(g.top,Ue),g.right=Math.min(g.right,ke+He),g.bottom=Math.min(g.bottom,Ue+Ve);else{var ct=Math.max(st,ke+He);g.right=Math.min(g.right,ct);var ft=Math.max(mt,Ue+Ve);g.bottom=Math.min(g.bottom,ft)}return g.top>=0&&g.left>=0&&g.bottom>g.top&&g.right>g.left?g:null}function Xs(u,p,g,T){var R=yn.clone(u),U={width:p.width,height:p.height};return T.adjustX&&R.left<g.left&&(R.left=g.left),T.resizeWidth&&R.left>=g.left&&R.left+U.width>g.right&&(U.width-=R.left+U.width-g.right),T.adjustX&&R.left+U.width>g.right&&(R.left=Math.max(g.right-U.width,g.left)),T.adjustY&&R.top<g.top&&(R.top=g.top),T.resizeHeight&&R.top>=g.top&&R.top+U.height>g.bottom&&(U.height-=R.top+U.height-g.bottom),T.adjustY&&R.top+U.height>g.bottom&&(R.top=Math.max(g.bottom-U.height,g.top)),yn.mix(R,U)}function Xn(u){var p,g,T;if(!yn.isWindow(u)&&u.nodeType!==9)p=yn.offset(u),g=yn.outerWidth(u),T=yn.outerHeight(u);else{var R=yn.getWindow(u);p={left:yn.getWindowScrollLeft(R),top:yn.getWindowScrollTop(R)},g=yn.viewportWidth(R),T=yn.viewportHeight(R)}return p.width=g,p.height=T,p}function qo(u,p){var g=p.charAt(0),T=p.charAt(1),R=u.width,U=u.height,A=u.left,oe=u.top;return g==="c"?oe+=U/2:g==="b"&&(oe+=U),T==="c"?A+=R/2:T==="r"&&(A+=R),{left:A,top:oe}}function ei(u,p,g,T,R){var U=qo(p,g[1]),A=qo(u,g[0]),oe=[A.left-U.left,A.top-U.top];return{left:Math.round(u.left-oe[0]+T[0]-R[0]),top:Math.round(u.top-oe[1]+T[1]-R[1])}}function Ai(u,p,g){return u.left<g.left||u.left+p.width>g.right}function Qs(u,p,g){return u.top<g.top||u.top+p.height>g.bottom}function Mi(u,p,g){return u.left>g.right||u.left+p.width<g.left}function Pi(u,p,g){return u.top>g.bottom||u.top+p.height<g.top}function Oo(u,p,g){var T=[];return yn.each(u,function(R){T.push(R.replace(p,function(U){return g[U]}))}),T}function Qa(u,p){return u[p]=-u[p],u}function Js(u,p){var g;return/%$/.test(u)?g=parseInt(u.substring(0,u.length-1),10)/100*p:g=parseInt(u,10),g||0}function ti(u,p){u[0]=Js(u[0],p.width),u[1]=Js(u[1],p.height)}function Sl(u,p,g,T){var R=g.points,U=g.offset||[0,0],A=g.targetOffset||[0,0],oe=g.overflow,ne=g.source||u;U=[].concat(U),A=[].concat(A),oe=oe||{};var fe={},De=0,ke=!!(oe&&oe.alwaysByViewport),Ue=Jo(ne,ke),He=Xn(ne);ti(U,He),ti(A,p);var Ve=ei(He,p,R,U,A),st=yn.merge(He,Ve);if(Ue&&(oe.adjustX||oe.adjustY)&&T){if(oe.adjustX&&Ai(Ve,He,Ue)){var mt=Oo(R,/[lr]/gi,{l:"r",r:"l"}),It=Qa(U,0),ct=Qa(A,0),ft=ei(He,p,mt,It,ct);Mi(ft,He,Ue)||(De=1,R=mt,U=It,A=ct)}if(oe.adjustY&&Qs(Ve,He,Ue)){var At=Oo(R,/[tb]/gi,{t:"b",b:"t"}),zt=Qa(U,1),Pt=Qa(A,1),Ot=ei(He,p,At,zt,Pt);Pi(Ot,He,Ue)||(De=1,R=At,U=zt,A=Pt)}De&&(Ve=ei(He,p,R,U,A),yn.mix(st,Ve));var Xt=Ai(Ve,He,Ue),qe=Qs(Ve,He,Ue);if(Xt||qe){var Vt=R;Xt&&(Vt=Oo(R,/[lr]/gi,{l:"r",r:"l"})),qe&&(Vt=Oo(R,/[tb]/gi,{t:"b",b:"t"})),R=Vt,U=g.offset||[0,0],A=g.targetOffset||[0,0]}fe.adjustX=oe.adjustX&&Xt,fe.adjustY=oe.adjustY&&qe,(fe.adjustX||fe.adjustY)&&(st=Xs(Ve,He,Ue,fe))}return st.width!==He.width&&yn.css(ne,"width",yn.width(ne)+st.width-He.width),st.height!==He.height&&yn.css(ne,"height",yn.height(ne)+st.height-He.height),yn.offset(ne,{left:st.left,top:st.top},{useCssRight:g.useCssRight,useCssBottom:g.useCssBottom,useCssTransform:g.useCssTransform,ignoreShake:g.ignoreShake}),{points:R,offset:U,targetOffset:A,overflow:fe}}function Bu(u,p){var g=Jo(u,p),T=Xn(u);return!g||T.left+T.width<=g.left||T.top+T.height<=g.top||T.left>=g.right||T.top>=g.bottom}function ni(u,p,g){var T=g.target||p,R=Xn(T),U=!Bu(T,g.overflow&&g.overflow.alwaysByViewport);return Sl(u,R,g,U)}ni.__getOffsetParent=Ys,ni.__getVisibleRectForElement=Jo;function ri(u,p,g){var T,R,U=yn.getDocument(u),A=U.defaultView||U.parentWindow,oe=yn.getWindowScrollLeft(A),ne=yn.getWindowScrollTop(A),fe=yn.viewportWidth(A),De=yn.viewportHeight(A);"pageX"in p?T=p.pageX:T=oe+p.clientX,"pageY"in p?R=p.pageY:R=ne+p.clientY;var ke={left:T,top:R,width:0,height:0},Ue=T>=0&&T<=oe+fe&&R>=0&&R<=ne+De,He=[g.points[0],"cc"];return Sl(u,ke,$s($s({},g),{},{points:He}),Ue)}var _u=null;function zu(u,p){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,T=new Set;function R(U,A){var oe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,ne=T.has(U);if(xi(!ne,"Warning: There may be circular references"),ne)return!1;if(U===A)return!0;if(g&&oe>1)return!1;T.add(U);var fe=oe+1;if(Array.isArray(U)){if(!Array.isArray(A)||U.length!==A.length)return!1;for(var De=0;De<U.length;De++)if(!R(U[De],A[De],fe))return!1;return!0}if(U&&A&&re(U)==="object"&&re(A)==="object"){var ke=Object.keys(U);return ke.length!==Object.keys(A).length?!1:ke.every(function(Ue){return R(U[Ue],A[Ue],fe)})}return!1}return R(u,p)}var Ri=zu,ps=function(u){if(!u)return!1;if(u instanceof HTMLElement&&u.offsetParent)return!0;if(u instanceof SVGGraphicsElement&&u.getBBox){var p=u.getBBox(),g=p.width,T=p.height;if(g||T)return!0}if(u instanceof HTMLElement&&u.getBoundingClientRect){var R=u.getBoundingClientRect(),U=R.width,A=R.height;if(U||A)return!0}return!1},wl=function(u,p){var g=r.useRef(!1),T=r.useRef(null);function R(){window.clearTimeout(T.current)}function U(A){if(R(),!g.current||A===!0){if(u(A)===!1)return;g.current=!0,T.current=window.setTimeout(function(){g.current=!1},p)}else T.current=window.setTimeout(function(){g.current=!1,U()},p)}return[U,function(){g.current=!1,R()}]};function Uu(u,p){return u===p?!0:!u||!p?!1:"pageX"in p&&"pageY"in p?u.pageX===p.pageX&&u.pageY===p.pageY:"clientX"in p&&"clientY"in p?u.clientX===p.clientX&&u.clientY===p.clientY:!1}function qs(u,p){u!==document.activeElement&&Ta(p,u)&&typeof u.focus=="function"&&u.focus()}function Fe(u,p){var g=null,T=null;function R(A){var oe=P(A,1),ne=oe[0].target;if(document.documentElement.contains(ne)){var fe=ne.getBoundingClientRect(),De=fe.width,ke=fe.height,Ue=Math.floor(De),He=Math.floor(ke);(g!==Ue||T!==He)&&Promise.resolve().then(function(){p({width:Ue,height:He})}),g=Ue,T=He}}var U=new zo(R);return u&&U.observe(u),function(){U.disconnect()}}function Je(u){return typeof u!="function"?null:u()}function Ye(u){return re(u)!=="object"||!u?null:u}var Qe=function(p,g){var T=p.children,R=p.disabled,U=p.target,A=p.align,oe=p.onAlign,ne=p.monitorWindowResize,fe=p.monitorBufferTime,De=fe===void 0?0:fe,ke=r.useRef({}),Ue=r.useRef(),He=r.Children.only(T),Ve=r.useRef({});Ve.current.disabled=R,Ve.current.target=U,Ve.current.align=A,Ve.current.onAlign=oe;var st=wl(function(){var bt=Ve.current,nt=bt.disabled,$e=bt.target,Xe=bt.align,yt=bt.onAlign,Lt=Ue.current;if(!nt&&$e&&Lt){var kt,Zt=Je($e),xn=Ye($e);ke.current.element=Zt,ke.current.point=xn,ke.current.align=Xe;var Cn=document,Tn=Cn.activeElement;return Zt&&ps(Zt)?kt=ni(Lt,Zt,Xe):xn&&(kt=ri(Lt,xn,Xe)),qs(Tn,Lt),yt&&kt&&yt(Lt,kt),!0}return!1},De),mt=P(st,2),It=mt[0],ct=mt[1],ft=r.useState(),At=P(ft,2),zt=At[0],Pt=At[1],Ot=r.useState(),Xt=P(Ot,2),qe=Xt[0],Vt=Xt[1];return Le(function(){Pt(Je(U)),Vt(Ye(U))}),r.useEffect(function(){(ke.current.element!==zt||!Uu(ke.current.point,qe)||!Ri(ke.current.align,A))&&It()}),r.useEffect(function(){var bt=Fe(Ue.current,It);return bt},[Ue.current]),r.useEffect(function(){var bt=Fe(zt,It);return bt},[zt]),r.useEffect(function(){R?ct():It()},[R]),r.useEffect(function(){if(ne){var bt=Eo(window,"resize",It);return bt.remove}},[ne]),r.useEffect(function(){return function(){ct()}},[]),r.useImperativeHandle(g,function(){return{forceAlign:function(){return It(!0)}}}),r.isValidElement(He)&&(He=r.cloneElement(He,{ref:Oe(He.ref,Ue)})),He},ht=r.forwardRef(Qe);ht.displayName="Align";var vt=ht,_t=vt;function Gt(){"use strict";Gt=function(){return u};var u={},p=Object.prototype,g=p.hasOwnProperty,T=Object.defineProperty||function(nt,$e,Xe){nt[$e]=Xe.value},R=typeof Symbol=="function"?Symbol:{},U=R.iterator||"@@iterator",A=R.asyncIterator||"@@asyncIterator",oe=R.toStringTag||"@@toStringTag";function ne(nt,$e,Xe){return Object.defineProperty(nt,$e,{value:Xe,enumerable:!0,configurable:!0,writable:!0}),nt[$e]}try{ne({},"")}catch(nt){ne=function(Xe,yt,Lt){return Xe[yt]=Lt}}function fe(nt,$e,Xe,yt){var Lt=$e&&$e.prototype instanceof Ue?$e:Ue,kt=Object.create(Lt.prototype),Zt=new qe(yt||[]);return T(kt,"_invoke",{value:zt(nt,Xe,Zt)}),kt}function De(nt,$e,Xe){try{return{type:"normal",arg:nt.call($e,Xe)}}catch(yt){return{type:"throw",arg:yt}}}u.wrap=fe;var ke={};function Ue(){}function He(){}function Ve(){}var st={};ne(st,U,function(){return this});var mt=Object.getPrototypeOf,It=mt&&mt(mt(Vt([])));It&&It!==p&&g.call(It,U)&&(st=It);var ct=Ve.prototype=Ue.prototype=Object.create(st);function ft(nt){["next","throw","return"].forEach(function($e){ne(nt,$e,function(Xe){return this._invoke($e,Xe)})})}function At(nt,$e){function Xe(Lt,kt,Zt,xn){var Cn=De(nt[Lt],nt,kt);if(Cn.type!=="throw"){var Tn=Cn.arg,jt=Tn.value;return jt&&re(jt)=="object"&&g.call(jt,"__await")?$e.resolve(jt.__await).then(function($t){Xe("next",$t,Zt,xn)},function($t){Xe("throw",$t,Zt,xn)}):$e.resolve(jt).then(function($t){Tn.value=$t,Zt(Tn)},function($t){return Xe("throw",$t,Zt,xn)})}xn(Cn.arg)}var yt;T(this,"_invoke",{value:function(kt,Zt){function xn(){return new $e(function(Cn,Tn){Xe(kt,Zt,Cn,Tn)})}return yt=yt?yt.then(xn,xn):xn()}})}function zt(nt,$e,Xe){var yt="suspendedStart";return function(Lt,kt){if(yt==="executing")throw new Error("Generator is already running");if(yt==="completed"){if(Lt==="throw")throw kt;return bt()}for(Xe.method=Lt,Xe.arg=kt;;){var Zt=Xe.delegate;if(Zt){var xn=Pt(Zt,Xe);if(xn){if(xn===ke)continue;return xn}}if(Xe.method==="next")Xe.sent=Xe._sent=Xe.arg;else if(Xe.method==="throw"){if(yt==="suspendedStart")throw yt="completed",Xe.arg;Xe.dispatchException(Xe.arg)}else Xe.method==="return"&&Xe.abrupt("return",Xe.arg);yt="executing";var Cn=De(nt,$e,Xe);if(Cn.type==="normal"){if(yt=Xe.done?"completed":"suspendedYield",Cn.arg===ke)continue;return{value:Cn.arg,done:Xe.done}}Cn.type==="throw"&&(yt="completed",Xe.method="throw",Xe.arg=Cn.arg)}}}function Pt(nt,$e){var Xe=$e.method,yt=nt.iterator[Xe];if(yt===void 0)return $e.delegate=null,Xe==="throw"&&nt.iterator.return&&($e.method="return",$e.arg=void 0,Pt(nt,$e),$e.method==="throw")||Xe!=="return"&&($e.method="throw",$e.arg=new TypeError("The iterator does not provide a '"+Xe+"' method")),ke;var Lt=De(yt,nt.iterator,$e.arg);if(Lt.type==="throw")return $e.method="throw",$e.arg=Lt.arg,$e.delegate=null,ke;var kt=Lt.arg;return kt?kt.done?($e[nt.resultName]=kt.value,$e.next=nt.nextLoc,$e.method!=="return"&&($e.method="next",$e.arg=void 0),$e.delegate=null,ke):kt:($e.method="throw",$e.arg=new TypeError("iterator result is not an object"),$e.delegate=null,ke)}function Ot(nt){var $e={tryLoc:nt[0]};1 in nt&&($e.catchLoc=nt[1]),2 in nt&&($e.finallyLoc=nt[2],$e.afterLoc=nt[3]),this.tryEntries.push($e)}function Xt(nt){var $e=nt.completion||{};$e.type="normal",delete $e.arg,nt.completion=$e}function qe(nt){this.tryEntries=[{tryLoc:"root"}],nt.forEach(Ot,this),this.reset(!0)}function Vt(nt){if(nt){var $e=nt[U];if($e)return $e.call(nt);if(typeof nt.next=="function")return nt;if(!isNaN(nt.length)){var Xe=-1,yt=function Lt(){for(;++Xe<nt.length;)if(g.call(nt,Xe))return Lt.value=nt[Xe],Lt.done=!1,Lt;return Lt.value=void 0,Lt.done=!0,Lt};return yt.next=yt}}return{next:bt}}function bt(){return{value:void 0,done:!0}}return He.prototype=Ve,T(ct,"constructor",{value:Ve,configurable:!0}),T(Ve,"constructor",{value:He,configurable:!0}),He.displayName=ne(Ve,oe,"GeneratorFunction"),u.isGeneratorFunction=function(nt){var $e=typeof nt=="function"&&nt.constructor;return!!$e&&($e===He||($e.displayName||$e.name)==="GeneratorFunction")},u.mark=function(nt){return Object.setPrototypeOf?Object.setPrototypeOf(nt,Ve):(nt.__proto__=Ve,ne(nt,oe,"GeneratorFunction")),nt.prototype=Object.create(ct),nt},u.awrap=function(nt){return{__await:nt}},ft(At.prototype),ne(At.prototype,A,function(){return this}),u.AsyncIterator=At,u.async=function(nt,$e,Xe,yt,Lt){Lt===void 0&&(Lt=Promise);var kt=new At(fe(nt,$e,Xe,yt),Lt);return u.isGeneratorFunction($e)?kt:kt.next().then(function(Zt){return Zt.done?Zt.value:kt.next()})},ft(ct),ne(ct,oe,"Generator"),ne(ct,U,function(){return this}),ne(ct,"toString",function(){return"[object Generator]"}),u.keys=function(nt){var $e=Object(nt),Xe=[];for(var yt in $e)Xe.push(yt);return Xe.reverse(),function Lt(){for(;Xe.length;){var kt=Xe.pop();if(kt in $e)return Lt.value=kt,Lt.done=!1,Lt}return Lt.done=!0,Lt}},u.values=Vt,qe.prototype={constructor:qe,reset:function($e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Xt),!$e)for(var Xe in this)Xe.charAt(0)==="t"&&g.call(this,Xe)&&!isNaN(+Xe.slice(1))&&(this[Xe]=void 0)},stop:function(){this.done=!0;var $e=this.tryEntries[0].completion;if($e.type==="throw")throw $e.arg;return this.rval},dispatchException:function($e){if(this.done)throw $e;var Xe=this;function yt(Tn,jt){return Zt.type="throw",Zt.arg=$e,Xe.next=Tn,jt&&(Xe.method="next",Xe.arg=void 0),!!jt}for(var Lt=this.tryEntries.length-1;Lt>=0;--Lt){var kt=this.tryEntries[Lt],Zt=kt.completion;if(kt.tryLoc==="root")return yt("end");if(kt.tryLoc<=this.prev){var xn=g.call(kt,"catchLoc"),Cn=g.call(kt,"finallyLoc");if(xn&&Cn){if(this.prev<kt.catchLoc)return yt(kt.catchLoc,!0);if(this.prev<kt.finallyLoc)return yt(kt.finallyLoc)}else if(xn){if(this.prev<kt.catchLoc)return yt(kt.catchLoc,!0)}else{if(!Cn)throw new Error("try statement without catch or finally");if(this.prev<kt.finallyLoc)return yt(kt.finallyLoc)}}}},abrupt:function($e,Xe){for(var yt=this.tryEntries.length-1;yt>=0;--yt){var Lt=this.tryEntries[yt];if(Lt.tryLoc<=this.prev&&g.call(Lt,"finallyLoc")&&this.prev<Lt.finallyLoc){var kt=Lt;break}}kt&&($e==="break"||$e==="continue")&&kt.tryLoc<=Xe&&Xe<=kt.finallyLoc&&(kt=null);var Zt=kt?kt.completion:{};return Zt.type=$e,Zt.arg=Xe,kt?(this.method="next",this.next=kt.finallyLoc,ke):this.complete(Zt)},complete:function($e,Xe){if($e.type==="throw")throw $e.arg;return $e.type==="break"||$e.type==="continue"?this.next=$e.arg:$e.type==="return"?(this.rval=this.arg=$e.arg,this.method="return",this.next="end"):$e.type==="normal"&&Xe&&(this.next=Xe),ke},finish:function($e){for(var Xe=this.tryEntries.length-1;Xe>=0;--Xe){var yt=this.tryEntries[Xe];if(yt.finallyLoc===$e)return this.complete(yt.completion,yt.afterLoc),Xt(yt),ke}},catch:function($e){for(var Xe=this.tryEntries.length-1;Xe>=0;--Xe){var yt=this.tryEntries[Xe];if(yt.tryLoc===$e){var Lt=yt.completion;if(Lt.type==="throw"){var kt=Lt.arg;Xt(yt)}return kt}}throw new Error("illegal catch attempt")},delegateYield:function($e,Xe,yt){return this.delegate={iterator:Vt($e),resultName:Xe,nextLoc:yt},this.method==="next"&&(this.arg=void 0),ke}},u}function gn(u,p,g,T,R,U,A){try{var oe=u[U](A),ne=oe.value}catch(fe){g(fe);return}oe.done?p(ne):Promise.resolve(ne).then(T,R)}function Er(u){return function(){var p=this,g=arguments;return new Promise(function(T,R){var U=u.apply(p,g);function A(ne){gn(U,T,R,A,oe,"next",ne)}function oe(ne){gn(U,T,R,A,oe,"throw",ne)}A(void 0)})}}var On=["measure","alignPre","align",null,"motion"],Dr=function(u,p){var g=_(null),T=P(g,2),R=T[0],U=T[1],A=(0,r.useRef)();function oe(De){U(De,!0)}function ne(){ut.cancel(A.current)}function fe(De){ne(),A.current=ut(function(){oe(function(ke){switch(R){case"align":return"motion";case"motion":return"stable";default:}return ke}),De==null||De()})}return(0,r.useEffect)(function(){oe("measure")},[u]),(0,r.useEffect)(function(){switch(R){case"measure":p();break;default:}R&&(A.current=ut(Er(Gt().mark(function De(){var ke,Ue;return Gt().wrap(function(Ve){for(;;)switch(Ve.prev=Ve.next){case 0:ke=On.indexOf(R),Ue=On[ke+1],Ue&&ke!==-1&&oe(Ue);case 3:case"end":return Ve.stop()}},De)}))))},[R]),(0,r.useEffect)(function(){return function(){ne()}},[]),[R,fe]},Ur=function(u){var p=r.useState({width:0,height:0}),g=P(p,2),T=g[0],R=g[1];function U(oe){var ne=oe.offsetWidth,fe=oe.offsetHeight,De=oe.getBoundingClientRect(),ke=De.width,Ue=De.height;Math.abs(ne-ke)<1&&Math.abs(fe-Ue)<1&&(ne=ke,fe=Ue),R({width:ne,height:fe})}var A=r.useMemo(function(){var oe={};if(u){var ne=T.width,fe=T.height;u.indexOf("height")!==-1&&fe?oe.height=fe:u.indexOf("minHeight")!==-1&&fe&&(oe.minHeight=fe),u.indexOf("width")!==-1&&ne?oe.width=ne:u.indexOf("minWidth")!==-1&&ne&&(oe.minWidth=ne)}return oe},[u,T]);return[A,U]},Jr=r.forwardRef(function(u,p){var g=u.visible,T=u.prefixCls,R=u.className,U=u.style,A=u.children,oe=u.zIndex,ne=u.stretch,fe=u.destroyPopupOnHide,De=u.forceRender,ke=u.align,Ue=u.point,He=u.getRootDomNode,Ve=u.getClassNameFromAlign,st=u.onAlign,mt=u.onMouseEnter,It=u.onMouseLeave,ct=u.onMouseDown,ft=u.onTouchStart,At=u.onClick,zt=(0,r.useRef)(),Pt=(0,r.useRef)(),Ot=(0,r.useState)(),Xt=P(Ot,2),qe=Xt[0],Vt=Xt[1],bt=Ur(ne),nt=P(bt,2),$e=nt[0],Xe=nt[1];function yt(){ne&&Xe(He())}var Lt=Dr(g,yt),kt=P(Lt,2),Zt=kt[0],xn=kt[1],Cn=(0,r.useState)(0),Tn=P(Cn,2),jt=Tn[0],$t=Tn[1],dn=(0,r.useRef)();Le(function(){Zt==="alignPre"&&$t(0)},[Zt]);function Rn(){return Ue||He}function Qn(){var An;(An=zt.current)===null||An===void 0||An.forceAlign()}function Jn(An,Cr){var fr=Ve(Cr);qe!==fr&&Vt(fr),$t(function(bn){return bn+1}),Zt==="align"&&(st==null||st(An,Cr))}Le(function(){Zt==="align"&&(jt<3?Qn():xn(function(){var An;(An=dn.current)===null||An===void 0||An.call(dn)}))},[jt]);var nr=le({},Ho(u));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(An){var Cr=nr[An];nr[An]=function(fr,bn){return xn(),Cr==null?void 0:Cr(fr,bn)}});function Hn(){return new Promise(function(An){dn.current=An})}r.useEffect(function(){!nr.motionName&&Zt==="motion"&&xn()},[nr.motionName,Zt]),r.useImperativeHandle(p,function(){return{forceAlign:Qn,getElement:function(){return Pt.current}}});var mr=le(le({},$e),{},{zIndex:oe,opacity:Zt==="motion"||Zt==="stable"||!g?void 0:0,pointerEvents:!g&&Zt!=="stable"?"none":void 0},U),cr=!0;ke!=null&&ke.points&&(Zt==="align"||Zt==="stable")&&(cr=!1);var wr=A;return r.Children.count(A)>1&&(wr=r.createElement("div",{className:"".concat(T,"-content")},A)),r.createElement(Bo,Y({visible:g,ref:Pt,leavedClassName:"".concat(T,"-hidden")},nr,{onAppearPrepare:Hn,onEnterPrepare:Hn,removeOnLeave:fe,forceRender:De}),function(An,Cr){var fr=An.className,bn=An.style,Nn=s()(T,R,qe,fr);return r.createElement(_t,{target:Rn(),key:"popup",ref:zt,monitorWindowResize:!0,disabled:cr,align:ke,onAlign:Jn},r.createElement("div",{ref:Cr,className:Nn,onMouseEnter:mt,onMouseLeave:It,onMouseDownCapture:ct,onTouchStartCapture:ft,onClick:At,style:le(le({},bn),mr)},wr))})});Jr.displayName="PopupInner";var Ao=Jr,Wr=r.forwardRef(function(u,p){var g=u.prefixCls,T=u.visible,R=u.zIndex,U=u.children,A=u.mobile;A=A===void 0?{}:A;var oe=A.popupClassName,ne=A.popupStyle,fe=A.popupMotion,De=fe===void 0?{}:fe,ke=A.popupRender,Ue=u.onClick,He=r.useRef();r.useImperativeHandle(p,function(){return{forceAlign:function(){},getElement:function(){return He.current}}});var Ve=le({zIndex:R},ne),st=U;return r.Children.count(U)>1&&(st=r.createElement("div",{className:"".concat(g,"-content")},U)),ke&&(st=ke(st)),r.createElement(Bo,Y({visible:T,ref:He,removeOnLeave:!0},De),function(mt,It){var ct=mt.className,ft=mt.style,At=s()(g,oe,ct);return r.createElement("div",{ref:It,className:At,onClick:Ue,style:le(le({},ft),Ve)},st)})});Wr.displayName="MobilePopupInner";var Hr=Wr,pr=["visible","mobile"],Bn=r.forwardRef(function(u,p){var g=u.visible,T=u.mobile,R=ge(u,pr),U=(0,r.useState)(g),A=P(U,2),oe=A[0],ne=A[1],fe=(0,r.useState)(!1),De=P(fe,2),ke=De[0],Ue=De[1],He=le(le({},R),{},{visible:oe});(0,r.useEffect)(function(){ne(g),g&&T&&Ue(We())},[g,T]);var Ve=ke?r.createElement(Hr,Y({},He,{mobile:T,ref:p})):r.createElement(Ao,Y({},He,{ref:p}));return r.createElement("div",null,r.createElement(gl,He),Ve)});Bn.displayName="Popup";var kn=Bn,Fa=r.createContext(null),kr=Fa;function Rr(){}function Mo(){return""}function qr(u){return u?u.ownerDocument:window.document}var $r=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function ai(u){var p=function(g){ho(R,g);var T=oa(R);function R(U){var A;zr(this,R),A=T.call(this,U),se(wn(A),"popupRef",r.createRef()),se(wn(A),"triggerRef",r.createRef()),se(wn(A),"portalContainer",void 0),se(wn(A),"attachId",void 0),se(wn(A),"clickOutsideHandler",void 0),se(wn(A),"touchOutsideHandler",void 0),se(wn(A),"contextMenuOutsideHandler1",void 0),se(wn(A),"contextMenuOutsideHandler2",void 0),se(wn(A),"mouseDownTimeout",void 0),se(wn(A),"focusTime",void 0),se(wn(A),"preClickTime",void 0),se(wn(A),"preTouchTime",void 0),se(wn(A),"delayTimer",void 0),se(wn(A),"hasPopupMouseDown",void 0),se(wn(A),"onMouseEnter",function(ne){var fe=A.props.mouseEnterDelay;A.fireEvents("onMouseEnter",ne),A.delaySetPopupVisible(!0,fe,fe?null:ne)}),se(wn(A),"onMouseMove",function(ne){A.fireEvents("onMouseMove",ne),A.setPoint(ne)}),se(wn(A),"onMouseLeave",function(ne){A.fireEvents("onMouseLeave",ne),A.delaySetPopupVisible(!1,A.props.mouseLeaveDelay)}),se(wn(A),"onPopupMouseEnter",function(){A.clearDelayTimer()}),se(wn(A),"onPopupMouseLeave",function(ne){var fe;ne.relatedTarget&&!ne.relatedTarget.setTimeout&&Ta((fe=A.popupRef.current)===null||fe===void 0?void 0:fe.getElement(),ne.relatedTarget)||A.delaySetPopupVisible(!1,A.props.mouseLeaveDelay)}),se(wn(A),"onFocus",function(ne){A.fireEvents("onFocus",ne),A.clearDelayTimer(),A.isFocusToShow()&&(A.focusTime=Date.now(),A.delaySetPopupVisible(!0,A.props.focusDelay))}),se(wn(A),"onMouseDown",function(ne){A.fireEvents("onMouseDown",ne),A.preClickTime=Date.now()}),se(wn(A),"onTouchStart",function(ne){A.fireEvents("onTouchStart",ne),A.preTouchTime=Date.now()}),se(wn(A),"onBlur",function(ne){A.fireEvents("onBlur",ne),A.clearDelayTimer(),A.isBlurToHide()&&A.delaySetPopupVisible(!1,A.props.blurDelay)}),se(wn(A),"onContextMenu",function(ne){ne.preventDefault(),A.fireEvents("onContextMenu",ne),A.setPopupVisible(!0,ne)}),se(wn(A),"onContextMenuClose",function(){A.isContextMenuToShow()&&A.close()}),se(wn(A),"onClick",function(ne){if(A.fireEvents("onClick",ne),A.focusTime){var fe;if(A.preClickTime&&A.preTouchTime?fe=Math.min(A.preClickTime,A.preTouchTime):A.preClickTime?fe=A.preClickTime:A.preTouchTime&&(fe=A.preTouchTime),Math.abs(fe-A.focusTime)<20)return;A.focusTime=0}A.preClickTime=0,A.preTouchTime=0,A.isClickToShow()&&(A.isClickToHide()||A.isBlurToHide())&&ne&&ne.preventDefault&&ne.preventDefault();var De=!A.state.popupVisible;(A.isClickToHide()&&!De||De&&A.isClickToShow())&&A.setPopupVisible(!A.state.popupVisible,ne)}),se(wn(A),"onPopupMouseDown",function(){if(A.hasPopupMouseDown=!0,clearTimeout(A.mouseDownTimeout),A.mouseDownTimeout=window.setTimeout(function(){A.hasPopupMouseDown=!1},0),A.context){var ne;(ne=A.context).onPopupMouseDown.apply(ne,arguments)}}),se(wn(A),"onDocumentClick",function(ne){if(!(A.props.mask&&!A.props.maskClosable)){var fe=ne.target,De=A.getRootDomNode(),ke=A.getPopupDomNode();(!Ta(De,fe)||A.isContextMenuOnly())&&!Ta(ke,fe)&&!A.hasPopupMouseDown&&A.close()}}),se(wn(A),"getRootDomNode",function(){var ne=A.props.getTriggerDOMNode;if(ne)return ne(A.triggerRef.current);try{var fe=ot(A.triggerRef.current);if(fe)return fe}catch(De){}return Re.findDOMNode(wn(A))}),se(wn(A),"getPopupClassNameFromAlign",function(ne){var fe=[],De=A.props,ke=De.popupPlacement,Ue=De.builtinPlacements,He=De.prefixCls,Ve=De.alignPoint,st=De.getPopupClassNameFromAlign;return ke&&Ue&&fe.push(ts(Ue,He,ne,Ve)),st&&fe.push(st(ne)),fe.join(" ")}),se(wn(A),"getComponent",function(){var ne=A.props,fe=ne.prefixCls,De=ne.destroyPopupOnHide,ke=ne.popupClassName,Ue=ne.onPopupAlign,He=ne.popupMotion,Ve=ne.popupAnimation,st=ne.popupTransitionName,mt=ne.popupStyle,It=ne.mask,ct=ne.maskAnimation,ft=ne.maskTransitionName,At=ne.maskMotion,zt=ne.zIndex,Pt=ne.popup,Ot=ne.stretch,Xt=ne.alignPoint,qe=ne.mobile,Vt=ne.forceRender,bt=ne.onPopupClick,nt=A.state,$e=nt.popupVisible,Xe=nt.point,yt=A.getPopupAlign(),Lt={};return A.isMouseEnterToShow()&&(Lt.onMouseEnter=A.onPopupMouseEnter),A.isMouseLeaveToHide()&&(Lt.onMouseLeave=A.onPopupMouseLeave),Lt.onMouseDown=A.onPopupMouseDown,Lt.onTouchStart=A.onPopupMouseDown,r.createElement(kn,Y({prefixCls:fe,destroyPopupOnHide:De,visible:$e,point:Xt&&Xe,className:ke,align:yt,onAlign:Ue,animation:Ve,getClassNameFromAlign:A.getPopupClassNameFromAlign},Lt,{stretch:Ot,getRootDomNode:A.getRootDomNode,style:mt,mask:It,zIndex:zt,transitionName:st,maskAnimation:ct,maskTransitionName:ft,maskMotion:At,ref:A.popupRef,motion:He,mobile:qe,forceRender:Vt,onClick:bt}),typeof Pt=="function"?Pt():Pt)}),se(wn(A),"attachParent",function(ne){ut.cancel(A.attachId);var fe=A.props,De=fe.getPopupContainer,ke=fe.getDocument,Ue=A.getRootDomNode(),He;De?(Ue||De.length===0)&&(He=De(Ue)):He=ke(A.getRootDomNode()).body,He?He.appendChild(ne):A.attachId=ut(function(){A.attachParent(ne)})}),se(wn(A),"getContainer",function(){if(!A.portalContainer){var ne=A.props.getDocument,fe=ne(A.getRootDomNode()).createElement("div");fe.style.position="absolute",fe.style.top="0",fe.style.left="0",fe.style.width="100%",A.portalContainer=fe}return A.attachParent(A.portalContainer),A.portalContainer}),se(wn(A),"setPoint",function(ne){var fe=A.props.alignPoint;!fe||!ne||A.setState({point:{pageX:ne.pageX,pageY:ne.pageY}})}),se(wn(A),"handlePortalUpdate",function(){A.state.prevPopupVisible!==A.state.popupVisible&&A.props.afterPopupVisibleChange(A.state.popupVisible)}),se(wn(A),"triggerContextValue",{onPopupMouseDown:A.onPopupMouseDown});var oe;return"popupVisible"in U?oe=!!U.popupVisible:oe=!!U.defaultPopupVisible,A.state={prevPopupVisible:oe,popupVisible:oe},$r.forEach(function(ne){A["fire".concat(ne)]=function(fe){A.fireEvents(ne,fe)}}),A}return mo(R,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var A=this.props,oe=this.state;if(oe.popupVisible){var ne;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(ne=A.getDocument(this.getRootDomNode()),this.clickOutsideHandler=Eo(ne,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(ne=ne||A.getDocument(this.getRootDomNode()),this.touchOutsideHandler=Eo(ne,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(ne=ne||A.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=Eo(ne,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=Eo(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),ut.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var A;return((A=this.popupRef.current)===null||A===void 0?void 0:A.getElement())||null}},{key:"getPopupAlign",value:function(){var A=this.props,oe=A.popupPlacement,ne=A.popupAlign,fe=A.builtinPlacements;return oe&&fe?yl(fe,oe,ne):ne}},{key:"setPopupVisible",value:function(A,oe){var ne=this.props.alignPoint,fe=this.state.popupVisible;this.clearDelayTimer(),fe!==A&&("popupVisible"in this.props||this.setState({popupVisible:A,prevPopupVisible:fe}),this.props.onPopupVisibleChange(A)),ne&&oe&&A&&this.setPoint(oe)}},{key:"delaySetPopupVisible",value:function(A,oe,ne){var fe=this,De=oe*1e3;if(this.clearDelayTimer(),De){var ke=ne?{pageX:ne.pageX,pageY:ne.pageY}:null;this.delayTimer=window.setTimeout(function(){fe.setPopupVisible(A,ke),fe.clearDelayTimer()},De)}else this.setPopupVisible(A,ne)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(A){var oe=this.props.children.props,ne=this.props;return oe[A]&&ne[A]?this["fire".concat(A)]:oe[A]||ne[A]}},{key:"isClickToShow",value:function(){var A=this.props,oe=A.action,ne=A.showAction;return oe.indexOf("click")!==-1||ne.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var A=this.props.action;return A==="contextMenu"||A.length===1&&A[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var A=this.props,oe=A.action,ne=A.showAction;return oe.indexOf("contextMenu")!==-1||ne.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var A=this.props,oe=A.action,ne=A.hideAction;return oe.indexOf("click")!==-1||ne.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var A=this.props,oe=A.action,ne=A.showAction;return oe.indexOf("hover")!==-1||ne.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var A=this.props,oe=A.action,ne=A.hideAction;return oe.indexOf("hover")!==-1||ne.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var A=this.props,oe=A.action,ne=A.showAction;return oe.indexOf("focus")!==-1||ne.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var A=this.props,oe=A.action,ne=A.hideAction;return oe.indexOf("focus")!==-1||ne.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var A;(A=this.popupRef.current)===null||A===void 0||A.forceAlign()}}},{key:"fireEvents",value:function(A,oe){var ne=this.props.children.props[A];ne&&ne(oe);var fe=this.props[A];fe&&fe(oe)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var A=this.state.popupVisible,oe=this.props,ne=oe.children,fe=oe.forceRender,De=oe.alignPoint,ke=oe.className,Ue=oe.autoDestroy,He=r.Children.only(ne),Ve={key:"trigger"};this.isContextMenuToShow()?Ve.onContextMenu=this.onContextMenu:Ve.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(Ve.onClick=this.onClick,Ve.onMouseDown=this.onMouseDown,Ve.onTouchStart=this.onTouchStart):(Ve.onClick=this.createTwoChains("onClick"),Ve.onMouseDown=this.createTwoChains("onMouseDown"),Ve.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(Ve.onMouseEnter=this.onMouseEnter,De&&(Ve.onMouseMove=this.onMouseMove)):Ve.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?Ve.onMouseLeave=this.onMouseLeave:Ve.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(Ve.onFocus=this.onFocus,Ve.onBlur=this.onBlur):(Ve.onFocus=this.createTwoChains("onFocus"),Ve.onBlur=this.createTwoChains("onBlur"));var st=s()(He&&He.props&&He.props.className,ke);st&&(Ve.className=st);var mt=le({},Ve);xe(He)&&(mt.ref=Oe(this.triggerRef,He.ref));var It=r.cloneElement(He,mt),ct;return(A||this.popupRef.current||fe)&&(ct=r.createElement(u,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!A&&Ue&&(ct=null),r.createElement(kr.Provider,{value:this.triggerContextValue},It,ct)}}],[{key:"getDerivedStateFromProps",value:function(A,oe){var ne=A.popupVisible,fe={};return ne!==void 0&&oe.popupVisible!==ne&&(fe.popupVisible=ne,fe.prevPopupVisible=oe.popupVisible),fe}}]),R}(r.Component);return se(p,"contextType",kr),se(p,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:Mo,getDocument:qr,onPopupVisibleChange:Rr,afterPopupVisibleChange:Rr,onPopupAlign:Rr,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),p}var Ni=ai(hl),io={adjustX:1,adjustY:1},ja=[0,0],Hu={topLeft:{points:["bl","tl"],overflow:io,offset:[0,-4],targetOffset:ja},topCenter:{points:["bc","tc"],overflow:io,offset:[0,-4],targetOffset:ja},topRight:{points:["br","tr"],overflow:io,offset:[0,-4],targetOffset:ja},bottomLeft:{points:["tl","bl"],overflow:io,offset:[0,4],targetOffset:ja},bottomCenter:{points:["tc","bc"],overflow:io,offset:[0,4],targetOffset:ja},bottomRight:{points:["tr","br"],overflow:io,offset:[0,4],targetOffset:ja}},Ba=Hu,Jt={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(p){var g=p.keyCode;if(p.altKey&&!p.ctrlKey||p.metaKey||g>=Jt.F1&&g<=Jt.F12)return!1;switch(g){case Jt.ALT:case Jt.CAPS_LOCK:case Jt.CONTEXT_MENU:case Jt.CTRL:case Jt.DOWN:case Jt.END:case Jt.ESC:case Jt.HOME:case Jt.INSERT:case Jt.LEFT:case Jt.MAC_FF_META:case Jt.META:case Jt.NUMLOCK:case Jt.NUM_CENTER:case Jt.PAGE_DOWN:case Jt.PAGE_UP:case Jt.PAUSE:case Jt.PRINT_SCREEN:case Jt.RIGHT:case Jt.SHIFT:case Jt.UP:case Jt.WIN_KEY:case Jt.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(p){if(p>=Jt.ZERO&&p<=Jt.NINE||p>=Jt.NUM_ZERO&&p<=Jt.NUM_MULTIPLY||p>=Jt.A&&p<=Jt.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&p===0)return!0;switch(p){case Jt.SPACE:case Jt.QUESTION_MARK:case Jt.NUM_PLUS:case Jt.NUM_MINUS:case Jt.NUM_PERIOD:case Jt.NUM_DIVISION:case Jt.SEMICOLON:case Jt.DASH:case Jt.EQUALS:case Jt.COMMA:case Jt.PERIOD:case Jt.SLASH:case Jt.APOSTROPHE:case Jt.SINGLE_QUOTE:case Jt.OPEN_SQUARE_BRACKET:case Jt.BACKSLASH:case Jt.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Kn=Jt;function so(u){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ps(u)){var g=u.nodeName.toLowerCase(),T=["input","select","textarea","button"].includes(g)||u.isContentEditable||g==="a"&&!!u.getAttribute("href"),R=u.getAttribute("tabindex"),U=Number(R),A=null;return R&&!Number.isNaN(U)?A=U:T&&A===null&&(A=0),T&&u.disabled&&(A=null),A!==null&&(A>=0||p&&A<0)}return!1}function Cl(u){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Gr(u.querySelectorAll("*")).filter(function(T){return so(T,p)});return so(u,p)&&g.unshift(u),g}var Ja=null;function eu(){Ja=document.activeElement}function tu(){Ja=null}function Tl(){if(Ja)try{Ja.focus()}catch(u){}}function Ol(u,p){if(p.keyCode===9){var g=Cl(u),T=g[p.shiftKey?0:g.length-1],R=T===document.activeElement||u===document.activeElement;if(R){var U=g[p.shiftKey?g.length-1:0];U.focus(),p.preventDefault()}}}var _a=Kn.ESC,za=Kn.TAB;function Li(u){var p=u.visible,g=u.setTriggerVisible,T=u.triggerRef,R=u.onVisibleChange,U=u.autoFocus,A=r.useRef(!1),oe=function(){if(p&&T.current){var ke,Ue,He,Ve;(ke=T.current)===null||ke===void 0||(Ue=ke.triggerRef)===null||Ue===void 0||(He=Ue.current)===null||He===void 0||(Ve=He.focus)===null||Ve===void 0||Ve.call(He),g(!1),typeof R=="function"&&R(!1)}},ne=function(){var ke,Ue,He,Ve,st=Cl((ke=T.current)===null||ke===void 0||(Ue=ke.popupRef)===null||Ue===void 0||(He=Ue.current)===null||He===void 0||(Ve=He.getElement)===null||Ve===void 0?void 0:Ve.call(He)),mt=st[0];return mt!=null&&mt.focus?(mt.focus(),A.current=!0,!0):!1},fe=function(ke){switch(ke.keyCode){case _a:oe();break;case za:{var Ue=!1;A.current||(Ue=ne()),Ue?ke.preventDefault():oe();break}}};r.useEffect(function(){return p?(window.addEventListener("keydown",fe),U&&ut(ne,3),function(){window.removeEventListener("keydown",fe),A.current=!1}):function(){A.current=!1}},[p])}var Po=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Ro(u,p){var g=u.arrow,T=g===void 0?!1:g,R=u.prefixCls,U=R===void 0?"rc-dropdown":R,A=u.transitionName,oe=u.animation,ne=u.align,fe=u.placement,De=fe===void 0?"bottomLeft":fe,ke=u.placements,Ue=ke===void 0?Ba:ke,He=u.getPopupContainer,Ve=u.showAction,st=u.hideAction,mt=u.overlayClassName,It=u.overlayStyle,ct=u.visible,ft=u.trigger,At=ft===void 0?["hover"]:ft,zt=u.autoFocus,Pt=ge(u,Po),Ot=r.useState(),Xt=P(Ot,2),qe=Xt[0],Vt=Xt[1],bt="visible"in u?ct:qe,nt=r.useRef(null);r.useImperativeHandle(p,function(){return nt.current}),Li({visible:bt,setTriggerVisible:Vt,triggerRef:nt,onVisibleChange:u.onVisibleChange,autoFocus:zt});var $e=function(){var $t=u.overlay,dn;return typeof $t=="function"?dn=$t():dn=$t,dn},Xe=function($t){var dn=u.onOverlayClick;Vt(!1),dn&&dn($t)},yt=function($t){var dn=u.onVisibleChange;Vt($t),typeof dn=="function"&&dn($t)},Lt=function(){var $t=$e();return r.createElement(r.Fragment,null,T&&r.createElement("div",{className:"".concat(U,"-arrow")}),$t)},kt=function(){var $t=u.overlay;return typeof $t=="function"?Lt:Lt()},Zt=function(){var $t=u.minOverlayWidthMatchTrigger,dn=u.alignPoint;return"minOverlayWidthMatchTrigger"in u?$t:!dn},xn=function(){var $t=u.openClassName;return $t!==void 0?$t:"".concat(U,"-open")},Cn=function(){var $t=u.children,dn=$t.props?$t.props:{},Rn=s()(dn.className,xn());return bt&&$t?r.cloneElement($t,{className:Rn}):$t},Tn=st;return!Tn&&At.indexOf("contextMenu")!==-1&&(Tn=["click"]),r.createElement(Ni,le(le({builtinPlacements:Ue},Pt),{},{prefixCls:U,ref:nt,popupClassName:s()(mt,se({},"".concat(U,"-show-arrow"),T)),popupStyle:It,action:At,showAction:Ve,hideAction:Tn||[],popupPlacement:De,popupAlign:ne,popupTransitionName:A,popupAnimation:oe,popupVisible:bt,stretch:Zt()?"minWidth":"",popup:kt(),onPopupVisibleChange:yt,onPopupClick:Xe,getPopupContainer:He}),Cn())}var Di=r.forwardRef(Ro),ic=Di,Al=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],oi=void 0;function Aa(u,p){var g=u.prefixCls,T=u.invalidate,R=u.item,U=u.renderItem,A=u.responsive,oe=u.responsiveDisabled,ne=u.registerSize,fe=u.itemKey,De=u.className,ke=u.style,Ue=u.children,He=u.display,Ve=u.order,st=u.component,mt=st===void 0?"div":st,It=ge(u,Al),ct=A&&!He;function ft(Xt){ne(fe,Xt)}r.useEffect(function(){return function(){ft(null)}},[]);var At=U&&R!==oi?U(R):Ue,zt;T||(zt={opacity:ct?0:1,height:ct?0:oi,overflowY:ct?"hidden":oi,order:A?Ve:oi,pointerEvents:ct?"none":oi,position:ct?"absolute":oi});var Pt={};ct&&(Pt["aria-hidden"]=!0);var Ot=r.createElement(mt,Y({className:s()(!T&&g,De),style:le(le({},zt),ke)},Pt,It,{ref:p}),At);return A&&(Ot=r.createElement(Bs,{onResize:function(qe){var Vt=qe.offsetWidth;ft(Vt)},disabled:oe},Ot)),Ot}var va=r.forwardRef(Aa);va.displayName="Item";var or=va;function qa(){var u=_({}),p=P(u,2),g=p[1],T=(0,r.useRef)([]),R=0,U=0;function A(oe){var ne=R;R+=1,T.current.length<ne+1&&(T.current[ne]=oe);var fe=T.current[ne];function De(ke){T.current[ne]=typeof ke=="function"?ke(T.current[ne]):ke,ut.cancel(U),U=ut(function(){g({},!0)})}return[fe,De]}return A}var sc=["component"],uc=["className"],Ml=["className"],Pl=function(p,g){var T=r.useContext(No);if(!T){var R=p.component,U=R===void 0?"div":R,A=ge(p,sc);return r.createElement(U,Y({},A,{ref:g}))}var oe=T.className,ne=ge(T,uc),fe=p.className,De=ge(p,Ml);return r.createElement(No.Provider,{value:null},r.createElement(or,Y({ref:g,className:s()(oe,fe)},ne,De)))},Rl=r.forwardRef(Pl);Rl.displayName="RawItem";var $u=Rl,lc=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],No=r.createContext(null),Vu="responsive",cc="invalidate";function eo(u){return"+ ".concat(u.length," ...")}function Gu(u,p){var g=u.prefixCls,T=g===void 0?"rc-overflow":g,R=u.data,U=R===void 0?[]:R,A=u.renderItem,oe=u.renderRawItem,ne=u.itemKey,fe=u.itemWidth,De=fe===void 0?10:fe,ke=u.ssr,Ue=u.style,He=u.className,Ve=u.maxCount,st=u.renderRest,mt=u.renderRawRest,It=u.suffix,ct=u.component,ft=ct===void 0?"div":ct,At=u.itemComponent,zt=u.onVisibleChange,Pt=ge(u,lc),Ot=qa(),Xt=ke==="full",qe=Ot(null),Vt=P(qe,2),bt=Vt[0],nt=Vt[1],$e=bt||0,Xe=Ot(new Map),yt=P(Xe,2),Lt=yt[0],kt=yt[1],Zt=Ot(0),xn=P(Zt,2),Cn=xn[0],Tn=xn[1],jt=Ot(0),$t=P(jt,2),dn=$t[0],Rn=$t[1],Qn=Ot(0),Jn=P(Qn,2),nr=Jn[0],Hn=Jn[1],mr=(0,r.useState)(null),cr=P(mr,2),wr=cr[0],An=cr[1],Cr=(0,r.useState)(null),fr=P(Cr,2),bn=fr[0],Nn=fr[1],In=r.useMemo(function(){return bn===null&&Xt?Number.MAX_SAFE_INTEGER:bn||0},[bn,bt]),on=(0,r.useState)(!1),_n=P(on,2),zn=_n[0],Zn=_n[1],qn="".concat(T,"-item"),ua=Math.max(Cn,dn),ar=Ve===Vu,rr=U.length&&ar,ya=Ve===cc,Kr=rr||typeof Ve=="number"&&U.length>Ve,Or=(0,r.useMemo)(function(){var un=U;return rr?bt===null&&Xt?un=U:un=U.slice(0,Math.min(U.length,$e/De)):typeof Ve=="number"&&(un=U.slice(0,Ve)),un},[U,De,bt,Ve,rr]),jr=(0,r.useMemo)(function(){return rr?U.slice(In+1):U.slice(Or.length)},[U,Or,rr,In]),sr=(0,r.useCallback)(function(un,cn){var hr;return typeof ne=="function"?ne(un):(hr=ne&&(un==null?void 0:un[ne]))!==null&&hr!==void 0?hr:cn},[ne]),Ha=(0,r.useCallback)(A||function(un){return un},[A]);function dr(un,cn,hr){bn===un&&(cn===void 0||cn===wr)||(Nn(un),hr||(Zn(un<U.length-1),zt==null||zt(un)),cn!==void 0&&An(cn))}function Ar(un,cn){nt(cn.clientWidth)}function Mr(un,cn){kt(function(hr){var ra=new Map(hr);return cn===null?ra.delete(un):ra.set(un,cn),ra})}function Br(un,cn){Rn(cn),Tn(dn)}function la(un,cn){Hn(cn)}function fo(un){return Lt.get(sr(Or[un],un))}Le(function(){if($e&&ua&&Or){var un=nr,cn=Or.length,hr=cn-1;if(!cn){dr(0,null);return}for(var ra=0;ra<cn;ra+=1){var Pa=fo(ra);if(Xt&&(Pa=Pa||0),Pa===void 0){dr(ra-1,void 0,!0);break}if(un+=Pa,hr===0&&un<=$e||ra===hr-1&&un+fo(hr)<=$e){dr(hr,null);break}else if(un+ua>$e){dr(ra-1,un-Pa-nr+dn);break}}It&&fo(0)+nr>$e&&An(null)}},[$e,Lt,dn,nr,sr,Or]);var ga=zn&&!!jr.length,ro={};wr!==null&&rr&&(ro={position:"absolute",left:wr,top:0});var Ma={prefixCls:qn,responsive:rr,component:At,invalidate:ya},Do=oe?function(un,cn){var hr=sr(un,cn);return r.createElement(No.Provider,{key:hr,value:le(le({},Ma),{},{order:cn,item:un,itemKey:hr,registerSize:Mr,display:cn<=In})},oe(un,cn))}:function(un,cn){var hr=sr(un,cn);return r.createElement(or,Y({},Ma,{order:cn,key:hr,item:un,renderItem:Ha,itemKey:hr,registerSize:Mr,display:cn<=In}))},ta,$a={order:ga?In:Number.MAX_SAFE_INTEGER,className:"".concat(qn,"-rest"),registerSize:Br,display:ga};if(mt)mt&&(ta=r.createElement(No.Provider,{value:le(le({},Ma),$a)},mt(jr)));else{var xr=st||eo;ta=r.createElement(or,Y({},Ma,$a),typeof xr=="function"?xr(jr):xr)}var na=r.createElement(ft,Y({className:s()(!ya&&T,He),style:Ue,ref:p},Pt),Or.map(Do),Kr?ta:null,It&&r.createElement(or,Y({},Ma,{responsive:ar,responsiveDisabled:!rr,order:In,className:"".concat(qn,"-suffix"),registerSize:la,display:!0,style:ro}),It));return ar&&(na=r.createElement(Bs,{onResize:Ar,disabled:!rr},na)),na}var ii=r.forwardRef(Gu);ii.displayName="Overflow",ii.Item=$u,ii.RESPONSIVE=Vu,ii.INVALIDATE=cc;var vs=ii,ki=vs,Wu=r.createContext(null);function nu(u,p){return u===void 0?null:"".concat(u,"-").concat(p)}function Ku(u){var p=r.useContext(Wu);return nu(p,u)}var ms=["children","locked"],Sr=r.createContext(null);function Fi(u,p){var g=le({},u);return Object.keys(p).forEach(function(T){var R=p[T];R!==void 0&&(g[T]=R)}),g}function ji(u){var p=u.children,g=u.locked,T=ge(u,ms),R=r.useContext(Sr),U=dt(function(){return Fi(R,T)},[R,T],function(A,oe){return!g&&(A[0]!==oe[0]||!Ri(A[1],oe[1],!0))});return r.createElement(Sr.Provider,{value:U},p)}var fc=[],uo=r.createContext(null);function to(){return r.useContext(uo)}var Zu=r.createContext(fc);function hs(u){var p=r.useContext(Zu);return r.useMemo(function(){return u!==void 0?[].concat(Gr(p),[u]):p},[p,u])}var lo=r.createContext(null),si=r.createContext({}),ys=si,Yu=Kn.LEFT,gs=Kn.RIGHT,Xu=Kn.UP,ru=Kn.DOWN,xs=Kn.ENTER,au=Kn.ESC,bs=Kn.HOME,Is=Kn.END,Nl=[Xu,ru,Yu,gs];function Ll(u,p,g,T){var R,U,A,oe,ne="prev",fe="next",De="children",ke="parent";if(u==="inline"&&T===xs)return{inlineTrigger:!0};var Ue=(R={},se(R,Xu,ne),se(R,ru,fe),R),He=(U={},se(U,Yu,g?fe:ne),se(U,gs,g?ne:fe),se(U,ru,De),se(U,xs,De),U),Ve=(A={},se(A,Xu,ne),se(A,ru,fe),se(A,xs,De),se(A,au,ke),se(A,Yu,g?De:ke),se(A,gs,g?ke:De),A),st={inline:Ue,horizontal:He,vertical:Ve,inlineSub:Ue,horizontalSub:Ve,verticalSub:Ve},mt=(oe=st["".concat(u).concat(p?"":"Sub")])===null||oe===void 0?void 0:oe[T];switch(mt){case ne:return{offset:-1,sibling:!0};case fe:return{offset:1,sibling:!0};case ke:return{offset:-1,sibling:!1};case De:return{offset:1,sibling:!1};default:return null}}function ou(u){for(var p=u;p;){if(p.getAttribute("data-menu-list"))return p;p=p.parentElement}return null}function Qu(u,p){for(var g=u||document.activeElement;g;){if(p.has(g))return g;g=g.parentElement}return null}function Dl(u,p){var g=Cl(u,!0);return g.filter(function(T){return p.has(T)})}function kl(u,p,g){var T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!u)return null;var R=Dl(u,p),U=R.length,A=R.findIndex(function(oe){return g===oe});return T<0?A===-1?A=U-1:A-=1:T>0&&(A+=1),A=(A+U)%U,R[A]}function Es(u,p,g,T,R,U,A,oe,ne,fe){var De=r.useRef(),ke=r.useRef();ke.current=p;var Ue=function(){ut.cancel(De.current)};return r.useEffect(function(){return function(){Ue()}},[]),function(He){var Ve=He.which;if([].concat(Nl,[xs,au,bs,Is]).includes(Ve)){var st,mt,It,ct=function(){st=new Set,mt=new Map,It=new Map;var yt=U();return yt.forEach(function(Lt){var kt=document.querySelector("[data-menu-id='".concat(nu(T,Lt),"']"));kt&&(st.add(kt),It.set(kt,Lt),mt.set(Lt,kt))}),st};ct();var ft=mt.get(p),At=Qu(ft,st),zt=It.get(At),Pt=Ll(u,A(zt,!0).length===1,g,Ve);if(!Pt&&Ve!==bs&&Ve!==Is)return;(Nl.includes(Ve)||[bs,Is].includes(Ve))&&He.preventDefault();var Ot=function(yt){if(yt){var Lt=yt,kt=yt.querySelector("a");kt!=null&&kt.getAttribute("href")&&(Lt=kt);var Zt=It.get(yt);oe(Zt),Ue(),De.current=ut(function(){ke.current===Zt&&Lt.focus()})}};if([bs,Is].includes(Ve)||Pt.sibling||!At){var Xt;!At||u==="inline"?Xt=R.current:Xt=ou(At);var qe,Vt=Dl(Xt,st);Ve===bs?qe=Vt[0]:Ve===Is?qe=Vt[Vt.length-1]:qe=kl(Xt,st,At,Pt.offset),Ot(qe)}else if(Pt.inlineTrigger)ne(zt);else if(Pt.offset>0)ne(zt,!0),Ue(),De.current=ut(function(){ct();var Xe=At.getAttribute("aria-controls"),yt=document.getElementById(Xe),Lt=kl(yt,st);Ot(Lt)},5);else if(Pt.offset<0){var bt=A(zt,!0),nt=bt[bt.length-2],$e=mt.get(nt);ne(nt,!1),Ot($e)}}fe==null||fe(He)}}function dc(u){Promise.resolve().then(u)}var Bi="__RC_UTIL_PATH_SPLIT__",no=function(p){return p.join(Bi)},iu=function(p){return p.split(Bi)},_i="rc-menu-more";function zi(){var u=r.useState({}),p=P(u,2),g=p[1],T=(0,r.useRef)(new Map),R=(0,r.useRef)(new Map),U=r.useState([]),A=P(U,2),oe=A[0],ne=A[1],fe=(0,r.useRef)(0),De=(0,r.useRef)(!1),ke=function(){De.current||g({})},Ue=(0,r.useCallback)(function(ft,At){var zt=no(At);R.current.set(zt,ft),T.current.set(ft,zt),fe.current+=1;var Pt=fe.current;dc(function(){Pt===fe.current&&ke()})},[]),He=(0,r.useCallback)(function(ft,At){var zt=no(At);R.current.delete(zt),T.current.delete(ft)},[]),Ve=(0,r.useCallback)(function(ft){ne(ft)},[]),st=(0,r.useCallback)(function(ft,At){var zt=T.current.get(ft)||"",Pt=iu(zt);return At&&oe.includes(Pt[0])&&Pt.unshift(_i),Pt},[oe]),mt=(0,r.useCallback)(function(ft,At){return ft.some(function(zt){var Pt=st(zt,!0);return Pt.includes(At)})},[st]),It=function(){var At=Gr(T.current.keys());return oe.length&&At.push(_i),At},ct=(0,r.useCallback)(function(ft){var At="".concat(T.current.get(ft)).concat(Bi),zt=new Set;return Gr(R.current.keys()).forEach(function(Pt){Pt.startsWith(At)&&zt.add(R.current.get(Pt))}),zt},[]);return r.useEffect(function(){return function(){De.current=!0}},[]),{registerPath:Ue,unregisterPath:He,refreshOverflowKeys:Ve,isSubPathKey:mt,getKeyPath:st,getKeys:It,getSubPathKeys:ct}}function ui(u){var p=r.useRef(u);p.current=u;var g=r.useCallback(function(){for(var T,R=arguments.length,U=new Array(R),A=0;A<R;A++)U[A]=arguments[A];return(T=p.current)===null||T===void 0?void 0:T.call.apply(T,[p].concat(U))},[]);return u?g:void 0}var Ss=Math.random().toFixed(5).toString().slice(2),Fl=0;function jl(u){var p=me(u,{value:u}),g=P(p,2),T=g[0],R=g[1];return r.useEffect(function(){Fl+=1;var U="".concat(Ss,"-").concat(Fl);R("rc-menu-uuid-".concat(U))},[]),T}function vr(u,p){var g=le({},u);return Array.isArray(p)&&p.forEach(function(T){delete g[T]}),g}function su(u,p,g,T){var R=r.useContext(Sr),U=R.activeKey,A=R.onActive,oe=R.onInactive,ne={active:U===u};return p||(ne.onMouseEnter=function(fe){g==null||g({key:u,domEvent:fe}),A(u)},ne.onMouseLeave=function(fe){T==null||T({key:u,domEvent:fe}),oe(u)}),ne}var Bl=["item"];function ws(u){var p=u.item,g=ge(u,Bl);return Object.defineProperty(g,"item",{get:function(){return xi(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),p}}),g}function uu(u){var p=u.icon,g=u.props,T=u.children,R;return typeof p=="function"?R=r.createElement(p,le({},g)):R=p,R||T||null}function Ju(u){var p=r.useContext(Sr),g=p.mode,T=p.rtl,R=p.inlineIndent;if(g!=="inline")return null;var U=u;return T?{paddingRight:U*R}:{paddingLeft:U*R}}var Ui=["title","attribute","elementRef"],gr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Fr=["active"],Vr=function(u){ho(g,u);var p=oa(g);function g(){return zr(this,g),p.apply(this,arguments)}return mo(g,[{key:"render",value:function(){var R=this.props,U=R.title,A=R.attribute,oe=R.elementRef,ne=ge(R,Ui),fe=vr(ne,["eventKey"]);return xi(!A,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(ki.Item,Y({},A,{title:typeof U=="string"?U:void 0},fe,{ref:oe}))}}]),g}(r.Component),qu=function(p){var g,T=p.style,R=p.className,U=p.eventKey,A=p.warnKey,oe=p.disabled,ne=p.itemIcon,fe=p.children,De=p.role,ke=p.onMouseEnter,Ue=p.onMouseLeave,He=p.onClick,Ve=p.onKeyDown,st=p.onFocus,mt=ge(p,gr),It=Ku(U),ct=r.useContext(Sr),ft=ct.prefixCls,At=ct.onItemClick,zt=ct.disabled,Pt=ct.overflowDisabled,Ot=ct.itemIcon,Xt=ct.selectedKeys,qe=ct.onActive,Vt=r.useContext(ys),bt=Vt._internalRenderMenuItem,nt="".concat(ft,"-item"),$e=r.useRef(),Xe=r.useRef(),yt=zt||oe,Lt=hs(U),kt=function(mr){return{key:U,keyPath:Gr(Lt).reverse(),item:$e.current,domEvent:mr}},Zt=ne||Ot,xn=su(U,yt,ke,Ue),Cn=xn.active,Tn=ge(xn,Fr),jt=Xt.includes(U),$t=Ju(Lt.length),dn=function(mr){if(!yt){var cr=kt(mr);He==null||He(ws(cr)),At(cr)}},Rn=function(mr){if(Ve==null||Ve(mr),mr.which===Kn.ENTER){var cr=kt(mr);He==null||He(ws(cr)),At(cr)}},Qn=function(mr){qe(U),st==null||st(mr)},Jn={};p.role==="option"&&(Jn["aria-selected"]=jt);var nr=r.createElement(Vr,Y({ref:$e,elementRef:Xe,role:De===null?"none":De||"menuitem",tabIndex:oe?null:-1,"data-menu-id":Pt&&It?null:It},mt,Tn,Jn,{component:"li","aria-disabled":oe,style:le(le({},$t),T),className:s()(nt,(g={},se(g,"".concat(nt,"-active"),Cn),se(g,"".concat(nt,"-selected"),jt),se(g,"".concat(nt,"-disabled"),yt),g),R),onClick:dn,onKeyDown:Rn,onFocus:Qn}),fe,r.createElement(uu,{props:le(le({},p),{},{isSelected:jt}),icon:Zt}));return bt&&(nr=bt(nr,p,{selected:jt})),nr};function lu(u){var p=u.eventKey,g=to(),T=hs(p);return r.useEffect(function(){if(g)return g.registerPath(p,T),function(){g.unregisterPath(p,T)}},[T]),g?null:r.createElement(qu,u)}var li=lu,Gc=["className","children"],ea=function(p,g){var T=p.className,R=p.children,U=ge(p,Gc),A=r.useContext(Sr),oe=A.prefixCls,ne=A.mode,fe=A.rtl;return r.createElement("ul",Y({className:s()(oe,fe&&"".concat(oe,"-rtl"),"".concat(oe,"-sub"),"".concat(oe,"-").concat(ne==="inline"?"inline":"vertical"),T),role:"menu"},U,{"data-menu-list":!0,ref:g}),R)},el=r.forwardRef(ea);el.displayName="SubMenuList";var tl=el,_l=["label","children","key","type"];function Ua(u,p){return La(u).map(function(g,T){if(r.isValidElement(g)){var R,U,A=g.key,oe=(R=(U=g.props)===null||U===void 0?void 0:U.eventKey)!==null&&R!==void 0?R:A,ne=oe==null;ne&&(oe="tmp_key-".concat([].concat(Gr(p),[T]).join("-")));var fe={key:oe,eventKey:oe};return r.cloneElement(g,fe)}return g})}function ma(u){return(u||[]).map(function(p,g){if(p&&re(p)==="object"){var T=p,R=T.label,U=T.children,A=T.key,oe=T.type,ne=ge(T,_l),fe=A!=null?A:"tmp-".concat(g);return U||oe==="group"?oe==="group"?r.createElement($l,Y({key:fe},ne,{title:R}),ma(U)):r.createElement(nl,Y({key:fe},ne,{title:R}),ma(U)):oe==="divider"?r.createElement(al,Y({key:fe},ne)):r.createElement(li,Y({key:fe},ne),R)}return null}).filter(function(p){return p})}function cu(u,p,g){var T=u;return p&&(T=ma(p)),Ua(T,g)}var co={adjustX:1,adjustY:1},zl={topLeft:{points:["bl","tl"],overflow:co,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:co,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:co,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:co,offset:[4,0]}},pc={topLeft:{points:["bl","tl"],overflow:co,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:co,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:co,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:co,offset:[4,0]}},Wc=null;function Ul(u,p,g){if(p)return p;if(g)return g[u]||g.other}var vc={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function mc(u){var p=u.prefixCls,g=u.visible,T=u.children,R=u.popup,U=u.popupClassName,A=u.popupOffset,oe=u.disabled,ne=u.mode,fe=u.onVisibleChange,De=r.useContext(Sr),ke=De.getPopupContainer,Ue=De.rtl,He=De.subMenuOpenDelay,Ve=De.subMenuCloseDelay,st=De.builtinPlacements,mt=De.triggerSubMenuAction,It=De.forceSubMenuRender,ct=De.rootClassName,ft=De.motion,At=De.defaultMotions,zt=r.useState(!1),Pt=P(zt,2),Ot=Pt[0],Xt=Pt[1],qe=le(Ue?le({},pc):le({},zl),st),Vt=vc[ne],bt=Ul(ne,ft,At),nt=r.useRef(bt);ne!=="inline"&&(nt.current=bt);var $e=le(le({},nt.current),{},{leavedClassName:"".concat(p,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Xe=r.useRef();return r.useEffect(function(){return Xe.current=ut(function(){Xt(g)}),function(){ut.cancel(Xe.current)}},[g]),r.createElement(Ni,{prefixCls:p,popupClassName:s()("".concat(p,"-popup"),se({},"".concat(p,"-rtl"),Ue),U,ct),stretch:ne==="horizontal"?"minWidth":null,getPopupContainer:ke,builtinPlacements:qe,popupPlacement:Vt,popupVisible:Ot,popup:R,popupAlign:A&&{offset:A},action:oe?[]:[mt],mouseEnterDelay:He,mouseLeaveDelay:Ve,onPopupVisibleChange:fe,forceRender:It,popupMotion:$e},T)}function hc(u){var p=u.id,g=u.open,T=u.keyPath,R=u.children,U="inline",A=r.useContext(Sr),oe=A.prefixCls,ne=A.forceSubMenuRender,fe=A.motion,De=A.defaultMotions,ke=A.mode,Ue=r.useRef(!1);Ue.current=ke===U;var He=r.useState(!Ue.current),Ve=P(He,2),st=Ve[0],mt=Ve[1],It=Ue.current?g:!1;r.useEffect(function(){Ue.current&&mt(!1)},[ke]);var ct=le({},Ul(U,fe,De));T.length>1&&(ct.motionAppear=!1);var ft=ct.onVisibleChanged;return ct.onVisibleChanged=function(At){return!Ue.current&&!At&&mt(!0),ft==null?void 0:ft(At)},st?null:r.createElement(ji,{mode:U,locked:!Ue.current},r.createElement(Bo,Y({visible:It},ct,{forceRender:ne,removeOnLeave:!1,leavedClassName:"".concat(oe,"-hidden")}),function(At){var zt=At.className,Pt=At.style;return r.createElement(tl,{id:p,className:zt,style:Pt},R)}))}var yc=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],gc=["active"],fu=function(p){var g,T=p.style,R=p.className,U=p.title,A=p.eventKey,oe=p.warnKey,ne=p.disabled,fe=p.internalPopupClose,De=p.children,ke=p.itemIcon,Ue=p.expandIcon,He=p.popupClassName,Ve=p.popupOffset,st=p.onClick,mt=p.onMouseEnter,It=p.onMouseLeave,ct=p.onTitleClick,ft=p.onTitleMouseEnter,At=p.onTitleMouseLeave,zt=ge(p,yc),Pt=Ku(A),Ot=r.useContext(Sr),Xt=Ot.prefixCls,qe=Ot.mode,Vt=Ot.openKeys,bt=Ot.disabled,nt=Ot.overflowDisabled,$e=Ot.activeKey,Xe=Ot.selectedKeys,yt=Ot.itemIcon,Lt=Ot.expandIcon,kt=Ot.onItemClick,Zt=Ot.onOpenChange,xn=Ot.onActive,Cn=r.useContext(ys),Tn=Cn._internalRenderSubMenuItem,jt=r.useContext(lo),$t=jt.isSubPathKey,dn=hs(),Rn="".concat(Xt,"-submenu"),Qn=bt||ne,Jn=r.useRef(),nr=r.useRef(),Hn=ke||yt,mr=Ue||Lt,cr=Vt.includes(A),wr=!nt&&cr,An=$t(Xe,A),Cr=su(A,Qn,ft,At),fr=Cr.active,bn=ge(Cr,gc),Nn=r.useState(!1),In=P(Nn,2),on=In[0],_n=In[1],zn=function(Br){Qn||_n(Br)},Zn=function(Br){zn(!0),mt==null||mt({key:A,domEvent:Br})},qn=function(Br){zn(!1),It==null||It({key:A,domEvent:Br})},ua=r.useMemo(function(){return fr||(qe!=="inline"?on||$t([$e],A):!1)},[qe,fr,$e,on,A,$t]),ar=Ju(dn.length),rr=function(Br){Qn||(ct==null||ct({key:A,domEvent:Br}),qe==="inline"&&Zt(A,!cr))},ya=ui(function(Mr){st==null||st(ws(Mr)),kt(Mr)}),Kr=function(Br){qe!=="inline"&&Zt(A,Br)},Or=function(){xn(A)},jr=Pt&&"".concat(Pt,"-popup"),sr=r.createElement("div",Y({role:"menuitem",style:ar,className:"".concat(Rn,"-title"),tabIndex:Qn?null:-1,ref:Jn,title:typeof U=="string"?U:null,"data-menu-id":nt&&Pt?null:Pt,"aria-expanded":wr,"aria-haspopup":!0,"aria-controls":jr,"aria-disabled":Qn,onClick:rr,onFocus:Or},bn),U,r.createElement(uu,{icon:qe!=="horizontal"?mr:null,props:le(le({},p),{},{isOpen:wr,isSubMenu:!0})},r.createElement("i",{className:"".concat(Rn,"-arrow")}))),Ha=r.useRef(qe);if(qe!=="inline"&&dn.length>1?Ha.current="vertical":Ha.current=qe,!nt){var dr=Ha.current;sr=r.createElement(mc,{mode:dr,prefixCls:Rn,visible:!fe&&wr&&qe!=="inline",popupClassName:He,popupOffset:Ve,popup:r.createElement(ji,{mode:dr==="horizontal"?"vertical":dr},r.createElement(tl,{id:jr,ref:nr},De)),disabled:Qn,onVisibleChange:Kr},sr)}var Ar=r.createElement(ki.Item,Y({role:"none"},zt,{component:"li",style:T,className:s()(Rn,"".concat(Rn,"-").concat(qe),R,(g={},se(g,"".concat(Rn,"-open"),wr),se(g,"".concat(Rn,"-active"),ua),se(g,"".concat(Rn,"-selected"),An),se(g,"".concat(Rn,"-disabled"),Qn),g)),onMouseEnter:Zn,onMouseLeave:qn}),sr,!nt&&r.createElement(hc,{id:jr,open:wr,keyPath:dn},De));return Tn&&(Ar=Tn(Ar,p,{selected:An,active:ua,open:wr,disabled:Qn})),r.createElement(ji,{onItemClick:ya,mode:qe==="horizontal"?"vertical":qe,itemIcon:Hn,expandIcon:mr},Ar)};function nl(u){var p=u.eventKey,g=u.children,T=hs(p),R=Ua(g,T),U=to();r.useEffect(function(){if(U)return U.registerPath(p,T),function(){U.unregisterPath(p,T)}},[T]);var A;return U?A=R:A=r.createElement(fu,u,R),r.createElement(Zu.Provider,{value:T},A)}var rl=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Lo=[],xc=r.forwardRef(function(u,p){var g,T,R=u,U=R.prefixCls,A=U===void 0?"rc-menu":U,oe=R.rootClassName,ne=R.style,fe=R.className,De=R.tabIndex,ke=De===void 0?0:De,Ue=R.items,He=R.children,Ve=R.direction,st=R.id,mt=R.mode,It=mt===void 0?"vertical":mt,ct=R.inlineCollapsed,ft=R.disabled,At=R.disabledOverflow,zt=R.subMenuOpenDelay,Pt=zt===void 0?.1:zt,Ot=R.subMenuCloseDelay,Xt=Ot===void 0?.1:Ot,qe=R.forceSubMenuRender,Vt=R.defaultOpenKeys,bt=R.openKeys,nt=R.activeKey,$e=R.defaultActiveFirst,Xe=R.selectable,yt=Xe===void 0?!0:Xe,Lt=R.multiple,kt=Lt===void 0?!1:Lt,Zt=R.defaultSelectedKeys,xn=R.selectedKeys,Cn=R.onSelect,Tn=R.onDeselect,jt=R.inlineIndent,$t=jt===void 0?24:jt,dn=R.motion,Rn=R.defaultMotions,Qn=R.triggerSubMenuAction,Jn=Qn===void 0?"hover":Qn,nr=R.builtinPlacements,Hn=R.itemIcon,mr=R.expandIcon,cr=R.overflowedIndicator,wr=cr===void 0?"...":cr,An=R.overflowedIndicatorPopupClassName,Cr=R.getPopupContainer,fr=R.onClick,bn=R.onOpenChange,Nn=R.onKeyDown,In=R.openAnimation,on=R.openTransitionName,_n=R._internalRenderMenuItem,zn=R._internalRenderSubMenuItem,Zn=ge(R,rl),qn=r.useMemo(function(){return cu(He,Ue,Lo)},[He,Ue]),ua=r.useState(!1),ar=P(ua,2),rr=ar[0],ya=ar[1],Kr=r.useRef(),Or=jl(st),jr=Ve==="rtl",sr=me(Vt,{value:bt,postState:function(er){return er||Lo}}),Ha=P(sr,2),dr=Ha[0],Ar=Ha[1],Mr=function(er){var yr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function fa(){Ar(er),bn==null||bn(er)}yr?(0,Re.flushSync)(fa):fa()},Br=r.useState(dr),la=P(Br,2),fo=la[0],ga=la[1],ro=r.useRef(!1),Ma=r.useMemo(function(){return(It==="inline"||It==="vertical")&&ct?["vertical",ct]:[It,!1]},[It,ct]),Do=P(Ma,2),ta=Do[0],$a=Do[1],xr=ta==="inline",na=r.useState(ta),un=P(na,2),cn=un[0],hr=un[1],ra=r.useState($a),Pa=P(ra,2),Kl=Pa[0],po=Pa[1];r.useEffect(function(){hr(ta),po($a),ro.current&&(xr?Ar(fo):Mr(Lo))},[ta,$a]);var ao=r.useState(0),Hi=P(ao,2),Ra=Hi[0],As=Hi[1],ca=Ra>=qn.length-1||cn!=="horizontal"||At;r.useEffect(function(){xr&&ga(dr)},[dr]),r.useEffect(function(){return ro.current=!0,function(){ro.current=!1}},[]);var Va=zi(),$i=Va.registerPath,Vi=Va.unregisterPath,Gi=Va.refreshOverflowKeys,Yn=Va.isSubPathKey,Zr=Va.getKeyPath,Un=Va.getKeys,Nr=Va.getSubPathKeys,Lr=r.useMemo(function(){return{registerPath:$i,unregisterPath:Vi}},[$i,Vi]),Ga=r.useMemo(function(){return{isSubPathKey:Yn}},[Yn]);r.useEffect(function(){Gi(ca?Lo:qn.slice(Ra+1).map(function(Tr){return Tr.key}))},[Ra,ca]);var ci=me(nt||$e&&((g=qn[0])===null||g===void 0?void 0:g.key),{value:nt}),Zl=P(ci,2),ur=Zl[0],Yl=Zl[1],Bc=ui(function(Tr){Yl(Tr)}),qc=ui(function(){Yl(void 0)});(0,r.useImperativeHandle)(p,function(){return{list:Kr.current,focus:function(er){var yr,fa=ur!=null?ur:(yr=qn.find(function(zc){return!zc.props.disabled}))===null||yr===void 0?void 0:yr.key;if(fa){var xa,vo,di;(xa=Kr.current)===null||xa===void 0||(vo=xa.querySelector("li[data-menu-id='".concat(nu(Or,fa),"']")))===null||vo===void 0||(di=vo.focus)===null||di===void 0||di.call(vo,er)}}}});var ef=me(Zt||[],{value:xn,postState:function(er){return Array.isArray(er)?er:er==null?Lo:[er]}}),Xl=P(ef,2),mu=Xl[0],tf=Xl[1],Wa=function(er){if(yt){var yr=er.key,fa=mu.includes(yr),xa;kt?fa?xa=mu.filter(function(di){return di!==yr}):xa=[].concat(Gr(mu),[yr]):xa=[yr],tf(xa);var vo=le(le({},er),{},{selectedKeys:xa});fa?Tn==null||Tn(vo):Cn==null||Cn(vo)}!kt&&dr.length&&cn!=="inline"&&Mr(Lo)},Ql=ui(function(Tr){fr==null||fr(ws(Tr)),Wa(Tr)}),_c=ui(function(Tr,er){var yr=dr.filter(function(xa){return xa!==Tr});if(er)yr.push(Tr);else if(cn!=="inline"){var fa=Nr(Tr);yr=yr.filter(function(xa){return!fa.has(xa)})}Ri(dr,yr,!0)||Mr(yr,!0)}),fi=ui(Cr),sl=function(er,yr){var fa=yr!=null?yr:!dr.includes(er);_c(er,fa)},Wi=Es(cn,ur,jr,Or,Kr,Un,Zr,Yl,sl,Nn);r.useEffect(function(){ya(!0)},[]);var ul=r.useMemo(function(){return{_internalRenderMenuItem:_n,_internalRenderSubMenuItem:zn}},[_n,zn]),Jl=cn!=="horizontal"||At?qn:qn.map(function(Tr,er){return r.createElement(ji,{key:Tr.key,overflowDisabled:er>Ra},Tr)}),ql=r.createElement(ki,Y({id:st,ref:Kr,prefixCls:"".concat(A,"-overflow"),component:"ul",itemComponent:li,className:s()(A,"".concat(A,"-root"),"".concat(A,"-").concat(cn),fe,(T={},se(T,"".concat(A,"-inline-collapsed"),Kl),se(T,"".concat(A,"-rtl"),jr),T),oe),dir:Ve,style:ne,role:"menu",tabIndex:ke,data:Jl,renderRawItem:function(er){return er},renderRawRest:function(er){var yr=er.length,fa=yr?qn.slice(-yr):null;return r.createElement(nl,{eventKey:_i,title:wr,disabled:ca,internalPopupClose:yr===0,popupClassName:An},fa)},maxCount:cn!=="horizontal"||At?ki.INVALIDATE:ki.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(er){As(er)},onKeyDown:Wi},Zn));return r.createElement(ys.Provider,{value:ul},r.createElement(Wu.Provider,{value:Or},r.createElement(ji,{prefixCls:A,rootClassName:oe,mode:cn,openKeys:dr,rtl:jr,disabled:ft,motion:rr?dn:null,defaultMotions:rr?Rn:null,activeKey:ur,onActive:Bc,onInactive:qc,selectedKeys:mu,inlineIndent:$t,subMenuOpenDelay:Pt,subMenuCloseDelay:Xt,forceSubMenuRender:qe,builtinPlacements:nr,triggerSubMenuAction:Jn,getPopupContainer:fi,itemIcon:Hn,expandIcon:mr,onItemClick:Ql,onOpenChange:_c},r.createElement(lo.Provider,{value:Ga},ql),r.createElement("div",{style:{display:"none"},"aria-hidden":!0},r.createElement(uo.Provider,{value:Lr},qn)))))}),Hl=xc,bc=["className","title","eventKey","children"],Ic=["children"],Ec=function(p){var g=p.className,T=p.title,R=p.eventKey,U=p.children,A=ge(p,bc),oe=r.useContext(Sr),ne=oe.prefixCls,fe="".concat(ne,"-item-group");return r.createElement("li",Y({role:"presentation"},A,{onClick:function(ke){return ke.stopPropagation()},className:s()(fe,g)}),r.createElement("div",{role:"presentation",className:"".concat(fe,"-title"),title:typeof T=="string"?T:void 0},T),r.createElement("ul",{role:"group",className:"".concat(fe,"-list")},U))};function $l(u){var p=u.children,g=ge(u,Ic),T=hs(g.eventKey),R=Ua(p,T),U=to();return U?R:r.createElement(Ec,vr(g,["warnKey"]),R)}function al(u){var p=u.className,g=u.style,T=r.useContext(Sr),R=T.prefixCls,U=to();return U?null:r.createElement("li",{className:s()("".concat(R,"-item-divider"),p),style:g})}var Cs=Hl;Cs.Item=li,Cs.SubMenu=nl,Cs.ItemGroup=$l,Cs.Divider=al;var Sc=Cs;function wc(u,p){var g=u.prefixCls,T=u.id,R=u.tabs,U=u.locale,A=u.mobile,oe=u.moreIcon,ne=oe===void 0?"More":oe,fe=u.moreTransitionName,De=u.style,ke=u.className,Ue=u.editable,He=u.tabBarGutter,Ve=u.rtl,st=u.removeAriaLabel,mt=u.onTabClick,It=u.getPopupContainer,ct=u.popupClassName,ft=(0,r.useState)(!1),At=P(ft,2),zt=At[0],Pt=At[1],Ot=(0,r.useState)(null),Xt=P(Ot,2),qe=Xt[0],Vt=Xt[1],bt="".concat(T,"-more-popup"),nt="".concat(g,"-dropdown"),$e=qe!==null?"".concat(bt,"-").concat(qe):null,Xe=U==null?void 0:U.dropdownAriaLabel;function yt(jt,$t){jt.preventDefault(),jt.stopPropagation(),Ue.onEdit("remove",{key:$t,event:jt})}var Lt=r.createElement(Sc,{onClick:function($t){var dn=$t.key,Rn=$t.domEvent;mt(dn,Rn),Pt(!1)},prefixCls:"".concat(nt,"-menu"),id:bt,tabIndex:-1,role:"listbox","aria-activedescendant":$e,selectedKeys:[qe],"aria-label":Xe!==void 0?Xe:"expanded dropdown"},R.map(function(jt){var $t=Ue&&jt.closable!==!1&&!jt.disabled;return r.createElement(li,{key:jt.key,id:"".concat(bt,"-").concat(jt.key),role:"option","aria-controls":T&&"".concat(T,"-panel-").concat(jt.key),disabled:jt.disabled},r.createElement("span",null,jt.label),$t&&r.createElement("button",{type:"button","aria-label":st||"remove",tabIndex:0,className:"".concat(nt,"-menu-item-remove"),onClick:function(Rn){Rn.stopPropagation(),yt(Rn,jt.key)}},jt.closeIcon||Ue.removeIcon||"\xD7"))}));function kt(jt){for(var $t=R.filter(function(nr){return!nr.disabled}),dn=$t.findIndex(function(nr){return nr.key===qe})||0,Rn=$t.length,Qn=0;Qn<Rn;Qn+=1){dn=(dn+jt+Rn)%Rn;var Jn=$t[dn];if(!Jn.disabled){Vt(Jn.key);return}}}function Zt(jt){var $t=jt.which;if(!zt){[Kn.DOWN,Kn.SPACE,Kn.ENTER].includes($t)&&(Pt(!0),jt.preventDefault());return}switch($t){case Kn.UP:kt(-1),jt.preventDefault();break;case Kn.DOWN:kt(1),jt.preventDefault();break;case Kn.ESC:Pt(!1);break;case Kn.SPACE:case Kn.ENTER:qe!==null&&mt(qe,jt);break}}(0,r.useEffect)(function(){var jt=document.getElementById($e);jt&&jt.scrollIntoView&&jt.scrollIntoView(!1)},[qe]),(0,r.useEffect)(function(){zt||Vt(null)},[zt]);var xn=se({},Ve?"marginRight":"marginLeft",He);R.length||(xn.visibility="hidden",xn.order=1);var Cn=s()(se({},"".concat(nt,"-rtl"),Ve)),Tn=A?null:r.createElement(ic,{prefixCls:nt,overlay:Lt,trigger:["hover"],visible:R.length?zt:!1,transitionName:fe,onVisibleChange:Pt,overlayClassName:s()(Cn,ct),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:It},r.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:xn,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":bt,id:"".concat(T,"-more"),"aria-expanded":zt,onKeyDown:Zt},ne));return r.createElement("div",{className:s()("".concat(g,"-nav-operations"),ke),style:De,ref:p},Tn,r.createElement(qt,{prefixCls:g,locale:U,editable:Ue}))}var Kc=r.memo(r.forwardRef(wc),function(u,p){return p.tabMoving});function Cc(u){var p,g=u.prefixCls,T=u.id,R=u.active,U=u.tab,A=U.key,oe=U.label,ne=U.disabled,fe=U.closeIcon,De=u.closable,ke=u.renderWrapper,Ue=u.removeAriaLabel,He=u.editable,Ve=u.onClick,st=u.onFocus,mt=u.style,It="".concat(g,"-tab"),ct=He&&De!==!1&&!ne;function ft(Pt){ne||Ve(Pt)}function At(Pt){Pt.preventDefault(),Pt.stopPropagation(),He.onEdit("remove",{key:A,event:Pt})}var zt=r.createElement("div",{key:A,"data-node-key":A,className:s()(It,(p={},se(p,"".concat(It,"-with-remove"),ct),se(p,"".concat(It,"-active"),R),se(p,"".concat(It,"-disabled"),ne),p)),style:mt,onClick:ft},r.createElement("div",{role:"tab","aria-selected":R,id:T&&"".concat(T,"-tab-").concat(A),className:"".concat(It,"-btn"),"aria-controls":T&&"".concat(T,"-panel-").concat(A),"aria-disabled":ne,tabIndex:ne?null:0,onClick:function(Ot){Ot.stopPropagation(),ft(Ot)},onKeyDown:function(Ot){[Kn.SPACE,Kn.ENTER].includes(Ot.which)&&(Ot.preventDefault(),ft(Ot))},onFocus:st},oe),ct&&r.createElement("button",{type:"button","aria-label":Ue||"remove",tabIndex:0,className:"".concat(It,"-remove"),onClick:function(Ot){Ot.stopPropagation(),At(Ot)}},fe||He.removeIcon||"\xD7"));return ke?ke(zt):zt}var Zc=Cc,Ts=function(p){var g=p.current||{},T=g.offsetWidth,R=T===void 0?0:T,U=g.offsetHeight,A=U===void 0?0:U;return[R,A]},du=function(p,g){return p[g?0:1]};function Tc(u,p){var g,T=r.useContext(Ia),R=T.prefixCls,U=T.tabs,A=u.className,oe=u.style,ne=u.id,fe=u.animated,De=u.activeKey,ke=u.rtl,Ue=u.extra,He=u.editable,Ve=u.locale,st=u.tabPosition,mt=u.tabBarGutter,It=u.children,ct=u.onTabClick,ft=u.onTabScroll,At=(0,r.useRef)(),zt=(0,r.useRef)(),Pt=(0,r.useRef)(),Ot=(0,r.useRef)(),Xt=(0,r.useRef)(),qe=(0,r.useRef)(),Vt=(0,r.useRef)(),bt=st==="top"||st==="bottom",nt=pl(0,function(Yn,Zr){bt&&ft&&ft({direction:Yn>Zr?"left":"right"})}),$e=P(nt,2),Xe=$e[0],yt=$e[1],Lt=pl(0,function(Yn,Zr){!bt&&ft&&ft({direction:Yn>Zr?"top":"bottom"})}),kt=P(Lt,2),Zt=kt[0],xn=kt[1],Cn=(0,r.useState)([0,0]),Tn=P(Cn,2),jt=Tn[0],$t=Tn[1],dn=(0,r.useState)([0,0]),Rn=P(dn,2),Qn=Rn[0],Jn=Rn[1],nr=(0,r.useState)([0,0]),Hn=P(nr,2),mr=Hn[0],cr=Hn[1],wr=(0,r.useState)([0,0]),An=P(wr,2),Cr=An[0],fr=An[1],bn=ac(new Map),Nn=P(bn,2),In=Nn[0],on=Nn[1],_n=rc(U,In,Qn[0]),zn=du(jt,bt),Zn=du(Qn,bt),qn=du(mr,bt),ua=du(Cr,bt),ar=zn<Zn+qn,rr=ar?zn-ua:zn-qn,ya="".concat(R,"-nav-operations-hidden"),Kr=0,Or=0;bt&&ke?(Kr=0,Or=Math.max(0,Zn-rr)):(Kr=Math.min(0,rr-Zn),Or=0);function jr(Yn){return Yn<Kr?Kr:Yn>Or?Or:Yn}var sr=(0,r.useRef)(),Ha=(0,r.useState)(),dr=P(Ha,2),Ar=dr[0],Mr=dr[1];function Br(){Mr(Date.now())}function la(){window.clearTimeout(sr.current)}vl(Ot,function(Yn,Zr){function Un(Nr,Lr){Nr(function(Ga){var ci=jr(Ga+Lr);return ci})}return zn>=Zn?!1:(bt?Un(yt,Yn):Un(xn,Zr),la(),Br(),!0)}),(0,r.useEffect)(function(){return la(),Ar&&(sr.current=window.setTimeout(function(){Mr(0)},100)),la},[Ar]);var fo=zs(_n,rr,bt?Xe:Zt,Zn,qn,ua,le(le({},u),{},{tabs:U})),ga=P(fo,2),ro=ga[0],Ma=ga[1],Do=function(){var Zr=arguments.length>0&&arguments[0]!==void 0?arguments[0]:De,Un=_n.get(Zr)||{width:0,height:0,left:0,right:0,top:0};if(bt){var Nr=Xe;ke?Un.right<Xe?Nr=Un.right:Un.right+Un.width>Xe+rr&&(Nr=Un.right+Un.width-rr):Un.left<-Xe?Nr=-Un.left:Un.left+Un.width>-Xe+rr&&(Nr=-(Un.left+Un.width-rr)),xn(0),yt(jr(Nr))}else{var Lr=Zt;Un.top<-Zt?Lr=-Un.top:Un.top+Un.height>-Zt+rr&&(Lr=-(Un.top+Un.height-rr)),yt(0),xn(jr(Lr))}},ta={};st==="top"||st==="bottom"?ta[ke?"marginRight":"marginLeft"]=mt:ta.marginTop=mt;var $a=U.map(function(Yn,Zr){var Un=Yn.key;return r.createElement(Zc,{id:ne,prefixCls:R,key:Un,tab:Yn,style:Zr===0?void 0:ta,closable:Yn.closable,editable:He,active:Un===De,renderWrapper:It,removeAriaLabel:Ve==null?void 0:Ve.removeAriaLabel,onClick:function(Lr){ct(Un,Lr)},onFocus:function(){Do(Un),Br(),Ot.current&&(ke||(Ot.current.scrollLeft=0),Ot.current.scrollTop=0)}})}),xr=function(){return on(function(){var Zr=new Map;return U.forEach(function(Un){var Nr,Lr=Un.key,Ga=(Nr=Xt.current)===null||Nr===void 0?void 0:Nr.querySelector('[data-node-key="'.concat(Lr,'"]'));Ga&&Zr.set(Lr,{width:Ga.offsetWidth,height:Ga.offsetHeight,left:Ga.offsetLeft,top:Ga.offsetTop})}),Zr})};(0,r.useEffect)(function(){xr()},[U.map(function(Yn){return Yn.key}).join("_")]);var na=dl(function(){var Yn=Ts(At),Zr=Ts(zt),Un=Ts(Pt);$t([Yn[0]-Zr[0]-Un[0],Yn[1]-Zr[1]-Un[1]]);var Nr=Ts(Vt);cr(Nr);var Lr=Ts(qe);fr(Lr);var Ga=Ts(Xt);Jn([Ga[0]-Nr[0],Ga[1]-Nr[1]]),xr()}),un=U.slice(0,ro),cn=U.slice(Ma+1),hr=[].concat(Gr(un),Gr(cn)),ra=(0,r.useState)(),Pa=P(ra,2),Kl=Pa[0],po=Pa[1],ao=_n.get(De),Hi=(0,r.useRef)();function Ra(){ut.cancel(Hi.current)}(0,r.useEffect)(function(){var Yn={};return ao&&(bt?(ke?Yn.right=ao.right:Yn.left=ao.left,Yn.width=ao.width):(Yn.top=ao.top,Yn.height=ao.height)),Ra(),Hi.current=ut(function(){po(Yn)}),Ra},[ao,bt,ke]),(0,r.useEffect)(function(){Do()},[De,Ou(ao),Ou(_n),bt]),(0,r.useEffect)(function(){na()},[ke]);var As=!!hr.length,ca="".concat(R,"-nav-wrap"),Va,$i,Vi,Gi;return bt?ke?($i=Xe>0,Va=Xe+zn<Zn):(Va=Xe<0,$i=-Xe+zn<Zn):(Vi=Zt<0,Gi=-Zt+zn<Zn),r.createElement(Bs,{onResize:na},r.createElement("div",{ref:Ee(p,At),role:"tablist",className:s()("".concat(R,"-nav"),A),style:oe,onKeyDown:function(){Br()}},r.createElement(Ei,{ref:zt,position:"left",extra:Ue,prefixCls:R}),r.createElement("div",{className:s()(ca,(g={},se(g,"".concat(ca,"-ping-left"),Va),se(g,"".concat(ca,"-ping-right"),$i),se(g,"".concat(ca,"-ping-top"),Vi),se(g,"".concat(ca,"-ping-bottom"),Gi),g)),ref:Ot},r.createElement(Bs,{onResize:na},r.createElement("div",{ref:Xt,className:"".concat(R,"-nav-list"),style:{transform:"translate(".concat(Xe,"px, ").concat(Zt,"px)"),transition:Ar?"none":void 0}},$a,r.createElement(qt,{ref:Vt,prefixCls:R,locale:Ve,editable:He,style:le(le({},$a.length===0?void 0:ta),{},{visibility:As?"hidden":null})}),r.createElement("div",{className:s()("".concat(R,"-ink-bar"),se({},"".concat(R,"-ink-bar-animated"),fe.inkBar)),style:Kl})))),r.createElement(Kc,Y({},u,{removeAriaLabel:Ve==null?void 0:Ve.removeAriaLabel,ref:qe,prefixCls:R,tabs:hr,className:!As&&ya,tabMoving:!!Ar})),r.createElement(Ei,{ref:Pt,position:"right",extra:Ue,prefixCls:R})))}var Vl=r.forwardRef(Tc),ol=["renderTabBar"],Yc=["label","key"];function Xc(u){var p=u.renderTabBar,g=ge(u,ol),T=r.useContext(Ia),R=T.tabs;if(p){var U=le(le({},g),{},{panes:R.map(function(A){var oe=A.label,ne=A.key,fe=ge(A,Yc);return r.createElement(Ka,Y({tab:oe,key:ne,tabKey:ne},fe))})});return p(U,Vl)}return r.createElement(Vl,g)}function Qc(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},p;return u===!1?p={inkBar:!1,tabPane:!1}:u===!0?p={inkBar:!0,tabPane:!1}:p=le({inkBar:!0},re(u)==="object"?u:{}),p.tabPaneMotion&&p.tabPane===void 0&&(p.tabPane=!0),!p.tabPaneMotion&&p.tabPane&&(p.tabPane=!1),p}var Os=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],il=0;function Gl(u,p){var g,T=u.id,R=u.prefixCls,U=R===void 0?"rc-tabs":R,A=u.className,oe=u.items,ne=u.direction,fe=u.activeKey,De=u.defaultActiveKey,ke=u.editable,Ue=u.animated,He=u.tabPosition,Ve=He===void 0?"top":He,st=u.tabBarGutter,mt=u.tabBarStyle,It=u.tabBarExtraContent,ct=u.locale,ft=u.moreIcon,At=u.moreTransitionName,zt=u.destroyInactiveTabPane,Pt=u.renderTabBar,Ot=u.onChange,Xt=u.onTabClick,qe=u.onTabScroll,Vt=u.getPopupContainer,bt=u.popupClassName,nt=ge(u,Os),$e=r.useMemo(function(){return(oe||[]).filter(function(bn){return bn&&re(bn)==="object"&&"key"in bn})},[oe]),Xe=ne==="rtl",yt=Qc(Ue),Lt=(0,r.useState)(!1),kt=P(Lt,2),Zt=kt[0],xn=kt[1];(0,r.useEffect)(function(){xn(We())},[]);var Cn=me(function(){var bn;return(bn=$e[0])===null||bn===void 0?void 0:bn.key},{value:fe,defaultValue:De}),Tn=P(Cn,2),jt=Tn[0],$t=Tn[1],dn=(0,r.useState)(function(){return $e.findIndex(function(bn){return bn.key===jt})}),Rn=P(dn,2),Qn=Rn[0],Jn=Rn[1];(0,r.useEffect)(function(){var bn=$e.findIndex(function(In){return In.key===jt});if(bn===-1){var Nn;bn=Math.max(0,Math.min(Qn,$e.length-1)),$t((Nn=$e[bn])===null||Nn===void 0?void 0:Nn.key)}Jn(bn)},[$e.map(function(bn){return bn.key}).join("_"),jt,Qn]);var nr=me(null,{value:T}),Hn=P(nr,2),mr=Hn[0],cr=Hn[1];(0,r.useEffect)(function(){T||(cr("rc-tabs-".concat(il)),il+=1)},[]);function wr(bn,Nn){Xt==null||Xt(bn,Nn);var In=bn!==jt;$t(bn),In&&(Ot==null||Ot(bn))}var An={id:mr,activeKey:jt,animated:yt,tabPosition:Ve,rtl:Xe,mobile:Zt},Cr,fr=le(le({},An),{},{editable:ke,locale:ct,moreIcon:ft,moreTransitionName:At,tabBarGutter:st,onTabClick:wr,onTabScroll:qe,extra:It,style:mt,panes:null,getPopupContainer:Vt,popupClassName:bt});return r.createElement(Ia.Provider,{value:{tabs:$e,prefixCls:U}},r.createElement("div",Y({ref:p,id:T,className:s()(U,"".concat(U,"-").concat(Ve),(g={},se(g,"".concat(U,"-mobile"),Zt),se(g,"".concat(U,"-editable"),ke),se(g,"".concat(U,"-rtl"),Xe),g),A)},nt),Cr,r.createElement(Xc,Y({},fr,{renderTabBar:Pt})),r.createElement(xu,Y({destroyInactiveTabPane:zt},An,{animated:yt}))))}var Jc=r.forwardRef(Gl),Oc=Jc,Ac=Oc;function pu(u,p){return sa(u)||ha(u,p)||Pc(u,p)||Mc()}function Mc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(u,p){if(u){if(typeof u=="string")return Rc(u,p);var g=Object.prototype.toString.call(u).slice(8,-1);if(g==="Object"&&u.constructor&&(g=u.constructor.name),g==="Map"||g==="Set")return Array.from(u);if(g==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g))return Rc(u,p)}}function Rc(u,p){(p==null||p>u.length)&&(p=u.length);for(var g=0,T=new Array(p);g<p;g++)T[g]=u[g];return T}function ha(u,p){var g=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(g!=null){var T=[],R=!0,U=!1,A,oe;try{for(g=g.call(u);!(R=(A=g.next()).done)&&(T.push(A.value),!(p&&T.length===p));R=!0);}catch(ne){U=!0,oe=ne}finally{try{!R&&g.return!=null&&g.return()}finally{if(U)throw oe}}return T}}function sa(u){if(Array.isArray(u))return u}var Nc=function(){return r.createElement("svg",{viewBox:"0 0 200 117"},r.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"}))},Lc=function(){return r.createElement("svg",{viewBox:"0 0 200 117"},r.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"}))},Dc=function(){return r.createElement("svg",{viewBox:"0 0 1024 1024"},r.createElement("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),r.createElement("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"}))},kc=function(p){var g,T,R,U,A=(0,o.YB)(),oe=Object.entries(p.asset.dependencies).filter(function(ct){var ft=pu(ct,2),At=ft[1].type;return At==="FILE"}),ne=(0,r.useState)(0),fe=pu(ne,2),De=fe[0],ke=fe[1],Ue=(0,r.useState)(p.forceShowCode||p.defaultShowCode),He=pu(Ue,2),Ve=He[0],st=He[1],mt=oe.length===1,It=((g=oe[De][0].match(/\.([^.]+)$/))===null||g===void 0?void 0:g[1])||"text";return r.createElement(r.Fragment,null,r.createElement("div",{className:"dumi-default-previewer-actions"},!((T=p.disabledActions)!==null&&T!==void 0&&T.includes("CSB"))&&r.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":A.formatMessage({id:"previewer.actions.codesandbox"}),onClick:function(){return(0,o.il)(p)}},r.createElement(x,null)),!((R=p.disabledActions)!==null&&R!==void 0&&R.includes("STACKBLITZ"))&&r.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":A.formatMessage({id:"previewer.actions.stackblitz"}),onClick:function(){return(0,o.Sc)(p)}},r.createElement(M,null)),!((U=p.disabledActions)!==null&&U!==void 0&&U.includes("EXTERNAL"))&&r.createElement("a",{target:"_blank",rel:"noreferrer",href:p.demoUrl,className:"dumi-default-previewer-action-btn","data-dumi-tooltip":A.formatMessage({id:"previewer.actions.separate"})},r.createElement(Dc,null)),r.createElement(K,p),!p.forceShowCode&&r.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button",onClick:function(){return st(function(ft){return!ft})},"data-dumi-tooltip":A.formatMessage({id:"previewer.actions.code.".concat(Ve?"shrink":"expand")})},Ve?r.createElement(Lc,null):r.createElement(Nc,null))),Ve&&r.createElement(r.Fragment,null,r.createElement("div",{className:"dumi-default-previewer-sources"},!mt&&r.createElement(Ac,{className:"dumi-default-previewer-tabs",prefixCls:"dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:String(De),onChange:function(ft){return ke(Number(ft))},items:oe.map(function(ct,ft){var At=pu(ct,1),zt=At[0];return{key:String(ft),label:zt}})})),r.createElement(F.Z,{lang:It},oe[De][1].value)))},Fc=kc;function vu(u){return vu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},vu(u)}var jc=function(p){var g=(0,o.TH)(),T=g.hash,R="#".concat(p.asset.id);return r.createElement("div",{id:p.asset.id,className:s()("dumi-default-previewer",p.className),style:p.style,"data-debug":p.debug,"data-active":T===R||void 0},r.createElement("div",{className:"dumi-default-previewer-demo",style:{background:p.background},"data-compact":p.compact||void 0,"data-transform":p.transform||void 0,"data-iframe":p.iframe||void 0},p.iframe?r.createElement("iframe",{style:["string","number"].includes(vu(p.iframe))?{height:Number(p.iframe)}:{},src:p.demoUrl}):p.children),r.createElement("div",{className:"dumi-default-previewer-meta"},(p.title||p.debug)&&r.createElement("div",{className:"dumi-default-previewer-desc"},r.createElement("h5",null,r.createElement("a",{href:R},p.debug&&r.createElement("strong",null,"DEV ONLY"),p.title)),p.description&&r.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:p.description}})),r.createElement(Fc,p)))},Wl=jc},57905:function(l,c,e){"use strict";e.d(c,{Z:function(){return Ne}});var i=e(50959),s=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(_,pe,me)=>pe in _?s(_,pe,{enumerable:!0,configurable:!0,writable:!0,value:me}):_[pe]=me,v=(_,pe)=>{for(var me in pe||(pe={}))r.call(pe,me)&&m(_,me,pe[me]);if(o)for(var me of o(pe))d.call(pe,me)&&m(_,me,pe[me]);return _};const y=_=>i.createElement("svg",v({viewBox:"64 64 896 896"},_),i.createElement("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}));var b="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIvPjwvc3ZnPg==",h=Object.defineProperty,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,C=(_,pe,me)=>pe in _?h(_,pe,{enumerable:!0,configurable:!0,writable:!0,value:me}):_[pe]=me,j=(_,pe)=>{for(var me in pe||(pe={}))E.call(pe,me)&&C(_,me,pe[me]);if(x)for(var me of x(pe))w.call(pe,me)&&C(_,me,pe[me]);return _};const N=_=>i.createElement("svg",j({viewBox:"64 64 896 896"},_),i.createElement("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2 263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}));var D="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODMyIDY0SDI5NmMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg0OTZ2Njg4YzAgNC40IDMuNiA4IDggOGg1NmM0LjQgMCA4LTMuNiA4LThWOTZjMC0xNy43LTE0LjMtMzItMzItMzJ6TTcwNCAxOTJIMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1MzAuN2MwIDguNSAzLjQgMTYuNiA5LjQgMjIuNmwxNzMuMyAxNzMuM2MyLjIgMi4yIDQuNyA0IDcuNCA1LjV2MS45aDQuMmMzLjUgMS4zIDcuMiAyIDExIDJINzA0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnpNMzUwIDg1Ni4yIDI2My45IDc3MEgzNTB2ODYuMnpNNjY0IDg4OEg0MTRWNzQ2YzAtMjIuMS0xNy45LTQwLTQwLTQwSDIzMlYyNjRoNDMydjYyNHoiLz48L3N2Zz4=";var B=function(){var _=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,pe=0,me={},Re={util:{encode:function q($){return $ instanceof ot?new ot($.type,q($.content),$.alias):Array.isArray($)?$.map(q):$.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(q){return Object.prototype.toString.call(q).slice(8,-1)},objId:function(q){return q.__id||Object.defineProperty(q,"__id",{value:++pe}),q.__id},clone:function q($,W){W=W||{};var te,ae;switch(Re.util.type($)){case"Object":if(ae=Re.util.objId($),W[ae])return W[ae];te={},W[ae]=te;for(var ve in $)$.hasOwnProperty(ve)&&(te[ve]=q($[ve],W));return te;case"Array":return ae=Re.util.objId($),W[ae]?W[ae]:(te=[],W[ae]=te,$.forEach(function(Be,Ae){te[Ae]=q(Be,W)}),te);default:return $}},getLanguage:function(q){for(;q;){var $=_.exec(q.className);if($)return $[1].toLowerCase();q=q.parentElement}return"none"},setLanguage:function(q,$){q.className=q.className.replace(RegExp(_,"gi"),""),q.classList.add("language-"+$)},isActive:function(q,$,W){for(var te="no-"+$;q;){var ae=q.classList;if(ae.contains($))return!0;if(ae.contains(te))return!1;q=q.parentElement}return!!W}},languages:{plain:me,plaintext:me,text:me,txt:me,extend:function(q,$){var W=Re.util.clone(Re.languages[q]);for(var te in $)W[te]=$[te];return W},insertBefore:function(q,$,W,te){te=te||Re.languages;var ae=te[q],ve={};for(var Be in ae)if(ae.hasOwnProperty(Be)){if(Be==$)for(var Ae in W)W.hasOwnProperty(Ae)&&(ve[Ae]=W[Ae]);W.hasOwnProperty(Be)||(ve[Be]=ae[Be])}var Ze=te[q];return te[q]=ve,Re.languages.DFS(Re.languages,function(xt,Nt){Nt===Ze&&xt!=q&&(this[xt]=ve)}),ve},DFS:function q($,W,te,ae){ae=ae||{};var ve=Re.util.objId;for(var Be in $)if($.hasOwnProperty(Be)){W.call($,Be,$[Be],te||Be);var Ae=$[Be],Ze=Re.util.type(Ae);Ze==="Object"&&!ae[ve(Ae)]?(ae[ve(Ae)]=!0,q(Ae,W,null,ae)):Ze==="Array"&&!ae[ve(Ae)]&&(ae[ve(Ae)]=!0,q(Ae,W,Be,ae))}}},plugins:{},highlight:function(q,$,W){var te={code:q,grammar:$,language:W};return Re.hooks.run("before-tokenize",te),te.tokens=Re.tokenize(te.code,te.grammar),Re.hooks.run("after-tokenize",te),ot.stringify(Re.util.encode(te.tokens),te.language)},tokenize:function(q,$){var W=$.rest;if(W){for(var te in W)$[te]=W[te];delete $.rest}var ae=new Me;return Oe(ae,ae.head,q),dt(q,ae,$,ae.head,0),xe(ae)},hooks:{all:{},add:function(q,$){var W=Re.hooks.all;W[q]=W[q]||[],W[q].push($)},run:function(q,$){var W=Re.hooks.all[q];if(!(!W||!W.length))for(var te=0,ae;ae=W[te++];)ae($)}},Token:ot};function ot(q,$,W,te){this.type=q,this.content=$,this.alias=W,this.length=(te||"").length|0}ot.stringify=function q($,W){if(typeof $=="string")return $;if(Array.isArray($)){var te="";return $.forEach(function(Ze){te+=q(Ze,W)}),te}var ae={type:$.type,content:q($.content,W),tag:"span",classes:["token",$.type],attributes:{},language:W},ve=$.alias;ve&&(Array.isArray(ve)?Array.prototype.push.apply(ae.classes,ve):ae.classes.push(ve)),Re.hooks.run("wrap",ae);var Be="";for(var Ae in ae.attributes)Be+=" "+Ae+'="'+(ae.attributes[Ae]||"").replace(/"/g,"&quot;")+'"';return"<"+ae.tag+' class="'+ae.classes.join(" ")+'"'+Be+">"+ae.content+"</"+ae.tag+">"};function at(q,$,W,te){q.lastIndex=$;var ae=q.exec(W);if(ae&&te&&ae[1]){var ve=ae[1].length;ae.index+=ve,ae[0]=ae[0].slice(ve)}return ae}function dt(q,$,W,te,ae,ve){for(var Be in W)if(!(!W.hasOwnProperty(Be)||!W[Be])){var Ae=W[Be];Ae=Array.isArray(Ae)?Ae:[Ae];for(var Ze=0;Ze<Ae.length;++Ze){if(ve&&ve.cause==Be+","+Ze)return;var xt=Ae[Ze],Nt=xt.inside,Tt=!!xt.lookbehind,Dt=!!xt.greedy,S=xt.alias;if(Dt&&!xt.pattern.global){var ie=xt.pattern.toString().match(/[imsuy]*$/)[0];xt.pattern=RegExp(xt.pattern.source,ie+"g")}for(var Ce=xt.pattern||xt,_e=te.next,be=ae;_e!==$.tail&&!(ve&&be>=ve.reach);be+=_e.value.length,_e=_e.next){var rt=_e.value;if($.length>q.length)return;if(!(rt instanceof ot)){var lt=1,Ct;if(Dt){if(Ct=at(Ce,be,q,Tt),!Ct||Ct.index>=q.length)break;var hn=Ct.index,Wt=Ct.index+Ct[0].length,Bt=be;for(Bt+=_e.value.length;hn>=Bt;)_e=_e.next,Bt+=_e.value.length;if(Bt-=_e.value.length,be=Bt,_e.value instanceof ot)continue;for(var Mt=_e;Mt!==$.tail&&(Bt<Wt||typeof Mt.value=="string");Mt=Mt.next)lt++,Bt+=Mt.value.length;lt--,rt=q.slice(be,Bt),Ct.index-=be}else if(Ct=at(Ce,0,rt,Tt),!Ct)continue;var hn=Ct.index,ln=Ct[0],Mn=rt.slice(0,hn),$n=rt.slice(hn+ln.length),ut=be+rt.length;ve&&ut>ve.reach&&(ve.reach=ut);var it=_e.prev;Mn&&(it=Oe($,it,Mn),be+=Mn.length),Ee($,it,lt);var St=new ot(Be,Nt?Re.tokenize(ln,Nt):ln,S,ln);if(_e=Oe($,it,St),$n&&Oe($,_e,$n),lt>1){var Ht={cause:Be+","+Ze,reach:ut};dt(q,$,W,_e.prev,be,Ht),ve&&Ht.reach>ve.reach&&(ve.reach=Ht.reach)}}}}}}function Me(){var q={value:null,prev:null,next:null},$={value:null,prev:q,next:null};q.next=$,this.head=q,this.tail=$,this.length=0}function Oe(q,$,W){var te=$.next,ae={value:W,prev:$,next:te};return $.next=ae,te.prev=ae,q.length++,ae}function Ee(q,$,W){for(var te=$.next,ae=0;ae<W&&te!==q.tail;ae++)te=te.next;$.next=te,te.prev=$,q.length-=ae}function xe(q){for(var $=[],W=q.head.next;W!==q.tail;)$.push(W.value),W=W.next;return $}return Re}(),M=B;B.default=B,M.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},M.languages.markup.tag.inside["attr-value"].inside.entity=M.languages.markup.entity,M.languages.markup.doctype.inside["internal-subset"].inside=M.languages.markup,M.hooks.add("wrap",function(_){_.type==="entity"&&(_.attributes.title=_.content.replace(/&amp;/,"&"))}),Object.defineProperty(M.languages.markup.tag,"addInlined",{value:function(pe,me){var Re={};Re["language-"+me]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:M.languages[me]},Re.cdata=/^<!\[CDATA\[|\]\]>$/i;var ot={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:Re}};ot["language-"+me]={pattern:/[\s\S]+/,inside:M.languages[me]};var at={};at[pe]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return pe}),"i"),lookbehind:!0,greedy:!0,inside:ot},M.languages.insertBefore("markup","cdata",at)}}),Object.defineProperty(M.languages.markup.tag,"addAttribute",{value:function(_,pe){M.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+_+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[pe,"language-"+pe],inside:M.languages[pe]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),M.languages.html=M.languages.markup,M.languages.mathml=M.languages.markup,M.languages.svg=M.languages.markup,M.languages.xml=M.languages.extend("markup",{}),M.languages.ssml=M.languages.xml,M.languages.atom=M.languages.xml,M.languages.rss=M.languages.xml,function(_){var pe="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",me={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},Re={bash:me,environment:{pattern:RegExp("\\$"+pe),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+pe),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};_.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+pe),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:Re},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:me}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:Re},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:Re.entity}}],environment:{pattern:RegExp("\\$?"+pe),alias:"constant"},variable:Re.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},me.inside=_.languages.bash;for(var ot=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],at=Re.variable[1].inside,dt=0;dt<ot.length;dt++)at[ot[dt]]=_.languages.bash[ot[dt]];_.languages.shell=_.languages.bash}(M),M.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},M.languages.c=M.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),M.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),M.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},M.languages.c.string],char:M.languages.c.char,comment:M.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:M.languages.c}}}}),M.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete M.languages.c.boolean,function(_){var pe=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,me=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return pe.source});_.languages.cpp=_.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return pe.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:pe,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),_.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return me})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),_.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:_.languages.cpp}}}}),_.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),_.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:_.languages.extend("cpp",{})}}),_.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},_.languages.cpp["base-clause"])}(M),function(_){var pe=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;_.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+pe.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+pe.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+pe.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:pe,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},_.languages.css.atrule.inside.rest=_.languages.css;var me=_.languages.markup;me&&(me.tag.addInlined("style","css"),me.tag.addAttribute("style","css"))}(M),function(_){var pe=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,me;_.languages.css.selector={pattern:_.languages.css.selector.pattern,lookbehind:!0,inside:me={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+pe.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[pe,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},_.languages.css.atrule.inside["selector-function-argument"].inside=me,_.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var Re={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},ot={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};_.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:Re,number:ot,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:Re,number:ot})}(M),M.languages.javascript=M.languages.extend("clike",{"class-name":[M.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),M.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,M.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:M.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:M.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:M.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:M.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:M.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),M.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:M.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),M.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),M.languages.markup&&(M.languages.markup.tag.addInlined("script","javascript"),M.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),M.languages.js=M.languages.javascript,function(_){var pe=/#(?!\{).+/,me={pattern:/#\{[^}]+\}/,alias:"variable"};_.languages.coffeescript=_.languages.extend("javascript",{comment:pe,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:me}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),_.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:pe,interpolation:me}}}),_.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:_.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:me}}]}),_.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete _.languages.coffeescript["template-string"],_.languages.coffee=_.languages.coffeescript}(M),function(_){var pe=/[*&][^\s[\]{},]+/,me=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,Re="(?:"+me.source+"(?:[ 	]+"+pe.source+")?|"+pe.source+"(?:[ 	]+"+me.source+")?)",ot=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),at=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function dt(Me,Oe){Oe=(Oe||"").replace(/m/g,"")+"m";var Ee=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return Re}).replace(/<<value>>/g,function(){return Me});return RegExp(Ee,Oe)}_.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return Re})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return Re}).replace(/<<key>>/g,function(){return"(?:"+ot+"|"+at+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:dt(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:dt(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:dt(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:dt(at),lookbehind:!0,greedy:!0},number:{pattern:dt(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:me,important:pe,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},_.languages.yml=_.languages.yaml}(M),function(_){var pe=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function me(xe){return xe=xe.replace(/<inner>/g,function(){return pe}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+xe+")")}var Re=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,ot=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return Re}),at=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;_.languages.markdown=_.languages.extend("markup",{}),_.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:_.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+ot+at+"(?:"+ot+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+ot+at+")(?:"+ot+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(Re),inside:_.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+ot+")"+at+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+ot+"$"),inside:{"table-header":{pattern:RegExp(Re),alias:"important",inside:_.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:me(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:me(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:me(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:me(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(xe){["url","bold","italic","strike","code-snippet"].forEach(function(q){xe!==q&&(_.languages.markdown[xe].inside.content.inside[q]=_.languages.markdown[q])})}),_.hooks.add("after-tokenize",function(xe){if(xe.language!=="markdown"&&xe.language!=="md")return;function q($){if(!(!$||typeof $=="string"))for(var W=0,te=$.length;W<te;W++){var ae=$[W];if(ae.type!=="code"){q(ae.content);continue}var ve=ae.content[1],Be=ae.content[3];if(ve&&Be&&ve.type==="code-language"&&Be.type==="code-block"&&typeof ve.content=="string"){var Ae=ve.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");Ae=(/[a-z][\w-]*/i.exec(Ae)||[""])[0].toLowerCase();var Ze="language-"+Ae;Be.alias?typeof Be.alias=="string"?Be.alias=[Be.alias,Ze]:Be.alias.push(Ze):Be.alias=[Ze]}}}q(xe.tokens)}),_.hooks.add("wrap",function(xe){if(xe.type==="code-block"){for(var q="",$=0,W=xe.classes.length;$<W;$++){var te=xe.classes[$],ae=/language-(.+)/.exec(te);if(ae){q=ae[1];break}}var ve=_.languages[q];if(ve)xe.content=_.highlight(Ee(xe.content),ve,q);else if(q&&q!=="none"&&_.plugins.autoloader){var Be="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);xe.attributes.id=Be,_.plugins.autoloader.loadLanguages(q,function(){var Ae=document.getElementById(Be);Ae&&(Ae.innerHTML=_.highlight(Ae.textContent,_.languages[q],q))})}}});var dt=RegExp(_.languages.markup.tag.pattern.source,"gi"),Me={amp:"&",lt:"<",gt:">",quot:'"'},Oe=String.fromCodePoint||String.fromCharCode;function Ee(xe){var q=xe.replace(dt,"");return q=q.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function($,W){if(W=W.toLowerCase(),W[0]==="#"){var te;return W[1]==="x"?te=parseInt(W.slice(2),16):te=Number(W.slice(1)),Oe(te)}else{var ae=Me[W];return ae||$}}),q}_.languages.md=_.languages.markdown}(M),M.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:M.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},M.hooks.add("after-tokenize",function(pe){if(pe.language!=="graphql")return;var me=pe.tokens.filter(function(ae){return typeof ae!="string"&&ae.type!=="comment"&&ae.type!=="scalar"}),Re=0;function ot(ae){return me[Re+ae]}function at(ae,ve){ve=ve||0;for(var Be=0;Be<ae.length;Be++){var Ae=ot(Be+ve);if(!Ae||Ae.type!==ae[Be])return!1}return!0}function dt(ae,ve){for(var Be=1,Ae=Re;Ae<me.length;Ae++){var Ze=me[Ae],xt=Ze.content;if(Ze.type==="punctuation"&&typeof xt=="string"){if(ae.test(xt))Be++;else if(ve.test(xt)&&(Be--,Be===0))return Ae}}return-1}function Me(ae,ve){var Be=ae.alias;Be?Array.isArray(Be)||(ae.alias=Be=[Be]):ae.alias=Be=[],Be.push(ve)}for(;Re<me.length;){var Oe=me[Re++];if(Oe.type==="keyword"&&Oe.content==="mutation"){var Ee=[];if(at(["definition-mutation","punctuation"])&&ot(1).content==="("){Re+=2;var xe=dt(/^\($/,/^\)$/);if(xe===-1)continue;for(;Re<xe;Re++){var q=ot(0);q.type==="variable"&&(Me(q,"variable-input"),Ee.push(q.content))}Re=xe+1}if(at(["punctuation","property-query"])&&ot(0).content==="{"&&(Re++,Me(ot(0),"property-mutation"),Ee.length>0)){var $=dt(/^\{$/,/^\}$/);if($===-1)continue;for(var W=Re;W<$;W++){var te=me[W];te.type==="variable"&&Ee.indexOf(te.content)>=0&&Me(te,"variable-input")}}}}}),M.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(_){var pe=_.languages.javascript["template-string"],me=pe.pattern.source,Re=pe.inside.interpolation,ot=Re.inside["interpolation-punctuation"],at=Re.pattern.source;function dt(W,te){if(_.languages[W])return{pattern:RegExp("((?:"+te+")\\s*)"+me),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:W}}}}_.languages.javascript["template-string"]=[dt("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),dt("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),dt("svg",/\bsvg/.source),dt("markdown",/\b(?:markdown|md)/.source),dt("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),dt("sql",/\bsql/.source),pe].filter(Boolean);function Me(W,te){return"___"+te.toUpperCase()+"_"+W+"___"}function Oe(W,te,ae){var ve={code:W,grammar:te,language:ae};return _.hooks.run("before-tokenize",ve),ve.tokens=_.tokenize(ve.code,ve.grammar),_.hooks.run("after-tokenize",ve),ve.tokens}function Ee(W){var te={};te["interpolation-punctuation"]=ot;var ae=_.tokenize(W,te);if(ae.length===3){var ve=[1,1];ve.push.apply(ve,Oe(ae[1],_.languages.javascript,"javascript")),ae.splice.apply(ae,ve)}return new _.Token("interpolation",ae,Re.alias,W)}function xe(W,te,ae){var ve=_.tokenize(W,{interpolation:{pattern:RegExp(at),lookbehind:!0}}),Be=0,Ae={},Ze=ve.map(function(Dt){if(typeof Dt=="string")return Dt;for(var S=Dt.content,ie;W.indexOf(ie=Me(Be++,ae))!==-1;);return Ae[ie]=S,ie}).join(""),xt=Oe(Ze,te,ae),Nt=Object.keys(Ae);Be=0;function Tt(Dt){for(var S=0;S<Dt.length;S++){if(Be>=Nt.length)return;var ie=Dt[S];if(typeof ie=="string"||typeof ie.content=="string"){var Ce=Nt[Be],_e=typeof ie=="string"?ie:ie.content,be=_e.indexOf(Ce);if(be!==-1){++Be;var rt=_e.substring(0,be),lt=Ee(Ae[Ce]),Ct=_e.substring(be+Ce.length),Wt=[];if(rt&&Wt.push(rt),Wt.push(lt),Ct){var Bt=[Ct];Tt(Bt),Wt.push.apply(Wt,Bt)}typeof ie=="string"?(Dt.splice.apply(Dt,[S,1].concat(Wt)),S+=Wt.length-1):ie.content=Wt}}else{var Mt=ie.content;Array.isArray(Mt)?Tt(Mt):Tt([Mt])}}}return Tt(xt),new _.Token(ae,xt,"language-"+ae,W)}var q={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};_.hooks.add("after-tokenize",function(W){if(!(W.language in q))return;function te(ae){for(var ve=0,Be=ae.length;ve<Be;ve++){var Ae=ae[ve];if(typeof Ae!="string"){var Ze=Ae.content;if(!Array.isArray(Ze)){typeof Ze!="string"&&te([Ze]);continue}if(Ae.type==="template-string"){var xt=Ze[1];if(Ze.length===3&&typeof xt!="string"&&xt.type==="embedded-code"){var Nt=$(xt),Tt=xt.alias,Dt=Array.isArray(Tt)?Tt[0]:Tt,S=_.languages[Dt];if(!S)continue;Ze[1]=xe(Nt,S,Dt)}}else te(Ze)}}}te(W.tokens)});function $(W){return typeof W=="string"?W:Array.isArray(W)?W.map($).join(""):$(W.content)}}(M),function(_){_.languages.typescript=_.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),_.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete _.languages.typescript.parameter,delete _.languages.typescript["literal-property"];var pe=_.languages.extend("typescript",{});delete pe["class-name"],_.languages.typescript["class-name"].inside=pe,_.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:pe}}}}),_.languages.ts=_.languages.typescript}(M),function(_){_.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+_.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),_.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+_.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),_.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function pe(Me,Oe){return RegExp(Me.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),Oe)}_.languages.insertBefore("javascript","keyword",{imports:{pattern:pe(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:_.languages.javascript},exports:{pattern:pe(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:_.languages.javascript}}),_.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),_.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),_.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:pe(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var me=["function","function-variable","method","method-variable","property-access"],Re=0;Re<me.length;Re++){var ot=me[Re],at=_.languages.javascript[ot];_.util.type(at)==="RegExp"&&(at=_.languages.javascript[ot]={pattern:at});var dt=at.inside||{};at.inside=dt,dt["maybe-class-name"]=/^[A-Z][\s\S]*/}}(M),function(_){var pe=_.util.clone(_.languages.javascript),me=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,Re=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,ot=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function at(Oe,Ee){return Oe=Oe.replace(/<S>/g,function(){return me}).replace(/<BRACES>/g,function(){return Re}).replace(/<SPREAD>/g,function(){return ot}),RegExp(Oe,Ee)}ot=at(ot).source,_.languages.jsx=_.languages.extend("markup",pe),_.languages.jsx.tag.pattern=at(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),_.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,_.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,_.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,_.languages.jsx.tag.inside.comment=pe.comment,_.languages.insertBefore("inside","attr-name",{spread:{pattern:at(/<SPREAD>/.source),inside:_.languages.jsx}},_.languages.jsx.tag),_.languages.insertBefore("inside","special-attr",{script:{pattern:at(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:_.languages.jsx}}},_.languages.jsx.tag);var dt=function(Oe){return Oe?typeof Oe=="string"?Oe:typeof Oe.content=="string"?Oe.content:Oe.content.map(dt).join(""):""},Me=function(Oe){for(var Ee=[],xe=0;xe<Oe.length;xe++){var q=Oe[xe],$=!1;if(typeof q!="string"&&(q.type==="tag"&&q.content[0]&&q.content[0].type==="tag"?q.content[0].content[0].content==="</"?Ee.length>0&&Ee[Ee.length-1].tagName===dt(q.content[0].content[1])&&Ee.pop():q.content[q.content.length-1].content==="/>"||Ee.push({tagName:dt(q.content[0].content[1]),openedBraces:0}):Ee.length>0&&q.type==="punctuation"&&q.content==="{"?Ee[Ee.length-1].openedBraces++:Ee.length>0&&Ee[Ee.length-1].openedBraces>0&&q.type==="punctuation"&&q.content==="}"?Ee[Ee.length-1].openedBraces--:$=!0),($||typeof q=="string")&&Ee.length>0&&Ee[Ee.length-1].openedBraces===0){var W=dt(q);xe<Oe.length-1&&(typeof Oe[xe+1]=="string"||Oe[xe+1].type==="plain-text")&&(W+=dt(Oe[xe+1]),Oe.splice(xe+1,1)),xe>0&&(typeof Oe[xe-1]=="string"||Oe[xe-1].type==="plain-text")&&(W=dt(Oe[xe-1])+W,Oe.splice(xe-1,1),xe--),Oe[xe]=new _.Token("plain-text",W,null,W)}q.content&&typeof q.content!="string"&&Me(q.content)}};_.hooks.add("after-tokenize",function(Oe){Oe.language!=="jsx"&&Oe.language!=="tsx"||Me(Oe.tokens)})}(M),function(_){_.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var pe={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(pe).forEach(function(me){var Re=pe[me],ot=[];/^\w+$/.test(me)||ot.push(/\w+/.exec(me)[0]),me==="diff"&&ot.push("bold"),_.languages.diff[me]={pattern:RegExp("^(?:["+Re+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:ot,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(me)[0]}}}}),Object.defineProperty(_.languages.diff,"PREFIXES",{value:pe})}(M),M.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},M.languages.go=M.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),M.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete M.languages.go["class-name"],function(_){function pe(me,Re){return"___"+me.toUpperCase()+Re+"___"}Object.defineProperties(_.languages["markup-templating"]={},{buildPlaceholders:{value:function(me,Re,ot,at){if(me.language===Re){var dt=me.tokenStack=[];me.code=me.code.replace(ot,function(Me){if(typeof at=="function"&&!at(Me))return Me;for(var Oe=dt.length,Ee;me.code.indexOf(Ee=pe(Re,Oe))!==-1;)++Oe;return dt[Oe]=Me,Ee}),me.grammar=_.languages.markup}}},tokenizePlaceholders:{value:function(me,Re){if(me.language!==Re||!me.tokenStack)return;me.grammar=_.languages[Re];var ot=0,at=Object.keys(me.tokenStack);function dt(Me){for(var Oe=0;Oe<Me.length&&!(ot>=at.length);Oe++){var Ee=Me[Oe];if(typeof Ee=="string"||Ee.content&&typeof Ee.content=="string"){var xe=at[ot],q=me.tokenStack[xe],$=typeof Ee=="string"?Ee:Ee.content,W=pe(Re,xe),te=$.indexOf(W);if(te>-1){++ot;var ae=$.substring(0,te),ve=new _.Token(Re,_.tokenize(q,me.grammar),"language-"+Re,q),Be=$.substring(te+W.length),Ae=[];ae&&Ae.push.apply(Ae,dt([ae])),Ae.push(ve),Be&&Ae.push.apply(Ae,dt([Be])),typeof Ee=="string"?Me.splice.apply(Me,[Oe,1].concat(Ae)):Ee.content=Ae}}else Ee.content&&dt(Ee.content)}return Me}dt(me.tokens)}}})}(M),function(_){_.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},_.hooks.add("before-tokenize",function(pe){var me=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;_.languages["markup-templating"].buildPlaceholders(pe,"handlebars",me)}),_.hooks.add("after-tokenize",function(pe){_.languages["markup-templating"].tokenizePlaceholders(pe,"handlebars")}),_.languages.hbs=_.languages.handlebars}(M),M.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},M.languages.webmanifest=M.languages.json,M.languages.less=M.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),M.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),M.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/},M.languages.objectivec=M.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete M.languages.objectivec["class-name"],M.languages.objc=M.languages.objectivec,M.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/},M.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},M.languages.python["string-interpolation"].inside.interpolation.inside.rest=M.languages.python,M.languages.py=M.languages.python,M.languages.reason=M.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),M.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete M.languages.reason.function,function(_){_.languages.sass=_.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),_.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete _.languages.sass.atrule;var pe=/\$[-\w]+|#\{\$[-\w]+\}/,me=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];_.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:pe,operator:me}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:pe,operator:me,important:_.languages.sass.important}}}),delete _.languages.sass.property,delete _.languages.sass.important,_.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(M),M.languages.scss=M.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),M.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),M.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),M.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),M.languages.scss.atrule.inside.rest=M.languages.scss,function(_){var pe={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},me={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},Re={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:pe,number:me,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:pe,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:me,punctuation:/[{}()\[\];:,]/};Re.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:Re}},Re.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:Re}},_.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:Re}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:Re}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:Re}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:Re.interpolation}},rest:Re}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:Re.interpolation,comment:Re.comment,punctuation:/[{},]/}},func:Re.func,string:Re.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:Re.interpolation,punctuation:/[{}()\[\];:.]/}}(M),function(_){var pe=_.util.clone(_.languages.typescript);_.languages.tsx=_.languages.extend("jsx",pe),delete _.languages.tsx.parameter,delete _.languages.tsx["literal-property"];var me=_.languages.tsx.tag;me.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+me.pattern.source+")",me.pattern.flags),me.lookbehind=!0}(M),M.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var Q=M,F={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},H=F,K={Prism:Q,theme:H};function Y(_,pe,me){return pe in _?Object.defineProperty(_,pe,{value:me,enumerable:!0,configurable:!0,writable:!0}):_[pe]=me,_}function re(){return re=Object.assign||function(_){for(var pe=1;pe<arguments.length;pe++){var me=arguments[pe];for(var Re in me)Object.prototype.hasOwnProperty.call(me,Re)&&(_[Re]=me[Re])}return _},re.apply(this,arguments)}var ce=/\r\n|\r|\n/,Se=function(_){_.length===0?_.push({types:["plain"],content:`
`,empty:!0}):_.length===1&&_[0].content===""&&(_[0].content=`
`,_[0].empty=!0)},se=function(_,pe){var me=_.length;return me>0&&_[me-1]===pe?_:_.concat(pe)},Te=function(_){for(var pe=[[]],me=[_],Re=[0],ot=[_.length],at=0,dt=0,Me=[],Oe=[Me];dt>-1;){for(;(at=Re[dt]++)<ot[dt];){var Ee=void 0,xe=pe[dt],q=me[dt],$=q[at];if(typeof $=="string"?(xe=dt>0?xe:["plain"],Ee=$):(xe=se(xe,$.type),$.alias&&(xe=se(xe,$.alias)),Ee=$.content),typeof Ee!="string"){dt++,pe.push(xe),me.push(Ee),Re.push(0),ot.push(Ee.length);continue}var W=Ee.split(ce),te=W.length;Me.push({types:xe,content:W[0]});for(var ae=1;ae<te;ae++)Se(Me),Oe.push(Me=[]),Me.push({types:xe,content:W[ae]})}dt--,pe.pop(),me.pop(),Re.pop(),ot.pop()}return Se(Me),Oe},le=function(_,pe){var me=_.plain,Re=Object.create(null),ot=_.styles.reduce(function(at,dt){var Me=dt.languages,Oe=dt.style;return Me&&!Me.includes(pe)||dt.types.forEach(function(Ee){var xe=re({},at[Ee],Oe);at[Ee]=xe}),at},Re);return ot.root=me,ot.plain=re({},me,{backgroundColor:null}),ot};function ue(_,pe){var me={};for(var Re in _)Object.prototype.hasOwnProperty.call(_,Re)&&pe.indexOf(Re)===-1&&(me[Re]=_[Re]);return me}var V=function(_){function pe(){for(var me=this,Re=[],ot=arguments.length;ot--;)Re[ot]=arguments[ot];_.apply(this,Re),Y(this,"getThemeDict",function(at){if(me.themeDict!==void 0&&at.theme===me.prevTheme&&at.language===me.prevLanguage)return me.themeDict;me.prevTheme=at.theme,me.prevLanguage=at.language;var dt=at.theme?le(at.theme,at.language):void 0;return me.themeDict=dt}),Y(this,"getLineProps",function(at){var dt=at.key,Me=at.className,Oe=at.style,Ee=ue(at,["key","className","style","line"]),xe=Ee,q=re({},xe,{className:"token-line",style:void 0,key:void 0}),$=me.getThemeDict(me.props);return $!==void 0&&(q.style=$.plain),Oe!==void 0&&(q.style=q.style!==void 0?re({},q.style,Oe):Oe),dt!==void 0&&(q.key=dt),Me&&(q.className+=" "+Me),q}),Y(this,"getStyleForToken",function(at){var dt=at.types,Me=at.empty,Oe=dt.length,Ee=me.getThemeDict(me.props);if(Ee!==void 0){{if(Oe===1&&dt[0]==="plain")return Me?{display:"inline-block"}:void 0;if(Oe===1&&!Me)return Ee[dt[0]]}var xe=Me?{display:"inline-block"}:{},q=dt.map(function($){return Ee[$]});return Object.assign.apply(Object,[xe].concat(q))}}),Y(this,"getTokenProps",function(at){var dt=at.key,Me=at.className,Oe=at.style,Ee=at.token,xe=ue(at,["key","className","style","token"]),q=xe,$=re({},q,{className:"token "+Ee.types.join(" "),children:Ee.content,style:me.getStyleForToken(Ee),key:void 0});return Oe!==void 0&&($.style=$.style!==void 0?re({},$.style,Oe):Oe),dt!==void 0&&($.key=dt),Me&&($.className+=" "+Me),$}),Y(this,"tokenize",function(at,dt,Me,Oe){var Ee={code:dt,grammar:Me,language:Oe,tokens:[]};at.hooks.run("before-tokenize",Ee);var xe=Ee.tokens=at.tokenize(Ee.code,Ee.grammar,Ee.language);return at.hooks.run("after-tokenize",Ee),xe})}return _&&(pe.__proto__=_),pe.prototype=Object.create(_&&_.prototype),pe.prototype.constructor=pe,pe.prototype.render=function(){var Re=this.props,ot=Re.Prism,at=Re.language,dt=Re.code,Me=Re.children,Oe=this.getThemeDict(this.props),Ee=ot.languages[at],xe=Ee!==void 0?this.tokenize(ot,dt,Ee,at):[dt],q=Te(xe);return Me({tokens:q,className:"prism-code language-"+at,style:Oe!==void 0?Oe.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},pe}(i.Component),L=V,z=e(90943);function X(){return X=Object.assign?Object.assign.bind():function(_){for(var pe=1;pe<arguments.length;pe++){var me=arguments[pe];for(var Re in me)Object.prototype.hasOwnProperty.call(me,Re)&&(_[Re]=me[Re])}return _},X.apply(this,arguments)}function P(_,pe){return he(_)||we(_,pe)||ge(_,pe)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(_,pe){if(_){if(typeof _=="string")return We(_,pe);var me=Object.prototype.toString.call(_).slice(8,-1);if(me==="Object"&&_.constructor&&(me=_.constructor.name),me==="Map"||me==="Set")return Array.from(_);if(me==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(me))return We(_,pe)}}function We(_,pe){(pe==null||pe>_.length)&&(pe=_.length);for(var me=0,Re=new Array(pe);me<pe;me++)Re[me]=_[me];return Re}function we(_,pe){var me=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(me!=null){var Re=[],ot=!0,at=!1,dt,Me;try{for(me=me.call(_);!(ot=(dt=me.next()).done)&&(Re.push(dt.value),!(pe&&Re.length===pe));ot=!0);}catch(Oe){at=!0,Me=Oe}finally{try{!ot&&me.return!=null&&me.return()}finally{if(at)throw Me}}return Re}}function he(_){if(Array.isArray(_))return _}var ze={acss:"css",axml:"markup"},Le=function(pe){var me=pe.children,Re=pe.lang,ot=(0,i.useRef)(),at=(0,i.useState)(!1),dt=P(at,2),Me=dt[0],Oe=dt[1];return i.createElement("div",{className:"dumi-default-source-code"},i.createElement(z.CopyToClipboard,{text:me,onCopy:function(){Oe(!0),clearTimeout(ot.current),ot.current=window.setTimeout(function(){return Oe(!1)},2e3)}},i.createElement("button",{type:"button",className:"dumi-default-source-code-copy","data-copied":Me||void 0},Me?i.createElement(y,null):i.createElement(N,null))),i.createElement(L,X({},K,{code:me.trim(),language:ze[Re]||Re,theme:void 0}),function(Ee){var xe=Ee.className,q=Ee.style,$=Ee.tokens,W=Ee.getLineProps,te=Ee.getTokenProps;return i.createElement("pre",{className:xe,style:q},$.map(function(ae,ve){return i.createElement("div",X({key:String(ve)},W({line:ae,key:ve})),ae.map(function(Be,Ae){return i.createElement("span",X({key:String(ve)},te({token:Be,key:Ae})))}))}))}))},Ne=Le},18280:function(l,c,e){"use strict";e.d(c,{Ep:function(){return j},PP:function(){return h},aU:function(){return s},cP:function(){return N},lX:function(){return y},q_:function(){return b}});var i=e(15882),s;(function(D){D.Pop="POP",D.Push="PUSH",D.Replace="REPLACE"})(s||(s={}));var o=function(D){return D};function r(D,B){if(!D){typeof console!="undefined"&&console.warn(B);try{throw new Error(B)}catch(M){}}}var d="beforeunload",m="hashchange",v="popstate";function y(D){D===void 0&&(D={});var B=D,M=B.window,Q=M===void 0?document.defaultView:M,F=Q.history;function H(){var we=Q.location,he=we.pathname,ze=we.search,Le=we.hash,Ne=F.state||{};return[Ne.idx,o({pathname:he,search:ze,hash:Le,state:Ne.usr||null,key:Ne.key||"default"})]}var K=null;function Y(){if(K)le.call(K),K=null;else{var we=s.Pop,he=H(),ze=he[0],Le=he[1];if(le.length){if(ze!=null){var Ne=Se-ze;Ne&&(K={action:we,location:Le,retry:function(){ge(Ne*-1)}},ge(Ne))}}else X(we)}}Q.addEventListener(v,Y);var re=s.Pop,ce=H(),Se=ce[0],se=ce[1],Te=w(),le=w();Se==null&&(Se=0,F.replaceState((0,i.Z)({},F.state,{idx:Se}),""));function ue(we){return typeof we=="string"?we:j(we)}function V(we,he){return he===void 0&&(he=null),o((0,i.Z)({pathname:se.pathname,hash:"",search:""},typeof we=="string"?N(we):we,{state:he,key:C()}))}function L(we,he){return[{usr:we.state,key:we.key,idx:he},ue(we)]}function z(we,he,ze){return!le.length||(le.call({action:we,location:he,retry:ze}),!1)}function X(we){re=we;var he=H();Se=he[0],se=he[1],Te.call({action:re,location:se})}function P(we,he){var ze=s.Push,Le=V(we,he);function Ne(){P(we,he)}if(z(ze,Le,Ne)){var _=L(Le,Se+1),pe=_[0],me=_[1];try{F.pushState(pe,"",me)}catch(Re){Q.location.assign(me)}X(ze)}}function J(we,he){var ze=s.Replace,Le=V(we,he);function Ne(){J(we,he)}if(z(ze,Le,Ne)){var _=L(Le,Se),pe=_[0],me=_[1];F.replaceState(pe,"",me),X(ze)}}function ge(we){F.go(we)}var We={get action(){return re},get location(){return se},createHref:ue,push:P,replace:J,go:ge,back:function(){ge(-1)},forward:function(){ge(1)},listen:function(he){return Te.push(he)},block:function(he){var ze=le.push(he);return le.length===1&&Q.addEventListener(d,E),function(){ze(),le.length||Q.removeEventListener(d,E)}}};return We}function b(D){D===void 0&&(D={});var B=D,M=B.window,Q=M===void 0?document.defaultView:M,F=Q.history;function H(){var he=N(Q.location.hash.substr(1)),ze=he.pathname,Le=ze===void 0?"/":ze,Ne=he.search,_=Ne===void 0?"":Ne,pe=he.hash,me=pe===void 0?"":pe,Re=F.state||{};return[Re.idx,o({pathname:Le,search:_,hash:me,state:Re.usr||null,key:Re.key||"default"})]}var K=null;function Y(){if(K)le.call(K),K=null;else{var he=s.Pop,ze=H(),Le=ze[0],Ne=ze[1];if(le.length){if(Le!=null){var _=Se-Le;_&&(K={action:he,location:Ne,retry:function(){We(_*-1)}},We(_))}}else P(he)}}Q.addEventListener(v,Y),Q.addEventListener(m,function(){var he=H(),ze=he[1];j(ze)!==j(se)&&Y()});var re=s.Pop,ce=H(),Se=ce[0],se=ce[1],Te=w(),le=w();Se==null&&(Se=0,F.replaceState((0,i.Z)({},F.state,{idx:Se}),""));function ue(){var he=document.querySelector("base"),ze="";if(he&&he.getAttribute("href")){var Le=Q.location.href,Ne=Le.indexOf("#");ze=Ne===-1?Le:Le.slice(0,Ne)}return ze}function V(he){return ue()+"#"+(typeof he=="string"?he:j(he))}function L(he,ze){return ze===void 0&&(ze=null),o((0,i.Z)({pathname:se.pathname,hash:"",search:""},typeof he=="string"?N(he):he,{state:ze,key:C()}))}function z(he,ze){return[{usr:he.state,key:he.key,idx:ze},V(he)]}function X(he,ze,Le){return!le.length||(le.call({action:he,location:ze,retry:Le}),!1)}function P(he){re=he;var ze=H();Se=ze[0],se=ze[1],Te.call({action:re,location:se})}function J(he,ze){var Le=s.Push,Ne=L(he,ze);function _(){J(he,ze)}if(X(Le,Ne,_)){var pe=z(Ne,Se+1),me=pe[0],Re=pe[1];try{F.pushState(me,"",Re)}catch(ot){Q.location.assign(Re)}P(Le)}}function ge(he,ze){var Le=s.Replace,Ne=L(he,ze);function _(){ge(he,ze)}if(X(Le,Ne,_)){var pe=z(Ne,Se),me=pe[0],Re=pe[1];F.replaceState(me,"",Re),P(Le)}}function We(he){F.go(he)}var we={get action(){return re},get location(){return se},createHref:V,push:J,replace:ge,go:We,back:function(){We(-1)},forward:function(){We(1)},listen:function(ze){return Te.push(ze)},block:function(ze){var Le=le.push(ze);return le.length===1&&Q.addEventListener(d,E),function(){Le(),le.length||Q.removeEventListener(d,E)}}};return we}function h(D){D===void 0&&(D={});var B=D,M=B.initialEntries,Q=M===void 0?["/"]:M,F=B.initialIndex,H=Q.map(function(P){var J=o((0,i.Z)({pathname:"/",search:"",hash:"",state:null,key:C()},typeof P=="string"?N(P):P));return J}),K=x(F==null?H.length-1:F,0,H.length-1),Y=s.Pop,re=H[K],ce=w(),Se=w();function se(P){return typeof P=="string"?P:j(P)}function Te(P,J){return J===void 0&&(J=null),o((0,i.Z)({pathname:re.pathname,search:"",hash:""},typeof P=="string"?N(P):P,{state:J,key:C()}))}function le(P,J,ge){return!Se.length||(Se.call({action:P,location:J,retry:ge}),!1)}function ue(P,J){Y=P,re=J,ce.call({action:Y,location:re})}function V(P,J){var ge=s.Push,We=Te(P,J);function we(){V(P,J)}le(ge,We,we)&&(K+=1,H.splice(K,H.length,We),ue(ge,We))}function L(P,J){var ge=s.Replace,We=Te(P,J);function we(){L(P,J)}le(ge,We,we)&&(H[K]=We,ue(ge,We))}function z(P){var J=x(K+P,0,H.length-1),ge=s.Pop,We=H[J];function we(){z(P)}le(ge,We,we)&&(K=J,ue(ge,We))}var X={get index(){return K},get action(){return Y},get location(){return re},createHref:se,push:V,replace:L,go:z,back:function(){z(-1)},forward:function(){z(1)},listen:function(J){return ce.push(J)},block:function(J){return Se.push(J)}};return X}function x(D,B,M){return Math.min(Math.max(D,B),M)}function E(D){D.preventDefault(),D.returnValue=""}function w(){var D=[];return{get length(){return D.length},push:function(M){return D.push(M),function(){D=D.filter(function(Q){return Q!==M})}},call:function(M){D.forEach(function(Q){return Q&&Q(M)})}}}function C(){return Math.random().toString(36).substr(2,8)}function j(D){var B=D.pathname,M=B===void 0?"/":B,Q=D.search,F=Q===void 0?"":Q,H=D.hash,K=H===void 0?"":H;return F&&F!=="?"&&(M+=F.charAt(0)==="?"?F:"?"+F),K&&K!=="#"&&(M+=K.charAt(0)==="#"?K:"#"+K),M}function N(D){var B={};if(D){var M=D.indexOf("#");M>=0&&(B.hash=D.substr(M),D=D.substr(0,M));var Q=D.indexOf("?");Q>=0&&(B.search=D.substr(Q),D=D.substr(0,Q)),D&&(B.pathname=D)}return B}},33712:function(l,c,e){"use strict";e.d(c,{C:function(){return b}});var i=e(96583),s=e(29585),o=e(19956),r=e(40629);function d(h,x){return x?(0,i.pi)((0,i.pi)((0,i.pi)({},h||{}),x||{}),Object.keys(h).reduce(function(E,w){return E[w]=(0,i.pi)((0,i.pi)({},h[w]),x[w]||{}),E},{})):h}function m(h,x){return x?Object.keys(h).reduce(function(E,w){return E[w]=d(h[w],x[w]),E},(0,i.pi)({},h)):h}function v(h){return{create:function(){return{get:function(x){return h[x]},set:function(x,E){h[x]=E}}}}}function y(h){return h===void 0&&(h={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:(0,o.Z)(function(){for(var x,E=[],w=0;w<arguments.length;w++)E[w]=arguments[w];return new((x=Intl.NumberFormat).bind.apply(x,(0,i.ev)([void 0],E,!1)))},{cache:v(h.number),strategy:o.A.variadic}),getDateTimeFormat:(0,o.Z)(function(){for(var x,E=[],w=0;w<arguments.length;w++)E[w]=arguments[w];return new((x=Intl.DateTimeFormat).bind.apply(x,(0,i.ev)([void 0],E,!1)))},{cache:v(h.dateTime),strategy:o.A.variadic}),getPluralRules:(0,o.Z)(function(){for(var x,E=[],w=0;w<arguments.length;w++)E[w]=arguments[w];return new((x=Intl.PluralRules).bind.apply(x,(0,i.ev)([void 0],E,!1)))},{cache:v(h.pluralRules),strategy:o.A.variadic})}}var b=function(){function h(x,E,w,C){E===void 0&&(E=h.defaultLocale);var j=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(M){var Q=j.formatToParts(M);if(Q.length===1)return Q[0].value;var F=Q.reduce(function(H,K){return!H.length||K.type!==r.du.literal||typeof H[H.length-1]!="string"?H.push(K.value):H[H.length-1]+=K.value,H},[]);return F.length<=1?F[0]||"":F},this.formatToParts=function(M){return(0,r.FK)(j.ast,j.locales,j.formatters,j.formats,M,void 0,j.message)},this.resolvedOptions=function(){var M;return{locale:((M=j.resolvedLocale)===null||M===void 0?void 0:M.toString())||Intl.NumberFormat.supportedLocalesOf(j.locales)[0]}},this.getAst=function(){return j.ast},this.locales=E,this.resolvedLocale=h.resolveLocale(E),typeof x=="string"){if(this.message=x,!h.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var N=C||{},D=N.formatters,B=(0,i._T)(N,["formatters"]);this.ast=h.__parse(x,(0,i.pi)((0,i.pi)({},B),{locale:this.resolvedLocale}))}else this.ast=x;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=m(h.formats,w),this.formatters=C&&C.formatters||y(this.formatterCache)}return Object.defineProperty(h,"defaultLocale",{get:function(){return h.memoizedDefaultLocale||(h.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),h.memoizedDefaultLocale},enumerable:!1,configurable:!0}),h.memoizedDefaultLocale=null,h.resolveLocale=function(x){if(typeof Intl.Locale!="undefined"){var E=Intl.NumberFormat.supportedLocalesOf(x);return E.length>0?new Intl.Locale(E[0]):new Intl.Locale(typeof x=="string"?x:x[0])}},h.__parse=s.Qc,h.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},h}()},23323:function(l,c,e){"use strict";e.d(c,{C8:function(){return r},HR:function(){return m},YR:function(){return d},jK:function(){return s},u_:function(){return o}});var i=e(96583),s;(function(v){v.MISSING_VALUE="MISSING_VALUE",v.INVALID_VALUE="INVALID_VALUE",v.MISSING_INTL_API="MISSING_INTL_API"})(s||(s={}));var o=function(v){(0,i.ZT)(y,v);function y(b,h,x){var E=v.call(this,b)||this;return E.code=h,E.originalMessage=x,E}return y.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},y}(Error),r=function(v){(0,i.ZT)(y,v);function y(b,h,x,E){return v.call(this,'Invalid values for "'.concat(b,'": "').concat(h,'". Options are "').concat(Object.keys(x).join('", "'),'"'),s.INVALID_VALUE,E)||this}return y}(o),d=function(v){(0,i.ZT)(y,v);function y(b,h,x){return v.call(this,'Value for "'.concat(b,'" must be of type ').concat(h),s.INVALID_VALUE,x)||this}return y}(o),m=function(v){(0,i.ZT)(y,v);function y(b,h){return v.call(this,'The intl string context variable "'.concat(b,'" was not provided to the string "').concat(h,'"'),s.MISSING_VALUE,h)||this}return y}(o)},40629:function(l,c,e){"use strict";e.d(c,{FK:function(){return m},Gt:function(){return d},du:function(){return o}});var i=e(29585),s=e(23323),o;(function(v){v[v.literal=0]="literal",v[v.object=1]="object"})(o||(o={}));function r(v){return v.length<2?v:v.reduce(function(y,b){var h=y[y.length-1];return!h||h.type!==o.literal||b.type!==o.literal?y.push(b):h.value+=b.value,y},[])}function d(v){return typeof v=="function"}function m(v,y,b,h,x,E,w){if(v.length===1&&(0,i.O4)(v[0]))return[{type:o.literal,value:v[0].value}];for(var C=[],j=0,N=v;j<N.length;j++){var D=N[j];if((0,i.O4)(D)){C.push({type:o.literal,value:D.value});continue}if((0,i.yx)(D)){typeof E=="number"&&C.push({type:o.literal,value:b.getNumberFormat(y).format(E)});continue}var B=D.value;if(!(x&&B in x))throw new s.HR(B,w);var M=x[B];if((0,i.VG)(D)){(!M||typeof M=="string"||typeof M=="number")&&(M=typeof M=="string"||typeof M=="number"?String(M):""),C.push({type:typeof M=="string"?o.literal:o.object,value:M});continue}if((0,i.rp)(D)){var Q=typeof D.style=="string"?h.date[D.style]:(0,i.Ii)(D.style)?D.style.parsedOptions:void 0;C.push({type:o.literal,value:b.getDateTimeFormat(y,Q).format(M)});continue}if((0,i.pe)(D)){var Q=typeof D.style=="string"?h.time[D.style]:(0,i.Ii)(D.style)?D.style.parsedOptions:h.time.medium;C.push({type:o.literal,value:b.getDateTimeFormat(y,Q).format(M)});continue}if((0,i.uf)(D)){var Q=typeof D.style=="string"?h.number[D.style]:(0,i.Wh)(D.style)?D.style.parsedOptions:void 0;Q&&Q.scale&&(M=M*(Q.scale||1)),C.push({type:o.literal,value:b.getNumberFormat(y,Q).format(M)});continue}if((0,i.HI)(D)){var F=D.children,H=D.value,K=x[H];if(!d(K))throw new s.YR(H,"function",w);var Y=m(F,y,b,h,x,E),re=K(Y.map(function(se){return se.value}));Array.isArray(re)||(re=[re]),C.push.apply(C,re.map(function(se){return{type:typeof se=="string"?o.literal:o.object,value:se}}))}if((0,i.Wi)(D)){var ce=D.options[M]||D.options.other;if(!ce)throw new s.C8(D.value,M,Object.keys(D.options),w);C.push.apply(C,m(ce.value,y,b,h,x));continue}if((0,i.Jo)(D)){var ce=D.options["=".concat(M)];if(!ce){if(!Intl.PluralRules)throw new s.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,s.jK.MISSING_INTL_API,w);var Se=b.getPluralRules(y,{type:D.pluralType}).select(M-(D.offset||0));ce=D.options[Se]||D.options.other}if(!ce)throw new s.C8(D.value,M,Object.keys(D.options),w);C.push.apply(C,m(ce.value,y,b,h,x,M-(D.offset||0)));continue}}return r(C)}},74049:function(l,c,e){"use strict";var i=e(36257);function s(){}function o(){}o.resetWarningCache=s,l.exports=function(){function r(v,y,b,h,x,E){if(E!==i){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function d(){return r}var m={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:d,element:r,elementType:r,instanceOf:d,node:r,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:o,resetWarningCache:s};return m.PropTypes=m,m}},40507:function(l,c,e){if(!1)var i,s;else l.exports=e(74049)()},36257:function(l){"use strict";var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=c},71101:function(l,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.getParameters=void 0;var i=e(73564);function s(r){return i.compressToBase64(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function o(r){return s(JSON.stringify(r))}c.getParameters=o},52253:function(l,c,e){"use strict";var i;i=!0,c.Z=void 0;var s=e(71101);c.Z=s.getParameters},37046:function(l,c,e){"use strict";var i=e(62606),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m={};m[i.ForwardRef]=r,m[i.Memo]=d;function v(j){return i.isMemo(j)?d:m[j.$$typeof]||s}var y=Object.defineProperty,b=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,x=Object.getOwnPropertyDescriptor,E=Object.getPrototypeOf,w=Object.prototype;function C(j,N,D){if(typeof N!="string"){if(w){var B=E(N);B&&B!==w&&C(j,B,D)}var M=b(N);h&&(M=M.concat(h(N)));for(var Q=v(j),F=v(N),H=0;H<M.length;++H){var K=M[H];if(!o[K]&&!(D&&D[K])&&!(F&&F[K])&&!(Q&&Q[K])){var Y=x(N,K);try{y(j,K,Y)}catch(re){}}}}return j}l.exports=C},16780:function(l){"use strict";var c=function(e,i,s,o,r,d,m,v){if(!e){var y;if(i===void 0)y=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var b=[s,o,r,d,m,v],h=0;y=new Error(i.replace(/%s/g,function(){return b[h++]})),y.name="Invariant Violation"}throw y.framesToPop=1,y}};l.exports=c},73564:function(l,c,e){var i,s=function(){var o=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",m={};function v(b,h){if(!m[b]){m[b]={};for(var x=0;x<b.length;x++)m[b][b.charAt(x)]=x}return m[b][h]}var y={compressToBase64:function(b){if(b==null)return"";var h=y._compress(b,6,function(x){return r.charAt(x)});switch(h.length%4){default:case 0:return h;case 1:return h+"===";case 2:return h+"==";case 3:return h+"="}},decompressFromBase64:function(b){return b==null?"":b==""?null:y._decompress(b.length,32,function(h){return v(r,b.charAt(h))})},compressToUTF16:function(b){return b==null?"":y._compress(b,15,function(h){return o(h+32)})+" "},decompressFromUTF16:function(b){return b==null?"":b==""?null:y._decompress(b.length,16384,function(h){return b.charCodeAt(h)-32})},compressToUint8Array:function(b){for(var h=y.compress(b),x=new Uint8Array(h.length*2),E=0,w=h.length;E<w;E++){var C=h.charCodeAt(E);x[E*2]=C>>>8,x[E*2+1]=C%256}return x},decompressFromUint8Array:function(b){if(b==null)return y.decompress(b);for(var h=new Array(b.length/2),x=0,E=h.length;x<E;x++)h[x]=b[x*2]*256+b[x*2+1];var w=[];return h.forEach(function(C){w.push(o(C))}),y.decompress(w.join(""))},compressToEncodedURIComponent:function(b){return b==null?"":y._compress(b,6,function(h){return d.charAt(h)})},decompressFromEncodedURIComponent:function(b){return b==null?"":b==""?null:(b=b.replace(/ /g,"+"),y._decompress(b.length,32,function(h){return v(d,b.charAt(h))}))},compress:function(b){return y._compress(b,16,function(h){return o(h)})},_compress:function(b,h,x){if(b==null)return"";var E,w,C={},j={},N="",D="",B="",M=2,Q=3,F=2,H=[],K=0,Y=0,re;for(re=0;re<b.length;re+=1)if(N=b.charAt(re),Object.prototype.hasOwnProperty.call(C,N)||(C[N]=Q++,j[N]=!0),D=B+N,Object.prototype.hasOwnProperty.call(C,D))B=D;else{if(Object.prototype.hasOwnProperty.call(j,B)){if(B.charCodeAt(0)<256){for(E=0;E<F;E++)K=K<<1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++;for(w=B.charCodeAt(0),E=0;E<8;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1}else{for(w=1,E=0;E<F;E++)K=K<<1|w,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=0;for(w=B.charCodeAt(0),E=0;E<16;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1}M--,M==0&&(M=Math.pow(2,F),F++),delete j[B]}else for(w=C[B],E=0;E<F;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1;M--,M==0&&(M=Math.pow(2,F),F++),C[D]=Q++,B=String(N)}if(B!==""){if(Object.prototype.hasOwnProperty.call(j,B)){if(B.charCodeAt(0)<256){for(E=0;E<F;E++)K=K<<1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++;for(w=B.charCodeAt(0),E=0;E<8;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1}else{for(w=1,E=0;E<F;E++)K=K<<1|w,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=0;for(w=B.charCodeAt(0),E=0;E<16;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1}M--,M==0&&(M=Math.pow(2,F),F++),delete j[B]}else for(w=C[B],E=0;E<F;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1;M--,M==0&&(M=Math.pow(2,F),F++)}for(w=2,E=0;E<F;E++)K=K<<1|w&1,Y==h-1?(Y=0,H.push(x(K)),K=0):Y++,w=w>>1;for(;;)if(K=K<<1,Y==h-1){H.push(x(K));break}else Y++;return H.join("")},decompress:function(b){return b==null?"":b==""?null:y._decompress(b.length,32768,function(h){return b.charCodeAt(h)})},_decompress:function(b,h,x){var E=[],w,C=4,j=4,N=3,D="",B=[],M,Q,F,H,K,Y,re,ce={val:x(0),position:h,index:1};for(M=0;M<3;M+=1)E[M]=M;for(F=0,K=Math.pow(2,2),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;switch(w=F){case 0:for(F=0,K=Math.pow(2,8),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;re=o(F);break;case 1:for(F=0,K=Math.pow(2,16),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;re=o(F);break;case 2:return""}for(E[3]=re,Q=re,B.push(re);;){if(ce.index>b)return"";for(F=0,K=Math.pow(2,N),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;switch(re=F){case 0:for(F=0,K=Math.pow(2,8),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;E[j++]=o(F),re=j-1,C--;break;case 1:for(F=0,K=Math.pow(2,16),Y=1;Y!=K;)H=ce.val&ce.position,ce.position>>=1,ce.position==0&&(ce.position=h,ce.val=x(ce.index++)),F|=(H>0?1:0)*Y,Y<<=1;E[j++]=o(F),re=j-1,C--;break;case 2:return B.join("")}if(C==0&&(C=Math.pow(2,N),N++),E[re])D=E[re];else if(re===j)D=Q+Q.charAt(0);else return null;B.push(D),E[j++]=Q+D.charAt(0),C--,Q=D,C==0&&(C=Math.pow(2,N),N++)}}};return y}();i=function(){return s}.call(c,e,c,l),i!==void 0&&(l.exports=i)},45326:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { FC } from 'react';
import Icon from '../Icon';
import './index.css';

interface AlertProps {
  className?: string;
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

const Alert: FC<AlertProps> = (props) => {
  const { className, type, message } = props;

  const clas = classNames('cat-alert', className, {
    [\`cat-alert-\${type}\`]: type,
  });

  const iconMap = {
    success: <Icon size="20" color="#52c41a" name="icon-mianxing_fuzhi_anquanfanghu" />,
    warning: <Icon size="20" color="#faad14" name="icon-mianxing_fuzhi_gaojing" />,
    error: <Icon size="20" color="#ff4d4f" name="icon-mianxing_fuzhi_guanbi" />,
    info: <Icon size="20" color="#1677ff" name="icon-mianxing_fuzhi_xiaoxi" />,
  };

  return (
    <div className={clas}>
      {iconMap[type]}
      <span className="cat-alert-message">{message}</span>
    </div>
  );
};

export default Alert;
`},94715:function(l,c){"use strict";c.Z=`/* alert */
.cat-alert {
  padding: 8px 12px;
  display: flex;
  align-items: center;
}

.cat-alert-message {
  padding: 0 8px;
}

.cat-alert-success {
  border: 1px solid #b7eb8f;
  background-color: #f6ffed;
}

.cat-alert-warning {
  border: 1px solid #ffe58f;
  background-color: #fffbe6;
}

.cat-alert-error {
  border: 1px solid #ffa39e;
  background-color: #fff1f0;
}

.cat-alert-info {
  background-color: #e6f4ff;
  border: 1px solid #91caff;
}`},50197:function(l,c){"use strict";c.Z=`import Alert from "./Alert";

export default Alert`},40825:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { ChangeEvent, FC, ReactElement, useRef, useState } from 'react';
import Input, { InputProps } from '../Input';
import { useClickOut, useDebounceFn } from '../tools/hooks';
import './index.css';

enum keyCode {
  down = 38,
  up = 40,
  esc = 27,
  enter = 13,
}

export type AutoItemType<T = object> = {
  value: string;
} & T;

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  className?: string;
  onSearch: (str: string) => AutoItemType[] | Promise<AutoItemType[]>;
  onSelect?: (item: AutoItemType) => void;
  renderItem?: (item: AutoItemType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { className, onSearch, onSelect, value, renderItem, style, ...restProps } = props;
  const [v, setV] = useState(value || '');
  const [list, setList] = useState<AutoItemType[]>([]);
  const [cur, setCur] = useState(-1); // listItem \u9AD8\u4EAE
  const clas = classNames('cat-auto-complete', className);
  const componentRef = useRef(null);
  useClickOut(componentRef, () => setList([])); // \u70B9\u51FB\u5916\u9762\u533A\u57DF\u9690\u85CF\u63D0\u793A\u5217\u8868
  /**
   * \u6839\u636Evalue\u663E\u793Alist
   * \u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1
   */
  const fetchSuggest = useDebounceFn((v: string) => {
    if (!v) {
      setList([]);
      return;
    }
    const res = onSearch(v);
    if (res instanceof Promise) {
      res.then((result) => setList(result));
    } else {
      setList(res);
    }
  });
  /**
   * \u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1
   */
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setV(value);
    fetchSuggest(value);
  }
  
  function select(item: AutoItemType) {
    if (!item) return;
    setList([]);
    setV(item.value);
    onSelect?.(item);
  }

  function heighLight(index: number) {
    let i = index
    if (i < 0) i = 0;
    if (i >= list.length) i = list.length - 1;
    setCur(i);
  }

  const onKeyDown = (e: any) => {
    const code = e.keyCode;
    if (code === keyCode.down) heighLight(cur - 1);
    if (code === keyCode.up) heighLight(cur + 1);
    if (code === keyCode.esc) setList([]);
    if (code === keyCode.enter) select(list[cur]);
  };

  function itemClass(index: number) {
    return classNames('cat-auto-li', {
      'cat-auto-cur': cur === index,
    });
  }

  function ListItem(item: AutoItemType) {
    return renderItem ? renderItem(item) : item.value;
  }

  const List = () => (
    <ul className="cat-auto-ul">
      {list.map((item, index) => (
        <li onClick={() => select(item)} className={itemClass(index)} key={index}>
          {ListItem(item)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={clas} style={style} ref={componentRef}>
      <Input value={v} onChange={onChange} onKeyDown={onKeyDown} {...restProps} />
      {list.length > 0 && List()}
    </div>
  );
};

export default AutoComplete;
`},16916:function(l,c){"use strict";c.Z=`import { AutoComplete, Icon } from 'catd';
import { jsonp } from './jsonp';

const App = () => {
  async function onSearch(wd: string) {
    let res: any = await jsonp({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      params: { wd },
      cbName: 'show',
    });
    res = res.s.map((value: string, index: number) => ({ value, index }));

    return res;
  }

  return (
    <AutoComplete
      onSearch={onSearch}
      style={{ width: 300 }}
      prefix={<Icon name="search" />}
      placeholder='search' />
  );
};

export default App;


`},9746:function(l,c){"use strict";c.Z=`import { AutoComplete } from 'catd';

const App = () => {
  function onSearch(wd: string) {
    const emails = ['qq', 'gmail', '163'];
    return emails.map((v) => ({ value: \`\${wd}@\${v}.com\` }));
  }

  return <AutoComplete onSearch={onSearch} style={{ width: 300 }} placeholder='\u8BF7\u8F93\u5165\u90AE\u7BB1' />;
};

export default App;
`},66520:function(l,c){"use strict";c.Z=`import styled from 'styled-components';
import { AutoComplete, Icon } from 'catd';
import { AutoItemType } from 'src/AutoComplate/AutoComplete';
import { jsonp } from './jsonp';

type Item = {
  value: string;
  results?: number;
};

const ListItem = styled.div\`
  line-height: 2em;
  display: flex;
  justify-content: space-between;
  span {
    color: #999;
  }
\`;

const App = () => {
  async function onSearch(wd: string) {
    let res: any = await jsonp({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      params: { wd },
      cbName: 'show',
    });
    function radom() {
      let n = Math.random() * 100;
      return Math.floor(n);
    }
    res = res.s.map((value: string) => ({ value, results: radom() }));

    return res;
  }

  const renderItem = (item: AutoItemType<Item>) => (
    <ListItem>
      {item.value}
      <span>{item.results} result</span>
    </ListItem>
  );

  return (
    <AutoComplete
      onSearch={onSearch}
      style={{ width: 300 }}
      renderItem={renderItem}
      addOnAfter={<Icon name="search" />}
      placeholder='search'
    />
  );
};

export default App;

`},64214:function(l,c){"use strict";c.Z=`.cat-auto-complete {
  position: relative;
}
.cat-auto-ul {
  box-shadow: 0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d;
  padding: 12px 0;
  z-index: 99999;
  position: absolute;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}
.cat-auto-li {
  line-height: 2em;
  padding: 0 12px;
}
.cat-auto-cur {
  background-color: var(--blue);
  color: #fff;
}`},37333:function(l,c){"use strict";c.Z=`import AutoComplete from './AutoComplete';

export default AutoComplete;
`},9025:function(l,c){"use strict";c.Z=`import { Obj } from 'src/tools/type';

type JsonpType = {
  url: string;
  params: Obj;
  cbName: string;
};

function getSrc(option: JsonpType) {
  const { url, params, cbName } = option;
  let list = [];
  // eslint-disable-next-line guard-for-in
  for (let key in params) {
    list.push(\`\${key}=\${params[key]}\`);
  }
  return \`\${url}?\${list.join('&')}&cb=\${cbName}\`;
}

export function jsonp(option: JsonpType) {
  const { cbName } = option;
  return new Promise((resolve) => {
    let src = getSrc(option)
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    // @ts-ignore
    window[cbName] = function (data: any) {
      resolve(data);
      document.body.removeChild(script);
    };
  });
}`},72729:function(l,c){"use strict";c.Z=`import {Icon} from '../index';
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './index.css';

type nativeProps = React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

interface ButtonProps extends Partial<nativeProps> {
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm' | 'md';
  btnType?: 'primary' | 'default' | 'danger' | 'link';
  loading?: boolean;
}

type ButtonExp = HTMLButtonElement & HTMLAnchorElement

const Button = forwardRef<ButtonExp, ButtonProps>((props, ref) => {
  const {
    className,
    btnType,
    children,
    href,
    size='md',
    disabled = false,
    loading = false,
    onClick,
    ...others } = props;

  const clas = classNames('cat-button', {
    [\`cat-btn-\${btnType}\`]: btnType,
    [\`cat-btn-\${size}\`]: size,
    'cat-btn-disabled': disabled,
    [className as string]: !!className,
  });

  function click(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if(disabled) return
    if(loading) return
    if(onClick) onClick(e)
  }

  const config = {
    className: clas,
    onClick: click,
    ref,
    ...others
  }


  const iconSize =
    size === 'lg' ? '21' :
    size === 'sm' ? '13' : '16'

  const Loading = loading ? <Icon name='loading' className='cat-loading' size={iconSize}  />: null

  if (btnType === 'link') {
    return (
      <a href={disabled ? undefined : href} {...config} >
        {children}{Loading}
      </a>
    );
  }

  return (
    <button disabled={disabled} type='button' {...config} >
      {children}{Loading}
    </button>
  );
});

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
`},39688:function(l,c){"use strict";c.Z=`import { Button } from 'catd';

export default () => (
  <div>
    <Button className="aaa" btnType="default">
      default
    </Button>
    <Button btnType="primary">pramiry</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);`},65347:function(l,c){"use strict";c.Z=`import { Button } from 'catd';

export default () => (
  <>
    <Button btnType='primary' size="lg">
      large
    </Button>
    <Button btnType="danger">default</Button>
    <Button btnType="default" size="sm">
      small
    </Button>
  </>
);`},97240:function(l,c){"use strict";c.Z=`import { Button } from 'catd';

export default () => (
  <>
    <Button btnType="primary" loading>
      loading...
    </Button>
    <Button btnType="danger" disabled>
      disable
    </Button>
    <Button btnType="link" href="http://www.baidu.com" disabled>
      link disable
    </Button>
  </>
);`},20384:function(l,c){"use strict";c.Z=`.cat-button {
  display: inline-block;
  font-size: var(--font);
  line-height: 1.5em;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  padding: 4px 15px;
  border-radius: 2px;
  box-shadow: 0 2px #0000000b;
  cursor: pointer;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  margin-right: 8px;
  margin-bottom: 12px;
  background-color: #fff;
  border: 1px solid var(--gray);
  user-select: none;
}

.cat-button:hover {
  opacity: .8;
}

.cat-btn-disabled {
  opacity: .39;
  cursor: not-allowed;
}

.cat-btn-disabled:hover {
  opacity: .39;
}

.cat-btn-lg {
  padding: 6.4px 15px;
  font-size: var(--font-lg)
}

.cat-btn-sm {
  padding: 0 7px;
}

.cat-btn-default {
  background-color: #fff;
  color: #000;
  border: 1px solid var(--gray);
}

.cat-btn-default:hover {
  border: 1px solid var(--blue);
  color: var(--blue);
}

.cat-btn-primary {
  background-color: var(--blue);
  color: #fff;
  border: 1px solid transparent;
}

.cat-btn-danger {
  background-color: var(--red);
  color: #fff;
  border: 1px solid transparent;
}

.cat-btn-link {
  background-color: #fff;
  color: var(--blue);
  border: 1px solid transparent;
  box-shadow: none;
}

.cat-btn-link.cat-btn-disabled {
  color: var(--gray);
  opacity: 1;
  text-decoration: none;
}`},58492:function(l,c){"use strict";c.Z=`import Button from "./Button";

export default Button`},12649:function(l,c){"use strict";c.Z=`import { CSSProperties, FC, useState } from 'react';
import { createDay, useCalendar } from './tool';
import classNames from 'classnames';
import {CalendarDate, Icon} from '../index';
import CalendarItem from './CalendarItem';
import './index.css';

interface CalendarProps {
  className?: string
  /**
   * @description css\u6837\u5F0F
   * @type: CSSProperties
   */
  style?: CSSProperties
  /**
   * @description \u9ED8\u8BA4\u5C55\u793A\u7684\u65E5\u671F	
   * @type Date
   */
  defaultValue?: Date,
  /**
   * @description \u5C55\u793A\u65E5\u671F
   * @type Date
   */
  value?: Date,
  onChange?: (date: Date) => void,
  /**
   * @description \u4E0D\u53EF\u9009\u65E5\u671F
   * @type (date: Date) => boolean
   */
  disableDate?: (date: Date) => boolean
}

const Calendar: FC<CalendarProps> = (props) => {
  const { defaultValue, value, className, style, onChange, disableDate } = props
  const {year, month, dates, nextMonth, prevMonth, nextYear, prevYear} = useCalendar(defaultValue||value||new Date())
  const selectedOne = createDay(defaultValue||value)
  const [selectedItem, choose] = useState<CalendarDate|undefined>(selectedOne)
  const clas = classNames('cat-calendar', 'cat-shadown', className)

  function onchange(item: CalendarDate) {
    choose(item)
    if(onChange) onChange(item.date)
  }

  const Weeks = ['\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03'].map(day => {
    return <span className='cat-calendar-week' key={day} >{day}</span>
  })

  function isDisabled(item: CalendarDate) {
    if (disableDate) {
      return disableDate(item.date)
    }
    return false
  }

  const Days = dates.map(item => {
    return (
      <CalendarItem
        disabled={isDisabled(item)}
        select={selectedItem?.key === item.key}
        item={item}
        onClick={onchange}
        key={item.key} />
    )
  })

  const CalendarHead = 
    <div className='cat-calendar-head' >
      <Icon name='jiantou_yemian_xiangzuo' size='21' className='icon' onClick={prevYear} />
      <Icon name='jiantou_liebiaoxiangzuo' size='21' className='icon' onClick={prevMonth} />
      <i>{year} \u5E74 {month} \u6708</i>
      <Icon name='jiantou_liebiaoxiangyou' size='21' className='icon' onClick={nextMonth} />
      <Icon name='jiantou_yemian_xiangyou' size='21' className='icon' onClick={nextYear} />
    </div>

  return (
    <div className={clas} style={style} >
      {CalendarHead}
      <div className='cat-calendar-days' >
        {Weeks}
        {Days}  
      </div>
    </div>
  )
}

export default Calendar;
`},81408:function(l,c){"use strict";c.Z=`import { CalendarDate } from "../index";
import { FC } from "react";
import classNames from "classnames";

interface CalendarItemProps {
  item: CalendarDate,
  onClick: (item: CalendarDate) => any,
  select: boolean, // \u662F\u5426\u88AB\u9009\u4E2D
  disabled: boolean,  // \u662F\u5426\u53EF\u9009
}

const CalendarItem: FC<CalendarItemProps> = (props) => {
  const {item, onClick, select, disabled} = props

  const clas = classNames('cat-calendar-day', {
    'cat-calendar-cur-month': item.flag === 'cur',
    'cat-calendar-today': item.today,
    'cat-calendar-select': select,
    'cat-calendar-disabled': disabled
  })

  function click() {
    if(disabled) return
    onClick(item)
  }

  return <div className={clas} >
    <span onClick={click} >{item.date.getDate()}</span>
  </div>
}

export default CalendarItem`},55166:function(l,c){"use strict";c.Z=`import {Calendar, Message} from "catd"

export default () => {

  function alert(d: Date) {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    Message.success(\`\${year}\u5E74\${month}\u6708\${date}\u65E5\`)
  }

  return (
    <Calendar onChange={d => alert(d)} />
  )
} `},50123:function(l,c){"use strict";c.Z=`import {Calendar, Message} from "catd"

export default () => {

  function alert(d: Date) {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const date = d.getDate()
    Message.success(\`\${year}\u5E74\${month}\u6708\${date}\u65E5\`)
  }

  function disableDate(date: Date) {
    if (date.getDate() === 3) {
      console.log(date.getDate())
      return true
    }
    return false
  }

  return (
    <Calendar
      defaultValue={new Date('2222/2/2')}
      disableDate={disableDate}
      onChange={d => alert(d)} />
  )
}`},20901:function(l,c){"use strict";c.Z=`.cat-calendar {
  width: 300px;
  border-radius: 9px;
  user-select: none;
  cursor: pointer;
}

.cat-calendar-head {
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}

.cat-calendar-head .icon {
  cursor: pointer;
}

.cat-calendar-head i {
  width: 50%;
  text-align: center;
}

.cat-calendar-days {
  height: 256px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.cat-calendar-day,
.cat-calendar-week {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cat-calendar-week {
  font-weight: bolder;
}

.cat-calendar-day span {
  color: var(--gray);
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.cat-calendar-day span:hover {
  background-color: #eee;
}

.cat-calendar-cur-month span {
  color: #333;
}

.cat-calendar-today span {
  border: 1px solid var(--blue);
  color: var(--blue);
}

.cat-calendar-select span {
  background-color: var(--blue);
  color: #fff;
}


.cat-calendar-select span:hover {
  background-color: var(--blue);
}

.cat-calendar-disabled span {
  background-color: var(--gray);
  color: #333;
}

.cat-calendar-disabled span:hover {
  background-color: var(--gray);
  cursor: not-allowed;
}`},62783:function(l,c){"use strict";c.Z=`import Calendar from './Calendar'

export default Calendar`},57219:function(l,c){"use strict";c.Z=`import { useState } from "react"
import { CalendarDate } from "../index"

export function isSameDay(date1: Date, date2: Date) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()
}

export function createDay(date?: Date, flag: CalendarDate['flag'] = 'cur') {
  if(!date) return 
  const today = new Date()
  return {
    date: date,
    key: date.getTime(),
    disabled: false,
    flag,
    today: isSameDay(date, today),
  }
}

class MyDate {
  native: Date
  year: number
  month: number
  date: number
  week: number

  constructor(date: Date) {
    this.native = date
    this.year = this.getYear(date)
    this.month = this.getMonth(date)
    this.date = this.getDate(date)
    this.week = this.getWeek(date)
  }
  // \u83B7\u53D6\u67D0\u5E74\u67D0\u6708\u6700\u540E\u4E00\u5929
  getLastDay(year: number, month: number) {
    return new Date(year, month, 0)
  }
  getYear(date: Date) {
    return date.getFullYear()
  }
  getMonth(date: Date) {
    return date.getMonth() + 1
  }
  getDate(date: Date) {
    return date.getDate()
  }
  getWeek(date: Date) {
    let week = date.getDay()
    return week === 0 ? 7 : week
  }
}

class CalendarObj extends MyDate {
  dates: CalendarDate[] = []

  constructor(date: Date) {
    super(date)
    this.getDays()
  }
  // \u4E0B\u4E00\u4E2A\u6708\u6700\u540E\u4E00\u5929 
  nextMonth() {
    let month = this.month + 1
    let year = this.year
    if (month > 12) {
      month = 1
      year++
    }
    return this.getLastDay(year, month)
  }
  // \u4E0A\u4E00\u4E2A\u6708\u6700\u540E\u4E00\u5929
  prevMonth() {
    let month = this.month - 1
    let year = this.year
    if (month <= 0) {
      month = 12
      year--
    }
    return this.getLastDay(year, month)
  }
  // \u4E0A\u4E00\u5E74
  nextYear() {
    let year = this.year + 1
    return this.getLastDay(year, this.month)
  }
  // \u4E0B\u4E00\u5E74
  prevYear() {
    let year = this.year - 1
    return this.getLastDay(year, this.month)
  }

  getDays() {
    this.addCur()
    this.addPrev()
    this.addNext()
  }

  private addCur() {
    const lastDay = this.getLastDay(this.year, this.month).getDate()  // \u8FD9\u4E2A\u6708\u6700\u540E\u4E00\u5929

    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(\`\${this.year}/\${this.month}/\${day}\`)
      const someDay = createDay(date, 'cur')
      this.dates.push(someDay!)
    }
  }

  private addPrev() {
    const prevMonth = this.prevMonth() // \u4E0A\u4E2A\u6708\u6700\u540E\u4E00\u5929
    const week = this.getWeek(prevMonth)  // \u4E0A\u4E2A\u6708\u6700\u540E\u4E00\u5929\u662F\u5468\u51E0
    const lastDay = this.getDate(prevMonth) // \u4E0A\u4E2A\u6708\u6700\u540E\u4E00\u5929\u662F\u51E0\u53F7

    for (let day = lastDay; day > lastDay - week; day--) {
      const year = this.getYear(prevMonth)
      const month = this.getMonth(prevMonth)
      const date = new Date(\`\${year}/\${month}/\${day}\`)
      const someDay = createDay(date, 'prev')
      this.dates.unshift(someDay!)
    }
  }

  private addNext() {
    const nextMonth = this.nextMonth() // \u4E0B\u4E00\u4E2A\u6708\u67D0\u5929\u7684\u65E5\u671F\u5BF9\u8C61
    const times = 42 - this.dates.length

    for (let day = 1; day <= times; day++) {
      const year = this.getYear(nextMonth)
      const month = this.getMonth(nextMonth)
      const date = new Date(\`\${year}/\${month}/\${day}\`)
      const someDay = createDay(date, 'next')
      this.dates.push(someDay!)
    }
  }
}

export function useCalendar(date: Date) {
  const [calendar, setC] = useState(new CalendarObj(date))

  return {
    dates: calendar.dates,
    year: calendar.year,
    month: calendar.month,
    nextMonth() {
      const date = calendar.nextMonth()
      setC(new CalendarObj(date))
    },
    prevMonth() {
      const date = calendar.prevMonth()
      setC(new CalendarObj(date))
    },
    nextYear() {
      const date = calendar.nextYear()
      setC(new CalendarObj(date))
    },
    prevYear() {
      const date = calendar.prevYear()
      setC(new CalendarObj(date))
    }
  }
}
`},1149:function(l,c){"use strict";c.Z=`import { FC, ReactElement, useRef } from 'react';
import {Popup, DropItem, PopupExp} from '../index';
import DropdownItem from './DropdownItem';
import classNames from 'classnames';
import './index.css';

interface DropdownProps {
  /**
   * @description \u83DC\u5355\u914D\u7F6E\u9879
   * @type DropItem[ ]
   */
  menu: DropItem[],
  children: ReactElement,
  /**
   * @description \u89E6\u53D1\u65B9\u5F0F
   * @type 'click' | 'hover'
   * @default 'hover'
   */
  trigger?: 'click' | 'hover',
  /**
   * \u5931\u6548
   */
  disable?: boolean,
  /**
   * \u9009\u62E9\u65F6\u89E6\u53D1
   */
  onChoose?: (res: DropItem) => any
}

const Dropdown: FC<DropdownProps> = (props) => {
  const {children, menu, onChoose, disable, trigger='hover'} = props
  const PopupRef = useRef<PopupExp>(null)
  const clasList = classNames('cat-dropdown-list', 'cat-shadown')

  if (disable) {
    return children
  }

  const choose = (item: DropItem) => {
    if(item.disable) return
    if (onChoose) onChoose(item)
    PopupRef.current?.setVisible(false)
  }

  const List = <ul className={clasList}>
    {
      menu.map(item =>
        <div key={item.key} onClick={() => choose(item)} >
          <DropdownItem disable={item.disable} danger={item.danger}>{item.label}</DropdownItem>
        </div>
      )
    }
  </ul>

  return <Popup overLay={List} trigger={trigger} placement="bottom" space={3} ref={PopupRef} >
    {children}
  </Popup>
}

export default Dropdown;


`},42128:function(l,c){"use strict";c.Z=`import classNames from "classnames"
import { FC } from "react"

interface DropdownItemProps {
  disable?: boolean,
  danger?: boolean,
  children?: any,
  icon?: any,
}

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const {children, icon, disable, danger} = props

  const clas = classNames('cat-dropdown-item', {
    'cat-dropdown-disable': disable,
    'cat-dropdown-danger': danger,
  })

  return <li className={clas} >
    {icon}
    <span>{children}</span>
  </li>
}

export default DropdownItem`},46381:function(l,c){"use strict";c.Z=`import { Dropdown, Icon, DropItem, Button, Message} from "catd"

const menu:DropItem[] = [
  {
    key: '0',
    label: '1st menu item'
  }, {
    key: '1',
    label: '2nd menu item',
    disable: true,
    icon: <Icon name='operation' />
  }, {
    key: '2',
    label: '3rd menu item',
  }, {
    key: '3',
    label: 'a danger menu item',
    danger: true
  }
]

export default () => {

  const choose = (item: DropItem) => {
    if(item.danger) Message.error(item.label)
    else Message.info(item.label)
  }

  return <Dropdown menu={menu} onChoose={choose} >
    <Button>Hover me <Icon name="arrow-down-bold"/></Button>
  </Dropdown>
}`},65734:function(l,c){"use strict";c.Z=`.cat-dropdown-list {
  min-width: 90px;
  padding: 4px;
  background-color: #fff;
}

.cat-dropdown-item {
  line-height: 22px;
  padding: 4px;
  border-radius: 3px;
}

.cat-dropdown-item:hover {
  background-color: #eee;
  cursor: pointer;
}

.cat-dropdown-disable {
  color: var(--gray);
}

.cat-dropdown-disable:hover {
  cursor: not-allowed;
}

.cat-dropdown-danger {
  color: var(--red);
}

.cat-dropdown-danger:hover {
  color: #fff;
  background-color: var(--red);
}`},13389:function(l,c){"use strict";c.Z=`import Dropdown from './Dropdown'

export default Dropdown`},20856:function(l,c){"use strict";c.Z=`import React, { FC, FormEvent, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { useMounted } from '../tools/hooks';
import { Obj } from '../tools/type';
import useForm, { FormContext } from './useForm';

interface FormProps {
  className?: string;
  children?: ReactNode;
  /**
   * \u8868\u5355\u9ED8\u8BA4\u503C\uFF0C\u53EA\u6709\u521D\u59CB\u5316\u4EE5\u53CA\u91CD\u7F6E\u65F6\u751F\u6548
   */
  initialValues?: Obj;
  /**
   * \u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6
   */
  onFinish?: (arg: any) => any;
  /**
   * \u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u5931\u8D25\u540E\u56DE\u8C03\u4E8B\u4EF6
   */
  onFinishFailed?: (arg: any) => any;
  style?: CSSProperties;
}

const Form: FC<FormProps> = (props) => {
  const { children, initialValues, onFinish, onFinishFailed, style } = props;
  const formApi = useForm();

  useMounted(() => {
    if (initialValues) {
      formApi.setForm(initialValues);
    }
  });

  async function submit(e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const values = await formApi.validate();
      if(onFinish) onFinish(values);
    } catch (error) {
      if(onFinishFailed) onFinishFailed(error);
    }
  }

  return (
    <form onSubmit={submit} style={style}>
      <FormContext.Provider value={formApi}>{children}</FormContext.Provider>
    </form>
  );
};

export default Form;
`},75287:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { FC, ReactElement, useContext } from 'react';
import { useMounted } from '../tools/hooks';
import './index.css';
import { FormContext } from './useForm';
import { FormItemRule } from './valitate';

interface FormItemProps {
  className?: string;
  children?: ReactElement;
  /**
   * label \u6807\u7B7E\u7684\u6587\u672C
   */
  label?: string;
  /**
   * \u5B57\u6BB5\u540D
   */
  name?: string;
  /**
   * \u8BBE\u7F6E\u6536\u96C6\u5B57\u6BB5\u503C\u53D8\u66F4\u7684\u65F6\u673A
   */
  trigger?: 'onChange' | 'onBlur';
  /**
   * \u6821\u9A8C\u89C4\u5219\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u7684\u6821\u9A8C\u903B\u8F91\u3002
   */
  rules?: FormItemRule[];
}

const FormItem: FC<FormItemProps> = (props) => {
  const { className, children, name, trigger, rules } = props;
  const formApi = useContext(FormContext);
  const clas = classNames('cat-form-item', className);

  useMounted(() => {
    formApi.regist(name, rules);
  });


  function onChange(e: any) {
    const value = e?.target?.value ? e.target.value : e
    const valuse = formApi.setValue(name, value);
    if (trigger === 'onChange') {
      formApi.validateItem(name, valuse);
    }
  }

  function onBlur() {
    if (trigger === 'onBlur') {
      const values = formApi.getForm();
      formApi.validateItem(name, values);
    }
  }

  const newChildren = React.Children.map(children, (child) => {
    if (!child) return null;
    return React.cloneElement(child, {
      value: formApi.getValue(name) || '',
      onChange,
      onBlur,
    });
  });

  return (
    <div className={clas}>
      <div className="cat-form-label">{props.label}</div>
      <div className="cat-form-right" data-err={formApi.getFormItemError(name)}>
        {newChildren}
      </div>
    </div>
  );
};

FormItem.defaultProps = {
  trigger: 'onChange',
};

export default FormItem;
`},7743:function(l,c){"use strict";c.Z=`import { Form, Input, Button } from 'catd';

function rePasswordValidate(password: any, values: any) {
  if (values.password !== password) return '\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4';
}

const rules = {
  username: [{ required: true, min: 3, max: 6 }],
  password: [
    { required: true, msg: '\u5FC5\u586B' },
    { min: 6, msg: '\u5BC6\u7801\u592A\u77ED\u4E86' },
    { max: 12, msg: '\u5BC6\u7801\u592A\u957F\u4E86' },
  ],
  repassword: [{ required: true, msg: '\u5FC5\u586B' }, { validator: rePasswordValidate }],
};


export default () => {
  function onFinish(values: any) {
    console.log(values, 'success');
  }

  function onFinishFailed(values: any) {
    console.log(values, 'fail');
  }

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} style={{ width: 600 }}>
      <Form.Item name="username" label="\u7528\u6237\u540D" rules={rules.username}>
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item name="password" label="\u5BC6\u7801" rules={rules.password}>
        <Input placeholder="password" />
      </Form.Item>
      <Form.Item name="repassword" label="\u91CD\u590D\u5BC6\u7801" rules={rules.repassword}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button>\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
  );
};
`},22753:function(l,c){"use strict";c.Z=`import { Form, Input, Button } from 'catd';

const initialValues = {
  username: 'jack',
};

const rules = {
  username: [{ required: true, min: 3, max: 6 }],
  password: [
    { required: true, msg: '\u5FC5\u586B' },
    { min: 6, msg: '\u5BC6\u7801\u592A\u77ED\u4E86' },
    { max: 12, msg: '\u5BC6\u7801\u592A\u957F\u4E86' },
  ],
};

export default () => {
  function onFinish(values: any) {
    console.log(values, 'success');
  }

  function onFinishFailed(values: any) {
    console.log(values, 'fail');
  }

  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={initialValues}
      style={{ width: 600 }}
    >
      <Form.Item name="username" label="\u7528\u6237\u540D" rules={rules.username} trigger="onBlur">
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item name="password" label="\u5BC6\u7801" rules={rules.password}>
        <Input placeholder="password" />
      </Form.Item>

      <Form.Item>
        <Button>\u63D0\u4EA4</Button>
      </Form.Item>
    </Form>
  );
};
`},19803:function(l,c){"use strict";c.Z=`.cat-form {
  background-color: gainsboro;
  
}

.cat-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}
.cat-form-label {
  text-align: right;
  flex: 8;
  padding: 0 12px;
}
.cat-form-right {
  flex: 16;
  position: relative;
}
.cat-form-right::after {
  content: attr(data-err);
  color: var(--red);
  position: absolute;
  top: 110%;
  left: 0;
}`},90966:function(l,c){"use strict";c.Z=`import FormItem from './FormItem';
import FormGroup from './Form';

type FormGroupType = typeof FormGroup;

interface FormProps extends FormGroupType {
  Item: typeof FormItem;
}

const Form = FormGroup as FormProps;
Form.Item = FormItem;

export default Form;
`},263:function(l,c){"use strict";c.Z=`import React, { useRef, useState } from 'react';
import { Obj } from '../tools/type';
import Validator, { FormErrors, FormItemRule, FormRules } from './valitate';

export const FormContext = React.createContext<any>(null);

export default function useForm() {
  const [values, setValues] = useState<Obj>({});
  const [formErrors, setformErrors] = useState<FormErrors>({});
  const formRules = useRef<FormRules>({});
  const validator = useRef<Validator | null>(null);

  // values: {} --> {username: undefind}
  function valuesAddName(name: string) {
    setValues((v) => {
      v[name] = undefined;
      return { ...v };
    });
  }
  // formErrors: {username} --> {username, password}
  function setFormItemError(name: string, formItemErrors: string[]) {
    setformErrors((errs) => {
      errs[name] = formItemErrors;
      return { ...errs };
    });
  }
  // formErrors: {username, password} --> {username}
  function clearFormItemError(name: string) {
    setformErrors((errs) => {
      delete errs[name];
      return { ...errs };
    });
  }

  return {
    getForm() {
      return values;
    },

    getValue(name?: string) {
      if (name) {
        return values[name];
      }
    },

    setValue(name?: string, value?: any) {
      let currentValues = { ...values };
      if (name) {
        currentValues[name] = value;
        setValues(currentValues);
      }
      return currentValues;
    },
    /**
     *
     * values: {} -> {user: undefind}
     * formRules: {} -> {user: [{required: true}]}
     */
    regist(name?: string, formItemRules?: FormItemRule[]) {
      if (name) {
        valuesAddName(name);
      }
      // {} --> { username: [{require: true}] }
      if (name && formItemRules) {
        formRules.current[name] = formItemRules;
      }
    },

    setForm(values: Obj) {
      setValues((v) => {
        return { ...v, ...values };
      });
    },
    /**
     * \u65E0\u8BEF: \u6E05\u9664\u4E4B\u524D\u9519\u8BEF\u4FE1\u606F
     * \u6709\u8BEF: \u66F4\u65B0\u9519\u8BEF\u4FE1\u606F
     */
    async validateItem(name?: string, values?: Obj) {
      if (!name || !values) {
        return values;
      }
      if (!validator.current) {
        validator.current = new Validator(formRules.current);
      }
      try {
        const value = await validator.current.validateItem(name, values);
        clearFormItemError(name);
        return value;
      } catch (errors) {
        setFormItemError(name, errors as string[]);
        throw errors;
      }
    },
    /**
     * \u6709\u8BEF: \u66F4\u65B0error\u5E76 reject(error)
     * \u65E0\u8BEF: resolve(values)
     */
    async validate() {
      if (!validator.current) {
        validator.current = new Validator(formRules.current);
      }
      try {
        const res = await validator.current.validate(values);
        return res;
      } catch (errors) {
        setformErrors(errors as FormErrors);
        throw errors;
      }
    },

    getFormItemError(name?: string) {
      if (name) {
        return formErrors[name] ? formErrors[name][0] : '';
      }
    },
  };
}
`},7808:function(l,c){"use strict";c.Z=`import { Obj } from '../tools/type';

/**
 * \u4F7F\u7528:
 *
 * 1. \u751F\u6210\u6821\u9A8C\u5668\u65F6\u4F20\u5165\u89C4\u5219
 * cosnt validtor = new Validator({
 *   username: [{require: true}, ... ],
 *   paddord: [{max: 12, min: 6}, ...]
 * })
 *
 * 2. \u6821\u9A8C\u6240\u6709\u503C
 * validtor.validate({
 *  username: 'jack',
 *  paddword: '123'
 * })
 *
 * 3. \u6821\u9A8C\u67D0\u4E00\u9879
 * validtor.validateItem('username', {
 *  username: 'jack',
 *  paddword: '123'
 * })
 */

export type FormErrors = { [name: string]: string[] };
export type FormRules = { [name: string]: FormItemRule[] };
export type FormItemRule = {
  required?: boolean;
  max?: number;
  min?: number;
  type?: any;
  validator?: Function;
  msg?: string;
};

export default class Validator {
  private formRules;

  constructor(formRules: FormRules) {
    this.formRules = formRules;
  }

  async validate(values: Obj) {
    const formErrors: FormErrors = {};
    for (let name in this.formRules) {
      try {
        await this.validateItem(name, values);
      } catch (errors) {
        formErrors[name] = errors as string[];
      }
    }
    if (Object.keys(formErrors).length) throw formErrors;
    else return values;
  }

  async validateItem(name: string, values: Obj) {
    const formItemRules = this.formRules[name];
    const formItemErr = await this.checkItem(name, values, formItemRules);
    if (formItemErr.length) throw formItemErr;
    else return values[name];
  }

  async checkItem(name: string, values: any, formItemRules: FormItemRule[]) {
    let formItemErr: string[] = [];
    const value = values[name];
    for (let rule of formItemRules) {
      if (rule.required === true && !value) {
        formItemErr.push(rule.msg || \`\${name}\u4E0D\u80FD\u4E3A\u7A7A\`);
      }
      if (rule.min && rule.min > value?.length) {
        formItemErr.push(rule.msg || \`\${name}\u957F\u5EA6\u4E0D\u5C0F\u4E8E\${rule.min}\`);
      }
      if (rule.max && rule.max < value?.length) {
        formItemErr.push(rule.msg || \`\${name}\u957F\u5EA6\u4E0D\u5927\u4E8E\${rule.max}\`);
      }
      if (rule.type && rule.type !== typeof value) {
        formItemErr.push(rule.msg || \`\${name}\u7C7B\u578B\u4E3A\${rule.type}\`);
      }
      if (rule.validator) {
        const err = await rule.validator(value, values);
        if (err) formItemErr.push(err);
      }
    }
    return formItemErr;
  }
}
`},29959:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { CSSProperties, FC, useState } from 'react';
import './index.css';
import './iconfont.js';

type nativeProps = React.SVGAttributes<SVGSVGElement>;
export interface IconProps extends Partial<nativeProps> {
  className?: string;
  name?: string;
  color?: string;
  size?: string;
  hoverColor?: string;
}

const Icon: FC<IconProps> = (props) => {
  const { className, name, size, color, hoverColor, ...others } = props;
  const clas = classNames('cat-icon', className, {});
  const [fill, setFill] = useState(color);

  const style: CSSProperties = {
    width: size,
    height: size,
    fill,
  };

  function onMouseEnter(e: any) {
    if (hoverColor) setFill(hoverColor);
    if (others.onMouseEnter) {
      others?.onMouseEnter(e);
    }
  }

  function onMouseLeave(e: any) {
    if (color) setFill(color);
    if (others.onMouseEnter) {
      others?.onMouseEnter(e);
    }
  }

  return (
    <svg
      className={clas}
      aria-hidden="true"
      {...others}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <use xlinkHref={\`#icon-\${name}\`}></use>
    </svg>
  );
};
Icon.defaultProps = {
  color: 'currentColor',
  size: '1em',
};
export default Icon;
`},60138:function(l,c){"use strict";c.Z=`/**
 */
import { FC } from 'react';
import { Icon, Message } from 'catd';
import styled from 'styled-components';

const Card = styled.div\`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 6px;
  cursor: copy;
  &:hover {
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  }
  .name {
    font-size: 12px;
    padding-top: 12px;
    text-align: center;
    width: 100px; /*\u5FC5\u987B\u8BBE\u7F6E\u5BBD\u5EA6*/
    overflow: hidden; /*\u6EA2\u51FA\u9690\u85CF*/
    text-overflow: ellipsis; /*\u4EE5\u7701\u7565\u53F7...\u663E\u793A*/
    white-space: nowrap; /*\u5F3A\u5236\u4E0D\u6362\u884C*/
  }
\`;

const list = [
  { name: 'add' },
  { name: 'camera' },
  { name: 'chart-bar' },
  { name: 'comment' },
  { name: 'chart-pie' },
  { name: 'cry' },
  { name: 'customer-service' },
  { name: 'delete' },
  { name: 'data-view' },
  { name: 'discount' },
  { name: 'electronics' },
  { name: 'film' },
  { name: 'fabulous' },
  { name: 'folder-close' },
  { name: 'filter' },
  { name: 'file-open' },
  { name: 'menu' },
  { name: 'loading' },
  { name: 'notification' },
  { name: 'mic' },
  { name: 'operation' },
  { name: 'picture' },
  { name: 'save' },
  { name: 'search' },
  { name: 'security' },
  { name: 'time' },
  { name: 'telephone-out' },
  { name: 'user' },
  { name: 'arrow-up-bold' },
  { name: 'arrow-down-bold' },
  { name: 'RectangleCopy' },
  { name: 'RectangleCopy1' },
  { name: 'icon-mianxing_fuzhi_guanbi' },
  { name: 'icon-mianxing_fuzhi_anquanfanghu' },
  { name: 'icon-mianxing_fuzhi_gaojing' },
  { name: 'icon-mianxing_fuzhi_xiaoxi' },
  { name: 'jiantou_liebiaoxiangyou' },
  { name: 'jiantou_liebiaoxiangzuo'},
  { name: 'jiantou_yemian_xiangyou'},
  { name: 'jiantou_yemian_xiangzuo'},
  { name: 'file'},
];

const App: FC = () => {
  function copy(name: string) {
    navigator.clipboard.writeText(name);
    Message.success(\`\u590D\u5236\u6210\u529F:\${name} \u{1F38A}\`);
  }

  return (
    <div>
      {list.map((item) => (
        <Card onClick={() => copy(item.name)} key={item.name} >
          <Icon name={item.name} size="30" />
          <div className="name">{item.name}</div>
        </Card>
      ))}
    </div>
  );
};

export default App;
`},26480:function(l,c){"use strict";c.Z=`window._iconfont_svg_string_3545739='<svg><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M842.666667 285.866667l-187.733334-187.733334c-14.933333-14.933333-32-21.333333-53.333333-21.333333H234.666667C194.133333 74.666667 160 108.8 160 149.333333v725.333334c0 40.533333 34.133333 74.666667 74.666667 74.666666h554.666666c40.533333 0 74.666667-34.133333 74.666667-74.666666V337.066667c0-19.2-8.533333-38.4-21.333333-51.2z m-44.8 44.8c-2.133333 2.133333-4.266667 0-8.533334 0h-170.666666c-6.4 0-10.666667-4.266667-10.666667-10.666667V149.333333c0-2.133333 0-6.4-2.133333-8.533333 0 0 2.133333 0 2.133333 2.133333l189.866667 187.733334z m-8.533334 554.666666H234.666667c-6.4 0-10.666667-4.266667-10.666667-10.666666V149.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h311.466666c-2.133333 4.266667-2.133333 6.4-2.133333 10.666666v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666667h170.666666c4.266667 0 6.4 0 10.666667-2.133334V874.666667c0 6.4-4.266667 10.666667-10.666667 10.666666z" fill="#666666" ></path><path d="M640 693.333333H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h298.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM640 522.666667H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h298.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM341.333333 416h85.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-85.333334c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32z" fill="#666666" ></path></symbol><symbol id="icon-jiantou_liebiaoxiangyou" viewBox="0 0 1024 1024"><path d="M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z" fill="#444444" ></path></symbol><symbol id="icon-jiantou_liebiaoxiangzuo" viewBox="0 0 1024 1024"><path d="M503.466667 490.666667l174.933333 174.933333-59.733333 59.733333L384 490.666667 618.666667 256l59.733333 59.733333-174.933333 174.933334z" fill="#444444" ></path></symbol><symbol id="icon-jiantou_yemian_xiangyou" viewBox="0 0 1024 1024"><path d="M430.933333 490.666667L256 665.6 315.733333 725.333333l234.666667-234.666666L315.733333 256 256 315.733333l174.933333 174.933334z m256 0L512 665.6l59.733333 59.733333 234.666667-234.666666L576 256 512 315.733333l174.933333 174.933334z" fill="#444444" ></path></symbol><symbol id="icon-jiantou_yemian_xiangzuo" viewBox="0 0 1024 1024"><path d="M635.733333 490.666667l174.933334 174.933333-64 59.733333-234.666667-234.666666L746.666667 256 810.666667 315.733333l-174.933334 174.933334z m-260.266666 0l174.933333 174.933333-59.733333 59.733333L256 490.666667 490.666667 256l59.733333 59.733333-174.933333 174.933334z" fill="#444444" ></path></symbol><symbol id="icon-ashbin" viewBox="0 0 1024 1024"><path d="M874.666667 241.066667h-202.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667h-170.666666c-40.533333 0-74.666667 34.133333-74.666667 74.666667v70.4H149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h53.333334V853.333333c0 40.533333 34.133333 74.666667 74.666666 74.666667h469.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V305.066667H874.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM416 170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h170.666666c6.4 0 10.666667 4.266667 10.666667 10.666667v70.4h-192V170.666667z m341.333333 682.666666c0 6.4-4.266667 10.666667-10.666666 10.666667H277.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V309.333333h490.666666V853.333333z"  ></path><path d="M426.666667 736c17.066667 0 32-14.933333 32-32V490.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333333c0 17.066667 14.933333 32 32 32zM597.333333 736c17.066667 0 32-14.933333 32-32V490.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333333c0 17.066667 14.933333 32 32 32z"  ></path></symbol><symbol id="icon-browse" viewBox="0 0 1024 1024"><path d="M512 836.266667C230.4 836.266667 74.666667 533.333333 68.266667 520.533333c-4.266667-8.533333-4.266667-19.2 0-29.866666 6.4-12.8 164.266667-315.733333 443.733333-315.733334 281.6 0 437.333333 305.066667 443.733333 317.866667 4.266667 8.533333 4.266667 19.2 0 29.866667-6.4 10.666667-162.133333 313.6-443.733333 313.6zM132.266667 505.6c34.133333 57.6 170.666667 266.666667 379.733333 266.666667s345.6-209.066667 379.733333-266.666667c-34.133333-57.6-170.666667-266.666667-379.733333-266.666667S166.4 448 132.266667 505.6z"  ></path><path d="M512 650.666667c-76.8 0-138.666667-61.866667-138.666667-138.666667s61.866667-138.666667 138.666667-138.666667 138.666667 61.866667 138.666667 138.666667-61.866667 138.666667-138.666667 138.666667z m0-213.333334c-40.533333 0-74.666667 34.133333-74.666667 74.666667s34.133333 74.666667 74.666667 74.666667 74.666667-34.133333 74.666667-74.666667-34.133333-74.666667-74.666667-74.666667z"  ></path></symbol><symbol id="icon-icon-mianxing_fuzhi_guanbi" viewBox="0 0 1024 1024"><path d="M512 177.980952c-181.638095 0-329.142857 147.504762-329.142857 329.142858s147.504762 329.142857 329.142857 329.142857 329.142857-147.504762 329.142857-329.142857-147.504762-329.142857-329.142857-329.142858z m140.190476 425.447619L608.304762 646.095238 512 549.790476 415.695238 646.095238l-42.666667-42.666667 96.304762-96.304761-96.304762-96.304762 42.666667-42.666667L512 463.238095l96.304762-96.304762 42.666667 42.666667-96.304762 96.304762 97.523809 97.523809z"  ></path></symbol><symbol id="icon-icon-mianxing_fuzhi_anquanfanghu" viewBox="0 0 1024 1024"><path d="M510.780952 168.228571c-90.209524 60.952381-179.2 93.866667-266.971428 99.961905v323.047619c0 88.990476 90.209524 179.2 269.409524 265.752381 177.980952-78.019048 268.190476-168.228571 268.190476-265.752381V265.752381c-115.809524-15.847619-206.019048-48.761905-270.628572-97.52381z m-21.942857 470.552381l-120.685714-120.685714 42.666667-42.666667 76.8 76.8 146.285714-146.285714 42.666667 42.666667-187.733334 190.171428z"  ></path></symbol><symbol id="icon-icon-mianxing_fuzhi_gaojing" viewBox="0 0 1024 1024"><path d="M512 182.857143c-181.638095 0-329.142857 147.504762-329.142857 329.142857s147.504762 329.142857 329.142857 329.142857 329.142857-147.504762 329.142857-329.142857-147.504762-329.142857-329.142857-329.142857z m41.447619 131.657143L547.352381 621.714286h-54.857143l-6.095238-307.2h67.047619z m-3.657143 418.133333c-7.314286 7.314286-17.066667 12.190476-26.819047 12.190476-12.190476 0-21.942857-3.657143-30.476191-12.190476-7.314286-7.314286-12.190476-17.066667-12.190476-28.038095 0-10.971429 3.657143-20.72381 12.190476-28.038095 7.314286-7.314286 17.066667-10.971429 28.038095-10.971429 10.971429 0 20.72381 3.657143 28.038096 12.190476 7.314286 7.314286 12.190476 17.066667 12.190476 28.038095 0 9.752381-3.657143 19.504762-10.971429 26.819048z"  ></path></symbol><symbol id="icon-icon-mianxing_fuzhi_xiaoxi" viewBox="0 0 1024 1024"><path d="M175.542857 236.495238v451.047619H426.666667l85.333333 99.961905 85.333333-99.961905h251.12381v-451.047619H175.542857zM327.92381 512c-26.819048 0-47.542857-20.72381-47.542858-47.542857s20.72381-47.542857 47.542858-47.542857 47.542857 20.72381 47.542857 47.542857-20.72381 47.542857-47.542857 47.542857zM512 512c-26.819048 0-47.542857-20.72381-47.542857-47.542857s20.72381-47.542857 47.542857-47.542857 47.542857 20.72381 47.542857 47.542857S538.819048 512 512 512z m184.07619 0c-26.819048 0-47.542857-20.72381-47.542857-47.542857s20.72381-47.542857 47.542857-47.542857 47.542857 20.72381 47.542858 47.542857-21.942857 47.542857-47.542858 47.542857z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M853.333333 480H544V170.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v309.333333H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h309.333333V853.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V544H853.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"  ></path></symbol><symbol id="icon-camera" viewBox="0 0 1024 1024"><path d="M846.933333 238.933333h-140.8L646.4 149.333333c-6.4-10.666667-17.066667-17.066667-29.866667-17.066666h-209.066666c-12.8 0-23.466667 6.4-29.866667 17.066666l-59.733333 89.6H177.066667c-57.6 0-106.666667 46.933333-106.666667 106.666667v426.666667c0 57.6 46.933333 106.666667 106.666667 106.666666h672c57.6 0 106.666667-46.933333 106.666666-106.666666v-426.666667c-2.133333-59.733333-49.066667-106.666667-108.8-106.666667z m34.133334 533.333334c0 19.2-14.933333 34.133333-34.133334 34.133333H177.066667c-19.2 0-34.133333-14.933333-34.133334-34.133333v-426.666667c0-19.2 14.933333-34.133333 34.133334-34.133333h160c12.8 0 23.466667-6.4 29.866666-17.066667L426.666667 206.933333h170.666666l59.733334 89.6c6.4 10.666667 17.066667 17.066667 29.866666 17.066667h160c19.2 0 34.133333 14.933333 34.133334 34.133333v424.533334z"  ></path><path d="M512 364.8c-96 0-174.933333 78.933333-174.933333 174.933333 0 96 78.933333 174.933333 174.933333 174.933334 96 0 174.933333-78.933333 174.933333-174.933334 0-96-78.933333-174.933333-174.933333-174.933333z m0 279.466667c-57.6 0-104.533333-46.933333-104.533333-104.533334s46.933333-104.533333 104.533333-104.533333 104.533333 46.933333 104.533333 104.533333-46.933333 104.533333-104.533333 104.533334z"  ></path></symbol><symbol id="icon-chart-bar" viewBox="0 0 1024 1024"><path d="M149.333333 800h128c29.866667 0 53.333333-23.466667 53.333334-53.333333V533.333333c0-29.866667-23.466667-53.333333-53.333334-53.333333H149.333333c-29.866667 0-53.333333 23.466667-53.333333 53.333333v213.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-256h106.666667v192h-106.666667v-192zM448 800h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333h-128c-29.866667 0-53.333333 23.466667-53.333333 53.333333v597.333334c0 29.866667 23.466667 53.333333 53.333333 53.333333z m10.666667-640h106.666666v576h-106.666666v-576zM874.666667 309.333333h-128c-29.866667 0-53.333333 23.466667-53.333334 53.333334v384c0 29.866667 23.466667 53.333333 53.333334 53.333333h128c29.866667 0 53.333333-23.466667 53.333333-53.333333V362.666667c0-29.866667-23.466667-53.333333-53.333333-53.333334z m-10.666667 426.666667h-106.666667v-362.666667h106.666667v362.666667zM896 853.333333H128c-17.066667 0-32 14.933333-32 32S110.933333 917.333333 128 917.333333h768c17.066667 0 32-14.933333 32-32S913.066667 853.333333 896 853.333333z"  ></path></symbol><symbol id="icon-comment" viewBox="0 0 1024 1024"><path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v512z"  ></path><path d="M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"  ></path></symbol><symbol id="icon-chart-pie" viewBox="0 0 1024 1024"><path d="M887.466667 642.133333c-17.066667-6.4-34.133333 0-42.666667 17.066667-64 151.466667-221.866667 243.2-386.133333 221.866667-164.266667-21.333333-294.4-149.333333-315.733334-313.6C119.466667 405.333333 209.066667 245.333333 358.4 179.2c17.066667-6.4 23.466667-25.6 17.066667-42.666667-6.4-17.066667-25.6-23.466667-42.666667-17.066666C155.733333 198.4 51.2 386.133333 78.933333 578.133333c27.733333 192 179.2 343.466667 371.2 369.066667 19.2 2.133333 36.266667 4.266667 55.466667 4.266667 170.666667 0 330.666667-102.4 398.933333-264.533334 6.4-17.066667-2.133333-36.266667-17.066666-44.8z"  ></path><path d="M814.933333 209.066667C727.466667 121.6 612.266667 74.666667 490.666667 74.666667c-17.066667 0-32 14.933333-32 32v426.666666c0 17.066667 14.933333 32 32 32h426.666666c17.066667 0 32-14.933333 32-32 0-121.6-46.933333-236.8-134.4-324.266666zM522.666667 501.333333V140.8c93.866667 6.4 179.2 46.933333 247.466666 115.2 66.133333 66.133333 106.666667 153.6 115.2 247.466667h-362.666666z"  ></path></symbol><symbol id="icon-cry" viewBox="0 0 1024 1024"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"  ></path><path d="M512 597.333333c-81.066667 0-151.466667 36.266667-211.2 106.666667-10.666667 12.8-8.533333 34.133333 4.266667 44.8 12.8 10.666667 34.133333 8.533333 44.8-4.266667 46.933333-57.6 100.266667-85.333333 162.133333-85.333333s115.2 27.733333 162.133333 85.333333c6.4 8.533333 14.933333 10.666667 25.6 10.666667 6.4 0 14.933333-2.133333 21.333334-6.4 12.8-10.666667 14.933333-32 4.266666-44.8-61.866667-70.4-132.266667-106.666667-213.333333-106.666667zM362.666667 512c23.466667 0 42.666667-19.2 42.666666-42.666667v-64c0-23.466667-19.2-42.666667-42.666666-42.666666s-42.666667 19.2-42.666667 42.666666v64c0 23.466667 19.2 42.666667 42.666667 42.666667zM661.333333 512c23.466667 0 42.666667-19.2 42.666667-42.666667v-64c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666666 42.666666v64c0 23.466667 19.2 42.666667 42.666666 42.666667z"  ></path></symbol><symbol id="icon-customer-service" viewBox="0 0 1024 1024"><path d="M864 439.466667V426.666667c0-194.133333-157.866667-352-352-352S160 232.533333 160 426.666667v12.8c-36.266667 4.266667-64 36.266667-64 72.533333v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666666h85.333333c40.533333 0 74.666667-34.133333 74.666667-74.666666v-170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667h-32V426.666667c0-157.866667 130.133333-288 288-288S800 268.8 800 426.666667v10.666666H768c-40.533333 0-74.666667 34.133333-74.666667 74.666667v170.666667c0 40.533333 34.133333 74.666667 74.666667 74.666666h21.333333c-17.066667 49.066667-59.733333 98.133333-179.2 106.666667-12.8-19.2-32-32-55.466666-32-36.266667 0-64 27.733333-64 64s27.733333 64 64 64c23.466667 0 44.8-12.8 55.466666-34.133333 166.4-10.666667 226.133333-91.733333 245.333334-170.666667 40.533333-2.133333 72.533333-34.133333 72.533333-74.666667v-170.666666c0-36.266667-27.733333-66.133333-64-70.4z m-597.333333 72.533333v170.666667c0 6.4-4.266667 10.666667-10.666667 10.666666H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666666v-170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h85.333333c6.4 0 10.666667 4.266667 10.666667 10.666667z m597.333333 170.666667c0 6.4-4.266667 10.666667-10.666667 10.666666h-85.333333c-6.4 0-10.666667-4.266667-10.666667-10.666666v-170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h85.333333c6.4 0 10.666667 4.266667 10.666667 10.666667v170.666667z"  ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M874.666667 202.666667H360.533333c-21.333333 0-40.533333 8.533333-55.466666 23.466666l-217.6 234.666667c-25.6 27.733333-25.6 72.533333 0 100.266667l217.6 234.666666c14.933333 14.933333 34.133333 23.466667 55.466666 23.466667H874.666667c40.533333 0 74.666667-34.133333 74.666666-74.666667V277.333333c0-40.533333-34.133333-74.666667-74.666666-74.666666z m10.666666 544c0 6.4-4.266667 10.666667-10.666666 10.666666H360.533333c-2.133333 0-6.4-2.133333-8.533333-4.266666l-217.6-234.666667c-4.266667-4.266667-4.266667-10.666667 0-14.933333l217.6-234.666667c2.133333-2.133333 4.266667-4.266667 8.533333-4.266667H874.666667c6.4 0 10.666667 4.266667 10.666666 10.666667V746.666667z"  ></path><path d="M684.8 403.2c-12.8-12.8-32-12.8-44.8 0l-64 64-61.866667-61.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l61.866667 61.866667-61.866667 61.866667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l61.866666-61.866667L640 618.666667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L620.8 512l61.866667-61.866667c12.8-12.8 12.8-34.133333 2.133333-46.933333z"  ></path></symbol><symbol id="icon-data-view" viewBox="0 0 1024 1024"><path d="M874.666667 864H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V149.333333c0-17.066667-14.933333-32-32-32S96 132.266667 96 149.333333v704c0 40.533333 34.133333 74.666667 74.666667 74.666667h704c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"  ></path><path d="M437.333333 469.333333v320c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V469.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32zM298.666667 821.333333c17.066667 0 32-14.933333 32-32V533.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v256c0 17.066667 14.933333 32 32 32zM640 565.333333c-17.066667 0-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32zM810.666667 352c-17.066667 0-32 14.933333-32 32v405.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V384c0-17.066667-14.933333-32-32-32zM322.133333 407.466667l147.2-147.2 147.2 147.2c6.4 6.4 14.933333 8.533333 23.466667 8.533333h2.133333c8.533333 0 17.066667-6.4 23.466667-12.8l170.666667-234.666667c10.666667-14.933333 6.4-34.133333-6.4-44.8-14.933333-10.666667-34.133333-6.4-44.8 6.4l-149.333334 204.8L490.666667 189.866667c-12.8-12.8-32-12.8-44.8 0l-170.666667 170.666666c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 34.133333 12.8 46.933333 2.133334z"  ></path></symbol><symbol id="icon-discount" viewBox="0 0 1024 1024"><path d="M874.666667 96H593.066667c-19.2 0-38.4 8.533333-53.333334 21.333333l-405.333333 405.333334c-29.866667 29.866667-29.866667 76.8 0 104.533333l260.266667 260.266667c14.933333 14.933333 32 21.333333 53.333333 21.333333s38.4-8.533333 53.333333-21.333333l405.333334-405.333334c14.933333-14.933333 21.333333-32 21.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333z m-10.666667 334.933333c0 2.133333-2.133333 6.4-2.133333 8.533334l-405.333334 405.333333c-2.133333 2.133333-6.4 2.133333-8.533333 2.133333s-4.266667 0-8.533333-2.133333L181.333333 584.533333c-4.266667-4.266667-4.266667-10.666667 0-14.933333l405.333334-405.333333c2.133333-2.133333 4.266667-2.133333 8.533333-2.133334h270.933333v268.8z"  ></path><path d="M704 416c53.333333 0 96-42.666667 96-96s-42.666667-96-96-96-96 42.666667-96 96 42.666667 96 96 96z m0-128c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32-32-14.933333-32-32 14.933333-32 32-32z"  ></path></symbol><symbol id="icon-electronics" viewBox="0 0 1024 1024"><path d="M840.533333 117.333333H183.466667c-59.733333 0-108.8 49.066667-108.8 108.8v379.733334c0 59.733333 49.066667 108.8 108.8 108.8h232.533333v115.2H341.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h341.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-74.666667v-115.2h232.533333c59.733333 0 108.8-49.066667 108.8-108.8V226.133333c0-59.733333-49.066667-108.8-108.8-108.8zM544 829.866667h-64v-115.2h64v115.2z m341.333333-224c0 25.6-19.2 44.8-44.8 44.8H183.466667c-25.6 0-44.8-19.2-44.8-44.8V226.133333c0-25.6 19.2-44.8 44.8-44.8h657.066666c25.6 0 44.8 19.2 44.8 44.8v379.733334z"  ></path></symbol><symbol id="icon-film" viewBox="0 0 1024 1024"><path d="M853.333333 96H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667z m10.666667 384h-149.333333v-106.666667h149.333333v106.666667z m-213.333333 0h-277.333334v-320h277.333334v320z m-341.333334 0h-149.333333v-106.666667h149.333333v106.666667z m-149.333333 64h149.333333v106.666667h-149.333333v-106.666667z m213.333333 0h277.333334v320h-277.333334v-320z m341.333334 0h149.333333v106.666667h-149.333333v-106.666667z m149.333333-373.333333v138.666666h-149.333333v-149.333333H853.333333c6.4 0 10.666667 4.266667 10.666667 10.666667zM170.666667 160h138.666666v149.333333h-149.333333V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667zM160 853.333333v-138.666666h149.333333v149.333333H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667z m693.333333 10.666667h-138.666666v-149.333333h149.333333V853.333333c0 6.4-4.266667 10.666667-10.666667 10.666667z"  ></path></symbol><symbol id="icon-fabulous" viewBox="0 0 1024 1024"><path d="M859.733333 253.866667c-44.8-44.8-102.4-70.4-166.4-70.4-61.866667 0-121.6 25.6-166.4 70.4l-14.933333 17.066666-17.066667-17.066666c-44.8-44.8-102.4-70.4-166.4-70.4-61.866667 0-121.6 25.6-166.4 70.4-91.733333 91.733333-91.733333 243.2 0 337.066666l324.266667 330.666667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-4.266667 23.466666-8.533333l324.266667-330.666667c44.8-44.8 68.266667-104.533333 68.266667-168.533333s-21.333333-123.733333-66.133334-168.533333z m-44.8 290.133333L512 853.333333 209.066667 544c-66.133333-68.266667-66.133333-179.2 0-247.466667 32-32 74.666667-51.2 119.466666-51.2 44.8 0 87.466667 17.066667 119.466667 51.2l38.4 40.533334c12.8 12.8 34.133333 12.8 44.8 0l38.4-40.533334c32-32 74.666667-51.2 119.466667-51.2 44.8 0 87.466667 17.066667 119.466666 51.2 32 32 49.066667 76.8 49.066667 123.733334s-12.8 91.733333-42.666667 123.733333z"  ></path></symbol><symbol id="icon-folder-close" viewBox="0 0 1024 1024"><path d="M853.333333 266.666667H514.133333c-4.266667 0-6.4-2.133333-8.533333-4.266667l-38.4-66.133333c-12.8-21.333333-38.4-36.266667-64-36.266667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666667v554.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V341.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m-682.666666-42.666667h232.533333c4.266667 0 6.4 2.133333 8.533333 4.266667l38.4 66.133333c12.8 21.333333 38.4 36.266667 64 36.266667H853.333333c6.4 0 10.666667 4.266667 10.666667 10.666666v74.666667h-704V234.666667c0-6.4 4.266667-10.666667 10.666667-10.666667z m682.666666 576H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V480h704V789.333333c0 6.4-4.266667 10.666667-10.666667 10.666667z"  ></path></symbol><symbol id="icon-filter" viewBox="0 0 1024 1024"><path d="M872.533333 134.4c-12.8-10.666667-29.866667-17.066667-49.066666-17.066667H198.4C157.866667 117.333333 123.733333 151.466667 123.733333 192c0 17.066667 6.4 34.133333 17.066667 49.066667l256 302.933333v251.733333c0 12.8 6.4 23.466667 17.066667 27.733334l162.133333 81.066666c4.266667 2.133333 8.533333 4.266667 14.933333 4.266667 6.4 0 10.666667-2.133333 17.066667-4.266667 8.533333-6.4 14.933333-17.066667 14.933333-27.733333V541.866667l256-302.933334c12.8-14.933333 19.2-34.133333 17.066667-53.333333 2.133333-19.2-6.4-38.4-23.466667-51.2z m-38.4 64L569.6 509.866667c-4.266667 6.4-8.533333 12.8-8.533333 21.333333v292.266667l-98.133334-49.066667V531.2c0-8.533333-2.133333-14.933333-8.533333-21.333333L189.866667 198.4c0-2.133333-2.133333-4.266667-2.133334-6.4 0-6.4 4.266667-10.666667 10.666667-10.666667h625.066667c2.133333 0 4.266667 0 6.4 2.133334 2.133333 2.133333 4.266667 6.4 4.266666 6.4 2.133333 2.133333 2.133333 6.4 0 8.533333z"  ></path></symbol><symbol id="icon-file-open" viewBox="0 0 1024 1024"><path d="M921.6 450.133333c-6.4-8.533333-14.933333-12.8-25.6-12.8h-10.666667V341.333333c0-40.533333-34.133333-74.666667-74.666666-74.666666H514.133333c-4.266667 0-6.4-2.133333-8.533333-4.266667l-38.4-66.133333c-12.8-21.333333-38.4-36.266667-64-36.266667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666667v597.333333c0 6.4 2.133333 12.8 6.4 19.2 6.4 8.533333 14.933333 12.8 25.6 12.8h640c12.8 0 25.6-8.533333 29.866667-21.333333l128-362.666667c4.266667-10.666667 2.133333-21.333333-4.266667-29.866667zM170.666667 224h232.533333c4.266667 0 6.4 2.133333 8.533333 4.266667l38.4 66.133333c12.8 21.333333 38.4 36.266667 64 36.266667H810.666667c6.4 0 10.666667 4.266667 10.666666 10.666666v96H256c-12.8 0-25.6 8.533333-29.866667 21.333334l-66.133333 185.6V234.666667c0-6.4 4.266667-10.666667 10.666667-10.666667z m573.866666 576H172.8l104.533333-298.666667h571.733334l-104.533334 298.666667z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M170.666667 213.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M170.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M170.666667 810.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"  ></path><path d="M896 778.666667H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM362.666667 245.333333h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM896 480H362.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h533.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M512 74.666667c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V106.666667c0-17.066667-14.933333-32-32-32zM693.333333 362.666667c8.533333 0 17.066667-2.133333 23.466667-8.533334l104.533333-104.533333c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 4.266667 6.4 12.8 8.533333 21.333333 8.533334zM917.333333 480h-149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM714.666667 669.866667c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333zM512 736c-17.066667 0-32 14.933333-32 32v149.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-149.333333c0-17.066667-14.933333-32-32-32zM309.333333 669.866667l-104.533333 104.533333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l104.533334-104.533333c12.8-12.8 12.8-32 0-44.8s-36.266667-12.8-46.933334 0zM288 512c0-17.066667-14.933333-32-32-32H106.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h149.333333c17.066667 0 32-14.933333 32-32zM247.466667 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l104.533333 104.533333c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8l-106.666666-104.533333z"  ></path></symbol><symbol id="icon-notification" viewBox="0 0 1024 1024"><path d="M800 625.066667V448c0-117.333333-70.4-217.6-170.666667-262.4-4.266667-61.866667-55.466667-110.933333-117.333333-110.933333s-113.066667 49.066667-117.333333 110.933333c-100.266667 44.8-170.666667 145.066667-170.666667 262.4v177.066667c-57.6 46.933333-85.333333 110.933333-85.333333 185.6 0 17.066667 14.933333 32 32 32h206.933333c14.933333 61.866667 70.4 106.666667 134.4 106.666666s119.466667-44.8 134.4-106.666666H853.333333c17.066667 0 32-14.933333 32-32 0-76.8-27.733333-138.666667-85.333333-185.6zM512 138.666667c19.2 0 36.266667 10.666667 44.8 25.6-14.933333-2.133333-29.866667-4.266667-44.8-4.266667-14.933333 0-29.866667 2.133333-44.8 4.266667 8.533333-14.933333 25.6-25.6 44.8-25.6z m0 746.666666c-29.866667 0-55.466667-17.066667-66.133333-42.666666h134.4c-12.8 25.6-38.4 42.666667-68.266667 42.666666z m-307.2-106.666666c6.4-46.933333 29.866667-83.2 70.4-113.066667 8.533333-6.4 12.8-14.933333 12.8-25.6v-192c0-123.733333 100.266667-224 224-224S736 324.266667 736 448v192c0 10.666667 4.266667 19.2 12.8 25.6 40.533333 29.866667 64 66.133333 70.4 113.066667H204.8z"  ></path></symbol><symbol id="icon-mic" viewBox="0 0 1024 1024"><path d="M516.266667 657.066667c78.933333 0 142.933333-64 142.933333-142.933334V217.6a142.933333 142.933333 0 0 0-285.866667 0v296.533333c0 78.933333 64 142.933333 142.933334 142.933334z m-78.933334-439.466667c0-42.666667 36.266667-78.933333 78.933334-78.933333s78.933333 36.266667 78.933333 78.933333v296.533333c0 42.666667-36.266667 78.933333-78.933333 78.933334s-78.933333-36.266667-78.933334-78.933334V217.6z"  ></path><path d="M774.4 409.6c-17.066667 0-32 14.933333-32 32v74.666667c0 125.866667-102.4 228.266667-228.266667 228.266666S288 640 288 514.133333v-74.666666c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v74.666666c0 149.333333 113.066667 273.066667 260.266667 290.133334v85.333333h-117.333334c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h296.533334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-117.333334v-85.333333c145.066667-14.933333 260.266667-140.8 260.266667-290.133334v-74.666666c0-17.066667-12.8-29.866667-32-29.866667z"  ></path></symbol><symbol id="icon-operation" viewBox="0 0 1024 1024"><path d="M823.466667 512H578.133333v-187.733333c0-66.133333-53.333333-119.466667-117.333333-119.466667s-117.333333 53.333333-117.333333 119.466667v296.533333l-21.333334-21.333333c-46.933333-46.933333-121.6-46.933333-168.533333-2.133334s-44.8 121.6 2.133333 168.533334l174.933334 174.933333c6.4 6.4 14.933333 8.533333 23.466666 8.533333 8.533333 0 17.066667-2.133333 23.466667-8.533333 12.8-12.8 12.8-32 0-44.8l-174.933333-174.933333c-21.333333-21.333333-23.466667-57.6-2.133334-76.8 21.333333-21.333333 55.466667-19.2 76.8 2.133333l74.666667 74.666667c12.8 12.8 32 12.8 44.8 0 6.4-6.4 8.533333-14.933333 8.533333-23.466667V326.4c0-29.866667 23.466667-55.466667 53.333334-55.466667s53.333333 25.6 53.333333 55.466667v219.733333c0 17.066667 14.933333 32 32 32h277.333333c6.4 0 10.666667 6.4 10.666667 12.8V917.333333c0 17.066667 14.933333 32 32 32S896 934.4 896 917.333333V586.666667c2.133333-40.533333-32-74.666667-72.533333-74.666667z"  ></path><path d="M266.666667 330.666667c17.066667 0 32-14.933333 32-32 0-87.466667 72.533333-160 160-160S618.666667 211.2 618.666667 298.666667c0 17.066667 14.933333 32 32 32S682.666667 315.733333 682.666667 298.666667c0-123.733333-100.266667-224-224-224S234.666667 174.933333 234.666667 298.666667c0 17.066667 14.933333 32 32 32z"  ></path></symbol><symbol id="icon-picture" viewBox="0 0 1024 1024"><path d="M819.2 96H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v616.533333c0 59.733333 49.066667 108.8 108.8 108.8h616.533333c59.733333 0 108.8-49.066667 108.8-108.8V204.8c-2.133333-59.733333-51.2-108.8-110.933333-108.8zM160 819.2V204.8c0-23.466667 19.2-44.8 44.8-44.8h616.533333c23.466667 0 44.8 19.2 44.8 44.8v388.266667l-125.866666-125.866667c-27.733333-27.733333-76.8-27.733333-104.533334 0l-390.4 384c-4.266667 4.266667-6.4 8.533333-6.4 12.8H204.8c-25.6 0-44.8-19.2-44.8-44.8z m659.2 44.8H324.266667l354.133333-354.133333c2.133333-2.133333 6.4-2.133333 8.533333-2.133334s4.266667 0 8.533334 2.133334l160 160c4.266667 4.266667 8.533333 6.4 12.8 6.4v142.933333c-4.266667 25.6-23.466667 44.8-49.066667 44.8z"  ></path><path d="M375.466667 482.133333c59.733333 0 106.666667-46.933333 106.666666-106.666666s-46.933333-106.666667-106.666666-106.666667-106.666667 46.933333-106.666667 106.666667 49.066667 106.666667 106.666667 106.666666z m0-149.333333c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666-42.666667-19.2-42.666667-42.666666 19.2-42.666667 42.666667-42.666667z"  ></path></symbol><symbol id="icon-save" viewBox="0 0 1024 1024"><path d="M906.666667 298.666667L725.333333 117.333333c-14.933333-14.933333-32-21.333333-53.333333-21.333333H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V349.866667c0-19.2-8.533333-38.4-21.333333-51.2zM652.8 864H371.2V648.533333h281.6v215.466667z m211.2-10.666667c0 6.4-4.266667 10.666667-10.666667 10.666667h-140.8V618.666667c0-17.066667-12.8-29.866667-29.866666-29.866667H341.333333c-17.066667 0-29.866667 12.8-29.866666 29.866667v245.333333H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h140.8V320c0 17.066667 12.8 29.866667 29.866666 29.866667h277.333334c17.066667 0 29.866667-12.8 29.866666-29.866667s-12.8-29.866667-29.866666-29.866667H371.2V160h302.933333c2.133333 0 6.4 2.133333 8.533334 2.133333l179.2 179.2c2.133333 2.133333 2.133333 4.266667 2.133333 8.533334V853.333333z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"  ></path></symbol><symbol id="icon-security" viewBox="0 0 1024 1024"><path d="M814.933333 179.2L529.066667 78.933333c-10.666667-4.266667-23.466667-4.266667-34.133334 0L209.066667 179.2c-29.866667 10.666667-49.066667 38.4-49.066667 70.4V597.333333c0 194.133333 157.866667 352 352 352S864 791.466667 864 597.333333V249.6c0-32-19.2-61.866667-49.066667-70.4zM800 597.333333c0 157.866667-130.133333 288-288 288S224 755.2 224 597.333333V249.6c0-4.266667 2.133333-8.533333 6.4-10.666667L512 140.8l281.6 98.133333c4.266667 2.133333 6.4 6.4 6.4 10.666667V597.333333z"  ></path><path d="M659.2 403.2l-192 194.133333-85.333333-68.266666c-12.8-10.666667-34.133333-8.533333-44.8 4.266666-10.666667 12.8-8.533333 34.133333 4.266666 44.8l106.666667 85.333334c6.4 4.266667 12.8 6.4 19.2 6.4 8.533333 0 17.066667-2.133333 23.466667-8.533334l213.333333-213.333333c12.8-12.8 12.8-32 0-44.8-10.666667-10.666667-32-10.666667-44.8 0z"  ></path></symbol><symbol id="icon-time" viewBox="0 0 1024 1024"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"  ></path><path d="M695.466667 567.466667l-151.466667-70.4V277.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v238.933334c0 12.8 6.4 23.466667 19.2 29.866666l170.666667 81.066667c4.266667 2.133333 8.533333 2.133333 12.8 2.133333 12.8 0 23.466667-6.4 29.866666-19.2 6.4-14.933333 0-34.133333-17.066666-42.666666z"  ></path></symbol><symbol id="icon-telephone-out" viewBox="0 0 1024 1024"><path d="M817.066667 586.666667c-32-4.266667-64-12.8-96-23.466667-38.4-14.933333-81.066667-4.266667-110.933334 23.466667l-27.733333 27.733333c-70.4-44.8-130.133333-102.4-172.8-172.8l27.733333-27.733333c27.733333-29.866667 38.4-72.533333 23.466667-110.933334-10.666667-29.866667-19.2-61.866667-23.466667-96-6.4-51.2-51.2-89.6-104.533333-89.6h-108.8c-32 0-59.733333 12.8-78.933333 34.133334-19.2 21.333333-29.866667 51.2-27.733334 81.066666 12.8 117.333333 53.333333 230.4 117.333334 328.533334 57.6 91.733333 136.533333 170.666667 228.266666 228.266666 98.133333 64 211.2 104.533333 328.533334 117.333334h8.533333c25.6 0 51.2-10.666667 70.4-27.733334 21.333333-19.2 34.133333-49.066667 34.133333-76.8v-108.8c4.266667-53.333333-36.266667-98.133333-87.466666-106.666666z m25.6 106.666666v108.8c0 10.666667-4.266667 23.466667-12.8 29.866667-8.533333 8.533333-19.2 10.666667-29.866667 10.666667-106.666667-10.666667-211.2-49.066667-300.8-106.666667-83.2-53.333333-155.733333-125.866667-209.066667-209.066667-57.6-89.6-96-194.133333-106.666666-300.8 0-10.666667 2.133333-23.466667 10.666666-32 8.533333-8.533333 19.2-12.8 29.866667-12.8h108.8c21.333333 0 38.4 14.933333 40.533333 34.133334 4.266667 36.266667 14.933333 74.666667 27.733334 108.8 6.4 14.933333 2.133333 32-8.533334 42.666666l-46.933333 46.933334c-10.666667 10.666667-12.8 25.6-4.266667 38.4 55.466667 96 134.4 174.933333 230.4 230.4 12.8 6.4 27.733333 4.266667 38.4-4.266667l46.933334-46.933333c10.666667-10.666667 27.733333-14.933333 42.666666-8.533334 36.266667 12.8 72.533333 21.333333 108.8 27.733334 19.2 2.133333 34.133333 19.2 34.133334 42.666666 0-2.133333 0-2.133333 0 0zM930.133333 270.933333c2.133333-4.266667 2.133333-8.533333 2.133334-12.8s0-8.533333-2.133334-10.666666c-2.133333-4.266667-4.266667-8.533333-6.4-10.666667L793.6 106.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l74.666667 74.666666H640c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h183.466667L746.666667 364.8c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333l130.133333-130.133333c2.133333-2.133333 4.266667-4.266667 6.4-8.533334z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z"  ></path></symbol><symbol id="icon-arrow-up-bold" viewBox="0 0 1024 1024"><path d="M904.533333 674.133333l-362.666666-362.666666c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-362.666666 362.666666c-17.066667 17.066667-17.066667 42.666667 0 59.733334 17.066667 17.066667 42.666667 17.066667 59.733333 0L512 401.066667l332.8 332.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334z"  ></path></symbol><symbol id="icon-arrow-down-bold" viewBox="0 0 1024 1024"><path d="M904.533333 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 644.266667 179.2 311.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l362.666666 362.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l362.666666-362.666667c17.066667-17.066667 17.066667-42.666667 0-59.733333z"  ></path></symbol><symbol id="icon-cat1" viewBox="0 0 1024 1024"><path d="M284.596383 360.521108c-38.522776 0-69.866443 31.341192-69.866443 69.866443 0 38.530197 31.356035 69.866443 69.866443 69.866443 38.517828 0 69.866443-31.336244 69.866443-69.866443C354.462824 391.8623 323.12658 360.521108 284.596383 360.521108zM284.596383 460.190008c-16.418935 0-29.790089-13.358785-29.790089-29.785141 0-16.438726 13.371154-29.795037 29.790089-29.795037s29.790089 13.356311 29.790089 29.795037C314.386472 446.831225 301.027687 460.190008 284.596383 460.190008zM605.78114 360.521108c-38.522776 0-69.87139 31.341192-69.87139 69.866443 0 38.530197 31.360983 69.866443 69.87139 69.866443 38.537619 0 69.898602-31.336244 69.898602-69.866443C675.677268 391.8623 644.318759 360.521108 605.78114 360.521108zM605.78114 460.190008c-16.411514 0-29.795037-13.358785-29.795037-29.785141 0-16.438726 13.383522-29.795037 29.795037-29.795037 16.438726 0 29.824723 13.356311 29.824723 29.795037C635.60339 446.831225 622.244605 460.190008 605.78114 460.190008zM873.661874 687.643103c0-116.068045 64.379445-156.901396 67.001725-158.50445 9.524318-5.635428 12.653738-17.92551 7.01831-27.449828-5.647797-9.541635-17.950248-12.668581-27.462197-7.033153-3.53513 2.102772-86.636664 52.915629-86.636664 192.987431 0 79.368496 27.108436 130.39163 48.883256 171.393203 15.614935 29.352218 27.929755 52.559395 27.929755 79.084003 0 19.006581-4.136275 32.729021-11.948691 39.734962-7.958372 7.122211-18.355959 6.065878-18.551393 6.065878-0.952432-0.143483-1.929602-0.207803-2.896878-0.207803l-73.757807 0c8.584256-13.437947 13.645751-29.327479 13.645751-46.431671L816.88704 33.903778c0-8.994914-6.001557-16.888966-14.677346-19.308391-8.648576-2.439216-17.873559 1.244346-22.529342 8.942964l-97.870412 161.999998c-30.030053-0.57146-118.272244-1.25919-382.427362-1.25919-56.089577 0-83.85111 0.039582-97.87536 0.138535L111.347793 10.817821c-4.264916-8.205757-13.62596-12.438513-22.53429-10.234313-8.982545 2.191831-15.298282 10.234313-15.298282 19.464243l0 917.209186c0 47.695808 38.792425 86.508024 86.500602 86.508024L466.223899 1023.76496l264.167487 0 145.511795 0c1.316087 0.116271 3.181369 0.235016 5.504314 0.235016 9.798916 0 27.422616-2.179461 42.946017-15.577827 17.324365-14.976682 26.118898-38.626678 26.118898-70.329052 0-36.516484-15.837581-66.33626-32.602856-97.895151C897.143648 801.229878 873.661874 757.019723 873.661874 687.643103zM466.223899 983.700976 160.015824 983.700976c-25.596915 0-46.424249-20.834755-46.424249-46.429197L113.591574 102.125111l58.014232 111.689333c3.671192 7.109841 11.461342 11.226327 19.053585 10.768665 4.020005-0.103902 34.505246-0.227594 108.723187-0.227594 154.031732 0 375.982985 0.482401 391.536073 1.24682 7.589768 0.808949 15.236435-2.820188 19.308391-9.556479l66.583645-110.22234 0 831.460633c0 25.596915-20.819912 46.431671-46.416827 46.431671L466.223899 983.715819 466.223899 983.700976zM480.260517 540.694001l-70.133617 0c-11.058104 0-20.040651 8.962754-20.040651 20.038177 0 11.077895 8.982545 20.040651 20.040651 20.040651l15.204276 0-1.481836 25.505382c-0.658044 11.050683 7.787677 20.520577 18.830938 21.173673 0.390868 0.012369 0.789158 0.027212 1.175078 0.027212 10.541071 0 19.372711-8.23297 19.986226-18.877942l1.617897-27.840696 14.798564 0c11.063052 0 20.038177-8.96028 20.038177-20.038177S491.323571 540.694001 480.260517 540.694001z"  ></path></symbol><symbol id="icon-iconfinder_icon_animal_cachorro_" viewBox="0 0 1024 1024"><path d="M979.012267 595.968c14.472533 18.773333 23.074133 95.914667-32.221867 95.914667-44.6464 0-154.282667-46.6944-154.282667-139.0592s-122.88-351.163733-122.88-351.163734c153.258667 0 298.052267 6.007467 298.052267 196.8128 0.068267 0-3.140267 178.722133 11.332267 197.495467zM44.987733 595.968c-14.472533 18.773333-23.074133 95.914667 32.221867 95.914667 44.6464 0 154.282667-46.6944 154.282667-139.0592s122.88-351.163733 122.88-351.163734c-153.258667 0-298.052267 6.007467-298.052267 196.8128-0.068267 0 3.140267 178.722133-11.332267 197.495467z" fill="#915A31" ></path><path d="M814.216533 499.848533c0 323.037867-115.438933 419.976533-302.216533 419.976534s-302.216533-96.938667-302.216533-419.976534 169.096533-395.946667 302.216533-395.946666 302.216533 72.9088 302.216533 395.946666z" fill="#A06538" ></path><path d="M714.683733 831.419733c-45.738667 50.926933-110.592 75.093333-202.683733 75.093334s-157.013333-23.825067-202.683733-75.093334c20.0704-85.265067 54.613333-182.0672 95.982933-244.053333C457.386667 509.269333 474.385067 265.8304 461.6192 121.6512a333.892267 333.892267 0 0 1 100.7616 0C549.614933 265.8304 566.613333 509.269333 618.7008 587.093333c41.3696 62.2592 75.912533 159.061333 95.982933 244.3264z" fill="#D6D6D6" ></path><path d="M517.256533 814.626133c-21.7088 0-106.837333-111.2064-99.805866-128.6144s35.566933-34.133333 99.805866-34.133333 92.7744 16.520533 99.9424 34.133333S539.306667 814.626133 517.256533 814.626133z" fill="#333333" ></path><path d="M361.949867 512m-72.157867 0a72.157867 72.157867 0 1 0 144.315733 0 72.157867 72.157867 0 1 0-144.315733 0Z" fill="#FFFFFF" ></path><path d="M662.050133 512m-72.157866 0a72.157867 72.157867 0 1 0 144.315733 0 72.157867 72.157867 0 1 0-144.315733 0Z" fill="#FFFFFF" ></path><path d="M377.787733 512m-40.413866 0a40.413867 40.413867 0 1 0 80.827733 0 40.413867 40.413867 0 1 0-80.827733 0Z"  ></path><path d="M646.212267 512m-40.413867 0a40.413867 40.413867 0 1 0 80.827733 0 40.413867 40.413867 0 1 0-80.827733 0Z"  ></path></symbol><symbol id="icon-RectangleCopy" viewBox="0 0 1024 1024"><path d="M834.389333 739.541333h-56.917333v-170.666666a18.944 18.944 0 1 0-37.930667 0v170.666666H284.458667V512A227.797333 227.797333 0 0 1 512 284.458667a226.56 226.56 0 0 1 221.44 175.018666 18.986667 18.986667 0 0 0 36.949333-8.746666c-26.965333-113.92-124.074667-194.432-239.445333-202.624v-58.453334a18.986667 18.986667 0 0 0-37.888 0V247.466667c-137.557333 9.813333-246.528 124.586667-246.528 264.533333v227.541333H189.610667a18.986667 18.986667 0 0 0 0 37.973334h644.778666a18.986667 18.986667 0 0 0 0-37.973334M606.805333 815.402667H415.573333a18.986667 18.986667 0 0 0 0 37.930666h191.232a18.986667 18.986667 0 0 0 0-37.930666"  ></path></symbol><symbol id="icon-RectangleCopy1" viewBox="0 0 1024 1024"><path d="M517.632 552.149333c-108.714667 0-197.162667-85.546667-197.162667-190.72 0-38.314667 11.690667-75.306667 33.877334-106.922666C391.04 202.026667 452.138667 170.666667 517.632 170.666667c65.408 0 126.464 31.274667 163.2 83.712 7.765333 11.093333 14.250667 22.869333 19.413333 35.072a21.333333 21.333333 0 1 1-39.338666 16.64 147.285333 147.285333 0 0 0-15.018667-27.221334C617.130667 237.824 569.173333 213.333333 517.632 213.333333c-51.626667 0-99.584 24.533333-128.426667 65.621334a143.445333 143.445333 0 0 0-26.069333 82.432c0 81.664 69.290667 148.096 154.453333 148.096 63.402667 0 119.722667-36.437333 143.36-92.8a21.333333 21.333333 0 0 1 39.338667 16.512c-30.378667 72.277333-102.016 118.954667-182.656 118.954666"  ></path><path d="M303.829333 627.456c-49.92 0-90.453333 41.088-90.453333 91.605333C213.333333 769.578667 253.866667 810.666667 303.786667 810.666667h416.341333C770.133333 810.666667 810.666667 769.578667 810.666667 719.061333c0-50.517333-40.533333-91.605333-90.453334-91.605333H303.786667zM720.213333 853.333333H303.829333C230.442667 853.333333 170.709333 793.088 170.709333 719.061333 170.666667 645.034667 230.4 584.789333 303.786667 584.789333h416.341333C793.6 584.789333 853.333333 645.034667 853.333333 719.061333 853.333333 793.088 793.6 853.333333 720.213333 853.333333z"  ></path></symbol><symbol id="icon-RectangleCopy2" viewBox="0 0 1024 1024"><path d="M832 470.912a21.333333 21.333333 0 0 0 21.333333-21.333333V220.16a21.034667 21.034667 0 0 0-17.365333-20.48c-1.536-0.810667-2.944-1.706667-4.736-2.133333L516.565333 128.298667c-2.048-0.426667-4.010667-0.256-5.973333-0.128h-0.042667c-0.896 0.085333-1.834667-0.128-2.688 0.042666-1.92-0.128-3.84-0.341333-5.845333 0.085334L192.682667 197.589333c-1.792 0.426667-3.2 1.322667-4.736 2.133334a21.034667 21.034667 0 0 0-17.28 20.48v325.333333c0 1.408 0.554667 2.645333 0.810666 3.968 8.32 198.101333 173.44 324.906667 337.066667 348.288A24.106667 24.106667 0 0 0 511.573333 898.005333l0.426667-0.085333 0.426667 0.085333a24.106667 24.106667 0 0 0 3.029333-0.213333c144.512-20.693333 310.912-128.853333 334.976-317.568a21.333333 21.333333 0 0 0-42.368-5.376c-21.034667 165.461333-167.68 260.906667-296.021333 280.234667C363.178667 832.768 213.333333 715.818667 213.333333 533.973333V236.714667l296.064-66.389334L810.666667 236.714667V449.578667a21.333333 21.333333 0 0 0 21.333333 21.333333"  ></path></symbol><symbol id="icon-RectangleCopy3" viewBox="0 0 1024 1024"><path d="M807.680427 490.666667H509.611093V211.968C662.400427 221.610667 787.968427 338.986667 807.680427 490.666667zM469.33376 509.013333c0 0.341333 0.170667 0.597333 0.213333 0.938667 0 0.298667-0.213333 0.554667-0.213333 0.853333 0 11.093333 9.045333 20.181333 20.181333 20.181334h336a19.413333 19.413333 0 0 0 10.581334-3.456 19.84 19.84 0 0 0 14.08-20.138667C837.248427 318.592 678.86976 170.666667 489.472427 170.666667A20.138667 20.138667 0 0 0 469.33376 190.933333v318.122667z"  ></path><path d="M829.056427 572.544a19.925333 19.925333 0 0 0-23.381334 16.298667A320.597333 320.597333 0 0 1 489.515093 853.333333c-177.152 0-321.237333-144.085333-321.237333-321.152a319.573333 319.573333 0 0 1 226.730667-307.114666 20.053333 20.053333 0 0 0 13.312-25.173334 20.010667 20.010667 0 0 0-25.173334-13.312 359.637333 359.637333 0 0 0-255.146666 345.6c0 199.338667 162.176 361.472 361.472 361.472a360.917333 360.917333 0 0 0 355.882666-297.728 20.181333 20.181333 0 0 0-16.298666-23.381333"  ></path></symbol><symbol id="icon-RectangleCopy4" viewBox="0 0 1024 1024"><path d="M618.666667 598.229333a21.333333 21.333333 0 0 0 0-42.666666h-83.114667v-8.362667l72.149333-68.053333a21.333333 21.333333 0 0 0-29.226666-31.061334l-65.92 62.165334-65.92-62.165334a21.333333 21.333333 0 0 0-29.269334 31.018667l75.52 71.253333v5.248H405.333333a21.333333 21.333333 0 0 0 0 42.666667h87.552v30.592H405.333333a21.333333 21.333333 0 0 0 0 42.666667h87.552v60.885333a21.333333 21.333333 0 1 0 42.666667 0V671.573333H618.666667a21.333333 21.333333 0 1 0 0-42.666666h-83.114667v-30.634667H618.666667z"  ></path><path d="M213.333333 341.333333v-19.541333c0-35.328 28.714667-64 64-64h62.250667v23.082667a21.333333 21.333333 0 1 0 42.666667 0v-23.082667h259.541333v23.082667a21.333333 21.333333 0 1 0 42.666667 0v-23.082667h65.792c35.285333 0 64 28.672 64 64V341.333333H213.333333z m622.250667 128a21.333333 21.333333 0 0 0 21.333333-21.333333V321.792c0-58.837333-47.829333-106.666667-106.666666-106.666667h-65.792V192a21.333333 21.333333 0 0 0-42.666667 0v23.125333H382.250667V192a21.333333 21.333333 0 0 0-42.666667 0v23.125333H277.333333a106.752 106.752 0 0 0-106.666666 106.666667V746.666667C170.666667 805.461333 218.496 853.333333 277.333333 853.333333h472.917334c58.837333 0 106.666667-47.872 106.666666-106.666666v-170.666667a21.333333 21.333333 0 0 0-42.666666 0v170.666667c0 35.285333-28.714667 64-64 64H277.333333c-35.285333 0-64-28.714667-64-64V384h600.917334v64a21.333333 21.333333 0 0 0 21.333333 21.333333z"  ></path></symbol><symbol id="icon-RectangleCopy5" viewBox="0 0 1024 1024"><path d="M488.874667 853.333333H296.362667C274.133333 853.333333 256 834.048 256 810.325333V299.008C256 275.285333 274.133333 256 296.362667 256h107.178666a20.650667 20.650667 0 0 0 12.458667-4.48 21.077333 21.077333 0 0 0 10.922667-14.037333A85.76 85.76 0 0 1 510.208 170.666667c40.448 0 75.605333 28.714667 83.626667 68.266666a21.333333 21.333333 0 0 0 20.864 17.066667c0.896 0 1.792-0.170667 2.688-0.256 0.426667 0.042667 0.810667 0.256 1.28 0.256h108.970666c22.229333 0 40.362667 19.285333 40.362667 43.008v228.992a21.333333 21.333333 0 0 0 42.666667 0V299.008C810.666667 251.776 773.418667 213.333333 727.637333 213.333333H630.613333a128.298667 128.298667 0 0 0-120.405333-85.333333A128.512 128.512 0 0 0 389.973333 213.333333H296.362667C250.581333 213.333333 213.333333 251.776 213.333333 299.008v511.317333C213.333333 857.557333 250.581333 896 296.362667 896h192.512a21.333333 21.333333 0 0 0 0-42.666667"  ></path><path d="M704 682.666667a64 64 0 1 0 0.042667 128 64 64 0 0 0-0.042667-128"  ></path><path d="M704 853.333333a106.794667 106.794667 0 0 1-106.666667-106.666666c0-58.794667 47.829333-106.666667 106.666667-106.666667s106.666667 47.872 106.666667 106.666667-47.829333 106.666667-106.666667 106.666666m0-256c-15.616 0-30.378667 3.072-44.544 7.552h-124.8v-59.989333h124.885333a21.333333 21.333333 0 0 0 0-42.666667h-124.885333v-23.936l103.765333-97.877333a21.333333 21.333333 0 0 0-29.269333-31.061333l-98.133333 92.629333-98.176-92.629333a21.376 21.376 0 0 0-29.269334 31.061333l108.416 102.272v19.541333H360.874667a21.333333 21.333333 0 1 0 0 42.666667h131.114666v59.989333H360.874667a21.333333 21.333333 0 1 0 0 42.666667h131.114666v93.781333a21.333333 21.333333 0 0 0 42.666667 0v-93.781333h58.496A148.181333 148.181333 0 0 0 554.666667 746.666667c0 82.346667 66.986667 149.333333 149.333333 149.333333s149.333333-66.986667 149.333333-149.333333-66.986667-149.333333-149.333333-149.333334"  ></path></symbol><symbol id="icon-RectangleCopy6" viewBox="0 0 1024 1024"><path d="M789.333333 512.853333a21.333333 21.333333 0 0 0 21.333334-21.333333V213.717333C810.666667 166.4 773.418667 128 727.637333 128H382.250667a21.333333 21.333333 0 0 0-15.189334 6.4c-0.256 0.256-0.64 0.341333-0.938666 0.64L219.562667 281.514667a21.162667 21.162667 0 0 0-6.016 16.128C213.504 297.984 213.333333 298.325333 213.333333 298.666667v512.512c0 47.232 37.248 85.674667 83.029334 85.674666h431.274666c45.781333 0 83.029333-38.4 83.029334-85.674666V619.52a21.333333 21.333333 0 0 0-42.666667 0v191.658667c0 23.722667-18.133333 43.008-40.362667 43.008H296.362667c-22.229333 0-40.362667-19.242667-40.362667-43.008V305.493333L390.784 170.666667h336.853333c22.229333 0 40.362667 19.328 40.362667 43.008v277.888a21.333333 21.333333 0 0 0 21.333333 21.333333"  ></path><path d="M659.584 542.208a21.333333 21.333333 0 0 0 0-42.666667h-124.928v-23.893333l103.765333-97.92a21.333333 21.333333 0 0 0-29.269333-31.061333l-98.133333 92.629333-98.133334-92.629333a21.376 21.376 0 0 0-29.269333 31.061333l108.373333 102.314667v19.498666H360.917333a21.333333 21.333333 0 0 0 0 42.666667h131.072v59.989333H360.917333a21.333333 21.333333 0 0 0 0 42.666667h131.072v93.781333a21.333333 21.333333 0 1 0 42.666667 0v-93.781333h124.928a21.333333 21.333333 0 1 0 0-42.666667h-124.928v-59.989333h124.928z"  ></path></symbol><symbol id="icon-RectangleCopy7" viewBox="0 0 1024 1024"><path d="M492.416 853.333333H296.32C274.090667 853.333333 256 834.048 256 810.325333V299.008C256 275.285333 274.090667 256 296.32 256h107.178667c4.693333 0 8.832-1.834667 12.330666-4.394667a20.992 20.992 0 0 0 11.050667-14.122666A85.845333 85.845333 0 0 1 510.208 170.666667c40.448 0 75.605333 28.714667 83.626667 68.266666a21.333333 21.333333 0 0 0 20.864 17.066667c0.896 0 1.792-0.170667 2.688-0.256 0.426667 0.042667 0.810667 0.256 1.28 0.256h108.970666c22.229333 0 40.362667 19.285333 40.362667 43.008v278.784a21.333333 21.333333 0 0 0 42.666667 0V299.008C810.666667 251.776 773.418667 213.333333 727.637333 213.333333H630.613333a128.298667 128.298667 0 0 0-120.405333-85.333333 128.682667 128.682667 0 0 0-120.277333 85.333333H296.32C250.581333 213.333333 213.333333 251.776 213.333333 299.008v511.317333C213.333333 857.557333 250.581333 896 296.32 896h196.096a21.333333 21.333333 0 0 0 0-42.666667"  ></path><path d="M533.333333 689.194667V510.72a85.12 85.12 0 0 0-21.333333-167.637333 85.162667 85.162667 0 1 0-21.333333 167.68v178.432A41.984 41.984 0 0 0 469.333333 725.333333a42.666667 42.666667 0 1 0 85.333334 0 42.112 42.112 0 0 0-21.333334-36.138666M704 682.666667a64 64 0 1 0 0 128.042666 64 64 0 0 0 0-128.042666"  ></path><path d="M704 853.333333a106.794667 106.794667 0 0 1-106.666667-106.666666c0-58.794667 47.829333-106.666667 106.666667-106.666667s106.666667 47.872 106.666667 106.666667-47.829333 106.666667-106.666667 106.666666m0-256c-82.346667 0-149.333333 66.986667-149.333333 149.333334s66.986667 149.333333 149.333333 149.333333 149.333333-66.986667 149.333333-149.333333-66.986667-149.333333-149.333333-149.333334"  ></path></symbol></svg>',function(a){var c=(c=document.getElementsByTagName("script"))[c.length-1],h=c.getAttribute("data-injectcss"),c=c.getAttribute("data-disable-injectsvg");if(!c){var o,t,l,i,s,v=function(c,h){h.parentNode.insertBefore(c,h)};if(h&&!a.__iconfont__svg__cssinject__){a.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}o=function(){var c,h=document.createElement("div");h.innerHTML=a._iconfont_svg_string_3545739,(h=h.getElementsByTagName("svg")[0])&&(h.setAttribute("aria-hidden","true"),h.style.position="absolute",h.style.width=0,h.style.height=0,h.style.overflow="hidden",h=h,(c=document.body).firstChild?v(h,c.firstChild):c.appendChild(h))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(o,0):(t=function(){document.removeEventListener("DOMContentLoaded",t,!1),o()},document.addEventListener("DOMContentLoaded",t,!1)):document.attachEvent&&(l=o,i=a.document,s=!1,m(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,e())})}function e(){s||(s=!0,l())}function m(){try{i.documentElement.doScroll("left")}catch(c){return void setTimeout(m,50)}e()}}(window);`},44132:function(l,c){"use strict";c.Z=`.cat-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
`},8734:function(l,c){"use strict";c.Z=`import Icon from './Icon';

export default Icon;
`},96702:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';
import './index.css';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends Omit<NativeInputProps, 'size' | 'prefix'> {
  className?: string;
  size?: 'large' | 'small' | 'default';
  addOnBefore?: string | ReactElement;
  addOnAfter?: string | ReactElement;
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
}

const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const { className, size, addOnBefore, addOnAfter, suffix, prefix, style, onClick, ...others } = props;

  const clas = classNames('cat-input', className, {
    [\`cat-input-\${size}\`]: size,
  });

  const Before = <span className="cat-input-label cat-input-before">{addOnBefore}</span>;
  const After = <span className="cat-input-label cat-input-after">{addOnAfter}</span>;
  const Prefix = <span className="cat-input-fix cat-input-prefix">{prefix}</span>;
  const Suffix = <span className="cat-input-fix cat-input-suffix">{suffix}</span>;

  return (
    <span className={clas} style={style} ref={ref} onClick={onClick}>
      {addOnBefore && Before}
      <span className="cat-input-mid">
        {prefix && Prefix}
        <input {...others} />
        {suffix && Suffix}
      </span>
      {addOnAfter && After}
    </span>
  );
});

export default Input;
`},94699:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { FC, TextareaHTMLAttributes } from 'react';
import { useAutoSize, useBind } from './tool';

type autoSizeType = { maxRow: number; minRow: number };

type NativeInputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface TextAreaProps extends NativeInputProps {
  className?: string;
  autoSize?: boolean | autoSizeType;
  showCount?: boolean;
  value?: string;
  defaultValue?: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const { className, showCount, style, ...nativAreaProps } = props;
  const { maxLength } = nativAreaProps;
  const [value, onChange] = useBind(props);
  const { areaRef, fakeRef, style: areaStyle } = useAutoSize(props, value);

  const clas = classNames('cat-textarea', className, {
    'cat-textarea-count': showCount,
  });

  return (
    <span className={clas} data-count={\`\${value.length}/\${maxLength}\`} style={style}>
      <textarea
        {...nativAreaProps}
        value={value}
        onChange={onChange}
        ref={areaRef}
        style={areaStyle}
      />
      {/* \u8FD9\u4E2A\u8981\u9690\u85CF\u8D77\u6765 */}
      <textarea className="cat-area-fake" ref={fakeRef} />
    </span>
  );
};

export default TextArea;
`},12353:function(l,c){"use strict";c.Z=`import { CSSProperties } from 'react';
import { Input } from 'catd';

const style: CSSProperties = { width: 150 };
const App = () => {
  return <Input placeholder="base use" style={style} />;
};

export default App;
`},28409:function(l,c){"use strict";c.Z=`import { CSSProperties } from 'react';
import { Input, Icon } from 'catd';

const style: CSSProperties = { width: 300 };

const App = () => {
  return (
    <>
      <Input addOnBefore="http://" addOnAfter=".com" defaultValue="catd" style={style} />
      <br />
      <br />
      <Input
        addOnBefore="https://"
        addOnAfter={<Icon name="search" />}
        defaultValue="catd"
        maxLength={10}
        style={style}
      />
      <br />
      <br />
      <Input
        style={style}
        suffix={<Icon name="mic" />}
        addOnAfter={<Icon name="search" />}
        placeholder="placeholder..."
      />
      <br />
      <br />
      <Input prefix="http://" defaultValue="catd" suffix=".com" style={style} />
      <br />
      <br />
      <Input
        prefix={<Icon name="RectangleCopy1" size="21" />}
        placeholder="user name"
        suffix="x"
        style={style}
      />
    </>
  );
};

export default App;
`},1553:function(l,c){"use strict";c.Z=`import { CSSProperties } from 'react';
import { Input, Icon } from 'catd';

const style: CSSProperties = { width: 300 };

const App = () => {
  return (
    <>
      <Input prefix={<Icon name="search" />} placeholder="search..." size="large" style={style} />
      <br />
      <br />
      <Input prefix={<Icon name="search" />} placeholder="search..." style={style} />
      <br />
      <br />
      <Input prefix={<Icon name="search" />} placeholder="search..." size="small" style={style} />
    </>
  );
};

export default App;
`},29939:function(l,c){"use strict";c.Z=`.cat-input {
  display: inline-flex;
  justify-content: space-between;
  border: 1px solid var(--gray);
  border-radius: 2px;
  width: 100%;
  position: relative;
}

.cat-input-mid {
  display: inline-flex;
  justify-content: space-between;
}

.cat-input input {
  box-sizing: border-box;
  height: 32px;
  padding: 4px 11px;
  flex: auto;
  width: 100%;
}

.cat-input-large input {
  height: 40px;
}

.cat-input-small input {
  height: 24px;
}

.cat-input input::placeholder {
  color: var(--gray);
}

.cat-input-label {
  display: inline-flex;
  align-items: center;
  background-color: #fafafa;
  padding: 0 11px;
}

.cat-input-before {
  border-right: 1px solid var(--gray);
}

.cat-input-after {
  border-left: 1px solid var(--gray);
}

.cat-input-mid {
  flex: auto;
  display: inline-flex;
  align-items: stretch;
}

.cat-input-fix {
  display: inline-flex;
  align-items: center;
  padding: 4px 11px;
}

.cat-input-prefix {
  padding-right: 0;
}

.cat-input-suffix {
  padding-left: 0;
}

/* textarea */
.cat-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  border: 1px solid var(--gray);
  border-radius: 2px;
}

.cat-textarea textarea {
  display: inline-block;
  width: 100%;
  padding: 4px 11px;
  box-sizing: border-box;
}

.cat-textarea textarea::placeholder {
  color: var(--gray);
}

.cat-textarea-count::after {
  content: attr(data-count);
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  color: var(--gray);
}

.cat-area-fake {
  visibility: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: -999999;
  z-index: -999999;
  overflow-y: hidden;
}`},62030:function(l,c){"use strict";c.Z=`import InputInner, { InputProps as inputInnerProps } from './Input';
import TextArea from './Textarea';

type InputInnerProps = typeof InputInner;

interface FormProps extends InputInnerProps {
  TextArea: typeof TextArea;
}

const Input = InputInner as FormProps;
Input.TextArea = TextArea;

export default Input;
export type InputProps = inputInnerProps;
`},48230:function(l,c){"use strict";c.Z=`import { useMounted } from "../tools/hooks";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { TextAreaProps } from "./Textarea";

/**
 * \u548C props.value \u53CC\u5411\u7ED1\u5B9A
 * \u548C textarea.value \u53CC\u5411\u7ED1\u5B9A
 */
export function useBind(props: TextAreaProps) {
  const { defaultValue, value: pv, onChange } = props;
  const [value, setV] = useState(defaultValue || pv || '');

  useEffect(() => {
    if ('value' in props) {
      setV(pv||'')
    }
  }, [pv]);

  function onInput(e: ChangeEvent<HTMLTextAreaElement>) {
    if (!('value' in props)) {
      setV(e.target.value);
    }
    onChange?.(e);
  }

  return [value, onInput] as const;
}

/**
 * <textarea /> autoSize \u529F\u80FD
 */
export function useAutoSize(props: TextAreaProps, value: string) {
  const { autoSize } = props;
  const areaRef = useRef<any>(null);
  const fakeRef = useRef<any>(null);

  // \u6700\u5C0F\u9AD8\u5EA6&\u6700\u5927\u9AD8\u5EA6
  useMounted(() => {
    if (typeof autoSize === 'object') {
      const { minRow, maxRow } = autoSize;
      const fakeNode = fakeRef.current;
      fakeNode.setAttribute('rows', minRow);
      const minHeight = fakeNode.clientHeight;

      fakeNode.setAttribute('rows', maxRow);
      const maxHeight = fakeNode.clientHeight;

      areaRef.current.setAttribute(
        'style',
        \`min-height: \${minHeight}px; max-height: \${maxHeight}px;\`,
      );

      fakeNode.setAttribute('rows', 1);
    }
  });

  // \u81EA\u52A8\u6491\u9AD8
  const style = useMemo(() => {
    const fakeNode = fakeRef.current;
    const areaNode = areaRef.current;

    if (!props.autoSize) {
      return {};
    }

    if (fakeNode && areaNode) {
      fakeNode.value = value;
      const height: number = fakeNode.scrollHeight;
      return { height };
    }
    return {};
  }, [value]);

  return {
    style,
    areaRef,
    fakeRef,
  };
}
`},75369:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { CSSProperties, FC, ReactNode } from 'react';
import { SubMenuProps } from './SubMenu';
import './index.css';
import { MenuContext, useMenu } from './useMenu';


/**
 * \u514B\u9686children
 */
function newChildren(props: MenuProps) {
  const { children } = props;

  return React.Children.map(children, (c, i) => {
    const child = c as React.FunctionComponentElement<SubMenuProps>;

    return React.cloneElement(child, {
      name: child.props.name || String(i),
      path: child.props.name || String(i),
      lv: 1,
    });
  });
}

export type MenuModeType = 'inline' | 'vertical' | 'horizon';
export interface MenuProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  /**
   * inline \u6A21\u5F0F\u7684\u83DC\u5355\u7F29\u8FDB\u5BBD\u5EA6
   */
  inlineIndent?: number;
  /**
   * \u88AB\u9009\u4E2D\u65F6\u8C03\u7528	
   */
  onSelect?: (args: any) => any;
  /**
   * \u83DC\u5355\u7C7B\u578B\uFF0C\u73B0\u5728\u652F\u6301\u5782\u76F4\u3001\u6C34\u5E73\u3001\u548C\u5185\u5D4C\u6A21\u5F0F\u4E09\u79CD
   */
  mode?: MenuModeType;
}

const Menu: FC<MenuProps> = (props) => {
  const { className, style, mode } = props;
  const clas = classNames('cat-menu', className, {
    'cat-menu-horizon': mode === 'horizon',
  });
  const menuContext = useMenu(props);

  return (
    <MenuContext.Provider value={menuContext}>
      <ul className={clas} style={style}>
        {newChildren(props)}
      </ul>
    </MenuContext.Provider>
  );
};
Menu.defaultProps = {
  inlineIndent: 20,
  mode: 'inline',
};
export default Menu;

`},81665:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { FC, ReactNode, useContext } from 'react';
import { MenuContext } from './useMenu';

interface MenuItemProps {
  className?: string;
  children?: ReactNode;
  name?: string;
  path?: string;
  lv?: number;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, children, path, lv } = props;
  const {inlineIndent, curPath, mode, setCurPath} = useContext(MenuContext);
  const isCur = curPath === path;
  const padding = mode === 'inline' ? inlineIndent*lv! : inlineIndent;
  /**
   * background \u9AD8\u4EAE
   */
  function curBg() {
    if (!isCur) return false
    if (mode === 'vertical') return true;
    if (mode === 'inline') return true;
    if (mode === 'horizon' && lv! > 1) return true;
    else return false;
  }
  
  const clas = classNames('cat-menu-item', className, {
    'cat-menu-cur-txt': isCur, // \u6587\u5B57\u9AD8\u4EAE
    'cat-menu-cur-right': mode === 'inline' && isCur, // border-right \u9AD8\u4EAE
    'cat-menu-cur-bottom': mode === 'horizon' && lv === 1 && isCur, // border-buttom \u9AD8\u4EAE
    'cat-menu-cur-bg': curBg(), // background \u9AD8\u4EAE
  });

  function click() {
    setCurPath(path!);
  }

  return (
    <li className={clas} style={{ paddingLeft: padding }} onClick={click}>
      {children}
    </li>
  );
};

export default MenuItem;
`},28278:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { FC, ReactNode } from 'react';
import Icon from '../Icon';
import { MenuContext } from './useMenu';
import Popup from '../Popup';
import { MenuModeType } from './MenuGroup';

/**
 * \u514B\u9686children
 */
function useNewChildren(props: SubMenuProps) {
  const { children, path, lv } = props;

  return React.Children.map(children, (c, i) => {
    const child = c as React.FunctionComponentElement<SubMenuProps>;
    const name = child.props.name || String(i);

    return React.cloneElement(child, {
      name,
      path: \`\${path}-\${name}\`,
      lv: lv! + 1,
    });
  });
}
/**
 * \u5F39\u6846\u663E\u793A\u4F4D\u7F6E
 */
function getPlacement(props: SubMenuProps, mode: MenuModeType) {
  const { lv } = props;
  if (mode === 'horizon' && lv! <= 1) return 'bottom';
  if (mode === 'horizon' && lv! > 1) return 'right';
  if (mode === 'vertical') return 'right';
}
/**
 * \u5F39\u6846\u7684\u5BBD\u5EA6
 */
function useTitleWidth() {
  const [w, setW] = useState(0);

  function refCB(node: HTMLDivElement) {
    if (node) {
      setW(node.clientWidth);
    }
  }

  return [w, refCB] as const;
}

/**
 * return true \u7684\u6761\u4EF6:
 * 1: path \u957F\u5EA6\u5C0F\u4E8E curPath
 * 2: path \u4E0E curPath \u4E00\u4E00\u5BF9\u5E94
 * \u4F8B\u5B50:
 * cuarPath = 1-2-3
 * path = 1-2
 * return true
 */
function getIsCur(curPath: string, path: string) {
  const cur = curPath.split('-');
  const p = path.split('-');
  if (p.length > cur.length) return false;
  for (let i = 0; i < p.length; i++) {
    if (cur[i] !== p[i]) return false;
  }
  return true;
}
/**
 * fold: \u6298\u53E0
 */
function useFold() {
  const [fold, setFold] = useState(true);
  const {mode} = useContext(MenuContext);

  function click() {
    if (mode !== 'inline') return;
    setFold(!fold);
  }

  return [click, fold] as const;
}

interface ArrowProps {
  mode: MenuModeType
  fold: boolean;
  lv: number;
}

function Arrow(props: ArrowProps) {
  const { mode, fold, lv } = props;

  if (mode === 'horizon' && lv === 1) return null;

  if (mode === 'inline') {
    if (fold) return <Icon name="arrow-down-bold" />;
    else return <Icon name="arrow-up-bold" />;
  }

  return <Icon className="cat-sub-arrow-right" name="arrow-up-bold" />;
}


export interface SubMenuProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  name?: string;
  path?: string;
  lv?: number;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { title, path, lv } = props;
  const {mode, inlineIndent, curPath} = useContext(MenuContext);
  const [titleWidth, titleRefCB] = useTitleWidth(); // \u83B7\u53D6subTitle \u5BBD\u5EA6
  const newChildren = useNewChildren(props); // \u514B\u9686children
  const [click, fold] = useFold(); // \u662F\u5426\u6298\u53E0
  const padding = mode === 'inline' ? inlineIndent * lv! : inlineIndent;
  const isCur = getIsCur(curPath, path!)

  const titleClass = classNames('cat-submenu-title', {
    'cat-menu-cur-txt': isCur,
    'cat-menu-cur-bottom': isCur && mode === 'horizon' && lv === 1,
  });
  const listClass = classNames('cat-submenu-list', {
    'cat-submenu-list-shadow': mode !== 'inline', // \u662F\u5426\u663E\u793A\u9634\u5F71
    'cat-submenu-list-fold': mode === 'inline' && fold, // \u662F\u5426\u6298\u53E0
  });

  const ItemTittle = (
    <div className={titleClass} style={{ paddingLeft: padding }} ref={titleRefCB} onClick={click}>
      <span>{title}</span>
      <Arrow mode={mode} fold={fold} lv={lv!} />
    </div>
  );

  const Over = (
    <ul className={listClass} style={{ width: titleWidth }}>
      {newChildren}
    </ul>
  );

  if (mode === 'inline') {
    return (
      <div>
        {ItemTittle}
        {Over}
      </div>
    );
  }

  return (
    <Popup overLay={Over} placement={getPlacement(props, mode)} space={9}>
      {/* \u5916\u9762\u5305\u4E86\u4E00\u5C42div\u662F\u56E0\u4E3AItemTittle\u4F1A\u88AB\u514B\u9686, \u9632\u6B62 ref \u88AB\u8986\u76D6 */}
      <div>{ItemTittle}</div>
    </Popup>
  );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
`},38570:function(l,c){"use strict";c.Z=`import { Menu } from 'catd';

const App = () => {
  function onSelect(res: any) {
    console.log(res);
  }

  return (
    <Menu style={{ width: 'auto' }} onSelect={onSelect} mode="horizon">
      <Menu.Item>\u5E03\u5C40</Menu.Item>
      <Menu.Sub title="Navigation Two - Submenu">
        <Menu.Item>Navigation One</Menu.Item>
        <Menu.Item>Navigation Two</Menu.Item>
        <Menu.Sub title="Submenu">
          <Menu.Item>Navigation One</Menu.Item>
          <Menu.Item>Navigation Two</Menu.Item>
        </Menu.Sub>
      </Menu.Sub>
      <Menu.Sub title="\u901A\u7528">
        <Menu.Item>button</Menu.Item>
        <Menu.Item>icon</Menu.Item>
      </Menu.Sub>
      <Menu.Item>\u5176\u4ED6</Menu.Item>
    </Menu>
  );
};

export default App;
`},82721:function(l,c){"use strict";c.Z=`import { Menu } from 'catd';

const App = () => {
  function onSelect(res: any) {
    console.log(res);
  }

  return (
    <Menu style={{ width: 250 }} onSelect={onSelect} mode="inline">
      <Menu.Item>\u5E03\u5C40</Menu.Item>
      <Menu.Sub title="Navigation Two - Submenu">
        <Menu.Item>Navigation One</Menu.Item>
        <Menu.Item>Navigation Two</Menu.Item>
        <Menu.Sub title="Submenu">
          <Menu.Item>Navigation One</Menu.Item>
          <Menu.Item>Navigation Two</Menu.Item>
        </Menu.Sub>
      </Menu.Sub>
      <Menu.Sub title="\u901A\u7528">
        <Menu.Item>button</Menu.Item>
        <Menu.Item>icon</Menu.Item>
      </Menu.Sub>
      <Menu.Item>\u5176\u4ED6</Menu.Item>
    </Menu>
  );
};

export default App;
`},88245:function(l,c){"use strict";c.Z=`import { Menu } from 'catd';

const App = () => {
  function onSelect(res: any) {
    console.log(res);
  }

  return (
    <Menu style={{ width: 250 }} onSelect={onSelect} mode="vertical">
      <Menu.Item>\u5E03\u5C40</Menu.Item>
      <Menu.Sub title="Navigation Two - Submenu">
        <Menu.Item>Navigation One</Menu.Item>
        <Menu.Item>Navigation Two</Menu.Item>
        <Menu.Sub title="Submenu">
          <Menu.Item>Navigation One</Menu.Item>
          <Menu.Item>Navigation Two</Menu.Item>
        </Menu.Sub>
      </Menu.Sub>
      <Menu.Sub title="\u901A\u7528">
        <Menu.Item>button</Menu.Item>
        <Menu.Item>icon</Menu.Item>
      </Menu.Sub>
      <Menu.Item>\u5176\u4ED6</Menu.Item>
    </Menu>
  );
};

export default App;
`},65110:function(l,c){"use strict";c.Z=`.cat-menu {
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}

.cat-menu-horizon {
  display: flex;
}

.cat-menu-item {
  display: flex;
  align-items: center;
  height: 3em;
  padding: 0 20px;
}

.cat-menu-item:hover {
  color: var(--blue);
}

.cat-submenu-list {
  min-width: 100px;
}

.cat-submenu-list-shadow {
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  background-color: #fff;
  border-radius: 3%;
}

.cat-submenu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  padding: 0 20px;
}

.cat-submenu-title:hover {
  color: var(--blue);
}

/* \u9AD8\u4EAE\u6837\u5F0F */
.cat-menu-cur-right {
  border-right: 3px solid var(--blue);
}

.cat-menu-cur-txt {
  color: var(--blue);
}

.cat-menu-cur-bottom {
  border-bottom: 2px solid var(--blue);
}

.cat-menu-cur-bg {
  background-color: #e6f7ff;
  color: var(--blue);
}

/* \u663E\u793A\u65B9\u5F0F */
.cat-sub-arrow-right {
  transform: rotate(90deg);
}

.cat-submenu-list-fold {
  display: none;
}`},42538:function(l,c){"use strict";c.Z=`import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

type MenuGroupType = typeof MenuGroup;

interface MenuProps extends MenuGroupType {
  Item: typeof MenuItem;
  Sub: typeof SubMenu;
}

const Menu = MenuGroup as MenuProps;
Menu.Item = MenuItem;
Menu.Sub = SubMenu;

export default Menu;
`},81681:function(l,c){"use strict";c.Z=`import React, { useState } from 'react';
import { MenuProps } from './MenuGroup';

export function useMenu(props: MenuProps) {
  const { onSelect, inlineIndent, mode='horizon' } = props;
  const [curPath, setPath] = useState('0');

  function setCurPath(path: string) {
    setPath(path);
    if (!onSelect) return;
    const name = path.split('-').pop();
    onSelect({ name, path });
  }

  return {
    inlineIndent: inlineIndent || 20,
    mode,
    curPath,
    setCurPath,
  };
}

type useMenuRetury = ReturnType<typeof useMenu>;
export const MenuContext = React.createContext<useMenuRetury>({
  inlineIndent: 20,
  mode: 'horizon',
  curPath: '0',
  setCurPath: () => {},
});
`},43581:function(l,c){"use strict";c.Z=`import { render } from 'react-dom';
import MessageList from './MessageList';

let msgListRoot: HTMLElement;

export interface MsgProps {
  msg: string;
  type: 'success' | 'warning' | 'error' | 'info';
  duration?: number;
}

const addMsg = (props: MsgProps) => {
  if (!msgListRoot) {
    msgListRoot = document.createElement('div');
    document.body.append(msgListRoot);
    render(<MessageList />, msgListRoot);
  }

  MessageList.add({
    ...props,
    duration: props.duration || 3000,
    time: new Date().getTime(),
  });
};

export default {
  success: (msg: string) => addMsg({ type: 'success', msg }),
  error: (msg: string) => addMsg({ type: 'error', msg }),
  info: (msg: string) => addMsg({ type: 'info', msg }),
  warning: (msg: string) => addMsg({ type: 'warning', msg }),
};
`},97751:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import Alert from '../Alert';
import './index.css';

function MessageList() {
  const [msgList, setList] = useState<MsgItemProps[]>([]);

  MessageList.add = (newMsg: MsgItemProps) => {
    const now = new Date().getTime();
    const arr = msgList.filter(({ time, duration }) => now - time < duration);
    newMsg.duration += arr.length * 200; // \u4F18\u5316\u5FEB\u901F\u70B9\u51FB, \u4F9D\u6B21\u6D88\u5931\u7684\u52A8\u753B\u6548\u679C
    setList([...arr, newMsg]);
  };

  const List = msgList.map((msgItemProps) => <MsgItem {...msgItemProps} key={msgItemProps.time} />);
  return <div className="cat-message-list">{List}</div>;
}
MessageList.add = (item: MsgItemProps) => {};
export default MessageList;

interface MsgItemProps {
  msg: string;
  type: 'success' | 'warning' | 'error' | 'info';
  duration: number;
  time: number;
}

const MsgItem: FC<MsgItemProps> = (props) => {
  const { type, msg, duration } = props;
  const [show, setShow] = useState(true);

  const clas = classNames('cat-msg-item', {
    'cat-msg-show': show,
    'cat-msg-hide': !show,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={clas}>
      <Alert type={type} message={msg} />
    </div>
  );
};
`},86353:function(l,c){"use strict";c.Z=`import { Message, Button } from 'catd';

const App = () => {
  const success = () => Message.success('MessageList' + new Date().getTime());
  const error = () => Message.error('MessageList' + new Date().getTime());
  const warning = () => Message.warning('MessageList' + new Date().getTime());
  const info = () => Message.info('MessageList' + new Date().getTime());

  return (
    <div>
      <Button onClick={info} btnType="primary">
        info
      </Button>

      <Button onClick={success}>success</Button>

      <Button onClick={error} btnType="danger">
        error
      </Button>

      <Button onClick={warning}>waring</Button>
    </div>
  );
};

export default App;
`},73607:function(l,c){"use strict";c.Z=`.cat-message-list {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.cat-msg-item {
  height: 50px;
}
.cat-msg-show {
  animation: msg-show .2s forwards;
}
.cat-msg-hide {
  animation: msg-hide 1s forwards;
}

@keyframes msg-show {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: 50px;
  }  
}

@keyframes msg-hide {
  from {
    opacity: 1;
    height: 50px;
  }
  to {
    opacity: 0;
    height: 0;
  }  
}`},44491:function(l,c){"use strict";c.Z=`import Message from "./Message";

export default Message`},68457:function(l,c){"use strict";c.Z=`import { Children, cloneElement, FC, ReactElement, RefObject } from 'react';
import ReactDom from 'react-dom';
import Show from '../Show';
import { useClickOut, usePosition } from './tool';
import './index.css';

export interface OverlayProps {
  children: ReactElement;
  /**
   * \u663E\u793A\u9690\u85CF
   */
  visible: boolean;
  /**
   * \u70B9\u51FB\u7A7A\u767D\u5904\u89E6\u53D1
   */
  onVisibleChange: (visible: boolean) => void;
  /**
   * \u6309\u94AEref
   */
  btnRef: RefObject<HTMLElement>;
  /**
   * \u663E\u793A\u4F4D\u7F6E
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * \u6309\u94AE\u548C\u5F39\u6846\u7684\u95F4\u8DDD
   */
  space?: number;
  /**
   * \u52A8\u753B\u65F6\u957F
   */
  duration?: number;
}

const Overlay: FC<OverlayProps> = (props) => {
  const { children, visible, onVisibleChange, btnRef, duration } = props;
  const [overLayCb, overLayRef, style] = usePosition(props);
  useClickOut([overLayRef, btnRef], () => onVisibleChange(false));

  if (duration !== 0) {
    const Content = 
      <Show duration={duration} show={visible} style={style} ref={overLayCb} >
        {children}
      </Show>

    return ReactDom.createPortal(
      Content,
      document.body,
    );    
  }
  // \u5982\u679C\u4E0D\u9700\u8981\u6DE1\u5165\u6DE1\u51FA\u52A8\u753B, \u5C31\u4E0D\u7528 Show \u7EC4\u4EF6
  else {
    const child = Children.only(children); // \u53EA\u80FD\u4F20\u4E00\u4E2Achild \u5426\u5219\u62A5\u9519
    const newChild = cloneElement(child, {
      ref: overLayCb,
      style: { ...child.props.style, ...style },
    });    
  
    if(!visible) return null
    return ReactDom.createPortal(newChild, document.body)
  }

};

Overlay.defaultProps = {
  placement: 'bottom',
  space: 0,
  duration: 320,
};

export default Overlay;
`},96744:function(l,c){"use strict";c.Z=`import { Overlay, Button } from 'catd';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
\`;
const Trigger = styled.div\`
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
\`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  function trigger(visible: boolean) {
    setVisible(visible);
  }

  return (
    <>
      <Trigger ref={btnRef} onClick={() => trigger(!visible)}>
        <Button btnType='primary' >click here</Button>
      </Trigger>

      <Overlay visible={visible} onVisibleChange={(visible) => trigger(visible)} btnRef={btnRef}>
        <Card>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</Card>
      </Overlay>
    </>
  );
};

export default App;
`},41775:function(l,c){"use strict";c.Z=`import { Button, Overlay } from 'catd';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
\`;
const Trigger = styled.div\`
  line-height: 50px;
  font-size: 16px;
  font-weight: bold;
\`;

const App = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  function trigger(visible: boolean) {
    setVisible(visible);
  }

  return (
    <>
      <Trigger ref={btnRef} onClick={() => trigger(!visible)}>
        <Button btnType='primary' >trigger top</Button>
      </Trigger>

      <Overlay
        visible={visible}
        onVisibleChange={(visible) => trigger(visible)}
        btnRef={btnRef}
        placement="top"
      >
        <Card>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</Card>
      </Overlay>
    </>
  );
};

export default App;
`},29711:function(l,c){"use strict";c.Z=`.cat-overlay {
  
}`},80983:function(l,c){"use strict";c.Z=`import Overlay from "./Overlay";

export default Overlay`},89051:function(l,c){"use strict";c.Z=`import { CSSProperties, RefObject, useCallback, useEffect, useRef, useState } from "react";
import { OverlayProps } from "./Overlay";


/**
 * \u70B9\u51FB\u7A7A\u767D\u5904 \u9690\u85CF overlay
 */
export function useClickOut(refs: RefObject<any>[], hide: () => any) {
  function fn(e: MouseEvent) {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];
      if (ref.current?.contains(e.target)) return;
    }
    hide();
  }

  useEffect(() => {
    document.addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, []);
}

function getPlacement(props: OverlayProps, overLayNode: HTMLElement): CSSProperties {
  const { btnRef, placement, space = 0 } = props;
  if (!btnRef.current) {
    return {};
  }

  const { top, left, width, height } = btnRef.current.getBoundingClientRect();
  const { scrollLeft, scrollTop } = document.documentElement;
  const style: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
  };

  if (placement === 'bottom') {
    style.top = scrollTop + top + height + space;
    style.left = scrollLeft + left;
  }
  if (placement === 'right') {
    style.top = scrollTop + top;
    style.left = scrollLeft + left + width + space;
  }
  if (placement === 'left') {
    style.top = scrollTop + top;
    style.left = scrollLeft + left - overLayNode.offsetWidth - space;
  }
  if (placement === 'top') {
    style.top = scrollTop + top - overLayNode.offsetHeight - space;
    style.left = scrollLeft + left;
  }

  return style;
}
/**
 * \u5F39\u6846\u7684\u4F4D\u7F6E
 */
export function usePosition(props: OverlayProps) {
  const overLayRef = useRef<any>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const overLayCb = useCallback((overLayNode: HTMLDivElement) => {
    overLayRef.current = overLayNode;
    if (overLayNode) {
      const positon = getPlacement(props, overLayNode);
      setStyle(positon);
    }
  }, []);

  return [overLayCb, overLayRef, style] as const;
}
`},80662:function(l,c){"use strict";c.Z=`import { useDebounceFn } from '../tools/hooks';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { OverlayProps } from '../Overlay/Overlay';
import { PopupExp, Overlay } from '../index';
import './index.css';

type OverlayType = Pick<OverlayProps, 'children' | 'placement' | 'space' | 'duration'>;

interface PopupProps extends OverlayType {
  /**
   * \u5F39\u6846\u7C7B\u5BB9
   */
  overLay: any;
  /**
   * \u89E6\u53D1\u4E8B\u4EF6
   */
  trigger?: 'click' | 'hover';
}

const Popup = forwardRef<PopupExp, PopupProps>((props, ref) => {

  const { placement='right', children, overLay, trigger='hover', space, duration } = props;
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const timer = useRef<any>(null);

  useImperativeHandle(ref, () => ({ setVisible }));

  const onMouseEnter = () => {
    if (trigger !== 'hover') return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setVisible(true);
    }, 100);
  };

  const onMouseLeave = () => {
    if (trigger !== 'hover') return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const onClick = useDebounceFn(() => {
    if (trigger === 'click') setVisible(!visible);
  }, 100);

  const child = React.Children.only(children); // \u53EA\u80FD\u4F20\u4E00\u4E2Achild \u5426\u5219\u62A5\u9519
  const newChild = React.cloneElement(child, {
    ...child.props,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ref: btnRef,
  });
  const newOverLay = React.cloneElement(overLay, {
    ...overLay.props,
    onMouseEnter,
    onMouseLeave,
  });

  return (
    <>
      {newChild}

      <Overlay
        btnRef={btnRef}
        visible={visible}
        onVisibleChange={(vi) => setVisible(vi)}
        placement={placement}
        space={space}
        duration={duration}
      >
        {newOverLay}
      </Overlay>
    </>
  );
});

export default Popup;
`},57295:function(l,c){"use strict";c.Z=`import { Popup, Button, PopupExp, Icon } from 'catd';
import { useRef } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
  position: relative;
  .icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
\`;

const App = () => {
  const popupRef = useRef<PopupExp>(null)

  const close = () => popupRef.current?.setVisible(false)

  const overLay = <Card>
    <span>\u79BB\u5F00\u6D88\u5931</span>
    <Icon  className='icon' size='33' color='#ff4d4f' onClick={close} hoverColor='red' name='icon-mianxing_fuzhi_guanbi' />
  </Card>

  return (
    <Popup overLay={overLay} ref={popupRef}>
      <Button btnType='primary' >hover</Button>
    </Popup>
  );
};

export default App;
`},38728:function(l,c){"use strict";c.Z=`import { Popup, Button, Icon, PopupExp } from 'catd';
import { useRef } from 'react';
import styled from 'styled-components';

const Card = styled.div\`
  width: 300px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  color: #999;
  position: relative;
  .icon {
    position: absolute;
    top: 3px;
    right: 3px;
    cursor: pointer;
  }
\`;

const App = () => {
  const popupRef = useRef<PopupExp>(null)

  const close = () => popupRef.current?.setVisible(false)

  const overLay = <Card>
    <span>\u70B9\u51FB\u7A7A\u767D\u5904\u6D88\u5931</span>
    <Icon  className='icon' size='33' color='#ff4d4f' onClick={close} hoverColor='red' name='icon-mianxing_fuzhi_guanbi' />
  </Card>

  return (
    <Popup overLay={overLay} trigger="click" placement="top" ref={popupRef}>
      <Button btnType='primary' >click</Button>
    </Popup>
  );
};

export default App;
`},3908:function(l,c){"use strict";c.Z=`.cat-popup {
  display: inline-block;
}`},99861:function(l,c){"use strict";c.Z=`import Popup from "./Popup";

export default Popup`},44070:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { FC } from 'react';
import { CSSProperties } from 'styled-components';
import './index.css'

export interface ProgressProps {
  className?: string
  /**
   * \u767E\u5206\u6BD4
   */
  percent?: number
  /**
   * \u8FDB\u5EA6\u6761\u9AD8\u5EA6 \u6216 \u5706\u73AF\u9AD8\u5EA6
   */
  height?: number
  /**
   * @description \u662F\u5426\u663E\u793A\u6587\u5B57
   * @default 'true'
   */
  showText?: boolean
  /**
   * @description \u8FDB\u5EA6\u6761\u989C\u8272
   * @default '#1890ff'
   */
  bgColor?: string
  /**
   * @description \u6587\u5B57\u989C\u8272
   * @default "#fff"
   */
  color?: string
  /**
   * @description \u7C7B\u578B\uFF0C\u53EF\u9009 line circle
   * @default "line"
   * @type 'circle' | 'line'
   */
  type?: 'circle' | 'line'
  /**
   * @description \u5706\u73AF\u7684\u73AF\u5BBD
   */
  border?: number
  /**
   * @type CSSProperties 
   */
  style?: CSSProperties
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    className,
    percent=0,
    height = props.type === 'circle' ? 100 : 16,
    showText = true,
    bgColor ='#1890ff',
    color = '#ffffff',
    type = 'line',
    border = 15,
    style
  } = props

  const clas = classNames('cat-progress', className, {
    [\`cat-progress-\${type}\`]: type
  })

  function getOutStyle (type: ProgressProps['type']):CSSProperties {
    if (type === 'circle') {
      return {
        width: height,
        height: height,
        background: \`conic-gradient(\${bgColor} \${3.6 * percent}deg, #f1f1f1 0)\`,
        ...style
      }
    }
    return {
      height,
      borderRadius: height / 2,
      ...style    
    }
  } 

  function getInnerStyle(type: ProgressProps['type']): CSSProperties {
    if (type === 'circle') {
      let w = height-border*2
      if(w<0) w = 0
      return {
        width: w,
        height: w,
      }
    }
    return {
      color,
      backgroundColor: bgColor,
      width: \`\${percent}%\`,
      borderRadius: height/2
    }
  }

  const outStyle = getOutStyle(type)
  const innerStyle = getInnerStyle(type)

  return <div className={clas} style={outStyle} >
    <div className='inner' style={innerStyle} >
      {showText && <span>{percent}%</span>}
    </div>
  </div>;
}

export default Progress;
`},92738:function(l,c){"use strict";c.Z=`
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  marginTop: 9
}

export default () => {
  return <div style={{width: '50%'}} >
    <Progress percent={30} style={style} />
    <Progress percent={50} style={style} />
    <Progress percent={80} style={style} bgColor='rgb(255, 77, 79)' />
    <Progress percent={100} style={style} bgColor='rgb(82, 196, 26)' />
    <Progress percent={50} style={style} showText={false} height={5} />
  </div>
}`},33850:function(l,c){"use strict";c.Z=`
import {Progress} from 'catd'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  alignItems: 'center',
  alignContent: 'space-around'
}

export default () => {
  return <div style={style} >
    <Progress type='circle' percent={30} />
    <Progress type='circle' percent={100} bgColor='rgb(82, 196, 26)' />
    <Progress type='circle' percent={50} bgColor='rgb(255, 77, 79)' />
    <Progress type='circle' percent={80} border={100} height={200} showText={false} bgColor="orange" />
  </div>
}`},66587:function(l,c){"use strict";c.Z=`.cat-progress .inner {
  transition: all .5s;
}

.cat-progress-line {
  background-color: #f1f1f1;
}

.cat-progress-line .inner {
  height: 100%;
  text-align: center;
}

.cat-progress-circle {
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.cat-progress-circle .inner {
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}`},92959:function(l,c){"use strict";c.Z=`import Progress from './Progress'

export default Progress`},19357:function(l,c){"use strict";c.Z=`import React, { FC, ReactElement, useEffect, useState } from 'react';
import RadioItem from './RadioItem';

interface radioGroupProps {
  className?: string;
  /**
   * @description \u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u9009\u4E2D\u7684\u503C
   */
  value?: string;
  /**
   * @description \u9009\u9879\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570
   */
  onChange?: (v: string) => void;
  children?: ReactElement[];
}

const RadioGroup: FC<radioGroupProps> = (props) => {
  const { children, className, value } = props;
  const [v, setV] = useState(value);

  useEffect(() => {
    if ('value' in props) {
      setV(value)
    }
  }, [value])

  const newChildren = React.Children.map(children, (child) => {
    if (child?.type !== RadioItem) {
      return null;
    }
    
    function onChange(value: string) {
      setV(value);
      if (typeof props.onChange === 'function') {
        props.onChange(value);
      }
    }

    return React.cloneElement(child, {
      checked: child.props.value === v,
      onChange,
    });
  });

  return <span className={className}>{newChildren}</span>;
};

export default RadioGroup;
`},10037:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import './index.css';

interface RadioItemProps {
  className?: string;
  /**
   * \u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D
   * @default false
   */
  checked?: boolean;
  /**
   * \u7981\u7528 Radio
   * @default false
   */
  disabled?: boolean;
  /**
   * \u6839\u636E value \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5224\u65AD\u662F\u5426\u9009\u4E2D
   */
  value?: string;
  /**
   * \u9009\u9879\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570
   */
  onChange?: (e: string) => void;
  children?: ReactNode;
}

const RadioItem: FC<RadioItemProps> = (props) => {
  const { className, disabled, onChange, value } = props;

  const [checked, setChecked] = useState(false);

  const clas = classNames({
    'cat-radio': true,
    'cat-radio-disabled': disabled,
    [className as string]: !!className,
  });

  const clasLeft = classNames({
    'cat-radio-left': true,
    'cat-radio-checked': checked,
  });

  useEffect(() => {
    if (typeof props.checked !== 'boolean') {
      return;
    }
    if (props.checked !== checked) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  const click = () => {
    if (disabled) return;
    setChecked(true);
    if (value && typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <span className={clas} onClick={click}>
      <span className={clasLeft}></span>
      <span className="cat-radio-label">{props.children}</span>
    </span>
  );
};

export default RadioItem;
`},61745:function(l,c){"use strict";c.Z=`import { Radio } from 'catd';
import { useState } from 'react';

export default () => {
  const [v, setV] = useState('1')

  return (<>

    <div onClick={() => setV('3')} >ccc</div>
    <Radio.Group value={v}>
      <Radio.Item value="1">A</Radio.Item>
      <Radio.Item value="2">B</Radio.Item>
      <Radio.Item value="3">C</Radio.Item>
    </Radio.Group>
  </>
  )
}`},63672:function(l,c){"use strict";c.Z=`.cat-radio {
  font-size: 14px;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.cat-radio-left {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid var(--gray);
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
}
.cat-radio-checked {
  border: 1px solid var(--blue);
}
.cat-radio-checked::after{
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--blue);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
}
.cat-radio-label {
  padding: 0 8px;
}
.cat-radio-disabled {
  cursor: not-allowed;
  color: #00000040
}

.cat-radio-disabled .cat-radio-left {
  border: 1px solid var(--gray);
  background-color: #f5f5f5;
}
.cat-radio-disabled .cat-radio-checked::after {
  background-color: var(--gray);
}


`},97640:function(l,c){"use strict";c.Z=`import RadioItem from './RadioItem';
import RadioGroup from './RadioGroup';

type RadioItemType = typeof RadioItem;

interface RadioProps extends RadioItemType {
  Item: typeof RadioItem;
  Group: typeof RadioGroup;
}

const Radio = RadioItem as RadioProps;
Radio.Group = RadioGroup;
Radio.Item = RadioItem;

export default Radio;
`},17354:function(l,c){"use strict";c.Z=`import {Dropdown, DropItem, Icon, Input} from '../index';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { getDefault } from './tool';
import classNames from 'classnames';
import './index.css'

export interface SelectProps {
  /**
   * \u521D\u59CB\u503C
   */
  defaultValue?: any,
  /**
   * \u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE
   */
  value?: any,
  /**
   * \u914D\u7F6E\u9879
   */
  options: DropItem[],
  /**
   * \u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u672C	
   */
  placeholder?: string,
  /**
   * css \u5C5E\u6027
   */
  style?: CSSProperties,
  /**
   * \u662F\u5426\u7981\u7528
   */
  disabled?: boolean,
  /**
   * \u9009\u4E2D option\uFF0C\u8C03\u7528\u6B64\u51FD\u6570
   */
  onChange?: (v: any) => any,
}
const Select: FC<SelectProps> = (props) => {
  const { options, value, onChange, style, disabled, placeholder='\u8BF7\u9009\u62E9' } = props
  const [v, setV] = useState<DropItem|undefined>(getDefault(props))
  
  useEffect(() => {
    if (value in props) {
      setV(value)      
    }
  }, [value])
  
  const onChoose = (item: DropItem) => {
    setV(item)
    if(onChange) onChange(item.value)
  }

  const styl:CSSProperties = {
    display: 'inline-block',
    width: 120,
    ...style
  }

  const clasInput = classNames({
    'cat-select-input-disabled': disabled
  })

  return <Dropdown menu={options} trigger='click' onChoose={onChoose} disable={disabled} >
    {
      <Input value={v?.label||''}
        className={clasInput}
        style={styl}
        placeholder={placeholder}
        size='small'
        readOnly
        disabled={disabled}
        suffix={<Icon name='arrow-down-bold' />} />
    }
  </Dropdown>
}

export default Select;
`},48902:function(l,c){"use strict";c.Z=`import { DropItem } from "catd/interface"
import { CSSProperties } from "react"
import Select from "./Select"

const options: DropItem[] = [
  {
    key: 'jack',
    label: 'Jack',
    value: 'jack'
  }, 
  {
    key: 'lucy',
    label: 'Lucy',
    value: 'lucy'
  }, 
  {
    key: 'tom',
    label: 'Tom',
    value: 'tom'
  }, 
  {
    key: 'tony',
    label: 'Tony',
    value: 'tony'
  }, 
]
export default () => {

  const style: CSSProperties = {
    marginRight: 12,
    marginBottom: 12
  }

  return <div>
    <Select options={options} style={style} />
    <Select options={options} style={style} defaultValue='tom' />
    <Select options={options} style={style} defaultValue='tom' disabled />
  </div>
}`},11536:function(l,c){"use strict";c.Z=`.cat-select-input-disabled {
  background-color: #f1f1f1;
  color: #a8a8a8;
}

.cat-select-input-disabled:hover {
  cursor: not-allowed;
}

.cat-select-input-disabled input {
  color: #a8a8a8;
}


.cat-select-input-disabled input:hover {
  cursor: not-allowed;
}`},87985:function(l,c){"use strict";c.Z=`import Select from './Select'

export default Select`},80552:function(l,c){"use strict";c.Z=`import { SelectProps } from "./Select";

export function getDefault(props: SelectProps) {
  const {defaultValue, value, options} = props
  const v = defaultValue || value
  return options.find(item => item.value === v)
}`},62925:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import './index.css';

interface ShowProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * \u663E\u793A\u9690\u85CF
   */
  show: boolean;
  /**
   * \u52A8\u753B\u65F6\u95F4
   */
  duration?: number;
  children: ReactNode;
}
const Show = forwardRef<HTMLDivElement, ShowProps>((props, ref) => {

  const { show, children, duration = 300, style:styl } = props;
  const [visible, setVisible] = useState(show);
  const timer = useRef<any>(null);

  const clas = classNames({
    'cat-show': show,
    'cat-hide': !show,
  });

  function hide() {
    timer.current = setTimeout(() => setVisible(show), duration);
  }

  useEffect(() => {
    if (show) setVisible(show)
    else hide()
    return () => clearTimeout(timer.current);
  }, [show]);
  
  const style: CSSProperties = {
    animationDuration: \`\${duration / 1000}s\`,
    ...styl
  };

  if (!visible) return null;
  return (
    <div className={clas} style={style} ref={ref} >
      {children}
    </div>
  );
})

Show.defaultProps = {
  duration: 300,
};

export default Show;
`},90329:function(l,c){"use strict";c.Z=`.cat-show {
  animation: show 1s forwards;
}

.cat-hide {
  animation: hide 1s forwards;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes hide {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}`},5354:function(l,c){"use strict";c.Z=`import Show from "./Show";

export default Show`},59447:function(l,c){"use strict";c.Z=`/**
 */
import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return <TextArea placeholder="\u663E\u793A\u5B57\u6570" maxLength={30} showCount />;
};

export default App;
`},4588:function(l,c){"use strict";c.Z=`import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return <TextArea placeholder="\u81EA\u52A8\u6491\u9AD8" autoSize={true} />;
};

export default App;
`},28182:function(l,c){"use strict";c.Z=`import { Input } from 'catd';

const TextArea = Input.TextArea;

const App = () => {
  return (
    <TextArea
      placeholder="\u6700\u5C0F3\u884C, \u6700\u59277\u884C"
      showCount={true}
      maxLength={30}
      autoSize={{ minRow: 3, maxRow: 7 }}
    />
  );
};

export default App;
`},87344:function(l,c){"use strict";c.Z=`import classNames from 'classnames';
import React, { FC, ReactElement } from 'react';
import Popup from '../Popup';
import './index.css';

interface TooltipProps {
  /**
   * \u663E\u793A\u7C7B\u5BB9
   */
  text: string;
  /**
   * \u663E\u793A\u4F4D\u7F6E
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactElement;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { placement, children, text } = props;
  const tipClass = classNames('cat-tooltip', {
    [\`cat-tooltip-\${placement}\`]: placement,
  });

  let Card = (
    <div className={tipClass}>
      <div className="text">{text}</div>
      <div className="arrow"></div>
    </div>
  );

  return (
    <Popup overLay={text ? Card : <></>} placement={placement} duration={0}>
      {children}
    </Popup>
  );
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
`},56015:function(l,c){"use strict";c.Z=`import { Tooltip } from 'catd';

const App = () => {
  return (
    <Tooltip text="prompt text">
      <div>Tooltip will show on mouse enter.</div>
    </Tooltip>
  );
};

export default App;
`},17159:function(l,c){"use strict";c.Z=`import { Tooltip, Button } from 'catd';

const App = () => {
  return (
    <>
      <Tooltip text="prompt text">
        <Button>top</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="left">
        <Button>left</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="right">
        <Button>right</Button>
      </Tooltip>

      <Tooltip text="prompt text" placement="bottom">
        <Button>bottom</Button>
      </Tooltip>
    </>
  );
};

export default App;
`},86832:function(l,c){"use strict";c.Z=`
.cat-tooltip .text {
  padding: 6px;
  background-color: #000;
  color: #fff;
  border-radius: 3px;
}
.cat-tooltip .arrow {
  width: 0;
  height: 0;
  border: 6px solid;
  border-color: orangered skyblue gold yellowgreen;
}
/* \u4E0A */
.cat-tooltip-top .arrow {
  margin-left: 9px;
  border-color: #000 transparent transparent transparent;
}
/* \u4E0B */
.cat-tooltip-bottom {
  display: flex;
  flex-direction: column-reverse;
}
.cat-tooltip-bottom .arrow {
  border-color: transparent transparent #000 transparent;
  margin-left: 9px;
}
/* \u5DE6 */
.cat-tooltip-left {
  display: flex;
  align-items: center;
}
.cat-tooltip-left .arrow {
  border-color: transparent transparent transparent #000;
}
/* \u53F3 */
.cat-tooltip-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.cat-tooltip-right .arrow {
  border-color: transparent #000 transparent transparent;
}`},88891:function(l,c){"use strict";c.Z=`import Tooltip from "./Tooltip";

export default Tooltip`},56322:function(l,c){"use strict";c.Z=`import {Button, UploadFile} from '../index';
import { ChangeEvent, FC, useRef } from 'react';
import { useFiles } from './tool';
import { AxiosProgressEvent } from 'axios';
import UploaderList from './uploaderList';
import './index.css'


interface UploaderProps {
  /**
   * @description \u4E0A\u4F20\u7684\u5730\u5740	
   * @type string
   */
  action: string
  /**
   * @description \u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868	
   * @type object[]
   */
  defaultFiles?: UploadFile[]
  /**
   * @description \u4E0A\u4F20\u8FDB\u5EA6\u53D1\u751F\u6539\u53D8\u65F6\u7684\u56DE\u8C03
   */
  onProgress?: (percent: number, file: UploadFile) => void
  /**
   * @description \u4E0A\u4F20\u6210\u529F\u65F6\u7684\u56DE\u8C03
   */
  onSuccess?: (data: any, file: UploadFile) => void
  /**
   * @description \u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u56DE\u8C03
   */
  onError?: (err: any, file: UploadFile) => void
  /**
   * @description \u4E0A\u4F20\u524D\u7684\u56DE\u8C03,\u4E00\u822C\u7528\u4E8E\u68C0\u67E5\u6587\u4EF6\u5927\u5C0F\u683C\u5F0F
   */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /**
   * @description \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u56DE\u8C03
   */
  onChange?: (file: UploadFile) => void
  /**
   * \u5220\u9664\u6587\u4EF6\u65F6\u89E6\u53D1
   */
  onRemove?: (file: UploadFile) => void
}

const Uploader: FC<UploaderProps> = (props) => {
  const {
    action,
    defaultFiles,
    onRemove,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
  } = props
  
  const files = useFiles(defaultFiles || [])
  const refInput = useRef<HTMLInputElement>(null)
  /*
  * \u70B9\u51FB\u4E0A\u4F20\u6309\u94AE\u65F6\u89E6\u53D1
  */ 
  function clickUploadBtn() {
    if (refInput.current) {
      refInput.current.click()
    }
  }
  /**
   * \u4E0A\u4F20\u8FDB\u5EA6
   */
  const onUploadProgress = (file:UploadFile) => (e: AxiosProgressEvent)=>{
    if (!e.total) return;
    let percent = (e.loaded * 100) / e.total;
    percent = Math.round(percent);
    if (percent < 100) {
      if(onProgress) onProgress(percent, file)
      files.update(file, {
        status: 'uploading',
        percent,
      })
    }
  }
  /**
   * \u4E0A\u4F20\u6587\u4EF6
   * raw: \u6E90\u6587\u4EF6
   * */ 
  async function postFile(raw: File) {
    const file = files.create(raw)
    files.post({
      action,
      file: file.raw!,
      onUploadProgress: onUploadProgress(file)
    }).then(res => {
      if (onSuccess) onSuccess(res.data, file)
      if (onChange) onChange(file)
      files.update(file, {status: 'success', response: res.data, percent: 100})
    }).catch(async (error)  => {
      if (onError) onError(error, file)
      if (onChange) onChange(file)
      files.update(file, { status: 'error', error, percent: 50 })
      // \u4E0A\u4F20\u5931\u8D25\u540E\u6DFB\u52A0\u4E00\u4E2A\u8FDB\u5EA6\u6761\u964D\u4E3A0\u7684\u52A8\u753B
      const timer = setTimeout(() => {
        files.update(file, { status: 'error', error, percent: 0 })
        clearTimeout(timer)
      }, 300)
    })
  }
  /**
   * \u4E0A\u4F20\u6587\u4EF6\u524D, \u68C0\u67E5\u6587\u4EF6, \u8F6C\u6362\u6587\u4EF6
   * beforeUpload return false\u65F6: \u6587\u4EF6\u4E0D\u5408\u683C\u4E0D\u80FD\u4E0A\u4F20
   * beforeUpload return Promise\u65F6: \u5BF9\u6587\u4EF6\u8FDB\u884C\u4E86\u8F6C\u6362
   */
  function checkFile(file: File) {
    if (!beforeUpload) {
      postFile(file)
      return
    } 
    const res = beforeUpload(file)
    if (res instanceof Promise) {
      res.then(file => postFile(file))
    } else if (res !== false) {
      postFile(file)
    }
  }
  /**
   * \u9009\u79CD\u6587\u4EF6\u540E\u89E6\u53D1
   * */ 
  function chooseFile(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files) return
    let postFiles = Array.from(files)
    postFiles.forEach(file => checkFile(file))
  }
  /**
   * \u5220\u9664\u6587\u4EF6
   */
  function onRemoveFile(file: UploadFile) {
    if(onRemove) onRemove(file)
    files.delet(file)
  }

  return (
    <div className='cat-uploader' >
      <Button btnType='primary' onClick={clickUploadBtn} >upload file</Button>
      <input
        className='cat-upload-input'
        style={{display: 'none'}}
        ref={refInput}
        onChange={chooseFile}
        type='file'
      />
      <UploaderList fileList={files.list} onRemove={onRemoveFile} />
    </div>
  )
}

export default Uploader;
`},55763:function(l,c){"use strict";c.Z=`import { Progress, UploadFile } from "../index"
import { FC } from "react"
import classNames from "classnames"

interface UploaderProgressProps {
  file: UploadFile
}
/**
 * \u8FD9\u4E2A\u7EC4\u4EF6\u7684\u4F5C\u7528: 
 *  1,\u4E0A\u4F20\u6210\u529F\u540E,\u8FDB\u5EA6\u6761\u6162\u6162\u6D88\u5931
 *  2,\u4E0A\u4F20\u5931\u8D25\u540E,\u8FDB\u5EA6\u6761\u53D8\u7EA2\u6162\u6162\u6D88\u5931
 */
const UploaderProgress:FC<UploaderProgressProps> = (props) => {
  const {file} = props
  const color = file.status === 'error' ? '#ff4d4f' : '#1890ff'

  const clas = classNames({
    'cat-hide': file.status === 'error' || file.status === 'success'
  })
  
  return <Progress className={clas} showText={false} percent={file.percent} height={1} bgColor={color} />
}

export default UploaderProgress`},46806:function(l,c){"use strict";c.Z=`import React from "react"
import {Message, Uploader, UploadFile} from "catd"

function check(file: File) {
  if (Math.round(file.size / 1024)>50000000) {
    Message.error('file to big')
    return false
  }
  return true
}

// function filePromise(file: File) {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }

const defaultFiles: UploadFile[] = [
  {
    uid: '1',
    name: 'xxx.png',
    status: 'uploading',
    percent: 60,
    url: 'http://www.baidu.com/xxx.png',
  },{
    uid: '2',
    name: 'yyy.png',
    status: 'success',
    url: 'http://www.baidu.com/yyy.png',
  },{
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/zzz.png',
  },
]

export default () => {
  return (
    <div style={{maxWidth: 300}} >
      <Uploader
        beforeUpload={check}
        defaultFiles={defaultFiles}
        action="https://mock.apifox.cn/m1/1599304-0-default/upload"
      />
    </div>
  )
}`},13485:function(l,c){"use strict";c.Z=`.cat-uploader-li {
  height: 22px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 2px;
}

.cat-uploader-li:hover {
  background-color: #f3f3f3;
  border-radius: 3px;
  transition: all .5s;
}

.cat-upload-hide {
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
}

.cat-uploader-li .remove {
  display: none;
  cursor: pointer;
}

.cat-uploader-li:hover .remove {
  display: inline-block;
}

.cat-uploader-li:hover .status {
  display: none;
}

.cat-uploader-li .icon {
  flex: none;
}

.cat-file-name {
  flex: auto;
  padding-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cat-file-success {
  color: var(--blue)
}

.cat-file-error {
  color: var(--red);
}

.cat-file-loading {
  color: #333;
}

.cat-file-ready {
  color: gray;
}

.cat-hide {
  animation: hide 1.5s forwards;
}

@keyframes hide {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}`},17034:function(l,c){"use strict";c.Z=`import Uploader from './Uploader'

export default Uploader`},44314:function(l,c){"use strict";c.Z=`import axios from "axios"
import { UploadFile } from "../index"
import { useState } from "react"

type UploadPostParams = {
  action: string,
  file: File,
  onUploadProgress: any
}

type UploadFileUpdate = (target: UploadFile, params: Partial<UploadFile>) => void

export const useFiles = (defaultList: UploadFile[]) => {
  const [files, setFiles] = useState<UploadFile[]>(defaultList)

  const update: UploadFileUpdate = (target, params) => {
    setFiles(files => {
      return files.map(file => {
        if (file.uid === target.uid) return {...file, ...params}
        return file
      })
    })
  }

  const create = (fileRaw: File) => {
    const file: UploadFile = {
      uid: \`file-\${new Date().getTime()}\`,
      status: 'ready',
      size: fileRaw.size,
      name: fileRaw.name,
      percent: 0,
      raw: fileRaw
    }
    setFiles([file, ...files])
    return file
  }

  const post = (params: UploadPostParams) => {
    const {file, action, onUploadProgress} = params
    const formData = new FormData()
    formData.append(file.name, file)
    return axios.post(action, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress
    })
  }

  const delet = (file: UploadFile) => {
    setFiles(files => {
      return files.filter(item => item.uid !== file.uid)
    })
  }

  return {
    list: files,
    create,
    update,
    post,
    delet,
    setFiles
  }
}`},99850:function(l,c){"use strict";c.Z=`import { Icon, UploadFile } from "../index";
import { FC } from "react";
import classNames from "classnames";
import React from "react";
import UploaderProgress from "./UploaderProgress";

interface UploaderListProps {
  fileList: UploadFile[]
  onRemove: (file: UploadFile) => void
}

export const UploaderList: FC<UploaderListProps> = (props) => {

  const {
    fileList,
    onRemove
  } = props

  const clasLi = (status: UploadFile['status']) => {
    return classNames('cat-uploader-li', {
      [\`cat-file-\${status}\`]: status
    })
  }  

  function remove(file: UploadFile) {
    const dom = document.getElementById(file.uid)
    dom?.setAttribute('class', \`\${dom.className} cat-upload-hide\`)
    if (onRemove) {
      const timer = setTimeout(() => {
        onRemove(file)
        clearTimeout(timer)
      }, 500)
    }
  }

  return <ul className="cat-uploader-ul">
    {fileList.map(file => {
      return <React.Fragment key={file.uid}>
        <li className={clasLi(file.status)} id={file.uid} >
          <Icon name="file" className="icon" size="18" />
          <span className='cat-file-name' >{file.name}</span>
          {file.status === 'error' && <Icon size="24" className="icon status" name='icon-mianxing_fuzhi_gaojing'/>}
          {file.status === 'success' && <Icon size="24" className="icon status" name='icon-mianxing_fuzhi_anquanfanghu'/>}
          {file.status === 'uploading' && <Icon size="20" className="icon status cat-loading" name='loading'/>}
          {file.status === 'ready' && <Icon size="20" className="icon status cat-loading" name='loading' color="gray" />}
          <Icon className="icon remove" size="24" onClick={() => remove(file)} color='orange' name="icon-mianxing_fuzhi_guanbi" />
        </li>
        <UploaderProgress file={file} />
      </React.Fragment>
    })}
  </ul>
}

export default UploaderList`},72803:function(l,c){"use strict";c.Z=`import './static/base.css';
// import './static/normalise.css';
import './static/reset.css';

export * from './interface';
export { default as Radio } from './Radio';
export { default as Input } from './Input';
export { default as Form } from './Form';
export { default as Button } from './Button';
export { default as Menu } from './Menu';
export { default as Icon } from './Icon';
export { default as AutoComplete } from './AutoComplate';
export { default as Overlay } from './Overlay';
export { default as Tooltip } from './Tooltip';
export { default as Show } from './Show';
export { default as Popup } from './Popup';
export { default as Message } from './Message';
export { default as Alert } from './Alert';
export { default as Dropdown } from './Dropdown';export { default as Select } from './Select';export { default as Calendar } from './Calendar';export { default as Uploader } from './Uploader';export { default as Progress } from './Progress';`},28651:function(l,c){"use strict";c.Z=`export interface UploadFile {
  uid: string;
  name: string;
  status: 'ready' | 'uploading' | 'success' | 'error'; // ready \u7B49\u5F85\u4E0A\u4F20
  percent?: number;
  raw?: File; // \u6E90\u6587\u4EF6
  size?: number;
  response?: any;
  error?: any;
  url?: string;
}
export interface UploadItemProps {
  type: 'success' | 'error' | 'uploading' | 'add';
  file?: UploadFile;
  onRemove?: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
}

export interface ModalApi {
  show: (file: UploadFile) => void;
}

export interface DropItem {
  key: string
  label: string
  value?: any
  disable?: boolean,
  danger?: boolean,
  icon?: any
}

export interface PopupExp {
  setVisible: (v: boolean) => any
}

export type CalendarDate = {
  date: Date,
  key: number,
  disabled: boolean, // \u662F\u5426\u53EF\u9009\u62E9
  flag: 'cur' | 'prev' | 'next', 
  today: boolean, // \u662F\u5426\u662F\u4ECA\u5929
}



`},93374:function(l,c){"use strict";c.Z=`:root {
  --blue: #1890ff;
  --gray: #d9d9d9;
  --red: #ff4d4f;
  --green: #b7eb8f;
  --yellow: #ffe58f;

  --font: 1em;
  --font-lg: 1.25em;
  --font-sm: .875em;
}

.cat-shadown {
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}

.cat-loading {
  animation: loading 2s infinite linear;
  margin-left: 6px;
}

@keyframes loading {
  100% {
    transform: rotate(360deg)
  }
}`},79704:function(l,c){"use strict";c.Z=`@charset "utf-8";html{background-color:#fff;color:#000;font-size:12px}
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","\u5FAE\u8F6F\u96C5\u9ED1",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:"\\0020"}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #25a4bb;text-decoration: none;}
`},49767:function(l,c){"use strict";c.Z=`import { RefObject, useEffect, useRef, useState } from 'react';

export const useMounted = (cb: Function) => {
  let mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      cb();
    }
  }, []);
};

export const useUnMount = (cb: Function) => {
  useEffect(() => {
    return () => cb();
  }, []);
};

export const useDebounce = (value: any, delay = 300) => {
  const [v, setV] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setV(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return v;
};

export const useDebounceFn = (cb: Function, delay = 300) => {
  const timer = useRef<any>(null);

  return (...args: any) => {
    if (timer) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      cb.call(undefined, ...args);
    }, delay);
  };
};

export const useThrottle = (value: any, time = 300) => {
  const [v, setV] = useState(value);
  const cd = useRef<boolean>(false);

  useEffect(() => {
    if (!cd.current) {
      setV(value);
      cd.current = true;
      setTimeout(() => (cd.current = false), time);
    }
  }, [value]);

  return v;
};

/**
 * \u70B9\u51FB\u7A7A\u767D\u5904\u63D0\u793A\u5217\u8868\u6D88\u5931\u7528
 */
export function useClickOut(ref: RefObject<HTMLDivElement>, callback: Function) {
  function click(e: MouseEvent) {
    if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
      return;
    }
    callback();
  }

  useEffect(() => {
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
}
`},91815:function(l,c,e){(function(i,s){s(c,e(50959))})(this,function(i,s){"use strict";function o(E){if(E&&E.__esModule)return E;var w=Object.create(null);return E&&Object.keys(E).forEach(function(C){if(C!=="default"){var j=Object.getOwnPropertyDescriptor(E,C);Object.defineProperty(w,C,j.get?j:{enumerable:!0,get:function(){return E[C]}})}}),w.default=E,Object.freeze(w)}var r=o(s);function d(E,w){return d=Object.setPrototypeOf||function(j,N){return j.__proto__=N,j},d(E,w)}function m(E,w){E.prototype=Object.create(w.prototype),E.prototype.constructor=E,d(E,w)}var v=function(w,C){return w===void 0&&(w=[]),C===void 0&&(C=[]),w.length!==C.length||w.some(function(j,N){return!Object.is(j,C[N])})},y={error:null},b=function(E){m(w,E);function w(){for(var j,N=arguments.length,D=new Array(N),B=0;B<N;B++)D[B]=arguments[B];return j=E.call.apply(E,[this].concat(D))||this,j.state=y,j.resetErrorBoundary=function(){for(var M,Q=arguments.length,F=new Array(Q),H=0;H<Q;H++)F[H]=arguments[H];j.props.onReset==null||(M=j.props).onReset.apply(M,F),j.reset()},j}w.getDerivedStateFromError=function(N){return{error:N}};var C=w.prototype;return C.reset=function(){this.setState(y)},C.componentDidCatch=function(N,D){var B,M;(B=(M=this.props).onError)==null||B.call(M,N,D)},C.componentDidUpdate=function(N,D){var B=this.state.error,M=this.props.resetKeys;if(B!==null&&D.error!==null&&v(N.resetKeys,M)){var Q,F;(Q=(F=this.props).onResetKeysChange)==null||Q.call(F,N.resetKeys,M),this.reset()}},C.render=function(){var N=this.state.error,D=this.props,B=D.fallbackRender,M=D.FallbackComponent,Q=D.fallback;if(N!==null){var F={error:N,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(Q))return Q;if(typeof B=="function")return B(F);if(M)return r.createElement(M,F);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},w}(r.Component);function h(E,w){var C=function(D){return r.createElement(b,w,r.createElement(E,D))},j=E.displayName||E.name||"Unknown";return C.displayName="withErrorBoundary("+j+")",C}function x(E){var w=r.useState(null),C=w[0],j=w[1];if(E!=null)throw E;if(C!=null)throw C;return j}i.ErrorBoundary=b,i.useErrorHandler=x,i.withErrorBoundary=h,Object.defineProperty(i,"__esModule",{value:!0})})},9346:function(l){var c=typeof Element!="undefined",e=typeof Map=="function",i=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(r,d){if(r===d)return!0;if(r&&d&&typeof r=="object"&&typeof d=="object"){if(r.constructor!==d.constructor)return!1;var m,v,y;if(Array.isArray(r)){if(m=r.length,m!=d.length)return!1;for(v=m;v--!==0;)if(!o(r[v],d[v]))return!1;return!0}var b;if(e&&r instanceof Map&&d instanceof Map){if(r.size!==d.size)return!1;for(b=r.entries();!(v=b.next()).done;)if(!d.has(v.value[0]))return!1;for(b=r.entries();!(v=b.next()).done;)if(!o(v.value[1],d.get(v.value[0])))return!1;return!0}if(i&&r instanceof Set&&d instanceof Set){if(r.size!==d.size)return!1;for(b=r.entries();!(v=b.next()).done;)if(!d.has(v.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(r)&&ArrayBuffer.isView(d)){if(m=r.length,m!=d.length)return!1;for(v=m;v--!==0;)if(r[v]!==d[v])return!1;return!0}if(r.constructor===RegExp)return r.source===d.source&&r.flags===d.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===d.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===d.toString();if(y=Object.keys(r),m=y.length,m!==Object.keys(d).length)return!1;for(v=m;v--!==0;)if(!Object.prototype.hasOwnProperty.call(d,y[v]))return!1;if(c&&r instanceof Element)return!1;for(v=m;v--!==0;)if(!((y[v]==="_owner"||y[v]==="__v"||y[v]==="__o")&&r.$$typeof)&&!o(r[y[v]],d[y[v]]))return!1;return!0}return r!==r&&d!==d}l.exports=function(d,m){try{return o(d,m)}catch(v){if((v.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw v}}},51281:function(l,c){"use strict";var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,s=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,r=e?Symbol.for("react.strict_mode"):60108,d=e?Symbol.for("react.profiler"):60114,m=e?Symbol.for("react.provider"):60109,v=e?Symbol.for("react.context"):60110,y=e?Symbol.for("react.async_mode"):60111,b=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,E=e?Symbol.for("react.suspense_list"):60120,w=e?Symbol.for("react.memo"):60115,C=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,B=e?Symbol.for("react.scope"):60119;function M(F){if(typeof F=="object"&&F!==null){var H=F.$$typeof;switch(H){case i:switch(F=F.type,F){case y:case b:case o:case d:case r:case x:return F;default:switch(F=F&&F.$$typeof,F){case v:case h:case C:case w:case m:return F;default:return H}}case s:return H}}}function Q(F){return M(F)===b}c.AsyncMode=y,c.ConcurrentMode=b,c.ContextConsumer=v,c.ContextProvider=m,c.Element=i,c.ForwardRef=h,c.Fragment=o,c.Lazy=C,c.Memo=w,c.Portal=s,c.Profiler=d,c.StrictMode=r,c.Suspense=x,c.isAsyncMode=function(F){return Q(F)||M(F)===y},c.isConcurrentMode=Q,c.isContextConsumer=function(F){return M(F)===v},c.isContextProvider=function(F){return M(F)===m},c.isElement=function(F){return typeof F=="object"&&F!==null&&F.$$typeof===i},c.isForwardRef=function(F){return M(F)===h},c.isFragment=function(F){return M(F)===o},c.isLazy=function(F){return M(F)===C},c.isMemo=function(F){return M(F)===w},c.isPortal=function(F){return M(F)===s},c.isProfiler=function(F){return M(F)===d},c.isStrictMode=function(F){return M(F)===r},c.isSuspense=function(F){return M(F)===x},c.isValidElementType=function(F){return typeof F=="string"||typeof F=="function"||F===o||F===b||F===d||F===r||F===x||F===E||typeof F=="object"&&F!==null&&(F.$$typeof===C||F.$$typeof===w||F.$$typeof===m||F.$$typeof===v||F.$$typeof===h||F.$$typeof===N||F.$$typeof===D||F.$$typeof===B||F.$$typeof===j)},c.typeOf=M},62606:function(l,c,e){"use strict";l.exports=e(51281)},35884:function(l){l.exports=function(e,i,s,o){var r=s?s.call(o,e,i):void 0;if(r!==void 0)return!!r;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var d=Object.keys(e),m=Object.keys(i);if(d.length!==m.length)return!1;for(var v=Object.prototype.hasOwnProperty.bind(i),y=0;y<d.length;y++){var b=d[y];if(!v(b))return!1;var h=e[b],x=i[b];if(r=s?s.call(o,h,x,b):void 0,r===!1||r===void 0&&h!==x)return!1}return!0}},24328:function(l){l.exports=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var e=document.activeElement,i=[],s=0;s<c.rangeCount;s++)i.push(c.getRangeAt(s));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||i.forEach(function(o){c.addRange(o)}),e&&e.focus()}}},92015:function(l,c,e){"use strict";function i(H){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(K){return typeof K}:function(K){return K&&typeof Symbol=="function"&&K.constructor===Symbol&&K!==Symbol.prototype?"symbol":typeof K},i(H)}Object.defineProperty(c,"__esModule",{value:!0}),c.CopyToClipboard=void 0;var s=d(e(50959)),o=d(e(874)),r=["text","onCopy","options","children"];function d(H){return H&&H.__esModule?H:{default:H}}function m(H,K){var Y=Object.keys(H);if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(H);K&&(re=re.filter(function(ce){return Object.getOwnPropertyDescriptor(H,ce).enumerable})),Y.push.apply(Y,re)}return Y}function v(H){for(var K=1;K<arguments.length;K++){var Y=arguments[K]!=null?arguments[K]:{};K%2?m(Object(Y),!0).forEach(function(re){Q(H,re,Y[re])}):Object.getOwnPropertyDescriptors?Object.defineProperties(H,Object.getOwnPropertyDescriptors(Y)):m(Object(Y)).forEach(function(re){Object.defineProperty(H,re,Object.getOwnPropertyDescriptor(Y,re))})}return H}function y(H,K){if(H==null)return{};var Y=b(H,K),re,ce;if(Object.getOwnPropertySymbols){var Se=Object.getOwnPropertySymbols(H);for(ce=0;ce<Se.length;ce++)re=Se[ce],!(K.indexOf(re)>=0)&&Object.prototype.propertyIsEnumerable.call(H,re)&&(Y[re]=H[re])}return Y}function b(H,K){if(H==null)return{};var Y={},re=Object.keys(H),ce,Se;for(Se=0;Se<re.length;Se++)ce=re[Se],!(K.indexOf(ce)>=0)&&(Y[ce]=H[ce]);return Y}function h(H,K){if(!(H instanceof K))throw new TypeError("Cannot call a class as a function")}function x(H,K){for(var Y=0;Y<K.length;Y++){var re=K[Y];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(H,re.key,re)}}function E(H,K,Y){return K&&x(H.prototype,K),Y&&x(H,Y),Object.defineProperty(H,"prototype",{writable:!1}),H}function w(H,K){if(typeof K!="function"&&K!==null)throw new TypeError("Super expression must either be null or a function");H.prototype=Object.create(K&&K.prototype,{constructor:{value:H,writable:!0,configurable:!0}}),Object.defineProperty(H,"prototype",{writable:!1}),K&&C(H,K)}function C(H,K){return C=Object.setPrototypeOf||function(re,ce){return re.__proto__=ce,re},C(H,K)}function j(H){var K=B();return function(){var re=M(H),ce;if(K){var Se=M(this).constructor;ce=Reflect.construct(re,arguments,Se)}else ce=re.apply(this,arguments);return N(this,ce)}}function N(H,K){if(K&&(i(K)==="object"||typeof K=="function"))return K;if(K!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return D(H)}function D(H){if(H===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return H}function B(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(H){return!1}}function M(H){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(Y){return Y.__proto__||Object.getPrototypeOf(Y)},M(H)}function Q(H,K,Y){return K in H?Object.defineProperty(H,K,{value:Y,enumerable:!0,configurable:!0,writable:!0}):H[K]=Y,H}var F=function(H){w(Y,H);var K=j(Y);function Y(){var re;h(this,Y);for(var ce=arguments.length,Se=new Array(ce),se=0;se<ce;se++)Se[se]=arguments[se];return re=K.call.apply(K,[this].concat(Se)),Q(D(re),"onClick",function(Te){var le=re.props,ue=le.text,V=le.onCopy,L=le.children,z=le.options,X=s.default.Children.only(L),P=(0,o.default)(ue,z);V&&V(ue,P),X&&X.props&&typeof X.props.onClick=="function"&&X.props.onClick(Te)}),re}return E(Y,[{key:"render",value:function(){var ce=this.props,Se=ce.text,se=ce.onCopy,Te=ce.options,le=ce.children,ue=y(ce,r),V=s.default.Children.only(le);return s.default.cloneElement(V,v(v({},ue),{},{onClick:this.onClick}))}}]),Y}(s.default.PureComponent);c.CopyToClipboard=F,Q(F,"defaultProps",{onCopy:void 0,options:void 0})},90943:function(l,c,e){"use strict";var i=e(92015),s=i.CopyToClipboard;s.CopyToClipboard=s,l.exports=s},53746:function(l,c,e){"use strict";var i=e(50959),s=e(22962);function o(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,d={};function m(t,n){v(t,n),v(t+"Capture",n)}function v(t,n){for(d[t]=n,t=0;t<n.length;t++)r.add(n[t])}var y=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),b=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},E={};function w(t){return b.call(E,t)?!0:b.call(x,t)?!1:h.test(t)?E[t]=!0:(x[t]=!0,!1)}function C(t,n,a,f){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,n,a,f){if(n===null||typeof n=="undefined"||C(t,n,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(t,n,a,f,I,O,Z){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=f,this.attributeNamespace=I,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=O,this.removeEmptyString=Z}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){D[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];D[n]=new N(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){D[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){D[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){D[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){D[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){D[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){D[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){D[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(B,M);D[n]=new N(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(B,M);D[n]=new N(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(B,M);D[n]=new N(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){D[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),D.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){D[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function Q(t,n,a,f){var I=D.hasOwnProperty(n)?D[n]:null;(I!==null?I.type!==0:f||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,a,I,f)&&(a=null),f||I===null?w(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):I.mustUseProperty?t[I.propertyName]=a===null?I.type===3?!1:"":a:(n=I.attributeName,f=I.attributeNamespace,a===null?t.removeAttribute(n):(I=I.type,a=I===3||I===4&&a===!0?"":""+a,f?t.setAttributeNS(f,n,a):t.setAttribute(n,a))))}var F=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),K=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),L=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var X=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,ge;function We(t){if(ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ge=n&&n[1]||""}return`
`+ge+t}var we=!1;function he(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(et){var f=et}Reflect.construct(t,[],n)}else{try{n.call()}catch(et){f=et}t.call(n.prototype)}else{try{throw Error()}catch(et){f=et}t()}}catch(et){if(et&&f&&typeof et.stack=="string"){for(var I=et.stack.split(`
`),O=f.stack.split(`
`),Z=I.length-1,de=O.length-1;1<=Z&&0<=de&&I[Z]!==O[de];)de--;for(;1<=Z&&0<=de;Z--,de--)if(I[Z]!==O[de]){if(Z!==1||de!==1)do if(Z--,de--,0>de||I[Z]!==O[de]){var Ie=`
`+I[Z].replace(" at new "," at ");return t.displayName&&Ie.includes("<anonymous>")&&(Ie=Ie.replace("<anonymous>",t.displayName)),Ie}while(1<=Z&&0<=de);break}}}finally{we=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?We(t):""}function ze(t){switch(t.tag){case 5:return We(t.type);case 16:return We("Lazy");case 13:return We("Suspense");case 19:return We("SuspenseList");case 0:case 2:case 15:return t=he(t.type,!1),t;case 11:return t=he(t.type.render,!1),t;case 1:return t=he(t.type,!0),t;default:return""}}function Le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case K:return"Portal";case ce:return"Profiler";case re:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case Se:return(t._context.displayName||"Context")+".Provider";case Te:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:Le(t.type)||"Memo";case L:n=t._payload,t=t._init;try{return Le(t(n))}catch(a){}}return null}function Ne(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(n);case 8:return n===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function _(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function me(t){var n=pe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),f=""+t[n];if(!t.hasOwnProperty(n)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var I=a.get,O=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return I.call(this)},set:function(Z){f=""+Z,O.call(this,Z)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(Z){f=""+Z},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Re(t){t._valueTracker||(t._valueTracker=me(t))}function ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),f="";return t&&(f=pe(t)?t.checked?"true":"false":t.value),t=f,t!==a?(n.setValue(t),!0):!1}function at(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(n){return t.body}}function dt(t,n){var a=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a!=null?a:t._wrapperState.initialChecked})}function Me(t,n){var a=n.defaultValue==null?"":n.defaultValue,f=n.checked!=null?n.checked:n.defaultChecked;a=_(n.value!=null?n.value:a),t._wrapperState={initialChecked:f,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Oe(t,n){n=n.checked,n!=null&&Q(t,"checked",n,!1)}function Ee(t,n){Oe(t,n);var a=_(n.value),f=n.type;if(a!=null)f==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(f==="submit"||f==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?q(t,n.type,a):n.hasOwnProperty("defaultValue")&&q(t,n.type,_(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function xe(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var f=n.type;if(!(f!=="submit"&&f!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function q(t,n,a){(n!=="number"||at(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $=Array.isArray;function W(t,n,a,f){if(t=t.options,n){n={};for(var I=0;I<a.length;I++)n["$"+a[I]]=!0;for(a=0;a<t.length;a++)I=n.hasOwnProperty("$"+t[a].value),t[a].selected!==I&&(t[a].selected=I),I&&f&&(t[a].defaultSelected=!0)}else{for(a=""+_(a),n=null,I=0;I<t.length;I++){if(t[I].value===a){t[I].selected=!0,f&&(t[I].defaultSelected=!0);return}n!==null||t[I].disabled||(n=t[I])}n!==null&&(n.selected=!0)}}function te(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ae(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(o(92));if($(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:_(a)}}function ve(t,n){var a=_(n.value),f=_(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),f!=null&&(t.defaultValue=""+f)}function Be(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function Ae(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?Ae(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xt,Nt=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(n,a,f,I){MSApp.execUnsafeLocalFunction(function(){return t(n,a,f,I)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(xt=xt||document.createElement("div"),xt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Tt(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(t){S.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Dt[n]=Dt[t]})});function ie(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Dt.hasOwnProperty(t)&&Dt[t]?(""+n).trim():n+"px"}function Ce(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var f=a.indexOf("--")===0,I=ie(a,n[a],f);a==="float"&&(a="cssFloat"),f?t.setProperty(a,I):t[a]=I}}var _e=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(t,n){if(n){if(_e[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function rt(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function Ct(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wt=null,Bt=null,Mt=null;function hn(t){if(t=Ur(t)){if(typeof Wt!="function")throw Error(o(280));var n=t.stateNode;n&&(n=Ao(n),Wt(t.stateNode,t.type,n))}}function ln(t){Bt?Mt?Mt.push(t):Mt=[t]:Bt=t}function Mn(){if(Bt){var t=Bt,n=Mt;if(Mt=Bt=null,hn(t),n)for(t=0;t<n.length;t++)hn(n[t])}}function $n(t,n){return t(n)}function ut(){}var it=!1;function St(t,n,a){if(it)return t(n,a);it=!0;try{return $n(t,n,a)}finally{it=!1,(Bt!==null||Mt!==null)&&(ut(),Mn())}}function Ht(t,n){var a=t.stateNode;if(a===null)return null;var f=Ao(a);if(f===null)return null;a=f[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(t=t.type,f=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!f;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,n,typeof a));return a}var en=!1;if(y)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){en=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch(t){en=!1}function Ln(t,n,a,f,I,O,Z,de,Ie){var et=Array.prototype.slice.call(arguments,3);try{n.apply(a,et)}catch(wt){this.onError(wt)}}var Pn=!1,Dn=null,Pr=!1,jn=null,zr={onError:function(t){Pn=!0,Dn=t}};function Ps(t,n,a,f,I,O,Z,de,Ie){Pn=!1,Dn=null,Ln.apply(zr,arguments)}function mo(t,n,a,f,I,O,Z,de,Ie){if(Ps.apply(this,arguments),Pn){if(Pn){var et=Dn;Pn=!1,Dn=null}else throw Error(o(198));Pr||(Pr=!0,jn=et)}}function Na(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ho(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function ko(t){if(Na(t)!==t)throw Error(o(188))}function Rs(t){var n=t.alternate;if(!n){if(n=Na(t),n===null)throw Error(o(188));return n!==t?null:t}for(var a=t,f=n;;){var I=a.return;if(I===null)break;var O=I.alternate;if(O===null){if(f=I.return,f!==null){a=f;continue}break}if(I.child===O.child){for(O=I.child;O;){if(O===a)return ko(I),t;if(O===f)return ko(I),n;O=O.sibling}throw Error(o(188))}if(a.return!==f.return)a=I,f=O;else{for(var Z=!1,de=I.child;de;){if(de===a){Z=!0,a=I,f=O;break}if(de===f){Z=!0,f=I,a=O;break}de=de.sibling}if(!Z){for(de=O.child;de;){if(de===a){Z=!0,a=O,f=I;break}if(de===f){Z=!0,f=O,a=I;break}de=de.sibling}if(!Z)throw Error(o(189))}}if(a.alternate!==f)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:n}function wn(t){return t=Rs(t),t!==null?pi(t):null}function pi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=pi(t);if(n!==null)return n;t=t.sibling}return null}var oa=s.unstable_scheduleCallback,Ns=s.unstable_cancelCallback,hu=s.unstable_shouldYield,yu=s.unstable_requestPaint,lr=s.unstable_now,Ki=s.unstable_getCurrentPriorityLevel,yo=s.unstable_ImmediatePriority,vi=s.unstable_UserBlockingPriority,go=s.unstable_NormalPriority,Ls=s.unstable_LowPriority,Fo=s.unstable_IdlePriority,jo=null,ba=null;function Ds(t){if(ba&&typeof ba.onCommitFiberRoot=="function")try{ba.onCommitFiberRoot(jo,t,void 0,(t.current.flags&128)===128)}catch(n){}}var ia=Math.clz32?Math.clz32:Bo,gu=Math.log,ll=Math.LN2;function Bo(t){return t>>>=0,t===0?32:31-(gu(t)/ll|0)|0}var Ia=64,mi=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xo(t,n){var a=t.pendingLanes;if(a===0)return 0;var f=0,I=t.suspendedLanes,O=t.pingedLanes,Z=a&268435455;if(Z!==0){var de=Z&~I;de!==0?f=Ka(de):(O&=Z,O!==0&&(f=Ka(O)))}else Z=a&~I,Z!==0?f=Ka(Z):O!==0&&(f=Ka(O));if(f===0)return 0;if(n!==0&&n!==f&&!(n&I)&&(I=f&-f,O=n&-n,I>=O||I===16&&(O&4194240)!==0))return n;if(f&4&&(f|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=f;0<n;)a=31-ia(n),I=1<<a,f|=t[a],n&=~I;return f}function xu(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bu(t,n){for(var a=t.suspendedLanes,f=t.pingedLanes,I=t.expirationTimes,O=t.pendingLanes;0<O;){var Z=31-ia(O),de=1<<Z,Ie=I[Z];Ie===-1?(!(de&a)||de&f)&&(I[Z]=xu(de,n)):Ie<=n&&(t.expiredLanes|=de),O&=~de}}function Zi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yi(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function Gr(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function La(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-ia(n),t[n]=a}function ks(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var f=t.eventTimes;for(t=t.expirationTimes;0<a;){var I=31-ia(a),O=1<<I;n[I]=0,f[I]=-1,t[I]=-1,a&=~O}}function Xi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var f=31-ia(a),I=1<<f;I&n|t[f]&n&&(t[f]|=n),a&=~I}}var Vn=0;function Fs(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hi,yi,gi,xi,Qi,bo=!1,oo=[],Za=null,da=null,Ya=null,k=new Map,ee=new Map,G=[],ye="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function je(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":k.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ee.delete(n.pointerId)}}function tt(t,n,a,f,I,O){return t===null||t.nativeEvent!==O?(t={blockedOn:n,domEventName:a,eventSystemFlags:f,nativeEvent:O,targetContainers:[I]},n!==null&&(n=Ur(n),n!==null&&yi(n)),t):(t.eventSystemFlags|=f,n=t.targetContainers,I!==null&&n.indexOf(I)===-1&&n.push(I),t)}function pt(t,n,a,f,I){switch(n){case"focusin":return Za=tt(Za,t,n,a,f,I),!0;case"dragenter":return da=tt(da,t,n,a,f,I),!0;case"mouseover":return Ya=tt(Ya,t,n,a,f,I),!0;case"pointerover":var O=I.pointerId;return k.set(O,tt(k.get(O)||null,t,n,a,f,I)),!0;case"gotpointercapture":return O=I.pointerId,ee.set(O,tt(ee.get(O)||null,t,n,a,f,I)),!0}return!1}function gt(t){var n=Dr(t.target);if(n!==null){var a=Na(n);if(a!==null){if(n=a.tag,n===13){if(n=ho(a),n!==null){t.blockedOn=n,Qi(t.priority,function(){gi(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ut(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Yr(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var f=new a.constructor(a.type,a);lt=f,a.target.dispatchEvent(f),lt=null}else return n=Ur(a),n!==null&&yi(n),t.blockedOn=a,!1;n.shift()}return!0}function Kt(t,n,a){Ut(t)&&a.delete(n)}function sn(){bo=!1,Za!==null&&Ut(Za)&&(Za=null),da!==null&&Ut(da)&&(da=null),Ya!==null&&Ut(Ya)&&(Ya=null),k.forEach(Kt),ee.forEach(Kt)}function fn(t,n){t.blockedOn===n&&(t.blockedOn=null,bo||(bo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,sn)))}function an(t){function n(I){return fn(I,t)}if(0<oo.length){fn(oo[0],t);for(var a=1;a<oo.length;a++){var f=oo[a];f.blockedOn===t&&(f.blockedOn=null)}}for(Za!==null&&fn(Za,t),da!==null&&fn(da,t),Ya!==null&&fn(Ya,t),k.forEach(n),ee.forEach(n),a=0;a<G.length;a++)f=G[a],f.blockedOn===t&&(f.blockedOn=null);for(;0<G.length&&(a=G[0],a.blockedOn===null);)gt(a),a.blockedOn===null&&G.shift()}var pn=F.ReactCurrentBatchConfig,En=!0;function Fn(t,n,a,f){var I=Vn,O=pn.transition;pn.transition=null;try{Vn=1,br(t,n,a,f)}finally{Vn=I,pn.transition=O}}function ir(t,n,a,f){var I=Vn,O=pn.transition;pn.transition=null;try{Vn=4,br(t,n,a,f)}finally{Vn=I,pn.transition=O}}function br(t,n,a,f){if(En){var I=Yr(t,n,a,f);if(I===null)Mi(t,n,f,Ea,a),je(t,f);else if(pt(I,t,n,a,f))f.stopPropagation();else if(je(t,f),n&4&&-1<ye.indexOf(t)){for(;I!==null;){var O=Ur(I);if(O!==null&&hi(O),O=Yr(t,n,a,f),O===null&&Mi(t,n,f,Ea,a),O===I)break;I=O}I!==null&&f.stopPropagation()}else Mi(t,n,f,null,a)}}var Ea=null;function Yr(t,n,a,f){if(Ea=null,t=Ct(f),t=Dr(t),t!==null)if(n=Na(t),n===null)t=null;else if(a=n.tag,a===13){if(t=ho(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ea=t,null}function _o(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ki()){case yo:return 1;case vi:return 4;case go:case Ls:return 16;case Fo:return 536870912;default:return 16}default:return 16}}var Xr=null,Io=null,zo=null;function Sa(){if(zo)return zo;var t,n=Io,a=n.length,f,I="value"in Xr?Xr.value:Xr.textContent,O=I.length;for(t=0;t<a&&n[t]===I[t];t++);var Z=a-t;for(f=1;f<=Z&&n[a-f]===I[O-f];f++);return zo=I.slice(t,1<f?1-f:void 0)}function bi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function tc(){return!1}function wa(t){function n(a,f,I,O,Z){this._reactName=a,this._targetInst=I,this.type=f,this.nativeEvent=O,this.target=Z,this.currentTarget=null;for(var de in t)t.hasOwnProperty(de)&&(a=t[de],this[de]=a?a(O):O[de]);return this.isDefaultPrevented=(O.defaultPrevented!=null?O.defaultPrevented:O.returnValue===!1)?Uo:tc,this.isPropagationStopped=tc,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),n}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=wa(Ii),Ji=J({},Ii,{view:0,detail:0}),Eu=wa(Ji),Su,wu,qi,js=J({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(Su=t.screenX-qi.screenX,wu=t.screenY-qi.screenY):wu=Su=0,qi=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),cl=wa(js),nc=J({},js,{dataTransfer:0}),fl=wa(nc),Bs=J({},Ji,{relatedTarget:0}),_s=wa(Bs),rc=J({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),dl=wa(rc),ac=J({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pl=wa(ac),oc=J({},Ii,{data:0}),es=wa(oc),Ca={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tu(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vl[t])?!!n[t]:!1}function zs(){return Tu}var Ou=J({},Ji,{key:function(t){if(t.key){var n=Ca[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(t){return t.type==="keypress"?bi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Us=wa(Ou),qt=J({},js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=wa(qt),Ei=J({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Ta=wa(Ei),Eo=J({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),ml=wa(Eo),hl=J({},js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mu=wa(hl),yl=[9,13,27,32],ts=y&&"CompositionEvent"in window,Ho=null;y&&"documentMode"in document&&(Ho=document.documentMode);var gl=y&&"TextEvent"in window&&!Ho,Hs=y&&(!ts||Ho&&8<Ho&&11>=Ho),$s=String.fromCharCode(32),ns=!1;function rs(t,n){switch(t){case"keyup":return yl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Si(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $o=!1;function as(t,n){switch(t){case"compositionend":return Si(n);case"keypress":return n.which!==32?null:(ns=!0,$s);case"textInput":return t=n.data,t===$s&&ns?null:t;default:return null}}function Pu(t,n){if($o)return t==="compositionend"||!ts&&rs(t,n)?(t=Sa(),zo=Io=Xr=null,$o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hs&&n.locale!=="ko"?null:n.data;default:return null}}var os={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!os[t.type]:n==="textarea"}function is(t,n,a,f){ln(f),n=Oo(n,"onChange"),0<n.length&&(a=new Iu("onChange","change",null,a,f),t.push({event:a,listeners:n}))}var So=null,Da=null;function xl(t){Xs(t,0)}function ss(t){var n=Jr(t);if(ot(n))return t}function bl(t,n){if(t==="change")return n}var Ru=!1;if(y){var wo;if(y){var Vo="oninput"in document;if(!Vo){var Ir=document.createElement("div");Ir.setAttribute("oninput","return;"),Vo=typeof Ir.oninput=="function"}wo=Vo}else wo=!1;Ru=wo&&(!document.documentMode||9<document.documentMode)}function Gn(){So&&(So.detachEvent("onpropertychange",us),Da=So=null)}function us(t){if(t.propertyName==="value"&&ss(Da)){var n=[];is(n,Da,t,Ct(t)),St(xl,n)}}function Go(t,n,a){t==="focusin"?(Gn(),So=n,Da=a,So.attachEvent("onpropertychange",us)):t==="focusout"&&Gn()}function Nu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ss(Da)}function wi(t,n){if(t==="click")return ss(n)}function Wn(t,n){if(t==="input"||t==="change")return ss(n)}function Lu(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qr=typeof Object.is=="function"?Object.is:Lu;function Wo(t,n){if(Qr(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),f=Object.keys(n);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var I=a[f];if(!b.call(n,I)||!Qr(t[I],n[I]))return!1}return!0}function Gs(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ko(t,n){var a=Gs(t);t=0;for(var f;a;){if(a.nodeType===3){if(f=t+a.textContent.length,t<=n&&f>=n)return{node:a,offset:n-t};t=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gs(a)}}function ls(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ls(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xa(){for(var t=window,n=at();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch(f){a=!1}if(a)t=n.contentWindow;else break;n=at(t.document)}return n}function Ws(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Il(t){var n=Xa(),a=t.focusedElem,f=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&ls(a.ownerDocument.documentElement,a)){if(f!==null&&Ws(a)){if(n=f.start,t=f.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var I=a.textContent.length,O=Math.min(f.start,I);f=f.end===void 0?O:Math.min(f.end,I),!t.extend&&O>f&&(I=f,f=O,O=I),I=Ko(a,O);var Z=Ko(a,f);I&&Z&&(t.rangeCount!==1||t.anchorNode!==I.node||t.anchorOffset!==I.offset||t.focusNode!==Z.node||t.focusOffset!==Z.offset)&&(n=n.createRange(),n.setStart(I.node,I.offset),t.removeAllRanges(),O>f?(t.addRange(n),t.extend(Z.node,Z.offset)):(n.setEnd(Z.node,Z.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Oa=y&&"documentMode"in document&&11>=document.documentMode,Co=null,cs=null,Ci=null,fs=!1;function To(t,n,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fs||Co==null||Co!==at(f)||(f=Co,"selectionStart"in f&&Ws(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ci&&Wo(Ci,f)||(Ci=f,f=Oo(cs,"onSelect"),0<f.length&&(n=new Iu("onSelect","select",null,n,a),t.push({event:n,listeners:f}),n.target=Co)))}function Ti(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zo={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},Oi={},Du={};y&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Zo.animationend.animation,delete Zo.animationiteration.animation,delete Zo.animationstart.animation),"TransitionEvent"in window||delete Zo.transitionend.transition);function Yo(t){if(Oi[t])return Oi[t];if(!Zo[t])return t;var n=Zo[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Du)return Oi[t]=n[a];return t}var ku=Yo("animationend"),Fu=Yo("animationiteration"),Xo=Yo("animationstart"),pa=Yo("transitionend"),Ks=new Map,ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ka(t,n){Ks.set(t,n),m(n,[t])}for(var ds=0;ds<ju.length;ds++){var yn=ju[ds],Zs=yn.toLowerCase(),Ys=yn[0].toUpperCase()+yn.slice(1);ka(Zs,"on"+Ys)}ka(ku,"onAnimationEnd"),ka(Fu,"onAnimationIteration"),ka(Xo,"onAnimationStart"),ka("dblclick","onDoubleClick"),ka("focusin","onFocus"),ka("focusout","onBlur"),ka(pa,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),El=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Jo(t,n,a){var f=t.type||"unknown-event";t.currentTarget=a,mo(f,n,void 0,t),t.currentTarget=null}function Xs(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var f=t[a],I=f.event;f=f.listeners;e:{var O=void 0;if(n)for(var Z=f.length-1;0<=Z;Z--){var de=f[Z],Ie=de.instance,et=de.currentTarget;if(de=de.listener,Ie!==O&&I.isPropagationStopped())break e;Jo(I,de,et),O=Ie}else for(Z=0;Z<f.length;Z++){if(de=f[Z],Ie=de.instance,et=de.currentTarget,de=de.listener,Ie!==O&&I.isPropagationStopped())break e;Jo(I,de,et),O=Ie}}}if(Pr)throw t=jn,Pr=!1,jn=null,t}function Xn(t,n){var a=n[gn];a===void 0&&(a=n[gn]=new Set);var f=t+"__bubble";a.has(f)||(Qs(n,t,2,!1),a.add(f))}function qo(t,n,a){var f=0;n&&(f|=4),Qs(a,t,f,n)}var ei="_reactListening"+Math.random().toString(36).slice(2);function Ai(t){if(!t[ei]){t[ei]=!0,r.forEach(function(a){a!=="selectionchange"&&(El.has(a)||qo(a,!1,t),qo(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ei]||(n[ei]=!0,qo("selectionchange",!1,n))}}function Qs(t,n,a,f){switch(_o(n)){case 1:var I=Fn;break;case 4:I=ir;break;default:I=br}a=I.bind(null,n,a,t),I=void 0,!en||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(I=!0),f?I!==void 0?t.addEventListener(n,a,{capture:!0,passive:I}):t.addEventListener(n,a,!0):I!==void 0?t.addEventListener(n,a,{passive:I}):t.addEventListener(n,a,!1)}function Mi(t,n,a,f,I){var O=f;if(!(n&1)&&!(n&2)&&f!==null)e:for(;;){if(f===null)return;var Z=f.tag;if(Z===3||Z===4){var de=f.stateNode.containerInfo;if(de===I||de.nodeType===8&&de.parentNode===I)break;if(Z===4)for(Z=f.return;Z!==null;){var Ie=Z.tag;if((Ie===3||Ie===4)&&(Ie=Z.stateNode.containerInfo,Ie===I||Ie.nodeType===8&&Ie.parentNode===I))return;Z=Z.return}for(;de!==null;){if(Z=Dr(de),Z===null)return;if(Ie=Z.tag,Ie===5||Ie===6){f=O=Z;continue e}de=de.parentNode}}f=f.return}St(function(){var et=O,wt=Ct(a),Rt=[];e:{var Et=Ks.get(t);if(Et!==void 0){var Qt=Iu,tn=t;switch(t){case"keypress":if(bi(a)===0)break e;case"keydown":case"keyup":Qt=Us;break;case"focusin":tn="focus",Qt=_s;break;case"focusout":tn="blur",Qt=_s;break;case"beforeblur":case"afterblur":Qt=_s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qt=cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qt=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qt=Ta;break;case ku:case Fu:case Xo:Qt=dl;break;case pa:Qt=ml;break;case"scroll":Qt=Eu;break;case"wheel":Qt=Mu;break;case"copy":case"cut":case"paste":Qt=pl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qt=Au}var nn=(n&4)!==0,_r=!nn&&t==="scroll",Ge=nn?Et!==null?Et+"Capture":null:Et;nn=[];for(var Pe=et,Ke;Pe!==null;){Ke=Pe;var Ft=Ke.stateNode;if(Ke.tag===5&&Ft!==null&&(Ke=Ft,Ge!==null&&(Ft=Ht(Pe,Ge),Ft!=null&&nn.push(Pi(Pe,Ft,Ke)))),_r)break;Pe=Pe.return}0<nn.length&&(Et=new Qt(Et,tn,null,a,wt),Rt.push({event:Et,listeners:nn}))}}if(!(n&7)){e:{if(Et=t==="mouseover"||t==="pointerover",Qt=t==="mouseout"||t==="pointerout",Et&&a!==lt&&(tn=a.relatedTarget||a.fromElement)&&(Dr(tn)||tn[Gt]))break e;if((Qt||Et)&&(Et=wt.window===wt?wt:(Et=wt.ownerDocument)?Et.defaultView||Et.parentWindow:window,Qt?(tn=a.relatedTarget||a.toElement,Qt=et,tn=tn?Dr(tn):null,tn!==null&&(_r=Na(tn),tn!==_r||tn.tag!==5&&tn.tag!==6)&&(tn=null)):(Qt=null,tn=et),Qt!==tn)){if(nn=cl,Ft="onMouseLeave",Ge="onMouseEnter",Pe="mouse",(t==="pointerout"||t==="pointerover")&&(nn=Au,Ft="onPointerLeave",Ge="onPointerEnter",Pe="pointer"),_r=Qt==null?Et:Jr(Qt),Ke=tn==null?Et:Jr(tn),Et=new nn(Ft,Pe+"leave",Qt,a,wt),Et.target=_r,Et.relatedTarget=Ke,Ft=null,Dr(wt)===et&&(nn=new nn(Ge,Pe+"enter",tn,a,wt),nn.target=Ke,nn.relatedTarget=_r,Ft=nn),_r=Ft,Qt&&tn)t:{for(nn=Qt,Ge=tn,Pe=0,Ke=nn;Ke;Ke=Qa(Ke))Pe++;for(Ke=0,Ft=Ge;Ft;Ft=Qa(Ft))Ke++;for(;0<Pe-Ke;)nn=Qa(nn),Pe--;for(;0<Ke-Pe;)Ge=Qa(Ge),Ke--;for(;Pe--;){if(nn===Ge||Ge!==null&&nn===Ge.alternate)break t;nn=Qa(nn),Ge=Qa(Ge)}nn=null}else nn=null;Qt!==null&&Js(Rt,Et,Qt,nn,!1),tn!==null&&_r!==null&&Js(Rt,_r,tn,nn,!0)}}e:{if(Et=et?Jr(et):window,Qt=Et.nodeName&&Et.nodeName.toLowerCase(),Qt==="select"||Qt==="input"&&Et.type==="file")var rn=bl;else if(Vs(Et))if(Ru)rn=Wn;else{rn=Nu;var vn=Go}else(Qt=Et.nodeName)&&Qt.toLowerCase()==="input"&&(Et.type==="checkbox"||Et.type==="radio")&&(rn=wi);if(rn&&(rn=rn(t,et))){is(Rt,rn,a,wt);break e}vn&&vn(t,Et,et),t==="focusout"&&(vn=Et._wrapperState)&&vn.controlled&&Et.type==="number"&&q(Et,"number",Et.value)}switch(vn=et?Jr(et):window,t){case"focusin":(Vs(vn)||vn.contentEditable==="true")&&(Co=vn,cs=et,Ci=null);break;case"focusout":Ci=cs=Co=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,To(Rt,a,wt);break;case"selectionchange":if(Oa)break;case"keydown":case"keyup":To(Rt,a,wt)}var mn;if(ts)e:{switch(t){case"compositionstart":var Sn="onCompositionStart";break e;case"compositionend":Sn="onCompositionEnd";break e;case"compositionupdate":Sn="onCompositionUpdate";break e}Sn=void 0}else $o?rs(t,a)&&(Sn="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Sn="onCompositionStart");Sn&&(Hs&&a.locale!=="ko"&&($o||Sn!=="onCompositionStart"?Sn==="onCompositionEnd"&&$o&&(mn=Sa()):(Xr=wt,Io="value"in Xr?Xr.value:Xr.textContent,$o=!0)),vn=Oo(et,Sn),0<vn.length&&(Sn=new es(Sn,t,null,a,wt),Rt.push({event:Sn,listeners:vn}),mn?Sn.data=mn:(mn=Si(a),mn!==null&&(Sn.data=mn)))),(mn=gl?as(t,a):Pu(t,a))&&(et=Oo(et,"onBeforeInput"),0<et.length&&(wt=new es("onBeforeInput","beforeinput",null,a,wt),Rt.push({event:wt,listeners:et}),wt.data=mn))}Xs(Rt,n)})}function Pi(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Oo(t,n){for(var a=n+"Capture",f=[];t!==null;){var I=t,O=I.stateNode;I.tag===5&&O!==null&&(I=O,O=Ht(t,a),O!=null&&f.unshift(Pi(t,O,I)),O=Ht(t,n),O!=null&&f.push(Pi(t,O,I))),t=t.return}return f}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Js(t,n,a,f,I){for(var O=n._reactName,Z=[];a!==null&&a!==f;){var de=a,Ie=de.alternate,et=de.stateNode;if(Ie!==null&&Ie===f)break;de.tag===5&&et!==null&&(de=et,I?(Ie=Ht(a,O),Ie!=null&&Z.unshift(Pi(a,Ie,de))):I||(Ie=Ht(a,O),Ie!=null&&Z.push(Pi(a,Ie,de)))),a=a.return}Z.length!==0&&t.push({event:n,listeners:Z})}var ti=/\r\n?/g,Sl=/\u0000|\uFFFD/g;function Bu(t){return(typeof t=="string"?t:""+t).replace(ti,`
`).replace(Sl,"")}function ni(t,n,a){if(n=Bu(n),Bu(t)!==n&&a)throw Error(o(425))}function ri(){}var _u=null,zu=null;function Ri(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ps=typeof setTimeout=="function"?setTimeout:void 0,wl=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,qs=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu!="undefined"?function(t){return Uu.resolve(null).then(t).catch(Fe)}:ps;function Fe(t){setTimeout(function(){throw t})}function Je(t,n){var a=n,f=0;do{var I=a.nextSibling;if(t.removeChild(a),I&&I.nodeType===8)if(a=I.data,a==="/$"){if(f===0){t.removeChild(I),an(n);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=I}while(a);an(n)}function Ye(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Qe(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var ht=Math.random().toString(36).slice(2),vt="__reactFiber$"+ht,_t="__reactProps$"+ht,Gt="__reactContainer$"+ht,gn="__reactEvents$"+ht,Er="__reactListeners$"+ht,On="__reactHandles$"+ht;function Dr(t){var n=t[vt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gt]||a[vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qe(t);t!==null;){if(a=t[vt])return a;t=Qe(t)}return n}t=a,a=t.parentNode}return null}function Ur(t){return t=t[vt]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Ao(t){return t[_t]||null}var Wr=[],Hr=-1;function pr(t){return{current:t}}function Bn(t){0>Hr||(t.current=Wr[Hr],Wr[Hr]=null,Hr--)}function kn(t,n){Hr++,Wr[Hr]=t.current,t.current=n}var Fa={},kr=pr(Fa),Rr=pr(!1),Mo=Fa;function qr(t,n){var a=t.type.contextTypes;if(!a)return Fa;var f=t.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===n)return f.__reactInternalMemoizedMaskedChildContext;var I={},O;for(O in a)I[O]=n[O];return f&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=I),I}function $r(t){return t=t.childContextTypes,t!=null}function ai(){Bn(Rr),Bn(kr)}function Ni(t,n,a){if(kr.current!==Fa)throw Error(o(168));kn(kr,n),kn(Rr,a)}function io(t,n,a){var f=t.stateNode;if(n=n.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var I in f)if(!(I in n))throw Error(o(108,Ne(t)||"Unknown",I));return J({},a,f)}function ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fa,Mo=kr.current,kn(kr,t),kn(Rr,Rr.current),!0}function Hu(t,n,a){var f=t.stateNode;if(!f)throw Error(o(169));a?(t=io(t,n,Mo),f.__reactInternalMemoizedMergedChildContext=t,Bn(Rr),Bn(kr),kn(kr,t)):Bn(Rr),kn(Rr,a)}var Ba=null,Jt=!1,Kn=!1;function so(t){Ba===null?Ba=[t]:Ba.push(t)}function Cl(t){Jt=!0,so(t)}function Ja(){if(!Kn&&Ba!==null){Kn=!0;var t=0,n=Vn;try{var a=Ba;for(Vn=1;t<a.length;t++){var f=a[t];do f=f(!0);while(f!==null)}Ba=null,Jt=!1}catch(I){throw Ba!==null&&(Ba=Ba.slice(t+1)),oa(yo,Ja),I}finally{Vn=n,Kn=!1}}return null}var eu=[],tu=0,Tl=null,Ol=0,_a=[],za=0,Li=null,Po=1,Ro="";function Di(t,n){eu[tu++]=Ol,eu[tu++]=Tl,Tl=t,Ol=n}function ic(t,n,a){_a[za++]=Po,_a[za++]=Ro,_a[za++]=Li,Li=t;var f=Po;t=Ro;var I=32-ia(f)-1;f&=~(1<<I),a+=1;var O=32-ia(n)+I;if(30<O){var Z=I-I%5;O=(f&(1<<Z)-1).toString(32),f>>=Z,I-=Z,Po=1<<32-ia(n)+I|a<<I|f,Ro=O+t}else Po=1<<O|a<<I|f,Ro=t}function Al(t){t.return!==null&&(Di(t,1),ic(t,1,0))}function oi(t){for(;t===Tl;)Tl=eu[--tu],eu[tu]=null,Ol=eu[--tu],eu[tu]=null;for(;t===Li;)Li=_a[--za],_a[za]=null,Ro=_a[--za],_a[za]=null,Po=_a[--za],_a[za]=null}var Aa=null,va=null,or=!1,qa=null;function sc(t,n){var a=Wa(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function uc(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Aa=t,va=Ye(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Aa=t,va=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Li!==null?{id:Po,overflow:Ro}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Wa(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,Aa=t,va=null,!0):!1;default:return!1}}function Ml(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pl(t){if(or){var n=va;if(n){var a=n;if(!uc(t,n)){if(Ml(t))throw Error(o(418));n=Ye(a.nextSibling);var f=Aa;n&&uc(t,n)?sc(f,a):(t.flags=t.flags&-4097|2,or=!1,Aa=t)}}else{if(Ml(t))throw Error(o(418));t.flags=t.flags&-4097|2,or=!1,Aa=t}}}function Rl(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Aa=t}function $u(t){if(t!==Aa)return!1;if(!or)return Rl(t),or=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Ri(t.type,t.memoizedProps)),n&&(n=va)){if(Ml(t))throw lc(),Error(o(418));for(;n;)sc(t,n),n=Ye(n.nextSibling)}if(Rl(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){va=Ye(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}va=null}}else va=Aa?Ye(t.stateNode.nextSibling):null;return!0}function lc(){for(var t=va;t;)t=Ye(t.nextSibling)}function No(){va=Aa=null,or=!1}function Vu(t){qa===null?qa=[t]:qa.push(t)}var cc=F.ReactCurrentBatchConfig;function eo(t,n){if(t&&t.defaultProps){n=J({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}var Gu=pr(null),ii=null,vs=null,ki=null;function Wu(){ki=vs=ii=null}function nu(t){var n=Gu.current;Bn(Gu),t._currentValue=n}function Ku(t,n,a){for(;t!==null;){var f=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,f!==null&&(f.childLanes|=n)):f!==null&&(f.childLanes&n)!==n&&(f.childLanes|=n),t===a)break;t=t.return}}function ms(t,n){ii=t,ki=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(ha=!0),t.firstContext=null)}function Sr(t){var n=t._currentValue;if(ki!==t)if(t={context:t,memoizedValue:n,next:null},vs===null){if(ii===null)throw Error(o(308));vs=t,ii.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return n}var Fi=null;function ji(t){Fi===null?Fi=[t]:Fi.push(t)}function fc(t,n,a,f){var I=n.interleaved;return I===null?(a.next=a,ji(n)):(a.next=I.next,I.next=a),n.interleaved=a,uo(t,f)}function uo(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var to=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hs(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lo(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function si(t,n,a){var f=t.updateQueue;if(f===null)return null;if(f=f.shared,on&2){var I=f.pending;return I===null?n.next=n:(n.next=I.next,I.next=n),f.pending=n,uo(t,a)}return I=f.interleaved,I===null?(n.next=n,ji(f)):(n.next=I.next,I.next=n),f.interleaved=n,uo(t,a)}function ys(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var f=n.lanes;f&=t.pendingLanes,a|=f,n.lanes=a,Xi(t,a)}}function Yu(t,n){var a=t.updateQueue,f=t.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var I=null,O=null;if(a=a.firstBaseUpdate,a!==null){do{var Z={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};O===null?I=O=Z:O=O.next=Z,a=a.next}while(a!==null);O===null?I=O=n:O=O.next=n}else I=O=n;a={baseState:f.baseState,firstBaseUpdate:I,lastBaseUpdate:O,shared:f.shared,effects:f.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function gs(t,n,a,f){var I=t.updateQueue;to=!1;var O=I.firstBaseUpdate,Z=I.lastBaseUpdate,de=I.shared.pending;if(de!==null){I.shared.pending=null;var Ie=de,et=Ie.next;Ie.next=null,Z===null?O=et:Z.next=et,Z=Ie;var wt=t.alternate;wt!==null&&(wt=wt.updateQueue,de=wt.lastBaseUpdate,de!==Z&&(de===null?wt.firstBaseUpdate=et:de.next=et,wt.lastBaseUpdate=Ie))}if(O!==null){var Rt=I.baseState;Z=0,wt=et=Ie=null,de=O;do{var Et=de.lane,Qt=de.eventTime;if((f&Et)===Et){wt!==null&&(wt=wt.next={eventTime:Qt,lane:0,tag:de.tag,payload:de.payload,callback:de.callback,next:null});e:{var tn=t,nn=de;switch(Et=n,Qt=a,nn.tag){case 1:if(tn=nn.payload,typeof tn=="function"){Rt=tn.call(Qt,Rt,Et);break e}Rt=tn;break e;case 3:tn.flags=tn.flags&-65537|128;case 0:if(tn=nn.payload,Et=typeof tn=="function"?tn.call(Qt,Rt,Et):tn,Et==null)break e;Rt=J({},Rt,Et);break e;case 2:to=!0}}de.callback!==null&&de.lane!==0&&(t.flags|=64,Et=I.effects,Et===null?I.effects=[de]:Et.push(de))}else Qt={eventTime:Qt,lane:Et,tag:de.tag,payload:de.payload,callback:de.callback,next:null},wt===null?(et=wt=Qt,Ie=Rt):wt=wt.next=Qt,Z|=Et;if(de=de.next,de===null){if(de=I.shared.pending,de===null)break;Et=de,de=Et.next,Et.next=null,I.lastBaseUpdate=Et,I.shared.pending=null}}while(1);if(wt===null&&(Ie=Rt),I.baseState=Ie,I.firstBaseUpdate=et,I.lastBaseUpdate=wt,n=I.shared.interleaved,n!==null){I=n;do Z|=I.lane,I=I.next;while(I!==n)}else O===null&&(I.shared.lanes=0);ya|=Z,t.lanes=Z,t.memoizedState=Rt}}function Xu(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var f=t[n],I=f.callback;if(I!==null){if(f.callback=null,f=a,typeof I!="function")throw Error(o(191,I));I.call(f)}}}var ru=new i.Component().refs;function xs(t,n,a,f){n=t.memoizedState,a=a(f,n),a=a==null?n:J({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var au={isMounted:function(t){return(t=t._reactInternals)?Na(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var f=xr(),I=na(t),O=lo(f,I);O.payload=n,a!=null&&(O.callback=a),n=si(t,O,I),n!==null&&(un(n,t,I,f),ys(n,t,I))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var f=xr(),I=na(t),O=lo(f,I);O.tag=1,O.payload=n,a!=null&&(O.callback=a),n=si(t,O,I),n!==null&&(un(n,t,I,f),ys(n,t,I))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=xr(),f=na(t),I=lo(a,f);I.tag=2,n!=null&&(I.callback=n),n=si(t,I,f),n!==null&&(un(n,t,f,a),ys(n,t,f))}};function bs(t,n,a,f,I,O,Z){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(f,O,Z):n.prototype&&n.prototype.isPureReactComponent?!Wo(a,f)||!Wo(I,O):!0}function Is(t,n,a){var f=!1,I=Fa,O=n.contextType;return typeof O=="object"&&O!==null?O=Sr(O):(I=$r(n)?Mo:kr.current,f=n.contextTypes,O=(f=f!=null)?qr(t,I):Fa),n=new n(a,O),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=au,t.stateNode=n,n._reactInternals=t,f&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=I,t.__reactInternalMemoizedMaskedChildContext=O),n}function Nl(t,n,a,f){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,f),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,f),n.state!==t&&au.enqueueReplaceState(n,n.state,null)}function Ll(t,n,a,f){var I=t.stateNode;I.props=a,I.state=t.memoizedState,I.refs=ru,Zu(t);var O=n.contextType;typeof O=="object"&&O!==null?I.context=Sr(O):(O=$r(n)?Mo:kr.current,I.context=qr(t,O)),I.state=t.memoizedState,O=n.getDerivedStateFromProps,typeof O=="function"&&(xs(t,n,O,a),I.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof I.getSnapshotBeforeUpdate=="function"||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(n=I.state,typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount(),n!==I.state&&au.enqueueReplaceState(I,I.state,null),gs(t,a,I,f),I.state=t.memoizedState),typeof I.componentDidMount=="function"&&(t.flags|=4194308)}function ou(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var f=a.stateNode}if(!f)throw Error(o(147,t));var I=f,O=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===O?n.ref:(n=function(Z){var de=I.refs;de===ru&&(de=I.refs={}),Z===null?delete de[O]:de[O]=Z},n._stringRef=O,n)}if(typeof t!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,t))}return t}function Qu(t,n){throw t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Dl(t){var n=t._init;return n(t._payload)}function kl(t){function n(Ge,Pe){if(t){var Ke=Ge.deletions;Ke===null?(Ge.deletions=[Pe],Ge.flags|=16):Ke.push(Pe)}}function a(Ge,Pe){if(!t)return null;for(;Pe!==null;)n(Ge,Pe),Pe=Pe.sibling;return null}function f(Ge,Pe){for(Ge=new Map;Pe!==null;)Pe.key!==null?Ge.set(Pe.key,Pe):Ge.set(Pe.index,Pe),Pe=Pe.sibling;return Ge}function I(Ge,Pe){return Ge=fi(Ge,Pe),Ge.index=0,Ge.sibling=null,Ge}function O(Ge,Pe,Ke){return Ge.index=Ke,t?(Ke=Ge.alternate,Ke!==null?(Ke=Ke.index,Ke<Pe?(Ge.flags|=2,Pe):Ke):(Ge.flags|=2,Pe)):(Ge.flags|=1048576,Pe)}function Z(Ge){return t&&Ge.alternate===null&&(Ge.flags|=2),Ge}function de(Ge,Pe,Ke,Ft){return Pe===null||Pe.tag!==6?(Pe=Jl(Ke,Ge.mode,Ft),Pe.return=Ge,Pe):(Pe=I(Pe,Ke),Pe.return=Ge,Pe)}function Ie(Ge,Pe,Ke,Ft){var rn=Ke.type;return rn===Y?wt(Ge,Pe,Ke.props.children,Ft,Ke.key):Pe!==null&&(Pe.elementType===rn||typeof rn=="object"&&rn!==null&&rn.$$typeof===L&&Dl(rn)===Pe.type)?(Ft=I(Pe,Ke.props),Ft.ref=ou(Ge,Pe,Ke),Ft.return=Ge,Ft):(Ft=sl(Ke.type,Ke.key,Ke.props,null,Ge.mode,Ft),Ft.ref=ou(Ge,Pe,Ke),Ft.return=Ge,Ft)}function et(Ge,Pe,Ke,Ft){return Pe===null||Pe.tag!==4||Pe.stateNode.containerInfo!==Ke.containerInfo||Pe.stateNode.implementation!==Ke.implementation?(Pe=ql(Ke,Ge.mode,Ft),Pe.return=Ge,Pe):(Pe=I(Pe,Ke.children||[]),Pe.return=Ge,Pe)}function wt(Ge,Pe,Ke,Ft,rn){return Pe===null||Pe.tag!==7?(Pe=Wi(Ke,Ge.mode,Ft,rn),Pe.return=Ge,Pe):(Pe=I(Pe,Ke),Pe.return=Ge,Pe)}function Rt(Ge,Pe,Ke){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return Pe=Jl(""+Pe,Ge.mode,Ke),Pe.return=Ge,Pe;if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case H:return Ke=sl(Pe.type,Pe.key,Pe.props,null,Ge.mode,Ke),Ke.ref=ou(Ge,null,Pe),Ke.return=Ge,Ke;case K:return Pe=ql(Pe,Ge.mode,Ke),Pe.return=Ge,Pe;case L:var Ft=Pe._init;return Rt(Ge,Ft(Pe._payload),Ke)}if($(Pe)||P(Pe))return Pe=Wi(Pe,Ge.mode,Ke,null),Pe.return=Ge,Pe;Qu(Ge,Pe)}return null}function Et(Ge,Pe,Ke,Ft){var rn=Pe!==null?Pe.key:null;if(typeof Ke=="string"&&Ke!==""||typeof Ke=="number")return rn!==null?null:de(Ge,Pe,""+Ke,Ft);if(typeof Ke=="object"&&Ke!==null){switch(Ke.$$typeof){case H:return Ke.key===rn?Ie(Ge,Pe,Ke,Ft):null;case K:return Ke.key===rn?et(Ge,Pe,Ke,Ft):null;case L:return rn=Ke._init,Et(Ge,Pe,rn(Ke._payload),Ft)}if($(Ke)||P(Ke))return rn!==null?null:wt(Ge,Pe,Ke,Ft,null);Qu(Ge,Ke)}return null}function Qt(Ge,Pe,Ke,Ft,rn){if(typeof Ft=="string"&&Ft!==""||typeof Ft=="number")return Ge=Ge.get(Ke)||null,de(Pe,Ge,""+Ft,rn);if(typeof Ft=="object"&&Ft!==null){switch(Ft.$$typeof){case H:return Ge=Ge.get(Ft.key===null?Ke:Ft.key)||null,Ie(Pe,Ge,Ft,rn);case K:return Ge=Ge.get(Ft.key===null?Ke:Ft.key)||null,et(Pe,Ge,Ft,rn);case L:var vn=Ft._init;return Qt(Ge,Pe,Ke,vn(Ft._payload),rn)}if($(Ft)||P(Ft))return Ge=Ge.get(Ke)||null,wt(Pe,Ge,Ft,rn,null);Qu(Pe,Ft)}return null}function tn(Ge,Pe,Ke,Ft){for(var rn=null,vn=null,mn=Pe,Sn=Pe=0,aa=null;mn!==null&&Sn<Ke.length;Sn++){mn.index>Sn?(aa=mn,mn=null):aa=mn.sibling;var tr=Et(Ge,mn,Ke[Sn],Ft);if(tr===null){mn===null&&(mn=aa);break}t&&mn&&tr.alternate===null&&n(Ge,mn),Pe=O(tr,Pe,Sn),vn===null?rn=tr:vn.sibling=tr,vn=tr,mn=aa}if(Sn===Ke.length)return a(Ge,mn),or&&Di(Ge,Sn),rn;if(mn===null){for(;Sn<Ke.length;Sn++)mn=Rt(Ge,Ke[Sn],Ft),mn!==null&&(Pe=O(mn,Pe,Sn),vn===null?rn=mn:vn.sibling=mn,vn=mn);return or&&Di(Ge,Sn),rn}for(mn=f(Ge,mn);Sn<Ke.length;Sn++)aa=Qt(mn,Ge,Sn,Ke[Sn],Ft),aa!==null&&(t&&aa.alternate!==null&&mn.delete(aa.key===null?Sn:aa.key),Pe=O(aa,Pe,Sn),vn===null?rn=aa:vn.sibling=aa,vn=aa);return t&&mn.forEach(function(Ms){return n(Ge,Ms)}),or&&Di(Ge,Sn),rn}function nn(Ge,Pe,Ke,Ft){var rn=P(Ke);if(typeof rn!="function")throw Error(o(150));if(Ke=rn.call(Ke),Ke==null)throw Error(o(151));for(var vn=rn=null,mn=Pe,Sn=Pe=0,aa=null,tr=Ke.next();mn!==null&&!tr.done;Sn++,tr=Ke.next()){mn.index>Sn?(aa=mn,mn=null):aa=mn.sibling;var Ms=Et(Ge,mn,tr.value,Ft);if(Ms===null){mn===null&&(mn=aa);break}t&&mn&&Ms.alternate===null&&n(Ge,mn),Pe=O(Ms,Pe,Sn),vn===null?rn=Ms:vn.sibling=Ms,vn=Ms,mn=aa}if(tr.done)return a(Ge,mn),or&&Di(Ge,Sn),rn;if(mn===null){for(;!tr.done;Sn++,tr=Ke.next())tr=Rt(Ge,tr.value,Ft),tr!==null&&(Pe=O(tr,Pe,Sn),vn===null?rn=tr:vn.sibling=tr,vn=tr);return or&&Di(Ge,Sn),rn}for(mn=f(Ge,mn);!tr.done;Sn++,tr=Ke.next())tr=Qt(mn,Ge,Sn,tr.value,Ft),tr!==null&&(t&&tr.alternate!==null&&mn.delete(tr.key===null?Sn:tr.key),Pe=O(tr,Pe,Sn),vn===null?rn=tr:vn.sibling=tr,vn=tr);return t&&mn.forEach(function(df){return n(Ge,df)}),or&&Di(Ge,Sn),rn}function _r(Ge,Pe,Ke,Ft){if(typeof Ke=="object"&&Ke!==null&&Ke.type===Y&&Ke.key===null&&(Ke=Ke.props.children),typeof Ke=="object"&&Ke!==null){switch(Ke.$$typeof){case H:e:{for(var rn=Ke.key,vn=Pe;vn!==null;){if(vn.key===rn){if(rn=Ke.type,rn===Y){if(vn.tag===7){a(Ge,vn.sibling),Pe=I(vn,Ke.props.children),Pe.return=Ge,Ge=Pe;break e}}else if(vn.elementType===rn||typeof rn=="object"&&rn!==null&&rn.$$typeof===L&&Dl(rn)===vn.type){a(Ge,vn.sibling),Pe=I(vn,Ke.props),Pe.ref=ou(Ge,vn,Ke),Pe.return=Ge,Ge=Pe;break e}a(Ge,vn);break}else n(Ge,vn);vn=vn.sibling}Ke.type===Y?(Pe=Wi(Ke.props.children,Ge.mode,Ft,Ke.key),Pe.return=Ge,Ge=Pe):(Ft=sl(Ke.type,Ke.key,Ke.props,null,Ge.mode,Ft),Ft.ref=ou(Ge,Pe,Ke),Ft.return=Ge,Ge=Ft)}return Z(Ge);case K:e:{for(vn=Ke.key;Pe!==null;){if(Pe.key===vn)if(Pe.tag===4&&Pe.stateNode.containerInfo===Ke.containerInfo&&Pe.stateNode.implementation===Ke.implementation){a(Ge,Pe.sibling),Pe=I(Pe,Ke.children||[]),Pe.return=Ge,Ge=Pe;break e}else{a(Ge,Pe);break}else n(Ge,Pe);Pe=Pe.sibling}Pe=ql(Ke,Ge.mode,Ft),Pe.return=Ge,Ge=Pe}return Z(Ge);case L:return vn=Ke._init,_r(Ge,Pe,vn(Ke._payload),Ft)}if($(Ke))return tn(Ge,Pe,Ke,Ft);if(P(Ke))return nn(Ge,Pe,Ke,Ft);Qu(Ge,Ke)}return typeof Ke=="string"&&Ke!==""||typeof Ke=="number"?(Ke=""+Ke,Pe!==null&&Pe.tag===6?(a(Ge,Pe.sibling),Pe=I(Pe,Ke),Pe.return=Ge,Ge=Pe):(a(Ge,Pe),Pe=Jl(Ke,Ge.mode,Ft),Pe.return=Ge,Ge=Pe),Z(Ge)):a(Ge,Pe)}return _r}var Es=kl(!0),dc=kl(!1),Bi={},no=pr(Bi),iu=pr(Bi),_i=pr(Bi);function zi(t){if(t===Bi)throw Error(o(174));return t}function ui(t,n){switch(kn(_i,n),kn(iu,t),kn(no,Bi),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ze(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Ze(n,t)}Bn(no),kn(no,n)}function Ss(){Bn(no),Bn(iu),Bn(_i)}function Fl(t){zi(_i.current);var n=zi(no.current),a=Ze(n,t.type);n!==a&&(kn(iu,t),kn(no,a))}function jl(t){iu.current===t&&(Bn(no),Bn(iu))}var vr=pr(0);function su(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bl=[];function ws(){for(var t=0;t<Bl.length;t++)Bl[t]._workInProgressVersionPrimary=null;Bl.length=0}var uu=F.ReactCurrentDispatcher,Ju=F.ReactCurrentBatchConfig,Ui=0,gr=null,Fr=null,Vr=null,qu=!1,lu=!1,li=0,Gc=0;function ea(){throw Error(o(321))}function el(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qr(t[a],n[a]))return!1;return!0}function tl(t,n,a,f,I,O){if(Ui=O,gr=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,uu.current=t===null||t.memoizedState===null?Yc:Xc,t=a(f,I),lu){O=0;do{if(lu=!1,li=0,25<=O)throw Error(o(301));O+=1,Vr=Fr=null,n.updateQueue=null,uu.current=Qc,t=a(f,I)}while(lu)}if(uu.current=ol,n=Fr!==null&&Fr.next!==null,Ui=0,Vr=Fr=gr=null,qu=!1,n)throw Error(o(300));return t}function _l(){var t=li!==0;return li=0,t}function Ua(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vr===null?gr.memoizedState=Vr=t:Vr=Vr.next=t,Vr}function ma(){if(Fr===null){var t=gr.alternate;t=t!==null?t.memoizedState:null}else t=Fr.next;var n=Vr===null?gr.memoizedState:Vr.next;if(n!==null)Vr=n,Fr=t;else{if(t===null)throw Error(o(310));Fr=t,t={memoizedState:Fr.memoizedState,baseState:Fr.baseState,baseQueue:Fr.baseQueue,queue:Fr.queue,next:null},Vr===null?gr.memoizedState=Vr=t:Vr=Vr.next=t}return Vr}function cu(t,n){return typeof n=="function"?n(t):n}function co(t){var n=ma(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var f=Fr,I=f.baseQueue,O=a.pending;if(O!==null){if(I!==null){var Z=I.next;I.next=O.next,O.next=Z}f.baseQueue=I=O,a.pending=null}if(I!==null){O=I.next,f=f.baseState;var de=Z=null,Ie=null,et=O;do{var wt=et.lane;if((Ui&wt)===wt)Ie!==null&&(Ie=Ie.next={lane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),f=et.hasEagerState?et.eagerState:t(f,et.action);else{var Rt={lane:wt,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null};Ie===null?(de=Ie=Rt,Z=f):Ie=Ie.next=Rt,gr.lanes|=wt,ya|=wt}et=et.next}while(et!==null&&et!==O);Ie===null?Z=f:Ie.next=de,Qr(f,n.memoizedState)||(ha=!0),n.memoizedState=f,n.baseState=Z,n.baseQueue=Ie,a.lastRenderedState=f}if(t=a.interleaved,t!==null){I=t;do O=I.lane,gr.lanes|=O,ya|=O,I=I.next;while(I!==t)}else I===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function zl(t){var n=ma(),a=n.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var f=a.dispatch,I=a.pending,O=n.memoizedState;if(I!==null){a.pending=null;var Z=I=I.next;do O=t(O,Z.action),Z=Z.next;while(Z!==I);Qr(O,n.memoizedState)||(ha=!0),n.memoizedState=O,n.baseQueue===null&&(n.baseState=O),a.lastRenderedState=O}return[O,f]}function pc(){}function Wc(t,n){var a=gr,f=ma(),I=n(),O=!Qr(f.memoizedState,I);if(O&&(f.memoizedState=I,ha=!0),f=f.queue,Hl(mc.bind(null,a,f,t),[t]),f.getSnapshot!==n||O||Vr!==null&&Vr.memoizedState.tag&1){if(a.flags|=2048,fu(9,vc.bind(null,a,f,I,n),void 0,null),_n===null)throw Error(o(349));Ui&30||Ul(a,n,I)}return I}function Ul(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gr.updateQueue,n===null?(n={lastEffect:null,stores:null},gr.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function vc(t,n,a,f){n.value=a,n.getSnapshot=f,hc(n)&&yc(t)}function mc(t,n,a){return a(function(){hc(n)&&yc(t)})}function hc(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qr(t,a)}catch(f){return!0}}function yc(t){var n=uo(t,1);n!==null&&un(n,t,1,-1)}function gc(t){var n=Ua();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cu,lastRenderedState:t},n.queue=t,t=t.dispatch=Ts.bind(null,gr,t),[n.memoizedState,t]}function fu(t,n,a,f){return t={tag:t,create:n,destroy:a,deps:f,next:null},n=gr.updateQueue,n===null?(n={lastEffect:null,stores:null},gr.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(f=a.next,a.next=t,t.next=f,n.lastEffect=t)),t}function nl(){return ma().memoizedState}function rl(t,n,a,f){var I=Ua();gr.flags|=t,I.memoizedState=fu(1|n,a,void 0,f===void 0?null:f)}function Lo(t,n,a,f){var I=ma();f=f===void 0?null:f;var O=void 0;if(Fr!==null){var Z=Fr.memoizedState;if(O=Z.destroy,f!==null&&el(f,Z.deps)){I.memoizedState=fu(n,a,O,f);return}}gr.flags|=t,I.memoizedState=fu(1|n,a,O,f)}function xc(t,n){return rl(8390656,8,t,n)}function Hl(t,n){return Lo(2048,8,t,n)}function bc(t,n){return Lo(4,2,t,n)}function Ic(t,n){return Lo(4,4,t,n)}function Ec(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $l(t,n,a){return a=a!=null?a.concat([t]):null,Lo(4,4,Ec.bind(null,n,t),a)}function al(){}function Cs(t,n){var a=ma();n=n===void 0?null:n;var f=a.memoizedState;return f!==null&&n!==null&&el(n,f[1])?f[0]:(a.memoizedState=[t,n],t)}function Sc(t,n){var a=ma();n=n===void 0?null:n;var f=a.memoizedState;return f!==null&&n!==null&&el(n,f[1])?f[0]:(t=t(),a.memoizedState=[t,n],t)}function wc(t,n,a){return Ui&21?(Qr(a,n)||(a=Yi(),gr.lanes|=a,ya|=a,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,ha=!0),t.memoizedState=a)}function Kc(t,n){var a=Vn;Vn=a!==0&&4>a?a:4,t(!0);var f=Ju.transition;Ju.transition={};try{t(!1),n()}finally{Vn=a,Ju.transition=f}}function Cc(){return ma().memoizedState}function Zc(t,n,a){var f=na(t);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},du(t))Tc(n,a);else if(a=fc(t,n,a,f),a!==null){var I=xr();un(a,t,f,I),Vl(a,n,f)}}function Ts(t,n,a){var f=na(t),I={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(du(t))Tc(n,I);else{var O=t.alternate;if(t.lanes===0&&(O===null||O.lanes===0)&&(O=n.lastRenderedReducer,O!==null))try{var Z=n.lastRenderedState,de=O(Z,a);if(I.hasEagerState=!0,I.eagerState=de,Qr(de,Z)){var Ie=n.interleaved;Ie===null?(I.next=I,ji(n)):(I.next=Ie.next,Ie.next=I),n.interleaved=I;return}}catch(et){}finally{}a=fc(t,n,I,f),a!==null&&(I=xr(),un(a,t,f,I),Vl(a,n,f))}}function du(t){var n=t.alternate;return t===gr||n!==null&&n===gr}function Tc(t,n){lu=qu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vl(t,n,a){if(a&4194240){var f=n.lanes;f&=t.pendingLanes,a|=f,n.lanes=a,Xi(t,a)}}var ol={readContext:Sr,useCallback:ea,useContext:ea,useEffect:ea,useImperativeHandle:ea,useInsertionEffect:ea,useLayoutEffect:ea,useMemo:ea,useReducer:ea,useRef:ea,useState:ea,useDebugValue:ea,useDeferredValue:ea,useTransition:ea,useMutableSource:ea,useSyncExternalStore:ea,useId:ea,unstable_isNewReconciler:!1},Yc={readContext:Sr,useCallback:function(t,n){return Ua().memoizedState=[t,n===void 0?null:n],t},useContext:Sr,useEffect:xc,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,rl(4194308,4,Ec.bind(null,n,t),a)},useLayoutEffect:function(t,n){return rl(4194308,4,t,n)},useInsertionEffect:function(t,n){return rl(4,2,t,n)},useMemo:function(t,n){var a=Ua();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var f=Ua();return n=a!==void 0?a(n):n,f.memoizedState=f.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},f.queue=t,t=t.dispatch=Zc.bind(null,gr,t),[f.memoizedState,t]},useRef:function(t){var n=Ua();return t={current:t},n.memoizedState=t},useState:gc,useDebugValue:al,useDeferredValue:function(t){return Ua().memoizedState=t},useTransition:function(){var t=gc(!1),n=t[0];return t=Kc.bind(null,t[1]),Ua().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var f=gr,I=Ua();if(or){if(a===void 0)throw Error(o(407));a=a()}else{if(a=n(),_n===null)throw Error(o(349));Ui&30||Ul(f,n,a)}I.memoizedState=a;var O={value:a,getSnapshot:n};return I.queue=O,xc(mc.bind(null,f,O,t),[t]),f.flags|=2048,fu(9,vc.bind(null,f,O,a,n),void 0,null),a},useId:function(){var t=Ua(),n=_n.identifierPrefix;if(or){var a=Ro,f=Po;a=(f&~(1<<32-ia(f)-1)).toString(32)+a,n=":"+n+"R"+a,a=li++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Gc++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Xc={readContext:Sr,useCallback:Cs,useContext:Sr,useEffect:Hl,useImperativeHandle:$l,useInsertionEffect:bc,useLayoutEffect:Ic,useMemo:Sc,useReducer:co,useRef:nl,useState:function(){return co(cu)},useDebugValue:al,useDeferredValue:function(t){var n=ma();return wc(n,Fr.memoizedState,t)},useTransition:function(){var t=co(cu)[0],n=ma().memoizedState;return[t,n]},useMutableSource:pc,useSyncExternalStore:Wc,useId:Cc,unstable_isNewReconciler:!1},Qc={readContext:Sr,useCallback:Cs,useContext:Sr,useEffect:Hl,useImperativeHandle:$l,useInsertionEffect:bc,useLayoutEffect:Ic,useMemo:Sc,useReducer:zl,useRef:nl,useState:function(){return zl(cu)},useDebugValue:al,useDeferredValue:function(t){var n=ma();return Fr===null?n.memoizedState=t:wc(n,Fr.memoizedState,t)},useTransition:function(){var t=zl(cu)[0],n=ma().memoizedState;return[t,n]},useMutableSource:pc,useSyncExternalStore:Wc,useId:Cc,unstable_isNewReconciler:!1};function Os(t,n){try{var a="",f=n;do a+=ze(f),f=f.return;while(f);var I=a}catch(O){I=`
Error generating stack: `+O.message+`
`+O.stack}return{value:t,source:n,stack:I,digest:null}}function il(t,n,a){return{value:t,source:null,stack:a!=null?a:null,digest:n!=null?n:null}}function Gl(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Jc=typeof WeakMap=="function"?WeakMap:Map;function Oc(t,n,a){a=lo(-1,a),a.tag=3,a.payload={element:null};var f=n.value;return a.callback=function(){Mr||(Mr=!0,Br=f),Gl(t,n)},a}function Ac(t,n,a){a=lo(-1,a),a.tag=3;var f=t.type.getDerivedStateFromError;if(typeof f=="function"){var I=n.value;a.payload=function(){return f(I)},a.callback=function(){Gl(t,n)}}var O=t.stateNode;return O!==null&&typeof O.componentDidCatch=="function"&&(a.callback=function(){Gl(t,n),typeof f!="function"&&(la===null?la=new Set([this]):la.add(this));var Z=n.stack;this.componentDidCatch(n.value,{componentStack:Z!==null?Z:""})}),a}function pu(t,n,a){var f=t.pingCache;if(f===null){f=t.pingCache=new Jc;var I=new Set;f.set(n,I)}else I=f.get(n),I===void 0&&(I=new Set,f.set(n,I));I.has(a)||(I.add(a),t=Yl.bind(null,t,n,a),n.then(t,t))}function Mc(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Pc(t,n,a,f,I){return t.mode&1?(t.flags|=65536,t.lanes=I,t):(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=lo(-1,1),n.tag=2,si(a,n,1))),a.lanes|=1),t)}var Rc=F.ReactCurrentOwner,ha=!1;function sa(t,n,a,f){n.child=t===null?dc(n,null,a,f):Es(n,t.child,a,f)}function Nc(t,n,a,f,I){a=a.render;var O=n.ref;return ms(n,I),f=tl(t,n,a,f,O,I),a=_l(),t!==null&&!ha?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~I,Ue(t,n,I)):(or&&a&&Al(n),n.flags|=1,sa(t,n,f,I),n.child)}function Lc(t,n,a,f,I){if(t===null){var O=a.type;return typeof O=="function"&&!Ql(O)&&O.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=O,Dc(t,n,O,f,I)):(t=sl(a.type,null,f,n,n.mode,I),t.ref=n.ref,t.return=n,n.child=t)}if(O=t.child,!(t.lanes&I)){var Z=O.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(Z,f)&&t.ref===n.ref)return Ue(t,n,I)}return n.flags|=1,t=fi(O,f),t.ref=n.ref,t.return=n,n.child=t}function Dc(t,n,a,f,I){if(t!==null){var O=t.memoizedProps;if(Wo(O,f)&&t.ref===n.ref)if(ha=!1,n.pendingProps=f=O,(t.lanes&I)!==0)t.flags&131072&&(ha=!0);else return n.lanes=t.lanes,Ue(t,n,I)}return vu(t,n,a,f,I)}function kc(t,n,a){var f=n.pendingProps,I=f.children,O=t!==null?t.memoizedState:null;if(f.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},kn(ua,qn),qn|=a;else{if(!(a&1073741824))return t=O!==null?O.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,kn(ua,qn),qn|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=O!==null?O.baseLanes:a,kn(ua,qn),qn|=f}else O!==null?(f=O.baseLanes|a,n.memoizedState=null):f=a,kn(ua,qn),qn|=f;return sa(t,n,I,a),n.child}function Fc(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function vu(t,n,a,f,I){var O=$r(a)?Mo:kr.current;return O=qr(n,O),ms(n,I),a=tl(t,n,a,f,O,I),f=_l(),t!==null&&!ha?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~I,Ue(t,n,I)):(or&&f&&Al(n),n.flags|=1,sa(t,n,a,I),n.child)}function jc(t,n,a,f,I){if($r(a)){var O=!0;ja(n)}else O=!1;if(ms(n,I),n.stateNode===null)ke(t,n),Is(n,a,f),Ll(n,a,f,I),f=!0;else if(t===null){var Z=n.stateNode,de=n.memoizedProps;Z.props=de;var Ie=Z.context,et=a.contextType;typeof et=="object"&&et!==null?et=Sr(et):(et=$r(a)?Mo:kr.current,et=qr(n,et));var wt=a.getDerivedStateFromProps,Rt=typeof wt=="function"||typeof Z.getSnapshotBeforeUpdate=="function";Rt||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(de!==f||Ie!==et)&&Nl(n,Z,f,et),to=!1;var Et=n.memoizedState;Z.state=Et,gs(n,f,Z,I),Ie=n.memoizedState,de!==f||Et!==Ie||Rr.current||to?(typeof wt=="function"&&(xs(n,a,wt,f),Ie=n.memoizedState),(de=to||bs(n,a,de,f,Et,Ie,et))?(Rt||typeof Z.UNSAFE_componentWillMount!="function"&&typeof Z.componentWillMount!="function"||(typeof Z.componentWillMount=="function"&&Z.componentWillMount(),typeof Z.UNSAFE_componentWillMount=="function"&&Z.UNSAFE_componentWillMount()),typeof Z.componentDidMount=="function"&&(n.flags|=4194308)):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=f,n.memoizedState=Ie),Z.props=f,Z.state=Ie,Z.context=et,f=de):(typeof Z.componentDidMount=="function"&&(n.flags|=4194308),f=!1)}else{Z=n.stateNode,hs(t,n),de=n.memoizedProps,et=n.type===n.elementType?de:eo(n.type,de),Z.props=et,Rt=n.pendingProps,Et=Z.context,Ie=a.contextType,typeof Ie=="object"&&Ie!==null?Ie=Sr(Ie):(Ie=$r(a)?Mo:kr.current,Ie=qr(n,Ie));var Qt=a.getDerivedStateFromProps;(wt=typeof Qt=="function"||typeof Z.getSnapshotBeforeUpdate=="function")||typeof Z.UNSAFE_componentWillReceiveProps!="function"&&typeof Z.componentWillReceiveProps!="function"||(de!==Rt||Et!==Ie)&&Nl(n,Z,f,Ie),to=!1,Et=n.memoizedState,Z.state=Et,gs(n,f,Z,I);var tn=n.memoizedState;de!==Rt||Et!==tn||Rr.current||to?(typeof Qt=="function"&&(xs(n,a,Qt,f),tn=n.memoizedState),(et=to||bs(n,a,et,f,Et,tn,Ie)||!1)?(wt||typeof Z.UNSAFE_componentWillUpdate!="function"&&typeof Z.componentWillUpdate!="function"||(typeof Z.componentWillUpdate=="function"&&Z.componentWillUpdate(f,tn,Ie),typeof Z.UNSAFE_componentWillUpdate=="function"&&Z.UNSAFE_componentWillUpdate(f,tn,Ie)),typeof Z.componentDidUpdate=="function"&&(n.flags|=4),typeof Z.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof Z.componentDidUpdate!="function"||de===t.memoizedProps&&Et===t.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||de===t.memoizedProps&&Et===t.memoizedState||(n.flags|=1024),n.memoizedProps=f,n.memoizedState=tn),Z.props=f,Z.state=tn,Z.context=Ie,f=et):(typeof Z.componentDidUpdate!="function"||de===t.memoizedProps&&Et===t.memoizedState||(n.flags|=4),typeof Z.getSnapshotBeforeUpdate!="function"||de===t.memoizedProps&&Et===t.memoizedState||(n.flags|=1024),f=!1)}return Wl(t,n,a,f,O,I)}function Wl(t,n,a,f,I,O){Fc(t,n);var Z=(n.flags&128)!==0;if(!f&&!Z)return I&&Hu(n,a,!1),Ue(t,n,O);f=n.stateNode,Rc.current=n;var de=Z&&typeof a.getDerivedStateFromError!="function"?null:f.render();return n.flags|=1,t!==null&&Z?(n.child=Es(n,t.child,null,O),n.child=Es(n,null,de,O)):sa(t,n,de,O),n.memoizedState=f.state,I&&Hu(n,a,!0),n.child}function u(t){var n=t.stateNode;n.pendingContext?Ni(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Ni(t,n.context,!1),ui(t,n.containerInfo)}function p(t,n,a,f,I){return No(),Vu(I),n.flags|=256,sa(t,n,a,f),n.child}var g={dehydrated:null,treeContext:null,retryLane:0};function T(t){return{baseLanes:t,cachePool:null,transitions:null}}function R(t,n,a){var f=n.pendingProps,I=vr.current,O=!1,Z=(n.flags&128)!==0,de;if((de=Z)||(de=t!==null&&t.memoizedState===null?!1:(I&2)!==0),de?(O=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(I|=1),kn(vr,I&1),t===null)return Pl(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(Z=f.children,t=f.fallback,O?(f=n.mode,O=n.child,Z={mode:"hidden",children:Z},!(f&1)&&O!==null?(O.childLanes=0,O.pendingProps=Z):O=ul(Z,f,0,null),t=Wi(t,f,a,null),O.return=n,t.return=n,O.sibling=t,n.child=O,n.child.memoizedState=T(a),n.memoizedState=g,t):U(n,Z));if(I=t.memoizedState,I!==null&&(de=I.dehydrated,de!==null))return oe(t,n,Z,f,de,I,a);if(O){O=f.fallback,Z=n.mode,I=t.child,de=I.sibling;var Ie={mode:"hidden",children:f.children};return!(Z&1)&&n.child!==I?(f=n.child,f.childLanes=0,f.pendingProps=Ie,n.deletions=null):(f=fi(I,Ie),f.subtreeFlags=I.subtreeFlags&14680064),de!==null?O=fi(de,O):(O=Wi(O,Z,a,null),O.flags|=2),O.return=n,f.return=n,f.sibling=O,n.child=f,f=O,O=n.child,Z=t.child.memoizedState,Z=Z===null?T(a):{baseLanes:Z.baseLanes|a,cachePool:null,transitions:Z.transitions},O.memoizedState=Z,O.childLanes=t.childLanes&~a,n.memoizedState=g,f}return O=t.child,t=O.sibling,f=fi(O,{mode:"visible",children:f.children}),!(n.mode&1)&&(f.lanes=a),f.return=n,f.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=f,n.memoizedState=null,f}function U(t,n){return n=ul({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function A(t,n,a,f){return f!==null&&Vu(f),Es(n,t.child,null,a),t=U(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function oe(t,n,a,f,I,O,Z){if(a)return n.flags&256?(n.flags&=-257,f=il(Error(o(422))),A(t,n,Z,f)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(O=f.fallback,I=n.mode,f=ul({mode:"visible",children:f.children},I,0,null),O=Wi(O,I,Z,null),O.flags|=2,f.return=n,O.return=n,f.sibling=O,n.child=f,n.mode&1&&Es(n,t.child,null,Z),n.child.memoizedState=T(Z),n.memoizedState=g,O);if(!(n.mode&1))return A(t,n,Z,null);if(I.data==="$!"){if(f=I.nextSibling&&I.nextSibling.dataset,f)var de=f.dgst;return f=de,O=Error(o(419)),f=il(O,f,void 0),A(t,n,Z,f)}if(de=(Z&t.childLanes)!==0,ha||de){if(f=_n,f!==null){switch(Z&-Z){case 4:I=2;break;case 16:I=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:I=32;break;case 536870912:I=268435456;break;default:I=0}I=I&(f.suspendedLanes|Z)?0:I,I!==0&&I!==O.retryLane&&(O.retryLane=I,uo(t,I),un(f,t,I,-1))}return Vi(),f=il(Error(o(421))),A(t,n,Z,f)}return I.data==="$?"?(n.flags|=128,n.child=t.child,n=qc.bind(null,t),I._reactRetry=n,null):(t=O.treeContext,va=Ye(I.nextSibling),Aa=n,or=!0,qa=null,t!==null&&(_a[za++]=Po,_a[za++]=Ro,_a[za++]=Li,Po=t.id,Ro=t.overflow,Li=n),n=U(n,f.children),n.flags|=4096,n)}function ne(t,n,a){t.lanes|=n;var f=t.alternate;f!==null&&(f.lanes|=n),Ku(t.return,n,a)}function fe(t,n,a,f,I){var O=t.memoizedState;O===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:I}:(O.isBackwards=n,O.rendering=null,O.renderingStartTime=0,O.last=f,O.tail=a,O.tailMode=I)}function De(t,n,a){var f=n.pendingProps,I=f.revealOrder,O=f.tail;if(sa(t,n,f.children,a),f=vr.current,f&2)f=f&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ne(t,a,n);else if(t.tag===19)ne(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}f&=1}if(kn(vr,f),!(n.mode&1))n.memoizedState=null;else switch(I){case"forwards":for(a=n.child,I=null;a!==null;)t=a.alternate,t!==null&&su(t)===null&&(I=a),a=a.sibling;a=I,a===null?(I=n.child,n.child=null):(I=a.sibling,a.sibling=null),fe(n,!1,I,a,O);break;case"backwards":for(a=null,I=n.child,n.child=null;I!==null;){if(t=I.alternate,t!==null&&su(t)===null){n.child=I;break}t=I.sibling,I.sibling=a,a=I,I=t}fe(n,!0,a,null,O);break;case"together":fe(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ke(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Ue(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,!(a&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,a=fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function He(t,n,a){switch(n.tag){case 3:u(n),No();break;case 5:Fl(n);break;case 1:$r(n.type)&&ja(n);break;case 4:ui(n,n.stateNode.containerInfo);break;case 10:var f=n.type._context,I=n.memoizedProps.value;kn(Gu,f._currentValue),f._currentValue=I;break;case 13:if(f=n.memoizedState,f!==null)return f.dehydrated!==null?(kn(vr,vr.current&1),n.flags|=128,null):a&n.child.childLanes?R(t,n,a):(kn(vr,vr.current&1),t=Ue(t,n,a),t!==null?t.sibling:null);kn(vr,vr.current&1);break;case 19:if(f=(a&n.childLanes)!==0,t.flags&128){if(f)return De(t,n,a);n.flags|=128}if(I=n.memoizedState,I!==null&&(I.rendering=null,I.tail=null,I.lastEffect=null),kn(vr,vr.current),f)break;return null;case 22:case 23:return n.lanes=0,kc(t,n,a)}return Ue(t,n,a)}var Ve,st,mt,It;Ve=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},st=function(){},mt=function(t,n,a,f){var I=t.memoizedProps;if(I!==f){t=n.stateNode,zi(no.current);var O=null;switch(a){case"input":I=dt(t,I),f=dt(t,f),O=[];break;case"select":I=J({},I,{value:void 0}),f=J({},f,{value:void 0}),O=[];break;case"textarea":I=te(t,I),f=te(t,f),O=[];break;default:typeof I.onClick!="function"&&typeof f.onClick=="function"&&(t.onclick=ri)}be(a,f);var Z;a=null;for(et in I)if(!f.hasOwnProperty(et)&&I.hasOwnProperty(et)&&I[et]!=null)if(et==="style"){var de=I[et];for(Z in de)de.hasOwnProperty(Z)&&(a||(a={}),a[Z]="")}else et!=="dangerouslySetInnerHTML"&&et!=="children"&&et!=="suppressContentEditableWarning"&&et!=="suppressHydrationWarning"&&et!=="autoFocus"&&(d.hasOwnProperty(et)?O||(O=[]):(O=O||[]).push(et,null));for(et in f){var Ie=f[et];if(de=I!=null?I[et]:void 0,f.hasOwnProperty(et)&&Ie!==de&&(Ie!=null||de!=null))if(et==="style")if(de){for(Z in de)!de.hasOwnProperty(Z)||Ie&&Ie.hasOwnProperty(Z)||(a||(a={}),a[Z]="");for(Z in Ie)Ie.hasOwnProperty(Z)&&de[Z]!==Ie[Z]&&(a||(a={}),a[Z]=Ie[Z])}else a||(O||(O=[]),O.push(et,a)),a=Ie;else et==="dangerouslySetInnerHTML"?(Ie=Ie?Ie.__html:void 0,de=de?de.__html:void 0,Ie!=null&&de!==Ie&&(O=O||[]).push(et,Ie)):et==="children"?typeof Ie!="string"&&typeof Ie!="number"||(O=O||[]).push(et,""+Ie):et!=="suppressContentEditableWarning"&&et!=="suppressHydrationWarning"&&(d.hasOwnProperty(et)?(Ie!=null&&et==="onScroll"&&Xn("scroll",t),O||de===Ie||(O=[])):(O=O||[]).push(et,Ie))}a&&(O=O||[]).push("style",a);var et=O;(n.updateQueue=et)&&(n.flags|=4)}},It=function(t,n,a,f){a!==f&&(n.flags|=4)};function ct(t,n){if(!or)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:f.sibling=null}}function ft(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,f=0;if(n)for(var I=t.child;I!==null;)a|=I.lanes|I.childLanes,f|=I.subtreeFlags&14680064,f|=I.flags&14680064,I.return=t,I=I.sibling;else for(I=t.child;I!==null;)a|=I.lanes|I.childLanes,f|=I.subtreeFlags,f|=I.flags,I.return=t,I=I.sibling;return t.subtreeFlags|=f,t.childLanes=a,n}function At(t,n,a){var f=n.pendingProps;switch(oi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(n),null;case 1:return $r(n.type)&&ai(),ft(n),null;case 3:return f=n.stateNode,Ss(),Bn(Rr),Bn(kr),ws(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(t===null||t.child===null)&&($u(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,qa!==null&&(Pa(qa),qa=null))),st(t,n),ft(n),null;case 5:jl(n);var I=zi(_i.current);if(a=n.type,t!==null&&n.stateNode!=null)mt(t,n,a,f,I),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!f){if(n.stateNode===null)throw Error(o(166));return ft(n),null}if(t=zi(no.current),$u(n)){f=n.stateNode,a=n.type;var O=n.memoizedProps;switch(f[vt]=n,f[_t]=O,t=(n.mode&1)!==0,a){case"dialog":Xn("cancel",f),Xn("close",f);break;case"iframe":case"object":case"embed":Xn("load",f);break;case"video":case"audio":for(I=0;I<Qo.length;I++)Xn(Qo[I],f);break;case"source":Xn("error",f);break;case"img":case"image":case"link":Xn("error",f),Xn("load",f);break;case"details":Xn("toggle",f);break;case"input":Me(f,O),Xn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!O.multiple},Xn("invalid",f);break;case"textarea":ae(f,O),Xn("invalid",f)}be(a,O),I=null;for(var Z in O)if(O.hasOwnProperty(Z)){var de=O[Z];Z==="children"?typeof de=="string"?f.textContent!==de&&(O.suppressHydrationWarning!==!0&&ni(f.textContent,de,t),I=["children",de]):typeof de=="number"&&f.textContent!==""+de&&(O.suppressHydrationWarning!==!0&&ni(f.textContent,de,t),I=["children",""+de]):d.hasOwnProperty(Z)&&de!=null&&Z==="onScroll"&&Xn("scroll",f)}switch(a){case"input":Re(f),xe(f,O,!0);break;case"textarea":Re(f),Be(f);break;case"select":case"option":break;default:typeof O.onClick=="function"&&(f.onclick=ri)}f=I,n.updateQueue=f,f!==null&&(n.flags|=4)}else{Z=I.nodeType===9?I:I.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ae(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=Z.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof f.is=="string"?t=Z.createElement(a,{is:f.is}):(t=Z.createElement(a),a==="select"&&(Z=t,f.multiple?Z.multiple=!0:f.size&&(Z.size=f.size))):t=Z.createElementNS(t,a),t[vt]=n,t[_t]=f,Ve(t,n,!1,!1),n.stateNode=t;e:{switch(Z=rt(a,f),a){case"dialog":Xn("cancel",t),Xn("close",t),I=f;break;case"iframe":case"object":case"embed":Xn("load",t),I=f;break;case"video":case"audio":for(I=0;I<Qo.length;I++)Xn(Qo[I],t);I=f;break;case"source":Xn("error",t),I=f;break;case"img":case"image":case"link":Xn("error",t),Xn("load",t),I=f;break;case"details":Xn("toggle",t),I=f;break;case"input":Me(t,f),I=dt(t,f),Xn("invalid",t);break;case"option":I=f;break;case"select":t._wrapperState={wasMultiple:!!f.multiple},I=J({},f,{value:void 0}),Xn("invalid",t);break;case"textarea":ae(t,f),I=te(t,f),Xn("invalid",t);break;default:I=f}be(a,I),de=I;for(O in de)if(de.hasOwnProperty(O)){var Ie=de[O];O==="style"?Ce(t,Ie):O==="dangerouslySetInnerHTML"?(Ie=Ie?Ie.__html:void 0,Ie!=null&&Nt(t,Ie)):O==="children"?typeof Ie=="string"?(a!=="textarea"||Ie!=="")&&Tt(t,Ie):typeof Ie=="number"&&Tt(t,""+Ie):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(d.hasOwnProperty(O)?Ie!=null&&O==="onScroll"&&Xn("scroll",t):Ie!=null&&Q(t,O,Ie,Z))}switch(a){case"input":Re(t),xe(t,f,!1);break;case"textarea":Re(t),Be(t);break;case"option":f.value!=null&&t.setAttribute("value",""+_(f.value));break;case"select":t.multiple=!!f.multiple,O=f.value,O!=null?W(t,!!f.multiple,O,!1):f.defaultValue!=null&&W(t,!!f.multiple,f.defaultValue,!0);break;default:typeof I.onClick=="function"&&(t.onclick=ri)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ft(n),null;case 6:if(t&&n.stateNode!=null)It(t,n,t.memoizedProps,f);else{if(typeof f!="string"&&n.stateNode===null)throw Error(o(166));if(a=zi(_i.current),zi(no.current),$u(n)){if(f=n.stateNode,a=n.memoizedProps,f[vt]=n,(O=f.nodeValue!==a)&&(t=Aa,t!==null))switch(t.tag){case 3:ni(f.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ni(f.nodeValue,a,(t.mode&1)!==0)}O&&(n.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[vt]=n,n.stateNode=f}return ft(n),null;case 13:if(Bn(vr),f=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(or&&va!==null&&n.mode&1&&!(n.flags&128))lc(),No(),n.flags|=98560,O=!1;else if(O=$u(n),f!==null&&f.dehydrated!==null){if(t===null){if(!O)throw Error(o(318));if(O=n.memoizedState,O=O!==null?O.dehydrated:null,!O)throw Error(o(317));O[vt]=n}else No(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ft(n),O=!1}else qa!==null&&(Pa(qa),qa=null),O=!0;if(!O)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(f=f!==null,f!==(t!==null&&t.memoizedState!==null)&&f&&(n.child.flags|=8192,n.mode&1&&(t===null||vr.current&1?ar===0&&(ar=3):Vi())),n.updateQueue!==null&&(n.flags|=4),ft(n),null);case 4:return Ss(),st(t,n),t===null&&Ai(n.stateNode.containerInfo),ft(n),null;case 10:return nu(n.type._context),ft(n),null;case 17:return $r(n.type)&&ai(),ft(n),null;case 19:if(Bn(vr),O=n.memoizedState,O===null)return ft(n),null;if(f=(n.flags&128)!==0,Z=O.rendering,Z===null)if(f)ct(O,!1);else{if(ar!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(Z=su(t),Z!==null){for(n.flags|=128,ct(O,!1),f=Z.updateQueue,f!==null&&(n.updateQueue=f,n.flags|=4),n.subtreeFlags=0,f=a,a=n.child;a!==null;)O=a,t=f,O.flags&=14680066,Z=O.alternate,Z===null?(O.childLanes=0,O.lanes=t,O.child=null,O.subtreeFlags=0,O.memoizedProps=null,O.memoizedState=null,O.updateQueue=null,O.dependencies=null,O.stateNode=null):(O.childLanes=Z.childLanes,O.lanes=Z.lanes,O.child=Z.child,O.subtreeFlags=0,O.deletions=null,O.memoizedProps=Z.memoizedProps,O.memoizedState=Z.memoizedState,O.updateQueue=Z.updateQueue,O.type=Z.type,t=Z.dependencies,O.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return kn(vr,vr.current&1|2),n.child}t=t.sibling}O.tail!==null&&lr()>dr&&(n.flags|=128,f=!0,ct(O,!1),n.lanes=4194304)}else{if(!f)if(t=su(Z),t!==null){if(n.flags|=128,f=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),ct(O,!0),O.tail===null&&O.tailMode==="hidden"&&!Z.alternate&&!or)return ft(n),null}else 2*lr()-O.renderingStartTime>dr&&a!==1073741824&&(n.flags|=128,f=!0,ct(O,!1),n.lanes=4194304);O.isBackwards?(Z.sibling=n.child,n.child=Z):(a=O.last,a!==null?a.sibling=Z:n.child=Z,O.last=Z)}return O.tail!==null?(n=O.tail,O.rendering=n,O.tail=n.sibling,O.renderingStartTime=lr(),n.sibling=null,a=vr.current,kn(vr,f?a&1|2:a&1),n):(ft(n),null);case 22:case 23:return As(),f=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==f&&(n.flags|=8192),f&&n.mode&1?qn&1073741824&&(ft(n),n.subtreeFlags&6&&(n.flags|=8192)):ft(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function zt(t,n){switch(oi(n),n.tag){case 1:return $r(n.type)&&ai(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ss(),Bn(Rr),Bn(kr),ws(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return jl(n),null;case 13:if(Bn(vr),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));No()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bn(vr),null;case 4:return Ss(),null;case 10:return nu(n.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var Pt=!1,Ot=!1,Xt=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Vt(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){ur(t,n,f)}else a.current=null}function bt(t,n,a){try{a()}catch(f){ur(t,n,f)}}var nt=!1;function $e(t,n){if(_u=En,t=Xa(),Ws(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var I=f.anchorOffset,O=f.focusNode;f=f.focusOffset;try{a.nodeType,O.nodeType}catch(Ft){a=null;break e}var Z=0,de=-1,Ie=-1,et=0,wt=0,Rt=t,Et=null;t:for(;;){for(var Qt;Rt!==a||I!==0&&Rt.nodeType!==3||(de=Z+I),Rt!==O||f!==0&&Rt.nodeType!==3||(Ie=Z+f),Rt.nodeType===3&&(Z+=Rt.nodeValue.length),(Qt=Rt.firstChild)!==null;)Et=Rt,Rt=Qt;for(;;){if(Rt===t)break t;if(Et===a&&++et===I&&(de=Z),Et===O&&++wt===f&&(Ie=Z),(Qt=Rt.nextSibling)!==null)break;Rt=Et,Et=Rt.parentNode}Rt=Qt}a=de===-1||Ie===-1?null:{start:de,end:Ie}}else a=null}a=a||{start:0,end:0}}else a=null;for(zu={focusedElem:t,selectionRange:a},En=!1,qe=n;qe!==null;)if(n=qe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,qe=t;else for(;qe!==null;){n=qe;try{var tn=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(tn!==null){var nn=tn.memoizedProps,_r=tn.memoizedState,Ge=n.stateNode,Pe=Ge.getSnapshotBeforeUpdate(n.elementType===n.type?nn:eo(n.type,nn),_r);Ge.__reactInternalSnapshotBeforeUpdate=Pe}break;case 3:var Ke=n.stateNode.containerInfo;Ke.nodeType===1?Ke.textContent="":Ke.nodeType===9&&Ke.documentElement&&Ke.removeChild(Ke.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Ft){ur(n,n.return,Ft)}if(t=n.sibling,t!==null){t.return=n.return,qe=t;break}qe=n.return}return tn=nt,nt=!1,tn}function Xe(t,n,a){var f=n.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var I=f=f.next;do{if((I.tag&t)===t){var O=I.destroy;I.destroy=void 0,O!==void 0&&bt(n,a,O)}I=I.next}while(I!==f)}}function yt(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var f=a.create;a.destroy=f()}a=a.next}while(a!==n)}}function Lt(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function kt(t){var n=t.alternate;n!==null&&(t.alternate=null,kt(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[vt],delete n[_t],delete n[gn],delete n[Er],delete n[On])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zt(t){return t.tag===5||t.tag===3||t.tag===4}function xn(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zt(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cn(t,n,a){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ri));else if(f!==4&&(t=t.child,t!==null))for(Cn(t,n,a),t=t.sibling;t!==null;)Cn(t,n,a),t=t.sibling}function Tn(t,n,a){var f=t.tag;if(f===5||f===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(f!==4&&(t=t.child,t!==null))for(Tn(t,n,a),t=t.sibling;t!==null;)Tn(t,n,a),t=t.sibling}var jt=null,$t=!1;function dn(t,n,a){for(a=a.child;a!==null;)Rn(t,n,a),a=a.sibling}function Rn(t,n,a){if(ba&&typeof ba.onCommitFiberUnmount=="function")try{ba.onCommitFiberUnmount(jo,a)}catch(de){}switch(a.tag){case 5:Ot||Vt(a,n);case 6:var f=jt,I=$t;jt=null,dn(t,n,a),jt=f,$t=I,jt!==null&&($t?(t=jt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):jt.removeChild(a.stateNode));break;case 18:jt!==null&&($t?(t=jt,a=a.stateNode,t.nodeType===8?Je(t.parentNode,a):t.nodeType===1&&Je(t,a),an(t)):Je(jt,a.stateNode));break;case 4:f=jt,I=$t,jt=a.stateNode.containerInfo,$t=!0,dn(t,n,a),jt=f,$t=I;break;case 0:case 11:case 14:case 15:if(!Ot&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){I=f=f.next;do{var O=I,Z=O.destroy;O=O.tag,Z!==void 0&&(O&2||O&4)&&bt(a,n,Z),I=I.next}while(I!==f)}dn(t,n,a);break;case 1:if(!Ot&&(Vt(a,n),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(de){ur(a,n,de)}dn(t,n,a);break;case 21:dn(t,n,a);break;case 22:a.mode&1?(Ot=(f=Ot)||a.memoizedState!==null,dn(t,n,a),Ot=f):dn(t,n,a);break;default:dn(t,n,a)}}function Qn(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Xt),n.forEach(function(f){var I=ef.bind(null,t,f);a.has(f)||(a.add(f),f.then(I,I))})}}function Jn(t,n){var a=n.deletions;if(a!==null)for(var f=0;f<a.length;f++){var I=a[f];try{var O=t,Z=n,de=Z;e:for(;de!==null;){switch(de.tag){case 5:jt=de.stateNode,$t=!1;break e;case 3:jt=de.stateNode.containerInfo,$t=!0;break e;case 4:jt=de.stateNode.containerInfo,$t=!0;break e}de=de.return}if(jt===null)throw Error(o(160));Rn(O,Z,I),jt=null,$t=!1;var Ie=I.alternate;Ie!==null&&(Ie.return=null),I.return=null}catch(et){ur(I,n,et)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)nr(n,t),n=n.sibling}function nr(t,n){var a=t.alternate,f=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(n,t),Hn(t),f&4){try{Xe(3,t,t.return),yt(3,t)}catch(nn){ur(t,t.return,nn)}try{Xe(5,t,t.return)}catch(nn){ur(t,t.return,nn)}}break;case 1:Jn(n,t),Hn(t),f&512&&a!==null&&Vt(a,a.return);break;case 5:if(Jn(n,t),Hn(t),f&512&&a!==null&&Vt(a,a.return),t.flags&32){var I=t.stateNode;try{Tt(I,"")}catch(nn){ur(t,t.return,nn)}}if(f&4&&(I=t.stateNode,I!=null)){var O=t.memoizedProps,Z=a!==null?a.memoizedProps:O,de=t.type,Ie=t.updateQueue;if(t.updateQueue=null,Ie!==null)try{de==="input"&&O.type==="radio"&&O.name!=null&&Oe(I,O),rt(de,Z);var et=rt(de,O);for(Z=0;Z<Ie.length;Z+=2){var wt=Ie[Z],Rt=Ie[Z+1];wt==="style"?Ce(I,Rt):wt==="dangerouslySetInnerHTML"?Nt(I,Rt):wt==="children"?Tt(I,Rt):Q(I,wt,Rt,et)}switch(de){case"input":Ee(I,O);break;case"textarea":ve(I,O);break;case"select":var Et=I._wrapperState.wasMultiple;I._wrapperState.wasMultiple=!!O.multiple;var Qt=O.value;Qt!=null?W(I,!!O.multiple,Qt,!1):Et!==!!O.multiple&&(O.defaultValue!=null?W(I,!!O.multiple,O.defaultValue,!0):W(I,!!O.multiple,O.multiple?[]:"",!1))}I[_t]=O}catch(nn){ur(t,t.return,nn)}}break;case 6:if(Jn(n,t),Hn(t),f&4){if(t.stateNode===null)throw Error(o(162));I=t.stateNode,O=t.memoizedProps;try{I.nodeValue=O}catch(nn){ur(t,t.return,nn)}}break;case 3:if(Jn(n,t),Hn(t),f&4&&a!==null&&a.memoizedState.isDehydrated)try{an(n.containerInfo)}catch(nn){ur(t,t.return,nn)}break;case 4:Jn(n,t),Hn(t);break;case 13:Jn(n,t),Hn(t),I=t.child,I.flags&8192&&(O=I.memoizedState!==null,I.stateNode.isHidden=O,!O||I.alternate!==null&&I.alternate.memoizedState!==null||(Ha=lr())),f&4&&Qn(t);break;case 22:if(wt=a!==null&&a.memoizedState!==null,t.mode&1?(Ot=(et=Ot)||wt,Jn(n,t),Ot=et):Jn(n,t),Hn(t),f&8192){if(et=t.memoizedState!==null,(t.stateNode.isHidden=et)&&!wt&&t.mode&1)for(qe=t,wt=t.child;wt!==null;){for(Rt=qe=wt;qe!==null;){switch(Et=qe,Qt=Et.child,Et.tag){case 0:case 11:case 14:case 15:Xe(4,Et,Et.return);break;case 1:Vt(Et,Et.return);var tn=Et.stateNode;if(typeof tn.componentWillUnmount=="function"){f=Et,a=Et.return;try{n=f,tn.props=n.memoizedProps,tn.state=n.memoizedState,tn.componentWillUnmount()}catch(nn){ur(f,a,nn)}}break;case 5:Vt(Et,Et.return);break;case 22:if(Et.memoizedState!==null){An(Rt);continue}}Qt!==null?(Qt.return=Et,qe=Qt):An(Rt)}wt=wt.sibling}e:for(wt=null,Rt=t;;){if(Rt.tag===5){if(wt===null){wt=Rt;try{I=Rt.stateNode,et?(O=I.style,typeof O.setProperty=="function"?O.setProperty("display","none","important"):O.display="none"):(de=Rt.stateNode,Ie=Rt.memoizedProps.style,Z=Ie!=null&&Ie.hasOwnProperty("display")?Ie.display:null,de.style.display=ie("display",Z))}catch(nn){ur(t,t.return,nn)}}}else if(Rt.tag===6){if(wt===null)try{Rt.stateNode.nodeValue=et?"":Rt.memoizedProps}catch(nn){ur(t,t.return,nn)}}else if((Rt.tag!==22&&Rt.tag!==23||Rt.memoizedState===null||Rt===t)&&Rt.child!==null){Rt.child.return=Rt,Rt=Rt.child;continue}if(Rt===t)break e;for(;Rt.sibling===null;){if(Rt.return===null||Rt.return===t)break e;wt===Rt&&(wt=null),Rt=Rt.return}wt===Rt&&(wt=null),Rt.sibling.return=Rt.return,Rt=Rt.sibling}}break;case 19:Jn(n,t),Hn(t),f&4&&Qn(t);break;case 21:break;default:Jn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Zt(a)){var f=a;break e}a=a.return}throw Error(o(160))}switch(f.tag){case 5:var I=f.stateNode;f.flags&32&&(Tt(I,""),f.flags&=-33);var O=xn(t);Tn(t,O,I);break;case 3:case 4:var Z=f.stateNode.containerInfo,de=xn(t);Cn(t,de,Z);break;default:throw Error(o(161))}}catch(Ie){ur(t,t.return,Ie)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mr(t,n,a){qe=t,cr(t,n,a)}function cr(t,n,a){for(var f=(t.mode&1)!==0;qe!==null;){var I=qe,O=I.child;if(I.tag===22&&f){var Z=I.memoizedState!==null||Pt;if(!Z){var de=I.alternate,Ie=de!==null&&de.memoizedState!==null||Ot;de=Pt;var et=Ot;if(Pt=Z,(Ot=Ie)&&!et)for(qe=I;qe!==null;)Z=qe,Ie=Z.child,Z.tag===22&&Z.memoizedState!==null?Cr(I):Ie!==null?(Ie.return=Z,qe=Ie):Cr(I);for(;O!==null;)qe=O,cr(O,n,a),O=O.sibling;qe=I,Pt=de,Ot=et}wr(t,n,a)}else I.subtreeFlags&8772&&O!==null?(O.return=I,qe=O):wr(t,n,a)}}function wr(t){for(;qe!==null;){var n=qe;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ot||yt(5,n);break;case 1:var f=n.stateNode;if(n.flags&4&&!Ot)if(a===null)f.componentDidMount();else{var I=n.elementType===n.type?a.memoizedProps:eo(n.type,a.memoizedProps);f.componentDidUpdate(I,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var O=n.updateQueue;O!==null&&Xu(n,O,f);break;case 3:var Z=n.updateQueue;if(Z!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Xu(n,Z,a)}break;case 5:var de=n.stateNode;if(a===null&&n.flags&4){a=de;var Ie=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":Ie.autoFocus&&a.focus();break;case"img":Ie.src&&(a.src=Ie.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var et=n.alternate;if(et!==null){var wt=et.memoizedState;if(wt!==null){var Rt=wt.dehydrated;Rt!==null&&an(Rt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Ot||n.flags&512&&Lt(n)}catch(Et){ur(n,n.return,Et)}}if(n===t){qe=null;break}if(a=n.sibling,a!==null){a.return=n.return,qe=a;break}qe=n.return}}function An(t){for(;qe!==null;){var n=qe;if(n===t){qe=null;break}var a=n.sibling;if(a!==null){a.return=n.return,qe=a;break}qe=n.return}}function Cr(t){for(;qe!==null;){var n=qe;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{yt(4,n)}catch(Ie){ur(n,a,Ie)}break;case 1:var f=n.stateNode;if(typeof f.componentDidMount=="function"){var I=n.return;try{f.componentDidMount()}catch(Ie){ur(n,I,Ie)}}var O=n.return;try{Lt(n)}catch(Ie){ur(n,O,Ie)}break;case 5:var Z=n.return;try{Lt(n)}catch(Ie){ur(n,Z,Ie)}}}catch(Ie){ur(n,n.return,Ie)}if(n===t){qe=null;break}var de=n.sibling;if(de!==null){de.return=n.return,qe=de;break}qe=n.return}}var fr=Math.ceil,bn=F.ReactCurrentDispatcher,Nn=F.ReactCurrentOwner,In=F.ReactCurrentBatchConfig,on=0,_n=null,zn=null,Zn=0,qn=0,ua=pr(0),ar=0,rr=null,ya=0,Kr=0,Or=0,jr=null,sr=null,Ha=0,dr=1/0,Ar=null,Mr=!1,Br=null,la=null,fo=!1,ga=null,ro=0,Ma=0,Do=null,ta=-1,$a=0;function xr(){return on&6?lr():ta!==-1?ta:ta=lr()}function na(t){return t.mode&1?on&2&&Zn!==0?Zn&-Zn:cc.transition!==null?($a===0&&($a=Yi()),$a):(t=Vn,t!==0||(t=window.event,t=t===void 0?16:_o(t.type)),t):1}function un(t,n,a,f){if(50<Ma)throw Ma=0,Do=null,Error(o(185));La(t,a,f),(!(on&2)||t!==_n)&&(t===_n&&(!(on&2)&&(Kr|=a),ar===4&&po(t,Zn)),cn(t,f),a===1&&on===0&&!(n.mode&1)&&(dr=lr()+500,Jt&&Ja()))}function cn(t,n){var a=t.callbackNode;bu(t,n);var f=xo(t,t===_n?Zn:0);if(f===0)a!==null&&Ns(a),t.callbackNode=null,t.callbackPriority=0;else if(n=f&-f,t.callbackPriority!==n){if(a!=null&&Ns(a),n===1)t.tag===0?Cl(ao.bind(null,t)):so(ao.bind(null,t)),qs(function(){!(on&6)&&Ja()}),a=null;else{switch(Fs(f)){case 1:a=yo;break;case 4:a=vi;break;case 16:a=go;break;case 536870912:a=Fo;break;default:a=go}a=mu(a,hr.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function hr(t,n){if(ta=-1,$a=0,on&6)throw Error(o(327));var a=t.callbackNode;if(ci()&&t.callbackNode!==a)return null;var f=xo(t,t===_n?Zn:0);if(f===0)return null;if(f&30||f&t.expiredLanes||n)n=Gi(t,f);else{n=f;var I=on;on|=2;var O=$i();(_n!==t||Zn!==n)&&(Ar=null,dr=lr()+500,ca(t,n));do try{Zr();break}catch(de){Va(t,de)}while(1);Wu(),bn.current=O,on=I,zn!==null?n=0:(_n=null,Zn=0,n=ar)}if(n!==0){if(n===2&&(I=Zi(t),I!==0&&(f=I,n=ra(t,I))),n===1)throw a=rr,ca(t,0),po(t,f),cn(t,lr()),a;if(n===6)po(t,f);else{if(I=t.current.alternate,!(f&30)&&!Kl(I)&&(n=Gi(t,f),n===2&&(O=Zi(t),O!==0&&(f=O,n=ra(t,O))),n===1))throw a=rr,ca(t,0),po(t,f),cn(t,lr()),a;switch(t.finishedWork=I,t.finishedLanes=f,n){case 0:case 1:throw Error(o(345));case 2:Lr(t,sr,Ar);break;case 3:if(po(t,f),(f&130023424)===f&&(n=Ha+500-lr(),10<n)){if(xo(t,0)!==0)break;if(I=t.suspendedLanes,(I&f)!==f){xr(),t.pingedLanes|=t.suspendedLanes&I;break}t.timeoutHandle=ps(Lr.bind(null,t,sr,Ar),n);break}Lr(t,sr,Ar);break;case 4:if(po(t,f),(f&4194240)===f)break;for(n=t.eventTimes,I=-1;0<f;){var Z=31-ia(f);O=1<<Z,Z=n[Z],Z>I&&(I=Z),f&=~O}if(f=I,f=lr()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*fr(f/1960))-f,10<f){t.timeoutHandle=ps(Lr.bind(null,t,sr,Ar),f);break}Lr(t,sr,Ar);break;case 5:Lr(t,sr,Ar);break;default:throw Error(o(329))}}}return cn(t,lr()),t.callbackNode===a?hr.bind(null,t):null}function ra(t,n){var a=jr;return t.current.memoizedState.isDehydrated&&(ca(t,n).flags|=256),t=Gi(t,n),t!==2&&(n=sr,sr=a,n!==null&&Pa(n)),t}function Pa(t){sr===null?sr=t:sr.push.apply(sr,t)}function Kl(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var I=a[f],O=I.getSnapshot;I=I.value;try{if(!Qr(O(),I))return!1}catch(Z){return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function po(t,n){for(n&=~Or,n&=~Kr,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-ia(n),f=1<<a;t[a]=-1,n&=~f}}function ao(t){if(on&6)throw Error(o(327));ci();var n=xo(t,0);if(!(n&1))return cn(t,lr()),null;var a=Gi(t,n);if(t.tag!==0&&a===2){var f=Zi(t);f!==0&&(n=f,a=ra(t,f))}if(a===1)throw a=rr,ca(t,0),po(t,n),cn(t,lr()),a;if(a===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Lr(t,sr,Ar),cn(t,lr()),null}function Hi(t,n){var a=on;on|=1;try{return t(n)}finally{on=a,on===0&&(dr=lr()+500,Jt&&Ja())}}function Ra(t){ga!==null&&ga.tag===0&&!(on&6)&&ci();var n=on;on|=1;var a=In.transition,f=Vn;try{if(In.transition=null,Vn=1,t)return t()}finally{Vn=f,In.transition=a,on=n,!(on&6)&&Ja()}}function As(){qn=ua.current,Bn(ua)}function ca(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,wl(a)),zn!==null)for(a=zn.return;a!==null;){var f=a;switch(oi(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ai();break;case 3:Ss(),Bn(Rr),Bn(kr),ws();break;case 5:jl(f);break;case 4:Ss();break;case 13:Bn(vr);break;case 19:Bn(vr);break;case 10:nu(f.type._context);break;case 22:case 23:As()}a=a.return}if(_n=t,zn=t=fi(t.current,null),Zn=qn=n,ar=0,rr=null,Or=Kr=ya=0,sr=jr=null,Fi!==null){for(n=0;n<Fi.length;n++)if(a=Fi[n],f=a.interleaved,f!==null){a.interleaved=null;var I=f.next,O=a.pending;if(O!==null){var Z=O.next;O.next=I,f.next=Z}a.pending=f}Fi=null}return t}function Va(t,n){do{var a=zn;try{if(Wu(),uu.current=ol,qu){for(var f=gr.memoizedState;f!==null;){var I=f.queue;I!==null&&(I.pending=null),f=f.next}qu=!1}if(Ui=0,Vr=Fr=gr=null,lu=!1,li=0,Nn.current=null,a===null||a.return===null){ar=1,rr=n,zn=null;break}e:{var O=t,Z=a.return,de=a,Ie=n;if(n=Zn,de.flags|=32768,Ie!==null&&typeof Ie=="object"&&typeof Ie.then=="function"){var et=Ie,wt=de,Rt=wt.tag;if(!(wt.mode&1)&&(Rt===0||Rt===11||Rt===15)){var Et=wt.alternate;Et?(wt.updateQueue=Et.updateQueue,wt.memoizedState=Et.memoizedState,wt.lanes=Et.lanes):(wt.updateQueue=null,wt.memoizedState=null)}var Qt=Mc(Z);if(Qt!==null){Qt.flags&=-257,Pc(Qt,Z,de,O,n),Qt.mode&1&&pu(O,et,n),n=Qt,Ie=et;var tn=n.updateQueue;if(tn===null){var nn=new Set;nn.add(Ie),n.updateQueue=nn}else tn.add(Ie);break e}else{if(!(n&1)){pu(O,et,n),Vi();break e}Ie=Error(o(426))}}else if(or&&de.mode&1){var _r=Mc(Z);if(_r!==null){!(_r.flags&65536)&&(_r.flags|=256),Pc(_r,Z,de,O,n),Vu(Os(Ie,de));break e}}O=Ie=Os(Ie,de),ar!==4&&(ar=2),jr===null?jr=[O]:jr.push(O),O=Z;do{switch(O.tag){case 3:O.flags|=65536,n&=-n,O.lanes|=n;var Ge=Oc(O,Ie,n);Yu(O,Ge);break e;case 1:de=Ie;var Pe=O.type,Ke=O.stateNode;if(!(O.flags&128)&&(typeof Pe.getDerivedStateFromError=="function"||Ke!==null&&typeof Ke.componentDidCatch=="function"&&(la===null||!la.has(Ke)))){O.flags|=65536,n&=-n,O.lanes|=n;var Ft=Ac(O,de,n);Yu(O,Ft);break e}}O=O.return}while(O!==null)}Nr(a)}catch(rn){n=rn,zn===a&&a!==null&&(zn=a=a.return);continue}break}while(1)}function $i(){var t=bn.current;return bn.current=ol,t===null?ol:t}function Vi(){(ar===0||ar===3||ar===2)&&(ar=4),_n===null||!(ya&268435455)&&!(Kr&268435455)||po(_n,Zn)}function Gi(t,n){var a=on;on|=2;var f=$i();(_n!==t||Zn!==n)&&(Ar=null,ca(t,n));do try{Yn();break}catch(I){Va(t,I)}while(1);if(Wu(),on=a,bn.current=f,zn!==null)throw Error(o(261));return _n=null,Zn=0,ar}function Yn(){for(;zn!==null;)Un(zn)}function Zr(){for(;zn!==null&&!hu();)Un(zn)}function Un(t){var n=Xl(t.alternate,t,qn);t.memoizedProps=t.pendingProps,n===null?Nr(t):zn=n,Nn.current=null}function Nr(t){var n=t;do{var a=n.alternate;if(t=n.return,n.flags&32768){if(a=zt(a,n),a!==null){a.flags&=32767,zn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ar=6,zn=null;return}}else if(a=At(a,n,qn),a!==null){zn=a;return}if(n=n.sibling,n!==null){zn=n;return}zn=n=t}while(n!==null);ar===0&&(ar=5)}function Lr(t,n,a){var f=Vn,I=In.transition;try{In.transition=null,Vn=1,Ga(t,n,a,f)}finally{In.transition=I,Vn=f}return null}function Ga(t,n,a,f){do ci();while(ga!==null);if(on&6)throw Error(o(327));a=t.finishedWork;var I=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var O=a.lanes|a.childLanes;if(ks(t,O),t===_n&&(zn=_n=null,Zn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||fo||(fo=!0,mu(go,function(){return ci(),null})),O=(a.flags&15990)!==0,a.subtreeFlags&15990||O){O=In.transition,In.transition=null;var Z=Vn;Vn=1;var de=on;on|=4,Nn.current=null,$e(t,a),nr(a,t),Il(zu),En=!!_u,zu=_u=null,t.current=a,mr(a,t,I),yu(),on=de,Vn=Z,In.transition=O}else t.current=a;if(fo&&(fo=!1,ga=t,ro=I),O=t.pendingLanes,O===0&&(la=null),Ds(a.stateNode,f),cn(t,lr()),n!==null)for(f=t.onRecoverableError,a=0;a<n.length;a++)I=n[a],f(I.value,{componentStack:I.stack,digest:I.digest});if(Mr)throw Mr=!1,t=Br,Br=null,t;return ro&1&&t.tag!==0&&ci(),O=t.pendingLanes,O&1?t===Do?Ma++:(Ma=0,Do=t):Ma=0,Ja(),null}function ci(){if(ga!==null){var t=Fs(ro),n=In.transition,a=Vn;try{if(In.transition=null,Vn=16>t?16:t,ga===null)var f=!1;else{if(t=ga,ga=null,ro=0,on&6)throw Error(o(331));var I=on;for(on|=4,qe=t.current;qe!==null;){var O=qe,Z=O.child;if(qe.flags&16){var de=O.deletions;if(de!==null){for(var Ie=0;Ie<de.length;Ie++){var et=de[Ie];for(qe=et;qe!==null;){var wt=qe;switch(wt.tag){case 0:case 11:case 15:Xe(8,wt,O)}var Rt=wt.child;if(Rt!==null)Rt.return=wt,qe=Rt;else for(;qe!==null;){wt=qe;var Et=wt.sibling,Qt=wt.return;if(kt(wt),wt===et){qe=null;break}if(Et!==null){Et.return=Qt,qe=Et;break}qe=Qt}}}var tn=O.alternate;if(tn!==null){var nn=tn.child;if(nn!==null){tn.child=null;do{var _r=nn.sibling;nn.sibling=null,nn=_r}while(nn!==null)}}qe=O}}if(O.subtreeFlags&2064&&Z!==null)Z.return=O,qe=Z;else e:for(;qe!==null;){if(O=qe,O.flags&2048)switch(O.tag){case 0:case 11:case 15:Xe(9,O,O.return)}var Ge=O.sibling;if(Ge!==null){Ge.return=O.return,qe=Ge;break e}qe=O.return}}var Pe=t.current;for(qe=Pe;qe!==null;){Z=qe;var Ke=Z.child;if(Z.subtreeFlags&2064&&Ke!==null)Ke.return=Z,qe=Ke;else e:for(Z=Pe;qe!==null;){if(de=qe,de.flags&2048)try{switch(de.tag){case 0:case 11:case 15:yt(9,de)}}catch(rn){ur(de,de.return,rn)}if(de===Z){qe=null;break e}var Ft=de.sibling;if(Ft!==null){Ft.return=de.return,qe=Ft;break e}qe=de.return}}if(on=I,Ja(),ba&&typeof ba.onPostCommitFiberRoot=="function")try{ba.onPostCommitFiberRoot(jo,t)}catch(rn){}f=!0}return f}finally{Vn=a,In.transition=n}}return!1}function Zl(t,n,a){n=Os(a,n),n=Oc(t,n,1),t=si(t,n,1),n=xr(),t!==null&&(La(t,1,n),cn(t,n))}function ur(t,n,a){if(t.tag===3)Zl(t,t,a);else for(;n!==null;){if(n.tag===3){Zl(n,t,a);break}else if(n.tag===1){var f=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(la===null||!la.has(f))){t=Os(a,t),t=Ac(n,t,1),n=si(n,t,1),t=xr(),n!==null&&(La(n,1,t),cn(n,t));break}}n=n.return}}function Yl(t,n,a){var f=t.pingCache;f!==null&&f.delete(n),n=xr(),t.pingedLanes|=t.suspendedLanes&a,_n===t&&(Zn&a)===a&&(ar===4||ar===3&&(Zn&130023424)===Zn&&500>lr()-Ha?ca(t,0):Or|=a),cn(t,n)}function Bc(t,n){n===0&&(t.mode&1?(n=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):n=1);var a=xr();t=uo(t,n),t!==null&&(La(t,n,a),cn(t,a))}function qc(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Bc(t,a)}function ef(t,n){var a=0;switch(t.tag){case 13:var f=t.stateNode,I=t.memoizedState;I!==null&&(a=I.retryLane);break;case 19:f=t.stateNode;break;default:throw Error(o(314))}f!==null&&f.delete(n),Bc(t,a)}var Xl;Xl=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Rr.current)ha=!0;else{if(!(t.lanes&a)&&!(n.flags&128))return ha=!1,He(t,n,a);ha=!!(t.flags&131072)}else ha=!1,or&&n.flags&1048576&&ic(n,Ol,n.index);switch(n.lanes=0,n.tag){case 2:var f=n.type;ke(t,n),t=n.pendingProps;var I=qr(n,kr.current);ms(n,a),I=tl(null,n,f,t,I,a);var O=_l();return n.flags|=1,typeof I=="object"&&I!==null&&typeof I.render=="function"&&I.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,$r(f)?(O=!0,ja(n)):O=!1,n.memoizedState=I.state!==null&&I.state!==void 0?I.state:null,Zu(n),I.updater=au,n.stateNode=I,I._reactInternals=n,Ll(n,f,t,a),n=Wl(null,n,f,!0,O,a)):(n.tag=0,or&&O&&Al(n),sa(null,n,I,a),n=n.child),n;case 16:f=n.elementType;e:{switch(ke(t,n),t=n.pendingProps,I=f._init,f=I(f._payload),n.type=f,I=n.tag=_c(f),t=eo(f,t),I){case 0:n=vu(null,n,f,t,a);break e;case 1:n=jc(null,n,f,t,a);break e;case 11:n=Nc(null,n,f,t,a);break e;case 14:n=Lc(null,n,f,eo(f.type,t),a);break e}throw Error(o(306,f,""))}return n;case 0:return f=n.type,I=n.pendingProps,I=n.elementType===f?I:eo(f,I),vu(t,n,f,I,a);case 1:return f=n.type,I=n.pendingProps,I=n.elementType===f?I:eo(f,I),jc(t,n,f,I,a);case 3:e:{if(u(n),t===null)throw Error(o(387));f=n.pendingProps,O=n.memoizedState,I=O.element,hs(t,n),gs(n,f,null,a);var Z=n.memoizedState;if(f=Z.element,O.isDehydrated)if(O={element:f,isDehydrated:!1,cache:Z.cache,pendingSuspenseBoundaries:Z.pendingSuspenseBoundaries,transitions:Z.transitions},n.updateQueue.baseState=O,n.memoizedState=O,n.flags&256){I=Os(Error(o(423)),n),n=p(t,n,f,a,I);break e}else if(f!==I){I=Os(Error(o(424)),n),n=p(t,n,f,a,I);break e}else for(va=Ye(n.stateNode.containerInfo.firstChild),Aa=n,or=!0,qa=null,a=dc(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(No(),f===I){n=Ue(t,n,a);break e}sa(t,n,f,a)}n=n.child}return n;case 5:return Fl(n),t===null&&Pl(n),f=n.type,I=n.pendingProps,O=t!==null?t.memoizedProps:null,Z=I.children,Ri(f,I)?Z=null:O!==null&&Ri(f,O)&&(n.flags|=32),Fc(t,n),sa(t,n,Z,a),n.child;case 6:return t===null&&Pl(n),null;case 13:return R(t,n,a);case 4:return ui(n,n.stateNode.containerInfo),f=n.pendingProps,t===null?n.child=Es(n,null,f,a):sa(t,n,f,a),n.child;case 11:return f=n.type,I=n.pendingProps,I=n.elementType===f?I:eo(f,I),Nc(t,n,f,I,a);case 7:return sa(t,n,n.pendingProps,a),n.child;case 8:return sa(t,n,n.pendingProps.children,a),n.child;case 12:return sa(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(f=n.type._context,I=n.pendingProps,O=n.memoizedProps,Z=I.value,kn(Gu,f._currentValue),f._currentValue=Z,O!==null)if(Qr(O.value,Z)){if(O.children===I.children&&!Rr.current){n=Ue(t,n,a);break e}}else for(O=n.child,O!==null&&(O.return=n);O!==null;){var de=O.dependencies;if(de!==null){Z=O.child;for(var Ie=de.firstContext;Ie!==null;){if(Ie.context===f){if(O.tag===1){Ie=lo(-1,a&-a),Ie.tag=2;var et=O.updateQueue;if(et!==null){et=et.shared;var wt=et.pending;wt===null?Ie.next=Ie:(Ie.next=wt.next,wt.next=Ie),et.pending=Ie}}O.lanes|=a,Ie=O.alternate,Ie!==null&&(Ie.lanes|=a),Ku(O.return,a,n),de.lanes|=a;break}Ie=Ie.next}}else if(O.tag===10)Z=O.type===n.type?null:O.child;else if(O.tag===18){if(Z=O.return,Z===null)throw Error(o(341));Z.lanes|=a,de=Z.alternate,de!==null&&(de.lanes|=a),Ku(Z,a,n),Z=O.sibling}else Z=O.child;if(Z!==null)Z.return=O;else for(Z=O;Z!==null;){if(Z===n){Z=null;break}if(O=Z.sibling,O!==null){O.return=Z.return,Z=O;break}Z=Z.return}O=Z}sa(t,n,I.children,a),n=n.child}return n;case 9:return I=n.type,f=n.pendingProps.children,ms(n,a),I=Sr(I),f=f(I),n.flags|=1,sa(t,n,f,a),n.child;case 14:return f=n.type,I=eo(f,n.pendingProps),I=eo(f.type,I),Lc(t,n,f,I,a);case 15:return Dc(t,n,n.type,n.pendingProps,a);case 17:return f=n.type,I=n.pendingProps,I=n.elementType===f?I:eo(f,I),ke(t,n),n.tag=1,$r(f)?(t=!0,ja(n)):t=!1,ms(n,a),Is(n,f,I),Ll(n,f,I,a),Wl(null,n,f,!0,t,a);case 19:return De(t,n,a);case 22:return kc(t,n,a)}throw Error(o(156,n.tag))};function mu(t,n){return oa(t,n)}function tf(t,n,a,f){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wa(t,n,a,f){return new tf(t,n,a,f)}function Ql(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _c(t){if(typeof t=="function")return Ql(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===V)return 14}return 2}function fi(t,n){var a=t.alternate;return a===null?(a=Wa(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function sl(t,n,a,f,I,O){var Z=2;if(f=t,typeof t=="function")Ql(t)&&(Z=1);else if(typeof t=="string")Z=5;else e:switch(t){case Y:return Wi(a.children,I,O,n);case re:Z=8,I|=8;break;case ce:return t=Wa(12,a,n,I|2),t.elementType=ce,t.lanes=O,t;case le:return t=Wa(13,a,n,I),t.elementType=le,t.lanes=O,t;case ue:return t=Wa(19,a,n,I),t.elementType=ue,t.lanes=O,t;case z:return ul(a,I,O,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Se:Z=10;break e;case se:Z=9;break e;case Te:Z=11;break e;case V:Z=14;break e;case L:Z=16,f=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return n=Wa(Z,a,n,I),n.elementType=t,n.type=f,n.lanes=O,n}function Wi(t,n,a,f){return t=Wa(7,t,f,n),t.lanes=a,t}function ul(t,n,a,f){return t=Wa(22,t,f,n),t.elementType=z,t.lanes=a,t.stateNode={isHidden:!1},t}function Jl(t,n,a){return t=Wa(6,t,null,n),t.lanes=a,t}function ql(t,n,a){return n=Wa(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Tr(t,n,a,f,I){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gr(0),this.expirationTimes=Gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.identifierPrefix=f,this.onRecoverableError=I,this.mutableSourceEagerHydrationData=null}function er(t,n,a,f,I,O,Z,de,Ie){return t=new Tr(t,n,a,de,Ie),n===1?(n=1,O===!0&&(n|=8)):n=0,O=Wa(3,null,null,n),t.current=O,O.stateNode=t,O.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(O),t}function yr(t,n,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:f==null?null:""+f,children:t,containerInfo:n,implementation:a}}function fa(t){if(!t)return Fa;t=t._reactInternals;e:{if(Na(t)!==t||t.tag!==1)throw Error(o(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if($r(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(t.tag===1){var a=t.type;if($r(a))return io(t,a,n)}return n}function xa(t,n,a,f,I,O,Z,de,Ie){return t=er(a,f,!0,t,I,O,Z,de,Ie),t.context=fa(null),a=t.current,f=xr(),I=na(a),O=lo(f,I),O.callback=n!=null?n:null,si(a,O,I),t.current.lanes=I,La(t,I,f),cn(t,f),t}function vo(t,n,a,f){var I=n.current,O=xr(),Z=na(I);return a=fa(a),n.context===null?n.context=a:n.pendingContext=a,n=lo(O,Z),n.payload={element:t},f=f===void 0?null:f,f!==null&&(n.callback=f),t=si(I,n,Z),t!==null&&(un(t,I,Z,O),ys(t,I,Z)),Z}function di(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zc(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nf(t,n){zc(t,n),(t=t.alternate)&&zc(t,n)}function uf(){return null}var of=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}Uc.prototype.render=rf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));vo(t,n,null,null)},Uc.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ra(function(){vo(null,t,null,null)}),n[Gt]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=xi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<G.length&&n!==0&&n<G[a].priority;a++);G.splice(a,0,t),a===0&&gt(t)}};function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sf(){}function lf(t,n,a,f,I){if(I){if(typeof f=="function"){var O=f;f=function(){var et=di(Z);O.call(et)}}var Z=xa(n,f,t,0,null,!1,!1,"",sf);return t._reactRootContainer=Z,t[Gt]=Z.current,Ai(t.nodeType===8?t.parentNode:t),Ra(),Z}for(;I=t.lastChild;)t.removeChild(I);if(typeof f=="function"){var de=f;f=function(){var et=di(Ie);de.call(et)}}var Ie=er(t,0,!1,null,null,!1,!1,"",sf);return t._reactRootContainer=Ie,t[Gt]=Ie.current,Ai(t.nodeType===8?t.parentNode:t),Ra(function(){vo(n,Ie,a,f)}),Ie}function $c(t,n,a,f,I){var O=a._reactRootContainer;if(O){var Z=O;if(typeof I=="function"){var de=I;I=function(){var Ie=di(Z);de.call(Ie)}}vo(n,Z,t,I)}else Z=lf(a,n,t,I,f);return di(Z)}hi=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=Ka(n.pendingLanes);a!==0&&(Xi(n,a|1),cn(n,lr()),!(on&6)&&(dr=lr()+500,Ja()))}break;case 13:Ra(function(){var f=uo(t,1);if(f!==null){var I=xr();un(f,t,1,I)}}),nf(t,1)}},yi=function(t){if(t.tag===13){var n=uo(t,134217728);if(n!==null){var a=xr();un(n,t,134217728,a)}nf(t,134217728)}},gi=function(t){if(t.tag===13){var n=na(t),a=uo(t,n);if(a!==null){var f=xr();un(a,t,n,f)}nf(t,n)}},xi=function(){return Vn},Qi=function(t,n){var a=Vn;try{return Vn=t,n()}finally{Vn=a}},Wt=function(t,n,a){switch(n){case"input":if(Ee(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var f=a[n];if(f!==t&&f.form===t.form){var I=Ao(f);if(!I)throw Error(o(90));ot(f),Ee(f,I)}}}break;case"textarea":ve(t,a);break;case"select":n=a.value,n!=null&&W(t,!!a.multiple,n,!1)}},$n=Hi,ut=Ra;var cf={usingClientEntryPoint:!1,Events:[Ur,Jr,Ao,ln,Mn,Hi]},ec={findFiberByHostInstance:Dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ff={bundleType:ec.bundleType,version:ec.version,rendererPackageName:ec.rendererPackageName,rendererConfig:ec.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wn(t),t===null?null:t.stateNode},findFiberByHostInstance:ec.findFiberByHostInstance||uf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{jo=Vc.inject(ff),ba=Vc}catch(t){}}c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cf,c.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(n))throw Error(o(200));return yr(t,n,null,a)},c.createRoot=function(t,n){if(!af(t))throw Error(o(299));var a=!1,f="",I=of;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(f=n.identifierPrefix),n.onRecoverableError!==void 0&&(I=n.onRecoverableError)),n=er(t,1,!1,null,null,a,!1,f,I),t[Gt]=n.current,Ai(t.nodeType===8?t.parentNode:t),new rf(n)},c.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=wn(n),t=t===null?null:t.stateNode,t},c.flushSync=function(t){return Ra(t)},c.hydrate=function(t,n,a){if(!Hc(n))throw Error(o(200));return $c(null,t,n,!0,a)},c.hydrateRoot=function(t,n,a){if(!af(t))throw Error(o(405));var f=a!=null&&a.hydratedSources||null,I=!1,O="",Z=of;if(a!=null&&(a.unstable_strictMode===!0&&(I=!0),a.identifierPrefix!==void 0&&(O=a.identifierPrefix),a.onRecoverableError!==void 0&&(Z=a.onRecoverableError)),n=xa(n,null,t,1,a!=null?a:null,I,!1,O,Z),t[Gt]=n.current,Ai(t),f)for(t=0;t<f.length;t++)a=f[t],I=a._getVersion,I=I(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,I]:n.mutableSourceEagerHydrationData.push(a,I);return new Uc(n)},c.render=function(t,n,a){if(!Hc(n))throw Error(o(200));return $c(null,t,n,!1,a)},c.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(o(40));return t._reactRootContainer?(Ra(function(){$c(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1},c.unstable_batchedUpdates=Hi,c.unstable_renderSubtreeIntoContainer=function(t,n,a,f){if(!Hc(a))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return $c(t,n,a,!1,f)},c.version="18.2.0-next-9e3b772b8-20220608"},44478:function(l,c,e){"use strict";var i=e(10422);if(!0)c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;else var s},10422:function(l,c,e){"use strict";function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}i(),l.exports=e(53746)},87593:function(l,c,e){"use strict";e.d(c,{B6:function(){return Le},ql:function(){return dt}});var i=e(50959),s=e(40507),o=e.n(s),r=e(9346),d=e.n(r),m=e(16780),v=e.n(m),y=e(35884),b=e.n(y);function h(){return h=Object.assign||function(Me){for(var Oe=1;Oe<arguments.length;Oe++){var Ee=arguments[Oe];for(var xe in Ee)Object.prototype.hasOwnProperty.call(Ee,xe)&&(Me[xe]=Ee[xe])}return Me},h.apply(this,arguments)}function x(Me,Oe){Me.prototype=Object.create(Oe.prototype),Me.prototype.constructor=Me,E(Me,Oe)}function E(Me,Oe){return E=Object.setPrototypeOf||function(Ee,xe){return Ee.__proto__=xe,Ee},E(Me,Oe)}function w(Me,Oe){if(Me==null)return{};var Ee,xe,q={},$=Object.keys(Me);for(xe=0;xe<$.length;xe++)Oe.indexOf(Ee=$[xe])>=0||(q[Ee]=Me[Ee]);return q}var C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},j={rel:["amphtml","canonical","alternate"]},N={type:["application/ld+json"]},D={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},B=Object.keys(C).map(function(Me){return C[Me]}),M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q=Object.keys(M).reduce(function(Me,Oe){return Me[M[Oe]]=Oe,Me},{}),F=function(Me,Oe){for(var Ee=Me.length-1;Ee>=0;Ee-=1){var xe=Me[Ee];if(Object.prototype.hasOwnProperty.call(xe,Oe))return xe[Oe]}return null},H=function(Me){var Oe=F(Me,C.TITLE),Ee=F(Me,"titleTemplate");if(Array.isArray(Oe)&&(Oe=Oe.join("")),Ee&&Oe)return Ee.replace(/%s/g,function(){return Oe});var xe=F(Me,"defaultTitle");return Oe||xe||void 0},K=function(Me){return F(Me,"onChangeClientState")||function(){}},Y=function(Me,Oe){return Oe.filter(function(Ee){return Ee[Me]!==void 0}).map(function(Ee){return Ee[Me]}).reduce(function(Ee,xe){return h({},Ee,xe)},{})},re=function(Me,Oe){return Oe.filter(function(Ee){return Ee[C.BASE]!==void 0}).map(function(Ee){return Ee[C.BASE]}).reverse().reduce(function(Ee,xe){if(!Ee.length)for(var q=Object.keys(xe),$=0;$<q.length;$+=1){var W=q[$].toLowerCase();if(Me.indexOf(W)!==-1&&xe[W])return Ee.concat(xe)}return Ee},[])},ce=function(Me,Oe,Ee){var xe={};return Ee.filter(function(q){return!!Array.isArray(q[Me])||(q[Me]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+Me+' should be of type "Array". Instead found type "'+typeof q[Me]+'"'),!1)}).map(function(q){return q[Me]}).reverse().reduce(function(q,$){var W={};$.filter(function(Ae){for(var Ze,xt=Object.keys(Ae),Nt=0;Nt<xt.length;Nt+=1){var Tt=xt[Nt],Dt=Tt.toLowerCase();Oe.indexOf(Dt)===-1||Ze==="rel"&&Ae[Ze].toLowerCase()==="canonical"||Dt==="rel"&&Ae[Dt].toLowerCase()==="stylesheet"||(Ze=Dt),Oe.indexOf(Tt)===-1||Tt!=="innerHTML"&&Tt!=="cssText"&&Tt!=="itemprop"||(Ze=Tt)}if(!Ze||!Ae[Ze])return!1;var S=Ae[Ze].toLowerCase();return xe[Ze]||(xe[Ze]={}),W[Ze]||(W[Ze]={}),!xe[Ze][S]&&(W[Ze][S]=!0,!0)}).reverse().forEach(function(Ae){return q.push(Ae)});for(var te=Object.keys(W),ae=0;ae<te.length;ae+=1){var ve=te[ae],Be=h({},xe[ve],W[ve]);xe[ve]=Be}return q},[]).reverse()},Se=function(Me,Oe){if(Array.isArray(Me)&&Me.length){for(var Ee=0;Ee<Me.length;Ee+=1)if(Me[Ee][Oe])return!0}return!1},se=function(Me){return Array.isArray(Me)?Me.join(""):Me},Te=function(Me,Oe){return Array.isArray(Me)?Me.reduce(function(Ee,xe){return function(q,$){for(var W=Object.keys(q),te=0;te<W.length;te+=1)if($[W[te]]&&$[W[te]].includes(q[W[te]]))return!0;return!1}(xe,Oe)?Ee.priority.push(xe):Ee.default.push(xe),Ee},{priority:[],default:[]}):{default:Me}},le=function(Me,Oe){var Ee;return h({},Me,((Ee={})[Oe]=void 0,Ee))},ue=[C.NOSCRIPT,C.SCRIPT,C.STYLE],V=function(Me,Oe){return Oe===void 0&&(Oe=!0),Oe===!1?String(Me):String(Me).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},L=function(Me){return Object.keys(Me).reduce(function(Oe,Ee){var xe=Me[Ee]!==void 0?Ee+'="'+Me[Ee]+'"':""+Ee;return Oe?Oe+" "+xe:xe},"")},z=function(Me,Oe){return Oe===void 0&&(Oe={}),Object.keys(Me).reduce(function(Ee,xe){return Ee[M[xe]||xe]=Me[xe],Ee},Oe)},X=function(Me,Oe){return Oe.map(function(Ee,xe){var q,$=((q={key:xe})["data-rh"]=!0,q);return Object.keys(Ee).forEach(function(W){var te=M[W]||W;te==="innerHTML"||te==="cssText"?$.dangerouslySetInnerHTML={__html:Ee.innerHTML||Ee.cssText}:$[te]=Ee[W]}),i.createElement(Me,$)})},P=function(Me,Oe,Ee){switch(Me){case C.TITLE:return{toComponent:function(){return q=Oe.titleAttributes,($={key:xe=Oe.title})["data-rh"]=!0,W=z(q,$),[i.createElement(C.TITLE,W,xe)];var xe,q,$,W},toString:function(){return function(xe,q,$,W){var te=L($),ae=se(q);return te?"<"+xe+' data-rh="true" '+te+">"+V(ae,W)+"</"+xe+">":"<"+xe+' data-rh="true">'+V(ae,W)+"</"+xe+">"}(Me,Oe.title,Oe.titleAttributes,Ee)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return z(Oe)},toString:function(){return L(Oe)}};default:return{toComponent:function(){return X(Me,Oe)},toString:function(){return function(xe,q,$){return q.reduce(function(W,te){var ae=Object.keys(te).filter(function(Ae){return!(Ae==="innerHTML"||Ae==="cssText")}).reduce(function(Ae,Ze){var xt=te[Ze]===void 0?Ze:Ze+'="'+V(te[Ze],$)+'"';return Ae?Ae+" "+xt:xt},""),ve=te.innerHTML||te.cssText||"",Be=ue.indexOf(xe)===-1;return W+"<"+xe+' data-rh="true" '+ae+(Be?"/>":">"+ve+"</"+xe+">")},"")}(Me,Oe,Ee)}}}},J=function(Me){var Oe=Me.baseTag,Ee=Me.bodyAttributes,xe=Me.encode,q=Me.htmlAttributes,$=Me.noscriptTags,W=Me.styleTags,te=Me.title,ae=te===void 0?"":te,ve=Me.titleAttributes,Be=Me.linkTags,Ae=Me.metaTags,Ze=Me.scriptTags,xt={toComponent:function(){},toString:function(){return""}};if(Me.prioritizeSeoTags){var Nt=function(Tt){var Dt=Tt.linkTags,S=Tt.scriptTags,ie=Tt.encode,Ce=Te(Tt.metaTags,D),_e=Te(Dt,j),be=Te(S,N);return{priorityMethods:{toComponent:function(){return[].concat(X(C.META,Ce.priority),X(C.LINK,_e.priority),X(C.SCRIPT,be.priority))},toString:function(){return P(C.META,Ce.priority,ie)+" "+P(C.LINK,_e.priority,ie)+" "+P(C.SCRIPT,be.priority,ie)}},metaTags:Ce.default,linkTags:_e.default,scriptTags:be.default}}(Me);xt=Nt.priorityMethods,Be=Nt.linkTags,Ae=Nt.metaTags,Ze=Nt.scriptTags}return{priority:xt,base:P(C.BASE,Oe,xe),bodyAttributes:P("bodyAttributes",Ee,xe),htmlAttributes:P("htmlAttributes",q,xe),link:P(C.LINK,Be,xe),meta:P(C.META,Ae,xe),noscript:P(C.NOSCRIPT,$,xe),script:P(C.SCRIPT,Ze,xe),style:P(C.STYLE,W,xe),title:P(C.TITLE,{title:ae,titleAttributes:ve},xe)}},ge=[],We=function(Me,Oe){var Ee=this;Oe===void 0&&(Oe=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(xe){Ee.context.helmet=xe},helmetInstances:{get:function(){return Ee.canUseDOM?ge:Ee.instances},add:function(xe){(Ee.canUseDOM?ge:Ee.instances).push(xe)},remove:function(xe){var q=(Ee.canUseDOM?ge:Ee.instances).indexOf(xe);(Ee.canUseDOM?ge:Ee.instances).splice(q,1)}}},this.context=Me,this.canUseDOM=Oe,Oe||(Me.helmet=J({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},we=i.createContext({}),he=o().shape({setHelmet:o().func,helmetInstances:o().shape({get:o().func,add:o().func,remove:o().func})}),ze=typeof document!="undefined",Le=function(Me){function Oe(Ee){var xe;return(xe=Me.call(this,Ee)||this).helmetData=new We(xe.props.context,Oe.canUseDOM),xe}return x(Oe,Me),Oe.prototype.render=function(){return i.createElement(we.Provider,{value:this.helmetData.value},this.props.children)},Oe}(i.Component);Le.canUseDOM=ze,Le.propTypes={context:o().shape({helmet:o().shape()}),children:o().node.isRequired},Le.defaultProps={context:{}},Le.displayName="HelmetProvider";var Ne=function(Me,Oe){var Ee,xe=document.head||document.querySelector(C.HEAD),q=xe.querySelectorAll(Me+"[data-rh]"),$=[].slice.call(q),W=[];return Oe&&Oe.length&&Oe.forEach(function(te){var ae=document.createElement(Me);for(var ve in te)Object.prototype.hasOwnProperty.call(te,ve)&&(ve==="innerHTML"?ae.innerHTML=te.innerHTML:ve==="cssText"?ae.styleSheet?ae.styleSheet.cssText=te.cssText:ae.appendChild(document.createTextNode(te.cssText)):ae.setAttribute(ve,te[ve]===void 0?"":te[ve]));ae.setAttribute("data-rh","true"),$.some(function(Be,Ae){return Ee=Ae,ae.isEqualNode(Be)})?$.splice(Ee,1):W.push(ae)}),$.forEach(function(te){return te.parentNode.removeChild(te)}),W.forEach(function(te){return xe.appendChild(te)}),{oldTags:$,newTags:W}},_=function(Me,Oe){var Ee=document.getElementsByTagName(Me)[0];if(Ee){for(var xe=Ee.getAttribute("data-rh"),q=xe?xe.split(","):[],$=[].concat(q),W=Object.keys(Oe),te=0;te<W.length;te+=1){var ae=W[te],ve=Oe[ae]||"";Ee.getAttribute(ae)!==ve&&Ee.setAttribute(ae,ve),q.indexOf(ae)===-1&&q.push(ae);var Be=$.indexOf(ae);Be!==-1&&$.splice(Be,1)}for(var Ae=$.length-1;Ae>=0;Ae-=1)Ee.removeAttribute($[Ae]);q.length===$.length?Ee.removeAttribute("data-rh"):Ee.getAttribute("data-rh")!==W.join(",")&&Ee.setAttribute("data-rh",W.join(","))}},pe=function(Me,Oe){var Ee=Me.baseTag,xe=Me.htmlAttributes,q=Me.linkTags,$=Me.metaTags,W=Me.noscriptTags,te=Me.onChangeClientState,ae=Me.scriptTags,ve=Me.styleTags,Be=Me.title,Ae=Me.titleAttributes;_(C.BODY,Me.bodyAttributes),_(C.HTML,xe),function(Tt,Dt){Tt!==void 0&&document.title!==Tt&&(document.title=se(Tt)),_(C.TITLE,Dt)}(Be,Ae);var Ze={baseTag:Ne(C.BASE,Ee),linkTags:Ne(C.LINK,q),metaTags:Ne(C.META,$),noscriptTags:Ne(C.NOSCRIPT,W),scriptTags:Ne(C.SCRIPT,ae),styleTags:Ne(C.STYLE,ve)},xt={},Nt={};Object.keys(Ze).forEach(function(Tt){var Dt=Ze[Tt],S=Dt.newTags,ie=Dt.oldTags;S.length&&(xt[Tt]=S),ie.length&&(Nt[Tt]=Ze[Tt].oldTags)}),Oe&&Oe(),te(Me,xt,Nt)},me=null,Re=function(Me){function Oe(){for(var xe,q=arguments.length,$=new Array(q),W=0;W<q;W++)$[W]=arguments[W];return(xe=Me.call.apply(Me,[this].concat($))||this).rendered=!1,xe}x(Oe,Me);var Ee=Oe.prototype;return Ee.shouldComponentUpdate=function(xe){return!b()(xe,this.props)},Ee.componentDidUpdate=function(){this.emitChange()},Ee.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},Ee.emitChange=function(){var xe,q,$=this.props.context,W=$.setHelmet,te=null,ae=(xe=$.helmetInstances.get().map(function(ve){var Be=h({},ve.props);return delete Be.context,Be}),{baseTag:re(["href"],xe),bodyAttributes:Y("bodyAttributes",xe),defer:F(xe,"defer"),encode:F(xe,"encodeSpecialCharacters"),htmlAttributes:Y("htmlAttributes",xe),linkTags:ce(C.LINK,["rel","href"],xe),metaTags:ce(C.META,["name","charset","http-equiv","property","itemprop"],xe),noscriptTags:ce(C.NOSCRIPT,["innerHTML"],xe),onChangeClientState:K(xe),scriptTags:ce(C.SCRIPT,["src","innerHTML"],xe),styleTags:ce(C.STYLE,["cssText"],xe),title:H(xe),titleAttributes:Y("titleAttributes",xe),prioritizeSeoTags:Se(xe,"prioritizeSeoTags")});Le.canUseDOM?(q=ae,me&&cancelAnimationFrame(me),q.defer?me=requestAnimationFrame(function(){pe(q,function(){me=null})}):(pe(q),me=null)):J&&(te=J(ae)),W(te)},Ee.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},Ee.render=function(){return this.init(),null},Oe}(i.Component);Re.propTypes={context:he.isRequired},Re.displayName="HelmetDispatcher";var ot=["children"],at=["children"],dt=function(Me){function Oe(){return Me.apply(this,arguments)||this}x(Oe,Me);var Ee=Oe.prototype;return Ee.shouldComponentUpdate=function(xe){return!d()(le(this.props,"helmetData"),le(xe,"helmetData"))},Ee.mapNestedChildrenToProps=function(xe,q){if(!q)return null;switch(xe.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:q};case C.STYLE:return{cssText:q};default:throw new Error("<"+xe.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},Ee.flattenArrayTypeChildren=function(xe){var q,$=xe.child,W=xe.arrayTypeChildren;return h({},W,((q={})[$.type]=[].concat(W[$.type]||[],[h({},xe.newChildProps,this.mapNestedChildrenToProps($,xe.nestedChildren))]),q))},Ee.mapObjectTypeChildren=function(xe){var q,$,W=xe.child,te=xe.newProps,ae=xe.newChildProps,ve=xe.nestedChildren;switch(W.type){case C.TITLE:return h({},te,((q={})[W.type]=ve,q.titleAttributes=h({},ae),q));case C.BODY:return h({},te,{bodyAttributes:h({},ae)});case C.HTML:return h({},te,{htmlAttributes:h({},ae)});default:return h({},te,(($={})[W.type]=h({},ae),$))}},Ee.mapArrayTypeChildrenToProps=function(xe,q){var $=h({},q);return Object.keys(xe).forEach(function(W){var te;$=h({},$,((te={})[W]=xe[W],te))}),$},Ee.warnOnInvalidChildren=function(xe,q){return v()(B.some(function($){return xe.type===$}),typeof xe.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+B.join(", ")+" are allowed. Helmet does not support rendering <"+xe.type+"> elements. Refer to our API for more information."),v()(!q||typeof q=="string"||Array.isArray(q)&&!q.some(function($){return typeof $!="string"}),"Helmet expects a string as a child of <"+xe.type+">. Did you forget to wrap your children in braces? ( <"+xe.type+">{``}</"+xe.type+"> ) Refer to our API for more information."),!0},Ee.mapChildrenToProps=function(xe,q){var $=this,W={};return i.Children.forEach(xe,function(te){if(te&&te.props){var ae=te.props,ve=ae.children,Be=w(ae,ot),Ae=Object.keys(Be).reduce(function(xt,Nt){return xt[Q[Nt]||Nt]=Be[Nt],xt},{}),Ze=te.type;switch(typeof Ze=="symbol"?Ze=Ze.toString():$.warnOnInvalidChildren(te,ve),Ze){case C.FRAGMENT:q=$.mapChildrenToProps(ve,q);break;case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:W=$.flattenArrayTypeChildren({child:te,arrayTypeChildren:W,newChildProps:Ae,nestedChildren:ve});break;default:q=$.mapObjectTypeChildren({child:te,newProps:q,newChildProps:Ae,nestedChildren:ve})}}}),this.mapArrayTypeChildrenToProps(W,q)},Ee.render=function(){var xe=this.props,q=xe.children,$=w(xe,at),W=h({},$),te=$.helmetData;return q&&(W=this.mapChildrenToProps(q,W)),!te||te instanceof We||(te=new We(te.context,te.instances)),te?i.createElement(Re,h({},W,{context:te.value,helmetData:void 0})):i.createElement(we.Consumer,null,function(ae){return i.createElement(Re,h({},W,{context:ae}))})},Oe}(i.Component);dt.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string,prioritizeSeoTags:o().bool,helmetData:o().object},dt.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},dt.displayName="Helmet"},20859:function(l,c,e){"use strict";e.d(c,{_y:function(){return b},zt:function(){return y}});var i=e(50959),s=e(37046),o=e.n(s);function r(x){return x.displayName||x.name||"Component"}var d=i.createContext(null),m=d.Consumer,v=d.Provider,y=v,b=d;function h(x,E){var w=E||{},C=w.intlPropName,j=C===void 0?"intl":C,N=w.forwardRef,D=N===void 0?!1:N,B=w.enforceContext,M=B===void 0?!0:B,Q=function(F){return React.createElement(m,null,function(H){var K;M&&invariantIntlContext(H);var Y=(K={},K[j]=H,K);return React.createElement(x,__assign({},F,Y,{ref:D?F.forwardedRef:null}))})};return Q.displayName="injectIntl(".concat(r(x),")"),Q.WrappedComponent=x,D?hoistNonReactStatics(React.forwardRef(function(F,H){return React.createElement(Q,__assign({},F,{forwardedRef:H}))}),x):hoistNonReactStatics(Q,x)}},36946:function(l,c,e){"use strict";e.d(c,{Z:function(){return r}});var i=e(50959),s=e(20859),o=e(53496);function r(){var d=i.useContext(s._y);return(0,o.lq)(d),d}},53496:function(l,c,e){"use strict";e.d(c,{Z0:function(){return m},dt:function(){return v},lq:function(){return d},wU:function(){return y}});var i=e(96583),s=e(50959),o=e(34688),r=e(37363);function d(b){(0,o.kG)(b,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var m=(0,i.pi)((0,i.pi)({},r.Z0),{textComponent:s.Fragment});function v(b){return function(h){return b(s.Children.toArray(h))}}function y(b,h){if(b===h)return!0;if(!b||!h)return!1;var x=Object.keys(b),E=Object.keys(h),w=x.length;if(E.length!==w)return!1;for(var C=0;C<w;C++){var j=x[C];if(b[j]!==h[j]||!Object.prototype.hasOwnProperty.call(h,j))return!1}return!0}},44492:function(l,c,e){"use strict";e.d(c,{F0:function(){return Oe},Fg:function(){return at},Gn:function(){return h},TH:function(){return ge},UO:function(){return _},V$:function(){return me},WU:function(){return pe},fp:function(){return x},j3:function(){return dt},oQ:function(){return P},pC:function(){return Ne},s0:function(){return he}});var i=e(18280),s=e(50959);const o=(0,s.createContext)(null),r=(0,s.createContext)(null),d=(0,s.createContext)({outlet:null,matches:[]});function m($,W){if(!$)throw new Error(W)}function v($,W){if(!$){typeof console!="undefined"&&console.warn(W);try{throw new Error(W)}catch(te){}}}const y={};function b($,W,te){!W&&!y[$]&&(y[$]=!0)}function h($,W){return W===void 0&&(W={}),$.replace(/:(\w+)/g,(te,ae)=>(W[ae]==null&&m(!1),W[ae])).replace(/\/*\*$/,te=>W["*"]==null?"":W["*"].replace(/^\/*/,"/"))}function x($,W,te){te===void 0&&(te="/");let ae=typeof W=="string"?(0,i.cP)(W):W,ve=ue(ae.pathname||"/",te);if(ve==null)return null;let Be=E($);w(Be);let Ae=null;for(let Ze=0;Ae==null&&Ze<Be.length;++Ze)Ae=K(Be[Ze],ve);return Ae}function E($,W,te,ae){return W===void 0&&(W=[]),te===void 0&&(te=[]),ae===void 0&&(ae=""),$.forEach((ve,Be)=>{let Ae={relativePath:ve.path||"",caseSensitive:ve.caseSensitive===!0,childrenIndex:Be,route:ve};Ae.relativePath.startsWith("/")&&(Ae.relativePath.startsWith(ae)||m(!1),Ae.relativePath=Ae.relativePath.slice(ae.length));let Ze=V([ae,Ae.relativePath]),xt=te.concat(Ae);ve.children&&ve.children.length>0&&(ve.index===!0&&m(!1),E(ve.children,W,xt,Ze)),!(ve.path==null&&!ve.index)&&W.push({path:Ze,score:F(Ze,ve.index),routesMeta:xt})}),W}function w($){$.sort((W,te)=>W.score!==te.score?te.score-W.score:H(W.routesMeta.map(ae=>ae.childrenIndex),te.routesMeta.map(ae=>ae.childrenIndex)))}const C=/^:\w+$/,j=3,N=2,D=1,B=10,M=-2,Q=$=>$==="*";function F($,W){let te=$.split("/"),ae=te.length;return te.some(Q)&&(ae+=M),W&&(ae+=N),te.filter(ve=>!Q(ve)).reduce((ve,Be)=>ve+(C.test(Be)?j:Be===""?D:B),ae)}function H($,W){return $.length===W.length&&$.slice(0,-1).every((ae,ve)=>ae===W[ve])?$[$.length-1]-W[W.length-1]:0}function K($,W){let{routesMeta:te}=$,ae={},ve="/",Be=[];for(let Ae=0;Ae<te.length;++Ae){let Ze=te[Ae],xt=Ae===te.length-1,Nt=ve==="/"?W:W.slice(ve.length)||"/",Tt=Y({path:Ze.relativePath,caseSensitive:Ze.caseSensitive,end:xt},Nt);if(!Tt)return null;Object.assign(ae,Tt.params);let Dt=Ze.route;Be.push({params:ae,pathname:V([ve,Tt.pathname]),pathnameBase:L(V([ve,Tt.pathnameBase])),route:Dt}),Tt.pathnameBase!=="/"&&(ve=V([ve,Tt.pathnameBase]))}return Be}function Y($,W){typeof $=="string"&&($={path:$,caseSensitive:!1,end:!0});let[te,ae]=re($.path,$.caseSensitive,$.end),ve=W.match(te);if(!ve)return null;let Be=ve[0],Ae=Be.replace(/(.)\/+$/,"$1"),Ze=ve.slice(1);return{params:ae.reduce((Nt,Tt,Dt)=>{if(Tt==="*"){let S=Ze[Dt]||"";Ae=Be.slice(0,Be.length-S.length).replace(/(.)\/+$/,"$1")}return Nt[Tt]=ce(Ze[Dt]||"",Tt),Nt},{}),pathname:Be,pathnameBase:Ae,pattern:$}}function re($,W,te){W===void 0&&(W=!1),te===void 0&&(te=!0);let ae=[],ve="^"+$.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(Ae,Ze)=>(ae.push(Ze),"([^\\/]+)"));return $.endsWith("*")?(ae.push("*"),ve+=$==="*"||$==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):ve+=te?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(ve,W?void 0:"i"),ae]}function ce($,W){try{return decodeURIComponent($)}catch(te){return $}}function Se($,W){W===void 0&&(W="/");let{pathname:te,search:ae="",hash:ve=""}=typeof $=="string"?(0,i.cP)($):$;return{pathname:te?te.startsWith("/")?te:se(te,W):W,search:z(ae),hash:X(ve)}}function se($,W){let te=W.replace(/\/+$/,"").split("/");return $.split("/").forEach(ve=>{ve===".."?te.length>1&&te.pop():ve!=="."&&te.push(ve)}),te.length>1?te.join("/"):"/"}function Te($,W,te){let ae=typeof $=="string"?(0,i.cP)($):$,ve=$===""||ae.pathname===""?"/":ae.pathname,Be;if(ve==null)Be=te;else{let Ze=W.length-1;if(ve.startsWith("..")){let xt=ve.split("/");for(;xt[0]==="..";)xt.shift(),Ze-=1;ae.pathname=xt.join("/")}Be=Ze>=0?W[Ze]:"/"}let Ae=Se(ae,Be);return ve&&ve!=="/"&&ve.endsWith("/")&&!Ae.pathname.endsWith("/")&&(Ae.pathname+="/"),Ae}function le($){return $===""||$.pathname===""?"/":typeof $=="string"?(0,i.cP)($).pathname:$.pathname}function ue($,W){if(W==="/")return $;if(!$.toLowerCase().startsWith(W.toLowerCase()))return null;let te=$.charAt(W.length);return te&&te!=="/"?null:$.slice(W.length)||"/"}const V=$=>$.join("/").replace(/\/\/+/g,"/"),L=$=>$.replace(/\/+$/,"").replace(/^\/*/,"/"),z=$=>!$||$==="?"?"":$.startsWith("?")?$:"?"+$,X=$=>!$||$==="#"?"":$.startsWith("#")?$:"#"+$;function P($){J()||m(!1);let{basename:W,navigator:te}=(0,s.useContext)(o),{hash:ae,pathname:ve,search:Be}=pe($),Ae=ve;if(W!=="/"){let Ze=le($),xt=Ze!=null&&Ze.endsWith("/");Ae=ve==="/"?W+(xt?"/":""):V([W,ve])}return te.createHref({pathname:Ae,search:Be,hash:ae})}function J(){return(0,s.useContext)(r)!=null}function ge(){return J()||m(!1),(0,s.useContext)(r).location}function We(){return useContext(r).navigationType}function we($){J()||m(!1);let{pathname:W}=ge();return useMemo(()=>Y($,W),[W,$])}function he(){J()||m(!1);let{basename:$,navigator:W}=(0,s.useContext)(o),{matches:te}=(0,s.useContext)(d),{pathname:ae}=ge(),ve=JSON.stringify(te.map(Ze=>Ze.pathnameBase)),Be=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{Be.current=!0}),(0,s.useCallback)(function(Ze,xt){if(xt===void 0&&(xt={}),!Be.current)return;if(typeof Ze=="number"){W.go(Ze);return}let Nt=Te(Ze,JSON.parse(ve),ae);$!=="/"&&(Nt.pathname=V([$,Nt.pathname])),(xt.replace?W.replace:W.push)(Nt,xt.state)},[$,W,ve,ae])}const ze=(0,s.createContext)(null);function Le(){return useContext(ze)}function Ne($){let W=(0,s.useContext)(d).outlet;return W&&(0,s.createElement)(ze.Provider,{value:$},W)}function _(){let{matches:$}=(0,s.useContext)(d),W=$[$.length-1];return W?W.params:{}}function pe($){let{matches:W}=(0,s.useContext)(d),{pathname:te}=ge(),ae=JSON.stringify(W.map(ve=>ve.pathnameBase));return(0,s.useMemo)(()=>Te($,JSON.parse(ae),te),[$,ae,te])}function me($,W){J()||m(!1);let{matches:te}=(0,s.useContext)(d),ae=te[te.length-1],ve=ae?ae.params:{},Be=ae?ae.pathname:"/",Ae=ae?ae.pathnameBase:"/",Ze=ae&&ae.route,xt=ge(),Nt;if(W){var Tt;let Ce=typeof W=="string"?(0,i.cP)(W):W;Ae==="/"||(Tt=Ce.pathname)!=null&&Tt.startsWith(Ae)||m(!1),Nt=Ce}else Nt=xt;let Dt=Nt.pathname||"/",S=Ae==="/"?Dt:Dt.slice(Ae.length)||"/",ie=x($,{pathname:S});return Re(ie&&ie.map(Ce=>Object.assign({},Ce,{params:Object.assign({},ve,Ce.params),pathname:V([Ae,Ce.pathname]),pathnameBase:Ce.pathnameBase==="/"?Ae:V([Ae,Ce.pathnameBase])})),te)}function Re($,W){return W===void 0&&(W=[]),$==null?null:$.reduceRight((te,ae,ve)=>(0,s.createElement)(d.Provider,{children:ae.route.element!==void 0?ae.route.element:te,value:{outlet:te,matches:W.concat($.slice(0,ve+1))}}),null)}function ot($){let{basename:W,children:te,initialEntries:ae,initialIndex:ve}=$,Be=useRef();Be.current==null&&(Be.current=createMemoryHistory({initialEntries:ae,initialIndex:ve}));let Ae=Be.current,[Ze,xt]=useState({action:Ae.action,location:Ae.location});return useLayoutEffect(()=>Ae.listen(xt),[Ae]),createElement(Oe,{basename:W,children:te,location:Ze.location,navigationType:Ze.action,navigator:Ae})}function at($){let{to:W,replace:te,state:ae}=$;J()||m(!1);let ve=he();return(0,s.useEffect)(()=>{ve(W,{replace:te,state:ae})}),null}function dt($){return Ne($.context)}function Me($){m(!1)}function Oe($){let{basename:W="/",children:te=null,location:ae,navigationType:ve=i.aU.Pop,navigator:Be,static:Ae=!1}=$;J()&&m(!1);let Ze=L(W),xt=(0,s.useMemo)(()=>({basename:Ze,navigator:Be,static:Ae}),[Ze,Be,Ae]);typeof ae=="string"&&(ae=(0,i.cP)(ae));let{pathname:Nt="/",search:Tt="",hash:Dt="",state:S=null,key:ie="default"}=ae,Ce=(0,s.useMemo)(()=>{let _e=ue(Nt,Ze);return _e==null?null:{pathname:_e,search:Tt,hash:Dt,state:S,key:ie}},[Ze,Nt,Tt,Dt,S,ie]);return Ce==null?null:(0,s.createElement)(o.Provider,{value:xt},(0,s.createElement)(r.Provider,{children:te,value:{location:Ce,navigationType:ve}}))}function Ee($){let{children:W,location:te}=$;return me(xe(W),te)}function xe($){let W=[];return Children.forEach($,te=>{if(!isValidElement(te))return;if(te.type===Fragment){W.push.apply(W,xe(te.props.children));return}te.type!==Me&&m(!1);let ae={caseSensitive:te.props.caseSensitive,element:te.props.element,index:te.props.index,path:te.props.path};te.props.children&&(ae.children=xe(te.props.children)),W.push(ae)}),W}function q($){return Re($)}},3354:function(l,c,e){"use strict";var i=e(50959),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(y,b,h){var x,E={},w=null,C=null;h!==void 0&&(w=""+h),b.key!==void 0&&(w=""+b.key),b.ref!==void 0&&(C=b.ref);for(x in b)r.call(b,x)&&!m.hasOwnProperty(x)&&(E[x]=b[x]);if(y&&y.defaultProps)for(x in b=y.defaultProps,b)E[x]===void 0&&(E[x]=b[x]);return{$$typeof:s,type:y,key:w,ref:C,props:E,_owner:d.current}}c.Fragment=o,c.jsx=v,c.jsxs=v},95257:function(l,c){"use strict";var e=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),x=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,j={};function N(P,J,ge){this.props=P,this.context=J,this.refs=j,this.updater=ge||w}N.prototype.isReactComponent={},N.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},N.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=N.prototype;function B(P,J,ge){this.props=P,this.context=J,this.refs=j,this.updater=ge||w}var M=B.prototype=new D;M.constructor=B,C(M,N.prototype),M.isPureReactComponent=!0;var Q=Array.isArray,F=Object.prototype.hasOwnProperty,H={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function Y(P,J,ge){var We,we={},he=null,ze=null;if(J!=null)for(We in J.ref!==void 0&&(ze=J.ref),J.key!==void 0&&(he=""+J.key),J)F.call(J,We)&&!K.hasOwnProperty(We)&&(we[We]=J[We]);var Le=arguments.length-2;if(Le===1)we.children=ge;else if(1<Le){for(var Ne=Array(Le),_=0;_<Le;_++)Ne[_]=arguments[_+2];we.children=Ne}if(P&&P.defaultProps)for(We in Le=P.defaultProps,Le)we[We]===void 0&&(we[We]=Le[We]);return{$$typeof:e,type:P,key:he,ref:ze,props:we,_owner:H.current}}function re(P,J){return{$$typeof:e,type:P.type,key:J,ref:P.ref,props:P.props,_owner:P._owner}}function ce(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function Se(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ge){return J[ge]})}var se=/\/+/g;function Te(P,J){return typeof P=="object"&&P!==null&&P.key!=null?Se(""+P.key):J.toString(36)}function le(P,J,ge,We,we){var he=typeof P;(he==="undefined"||he==="boolean")&&(P=null);var ze=!1;if(P===null)ze=!0;else switch(he){case"string":case"number":ze=!0;break;case"object":switch(P.$$typeof){case e:case i:ze=!0}}if(ze)return ze=P,we=we(ze),P=We===""?"."+Te(ze,0):We,Q(we)?(ge="",P!=null&&(ge=P.replace(se,"$&/")+"/"),le(we,J,ge,"",function(_){return _})):we!=null&&(ce(we)&&(we=re(we,ge+(!we.key||ze&&ze.key===we.key?"":(""+we.key).replace(se,"$&/")+"/")+P)),J.push(we)),1;if(ze=0,We=We===""?".":We+":",Q(P))for(var Le=0;Le<P.length;Le++){he=P[Le];var Ne=We+Te(he,Le);ze+=le(he,J,ge,Ne,we)}else if(Ne=E(P),typeof Ne=="function")for(P=Ne.call(P),Le=0;!(he=P.next()).done;)he=he.value,Ne=We+Te(he,Le++),ze+=le(he,J,ge,Ne,we);else if(he==="object")throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ze}function ue(P,J,ge){if(P==null)return P;var We=[],we=0;return le(P,We,"","",function(he){return J.call(ge,he,we++)}),We}function V(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(ge){(P._status===0||P._status===-1)&&(P._status=1,P._result=ge)},function(ge){(P._status===0||P._status===-1)&&(P._status=2,P._result=ge)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var L={current:null},z={transition:null},X={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:z,ReactCurrentOwner:H};c.Children={map:ue,forEach:function(P,J,ge){ue(P,function(){J.apply(this,arguments)},ge)},count:function(P){var J=0;return ue(P,function(){J++}),J},toArray:function(P){return ue(P,function(J){return J})||[]},only:function(P){if(!ce(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},c.Component=N,c.Fragment=s,c.Profiler=r,c.PureComponent=B,c.StrictMode=o,c.Suspense=y,c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,c.cloneElement=function(P,J,ge){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var We=C({},P.props),we=P.key,he=P.ref,ze=P._owner;if(J!=null){if(J.ref!==void 0&&(he=J.ref,ze=H.current),J.key!==void 0&&(we=""+J.key),P.type&&P.type.defaultProps)var Le=P.type.defaultProps;for(Ne in J)F.call(J,Ne)&&!K.hasOwnProperty(Ne)&&(We[Ne]=J[Ne]===void 0&&Le!==void 0?Le[Ne]:J[Ne])}var Ne=arguments.length-2;if(Ne===1)We.children=ge;else if(1<Ne){Le=Array(Ne);for(var _=0;_<Ne;_++)Le[_]=arguments[_+2];We.children=Le}return{$$typeof:e,type:P.type,key:we,ref:he,props:We,_owner:ze}},c.createContext=function(P){return P={$$typeof:m,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:d,_context:P},P.Consumer=P},c.createElement=Y,c.createFactory=function(P){var J=Y.bind(null,P);return J.type=P,J},c.createRef=function(){return{current:null}},c.forwardRef=function(P){return{$$typeof:v,render:P}},c.isValidElement=ce,c.lazy=function(P){return{$$typeof:h,_payload:{_status:-1,_result:P},_init:V}},c.memo=function(P,J){return{$$typeof:b,type:P,compare:J===void 0?null:J}},c.startTransition=function(P){var J=z.transition;z.transition={};try{P()}finally{z.transition=J}},c.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},c.useCallback=function(P,J){return L.current.useCallback(P,J)},c.useContext=function(P){return L.current.useContext(P)},c.useDebugValue=function(){},c.useDeferredValue=function(P){return L.current.useDeferredValue(P)},c.useEffect=function(P,J){return L.current.useEffect(P,J)},c.useId=function(){return L.current.useId()},c.useImperativeHandle=function(P,J,ge){return L.current.useImperativeHandle(P,J,ge)},c.useInsertionEffect=function(P,J){return L.current.useInsertionEffect(P,J)},c.useLayoutEffect=function(P,J){return L.current.useLayoutEffect(P,J)},c.useMemo=function(P,J){return L.current.useMemo(P,J)},c.useReducer=function(P,J,ge){return L.current.useReducer(P,J,ge)},c.useRef=function(P){return L.current.useRef(P)},c.useState=function(P){return L.current.useState(P)},c.useSyncExternalStore=function(P,J,ge){return L.current.useSyncExternalStore(P,J,ge)},c.useTransition=function(){return L.current.useTransition()},c.version="18.2.0"},50959:function(l,c,e){"use strict";l.exports=e(95257)},11527:function(l,c,e){"use strict";l.exports=e(3354)},90250:function(l){var c=function(e){"use strict";var i=Object.prototype,s=i.hasOwnProperty,o=Object.defineProperty||function(L,z,X){L[z]=X.value},r,d=typeof Symbol=="function"?Symbol:{},m=d.iterator||"@@iterator",v=d.asyncIterator||"@@asyncIterator",y=d.toStringTag||"@@toStringTag";function b(L,z,X){return Object.defineProperty(L,z,{value:X,enumerable:!0,configurable:!0,writable:!0}),L[z]}try{b({},"")}catch(L){b=function(z,X,P){return z[X]=P}}function h(L,z,X,P){var J=z&&z.prototype instanceof D?z:D,ge=Object.create(J.prototype),We=new le(P||[]);return o(ge,"_invoke",{value:ce(L,X,We)}),ge}e.wrap=h;function x(L,z,X){try{return{type:"normal",arg:L.call(z,X)}}catch(P){return{type:"throw",arg:P}}}var E="suspendedStart",w="suspendedYield",C="executing",j="completed",N={};function D(){}function B(){}function M(){}var Q={};b(Q,m,function(){return this});var F=Object.getPrototypeOf,H=F&&F(F(ue([])));H&&H!==i&&s.call(H,m)&&(Q=H);var K=M.prototype=D.prototype=Object.create(Q);B.prototype=M,o(K,"constructor",{value:M,configurable:!0}),o(M,"constructor",{value:B,configurable:!0}),B.displayName=b(M,y,"GeneratorFunction");function Y(L){["next","throw","return"].forEach(function(z){b(L,z,function(X){return this._invoke(z,X)})})}e.isGeneratorFunction=function(L){var z=typeof L=="function"&&L.constructor;return z?z===B||(z.displayName||z.name)==="GeneratorFunction":!1},e.mark=function(L){return Object.setPrototypeOf?Object.setPrototypeOf(L,M):(L.__proto__=M,b(L,y,"GeneratorFunction")),L.prototype=Object.create(K),L},e.awrap=function(L){return{__await:L}};function re(L,z){function X(ge,We,we,he){var ze=x(L[ge],L,We);if(ze.type==="throw")he(ze.arg);else{var Le=ze.arg,Ne=Le.value;return Ne&&typeof Ne=="object"&&s.call(Ne,"__await")?z.resolve(Ne.__await).then(function(_){X("next",_,we,he)},function(_){X("throw",_,we,he)}):z.resolve(Ne).then(function(_){Le.value=_,we(Le)},function(_){return X("throw",_,we,he)})}}var P;function J(ge,We){function we(){return new z(function(he,ze){X(ge,We,he,ze)})}return P=P?P.then(we,we):we()}o(this,"_invoke",{value:J})}Y(re.prototype),b(re.prototype,v,function(){return this}),e.AsyncIterator=re,e.async=function(L,z,X,P,J){J===void 0&&(J=Promise);var ge=new re(h(L,z,X,P),J);return e.isGeneratorFunction(z)?ge:ge.next().then(function(We){return We.done?We.value:ge.next()})};function ce(L,z,X){var P=E;return function(ge,We){if(P===C)throw new Error("Generator is already running");if(P===j){if(ge==="throw")throw We;return V()}for(X.method=ge,X.arg=We;;){var we=X.delegate;if(we){var he=Se(we,X);if(he){if(he===N)continue;return he}}if(X.method==="next")X.sent=X._sent=X.arg;else if(X.method==="throw"){if(P===E)throw P=j,X.arg;X.dispatchException(X.arg)}else X.method==="return"&&X.abrupt("return",X.arg);P=C;var ze=x(L,z,X);if(ze.type==="normal"){if(P=X.done?j:w,ze.arg===N)continue;return{value:ze.arg,done:X.done}}else ze.type==="throw"&&(P=j,X.method="throw",X.arg=ze.arg)}}}function Se(L,z){var X=z.method,P=L.iterator[X];if(P===r)return z.delegate=null,X==="throw"&&L.iterator.return&&(z.method="return",z.arg=r,Se(L,z),z.method==="throw")||X!=="return"&&(z.method="throw",z.arg=new TypeError("The iterator does not provide a '"+X+"' method")),N;var J=x(P,L.iterator,z.arg);if(J.type==="throw")return z.method="throw",z.arg=J.arg,z.delegate=null,N;var ge=J.arg;if(!ge)return z.method="throw",z.arg=new TypeError("iterator result is not an object"),z.delegate=null,N;if(ge.done)z[L.resultName]=ge.value,z.next=L.nextLoc,z.method!=="return"&&(z.method="next",z.arg=r);else return ge;return z.delegate=null,N}Y(K),b(K,y,"Generator"),b(K,m,function(){return this}),b(K,"toString",function(){return"[object Generator]"});function se(L){var z={tryLoc:L[0]};1 in L&&(z.catchLoc=L[1]),2 in L&&(z.finallyLoc=L[2],z.afterLoc=L[3]),this.tryEntries.push(z)}function Te(L){var z=L.completion||{};z.type="normal",delete z.arg,L.completion=z}function le(L){this.tryEntries=[{tryLoc:"root"}],L.forEach(se,this),this.reset(!0)}e.keys=function(L){var z=Object(L),X=[];for(var P in z)X.push(P);return X.reverse(),function J(){for(;X.length;){var ge=X.pop();if(ge in z)return J.value=ge,J.done=!1,J}return J.done=!0,J}};function ue(L){if(L){var z=L[m];if(z)return z.call(L);if(typeof L.next=="function")return L;if(!isNaN(L.length)){var X=-1,P=function J(){for(;++X<L.length;)if(s.call(L,X))return J.value=L[X],J.done=!1,J;return J.value=r,J.done=!0,J};return P.next=P}}return{next:V}}e.values=ue;function V(){return{value:r,done:!0}}return le.prototype={constructor:le,reset:function(L){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(Te),!L)for(var z in this)z.charAt(0)==="t"&&s.call(this,z)&&!isNaN(+z.slice(1))&&(this[z]=r)},stop:function(){this.done=!0;var L=this.tryEntries[0],z=L.completion;if(z.type==="throw")throw z.arg;return this.rval},dispatchException:function(L){if(this.done)throw L;var z=this;function X(he,ze){return ge.type="throw",ge.arg=L,z.next=he,ze&&(z.method="next",z.arg=r),!!ze}for(var P=this.tryEntries.length-1;P>=0;--P){var J=this.tryEntries[P],ge=J.completion;if(J.tryLoc==="root")return X("end");if(J.tryLoc<=this.prev){var We=s.call(J,"catchLoc"),we=s.call(J,"finallyLoc");if(We&&we){if(this.prev<J.catchLoc)return X(J.catchLoc,!0);if(this.prev<J.finallyLoc)return X(J.finallyLoc)}else if(We){if(this.prev<J.catchLoc)return X(J.catchLoc,!0)}else if(we){if(this.prev<J.finallyLoc)return X(J.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(L,z){for(var X=this.tryEntries.length-1;X>=0;--X){var P=this.tryEntries[X];if(P.tryLoc<=this.prev&&s.call(P,"finallyLoc")&&this.prev<P.finallyLoc){var J=P;break}}J&&(L==="break"||L==="continue")&&J.tryLoc<=z&&z<=J.finallyLoc&&(J=null);var ge=J?J.completion:{};return ge.type=L,ge.arg=z,J?(this.method="next",this.next=J.finallyLoc,N):this.complete(ge)},complete:function(L,z){if(L.type==="throw")throw L.arg;return L.type==="break"||L.type==="continue"?this.next=L.arg:L.type==="return"?(this.rval=this.arg=L.arg,this.method="return",this.next="end"):L.type==="normal"&&z&&(this.next=z),N},finish:function(L){for(var z=this.tryEntries.length-1;z>=0;--z){var X=this.tryEntries[z];if(X.finallyLoc===L)return this.complete(X.completion,X.afterLoc),Te(X),N}},catch:function(L){for(var z=this.tryEntries.length-1;z>=0;--z){var X=this.tryEntries[z];if(X.tryLoc===L){var P=X.completion;if(P.type==="throw"){var J=P.arg;Te(X)}return J}}throw new Error("illegal catch attempt")},delegateYield:function(L,z,X){return this.delegate={iterator:ue(L),resultName:z,nextLoc:X},this.method==="next"&&(this.arg=r),N}},e}(l.exports);try{regeneratorRuntime=c}catch(e){typeof globalThis=="object"?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}},85568:function(l,c){"use strict";function e(L,z){var X=L.length;L.push(z);e:for(;0<X;){var P=X-1>>>1,J=L[P];if(0<o(J,z))L[P]=z,L[X]=J,X=P;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var z=L[0],X=L.pop();if(X!==z){L[0]=X;e:for(var P=0,J=L.length,ge=J>>>1;P<ge;){var We=2*(P+1)-1,we=L[We],he=We+1,ze=L[he];if(0>o(we,X))he<J&&0>o(ze,we)?(L[P]=ze,L[he]=X,P=he):(L[P]=we,L[We]=X,P=We);else if(he<J&&0>o(ze,X))L[P]=ze,L[he]=X,P=he;else break e}}return z}function o(L,z){var X=L.sortIndex-z.sortIndex;return X!==0?X:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;c.unstable_now=function(){return r.now()}}else{var d=Date,m=d.now();c.unstable_now=function(){return d.now()-m}}var v=[],y=[],b=1,h=null,x=3,E=!1,w=!1,C=!1,j=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(L){for(var z=i(y);z!==null;){if(z.callback===null)s(y);else if(z.startTime<=L)s(y),z.sortIndex=z.expirationTime,e(v,z);else break;z=i(y)}}function M(L){if(C=!1,B(L),!w)if(i(v)!==null)w=!0,ue(Q);else{var z=i(y);z!==null&&V(M,z.startTime-L)}}function Q(L,z){w=!1,C&&(C=!1,N(K),K=-1),E=!0;var X=x;try{for(B(z),h=i(v);h!==null&&(!(h.expirationTime>z)||L&&!ce());){var P=h.callback;if(typeof P=="function"){h.callback=null,x=h.priorityLevel;var J=P(h.expirationTime<=z);z=c.unstable_now(),typeof J=="function"?h.callback=J:h===i(v)&&s(v),B(z)}else s(v);h=i(v)}if(h!==null)var ge=!0;else{var We=i(y);We!==null&&V(M,We.startTime-z),ge=!1}return ge}finally{h=null,x=X,E=!1}}var F=!1,H=null,K=-1,Y=5,re=-1;function ce(){return!(c.unstable_now()-re<Y)}function Se(){if(H!==null){var L=c.unstable_now();re=L;var z=!0;try{z=H(!0,L)}finally{z?se():(F=!1,H=null)}}else F=!1}var se;if(typeof D=="function")se=function(){D(Se)};else if(typeof MessageChannel!="undefined"){var Te=new MessageChannel,le=Te.port2;Te.port1.onmessage=Se,se=function(){le.postMessage(null)}}else se=function(){j(Se,0)};function ue(L){H=L,F||(F=!0,se())}function V(L,z){K=j(function(){L(c.unstable_now())},z)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(L){L.callback=null},c.unstable_continueExecution=function(){w||E||(w=!0,ue(Q))},c.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},c.unstable_getCurrentPriorityLevel=function(){return x},c.unstable_getFirstCallbackNode=function(){return i(v)},c.unstable_next=function(L){switch(x){case 1:case 2:case 3:var z=3;break;default:z=x}var X=x;x=z;try{return L()}finally{x=X}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=x;x=L;try{return z()}finally{x=X}},c.unstable_scheduleCallback=function(L,z,X){var P=c.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,L){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=X+J,L={id:b++,callback:z,priorityLevel:L,startTime:X,expirationTime:J,sortIndex:-1},X>P?(L.sortIndex=X,e(y,L),i(v)===null&&L===i(y)&&(C?(N(K),K=-1):C=!0,V(M,X-P))):(L.sortIndex=J,e(v,L),w||E||(w=!0,ue(Q))),L},c.unstable_shouldYield=ce,c.unstable_wrapCallback=function(L){var z=x;return function(){var X=x;x=z;try{return L.apply(this,arguments)}finally{x=X}}}},22962:function(l,c,e){"use strict";l.exports=e(85568)},96583:function(l,c,e){"use strict";e.d(c,{ZT:function(){return s},_T:function(){return r},ev:function(){return Q},pi:function(){return o}});var i=function(V,L){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(z,X){z.__proto__=X}||function(z,X){for(var P in X)Object.prototype.hasOwnProperty.call(X,P)&&(z[P]=X[P])},i(V,L)};function s(V,L){if(typeof L!="function"&&L!==null)throw new TypeError("Class extends value "+String(L)+" is not a constructor or null");i(V,L);function z(){this.constructor=V}V.prototype=L===null?Object.create(L):(z.prototype=L.prototype,new z)}var o=function(){return o=Object.assign||function(L){for(var z,X=1,P=arguments.length;X<P;X++){z=arguments[X];for(var J in z)Object.prototype.hasOwnProperty.call(z,J)&&(L[J]=z[J])}return L},o.apply(this,arguments)};function r(V,L){var z={};for(var X in V)Object.prototype.hasOwnProperty.call(V,X)&&L.indexOf(X)<0&&(z[X]=V[X]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,X=Object.getOwnPropertySymbols(V);P<X.length;P++)L.indexOf(X[P])<0&&Object.prototype.propertyIsEnumerable.call(V,X[P])&&(z[X[P]]=V[X[P]]);return z}function d(V,L,z,X){var P=arguments.length,J=P<3?L:X===null?X=Object.getOwnPropertyDescriptor(L,z):X,ge;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")J=Reflect.decorate(V,L,z,X);else for(var We=V.length-1;We>=0;We--)(ge=V[We])&&(J=(P<3?ge(J):P>3?ge(L,z,J):ge(L,z))||J);return P>3&&J&&Object.defineProperty(L,z,J),J}function m(V,L){return function(z,X){L(z,X,V)}}function v(V,L,z,X,P,J){function ge(ot){if(ot!==void 0&&typeof ot!="function")throw new TypeError("Function expected");return ot}for(var We=X.kind,we=We==="getter"?"get":We==="setter"?"set":"value",he=!L&&V?X.static?V:V.prototype:null,ze=L||(he?Object.getOwnPropertyDescriptor(he,X.name):{}),Le,Ne=!1,_=z.length-1;_>=0;_--){var pe={};for(var me in X)pe[me]=me==="access"?{}:X[me];for(var me in X.access)pe.access[me]=X.access[me];pe.addInitializer=function(ot){if(Ne)throw new TypeError("Cannot add initializers after decoration has completed");J.push(ge(ot||null))};var Re=(0,z[_])(We==="accessor"?{get:ze.get,set:ze.set}:ze[we],pe);if(We==="accessor"){if(Re===void 0)continue;if(Re===null||typeof Re!="object")throw new TypeError("Object expected");(Le=ge(Re.get))&&(ze.get=Le),(Le=ge(Re.set))&&(ze.set=Le),(Le=ge(Re.init))&&P.push(Le)}else(Le=ge(Re))&&(We==="field"?P.push(Le):ze[we]=Le)}he&&Object.defineProperty(he,X.name,ze),Ne=!0}function y(V,L,z){for(var X=arguments.length>2,P=0;P<L.length;P++)z=X?L[P].call(V,z):L[P].call(V);return X?z:void 0}function b(V){return typeof V=="symbol"?V:"".concat(V)}function h(V,L,z){return typeof L=="symbol"&&(L=L.description?"[".concat(L.description,"]"):""),Object.defineProperty(V,"name",{configurable:!0,value:z?"".concat(z," ",L):L})}function x(V,L){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(V,L)}function E(V,L,z,X){function P(J){return J instanceof z?J:new z(function(ge){ge(J)})}return new(z||(z=Promise))(function(J,ge){function We(ze){try{he(X.next(ze))}catch(Le){ge(Le)}}function we(ze){try{he(X.throw(ze))}catch(Le){ge(Le)}}function he(ze){ze.done?J(ze.value):P(ze.value).then(We,we)}he((X=X.apply(V,L||[])).next())})}function w(V,L){var z={label:0,sent:function(){if(J[0]&1)throw J[1];return J[1]},trys:[],ops:[]},X,P,J,ge;return ge={next:We(0),throw:We(1),return:We(2)},typeof Symbol=="function"&&(ge[Symbol.iterator]=function(){return this}),ge;function We(he){return function(ze){return we([he,ze])}}function we(he){if(X)throw new TypeError("Generator is already executing.");for(;ge&&(ge=0,he[0]&&(z=0)),z;)try{if(X=1,P&&(J=he[0]&2?P.return:he[0]?P.throw||((J=P.return)&&J.call(P),0):P.next)&&!(J=J.call(P,he[1])).done)return J;switch(P=0,J&&(he=[he[0]&2,J.value]),he[0]){case 0:case 1:J=he;break;case 4:return z.label++,{value:he[1],done:!1};case 5:z.label++,P=he[1],he=[0];continue;case 7:he=z.ops.pop(),z.trys.pop();continue;default:if(J=z.trys,!(J=J.length>0&&J[J.length-1])&&(he[0]===6||he[0]===2)){z=0;continue}if(he[0]===3&&(!J||he[1]>J[0]&&he[1]<J[3])){z.label=he[1];break}if(he[0]===6&&z.label<J[1]){z.label=J[1],J=he;break}if(J&&z.label<J[2]){z.label=J[2],z.ops.push(he);break}J[2]&&z.ops.pop(),z.trys.pop();continue}he=L.call(V,z)}catch(ze){he=[6,ze],P=0}finally{X=J=0}if(he[0]&5)throw he[1];return{value:he[0]?he[1]:void 0,done:!0}}}var C=Object.create?function(V,L,z,X){X===void 0&&(X=z);var P=Object.getOwnPropertyDescriptor(L,z);(!P||("get"in P?!L.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return L[z]}}),Object.defineProperty(V,X,P)}:function(V,L,z,X){X===void 0&&(X=z),V[X]=L[z]};function j(V,L){for(var z in V)z!=="default"&&!Object.prototype.hasOwnProperty.call(L,z)&&C(L,V,z)}function N(V){var L=typeof Symbol=="function"&&Symbol.iterator,z=L&&V[L],X=0;if(z)return z.call(V);if(V&&typeof V.length=="number")return{next:function(){return V&&X>=V.length&&(V=void 0),{value:V&&V[X++],done:!V}}};throw new TypeError(L?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(V,L){var z=typeof Symbol=="function"&&V[Symbol.iterator];if(!z)return V;var X=z.call(V),P,J=[],ge;try{for(;(L===void 0||L-- >0)&&!(P=X.next()).done;)J.push(P.value)}catch(We){ge={error:We}}finally{try{P&&!P.done&&(z=X.return)&&z.call(X)}finally{if(ge)throw ge.error}}return J}function B(){for(var V=[],L=0;L<arguments.length;L++)V=V.concat(D(arguments[L]));return V}function M(){for(var V=0,L=0,z=arguments.length;L<z;L++)V+=arguments[L].length;for(var X=Array(V),P=0,L=0;L<z;L++)for(var J=arguments[L],ge=0,We=J.length;ge<We;ge++,P++)X[P]=J[ge];return X}function Q(V,L,z){if(z||arguments.length===2)for(var X=0,P=L.length,J;X<P;X++)(J||!(X in L))&&(J||(J=Array.prototype.slice.call(L,0,X)),J[X]=L[X]);return V.concat(J||Array.prototype.slice.call(L))}function F(V){return this instanceof F?(this.v=V,this):new F(V)}function H(V,L,z){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var X=z.apply(V,L||[]),P,J=[];return P={},ge("next"),ge("throw"),ge("return"),P[Symbol.asyncIterator]=function(){return this},P;function ge(Ne){X[Ne]&&(P[Ne]=function(_){return new Promise(function(pe,me){J.push([Ne,_,pe,me])>1||We(Ne,_)})})}function We(Ne,_){try{we(X[Ne](_))}catch(pe){Le(J[0][3],pe)}}function we(Ne){Ne.value instanceof F?Promise.resolve(Ne.value.v).then(he,ze):Le(J[0][2],Ne)}function he(Ne){We("next",Ne)}function ze(Ne){We("throw",Ne)}function Le(Ne,_){Ne(_),J.shift(),J.length&&We(J[0][0],J[0][1])}}function K(V){var L,z;return L={},X("next"),X("throw",function(P){throw P}),X("return"),L[Symbol.iterator]=function(){return this},L;function X(P,J){L[P]=V[P]?function(ge){return(z=!z)?{value:F(V[P](ge)),done:!1}:J?J(ge):ge}:J}}function Y(V){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var L=V[Symbol.asyncIterator],z;return L?L.call(V):(V=typeof N=="function"?N(V):V[Symbol.iterator](),z={},X("next"),X("throw"),X("return"),z[Symbol.asyncIterator]=function(){return this},z);function X(J){z[J]=V[J]&&function(ge){return new Promise(function(We,we){ge=V[J](ge),P(We,we,ge.done,ge.value)})}}function P(J,ge,We,we){Promise.resolve(we).then(function(he){J({value:he,done:We})},ge)}}function re(V,L){return Object.defineProperty?Object.defineProperty(V,"raw",{value:L}):V.raw=L,V}var ce=Object.create?function(V,L){Object.defineProperty(V,"default",{enumerable:!0,value:L})}:function(V,L){V.default=L};function Se(V){if(V&&V.__esModule)return V;var L={};if(V!=null)for(var z in V)z!=="default"&&Object.prototype.hasOwnProperty.call(V,z)&&C(L,V,z);return ce(L,V),L}function se(V){return V&&V.__esModule?V:{default:V}}function Te(V,L,z,X){if(z==="a"&&!X)throw new TypeError("Private accessor was defined without a getter");if(typeof L=="function"?V!==L||!X:!L.has(V))throw new TypeError("Cannot read private member from an object whose class did not declare it");return z==="m"?X:z==="a"?X.call(V):X?X.value:L.get(V)}function le(V,L,z,X,P){if(X==="m")throw new TypeError("Private method is not writable");if(X==="a"&&!P)throw new TypeError("Private accessor was defined without a setter");if(typeof L=="function"?V!==L||!P:!L.has(V))throw new TypeError("Cannot write private member to an object whose class did not declare it");return X==="a"?P.call(V,z):P?P.value=z:L.set(V,z),z}function ue(V,L){if(L===null||typeof L!="object"&&typeof L!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof V=="function"?L===V:V.has(L)}},57363:function(l){function c(e,i){(i==null||i>e.length)&&(i=e.length);for(var s=0,o=new Array(i);s<i;s++)o[s]=e[s];return o}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},45215:function(l){function c(e){if(Array.isArray(e))return e}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},71977:function(l){function c(i,s,o,r,d,m,v){try{var y=i[m](v),b=y.value}catch(h){o(h);return}y.done?s(b):Promise.resolve(b).then(r,d)}function e(i){return function(){var s=this,o=arguments;return new Promise(function(r,d){var m=i.apply(s,o);function v(b){c(m,r,d,v,y,"next",b)}function y(b){c(m,r,d,v,y,"throw",b)}v(void 0)})}}l.exports=e,l.exports.__esModule=!0,l.exports.default=l.exports},24047:function(l,c,e){var i=e(81493);function s(o,r,d){return r=i(r),r in o?Object.defineProperty(o,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[r]=d,o}l.exports=s,l.exports.__esModule=!0,l.exports.default=l.exports},71507:function(l){function c(e,i){var s=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(s!=null){var o,r,d,m,v=[],y=!0,b=!1;try{if(d=(s=s.call(e)).next,i===0){if(Object(s)!==s)return;y=!1}else for(;!(y=(o=d.call(s)).done)&&(v.push(o.value),v.length!==i);y=!0);}catch(h){b=!0,r=h}finally{try{if(!y&&s.return!=null&&(m=s.return(),Object(m)!==m))return}finally{if(b)throw r}}return v}}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},73195:function(l){function c(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},86378:function(l,c,e){var i=e(24047);function s(r,d){var m=Object.keys(r);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(r);d&&(v=v.filter(function(y){return Object.getOwnPropertyDescriptor(r,y).enumerable})),m.push.apply(m,v)}return m}function o(r){for(var d=1;d<arguments.length;d++){var m=arguments[d]!=null?arguments[d]:{};d%2?s(Object(m),!0).forEach(function(v){i(r,v,m[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(m)):s(Object(m)).forEach(function(v){Object.defineProperty(r,v,Object.getOwnPropertyDescriptor(m,v))})}return r}l.exports=o,l.exports.__esModule=!0,l.exports.default=l.exports},58357:function(l,c,e){var i=e(31077).default;function s(){"use strict";l.exports=s=function(){return o},l.exports.__esModule=!0,l.exports.default=l.exports;var o={},r=Object.prototype,d=r.hasOwnProperty,m=Object.defineProperty||function(ue,V,L){ue[V]=L.value},v=typeof Symbol=="function"?Symbol:{},y=v.iterator||"@@iterator",b=v.asyncIterator||"@@asyncIterator",h=v.toStringTag||"@@toStringTag";function x(ue,V,L){return Object.defineProperty(ue,V,{value:L,enumerable:!0,configurable:!0,writable:!0}),ue[V]}try{x({},"")}catch(ue){x=function(L,z,X){return L[z]=X}}function E(ue,V,L,z){var X=V&&V.prototype instanceof j?V:j,P=Object.create(X.prototype),J=new se(z||[]);return m(P,"_invoke",{value:Y(ue,L,J)}),P}function w(ue,V,L){try{return{type:"normal",arg:ue.call(V,L)}}catch(z){return{type:"throw",arg:z}}}o.wrap=E;var C={};function j(){}function N(){}function D(){}var B={};x(B,y,function(){return this});var M=Object.getPrototypeOf,Q=M&&M(M(Te([])));Q&&Q!==r&&d.call(Q,y)&&(B=Q);var F=D.prototype=j.prototype=Object.create(B);function H(ue){["next","throw","return"].forEach(function(V){x(ue,V,function(L){return this._invoke(V,L)})})}function K(ue,V){function L(X,P,J,ge){var We=w(ue[X],ue,P);if(We.type!=="throw"){var we=We.arg,he=we.value;return he&&i(he)=="object"&&d.call(he,"__await")?V.resolve(he.__await).then(function(ze){L("next",ze,J,ge)},function(ze){L("throw",ze,J,ge)}):V.resolve(he).then(function(ze){we.value=ze,J(we)},function(ze){return L("throw",ze,J,ge)})}ge(We.arg)}var z;m(this,"_invoke",{value:function(P,J){function ge(){return new V(function(We,we){L(P,J,We,we)})}return z=z?z.then(ge,ge):ge()}})}function Y(ue,V,L){var z="suspendedStart";return function(X,P){if(z==="executing")throw new Error("Generator is already running");if(z==="completed"){if(X==="throw")throw P;return le()}for(L.method=X,L.arg=P;;){var J=L.delegate;if(J){var ge=re(J,L);if(ge){if(ge===C)continue;return ge}}if(L.method==="next")L.sent=L._sent=L.arg;else if(L.method==="throw"){if(z==="suspendedStart")throw z="completed",L.arg;L.dispatchException(L.arg)}else L.method==="return"&&L.abrupt("return",L.arg);z="executing";var We=w(ue,V,L);if(We.type==="normal"){if(z=L.done?"completed":"suspendedYield",We.arg===C)continue;return{value:We.arg,done:L.done}}We.type==="throw"&&(z="completed",L.method="throw",L.arg=We.arg)}}}function re(ue,V){var L=V.method,z=ue.iterator[L];if(z===void 0)return V.delegate=null,L==="throw"&&ue.iterator.return&&(V.method="return",V.arg=void 0,re(ue,V),V.method==="throw")||L!=="return"&&(V.method="throw",V.arg=new TypeError("The iterator does not provide a '"+L+"' method")),C;var X=w(z,ue.iterator,V.arg);if(X.type==="throw")return V.method="throw",V.arg=X.arg,V.delegate=null,C;var P=X.arg;return P?P.done?(V[ue.resultName]=P.value,V.next=ue.nextLoc,V.method!=="return"&&(V.method="next",V.arg=void 0),V.delegate=null,C):P:(V.method="throw",V.arg=new TypeError("iterator result is not an object"),V.delegate=null,C)}function ce(ue){var V={tryLoc:ue[0]};1 in ue&&(V.catchLoc=ue[1]),2 in ue&&(V.finallyLoc=ue[2],V.afterLoc=ue[3]),this.tryEntries.push(V)}function Se(ue){var V=ue.completion||{};V.type="normal",delete V.arg,ue.completion=V}function se(ue){this.tryEntries=[{tryLoc:"root"}],ue.forEach(ce,this),this.reset(!0)}function Te(ue){if(ue){var V=ue[y];if(V)return V.call(ue);if(typeof ue.next=="function")return ue;if(!isNaN(ue.length)){var L=-1,z=function X(){for(;++L<ue.length;)if(d.call(ue,L))return X.value=ue[L],X.done=!1,X;return X.value=void 0,X.done=!0,X};return z.next=z}}return{next:le}}function le(){return{value:void 0,done:!0}}return N.prototype=D,m(F,"constructor",{value:D,configurable:!0}),m(D,"constructor",{value:N,configurable:!0}),N.displayName=x(D,h,"GeneratorFunction"),o.isGeneratorFunction=function(ue){var V=typeof ue=="function"&&ue.constructor;return!!V&&(V===N||(V.displayName||V.name)==="GeneratorFunction")},o.mark=function(ue){return Object.setPrototypeOf?Object.setPrototypeOf(ue,D):(ue.__proto__=D,x(ue,h,"GeneratorFunction")),ue.prototype=Object.create(F),ue},o.awrap=function(ue){return{__await:ue}},H(K.prototype),x(K.prototype,b,function(){return this}),o.AsyncIterator=K,o.async=function(ue,V,L,z,X){X===void 0&&(X=Promise);var P=new K(E(ue,V,L,z),X);return o.isGeneratorFunction(V)?P:P.next().then(function(J){return J.done?J.value:P.next()})},H(F),x(F,h,"Generator"),x(F,y,function(){return this}),x(F,"toString",function(){return"[object Generator]"}),o.keys=function(ue){var V=Object(ue),L=[];for(var z in V)L.push(z);return L.reverse(),function X(){for(;L.length;){var P=L.pop();if(P in V)return X.value=P,X.done=!1,X}return X.done=!0,X}},o.values=Te,se.prototype={constructor:se,reset:function(V){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Se),!V)for(var L in this)L.charAt(0)==="t"&&d.call(this,L)&&!isNaN(+L.slice(1))&&(this[L]=void 0)},stop:function(){this.done=!0;var V=this.tryEntries[0].completion;if(V.type==="throw")throw V.arg;return this.rval},dispatchException:function(V){if(this.done)throw V;var L=this;function z(we,he){return J.type="throw",J.arg=V,L.next=we,he&&(L.method="next",L.arg=void 0),!!he}for(var X=this.tryEntries.length-1;X>=0;--X){var P=this.tryEntries[X],J=P.completion;if(P.tryLoc==="root")return z("end");if(P.tryLoc<=this.prev){var ge=d.call(P,"catchLoc"),We=d.call(P,"finallyLoc");if(ge&&We){if(this.prev<P.catchLoc)return z(P.catchLoc,!0);if(this.prev<P.finallyLoc)return z(P.finallyLoc)}else if(ge){if(this.prev<P.catchLoc)return z(P.catchLoc,!0)}else{if(!We)throw new Error("try statement without catch or finally");if(this.prev<P.finallyLoc)return z(P.finallyLoc)}}}},abrupt:function(V,L){for(var z=this.tryEntries.length-1;z>=0;--z){var X=this.tryEntries[z];if(X.tryLoc<=this.prev&&d.call(X,"finallyLoc")&&this.prev<X.finallyLoc){var P=X;break}}P&&(V==="break"||V==="continue")&&P.tryLoc<=L&&L<=P.finallyLoc&&(P=null);var J=P?P.completion:{};return J.type=V,J.arg=L,P?(this.method="next",this.next=P.finallyLoc,C):this.complete(J)},complete:function(V,L){if(V.type==="throw")throw V.arg;return V.type==="break"||V.type==="continue"?this.next=V.arg:V.type==="return"?(this.rval=this.arg=V.arg,this.method="return",this.next="end"):V.type==="normal"&&L&&(this.next=L),C},finish:function(V){for(var L=this.tryEntries.length-1;L>=0;--L){var z=this.tryEntries[L];if(z.finallyLoc===V)return this.complete(z.completion,z.afterLoc),Se(z),C}},catch:function(V){for(var L=this.tryEntries.length-1;L>=0;--L){var z=this.tryEntries[L];if(z.tryLoc===V){var X=z.completion;if(X.type==="throw"){var P=X.arg;Se(z)}return P}}throw new Error("illegal catch attempt")},delegateYield:function(V,L,z){return this.delegate={iterator:Te(V),resultName:L,nextLoc:z},this.method==="next"&&(this.arg=void 0),C}},o}l.exports=s,l.exports.__esModule=!0,l.exports.default=l.exports},30577:function(l,c,e){var i=e(45215),s=e(71507),o=e(93897),r=e(73195);function d(m,v){return i(m)||s(m,v)||o(m,v)||r()}l.exports=d,l.exports.__esModule=!0,l.exports.default=l.exports},8863:function(l,c,e){var i=e(31077).default;function s(o,r){if(i(o)!=="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var m=d.call(o,r||"default");if(i(m)!=="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(o)}l.exports=s,l.exports.__esModule=!0,l.exports.default=l.exports},81493:function(l,c,e){var i=e(31077).default,s=e(8863);function o(r){var d=s(r,"string");return i(d)==="symbol"?d:String(d)}l.exports=o,l.exports.__esModule=!0,l.exports.default=l.exports},31077:function(l){function c(e){return l.exports=c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},l.exports.__esModule=!0,l.exports.default=l.exports,c(e)}l.exports=c,l.exports.__esModule=!0,l.exports.default=l.exports},93897:function(l,c,e){var i=e(57363);function s(o,r){if(o){if(typeof o=="string")return i(o,r);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(o,r)}}l.exports=s,l.exports.__esModule=!0,l.exports.default=l.exports},99046:function(l,c,e){"use strict";e.d(c,{Z:function(){return i}});function i(s){if(Array.isArray(s))return s}},52469:function(l,c,e){"use strict";e.d(c,{Z:function(){return s}});var i=e(79020);function s(o,r){var d=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!d){if(Array.isArray(o)||(d=(0,i.Z)(o))||r&&o&&typeof o.length=="number"){d&&(o=d);var m=0,v=function(){};return{s:v,n:function(){return m>=o.length?{done:!0}:{done:!1,value:o[m++]}},e:function(E){throw E},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var y=!0,b=!1,h;return{s:function(){d=d.call(o)},n:function(){var E=d.next();return y=E.done,E},e:function(E){b=!0,h=E},f:function(){try{!y&&d.return!=null&&d.return()}finally{if(b)throw h}}}}},24255:function(l,c,e){"use strict";e.d(c,{Z:function(){return s}});var i=e(26690);function s(o,r,d){return r=(0,i.Z)(r),r in o?Object.defineProperty(o,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[r]=d,o}},15882:function(l,c,e){"use strict";e.d(c,{Z:function(){return i}});function i(){return i=Object.assign?Object.assign.bind():function(s){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},i.apply(this,arguments)}},52557:function(l,c,e){"use strict";e.d(c,{Z:function(){return i}});function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}},56453:function(l,c,e){"use strict";e.d(c,{Z:function(){return o}});var i=e(24255);function s(r,d){var m=Object.keys(r);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(r);d&&(v=v.filter(function(y){return Object.getOwnPropertyDescriptor(r,y).enumerable})),m.push.apply(m,v)}return m}function o(r){for(var d=1;d<arguments.length;d++){var m=arguments[d]!=null?arguments[d]:{};d%2?s(Object(m),!0).forEach(function(v){(0,i.Z)(r,v,m[v])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(m)):s(Object(m)).forEach(function(v){Object.defineProperty(r,v,Object.getOwnPropertyDescriptor(m,v))})}return r}},30486:function(l,c,e){"use strict";e.d(c,{Z:function(){return s}});function i(o,r){if(o==null)return{};var d={},m=Object.keys(o),v,y;for(y=0;y<m.length;y++)v=m[y],!(r.indexOf(v)>=0)&&(d[v]=o[v]);return d}function s(o,r){if(o==null)return{};var d=i(o,r),m,v;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(o);for(v=0;v<y.length;v++)m=y[v],!(r.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(o,m)&&(d[m]=o[m])}return d}},26690:function(l,c,e){"use strict";e.d(c,{Z:function(){return o}});var i=e(54465);function s(r,d){if((0,i.Z)(r)!=="object"||r===null)return r;var m=r[Symbol.toPrimitive];if(m!==void 0){var v=m.call(r,d||"default");if((0,i.Z)(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(r)}function o(r){var d=s(r,"string");return(0,i.Z)(d)==="symbol"?d:String(d)}},54465:function(l,c,e){"use strict";e.d(c,{Z:function(){return i}});function i(s){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i(s)}},79020:function(l,c,e){"use strict";e.d(c,{Z:function(){return s}});function i(o,r){(r==null||r>o.length)&&(r=o.length);for(var d=0,m=new Array(r);d<r;d++)m[d]=o[d];return m}function s(o,r){if(o){if(typeof o=="string")return i(o,r);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(o,r)}}}},__webpack_module_cache__={};function __webpack_require__(l){var c=__webpack_module_cache__[l];if(c!==void 0)return c.exports;var e=__webpack_module_cache__[l]={exports:{}};return __webpack_modules__[l].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.n=function(l){var c=l&&l.__esModule?function(){return l.default}:function(){return l};return __webpack_require__.d(c,{a:c}),c}}(),function(){var l=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c;__webpack_require__.t=function(e,i){if(i&1&&(e=this(e)),i&8||typeof e=="object"&&e&&(i&4&&e.__esModule||i&16&&typeof e.then=="function"))return e;var s=Object.create(null);__webpack_require__.r(s);var o={};c=c||[null,l({}),l([]),l(l)];for(var r=i&2&&e;typeof r=="object"&&!~c.indexOf(r);r=l(r))Object.getOwnPropertyNames(r).forEach(function(d){o[d]=function(){return e[d]}});return o.default=function(){return e},__webpack_require__.d(s,o),s}}(),function(){__webpack_require__.d=function(l,c){for(var e in c)__webpack_require__.o(c,e)&&!__webpack_require__.o(l,e)&&Object.defineProperty(l,e,{enumerable:!0,get:c[e]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(l){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(c,e){return __webpack_require__.f[e](l,c),c},[]))}}(),function(){__webpack_require__.u=function(l){return""+({80:"Popup__index.md",127:"nm__.pnpm__dumi_2.1.9_iuhcw6voi42zd62qz2bazboeca__node_modules__dumi__dist__client__pages__404",233:"AutoComplate__index.md",249:"Progress__index.md",259:"Select__index.md",282:"Overlay__index.md",360:"nm__.pnpm__dumi_2.1.9_iuhcw6voi42zd62qz2bazboeca__node_modules__dumi__theme-default__layouts__DocLayout__index",386:"Form__index.md",431:"Uploader__index.md",433:"demos",462:"Icon__index.md",544:"Button__index.md",636:"Input__index.md",660:"Calendar__index.md",667:"Message__index.md",683:"Dropdown__index.md",798:"nm__.pnpm__dumi_2.1.9_iuhcw6voi42zd62qz2bazboeca__node_modules__dumi__dist__client__pages__Demo__index",840:"Menu__index.md",904:"Tooltip__index.md",918:"Textarea__index.md",923:"dumi__tmp-production__dumi__theme__ContextWrapper",927:"Radio__index.md",935:"docs__index.md",937:"docs__guide.md"}[l]||l)+"."+{80:"a1ce0b48",127:"9a76f9ea",173:"a9039ab2",233:"557db4f9",249:"d62b3583",251:"a9e27d59",259:"99bd9222",282:"6e85966e",313:"6101c52e",319:"91cf5da7",360:"1143c244",383:"a86e435b",386:"342c8afe",431:"7d327812",433:"01e8ab77",462:"a99bc5f7",544:"8e8d92b9",636:"485f1986",660:"c46f44dd",667:"cc1d2316",683:"e5918fe6",798:"24366f42",840:"016f6419",904:"03c6f8cb",918:"2e280b93",923:"cafe59b6",927:"4fdf983d",935:"0aa09a58",937:"4ad129a0",976:"8e63a389"}[l]+".async.js"}}(),function(){__webpack_require__.miniCssF=function(l){return""+({80:"Popup__index.md",127:"nm__.pnpm__dumi_2.1.9_iuhcw6voi42zd62qz2bazboeca__node_modules__dumi__dist__client__pages__404",233:"AutoComplate__index.md",249:"Progress__index.md",259:"Select__index.md",282:"Overlay__index.md",386:"Form__index.md",431:"Uploader__index.md",433:"demos",462:"Icon__index.md",544:"Button__index.md",636:"Input__index.md",660:"Calendar__index.md",667:"Message__index.md",683:"Dropdown__index.md",798:"nm__.pnpm__dumi_2.1.9_iuhcw6voi42zd62qz2bazboeca__node_modules__dumi__dist__client__pages__Demo__index",840:"Menu__index.md",904:"Tooltip__index.md",918:"Textarea__index.md",923:"dumi__tmp-production__dumi__theme__ContextWrapper",927:"Radio__index.md",935:"docs__index.md",937:"docs__guide.md"}[l]||l)+"."+{80:"ffc024b8",127:"8b85f2d9",173:"54552edb",233:"ffc024b8",249:"ffc024b8",259:"ffc024b8",282:"ffc024b8",313:"0d852f1d",386:"ffc024b8",431:"ffc024b8",433:"0d852f1d",462:"ffc024b8",544:"ffc024b8",636:"ffc024b8",660:"ffc024b8",667:"ffc024b8",683:"ffc024b8",798:"578aa5c0",840:"ffc024b8",904:"ffc024b8",918:"ffc024b8",923:"0d852f1d",927:"ffc024b8",935:"ffc024b8",937:"ffc024b8"}[l]+".chunk.css"}}(),function(){__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(l){if(typeof window=="object")return window}}()}(),function(){__webpack_require__.o=function(l,c){return Object.prototype.hasOwnProperty.call(l,c)}}(),function(){var l={},c="catd:";__webpack_require__.l=function(e,i,s,o){if(l[e]){l[e].push(i);return}var r,d;if(s!==void 0)for(var m=document.getElementsByTagName("script"),v=0;v<m.length;v++){var y=m[v];if(y.getAttribute("src")==e||y.getAttribute("data-webpack")==c+s){r=y;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,__webpack_require__.nc&&r.setAttribute("nonce",__webpack_require__.nc),r.setAttribute("data-webpack",c+s),r.src=e),l[e]=[i];var b=function(x,E){r.onerror=r.onload=null,clearTimeout(h);var w=l[e];if(delete l[e],r.parentNode&&r.parentNode.removeChild(r),w&&w.forEach(function(C){return C(E)}),x)return x(E)},h=setTimeout(b.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=b.bind(null,r.onerror),r.onload=b.bind(null,r.onload),d&&document.head.appendChild(r)}}(),function(){__webpack_require__.r=function(l){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})}}(),function(){__webpack_require__.p="/cat-design/"}(),function(){if(typeof document!="undefined"){var l=function(s,o,r,d,m){var v=document.createElement("link");v.rel="stylesheet",v.type="text/css";var y=function(b){if(v.onerror=v.onload=null,b.type==="load")d();else{var h=b&&(b.type==="load"?"missing":b.type),x=b&&b.target&&b.target.href||o,E=new Error("Loading CSS chunk "+s+` failed.
(`+x+")");E.code="CSS_CHUNK_LOAD_FAILED",E.type=h,E.request=x,v.parentNode.removeChild(v),m(E)}};return v.onerror=v.onload=y,v.href=o,r?r.parentNode.insertBefore(v,r.nextSibling):document.head.appendChild(v),v},c=function(s,o){for(var r=document.getElementsByTagName("link"),d=0;d<r.length;d++){var m=r[d],v=m.getAttribute("data-href")||m.getAttribute("href");if(m.rel==="stylesheet"&&(v===s||v===o))return m}for(var y=document.getElementsByTagName("style"),d=0;d<y.length;d++){var m=y[d],v=m.getAttribute("data-href");if(v===s||v===o)return m}},e=function(s){return new Promise(function(o,r){var d=__webpack_require__.miniCssF(s),m=__webpack_require__.p+d;if(c(d,m))return o();l(s,m,null,o,r)})},i={620:0};__webpack_require__.f.miniCss=function(s,o){var r={80:1,127:1,173:1,233:1,249:1,259:1,282:1,313:1,386:1,431:1,433:1,462:1,544:1,636:1,660:1,667:1,683:1,798:1,840:1,904:1,918:1,923:1,927:1,935:1,937:1};i[s]?o.push(i[s]):i[s]!==0&&r[s]&&o.push(i[s]=e(s).then(function(){i[s]=0},function(d){throw delete i[s],d}))}}}(),function(){var l={620:0};__webpack_require__.f.j=function(i,s){var o=__webpack_require__.o(l,i)?l[i]:void 0;if(o!==0)if(o)s.push(o[2]);else if(i!=313){var r=new Promise(function(y,b){o=l[i]=[y,b]});s.push(o[2]=r);var d=__webpack_require__.p+__webpack_require__.u(i),m=new Error,v=function(y){if(__webpack_require__.o(l,i)&&(o=l[i],o!==0&&(l[i]=void 0),o)){var b=y&&(y.type==="load"?"missing":y.type),h=y&&y.target&&y.target.src;m.message="Loading chunk "+i+` failed.
(`+b+": "+h+")",m.name="ChunkLoadError",m.type=b,m.request=h,o[1](m)}};__webpack_require__.l(d,v,"chunk-"+i,i)}else l[i]=0};var c=function(i,s){var o=s[0],r=s[1],d=s[2],m,v,y=0;if(o.some(function(h){return l[h]!==0})){for(m in r)__webpack_require__.o(r,m)&&(__webpack_require__.m[m]=r[m]);if(d)var b=d(__webpack_require__)}for(i&&i(s);y<o.length;y++)v=o[y],__webpack_require__.o(l,v)&&l[v]&&l[v][0](),l[v]=0},e=self.webpackChunkcatd=self.webpackChunkcatd||[];e.forEach(c.bind(null,0)),e.push=c.bind(null,e.push.bind(e))}(),function(){__webpack_require__.nc=void 0}();var __webpack_exports__={};(function(){"use strict";var l={};__webpack_require__.r(l),__webpack_require__.d(l,{patchRoutes:function(){return bl}});var c={};__webpack_require__.r(c),__webpack_require__.d(c,{i18nProvider:function(){return Js}});var e=__webpack_require__(58357),i=__webpack_require__.n(e),s=__webpack_require__(86378),o=__webpack_require__.n(s),r=__webpack_require__(71977),d=__webpack_require__.n(r),m=__webpack_require__(43316),v=__webpack_require__(69041),y=__webpack_require__(22822),b=__webpack_require__(67432),h=__webpack_require__(58584),x=__webpack_require__(85717),E=__webpack_require__(73927),w=__webpack_require__(73566),C=__webpack_require__(83122),j=__webpack_require__(47233),N=__webpack_require__(28958),D=__webpack_require__(28605),B=__webpack_require__(14905),M=__webpack_require__(65232),Q=__webpack_require__(18134),F=__webpack_require__(8973),H=__webpack_require__(60262),K=__webpack_require__(63504),Y=__webpack_require__(27446),re=__webpack_require__(92754),ce=__webpack_require__(82281),Se=__webpack_require__(42075),se=__webpack_require__(21145),Te=__webpack_require__(28717),le=__webpack_require__(32801),ue=__webpack_require__(96086),V=__webpack_require__(49470),L=__webpack_require__(24212),z=__webpack_require__(40608),X=__webpack_require__(30125),P=__webpack_require__(30148),J=__webpack_require__(13335),ge=__webpack_require__(29703),We=__webpack_require__(14429),we=__webpack_require__(48944),he=__webpack_require__(98723),ze=__webpack_require__(80706),Le=__webpack_require__(16761),Ne=__webpack_require__(199),_=__webpack_require__(32649),pe=__webpack_require__(65611),me=__webpack_require__(47482),Re=__webpack_require__(34651),ot=__webpack_require__(1845),at=__webpack_require__(72159),dt=__webpack_require__(609),Me=__webpack_require__(32183),Oe=__webpack_require__(74658),Ee=__webpack_require__(27814),xe=__webpack_require__(16243),q=__webpack_require__(11743),$=__webpack_require__(29413),W=__webpack_require__(45707),te=__webpack_require__(95596),ae=__webpack_require__(99944),ve=__webpack_require__(62074),Be=__webpack_require__(7311),Ae=__webpack_require__(36313),Ze=__webpack_require__(15887),xt=__webpack_require__(63789),Nt=__webpack_require__(13436),Tt=__webpack_require__(76642),Dt=__webpack_require__(22228),S=__webpack_require__(50920),ie=__webpack_require__(62298),Ce=__webpack_require__(63018),_e=__webpack_require__(63904),be=__webpack_require__(50118),rt=__webpack_require__(10142),lt=__webpack_require__(58475),Ct=__webpack_require__(2256),Wt=__webpack_require__(90883),Bt=__webpack_require__(84217),Mt=__webpack_require__(32271),hn=__webpack_require__(63700),ln=__webpack_require__(4924),Mn=__webpack_require__(22895),$n=__webpack_require__(62715),ut=__webpack_require__(6069),it=__webpack_require__(81929),St=__webpack_require__(24838),Ht=__webpack_require__(40160),en=__webpack_require__(43383),Yt=__webpack_require__(80276),Ln=__webpack_require__(56377),Pn=__webpack_require__(34063),Dn=__webpack_require__(68839),Pr=__webpack_require__(18665),jn=__webpack_require__(35802),zr=__webpack_require__(45512),Ps=__webpack_require__(8584),mo=__webpack_require__(66693),Na=__webpack_require__(32152),ho=__webpack_require__(33001),ko=__webpack_require__(47262),Rs=__webpack_require__(86327),wn=__webpack_require__(35418),pi=__webpack_require__(90843),oa=__webpack_require__(15438),Ns=__webpack_require__(20348),hu=__webpack_require__(53350),yu=__webpack_require__(95187),lr=__webpack_require__(92965),Ki=__webpack_require__(51125),yo=__webpack_require__(63681),vi=__webpack_require__(68652),go=__webpack_require__(55377),Ls=__webpack_require__(94571),Fo=__webpack_require__(93908),jo=__webpack_require__(25397),ba=__webpack_require__(44260),Ds=__webpack_require__(97864),ia=__webpack_require__(91609),gu=__webpack_require__(33358),ll=__webpack_require__(5855),Bo=__webpack_require__(5037),Ia=__webpack_require__(38804),mi=__webpack_require__(20700),Ka=__webpack_require__(31949),xo=__webpack_require__(4607),xu=__webpack_require__(65689),bu=__webpack_require__(99040),Zi=__webpack_require__(28309),Yi=__webpack_require__(62015),Gr=__webpack_require__(20106),La=__webpack_require__(76086),ks=__webpack_require__(13239),Xi=__webpack_require__(61306),Vn=__webpack_require__(42164),Fs=__webpack_require__(78165),hi=__webpack_require__(44732),yi=__webpack_require__(86731),gi=__webpack_require__(86767),xi=__webpack_require__(60419),Qi=__webpack_require__(80031),bo=__webpack_require__(74797),oo=__webpack_require__(65257),Za=__webpack_require__(88990),da=__webpack_require__(40736),Ya=__webpack_require__(85081),k=__webpack_require__(75737),ee=__webpack_require__(43270),G=__webpack_require__(49930),ye=__webpack_require__(38141),je=__webpack_require__(10429),tt=__webpack_require__(60862),pt=__webpack_require__(7719),gt=__webpack_require__(66505),Ut=__webpack_require__(62616),Kt=__webpack_require__(4456),sn=__webpack_require__(28763),fn=__webpack_require__(19020),an=__webpack_require__(26515),pn=__webpack_require__(48585),En=__webpack_require__(71809),Fn=__webpack_require__(76081),ir=__webpack_require__(23901),br=__webpack_require__(13985),Ea=__webpack_require__(73584),Yr=__webpack_require__(17517),_o=__webpack_require__(89848),Xr=__webpack_require__(51360),Io=__webpack_require__(66875),zo=__webpack_require__(1906),Sa=__webpack_require__(24569),bi=__webpack_require__(256),Uo=__webpack_require__(20911),tc=__webpack_require__(98859),wa=__webpack_require__(43191),Ii=__webpack_require__(43392),Iu=__webpack_require__(43777),Ji=__webpack_require__(15010),Eu=__webpack_require__(3688),Su=__webpack_require__(74625),wu=__webpack_require__(90592),qi=__webpack_require__(96219),js=__webpack_require__(56308),cl=__webpack_require__(61410),nc=__webpack_require__(31827),fl=__webpack_require__(68215),Bs=__webpack_require__(51704),_s=__webpack_require__(28555),rc=__webpack_require__(24714),dl=__webpack_require__(99740),ac=__webpack_require__(40690),pl=__webpack_require__(6353),oc=__webpack_require__(90250),es=__webpack_require__(24255),Ca=__webpack_require__(56453),Cu=__webpack_require__(52469),vl=__webpack_require__(99046);function Tu(Fe,Je){var Ye=Fe==null?null:typeof Symbol!="undefined"&&Fe[Symbol.iterator]||Fe["@@iterator"];if(Ye!=null){var Qe,ht,vt,_t,Gt=[],gn=!0,Er=!1;try{if(vt=(Ye=Ye.call(Fe)).next,Je===0){if(Object(Ye)!==Ye)return;gn=!1}else for(;!(gn=(Qe=vt.call(Ye)).done)&&(Gt.push(Qe.value),Gt.length!==Je);gn=!0);}catch(On){Er=!0,ht=On}finally{try{if(!gn&&Ye.return!=null&&(_t=Ye.return(),Object(_t)!==_t))return}finally{if(Er)throw ht}}return Gt}}var zs=__webpack_require__(79020),Ou=__webpack_require__(52557);function Us(Fe,Je){return(0,vl.Z)(Fe)||Tu(Fe,Je)||(0,zs.Z)(Fe,Je)||(0,Ou.Z)()}var qt=__webpack_require__(50959),Au=__webpack_require__(87593),Ei=__webpack_require__(44478),Ta=__webpack_require__(44492),Eo=__webpack_require__(2386),ml=__webpack_require__(30486),hl=__webpack_require__(15882),Mu=__webpack_require__(52155),yl=["redirect"];function ts(Fe){var Je=Fe.routesById,Ye=Fe.parentId,Qe=Fe.routeComponents;return Object.keys(Je).filter(function(ht){return Je[ht].parentId===Ye}).map(function(ht){var vt=gl((0,Ca.Z)({route:Je[ht],routeComponent:Qe[ht],loadingComponent:Fe.loadingComponent,reactRouter5Compat:Fe.reactRouter5Compat},Fe.reactRouter5Compat&&{hasChildren:Object.keys(Je).filter(function(Gt){return Je[Gt].parentId===ht}).length>0})),_t=ts({routesById:Je,routeComponents:Qe,parentId:vt.id,loadingComponent:Fe.loadingComponent,reactRouter5Compat:Fe.reactRouter5Compat});return _t.length>0&&(vt.children=_t,vt.routes=_t),vt})}function Ho(Fe){var Je=(0,Ta.UO)(),Ye=(0,Ca.Z)((0,Ca.Z)({},Fe),{},{to:(0,Ta.Gn)(Fe.to,Je)});return qt.createElement(Ta.Fg,(0,hl.Z)({replace:!0},Ye))}function gl(Fe){var Je=Fe.route,Ye=Je.redirect,Qe=(0,ml.Z)(Je,yl),ht=Fe.reactRouter5Compat?$s:ns;return(0,Ca.Z)({element:Ye?qt.createElement(Ho,{to:Ye}):qt.createElement(Mu.X.Provider,{value:{route:Fe.route}},qt.createElement(ht,{loader:qt.memo(Fe.routeComponent),loadingComponent:Fe.loadingComponent||Hs,hasChildren:Fe.hasChildren}))},Qe)}function Hs(){return qt.createElement("div",null)}function $s(Fe){var Je=(0,Mu.Q)(),Ye=Je.route,Qe=(0,Eo.Ov)(),ht=Qe.history,vt=Qe.clientRoutes,_t=(0,Ta.UO)(),Gt={params:_t,isExact:!0,path:Ye.path,url:ht.location.pathname},gn=Fe.loader;return qt.createElement(qt.Suspense,{fallback:qt.createElement(Fe.loadingComponent,null)},qt.createElement(gn,{location:ht.location,match:Gt,history:ht,params:_t,route:Ye,routes:vt},Fe.hasChildren&&qt.createElement(Ta.j3,null)))}function ns(Fe){var Je=Fe.loader;return qt.createElement(qt.Suspense,{fallback:qt.createElement(Fe.loadingComponent,null)},qt.createElement(Je,null))}var rs=null;function Si(){return rs}function $o(Fe){var Je=Fe.history,Ye=qt.useState({action:Je.action,location:Je.location}),Qe=Us(Ye,2),ht=Qe[0],vt=Qe[1];return(0,qt.useLayoutEffect)(function(){return Je.listen(vt)},[Je]),(0,qt.useLayoutEffect)(function(){function _t(Gt){Fe.pluginManager.applyPlugins({key:"onRouteChange",type:"event",args:{routes:Fe.routes,clientRoutes:Fe.clientRoutes,location:Gt.location,action:Gt.action,basename:Fe.basename}})}Je.listen(_t),_t({location:ht.location,action:ht.action})},[Je,Fe.routes,Fe.clientRoutes]),qt.createElement(Ta.F0,{navigator:Je,location:ht.location,basename:Fe.basename},Fe.children)}function as(){var Fe=(0,Eo.Ov)(),Je=Fe.clientRoutes;return(0,Ta.V$)(Je)}var Pu=["innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","rootContainer"],os=function(Je,Ye){var Qe=Je.basename||"/",ht=ts({routesById:Je.routes,routeComponents:Je.routeComponents,loadingComponent:Je.loadingComponent,reactRouter5Compat:Je.reactRouter5Compat});Je.pluginManager.applyPlugins({key:"patchClientRoutes",type:"event",args:{routes:ht}});var vt=qt.createElement($o,{basename:Qe,pluginManager:Je.pluginManager,routes:Je.routes,clientRoutes:ht,history:Je.history},Ye),_t=(0,Cu.Z)(Pu),Gt;try{for(_t.s();!(Gt=_t.n()).done;){var gn=Gt.value;vt=Je.pluginManager.applyPlugins({type:"modify",key:gn,initialValue:vt,args:{routes:Je.routes,history:Je.history,plugin:Je.pluginManager}})}}catch(On){_t.e(On)}finally{_t.f()}var Er=function(){var Dr=(0,qt.useState)({}),Ur=Us(Dr,2),Jr=Ur[0],Ao=Ur[1],Wr=(0,qt.useState)(window.__UMI_LOADER_DATA__||{}),Hr=Us(Wr,2),pr=Hr[0],Bn=Hr[1],kn=(0,qt.useCallback)(function(Fa,kr){var Rr,Mo=(((Rr=(0,Ta.fp)(ht,Fa,Qe))===null||Rr===void 0?void 0:Rr.map(function(qr){return qr.route.id}))||[]).filter(Boolean);Mo.forEach(function(qr){var $r,ai,Ni=window.__umi_manifest__;if(Ni){var io=qr.replace(/[\/\-]/g,"_"),ja="preload-".concat(io,".js");if(!document.getElementById(ja)){var Hu=Object.keys(Ni).filter(function(Jt){return Jt.startsWith(io+".")});Hu.forEach(function(Jt){if(!/\.(js|css)$/.test(Jt))throw Error("preload not support ".concat(Jt," file"));var Kn=Ni[Jt],so=document.createElement("link");so.rel="preload",so.as="style",Jt.endsWith(".js")&&(so.as="script",so.id=ja),Je.runtimePublicPath&&(Kn=Kn.replace(new RegExp("^".concat(Je.publicPath)),window.publicPath)),so.href=Kn,document.head.appendChild(so)})}}!kr&&($r=Je.routes[qr])!==null&&$r!==void 0&&$r.hasServerLoader&&fetch("/__serverLoader?route="+qr).then(function(Jt){return Jt.json()}).then(function(Jt){qt.startTransition(function(){Bn(function(Kn){return(0,Ca.Z)((0,Ca.Z)({},Kn),{},(0,es.Z)({},qr,Jt))})})}).catch(console.error);var Ba=(ai=Je.routes[qr])===null||ai===void 0?void 0:ai.clientLoader;Ba&&!Jr[qr]&&Ba().then(function(Jt){Ao(function(Kn){return(0,Ca.Z)((0,Ca.Z)({},Kn),{},(0,es.Z)({},qr,Jt))})})})},[Jr]);return(0,qt.useEffect)(function(){return kn(window.location.pathname,!0),Je.history.listen(function(Fa){kn(Fa.location.pathname)})},[]),(0,qt.useLayoutEffect)(function(){typeof Je.callback=="function"&&Je.callback()},[]),qt.createElement(Au.B6,{context:{}},qt.createElement(Eo.Il.Provider,{value:{routes:Je.routes,routeComponents:Je.routeComponents,clientRoutes:ht,pluginManager:Je.pluginManager,rootElement:Je.rootElement,basename:Qe,clientLoaderData:Jr,serverLoaderData:pr,preloadRoute:kn,history:Je.history}},vt))};return Er};function Vs(Fe){var Je=Fe.rootElement||document.getElementById("root"),Ye=os(Fe,qt.createElement(as,null));if(Fe.components)return Ye;if(Fe.hydrate){Ei.hydrateRoot(Je,qt.createElement(Ye,null));return}if(Ei.createRoot){rs=Ei.createRoot(Je),rs.render(qt.createElement(Ye,null));return}Ei.render(qt.createElement(Ye,null),Je)}function is(){return So.apply(this,arguments)}function So(){return So=d()(i()().mark(function Fe(){var Je;return i()().wrap(function(Qe){for(;;)switch(Qe.prev=Qe.next){case 0:return Je={404:{id:"404",path:"*",parentId:"DocLayout"},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"docs/guide":{path:"guide",id:"docs/guide",parentId:"DocLayout"},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"components/AutoComplate/index":{id:"components/AutoComplate/index",path:"components/auto-complate",parentId:"DocLayout"},"components/Button/index":{id:"components/Button/index",path:"components/button",parentId:"DocLayout"},"components/Calendar/index":{id:"components/Calendar/index",path:"components/calendar",parentId:"DocLayout"},"components/Dropdown/index":{id:"components/Dropdown/index",path:"components/dropdown",parentId:"DocLayout"},"components/Form/index":{id:"components/Form/index",path:"components/form",parentId:"DocLayout"},"components/Icon/index":{id:"components/Icon/index",path:"components/icon",parentId:"DocLayout"},"components/Input/index":{id:"components/Input/index",path:"components/input",parentId:"DocLayout"},"components/Menu/index":{id:"components/Menu/index",path:"components/menu",parentId:"DocLayout"},"components/Message/index":{id:"components/Message/index",path:"components/message",parentId:"DocLayout"},"components/Overlay/index":{id:"components/Overlay/index",path:"components/overlay",parentId:"DocLayout"},"components/Popup/index":{id:"components/Popup/index",path:"components/popup",parentId:"DocLayout"},"components/Progress/index":{id:"components/Progress/index",path:"components/progress",parentId:"DocLayout"},"components/Radio/index":{id:"components/Radio/index",path:"components/radio",parentId:"DocLayout"},"components/Select/index":{id:"components/Select/index",path:"components/select",parentId:"DocLayout"},"components/Textarea/index":{id:"components/Textarea/index",path:"components/textarea",parentId:"DocLayout"},"components/Tooltip/index":{id:"components/Tooltip/index",path:"components/tooltip",parentId:"DocLayout"},"components/Uploader/index":{id:"components/Uploader/index",path:"components/uploader",parentId:"DocLayout"},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"dumi-context-layout",prerender:!1}},Qe.abrupt("return",{routes:Je,routeComponents:{404:qt.lazy(function(){return __webpack_require__.e(127).then(__webpack_require__.bind(__webpack_require__,68946))}),"dumi-context-layout":qt.lazy(function(){return Promise.all([__webpack_require__.e(976),__webpack_require__.e(383),__webpack_require__.e(923)]).then(__webpack_require__.bind(__webpack_require__,52693))}),DocLayout:qt.lazy(function(){return Promise.all([__webpack_require__.e(173),__webpack_require__.e(360)]).then(__webpack_require__.bind(__webpack_require__,87077))}),"docs/guide":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(937)]).then(__webpack_require__.bind(__webpack_require__,37693))}),"docs/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(935)]).then(__webpack_require__.bind(__webpack_require__,46051))}),"components/AutoComplate/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(233)]).then(__webpack_require__.bind(__webpack_require__,80614))}),"components/Button/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(544)]).then(__webpack_require__.bind(__webpack_require__,30509))}),"components/Calendar/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(660)]).then(__webpack_require__.bind(__webpack_require__,66978))}),"components/Dropdown/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(683)]).then(__webpack_require__.bind(__webpack_require__,88355))}),"components/Form/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(386)]).then(__webpack_require__.bind(__webpack_require__,20520))}),"components/Icon/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(462)]).then(__webpack_require__.bind(__webpack_require__,66343))}),"components/Input/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(636)]).then(__webpack_require__.bind(__webpack_require__,13625))}),"components/Menu/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(840)]).then(__webpack_require__.bind(__webpack_require__,13354))}),"components/Message/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(667)]).then(__webpack_require__.bind(__webpack_require__,80140))}),"components/Overlay/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(282)]).then(__webpack_require__.bind(__webpack_require__,47976))}),"components/Popup/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(80)]).then(__webpack_require__.bind(__webpack_require__,3262))}),"components/Progress/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(249)]).then(__webpack_require__.bind(__webpack_require__,97986))}),"components/Radio/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(927)]).then(__webpack_require__.bind(__webpack_require__,29642))}),"components/Select/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(259)]).then(__webpack_require__.bind(__webpack_require__,31703))}),"components/Textarea/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(918)]).then(__webpack_require__.bind(__webpack_require__,55655))}),"components/Tooltip/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(904)]).then(__webpack_require__.bind(__webpack_require__,17641))}),"components/Uploader/index":qt.lazy(function(){return Promise.all([__webpack_require__.e(319),__webpack_require__.e(431)]).then(__webpack_require__.bind(__webpack_require__,51744))}),"demo-render":qt.lazy(function(){return __webpack_require__.e(798).then(__webpack_require__.bind(__webpack_require__,39242))})}});case 2:case"end":return Qe.stop()}},Fe)})),So.apply(this,arguments)}var Da=__webpack_require__(35207),xl=__webpack_require__(67251),ss=__webpack_require__.n(xl),bl=function(Je){var Ye=Je.routes;Object.values(Ye).forEach(function(Qe){if(Da.C3[Qe.id]){var ht,vt;if((ht=Qe.meta)!==null&&ht!==void 0&&(vt=ht.frontmatter)!==null&&vt!==void 0&&vt.debug||Da.C3[Qe.id].frontmatter.debug)delete Ye[Qe.id];else{var _t;Qe.meta=ss()(Qe.meta,Da.C3[Qe.id]),Qe.meta.tabs=(_t=Qe.meta.tabs)===null||_t===void 0?void 0:_t.map(function(Gt){var gn={frontmatter:{title:Da.eA[Gt].title},toc:[],texts:[]};return o()(o()({},Da.eA[Gt]),{},{meta:Da.C3[Gt]||gn})})}}})},Ru=__webpack_require__(30577),wo=__webpack_require__.n(Ru),Vo=__webpack_require__(79864),Ir=__webpack_require__(37363),Gn=__webpack_require__(96583),us=__webpack_require__(20859),Go=__webpack_require__(53496),Nu=__webpack_require__(34688),wi=__webpack_require__(33712),Wn=__webpack_require__(89375),Lu=__webpack_require__(29585);function Qr(Fe,Je){return Object.keys(Fe).reduce(function(Ye,Qe){return Ye[Qe]=(0,Gn.pi)({timeZone:Je},Fe[Qe]),Ye},{})}function Wo(Fe,Je){var Ye=Object.keys((0,Gn.pi)((0,Gn.pi)({},Fe),Je));return Ye.reduce(function(Qe,ht){return Qe[ht]=(0,Gn.pi)((0,Gn.pi)({},Fe[ht]||{}),Je[ht]||{}),Qe},{})}function Gs(Fe,Je){if(!Je)return Fe;var Ye=wi.C.formats;return(0,Gn.pi)((0,Gn.pi)((0,Gn.pi)({},Ye),Fe),{date:Wo(Qr(Ye.date,Je),Qr(Fe.date||{},Je)),time:Wo(Qr(Ye.time,Je),Qr(Fe.time||{},Je))})}var Ko=function(Fe,Je,Ye,Qe,ht){var vt=Fe.locale,_t=Fe.formats,Gt=Fe.messages,gn=Fe.defaultLocale,Er=Fe.defaultFormats,On=Fe.fallbackOnEmptyString,Dr=Fe.onError,Ur=Fe.timeZone,Jr=Fe.defaultRichTextElements;Ye===void 0&&(Ye={id:""});var Ao=Ye.id,Wr=Ye.defaultMessage;(0,Nu.kG)(!!Ao,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var Hr=String(Ao),pr=Gt&&Object.prototype.hasOwnProperty.call(Gt,Hr)&&Gt[Hr];if(Array.isArray(pr)&&pr.length===1&&pr[0].type===Lu.wD.literal)return pr[0].value;if(!Qe&&pr&&typeof pr=="string"&&!Jr)return pr.replace(/'\{(.*?)\}'/gi,"{$1}");if(Qe=(0,Gn.pi)((0,Gn.pi)({},Jr),Qe||{}),_t=Gs(_t,Ur),Er=Gs(Er,Ur),!pr){if(On===!1&&pr==="")return pr;if((!Wr||vt&&vt.toLowerCase()!==gn.toLowerCase())&&Dr(new Wn.$6(Ye,vt)),Wr)try{var Bn=Je.getMessageFormat(Wr,gn,Er,ht);return Bn.format(Qe)}catch(kn){return Dr(new Wn.X9('Error formatting default message for: "'.concat(Hr,'", rendering default message verbatim'),vt,Ye,kn)),typeof Wr=="string"?Wr:Hr}return Hr}try{var Bn=Je.getMessageFormat(pr,vt,_t,(0,Gn.pi)({formatters:Je},ht||{}));return Bn.format(Qe)}catch(kn){Dr(new Wn.X9('Error formatting message: "'.concat(Hr,'", using ').concat(Wr?"default message":"id"," as fallback."),vt,Ye,kn))}if(Wr)try{var Bn=Je.getMessageFormat(Wr,gn,Er,ht);return Bn.format(Qe)}catch(kn){Dr(new Wn.X9('Error formatting the default message for: "'.concat(Hr,'", rendering message verbatim'),vt,Ye,kn))}return typeof pr=="string"?pr:typeof Wr=="string"?Wr:Hr},ls=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function Xa(Fe,Je,Ye){var Qe=Fe.locale,ht=Fe.formats,vt=Fe.onError;Ye===void 0&&(Ye={});var _t=Ye.format,Gt=_t&&(0,Ir.TB)(ht,"number",_t,vt)||{},gn=(0,Ir.L6)(Ye,ls,Gt);return Je(Qe,gn)}function Ws(Fe,Je,Ye,Qe){Qe===void 0&&(Qe={});try{return Xa(Fe,Je,Qe).format(Ye)}catch(ht){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting number.",ht))}return String(Ye)}function Il(Fe,Je,Ye,Qe){Qe===void 0&&(Qe={});try{return Xa(Fe,Je,Qe).formatToParts(Ye)}catch(ht){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting number.",ht))}return[]}var Oa=__webpack_require__(23323),Co=["numeric","style"];function cs(Fe,Je,Ye){var Qe=Fe.locale,ht=Fe.formats,vt=Fe.onError;Ye===void 0&&(Ye={});var _t=Ye.format,Gt=!!_t&&(0,Ir.TB)(ht,"relative",_t,vt)||{},gn=(0,Ir.L6)(Ye,Co,Gt);return Je(Qe,gn)}function Ci(Fe,Je,Ye,Qe,ht){ht===void 0&&(ht={}),Qe||(Qe="second");var vt=Intl.RelativeTimeFormat;vt||Fe.onError(new Oa.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Oa.jK.MISSING_INTL_API));try{return cs(Fe,Je,ht).format(Ye,Qe)}catch(_t){Fe.onError(new Wn.Qe("Error formatting relative time.",Fe.locale,_t))}return String(Ye)}var fs=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function To(Fe,Je,Ye,Qe){var ht=Fe.locale,vt=Fe.formats,_t=Fe.onError,Gt=Fe.timeZone;Qe===void 0&&(Qe={});var gn=Qe.format,Er=(0,Gn.pi)((0,Gn.pi)({},Gt&&{timeZone:Gt}),gn&&(0,Ir.TB)(vt,Je,gn,_t)),On=(0,Ir.L6)(Qe,fs,Er);return Je==="time"&&!On.hour&&!On.minute&&!On.second&&!On.timeStyle&&!On.dateStyle&&(On=(0,Gn.pi)((0,Gn.pi)({},On),{hour:"numeric",minute:"numeric"})),Ye(ht,On)}function Ti(Fe,Je){for(var Ye=[],Qe=2;Qe<arguments.length;Qe++)Ye[Qe-2]=arguments[Qe];var ht=Ye[0],vt=Ye[1],_t=vt===void 0?{}:vt,Gt=typeof ht=="string"?new Date(ht||0):ht;try{return To(Fe,"date",Je,_t).format(Gt)}catch(gn){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting date.",gn))}return String(Gt)}function Zo(Fe,Je){for(var Ye=[],Qe=2;Qe<arguments.length;Qe++)Ye[Qe-2]=arguments[Qe];var ht=Ye[0],vt=Ye[1],_t=vt===void 0?{}:vt,Gt=typeof ht=="string"?new Date(ht||0):ht;try{return To(Fe,"time",Je,_t).format(Gt)}catch(gn){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting time.",gn))}return String(Gt)}function Oi(Fe,Je){for(var Ye=[],Qe=2;Qe<arguments.length;Qe++)Ye[Qe-2]=arguments[Qe];var ht=Ye[0],vt=Ye[1],_t=Ye[2],Gt=_t===void 0?{}:_t,gn=Fe.timeZone,Er=Fe.locale,On=Fe.onError,Dr=(0,Ir.L6)(Gt,fs,gn?{timeZone:gn}:{});try{return Je(Er,Dr).formatRange(ht,vt)}catch(Ur){On(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting date time range.",Ur))}return String(ht)}function Du(Fe,Je){for(var Ye=[],Qe=2;Qe<arguments.length;Qe++)Ye[Qe-2]=arguments[Qe];var ht=Ye[0],vt=Ye[1],_t=vt===void 0?{}:vt,Gt=typeof ht=="string"?new Date(ht||0):ht;try{return To(Fe,"date",Je,_t).formatToParts(Gt)}catch(gn){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting date.",gn))}return[]}function Yo(Fe,Je){for(var Ye=[],Qe=2;Qe<arguments.length;Qe++)Ye[Qe-2]=arguments[Qe];var ht=Ye[0],vt=Ye[1],_t=vt===void 0?{}:vt,Gt=typeof ht=="string"?new Date(ht||0):ht;try{return To(Fe,"time",Je,_t).formatToParts(Gt)}catch(gn){Fe.onError(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting time.",gn))}return[]}var ku=["type"];function Fu(Fe,Je,Ye,Qe){var ht=Fe.locale,vt=Fe.onError;Qe===void 0&&(Qe={}),Intl.PluralRules||vt(new Oa.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Oa.jK.MISSING_INTL_API));var _t=(0,Ir.L6)(Qe,ku);try{return Je(ht,_t).select(Ye)}catch(Gt){vt(new Wn.Qe("Error formatting plural.",ht,Gt))}return"other"}var Xo=["type","style"],pa=Date.now();function Ks(Fe){return"".concat(pa,"_").concat(Fe,"_").concat(pa)}function ju(Fe,Je,Ye,Qe){Qe===void 0&&(Qe={});var ht=ka(Fe,Je,Ye,Qe).reduce(function(vt,_t){var Gt=_t.value;return typeof Gt!="string"?vt.push(Gt):typeof vt[vt.length-1]=="string"?vt[vt.length-1]+=Gt:vt.push(Gt),vt},[]);return ht.length===1?ht[0]:ht.length===0?"":ht}function ka(Fe,Je,Ye,Qe){var ht=Fe.locale,vt=Fe.onError;Qe===void 0&&(Qe={});var _t=Intl.ListFormat;_t||vt(new Oa.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Oa.jK.MISSING_INTL_API));var Gt=(0,Ir.L6)(Qe,Xo);try{var gn={},Er=Ye.map(function(On,Dr){if(typeof On=="object"){var Ur=Ks(Dr);return gn[Ur]=On,Ur}return String(On)});return Je(ht,Gt).formatToParts(Er).map(function(On){return On.type==="literal"?On:(0,Gn.pi)((0,Gn.pi)({},On),{value:gn[On.value]||On.value})})}catch(On){vt(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting list.",On))}return Ye}var ds=["style","type","fallback","languageDisplay"];function yn(Fe,Je,Ye,Qe){var ht=Fe.locale,vt=Fe.onError,_t=Intl.DisplayNames;_t||vt(new Oa.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Oa.jK.MISSING_INTL_API));var Gt=(0,Ir.L6)(Qe,ds);try{return Je(ht,Gt).of(Ye)}catch(gn){vt(new Wn.Rw(Wn.bc.FORMAT_ERROR,"Error formatting display name.",gn))}}function Zs(Fe){var Je=Fe?Fe[Object.keys(Fe)[0]]:void 0;return typeof Je=="string"}function Ys(Fe){Fe.onWarn&&Fe.defaultRichTextElements&&Zs(Fe.messages||{})&&Fe.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function Qo(Fe,Je){var Ye=(0,Ir.ax)(Je),Qe=(0,Gn.pi)((0,Gn.pi)({},Ir.Z0),Fe),ht=Qe.locale,vt=Qe.defaultLocale,_t=Qe.onError;return ht?!Intl.NumberFormat.supportedLocalesOf(ht).length&&_t?_t(new Wn.gb('Missing locale data for locale: "'.concat(ht,'" in Intl.NumberFormat. Using default locale: "').concat(vt,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(ht).length&&_t&&_t(new Wn.gb('Missing locale data for locale: "'.concat(ht,'" in Intl.DateTimeFormat. Using default locale: "').concat(vt,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(_t&&_t(new Wn.OV('"locale" was not configured, using "'.concat(vt,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),Qe.locale=Qe.defaultLocale||"en"),Ys(Qe),(0,Gn.pi)((0,Gn.pi)({},Qe),{formatters:Ye,formatNumber:Ws.bind(null,Qe,Ye.getNumberFormat),formatNumberToParts:Il.bind(null,Qe,Ye.getNumberFormat),formatRelativeTime:Ci.bind(null,Qe,Ye.getRelativeTimeFormat),formatDate:Ti.bind(null,Qe,Ye.getDateTimeFormat),formatDateToParts:Du.bind(null,Qe,Ye.getDateTimeFormat),formatTime:Zo.bind(null,Qe,Ye.getDateTimeFormat),formatDateTimeRange:Oi.bind(null,Qe,Ye.getDateTimeFormat),formatTimeToParts:Yo.bind(null,Qe,Ye.getDateTimeFormat),formatPlural:Fu.bind(null,Qe,Ye.getPluralRules),formatMessage:Ko.bind(null,Qe,Ye),$t:Ko.bind(null,Qe,Ye),formatList:ju.bind(null,Qe,Ye.getListFormat),formatListToParts:ka.bind(null,Qe,Ye.getListFormat),formatDisplayName:yn.bind(null,Qe,Ye.getDisplayNames)})}var El=__webpack_require__(40629);function Jo(Fe){return{locale:Fe.locale,timeZone:Fe.timeZone,fallbackOnEmptyString:Fe.fallbackOnEmptyString,formats:Fe.formats,textComponent:Fe.textComponent,messages:Fe.messages,defaultLocale:Fe.defaultLocale,defaultFormats:Fe.defaultFormats,onError:Fe.onError,onWarn:Fe.onWarn,wrapRichTextChunksInFragment:Fe.wrapRichTextChunksInFragment,defaultRichTextElements:Fe.defaultRichTextElements}}function Xs(Fe){return Fe&&Object.keys(Fe).reduce(function(Je,Ye){var Qe=Fe[Ye];return Je[Ye]=(0,El.Gt)(Qe)?(0,Go.dt)(Qe):Qe,Je},{})}var Xn=function(Fe,Je,Ye,Qe){for(var ht=[],vt=4;vt<arguments.length;vt++)ht[vt-4]=arguments[vt];var _t=Xs(Qe),Gt=Ko.apply(void 0,(0,Gn.ev)([Fe,Je,Ye,_t],ht,!1));return Array.isArray(Gt)?qt.Children.toArray(Gt):Gt},qo=function(Fe,Je){var Ye=Fe.defaultRichTextElements,Qe=(0,Gn._T)(Fe,["defaultRichTextElements"]),ht=Xs(Ye),vt=Qo((0,Gn.pi)((0,Gn.pi)((0,Gn.pi)({},Go.Z0),Qe),{defaultRichTextElements:ht}),Je),_t={locale:vt.locale,timeZone:vt.timeZone,fallbackOnEmptyString:vt.fallbackOnEmptyString,formats:vt.formats,defaultLocale:vt.defaultLocale,defaultFormats:vt.defaultFormats,messages:vt.messages,onError:vt.onError,defaultRichTextElements:ht};return(0,Gn.pi)((0,Gn.pi)({},vt),{formatMessage:Xn.bind(null,_t,vt.formatters),$t:Xn.bind(null,_t,vt.formatters)})},ei=function(Fe){(0,Gn.ZT)(Je,Fe);function Je(){var Ye=Fe!==null&&Fe.apply(this,arguments)||this;return Ye.cache=(0,Ir.Sn)(),Ye.state={cache:Ye.cache,intl:qo(Jo(Ye.props),Ye.cache),prevConfig:Jo(Ye.props)},Ye}return Je.getDerivedStateFromProps=function(Ye,Qe){var ht=Qe.prevConfig,vt=Qe.cache,_t=Jo(Ye);return(0,Go.wU)(ht,_t)?null:{intl:qo(_t,vt),prevConfig:_t}},Je.prototype.render=function(){return(0,Go.lq)(this.state.intl),qt.createElement(us.zt,{value:this.state.intl},this.props.children)},Je.displayName="IntlProvider",Je.defaultProps=Go.Z0,Je}(qt.PureComponent),Ai=null,Qs=__webpack_require__(67541),Mi=__webpack_require__(43513),Pi=__webpack_require__(11527),Oo=(0,Ir.Sn)(),Qa=function(Je){var Ye=(0,qt.useCallback)(function(){var Gt=Mi.k.slice().reverse().find(function(Er){return"suffix"in Er?Vo.m8.location.pathname.replace(/([^/])\/$/,"$1").endsWith(Er.suffix):Vo.m8.location.pathname.replace(/([^/])\/$/,"$1").startsWith(Er.base)}),gn=Gt?Gt.id:Mi.k[0].id;return qo({locale:gn,messages:Mi.s[gn]||{}},Oo)},[]),Qe=(0,qt.useState)(function(){return Ye()}),ht=wo()(Qe,2),vt=ht[0],_t=ht[1];return(0,Qs.LI)(function(){return Vo.m8.listen(function(){_t(Ye())})},[]),(0,Pi.jsx)(us.zt,{value:vt,children:Je.children},vt.locale)};function Js(Fe){return qt.createElement(Qa,null,Fe)}var ti=__webpack_require__(55344);function Sl(Fe){return Fe.default?typeof Fe.default=="function"?Fe.default():Fe.default:Fe}function Bu(){return[{apply:l,path:void 0},{apply:c,path:void 0}]}function ni(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange"]}var ri=null;function _u(){return ri=ti.Q$.create({plugins:Bu(),validKeys:ni()}),ri}function zu(){return ri}var Ri=__webpack_require__(8634),ps="/cat-design/",wl=!1;function Uu(){return qs.apply(this,arguments)}function qs(){return qs=d()(i()().mark(function Fe(){var Je,Ye,Qe,ht,vt,_t,Gt,gn;return i()().wrap(function(On){for(;;)switch(On.prev=On.next){case 0:return Je=_u(),On.next=3,is(Je);case 3:return Ye=On.sent,Qe=Ye.routes,ht=Ye.routeComponents,On.next=8,Je.applyPlugins({key:"patchRoutes",type:ti.Ac.event,args:{routes:Qe,routeComponents:ht}});case 8:return vt=Je.applyPlugins({key:"modifyContextOpts",type:ti.Ac.modify,initialValue:{}}),_t=vt.basename||"/cat-design",Gt=vt.historyType||"browser",gn=(0,Ri.f)(o()({type:Gt,basename:_t},vt.historyOpts)),On.abrupt("return",Je.applyPlugins({key:"render",type:ti.Ac.compose,initialValue:function(){var Ur={routes:Qe,routeComponents:ht,pluginManager:Je,rootElement:vt.rootElement||document.getElementById("root"),publicPath:ps,runtimePublicPath:wl,history:gn,historyType:Gt,basename:_t,callback:vt.callback},Jr=Je.applyPlugins({key:"modifyClientRenderOpts",type:ti.Ac.modify,initialValue:Ur});return Vs(Jr)}})());case 13:case"end":return On.stop()}},Fe)})),qs.apply(this,arguments)}typeof history!="undefined"&&location.pathname.length>1&&location.pathname.endsWith("/")&&history.replaceState({},"",location.pathname.slice(0,-1)+location.search+location.hash),document.documentElement.setAttribute("data-prefers-color","light"),Uu(),window.g_umi={version:"4.0.51"}})()})();
