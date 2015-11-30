angular.module('appRoutes', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url:'/',
		templateUrl: "views/pages/home.html"
	})
	//signin page
	.state('signin', {
		url:'/signin',
		templateUrl: "views/pages/signin.html",
		controller: "SignInCtrl"
	})
	//sign out page
	.state('signout', {
		url:'/signout',
		templateUrl: "views/pages/signout.html",
		controller: "SignOutCtrl"
	})
	//registration page
	.state('register', {
		url:'/register',
		templateUrl:"views/pages/register.html",
	})
	//about page
	.state('about',{
		url:'/about',
		templateUrl: "views/pages/about.html"
	})
	//programs page
	.state('programs',{
		url:'/programs',
		templateUrl: "views/pages/programs.html"
	})
	//user profile
	.state('profile',{
		url: '/profile',
		templateUrl: "views/pages/profile.html"
	})
	//6 month reporting
	.state('report',{
		url: '/report',
		templateUrl: "views/pages/report.html",
		controller: 'reportController',
		controllerAs: 'cReport'
	})
	//members page
	.state('membershipReport',{
		url: '/membership_report',
		templateUrl: "views/pages/membershipReport.html",
		controller: 'membershipReport',
		controllerAs: 'mReport'
	})
	// groups page
	.state('groups', {
		url: '/groups',
		templateUrl:'/views/pages/groups.html',
		controller: 'userController',
		controllerAs: 'user'
	})
	//create user page
	.state('create', {
		url: '/create',
		templateUrl:'/views/pages/create.html',
		controller: 'userCreateController',
		controllerAs: 'user'
	});
		;

		$locationProvider.html5Mode(true);
	});