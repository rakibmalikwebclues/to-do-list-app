import React, {useState, useEffect, createContext, useMemo} from 'react'
import useLocalstorage from "./useLocalstorage"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useLocalstorage();
    
    useMemo(() =>{
        console.log("use Memo used");
        console.log(todos);
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])

    return (
      <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
      </DataContext.Provider>
    )
}
