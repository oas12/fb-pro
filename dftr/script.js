document.getElementById('giveawayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        const participantList = document.getElementById('participantList');
        const newParticipant = document.createElement('li');
        newParticipant.textContent = `${name} (${email})`;

        participantList.appendChild(newParticipant);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

        // Enable the "Pick Winner" button
        document.getElementById('pickWinner').disabled = false;
    }
});

document.getElementById('pickWinner').addEventListener('click', function () {
    const participants = document.querySelectorAll('#participantList li');
    
    if (participants.length > 0) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomIndex].textContent;

        document.getElementById('winnerDisplay').textContent = `Pemenang: ${winner}`;
    }
});
