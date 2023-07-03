document.getElementById('btn').addEventListener('click', function() {
    var lol = new XMLHttpRequest();
    lol.open('GET', 'https://v2.jokeapi.dev/joke/Any');
    lol.onreadystatechange = function() {
    if (lol.readyState === XMLHttpRequest.DONE && lol.status === 200) {
    var response = JSON.parse(lol.responseText);
    var jokeDiv = document.getElementById('joke');

    if (response.type === 'single') {
        jokeDiv.innerHTML = `<p>${response.joke}</p>`;
    } else if (response.type === 'twopart') {
        jokeDiv.innerHTML = `
        <p>${response.setup}</p>
        <p>${response.delivery}</p>
        `;
    }
    }
};
lol.send();
});

document.getElementById('addBtn').addEventListener('click', function() {
    var newJoke = {
        category: "Miscellaneous",
        type: "single",
        joke: "This is a new joke"
    };

    fetch('https://v2.jokeapi.dev/joke/Any', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJoke)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Joke added successfully!');
        })
        .catch(error => {
            console.log(error);
            alert('Failed to add joke.');
        });
});


