var carrierApp = angular.module("carrierApp",[])
.controller("validCarrierController",['$scope','carrierType',function($scope,carrierType){
	$scope.carriers = carrierType.getCarrierTypes();
	
}])

.controller("inValidCarrierController",['$scope','carrierType',function($scope,carrierType){
	$scope.carriers = carrierType.getCarrierTypes();
}])

//Factory Service which seperates implementation logic from controller
.factory('carrierType',function(){
	return{
		getCarrierTypes:function(){
			var carrierTypesArray = 
				[
				{id:101, type:'validCCCarrier',   carriercode:'CC'},
				{id:102, type:'validCCCarrier',   carriercode:'CC1'},
				{id:103, type:'validCCCarrier',   carriercode:'CC2'},
				{id:104, type:'invalidCCCarrier', carriercode:'iCC3'},
				{id:105, type:'invalidCCCarrier', carriercode:'iCC4'},
				{id:106, type:'invalidCCCarrier', carriercode:'iCC5'}
				];                       
			return carrierTypesArray;
		}	
	};
});
