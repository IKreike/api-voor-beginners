
getData(MyURL).then(DataImage =>{
    console.log(DataImage);
    let myAvatar = DataImage.data.avatar;
    console.log(myAvatar);

    let myImg = document.createElement("img");
    let myName = DataImage.data.name;
    let mySection = document.querySelector("section:nth-of-type(1)");

    myImg.src= myAvatar;
    myImg.alt= myName;
    
    mySection.appendChild(myImg);

    console.log(myImg);
});













/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }