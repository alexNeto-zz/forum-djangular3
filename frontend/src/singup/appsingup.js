
angular.module('appsingup', ['appapi']);

angular.module('appsingup').factory('AppSingupModel', function(AppAuth, AppApi, $state){
	var m = {
		username: '',
		password: '',
		loading: false,
		singup: singup,
	};

	function singup(){
		m.loading = true;
		AppApi.singup(m.username, m.password).then(function(result){
			var logged_user = result.data;
			if(logged_user){
				AppAuth.set_user(result.data);
				$state.go('home');
			} else {
				alert('wrong credentials');
			}
		}).finally(function(){
			m.loading = false;
		});
	}

	return m;
});

angular.module('appsingup').directive('appsingup', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'singup/appsingup.html',
		controller: function($scope, AppSingupModel){
			$scope.m = AppSingupModel;
		},
	};
});
