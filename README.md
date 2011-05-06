jxml
====
Represent XML as a simple Javascript datatype.  This is very similar to SXML (http://en.wikipedia.org/wiki/SXML)

Because jxml is simply an array, it is theoretically very easy to do some really cool things with it like:
  - write very simple xpath like parsers
  - write a simple, yet powerful, templating engine
  - write xslt style transformations using json and javascript

In fact, maybe these features will make it into jxml soon.  But for now it is super basic.


Getting Started
===============
Right now only one function is exported:  render.

Quite simply you have an array that represents your xml, and use render to actually transform it into xml.

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


This would emit:

  <html>
      <head>
	      <title>REPL</title>
      </head>
	  <body>
		  <?pi processing instruction here. Better way to signify it would be awesome?>
	      <form action="/" method="POST">
	          Fear the form <input type="text" name="command"/>
		      With improper embedded stuff
		      <input type="submit" name="submit"/>
          </form>
      </body>
  </html>

(actually, it won't have any CRs or indenting...)

Upcoming...
===========
  - there should be a jxml function, that takes xml and turns it into json
  - implement a simple xpath query funciton
  - allow the handling of functions inside of jxml for better templatey goodness and code-as-data-fun
  - better PI handling
  - namespaces a-la SXML?
  - There might be some dom-goodness to explore here
