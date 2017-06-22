const assert = require( "assert" );
const x10d = require( "./x10d.js" );

let test = x10d( function Hello( ){ } );

assert.equal( typeof test == "function", true, "should return true" );

assert.equal( test[ Symbol.for( "extensive" ) ] == Symbol.for( "extensive" ), true, "should return true" );

console.log( "ok" );
