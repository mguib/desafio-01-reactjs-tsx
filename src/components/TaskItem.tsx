import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import classNames from 'classnames'
import { Task } from "./TaskList";



interface TaskItemProps{
    task: Task;
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskItem({task, removeTask, toggleTaskDone}: TaskItemProps) {


    return (
        <div className="flex items-start justify-between w-[736px] box-border py-4 bg-gray-500 rounded-lg px-4 mt-3">
            <div 
                onClick={() => toggleTaskDone(task.id)}
                className={classNames("w-6 h-6 mr-3 border-2 border-blue-400 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-gray-400 transition-colors",{
                    "bg-purple-500 border-none": task.done,
            })}>
                {task.done && (
                    <Check size={16} />
                )}
                
            </div>
            <p 
                className={classNames("text-gray-100",{
                    "text-danger-500 line-through" : task.done
                })}
            >
                {task.title}
            </p>
            <button
                type="button"
                className="hover:text-danger-500 transition-colors"
                onClick={() => removeTask(task.id)}
            >
                <Trash
                    size={24}
                />
            </button>
            
        </div>
    )
}