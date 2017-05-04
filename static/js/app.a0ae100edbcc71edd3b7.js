webpackJsonp([0],[,,function(t,e,i){i(52);var a=i(1)(i(37),i(72),"data-v-5c4b4731",null);t.exports=a.exports},,,function(t,e,i){"use strict";var a=i(3),n=i.n(a),s=n.a.create({baseURL:"http://118.89.178.218:8080",timeout:3e3});e.a={getAllMovie:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return s.get("/api/movie?tag="+t+"&page="+e+"&limit="+i)},getMovie:function(t){return s.get("/api/movie/"+t)},getMovieOnShow:function(){return s.get("api/movie?carousel=true")}}},function(t,e,i){"use strict";var a=i(3),n=i.n(a),s=n.a.create({baseURL:"http://118.89.178.218:8080",timeout:3e3});e.a={getAllTV:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return s.get("/api/tv?tag="+t+"&page="+e+"&limit="+i)},getTV:function(t){return s.get("/api/tv/"+t)},getTVOnShow:function(){return s.get("/api/tv?carousel=true")}}},,,,,,,function(t,e,i){"use strict";var a=i(3),n=i.n(a),s=n.a.create({baseURL:"http://118.89.178.218:8080",timeout:3e3});e.a={getAllNews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return s.get("/api/news?tag="+t+"&page="+e+"&limit="+i)},getNews:function(t){return s.get("/api/news/"+t)}}},,function(t,e,i){"use strict";var a=i(62),n=i.n(a),s=i(66),r=i.n(s),o=i(63),v=i.n(o),u=i(65),l=i.n(u),c=i(67),d=i.n(c),_=i(64),m=i.n(_),f=i(7),p=i(78);f.a.use(p.a),e.a=new p.a({mode:"history",routes:[{path:"/",component:n.a,name:"home"},{path:"/tv",component:r.a,name:"tv"},{path:"/movie",component:v.a,name:"movie"},{path:"/news",component:l.a,name:"news"},{path:"/tv/:id",component:d.a,name:"tvPage"},{path:"/movie/:id",component:m.a,name:"moviePage"}]})},function(t,e,i){i(48);var a=i(1)(i(36),i(68),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var a=i(3),n=i.n(a),s=n.a.create({baseURL:"http://118.89.178.218:8080",timeout:3e3});e.a={getAllTrailer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return s.get("/api/trailer?tag="+t+"&page="+e+"&limit="+i)},getTrailer:function(t){return s.get("/api/trailer/"+t)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),n=i(16),s=i.n(n),r=i(15);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,render:function(t){return t(s.a)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(13);e.default={data:function(){return{allPage:0,limit:8,isLoading:!0,newsList:[]}},mounted:function(){var t=this;a.a.getAllNews("","",this.limit).then(function(e){console.log(e),t.allPage=e.data.allPage,t.newsList=e.data.newsList,t.isLoading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(34);e.default={data:function(){return{allPage:0,limit:8,isLoading:!0,trailerList:[]}},mounted:function(){var t=this;a.a.getAllTrailer("","",this.limit).then(function(e){t.allPage=e.data.allPage,t.trailerList=e.data.trailerList,t.isLoading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(60),r=i.n(s),o=i(61),v=i.n(o),u=i(6),l=i(5);e.default={components:{navigation:n.a,news:r.a,trailer:v.a},data:function(){return{tvOnShowList:[],movieOnShowList:[],moviePage:0,tvPage:0}},created:function(){var t=this;l.a.getMovieOnShow().then(function(e){t.movieOnShowList=e.data.movieList}),u.a.getTVOnShow().then(function(e){t.tvOnShowList=e.data.tvList})},mounted:function(){var t=this;setInterval(function(){t.moviePage===t.movieOnShowList.length-1?t.moviePage=0:t.moviePage=t.moviePage+1,t.tvPage===t.tvOnShowList.length-1?t.tvPage=0:t.tvPage=t.tvPage+1},4e3)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(5);e.default={components:{navigation:n.a},data:function(){return{allPage:0,limit:16,isloading:!0,movieList:[]}},mounted:function(){var t=this;s.a.getAllMovie("","",this.limit).then(function(e){t.allPage=e.data.allPage,t.movieList=e.data.movieList,t.isLoading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(5);e.default={components:{navigation:n.a},data:function(){return{movie:{}}},mounted:function(){var t=this;s.a.getMovie(this.$route.params.id).then(function(e){t.movie=e.data.movie})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(13);e.default={components:{navigation:n.a},data:function(){return{allPage:0,limit:8,isloading:!0,newsList:[]}},mounted:function(){var t=this;s.a.getAllNews("","",this.limit).then(function(e){t.newsList=e.data.newsList,t.isloading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(6);e.default={components:{navigation:n.a},data:function(){return{allPage:0,limit:16,isloading:!0,tvList:[]}},mounted:function(){var t=this;s.a.getAllTV("","",this.limit).then(function(e){t.tvList=e.data.tvList,t.isLoading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(2),n=i.n(a),s=i(6);e.default={components:{navigation:n.a},data:function(){return{tv:{}}},mounted:function(){var t=this;s.a.getTV(this.$route.params.id).then(function(e){console.log(e.data),t.tv=e.data.tv})}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){t.exports=i.p+"static/img/logo.9a16cc3.jpg"},function(t,e,i){var a=i(1)(i(38),i(75),null,null);t.exports=a.exports},function(t,e,i){var a=i(1)(i(39),i(73),null,null);t.exports=a.exports},function(t,e,i){i(49);var a=i(1)(i(40),i(69),null,null);t.exports=a.exports},function(t,e,i){i(55);var a=i(1)(i(41),i(77),"data-v-e5be99ae",null);t.exports=a.exports},function(t,e,i){i(50);var a=i(1)(i(42),i(70),"data-v-3708e9d8",null);t.exports=a.exports},function(t,e,i){i(54);var a=i(1)(i(43),i(76),null,null);t.exports=a.exports},function(t,e,i){i(51);var a=i(1)(i(44),i(71),"data-v-56973a59",null);t.exports=a.exports},function(t,e,i){i(53);var a=i(1)(i(45),i(74),"data-v-72ef4df0",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),i("div",{staticClass:"pure-g"},[t._l(t.tvOnShowList,function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:a===t.tvPage,expression:"index===tvPage"}],staticClass:"pure-u-1-2 carousel",attrs:{id:"tv"}},[i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:a===t.tvPage,expression:"index===tvPage"}],staticClass:"pureimg",attrs:{src:e.bigPic}})]),t._v(" "),i("button",{staticClass:"pure-button  carousel-button carousel-button-left"},[i("a",{attrs:{href:"/tv/"+e._id}},[t._v("查看详情")])]),t._v(" "),i("p",{staticClass:"post-info post-info-left"},[t._v(t._s(e.description))]),t._v(" "),t._m(0,!0)],1)}),t._v(" "),t._l(t.movieOnShowList,function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:a===t.moviePage,expression:"index===moviePage"}],staticClass:"pure-u-1-2 carousel",attrs:{id:"movie"}},[i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:a===t.moviePage,expression:"index===moviePage"}],staticClass:"pureimg",attrs:{src:e.bigPic}})]),t._v(" "),i("button",{staticClass:"pure-button  carousel-button carousel-button-right"},[i("a",{attrs:{href:"/movie/"+e._id}},[t._v("查看详情")])]),t._v(" "),i("p",{staticClass:"post-info post-info-right"},[t._v(t._s(e.description))]),t._v(" "),t._m(1,!0)],1)}),t._v(" "),i("div",{staticClass:"pure-u-1-2",attrs:{id:"news"}},[i("div",{attrs:{id:"news-area"}},[i("news")],1),t._v(" "),t._m(2)]),t._v(" "),i("div",{staticClass:"pure-u-1-2",attrs:{id:"trailer"}},[i("div",{attrs:{id:"news-area"}},[i("trailer")],1),t._v(" "),t._m(3)])],2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle",attrs:{id:"red-circle"}},[i("a",{attrs:{href:"/tv"}},[t._v("美剧")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle",attrs:{id:"blue-circle"}},[i("a",{attrs:{href:"/movie"}},[t._v("电影")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle",attrs:{id:"yellow-circle"}},[i("a",{attrs:{href:"/news"}},[t._v("资讯")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"circle",attrs:{id:"green-circle"}},[i("a",{attrs:{href:"#"}},[t._v("预告")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"body"}},[i("navigation"),t._v(" "),i("div",{attrs:{id:"content"}},[i("img",{attrs:{src:t.movie.bigPic,alt:"movie.name"}}),t._v(" "),i("table",{staticClass:"pure-table"},[i("tbody",[i("tr",[i("td",[t._v("电影名")]),t._v(" "),i("td",[t._v(t._s(t.movie.name))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("发行公司")]),t._v(" "),i("td",[t._v(t._s(t.movie.station))])]),t._v(" "),i("tr",[i("td",[t._v("上映时间")]),t._v(" "),i("td",[t._v(t._s(t.movie.broadcastTime))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("导演")]),t._v(" "),i("td",[t._v(t._s(t.movie.directors))])]),t._v(" "),i("tr",[i("td",[t._v("编剧")]),t._v(" "),i("td",[t._v(t._s(t.movie.scenarists))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("主演")]),t._v(" "),i("td",[t._v(t._s(t.movie.casts))])]),t._v(" "),i("tr",[i("td",[t._v("类型")]),t._v(" "),i("td",[t._v(t._s(t.movie.genres))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("片长")]),t._v(" "),i("td",[t._v(t._s(t.movie.movieLength)+"分钟")])]),t._v(" "),i("tr",{staticClass:"pure-table"},[i("td",[t._v("下载链接")]),t._v(" "),i("td",[i("button",{staticClass:"pure-button download-button"},[i("a",{attrs:{href:t.movie.downloadLink}},[t._v("度盘链接")])])])])])]),t._v(" "),i("h4",[t._v("剧情介绍:")]),t._v(" "),i("p",[t._v(t._s(t.movie.synopsis))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),[i("div",{attrs:{id:"tv-area"}},t._l(t.tvList,function(e,a){return i("div",{staticClass:"tv-item pure-u-1-4"},[i("router-link",{attrs:{to:"tv/"+e._id}},[i("img",{attrs:{src:e.smallPic,alt:e.name}}),t._v(" "),i("p",[t._v(t._s(e.name))])])],1)}))]],2)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pure-menu pure-menu-horizontal",attrs:{id:"navigation"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i(59),alt:"logo"}})]),t._v(" "),a("div",[t._m(0),t._v(" "),a("ul",{staticClass:"pure-menu-list",attrs:{id:"menu"}},[a("li",{staticClass:"pure-menu-item"},[a("router-link",{staticClass:"pure-menu-link",attrs:{to:"/tv"}},[t._v("美剧")])],1),t._v(" "),a("li",{staticClass:"pure-menu-item"},[a("router-link",{staticClass:"pure-menu-link",attrs:{to:"/movie"}},[t._v("电影")])],1),t._v(" "),a("li",{staticClass:"pure-menu-item"},[a("router-link",{staticClass:"pure-menu-link",attrs:{to:"/news"}},[t._v("资讯")])],1),t._v(" "),a("li",{staticClass:"pure-menu-item"},[a("router-link",{staticClass:"pure-menu-link",attrs:{to:"/about"}},[t._v("关于闪电")])],1),t._v(" "),a("li",{staticClass:"pure-menu-item"},[a("router-link",{staticClass:"pure-menu-link",attrs:{to:"/joinus"}},[t._v("加入我们")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"pure-form",attrs:{id:"search"}},[i("input",{staticClass:"pure-input-rounded",attrs:{type:"text",id:"search-input"}}),t._v(" "),i("button",{staticClass:"pure-button",attrs:{type:"submit",id:"search-button"}},[i("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(t.trailerList,function(e,a){return i("li",{staticClass:"news-title"},[i("router-link",{attrs:{to:"news/"+e._id}},[t._v(t._s(e.name))]),t._v(" "),i("hr",{staticClass:"hr0"})],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"body"}},[i("navigation"),t._v(" "),i("div",{attrs:{id:"content"}},[i("img",{attrs:{src:t.tv.bigPic,alt:"tv.name"}}),t._v(" "),i("table",{staticClass:"pure-table"},[i("tbody",[i("tr",[i("td",[t._v("剧名")]),t._v(" "),i("td",[t._v(t._s(t.tv.name))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("电视台")]),t._v(" "),i("td",[t._v(t._s(t.tv.station))])]),t._v(" "),i("tr",[i("td",[t._v("首播时间")]),t._v(" "),i("td",[t._v(t._s(t.tv.firstBroadcastTime))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("本季开播时间")]),t._v(" "),i("td",[t._v(t._s(t.tv.curSeasonTime))])]),t._v(" "),i("tr",[i("td",[t._v("导演")]),t._v(" "),i("td",[t._v(t._s(t.tv.directors))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("编剧")]),t._v(" "),i("td",[t._v(t._s(t.tv.scenarists))])]),t._v(" "),i("tr",[i("td",[t._v("主演")]),t._v(" "),i("td",[t._v(t._s(t.tv.casts))])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("类型")]),t._v(" "),i("td",[t._v(t._s(t.tv.genres))])]),t._v(" "),i("tr",[i("td",[t._v("季数")]),t._v(" "),i("td",[t._v(t._s(t.tv.seasonsNum)+"季")])]),t._v(" "),i("tr",{staticClass:"pure-table-odd"},[i("td",[t._v("本季集数")]),t._v(" "),i("td",[t._v(t._s(t.tv.episodeNum)+"集")])]),t._v(" "),i("tr",[i("td",[t._v("单集片长")]),t._v(" "),i("td",[t._v(t._s(t.tv.singleEpisodeTime)+"分钟")])]),t._v(" "),t._l(t.tv.downloads,function(e,a){return i("tr",{staticClass:"pure-table pure-table-bordered"},[i("td",[t._v("第"+t._s(a+1)+"集")]),t._v(" "),i("td",[i("button",{staticClass:"pure-button download-button"},[i("a",{attrs:{href:e}},[t._v("度盘链接")])])])])})],2)]),t._v(" "),i("h4",[t._v("剧情介绍:")]),t._v(" "),i("p",[t._v(t._s(t.tv.synopsis))])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(t.newsList,function(e,a){return i("li",{staticClass:"news-title"},[i("router-link",{attrs:{to:"news/"+e._id}},[t._v(t._s(e.name))]),t._v(" "),i("hr",{staticClass:"hr0"})],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),i("div",{attrs:{id:"news-area"}},t._l(t.newsList,function(e,a){return i("div",{staticClass:"news-item"},[i("div",{attrs:{id:"gallery"}},[i("img",{attrs:{src:e.pic,alt:e.name}})]),t._v(" "),i("div",{attrs:{id:"text-area"}},[i("h3",[t._v(t._s(e.name))]),t._v(" "),i("hr",{staticClass:"hr0"}),t._v(" "),i("div",{attrs:{id:"info"}},[i("p",{attrs:{id:"trans"}},[t._v("翻译贡献者:"+t._s(e.translator))]),t._v(" "),i("p",{attrs:{id:"time"}},[t._v(t._s(e.transTime))])])])])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),[i("div",{attrs:{id:"movie-area"}},t._l(t.movieList,function(e,a){return i("div",{staticClass:"movie-item pure-u-1-4"},[i("router-link",{attrs:{to:"movie/"+e._id}},[i("img",{attrs:{src:e.smallPic,alt:e.name}}),t._v(" "),i("p",[t._v(t._s(e.name))])])],1)}))]],2)},staticRenderFns:[]}}],[35]);
//# sourceMappingURL=app.a0ae100edbcc71edd3b7.js.map