(this["webpackJsonplight-transcoder-player"]=this["webpackJsonplight-transcoder-player"]||[]).push([[0],{13:function(e,t,n){e.exports={player:"style_player__19nHK"}},14:function(e,t,n){e.exports={player:"style_player__wFyAB"}},17:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),i=n(5),s=n(8),l=n.n(s),u=n(3),d=n.n(u),p=n(9),m=n.n(p),f=function(){return a.a.createElement("div",{className:m.a.spinner},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},v=function(e){var t=e.onChange,n=void 0===t?function(){}:t,c=e.loading,o=void 0!==c&&c,r=e.value,i=void 0===r?"":r;return a.a.createElement("div",{className:d.a.home},a.a.createElement("input",{className:d.a.field,defaultValue:i,readOnly:o,placeholder:"https://mywebsite.com/myfile.mkv",onKeyDown:function(e){13===e.keyCode&&n(e.target.value)}}),a.a.createElement("div",{className:d.a.message},"(Default bitrate: 10Mbit/s)"),a.a.createElement("div",{className:d.a.message},"It's easy! Paste a media file link and press enter ;)"),o&&a.a.createElement(f,null))},h=n(10),b=n(11),y=n(15),O=n(12),g=n(16),j=n(4),_=n.n(j),w=n(13),E=n.n(w),x=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(y.a)(this,Object(O.a)(t).call(this,e))).ref=a.a.createRef(),n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return a.a.createElement("video",{ref:this.ref,className:E.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})}},{key:"componentDidMount",value:function(){if(_.a.polyfill.installAll(),_.a.Player.isBrowserSupported()){var e=new _.a.Player(this.ref.current);e.configure({streaming:{retryParameters:{timeout:1e4,maxAttempts:50,baseDelay:0,backoffFactor:0,fuzzFactor:0}}}),e.addEventListener("error",(function(e){console.error("Error code",e.detail.code,"object",e.detail)})),e.load(this.props.url).then((function(){console.log("The video has now been loaded!")})).catch((function(e){console.error("Error code",e.code,"object",e)})),window._player=e}else console.error("Browser not supported!")}}]),t}(a.a.Component),k=n(2),S=n.n(k),N="http://localhost:8585/",P=n(1),D=function(e){return document.createElement("video").canPlayType(e)},T=function(){return D('audio/mp4; codecs="ac3"')},A=function(){return D('audio/mp4; codecs="ec3"')},C=function(){return D('audio/mp4; codecs="opus"')||D('audio/webm; codecs="opus"')},I=function(){return D('audio/mp4; codecs="flac"')},L=function(){return D('audio/webm; codecs="vorbis"')},B=function(){return D('video/mp4; codecs="hev1.1.6.L93.90"')||D('video/mp4; codecs="hvc1.1.6.L93.90"')},F=function(){return D('video/mp4; codecs="av01.0.01M.08"')},M=function(){return D('video/webm; codecs="vp8"')},J=function(){return D('video/mp4; codecs="vp9"')||D('video/mp4; codecs="vp09.00.10.08"')||D('video/webm; codecs="vp9"')||D('video/webm; codecs="vp09.00.10.08"')},z=function(){return[{type:"DOWNLOAD",format:[{container:"mp4"},{container:"webm"}],video:[{codec:"x264"}].concat(Object(P.a)(B()?[{codec:"hevc"}]:[]),Object(P.a)(F()?[{codec:"av1"}]:[]),Object(P.a)(M()?[{codec:"vp8"}]:[]),Object(P.a)(J()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(P.a)(T()?[{codec:"ac3"}]:[]),Object(P.a)(A()?[{codec:"ec3"}]:[]),Object(P.a)(C()?[{codec:"opus"}]:[]),Object(P.a)(I()?[{codec:"flac"}]:[]),Object(P.a)(L()?[{codec:"vorbis"}]:[])),maxAudioTrack:1,maxVideoTrack:1},{type:"DASH",video:[{codec:"x264"}].concat(Object(P.a)(B()?[{codec:"hevc"}]:[]),Object(P.a)(F()?[{codec:"av1"}]:[]),Object(P.a)(M()?[{codec:"vp8"}]:[]),Object(P.a)(J()?[{codec:"vp9"}]:[])),audio:[{codec:"mp3"},{codec:"aac"}].concat(Object(P.a)(T()?[{codec:"ac3"}]:[]),Object(P.a)(A()?[{codec:"ec3"}]:[]),Object(P.a)(C()?[{codec:"opus"}]:[]),Object(P.a)(I()?[{codec:"flac"}]:[]),Object(P.a)(L()?[{codec:"vorbis"}]:[]))}]};console.log("COMPATIBILITY_MAP",z());var H=function(e){var t;return S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=fetch("".concat(N,"media/analyze"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,supported:z()})}).then((function(e){return e.json()})),n.abrupt("return",t);case 2:case"end":return n.stop()}}))},q=function(){var e,t,n,c,a,o=arguments;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:0,n=o.length>2&&void 0!==o[2]?o[2]:0,c=o.length>3&&void 0!==o[3]?o[3]:[0],o.length>4&&void 0!==o[4]?o[4]:[],a=fetch("".concat(N,"session"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e,profile:t,video:n,audio:c[0],subtitle:"",supported:z()})}).then((function(e){return e.json()})),r.abrupt("return",a);case 7:case"end":return r.stop()}}))},K=n(14),U=n.n(K),V=function(e){var t=e.url,n=void 0===t?"":t;return a.a.createElement("video",{src:n,className:U.a.player,autoPlay:!0,width:"1920",height:"1080",controls:!0})},W=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),u=s[0],d=s[1];return a.a.createElement("div",{className:l.a.home},!u&&a.a.createElement(v,{onChange:function(e){localStorage.setItem("lastUrl",e),o(e),function(e){var t,n,c,a,o=arguments;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:15e3,console.log("Selecting profiles matching with maxBitrate=".concat(t)),r.next=4,S.a.awrap(H(e));case 4:return n=r.sent,c=n.profiles.filter((function(e){return e.bitrate<=t})),console.log("File scan",n),r.next=9,S.a.awrap(q(e,c[c.length-1].id,n.tracks.video[0].id,n.tracks.audio.map((function(e){return e.id})),[]));case 9:return a=r.sent,console.log("Session",a),r.abrupt("return",a);case 12:case"end":return r.stop()}}))}(e,1e4).then((function(e){d(e.session)}))},loading:!1!==n,value:localStorage.getItem("lastUrl")}),u&&u.stream&&"DASH"===u.stream.type&&a.a.createElement(x,{url:u.stream.url}),u&&u.stream&&"DOWNLOAD"===u.stream.type&&a.a.createElement(V,{url:u.stream.url}))};r.a.render(a.a.createElement(W,null),document.getElementById("root"))},3:function(e,t,n){e.exports={home:"style_home__P0ecC",field:"style_field__3E_ai",message:"style_message__3qffF"}},8:function(e,t,n){},9:function(e,t,n){e.exports={spinner:"style_spinner__3ucoZ",spinner1:"style_spinner1__3c814",spinner2:"style_spinner2__1k_LD",spinner3:"style_spinner3__3rqaT"}}},[[17,1,2]]]);
//# sourceMappingURL=main.76d50af9.chunk.js.map