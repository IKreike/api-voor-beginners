const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';


const everybodyURL = baseURL+endpointSquad;

getData(everybodyURL).then(DataEverybody =>{

    let everybodySection = document.querySelector("section:nth-of-type(2)");
    let persons = DataEverybody.data;

    persons.forEach(person => {

        let personName = person.name;
        let personImg = person.avatar;
        let personSite = person.website;
        // console.log(personSite);
        let getal = Math.random()*5;
        let afrondGetal = Math.floor(getal) +1;
        console.log (afrondGetal);

        if (personImg){
            // als hij bestaat, do nothing
        } else {
            // gebruik defaultplaatje 2
            personImg=`images/placeholder${afrondGetal}.svg`;
        }

        if (personSite){
            // do nothing
        } else {
            personSite = fallbackWebsite
        }

        let personHTML = `<article>
            <h3>${personName}</h3>
            <img src="${personImg}" alt=${personName}>
            <a href="${personSite}" aria-label="de website van ${personName}">website</a>
        </article>`

        everybodySection.insertAdjacentHTML('beforeend', personHTML);
    });

    // console.log(allPerson);
})











/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }