"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { name: "Week 1", value: 420 },
  { name: "Week 2", value: 680 },
  { name: "Week 3", value: 520 },
  { name: "Week 4", value: 890 },
]

export function CampaignChart() {
  return (
    <Card className="p-3 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <h3 className="text-xs font-semibold text-foreground">Volunteer Engagement</h3>
        <select className="text-[10px] border border-border rounded-md px-2 py-1 bg-background">
          <option>Last 4 Weeks</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={160} className="md:h-[200px]">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
            stroke="hsl(var(--border))"
          />
          <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} stroke="hsl(var(--border))" />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-4 gap-2 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
        {data.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-xs font-bold text-foreground">{item.value}</p>
            <p className="text-[10px] text-muted-foreground">{item.name}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
