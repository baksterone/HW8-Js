const CAT_IMG = 'https://api.thecatapi.com/v1/images/search';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';

document.querySelector('.dog').addEventListener('click', () => {
    fetch(DOG_IMG).then(response => { response.json().then(data => {
        let newImg = document.createElement('img'),
        name = document.createElement('p'),
        weight = document.createElement('p');

        newImg.src = data[0].url;
        newImg.alt = 'dog';
        name = data[0].breeds[0].name + " ";
        weight = data[0].breeds[0].weight.metric + "cm";
        document.querySelector('.content').append(name, weight, newImg);
    });
});
});

document.querySelector('.cat').addEventListener('click', () => {
    fetch(CAT_IMG).then(response => { response.json().then(data => {
        let newImg = document.createElement('img'),
        name = document.createElement('p'),
        weight = document.createElement('p');

        newImg.src = data[0].url;
        newImg.alt = 'cat';
        name = data[0].breeds[0].name + " ";
        weight = data[0].breeds[0].life_span + "years";
        document.querySelector('.content').append(name, life_span, newImg);
    });
});
});
