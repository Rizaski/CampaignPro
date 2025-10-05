import { DashboardHeader } from "@/components/dashboard-header"
import { MobileNav } from "@/components/mobile-nav"
import { Card } from "@/components/ui/card"

export default function VoterDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Desktop Sidebar - Hidden on mobile */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
            <a
              href="/voters"
              className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-xs"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Voter Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Campaign Events
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pledge Management
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Centre
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Communication Management
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Field Agents
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Reports
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Zero Day
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>

            <div className="pt-4 mt-4 border-t border-primary-foreground/20">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-xs transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </div>
          </nav>
        </aside>

        {/* Tablet Sidebar - Hidden on mobile and desktop */}
        <aside className="hidden md:block lg:hidden md:w-64 md:fixed md:top-0 md:left-0 md:h-screen bg-primary text-primary-foreground overflow-y-auto z-30">
          <div className="p-4">
            <h1 className="text-base font-bold text-balance">Campaign Manager</h1>
            <p className="text-[9px] text-primary-foreground/80 mt-1">Maldives 2024</p>
          </div>

          <nav className="px-2 space-y-1 pb-4">
            <a
              href="/"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
            <a
              href="/voters"
              className="flex items-center gap-2 px-2 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground font-medium text-[10px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Voters
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Events
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Reports
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-[10px] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              </svg>
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 lg:ml-64 w-full min-h-screen pr-8 main-content-container">
          <DashboardHeader />

          <div className="p-4 md:p-6 space-y-6 pb-20 md:pb-6 lg:pb-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xs font-semibold text-foreground mb-4">Voter Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                  <Card className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-xs md:text-2xl font-bold text-foreground">45,892</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Total Voters</p>
                      <p className="text-[10px] text-accent font-semibold">+2.3K</p>
                    </div>
                  </Card>

                  <Card className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-xs md:text-2xl font-bold text-foreground">1,247</p>
                      <p className="text-[10px] text-muted-foreground font-medium">New Registrations</p>
                      <p className="text-[10px] text-accent font-semibold">+12%</p>
                    </div>
                  </Card>

                  <Card className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-chart-4/10 text-chart-4">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-xs md:text-2xl font-bold text-foreground">2,156</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Contacted Today</p>
                      <p className="text-[10px] text-accent font-semibold">+8%</p>
                    </div>
                  </Card>

                  <Card className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-chart-2/10 text-chart-2">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-xs md:text-2xl font-bold text-foreground">38,421</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Pledged Support</p>
                      <p className="text-[10px] text-accent font-semibold">+15%</p>
                    </div>
                  </Card>

                  <Card className="p-3 md:p-4">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center bg-chart-5/10 text-chart-5">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-0.5 md:space-y-1">
                      <p className="text-xs md:text-2xl font-bold text-foreground">12,847</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Voted Early</p>
                      <p className="text-[10px] text-accent font-semibold">+22%</p>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-3 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-semibold text-foreground">Voter Database</h3>
                  <div className="flex gap-2">
                    <button className="text-xs border border-border rounded-md px-3 py-1 bg-background hover:bg-muted">
                      Export
                    </button>
                    <button className="text-xs bg-primary text-primary-foreground rounded-md px-3 py-1 hover:bg-primary/90">
                      Add Voter
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">Voter ID</th>
                        <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">Name</th>
                        <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">Constituency</th>
                        <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">Status</th>
                        <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">V001234</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">Ahmed Ibrahim</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-foreground">Malé</td>
                        <td className="py-2 md:py-3 px-1 md:px-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-chart-2/10 text-chart-2">
                            Pledged Support
                          </span>
                        </td>
                        <td className="py-2 md:py-3 px-1 md:px-2">
                          <div className="flex gap-1">
                            <button className="h-6 w-6 p-0 hover:bg-muted rounded">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </button>
                            <button className="h-6 w-6 p-0 hover:bg-muted rounded">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">V001235</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">Aisha Mohamed</td>
                        <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-foreground">Addu City</td>
                        <td className="py-2 md:py-3 px-1 md:px-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-chart-4/10 text-chart-4">
                            Contacted
                          </span>
                        </td>
                        <td className="py-2 md:py-3 px-1 md:px-2">
                          <div className="flex gap-1">
                            <button className="h-6 w-6 p-0 hover:bg-muted rounded">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </button>
                            <button className="h-6 w-6 p-0 hover:bg-muted rounded">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="text-[10px] text-muted-foreground">
                    Showing 2 of 45,892 voters
                  </div>
                  <div className="flex gap-2">
                    <button className="text-xs border border-border rounded-md px-3 py-1 bg-background hover:bg-muted">
                      Previous
                    </button>
                    <button className="text-xs border border-border rounded-md px-3 py-1 bg-background hover:bg-muted">
                      Next
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  )
}
