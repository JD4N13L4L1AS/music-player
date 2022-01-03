const tracks = [
  {
    trackNo: 1,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - you!.mp3",
    title: "you!",
  },
  {
    trackNo: 2,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - cowboy in LA.mp3",
    title: "cowboy in LA",
  },
  {
    trackNo: 3,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - heart won't let me.mp3",
    title: "heart won't let me",
  },
  {
    trackNo: 4,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - if this is the last time.mp3",
    title: "if this is the last time",
  },
  {
    trackNo: 5,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - i still talk to jesus.mp3",
    title: "i still talk to jesus",
  },
  {
    trackNo: 6,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - paper.mp3",
    title: "paper",
  },
  {
    trackNo: 7,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - good guys.mp3",
    title: "good guys",
  },
  {
    trackNo: 8,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - sharing you.mp3",
    title: "sharing you",
  },
  {
    trackNo: 9,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - bad news.mp3",
    title: "bad news",
  },
  {
    trackNo: 10,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - when you're drunk.mp3",
    title: "when you're drunk",
  },
  {
    trackNo: 11,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - anything 4 u.mp3",
    title: "anything 4 u",
  },
  {
    trackNo: 12,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - sad.mp3",
    title: "sad",
  },
  {
    trackNo: 13,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId:
      "./assets/music/LANY - what i wish just one person would say to me.mp3",
    title: "what i wish just one person would say to me",
  },
  {
    trackNo: 14,
    albumImg: "./assets/image/lany_mama_boy.jpg",
    trackId: "./assets/music/LANY - nobody else.mp3",
    title: "nobody else",
  },
];

const musicContainerTag = document.getElementsByClassName("musicContainer")[0];
const audioTag = document.getElementsByClassName("music")[0];

for (let i = 0; i < tracks.length; i++) {
  const trackContainerTag = document.createElement("div");
  const trackTag = document.createElement("div");
  const trackNoTag = document.createElement("span");
  const trackAlbumImgTag = document.createElement("img");
  const trackNameTag = document.createElement("div");

  trackContainerTag.addEventListener("click", () => {
    const currentTrackId = tracks[i].trackId;
    audioTag.src = currentTrackId;
    audioTag.play();
  });
  trackContainerTag.classList.add("trackContainer");

  const titleId = tracks[i].trackNo + ". ";
  const titleImg = tracks[i].albumImg;
  const titleName = tracks[i].title;

  trackNameTag.style.display = "inline";

  trackNoTag.append(titleId);
  trackAlbumImgTag.src = titleImg;
  trackAlbumImgTag.classList.add("songImg");
  trackNameTag.append(titleName);
  trackTag.append(trackNoTag, trackAlbumImgTag, trackNameTag);
  trackContainerTag.append(trackTag);
  musicContainerTag.append(trackContainerTag);
}
