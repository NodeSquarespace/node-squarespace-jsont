/*!
 *
 * Formatter: safe
 * Returns a string with tags stripped out
 *
 * @usage: {@|safe}
 *
 */
module.exports = function ( val, args, ctx ) {
    return require( "phpjs" ).strip_tags( val );
};