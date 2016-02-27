/**
 * Created by sushi on 17/02/16.
 */


var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;          // b = 5, c:global = 6

    (function secondFunction(){
        var b = 8;             // b = 8
        console.log("a: "+a+", b: "+b+", c: "+c);
        (function thirdFunction(){
            var a = 7, c = 9;  // a = 7 , c:global = 9

            (function fourthFunction(){
                var a = 1, c = 8;     // a = 1 , c:global = 8;

            })();
        })();
    })();
})();


/* var a = 4; // global variable can be accessed anywhere.

function foo() {
    var b = a * 3; // b = 12;

    function bar(c) {
        var b = 2; // another new variable b is created
        console.log(a,b,c);
    }

    bar(b * 4);
}

foo(); // 4, 2, 48

var d = 5

function fun() {

   var  d = 6;

}

console.log (d);
fun()
console.log (d);
*/
