import React from 'react';
import classes from './list.module.css';

const list=(props)=>{
    let tasks=props.tasks;
    let listitems;
    if (tasks.length==0){
        listitems=null;
    }
    else{
    listitems=tasks.map(task=>{
        return(
            <div className={[classes.List,classes[task.priority]].join(' ')} key={task.id} onClick={()=>props.opendetails(task)} onDoubleClick={props.editing}>
                <p>{task.title}</p>
            </div>
        )
    });
    }
    return(listitems);
}

export default list;