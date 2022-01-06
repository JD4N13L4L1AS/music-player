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
    title: "(what i wish just one person would say to me)",
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

const currentProgressTag = document.getElementById("currentProgress");

const playedTimeTag = document.getElementsByClassName("playedTime")[0];
const totalTimeTag = document.getElementsByClassName("totalTime")[0];
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

for (let i = 0; i < tracks.length; i++) {
  const trackContainerTag = document.createElement("div");
  const trackTag = document.createElement("div");
  const trackNoTag = document.createElement("span");
  const trackAlbumImgTag = document.createElement("img");
  const trackNameTag = document.createElement("div");

  trackContainerTag.addEventListener("click", () => {
    currentPlayingIndex = i;
    playSong();
  });
  trackContainerTag.classList.add("trackContainer");

  const titleId = tracks[i].trackNo + ". ";
  const titleImg = tracks[i].albumImg;
  const titleName = tracks[i].title;

  trackNameTag.classList.add("trackName");

  trackNoTag.append(titleId);
  trackAlbumImgTag.src = titleImg;
  trackAlbumImgTag.classList.add("songImg");
  trackNameTag.append(titleName);
  trackTag.append(trackNoTag, trackAlbumImgTag, trackNameTag);
  trackContainerTag.append(trackTag);
  musicContainerTag.append(trackContainerTag);
}

let duration = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = createMinuteAndSecondText(currentTime);
  playedTimeTag.textContent = currentTimeText;
  totalTimeTag.textContent = durationText;
  updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
  const currentProgressWidth = (500 / duration) * currentTime;
  currentProgressTag.style.width = currentProgressWidth.toString() + "px";
};

const createMinuteAndSecondText = (totalSecond) => {
  const minutes = Math.floor(totalSecond / 60);
  const seconds = totalSecond % 60;

  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;

  return minuteText + ":" + secondText;
};

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  isPlaying = true;
  if (currentTime === 0) {
    playSong();
  } else {
    audioTag.play();
    updatePlayAndPauseButton();
  }
});

pauseButtonTag.addEventListener("click", () => {
  isPlaying = false;
  audioTag.pause();
  updatePlayAndPauseButton();
});

previousButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex === 0) {
    currentPlayingIndex = tracks.length - 1;
    playSong();
  } else {
    currentPlayingIndex -= 1;
    playSong();
  }
});

nextButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex === tracks.length - 1) {
    currentPlayingIndex = 0;
    playSong();
  } else {
    currentPlayingIndex += 1;
    playSong();
  }
});

const playSong = () => {
  const songIdToPlay = tracks[currentPlayingIndex].trackId;
  audioTag.src = songIdToPlay;
  audioTag.play();
  isPlaying = true;
  updatePlayAndPauseButton();
};

const updatePlayAndPauseButton = () => {
  if (isPlaying) {
    playButtonTag.style.display = "none";
    pauseButtonTag.style.display = "inline";
  } else {
    playButtonTag.style.display = "inline";
    pauseButtonTag.style.display = "none";
  }
};
