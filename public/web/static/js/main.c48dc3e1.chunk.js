(this["webpackJsonplight-transcoder-player"]=this["webpackJsonplight-transcoder-player"]||[]).push([[0],{34:function(e,t,a){},35:function(e,t,a){e.exports={spinner:"style_spinner__wAv59",spinner1:"style_spinner1__GawAE",spinner2:"style_spinner2__1q-vU",spinner3:"style_spinner3__1UQzU"}},36:function(e,t,a){e.exports={player:"style_player__1Wy7F"}},37:function(e,t,a){e.exports={player:"style_player__1b_eF"}},41:function(e,t,a){e.exports=a(69)},5:function(e,t,a){e.exports={home:"style_home__2b00V",field:"style_field__3v_8e",message:"style_message__ccoOX",select:"style_select__1vHJm"}},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(33),r=a.n(o),i=a(23),s=a(34),l=a.n(s),u=a(5),d=a.n(u),p=a(35),m=a.n(p),v=function(){return c.a.createElement("div",{className:m.a.spinner},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},b=function(e){var t=e.onChange,a=void 0===t?function(){}:t,n=e.loading,o=void 0!==n&&n,r=e.value,i=void 0===r?"":r;return c.a.createElement("div",{className:d.a.home},c.a.createElement("input",{className:d.a.field,defaultValue:i,readOnly:o,placeholder:"https://mywebsite.com/myfile.mkv",onKeyDown:function(e){13===e.keyCode&&a(e.target.value)}}),c.a.createElement("div",{className:d.a.message},"Bitrate:",c.a.createElement("select",{className:d.a.select,id:"bitrate",defaultValue:window.bitrateLimit,onChange:function(e){return window.bitrateLimit=parseInt(e.target.value,10)}},c.a.createElement("option",{value:"-1"},"Maximum"),c.a.createElement("option",{value:"140000"},"140Mbit/s (8k)"),c.a.createElement("option",{value:"80000"},"80Mbit/s (4k)"),c.a.createElement("option",{value:"70000"},"70Mbit/s (4k)"),c.a.createElement("option",{value:"60000"},"60Mbit/s (4k)"),c.a.createElement("option",{value:"50000"},"50Mbit/s (4k)"),c.a.createElement("option",{value:"30000"},"30Mbit/s (1440p)"),c.a.createElement("option",{value:"22000"},"22Mbit/s (1440p)"),c.a.createElement("option",{value:"20000"},"20Mbit/s (1080p)"),c.a.createElement("option",{value:"12000"},"12Mbit/s (1080p)"),c.a.createElement("option",{value:"10000"},"10Mbit/s (1080p)"),c.a.createElement("option",{value:"8000"},"8Mbit/s (1080p)"),c.a.createElement("option",{value:"4000"},"4Mbit/s (720p)"),c.a.createElement("option",{value:"3000"},"3Mbit/s (720p)"),c.a.createElement("option",{value:"2000"},"2Mbit/s (720p)"),c.a.createElement("option",{value:"1750"},"1.75Mbit/s (576p)"),c.a.createElement("option",{value:"1250"},"1.25Mbit/s (480p)"),c.a.createElement("option",{value:"750"},"0.75Mbit/s (350p)"),c.a.createElement("option",{value:"500"},"0.5Mbit/s (240p)"),c.a.createElement("option",{value:"250"},"0.25Mbit/s (160p)"))),c.a.createElement("div",{className:d.a.message},"\u2764 It's easy! Choose your quality, paste a media file link and press enter \u2764"),o&&c.a.createElement(v,null))},f=a(6),h=a.n(f),y="http://localhost:8585/",O=a(1),E=function(e){return document.createElement("video").canPlayType(e)},j=function(){return E('audio/mp4; codecs="ac3"')},g=function(){return E('audio/mp4; codecs="ec3"')},w=function(){return E('audio/mp4; codecs="opus"')||E('audio/webm; codecs="opus"')},_=function(){return E('audio/mp4; codecs="flac"')},M=function(){return E('audio/webm; codecs="vorbis"')},k=function(){return E('video/mp4; codecs="hev1.1.6.L93.90"')||E('video/mp4; codecs="hvc1.1.6.L93.90"')},x=function(){return E('video/mp4; codecs="av01.0.01M.08"')},S=function(){return E('video/webm; codecs="vp8"')},N=function(){return E('video/mp4; codecs="vp9"')||E('video/mp4; codecs="vp09.00.10.08"')||E('video/webm; codecs="vp9"')||E('video/webm; codecs="vp09.00.10.08"')},L=function(){return[{type:"HLS",video:[{codec:"h264"}].concat(Object(O.a)(k()?[{codec:"hevc"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(O.a)(j()?[{codec:"ac3"}]:[]),Object(O.a)(g()?[{codec:"ec3"}]:[]))},{type:"DOWNLOAD",format:[{container:"mp4"},{container:"webm"}],video:[{codec:"h264"}].concat(Object(O.a)(k()?[{codec:"hevc"}]:[]),Object(O.a)(x()?[{codec:"av1"}]:[]),Object(O.a)(S()?[{codec:"vp8"}]:[]),Object(O.a)(N()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(O.a)(j()?[{codec:"ac3"}]:[]),Object(O.a)(g()?[{codec:"ec3"}]:[]),Object(O.a)(w()?[{codec:"opus"}]:[]),Object(O.a)(_()?[{codec:"flac"}]:[]),Object(O.a)(M()?[{codec:"vorbis"}]:[])),maxAudioTrack:1,maxVideoTrack:1},{type:"DASH",video:[{codec:"h264"}].concat(Object(O.a)(k()?[{codec:"hevc"}]:[]),Object(O.a)(x()?[{codec:"av1"}]:[]),Object(O.a)(S()?[{codec:"vp8"}]:[]),Object(O.a)(N()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(O.a)(j()?[{codec:"ac3"}]:[]),Object(O.a)(g()?[{codec:"ec3"}]:[]),Object(O.a)(w()?[{codec:"opus"}]:[]),Object(O.a)(_()?[{codec:"flac"}]:[]),Object(O.a)(M()?[{codec:"vorbis"}]:[]))}]};console.log("COMPATIBILITY_MAP",L());var A=function(e){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=fetch("".concat(y,"media/analyze"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,supported:L()})}).then((function(e){return e.json()})),a.abrupt("return",t);case 2:case"end":return a.stop()}}))},D=function(){var e,t,a,n,c,o=arguments;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:0,a=o.length>2&&void 0!==o[2]?o[2]:0,n=o.length>3&&void 0!==o[3]?o[3]:[0],o.length>4&&void 0!==o[4]?o[4]:[],c=fetch("".concat(y,"session"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,profile:t,video:a,audio:n[0],subtitle:"",supported:L()})}).then((function(e){return e.json()})),r.abrupt("return",c);case 7:case"end":return r.stop()}}))},T=a(36),P=a.n(T),C=function(e){var t=e.url,a=void 0===t?"":t;return c.a.createElement("video",{src:a,className:P.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})},I=a(13),B=a(14),F=a(15),H=a(4),J=a(16),U=a(17),z=a.n(U),V=a(37),W=a.n(V),q=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(F.a)(this,Object(H.a)(t).call(this,e))).ref=c.a.createRef(),a}return Object(J.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){return c.a.createElement("video",{ref:this.ref,className:W.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})}},{key:"componentDidMount",value:function(){if(z.a.polyfill.installAll(),z.a.Player.isBrowserSupported()){var e=new z.a.Player(this.ref.current);e.configure({streaming:{retryParameters:{timeout:1e4,maxAttempts:50,baseDelay:0,backoffFactor:0,fuzzFactor:0}}}),e.addEventListener("error",(function(e){console.error("Error code",e.detail.code,"object",e.detail)})),e.load(this.props.url).then((function(){console.log("The video has now been loaded!")})).catch((function(e){console.error("Error code",e.code,"object",e)})),window._player=e}else console.error("Browser not supported!")}}]),t}(c.a.Component),G=a(40),K=a(38),Q=a.n(K),R=a(39),X=a.n(R),Y=function(e){function t(){return Object(I.a)(this,t),Object(F.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){window.muxjs=Q.a,Object(G.a)(Object(H.a)(t.prototype),"componentDidMount",this).call(this)}}]),t}(q);Y.propTypes={url:X.a.string};var Z=Y,$=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),u=s[0],d=s[1];return c.a.createElement("div",{className:l.a.home},!u&&c.a.createElement(b,{onChange:function(e){localStorage.setItem("lastUrl",e),o(e),function(e){var t,a,n,c,o=arguments;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:15e3,console.log("Selecting profiles matching with maxBitrate=".concat(t)),r.next=4,h.a.awrap(A(e));case 4:return a=r.sent,n=a.profiles.filter((function(e){return e.bitrate<=t||-1===t})),console.log("File scan",a),r.next=9,h.a.awrap(D(e,n[n.length-1].id,a.tracks.video[0].id,a.tracks.audio.map((function(e){return e.id})),[]));case 9:return c=r.sent,console.log("Session",c),r.abrupt("return",c);case 12:case"end":return r.stop()}}))}(e,window.bitrateLimit).then((function(e){d(e.session)}))},loading:!1!==a,value:localStorage.getItem("lastUrl")}),u&&u.stream&&"DASH"===u.stream.type&&c.a.createElement(q,{url:u.stream.url}),u&&u.stream&&"HLS"===u.stream.type&&c.a.createElement(Z,{url:u.stream.url}),u&&u.stream&&"DOWNLOAD"===u.stream.type&&c.a.createElement(C,{url:u.stream.url}))};window.bitrateLimit=8e3,r.a.render(c.a.createElement($,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c48dc3e1.chunk.js.map