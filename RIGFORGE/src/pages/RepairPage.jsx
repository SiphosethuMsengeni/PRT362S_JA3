import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../RepairPage.css';

import { FiHome, FiSettings, FiUser, FiHelpCircle, FiLogOut, FiMenu, FiX, FiTool, FiSearch, FiMonitor } from 'react-icons/fi';

const RepairPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const handleSubmit = async () => {
  const fileInput = document.getElementById("imageUpload");
  const description = document.getElementById("repairDescription").value.trim();

  if (!fileInput.files[0]) {
    alert("Please upload an image of what needs to be repaired.");
    return;
  }
  if (!/^[A-Za-z\s]+$/.test(customerName.trim())) {
    alert("Customer name is required and must only contain letters.");
    return;
  }
  if (!/^\d{10}$/.test(phoneNumber)) {
    alert("Phone number is required and must be exactly 10 digits.");
    return;
  }
  if (!description) {
    alert("Repair description is required.");
    return;
  }

  try {
 
    const repairFormData = new FormData();
    repairFormData.append("image", fileInput.files[0]);
    repairFormData.append("description", description);
    repairFormData.append("customer_name", customerName);
    repairFormData.append("phone_number", phoneNumber);

    const repairResponse = await fetch("http://localhost/RigForge/RigForgeBackend/upload_repair.php", {
      method: "POST",
      body: repairFormData,
    });

    const repairResult = await repairResponse.json();
    console.log("Repair Result:", repairResult);

    if (repairResult.status !== "success") {
      alert("Repair upload failed: " + repairResult.message);
      return;
    }

    const notifFormData = new FormData();
    notifFormData.append("customer_name", customerName);
    notifFormData.append("phone_number", phoneNumber);
    notifFormData.append("message", "New repair request submitted.");

    const notifResponse = await fetch("http://localhost/RigForge/RigForgeBackend/send_notification.php", {
      method: "POST",
      body: notifFormData,
    });

    const notifResult = await notifResponse.json();
    console.log("Notification Result:", notifResult);

    if (notifResult.status !== "success") {
      alert("Notification failed: " + notifResult.message);
      return;
    }

    alert("Repair submitted, notification sent, and invoice generated!");
  } catch (error) {
    console.error("Error details:", error);
    alert("Something went wrong: " + error.message);
  }
};

  return (
    <div className="repair-page">
      <h1 className="repair-title">Get Started With Your Computer Repairs</h1>
      <p className="repair-subtitle">
        We are quick and effective at repairing non-working, broken, or damaged computing items. 
        We will exceed your expectations at a highly competitive rate.
      </p>
      
      <div 
        className={`overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={toggleSidebar} 
      />

      <header className="menu-header">
        <button className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div>
          <Link to="/menu" className="nav-icon" title="Dashboard">
            <FiHome />
          </Link>
          <Link to="/profile" className="nav-icon" title="Profile">
            <FiUser />
          </Link>
          <Link to="/ready-built" className="nav-icon" title="Ready Built">
            <FiMonitor />
          </Link>
          <Link to="/repair" className="nav-icon" title="Repair">
            <FiTool />
          </Link>
        </div>

        <div className="search-container">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products, parts, or services..." 
            className="search-input"
          />
        </div>

        <div className="menu-logo">
          RIG<span className="logo-accent">FORGE</span>
        </div>

        <div className="menu-header-spacer"></div>
      </header>

      <div className="upload-section">
        <label htmlFor="imageUpload" className="upload-btn">
          + Add Image
        </label>
        <input 
          type="file" 
          id="imageUpload" 
          accept="image/*" 
          style={{ display: 'none' }} 
          onChange={(e) => console.log(e.target.files[0])} 
        />
      </div>
    
      <div className="repair-section1">
        <label htmlFor="repairDescription" className="repair-label1">
          Repair Description
        </label>
        <textarea
          id="repairDescription"
          className="description-input"
          placeholder="Type your description here..."
          rows="4"
          required
        ></textarea>
      </div>

      <div className="customer-section2">
        <label className="customer-label2">Customer Name</label>
        <input 
          type="text"
          className="description-input"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>

      <div className="number-section3">
        <label className="number-label3">Phone Number</label>
        <input 
          type="text"
          className="description-input"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
           pattern="\d{10}" 
           maxLength="10"
           required
        />
      </div>

      <button type="button" className="submit-btn" onClick={handleSubmit}>
        Submit Form
      </button>

      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-menu">
          <Link to="/menu" className="sidebar-link" onClick={toggleSidebar}>
            <FiHome className="link-icon" />
            <span className="link-text">Dashboard</span>
          </Link>
          <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
            <FiUser className="link-icon" />
            <span className="link-text">Profile</span>
          </Link>
          <Link to="/ready-built" className="sidebar-link" onClick={toggleSidebar}>
            <FiMonitor className="link-icon" />
            <span className="link-text">Ready Built</span>
          </Link>
          <Link to="/repair" className="sidebar-link" onClick={toggleSidebar}>
            <FiTool className="link-icon" />
            <span className="link-text">Repair</span>
          </Link>
          <Link to="/settings" className="sidebar-link" onClick={toggleSidebar}>
            <FiSettings className="link-icon" />
            <span className="link-text">Settings</span>
          </Link>
          <Link to="/support" className="sidebar-link" onClick={toggleSidebar}>
            <FiHelpCircle className="link-icon" />
            <span className="link-text">Help & Support</span>
          </Link>
          <button className="sidebar-link logout-btn" onClick={handleLogout}>
            <FiLogOut className="link-icon" />
            <span className="link-text">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default RepairPage;