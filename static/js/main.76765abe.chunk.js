(window.webpackJsonporiginal=window.webpackJsonporiginal||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spinner.75ae2ba2.gif"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),i=(a(15),a(1)),l=a(2),o=a(4),u=a(3),p=a(5),m=(a(16),function(){return r.a.createElement("header",{className:"navbar bg-success pt-3"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"web_title nav-brand text-white"},r.a.createElement("span",null,"News Search")),r.a.createElement("div",{className:"lead text-white "},r.a.createElement("span",null,"Search for any news across world"))))}),h=a(8),d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userinput:"",country:"in",category:"sports"},a.handleinput=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handlesearch=function(e){e.preventDefault(),a.props.search(a.state)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search mt-2"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"text-center"},"Search News"),r.a.createElement("p",{className:"lead text-center"},"Find Everything Around You in Seconds"),r.a.createElement("form",{onSubmit:this.handlesearch},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"from-control form-control-lg display-block",placeholder:"Search Here",style:{width:"100%"},name:"userinput",value:this.state.userinput,onChange:this.handleinput}),r.a.createElement("br",null)),r.a.createElement("button",{className:"btn btn-warning btn-lg btn-block pl-10 pr-10 mt-2",type:"submit"},"Search"))))}}]),t}(r.a.Component),f=a(9),g=a.n(f);var b=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:g.a,alt:"loading.....",style:{width:"100px",margin:"auto",display:"block"}}))},v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-6 mb-3"},r.a.createElement("div",{className:"card p-2"},r.a.createElement("h5",null,"Publishdate:",this.props.New.publishedAt),r.a.createElement("img",{className:"card-img-top",src:this.props.New.urlToImage,alt:"loading"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},this.props.New.title),r.a.createElement("a",{href:this.props.New.url,rel:"noopener noreferrer",target:"_blank",className:"btn btn-primary"},"See Full News"))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.state;if(void 0===e.news)return r.a.createElement(b,null);var t=e.newscount*e.page-e.newscount+1,a=e.newscount*e.page;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"news mt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Showing ",t," to ",a>=e.totalresults?e.totalresults:a," of ",e.totalresults),r.a.createElement("div",{className:"row"},e.news.map(function(e,t){return r.a.createElement(v,{New:e,key:t})})))),r.a.createElement("div",{className:"container",style:{justifyContent:"space-between",display:"flex"}},a<=e.totalresults?r.a.createElement("button",{className:"btn btn-warning pr-4 pl-4",onClick:this.props.nextpage},"Next"):null,e.page>1?r.a.createElement("button",{className:"btn btn-warning pr-4 pl=4",onClick:this.props.previouspage},"Previous"):null))}}]),t}(r.a.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={url:void 0,news:void 0,page:1,newscount:20,totalresults:0,country:"in",category:"sports",makeurl:function(){this.url="https://newsapi.org/v2/top-headlines?country=".concat(this.country,"&apiKey=a7e2cf60cb044eff90c8d0ddef25945e&pagesize=").concat(this.newscount,"&page=").concat(this.page)},makesearchurl:function(){this.url="https://newsapi.org/v2/everything?q=".concat(this.userinput,"&apiKey=a7e2cf60cb044eff90c8d0ddef25945e&pagesize=").concat(this.newscount,"&page=").concat(this.page)},firsttime:!0,searched:!1},e.nextpage=function(){e.setState({page:e.state.page+1},function(){e.componentDidMount()})},e.previouspage=function(){e.setState({page:e.state.page-1},function(){e.componentDidMount()})},e.search=function(t){e.setState({news:void 0,userinput:t.userinput,page:1,searched:!0},function(){e.state.makesearchurl(),fetch(e.state.url).then(function(e){return e.json()}).then(function(t){e.setState({news:t.articles,totalresults:t.totalResults})})})},e.state.makeurl(),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;!0===this.state.firsttime&&!1===this.state.searched?(this.setState({firsttime:!1}),this.state.makeurl()):!1===this.state.firsttime&&!0===this.state.searched&&this.state.makesearchurl(),this.setState({news:void 0}),fetch(this.state.url).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({news:t.articles,totalresults:t.totalResults})}).catch(function(e){alert("cannot fetch data")})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(d,{search:this.search}),r.a.createElement(w,{state:this.state,nextpage:this.nextpage,previouspage:this.previouspage}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.76765abe.chunk.js.map