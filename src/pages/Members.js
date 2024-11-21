import React from 'react';
import './Members.css';
import memberData from '../assets/data/members.json'; // 假設有 JSON 資料

const Members = () => {
  return (
    <div className="members">
      <h1>Meet the Members</h1>
      <div className="member-list">
        {memberData.map((member) => (
          <div key={member.id} className="member-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
