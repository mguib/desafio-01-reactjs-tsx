import { Header } from './components/Header'
import { InputForm } from './components/InputForm'

import clipboardImg from './assets/Clipboard.svg';

import './global.css';
// import styles from './App.module.css';
import { TaskItem } from './components/TaskItem';
import { useState } from 'react';
import { Task, TaskList } from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskExists, setTaskExists] = useState(false);
  const [tasksDone, setTasksDone] = useState(0);

  function handleAddTask(newTaskTitle: string) {
    const taskWithSameTitle = tasks.find(task => task.title === newTaskTitle)
    if (taskWithSameTitle) {
      return alert(`Task já encontrada. Voce não pode cadastrar uma task com o mesmo nome`)
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTask => [...oldTask, newTask])
    setTaskExists(true)
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))

    const searhItem = updatedTasks.find(item => item.id === id);
    if (!searhItem) return

    searhItem.done = !searhItem.done
    setTasks(updatedTasks)

    const tasksDone = updatedTasks.filter(item => item.done);

    setTasksDone(tasksDone.length)
  }

  function handleRemoveTask(id: number) {
    
    setTasks(oldState => oldState.filter(
      task => task.id != id
    ))
    
    if(tasks.length <= 1){
      setTaskExists(false)
    }

    if(!tasksDone){
      setTasksDone(tasksDone)
    }else{
      setTasksDone(tasksDone - 1)
    }

  }

  return (
    <div>
      <Header />

      <div className="max-w-6xl m-8 px-4 grid items-start justify-center">
        <InputForm addTask={handleAddTask} />
        <main>
          <div className="flex mt-12 mb-3 text-white justify-between">
            <strong className="text-blue-400">Tarefas criadas <strong className='text-gray-200 ml-2 border rounded-full shadow-inner bg-gray-400 border-none px-[0.50rem] py-[.03rem]'>
              {
                tasks.length
              }</strong></strong>
            <strong className="text-purple-400">Concluídas <strong className='text-gray-200 ml-2 border rounded-full shadow-inner bg-gray-400 border-none px-[0.50rem] py-[.03rem]'>
              {
                // tasks.length <= 0 ? 0 : tasksDone
                taskExists === false ? 0 : tasksDone
              }
            </strong></strong>

          </div>

          <div className="flex flex-col scroll-m-0">
            {!taskExists ? (
              <div className="flex flex-col items-center justify-center border-t-2 rounded border-t-gray-400 mt-6 py-16">
                <img src={clipboardImg} alt="" className='w-12 h-12 mb-4' />
                <strong className='text-gray-300'>Você ainda não tem tarefas cadastradas</strong><p></p>
                <p className='text-gray-300'>Crie tarefas e organize seus itens a fazer</p>
              </div>
            ) :
              <div>
                <TaskList
                  tasks={tasks}
                  toggleTaskDone={handleToggleTaskDone}
                  removeTask={handleRemoveTask}
                />

              </div>
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default App