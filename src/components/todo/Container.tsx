import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TodoComponent from './Component';

export default function TodoContainer() {
    const navigate = useNavigate();
    const token = localStorage.getItem('access_token');
    const [todoTitle, setTodoTitle] = useState('');
    const [list, setList] = useState([]);
    const [isFix, setIsFix] = useState(-1);
    const [fixTitle, setFixTitle] = useState('');

    const callTodo = async () => {
        try {
            const response = await axios.get('https://www.pre-onboarding-selection-task.shop/todos', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTodo = async () => {
        try {
            const response = await axios.post(
                'https://www.pre-onboarding-selection-task.shop/todos',
                { todo: todoTitle },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            callTodo();
        } catch (error) {
            console.error(error);
        }
    };

    const titleHandle = (e: any) => {
        setTodoTitle(e.target.value);
    };

    const todoUpdate = async (id: number, todo: string, isCompleted: boolean) => {
        try {
            const response = await axios.put(
                `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
                { todo, isCompleted },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            callTodo();
        } catch (error) {
            console.error(error);
        }
    };

    const todoDelete = async (id: number) => {
        try {
            const response = await axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            callTodo();
        } catch (error) {
            console.error(error);
        }
    };

    const fixHandler = (index: number) => {
        setIsFix(index);
        setFixTitle('');
    };

    const fixTitleHandler = (e: any) => {
        setFixTitle(e.target.value);
    };

    useEffect(() => {
        if (!token) navigate('/signin');
        callTodo();
    }, []);

    return (
        <TodoComponent
            titleHandle={titleHandle}
            addTodo={addTodo}
            list={list}
            todoUpdate={todoUpdate}
            fixHandler={fixHandler}
            isFix={isFix}
            fixTitleHandler={fixTitleHandler}
            fixTitle={fixTitle}
            todoDelete={todoDelete}
        />
    );
}
