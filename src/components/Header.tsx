// import styles from './Header.module.css';

import todoLogo from '../assets/logo-todo.svg';

export function Header(){
    return(
        <header className="bg-gray-700 flex w-full justify-center items-center pt-8 pb-12">
            <img src={todoLogo} alt="Logotipo do TodoList" className='h-12 mr-[.75rem] '/>
            <strong className='text-5xl text-blue-400'>
                to
            </strong>
            <strong className='text-5xl text-purple-400'>
                do
            </strong>
        </header>

    )
}