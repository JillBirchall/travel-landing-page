import Iceland from "../images/tours/iceland-sunset.jpg";
import Indonesia from "../images/tours/komodo.jpg";
import Tanzania from "../images/tours/safari.jpg";
import Mexico from "../images/tours/chichen-itza.jpg";
import Nepal from "../images/tours/everest.jpg";
import Romania from "../images/tours/romania.jpg";

const Tours = [
  {
    id: 1,
    country: "Iceland",
    name: "The Land of Fire and Ice",
    price: 1500,
    duration: 7,
    description:
      "Venture inside Thrihnukagigur volcano. Walk on a glacier. Scuba dive between tectonic plates at Silfra.",
    image: Iceland,
    altText: "Sunset in Iceland",
  },
  {
    id: 2,
    country: "Indonesia",
    name: "Diving and Dragons",
    price: 4000,
    duration: 14,
    description:
      "Scuba dive the famous USS Liberty Wreck in Bali. Hike around Komodo National Park, spotting komodo dragons.",
    image: Indonesia,
    altText: "Komodo Dragon",
  },
  {
    id: 3,
    country: "Tanzania",
    name: "Kilimanjaro and Safari",
    price: 3600,
    duration: 14,
    description:
      "Climb Mount Kilimanjaro. Search for the Big Five in Serengeti and Ngorongoro Crater.",
    image: Tanzania,
    altText: "Eelephants at the foot of Mount Kilimanjaro",
  },
  {
    id: 4,
    country: "Mexico",
    name: "Mayan Treasures",
    price: 1750,
    duration: 10,
    description:
      "Visit Chichen Itza, explore Tikal, scuba dive in cenotes, visit an underwater museum and dive with bull sharks",
    image: Mexico,
    altText: "Chichen Itza",
  },
  {
    id: 5,
    country: "Nepal",
    name: "Kathmandu and Everest",
    price: 1850,
    duration: 16,
    description:
      "Trek to Everest Base camp, explore the markets and temples of Kathmandu",
    image: Nepal,
    altText: "Mount Everest",
  },
  {
    id: 6,
    country: "Romania",
    name: "Castles and Carpathians",
    price: 750,
    duration: 7,
    description:
      "Go bear watching, visit Bran Castle, Peles Castle and Rasnov Citadel, explore the towns of Brasov and Sibiu",
    image: Romania,
    altText: "Peles Castle",
  },
];

export default Tours;
