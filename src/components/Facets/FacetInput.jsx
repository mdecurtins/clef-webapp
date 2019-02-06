import React from 'react';

/**
 * Class to display a single checkbox input for a single facet.
 *
 * A facet is meant to represent a filterable attribute of Clef search results.
 *
 * @since 1.0.0
 */
export default class FacetInput extends React.Component {

    render() {
        // The facet_num_matches property represents how many of the search results match this facet attribute.
        return (
            <div className="clef-facet">
                <input type="checkbox" value={this.props.facet.facet_value}/>
                <label>{this.props.facet.facet_label} ({this.props.facet.facet_num_matches})</label>
            </div>
        );
    }
}