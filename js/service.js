angular.module('game')
	.service('imageService', function(){
		
				
		var images = [
			createImage("Mars", "Red planet", "http://mks-onlain.ru/wp-content/uploads/2016/08/Mars.jpg"), 
			createImage("Gagarin", "First in the open space", 'https://24smi.org/public/media/2017/4/11/%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%20%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82%20%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8F%2C%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B5%D0%BC%D1%83%20%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%BC%D0%B8%20%D0%BF%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%B0%D0%BC%D0%B8_PiU3vtK.jpg'),
			createImage("ISS", "International Space Station", 'http://oboitd.ru/images/goods/big/20160425090938_Kosmos_p25017.jpg'),
			createImage("Weightlessness", "g = 0", 'https://images2.popmeh.ru/upload/default/51a/51a2f19520d5b1e12cad2bd0c7a09341.jpg'),
			createImage("bgnm,./", "hnjmk", 'http://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif')];
			
		var users = [
			createUsers("user", "12345", false), 
			createUsers("admin", "q12345", true)];
		
		return {
		/*	getAll: getAllFunc, //функция, возвращающая массив
			initFirstImages: initFirstImages,
			addNewImg:addNewImg,*/
			Images:images,
			deleteImage:deleteImage,
			moveImageToLeft:moveImageToLeft,
			moveImageToRight:moveImageToRight,
			addImage:addImage,
			Users:users,
			login:login
		};
				
		function createImage(name_, description_, URL_){
			
			var substringArray = URL_.split(".");
			return {
				name:name_,
				description:description_,
				URL:URL_,
				isFullSize:false,
				isPencilShown:false,
				areButtonsShown:false,
				extention: substringArray[substringArray.length-1]
			};
		}
		
		function addImage(imageName, imageDescription, imageURL){
				images.push(createImage(imageName, imageDescription, imageURL));
				return images;
			}
		
		function deleteImage(index) {
			images.splice(index, 1);
			return images;
		}
			
		 function moveImageToRight(index)
			{
				var img = images[index]; 
				var nextIndex;
				if (index < images.length-1) nextIndex = index+1;
				else nextIndex = 0;
				
				images[index] = images[nextIndex];
				images[nextIndex] = img;
				return images;
			}
			
		function moveImageToLeft(index)
		{
				
			var img = images[index]; 
			var nextIndex;
			if (index > 0) nextIndex = index-1;
			else nextIndex = images.length-1;
			
			images[index] = images[nextIndex];
			images[nextIndex] = img;
			return images;
		}
		
		function createUsers(name_, password_, isAdmin_){
			return {
				lgn:name_,
				passrd:password_,
				isAdmin: isAdmin_
			};
		}
		
		function login(login_, password_) {
			var myUser;
			users.forEach(function(currentUser){
				if (currentUser.lgn == login_ && currentUser.passrd == password_) myUser = currentUser;
			});
			
			return myUser;		 
		}
	});
