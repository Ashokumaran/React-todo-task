import React from "react";

const List = (props) => {
    return (
                <ul>
                    {props.items.map((task,index) =>{
                        const onListClick = () => {
                            props.toggleTask(index)
                        };
                        return (
                        <li onClick={onListClick} key={index}>
                            {task.name} {task.isComplete? "Yes": "No"}
                        </li>
                        );
                    })}
                </ul>
        )
}

export default List;