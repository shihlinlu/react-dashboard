import React from 'react'
import { Linechart, Line } from 'recharts'
import { Grid } from 'semantic-ui-react'
import LineChart from '../modules/line_chart'
import PChart from '../modules/pie_chart'

class ChartsPanel extends React.Component {
    render () {
        return (
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <LineChart />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <PChart />
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}

export default ChartsPanel;