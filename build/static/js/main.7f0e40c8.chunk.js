(this["webpackJsonpdigi-health"]=this["webpackJsonpdigi-health"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},172:function(e,t,a){},178:function(e,t,a){},296:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(80),c=a.n(i),l=a(13),r=a(8),o=a(11),j=[{name:"Guest",password:"password",totalScreenTime:436,totalSitesPerDay:17,totalDigitalIds:9,mostTimeSpent:"StackOverflow",moneySpent:"Amazon",actuals:{social:445,productivity:65,finance:45,entertainment:445},goals:{social:45,productivity:45,finance:45,entertainment:45}},{name:"Jane",password:"password",totalScreenTime:325,totalSitesPerDay:15,totalDigitalIds:12,mostTimeSpent:"Instagram",moneySpent:"ASOS",actuals:{social:145,productivity:45,finance:345,entertainment:45},goals:{social:35,productivity:55,finance:65,entertainment:35}},{name:"Joseph",password:"password",totalScreenTime:836,totalSitesPerDay:3,totalDigitalIds:5,mostTimeSpent:"Netflix",moneySpent:"Currys",actuals:{social:445,productivity:45,finance:65,entertainment:45},goals:{social:10,productivity:10,finance:10,entertainment:10}},{name:"isLoggedOut",password:"password",totalScreenTime:436,totalSitesPerDay:17,totalDigitalIds:9,mostTimeSpent:"StackOverflow",moneySpent:"eBay",actuals:{social:90,productivity:45,finance:65,entertainment:45},goals:{social:45,productivity:45,finance:45,entertainment:45}}],d=a(2),h=Object(s.createContext)(),b=function(e){var t=Object(s.useState)(j[0]),a=Object(o.a)(t,2),n=a[0],i=a[1];return Object(d.jsx)(h.Provider,{value:{user:n,setUser:i},children:e.children})},m=a(36),u=a(30),x=a(18),p=n.a.createContext();function O(e){var t=Object(x.a)(),a=Object(s.useContext)(h).setUser,n=Object(s.useState)("/"),i=Object(o.a)(n,2),c=i[0],l=i[1],r=Object(s.useState)(!1),b=Object(o.a)(r,2),O=b[0],g=b[1],f=Object(s.useState)({username:"",password:""}),v=Object(o.a)(f,2),y=v[0],w=v[1],S=Object(s.useState)({name:"",email:"",password:""}),C=Object(o.a)(S,2),N=C[0],D=C[1],k=Object(s.useState)(!0),L=Object(o.a)(k,2),I=L[0],A=L[1];return Object(d.jsx)(p.Provider,{value:{history:t,login:y,signUp:N,errAuth:O,openModal:I,handleSubmit:function(e){e.preventDefault();var s=j.find((function(e){return e.name.toLowerCase()===y.username.toLowerCase()}));console.log(s),s.password===y.password?a(s)&&t.push("/goals",{from:"login"}):g(!0)},closeModal:function(){A(!1)},handleChange:function(e){var t=e.target,a=t.name,s=t.value;w(Object(u.a)(Object(u.a)({},y),{},Object(m.a)({},a,s))),D(Object(u.a)(Object(u.a)({},N),{},Object(m.a)({},a,s)))},currentView:c,setCurrentView:l},children:e.children})}a(172);var g=a(51),f=(a(173),function(e){var t=Object(s.useContext)(p).currentView,a=Object(s.useContext)(h).user;return Object(d.jsxs)("nav",{className:"sideNavBar",children:[Object(d.jsx)("h1",{className:"digihealth",children:"DigiHealth"}),Object(d.jsxs)("div",{className:"greetingBox",children:[Object(d.jsx)("h4",{children:"Welcome"}),Object(d.jsx)("h3",{className:"userName",children:a.name})]}),Object(d.jsxs)("div",{className:"statsContainer",children:[Object(d.jsx)(g.a,{content:Object(d.jsx)("span",{children:"Total Screen Time: How many hours spent online"}),theme:"digihealth",placement:"right",delay:"205",animation:"scale-subtle",children:Object(d.jsxs)("div",{className:"statsRow",children:[Object(d.jsx)("i",{class:"far fa-clock"}),Object(d.jsxs)("h5",{children:[a.totalScreenTime," hrs."]})]})}),Object(d.jsx)(g.a,{content:Object(d.jsx)("span",{children:"Total Sites Per Day: How many sites you vistit per day"}),theme:"digihealth",placement:"right",delay:"205",animation:"scale-subtle",children:Object(d.jsxs)("div",{className:"statsRow",children:[Object(d.jsx)("i",{class:"far fa-browser"}),Object(d.jsxs)("h5",{children:[a.totalSitesPerDay," Sites"]})]})}),Object(d.jsx)(g.a,{content:Object(d.jsx)("span",{children:"Total Digital IDs: How many logins you have online"}),theme:"digihealth",placement:"right",delay:"205",animation:"scale-subtle",children:Object(d.jsxs)("div",{className:"statsRow",children:[Object(d.jsx)("i",{class:"far fa-user"}),Object(d.jsxs)("h5",{children:[a.totalDigitalIds," IDs"]})]})}),Object(d.jsx)(g.a,{content:Object(d.jsx)("span",{children:"Most Time Spent: Which site you spend the most time on"}),theme:"digihealth",placement:"right",delay:"205",animation:"scale-subtle",children:Object(d.jsxs)("div",{className:"statsRow",children:[Object(d.jsx)("i",{class:"far fa-bookmark"}),Object(d.jsx)("h5",{children:a.mostTimeSpent})]})}),Object(d.jsx)(g.a,{content:Object(d.jsx)("span",{children:"Money Spent: Which site you spend the most money on"}),theme:"digihealth",placement:"right",delay:"205",animation:"scale-subtle",children:Object(d.jsxs)("div",{className:"statsRow",children:[Object(d.jsx)("i",{class:"far fa-shopping-cart"}),Object(d.jsx)("h5",{children:a.moneySpent})," "]})}),Object(d.jsx)("div",{className:"statsRow"}),Object(d.jsx)("div",{className:"statsRow"}),Object(d.jsx)("div",{className:"statsRow"}),Object(d.jsx)("div",{className:"statsRow"})]}),e.children,Object(d.jsxs)("div",{className:"navButtonGroup",children:[Object(d.jsx)(l.b,{to:"/goals"===t.pathname?"/digitalhealthscore":"/goals",children:Object(d.jsx)("button",{className:"largeButton",children:"/goals"===t.pathname?"Back to Dashboard":"Goals"})}),Object(d.jsx)(l.b,{to:"/avatarshop"===t.pathname?"/digitalhealthscore":"/avatarshop",children:Object(d.jsx)("button",{className:"smallButton",id:"avatarShopButton",children:"/avatarshop"===t.pathname?"Back to Dashboard":"Avatar Shop"})})]}),Object(d.jsx)(l.b,{to:"/about",children:Object(d.jsx)("p",{className:"about",children:"About us"})})]})}),v=function(e){return Object(d.jsxs)("div",{style:{maxWidth:"80vw",height:"100vh",backgroundColor:"white",display:"flex",flexDirection:"column"},children:[Object(d.jsx)("h1",{style:{height:"65px",width:"80vw",textAlign:"center",marginTop:"3vh"},children:e.pagetitle}),Object(d.jsx)("div",{style:{width:"80vw",height:"fit-content",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:e.children})]})},y=(a(178),function(e){var t=Object(r.g)(),a=Object(s.useContext)(p).setCurrentView,n=Object(s.useContext)(h),i=n.user,c=n.setUser,l=Object(s.useState)({social:45,productivity:45,finance:45,entertainment:45}),j=Object(o.a)(l,2),b=j[0],x=j[1],O=function(e){var t=e.target,a=t.name,s=t.value;x((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},a,s))}))},g=function(){c((function(e){return Object(u.a)(Object(u.a)({},e),{},{goals:b})}))};return Object(s.useEffect)((function(){g()}),[b]),Object(s.useEffect)((function(){a(t)}),[]),Object(d.jsx)(v,{pagetitle:"Goals",children:Object(d.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"row"},children:[Object(d.jsxs)("form",{className:"goalsForm",id:"goalsForm",children:[Object(d.jsx)("h3",{children:"Adjust Your Goals"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("h5",{className:"rangeLabel",children:"Social: "}),Object(d.jsx)("input",{type:"range",min:"0",max:"360",step:"10",name:"social",id:"socialSlider",value:b.social,onChange:O,className:"rangeSliders",size:"lg",htmlFor:"social",tooltip:"auto",variant:"primary"}),Object(d.jsxs)("h5",{className:"rangeLabel",children:[i.goals.social," Minutes"]})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("h5",{className:"rangeLabel",children:"Productivity: "}),Object(d.jsx)("input",{type:"range",min:"0",max:"360",step:"10",name:"productivity",id:"productivitySlider",value:b.productivity,onChange:O,onMouseUp:g,className:"rangeSliders",size:"lg",htmlFor:"productivity",tooltip:"auto",variant:"success"}),Object(d.jsxs)("h5",{className:"rangeLabel",children:[i.goals.productivity," Minutes"]})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("h5",{className:"rangeLabel",children:"Finance: "}),Object(d.jsx)("input",{type:"range",min:"0",max:"360",step:"10",name:"finance",id:"financeSlider",value:b.finance,onChange:O,onMouseUp:g,className:"rangeSliders",size:"lg",htmlFor:"finance",tooltip:"auto",variant:"danger"}),Object(d.jsxs)("h5",{className:"rangeLabel",children:[i.goals.finance," Minutes"]})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("h5",{className:"rangeLabel",children:"Entertainment: "}),Object(d.jsx)("input",{type:"range",min:"0",max:"360",step:"10",name:"entertainment",id:"entertainmentSlider",value:b.entertainment,onChange:O,onMouseUp:g,className:"rangeSliders",size:"lg",htmlFor:"entertainment",tooltip:"auto",variant:"warning"}),Object(d.jsxs)("h5",{className:"rangeLabel",children:[i.goals.entertainment," Minutes"]})]})]}),Object(d.jsx)("img",{src:"https://thedailyaztec.com/wp-content/uploads/2020/04/Untitled_Artwork-1-675x900.png",alt:"Screen Time"})]})})}),w=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{style:{display:"grid",border:"1px solid #e2e8f0",borderRadius:"8px",boxShadow:"0px 13px 37px rgba(0, 0, 0, 0.21)",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(4, 1fr)"},children:[Object(d.jsx)("img",{src:e.itemImg,alt:e.index,style:{width:"100%",height:"75px",gridRow:"2/3",gridColumn:"2/3"}}),Object(d.jsx)("h3",{style:{gridRow:"4/5",paddingLeft:"1em"},children:e.desc}),Object(d.jsx)("img",{src:e.coin,alt:e.index,style:{width:"46.75px",height:"44px",gridRow:"4/5",gridColumn:"3/4"}}),Object(d.jsx)("h3",{style:{gridRow:"4/5",gridColumn:"3/4",paddingLeft:"1em",fontWeight:300},children:e.price})]})})},S=(a(114),function(){var e=Object(s.useState)([{url:"./cowboyhat.png",desc:"Hat",coin:"./DHCoin.png",price:"$25"},{url:"./spectacles.png",desc:"Glasses",coin:"./DHCoin.png",price:"$20"},{url:"./necklace.png",desc:"Necklace",coin:"./DHCoin.png",price:"$15"}]),t=Object(o.a)(e,2),a=t[0],n=(t[1],a.map((function(e,t){return Object(d.jsx)(w,{index:e.i,itemImg:e.url,desc:e.desc,coin:e.coin,price:e.price},t)})));return Object(d.jsx)(v,{pagetitle:"Avatar Shop",children:Object(d.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",padding:"64px"},children:[Object(d.jsx)("div",{className:"avatarContainer",children:n}),Object(d.jsx)("div",{style:{width:"612px",height:"216px",background:"#f7ce46",border:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",margin:"3em auto"},children:Object(d.jsx)("h1",{style:{fontFamily:"Inter",fontStyle:"Italic",fontWeight:"bold",weight:"700",size:"48px",lineHeight:"56px",width:"454px"},children:"More Coming Soon..."})})]})})});var C=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{fontFamily:"Inter",fontWeight:"800",fontSize:"50px",lineHeight:"80px",letterSpacing:"-.04em",color:"#E8EDFB",marginBottom:"24px"},children:"DigiHealth"})})};a(115);var N=function(e){var t=Object(s.useContext)(p),a=t.handleSubmit,n=t.handleChange,i=t.login,c=t.errAuth,l=(t.setErrAuth,Object(s.useState)(!1)),r=Object(o.a)(l,2),j=r[0],h=r[1];return Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"mainContent",children:Object(d.jsxs)("div",{className:"form-container-wrapper",children:[Object(d.jsx)(C,{}),Object(d.jsx)("div",{className:"form-container",children:Object(d.jsxs)("form",{className:"form",onSubmit:a,children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsxs)("label",{className:"label-names",for:"username",children:["Username ",c?Object(d.jsx)("p",{children:"Username or password is incorrect"}):""]}),Object(d.jsx)("input",{type:"text",name:"username",value:i.username,placeholder:"Input username",onChange:n}),Object(d.jsxs)("label",{className:"label-names",for:"password",children:["Password ",c?Object(d.jsx)("p",{children:"Username or password is incorrect"}):"",Object(d.jsx)("span",{style:{marginLeft:"16px",color:"green",textAlign:"right"},onClick:function(){return h(!j)},children:j?"Hide":"Show"})]}),Object(d.jsx)("input",{type:j?"text":"password",name:"password",value:i.password,placeholder:"Input password",onChange:n}),Object(d.jsxs)("label",{for:"remember password",children:[Object(d.jsx)("input",{type:"checkbox",name:"remember password"}),"Remember Password"]}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("button",{type:"submit",children:"Login"}),e.altpath]})]})})]})})})};var D=function(e){var t=Object(s.useContext)(p),a=t.signUp,n=t.handleSubmit,i=t.handleChange,c=Object(s.useState)(!1),r=Object(o.a)(c,2),j=r[0],h=r[1];return Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"mainContent",children:Object(d.jsxs)("div",{className:"form-container-wrapper",children:[Object(d.jsx)(C,{}),Object(d.jsx)("div",{className:"form-container",children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){console.log("data was submitted"),n(e)},children:[Object(d.jsx)("h2",{children:"Sign Up"}),Object(d.jsx)("label",{className:"label-names",for:"username",children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",value:a.name,placeholder:"Input name",onChange:i}),Object(d.jsx)("label",{className:"label-names",for:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",name:"email",value:a.email,placeholder:"Input email",onChange:i}),Object(d.jsxs)("label",{style:{width:"100%",display:"flex",justifyContent:"space-between"},className:"label- names",for:"password",children:["Password"," ",Object(d.jsx)("span",{style:{marginLeft:"16px",color:"green",textAlign:"right"},onClick:function(){return h(!j)},children:j?"Hide":"Show"})]}),Object(d.jsx)("input",{type:j?"text":"password",name:"password",value:a.password,placeholder:"Input password",onChange:i}),Object(d.jsxs)("label",{for:"remember password",children:[Object(d.jsx)("input",{type:"checkbox",name:"remember password"}),"I agree to the terms of service."]}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("button",{type:"submit",children:"Sign Up"}),e.altpath]}),Object(d.jsx)(l.b,{to:"/digitalhealthscore",children:Object(d.jsx)("p",{className:"guest-login",children:"Continue as guest"})})]})})]})})})},k=a(31),L=function(e){var t=Object(s.useContext)(p),a=(t.currentView,t.setCurrentView,Object(s.useContext)(h)),n=(a.user,a.setUser),i=function(e){var t=e.target.getAttribute("id"),a=j.filter((function(e){return e.name.toLocaleLowerCase()===t.toLocaleLowerCase()}));n.apply(void 0,Object(k.a)(a)),console.log(t)};return Object(d.jsxs)(v,{pagetitle:"Configure",children:[Object(d.jsx)("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"row"},children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",flexWrap:"wrap",borderRadius:"20px"},children:[e.altpath,Object(d.jsx)("button",{className:"smallButton",id:"guest",onClick:i,children:"Guest"}),Object(d.jsx)("button",{className:"smallButton",id:"jane",onClick:i,children:"Jane"}),Object(d.jsx)("button",{className:"smallButton",id:"joseph",onClick:i,children:"Joseph"})]})}),e.children]})},I={width:"100vw",height:"100vh",background:"#ffffff",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",margin:"0 auto",position:"relative"},A={position:"absolute",top:"0",right:"0",margin:"0",color:"black",background:"none",border:"none",fontSize:"3em"};var M=function(e){return Object(s.useContext)(p).closeModal,Object(d.jsx)("div",{className:"modalBackground",style:{width:"100%",height:"100vh"},children:Object(d.jsxs)("div",{className:"modalContainer",style:I,children:[Object(d.jsx)("button",{style:A,onClick:function(){return console.log("button clicked")},children:" X "}),Object(d.jsx)("h1",{className:"welcomeModal",children:"Welcome to"}),Object(d.jsx)("h1",{className:"logoModal",children:"DigiHealth"}),Object(d.jsx)("h3",{style:{color:"#059669"},children:"Optimize your digital well-being"}),Object(d.jsx)("h3",{children:"\ud83c\udfafSet Goals"}),Object(d.jsx)("h3",{children:"\ud83d\udc40 Visualize your digital behavior"}),Object(d.jsx)("h3",{children:"\u200d\u2696Balance your tech life"}),Object(d.jsx)("h3",{children:"\ud83d\udcaa Strengthen your digital footprint"}),Object(d.jsx)("div",{className:"welcomeAvatar",children:Object(d.jsx)("img",{src:"./Happy 2.png"})}),e.altpath]})})},P=a.p+"static/media/del.b54dabf2.svg",B=a.p+"static/media/marcus.8b1a4080.svg",R=a.p+"static/media/yong.c3463af9.svg",T=a.p+"static/media/gabe.3748584a.svg",H=function(e){return Object(d.jsxs)(v,{pagetitle:"Meet V Team",children:[Object(d.jsxs)("div",{style:{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[Object(d.jsxs)("p",{style:{width:"40vw",textAlign:"center",margin:"64px auto"},children:["A group of collegues who met during our time at ",Object(d.jsx)("a",{href:"https://vschool.io/",children:"V School"}),", a remote bootcamp for developers and designers"]}),Object(d.jsxs)("div",{className:"pictureContainer",children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/liza-del-yarisantos/",children:Object(d.jsx)("img",{src:P,alt:"Del Yarisantos",id:"delPic"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/marcusradder/",children:Object(d.jsx)("img",{src:B,alt:"Marcus Radder",id:"marcusPic"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/yong-cho-dev/",children:Object(d.jsx)("img",{src:R,alt:"Yong Cho",id:"yongPic"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/gabemarchant/",children:Object(d.jsx)("img",{src:T,alt:"Gabe Marchant",id:"gabePic"})})]}),Object(d.jsx)("h1",{style:{width:"40vw",textAlign:"center",margin:"96px auto 32px auto",color:"#000000"},children:"Our Mission:"}),Object(d.jsx)("h1",{style:{width:"40vw",textAlign:"center",margin:"0px auto 32px auto",color:"#1D4ED8"},children:"Improve Digital Well-Being"})]}),e.children]})},U=a.p+"static/media/perfect.11e90cdd.svg",z=a.p+"static/media/worried.33aec30a.svg",E=a.p+"static/media/mummy.2615adc0.svg",F=a.p+"static/media/zombie.6ba85578.svg",W=(a(179),a(309)),G=a(5),V=function(e){var t=[U,z,E,F],a=Object(r.g)(),n=Object(s.useState)(0),i=Object(o.a)(n,1)[0],c=Object(s.useContext)(p).setCurrentView,l=Object(s.useContext)(h),j=l.user,b=(l.setUser,Object(s.useState)({social:45,productivity:45,finance:45,entertainment:45})),m=Object(o.a)(b,2);m[0],m[1];return Object(s.useEffect)((function(){c(a)}),[]),Object(d.jsxs)(v,{pagetitle:"Digital Health Score",children:[Object(d.jsxs)("div",{className:"digiHealthScorePage",children:[Object(d.jsx)("div",{className:"chart-container",id:"actualChart",children:Object(d.jsx)(W.a,{data:[{x:"Social",y:j.actuals.social},{x:"Entertainment",y:j.actuals.entertainment},{x:"Finance",y:j.actuals.finance},{x:"Productivity",y:j.actuals.productivity}],themeColor:G.q.multiOrdered,legendPosition:"right",legendOrientation:"vertical",height:500,width:600,radius:205,innerRadius:180})}),Object(d.jsx)("div",{className:"chart-container",id:"goalChart",children:Object(d.jsx)(W.a,{className:"goalChart",data:[{x:"Social",y:j.goals.social},{x:"Entertainment",y:j.goals.entertainment},{x:"Finance",y:j.goals.finance},{x:"Productivity",y:j.goals.productivity}],themeColor:G.q.multiOrdered,legendPosition:"right",legendOrientation:"vertical",height:500,width:600,radius:235,innerRadius:210})}),Object(d.jsx)("img",{id:"digiHealthScoreAvatar",src:t[i],alt:"Avatar"})]}),Object(d.jsx)("div",{className:"securityHealthBar"})]})},J={outline:"1px solid '#1d4ed8",marginLeft:"1.5em",background:"#ffffff",color:"#1d4ed8"};var Y=function(e){var t=Object(s.useContext)(h),a=t.user,n=(t.setUser,Object(s.useContext)(p)),i=(n.openModal,n.setOpenModal,n.history);return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.a,{history:i,children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{exact:!0,path:"/",children:"isLoggedOut"===a.name?Object(d.jsx)(r.a,{to:"/login"}):Object(d.jsx)(r.a,{to:"/digitalhealthscore"})}),Object(d.jsx)(r.b,{exact:!0,path:"/signup",children:Object(d.jsx)(D,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Login"})})})}),Object(d.jsx)(r.b,{exact:!0,path:"/login",children:Object(d.jsx)(N,{altpath:Object(d.jsx)(l.b,{to:"/signup",children:Object(d.jsx)("button",{style:J,children:"Sign Up"})})})}),Object(d.jsxs)(r.b,{exact:!0,path:"/configure",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Logout"})})}),Object(d.jsx)(L,{})]}),Object(d.jsxs)(r.b,{exact:!0,path:"/about",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Logout"})})}),Object(d.jsx)(H,{})]}),Object(d.jsxs)(r.b,{exact:!0,path:"/avatarshop",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Logout"})})}),Object(d.jsx)(S,{})]}),Object(d.jsxs)(r.b,{exact:!0,path:"/goals",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Logout"})})}),Object(d.jsx)(y,{})]}),Object(d.jsxs)(r.b,{exact:!0,path:"/digitalhealthscore",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{className:"smallButton",children:"Logout"})})}),Object(d.jsx)(V,{})]}),Object(d.jsx)(r.b,{exact:!0,path:"/modal",children:Object(d.jsx)(M,{altpath:Object(d.jsx)(l.b,{to:"/signup",children:Object(d.jsx)("button",{style:J,children:"Get Started"})})})}),Object(d.jsxs)(r.b,{exact:!0,path:"/digihealthshop",children:[Object(d.jsx)(f,{altpath:Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsx)("button",{style:J,children:"Logout"})})}),Object(d.jsx)(S,{})]})]})})})};a(296);c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(b,{children:Object(d.jsx)(O,{children:Object(d.jsx)(Y,{})})})}),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.7f0e40c8.chunk.js.map