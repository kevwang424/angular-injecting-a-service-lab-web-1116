function ContactController($timeout, $scope) {
	$scope.name = 'Kevin';

	$timeout(function () {
    // this would be fired after 2 seconds!
		$scope.name = "Bob"
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
