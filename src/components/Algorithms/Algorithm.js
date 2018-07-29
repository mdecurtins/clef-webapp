import React from 'react';
import {connect} from 'react-redux';
import {addCheckbox, addSelectedAlgorithm,
    changeCheckboxState, removeCheckbox, removeSelectedAlgorithm} from "../../actions/ClefActions";

/**
 * Class representing a music information retrieval Algorithm available to be run by the Clef system.
 *
 * @since 1.0.0
 */
class Algorithm extends React.Component {

    constructor( props ) {
        super( props );

        // Bind the instance methods.
        this.deselectAlgorithm.bind( this );
        this.displayAlgorithmSelect.bind( this );
        this.displayAlgorithmType.bind( this );
        this.displayAllowedDataFormats.bind( this );
        this.displayCapabilities.bind( this );
        this.displayParameters.bind( this );
        this.displayQuerySizeRange.bind( this );
        this.getCheckbox.bind( this );
        this.makeCheckboxObject.bind( this );
        this.selectAlgorithm.bind( this );
    }

    /**
     * Fires after the component's initial DOM render.
     *
     * @since 1.0.0
     */
    componentDidMount() {
        let cbox = this.makeCheckboxObject();
        this.props.pushCheckbox( cbox );
    }


    /**
     * Dispatches an action to remove this Algorithm from the algorithmsSelected key in the Redux state.
     *
     * @since 1.0.0
     */
    deselectAlgorithm() {
        let popval = {
            algorithm: this.props.alg.name,
            index: this.props.position
        };
        this.props.deselect( popval );
    }


