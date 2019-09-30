function testNumbers1(){
    rs = document.getElementById("result1")
    rs.innerHTML = Number.MAX_VALUE;
    rs.innerHTML += "<br><br>";
    rs.innerHTML += Number.MIN_VALUE;

}

function testNumbers2() {
    return Math.ceil(Math.random()*(11));
}


function testNumbers3 (a, b){
    rs = document.getElementById("result3");
    rand = Math.random();
    rs.innerHTML = rand;
}
