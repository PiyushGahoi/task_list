import React,{Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import classes from './taskList.module.css';
import ListHeader from '../../Components/ListHeader/ListHeader';
import AddTask from '../../Components/Addtask/Addtask';
import EditTask from '../../Components/EditTask/EditTask';
import TaskDetails from '../../Components/TaskDetails/TaskDetails';
import List from '../../Components/List/List';
import {connect} from 'react-redux';
import Aux from '../../Hoc/Auxi';

class TaskList extends Component{
    componentDidMount(){
        document.title=" Your Personal TaskList"
    }
    state={
        currentTask:{
            title:'',
            description:'',
            date:'',
            priority:'',
            id:0
        },
        adding:false,
        details:false,
        editing:false
    }
    addingBtnHandler=()=>
    {
        this.setState({adding:true});
    }

    modalClosedHandler=()=>{
        this.setState({adding:false,details:false,editing:false});
    }

    addTaskHandler=(event)=>{
        this.setState({adding:false,details:false,editing:false});
        event.preventDefault();
        // console.log(event.target)
        this.props.taskadded(event.target.title.value,event.target.description.value,event.target.date.value,event.target.priority.value);
    }
    editTaskHandler=(event)=>{
        // alert(event.target.title.value);
        this.setState({adding:false,details:false,editing:false});
        event.preventDefault();
        // console.log(event.target)
        this.props.taskedited(this.state.currentTask.id,event.target.title.value,event.target.description.value,event.target.date.value,event.target.priority.value);
    }

    openDetails=(task)=>{
        this.setState({currentTask:task,details:true});
        // console.task(currentTask.id);
    }

    editingHandler=(task)=>{
        this.setState({currentTask:task,details:false,editing:true});
    }

    deleteTaskHandler=(id)=>{
        this.setState({details:false});
        this.props.taskDeleted(id);
    }

    ChangeHandler=(event)=>{
        const updatedTask={
            ...this.state.currentTask
        };
        updatedTask[event.target.name]=event.target.value;
        this.setState({currentTask:updatedTask});
    }

    render(){
        return(
        <Aux>
            <h1>Your Task List</h1>
            <Modal show={this.state.details || this.state.adding || this.state.editing} modalClosed={this.modalClosedHandler}>
                {this.state.adding?
                <AddTask task={this.state.currentTask} added={this.addTaskHandler}/>:
                this.state.details?
                <TaskDetails task={this.state.currentTask} deleteTask={this.deleteTaskHandler} editTask={this.editingHandler}/>:
                <EditTask task={this.state.currentTask} edited={this.editTaskHandler} changed={this.ChangeHandler}/>}
            </Modal>
            <div className={classes.Container}>
            <ListHeader openmodal={this.addingBtnHandler}/>
            <List tasks={this.props.tasks} opendetails={this.openDetails} editing={this.editingHandler}/>
            </div>
        </Aux>
        );
    }
    
}
const mapStateToProps = state => ({
    tasks:state
})
  
const mapDispatchToProps = dispatch => ({
    taskadded:(title,description,date,priority)=>dispatch({type:"ADD_TODO",title:title,description:description,date:date,priority:priority}),
    taskedited:(id,title,description,date,priority)=>dispatch({type:"EDIT_TODO",id:id,title:title,description:description,date:date,priority:priority}),
    taskDeleted:(id)=>dispatch({type:"DELETE_TODO",id})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskList);