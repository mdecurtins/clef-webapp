import React from 'react';
import {connect} from 'react-redux';
import {clearError} from "../../actions/ClefActions";
import CloseButton from 'react-icons/lib/fa/close';
import './ErrorsStyles.css';

/**
 * Class to handle display of error messages generated by the client or by the Clef API.
 *
 * @since 1.0.0
 */
class ErrorsContainer extends React.Component {

    constructor( props ) {
        super( props );
        this.displayErrors.bind( this );
    }

    /**
     * Displays any error messages that have been pushed to the Redux state object.
     *
     * @return {Array}
     * @since 1.0.0
     */
    displayErrors() {
        let errs = [];
        const {removeError} = this.props;
        if ( Array.isArray( this.props.errors ) && this.props.errors.length > 0 ) {
            this.props.errors.map( function ( msg, i ) {
                // Attach removeError as a callback function to be executed on click.
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

    /**
     * Render this component to the DOM.
     *
     * @return {*}
     * @since 1.0.0
     */
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
