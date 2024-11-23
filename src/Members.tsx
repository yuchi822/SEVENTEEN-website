import React, { useState } from 'react';
import membersData from './assets/members.json'; 
import './Members.css';

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  
  const handleImageClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true); 
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div>
      <h1></h1>
      <div className='Introduction'>
      SEVENTEEN是韓國Pledis娛樂旗下的13人男子流行音樂團體，<br />
      團體有「Hiphop Team」、「Vocal Team」、「Performance Team」三個小分隊<br />
      以及「BSS」、「JxW」兩個子團體。<br />
      團體名字寓意為「13名成員+3個分隊+1個整體」。
      </div>
      <ul className="card-container">
        {membersData.map((member) => (
          <li key={member.id} className="card" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={require(`${member.photo}`)}
              alt={member.name}
              className="member-image"
              onClick={() => handleImageClick(member)} 
            />
            <div className="card-name">{member.name}</div> {}
          </li>
        ))}
      </ul>
      <div></div>

      {}
      {isModalOpen && selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
              <img
                src={require(`${selectedMember.photo}`)}
                alt={selectedMember.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p>小分隊: {selectedMember.team}</p>
                <p>生日: {selectedMember.birthday}</p>
                <p>國籍: {selectedMember.nationality}</p>
                <button className="close-modal" onClick={closeModal}>關閉</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
