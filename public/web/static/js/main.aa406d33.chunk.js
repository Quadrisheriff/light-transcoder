(this["webpackJsonplight-transcoder-player"]=this["webpackJsonplight-transcoder-player"]||[]).push([[0],{13:function(e,t,a){e.exports={player:"style_player__3yFN8"}},14:function(e,t,a){e.exports={player:"style_player__1Wy7F"}},17:function(e,t,a){e.exports=a(25)},2:function(e,t,a){e.exports={home:"style_home__2b00V",field:"style_field__3v_8e",message:"style_message__ccoOX",select:"style_select__1vHJm"}},25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=a(5),l=a(8),s=a.n(l),u=a(2),d=a.n(u),p=a(9),m=a.n(p),v=function(){return o.a.createElement("div",{className:m.a.spinner},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},f=function(e){var t=e.onChange,a=void 0===t?function(){}:t,n=e.loading,c=void 0!==n&&n,r=e.value,i=void 0===r?"":r;return o.a.createElement("div",{className:d.a.home},o.a.createElement("input",{className:d.a.field,defaultValue:i,readOnly:c,placeholder:"https://mywebsite.com/myfile.mkv",onKeyDown:function(e){13===e.keyCode&&a(e.target.value)}}),o.a.createElement("div",{className:d.a.message},"Bitrate:",o.a.createElement("select",{className:d.a.select,id:"bitrate",defaultValue:window.bitrateLimit,onChange:function(e){return window.bitrateLimit=parseInt(e.target.value,10)}},o.a.createElement("option",{value:"-1"},"Maximum"),o.a.createElement("option",{value:"140000"},"140Mbit/s (8k)"),o.a.createElement("option",{value:"80000"},"80Mbit/s (4k)"),o.a.createElement("option",{value:"70000"},"70Mbit/s (4k)"),o.a.createElement("option",{value:"60000"},"60Mbit/s (4k)"),o.a.createElement("option",{value:"50000"},"50Mbit/s (4k)"),o.a.createElement("option",{value:"30000"},"30Mbit/s (1440p)"),o.a.createElement("option",{value:"22000"},"22Mbit/s (1440p)"),o.a.createElement("option",{value:"20000"},"20Mbit/s (1080p)"),o.a.createElement("option",{value:"12000"},"12Mbit/s (1080p)"),o.a.createElement("option",{value:"10000"},"10Mbit/s (1080p)"),o.a.createElement("option",{value:"8000"},"8Mbit/s (1080p)"),o.a.createElement("option",{value:"4000"},"4Mbit/s (720p)"),o.a.createElement("option",{value:"3000"},"3Mbit/s (720p)"),o.a.createElement("option",{value:"2000"},"2Mbit/s (720p)"),o.a.createElement("option",{value:"1750"},"1.75Mbit/s (576p)"),o.a.createElement("option",{value:"1250"},"1.25Mbit/s (480p)"),o.a.createElement("option",{value:"750"},"0.75Mbit/s (350p)"),o.a.createElement("option",{value:"500"},"0.5Mbit/s (240p)"),o.a.createElement("option",{value:"250"},"0.25Mbit/s (160p)"))),o.a.createElement("div",{className:d.a.message},"\u2764 It's easy! Choose your quality, paste a media file link and press enter \u2764"),c&&o.a.createElement(v,null))},b=a(10),h=a(11),y=a(15),E=a(12),O=a(16),g=a(4),w=a.n(g),j=a(13),_=a.n(j),M=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(y.a)(this,Object(E.a)(t).call(this,e))).ref=o.a.createRef(),a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("video",{ref:this.ref,className:_.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})}},{key:"componentDidMount",value:function(){if(w.a.polyfill.installAll(),w.a.Player.isBrowserSupported()){var e=new w.a.Player(this.ref.current);e.configure({streaming:{retryParameters:{timeout:1e4,maxAttempts:50,baseDelay:0,backoffFactor:0,fuzzFactor:0}}}),e.addEventListener("error",(function(e){console.error("Error code",e.detail.code,"object",e.detail)})),e.load(this.props.url).then((function(){console.log("The video has now been loaded!")})).catch((function(e){console.error("Error code",e.code,"object",e)})),window._player=e}else console.error("Browser not supported!")}}]),t}(o.a.Component),k=a(3),x=a.n(k),N="http://localhost:8585/",S=a(1),A=function(e){return document.createElement("video").canPlayType(e)},L=function(){return A('audio/mp4; codecs="ac3"')},P=function(){return A('audio/mp4; codecs="ec3"')},T=function(){return A('audio/mp4; codecs="opus"')||A('audio/webm; codecs="opus"')},C=function(){return A('audio/mp4; codecs="flac"')},D=function(){return A('audio/webm; codecs="vorbis"')},I=function(){return A('video/mp4; codecs="hev1.1.6.L93.90"')||A('video/mp4; codecs="hvc1.1.6.L93.90"')},B=function(){return A('video/mp4; codecs="av01.0.01M.08"')},F=function(){return A('video/webm; codecs="vp8"')},J=function(){return A('video/mp4; codecs="vp9"')||A('video/mp4; codecs="vp09.00.10.08"')||A('video/webm; codecs="vp9"')||A('video/webm; codecs="vp09.00.10.08"')},U=function(){return[{type:"DOWNLOAD",format:[{container:"mp4"},{container:"webm"}],video:[{codec:"h264"}].concat(Object(S.a)(I()?[{codec:"hevc"}]:[]),Object(S.a)(B()?[{codec:"av1"}]:[]),Object(S.a)(F()?[{codec:"vp8"}]:[]),Object(S.a)(J()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(S.a)(L()?[{codec:"ac3"}]:[]),Object(S.a)(P()?[{codec:"ec3"}]:[]),Object(S.a)(T()?[{codec:"opus"}]:[]),Object(S.a)(C()?[{codec:"flac"}]:[]),Object(S.a)(D()?[{codec:"vorbis"}]:[])),maxAudioTrack:1,maxVideoTrack:1},{type:"DASH",video:[{codec:"h264"}].concat(Object(S.a)(I()?[{codec:"hevc"}]:[]),Object(S.a)(B()?[{codec:"av1"}]:[]),Object(S.a)(F()?[{codec:"vp8"}]:[]),Object(S.a)(J()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(S.a)(L()?[{codec:"ac3"}]:[]),Object(S.a)(P()?[{codec:"ec3"}]:[]),Object(S.a)(T()?[{codec:"opus"}]:[]),Object(S.a)(C()?[{codec:"flac"}]:[]),Object(S.a)(D()?[{codec:"vorbis"}]:[]))}]};console.log("COMPATIBILITY_MAP",U());var z=function(e){var t;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=fetch("".concat(N,"media/analyze"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,supported:U()})}).then((function(e){return e.json()})),a.abrupt("return",t);case 2:case"end":return a.stop()}}))},V=function(){var e,t,a,n,o,c=arguments;return x.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:0,a=c.length>2&&void 0!==c[2]?c[2]:0,n=c.length>3&&void 0!==c[3]?c[3]:[0],c.length>4&&void 0!==c[4]?c[4]:[],o=fetch("".concat(N,"session"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,profile:t,video:a,audio:n[0],subtitle:"",supported:U()})}).then((function(e){return e.json()})),r.abrupt("return",o);case 7:case"end":return r.stop()}}))},H=a(14),W=a.n(H),q=function(e){var t=e.url,a=void 0===t?"":t;return o.a.createElement("video",{src:a,className:W.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})},G=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],d=l[1];return o.a.createElement("div",{className:s.a.home},!u&&o.a.createElement(f,{onChange:function(e){localStorage.setItem("lastUrl",e),c(e),function(e){var t,a,n,o,c=arguments;return x.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:15e3,console.log("Selecting profiles matching with maxBitrate=".concat(t)),r.next=4,x.a.awrap(z(e));case 4:return a=r.sent,n=a.profiles.filter((function(e){return e.bitrate<=t||-1===t})),console.log("File scan",a),r.next=9,x.a.awrap(V(e,n[n.length-1].id,a.tracks.video[0].id,a.tracks.audio.map((function(e){return e.id})),[]));case 9:return o=r.sent,console.log("Session",o),r.abrupt("return",o);case 12:case"end":return r.stop()}}))}(e,window.bitrateLimit).then((function(e){d(e.session)}))},loading:!1!==a,value:localStorage.getItem("lastUrl")}),u&&u.stream&&"DASH"===u.stream.type&&o.a.createElement(M,{url:u.stream.url}),u&&u.stream&&"DOWNLOAD"===u.stream.type&&o.a.createElement(q,{url:u.stream.url}))};window.bitrateLimit=8e3,r.a.render(o.a.createElement(G,null),document.getElementById("root"))},8:function(e,t,a){},9:function(e,t,a){e.exports={spinner:"style_spinner__wAv59",spinner1:"style_spinner1__GawAE",spinner2:"style_spinner2__1q-vU",spinner3:"style_spinner3__1UQzU"}}},[[17,1,2]]]);
//# sourceMappingURL=main.aa406d33.chunk.js.map