const btn = document.getElementById('submitButton');
const txt = document.getElementById('addedText');
let ul = document.getElementById('ul')

btn.addEventListener('click', function() {
    let list = document.createElement('li');
    list.innerHTML = txt.value;
    ul.appendChild(list);

});
