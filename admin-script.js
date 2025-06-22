// Admin Dashboard JavaScript

// Sample data for demonstration
let users = [
    {
        id: 'CH001',
        name: 'Rajesh Kumar',
        type: 'men',
        mobile: '+91 9876543210',
        email: 'rajesh@example.com',
        status: 'verified',
        registrationDate: '2024-01-15',
        documents: {
            selfie: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TZWxmaWU8L3RleHQ+Cjwvc3ZnPg==',
            govId: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BYWRoYXI8L3RleHQ+Cjwvc3ZnPg==',
            idType: 'aadhar'
        }
    },
    {
        id: 'CH002',
        name: 'Priya Sharma',
        type: 'women',
        mobile: '+91 9876543211',
        email: 'priya@example.com',
        status: 'pending',
        registrationDate: '2024-01-16',
        documents: {
            selfie: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TZWxmaWU8L3RleHQ+Cjwvc3ZnPg==',
            govId: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QQU48L3RleHQ+Cjwvc3ZnPg==',
            idType: 'pan'
        }
    },
    {
        id: 'CH003',
        name: 'Amit Singh',
        type: 'men',
        mobile: '+91 9876543212',
        email: 'amit@example.com',
        status: 'verified',
        registrationDate: '2024-01-14',
        documents: {
            selfie: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TZWxmaWU8L3RleHQ+Cjwvc3ZnPg==',
            govId: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI3Mjg0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ecml2aW5nPC90ZXh0Pgo8L3N2Zz4=',
            idType: 'driving'
        }
    }
];

let connections = [
    {
        id: 'CON001',
        code: 'CH-2024-001',
        man: { id: 'CH001', name: 'Rajesh Kumar' },
        woman: { id: 'CH004', name: 'Sunita Patel' },
        status: 'active',
        startDate: '2024-01-20',
        endDate: '2024-03-20',
        progress: 65
    },
    {
        id: 'CON002',
        code: 'CH-2024-002',
        man: { id: 'CH003', name: 'Amit Singh' },
        woman: { id: 'CH005', name: 'Kavita Joshi' },
        status: 'completed',
        startDate: '2024-01-10',
        endDate: '2024-03-10',
        progress: 100
    }
];

let payments = [
    {
        id: 'PAY001',
        userId: 'CH001',
        userName: 'Rajesh Kumar',
        type: 'men',
        amount: 1200,
        status: 'completed',
        date: '2024-01-15',
        transactionId: 'TXN123456789'
    },
    {
        id: 'PAY002',
        userId: 'CH002',
        userName: 'Priya Sharma',
        type: 'women',
        amount: 2600,
        status: 'pending',
        date: '2024-01-16',
        transactionId: 'TXN123456790'
    }
];

// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginModal = document.getElementById('loginModal');
    const adminDashboard = document.getElementById('adminDashboard');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple authentication (in real app, this would be server-side)
        if (username === 'admin' && password === 'admin123') {
            loginModal.style.display = 'none';
            adminDashboard.style.display = 'flex';
            initializeDashboard();
        } else {
            alert('Invalid credentials. Use username: admin, password: admin123');
        }
    });

    // Initialize navigation
    initializeNavigation();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('pageTitle');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            contentSections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Update page title
            const titles = {
                'overview': 'Dashboard Overview',
                'users': 'User Management',
                'verification': 'Verification Queue',
                'connections': 'Active Connections',
                'payments': 'Payment Management',
                'analytics': 'Analytics & Reports',
                'settings': 'System Settings'
            };
            pageTitle.textContent = titles[targetSection] || 'Dashboard';
            
            // Load section data
            loadSectionData(targetSection);
        });
    });

    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

// Initialize dashboard with data
function initializeDashboard() {
    updateOverviewStats();
    loadSectionData('overview');
}

