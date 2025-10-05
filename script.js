// Campaign Manager - Vanilla JavaScript Application

// Global state
const state = {
  activeMobileNav: 'dashboard',
  voters: [
    {
      id: "V001234",
      name: "Ahmed Ibrahim",
      constituency: "Malé",
      age: 34,
      phone: "+960 123-4567",
      status: "Pledged Support",
      lastContact: "2024-01-15",
      priority: "High",
      nationalId: "A1234567",
      dateOfBirth: "January 15, 1990",
      gender: "Male",
      email: "ahmed.ibrahim@email.com",
      permanentAddress: "Henveiru, Malé, Maldives",
      currentAddress: "Henveiru, Malé, Maldives",
      voteLocation: "Malé Central School",
      ballotBox: "Box 12",
      politicalView: "Progressive",
      contactMethod: "Phone Call",
      notes: "Very supportive voter, willing to volunteer"
    },
    {
      id: "V001235", 
      name: "Aisha Mohamed",
      constituency: "Addu City",
      age: 28,
      phone: "+960 234-5678",
      status: "Contacted",
      lastContact: "2024-01-14",
      priority: "Medium",
      nationalId: "A2345678",
      dateOfBirth: "March 22, 1996",
      gender: "Female",
      email: "aisha.mohamed@email.com",
      permanentAddress: "Maradhoo, Addu City, Maldives",
      currentAddress: "Maradhoo, Addu City, Maldives",
      voteLocation: "Addu City School",
      ballotBox: "Box 8",
      politicalView: "Moderate",
      contactMethod: "WhatsApp",
      notes: "Interested in education policies"
    },
    {
      id: "V001236",
      name: "Hassan Ali",
      constituency: "Fuvahmulah", 
      age: 42,
      phone: "+960 345-6789",
      status: "New Voter",
      lastContact: "Never",
      priority: "High",
      nationalId: "A3456789",
      dateOfBirth: "July 8, 1982",
      gender: "Male",
      email: "hassan.ali@email.com",
      permanentAddress: "Fuvahmulah, Maldives",
      currentAddress: "Fuvahmulah, Maldives",
      voteLocation: "Fuvahmulah School",
      ballotBox: "Box 5",
      politicalView: "Conservative",
      contactMethod: "Not Contacted",
      notes: "New voter registration, needs initial contact"
    },
    {
      id: "V001237",
      name: "Fatima Ahmed",
      constituency: "Kulhudhuffushi",
      age: 31,
      phone: "+960 456-7890", 
      status: "Voted Early",
      lastContact: "2024-01-13",
      priority: "Low",
      nationalId: "A4567890",
      dateOfBirth: "November 3, 1993",
      gender: "Female",
      email: "fatima.ahmed@email.com",
      permanentAddress: "Kulhudhuffushi, Maldives",
      currentAddress: "Kulhudhuffushi, Maldives",
      voteLocation: "Kulhudhuffushi School",
      ballotBox: "Box 3",
      politicalView: "Progressive",
      contactMethod: "Email",
      notes: "Already voted early, very engaged"
    },
    {
      id: "V001238",
      name: "Mohamed Hassan",
      constituency: "Malé",
      age: 25,
      phone: "+960 567-8901",
      status: "Not Contacted",
      lastContact: "Never",
      priority: "High"
    },
    {
      id: "V001239",
      name: "Aminath Ibrahim",
      constituency: "Thinadhoo",
      age: 38,
      phone: "+960 678-9012",
      status: "Pledged Support", 
      lastContact: "2024-01-12",
      priority: "Medium"
    }
  ],
  chartData: [
    { name: "Week 1", value: 420 },
    { name: "Week 2", value: 680 },
    { name: "Week 3", value: 520 },
    { name: "Week 4", value: 890 }
  ],
  constituencies: [
    { name: "Malé", volunteers: 342, events: 12, contacts: 8934 },
    { name: "Addu City", volunteers: 198, events: 8, contacts: 5621 },
    { name: "Fuvahmulah", volunteers: 156, events: 6, contacts: 4102 },
    { name: "Kulhudhuffushi", volunteers: 134, events: 5, contacts: 3845 }
  ],
  activities: [
    { label: "Door-to-door", count: 234, color: "primary" },
    { label: "Phone banking", count: 156, color: "accent" },
    { label: "Social media", count: 89, color: "chart-4" }
  ]
};

