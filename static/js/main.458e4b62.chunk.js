(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(41)},19:function(e,t,a){},21:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(13),i=a.n(r),o=(a(19),a(3)),c=a(4),l=a(7),u=a(5),m=a(8),h=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message"},s.a.createElement("span",{className:"message-author"},this.props.message.userName,":"),this.props.message.message)}}]),t}(n.Component)),d=a(2),p=a.n(d),g=(a(37),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={userName:"Mr PlaceHolder",message:"",list:[]},a.messageRef=p.a.database().ref().child("messages"),a.handleChange=function(e){a.setState({message:e.target.value})},a.handleSend=function(){if(a.state.message){var e={userName:a.state.userName,message:a.state.message};a.messageRef.push(e),a.setState({message:""})}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.listenMessages()}},{key:"componentWillReceiveProps",value:function(e){e.user&&this.setState({userName:e.user.displayName})}},{key:"listenMessages",value:function(){var e=this;this.messageRef.limitToLast(10).on("value",function(t){e.setState({list:Object.values(t.val())})})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSend()}},{key:"render",value:function(){return s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"form-msg-list"},this.state.list.map(function(e,t){return s.a.createElement(h,{key:t,message:e})})),s.a.createElement("div",{className:"form-input-row"},s.a.createElement("input",{className:"form-input",type:"text",placeholder:"Type message here",value:this.state.message,onChange:this.handleChange,onKeyPress:this.handleKeyPress.bind(this)}),s.a.createElement("button",{className:"form-msg-send",onClick:this.handleSend},"Send")),s.a.createElement("p",null,"Current username: ",this.state.userName))}}]),t}(n.Component));a(39);p.a.initializeApp({apiKey:"AIzaSyAfuEFWmsjU7AifzBLomYYd459Pz02zysE",authDomain:"online-chat-6203d.firebaseapp.com",databaseURL:"https://online-chat-6203d.firebaseio.com",projectId:"online-chat-6203d",storageBucket:"online-chat-6203d.appspot.com",messagingSenderId:"107912395345"});var f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={user:null},a.componentDidMount=function(){p.a.auth().onAuthStateChanged(function(e){a.setState({user:e})})},a.handleSignIn=function(){var e=new p.a.auth.GoogleAuthProvider;p.a.auth().signInWithPopup(e)},a.handleLogOut=function(){p.a.auth().signOut()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app-header"},s.a.createElement("h1",null,"Online chat"),s.a.createElement("h4",null,"React + Firebase"),s.a.createElement("a",{className:"credits",href:"https://rmrotek.github.io/",rel:"noopener noreferrer",target:"_blank"},"Made by Remigiusz Mrotek"),s.a.createElement("p",null,"You can sign in with google acccount to change your user name"),s.a.createElement("div",{className:"app-user-login"},this.state.user?s.a.createElement("button",{className:"btn",onClick:this.handleLogOut},"Logout"):s.a.createElement("button",{className:"btn",onClick:this.handleSignIn},"Sign in"))),s.a.createElement("div",{className:"app-main"},s.a.createElement(g,{user:this.state.user})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.458e4b62.chunk.js.map