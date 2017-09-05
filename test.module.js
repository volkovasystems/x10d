"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "x10d",
			"path": "x10d/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/x10d.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"x10d": "x10d"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const x10d = require( "./x10d.js" );
//: @end-server

//: @client:
const x10d = require( "./x10d.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:
describe( "x10d", ( ) => {

	describe( "`x10d( function Hello( ){ } )`", ( ) => {
		it( "should mark the class as extensive", ( ) => {
			let result = x10d( function Hello( ){ } );

			assert.equal( typeof result == "function", true );

			assert.equal( result[ Symbol.for( "extensive" ) ], Symbol.for( "extensive" ) );
		} );
	} );

} );
//: @end-server


//: @client:
describe( "x10d", ( ) => {

	describe( "`x10d( function Hello( ){ } )`", ( ) => {
		it( "should mark the class as extensive", ( ) => {
			let result = x10d( function Hello( ){ } );

			assert.equal( typeof result == "function", true );

			assert.equal( result[ Symbol.for( "extensive" ) ], Symbol.for( "extensive" ) );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "x10d", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`x10d( function Hello( ){ } )`", ( ) => {
		it( "should mark the class as extensive", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = x10d( function Hello( ){ } );

					let test = ( typeof result == "function" ) &&
						( result[ Symbol.for( "extensive" ) ] == Symbol.for( "extensive" ) );

					return test;
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );
		} );
	} );

} );
//: @end-bridge