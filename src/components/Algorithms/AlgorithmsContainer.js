import React from 'react';
import {connect} from 'react-redux';
import {getAlgorithms} from "../../actions/ClefActions";
import Algorithm from './Algorithm';
import './AlgorithmsStyles.css';


class AlgorithmsContainer extends React.Component {

    constructor( props ) {
        super( props );

        this.componentDidMount.bind( this );
        this.displayAlgorithms.bind( this );
    }

    componentDidMount() {
        this.props.fetchAlgorithms();
    }

    displayAlgorithms() {
        let algorithms = [];
        if ( Array.isArray( this.props.algorithms ) && this.props.algorithms.length > 0 ) {
            this.props.algorithms.map( function ( alg, i ) {
                algorithms.push( <Algorithm key={i} alg={alg} /> );
            });
        }
        return algorithms;
    }

    render() {
        return (
            <div id="clef-algorithms">
                <h3>Algorithms</h3>
                {this.displayAlgorithms()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        algorithms: state.algorithms
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        fetchAlgorithms: function () {
            dispatch( getAlgorithms() );
        }
    };
}


export default connect ( mapStateToProps, mapDispatchToProps )( AlgorithmsContainer );