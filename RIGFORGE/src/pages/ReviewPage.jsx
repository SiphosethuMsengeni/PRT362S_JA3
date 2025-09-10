import React from 'react';

const ReviewPage = ({ form, onEdit }) => {
  const handleConfirm = () => {
    alert('Build confirmed! Thank you.');
  };

  return (
    <div className="build-form-container" style={{ maxWidth: '600px', margin: '2rem auto', backgroundColor: 'rgba(0,0,0,0.8)', padding: '2rem', borderRadius: '12px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#f57b0a' }}>
        🛠️ Review Your Custom Build 🛠️
      </h2>
      <div className="review-details" style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <p>👤 <strong>Name:</strong> {form.name}</p>
        <p>📧 <strong>Email:</strong> {form.email}</p>
        <p>📞 <strong>Contact Number:</strong> {form.contact}</p>
        <p>💼 <strong>Use Type:</strong> {form.useType}</p>
        <p>🖥️ <strong>CPU Preference:</strong> {form.cpu}</p>
        <p>🎮 <strong>GPU Preference:</strong> {form.gpu}</p>
        <p>🖥️ <strong>Case Type:</strong> {form.caseType}</p>
        <p>💾 <strong>Storage Space:</strong> {form.storage}</p>
        <p>⚡ <strong>RAM:</strong> {form.ram}</p>
        <p>📡 <strong>Wireless Adapter:</strong> {form.adapter || 'None'}</p>
        <p>🖱️ <strong>Monitor/Keyboard/Mouse Needs:</strong> {form.monitor || 'None'}</p>
        <p>❄️ <strong>Additional Info:</strong> {form.extras || 'None'}</p>
        <p>💰 <strong>Budget:</strong> {form.budget || 'Not specified'}</p>
        <p>☎️ <strong>Preferred Contact Method:</strong> {form.contactMethod}</p>
      </div>

      <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={onEdit}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            border: '2px solid #f57b0a',
            backgroundColor: 'transparent',
            color: '#f57b0a',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#f57b0a';
            e.target.style.color = '#000';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#f57b0a';
          }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={handleConfirm}
          style={{
            backgroundColor: '#f57b0a',
            color: '#000',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#d46410'}
          onMouseLeave={e => e.target.style.backgroundColor = '#f57b0a'}
        >
          ✅ Confirm Build
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
