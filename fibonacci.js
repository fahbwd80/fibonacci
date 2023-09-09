function runActivity() {
    var a = 0, b = 1;
    console.log(a);
    console.log(b);
    for(var i=0; i<=50; i++){
        var temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}

var number = parseInt(prompt('Enter the number of terms:'))
var n1 = 0;
var n2 = 1;
var nextTerm;
document.write('Fibonacci Series :' + '<br/>');
for (var i = 1; i <= number; i++)
{
    document.write(n1+ '<br/>');
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}