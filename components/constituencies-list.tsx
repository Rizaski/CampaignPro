import { Card } from "@/components/ui/card"

const constituencies = [
  { name: "Malé", volunteers: 342, events: 12, contacts: 8934 },
  { name: "Addu City", volunteers: 198, events: 8, contacts: 5621 },
  { name: "Fuvahmulah", volunteers: 156, events: 6, contacts: 4102 },
  { name: "Kulhudhuffushi", volunteers: 134, events: 5, contacts: 3845 },
]

export function ConstituenciesList() {
  return (
    <Card className="p-3 md:p-6">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h3 className="text-xs font-semibold text-foreground">Top Constituencies</h3>
        <button className="text-[10px] text-primary font-semibold hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto max-w-full">
        <table className="w-full min-w-0">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Constituency
              </th>
              <th className="text-right py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Volunteers
              </th>
              <th className="text-right py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Events
              </th>
              <th className="text-right py-2 md:py-3 px-1 md:px-2 text-[10px] font-semibold text-muted-foreground">
                Contacts
              </th>
            </tr>
          </thead>
          <tbody>
            {constituencies.map((constituency) => (
              <tr
                key={constituency.name}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs font-medium text-foreground">{constituency.name}</td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-right text-foreground">
                  {constituency.volunteers}
                </td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-right text-foreground">{constituency.events}</td>
                <td className="py-2 md:py-3 px-1 md:px-2 text-xs text-right text-foreground">
                  {constituency.contacts.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
