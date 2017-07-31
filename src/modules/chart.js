import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import data from '../../static/js/data'
import Axes from './axes'
import Bars from './bars'
import ResponsiveWrapper from './responsiveWrapper'


class Chart extends React.Component {
    constructor() {
        super()
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    render () {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 }
        const svgDimensions = {
            width: Math.max(this.props.parentWidth, 300),
            height: 500
        }


        const maxValue = Math.max(...data.map(d => d.value))

        const xScale = this.xScale
            .padding(0.5)
            .domain(data.map(d => d.title))
            .range([margins.left, svgDimensions.width - margins.right])

        const yScale = this.yScale
            .domain([0, maxValue])
            .range([svgDimensions.height - margins.bottom, margins.top])

        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                // bars and axis comes here
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />

                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    maxValue ={maxValue}
                    svgDimensions={svgDimensions}
                />
            </svg>
        )
    }
}

export default ResponsiveWrapper(Chart);






// class LineChart extends React.Component {
//     constructor(props) {
//         super(props);
//
//         // binds the instance of createBarChart to createBarChart(this)
//         this.createLineChart = this.createLineChart.bind(this);
//     }
//
//     componentDidMount() {
//         this.createLineChart();
//     }
//
//     componentDidUpdate() {
//         this.createLineChart()
//     }
//
//     createLineChart() {
//         const node = this.node;
//         const dataMax = max(this.props.data);
//         const yScale = scaleLinear()
//             .domain([0, dataMax])
//             .range([0, this.props.size[1]])
//
//     }
//
//     render () {
//         return (
//             <div>
//                 <svg ref={node => this.node = node}
//                      width={500} height={500}>
//                 </svg>
//             </div>
//         )
//     }
// }
//
// export default LineChart;
