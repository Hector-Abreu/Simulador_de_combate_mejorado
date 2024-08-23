// src/components/HealthBar.tsx
import React from 'react';

interface HealthBarProps {
  currentHP: number;
  maxHP: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ currentHP, maxHP }) => {
  const healthPercentage = (currentHP / maxHP) * 100;

  return (
    <div className='health-bar'>
      <div
        style={{
          width: `${healthPercentage}%`,
          height: '100%',
          backgroundColor: healthPercentage > 50 ? 'green' : healthPercentage > 25 ? 'yellow' : healthPercentage <= 25 ? 'red' : 'red',
          transition: 'width 0.5s ease',
        }}
      ></div>
    </div>
  );
};

export default HealthBar;
