import sneakers from "./images/sneakers-website.png"
import mathwhiz from "./images/mathwhiz-website.png"
import currency from "./images/currency-website.png"
import rock from "./images/rock-website.png"

export const data = [
  {
    id: 1,
    name: "Sneakers",
    image: sneakers,
    about: "An e-Commerce website where you can shop for sneakers, scandal and heels. It also provide features such as cart management, search function etc",
    stack: ["ReactJs", "React-Bootstrap", "Bootstrap"],
    links: [
      { name: "See Code", href: "https://github.com/Qreamville/E-commerce-Sneakers-Website" },
      { name: "View Live", href: "https://qreamville.github.io/E-commerce-Sneakers-Website/" }
    ]

  },
  {
    id: 2,
    name: "Mathwhiz",
    image: mathwhiz,
    about: "A math quiz that test your multiplication, division, addition and subtraction skills in 30 seconds. It also includes dark/light theme",
    stack: ["ReactJs", "TailwindCss", "React-Icons"],
    links: [
      { name: "See Code", href: "https://github.com/Qreamville/Mathwhiz" },
      { name: "View Live", href: "https://qreamville.github.io/Mathwhiz" }
    ]

  },
  {
    id: 3,
    name: "Currency-Converter",
    image: currency,
    about: "It is an application that fetches the current exchange rate of different currencies with the help of exchange rates api.",
    stack: ["Api", "ReactJs", "bootstrap", "axios"],
    links: [
      { name: "See Code", href: "https://github.com/Qreamville/Currency-Converter" },
      { name: "View Live", href: "https://qreamville.github.io/Currency-Converter/" }
    ]

  },
  {
    id: 4,
    name: "Rock- Paper - Scissors - Lizard - Spock",
    image: rock,
    about: "Rock Paper Scissors Lizard Spock is an extension of the classic game of chance, Rock Paper Scissors, created by Sam Kass and Karen Bryla. This application also store users score in local storage",
    stack: ["TailwindCss", "ReactJs",],
    links: [
      { name: "See Code", href: "https://github.com/Qreamville/Rock-Paper-Scissors-Lizard-Spock" },
      { name: "View Live", href: "https://qreamville.github.io/Rock-Paper-Scissors-Lizard-Spock/" }
    ]

  },
]