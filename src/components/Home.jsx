import React, { useState } from 'react';

const Home = () => {
  const [activeList, setActiveList] = useState(null);

  const handleClick = (listName) => {
    setActiveList(activeList === listName ? null : listName);
  };

  const lists = {
    educafe: [
      <div key="educafe" className='educafe gap flex col'>
        <h1>2022</h1>
        <ul>
          <li className='completed'>April - Project Planning</li>
          <li className='completed'>July 13 - EDUCAFE Opens</li>
        </ul>
        <h1>2023</h1>
        <ul>
          <li className='completed'>Add Books in Library</li>
        </ul>
        <h1>2024</h1>
        <ul>
          <li className='completed'>Setup Cafeteria</li>
        </ul>
        <h1>2025</h1>
        <ul>
          <li className='completed'>January - Beta Website Launched</li>
          <li className='not-completed'>Q1 - Setup Stationery</li>
          <li className='not-completed'>Q2 - Upgrade Cafeteria</li>
        </ul>
      </div>,
    ],
    pharmacy: [
      <div key="pharmacy" className='pharmacy'>
          <p>Coming soon</p>
      </div>,
    ],
    karaoke: [
      <div key="karaoke" className='karaoke'>
        <p>Coming soon</p>
      </div>,
    ],
  };

  return (
    <div className="home">
      <h1 className="mid">VISION 2025</h1>
      <div className="projects flex row gap mid">
        <div className="col" onClick={() => handleClick('educafe')}>
          Educafe
        </div>
        <div className="col" onClick={() => handleClick('pharmacy')}>
          Pharmacy
        </div>
        <div className="col" onClick={() => handleClick('karaoke')}>
          Karaoke
        </div>
      </div>

      <div>
        {activeList && (
          <div className={`${activeList}-list`}>
            {lists[activeList].map((item, index) => (
              <div className='pj-item' key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
