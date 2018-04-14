import React from 'react';

export default class FacetInput extends React.Component {

    render() {
        return (
            <div className="clef-facet">
                <input type="checkbox" value={this.props.facet.facet_value}/>
                <label>{this.props.facet.facet_label} ({this.props.facet.facet_num_matches})</label>
            </div>
        );
    }
}