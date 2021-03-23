import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { TodoInputProps } from '../interfaces';

export const TodoInput: React.FunctionComponent<TodoInputProps> = ({ addTodoItem }) => {
    const [ title, setTitle ] = useState<string>('');
    const [ showInformation, setShowInformation ] = useState<string>('Введите новую задачу и нажмите клавишу ENTER');

    const changeTitleEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const keyPressEvent = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'Enter') {
            if(title.length > 3) {
                addTodoItem(title);
                setTitle('');
                setShowInformation('Введите новую задачу и нажмите клавишу ENTER');
            } else setShowInformation('Вы должны ввести задачу, содержащую больше, чем 3 символа!');
        }
    };

    return (
        <React.Fragment>
            <Form.Control 
                value={title}
                onChange={changeTitleEvent}
                type="text" 
                placeholder="Введите новую задачу..." 
                onKeyPress={keyPressEvent}
            />
            <Form.Text className="text-muted">
                {showInformation}
            </Form.Text>
        </React.Fragment>
    );
};
