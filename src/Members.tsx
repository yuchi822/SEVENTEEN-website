import React from 'react';
import membersData from './assets/members.json';

const Members: React.FC = () => {
  return (
    <section className="members">
      <h2>成員介紹</h2>
      <div className="members-grid">
        {membersData.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
