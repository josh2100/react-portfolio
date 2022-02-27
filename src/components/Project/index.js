// import useState from "react";

function Project({ project }) {
  const { title, body, deployed, repo } = project;

  return (
    <>
      <h1>
        {title}
      </h1>
      <p>{body}</p>
      <p>Deployed: {deployed}</p>
      <p>GitHub: {repo}</p>
    </>
  );
}

export default Project;
