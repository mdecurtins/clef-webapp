export default class ClefUtility {

    /**
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
     *
     * @since 1.0.0
     * @param {Array} params
     * @return {string}
     */
    static getAlgorithmParameters( params = [] ) {
        let retval = "";
        if ( Array.isArray( params ) && params.length > 0 ) {
            /*
            params.forEach( function ( p ) {

            });
            */
        }
        return retval;
    }


    /**
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
     *
     * @since 1.0.0
     * @param {string} key
     * @param {*} val
     * @return {string}
     */
    static getParameterPair( key, val ) {
        return key + "=" + val;
    }
}