import React from 'react'
import ReactDOM from 'react-dom'
import MainPanel from './modules/main_panel'
import ChartsPanel from './modules/charts_panel'
import Chart from './modules/chart'

require('../static/css/mainPanel.css');

class Main extends React.Component {
    render() {
        return (
            <div>
                <MainPanel title="Chart Set 1" subtitle="Sample charts">
                    <ChartsPanel />

                    <div className="App-chart-container">
                        <p className="App-chart-description">
                            2013 US Unit Sales of Tesla vs. the rest.
                        </p>
                        <p className="App-chart-source">
                            Data source: <a href="https://www.e-education.psu.edu/ba850/node/595">https://www.e-education.psu.edu/ba850/node/595</a>
                        </p>
                    </div>


                    <Chart />
                </MainPanel>
            </div>
        )
    }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)