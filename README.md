# pentizr.js

A simple jQuery plugin which uses the unofficial [CodePen](http://codepen.io) API to show pens on a personal website.

**pentizr** uses the [unofficial CodePen API](https://github.com/TimPietrusky/codepen-awesomepi) to fetch the data and creates some nice output for you. 

But just see for yourself... A **pentizr** custom template in action:

# Live examples

## Dreamdealer

[**dreamdealer.nl**/#codepens](http://www.dreamdealer.nl/#codepens)

## Tim Pietrusky

[**timpietrusky.com**/lab](http://timpietrusky.com/lab)

## How to

### Step 1: Default stuff

Add **jQuery**

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
```
    
### Step 2: pentizr
 
Add **pentizr.js**

```html
<script src="https://raw.github.com/TimPietrusky/pentizr/master/js/pentizr-min.js"></script>
```

### Step 2.5 (optional): Add **pentizr.css**

You can create your own (based on a simple template system) or add the default stuff: 

```html
<link rel="stylesheet" href="https://raw.github.com/TimPietrusky/pentizr/master/css/pentizr-min.css">
```
       
### Step 3: GO GO GO!

We use the same HTML on all examples:

```html  
<div class="my-pens"></div>
```

#### Get owned pens of user "Mobilpadde" (aka Mads "The Cat" Cordes)

```javascript
$(function() {
  $('.my-pens').pentizr({username: 'Mobilpadde'});
});
```

#### Create a custome template and get your owned pens of user "TimPietrusky"

```javascript
$(function() {
    $('.my-pens').pentizr({
        username: 'TimPietrusky', 
        type : 'owned', 
        limit : 9,
        callback : function() {
            // Custom callback after everything was created (elements are dom ready)
            _1337.toggleEntry();
        },
        // A custom template
        template : ''+
        '<div class="entry">'+
            '<h2 class="label" id="{{title}}" data-label="{{hearts}} ♥ | {{views}} views">{{title}}</h2>'+
            '<div class="entry-body">'+
                '<p></p>'+
                '<p>{{description}}</p>'+
                '<hr>'+
                '<b>See it in action</b>'+
                '<p><a href="{{urlPen}}" target="_blank">{{urlPen}}</a></p>'+
                '<b>Write a comment</b>'+
                '<p><a href="{{urlDetails}}" target="_blank">{{urlDetails}}</a></p>'+
            '</div>'+
        '</div>'
    });
});
```

#### Get last 3 loved pens of user "HugoGiraudel"

```javascript
$(function() {
        $(function() {
            $('.my-pens').pentizr(
                {
                    username : 'HugoGiraudel',
                    type : 'loved',
                    limit : 3
                }
            );
        });
});
```