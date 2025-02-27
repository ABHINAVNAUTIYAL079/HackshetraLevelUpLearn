document.addEventListener("DOMContentLoaded", () => {
    const peers = [
        { name: "Jane Smith", level: 3, points: 150 },
        { name: "Alice Johnson", level: 4, points: 200 },
        { name: "Bob Brown", level: 2, points: 100 },
    ];

    const peersList = document.getElementById("peersList");

    peers.forEach(peer => {
        const peerElement = document.createElement("div");
        peerElement.classList.add("peer");

        peerElement.innerHTML = `
            <img src="https://github.com/nutlope.png" alt="${peer.name}" class="avatar">
            <div>
                <p class="name">${peer.name}</p>
                <p class="info">Level: ${peer.level}</p>
                <p class="info">Points: ${peer.points}</p>
            </div>
        `;

        peersList.appendChild(peerElement);
    });
});
