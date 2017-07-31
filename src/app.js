import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './modules/main_panel'
import ChartsPanel from './modules/charts_panel'
import Chart from './modules/chart'

require('../static/css/mainPanel.css')

class Main extends React.Component {
  render() {
    return (
      <div>
          <MainPanel title="Chart Set 1" subtitle="Sample charts">
              <ChartsPanel />
              <Chart />
          </MainPanel>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)