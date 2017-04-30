angular.module('patternUnlock', [])
    .service('PatternUnlockService', [
        '$uibModal', 
        '$localStorage',
        function ($uibModal, $localStorage) {
            this.isRegistered = function() {
                return !!$localStorage.pattern;
            }

            this.reset = function() {
                // return uibModal.open's promise
                return $uibModal.open({
                    templateUrl: 'components/patternUnlock/views/reset.modal.html',
                    controller: function($scope, $localStorage, $uibModalInstance) {
                        $scope.errMessage = false;

                        $scope.validate = function(pattern) {
                            if (pattern.length < 4) {
                                $scope.errMessage = true;
                            } else {
                                $localStorage.pattern = pattern;
                                $uibModalInstance.close();
                            }
                        }
                    },
                    keyboard: false,
                    backdrop: 'static',
                    size: 'lg',
                    windowClass: 'modal-fullscreen'
                }).result;
            }

            this.unlock = function() {
                // return uibModal.open's promise
                return $uibModal.open({
                    templateUrl: 'components/patternUnlock/views/unlock.modal.html',
                    controller: function($scope, $localStorage, $uibModalInstance) {
                        $scope.isIncorrect = false;

                        $scope.validate = function(pattern) {
                            if (angular.equals(pattern, $localStorage.pattern)) {
                                $uibModalInstance.close()
                            } else {
                                $scope.isIncorrect = true;
                            }
                        }
                    },
                    keyboard: false,
                    backdrop: 'static',
                    size: 'lg',
                    windowClass: 'modal-fullscreen'
                }).result;
            }
        }
    ]);
