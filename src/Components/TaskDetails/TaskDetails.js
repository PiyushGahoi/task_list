import React,{Component} from 'react';
import Button from '../UI/Button/Button';
import classes from './Taskdetails.module.css';
import PropTypes from 'prop-types';

class TaskDetails extends Component{
    render(){
        let taskdetail=Object.keys(this.props.task)
    .map(igKey=>{
        return [...Array(this.props.task[igKey])].map((p,i)=>{
        return (<p key={igKey+i} className={classes[igKey]}>{igKey.toUpperCase()} : {p}</p>)
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
        return(
            <div className={classes.TaskDetail}>
                <div className={classes.details}>{taskdetail}</div>
                <Button btnType="Danger" clicked={()=>this.props.deleteTask(this.props.task.id)}>DELETE</Button>
                <Button btnType="Success" clicked={()=>this.props.editTask(this.props.task)}>EDIT</Button>
            </div>
        );
    }
}

TaskDetails.propTypes={
    task: PropTypes.object.isRequired
};

export default TaskDetails;