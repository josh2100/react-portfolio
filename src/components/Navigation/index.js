// import { useState } from 'react';

function Navigation(props) {
  const { options, setSelectedPage } = props;

  return (
    <nav class="row">
        {options.map((selection) => (
          <span
            class="col-3"
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
