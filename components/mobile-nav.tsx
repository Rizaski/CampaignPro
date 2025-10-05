"use client"

import { useState } from "react"

export function MobileNav() {
  const [active, setActive] = useState("dashboard")

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "home", href: "/" },
    { id: "voters", label: "Voters", icon: "user", href: "/voters" },
    { id: "events", label: "Events", icon: "calendar", href: "#" },
    { id: "reports", label: "Reports", icon: "chart", href: "#" },
    { id: "more", label: "More", icon: "menu", href: "#" },
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-8 bg-card border-t border-border z-40 shadow-lg">
      <div className="grid grid-cols-5 gap-1 p-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActive(item.id)}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              active === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.icon === "home" && (
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
            {item.icon === "user" && (
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
            {item.icon === "calendar" && (
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
            {item.icon === "chart" && (
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            )}
            {item.icon === "menu" && (
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
