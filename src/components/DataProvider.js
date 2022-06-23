import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])
    
    useEffect(() =>{
        console.log("use effect");
        
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        console.log("todoStore =====>",todoStore);
        if(todoStore) setTodos(todoStore)
    },[])

    useEffect(() =>{
        console.log("use effect 1235");
        console.log(todos);


        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
