(this["webpackJsonpmaterial-table-test"]=this["webpackJsonpmaterial-table-test"]||[]).push([[0],{16:function(e,t){e.exports={isDebug:!0,appId:"6414a7d4-1f29-41f0-b246-3c9d1fedad32",redirectUri:"http://localhost:3000",scopes:["chat.readwrite","group.readwrite.all","groupmember.readwrite.all","user.readwrite.all"]}},261:function(e,t,a){e.exports=a(439)},266:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(18),o=a.n(r),i=(a(266),a(5)),c=a.n(i),l=a(10),u=a(13),p=a(57),g=a(43),h=a(44),m=a(58),d=a(244),f=a(16),b=a.n(f),v=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{key:this.props.attachment.id}," ",JSON.stringify(this.props.attachment),this.props.attachment.id," ",this.props.attachment.contentType," ",this.props.attachment.contentUrl," ",this.props.attachment.content?this.props.attachment.content:""," ",this.props.attachment.name," ",this.props.attachment.thumbnailUrl?this.props.attachment.thumbnailUrl:""," ")}}]),t}(s.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",null,new Date(Date.parse(this.props.message.createdDateTime)).toLocaleDateString()," ",JSON.stringify(this.props.message),this.props.message.id," ",this.props.message.replyToId?this.props.message.replyToId:""," ",this.props.message.etag," ",this.props.message.messageType," ",new Date(Date.parse(this.props.message.createdDateTime)).toLocaleDateString(),this.props.message.lastModifiedDateTime?new Date(Date.parse(this.props.message.lastModifiedDateTime)).toLocaleDateString():"",this.props.message.deletedDateTime?new Date(Date.parse(this.props.message.deletedDateTime)).toLocaleDateString():"",this.props.message.subject?this.props.message.subject:""," ",this.props.message.summary?this.props.message.summary:""," ",this.props.message.importance," ",this.props.message.locale," ",this.props.message.webUrl," ",this.props.message.policyViolation?this.props.message.policyViolation:""," ",function(){if(e.props.message.from){if(e.props.message.from.application)return n.a.createElement("div",null,e.props.message.from.application," ");if(e.props.message.from.device)return n.a.createElement("div",null,e.props.message.from.device," ");if(e.props.message.from.conversation)return n.a.createElement("div",null,e.props.message.from.conversation," ");if(e.props.message.from.user)return n.a.createElement("div",null,e.props.message.from.user.id," ",e.props.message.from.user.displayName," ",e.props.message.from.user.userIdentityType," ")}}(),function(){if(e.props.message.body){var t=e.props.message.body.content;return"html"===e.props.message.body.contentType?n.a.createElement("div",null,e.props.message.body.contentType," ",n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})," "):n.a.createElement("div",null,e.props.message.body.contentType," ",t," ")}}(),n.a.createElement("ul",null,void(e.props.message.attachments&&e.props.message.attachments.map((function(e){return n.a.createElement(v,{attachment:e})})))))}}]),t}(s.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",null,this.props.messages.map((function(e){return n.a.createElement(y,{key:e.id,message:e})})))}}]),t}(s.Component),w=a(438);function x(e){return w.Client.init({authProvider:function(t){t(null,e.accessToken)}})}function T(e){var t,a;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=x(e),s.next=3,c.a.awrap(t.api("/me").get());case 3:return a=s.sent,s.abrupt("return",a);case 5:case"end":return s.stop()}}))}function S(e){var t,a;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=x(e),s.next=3,c.a.awrap(t.api("/me/joinedTeams").get());case 3:return a=s.sent,s.abrupt("return",a);case 5:case"end":return s.stop()}}))}function k(e,t){var a,s;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=x(e),n.next=3,c.a.awrap(a.api("/teams/"+t).get());case 3:return s=n.sent,n.abrupt("return",s);case 5:case"end":return n.stop()}}))}function N(e,t,a){var s,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return s=x(e),r.next=3,c.a.awrap(s.api("/teams/"+t+"/channels/"+a).get());case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}))}function O(e,t){var a,s;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=x(e),n.next=3,c.a.awrap(a.api("/teams/"+t+"/channels").get());case 3:return s=n.sent,n.abrupt("return",s);case 5:case"end":return n.stop()}}))}function j(e,t,a){var s,n;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return s=x(e),r.next=3,c.a.awrap(s.api("https://graph.microsoft.com/beta/teams/"+t+"/channels/"+a+"/messages?$top=50").get());case 3:return n=r.sent,r.abrupt("return",n);case 5:case"end":return r.stop()}}))}function A(e,t,a,s){var n,r;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=x(e),o.next=3,c.a.awrap(n.api("https://graph.microsoft.com/beta/teams/"+t+"/channels/"+a+"/messages/"+s+"/replies").get());case 3:return r=o.sent,o.abrupt("return",r);case 5:case"end":return o.stop()}}))}function E(e,t,a,s,n){var r,o,i,l;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return r=x(e),o="https://graph.microsoft.com/beta/teams/"+t+"/channels/"+a+"/messages",s&&(o+="/"+s+"/replies"),i={body:{content:n}},u.next=6,c.a.awrap(r.api(o).post(i));case 6:return l=u.sent,console.log("message"),console.log(l),u.abrupt("return",l);case 10:case"end":return u.stop()}}))}function I(e){var t,a;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=x(e),s.next=3,c.a.awrap(t.api("/users").get());case 3:return a=s.sent,s.abrupt("return",a);case 5:case"end":return s.stop()}}))}var C=a(86),M=a(237);function G(e){var t={};return e&&(e=e.substring(1)).split("&").forEach((function(e){var a=e.split("=");t=Object(M.a)({},t,Object(C.a)({},a[0],a[1]))})),console.log("params"),console.log(t),t}var R=a(227),P=a(150),J=a.n(P),U=a(238),L=a.n(U),q=(a(376),a(185)),_=a.n(q),B=a(90),z=(a(437),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).onTreeAction=function(e,t){console.log("onTreeAction:",t,e)},a.onTreeNodeToggle=function(e){console.log("onTreeNodeToggle:",e)},a.signout=function(){a.userAgentApplication.logout()},a.Notify=function(e,t){b.a.isDebug&&console.log("Notify("+String(e)+", "+String(t)+")");var a=new Date;b.a.isDebug&&(console.log("date"),console.log(a));var s=a.getTime();switch(b.a.isDebug&&(console.log("toastId"),console.log(s)),e){case"info":B.b.info(t,{toastId:s});break;case"success":B.b.success(t,{toastId:s});break;case"warning":B.b.warn(t,{toastId:s});break;case"error":B.b.error(t,{toastId:s});break;default:Object(B.b)(t,{toastId:s})}},b.a.isDebug&&console.log("isDebug"),a.state={channels:[],chatMessageText:"",columnsMessageTable:[{title:"ID",field:"id",editable:"never"},{title:"DisplayName",field:"from.user.displayName",editable:"never"},{title:"Content",field:"body.content"},{title:"createdDateTime",field:"createdDateTime",editable:"never"}],columnsUserTable:[{title:"ID",field:"id",editable:"never"},{title:"DisplayName",field:"displayName"},{title:"userPrincipalName",field:"userPrincipalName"},{title:"mobilePhone",field:"mobilePhone"}],isAuthenticated:!1,isDropdownTreeSelectDisabled:!1,messages:[],selected:{channel:{description:"",id:"",name:""},message:{id:""},team:{description:"",id:"",teamName:""}},user:{},users:[]},b.a.isDebug&&(console.log("this.state"),console.log(a.state)),a.ReadGraphData=a.ReadGraphData.bind(Object(h.a)(a)),a.ReadGraphMessagesData=a.ReadGraphMessagesData.bind(Object(h.a)(a)),a.ReadGraphTeamsData=a.ReadGraphTeamsData.bind(Object(h.a)(a)),a.signin=a.signin.bind(Object(h.a)(a)),a.signout=a.signout.bind(Object(h.a)(a)),a.Notify=a.Notify.bind(Object(h.a)(a)),a.onTreeChange=a.onTreeChange.bind(Object(h.a)(a)),a.onTreeAction=a.onTreeAction.bind(Object(h.a)(a)),a.onTreeNodeToggle=a.onTreeNodeToggle.bind(Object(h.a)(a)),a.postChatMessage=a.postChatMessage.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"signin",value:function(){var e,t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.userAgentApplication=new d.a({auth:{clientId:b.a.appId},cache:{cacheLocation:"localStorage",storeAuthStateInCookie:!0}}),b.a.isDebug&&(console.log("this.userAgentApplication"),console.log(this.userAgentApplication)),a.next=4,c.a.awrap(this.userAgentApplication.getAccount());case 4:if(e=a.sent,b.a.isDebug&&(console.log("user"),console.log(e)),!e){a.next=13;break}return console.log("if (user)"),a.next=10,c.a.awrap(this.getUserProfile());case 10:return a.abrupt("return",e);case 13:return console.log("if (!user)"),a.next=16,c.a.awrap(this.login());case 16:return console.log("if (!user) login()"),a.next=19,c.a.awrap(this.userAgentApplication.getAccount());case 19:t=a.sent,b.a.isDebug&&(console.log("if (!user) login() userRetry"),console.log(t));case 21:return a.abrupt("return",null);case 22:case"end":return a.stop()}}),null,this)}},{key:"ReadGraphData",value:function(){var e,t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(G(window.location.search));case 2:if(!(e=a.sent).force){a.next=8;break}return console.log("this.ReadGraphTeamsData(true)"),a.next=7,c.a.awrap(this.ReadGraphTeamsData(!0));case 7:return a.abrupt("return");case 8:if(!e.teamId||!e.channelId){a.next=14;break}return b.a.isDebug&&(console.log('params["teamId"]'),console.log(e.teamId),console.log('params["channelId"]'),console.log(e.channelId),console.log("this.ReadGraphMessagesData();this.ReadGraphTeamsData(false)")),this.ReadGraphMessagesData(e.teamId,"",e.channelId,""),a.next=13,c.a.awrap(this.ReadGraphTeamsData(!1));case 13:return a.abrupt("return");case 14:return(t=localStorage.getItem("state"))&&(b.a.isDebug&&(console.log("loaded"),console.log(t),console.log(JSON.parse(t))),this.setState(JSON.parse(t))),b.a.isDebug&&console.log("this.ReadGraphTeamsData(false)"),a.next=19,c.a.awrap(this.ReadGraphTeamsData(!1));case 19:case"end":return a.stop()}}),null,this)}},{key:"onTreeChange",value:function(e,t){var a,s;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(b.a.isDebug&&console.log("onTreeChange:",e,t),1!==t.length||2!==t[0]._depth){n.next=10;break}if(a=t[0].value.split("/"),s=t[0].label.split("/"),b.a.isDebug&&console.log("onTreeChange:",this.state.selected.team.id,a[0],this.state.selected.channel.id,a[1]),this.state.selected.team.id===a[0]&&this.state.selected.channel.id===a[1]){n.next=9;break}return b.a.isDebug&&console.log("\u8868\u793a\u3059\u308b\u30c1\u30e3\u30cd\u30eb:",a[0],s[0],a[1],s[1]),n.next=9,c.a.awrap(this.ReadGraphMessagesData(a[0],s[0],a[1],s[1]));case 9:return n.abrupt("return");case 10:case"end":return n.stop()}}),null,this)}},{key:"postChatMessage",value:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.chatMessageText){e.next=6;break}return console.log(this.state.chatMessageText),e.next=4,c.a.awrap(window.msal.acquireTokenSilent({scopes:b.a.scopes}));case 4:E(e.sent,this.state.selected.team.id,this.state.selected.channel.id,"undefined"!=typeof this.state.selected.message&&"undefined"!=typeof this.state.selected.message.id?this.state.selected.message.id:"",this.state.chatMessageText?this.state.chatMessageText:"");case 6:case"end":return e.stop()}}),null,this)}},{key:"ReadGraphMessagesData",value:function(e,t,a,s){var n,r,o,i,l,u,p;return c.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return b.a.isDebug&&console.log("ReadGraphMessagesData()"),this.setState({isDropdownTreeSelectDisabled:!0}),g.next=4,c.a.awrap(window.msal.acquireTokenSilent({scopes:b.a.scopes}));case 4:if(n=g.sent,""!==t&&""!==s){g.next=18;break}return g.next=8,c.a.awrap(k(n,e));case 8:return r=g.sent,console.log("gotTeam"),console.log(r),t=r.displayName,g.next=14,c.a.awrap(N(n,e,a));case 14:o=g.sent,console.log("gotChannel"),console.log(o),s=o.displayName;case 18:return g.next=20,c.a.awrap(j(n,e,a));case 20:i=g.sent,b.a.isDebug&&(console.log("gotmessages"),console.log(i)),l=0,u=i.value.length;case 23:if(!(l<u)){g.next=33;break}return g.next=26,c.a.awrap(A(n,e,a,i.value[l].id));case 26:p=g.sent,b.a.isDebug&&console.log("gotmessages i:"+String(l)+" r.value:",p.value),i.value[l].replies=p.value,this.setState({messages:i.value});case 30:++l,g.next=23;break;case 33:this.setState({selected:{channel:{id:a,name:s},team:{id:e,name:t}}}),this.setState({isDropdownTreeSelectDisabled:!1});case 35:case"end":return g.stop()}}),null,this)}},{key:"ReadGraphTeamsData",value:function(){var e,t,a,s,n,r,o,i,l,u,p,g,h,m,d,f=arguments;return c.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:return e=f.length>0&&void 0!==f[0]&&f[0],b.a.isDebug&&console.log("ReadGraphTeamsData("+String(e)+")"),v.prev=2,v.next=5,c.a.awrap(window.msal.acquireTokenSilent({scopes:b.a.scopes}));case 5:if(t=v.sent,!e&&this.state.users&&0!==this.state.users.length){v.next=13;break}return v.next=9,c.a.awrap(I(t));case 9:a=v.sent,b.a.isDebug&&(console.log("gotusers"),console.log(a)),this.setState({users:a.value}),this.Notify("success","[Graph API]\u30e6\u30fc\u30b6\u30fc\u8aad\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002");case 13:if(b.a.isDebug&&(console.log("this.state.users"),console.log(this.state.users)),!e&&this.state.teams&&0!==this.state.teams.length){v.next=21;break}return v.next=17,c.a.awrap(S(t));case 17:s=v.sent,b.a.isDebug&&(console.log("gotTeams.value"),console.log(s.value)),this.setState({teams:s.value}),this.Notify("success","[Graph API]\u30c1\u30fc\u30e0\u8aad\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002");case 21:if(b.a.isDebug&&(console.log("this.state.teams"),console.log(this.state.teams)),!e&&this.state.channels&&0!==this.state.channels.length){v.next=41;break}n={label:"Channels",value:"Channels",children:[]},r=0,o=this.state.teams.length;case 25:if(!(r<o)){v.next=41;break}return i=this.state.teams[r],b.a.isDebug&&console.log("i: "+String(r)+" team:"+this.state.teams[r].id),i.desc=this.state.teams[r].description,i.label=this.state.teams[r].displayName,i.value=this.state.teams[r].id,i.children=[],v.next=34,c.a.awrap(O(t,this.state.teams[r].id));case 34:for(l=v.sent,u=0,p=l.value.length;u<p;++u)g=this.state.teams[r].displayName+"/"+l.value[u].displayName,h=this.state.teams[r].id+"/"+l.value[u].id,(m=l.value[u]).desc=this.state.teams[r].description,m.label=g,m.value=h,i.children.push(m);n.children.push(i),this.setState({channels:n});case 38:++r,v.next=25;break;case 41:b.a.isDebug&&(console.log("this.state.channels"),console.log(this.state.channels)),b.a.isDebug&&(console.log("localStorage.setItem"),console.log("JSON.stringify(this.state)"),console.log(JSON.stringify(this.state)),console.log("JSON.stringify(valuesToSave)")),d={channels:this.state.channels,teams:this.state.teams,users:this.state.users},localStorage.setItem("state",JSON.stringify(d)),b.a.isDebug&&console.log(JSON.stringify(d)),this.Notify("success","[Graph API]\u30c1\u30e3\u30cd\u30eb\u8aad\u8fbc\u307f\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002"),v.next=53;break;case 49:v.prev=49,v.t0=v.catch(2),b.a.isDebug&&(console.log("ReadGraphTeamsData() err"),console.log(v.t0)),this.Notify("error","\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f: ".concat(v.t0.message," : ").concat(v.t0.fileName," : ").concat(v.t0.lineNumber));case 53:case"end":return v.stop()}}),null,this,[[2,49]])}},{key:"login",value:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return b.a.isDebug&&console.log("login()"),e.prev=1,e.next=4,c.a.awrap(this.userAgentApplication.loginPopup({scopes:b.a.scopes,prompt:"select_account"}));case 4:return e.next=6,c.a.awrap(this.getUserProfile());case 6:e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),b.a.isDebug&&(console.log("login() err"),console.log(e.t0)),this.setState({isAuthenticated:!1,user:{}}),this.Notify("error","\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f: ".concat(e.t0.message," : ").concat(e.t0.fileName," : ").concat(e.t0.lineNumber));case 13:case"end":return e.stop()}}),null,this,[[1,8]])}},{key:"logout",value:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return b.a.isDebug&&console.log("logout()"),e.next=3,c.a.awrap(this.userAgentApplication.logout());case 3:case"end":return e.stop()}}),null,this)}},{key:"getUserProfile",value:function(){var e,t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return b.a.isDebug&&console.log("getUserProfile()"),a.prev=1,a.next=4,c.a.awrap(this.userAgentApplication.acquireTokenSilent({scopes:b.a.scopes}));case 4:if(!(e=a.sent)){a.next=13;break}return a.next=8,c.a.awrap(T(e));case 8:t=a.sent,console.log("usr"),console.log(t),this.setState({isAuthenticated:!0,user:{displayName:t.displayName,email:t.mail||t.userPrincipalName}}),console.log("setState");case 13:a.next=19;break;case 15:a.prev=15,a.t0=a.catch(1),this.setState({isAuthenticated:!1,user:null}),this.Notify("error","\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f: ".concat(a.t0.message," : ").concat(a.t0.fileName," : ").concat(a.t0.lineNumber));case 19:case"end":return a.stop()}}),null,this,[[1,15]])}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),n.a.createElement("div",null,function(){if(e.state.isAuthenticated)return n.a.createElement("div",null,"\u3088\u3046\u3053\u305d\u3001",e.state.user.displayName," (",e.state.user.email,")\u3055\u3093","   ",n.a.createElement(R.a,{variant:"contained",onClick:e.signout},"\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8"," "))}()," ")," ",function(){if(e.state.channels)return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(L.a,{data:e.state.channels,disabled:e.state.isDropdownTreeSelectDisabled,mode:"radioSelect",onChange:e.onTreeChange,onAction:e.onTreeAction,onNodeToggle:e.onTreeNodeToggle,texts:{placeholder:"Select a Channel..."}}),e.state.selected?(e.state.selected.team?(e.state.selected.team.name?e.state.selected.team.name:"")+" "+(e.state.selected.team.id?"( "+e.state.selected.team.id+" )":""):"")+(e.state.selected.channel?(e.state.selected.channel.name?" / "+e.state.selected.channel.name:"")+" "+(e.state.selected.channel.id?"( "+e.state.selected.channel.id+" )":""):""):""," "),n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:"messageId",placeholder:"messageId",value:e.state.selected.message?e.state.selected.message.id:"",onChange:function(t){var a=Object.assign({},e.state);a.selected.message={id:t.target.value},e.setState(a)}}),n.a.createElement("input",{type:"text",name:"chatMessageText",placeholder:"chatMessageText",value:e.state.chatMessageText,onChange:function(t){return e.setState({chatMessageText:t.target.value})}}),n.a.createElement("button",{onClick:e.postChatMessage},"Post"))))}()," ",function(){if(e.state.messages)return n.a.createElement(D,{messages:e.state.messages})}()," ",function(){if(e.state.messages)return n.a.createElement(_.a,{actions:[{icon:"reply",tooltip:"",onClick:function(t,a){console.log("onClick()",a);var s=Object.assign({},e.state);s.selected.message={id:a.id},e.setState(s)}}],title:"React-GraphApi-MSTeams",columns:e.state.columnsMessageTable,data:e.state.messages,options:{pageSize:20,sorting:!0}})}()," ",function(){if(e.state.messages)return n.a.createElement(J.a,{data:e.state.messages})}()," ",function(){if(e.state.channels)return n.a.createElement(J.a,{data:e.state.channels})}()," ",function(){if(e.state.teams)return n.a.createElement(J.a,{data:e.state.teams})}()," ",n.a.createElement(_.a,{title:"React-GraphApi-MSTeams",columns:this.state.columnsUserTable,data:this.state.users,options:{pageSize:20,sorting:!0}})," ",n.a.createElement(B.a,{hideProgressBar:!0}))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[261,1,2]]]);
//# sourceMappingURL=main.bc9eed24.chunk.js.map