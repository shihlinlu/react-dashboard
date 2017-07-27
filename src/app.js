import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './modules/main_panel'
import ChartsPanel from './modules/charts_panel'

require('../static/css/mainPanel.css');

class Main extends React.Component {
  render() {
    return (
      <div>
          <MainPanel title="Chart 1" subtitle="Powered by Recharts">
              <ChartsPanel />
          </MainPanel>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)