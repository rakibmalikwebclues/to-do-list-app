import { useState, useEffect } from "react";

const useLocalstorage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log("use effect used");
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        console.log("todoStore =====>",todoStore);
        if(todoStore) setTodos(todoStore)
    }, []);

    return [todos, setTodos];
};

export default useLocalstorage;