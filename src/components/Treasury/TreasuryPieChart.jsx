import React from 'react';

const TreasuryPieChart = ({ items }) => {
  let cumulativePercentage = 0;

  // Function to create pie segments
  const createPieSegments = () => {
    return items.map((item, index) => {
      const percentage = item.percentage; // In degrees now
      const startAngle = cumulativePercentage;
      const endAngle = cumulativePercentage + percentage;

      // Update cumulative percentage for the next segment
      cumulativePercentage += percentage;

      // Convert start and end angles to radians
      const startAngleRad = (startAngle - 90) * (Math.PI / 180); // Rotate by 90 degrees to start from the top
      const endAngleRad = (endAngle - 90) * (Math.PI / 180);

      // Calculate the coordinates for the arc's end point
      const startX = 50 + 40 * Math.cos(startAngleRad); // 50 is the center of the circle, 40 is the radius
      const startY = 50 + 40 * Math.sin(startAngleRad);
      const endX = 50 + 40 * Math.cos(endAngleRad);
      const endY = 50 + 40 * Math.sin(endAngleRad);

      // Define the large-arc-flag based on the angle
      const largeArcFlag = percentage > 180 ? 1 : 0;

      // Calculate text position for the label (middle of the segment)
      const midAngleRad = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180); // Middle angle
      const textX = 50 + 30 * Math.cos(midAngleRad);  // Slightly inward for the text
      const textY = 50 + 30 * Math.sin(midAngleRad);

      // Calculate rotation to tilt text towards the center of the circle
      const textRotation = midAngleRad * (180 / Math.PI); // Convert radians to degrees

      // Adjust rotation to ensure text stays readable and tilts inward
      const adjustedRotation = textRotation > 90 && textRotation < 270 ? textRotation - 180 : textRotation;

      // Truncate item name to make sure it fits within the segment (max 2 words or 10 characters)
      let truncatedText = item.name.length > 7 ? item.name.slice(0, 7) + '' : item.name;

      return (
        <g key={index}>
          {/* Pie slice */}
          <path
            d={`M 50,50 L ${startX},${startY} A 40,40 0 ${largeArcFlag} 1 ${endX},${endY} Z`}
            fill={item.color}
          />
          {/* Text inside the segment, tilted */}
          <text
            x={textX}
            y={textY}  // Adjusted to make space for the percentage under the text
            fill="white"
            fontSize="3"
            fontWeight="bold"
            textAnchor="middle"
            alignmentBaseline="middle"
            transform={`rotate(${adjustedRotation}, ${textX}, ${textY})`}
          >
            {truncatedText}
            <tspan fontSize="3" dy="4">{`(${item.percentage / 3.6}%)`}</tspan> {/* Percentage in bracket */}
          </text>
        </g>
      );
    });
  };

  return (
    <svg width="400" height="400" viewBox="0 0 100 100">
      <g>{createPieSegments()}</g>
    </svg>
  );
};

export default TreasuryPieChart;
