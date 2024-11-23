import React, { useState } from 'react';
import membersData from './assets/members.json'; // 確保路徑正確
import './Members.css';

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 新增模態框開關狀態

  // 點擊圖片時更新選中成員資訊並開啟模態框
  const handleImageClick = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true); // 顯示模態框
  };

  // 關閉模態框
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div>
      <h1>成員列表</h1>
      <ul className="card-container">
        {membersData.map((member) => (
          <li key={member.id} className="card" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={require(`${member.photo}`)}
              alt={member.name}
              className="member-image"
              onClick={() => handleImageClick(member)} // 點擊時觸發
            />
            <div className="card-name">{member.name}</div> {/* 顯示名字 */}
          </li>
        ))}
      </ul>

      {/* 模態框 */}
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
