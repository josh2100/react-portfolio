// import { useState } from 'react';

function Navigation(props) {
  const { options, setSelectedPage } = props;

  return (
    <nav className="row">
        {options.map((selection) => (
          <span
            className="col-3"
            key={selection.title}
            onClick={() => setSelectedPage(selection)}
          >
            {selection.title}
          </span>
        ))}
    </nav>
  );
}

export default Navigation;
