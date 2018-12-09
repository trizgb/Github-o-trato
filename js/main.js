'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');


function handleClick () {
    let userName = input.value;
    //console.log(userName)
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then (data => {
        const showName = document.querySelector('.show-name');
        let selectedName = data.name;
        selectedName = selectedName.split(" ");
        console.log(selectedName[0]);
        let partitionName = selectedName[0];
        partitionName = partitionName.split("");
        console.log(partitionName.length);
        for (let i = 0; i <= partitionName.length; i++){
            
            showName.innerHTML = '<li></li>'
        }
    });
};

button.addEventListener('click', handleClick);

//promesa seleccionar nombre real de la criatura
//escribimos cada letra en un li de una lista ordenada

