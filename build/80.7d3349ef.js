(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{957:function(t,e,a){"use strict";a.r(e),a.d(e,"sc_webgl_bar_chart_dynamic_buffer",(function(){return s}));var n=a(13),r=a(36),i=(a(136),a(64)),d=new Date(1998,0,0),o=new Date(2e3,0,1),c=o.getTime()-d.getTime(),s=function(){function t(t){var e=this;Object(n.l)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(d.getTime()+c/(2+e.data.length)).getTime(),y:2500};e.data=function(){for(var t=0,e=0,a=arguments.length;e<a;e++)t+=arguments[e].length;var n=Array(t),r=0;for(e=0;e<a;e++)for(var i=arguments[e],d=0,o=i.length;d<o;d++,r++)n[r]=i[d];return n}([t],e.data)}}return t.prototype.render=function(){var t;return Object(n.j)("div",{class:"synchro-chart-tests"},Object(n.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(n.j)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(n.j)("sc-bar-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"red",name:"test stream",aggregates:(t={},t[i.f]=this.data,t),data:[],resolution:i.f,dataType:r.b.NUMBER}],viewport:{yMin:0,yMax:5e3,start:d,end:o},bufferFactor:1,minBufferSize:1}),Object(n.j)("sc-webgl-context",null)))},t}()}}]);