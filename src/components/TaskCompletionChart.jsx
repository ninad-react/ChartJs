import React from 'react'
import { Line } from 'react-chartjs-2'
import taskData from "../data/taskData.json"

const TaskCompletionChart = () => {
  return (
    <div className='App'>

        <div className='dataCard taskCard'>

            <Line 
            data={{
                labels: taskData.map((data) => data.label),
                datasets: [
                    {
                        label: "Completed Task",
                        data: taskData.map((data) => data.completedTask),
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0"
                    }
                ]
            }}
            options={{
                plugins: {
                    title: {
                        text: 'Task Completed by Employee'
                    }
                }
            }}
            />
        </div>
    </div>
  )
}

export default TaskCompletionChart