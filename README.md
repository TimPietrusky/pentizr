# pentizr.js

[CodePen](http://codepen.io) on your website in less than 25 seconds.

2012 by http://timpietrusky.com

## How to

### Step 1: Default stuff

Add [-prefix-free](http://leaverou.github.com/prefixfree/) by [Lea Verou](http://lea.verou.me/) 

    <script src="https://raw.github.com/LeaVerou/prefixfree/gh-pages/prefixfree.min.js"></script>

Add [jQuery](http://leaverou.github.com/prefixfree/) 

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
    
### Step 2: pentizr

Add **pentizr.css**

    <link rel="stylesheet" href="https://raw.github.com/TimPietrusky/pentizr/master/css/pentizr.css">
        
Add **pentizr.js**

    <script src="https://raw.github.com/TimPietrusky/pentizr/master/js/pentizr.js"></script>
        
### Step 3: GO GO GO!

    <script type="text/javascript">
        $(function() {
            $('.my-pens').pentizr({username: 'TimPietrusky'});
        });
    </script>
    
    <body>
        <div class="my-pens"></div>
    </body>