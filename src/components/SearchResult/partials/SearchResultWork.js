import React from 'react';

export default class SearchResultWork extends React.Component {

    hasCatalog() {

    }

    hasCatalogNumber() {

    }

    hasCompositionDate() {
        return this.props.work.hasOwnProperty( 'composition_date' ) && this.props.work.composition_date !== '';
    }

    hasEra() {

    }

    hasTitle() {
        return this.props.work.hasOwnProperty( 'title' ) && this.props.work.title !== '';
    }

    hasType() {

    }



    renderTitle() {
        let title = '';
        if ( this.hasTitle() ) {
            title = <span className="work-title">{this.props.work.title}</span>;
        }
        return title;
    }

    render() {
        return (
            <div className="clef-result-work">
                {this.renderTitle()}
            </div>
        );
    }
}