import { useState } from "react";
import TodosInput from "./TodosInput";
import TodosList from "./TodoList";

function Todos() {
    const [todosList, setTodosList] = useState([]);
    const [todoDone, setTodoDone] = useState([]);
    const [show, setShow] = useState(false);

    const handlePushToList = (data) => {
        setTodosList([...todosList, data]);
    }
    var temp;
    var newList = [];
    const toggleTodo = (id) => {
        const updatedList = todosList.map((element) => {
            if (element.id == id) {
                temp = element;
            } else {
                newList.push(element);
            }
            //   element.id === id ?
            //  { ...element, status: !element.status } : element
             
        });
       
        setTodoDone([...todoDone,temp]);  
        setTodosList(newList);
    }

    const removeTodo = (id) => {
        var data = [];
        todosList.map((e) => {
            if (e.id !== id) {
                data.push(e);
            }
        });
        setTodosList(data);
    }

    return (
        <>
            <TodosInput handleAdd={handlePushToList} />
            <TodosList toggleTodo={toggleTodo}  removeTodo={removeTodo} list={todosList} />
            <div>
                <button onClick={()=>setShow(!show)} className="show">Show All done todos</button>
                { show ?  
                    <div>{
                        todoDone.map(e =>
                            <div className="todos" style={{
                                textDecoration: "line-through green",
                                padding: "20px",
                                width: "340px",
                                paddingLeft: "50px"
                                
                            }}>{e.title} :- Done</div>)
                    }</div>
                   : null
                }
            </div>
        </>
    )
}

export default Todos;

/*

Parent Child Uplifting
function Todos() {
    const [age, setAge] = useState(0);
    const  handleAge   = (value) => {
        setAge(value);
    }
    return (
        <div>
            <Second age={age} handleAge={handleAge}/>
         </div>
    );
}

function Second({age, handleAge}) {

    return (
        <>
       <Third age={age} handleAge={handleAge}/>
        </>
    )
}

function Third({age, handleAge}) {
    return (
        <>Hello Thirrd age : - {age}
            
            <button onClick={() => {
                handleAge(50)
        }}>click</button>
        </>
    )
}

export default Todos;

*/