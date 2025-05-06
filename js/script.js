function sendMelding() {
    alert("Melding sendt!");
}

function darkmode() {
    document.body.classList.toggle("dark-mode");
    // Lagre vaglt modus i localstorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Sjekker hvilgen av modusene er lagret i localstorage
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});
// Legger til eventlistener for å sende melding
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('comment').value;
    document.getElementById('comment-section').innerHTML += `<p>${input}</p>`;
});
