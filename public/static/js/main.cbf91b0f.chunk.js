(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),s=n.n(c),r=n(7),a=n.n(r),u=(n(13),n(2)),o=n(3),j=n(5),l=n(4),h=(n.p,n(14),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:this.props.users.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("li",{children:e.id}),Object(i.jsx)("li",{children:e.name}),Object(i.jsx)("li",{children:e.contact_info})]},t)}))})}}]),n}(c.Component)),p=(c.Component,function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)("header",{className:"container mt-4",children:Object(i.jsxs)("div",{className:"level",children:[Object(i.jsx)("span",{className:"level-left is-family-sans-serif is-size-1 has-text-weight-bold is-uppercase title",children:"re-wrap.it"}),Object(i.jsx)("h2",{className:"level-right is-size-2 subtitle",children:"Nasz\u0105 misj\u0105 jest drugie \u017cycie \u015bmieci"})]})})}}]),n}(c.Component)),d=(n(15),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).getUsers=function(){fetch("https://re-wrap.it/api/subject/").then((function(e){return e.json()})).then((function(e){i.setState({users:e.data})}))},i.getItems=function(){fetch("https://re-wrap.it/api/items/").then((function(e){return e.json()})).then((function(e){i.setState({items:e.data})}))},i.state={users:[],items:[]},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(p,{}),Object(i.jsx)("div",{children:Object(i.jsx)(h,{users:this.state.users})})]})}}]),n}(c.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.cbf91b0f.chunk.js.map