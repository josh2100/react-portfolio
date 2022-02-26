import { useState } from 'react';

function Navigation(props) {
    const { options, setSelectedPage, selectedPage} = props;

    return (
        <nav>
          <ul>
            {options.map((selection) => (
              <li
                key={selection.title}
              >
                <span onClick={() => setSelectedPage(selection)}>
                  {selection.title}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default Navigation;