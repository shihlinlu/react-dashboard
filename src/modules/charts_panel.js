import React from 'react'
import { Grid } from 'semantic-ui-react'
import BarChart from './bar_chart'
import PChart from '../modules/pie_chart'

class ChartsPanel extends React.Component {
    render () {
        return (
            <Grid columns={2}>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <BarChart data={[5,10,1,3]} size={[500,500]} />
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