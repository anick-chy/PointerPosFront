///<reference path='app.js' />
///<reference path='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js' />

app
    .controller('loginController', function ($scope, $timeout) {
        $scope.isDisabled = false;
        $scope.btnMasterHtml = "Log In";
        $scope.btnDisabledHtml = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";

        $scope.userCheck = function (event) {
            var obj = event.target;
            obj.innerHTML = $scope.btnDisabledHtml;

            $scope.isDisabled = true;
            $timeout(function () {
                obj.innerHTML = $scope.btnMasterHtml;
                $scope.isDisabled = false;
            }, 2000);

            
        }
    });