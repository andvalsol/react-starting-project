import React, {useState} from "react"

const NewGoal = (props) => {

    const [enteredText, setEnteredText] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        setEnteredText("")

        props.submit(newGoal)
    }

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                   value={enteredText}
                   onChange={textChangeHandler}/>
            <button type="submit">
                Add goal
            </button>
        </form>
    )
}

export default NewGoal