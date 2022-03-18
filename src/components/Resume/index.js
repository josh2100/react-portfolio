import resumePdf from "../../assets/resume.pdf"

function Resume() {
  return (
    <section className="row justify-content-center m-3">
      <h2 className="col-12 d-flex justify-content-center m-3">Resume</h2>

      <a
        href="https://docs.google.com/document/d/1QXq_G4lqDAAFZttCU_xLjmseYj-aOZrtnsoHBH3E86o/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="col-2 d-flex justify-content-center m-3"
      >
        <button> View resume</button>
      </a>

      <a href={resumePdf} download="resume.pdf" className="col-2 d-flex justify-content-center m-3">
        <button> Download Resume PDF</button>
      </a>

      <h3 className="col-12 d-flex justify-content-center">Skills</h3>
      <h4 className="col-12 d-flex justify-content-center">Front End</h4>

      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>jQuery</li>
        <li>Handlebars.js</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Flexbox</li>
        <li>Bootstrap</li>
        <li>Responsive Design</li>
      </ul>

      <h4 className="col-12 d-flex justify-content-center">Back End</h4>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>Model View Controller</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>GraphQL</li>
        <li>Apollo</li>
        <li>Object Oriented Programming</li>
        <li>Object Relational Mapping</li>
      </ul>

      <h4 className="col-12 d-flex justify-content-center">Testing</h4>
      <ul>
        <li>Jest</li>
        <li>Mocha</li>
      </ul>

      <h4 className="col-12 d-flex justify-content-center">Collaboration</h4>
      <ul>
        <li>Agile</li>
        <li>GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;
