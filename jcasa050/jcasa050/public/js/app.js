angular.module('mainApp', ['eventCtrl', 'eventService', 'appRoutes', 'angular.filter'])

.controller('mainController', function() {

	var vm = this;

	vm.tagline = 'To the moon and back!';	

})

.controller('homeController', function() {

	var vm = this;

	vm.tagline = 'To the moon and back!';	

})


.controller('aboutController', function() {

	var vm = this;

	vm.tagline = 'Nothing beats a pocket protector!';

})

.controller('programsController', function() {

	var vm = this;
	vm.tagline = 'The square root of life is pi!';	

});