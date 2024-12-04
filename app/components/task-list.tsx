import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function TaskList() {
  const tasks = [
    { id: 1, description: "Feed livestock", completed: true },
    { id: 2, description: "Check irrigation system", completed: false },
    { id: 3, description: "Schedule equipment maintenance", completed: false },
    { id: 4, description: "Order seeds for next season", completed: false },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2 mb-2">
            <Checkbox id={`task-${task.id}`} checked={task.completed} />
            <label
              htmlFor={`task-${task.id}`}
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                task.completed ? 'line-through text-muted-foreground' : ''
              }`}
            >
              {task.description}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

