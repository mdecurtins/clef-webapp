import React from 'react';
import {connect} from 'react-redux';

/**
 *
 */
class Algorithm extends React.Component {

    constructor( props ) {
        super( props );

        this.displayAlgorithmSelect.bind( this );
        this.displayAlgorithmType.bind( this );
        this.displayAllowedDataFormats.bind( this );
        this.displayCapabilities.bind( this );
        this.displayParameters.bind( this );
        this.displayQuerySizeRange.bind( this );
    }


    displayAlgorithmSelect() {
        let name = this.props.alg.name;
        return (
            <input type="checkbox" id={"select-" + name} value={name} />
        );
    }

    /**
     *
     * @return {*}
     */
    displayAlgorithmType() {
        let algType = this.props.alg.type;
        return ( <p>Algorithm Type: {algType}</p> );
    }


    /**
     *
     */
    displayAllowedDataFormats() {
        let allowed = this.props.alg.datasetCapabilities.allowedFileTypes;

        if ( Array.isArray( allowed ) && allowed.length > 0 ) {

        }
    }


    /**
     *
     * @param caps
     * @return {Array}
     */
    displayCapabilities( caps ) {
        let retval = [];
        retval.push( <p>Monophonic: {( caps.monophonicData ) ? "true" : "false"}</p> );
        retval.push( <p>Polyphonic: {( caps.polyphonicData ) ? "true" : "false"}</p> );
        return retval;
    }


    /**
     *
     * @return {*}
     */
    displayParameters() {
        let params = this.props.alg.parameters;
        return (
            <div className="parameters">
                <p>foo</p>
            </div>
        );
    }


    /**
     *
     * @return {*}
     */
    displayQuerySizeRange() {
        let caps = this.props.alg.inputCapabilities;
        return (
            <div className="query-size-range">
                <p><span className="min">Min: {caps.querySizeMin}</span>, <span className="max">Max: {caps.querySizeMax}</span></p>
            </div>
        );
    }

    getParameterFormElement( param ) {
        let retval = null;
        if ( param !== null && typeof param === 'object' ) {
            if ( param.hasOwnProperty( 'type' ) ) {
                switch ( param.type ) {
                    case "boolean":

                        break;
                    case "number":

                        break;
                    case "string":

                        break;
                }
            }
        }
        return retval;
    }

    render() {
        return (
            <div className="clef-algorithm">
                <div className="clef-algorithm-select">
                    {this.displayAlgorithmSelect()}
                    <label htmlFor={"select-" + this.props.alg.name}>{this.props.alg.displayName}</label>
                </div>

                <div>
                    <p>Dataset Capabilities:</p>
                    {this.displayCapabilities( this.props.alg.datasetCapabilities )}
                </div>
                <div>
                    <p>Input Capabiltiies:</p>
                    {this.displayCapabilities( this.props.alg.inputCapabilities )}
                </div>
                {this.displayQuerySizeRange()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {

    };
}

function mapDispatchToProps( dispatch ) {
    return {

    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Algorithm );