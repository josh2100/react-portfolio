function Project({ project }) {
  const { title, body, deployed, repo } = project;

  const imgSrc = title.toLowerCase().replace(/\s/g, "");
  console.log(imgSrc);

  return (
    //col-11 col-sm-4 col-md-5 col-lg col-xl
    <article className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters">
      <h2 className="card-header d-flex justify-content-center">{title}</h2>
      <img
        src={require(`../../assets/${imgSrc}.png`)}
        alt={title}
        key={title}
        className="card-img-top"
      ></img>
      <p className="">
        {body}
        <br />
        <section className="d-flex justify-content-around">
          {" "}
          <a href={deployed} target="_blank" rel="noreferrer" className="">
            <button>App</button>
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>{" "}
        </section>{" "}
      </p>
    </article>
  );
}

export default Project;
