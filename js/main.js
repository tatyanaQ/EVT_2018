angular.module('game', [])
	.controller('GalleryController', 
		['$scope', 'imageService', function($scope, imageService){
			
			
			$scope.images = imageService.Images;
			$scope.imageName = 'imageName';
			$scope.imageURL = 'imageURL';
			
			$scope.showButtons = function(index){
				if ($scope.images[index].isVisible=='block')
				$scope.images[index].isVisible='none';
				else $scope.images[index].isVisible='block'
				
			}
			
			$scope.addImage = function(){
				$scope.images = imageService.addImage($scope.imageName, $scope.imageURL);
			};
		
			$scope.deleteImage = function (index){
				$scope.images = imageService.deleteImage(index);
			};
			
			$scope.moveImageToRight = function(index){
				$scope.images = imageService.moveImageToRight(index);
			};
			
			$scope.moveImageToLeft = function(index){
				$scope.images = imageService.moveImageToLeft(index);
			};
			
			
			
			
		}]);