// Update overview statistics
function updateOverviewStats() {
    const totalUsers = users.length;
    const totalMen = users.filter(u => u.type === 'men').length;
    const totalWomen = users.filter(u => u.type === 'women').length;
    const pendingVerifications = users.filter(u => u.status === 'pending').length;
    const activeConnections = connections.filter(c => c.status === 'active').length;
    const totalRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);

    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('totalMen').textContent = totalMen;
    document.getElementById('totalWomen').textContent = totalWomen;
    document.getElementById('pendingVerifications').textContent = pendingVerifications;
    document.getElementById('activeConnections').textContent = activeConnections;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toLocaleString()}`;
}

// Load section-specific data
function loadSectionData(section) {
    switch(section) {
        case 'overview':
            loadRecentActivity();
            break;
        case 'users':
            loadUsersTable();
            break;
        case 'verification':
            loadVerificationQueue();
            break;
        case 'connections':
            loadConnectionsGrid();
            break;
        case 'payments':
            loadPaymentsTable();
            break;
        case 'analytics':
            loadAnalytics();
            break;
    }
}

// Load recent activity
function loadRecentActivity() {
    const activityList = document.getElementById('activityList');
    const activities = [
        {
            icon: 'fas fa-user-plus',
            title: 'New User Registration',
            description: 'Priya Sharma registered as Women',
            time: '2 hours ago'
        },
        {
            icon: 'fas fa-check-circle',
            title: 'Document Verified',
            description: 'Rajesh Kumar documents approved',
            time: '4 hours ago'
        },
        {
            icon: 'fas fa-heart',
            title: 'New Connection',
            description: 'Connection CH-2024-003 created',
            time: '6 hours ago'
        },
        {
            icon: 'fas fa-credit-card',
            title: 'Payment Received',
            description: '₹1,200 payment from Amit Singh',
            time: '8 hours ago'
        }
    ];

    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
            </div>
            <div class="activity-time">${activity.time}</div>
        </div>
    `).join('');
}

// Load users table
function loadUsersTable() {
    const tableBody = document.getElementById('usersTableBody');
    
    tableBody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td><span class="status-badge ${user.type}">${user.type === 'men' ? 'Men' : 'Women'}</span></td>
            <td>${user.mobile}</td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>${new Date(user.registrationDate).toLocaleDateString()}</td>
            <td>
                <button class="action-btn view" onclick="viewUser('${user.id}')">View</button>
                <button class="action-btn approve" onclick="approveUser('${user.id}')">Approve</button>
                <button class="action-btn reject" onclick="rejectUser('${user.id}')">Reject</button>
            </td>
        </tr>
    `).join('');
}

// Load verification queue
function loadVerificationQueue() {
    const verificationGrid = document.getElementById('verificationGrid');
    const pendingUsers = users.filter(u => u.status === 'pending');
    
    // Update verification stats
    document.getElementById('pendingCount').textContent = users.filter(u => u.status === 'pending').length;
    document.getElementById('approvedCount').textContent = users.filter(u => u.status === 'verified').length;
    document.getElementById('rejectedCount').textContent = users.filter(u => u.status === 'rejected').length;
    
    verificationGrid.innerHTML = pendingUsers.map(user => `
        <div class="verification-card ${user.status}">
            <div class="verification-header">
                <h4>${user.name}</h4>
                <span class="status-badge ${user.status}">${user.status}</span>
            </div>
            <div class="verification-body">
                <div class="verification-info">
                    <span>ID:</span> <strong>${user.id}</strong>
                    <span>Type:</span> <strong>${user.type === 'men' ? 'Men' : 'Women'}</strong>
                    <span>Mobile:</span> <strong>${user.mobile}</strong>
                    <span>Email:</span> <strong>${user.email}</strong>
                    <span>ID Type:</span> <strong>${user.documents.idType.toUpperCase()}</strong>
                    <span>Date:</span> <strong>${new Date(user.registrationDate).toLocaleDateString()}</strong>
                </div>
                <div class="document-preview">
                    <div class="document-item">
                        <img src="${user.documents.selfie}" alt="Selfie" onclick="viewDocument('${user.documents.selfie}', 'Selfie Photo')">
                        <label>Selfie Photo</label>
                    </div>
                    <div class="document-item">
                        <img src="${user.documents.govId}" alt="Government ID" onclick="viewDocument('${user.documents.govId}', 'Government ID')">
                        <label>Government ID</label>
                    </div>
                </div>
            </div>
            <div class="verification-actions">
                <button class="action-btn approve" onclick="approveVerification('${user.id}')">
                    <i class="fas fa-check"></i> Approve
                </button>
                <button class="action-btn reject" onclick="rejectVerification('${user.id}')">
                    <i class="fas fa-times"></i> Reject
                </button>
            </div>
        </div>
    `).join('');
}

// Load connections grid
function loadConnectionsGrid() {
    const connectionsGrid = document.getElementById('connectionsGrid');
    
    connectionsGrid.innerHTML = connections.map(connection => `
        <div class="connection-card ${connection.status}">
            <div class="connection-header">
                <div class="connection-code">${connection.code}</div>
                <span class="status-badge ${connection.status}">${connection.status}</span>
            </div>
            <div class="connection-participants">
                <div class="participant">
                    <div class="participant-avatar">
                        <i class="fas fa-male"></i>
                    </div>
                    <h5>${connection.man.name}</h5>
                    <p>ID: ${connection.man.id}</p>
                </div>
                <div class="connection-arrow">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="participant">
                    <div class="participant-avatar">
                        <i class="fas fa-female"></i>
                    </div>
                    <h5>${connection.woman.name}</h5>
                    <p>ID: ${connection.woman.id}</p>
                </div>
            </div>
            <div class="connection-details">
                <div class="detail-row">
                    <span class="detail-label">Start Date:</span>
                    <span class="detail-value">${new Date(connection.startDate).toLocaleDateString()}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">End Date:</span>
                    <span class="detail-value">${new Date(connection.endDate).toLocaleDateString()}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Progress:</span>
                    <span class="detail-value">${connection.progress}%</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load payments table
function loadPaymentsTable() {
    const tableBody = document.getElementById('paymentsTableBody');
    
    // Update payment stats
    const todayRevenue = payments.filter(p => p.date === new Date().toISOString().split('T')[0] && p.status === 'completed')
        .reduce((sum, p) => sum + p.amount, 0);
    const monthRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);
    const pendingPayments = payments.filter(p => p.status === 'pending').length;
    
    document.getElementById('todayRevenue').textContent = todayRevenue.toLocaleString();
    document.getElementById('monthRevenue').textContent = monthRevenue.toLocaleString();
    document.getElementById('pendingPayments').textContent = pendingPayments;
    
    tableBody.innerHTML = payments.map(payment => `
        <tr>
            <td>${payment.transactionId}</td>
            <td>${payment.userName}</td>
            <td><span class="status-badge ${payment.type}">${payment.type === 'men' ? 'Men' : 'Women'}</span></td>
            <td>₹${payment.amount.toLocaleString()}</td>
            <td><span class="status-badge ${payment.status}">${payment.status}</span></td>
            <td>${new Date(payment.date).toLocaleDateString()}</td>
            <td>
                <button class="action-btn view" onclick="viewPayment('${payment.id}')">View</button>
                ${payment.status === 'pending' ? '<button class="action-btn approve" onclick="approvePayment(\'' + payment.id + '\')">Approve</button>' : ''}
            </td>
        </tr>
    `).join('');
}