// Utility functions
const utils = {
  // Format numbers with commas
  formatNumber: (num) => {
    return num.toLocaleString();
  },

  // Get CSS variable value
  getCSSVariable: (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  },

  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Chart functionality
const chartManager = {
  canvas: null,
  ctx: null,
  animationId: null,

  init() {
    this.canvas = document.getElementById('volunteerChart');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.setupCanvas();
    this.drawChart();
  },

  setupCanvas() {
    const container = this.canvas.parentElement;
    const containerRect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Ensure canvas fits within container with proper margins
    const maxWidth = containerRect.width - 16; // Account for padding
    const maxHeight = containerRect.height - 16;
    
    this.canvas.width = maxWidth * dpr;
    this.canvas.height = maxHeight * dpr;
    
    this.ctx.scale(dpr, dpr);
    this.canvas.style.width = maxWidth + 'px';
    this.canvas.style.height = maxHeight + 'px';
  },

  drawChart() {
    if (!this.ctx) return;

    const data = state.chartData;
    const maxValue = Math.max(...data.map(d => d.value));
    const padding = 20; // Reduced padding for better fit
    const canvasWidth = this.canvas.width / (window.devicePixelRatio || 1);
    const canvasHeight = this.canvas.height / (window.devicePixelRatio || 1);
    const chartWidth = canvasWidth - padding * 2;
    const chartHeight = canvasHeight - padding * 2;
    const barWidth = Math.max(20, chartWidth / data.length * 0.6); // Minimum bar width
    const barSpacing = chartWidth / data.length;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw grid lines
    this.ctx.strokeStyle = utils.getCSSVariable('--border');
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([3, 3]);
    
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight / 4) * i;
      this.ctx.beginPath();
      this.ctx.moveTo(padding, y);
      this.ctx.lineTo(padding + chartWidth, y);
      this.ctx.stroke();
    }
    this.ctx.setLineDash([]);

    // Draw bars
    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = padding + barSpacing * index + (barSpacing - barWidth) / 2;
      const y = padding + chartHeight - barHeight;

      // Draw bar
      this.ctx.fillStyle = utils.getCSSVariable('--primary');
      this.ctx.fillRect(x, y, barWidth, barHeight);

      // Draw rounded top
      this.ctx.beginPath();
      this.ctx.roundRect(x, y, barWidth, barHeight, [8, 8, 0, 0]);
      this.ctx.fill();

      // Draw value label
      this.ctx.fillStyle = utils.getCSSVariable('--foreground');
      this.ctx.font = '10px Poppins, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5);

      // Draw category label
      this.ctx.fillStyle = utils.getCSSVariable('--muted-foreground');
      this.ctx.font = '10px Poppins, sans-serif';
      this.ctx.fillText(item.name, x + barWidth / 2, padding + chartHeight + 15);
    });

    // Draw axes
    this.ctx.strokeStyle = utils.getCSSVariable('--border');
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(padding, padding);
    this.ctx.lineTo(padding, padding + chartHeight);
    this.ctx.lineTo(padding + chartWidth, padding + chartHeight);
    this.ctx.stroke();
  },

  resize() {
    this.setupCanvas();
    this.drawChart();
  }
};

