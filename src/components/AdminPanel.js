import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel-container">
            <h1>Admin Panel</h1>
            <p>Welcome, Admin. Here you can manage the courses, users, and platform settings.</p>
            
            <div className="admin-options">
                <div className="admin-card">
                    <h3>Manage Courses</h3>
                    <p>Add, edit, or delete courses offered on the platform.</p>
                    <button>View Courses</button>
                    <button>Add New Course</button>
                </div>
                
                <div className="admin-card">
                    <h3>Manage Users</h3>
                    <p>Monitor and manage student and instructor accounts.</p>
                    <button>View Users</button>
                    <button>Add New User</button>
                </div>
                
                <div className="admin-card">
                    <h3>Platform Settings</h3>
                    <p>Change platform settings, notifications, and other configurations.</p>
                    <button>View Settings</button>
                    <button>Edit Settings</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
