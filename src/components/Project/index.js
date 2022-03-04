// import useState from "react";
import image from "../../assets/weatherwatch.png";

function Project({ project }) {
  const { title, body, deployed, repo } = project;

  const imgSrc = title.toLowerCase().replace(/\s/g, ""); ///// to lowercase and remove spaces
  console.log(imgSrc);

  return (
    <article className="col-4">
      <h2 className="d-flex justify-content-center">{title}</h2>
      <img src={image} alt={title} key={title} className="col-12"></img>
      <p>{body}</p>
      <p>Deployed: {deployed}</p>
      <p>GitHub: {repo}</p>
    </article>
  );
}

export default Project;
