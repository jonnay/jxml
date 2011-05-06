var assert = require('assert');
var j = require('./jxml.js');
var render = j.render;

assert.equal(render(["br"]), "<br/>");
assert.equal(render(["img", {"src":"foo"}]) ,  '<img src="foo"/>');

assert.equal(render(["parent", "child text"]) ,  '<parent>child text</parent>');
assert.equal(render(["parent", ["child"]]) ,  '<parent><child/></parent>');

	var jxml =
			["html",
			 ["head", ["title", "REPL"]],
			 ["body",
			  "<?pi processing instruction here. Better way to signify it would be awesome?>",
			  ["form", {"action": "/", "method":"POST"},
			   "Fear the form",
			   ["input", {"type": "text", "name":"command"}],
			   "With improper embedded stuff",
			   ["input", {"type": "submit", "name":"submit"}]]]];
	var expected = '<html><head><title>REPL</title></head><body><?pi processing instruction here. Better way to signify it would be awesome?><form action="/" method="POST">Fear the form<input type="text" name="command"/>With improper embedded stuff<input type="submit" name="submit"/></form></body></html>';

assert.equal(render(jxml) ,  expected);

