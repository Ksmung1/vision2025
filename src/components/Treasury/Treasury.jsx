import React from 'react';
import { NavLink } from 'react-router-dom';
import TreasuryPieChart from './TreasuryPieChart'; // Import the updated PieChart component

// Move the `Treasuryitems` outside the Treasury component so that it can be exported.
export const Treasuryitems = [
  { name: 'Lorem Account', percentage: 20 * 3.6, color: '#2c3e50', link: 'lorem-acc', content: 'THIS IS LOREM ACCOUNT' },
  { name: 'Crypto', percentage: 10 * 3.6, color: '#16a085', link: 'crypto' , content: 'THIS IS CRYPTO ACCOUNT'},
  { name: 'Saving Account', percentage: 20 * 3.6, color: '#8e44ad', link: 'savingacc', content: 'THIS IS SAVING  ACCOUNT' },
  { name: 'Emergency Funding', percentage: 15 * 3.6, color: '#f39c12', link: 'emergencyfund' , content: 'THIS IS EMERGENCY ACCOUNT'},
  { name: 'Dividend Account', percentage: 15 * 3.6, color: '#3498db', link: 'dividendacc' , content: 'THIS IS DIVIDEND ACCOUNT'},
  { name: 'Structure Account', percentage: 20 * 3.6, color: '#e74c3c', link: 'structureacc', content: 'THIS IS STRUCTURE ACCOUNT' },
];

const Treasury = () => {
  return (
    <div className="treasure">
      <div className="pie-chart-container">
        <TreasuryPieChart items={Treasuryitems} />
      </div>

      <div className="treasury">
        {Treasuryitems.map((item, index) => (
          <NavLink to={`/${item.link}`} key={index}>
            <div className="col" style={{ backgroundColor: item.color }}>
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export { Treasury };
