import React from 'react';
import classes from './Addtask.module.css';

const addtask=(props)=>{
        return(
            <form className={classes.Addtask} onSubmit={props.added}>
                <input type='text' placeholder='Enter Title' name="title" required/>
                <input type='text' placeholder='Enter Description' name="description"required/>
                <input type='date' name='date'required/>
                <select name='priority' required>
                    <option value='High'>HIGH</option>
                    <option value='Medium'>MEDIUM</option>
                    <option value='Low'>LOW</option>
                </select>
                <button type='submit'  >Submit</button>
            </form>
        );
    }

export default addtask;