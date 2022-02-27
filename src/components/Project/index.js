// import useState from "react";

function Project({ project }) {
  const { title, body, deployed, repo } = project;

  return (
      <h1>{title}{body}{deployed}{repo}</h1>
  );
}

export default Project;
