const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');
const textGreeting = document.getElementById('greeting')
const date = new Date()
const hours = date.getHours()

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }

    requestApi(searchTerm);
})
if (hours < 12) {
    textGreeting.innerText = "Bom dia!" + "Matheus" + "O que vai ouvir hoje?"
} else if (hours < 18) {
    textGreeting.innerText = "Boa tarde," + " " + "Matheus" + "!" + " " + "O que vai ouvir hoje?"
} else {
    textGreeting.innerText = "Boa noite," + " " + "Matheus" + "!" + " " + "O que vai ouvir hoje?"
}