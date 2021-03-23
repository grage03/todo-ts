import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import { ModalTodoItemDeleteProps } from '../interfaces';

export const ModalTodoItemDelete: React.FunctionComponent<ModalTodoItemDeleteProps> = ({ 
    showModalTodoItemDelete, 
    setShowModalTodoItemDelete,
    deleteTodoItem, 
    currentTodoItemId }) => {

    const modalDeleteTodoItem = (): void => {
        setShowModalTodoItemDelete(false);

        deleteTodoItem(currentTodoItemId);
    };

    return (
        <Modal show={showModalTodoItemDelete} onHide={() => setShowModalTodoItemDelete(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Удаление задачи</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Вы точно хотите удалить данную задачу?
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-danger" onClick={modalDeleteTodoItem}>
                Удалить
            </Button>
            <Button variant="outline-info" onClick={() => setShowModalTodoItemDelete(false)}>
                Закрыть
            </Button>
            </Modal.Footer>
        </Modal>
    );
};
