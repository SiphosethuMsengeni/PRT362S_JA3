import React, { useState } from 'react';
import ReviewPage from './ReviewPage'; // Assume you have this file/component

const BuildPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    useType: '',
    cpu: '',
    gpu: '',
    caseType: '',
    storage: '',
    ram: '',
    adapter: '',
    monitor: '',
    extras: '',
    budget: '',
    contactMethod: '',
  });

  const [isReview, setIsReview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReview(true);
  };

  // Allow user to go back to edit
  const handleEdit = () => {
    setIsReview(false);
  };

  if (isReview) {
    return <ReviewPage form={form} onEdit={handleEdit} />;
  }

  return (
    <div className="build-form-container">
      <h2>Custom Build to Your Specification</h2>
      <form className="build-form" onSubmit={handleSubmit}>
        {/* Your inputs, radio groups, selects here */}
        {/* ... same as your original BuildPage inputs, unchanged ... */}

        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />

        <div className="radio-group">
          <label><input type="radio" name="useType" value="Work" onChange={handleChange} /> Work</label>
          <label><input type="radio" name="useType" value="Gaming" onChange={handleChange} /> Gaming</label>
          <label><input type="radio" name="useType" value="Both" onChange={handleChange} /> Both</label>
        </div>

        <select name="cpu" onChange={handleChange} required>
          <option value="">CPU Preference</option>
          <option value="Intel i7">Intel i7</option>
          <option value="AMD Ryzen 7">AMD Ryzen 7</option>
        </select>

        <select name="gpu" onChange={handleChange} required>
          <option value="">GPU Preference</option>
          <option value="NVIDIA RTX 4070">RTX 4070</option>
          <option value="AMD RX 6800">RX 6800</option>
        </select>

        <select name="caseType" onChange={handleChange} required>
          <option value="">Case Type</option>
          <option value="Mid Tower">Mid Tower</option>
          <option value="Full Tower">Full Tower</option>
        </select>

        <select name="storage" onChange={handleChange} required>
          <option value="">Storage Space</option>
          <option value="512GB SSD">512GB SSD</option>
          <option value="1TB SSD">1TB SSD</option>
        </select>

        <select name="ram" onChange={handleChange} required>
          <option value="">RAM</option>
          <option value="16GB">16GB</option>
          <option value="32GB">32GB</option>
        </select>

        <input type="text" name="adapter" placeholder="Wireless Adapter (Bluetooth/WiFi)?" onChange={handleChange} />
        <input type="text" name="monitor" placeholder="Monitor/Keyboard/Mouse needs?" onChange={handleChange} />
        <input type="text" name="extras" placeholder="Additional Info (themes, cooling, etc.)" onChange={handleChange} />
        <input type="text" name="budget" placeholder="Budget (or 'Open to discuss')" onChange={handleChange} />

        <label>Preferred Contact Method:</label>
        <div className="radio-group">
          <label><input type="radio" name="contactMethod" value="Phone" onChange={handleChange} /> Phone</label>
          <label><input type="radio" name="contactMethod" value="WhatsApp" onChange={handleChange} /> WhatsApp/Text</label>
          <label><input type="radio" name="contactMethod" value="Email" onChange={handleChange} /> Email</label>
        </div>

        <button type="submit">Review Your Build</button>
      </form>

      {/* Footer etc. */}
    </div>
  );
};

export default BuildPage;
