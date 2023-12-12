import React from 'react';

function TeamMember({ name, role, description, imageUrl }) {
  return (
    <div className="page-container">
    <div className="team-member">
      <img
        src={imageUrl}
        alt={`Foto de ${name}`}
        className="team-member-image"
      />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{description}</p>
    </div>
    </div>
  );
}

export default TeamMember;
