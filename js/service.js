angular.module('game')
	.service('imageService', function(){
		
				
		var images = [
			createImage("Mars", "http://mks-onlain.ru/wp-content/uploads/2016/08/Mars.jpg"), 
			createImage("Gagarin",'https://24smi.org/public/media/2017/4/11/%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%20%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82%20%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8F%2C%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B5%D0%BC%D1%83%20%D0%B1%D0%BE%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%BC%D0%B8%20%D0%BF%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%B0%D0%BC%D0%B8_PiU3vtK.jpg'),
			createImage("ISS",'http://oboitd.ru/images/goods/big/20160425090938_Kosmos_p25017.jpg'),
			createImage("Weightlessness",'https://images2.popmeh.ru/upload/default/51a/51a2f19520d5b1e12cad2bd0c7a09341.jpg')];
		
		return {
		/*	getAll: getAllFunc, //функция, возвращающая массив
			initFirstImages: initFirstImages,
			addNewImg:addNewImg,*/
			Images:images,
			deleteImage:deleteImage,
			moveImageToLeft:moveImageToLeft,
			moveImageToRight:moveImageToRight,
			addImage:addImage
		};
		
		/*function addNewImg(url){
			images.push(createImage('https://d1u5p3l4wpay3k.cloudfront.net/overwatch_gamepedia/d/d0/Mei-portrait.png'));
			return images;
		}
		
		function getAllFunc(){
			return images;	
		}
		
		function initFirstImages(){
			images.push(createImage('https://cdnb.artstation.com/p/assets/images/images/002/401/145/large/dave-greco-meifinal.jpg?1461291763'));
			images.push(createImage('https://mfiles.alphacoders.com/653/653165.jpg'));
			images.push(createImage('http://cdn3.twinfinite.net/wp-content/uploads/2017/08/meianimatedshort.jpg'));
			
			return images;
		}*/
		
		
		function createImage(name_, URL_, isVisible_){
			return {
				name:name_,
				URL:URL_,
				isVisible:isVisible_ ? isVisible_ :  'none'
			};
		}
		
		function addImage(imageName, imageURL){
				images.push(createImage(imageName, imageURL));
				return images;
			}
		
		function deleteImage(index) {
			images.splice(index, 1);
			return images;
		}
			
		 function moveImageToRight(index)
			{
				var img = createImage(images[index].name, images[index].URL, images[index].isVisible);
				var nextIndex;
				if (index < images.length-1) nextIndex = index+1;
				else nextIndex = 0;
				
				images[index] = images[nextIndex];
				images[nextIndex] = img;
				return images;
			}
			
		function moveImageToLeft(index)
		{
				
			var img = createImage(images[index].name, images[index].URL, images[index].isVisible);
			var nextIndex;
			if (index > 0) nextIndex = index-1;
			else nextIndex = images.length-1;
			
			images[index] = images[nextIndex];
			images[nextIndex] = img;
			return images;
		}
	});