(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(9),i=a.n(r),l=a(2),o=a(3),d=a(5),h=a(4),b=(a(15),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.props.users.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("li",{children:e.id}),Object(s.jsx)("li",{children:e.name}),Object(s.jsx)("li",{children:e.contact_info})]},t)}))})}}]),a}(n.Component)),j=(n.Component,a(16),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container has-text-centered mx-3",children:Object(s.jsx)("footer",{className:"footer has-background-grey-lighter",children:"Inner Savages \xa9 2020"})})}}]),a}(n.Component)),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"setUrl",value:function(e){this.props.parent.setState({current:e}),console.log(this.props.parent.state)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-success fixed-top",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",onClick:function(){return e.setUrl("mainpage")},children:"Re-Wrap.it"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault",children:[Object(s.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"nav-item "+("home"===this.props.parent.state.current?"active":""),children:Object(s.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return e.setUrl("mainpage")},children:"Home"})}),Object(s.jsx)("li",{className:"nav-item "+("idea"===this.props.parent.state.current?"active":""),children:Object(s.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return e.setUrl("idea")},children:"Idea"})}),Object(s.jsx)("li",{className:"nav-item "+("giveaway"===this.props.parent.state.current?"active":""),children:Object(s.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return e.setUrl("giveaway")},children:"Give"})}),Object(s.jsx)("li",{className:"nav-item "+("wanted"===this.props.parent.state.current?"active":""),children:Object(s.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return e.setUrl("wanted")},children:"Get"})})]}),this.props.parent.state.login?Object(s.jsxs)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.setUrl("logout")},children:["Logout ",this.props.parent.state.login]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.setUrl("login")},children:"Log in"}),Object(s.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return e.setUrl("register")},children:"Register"})]})]})]})}}]),a}(n.Component),u=a(7),p=a(6),x=(a(17),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={email:""},s.handleChange=s.handleChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){var t=this;fetch("https://re-wrap.it/api/subject/"+this.state.email).then((function(e){return e.json()})).then((function(e){return t.props.parent.setState({current:"mainpage",login:t.state.email,userdata:e.data})})).catch((function(e){return console.log("error",e)})),e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;this.setState(Object(u.a)({},s,a))}},{key:"setUrl",value:function(e){this.props.parent.setState({current:e}),console.log(this.props.parent.state)}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"text-center",children:Object(s.jsxs)("form",{className:"form-signin",onSubmit:this.handleSubmit,children:[Object(s.jsx)("img",{className:"center",src:"./1.png",alt:"centered image",width:"300",height:"300"}),Object(s.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign in"}),Object(s.jsx)("label",{htmlFor:"inputEmail",className:"sr-only",children:"Email address"}),Object(s.jsx)("input",{className:"form-control",type:"email",name:"email",placeholder:"Your Email",autoFocus:"",required:!0,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"inputPassword",className:"sr-only",children:"Password"}),Object(s.jsx)("input",{type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),Object(s.jsx)("div",{className:"checkbox mb-3",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(s.jsx)("button",{className:"btn btn-lg btn-success btn-block",type:"submit",children:"Sign in"}),Object(s.jsx)("button",{className:"btn btn-lg btn-success btn-block",type:"submit",onClick:function(){return e.setUrl("register")},children:"Register"}),Object(s.jsx)("p",{className:"mt-5 mb-3 text-muted",children:"Inner Savages \xa9 2020"})]})})}}]),a}(n.Component)),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={name:"",contact:"",address:"",latitude:"",longitude:"",email:""},s.handleChange=s.handleChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,s=t.name;this.setState(Object(u.a)({},s,a))}},{key:"handleSubmit",value:function(e){var t=this,a=new FormData;a.append("name",this.state.name),a.append("address_text",this.state.address),a.append("address_latitude",this.state.latitude),a.append("address_longitude",this.state.longitude),a.append("contact_info",this.state.contact),a.append("email",this.state.email),fetch("https://re-wrap.it/api/subject/",{method:"POST",body:a,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return t.props.parent.setState({current:"logged",login:t.state.email,userdata:e.data})})).catch((function(e){return console.log("error",e)})),a=new FormData,e.preventDefault()}},{key:"render",value:function(){return Object(s.jsx)("main",{role:"main",className:"container",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"name",className:"col-sm-3 col-form-label",children:"Name and surname/company name"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name and surname/company name",value:this.state.name,onChange:this.handleChange,name:"name"})})]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"email",className:"col-sm-3 col-form-label",children:"Email"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,name:"email"})})]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"address",className:"col-sm-3 col-form-label",children:"Address"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"Address",value:this.state.address,onChange:this.handleChange,name:"address"})})]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"contact",className:"col-sm-3 col-form-label",children:"Contact information"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"Contact",value:this.state.contact,onChange:this.handleChange,name:"contact"})})]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"latitude",className:"col-sm-3 col-form-label",children:"Latitude"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"number",className:"form-control",id:"latitude",placeholder:"Latitude",value:this.state.latitude,onChange:this.handleChange,name:"latitude"})})]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("label",{htmlFor:"longitude",className:"col-sm-3 col-form-label",children:"Longitude"}),Object(s.jsx)("div",{className:"col-sm-9",children:Object(s.jsx)("input",{type:"number",className:"form-control",id:"longitude",placeholder:"Longitude",value:this.state.longitude,onChange:this.handleChange,name:"longitude"})})]}),Object(s.jsx)("input",{type:"submit",className:"btn btn-success",value:"Submit"})]})})}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"col",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:"./images/box-placeholder.png",className:"card-img-top",alt:"..."}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{class:"card-title",children:this.props.item.item_name}),Object(s.jsx)("p",{className:"card-text"}),Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-success btn-sm",children:"Book"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",children:"More info"})]})]})]})})}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getItems=function(){fetch("https://re-wrap.it/api/wanted/").then((function(e){return e.json()})).then((function(e){s.setState({items:e.data})}))},s.state={items:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row align-items-start",children:this.state.items.map((function(e,t){return Object(s.jsx)(O,{item:e,idx:t})}))})})}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getItems=function(){fetch("https://re-wrap.it/api/giveaway/").then((function(e){return e.json()})).then((function(e){s.setState({items:e.data})}))},s.state={items:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row align-items-start",children:this.state.items.map((function(e,t){return Object(s.jsx)(O,{item:e,idx:t})}))})})}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:["Successfully logged in as ",this.props.parent.state.login,"!"]})}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return""!==this.props.parent.state.login&&this.props.parent.setState({login:"",userdata:""}),Object(s.jsx)("div",{children:"Successfully logged out!"})}}]),a}(n.Component),k=(a(18),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getWanted=function(){fetch("https://re-wrap.it/api/wanted/").then((function(e){return e.json()})).then((function(e){s.setState({wanted:e.data})}))},s.getGiveaway=function(){fetch("https://re-wrap.it/api/giveaway/").then((function(e){return e.json()})).then((function(e){s.setState({giveaway:e.data})}))},s.state={wanted:[],giveaway:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getWanted(),this.getGiveaway()}},{key:"setUrl",value:function(e){this.props.parent.setState({current:e}),console.log(this.props.parent.state)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{class:"container pt",children:Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("input",{type:"image",src:"./images/2a.png",class:"card-img-right float-lg-right",width:"200",height:"200",alt:"...",onClick:function(){return e.setUrl("giveaway")}})}),Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("input",{type:"image",src:"./images/2b.png",class:"card-img-right float-lg-left",width:"200",height:"200",alt:"...",onClick:function(){return e.setUrl("wanted")}})})]})}),Object(s.jsx)("main",{role:"main",class:"container",children:Object(s.jsxs)("div",{class:"container mh-75",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"Recently people want to give.."})}),Object(s.jsx)("div",{class:"row align-items-start h-25",children:this.state.giveaway.map((function(e,t){return Object(s.jsx)(O,{item:e,idx:t})}))}),Object(s.jsx)("div",{class:"top-space",children:Object(s.jsx)("p",{children:"Recently people want to get.."})}),Object(s.jsx)("div",{class:"row align-items-center h-25",children:this.state.wanted.map((function(e,t){return Object(s.jsx)(O,{item:e,idx:t})}))})]})})]})}}]),a}(n.Component)),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{class:"my-3 p-3 bg-white rounded shadow-sm",children:[Object(s.jsx)("h6",{class:"border-bottom border-gray pb-2 mb-0",children:"Ideas"}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#007bff"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#007bff",dy:".3em",children:"32x32"})]}),Object(s.jsx)("p",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("strong",{class:"d-block text-gray-dark",children:"Ecological movment"})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#e83e8c"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#e83e8c",dy:".3em",children:"32x32"})]}),Object(s.jsx)("p",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("strong",{class:"d-block text-gray-dark",children:"Local patriotism"})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#6f42c1"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#6f42c1",dy:".3em",children:"32x32"})]}),Object(s.jsx)("p",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("strong",{class:"d-block text-gray-dark",children:"Community building"})})]}),Object(s.jsxs)("div",{class:"my-3 p-3 bg-white rounded shadow-sm",children:[Object(s.jsx)("h6",{class:"border-bottom border-gray pb-2 mb-0",children:"How it's look like ?'"}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#E1611B"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#E1611B",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"Indication of the user's demand: give away or get an item"})})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#2837CD"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#2837CD",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"The ability to search the announcement database or add a new query"})})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#CDDC39"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#CDDC39",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"New announcement - indication of location, item type, specification"})})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#E91E63"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#E91E63",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"Search procedure - filtering and sorting by given criteria"})})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#FFEB3B"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#FFEB3B",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"Successful match, item reservation, contact and hand over"})})})]}),Object(s.jsxs)("div",{class:"media text-muted pt-3",children:[Object(s.jsxs)("svg",{class:"bd-placeholder-img mr-2 rounded",width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img","aria-label":"Placeholder: 32x32",children:[Object(s.jsx)("title",{children:"Placeholder"}),Object(s.jsx)("rect",{width:"100%",height:"100%",fill:"#5A00FF"}),Object(s.jsx)("text",{x:"50%",y:"50%",fill:"#5A00FF",dy:".3em",children:"32x32"})]}),Object(s.jsx)("div",{class:"media-body pb-3 mb-0 large lh-125 border-bottom border-gray",children:Object(s.jsx)("div",{class:"d-flex justify-content-between align-items-center w-100",children:Object(s.jsx)("strong",{class:"text-gray-dark",children:"if not - notification request"})})})]})]})]})}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getUsers=function(){fetch("https://re-wrap.it/api/subject/").then((function(e){return e.json()})).then((function(e){s.setState({users:e.data})}))},s.state={login:"",userdata:"",current:"login",users:[],items:[]},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e,t,a){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e;switch(console.log(this.state),this.state.current){case"mainpage":e=Object(s.jsx)(k,{parent:this});break;case"login":return Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(x,{parent:this})});case"logged":e=Object(s.jsx)(y,{parent:this});break;case"logout":e=Object(s.jsx)(w,{parent:this});break;case"register":e=Object(s.jsx)(g,{parent:this});break;case"wanted":e=Object(s.jsx)(f,{});break;case"idea":e=Object(s.jsx)(N,{parent:this});break;case"giveaway":e=Object(s.jsx)(v,{});break;default:e=Object(s.jsx)(b,{users:this.state.users})}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m,{parent:this}),e,Object(s.jsx)(j,{})]})}}]),a}(n.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.46376fc0.chunk.js.map