import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

import { TodoListProps } from '../interfaces';
import { ModalTodoItemDelete } from './ModalTodoItemDelete';

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todoList, changeCompleteTodoItem, deleteTodoItem }) => {
    const [ showModalTodoItemDelete, setShowModalTodoItemDelete ] = useState<boolean>(false);
    const [ currentTodoItemId, setCurrentTodoItemId ] = useState<number>(0);
        
    const 
        completeTodoItem = todoList.filter(item => item.isCompleted),
        nonCompleteTodoItem = todoList.filter(item => !item.isCompleted);

    const changeCurrentTodoItemId = (id: number): void => {
        setCurrentTodoItemId(id);
        setShowModalTodoItemDelete(true);
    };

    return (
        <Container className="mt-3">

            {[...nonCompleteTodoItem, ...completeTodoItem].map(item => {
                return (
                    <InputGroup className="mb-3" key={item.id}>
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox 
                                checked={item.isCompleted} 
                                onClick={() => changeCompleteTodoItem(item.id)}
                                readOnly
                            />
                        </InputGroup.Prepend>
                        
                        <FormControl type="text" placeholder={item.text} readOnly />

                        <InputGroup.Append>
                            <Button 
                                variant="outline-danger"
                                onClick={() => changeCurrentTodoItemId(item.id)}
                            >Удалить</Button>
                        </InputGroup.Append>
                    </InputGroup>
                );
            })}

            <ModalTodoItemDelete 
                showModalTodoItemDelete={showModalTodoItemDelete} 
                setShowModalTodoItemDelete={setShowModalTodoItemDelete}
                deleteTodoItem={deleteTodoItem}
                currentTodoItemId={currentTodoItemId}
            />

        </Container>
    );
}
