import React from 'react';
import FacetInput from './FacetInput';

/**
 * Class to display a group of related facets in the faceted search component.
 *
 * @since 1.0.0
 */
export default class FacetGroup extends React.Component {

    constructor( props ) {
        super( props );
        this.facetList.bind( this );
    }

    /**
     * Display checkbox inputs for all the facets in this FacetGroup.
     *
     * @since 1.0.0
     * @return {*}
     */
    facetList() {
        return this.props.items.map( function ( facet ) {
            return ( <FacetInput key={facet.facet_value} facet={facet}/> );
        });
    }


    /**
     * Render this component to the DOM.
     *
     * @since 1.0.0
     * @return {*}
     */
    render() {
        return (
            <div className="clef-facet-group">
                <p>{this.props.groupName}</p>
                {this.facetList()}
            </div>
        );
    }


}