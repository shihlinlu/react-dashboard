import React from 'react'
import { Grid } from 'semantic-ui-react'
import worlddata from '../../static/js/world'
import { geoMercator, geoPath } from 'd3-geo'

class WorldMap extends React.Component {
    render () {
        const projection = geoMercator()
        const pathGenerator = geoPath().projection(projection)
        const countries = worlddata.features
            .map((d,i) => <path
            key={'path' + i}
            d={pathGenerator(d)}
            className = 'countries'
            />)

        return (
            <div>
                <svg width={500} height={500}>
                    {countries}
                </svg>
            </div>

        )
    }
}

export default WorldMap;