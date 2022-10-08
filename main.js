var arr = []

function check(){
    let inputVal = document.getElementById("Inp").value;
    for (i = 1; i <= inputVal; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 == 0) {
            arr.push("Fizz");
        } else if (i % 5 == 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    arr.map(function (item) {
        document.getElementById("answer").innerHTML += item + "<br>";
    });
}