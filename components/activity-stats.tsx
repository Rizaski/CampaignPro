import { Card } from "@/components/ui/card"

const activities = [
  { label: "Door-to-door", count: 234, color: "bg-primary" },
  { label: "Phone banking", count: 156, color: "bg-accent" },
  { label: "Social media", count: 89, color: "bg-chart-4" },
]

export function ActivityStats() {
  return (
    <Card className="p-3 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <h3 className="text-xs font-semibold text-foreground">Campaign Activities</h3>
        <button className="text-[10px] text-primary font-semibold hover:underline">View All</button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {activities.map((activity) => (
          <div key={activity.label} className="space-y-1.5 md:space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-foreground font-medium">{activity.label}</span>
              <span className="text-xs text-foreground font-bold">{activity.count}</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className={`h-full ${activity.color} rounded-full transition-all`}
                style={{ width: `${(activity.count / 250) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">Total Activities</span>
          <span className="text-xs font-bold text-foreground">479</span>
        </div>
      </div>
    </Card>
  )
}
