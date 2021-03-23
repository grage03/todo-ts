import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

import { TodoType } from '../interfaces';

export const Todo: React.FunctionComponent = () => {
    const [ todoList, setTodoList ] = useState<TodoType[]>([]);

    const addTodoItem = (title: string): void => {
        const newTodoItem: TodoType = {
            id: Date.now(),
            text: title,
            isCompleted: false
        };

        setTodoList(prevState => {
            return [newTodoItem, ...prevState]
        });
    };

    const changeCompleteTodoItem = (id: number): void => {
        setTodoList(prevState => {
            return prevState.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
        });
    };

    const deleteTodoItem = (id: number): void => {
        setTodoList(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    };

    return (
        <Container className="mt-3" style={{width: '1000px'}}>
            <TodoInput addTodoItem={addTodoItem} />
            <TodoList 
                todoList={todoList} 
                changeCompleteTodoItem={changeCompleteTodoItem} 
                deleteTodoItem={deleteTodoItem}
            />
        </Container>
    );
};