// Mobile navigation manager
const mobileNavManager = {
  init() {
    const navItems = document.querySelectorAll('.mobile-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const navType = item.dataset.nav;
        this.setActiveNav(navType);
      });
    });
  },

  setActiveNav(navType) {
    // Remove active class from all items
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Add active class to clicked item
    const activeItem = document.querySelector(`[data-nav="${navType}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }

    state.activeMobileNav = navType;
    this.handleNavAction(navType);
  },

  handleNavAction(navType) {
    // Handle different navigation actions
    switch (navType) {
      case 'dashboard':
        console.log('Dashboard selected');
        window.location.href = 'index.html';
        break;
      case 'voters':
        console.log('Voters selected');
        window.location.href = 'voters.html';
        break;
      case 'events':
        console.log('Events selected');
        // Add events page routing when available
        break;
      case 'reports':
        console.log('Reports selected');
        // Add reports page routing when available
        break;
      case 'more':
        console.log('More selected');
        // Add more page routing when available
        break;
      default:
        console.log('Unknown navigation:', navType);
    }
  }
};

// Search functionality
const searchManager = {
  init() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    const debouncedSearch = utils.debounce(this.performSearch.bind(this), 300);
    searchInput.addEventListener('input', debouncedSearch);
  },

  performSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    console.log('Searching for:', query);
    
    // Here you would implement actual search functionality
    // For now, we'll just log the search query
    if (query.length > 2) {
      this.showSearchResults(query);
    } else {
      this.hideSearchResults();
    }
  },

  showSearchResults(query) {
    // Implement search results display
    console.log('Showing search results for:', query);
  },

  hideSearchResults() {
    // Hide search results
    console.log('Hiding search results');
  }
};

// Notification manager
const notificationManager = {
  init() {
    const notificationButton = document.querySelector('.notification-button');
    if (!notificationButton) return;

    notificationButton.addEventListener('click', this.toggleNotifications.bind(this));
  },

  toggleNotifications() {
    console.log('Toggle notifications');
    // Implement notification dropdown or modal
  }
};

// Responsive manager
const responsiveManager = {
  init() {
    window.addEventListener('resize', utils.debounce(this.handleResize.bind(this), 250));
    this.handleResize();
  },

  handleResize() {
    const width = window.innerWidth;
    
    // Update chart on resize
    if (chartManager.canvas) {
      chartManager.resize();
    }

    // Handle responsive layout changes
    if (width >= 1024) {
      this.handleDesktopLayout();
    } else if (width >= 768) {
      this.handleTabletLayout();
    } else {
      this.handleMobileLayout();
    }
  },

  handleDesktopLayout() {
    console.log('Desktop layout active');
  },

  handleTabletLayout() {
    console.log('Tablet layout active');
  },

  handleMobileLayout() {
    console.log('Mobile layout active');
  }
};

// Theme manager
const themeManager = {
  init() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  },

  setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
};

// Data manager
const dataManager = {
  init() {
    this.loadMetrics();
    this.loadConstituencies();
    this.loadActivities();
  },

  loadMetrics() {
    // Metrics are already in the HTML, but we could load them dynamically here
    console.log('Metrics loaded');
  },

  loadConstituencies() {
    // Constituencies data is already in the HTML
    console.log('Constituencies loaded');
  },

  loadActivities() {
    // Activities data is already in the HTML
    console.log('Activities loaded');
  },

  updateMetric(metricId, newValue) {
    // Function to update individual metrics
    console.log(`Updating metric ${metricId} to ${newValue}`);
  }
};

// Animation manager
const animationManager = {
  init() {
    this.setupScrollAnimations();
    this.setupHoverAnimations();
  },

  setupScrollAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe metric cards
    document.querySelectorAll('.metric-card').forEach(card => {
      observer.observe(card);
    });
  },

  setupHoverAnimations() {
    // Add hover effects to interactive elements
    document.querySelectorAll('.metric-card, .nav-item, .mobile-nav-item').forEach(element => {
      element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    });
  },

  handleMouseEnter(event) {
    event.target.style.transform = 'translateY(-2px)';
    event.target.style.transition = 'transform 0.2s ease';
  },

  handleMouseLeave(event) {
    event.target.style.transform = 'translateY(0)';
  }
};

// Error handling
const errorHandler = {
  init() {
    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
  },

  handleError(event) {
    console.error('JavaScript error:', event.error);
    // In a production app, you might want to send this to an error tracking service
  },

  handlePromiseRejection(event) {
    console.error('Unhandled promise rejection:', event.reason);
    // In a production app, you might want to send this to an error tracking service
  }
};

// Performance monitoring
const performanceMonitor = {
  init() {
    // Monitor page load performance
    window.addEventListener('load', this.measurePageLoad.bind(this));
  },

  measurePageLoad() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // In a production app, you might want to send this to an analytics service
  }
};

// Main application class
class CampaignManagerApp {
  constructor() {
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    try {
      // Initialize all managers
      await this.initializeManagers();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Mark as initialized
      this.initialized = true;
      
      console.log('Campaign Manager app initialized successfully');
    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
  }

  async initializeManagers() {
    // Initialize managers in order
    errorHandler.init();
    performanceMonitor.init();
    themeManager.init();
    responsiveManager.init();
    chartManager.init();
    mobileNavManager.init();
    searchManager.init();
    notificationManager.init();
    dataManager.init();
    animationManager.init();
  }

  setupEventListeners() {
    // Global event listeners
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM content loaded');
    });

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        console.log('Page hidden');
      } else {
        console.log('Page visible');
      }
    });

    // Handle online/offline status
    window.addEventListener('online', () => {
      console.log('App is online');
    });

    window.addEventListener('offline', () => {
      console.log('App is offline');
    });
  }

  // Public API methods
  updateMetric(metricId, value) {
    dataManager.updateMetric(metricId, value);
  }

  switchTheme() {
    themeManager.toggleTheme();
  }

  getState() {
    return { ...state };
  }
}

// Initialize the application
const app = new CampaignManagerApp();

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Voter Dashboard Functions
function initializeVoterDashboard() {
  if (window.location.pathname.includes('voters.html')) {
    initializeVoterSearch();
    initializeVoterFilters();
    initializeVoterTable();
    initializeVoterActions();
    initializeColumnToggle();
  }
}

function initializeVoterSearch() {
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      filterVoters(searchTerm);
    });
  }
}

function initializeVoterFilters() {
  // Add filter functionality here
  console.log('Voter filters initialized');
}

function initializeVoterTable() {
  // Add table functionality here
  console.log('Voter table initialized');
}

function initializeVoterActions() {
  // Add action button functionality
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const action = this.getAttribute('title');
      console.log(`Action clicked: ${action}`);
      // Add specific action handling here
    });
  });
}

function filterVoters(searchTerm) {
  const voterRows = document.querySelectorAll('.constituencies-table tbody tr');
  voterRows.forEach(row => {
    const voterId = row.cells[0].textContent.toLowerCase();
    const voterName = row.cells[1].textContent.toLowerCase();
    const constituency = row.cells[2].textContent.toLowerCase();
    
    if (voterId.includes(searchTerm) || voterName.includes(searchTerm) || constituency.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

function getStatusColor(status) {
  const statusColors = {
    'Pledged Support': 'pledged',
    'Contacted': 'contacted',
    'New Voter': 'new',
    'Voted Early': 'voted',
    'Not Contacted': 'not-contacted'
  };
  return statusColors[status] || 'not-contacted';
}

function getPriorityColor(priority) {
  const priorityColors = {
    'High': 'high',
    'Medium': 'medium',
    'Low': 'low'
  };
  return priorityColors[priority] || 'low';
}

function initializeColumnToggle() {
  const toggleButtons = document.querySelectorAll('.column-toggle-btn');
  const table = document.querySelector('.voter-table');
  
  if (!table) return;
  
  // Column mapping (Image is now first column)
  const columnGroups = {
    'visible': [0, 1, 2, 3, 4, 5], // Image, UID, National ID, Full Name, Permanent, Current Add
    'contact': [6, 7], // First Conta, Date of Birt
    'demographics': [8, 9, 10], // Age, Gender, Political Vie
    'voting': [11, 12], // Vote Locati, Ballot Box
    'all': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // All columns except actions
  };
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get column group
      const columnType = this.getAttribute('data-column');
      const columnsToShow = columnGroups[columnType] || [];
      
      // Show/hide columns
      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td, th');
        cells.forEach((cell, index) => {
          if (index === cells.length - 1) {
            // Always show actions column
            cell.style.display = 'table-cell';
          } else if (columnsToShow.includes(index)) {
            cell.style.display = 'table-cell';
            cell.classList.remove('hidden-col');
            cell.classList.add('visible-col');
          } else {
            cell.style.display = 'none';
            cell.classList.add('hidden-col');
            cell.classList.remove('visible-col');
          }
        });
      });
    });
  });
}

// Initialize voter dashboard when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeVoterDashboard();
  
  // Add routing for desktop sidebar navigation
  initializeDesktopNavigation();
  
  // Initialize view switching
  initializeViewSwitching();
  
  // Initialize voter modal
  initializeVoterModal();
  
  // Initialize field agent management if on field agent page
  if (window.location.pathname.includes('field-agent.html')) {
    initializeFieldAgentManagement();
  }

  // Initialize Zero Day Management
  if (window.location.pathname.includes('zero-day.html')) {
    console.log('Initializing Zero Day Management...');
    initializeZeroDayManagement();
  }

  // Initialize Reports Page
  if (window.location.pathname.includes('reports.html')) {
    console.log('Initializing Reports Page...');
    initializeReportsPage();
  }

  // Initialize Login Page
  if (window.location.pathname.includes('login.html')) {
    console.log('Initializing Login Page...');
    initializeLogin();
  }

  // Initialize logout functionality for all pages
  initializeLogout();
  
});

// Voter Modal Manager
function initializeVoterModal() {
  const modal = document.getElementById('voterModal');
  const closeBtn = document.getElementById('closeVoterModal');
  const editBtn = document.getElementById('editVoterBtn');
  const contactBtn = document.getElementById('contactVoterBtn');
  
  // Close modal when clicking close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVoterModal);
  }
  
  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeVoterModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVoterModal();
    }
  });
  
  // Handle edit button
  if (editBtn) {
    editBtn.addEventListener('click', function() {
      console.log('Edit voter clicked');
      // TODO: Implement edit functionality
      closeVoterModal();
    });
  }
  
  // Handle contact button
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      console.log('Contact voter clicked');
      // TODO: Implement contact functionality
      closeVoterModal();
    });
  }
  
  // Add click handlers to view buttons in voter table
  const viewButtons = document.querySelectorAll('.action-btn.view-btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const row = this.closest('tr');
      if (row) {
        // Get voter ID from the second cell (index 1) since first cell is the image
        const voterIdCell = row.querySelector('td:nth-child(2)');
        if (voterIdCell) {
          const voterId = voterIdCell.textContent.trim();
          console.log('Opening modal for voter:', voterId);
          openVoterModal(voterId);
        }
      }
    });
  });
}

function openVoterModal(voterId) {
  console.log('openVoterModal called with voterId:', voterId);
  const modal = document.getElementById('voterModal');
  const voter = state.voters.find(v => v.id === voterId);
  
  console.log('Found voter:', voter);
  console.log('Found modal:', modal);
  
  if (!voter || !modal) {
    console.log('Modal or voter not found');
    return;
  }
  
  // Populate modal with voter data
  document.getElementById('modalVoterName').textContent = voter.name;
  document.getElementById('modalVoterId').textContent = voter.id;
  document.getElementById('modalVoterStatus').textContent = voter.status;
  document.getElementById('modalFullName').textContent = voter.name;
  document.getElementById('modalNationalId').textContent = voter.nationalId || 'N/A';
  document.getElementById('modalDateOfBirth').textContent = voter.dateOfBirth || 'N/A';
  document.getElementById('modalAge').textContent = `${voter.age} years`;
  document.getElementById('modalGender').textContent = voter.gender || 'N/A';
  document.getElementById('modalPhone').textContent = voter.phone;
  document.getElementById('modalEmail').textContent = voter.email || 'N/A';
  document.getElementById('modalPermanentAddress').textContent = voter.permanentAddress || 'N/A';
  document.getElementById('modalCurrentAddress').textContent = voter.currentAddress || 'N/A';
  document.getElementById('modalConstituency').textContent = voter.constituency;
  document.getElementById('modalVoteLocation').textContent = voter.voteLocation || 'N/A';
  document.getElementById('modalBallotBox').textContent = voter.ballotBox || 'N/A';
  document.getElementById('modalPoliticalView').textContent = voter.politicalView || 'N/A';
  document.getElementById('modalCampaignStatus').textContent = voter.status;
  document.getElementById('modalPriority').textContent = voter.priority;
  document.getElementById('modalLastContact').textContent = voter.lastContact;
  document.getElementById('modalContactMethod').textContent = voter.contactMethod || 'N/A';
  document.getElementById('modalNotes').textContent = voter.notes || 'No notes available';
  
  // Update status badge color
  const statusBadge = document.getElementById('modalVoterStatus');
  statusBadge.className = 'voter-status-badge';
  statusBadge.classList.add(getStatusClass(voter.status));
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVoterModal() {
  const modal = document.getElementById('voterModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function getStatusClass(status) {
  const statusMap = {
    'Pledged Support': 'status-pledged',
    'Contacted': 'status-contacted',
    'New Voter': 'status-new',
    'Voted Early': 'status-voted',
    'Not Contacted': 'status-not-contacted'
  };
  return statusMap[status] || 'status-default';
}

// View Switching Manager
function initializeViewSwitching() {
  // Voter Database View Switching
  const voterViewSelect = document.getElementById('voterViewSelect');
  if (voterViewSelect) {
    voterViewSelect.addEventListener('change', function() {
      const selectedView = this.value;
      console.log(`Switching voter view to: ${selectedView}`);
      
      // Add view-specific classes to the voter table container
      const voterTableContainer = document.querySelector('.voter-table-container');
      if (voterTableContainer) {
        // Remove existing view classes
        voterTableContainer.classList.remove('table-view', 'grid-view', 'card-view');
        // Add new view class
        voterTableContainer.classList.add(`${selectedView}-view`);
      }
      
      // Show appropriate message based on view
      showViewMessage('voter', selectedView);
    });
  }
  
  // Campaign Events View Switching
  const eventViewSelect = document.getElementById('eventViewSelect');
  if (eventViewSelect) {
    eventViewSelect.addEventListener('change', function() {
      const selectedView = this.value;
      console.log(`Switching event view to: ${selectedView}`);
      
      // Add view-specific classes to the events grid container
      const eventsGrid = document.querySelector('.events-grid');
      if (eventsGrid) {
        // Remove existing view classes
        eventsGrid.classList.remove('grid-view', 'list-view', 'card-view', 'timeline-view');
        // Add new view class
        eventsGrid.classList.add(`${selectedView}-view`);
      }
      
      // Show appropriate message based on view
      showViewMessage('event', selectedView);
    });
  }
}

// Show view switching message
function showViewMessage(type, view) {
  const message = document.createElement('div');
  message.className = 'view-message';
  message.textContent = `Switched to ${view.replace('-', ' ')} view`;
  message.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--primary);
    color: var(--primary-foreground);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 1000;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(message);
  
  // Animate in
  setTimeout(() => {
    message.style.opacity = '1';
    message.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove after 2 seconds
  setTimeout(() => {
    message.style.opacity = '0';
    message.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 300);
  }, 2000);
}

// Desktop Navigation Manager
function initializeDesktopNavigation() {
  const desktopNavItems = document.querySelectorAll('.sidebar-nav .nav-item');
  
  desktopNavItems.forEach(item => {
    item.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal navigation
      if (href && href !== '#' && !href.startsWith('http')) {
        e.preventDefault();
        console.log(`Navigating to: ${href}`);
        window.location.href = href;
      }
    });
  });
}

// Make app available globally for debugging
window.CampaignManagerApp = app;

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CampaignManagerApp;
}

// Call Centre Data
const callCentreData = {
    calls: [
        {
            id: 'C001234',
            voterName: 'Ahmed Ibrahim',
            phone: '+960 123-4567',
            agent: 'Aisha Mohamed',
            status: 'connected',
            duration: '5:32',
            callTime: '2024-01-15 14:30',
            notes: 'Very supportive, pledged vote',
            followUp: 'Send campaign materials'
        },
        {
            id: 'C001235',
            voterName: 'Aisha Mohamed',
            phone: '+960 234-5678',
            agent: 'Hassan Ali',
            status: 'missed',
            duration: '0:00',
            callTime: '2024-01-15 15:45',
            notes: 'No answer, try evening',
            followUp: 'Call back tomorrow'
        },
        {
            id: 'C001236',
            voterName: 'Hassan Ali',
            phone: '+960 345-6789',
            agent: 'Fatima Ahmed',
            status: 'busy',
            duration: '0:00',
            callTime: '2024-01-15 16:20',
            notes: 'Line busy, try later',
            followUp: 'Call in 1 hour'
        },
        {
            id: 'C001237',
            voterName: 'Fatima Ahmed',
            phone: '+960 456-7890',
            agent: 'Ahmed Hassan',
            status: 'no-answer',
            duration: '0:00',
            callTime: '2024-01-15 17:10',
            notes: 'Rang 5 times, no pickup',
            followUp: 'Try WhatsApp'
        }
    ]
};

// Initialize Call Centre Page
function initializeCallCentre() {
    initializeCallFilters();
    initializeCallTable();
    initializeCallActions();
    initializeCallViewSwitching();
}

// Initialize Call Filters
function initializeCallFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    const applyBtn = document.querySelector('.filter-btn.primary');
    const clearBtn = document.querySelector('.filter-btn:not(.primary)');

    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            console.log('Applying call filters...');
            showViewMessage('Filters applied successfully');
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            filterSelects.forEach(select => {
                select.selectedIndex = 0;
            });
            console.log('Call filters cleared');
            showViewMessage('Filters cleared');
        });
    }
}

// Initialize Call Table
function initializeCallTable() {
    console.log('Call table initialized');
}

// Initialize Call Actions
function initializeCallActions() {
    const callButtons = document.querySelectorAll('.action-btn.call-btn');
    callButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const row = e.target.closest('tr');
            const callId = row.querySelector('td:first-child').textContent;
            console.log(`Calling ${callId}...`);
            showViewMessage(`Initiating call to ${callId}`);
        });
    });
}

// Initialize View Switching for Call Centre
function initializeCallViewSwitching() {
    const viewSelect = document.getElementById('callViewSelect');
    if (viewSelect) {
        viewSelect.addEventListener('change', (e) => {
            const selectedView = e.target.value;
            console.log(`Switching to ${selectedView} view for calls`);
            showViewMessage(`Switched to ${selectedView.replace('-', ' ')}`);
        });
    }
}

// Field Agent Data
const fieldAgentData = {
    agents: [
        {
            id: 'FA001',
            name: 'Ahmed Hassan',
            status: 'active',
            area: 'Malé Central',
            lastActivity: '2 min ago',
            phone: '+960 123-4567',
            visitsToday: 12,
            successRate: '85%',
            currentLocation: 'Henveiru',
            experience: '2 years',
            teamLead: 'Ibrahim Ali',
            performance: 'excellent'
        },
        {
            id: 'FA002',
            name: 'Aisha Mohamed',
            status: 'on-break',
            area: 'Addu City',
            lastActivity: '15 min ago',
            phone: '+960 234-5678',
            visitsToday: 8,
            successRate: '78%',
            currentLocation: 'Maradhoo',
            experience: '1 year',
            teamLead: 'Hassan Ali',
            performance: 'good'
        },
        {
            id: 'FA003',
            name: 'Mohamed Ali',
            status: 'inactive',
            area: 'Fuvahmulah',
            lastActivity: '2 hours ago',
            phone: '+960 345-6789',
            visitsToday: 5,
            successRate: '65%',
            currentLocation: 'Dhadimagu',
            experience: '6 months',
            teamLead: 'Aminath Ali',
            performance: 'average'
        },
        {
            id: 'FA004',
            name: 'Fatima Ibrahim',
            status: 'active',
            area: 'Kulhudhuffushi',
            lastActivity: '5 min ago',
            phone: '+960 456-7890',
            visitsToday: 15,
            successRate: '92%',
            currentLocation: 'Maafannu',
            experience: '3 years',
            teamLead: 'Ahmed Hassan',
            performance: 'excellent'
        }
    ]
};

// Initialize Field Agent Management
function initializeFieldAgentManagement() {
    console.log('Initializing Field Agent Management...');
    initializeFieldAgentFilters();
    initializeFieldAgentTable();
    initializeFieldAgentActions();
    initializeFieldAgentViewSwitching();
    initializeFieldAgentColumnToggle();
}

// Zero Day Data
const zeroDayData = {
    voters: [
        {
            id: 'V001234',
            name: 'Ahmed Ibrahim',
            permanentAddress: 'Malé, Henveiru, Ameer Ahmed Magu',
            nationalId: 'A1234567',
            ballotBox: 'BB001',
            voteStatus: 'voted'
        },
        {
            id: 'V001235',
            name: 'Aisha Mohamed',
            permanentAddress: 'Malé, Maafannu, Boduthakurufaanu Magu',
            nationalId: 'A2345678',
            ballotBox: 'BB002',
            voteStatus: 'not-voted'
        },
        {
            id: 'V001236',
            name: 'Mohamed Ali',
            permanentAddress: 'Malé, Galolhu, Majeedhee Magu',
            nationalId: 'A3456789',
            ballotBox: 'BB001',
            voteStatus: 'voted'
        },
        {
            id: 'V001237',
            name: 'Fatima Hassan',
            permanentAddress: 'Addu City, Maradhoo, Main Road',
            nationalId: 'A4567890',
            ballotBox: 'BB004',
            voteStatus: 'not-voted'
        },
        {
            id: 'V001238',
            name: 'Ibrahim Ahmed',
            permanentAddress: 'Malé, Hulhumalé, Phase 2',
            nationalId: 'A5678901',
            ballotBox: 'BB003',
            voteStatus: 'voted'
        }
    ]
};

// Initialize Zero Day Management
function initializeZeroDayManagement() {
    console.log('Zero Day Management: Starting initialization...');
    initializeZeroDayFilters();
    initializeZeroDayTable();
    initializeZeroDayActions();
    updateZeroDayMetrics();
    console.log('Zero Day Management: Initialization complete!');
}

// Initialize Zero Day Filters
function initializeZeroDayFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    const applyBtn = document.querySelector('.filter-btn.primary');
    const clearBtn = document.querySelector('.filter-btn:not(.primary)');

    if (applyBtn) {
        applyBtn.addEventListener('click', applyZeroDayFilters);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearZeroDayFilters);
    }
}

// Apply Zero Day Filters
function applyZeroDayFilters() {
    const statusFilter = document.querySelector('select[data-filter="status"]')?.value || '';
    const ballotFilter = document.querySelector('select[data-filter="ballot"]')?.value || '';
    const sortBy = document.querySelector('select[data-filter="sort"]')?.value || 'name';

    let filteredVoters = [...zeroDayData.voters];

    // Filter by status
    if (statusFilter) {
        filteredVoters = filteredVoters.filter(voter => voter.voteStatus === statusFilter);
    }

    // Filter by ballot box
    if (ballotFilter) {
        filteredVoters = filteredVoters.filter(voter => voter.ballotBox === ballotFilter);
    }

    // Sort voters
    filteredVoters.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'uid':
                return a.id.localeCompare(b.id);
            case 'ballot':
                return a.ballotBox.localeCompare(b.ballotBox);
            case 'status':
                return a.voteStatus.localeCompare(b.voteStatus);
            default:
                return 0;
        }
    });

    updateZeroDayTable(filteredVoters);
}

// Clear Zero Day Filters
function clearZeroDayFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.value = '';
    });
    updateZeroDayTable(zeroDayData.voters);
}

// Initialize Zero Day Table
function initializeZeroDayTable() {
    updateZeroDayTable(zeroDayData.voters);
}

// Update Zero Day Table
function updateZeroDayTable(voters) {
    const tbody = document.querySelector('.voter-table tbody');
    if (!tbody) return;

    tbody.innerHTML = '';

    voters.forEach(voter => {
        const row = document.createElement('tr');
        const statusBadge = voter.voteStatus === 'voted' ? 
            '<span class="vote-status-badge voted">Voted</span>' : 
            '<span class="vote-status-badge not-voted">Not Voted</span>';

        const actionButton = voter.voteStatus === 'voted' ? 
            `<button class="action-btn undo-vote-btn" title="Undo Vote" data-voter-id="${voter.id}">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
                </svg>
            </button>` :
            `<button class="action-btn mark-vote-btn" title="Mark as Voted" data-voter-id="${voter.id}">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </button>`;

        row.innerHTML = `
            <td class="visible-col">${voter.id}</td>
            <td class="visible-col">${voter.name}</td>
            <td class="visible-col">${voter.permanentAddress}</td>
            <td class="visible-col">${voter.nationalId}</td>
            <td class="visible-col">${voter.ballotBox}</td>
            <td class="visible-col">${statusBadge}</td>
            <td class="actions-col">
                <div class="action-buttons">
                    ${actionButton}
                </div>
            </td>
        `;

        tbody.appendChild(row);
    });

    // Re-attach event listeners
    initializeZeroDayActions();
}

// Initialize Zero Day Actions
function initializeZeroDayActions() {
    const markVoteBtns = document.querySelectorAll('.mark-vote-btn');
    const undoVoteBtns = document.querySelectorAll('.undo-vote-btn');

    markVoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const voterId = e.currentTarget.getAttribute('data-voter-id');
            markVoterAsVoted(voterId);
        });
    });

    undoVoteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const voterId = e.currentTarget.getAttribute('data-voter-id');
            undoVoterVote(voterId);
        });
    });
}

// Mark Voter as Voted
function markVoterAsVoted(voterId) {
    const voter = zeroDayData.voters.find(v => v.id === voterId);
    if (voter) {
        voter.voteStatus = 'voted';
        updateZeroDayTable(zeroDayData.voters);
        updateZeroDayMetrics();
        showNotification(`Voter ${voter.name} marked as voted`, 'success');
    }
}

// Undo Voter Vote
function undoVoterVote(voterId) {
    const voter = zeroDayData.voters.find(v => v.id === voterId);
    if (voter) {
        voter.voteStatus = 'not-voted';
        updateZeroDayTable(zeroDayData.voters);
        updateZeroDayMetrics();
        showNotification(`Vote status undone for ${voter.name}`, 'info');
    }
}

// Update Zero Day Metrics
function updateZeroDayMetrics() {
    const totalVoters = zeroDayData.voters.length;
    const votedCount = zeroDayData.voters.filter(v => v.voteStatus === 'voted').length;
    const notVotedCount = totalVoters - votedCount;
    const turnoutRate = ((votedCount / totalVoters) * 100).toFixed(1);

    // Update metric values
    const metricValues = document.querySelectorAll('.metric-value');
    if (metricValues.length >= 4) {
        metricValues[0].textContent = totalVoters.toLocaleString();
        metricValues[1].textContent = votedCount.toLocaleString();
        metricValues[2].textContent = notVotedCount.toLocaleString();
        metricValues[3].textContent = `${turnoutRate}%`;
    }
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });

    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize Field Agent Filters
function initializeFieldAgentFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const action = e.target.textContent.trim();
            console.log(`Field Agent filter action: ${action}`);
            showViewMessage(`Applied ${action.toLowerCase()}`);
        });
    });
}

// Initialize Field Agent Table
function initializeFieldAgentTable() {
    console.log('Field Agent table initialized');
}

// Initialize Field Agent Actions
function initializeFieldAgentActions() {
    // View buttons
    const viewButtons = document.querySelectorAll('.agent-table .view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const agentId = row.querySelector('td:first-child').textContent;
            console.log(`Viewing details for agent ${agentId}`);
            showViewMessage(`Viewing details for ${agentId}`);
        });
    });

    // Edit buttons
    const editButtons = document.querySelectorAll('.agent-table .edit-btn');
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const agentId = row.querySelector('td:first-child').textContent;
            console.log(`Editing agent ${agentId}`);
            showViewMessage(`Editing ${agentId}`);
        });
    });

    // Call buttons
    const callButtons = document.querySelectorAll('.agent-table .call-btn');
    callButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const agentId = row.querySelector('td:first-child').textContent;
            console.log(`Calling agent ${agentId}`);
            showViewMessage(`Initiating call to ${agentId}`);
        });
    });
}

// Initialize View Switching for Field Agents
function initializeFieldAgentViewSwitching() {
    const viewSelect = document.getElementById('agentViewSelect');
    if (viewSelect) {
        viewSelect.addEventListener('change', (e) => {
            const selectedView = e.target.value;
            console.log(`Switching to ${selectedView} view for agents`);
            showViewMessage(`Switched to ${selectedView.replace('-', ' ')}`);
        });
    }
}

// Initialize Field Agent Column Toggle
function initializeFieldAgentColumnToggle() {
    const columnToggleButtons = document.querySelectorAll('.column-toggle-btn');
    
    const columnGroups = {
        'essential': ['Agent ID', 'Name', 'Status', 'Area', 'Last Activity'],
        'performance': ['Agent ID', 'Name', 'Status', 'Visits Today', 'Success Rate', 'Performance'],
        'location': ['Agent ID', 'Name', 'Status', 'Area', 'Current Location', 'Experience'],
        'all': ['Agent ID', 'Name', 'Status', 'Area', 'Last Activity', 'Phone', 'Visits Today', 'Success Rate', 'Current Location', 'Experience', 'Team Lead', 'Performance']
    };

    columnToggleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const group = e.target.getAttribute('data-group');
            
            // Remove active class from all buttons
            columnToggleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Show/hide columns based on group
            const table = document.querySelector('.agent-table');
            if (table) {
                const headers = table.querySelectorAll('th');
                const rows = table.querySelectorAll('tbody tr');
                
                headers.forEach((header, index) => {
                    const columnName = header.textContent.trim();
                    const shouldShow = columnGroups[group].includes(columnName) || columnName === 'Actions';
                    
                    if (shouldShow) {
                        header.classList.remove('hidden-col');
                        header.classList.add('visible-col');
                        rows.forEach(row => {
                            const cell = row.children[index];
                            if (cell) {
                                cell.classList.remove('hidden-col');
                                cell.classList.add('visible-col');
                            }
                        });
                    } else {
                        header.classList.remove('visible-col');
                        header.classList.add('hidden-col');
                        rows.forEach(row => {
                            const cell = row.children[index];
                            if (cell) {
                                cell.classList.remove('visible-col');
                                cell.classList.add('hidden-col');
                            }
                        });
                    }
                });
            }
            
            console.log(`Switched to ${group} column view`);
            showViewMessage(`Showing ${group} information`);
        });
    });
}

// Reports Page Functionality
function initializeReportsPage() {
    console.log('Initializing Reports page...');
    
    // Initialize category buttons
    initializeReportCategories();
    
    // Initialize report actions
    initializeReportActions();
    
    // Initialize search functionality
    initializeReportSearch();
}

function initializeReportCategories() {
    const viewButtons = document.querySelectorAll('.report-table .view-btn');
    const generateButtons = document.querySelectorAll('.report-table .action-btn:not(.view-btn)');
    
    // View report buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tableRow = this.closest('tr');
            const categoryName = tableRow.querySelector('.category-name').textContent;
            
            console.log(`Viewing ${categoryName} reports...`);
            showViewMessage(`Opening ${categoryName} reports...`);
            
            // Here you would typically navigate to a specific report category page
            setTimeout(() => {
                showViewMessage(`${categoryName} reports opened successfully`);
            }, 1000);
        });
    });
    
    // Generate report buttons
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tableRow = this.closest('tr');
            const categoryName = tableRow.querySelector('.category-name').textContent;
            
            console.log(`Generating ${categoryName} report...`);
            showViewMessage(`Generating ${categoryName} report...`);
            
            // Simulate report generation
            setTimeout(() => {
                showViewMessage(`${categoryName} report generated successfully`);
            }, 1500);
        });
    });
}

function initializeReportActions() {
    const viewButtons = document.querySelectorAll('.report-actions .view-btn');
    const downloadButtons = document.querySelectorAll('.report-actions .action-btn:not(.view-btn)');
    
    // View report buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reportItem = this.closest('.report-item');
            const reportTitle = reportItem.querySelector('h3').textContent;
            
            console.log(`Viewing report: ${reportTitle}`);
            showViewMessage(`Opening ${reportTitle}...`);
            
            // Here you would typically open a modal or navigate to report details
            setTimeout(() => {
                showViewMessage(`${reportTitle} opened successfully`);
            }, 1000);
        });
    });
    
    // Download report buttons
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reportItem = this.closest('.report-item');
            const reportTitle = reportItem.querySelector('h3').textContent;
            
            console.log(`Downloading report: ${reportTitle}`);
            showViewMessage(`Downloading ${reportTitle}...`);
            
            // Simulate download
            setTimeout(() => {
                showViewMessage(`${reportTitle} downloaded successfully`);
            }, 1500);
        });
    });
}

function initializeReportSearch() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const reportRows = document.querySelectorAll('.report-table tbody tr');
            const reportItems = document.querySelectorAll('.report-item');
            
            // Filter report table rows
            reportRows.forEach(row => {
                const categoryName = row.querySelector('.category-name').textContent.toLowerCase();
                const description = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
                const status = row.querySelector('.status-badge').textContent.toLowerCase();
                
                if (categoryName.includes(searchTerm) || description.includes(searchTerm) || status.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            
            // Filter recent report items
            reportItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const type = item.querySelector('.report-type').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || type.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// Login Authentication Logic
function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loginButton = document.getElementById('loginButton');

    // Demo credentials
    const validCredentials = {
        'admin': 'password123',
        'user': 'demo123',
        'manager': 'test456'
    };

    // Password toggle functionality
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Update icon
            const icon = this.querySelector('.toggle-icon');
            if (type === 'text') {
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                `;
            } else {
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                `;
            }
        });
    }

    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            // Validate inputs
            if (!username || !password) {
                showLoginError('Please fill in all fields');
                return;
            }

            // Show loading state
            showLoadingState();

            // Simulate authentication delay
            setTimeout(() => {
                if (authenticateUser(username, password)) {
                    // Store login state
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username);
                    if (rememberMe) {
                        localStorage.setItem('rememberMe', 'true');
                    }

                    // Show success and redirect
                    showLoginSuccess();
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                } else {
                    hideLoadingState();
                    showLoginError('Invalid username or password');
                }
            }, 1500);
        });
    }

    // Authentication function
    function authenticateUser(username, password) {
        return validCredentials[username] === password;
    }

    // Show loading state
    function showLoadingState() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('show');
        }
        if (loginButton) {
            loginButton.disabled = true;
            loginButton.querySelector('.button-text').textContent = 'Signing in...';
        }
    }

    // Hide loading state
    function hideLoadingState() {
        if (loadingOverlay) {
            loadingOverlay.classList.remove('show');
        }
        if (loginButton) {
            loginButton.disabled = false;
            loginButton.querySelector('.button-text').textContent = 'Sign In';
        }
    }

    // Show error message
    function showLoginError(message) {
        // Remove existing error messages
        const existingError = document.querySelector('.login-error');
        if (existingError) {
            existingError.remove();
        }

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'login-error';
        errorDiv.innerHTML = `
            <div class="error-content">
                <svg class="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${message}</span>
            </div>
        `;

        // Add error styles
        errorDiv.style.cssText = `
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            animation: slideIn 0.3s ease;
        `;

        // Insert error message
        const form = document.querySelector('.login-form');
        if (form) {
            form.insertBefore(errorDiv, form.firstChild);
        }

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    errorDiv.remove();
                }, 300);
            }
        }, 5000);
    }

    // Show success message
    function showLoginSuccess() {
        const successDiv = document.createElement('div');
        successDiv.className = 'login-success';
        successDiv.innerHTML = `
            <div class="success-content">
                <svg class="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Login successful! Redirecting...</span>
            </div>
        `;

        successDiv.style.cssText = `
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #16a34a;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            animation: slideIn 0.3s ease;
        `;

        const form = document.querySelector('.login-form');
        if (form) {
            form.insertBefore(successDiv, form.firstChild);
        }
    }

    // Check if user is already logged in
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            // Redirect to dashboard if already logged in
            window.location.href = 'index.html';
        }
    }

    // Initialize login check
    checkLoginStatus();
}

// Logout functionality
function initializeLogout() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // If not on login page and not logged in, redirect to login
    if (!window.location.pathname.includes('login.html') && isLoggedIn !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Add logout functionality to logout buttons
    const logoutButtons = document.querySelectorAll('a[href="#"]');
    logoutButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        if (buttonText === 'Logout') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                performLogout();
            });
        }
    });
}

function performLogout() {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('rememberMe');
    
    // Show logout confirmation
    if (confirm('Are you sure you want to logout?')) {
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

// Add CSS animations for error/success messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
    
    .error-content, .success-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .error-icon, .success-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
    }
`;
document.head.appendChild(style);

// Sample reports data
const reportsData = {
    categories: [
        {
            id: 'voter-analytics',
            title: 'Voter Analytics',
            description: 'Voter engagement, demographics, and contact statistics',
            icon: 'users'
        },
        {
            id: 'event-performance',
            title: 'Event Performance',
            description: 'Campaign events attendance and impact analysis',
            icon: 'calendar'
        },
        {
            id: 'pledge-tracking',
            title: 'Pledge Tracking',
            description: 'Support levels and pledge conversion metrics',
            icon: 'check-circle'
        },
        {
            id: 'call-centre-metrics',
            title: 'Call Centre Metrics',
            description: 'Call volume, success rates, and agent performance',
            icon: 'phone'
        },
        {
            id: 'field-operations',
            title: 'Field Operations',
            description: 'Agent productivity and territory coverage analysis',
            icon: 'map'
        },
        {
            id: 'election-day',
            title: 'Election Day',
            description: 'Voting patterns and turnout analysis',
            icon: 'vote'
        }
    ],
    recentReports: [
        {
            id: 1,
            title: 'Weekly Voter Engagement Report',
            date: 'Dec 15, 2024',
            type: 'Voter Analytics',
            icon: 'chart'
        },
        {
            id: 2,
            title: 'Campaign Events Summary',
            date: 'Dec 14, 2024',
            type: 'Event Performance',
            icon: 'calendar'
        },
        {
            id: 3,
            title: 'Call Centre Performance',
            date: 'Dec 13, 2024',
            type: 'Call Centre Metrics',
            icon: 'phone'
        }
    ]
};

