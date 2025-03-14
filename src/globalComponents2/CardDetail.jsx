import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ComponentTitle, SubtleText } from './Typography';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Giả sử bạn fetch dữ liệu chi tiết từ API hoặc Redux/Context...
  // Ở đây chỉ minh hoạ cứng:
  const cardDetail = {
    id,
    title: `Chi tiết Card ${id}`,
    content: `Nội dung chi tiết của Card ${id} nằm ở đây...`,
    date: '2025-03-14',
  };

  return (
    <div style={styles.detailContainer}>
      <div style={styles.header}>
        <ComponentTitle>{cardDetail.title}</ComponentTitle>
        <SubtleText>Ngày: {cardDetail.date}</SubtleText>
      </div>

      <div style={styles.body}>
        <SubtleText>{cardDetail.content}</SubtleText>
      </div>

      <button style={styles.backButton} onClick={() => navigate(-1)}>
        Quay lại
      </button>
    </div>
  );
};

const styles = {
  detailContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: '1rem',
  },
  body: {
    marginBottom: '1rem',
  },
  backButton: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default CardDetail;
