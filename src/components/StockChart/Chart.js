import React from 'react'
import Plot from 'react-plotly.js'

const Chart = ({ user, alert, company, x, y }) => {
  return (
    <div>
      <h1>Stock market</h1>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' }
          }
        ]}
        layout={{ width: 640, height: 480, title: `${company}` }}
      />
    </div>
  )
}
export default Chart
