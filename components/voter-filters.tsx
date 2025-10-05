"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function VoterFilters() {
  const [selectedConstituency, setSelectedConstituency] = useState("all")
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const constituencies = [
    "All Constituencies",
    "Malé",
    "Addu City", 
    "Fuvahmulah",
    "Kulhudhuffushi",
    "Thinadhoo",
    "Eydhafushi"
  ]

  const ageGroups = [
    "All Ages",
    "18-25",
    "26-35", 
    "36-45",
    "46-55",
    "55+"
  ]

  const statuses = [
    "All Status",
    "New Voter",
    "Contacted",
    "Pledged Support",
    "Voted Early",
    "Not Contacted"
  ]

  return (
    <Card className="p-4">
      <h3 className="text-xs font-semibold text-foreground mb-4">Filters</h3>
      
      <div className="space-y-4">
        {/* Constituency Filter */}
        <div>
          <label className="text-[10px] font-medium text-muted-foreground mb-2 block">
            Constituency
          </label>
          <select
            value={selectedConstituency}
            onChange={(e) => setSelectedConstituency(e.target.value)}
            className="w-full text-xs border border-border rounded-md px-3 py-2 bg-background"
          >
            {constituencies.map((constituency) => (
              <option key={constituency} value={constituency.toLowerCase().replace(" ", "-")}>
                {constituency}
              </option>
            ))}
          </select>
        </div>

        {/* Age Group Filter */}
        <div>
          <label className="text-[10px] font-medium text-muted-foreground mb-2 block">
            Age Group
          </label>
          <select
            value={selectedAgeGroup}
            onChange={(e) => setSelectedAgeGroup(e.target.value)}
            className="w-full text-xs border border-border rounded-md px-3 py-2 bg-background"
          >
            {ageGroups.map((age) => (
              <option key={age} value={age.toLowerCase().replace(" ", "-")}>
                {age}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-[10px] font-medium text-muted-foreground mb-2 block">
            Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full text-xs border border-border rounded-md px-3 py-2 bg-background"
          >
            {statuses.map((status) => (
              <option key={status} value={status.toLowerCase().replace(" ", "-")}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 text-xs h-8"
            onClick={() => {
              setSelectedConstituency("all")
              setSelectedAgeGroup("all")
              setSelectedStatus("all")
            }}
          >
            Apply
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 text-xs h-8"
            onClick={() => {
              setSelectedConstituency("all")
              setSelectedAgeGroup("all")
              setSelectedStatus("all")
            }}
          >
            Clear
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="pt-4 border-t border-border">
          <div className="text-[10px] text-muted-foreground mb-2">Quick Stats</div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Total Voters:</span>
              <span className="font-medium">45,892</span>
            </div>
            <div className="flex justify-between">
              <span>Filtered:</span>
              <span className="font-medium text-primary">12,456</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
