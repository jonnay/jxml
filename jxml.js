
var v = require('valentine');

// TODO: render should be able to insert optional CRs.
// TODO: look at SXML for ideas. jxpath anyone?
// TODO: consider processing instructions that don't sucks
// TODO: better namespace handling?  
// TODO: enable the handling of a function inside of jxml
// TODO: enable a table-oriented handler.  hell, maybe even re-write this to be more oo-like
exports.render = function(jxml) {
	if (v.is.str(jxml)) {
		return jxml;
	} else if (v.is.arr(jxml)) {
		return renderTag(jxml);
	} else {
		throw "("+(typeof jxml)+") "+jxml+" is not valid in a jxml structure.";
	}
}

renderTag = function(jxml) {
	var out = "<";
	var tag = jxml.shift();
	
	out = out + tag;

	if (v.is.obj(jxml[0])) {
		out = out + renderAttributes(jxml.shift());
	}

	// tag with no decendents
	if (jxml.length == 0) {
		return out + "/>";
	}
	
	out = out + ">";
	
	out = out + jxml.reduce(function(p, c) {
		return p + exports.render(c);
	}, "");

	
	return out + "</"+tag+">";
}

//TODO: Fix attributes to have proper entity encoding.
renderAttributes = function(attObj) {
	var out = "";

	for(var a in attObj) {
		out = out + " " +a + '="' + attObj[a] + '"'; // This likely sucks, cause attributes need to have entities encoded. 
	}

	return out;
}
