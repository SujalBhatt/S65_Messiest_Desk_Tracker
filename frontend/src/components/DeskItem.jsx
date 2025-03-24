import React from 'react';

const DeskItem = ({ desk }) => {
  return (
    <div className="desk-item bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-2xl font-semibold mb-2">{desk.name}</h3>
      <p className="text-lg mb-2">Owner: {desk.owner}</p>
      <p className="text-lg mb-2">Messiness Level: {desk.messinessLevel}</p>
      <p className="text-lg mb-2">Description: {desk.description}</p>
    </div>
  );
};

export default DeskItem;
