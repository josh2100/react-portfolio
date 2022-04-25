function Project({ project }) {
  const { title, body, deployed, repo } = project;

  const imgSrc = title.toLowerCase().replace(/\s/g, "");

  return (
    //col-11 col-sm-4 col-md-5 col-lg col-xl
    <article className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card shadow-lg g-0">
      <h2 className="d-flex justify-content-center">{title}</h2>
      <img
        src={require(`../../assets/${imgSrc}.png`)}
        alt={title}
        key={title}
        className=""
      ></img>
      <p className="m-2">{body}</p>
      <section className="d-flex justify-content-around m-2 mt-auto">
        <a href={deployed} target="_blank" rel="noreferrer" className="">
          <button className="shadow ps-3 pe-3">App</button>
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          <button className="shadow ps-3 pe-3">GitHub</button>
        </a>
      </section>
    </article>
  );
}

export default Project;
