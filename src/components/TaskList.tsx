import { TaskItem } from "./TaskItem";

export interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
    return (

        <div>
            {
                tasks.map(item => {
                    return (
                        <TaskItem
                            key={item.id}
                            toggleTaskDone={toggleTaskDone}
                            removeTask={removeTask}
                            task={item}
                        />
                    )
                })
            }
        </div>


    )
}