    /**
     * Gets the HTML to display the checkbox that allows a user to select this Algorithm to be run.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayAlgorithmSelect() {
        let name = this.props.alg.name;
        let checkbox = this.getCheckbox();

        // Default value, for the initial render of the component before componentDidMount fires.
        let checked = false;

        // Because the checkbox to select this Algorithm will only be pushed to state after the component mounts, it
        // will only exist after that point.
        if ( checkbox !== null && typeof checkbox !== 'undefined' ) {
            checked = checkbox.checked;
        }

        return (
            <input type="checkbox"
                   id={"select-" + name}
                   value={this.props.position}
                   checked={checked}
                   onChange={this.handleAlgorithmSelect.bind(this)} />
        );
    }


    /**
     * Gets the HTML to display the type of this Algorithm.
     *
     * Generally, MIR algorithms fall into one of two types: string-based, and geometric.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayAlgorithmType() {
        return ( <p>Algorithm Type: {this.props.alg.type}</p> );
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
     * Gets the HTML for displaying the monophonic/polyphonic capabilities of this Algorithm.
     *
     * Applies both to the Algorithm's input capabilities (monophonic/polyphonic queries) and to its dataset
     * capabilities (whether it can be run on monophonic/polyphonic datasets).
     *
     * @since 1.0.0
     * @return {*}
     */
    displayCapabilities() {
        let dataCaps = this.props.alg.datasetCapabilities;
        let inputCaps = this.props.alg.inputCapabilities;
        return (
            <div className="capabilities">
                <table>
                    <thead>
                        <tr><th>Capabilities:</th><th>Dataset</th><th>Input</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monophonic</td>
                            <td>{(dataCaps.monophonicData) ? "true" : "false"}</td>
                            <td>{(inputCaps.monophonicData) ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <td>Polyphonic</td>
                            <td>{(dataCaps.polyphonicData) ? "true" : "false"}</td>
                            <td>{(inputCaps.polyphonicData) ? "true" : "false"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    }


    /**
     * Gets the HTML for displaying the publicly-exposed parameters available for this Algorithm.
     *
     * @since 1.0.0
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
     * Gets the HTML for displaying the query size range accepted by this Algorithm.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayQuerySizeRange() {
        let caps = this.props.alg.inputCapabilities;
        return (
            <div className="query-size-range">
                <p>Allowed query size, in notes (min, max): ({caps.querySizeMin}, {caps.querySizeMax})</p>
            </div>
        );
    }


    /**
     * Gets the checkbox that belongs to this Algorithm component instance.
     *
     * This checkbox is the one that controls whether this Algorithm is currently selected by the user to be sent to the
     * Clef API when the "Search" button is clicked. There should ever only be one of these checkboxes per
     * Algorithm.
     *
     * @since 1.0.0
     * @return {object | null} the checkbox that belongs to this instance, or null if none/2+ checkboxes found.
     */
    getCheckbox() {
        let retval = null;
        let index = this.props.position;
        let cbox = this.props.cboxes.filter(
            function ( c ) {
                return ( c.which === 'algorithm' && c.index === index );
            }
        );
        if ( cbox.length === 1 ) {
            retval = cbox[0];
        }
        return retval;
    }


    /**
     * Gets an HTML input element for a parameter of this Algorithm.
     *
     *
     * @since 1.0.0
     * @param param
     * @return {*}
     */
    getParameterFormElement( param ) {
        let retval = null;
        if ( param !== null && typeof param === 'object' ) {
            if ( param.hasOwnProperty( 'type' ) ) {
                switch ( param.type ) {
                    case "boolean":
                        retval = (<input type="checkbox" />);
                        break;
                    case "number":
                        retval = (<input type="number" />);
                        break;
                    case "string":
                        retval = (<input type="text" />);
                        break;
                }
            }
        }
        return retval;
    }


    /**
     * Changes the checked state of the selection checkbox associated with this Algorithm component instance.
     *
     * Also dispatches an action to add this Algorithm to the algorithmsSelected key in the Redux application
     * state object.
     *
     * @since 1.0.0
     */
    handleAlgorithmSelect() {
        // Get this component's checkbox from the Redux state.
        let cbox = this.getCheckbox();

        // Dispatch a changeCheckboxState action on this checkbox.
        this.props.changeCheckbox( cbox );

        // Get the updated checkbox from state.
        cbox = this.getCheckbox();

        // If our new checkbox state is checked, add this Algorithm to the algorithmsSelected key.
        if ( cbox.checked === true ) {
            this.selectAlgorithm();
        } else {
            // Otherwise, remove it from the algorithmsSelected key.
            this.deselectAlgorithm();
        }
    }


    /**
     * Makes an initial checkbox object to pass to the Redux store.
     *
     * @since 1.0.0
     * @return {{which: string, index: number | string, checked: boolean}}
     */
    makeCheckboxObject() {
        return {
            which: "algorithm",
            index: this.props.position,
            checked: false
        };
    }


    /**
     * Dispatches an Algorithm object to add to the algorithmsSelected key in the Redux state.
     *
     * This object is not the same as the algorithm object received in this.props.alg, because for the purposes of
     * constructing a request for the Clef API we only need to know the algorithm name and any parameters it takes.
     *
     * @since 1.0.0
     */
    selectAlgorithm() {
        let pushval = {
            algorithm: this.props.alg.name,
            index: this.props.position,
            parameters: []
        };
        this.props.select( pushval );
    }


    /**
     * Renders the HTML for this component to the DOM.
     *
     * @return {*}
     */
    render() {
        return (
            <div className="clef-algorithm">
                <div className="clef-algorithm-select">
                    {this.displayAlgorithmSelect()}
                    <label htmlFor={"select-" + this.props.alg.name}>{this.props.alg.displayName}</label>
                </div>

                {this.displayCapabilities()}
                {this.displayQuerySizeRange()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        cboxes: state.checkboxes
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        changeCheckbox: function ( checkbox ) {
            dispatch( changeCheckboxState( checkbox ) );
        },
        deselect: function ( alg ) {
            dispatch( removeSelectedAlgorithm( alg ) );
        },
        popCheckbox: function ( checkbox ) {
            dispatch( removeCheckbox( checkbox ) );
        },
        pushCheckbox: function ( checkbox ) {
            dispatch ( addCheckbox( checkbox ) );
        },
        select: function ( alg ) {
            dispatch( addSelectedAlgorithm( alg ) );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Algorithm );