const shrimp = "https://www.instagram.com/rollingshrimp/?hl=zh-tw";
const authorShrimp = "rolling shrimp";
const authorharuki = "Häruki";
const haruki = "https://www.instagram.com/harukidj/?hl=zh-tw";
class track {
  constructor(name, src, author, ahthorLink) {
    this.name = name;
    this.src = src;
    this.author = author;
    this.ahthorLink = ahthorLink;
  }
}

export const musicTracks = [
  {
    type: "BoomBap",
    imgSrc: require("../components/assets/boombap2.png"),

    musics: [
      new track(
        "Cloudy_Street",
        require("../components/assets/Cloudy_Street.mp3"),
        authorShrimp,
        shrimp
      ),
      new track(
        "Cloudy_Street_2",
        require("../components/assets/Cloudy_Street_2.mp3"),
        authorShrimp,
        shrimp
      ),
      new track(
        "dark5",
        require("../components/assets/dark5.mp3"),
        authorShrimp,
        shrimp
      ),
      new track(
        "spinner_3",
        require("../components/assets/spinner_3.mp3"),
        authorShrimp,
        shrimp
      ),
    ],
  },
  {
    type: "G-funk",
    imgSrc: require("../components/assets/g-funk2.png"),
    musics: [
      new track(
        "day dreaming",
        require("../components/assets/modifiedg funk.mp3"),
        authorShrimp,
        shrimp
      ),
    ],
  },
  {
    type: "Lo-Fi",
    imgSrc: require("../components/assets/lofi2.png"),
    musics: [
      new track(
        "sample lofi",
        require("../components/assets/lofi2.wav"),
        authorShrimp,
        shrimp
      ),
    ],
  },
  {
    type: "R&B",
    imgSrc: require("../components/assets/R&B.png"),
    musics: [
      new track(
        "bind",
        require("../components/assets/bind.mp3"),
        authorharuki,
        haruki
      ),
    ],
  },
];
