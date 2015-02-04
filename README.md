node-squarespace-jsont
======================

> The json-template render engine for Squarespace in node.


### Installation
```shell
npm install node-squarespace-jsont
```

#### Updating
```shell
npm update node-squarespace-jsont
```



### Usage

```javascript
var sqsJsonTemplate = require( "node-squarespace-jsont" );

// template = string html, data = page json object
sqsJsonTemplate.render( template, data );
```

Given some json data
```json
{
    "collection" : {
        "title" : "Page Title",
        "description" : "This is the page description."
    }
}
```

And an html template with json-t
```html
{.section collection}
    <h1>{title}</h1>
    <p>{description}</p>
{.end}
```

You get the following on render
```html
<h1>Page Title</h1>
<p>This is the page description.</p>
```


You can learn all about Squarespace and JSON-T templating [here](http://developers.squarespace.com/templating-basics/).