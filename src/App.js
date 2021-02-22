import React, {useState} from 'react';
import GoalsList from "components/GoalsList"
import NewGoal from "components/newGoal/NewGoal"

const App = () => {

    const [courseGoals, setCourseGoals] = useState([
        {
            id: "c1",
            text: "Finish the course"
        },
        {
            id: "c2",
            text: "Lear all about the Course Main Topic"
        },
        {
            id: "c3",
            text: "Help other students in the Course"
        }
    ])

    const newGoalHandler = (newGoal) => {
        setCourseGoals((previousGoals) => previousGoals.concat(newGoal))
    }

    return (
        <div className="course-goals">
            <h2>Course goals</h2>
            <NewGoal submit={newGoalHandler}/>
            <GoalsList
              goals={courseGoals}/>
        </div>
    )
};

export default App;
