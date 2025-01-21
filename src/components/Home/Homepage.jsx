import React from 'react';
import {NavLink} from 'react-router-dom'


const Homepage = () => {
  return (
    <div className='homepage flex colum gap courier-prime'>
          <NavLink to={'/project'}>
          <div className="col project-col">
                    <p>  Project</p>
                    <img src="./images/golden-egg.png" alt="Golden egg" />
          </div>
          </NavLink>
          <NavLink to={'/treasury'}>
          <div className="col treasure-col">
                    <p> OV Treasury</p>
                    <img src="./images/piggy-bank.png" alt="Golden egg" />
          </div>
          </NavLink>
    </div>
  )
}

export default Homepage