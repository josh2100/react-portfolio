import image from "../../assets/mtida.jpg";

function About() {
  return (
    <article className="row">
      <h2 className="col-12 d-flex justify-content-center">About Me</h2>
      <img src={image} alt="profile" className="col-3"></img>
      <p className="col-11">
        <strong>Full stack web developer</strong> with background in
        construction. I use my leadership experience, communication skills, and
        motivated work ethic to succeed in software development.
      </p>
    </article>
  );
}

export default About;
