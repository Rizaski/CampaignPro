import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const voters = [
  {
    id: "V001234",
    name: "Ahmed Ibrahim",
    constituency: "Malé",
    age: 34,
    phone: "+960 123-4567",
    status: "Pledged Support",
    lastContact: "2024-01-15",
    priority: "High"
  },
  {
    id: "V001235", 
    name: "Aisha Mohamed",
    constituency: "Addu City",
    age: 28,
    phone: "+960 234-5678",
    status: "Contacted",
    lastContact: "2024-01-14",
    priority: "Medium"
  },
  {
    id: "V001236",
    name: "Hassan Ali",
    constituency: "Fuvahmulah", 
    age: 42,
    phone: "+960 345-6789",
    status: "New Voter",
    lastContact: "Never",
    priority: "High"
  },
  {
    id: "V001237",
    name: "Fatima Ahmed",
    constituency: "Kulhudhuffushi",
    age: 31,
    phone: "+960 456-7890", 
    status: "Voted Early",
    lastContact: "2024-01-13",
    priority: "Low"
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
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pledged Support":
      return "bg-chart-2/10 text-chart-2"
    case "Contacted":
      return "bg-chart-4/10 text-chart-4"
    case "New Voter":
      return "bg-accent/10 text-accent"
    case "Voted Early":
      return "bg-chart-5/10 text-chart-5"
    case "Not Contacted":
      return "bg-muted/10 text-muted-foreground"
    default:
      return "bg-muted/10 text-muted-foreground"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-destructive/10 text-destructive"
    case "Medium":
      return "bg-chart-3/10 text-chart-3"
    case "Low":
      return "bg-muted/10 text-muted-foreground"
    default:
      return "bg-muted/10 text-muted-foreground"
  }
}

export function VoterList() {
  return (
    <Card className="p-3 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-foreground">Voter Database</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs h-8">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Export
          </Button>
          <Button size="sm" className="text-xs h-8">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Voter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Voter ID
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Name
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Constituency
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Age
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Status
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Priority
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Last Contact
              </th>
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {voters.map((voter) => (
              <tr
                key={voter.id}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">
                  {voter.id}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">
                  {voter.name}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-foreground">
                  {voter.constituency}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-foreground">
                  {voter.age}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium ${getStatusColor(voter.status)}`}>
                    {voter.status}
                  </span>
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium ${getPriorityColor(voter.priority)}`}>
                    {voter.priority}
                  </span>
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-muted-foreground">
                  {voter.lastContact}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="text-[10px] text-muted-foreground">
          Showing 6 of 45,892 voters
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs h-8">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="text-xs h-8">
            Next
          </Button>
        </div>
      </div>
    </Card>
  )
}
