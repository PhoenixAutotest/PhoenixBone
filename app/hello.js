define(['text!../hello.html', 'suren-require!../hello.html'], function (text, req) {
   return {
       run: function () {
           console.log('hello from requrie run.');
           console.log(req);
       }
   };
});