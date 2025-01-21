import React, { useState } from 'react';

const Projects = () => {
  const [activeList, setActiveList] = useState(null);

  const handleClick = (listName) => {
    setActiveList(activeList === listName ? null : listName);
  };

  const lists = {
    educafe: (
      <div className="educafe gap flex colum">
        <h1>2022</h1>
        <ul>
          <li className="completed">April - Project Planning</li>
          <li className="completed">July 13 - EDUCAFE Opens</li>
        </ul>
        <h1>2023</h1>
        <ul>
          <li className="completed">Add Books in Library</li>
        </ul>
        <h1>2024</h1>
        <ul>
          <li className="completed">Setup Cafeteria</li>
        </ul>
        <h1>2025</h1>
        <ul>
          <li className="completed">January - Beta Website Launched</li>
          <li className="not-completed">Q1 - Setup Stationery</li>
          <li className="not-completed">Q2 - Upgrade Cafeteria</li>
        </ul>
      </div>
    ),
    pharmacy: (
      <div className="pharmacy">
        <p>Coming soon</p>
      </div>
    ),
    karaoke: (
      <div className="karaoke">
        <p>Coming soon</p>
      </div>
    ),
  };

  return (
    <div className="project">
      {/* Title changes based on active selection */}
      <p className="mid vision">
  {activeList ? activeList.toUpperCase() : 'PROJECTS'}
</p>

      {/* Hide project options when one is selected */}
      {!activeList ? (
        <div className="projects flex colum gap mid">
          <div className="col" onClick={() => handleClick('educafe')}>
            <p>Educafe</p>
            <img src="/images/educafe.png" alt="Educafe" />
          </div>
          <div className="col" onClick={() => handleClick('pharmacy')}>
            <p>Pharmacy</p>
            <img src="/images/pharmacy.png" alt="Pharmacy" />
          </div>
          <div className="col" onClick={() => handleClick('karaoke')}>
            <p>Karaoke</p>
            <img src="/images/karaoke.png" alt="Karaoke" />
          </div>
        </div>
      ) : (
        <div className="project-details">
          <div className={`${activeList}-list`}>
            {lists[activeList]}
          </div>
          <button style={{margin:'20px', padding: '5px', border: '1px solid white', background:'black'}} className="back-btn" onClick={() => setActiveList(null)}>← Back</button>

        </div>
      )}
    </div>
  );
};

export default Projects;
