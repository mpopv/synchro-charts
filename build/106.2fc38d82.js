(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{996:function(t,e,a){"use strict";a.r(e),a.d(e,"status_timeline_dynamic_data",(function(){return s}));var n=a(13),i=a(36),r=(a(136),a(64)),o=new Date(2e3,0),d=new Date(2001,12),s=function(){function t(t){var e=this;Object(n.l)(this,t),this.data=[],this.monthIndex=1,this.addDataPoint=function(){var t={x:new Date(2e3,e.monthIndex).getTime(),y:3e3};e.data=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<a;e++)for(var r=arguments[e],o=0,d=r.length;o<d;o++,i++)n[i]=r[o];return n}([t],e.data),e.monthIndex+=2},this.removeDataPoint=function(){var t=e.data,a=(t[0],t.slice(1));e.data=a}}return t.prototype.render=function(){var t;return Object(n.j)("div",{class:"synchro-chart-tests"},Object(n.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(n.j)("button",{id:"remove-data-point",onClick:this.removeDataPoint},"Remove Data Point"),Object(n.j)("br",null),Object(n.j)("br",null),Object(n.j)("div",{id:"chart-container",style:{height:"500px",width:"500px"}},Object(n.j)("sc-status-timeline",{alarms:{expires:r.f},dataStreams:[{id:"test",name:"test stream",color:"red",aggregates:(t={},t[r.f]=this.data,t),data:[],resolution:r.f,dataType:i.b.NUMBER}],size:{width:500,height:500},widgetId:"widget-id",viewport:{yMin:0,yMax:5e3,start:o,end:d}}),Object(n.j)("sc-webgl-context",null)))},t}()}}]);