(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1002:function(u,D,n){"use strict";n.r(D),n.d(D,"status_timeline_threshold_coloration_multiple_thresholds",(function(){return o}));var t=n(13),r=n(1020),e=n(1019),A=(n(1018),n(1021)),F=(n(1023),n(1022),n(1024),n(1029),n(1028)),o=function(){function u(u){Object(t.l)(this,u)}return u.prototype.render=function(){var u;return Object(t.j)("div",null,Object(t.j)("sc-status-timeline",{alarms:{expires:A.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(u={},u[A.c]=[F.a],u),data:[],resolution:A.c,dataType:e.a.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:r.a.GREATER_THAN_EQUAL},{value:1e3,label:{text:"y label",show:!0},showValue:!0,color:"red",comparisonOperator:r.a.GREATER_THAN_EQUAL}]},widgetId:"test-id",size:{width:500,height:500},viewport:{yMin:F.d,yMax:F.e,start:F.b,end:F.f}}),Object(t.j)("sc-webgl-context",null))},u}()},1018:function(u,D,n){"use strict";n.d(D,"a",(function(){return r}));var t=/(\x2D?(?:[0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)(?:e[\+\x2D]?[0-9]+)?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*((?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])*)/gi;function r(u,D){void 0===u&&(u=""),void 0===D&&(D="ms");var n=null;return(u=(u+"").replace(/(\d)[,_](\d)/g,"$1$2")).replace(t,(function(u,D,t){(t=e(t))&&(n=(n||0)+parseFloat(D,10)*t)})),n&&n/(e(D)||1)}function e(u){return r[u]||r[u.toLowerCase().replace(/s$/,"")]}r.nanosecond=r.ns=1e-6,r["\xb5s"]=r["\u03bcs"]=r.us=r.microsecond=.001,r.millisecond=r.ms=r[""]=1,r.second=r.sec=r.s=1e3*r.ms,r.minute=r.min=r.m=60*r.s,r.hour=r.hr=r.h=60*r.m,r.day=r.d=24*r.h,r.week=r.wk=r.w=7*r.d,r.month=r.b=30.4375*r.d,r.year=r.yr=r.y=365.25*r.d},1019:function(u,D,n){"use strict";var t,r,e,A;n.d(D,"a",(function(){return t})),n.d(D,"b",(function(){return r})),n.d(D,"c",(function(){return e})),function(u){u.NUMBER="NUMBER",u.STRING="STRING",u.BOOLEAN="BOOLEAN"}(t||(t={})),function(u){u.ALARM="ALARM",u.ANOMALY="ANOMALY",u.ALARM_THRESHOLD="ALARM_THRESHOLD"}(r||(r={})),function(u){u.LINEAR="linear-regression"}(e||(e={})),function(u){u.BarChart="bar-chart",u.LineChart="line-chart"}(A||(A={}))},1020:function(u,D,n){"use strict";var t,r,e,A,F;n.d(D,"a",(function(){return e})),n.d(D,"b",(function(){return F})),n.d(D,"c",(function(){return r})),n.d(D,"d",(function(){return t})),n.d(D,"e",(function(){return A})),function(u){u.TimeSeries="time-series",u.Log="log",u.Linear="linear"}(t||(t={})),function(u){u.RIGHT="RIGHT",u.BOTTOM="BOTTOM"}(r||(r={})),function(u){u.LESS_THAN="LT",u.GREATER_THAN="GT",u.LESS_THAN_EQUAL="LTE",u.GREATER_THAN_EQUAL="GTE",u.EQUAL="EQ"}(e||(e={})),function(u){u.ERROR="error",u.ACTIVE="active",u.NORMAL="normal",u.ACKNOWLEDGED="acknowledged",u.SNOOZED="snoozed",u.DISABLED="disabled",u.LATCHED="latched"}(A||(A={})),A.ERROR,A.ACTIVE,A.NORMAL,A.ACKNOWLEDGED,A.SNOOZED,A.DISABLED,A.LATCHED,function(u){u.EITHER="EITHER",u.RIGHT="RIGHT",u.LEFT="LEFT"}(F||(F={}))},1021:function(u,D,n){"use strict";n.d(D,"a",(function(){return F})),n.d(D,"b",(function(){return A})),n.d(D,"c",(function(){return e})),n.d(D,"d",(function(){return r})),n.d(D,"e",(function(){return E})),n.d(D,"f",(function(){return o})),n.d(D,"g",(function(){return i})),n.d(D,"h",(function(){return C})),n.d(D,"i",(function(){return a}));var t=n(1018),r=1e3,e=60*r,A=60*e,F=24*A,o=30*F,E=12*o,i=function(u){if(u<0)throw new Error("Time cannot be negative!");var D=Math.floor(u/1e3),n=Math.floor(D/60),t=Math.floor(n/60);return{day:Math.floor(t/24),hour:t%=24,minute:n%=60,seconds:D%=60}},C=function(u,D,n){var t=n.start,r=n.end.getTime()-t.getTime();return D<A?r<e?u.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):r<=10*e?u.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):r<=A?u.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):r<=F?u.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):r<=o?u.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):u.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):D<=A?u.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):D<F?u.toLocaleString("en-US",{day:"numeric",month:"numeric"}):u.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},a=function(u){if("number"==typeof u)return u;var D=Object(t.a)(u,"ms");return null!=D?D:10*e}},1022:function(u,D,n){"use strict";n.d(D,"a",(function(){return r})),n.d(D,"b",(function(){return E})),n.d(D,"c",(function(){return F})),n.d(D,"d",(function(){return A})),n.d(D,"e",(function(){return o})),n.d(D,"f",(function(){return e}));var t=n(1019),r=function(u){return null!=u},e=function(u){return function(D){return u(D)}},A=function(u){return function(D){var n=D.dataType;return u&&n===t.a.STRING||n!==t.a.STRING}},F=function(u){return u.dataType===t.a.NUMBER},o=function(u){return"number"==typeof u},E=function(u){return"start"in u&&"end"in u}},1023:function(u,D,n){"use strict";n.d(D,"a",(function(){return T})),n.d(D,"b",(function(){return E})),n.d(D,"c",(function(){return i})),n.d(D,"d",(function(){return o})),n.d(D,"e",(function(){return c})),n.d(D,"f",(function(){return B})),n.d(D,"g",(function(){return L})),n.d(D,"h",(function(){return d})),n.d(D,"i",(function(){return p})),n.d(D,"j",(function(){return s})),n.d(D,"k",(function(){return m})),n.d(D,"l",(function(){return f})),n.d(D,"m",(function(){return l})),n.d(D,"n",(function(){return C})),n.d(D,"o",(function(){return g}));var t,r=n(1020),e=n(1021),A=n(1022),F=n(1024);function o(u,D){return u<D?-1:u>D?1:u>=D?0:NaN}function E(u){var D=u,n=u;function t(u,D,t,r){for(null==t&&(t=0),null==r&&(r=u.length);t<r;){var e=t+r>>>1;n(u[e],D)<0?t=e+1:r=e}return t}return 1===u.length&&(D=function(D,n){return u(D)-n},n=function(u){return function(D,n){return o(u(D),n)}}(u)),{left:t,center:function(u,n,r,e){null==r&&(r=0),null==e&&(e=u.length);var A=t(u,n,r,e-1);return A>r&&D(u[A-1],n)>-D(u[A],n)?A-1:A},right:function(u,D,t,r){for(null==t&&(t=0),null==r&&(r=u.length);t<r;){var e=t+r>>>1;n(u[e],D)>0?r=e:t=e+1}return t}}}var i=function(u){return u.filter((function(u){return Object(F.a)(u.value)}))},C=function(u){var D=u&&Array.isArray(u.y)&&u.y;if(!D)return u;var n=D.filter((function(u){return Object(F.a)(u.value)}));return n.length<1?function(u,D){var n={};for(var t in u)Object.prototype.hasOwnProperty.call(u,t)&&D.indexOf(t)<0&&(n[t]=u[t]);if(null!=u&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(u);r<t.length;r++)D.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(u,t[r])&&(n[t[r]]=u[t[r]])}return n}(u,["y"]):Object.assign(Object.assign({},u),{y:n})},a=function(u){var D=u.value,n=u.resolution,t=u.viewport,r=u.formatText;return"number"==typeof D?r?function(u){return u>99999||u<-9999||u<.001&&u>0||u>-.001&&u<0?u.toExponential(1).toString():u.toString().length>5?u.toString().substr(0,5):u.toString()}(D):D.toString():"string"==typeof D?D:Object(e.h)(D,n,t)},c=function(u){return u.color},B=function(u){var D=u.annotation,n=u.resolution,t=u.viewport,r=D.showValue?a({value:D.value,resolution:n,viewport:t,formatText:!1}):null,e=D.label&&D.label.show?D.label.text:null;return e&&r?e+" ("+r+")":!r&&e?e:!e&&r?"("+r+")":""},l=function(u){var D=u.label&&u.label.show?u.label.text:null;return D?""+D:""},f=function(u){return u.label&&u.label.show?"inline":"none"},s=function(u){return u.showValue?"inline":"none"},d=function(u){var D=u.showValue,n=u.label&&u.label.show;return D||n?"inline":"none"},m=function(u){var D=u.annotation,n=u.resolution,t=u.viewport,r=u.formatText,e=D.showValue?a({value:D.value,resolution:n,viewport:t,formatText:r}):null;return e?""+e:""},h=function(u,D){var n=Object(F.a)(u)?Number(u):u,t=Object(F.a)(D.value)?Number(D.value):D.value,e=D.comparisonOperator;if("number"==typeof n&&"number"==typeof t)switch(e){case r.a.GREATER_THAN:return n>t;case r.a.GREATER_THAN_EQUAL:return n>=t;case r.a.LESS_THAN:return n<t;case r.a.LESS_THAN_EQUAL:return n<=t;case r.a.EQUAL:return n===t;default:throw new Error("Unsupported number threshold comparison operator: "+e)}if("string"==typeof n&&"string"==typeof t){if(e===r.a.EQUAL)return n===t;throw new Error("Unsupported string threshold comparison operator: "+e)}return!1},v=E((function(u){return u.value})).left,b=((t={})[r.a.LESS_THAN_EQUAL]=1,t[r.a.LESS_THAN]=2,t[r.a.GREATER_THAN_EQUAL]=3,t[r.a.GREATER_THAN]=4,t[r.a.EQUAL]=5,t),g=function(u){return function(){for(var u=0,D=0,n=arguments.length;D<n;D++)u+=arguments[D].length;var t=Array(u),r=0;for(D=0;D<n;D++)for(var e=arguments[D],A=0,F=e.length;A<F;A++,r++)t[r]=e[A];return t}(u).sort((function(u,D){return u.value===D.value?b[u.comparisonOperator]-b[D.comparisonOperator]:u.value-D.value}))},T=function(u,D){if(0!==D.length){if("string"==typeof u)return D.find((function(D){return h(u,D)}))||void 0;var n=i(D),t=g(n),r=v(t,u),e=t[r-1],A=t[r];if(r===n.length&&n.length>1&&t[r-1].value===t[r-2].value&&(e=t[r-2],A=t[r-1]),0===r&&n.length>1&&t[r].value===t[r+1].value&&(e=t[r],A=t[r+1]),null!=e||null!=A)return null!=e&&null==A?h(u,e)?e:void 0:null==e&&null!=A?h(u,A)?A:void 0:h(u,e)&&h(u,A)?u>=0?A:e:h(u,e)&&!h(u,A)?e:!h(u,e)&&h(u,A)?A:void 0}},p=Object(A.f)((function(u){return null!=u.comparisonOperator})),L=function(u){return u&&u.y?u.y.filter(p):[]}},1024:function(u,D,n){"use strict";n.d(D,"a",(function(){return r})),n.d(D,"b",(function(){return t}));var t=function(u){if(Number.isNaN(u)||u===1/0||u===-1/0)return u;if(Math.abs(u)<1)return Number(u.toPrecision(4));var D=Math.trunc(u);return Number((D+Number((u-D).toFixed(4))).toFixed(4))},r=function(u){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(u))}},1028:function(u,D,n){"use strict";n.d(D,"a",(function(){return o})),n.d(D,"b",(function(){return e})),n.d(D,"c",(function(){return F})),n.d(D,"d",(function(){return t})),n.d(D,"e",(function(){return r})),n.d(D,"f",(function(){return A})),n(1020);var t=0,r=5e3,e=new Date(2e3,0,0,0,0),A=new Date(2e3,0,0,0,10),F=2500,o=(new Date(e.getTime()+1/3*(A.getTime()-e.getTime())),{x:(e.getTime()+A.getTime())/2,y:F})},1029:function(u,D,n){"use strict";n.d(D,"a",(function(){return F})),n.d(D,"b",(function(){return o})),n.d(D,"c",(function(){return A}));var t=n(1021),r=n(1023),e=n(1022),A=Object(r.b)((function(u){return u.x})),F=function(u,D,n){void 0===n&&(n=!0);var r=Object(e.b)(D)?new Date(D.start):new Date(Date.now()-Object(t.i)(D.duration)),F=Object(e.b)(D)?new Date(D.end):new Date;if(0===u.length)return[];if(r.getTime()>u[u.length-1].x)return[];if(F.getTime()<u[0].x)return[];var o=Math.max(A.left(u,r)-(n?1:0),0),E=Math.min(A.right(u,F)-(n?0:1),u.length-1);return u.slice(o,E+1)},o=function(u,D){if(0===u.length)return[];if(D.getTime()<u[0].x)return[];var n=Math.min(A.right(u,D)-1,u.length-1);return u.slice(0,n+1)}}}]);