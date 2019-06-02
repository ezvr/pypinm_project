(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(279)},144:function(e,t,a){},145:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},146:function(e,t,a){},276:function(e,t){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=(a(144),a(59)),l=a(27),c=a(67),m=a(60),u=a(11),d=a(68),p=(a(145),a(146),a(61)),h=a(84),v=a(23),b=a(315),f=a(24),g=a(310),k=a(312),E=a(317),y=a(319);function j(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  padding: 1.5rem;\n"]);return j=function(){return e},e}var O=f.a.form(j()),x=function(e){e.socket;var t=e.setFormData,a=e.formData,n=e.formSend,o=e.startCalculation;function i(e){var a=e.target,n="checkbox"===a.type?a.checked:a.value,r=a.name;t(r,n)}return r.a.createElement(O,null,r.a.createElement(b.a,{id:"diam",name:"diam",label:"Diameter",className:1,value:a.diam,onChange:function(e){return i(e)},margin:"normal"}),r.a.createElement(b.a,{id:"pressure",name:"pressure",label:"Pritisk",className:1,value:a.pressure,onChange:i,margin:"normal"}),r.a.createElement(b.a,{id:"height",name:"height",label:"Height",className:1,value:a.height,onChange:i,margin:"normal"}),r.a.createElement(b.a,{id:"gravity",name:"gravity",label:"Gravitacija",className:1,value:a.gravity,onChange:i,margin:"normal"}),r.a.createElement(g.a,null,r.a.createElement(E.a,{htmlFor:"material"},"Material"),r.a.createElement(k.a,{id:"material",name:"material",value:a.material,onChange:i,inputProps:{name:"material",id:"material"},style:{textAlign:"left"}},r.a.createElement(y.a,{value:"iron"},"\u017delezo [7874 kg/m^3]"),r.a.createElement(y.a,{value:"aluminum"},"Aluminij [2700 kg/m^3]"),r.a.createElement(y.a,{value:"lead"},"Svinec [11340 kg/m^3]"),r.a.createElement(y.a,{value:"paper"},"Papir [700 kg/m^3]"),r.a.createElement(y.a,{value:"snow"},"Sneg [560 kg/m^3]"),r.a.createElement(y.a,{value:"wool"},"Volna [100 kg/m^3]"),r.a.createElement(y.a,{value:"rubber"},"Guma [1100 kg/m^3]"))),r.a.createElement("input",{type:"submit",value:"Po\u0161lji nastavitve",onClick:function(e){return n(e)},style:{marginBottom:"0.5rem",marginTop:"1rem"}}),r.a.createElement("input",{type:"submit",value:"Izra\u010dunaj",onClick:function(e){return o(e)}}))},C=a(127);function w(){var e=Object(v.a)(["\n  background-color: whitesmoke;\n  margin-bottom: 0.5rem;\n  border-radius: 5px;\n  min-height: 200px;\n"]);return w=function(){return e},e}var D=f.a.div(w()),S=function(e){return r.a.createElement(D,null,r.a.createElement(C.a,{data:{labels:e.x,datasets:[{label:e.title,data:e.y,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},width:100,height:50,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{display:e.ticks}}]}}}))};function N(){var e=Object(v.a)(["\n  padding: 0 2rem;\n  flex: 1 1 400px;\n  max-width: 400px;\n"]);return N=function(){return e},e}var F=f.a.div(N()),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleFormSend=function(e){e.preventDefault(),console.log("Sent: ".concat(a.state.form.density)),a.props.socket.emit("settings",{id:a.props.id,data:{g0:a.state.form.gravity,height:a.state.form.height,diam:a.state.form.diam,pressure:a.state.form.pressure,density:a.state.form.material}})},a.startCalculation=function(e){e.preventDefault(),console.log("starting calculation"),a.props.socket.emit("startCalculation",{id:a.props.id})},a.state={form:{pressure:1,gravity:9.81,height:67,diam:.02,material:"iron"},response:{a:null,v:null,y:null,t:null}},a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a.setFormDataState=a.setFormDataState.bind(Object(u.a)(a)),a.handleFormSend=a.handleFormSend.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.socket.emit("createEnviroment",{id:this.props.id}),this.props.socket.emit("settings",{id:this.props.id,data:{g0:this.state.form.gravity,height:this.state.form.height,diam:this.state.form.diam,pressure:this.state.form.pressure,density:this.state.form.material}}),this.props.socket.on("calculationResponse",function(t){if(t.id===e.props.id){console.log("Response! ID: ",t.id),console.log("Response! data: ",t.data);var a=t.data.t.map(function(e){return Number(e.toFixed(2))});e.setState({response:{a:t.data.a,v:t.data.v,y:t.data.y,t:a}})}})}},{key:"setFormDataState",value:function(e,t){this.setState(function(a){return Object(h.a)({},a,{form:Object(h.a)({},a.form,Object(p.a)({},e,t))})})}},{key:"render",value:function(){return r.a.createElement(F,null,null!==this.state.response.t&&r.a.createElement(S,{id:"acceleration",x:this.state.response.t,y:this.state.response.a,title:"Pospe\u0161ek"}),null!==this.state.response.t&&r.a.createElement(S,{id:"acceleration",x:this.state.response.t,y:this.state.response.v,title:"Hitrost"}),null!==this.state.response.t&&r.a.createElement(S,{id:"acceleration",x:this.state.response.t,y:this.state.response.y,title:"Pot",ticks:!0}),r.a.createElement(x,{socket:this.props.socket,setFormData:this.setFormDataState,formData:this.state.form,formSend:this.handleFormSend,startCalculation:this.startCalculation}))}}]),t}(r.a.Component),M=a(129),P=a.n(M),R=a(311),B=a(314),I=a(130),W=a.n(I),z=a(131),G=a.n(z);function H(){var e=Object(v.a)(["\nmargin-right:2rem;\n"]);return H=function(){return e},e}function J(){var e=Object(v.a)(["\nposition:absolute;\ntop:2rem;\ndisplay:flex;\nmin-width:200px;\njustify-content:space-evenly;\n"]);return J=function(){return e},e}var T=Object(f.a)(B.a)(J()),V=Object(f.a)(R.a)(H()),Z=function(e){return r.a.createElement(T,{color:"text.primary"},r.a.createElement(V,{color:"default","aria-label":"Add",className:2,onClick:function(){return e.addEnviroment()}},r.a.createElement(W.a,null)),r.a.createElement(V,{color:"default","aria-label":"Add",className:2,onClick:function(){return e.removeEnviroment()}},r.a.createElement(G.a,null)))},$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={enviromentNumber:1,socket:null},a.socketConnect=a.socketConnect.bind(Object(u.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a.addEnviroment=a.addEnviroment.bind(Object(u.a)(a)),a.removeEnviroment=a.removeEnviroment.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"socketConnect",value:function(){var e=P()("http://localhost:8080");e.on("connect",function(){console.log("connected")}),this.setState({socket:e})}},{key:"componentDidMount",value:function(){this.socketConnect()}},{key:"addEnviroment",value:function(){this.setState({enviromentNumber:this.state.enviromentNumber+1})}},{key:"removeEnviroment",value:function(){this.setState({enviromentNumber:this.state.enviromentNumber-1})}},{key:"render",value:function(){var e=q(this.state.enviromentNumber,this.state.socket);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(Z,{addEnviroment:this.addEnviroment,removeEnviroment:this.removeEnviroment}),null===this.state.socket?"Connecting":e))}}]),t}(r.a.Component),q=function(e,t){for(var a=[],n=0;n<e;n++)a.push(r.a.createElement(A,{key:n,id:n,socket:t}));return a},K=$;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[139,1,2]]]);
//# sourceMappingURL=main.7fba2677.chunk.js.map