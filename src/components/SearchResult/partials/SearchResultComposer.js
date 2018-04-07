import React from 'react';

export default class SearchResultComposer extends React.Component {


    /**
     * Checks if this composer has lifespan date information.
     *
     * @since 1.0.0
     * @returns {boolean}
     */
    hasDates() {
        return this.props.composer.hasOwnProperty( 'dates' );
    }


    /**
     * Checks if this composer has name data.
     *
     * @since 1.0.0
     * @returns {boolean}
     */
    hasName() {
        return this.props.composer.hasOwnProperty( 'name' );
    }


    /**
     * Renders date information for a composer.
     *
     * @since 1.0.0
     * @returns {*}
     */
    renderDates() {
        let dates;
        if ( this.hasDates() ) {
            dates = <p className="clef-result-composer-dates">{this.renderDatesBorn()}&ndash;{this.renderDatesDied()}</p>;
        }
        return dates;
    }


    /**
     * Renders the birth year of a composer, if available.
     *
     * @since 1.0.0
     * @returns {string}
     */
    renderDatesBorn() {
        let born = '';
        if ( this.props.composer.dates.hasOwnProperty( 'born' ) && this.props.composer.dates.born !== '' ) {
            born = <span>{this.props.composer.dates.born}</span>;
        }
        return born;
    }


    /**
     * Renders the death year of a composer, if available.
     *
     * @since 1.0.0
     * @returns {string}
     */
    renderDatesDied() {
        let died = '';
        if ( this.props.composer.dates.hasOwnProperty( 'died' ) && this.props.composer.dates.died !== '' ) {
            died = <span>{this.props.composer.dates.died}</span>;
        }
        return died;
    }


    /**
     * Renders the name of the composer, if available.
     *
     * @since 1.0.0
     * @returns {*}
     */
    renderName() {
        let name;
        if ( this.hasName() ) {
            name = <p className="clef-result-composer-name">{this.props.composer.name}</p>;
        }
        return name;
    }



    render() {
        return (
            <div className="clef-result-composer">
                {this.renderName()}
                {this.renderDates()}
            </div>
        );
    }
}