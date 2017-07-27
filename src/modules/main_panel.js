import React from 'react'

class MainPanel extends React.Component {
    render () {
        let titleSection = null;
        if (this.props.title || this.props.subtitle) {
            titleSection = (
                <div className="element-info">
                    <div className="row align-items-center">
                        <h3 className="element-inner-title">{this.props.title}</h3>
                        <p className="element-inner-subtitle">{this.props.subtitle}</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="element-container">
                {titleSection}
                <div>
                    {this.props.children}
                </div>
            </div>

        )

    }
}

export default MainPanel;