/**
 * 当前模块的名称为two，依赖的模块包括：one，并把fun函数导出（暴露）
 * @author suren
 */
define('two', ['one'], function () {
   console.log('already load module two.');

   function innerFun() {
       console.log('I am a inner function, you can not call me directly.')
   }

    return {
       fun: function () {
           innerFun();
           console.log('I am a demo function');
       }
    };
});