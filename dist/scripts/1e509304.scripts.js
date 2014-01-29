window.Config={baseurl:document.location.origin,sitetitle:"angular-cms",sitedesc:"This is the description",sitebrand:"/images/angular-cms-brand.png",sitecopy:"2014 ",version:"0.1",email:"jonniespratley@me.com",debug:!0,feature:{title:"angular-cms",body:"A content management system of some sort."},features:[{id:1,title:"HTML5",body:"Using HTML5 in every way to make a better user experience.",image:"/images/feature-html5.png"},{id:2,title:"AngularJS",body:"The client-side framework of choice is Angular, its a full-stack.",image:"/images/feature-angular.png"},{id:3,title:"Twitter Bootstrap",body:"The client-side UI of choice is Twitter Bootstrap 3.0.",image:"/images/feature-bootstrap.png"},{id:4,title:"PhantomJS",body:"Fully testable with Jasmine Karma Runner Unit e2e with PhantomJS.",image:"/images/feature-phantomjs.png"},{id:5,title:"NodeJS",body:"The server of choice is NodeJS, its fast and scalable.",image:"/images/feature-nodejs.png"},{id:6,title:"MongoDB",body:"The database of choice is Mongo, its fast and scalable.",image:"/images/feature-mongodb.png"}],session:{authorized:!1,user:null},layout:{header:"views/header.html",sidebar:"views/sidebar.html",content:"views/content.html",footer:"views/footer.html"},theme:{id:0,title:"Default",slug:"theme0",type:"theme",image:"/css/themes/theme0/splash.png",body:""},templates:{compiled:"/dist/templates.html",uncompiled:"/views"},menu:{admin:[{id:1,title:"Plugins",href:"/plugins",icon:"folder-open"},{id:1,title:"Widgets",href:"/widgets",icon:"puzzle-piece"},{id:1,title:"Media",href:"/media",icon:"cloud-download"},{id:1,title:"Users",href:"/users",icon:"group"},{id:1,title:"Themes",href:"/themes",icon:"camera"},{id:1,title:"Settings",href:"/settings",icon:"cog"}],pub:[],user:[{id:1,title:"Dashboard",icon:"dashboard",href:"/dashboard"},{id:2,title:"My Profile",icon:"user",href:"/profile"},{id:3,title:"Help",icon:"book",href:"/help"}]},config:{currentdate:new Date,dateformats:["medium","short","fullDate","longDate","mediumDate","shortDate"],timeformats:["mediumTime","shortTime"],dateformat:"medium",timeformat:"shortTime",timezone:null,servers:[{name:"apiv1",host:"127.1.0.1",port:3e3,body:"This is the v1 api server"},{name:"apiv2",host:"127.1.0.1",port:3e3,body:"This is the v2 api server"}],socketio:{host:"127.1.0.1",port:8081},network:{online:!0,cache:!0},database:{host:"127.1.0.1",port:27017,name:"angular-cms"},api:{url:"",endpoint:"/api/",version:"v2",versions:["v1","v2"]},live:!1,debug:!0,version:"0.0.1",formFactor:"desktop",currentOrientation:null,cdns:{http:"http://1ff1217913c5a6afc4c8-79dc9bd5ca0b6e6cb6f16ffd7b1e05e2.r26.cf1.rackcdn.com",https:"https://7fd8f70e662929940bdd-79dc9bd5ca0b6e6cb6f16ffd7b1e05e2.ssl.cf1.rackcdn.com",streaming:"http://4949e03d0fabf78f8c71-79dc9bd5ca0b6e6cb6f16ffd7b1e05e2.r26.stream.cf1.rackcdn.com",iosstreaming:"http://f0397ead16e1580b2c7f-79dc9bd5ca0b6e6cb6f16ffd7b1e05e2.iosr.cf1.rackcdn.com"}},options:{layouts:[{id:0,name:"Fixed",value:"container"},{id:1,name:"Fluid",value:"container-fluid"}],sidebars:[{id:1,name:"Default",value:"sidebar",url:"/views/partials/sidebar.html"}],navbars:[{id:1,name:"Default",value:"navbar",url:"/views/partials/navbar.html"}],backgrounds:[{id:0,title:"Default"}],themes:["Default","Amelia","Cerulean","Cosmo","Cyborg","Flatly","Journal","Readable","Simplex","Slate","Spacelab","United","Yeti"]},logout:{redirect:"#/login",message:"Good bye..."},login:{logo:"https://7fd8f70e662929940bdd-79dc9bd5ca0b6e6cb6f16ffd7b1e05e2.ssl.cf1.rackcdn.com/img/logo-login-med.png",redirect:"/#/home",message:"Welcome {{user.username}}"}},Parse.initialize("fYHs4Flnj7vgVHm9vaFiFTSKt5Mj2Bxf9e93mTOB","QPFGBNHs0QQHFS54atV71oKppd3gTgaFfQIHP2VW"),angular.module("angularCmsApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate","mgcrea.ngStrap"]).config(["$routeProvider",function(a){var b;return b={delay:function(a,b){var c;return c=a.defer(),b(c.resolve,1e3),c.promise}},a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/docs",{templateUrl:"views/docs.html",controller:"DocsCtrl"}).when("/admin",{templateUrl:"views/admin.html",controller:"AdminCtrl"}).when("/plugins",{templateUrl:"views/plugins.html",controller:"PluginsCtrl"}).when("/themes",{templateUrl:"views/themes.html",controller:"ThemesCtrl"}).when("/widgets",{templateUrl:"views/widgets.html",controller:"WidgetsCtrl"}).when("/media",{templateUrl:"views/media.html",controller:"MediaCtrl"}).when("/settings",{templateUrl:"views/settings.html",controller:"SettingsCtrl"}).when("/users",{templateUrl:"views/users.html",controller:"UsersCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/register",{templateUrl:"views/register.html",controller:"RegisterCtrl"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl"}).when("/profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/pages",{templateUrl:"views/pages.html",controller:"PagesCtrl"}).when("/help",{templateUrl:"views/help.html",controller:"HelpCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("angularCmsApp").controller("MainCtrl",["$scope","$rootScope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("DocsCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("AdminCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("LoginCtrl",["$scope","$rootScope","$cookieStore",function(a,b,c){return a.user={username:null,password:null,remember:!1},a.login=function(d){return console.log(d),Parse.User.logIn(d.username,d.password,{success:function(e){return console.log(e),a.$apply(function(){var a;return a={user:e.attributes,authorized:!0},console.log("save sessin",a),d.remember&&c.put("App.session",a),b.App.session=a,b.App.location.path("/dashboard")})},error:function(b,c){return a.$apply(function(){return a.error=c})}})},a.logout=function(){return App.session.user.remember||c.put("App.session",null),b.App.session=null,b.App.location.path(b.App.logout.redirect)},a.name="login"}]),angular.module("angularCmsApp").controller("ProfileCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("PluginsCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("ThemesCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("WidgetsCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("MediaCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("SettingsCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("DashboardCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("UsersCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("RegisterCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("PagesCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").directive("cmsFormGroup",function(){return{template:'<div class="form-group">\n  <label class="control-label col-sm-3 col-xs-3">{{label}}:</label>\n  <div class="controls col-sm-9 col-xs-9" ng-transclude>\n  </div>\n</div>',restrict:"E",replace:!0,transclude:!0,scope:{label:"@",hint:"@"},link:function(a,b){return console.log(a,b),b.find("input").addClass("form-control")}}}),angular.module("angularCmsApp").directive("widgets",function(){var a;return{restrict:"EMA",replace:!0,transclude:!0,scope:{},template:'<div class="widgets">\n	<ul class="nav nav-pills">\n			<li ng-repeat="widget in widgets" ng-class="{active:widget.selected}">\n				<a href="" ng-click="select(widget)">{{widget.title}}</a>\n			</li>\n	</ul>\n	<div ng-transclude>\n	\n	</div>\n</div>',controller:["$scope",function(a){var b;return b=a.widgets=[],a.select=function(a){return console.log(a),angular.forEach(b,function(a){return a.selected=!1}),a.selected=!0},this.add=function(c){return console.log(c),0===b.length&&a.select(c),b.push(c)}}],link:a=function(a,b,c){return console.log(a,b,c)}}}).directive("widget",function(){var a;return{scope:{id:"@",title:"@",icon:"@"},require:"^widgets",template:'<section id="widget-{{$id}}" class="widget {{selected ? \'selected\' : \'\'}}">\n	<header class="widget-header clearfix">\n		<!--i class="icon-chevron-right toggle" ng-show="icon"></i-->\n		<i class="icon-{{icon}}" ng-show="icon"></i>\n		<h3>{{title}}</h3>\n		\n	</header>\n	<section class="widget-content" ng-transclude></section>\n</section>',restrict:"E",replace:!0,transclude:!0,link:a=function(a,b,c,d){var e,f,g;return d.add(a),f=function(){var c;return console.log(a),c=!c,b.find(".widget-content").slideToggle(function(){return b.toggleClass(c?"closed":"opened")})},g=b.find(".widget-header"),g.css({cursor:"move"}),e=!0,g.bind("click",f)}}}),angular.module("angularCmsApp").controller("SidebarCtrl",["$scope","$rootScope",function(a,b){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.items=b.App.menu.user,a.selected=null,a.select=function(a){return angular.forEach(b.App.menu.admin,function(a){return a.selected=!1}),angular.forEach(b.App.menu.user,function(a){return a.selected=!1}),a.selected=!0},a.sidebar={closed:!1},a.toggleSidebar=function(){return a.sidebar.closed=!a.sidebar.closed}}]),angular.module("angularCmsApp").controller("HelpCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").controller("AppCtrl",["$scope","$rootScope","$http","$log","$route","$location","$routeParams","$cookieStore",function(a,b,c,d,e,f,g,h){var i;return i=Config,i.route=g,i.session=h.get("App.session"),i.route=e,i.location=f,i.routeParams=g,window.App=b.App=i,angular.element(document).ready(function(){return d.info("Document ready",this),angular.element(".sidebar-nav").bind("click","a",function(a){return d.info(a)})}),d.info(b),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularCmsApp").directive("cmsUploader",function(){var a;return{scope:{id:"@",title:"@",image:"@",collection:"@",maxwidth:"@",maxheight:"@",sizelimit:"@",filelimit:"@",aspectratio:"@",name:"@",btncrop:"@",btnupload:"@",action:"@",multiple:"@",cropper:"@",dragdrop:"@",litmpl:"@",showtable:"@",showlist:"@",handles:"@",uploader:"@"},template:'<div id="uploader">\n  <div id="uploader-dropzone" class="uploader-dropzone">\n    <h4>Drop files here</h4>\n    <p>\n      <span>or</span>\n    </p>\n    <button id="uploader-btn" class="btn btn-default">Select files</button>\n    <input id="uploader-file-input" type="file" name="{{name}}" multiple="{{multiple}}" />\n  </div>\n  <legend>Que</legend>\n  <span id="uploader-count"></span>\n   <legend>List</legend>\n  <div id="imgPanel"></div>\n\n  <div id="fileAttributes"></div>\n\n  <div id="uploader-wrap"></div>\n   <legend>Table</legend>\n  <table id="uploader-table" class="table table-bordered"></table>\n\n  <ul class="list-unstyled uploader-files-list">\n    <li class="media">\n      <a class="pull-left" href="#">\n        <img class="media-object img-thumbnail" src="http://placehold.it/75" />\n      </a>\n      <div class="media-body">\n        <h5 class="media-heading">File being uploaded...</h5>\n        <p>\n          <small>\n          Type: image/png \n          Size: 45kb \n          Modified: date</small>\n        </p>\n        <div class="progress">\n          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n            <span class="sr-only">60% Complete</span>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>',restrict:"E",replace:!0,transclude:!1,link:a=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;return q="uploader-dropzone",o="uploader-file-input",e="uploader-btn",r={files:[],button:angular.element("#"+e),input:angular.element("#"+o),dropzone:angular.element("#"+q)},r.button.bind("click",function(){return r.input.trigger("click")}),console.log(a),n=function(){var a,b;return r.input.hide(),a=document.getElementById(q),a.addEventListener("dragout",i,!1),a.addEventListener("dragover",j,!1),a.addEventListener("drop",k,!1),b=document.getElementById(o),b.addEventListener("change",function(a){var b;return b=a.currentTarget.files,l(b)},!1)},k=function(a){var b;return a.stopPropagation(),a.preventDefault(),b=a.dataTransfer.files,h(b),l(b)},j=function(a){return a.stopPropagation(),a.preventDefault(),console.log("dragover")},i=function(a){return a.stopPropagation(),a.preventDefault(),console.log("dragout")},h=function(a){var b,c,e,f,h,i;if(g(),c=document.getElementById("uploader-count"),c.innerHTML=a.length+" File(s) Selected",e=document.getElementById("uploader-table"),a.length>0){for(h=void 0,b=void 0,i=void 0,f=0;f<a.length;)d(a[f]),h=e.insertRow(f),b=h.insertCell(0),i=document.createTextNode(a[f].name),b.appendChild(i),b=h.insertCell(1),i=document.createTextNode(a[f].type),b.appendChild(i),b=h.insertCell(2),i=document.createTextNode((a[f].size/1024).toFixed(2)+"KB"),b.appendChild(i),void 0!==a[f].lastModifiedDate&&(b=h.insertCell(3),i=document.createTextNode(a[f].lastModifiedDate),b.appendChild(i)),f++;return e.style.visibility="visible"}return e.style.visibility="hidden"},g=function(){var a,b;for(a=document.getElementById("uploader-table"),b=[];a.rows.length>0;)b.push(a.deleteRow(a.rows.length-1));return b},l=function(b){var c,d,e,g,h,i,j,k,l,m;if(d=a.filelimit,k=a.sizelimit,g=/image.*/,i=document.getElementById("imgPanel"),i.innerHTML="",l=1024*k,b.length<d){for(e=0,m=[];e<b.length;)c=b[e],c.type.match(g)?c.size<l?(h=document.createElement("img"),h.file=c,h.id=c.name,h.name=c.name,h.alt=c.name,h.className="unhighlight",h.addEventListener("mouseover",p,!1),h.addEventListener("mouseout",f,!1),i.appendChild(h),j=new FileReader,j.onload=function(a){return function(b){return a.src=b.target.result}}(h),j.readAsDataURL(c)):alert(c.name+" is larger than "+k+"KB."):alert(c.name+" is not an image."),m.push(e++);return m}return i.innerHTML="Only "+d+" files can be selected at a time."},p=function(){var a,b,c,d;return console.log(this),a=this.file,c="",c+=a.type+"<br>",c+=(a.size/1024).toFixed(2)+"KB<br>",c+=a.lastModifiedDate+"<br>",b=document.getElementById("fileAttributes"),b.innerHTML=c,d={html:!0,selector:"."+a.name,title:"File info",content:c,placement:"top"},this.className="highlight "+a.name},f=function(){var a;return a=document.getElementById("fileAttributes"),a.innerHTML="",this.className="unhighlight"},m=function(a){return function(b){var c;return c=document.createElement("span"),c.innerHTML=['<img class="uploader-thumb" src="',b.target.result,'" title="',escape(a.name),'"/>'].join(""),$("#uploader-wrap").html(c)}},d=function(){var b,c;return b="#uploader-thumbnails",c=angular.element(a.litmpl).html(),angular.element(b).append(c)},n(q),console.log("Linking function",b,c)}}});