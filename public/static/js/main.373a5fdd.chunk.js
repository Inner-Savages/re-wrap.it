(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(9),r=n.n(c),l=(n(15),n(2)),o=n(3),u=n(5),h=n(4),d=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:this.props.users.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("li",{children:e.id}),Object(a.jsx)("li",{children:e.name}),Object(a.jsx)("li",{children:e.contact_info})]},t)}))})}}]),n}(s.Component)),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"container mt-4",children:Object(a.jsxs)("div",{className:"level",children:[Object(a.jsx)("span",{className:"level-left is-family-sans-serif is-size-1 has-text-weight-bold is-uppercase title",children:"re-wrap.it"}),Object(a.jsx)("h2",{className:"level-right is-size-2 subtitle",children:"Nasz\u0105 misj\u0105 jest drugie \u017cycie \u015bmieci"})]})})}}]),n}(s.Component),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container has-text-centered mx-3",children:Object(a.jsx)("footer",{className:"footer has-background-grey-lighter",children:"Inner Savages \xa9 2020"})})}}]),n}(s.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"setUrl",value:function(e){this.props.parent.setState({current:e}),console.log(this.props.parent.state)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("nav",{className:"navbar has-background-grey-lighter mx-3",role:"navigation","aria-label":"main navigation",children:[Object(a.jsxs)("div",{className:"navbar-start",children:[Object(a.jsx)("div",{className:"navbar-item",onClick:function(){return e.setUrl("wanted")},children:Object(a.jsx)("a",{className:"has-text-link-grey-dark",href:"#wanted",children:"Szukam \u015bmieci"})}),Object(a.jsx)("div",{className:"navbar-item",onClick:function(){return e.setUrl("giveaway")},children:Object(a.jsx)("a",{className:"has-text-link-grey-dark",href:"#giveaway",children:"Chc\u0119 pozby\u0107 si\u0119 \u015bmieci"})}),this.props.parent.state.login?Object(a.jsx)("div",{className:"navbar-item",onClick:function(){return e.setUrl("logout")},children:Object(a.jsxs)("a",{className:"has-text-link-grey-dark",href:"#logout",children:["Wyloguj [",this.props.parent.state.login,"]"]})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"navbar-item",onClick:function(){return e.setUrl("login")},children:Object(a.jsx)("a",{className:"has-text-link-grey-dark",href:"#login",children:"Logowanie"})}),Object(a.jsx)("div",{className:"navbar-item",onClick:function(){return e.setUrl("register")},children:Object(a.jsx)("a",{className:"has-text-link-grey-dark",href:"#register",children:"Rejestracja"})})]})]}),Object(a.jsx)("div",{className:"navbar-end"})]})}}]),n}(s.Component),p=n(7),O=n(6),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={email:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t=this;fetch("https://re-wrap.it/api/subject/"+this.state.email).then((function(e){return e.json()})).then((function(e){return t.props.parent.setState({current:"logged",login:t.state.email,userdata:e.data})})).catch((function(e){return console.log("error",e)})),e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"hero-body",children:Object(a.jsx)("div",{className:"container has-text-centered",children:Object(a.jsx)("div",{className:"column is-4 is-offset-4",children:Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("figure",{className:"avatar",children:Object(a.jsx)("img",{src:"https://placehold.it/128x128"})}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:"field",children:Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("input",{className:"input is-medium",type:"email",name:"email",placeholder:"Your Email",autoFocus:"",onChange:this.handleChange})})}),Object(a.jsx)("div",{className:"field",children:Object(a.jsx)("div",{className:"control",children:Object(a.jsx)("input",{className:"input is-medium",type:"password",placeholder:"Your Password"})})}),Object(a.jsx)("div",{className:"field",children:Object(a.jsxs)("label",{className:"checkbox",children:[Object(a.jsx)("input",{type:"checkbox"}),"Remember me"]})}),Object(a.jsxs)("button",{className:"button is-block is-success is-large is-fullwidth",children:["Login ",Object(a.jsx)("i",{className:"fa fa-sign-in","aria-hidden":"true"})]})]})]})})})})}}]),n}(s.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:"",contact:"",address:"",latitude:"",longitude:"",email:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(p.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this,n=new FormData;n.append("name",this.state.name),n.append("address_text",this.state.address),n.append("address_latitude",this.state.latitude),n.append("address_longitude",this.state.longitude),n.append("contact_info",this.state.contact),n.append("email",this.state.email),fetch("https://re-wrap.it/api/subject/",{method:"POST",body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return t.props.parent.setState({current:"logged",login:t.state.email,userdata:e.data})})).catch((function(e){return console.log("error",e)})),n=new FormData,e.preventDefault()}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:["Name: ",Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",className:"input is-medium"}),"Contact: ",Object(a.jsx)("input",{type:"text",value:this.state.contact,onChange:this.handleChange,name:"contact",className:"input is-medium"}),"Email: ",Object(a.jsx)("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email",className:"input is-medium"}),"Address: ",Object(a.jsx)("input",{type:"text",value:this.state.address,onChange:this.handleChange,name:"address",className:"input is-medium"}),"Latitude: ",Object(a.jsx)("input",{type:"text",value:this.state.latitude,onChange:this.handleChange,name:"latitude",className:"input is-medium"}),"Longitude: ",Object(a.jsx)("input",{type:"text",value:this.state.longitude,onChange:this.handleChange,name:"longitude",className:"input is-medium"}),Object(a.jsx)("input",{type:"submit",value:"Register"})]})}}]),n}(s.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("article",{className:"tile is-ancestor mx-4 my-5 is-block",children:Object(a.jsxs)("div",{className:"tile notification has-text-centered is-block has-background-grey-light",children:[Object(a.jsxs)("div",{children:["Owner: ",this.props.item.owner]}),Object(a.jsxs)("div",{children:["Item Name: ",this.props.item.item_name]}),Object(a.jsxs)("div",{children:["Item Count: ",this.props.item.item_count]}),Object(a.jsxs)("div",{children:["Item Type: ",this.props.item.item_type]}),Object(a.jsxs)("div",{children:["Item Condition: ",this.props.item.item_condition]}),Object(a.jsxs)("div",{children:["What in Exchange: ",this.props.item.what_in_exchange]})]})},this.props.idx)}}]),n}(s.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getItems=function(){fetch("https://re-wrap.it/api/wanted/").then((function(e){return e.json()})).then((function(e){a.setState({items:e.data})}))},a.state={items:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.items.map((function(e,t){return Object(a.jsx)(x,{item:e,idx:t})}))})}}]),n}(s.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getItems=function(){fetch("https://re-wrap.it/api/giveaway/").then((function(e){return e.json()})).then((function(e){a.setState({items:e.data})}))},a.state={items:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.items.map((function(e,t){return Object(a.jsx)(x,{item:e,idx:t})}))})}}]),n}(s.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:["Successfully logged in as ",this.props.parent.state.login,"!"]})}}]),n}(s.Component),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return""!==this.props.parent.state.login&&this.props.parent.setState({login:"",userdata:""}),Object(a.jsx)("div",{children:"Successfully logged out!"})}}]),n}(s.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getUsers=function(){fetch("https://re-wrap.it/api/subject/").then((function(e){return e.json()})).then((function(e){a.setState({users:e.data})}))},a.state={login:"",userdata:"",current:"users",users:[],items:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e;switch(console.log(this.state),this.state.current){case"login":e=Object(a.jsx)(v,{parent:this});break;case"logged":e=Object(a.jsx)(k,{parent:this});break;case"logout":e=Object(a.jsx)(N,{parent:this});break;case"register":e=Object(a.jsx)(f,{parent:this});break;case"wanted":e=Object(a.jsx)(g,{});break;case"giveaway":e=Object(a.jsx)(y,{});break;default:e=Object(a.jsx)(d,{users:this.state.users})}return Object(a.jsxs)("div",{className:"columns",children:[Object(a.jsx)("div",{className:"column pt-6",children:"[empty space?]"}),Object(a.jsxs)("div",{className:"column is-half",children:[Object(a.jsx)(j,{}),Object(a.jsx)(m,{parent:this}),e,Object(a.jsx)(b,{})]}),Object(a.jsx)("div",{className:"column pt-6",children:"[empty space?]"})]})}}]),n}(s.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),w()}},[[18,1,2]]]);
//# sourceMappingURL=main.373a5fdd.chunk.js.map