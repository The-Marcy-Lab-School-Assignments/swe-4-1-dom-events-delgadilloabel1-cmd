const playlists = [
  {
    title: "Chill Vibes",
    image: "./img/playlist-chill.jpg",
    description: "A playlist for chill vibes",
  },
  {
    title: "Focus",
    image: "./img/playlist-focus.jpg",
    description: "A playlist for focus",
  },
  {
    title: "Late Night",
    image: "./img/playlist-late-night.jpg",
    description: "A playlist for late night",
  },
  {
    title: "Love Songs",
    image: "./img/playlist-love.jpg",
    description: "A playlist for love songs",
  },
  {
    title: "Oldies",
    image: "./img/playlist-oldies.jpg",
    description: "A playlist for oldies",
  },
  {
    title: "Sad",
    image: "./img/playlist-sad.jpg",
    description: "A playlist for sad songs",
  },
];

// Add your code here...
const playlistGrid = document.getElementById("playlists-grid");
playlists.forEach((playlist) => {
  // Create
  const playlistLi = document.createElement("li");
  const playlistImage = document.createElement("img");
  const playlistTitle = document.createElement("p");

  // Modify
  playlistLi.classList.add("playlist-card");
  playlistLi.dataset.title = playlist.title;
  playlistImage.src = playlist.image;
  playlistImage.alt = playlist.description;
  playlistTitle.textContent = playlist.title;

  // Append
  playlistLi.append(playlistImage, playlistTitle);
  playlistGrid.append(playlistLi);
});

// Event Listeners

playlistGrid.addEventListener("click", (event) => {
  const playlistCard = event.target.closest("li");

  if (!playlistCard) return;

  playlistCard.classList.add("selected");

  const nowPlaying = document.getElementById("now-playing-title");
  nowPlaying.textContent = playlistCard.dataset.title;

  document.querySelectorAll(".playlist-card").forEach((card) => {
    if (card !== playlistCard) {
      card.classList.remove("selected");
    }
  });
});
