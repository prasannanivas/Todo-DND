import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import "./styles.scss";
import InputContainer from '../inputContainer/inputContainer';
import Card from '../card/Card';
import Title from '../Title/Title';
import "./styles.scss";

const List = ({ list, index }) => {
    console.log("here", list)
    return (
        <Draggable draggableId={list.id} index={index} >
            {
                (provided) => (
                    <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                        <div className='list-cards' >
                            <div className='title-list'>
                                <Title title={list.title} listId={list.id}/>
                            </div>
                            <div className='container-cards'>
                                <Droppable droppableId={list.id} type="task">
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className='card-container'
                                        >
                                            {list.cards.map((card, index) => {
                                                return <Card card={card} key={card.id} index={index} listId={list.id}/>
                                            })}
                                            {provided.placeholder}
                                        </div>

                                    )}
                                </Droppable>
                            </div>
                            <InputContainer type = "card" listId={list.id} />
                        </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default List