(this["webpackJsonpreact-mdi"]=this["webpackJsonpreact-mdi"]||[]).push([[0],{1065:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(10),r=n.n(s),o=(n(17),n(18),n(11)),c=n(2),d=n(3),l=n(5),u=n(4),m=n(1),h=n(6),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"menuItems",value:function(){return this.props.items.map((function(e){return i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"./bs.com",onClick:e.action},e.label," ",i.a.createElement("span",{className:"sr-only"},"(current)")))}))}},{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"./bs.com"},"Navbar w/ text"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},this.menuItems()),i.a.createElement("span",{className:"navbar-text"},"Navbar text with an inline element")))}}]),t}(i.a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).brintToFront=function(e){n.setState({zIndex:e})},n.windowPosition=n.windowPosition.bind(Object(m.a)(n)),n.minimizeWindow=n.minimizeWindow.bind(Object(m.a)(n)),n.dragStart=n.dragStart.bind(Object(m.a)(n)),n.dragEnd=n.dragEnd.bind(Object(m.a)(n)),n.drag=n.drag.bind(Object(m.a)(n)),n.toggleSize=n.toggleSize.bind(Object(m.a)(n)),n.deactivateFocus=n.deactivateFocus.bind(Object(m.a)(n)),e.registerWindow(e.windowTitle,n.brintToFront),n.state={active:!1,currentX:0,currentY:0,initialX:0,initialY:0,xOffset:0,yOffset:0,zIndex:e.childWindowsMaxIndex,maximized:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"deactivateFocus",value:function(){this.setState({active:!1})}},{key:"dragStart",value:function(e){var t=this;"touchstart"===e.type?this.setState({initialX:e.touches[0].clientX-this.state.xOffset,initialY:e.touches[0].clientY-this.state.yOffset}):this.setState({initialX:e.clientX-this.state.xOffset,initialY:e.clientY-this.state.yOffset}),e.target===this.refs.container&&this.props.setChildWindowMaxIndex((function(e){t.setState({zIndex:e,active:!0})}))}},{key:"dragEnd",value:function(e){this.deactivateFocus(),this.setState({initialX:this.state.currentX,initialY:this.state.currentY})}},{key:"drag",value:function(e){if(e.preventDefault(),this.state.maximized)return!1;this.state.active&&("touchmove"===e.type?this.setState({currentX:e.touches[0].clientX-this.state.initialX,currentY:e.touches[0].clientY-this.state.initialY}):this.setState({currentX:e.clientX-this.state.initialX,currentY:e.clientY-this.state.initialY}),this.setState({xOffset:this.state.currentX,yOffset:this.state.currentY}))}},{key:"windowPosition",value:function(){return"translate3d("+this.state.currentX+"px, "+this.state.currentY+"px, 0)"}},{key:"componentDidMount",value:function(){var e=this.refs.container;e.addEventListener("touchstart",this.dragStart,!1),e.addEventListener("touchend",this.dragEnd,!1),e.addEventListener("touchmove",this.drag,!1),e.addEventListener("mousedown",this.dragStart,!1),e.addEventListener("mouseup",this.dragEnd,!1),e.addEventListener("mousemove",this.drag,!1),e.addEventListener("mouseleave",this.deactivateFocus,!1)}},{key:"toggleSize",value:function(){var e=this;this.state.maximized?this.setState({maximized:!1,minimized:!1}):this.setState({maximized:!0,minimized:!1,currentX:0,currentY:0,initialX:0,initialY:0,xOffset:0,yOffset:0},(function(){e.props.setChildWindowMaxIndex((function(t){e.setState({zIndex:t})}))}))}},{key:"windowSizing",value:function(){return!0===this.state.minimized?"minimized-child-window":!0===this.state.maximized?"maximized-child-window":void 0}},{key:"maximizeRestoreIcon",value:function(){return this.state.maximized?"window-restore":"window-maximize"}},{key:"minimizeWindow",value:function(e){e.stopPropagation(),e.preventDefault(),this.state.minimized?this.setState({minimized:!1}):this.setState({maximized:!1,minimized:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card mdi-child-window ".concat(this.windowSizing()),ref:"holder",style:{zIndex:this.state.zIndex,transform:this.windowPosition()}},i.a.createElement("div",{className:"card-header mdi-child-window-header",ref:"container",onDoubleClick:this.toggleSize},i.a.createElement("button",{onClick:this.minimizeWindow,className:"btn btn-warning rounded-circle"},i.a.createElement("i",{className:"fa fa-window-minimize"}))," ",i.a.createElement("button",{onClick:this.toggleSize,className:"btn btn-success rounded-circle"},i.a.createElement("i",{className:"fa fa-".concat(this.maximizeRestoreIcon())}))," ",i.a.createElement("button",{className:"btn btn-danger rounded-circle",onClick:function(){e.props.deRegisterWindow(e.props.children.type.name),e.props.close(e.props.index)}},i.a.createElement("i",{className:"fa fa-window-close"}))),i.a.createElement("div",{className:"card-body"},this.props.children),i.a.createElement("div",{className:"card-footer"}))}}]),t}(i.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",className:"form-control"})))}}]),t}(i.a.Component),f=n(7),p=n.n(f),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"table",value:function(){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("table",{className:"table table-stripped"},i.a.createElement("thead",{className:"text-primary"},i.a.createElement("tr",null,i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Category"),i.a.createElement("th",null,"Headline"),i.a.createElement("th",null,"Author"),i.a.createElement("th",null,"Website"))),i.a.createElement("tbody",null,this.tableRows()))))}},{key:"tableRows",value:function(){return[1,2,3,4,5,6,7].map((function(e){return i.a.createElement("tr",{key:e},i.a.createElement("td",null,p.a.company.companyName()),i.a.createElement("td",null,p.a.company.companyName()),i.a.createElement("td",null,p.a.company.companyName()),i.a.createElement("td",null,p.a.company.companyName()),i.a.createElement("td",null,p.a.company.companyName()))}))}},{key:"render",value:function(){return this.table()}}]),t}(i.a.Component),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={windows:[],subscribedWindows:{},childWindowsMaxIndex:0},n.setChildWindowMaxIndex=n.setChildWindowMaxIndex.bind(Object(m.a)(n)),n.closeChildWindowHandler=n.closeChildWindowHandler.bind(Object(m.a)(n)),n.activeWindowComponents=n.activeWindowComponents.bind(Object(m.a)(n)),n.deRegisterWindow=n.deRegisterWindow.bind(Object(m.a)(n)),n.registerWindow=n.registerWindow.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"deRegisterWindow",value:function(e){var t=this.state.subscribedWindows;delete t[e],this.setState({subscribedWindows:t})}},{key:"registerWindow",value:function(e,t){var n=this.state.subscribedWindows;n[e]=t,this.setState({subscribedWindows:n})}},{key:"setChildWindowMaxIndex",value:function(e){var t=this.state.childWindowsMaxIndex+1;e(t),this.setState({childWindowsMaxIndex:t})}},{key:"windows",value:function(){return this.state.windows}},{key:"zIndexForNewWindow",value:function(){var e=this.state.childWindowsMaxIndex+1;return this.setState({childWindowsMaxIndex:e}),e}},{key:"closeChildWindowHandler",value:function(e){var t=this.windows();this.setState({windows:t.filter((function(t){return!(t.key===e.toString())}))})}},{key:"newContactForm",value:function(e,t){e.preventDefault(),this.addWindow(v,t)}},{key:"newItemsList",value:function(e,t){e.preventDefault(),this.addWindow(x,t)}},{key:"activeWindowComponents",value:function(){return this.windows().map((function(e){return e.props.wrappedComponent.name}))}},{key:"addWindow",value:function(e,t){var n=this.state.subscribedWindows[t];n?n(this.zIndexForNewWindow()):this.setState({windows:[].concat(Object(o.a)(this.state.windows),[i.a.createElement(b,{key:this.state.windows.length,index:this.state.windows.length,close:this.closeChildWindowHandler,windowTitle:t,wrappedComponent:e,registerWindow:this.registerWindow,deRegisterWindow:this.deRegisterWindow,setChildWindowMaxIndex:this.setChildWindowMaxIndex,childWindowsMaxIndex:this.zIndexForNewWindow()},i.a.createElement(e,null))])})}},{key:"menuItems",value:function(){var e=this;return[{label:"Contact Form",action:function(t){e.newContactForm(t,"Contact Form")}},{label:"Items List",action:function(t){e.newItemsList(t,"Items List")}}]}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(w,{items:this.menuItems()}),this.windows())}}]),t}(i.a.Component);var y=function(){return i.a.createElement("section",{className:"container-holder"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},12:function(e,t,n){e.exports=n(1065)},17:function(e,t,n){},18:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ccb084ef.chunk.js.map