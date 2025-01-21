import React from 'react'
import { useLocation } from 'react-router-dom'
import { Treasuryitems } from './Treasury';
const TItem = () => {
  const location = useLocation(); // Get the current location (URL)
  const currentItem = Treasuryitems.find(item => location.pathname === `/${item.link}`);
  // Function to render content based on the URL path
  const renderContent = () => {
        
    if (currentItem) {
      return (
          <div>
                    <p>{currentItem.percentage/3.6} %</p>
                    <p>{currentItem.content}</p>
          </div>
      );
    }return <div>Content not found</div>;
  }

  return (
    <div className='titem'>
      {renderContent()}
    </div>
  )
}

export default TItem
