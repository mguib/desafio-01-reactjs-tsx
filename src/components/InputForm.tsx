import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

// import styles from './InputForm.module.css'

interface InputFormProps{
    addTask: (task: string) => void;
}


export function InputForm({addTask}: InputFormProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask(){
        if(!task) return;

        addTask(task)
        setTask('')
    }

    function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
        setTask(event.target.value)
    }
    
    return (
        <div className="-mt-14 flex">
            <input
                className="rounded-lg border bg-gray-500 text-gray-100 border-gray-700 w-[638px] p-4 mr-2 "
                type="text"
                value={task}
                onChange={handleNewTaskChange}
                placeholder="Adicione uma nova tarefa"
            />
            <button 
                className="rounded-lg border-none flex bg-blue-500 text-gray-100 p-4 items-center justify-center"
                type='button'
                onClick={handleAddNewTask}
            >
                <strong className='mr-[.5rem]'>Criar</strong>
                <PlusCircle size={18} />
            </button>
        </div>
    )
}