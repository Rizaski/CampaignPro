import { DashboardHeader } from "@/components/dashboard-header"
import { MobileNav } from "@/components/mobile-nav"

export default function PledgeManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block lg:w-64 lg:fixed lg:top-0 lg:left-0 lg:h-screen bg-primary text-primary-foreground overflow-y-auto z-30">
          <div className="p-6">
            <h1 className="text-lg font-bold text-balance">Campaign Manager</h1>
            <p className="text-[10px] text-primary-foreground/80 mt-1">Maldives 2024</p>
          </div>

          <nav className="px-3 space-y-1 pb-6">
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>
            <a
              href="/voters"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Voter Database
            </a>
            <a
              href="/events"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Campaign Events
            </a>
            <a
              href="/pledge-management"
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-xs"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pledge Management
            </a>
            <a
              href="/call-centre"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Centre
            </a>
            <a
              href="/field-agent"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Field Agents
            </a>
            <a
              href="/zero-day"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Zero Day
            </a>
            <a
              href="/reports"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
            <div className="pt-4 mt-4 border-t border-primary-foreground/20">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </a>
            </div>
          </nav>
        </aside>

        {/* Tablet Sidebar */}
        <aside className="hidden md:block lg:hidden md:w-64 md:fixed md:top-0 md:left-0 md:h-screen bg-primary text-primary-foreground overflow-y-auto z-30">
          <div className="p-4">
            <h1 className="text-base font-bold text-balance">Campaign Manager</h1>
            <p className="text-[9px] text-primary-foreground/80 mt-1">Maldives 2024</p>
          </div>
          <nav className="px-2 space-y-1 pb-4">
            <a href="/" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>
            <a href="/voters" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Database
            </a>
            <a href="/events" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Events
            </a>
            <a href="/pledge-management" className="flex items-center gap-2 px-2 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-[10px]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pledges
            </a>
            <a href="/call-centre" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Calls
            </a>
            <a href="/field-agent" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Agents
            </a>
            <a href="/zero-day" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Zero Day
            </a>
            <a href="/reports" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </a>
            <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 lg:ml-64 w-full min-h-screen pr-8 main-content-container">
          <DashboardHeader />

          <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6 lg:pb-6">
            {/* Page Title */}
            <div className="page-title">
              <h1 className="text-2xl font-bold text-gray-900">Pledge Management</h1>
              <p className="text-gray-600 mt-1">Track and manage voter pledges and commitments</p>
            </div>

            {/* Metrics Section */}
            <div className="metrics-section">
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon strong-support">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">1,247</div>
                    <div className="metric-label">Strong Support</div>
                    <div className="metric-change positive">+12%</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon positive">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">892</div>
                    <div className="metric-label">Positive</div>
                    <div className="metric-change positive">+8%</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon negative">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h1m4 0h1m-6 4h.01M19 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">156</div>
                    <div className="metric-label">Negative</div>
                    <div className="metric-change negative">-3%</div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon undecided">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">423</div>
                    <div className="metric-label">Undecided</div>
                    <div className="metric-change neutral">+2%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Container */}
            <div className="filter-container">
              <div className="filter-section">
                <div className="filter-group">
                  <label className="filter-label">Pledge Status</label>
                  <select className="filter-select">
                    <option value="">All Status</option>
                    <option value="strong-support">Strong Support</option>
                    <option value="positive">Positive</option>
                    <option value="negative">Negative</option>
                    <option value="undecided">Undecided</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Constituency</label>
                  <select className="filter-select">
                    <option value="">All Constituencies</option>
                    <option value="male">Male</option>
                    <option value="addu">Addu</option>
                    <option value="kulhudhuffushi">Kulhudhuffushi</option>
                  </select>
                </div>
                <div className="filter-group">
                  <label className="filter-label">Sort by</label>
                  <select className="filter-select">
                    <option value="name">Name</option>
                    <option value="pledge">Pledge Status</option>
                    <option value="date">Date</option>
                    <option value="constituency">Constituency</option>
                  </select>
                </div>
              </div>
              <div className="filter-actions">
                <button className="filter-btn primary">Apply Filters</button>
                <button className="filter-btn">Clear</button>
              </div>
            </div>

            {/* Pledge Table */}
            <div className="constituencies-card">
              <div className="constituencies-header">
                <h2 className="constituencies-title">Pledge Overview</h2>
                <div className="header-actions">
                  <button className="view-all-btn icon-only" title="Export Data">
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <button className="view-all-btn icon-only" title="Add New Pledge">
                    <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="table-container">
                <table className="voter-table">
                  <thead>
                    <tr>
                      <th className="visible-col">Voter ID</th>
                      <th className="visible-col">Full Name</th>
                      <th className="visible-col">Constituency</th>
                      <th className="visible-col">Pledge Status</th>
                      <th className="visible-col">Date</th>
                      <th className="actions-col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="visible-col">V001</td>
                      <td className="visible-col">Ahmed Ali</td>
                      <td className="visible-col">Male</td>
                      <td className="visible-col">
                        <span className="pledge-badge strong-support">Strong Support</span>
                      </td>
                      <td className="visible-col">Dec 10, 2024</td>
                      <td className="actions-col">
                        <div className="action-buttons">
                          <button className="action-btn view-btn" title="View Details">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="action-btn edit-btn" title="Edit Pledge">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="action-btn delete-btn" title="Delete Pledge">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="visible-col">V002</td>
                      <td className="visible-col">Fatima Hassan</td>
                      <td className="visible-col">Addu</td>
                      <td className="visible-col">
                        <span className="pledge-badge positive">Positive</span>
                      </td>
                      <td className="visible-col">Dec 9, 2024</td>
                      <td className="actions-col">
                        <div className="action-buttons">
                          <button className="action-btn view-btn" title="View Details">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="action-btn edit-btn" title="Edit Pledge">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button className="action-btn delete-btn" title="Delete Pledge">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-footer">
                <div className="pagination-info">Showing 1-10 of 2,718 pledges</div>
                <div className="pagination-controls">
                  <button className="pagination-btn icon-only" title="Previous Page">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="pagination-page">1 of 272</span>
                  <button className="pagination-btn icon-only" title="Next Page">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}
