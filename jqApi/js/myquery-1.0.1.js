/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Author: JaniceDongMM
 * Email: 1213198891@qq.com
 *
 * Date: 2018-12-04
 */
//匿名函数，立即执行,独立作用域
(function( global, factory ) {
    /**
     * 判断当前的运行环境
     * 1、浏览器换环境：生成jQuery对象，作为window对象的属性
     * 2、CommonJS环境：模拟一个类似window的全局对象，然后赋给module.exports
     */


    if(typeof module === "object" && typeof module.exports === "object"){
        module.exports = global.document ?
            factory(global, true) : 
            function( w ) {
                if( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
//如果window未定义，传this作为参数
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

    var arr = [];

    var document = window.document;

    var slice = [].slice;

    var version = "1.0.1",

        jQuery = function( selector, context ) {

        //初始化jQuery对象的构造器
        return new jQuery.fn.init( selector, context );
    };

    jQuery.fn = jQuery.prototype = {
        //当前版本号
        jquery: version,

        constructor: jQuery,

        //定义length属性，便于转化为类数组
        /**
         * 对象转换为数组的条件：
         *  length属性；
         *  key值必须为数字或者数字字符串
         */
        length: 0,

        toArray: function() {
            return slice.call( this );
        }


    }

    //初始化jQuery对象
    //正则：安全校验（#id 防止通过url的hash进行XSS攻击
    var rquickExpr;
    var init = function( selector, context, root ) {

        var match, elem;

        //如果选择器是字符串
        if( typeof selector === "string" ) {
            if( selector[0] === "<" && selector[selector.length-1] === ">" && selector.length >= 3) {
                match = [null, selector, null];
            }else {
                match = rquickExpr.exec( selector );
            }
        }
    }

    if(!noGlobal){
        window.jQuery = window.$ = jQuery;
    }
});