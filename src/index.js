import React, { Fragment ,useState} from "react";
import ReactDOM from "react-dom";
import List from "./component/List";
import Title from "./component/Title"
import InputField from "./inputfield";

//const H1Tag = React.createElement("h1",{id:"title"},"Hello! React XD");


//const divContainer = React.createElement("div",{className:"container"},React.createElement("p",{},"Nested Example"));

// const array = [1,2,3,4,5];

// const listContainer = React.createElement("div",{className:"container"},React.createElement("ul",{},array.map((item,index)=>{
// return React.createElement("li",{key:index},item);
// }))
// );

// JSX Examples
// const name = "Randomer";
// const H1Tag = <h1 id="title">Hello, {name}!</h1>

// const list = [1,2,3,4,5];


// const listContainer = (
//     <div className="container">
//         <ul>
//             {list.map((item,index) => {
//                 return <li key={index}>{item}</li>
//             })}
//         </ul>
//     </div>
// );

// const rootELement = document.querySelector("#root");

// ReactDOM.render(listContainer,rootELement)

// const App = () => <h1>Hello</h1>;

// ReactDOM.render(<App/>, document.querySelector("#root"));  

// const App = (props) => <h1>{props.title}
// <br/>{props.info}</h1>;

// ReactDOM.render(<App title="Title" info="info"/>, document.querySelector("#root")); 

// const App = (props) =>{
//     const task = [
//         {name:"Item1", isComplete:true},
//         {name:"Item2", isComplete:true},
//         {name:"Item3", isComplete:true}
//     ];

const App = (props) =>{
    const [tasks, setTasks] = useState([]);


const toggleTask = (taskIndex) => {
setTasks(
    tasks.map((task,index) => {
        if(taskIndex === index) {
            return {
                ...task,
                isComplete: !task.isComplete,
            };
        }
        return task;
    })
)}

const addTask = (newTask) => {
    setTasks([ 
        ...tasks,
        {
            name:newTask,
            isComplete:false
        }
    ])
}
    // return (
    //     <Fragment>
    //         <h1>toDo List</h1>
    //         <ul>
    //             {task.map((task,index) =>{
    //                 return (
    //                 <li key={index}>
    //                     {task.name} {task.isComplete? "Yes": "No"}
    //                 </li>
    //                 );
    //             })}
    //         </ul>
    //     </Fragment>
    // )

    return (
        <Fragment>
        <Title title={props.title} />
        <InputField addTask={addTask}/>
        <List items={tasks} toggleTask={toggleTask}/>
        </Fragment>
    )
};

ReactDOM.render(<App title="Title" info="info"/>, document.querySelector("#root")); 