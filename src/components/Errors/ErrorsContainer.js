import React from 'react';
import {connect} from 'react-redux';
import {clearError} from "../../actions/ClefActions";
import CloseButton from 'react-icons/lib/fa/close';
import './ErrorsStyles.css';

class ErrorsContainer extends React.Component {

    constructor( props ) {
        super( props );
        this.displayErrors.bind( this );
    }

    displayErrors() {
        let errs = [];
        const {removeError} = this.props;
        if ( Array.isArray( this.props.errors ) && this.props.errors.length > 0 ) {
            this.props.errors.map( function ( msg, i ) {
                errs.push(
                    <div key={i} className="clef-error">
                        <p>{msg}</p>
                        <CloseButton onClick={() => {removeError(i)}}/>
                    </div>
                );
            });
        }
        return errs;
    }

    render() {
        return (
            <div id="clef-errors">
                {this.displayErrors()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        errors: state.errors
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        removeError: function ( errIndex ) {
            dispatch( clearError( errIndex ) );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( ErrorsContainer );
