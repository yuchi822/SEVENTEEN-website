import React from 'react';
import membersData from './assets/members.json'; // 確保路徑正確

const Members: React.FC = () => {
  return (
    <div>
      <h1>成員列表</h1>
      <ul>
        {membersData.map((member) => (
          <li key={member.id}>
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: '100px', borderRadius: '50%' }}
            />
            <div>
              <h2>{member.name}</h2>
              <p>小分隊: {member.team}</p>
              <p>生日: {member.birthday}</p>
              <p>國籍: {member.nationality}</p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
