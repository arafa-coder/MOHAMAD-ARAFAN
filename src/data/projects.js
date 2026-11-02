import busBooking from "../assets/images/bus-booking.svg";
import weatherApp from "../assets/images/weather-app.svg";
import billingSystem from "../assets/images/billing-system.svg";
import cricketTournament from "../assets/images/cricket-tournament.svg";
import movieBooking from "../assets/images/movie-booking.svg";
import portfolio from "../assets/images/portfolio.svg";

/**
 * Add, remove or edit projects here — the Projects section updates itself.
 *
 * categories: any of "MERN", "Frontend", "Backend", "Full Stack"
 * github / demo: paste your real URLs. While a link is empty ("") the button
 * is shown as disabled, so visitors never hit a broken link.
 * image: replace the placeholder SVGs in src/assets/images with real screenshots
 * (16:10 ratio, around 800x500, .webp or .jpg for fast loading).
 */
export const projectFilters = ["All", "MERN", "Frontend", "Backend", "Full Stack"];

export const projects = [
  {
    id: "bus-booking-system",
    title: "Bus Booking System",
    description:
      "A web-based bus booking application that allows users to explore buses, select seats, and manage bookings through a simple and responsive interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    categories: ["MERN", "Full Stack"],
    image: busBooking,
    alt: "Placeholder preview of the Bus Booking System showing a seat selection screen",
    github: "",
    demo: "",
  },
  {
    id: "weather-application",
    title: "Weather Application",
    description:
      "A responsive weather application that allows users to search for cities and view current weather information using a weather API.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    categories: ["Frontend"],
    image: weatherApp,
    alt: "Placeholder preview of the Weather Application showing the current temperature",
    github: "",
    demo: "",
  },
  {
    id: "billing-management-system",
    title: "Billing Management System",
    description:
      "A web-based billing application designed to manage products, calculate customer bills, and organize billing information efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["Frontend"],
    image: billingSystem,
    alt: "Placeholder preview of the Billing Management System showing a product table and bill total",
    github: "",
    demo: "",
  },
  {
    id: "cricket-tournament-management",
    title: "Cricket Tournament Management System",
    description:
      "A web application for managing cricket tournaments, teams, matches, scores, and live match information.",
    tech: ["PHP", "MySQL", "JavaScript"],
    categories: ["Full Stack", "Backend"],
    image: cricketTournament,
    alt: "Placeholder preview of the Cricket Tournament Management System showing a match scoreboard",
    github: "",
    demo: "",
  },
  {
    id: "movie-booking-system",
    title: "Movie Booking System",
    description:
      "A movie booking system designed to manage movies, theatres, screens, customers, and bookings.",
    tech: ["PHP", "Oracle Database", "REST API", "JavaScript"],
    categories: ["Full Stack", "Backend"],
    image: movieBooking,
    alt: "Placeholder preview of the Movie Booking System showing movie posters and a seat row",
    github: "",
    demo: "",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my skills, projects, education, and professional profile.",
    tech: ["React.js", "JavaScript", "CSS"],
    categories: ["Frontend"],
    image: portfolio,
    alt: "Placeholder preview of this personal portfolio website",
    github: "",
    demo: "",
  },
];
