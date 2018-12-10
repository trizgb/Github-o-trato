'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');


function handleClick () {
    let userName = input.value;
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then (data => {
        const showName = document.querySelector('.show-name');
        let selectedName = data.name;
        selectedName = selectedName.split(" ");
        let partitionName = selectedName[0];
        partitionName = partitionName.split("");
        let letterList = '';
        for (let i = 0; i < partitionName.length; i++){  
            letterList += `<li class="item"> ${partitionName[i]} </li>`;
        }
        showName.innerHTML = letterList;
    });
};

button.addEventListener('click', handleClick);

