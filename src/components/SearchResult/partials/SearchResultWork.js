import React from 'react';

export default class SearchResultWork extends React.Component {


    hasCompositionDate() {
        return this.props.work.hasOwnProperty( 'composition_date' ) && this.props.work.composition_date !== '';
    }

    hasEra() {
        return this.props.work.hasOwnProperty( 'era' ) && this.props.work.era !== '';
    }

    hasType() {
        return this.props.work.hasOwnProperty( 'type' ) && this.props.work.type !== '';
    }

    has( key ) {
        return this.props.work.hasOwnProperty( key ) && this.props.work[ key ] !== '';
    }


    /* Render Methods */

    /**
     *
     * @since 1.0.0
     * @returns {*}
     */
    renderCatalog() {
        return <span>{this.renderCatalogName()} {this.renderCatalogNumber()}</span>;
    }


    /**
     *
     * @since 1.0.0
     * @returns {string}
     */
    renderCatalogName() {
        let catalog = '';
        if ( this.has( 'catalog' ) ) {
            catalog = <span className="work-catalog-name">{this.props.work.catalog}</span>;
        }
        return catalog;
    }


    /**
     *
     * @since 1.0.0
     * @returns {string}
     */
    renderCatalogNumber() {
        let catalogNum = '';
        if ( this.has( 'catalogNumber' ) ) {
            catalogNum = <span className="work-catalog-number">{this.props.work.catalogNumber}</span>;
        }
        return catalogNum;
    }


    /**
     *
     * @since 1.0.0
     * @returns {string}
     */
    renderTitle() {
        let title = '';
        if ( this.has( 'title' ) ) {
            title = <span className="work-title">{this.props.work.title}</span>;
        }
        return title;
    }


    render() {
        return (
            <div className="clef-result-work">
                <p>{this.renderTitle()}, {this.renderCatalog()}</p>
            </div>
        );
    }
}