import image from "../../assets/mtida.jpg";

function About() {
  return (
    <article className="row justify-content-evenly">
      <h2 className="col-12 d-flex justify-content-center">About Me</h2>
      <img src={image} alt="profile" className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3"></img>
      <p className=                            "col-11 col-sm-11 col-md-7 col-lg-6 col-xl-6 my-auto justify-content-center">
        <span><strong>Full stack web developer</strong></span> with a background in
        construction. Earned Certificate in MERN Full Stack Web Development from
        University of Minnesota. Skilled in JavaScript, React, Express.js,
        MongoDB, and MySQL. A friend introduced me to programming, and I took
        some lessons to find that I loved the sense of accomplishment in solving
        coding problems. I switched careers for new challenges and personal
        growth. I want to use my leadership experience, communication skills,
        and motivated work ethic learned from construction to succeed in
        software development.
      </p>
    </article>
  );
}

export default About;
