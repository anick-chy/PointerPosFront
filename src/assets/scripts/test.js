var testApp = angular.module('testModule', []);
testApp.controller('CustomersController', ['$scp', function ($scp) {
    var counter = 0;
    $scp.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
    };

    
}]);

//testApp.directive('myIsolatedScopeWithName', function () {
//    return {
//        scope: {
//            name: '@'
//        },
//        template: 'Name: {{ name }}'
//    };
//});

//testApp.directive('myIsolatedScopeWithModel', function () {
//    return {
//        scope: {
//            customers: '=customer' //Two-way data binding
//        },
//        template: '<ul ng-repeat="cust in customers"><li ng-repeat="prop in cust">{{ prop }}</li></ul>'
//    };
//});

testApp.directive('isolatedScopeWithController', function () {
    return {
        restrict: 'EA',
        scope: {
            customer: '=',
        },
        controller: function ($scp) {
            $scp.customer.name = 'Anick';
        },
        template: '<div>{{ customer.name }}</div>'
    };
});