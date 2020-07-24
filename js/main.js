angular.module('game', ['ngRoute'])
	.config(['$routeProvider',
		function ($routeProvider) {
			// Routes configuration
			$routeProvider
				.when('/MainPage', {
					templateUrl: '/description.html',
					controller: 'GalleryController'
				})
				.when('/Gallery', {
					templateUrl: '/gallery.html',
					controller: 'GalleryController'
				})
				.when('/AddImage', {
					templateUrl: '/addImage.html',
					controller: 'GalleryController'
				})
				.otherwise({
					redirectTo: '/MainPage'
				});

			// Uses HTLM5 history API for navigation
			//$locationProvider.html5Mode(true);
		}
	])
	.controller('GalleryController',
		['$scope', 'imageService', function ($scope, imageService) {


			$scope.images = imageService.Images;
			$scope.imageName = 'imageName';
			$scope.imageDescription = 'imageDescription';
			$scope.imageURL = 'imageURL';
			$scope.lgn;
			$scope.passrd;
			$scope.user;
			$scope.description = '<b>Description!</b>';


			$scope.showButtons = function (index) {
				$scope.images[index].areButtonsShown = !$scope.images[index].areButtonsShown;

			}

			$scope.showPencil = function (index) {
				$scope.images[index].isPencilShown = true;

			}

			$scope.openImage = function (index) {
				$scope.images[index].isFullSize = !$scope.images[index].isFullSize;

			}

			$scope.hidePencil = function (index) {
				$scope.images[index].isPencilShown = false;

			}

			$scope.addImage = function () {
				$scope.images = imageService.addImage($scope.imageName, $scope.imageDescription, $scope.imageURL);
				$scope.imageName = 'imageName';
				$scope.imageDescription = 'imageDescription';
				$scope.imageURL = 'imageURL';
			};

			$scope.deleteImage = function (index) {
				$scope.images = imageService.deleteImage(index);
			};

			$scope.moveImageToRight = function (index) {
				$scope.images = imageService.moveImageToRight(index);
			};

			$scope.moveImageToLeft = function (index) {
				$scope.images = imageService.moveImageToLeft(index);
			};

			$scope.login = function () {
				$scope.user = imageService.login($scope.lgn, $scope.passrd);
			};


		}]);