// Load analytics
function loadAnalytics() {
    // Update analytics metrics
    document.getElementById('userGrowth').textContent = '15';
    document.getElementById('successRate').textContent = '85';
    document.getElementById('avgResponseTime').textContent = '12';
    document.getElementById('satisfaction').textContent = '4.8';
}

// Action functions
function viewUser(userId) {
    const user = users.find(u => u.id === userId);
    alert(`User Details:\nName: ${user.name}\nType: ${user.type}\nMobile: ${user.mobile}\nEmail: ${user.email}\nStatus: ${user.status}`);
}

function approveUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.status = 'verified';
        updateOverviewStats();
        loadSectionData('users');
        alert(`User ${user.name} has been approved!`);
    }
}

function rejectUser(userId) {
    const user = users.find(u => u.id === userId);
    if (user && confirm(`Are you sure you want to reject ${user.name}?`)) {
        user.status = 'rejected';
        updateOverviewStats();
        loadSectionData('users');
        alert(`User ${user.name} has been rejected.`);
    }
}

function approveVerification(userId) {
    approveUser(userId);
    loadVerificationQueue();
}

function rejectVerification(userId) {
    rejectUser(userId);
    loadVerificationQueue();
}

function viewDocument(src, title) {
    // Create modal to view document
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 90%; max-height: 90%;">
            <h3>${title}</h3>
            <img src="${src}" style="max-width: 100%; max-height: 400px; object-fit: contain;">
            <br><br>
            <button onclick="this.closest('div').parentNode.remove()" style="padding: 0.5rem 1rem; background: #6366f1; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function viewPayment(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    alert(`Payment Details:\nTransaction ID: ${payment.transactionId}\nUser: ${payment.userName}\nAmount: ₹${payment.amount}\nStatus: ${payment.status}\nDate: ${payment.date}`);
}

function approvePayment(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    if (payment) {
        payment.status = 'completed';
        loadPaymentsTable();
        alert(`Payment ${payment.transactionId} has been approved!`);
    }
}

function saveSettings() {
    alert('Settings saved successfully!');
}

function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
        document.getElementById('menFee').value = '1200';
        document.getElementById('womenFee').value = '2600';
        document.getElementById('connectionDuration').value = '2';
        document.getElementById('continuationFee').value = '25000';
        document.getElementById('phoneNumber').value = '+91 9208438126';
        document.getElementById('emailAddress').value = 'pk9208438126@gmail.com';
        document.getElementById('supportHours').value = '24/7 Available';
        alert('Settings reset to default values!');
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('adminDashboard').style.display = 'none';
        document.getElementById('loginModal').style.display = 'flex';
        document.getElementById('loginForm').reset();
    }
}
