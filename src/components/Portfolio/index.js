import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      title: "Code Savior",
      body: "A study resource project",
      deployed: "asdfas",
      repo: "asdf",
    },
    {
      title: "Weather Watch",
      body: "A weather web application",
      deployed: "sadfas",
      repo: "adsf",
    },
  ]);

  return (
    <section>
      {projects.map((project, id) => (
        <Project project={project} key={id} />
      ))}
      <div>hi</div>
    </section>
  );
}

export default Portfolio;
