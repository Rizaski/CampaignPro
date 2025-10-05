import { Card } from "@/components/ui/card"

const metrics = [
  { label: "Active Volunteers", value: "1,247", change: "+12%", icon: "users" },
  { label: "Upcoming Events", value: "23", change: "+5", icon: "calendar" },
  { label: "Voter Contacts", value: "45,892", change: "+2.3K", icon: "phone" },
  { label: "Donations", value: "₨ 2.4M", change: "+18%", icon: "money" },
  { label: "Constituencies", value: "87", change: "100%", icon: "map" },
]

export function MetricsGrid() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-foreground mb-4">Campaign Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-3 md:p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2 md:mb-3">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                  metric.icon === "users"
                    ? "bg-primary/10 text-primary"
                    : metric.icon === "calendar"
                      ? "bg-accent/10 text-accent"
                      : metric.icon === "phone"
                        ? "bg-chart-4/10 text-chart-4"
                        : metric.icon === "money"
                          ? "bg-chart-2/10 text-chart-2"
                          : "bg-chart-5/10 text-chart-5"
                }`}
              >
                {metric.icon === "users" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                {metric.icon === "calendar" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {metric.icon === "phone" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                )}
                {metric.icon === "money" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {metric.icon === "map" && (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <p className="text-xs md:text-2xl font-bold text-foreground">{metric.value}</p>
              <p className="text-[10px] text-muted-foreground font-medium">{metric.label}</p>
              <p className="text-[10px] text-accent font-semibold">{metric.change}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
