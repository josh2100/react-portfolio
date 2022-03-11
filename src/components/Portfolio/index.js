import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      title: "Weather Watch",
      body: "This web application is used for displaying weekly weather information for different cities around the world. Open Weather API is used to fetch data. Client side storage is used for saving city search history.",
      deployed: "https://josh2100.github.io/weekly-weather-watch/",
      repo: "https://github.com/josh2100/weekly-weather-watch",
    },
    {
      title: "Quick Budget",
      body: "A budget tracker progressive web application. Enter transactions online, offline, or install the app to your computer or device.",
      deployed: "https://quick-budget2100.herokuapp.com/",
      repo: "https://github.com/josh2100/quick-budget",
    },
    {
      title: "Express Notes",
      body: "This is an Express.js project is used to write and save notes to a server on Heroku. The front end displays a homepage and notes page with HTML. The back end utilizes Express.js and Node to write notes to a JSON file on the server.",
      deployed: "https://josh2100expressnotes.herokuapp.com/",
      repo: "https://github.com/josh2100/express-notes",
    },
    {
      title: "Quiz Wiz",
      body: "Quiz Wiz is JavaScript quiz web application. It features a timed JavaScript quiz with a high score chart saved to local storage. See if you can answer all the questions correctly in 5 minutes! Incorrect answers will subtract time left and impact your score. I built this using HTML, JavaScript, Bootstrap and jQuery.",
      deployed: "https://josh2100.github.io/quiz-wiz/",
      repo: "https://github.com/josh2100/quiz-wiz",
    },
    {
      title: "Code Savior",
      body: "Code Savior is a web application for sharing study resources and practicing coding quizzes. Create a user to share and upvote posts, as well as take coding quizzes. I used Express.js, Handlebars.js, Node, and Mocha in my team of three to build this.",
      deployed: "https://codesavior.herokuapp.com/",
      repo: "https://github.com/josh2100/code-savior",
    },
    {
      title: "Movie Me",
      body: "Movie Me is a web application that uses Wikipedia API and OMDB API to get movie recommendations. Click a genre button, and you will see a movie displayed along with year released, movie rating, and a plot for the movie.",
      deployed: "https://josh2100.github.io/movie-me/",
      repo: "https://github.com/josh2100/movie-me",
    },
  ]);

  return (
    <section className="row justify-content-evenly">
      <h2 className="col-12 d-flex justify-content-center m-3">Featured Projects</h2>
      {projects.map((project, id) => (
        <Project project={project} key={id} />
      ))}
    </section>
  );
}

export default Portfolio;
