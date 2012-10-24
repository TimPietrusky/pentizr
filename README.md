# pentizr.js

[CodePen](http://codepen.io) on your website in less than 25 seconds.

2012 by http://timpietrusky.com

# Live example

[About Tim Pietrusky](http://timpietrusky.koding.com/dateme)

## How to

### Step 1: Default stuff

Add [-prefix-free](http://leaverou.github.com/prefixfree/) by [Lea Verou](http://lea.verou.me/) 

```html
<script src="https://raw.github.com/LeaVerou/prefixfree/gh-pages/prefixfree.min.js"></script>
```

Add [jQuery](http://leaverou.github.com/prefixfree/) 

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
```
    
### Step 2: pentizr

Add **pentizr.css**

```html
<link rel="stylesheet" href="https://raw.github.com/TimPietrusky/pentizr/master/css/pentizr.css">
```
        
Add **pentizr.js**

```html
<script src="https://raw.github.com/TimPietrusky/pentizr/master/js/pentizr.js"></script>
```
        
### Step 3: GO GO GO!

#### Get owned pens of user "TimPietrusky"

```javascript
$(function() {
  $('.my-pens').pentizr({username: 'TimPietrusky'});
});
```

```html  
<div class="my-pens"></div>
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

```html  
<div class="my-pens"></div>
```