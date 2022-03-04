function Project({ project }) {
  const { title, body, deployed, repo } = project;

  const imgSrc = title.toLowerCase().replace(/\s/g, ""); ///// to lowercase and remove spaces
  console.log(imgSrc);

  return (
    <article className="col-4">
      <h2 className="d-flex justify-content-center">{title}</h2>
      <img src={require(`../../assets/${imgSrc}.png`)} alt={title} key={title} className="col-12"></img>
      <p>{body}</p>
      <a href={deployed} target="_blank" rel="noreferrer"><button>App</button></a>
      <a href={repo} target="_blank" rel="noreferrer"><button>GitHub</button></a>
    </article>
  );
}

export default Project;
