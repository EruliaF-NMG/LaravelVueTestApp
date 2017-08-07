<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>Laravel</title>

        <!-- Fonts -->
        {!! Html::style(mix('/css/app.css')) !!}

       <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-shim.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.2/es6-sham.min.js"></script>
       <script src="https://wzrd.in/standalone/es7-shim@latest"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.min.js"></script>
       <script src="https://www.promisejs.org/polyfills/promise-6.1.0.js"></script> -->
    </head>
    <body>
        <div id="app">

            <div class="" style="">    

                <!-- route outlet -->
                <!-- component matched by the route will render here -->
               <app></app>
            </div>
        </div>

        
        <script src="/js/app.js"></script>

    </body>
</html>