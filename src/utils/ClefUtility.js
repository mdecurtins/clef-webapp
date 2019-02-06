/**
 * Utility class, mainly providing methods to construct the parameter string of a request URL to be sent to the Clef
 * REST API. May contain other utility methods in the future.
 *
 * @since 1.0.0
 */
export default class ClefUtility {


    /**
     * Constructs a complete parameter string to append to a Clef REST API route.
     *
     * @since 1.0.0
     * @param {Array} selectedAlgorithms
     * @param {Array} selectedDatasets
     * @return {string}
     */
    static constructRequestUrlParameterString( selectedAlgorithms = [], selectedDatasets = [] ) {
        let retval = "";

        // Check the parameters received.
        if ( ! Array.isArray( selectedAlgorithms ) ||
            ( Array.isArray( selectedAlgorithms ) && selectedAlgorithms.length === 0 ) ) {
            retval = "INVALID_ALGORITHMS";
        }
        if ( ! Array.isArray( selectedDatasets ) || 
            ( Array.isArray( selectedDatasets ) && selectedDatasets.length === 0 ) ) {
            retval = "INVALID_DATASETS";
        }

        // Array to gather the various parts of the URL. These will be strings of the key=value type.
        let params = [];


        // Get the algorithms we are going to run.
        let algNames = "";
        if ( ( algNames = ClefUtility.getAlgorithmNames( selectedAlgorithms ) ) !== "" ) {
            params.push( algNames );
        }

        // Get the algorithm parameters and their values, if any.
        let algParams = "";
        if ( ( algParams = ClefUtility.getAlgorithmParameterString( selectedAlgorithms ) ) !== "" ) {
            params.push( algParams );
        }

        // Get the dataset names we are going to use.
        let dsets = "";
        if ( ( dsets = ClefUtility.getDatasetsParameter( selectedDatasets ) ) !== "" ) {
            params.push( dsets );
        }

        // If we have stuff to join
        if ( params.length > 0 ) {
            // Append the URL separator.
            retval += "?";
            retval += params.join( '&' );
        }

        return retval;
    }


    /**
     * Gets a CSV list of algorithm names.
     *
     * If successful, this method returns a string of the form "algorithms=foo,bar,baz,etc"
     *
     * @since 1.0.0
     * @param {Array} selectedAlgorithms
     * @return {string}
     */
    static getAlgorithmNames( selectedAlgorithms ) {
        let retval = "";
        let names = selectedAlgorithms.map(
            function ( alg ) {
                return alg.algorithm;
            }
        );
        if ( Array.isArray( names ) && names.length > 0 ) {
            retval = ClefUtility.getParameterPair( "algorithms", names.join( ',' ) );
        }
        return retval;
    }


    /**
     * Gets an algorithm-specific parameter key of the form "algorithmName$parameterName".
     *
     * This helps to namespace algorithm parameters.
     *
     * @since 1.0.0
     * @param {string} algorithmName
     * @param {string} parameterName
     * @return {string}
     */
    static getAlgorithmParameterKey( algorithmName, parameterName ) {
        return algorithmName + "$" + parameterName;
    }


    /**
     * Constructs a complete URL string of algorithm-specific parameters for a single algorithm.
     *
     * @since 1.0.0
     * @param {string} algorithmName The algorithm to which these parameters apply.
     * @param {Array} params The parameters of the algorithm.
     * @return {string}
     */
    static getAlgorithmParameters( algorithmName, params = [] ) {
        let retval = "";
        if ( Array.isArray( params ) && params.length > 0 ) {

            // Get an array of strings of the format "algorithmName$parameterName=parameterValue"
            let kvpairs = params.map(
                function ( p ) {
                    if ( p.hasOwnProperty( 'parameterName' ) && p.hasOwnProperty( 'parameterValue' ) ) {
                        let key = ClefUtility.getAlgorithmParameterKey( algorithmName, p.parameterName );
                        return ClefUtility.getParameterPair( key, p.parameterValue );
                    }
                }
            );

            // If we have any items, join them, e.g.
            // algorithmName$parameterName1=parameterValue1&algorithmName$parameterName2=parameterValue2
            if ( kvpairs.length > 0 ) {
                retval = kvpairs.join( '&' );
            }

        }
        return retval;
    }


    /**
     * Constructs a complete URL string of algorithm-specific parameters for all algorithms selected.
     *
     * @since 1.0.0
     * @param {Array} selectedAlgorithms
     * @return {string}
     */
    static getAlgorithmParameterString( selectedAlgorithms = [] ) {
        let retval = "";
        if ( Array.isArray( selectedAlgorithms ) && selectedAlgorithms.length > 0 ) {
            // for each algorithm
                // get algorithm parameters
            let paramStrings = selectedAlgorithms.map(
                function ( alg ) {
                    let pstring = "";
                    if ( ( pstring = ClefUtility.getAlgorithmParameters( alg.algorithm, alg.parameters ) ) !== "" ) {
                        return pstring;
                    }
                }
            );

            if ( paramStrings.length > 0 ) {
                retval = paramStrings.join( '&' );
            }
        }
        return retval;
    }


    /**
     * Constructs a CSV string of dataset names.
     *
     * @since 1.0.0
     * @param {Array} datasets
     * @return {string}
     */
    static getDatasetsParameter( datasets = [] ) {
        let retval = "";
        if ( Array.isArray( datasets ) && datasets.length > 0 ) {
            retval = ClefUtility.getParameterPair( "datasets", datasets.join( ',' ) );
        }
        return retval;
    }


    /**
     * Gets a string representing a single URL key=value pair.
     *
     * @since 1.0.0
     * @param {string} key
     * @param {*} val Non-string values will be coerced via toString()
     * @return {string}
     */
    static getParameterPair( key, val ) {
        return key + "=" + val;
    }
}