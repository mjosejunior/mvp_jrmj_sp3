import React from 'react';
import './TeamPage.css';
import  teamMembers from '../../mock-data/mockTeamMembers.json'; 
import TeamMember from '../../components/TeamMember/TeamMember'; 

function TeamPage() {

   const team = teamMembers;
    return (
     <div className="page-container">
      <div className="team-container">
        <h1>Nossa Equipe</h1>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
  
export default TeamPage;
