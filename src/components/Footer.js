import React, {useContext, useState} from 'react'
import {DataContext} from './DataProvider'

function Footer() {
    const [checkAll, setCheckAll] = useState(false)
    const [todos,setTodos] = useContext(DataContext)

    const handleCheckAll = () =>{
        console.log("checked all");
        const newTodos = [...todos]
        newTodos.forEach(todo =>{
            todo.complete = !checkAll
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }

    const newTodosComplete = () =>{
        return todos.filter(todo => todo.complete === false)
    }

    const deleteTodo = () =>{
        //console.log(newTodosComplete());
        setTodos(newTodosComplete())
        setCheckAll(false)
    }

    return (
        <>
        {
            todos.length === 0 ? <h2>Congratulations! Nothings To Do</h2> 
                :  <div className="row">
                    <label htmlFor="all">
                        <input type="checkbox" name="all" id="all"
                        onChange={handleCheckAll} checked={checkAll} />
                        ALL
                    </label>
                    <p>You have {newTodosComplete().length} to do</p>
                    <button id="delete" onClick={deleteTodo}>Delete</button>
                </div>
        }
        </>
    )
}

export default Footer
