define(['text!../hello.html', 'suren-require!../hello.html', 'two'], function (text, req, two) {
   return {
       run: function () {
           console.log('hello from requrie run.');
           console.log(req);
           console.log(two);
           two.fun();
       }
   };
});