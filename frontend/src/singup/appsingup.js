
angular.module('appsingup', ['appapi']);

angular.module('appsingup').factory('AppSingupModel', function(AppAuth, AppApi, $state){
	var outrom = {
		firstname: '',
		lastname: '',
		email: '',
		username: '',
		password: '',
		adm: false,
		loading: false,
		singup: singup,
	};

	function singup(){
		outrom.loading = true;

		AppApi.singup(outrom.adm, outrom.firstname, outrom.lastname, outrom.email, outrom.username, outrom.password).then(function(result){
		//	var logged_user = result.data;

			//if(logged_user){
				AppAuth.set_user(result.data);
				$state.go('home');
			//} else {
				//alert('wrong credentials');
			//}
		}).finally(function(){
			m.loading = false;
		});
	}

	return outrom;
});


angular.module('appsingup').directive('appsingup', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		templateUrl: APP.BASE_URL+'singup/appsingup.html',
		controller: function($scope, AppSingupModel){
			$scope.outrom = AppSingupModel;
		},
	};
});
