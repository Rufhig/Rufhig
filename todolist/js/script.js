"use strict";

let createDiv = document.getElementById('js-create');

document.getElementById('inputForm').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementsByClassName('js-name')[0].value;
    const date = document.getElementsByClassName('js-date')[0].value;
    
    // Check if the inputs are not empty 
    if (name && date) {
        const newParagraph = document.createElement('p');
        newParagraph.innerText = `${name} ${date}`;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-button'); //add a class to the delete button
        deleteButton.addEventListener('click', function() {
            createDiv.removeChild(newParagraph);
        });

        // Append the delete button to the paragraph
        newParagraph.appendChild(deleteButton);
        // Insert the new paragraph at the top
        createDiv.insertBefore(newParagraph, createDiv.firstChild);
    }


    // Clear the input fields
    document.getElementsByClassName('js-name')[0].value = ''; 
    document.getElementsByClassName('js-date')[0].value = '';
});