import React from 'react';
import { connect } from 'react-redux';
import FacetGroup from './FacetGroup';
import './FacetsStyles.css';
import {clearFilters, setFilters} from "../../actions/ClefActions";

/**
 * Class to display a faceted search widget.
 *
 * @since 1.0.0
 */
class FacetsContainer extends React.Component {

    constructor( props ) {
        super( props );

        this.groupFacets.bind( this );
        this.displayFacets.bind( this );
    }


    /**
     * Constructs FacetGroups containing individual facets.
     *
     * @since 1.0.0
     * @return {Array} An array of FacetGroups.
     */
    displayFacets() {
        let grouped = this.groupFacets();
        let facetGroups = [];
        if ( Object.entries( grouped ).length === 0 ) {
            return;
        }
        // Loop through each facet group and its facets and render a new FacetGroup.
        for ( const [group, items] of Object.entries( grouped ) ) {
            facetGroups.push( this.displayFacetGroup( group, items ) );
        }
        return facetGroups;
    }


    /**
     * Constructs a FacetGroup containing individual facets.
     *
     * @since 1.0.0
     * @param {string} group The header under which items will be grouped.
     * @param {Array} items An array of the facets to be rendered as individual checkboxes.
     * @return {*}
     */
    displayFacetGroup( group, items ) {
        return <FacetGroup key={group} groupName={group} items={items}/>;
    }


    /**
     * Groups facet objects by their facet_group property.
     *
     * @since 1.0.0
     * @return {Object}
     */
    groupFacets() {
        let grouped = {};
        if ( Array.isArray( this.props.facets ) && this.props.facets.length > 0 ) {
            this.props.facets.forEach( function ( facet ) {
                if ( ! grouped.hasOwnProperty( facet.facet_group ) ) {
                    grouped[ facet.facet_group ] = [];
                }
                grouped[ facet.facet_group ].push( facet );
            });
        }
        return grouped;
    }


    /**
     * Callback to clear filters.
     *
     * @since 1.0.0
     */
    handleClearFilters() {
        this.props.clearFilters();
    }

    render() {
        return (
            <div id="clef-facets">
                {this.displayFacets()}
                <div id="clef-facet-controls">
                    { this.props.facets.length > 0 ? <button onClick={this.handleClearFilters.bind(this)}>Clear Filters</button> : null }
                    { this.props.facets.length > 0 ? <button>Apply Filters</button> : null }
                </div>
            </div>
        );
    }

}

function mapStateToProps( state ) {
    return {
        facets: state.facets
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        applyFilters: function ( filters ) {
            dispatch( setFilters( filters ) );
        },
        clearFilters: function () {
            dispatch( clearFilters() );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( FacetsContainer );