import React from 'react';

const Members = () => {
  const members = [
    { name: 'S.Coups', image: 'scoups.jpg' },
    { name: 'Jeonghan', image: 'jeonghan.jpg' },
    { name: 'Joshua', image: 'joshua.jpg' },
    // 更多成員...
  ];

  return (
    <div className="container">
      <h2>Meet the Members</h2>
      <div className="row">
        {members.map((member, index) => (
          <div key={index} className="col-md-4">
            <div className="member-card">
              <img src={`images/${member.image}`} alt={member.name} className="img-fluid" />
              <h3>{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
