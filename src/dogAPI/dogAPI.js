const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';

// Получение картинок собак

async function getDog(){
    let dog = await fetch(DOG_IMG);
    return dog;
}

let showDog = document.querySelector('.dogBtn').addEventListener('click', () => {
    let showDog = getDog();
    showDog.then(response =>{ response.json().then(data => {
        
        let newImg = document.querySelector('.dogImg')
        newImg.src = data[0].url;
        newImg.alt = 'dog';
        
        
        document.querySelector('.voteBtnDog').classList.add('show');
        document.querySelector('.dog').classList.add('show');
        document.querySelector('.btn').style.display = 'none';
        document.querySelector('.returnBtn').style.display = 'block';
        document.querySelector('.resultDog').style.display = 'block';
        document.querySelector('.resultCat').style.display = 'none';
        
    })  
})
})



export {showDog};
export {getDog};