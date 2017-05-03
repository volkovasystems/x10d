"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "x10d",
              			"path": "x10d/x10d.js",
              			"file": "x10d.js",
              			"module": "x10d",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/x10d.git",
              			"test": "x10d-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Marks the class as extensive.
              
              		By marking the class as extensive, then we can rebuild the inheritance tree with ease.
              	@end-module-documentation
              
              	@include:
              		{
              			"burne": "burne",
              			"falzy": "falzy",
              			"protype": "protype"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var burne = require("burne");
var falzy = require("falzy");
var protype = require("protype");

var EXTENSIVE = (0, _for2.default)("extensive");

var x10d = function x10d(blueprint) {
	/*;
                                     	@meta-configuration:
                                     		{
                                     			"blueprint:required": "function"
                                     		}
                                     	@end-meta-configuration
                                     */

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	}

	burne(EXTENSIVE, blueprint);

	return blueprint;
};

module.exports = x10d;

//# sourceMappingURL=x10d.support.js.map