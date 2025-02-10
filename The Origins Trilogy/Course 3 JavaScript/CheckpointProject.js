// Horoscope Program

// Prompt the user to enter their birth month
let birthMonth = prompt("Please enter your birth month (e.g., January):");

// Define the horoscope signs and their corresponding months
const horoscopes = {
  January: "Capricorn",
  February: "Aquarius",
  March: "Pisces",
  April: "Aries",
  May: "Taurus",
  June: "Gemini",
  July: "Cancer",
  August: "Leo",
  September: "Virgo",
  October: "Libra",
  November: "Scorpio",
  December: "Sagittarius"
};

// Define a list of random fortunes
const fortunes = [
  "You will have a great day!",
  "Something unexpected will happen.",
  "You will meet someone special.",
  "A new opportunity is on the horizon.",
  "You will achieve your goals.",
  "Happiness is coming your way.",
  "Be prepared for a challenge.",
  "Good news is on the way."
];

// Get the horoscope sign based on the birth month
let sign = horoscopes[birthMonth];

// Generate a random fortune
let randomIndex = Math.floor(Math.random() * fortunes.length);
let fortune = fortunes[randomIndex];

// Print the horoscope sign and the random fortune
console.log(`Your horoscope sign is ${sign}.`);
console.log(`Fortune: ${fortune}`);