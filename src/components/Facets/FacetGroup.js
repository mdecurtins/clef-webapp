import React from 'react';
import FacetInput from './FacetInput';

export default class FacetGroup extends React.Component {

    constructor( props ) {
        super( props );
        this.facetList.bind( this );
    }

    facetList() {
        return this.props.items.map( function ( facet ) {
            return ( <FacetInput key={facet.facet_value} facet={facet}/> );
        });
    }

    render() {
        return (
            <div className="clef-facet-group">
                <p>{this.props.groupName}</p>
                {this.facetList()}
            </div>
        );
    }


}