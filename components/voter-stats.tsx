import { Card } from "@/components/ui/card"

const voterStats = [
  { 
    label: "Total Voters", 
    value: "45,892", 
    change: "+2.3K", 
    icon: "users",
    color: "bg-primary/10 text-primary"
  },
  { 
    label: "New Registrations", 
    value: "1,247", 
    change: "+12%", 
    icon: "user-plus",
    color: "bg-accent/10 text-accent"
  },
  { 
    label: "Contacted Today", 
    value: "2,156", 
    change: "+8%", 
    icon: "phone",
    color: "bg-chart-4/10 text-chart-4"
  },
  { 
    label: "Pledged Support", 
    value: "38,421", 
    change: "+15%", 
    icon: "hand",
    color: "bg-chart-2/10 text-chart-2"
  },
  { 
    label: "Voted Early", 
    value: "12,847", 
    change: "+22%", 
    icon: "check",
    color: "bg-chart-5/10 text-chart-5"
  },
]

export function VoterStats() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-foreground mb-4">Voter Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {voterStats.map((stat) => (
          <Card key={stat.label} className="p-3 md:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2 md:mb-3">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                {stat.icon === "users" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                {stat.icon === "user-plus" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                )}
                {stat.icon === "phone" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                )}
                {stat.icon === "hand" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                )}
                {stat.icon === "check" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <p className="text-xs md:text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-[10px] text-accent font-semibold">{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
