function foo() {

  var a = 1;
  var b = 3;

  var terriblename = bar(arguments);

  function bar(argsFromFoo) {

    var b = 2;

    console.log("a", a);
    console.log("b", b);

    return argsFromFoo;

  }; // -> {0: "something"}

  console.log("b", b);
  console.log("return ", terriblename);

}

foo(1,2);

/*

  foo
    1,2
  bar(arguments)
  arguments -> {0: 1, 1: 2}
    -> 1,2
    <- nothing
  console.log(terriblename)

  > foo(1,2)
  a { '0': { '0': 1, '1': 2 } }
  b undefined

*/
 
 //single line

// fs.readFile('REfdADME.md', 'utf-8', function (err,data) { if(err) {console.log("WATWAT"); return; } console.log(data) })