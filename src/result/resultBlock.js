let dogResult = document.querySelector('.resultDog').addEventListener('click', () => {
    document.querySelector('.votes').style.display = 'block';
    document.querySelector('.cats').style.display = 'none';
    document.querySelector('.dogs').style.display = 'flex';
    

})

let catResult = document.querySelector('.resultCat').addEventListener('click', () => {
    document.querySelector('.votes').style.display = 'block';
    document.querySelector('.dogs').style.display = 'none';
    document.querySelector('.cats').style.display = 'flex';
    
})

export {dogResult};
export {catResult};