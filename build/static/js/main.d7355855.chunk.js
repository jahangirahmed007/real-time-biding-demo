(this.webpackJsonpbidding=this.webpackJsonpbidding||[]).push([[0],{33:function(t,e,n){t.exports=n(70)},38:function(t,e,n){},66:function(t,e){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var o,a=n(0),c=n.n(a),i=n(25),s=n.n(i),l=(n(38),n(26)),r=n(27),u=n(31),m=n(28),d=n(32),h=n(29),v=n.n(h),g=(n(69),n(30)),f="/",p=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={count:"",amount:"",value:0,message:null,color:"#0000FF"},n.socketInit=function(){(o=v()(f)).on("userCount",(function(t){console.log(t),n.setState({count:t.count})}))},n.doIncrement=function(){n.state.value<1e3?(n.setState({value:n.state.value+25,message:null,color:"#004c00"}),console.log(n.state.value)):n.setState({message:"Can't increment. Since 10 is the max value"}),n.Bidding()},n.Bidding=function(){o.emit("data",{val:n.state.value+25,color:"#FF0000"})},n}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.socketInit(),o.on("newData",(function(e){t.setState({value:e.new,color:e.color})}))}},{key:"render",value:function(){return console.log(this.state),c.a.createElement("div",{className:"App"},c.a.createElement("h3",null,"User Count :",this.state.count),c.a.createElement(g.CountdownCircleTimer,{key:this.state.value,isPlaying:!0,durationSeconds:5,colors:[["".concat(this.state.color),1]]}),c.a.createElement("h3",null," Bidding Amount : ",this.state.value),c.a.createElement("button",{className:"btn btn-danger px-4 mt-4",onClick:this.doIncrement},"BID"))}}]),e}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d7355855.chunk.js.map