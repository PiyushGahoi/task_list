import React from 'react';
import classes from './EditTask.module.css';

const edittask=(props)=>{
        return(
            <form className={classes.EditTask} onSubmit={props.edited}>
                <input type='text' placeholder='Enter Title' name="title" value={props.task.title} onChange={props.changed} required/>
                <input type='text' placeholder='Enter Description' name="description" value={props.task.description} onChange={props.changed} required/>
                <input type='date' name='date' value={props.task.date} onChange={props.changed} required/>
                <select name='priority' value={props.task.priority} onChange={props.changed} required>
                    <option value='High'>HIGH</option>
                    <option value='Medium'>MEDIUM</option>
                    <option value='Low'>LOW</option>
                </select>
                <button type='submit'  >Submit</button>
            </form>
        );
    }

export default edittask;