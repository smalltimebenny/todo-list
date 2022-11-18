import React, {useState} from 'react'

const Form = ({stuff, setStuff}) => {
    const [todo, setTodo] =useState("")

    const handleThis = (e) => {
        e.preventDefault();
        setStuff([...stuff,
        {
            item : todo,
            complete : false
        }])
        setTodo("")
    }


    return (
        <>
        <form onSubmit={handleThis}>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
            <input type="Submit" value="Add" />
        </form>
        {todo}
        </>
    )
}

export default Form