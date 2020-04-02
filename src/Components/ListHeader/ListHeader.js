import React from 'react';
import classes from './listHeader.module.css';

const listHeader=(props)=>(
    <div className={classes.ListHeader}>
        <button onClick={props.openmodal}>Add a new Task?</button>
    </div>
);

export default listHeader;