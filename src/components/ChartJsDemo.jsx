import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import revenueData from "../data/revenueData.json"
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio  = false;
defaults.responsive = true;

const ChartJsDemo = () => {
  return (
    <div className='App'>
      
      <div className='dataCard revenueCard'>
        <Line 
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: '#064FF0'
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030"
            }
          ],

        }}
        options={{
          plugins: {
            title: {
              text: "Monthly Revenue & Cost"
            },
          },
        }}
        />
      </div>

      <div className='dataCard customerCard'>

        <Bar 
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>

      <div className='dataCard categoryCard'>
        <Doughnut 
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
        />
      </div>

    </div>

  )
}

export default ChartJsDemo