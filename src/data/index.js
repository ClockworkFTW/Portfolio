import skrawld_io_gif from "../assets/skrawld_io.gif";
import lightning_poll_gif from "../assets/lightning_poll.gif";
import snap_spots_gif from "../assets/snap_spots.gif";

export const links = [
  {
    title: "Resume",
    href:
      "https://docs.google.com/document/d/1iQX9wtfGwuBE-999QWens4Eh0Pc4xORfvA87KsfaHVQ/edit?usp=sharing",
    iconType: "fas",
    iconName: "file-contract",
  },
  {
    title: "Code",
    href: "https://github.com/ClockworkFTW",
    iconType: "fab",
    iconName: "github",
  },
  {
    title: "Contact",
    href: "mailto: jnboyle1995@gmail.com",
    iconType: "fas",
    iconName: "paper-plane",
  },
];

export const technologies = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original colored" },
  { name: "Postgres", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "VSCode", icon: "devicon-visualstudio-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

export const projects = [
  {
    name: "Snap Spots",
    emoji: { symbol: "📸", label: "camera-with-flash" },
    demo: "https://snapspots.app/",
    code: "https://github.com/ClockworkFTW/snapspots-client",
    description:
      "A search engine for finding and sharing great places to take photos. This app leverages Google's Places API and Flickr's photo database to automatically currate popular spots. Anyone who signs up can add their own spots or enrich existing spots by updating them with more information. This app helped me learn about user authentication, CRUD operations, relational databases, and integrating API's",
    image: snap_spots_gif,
    credits: [
      { name: "Shot Hot Spot", link: "https://www.shothotspot.com/" },
      { name: "All Trails", link: "https://www.alltrails.com/" },
    ],
  },
  {
    name: "Skrawld.io",
    emoji: { symbol: "🎨", label: "artist-palette" },
    demo: "https://skrawld.io/",
    code: "https://github.com/ClockworkFTW/drawing-game-client",
    description:
      "Skrawld.io is a multiplayer drawing and guessing game clone based off the popular Skribbl.io game. One game consists of a few rounds in which every round someone has to draw their chosen word and others have to guess it to gain points! The person with the most points at the end of game will then be crowned as the winner! This project taught me about web sockets, HTML canvases, and complex algorithm logic to keep track of the game state.",
    image: skrawld_io_gif,
    credits: [{ name: "Skribbl.io", link: "https://skribbl.io/" }],
  },
  {
    name: "Lightning Poll",
    emoji: { symbol: "⚡", label: "high-voltage" },
    demo: "https://lightningpoll.com/",
    code: "code",
    description:
      "A simple polling app where users can ask questions anonymously and share them with the world. I built this app as a fun side project to test my full stack abilities. This project taught me about non relational databases (MongoDB) and creating a CRUD REST API",
    image: lightning_poll_gif,
    credits: [{ name: "Straw Poll", link: "https://strawpoll.com/" }],
  },
  {
    name: "Junior Dev Jobs",
    emoji: { symbol: "📝", label: "memo" },
    demo: "https://juniordevjobs.net/",
    code: "code",
    description:
      "A web scrapper that pulls junior level developer positions from various sources and aggregates them into a dashboard. I built this app to help centralize my job searching and reduce the monotony of scouring multiple job board sites a day. This project taught me about navigating the DOM using puppeteer and extracting specific information. I also learned how to schedule the scrapping task using a cron job which runs twice per day to keep the data as up to date as possible",
    image: "",
    credits: [],
  },
  {
    name: "Personal Portfolio",
    emoji: { symbol: "🧙‍♂️", label: "man-mage" },
    demo: "demo",
    code: "code",
    description:
      "A portfolio site to showcase all my web development projects, resume, and links to code repositories. Additionally, I added a personal statistics dashboard which pulls data from the apps and services I use on a daily basis. This project was an opportunity for me to experiment with responsive design and also test my skills in integrating various API's.",
    image: "",
    credits: [
      { name: "Sindre Sorhus", link: "https://sindresorhus.com/" },
      { name: "Alec Lomas", link: "https://www.lowmess.com/" },
      { name: "Craig Carlyle", link: "http://www.craigcarlyle.me/" },
    ],
  },
];
