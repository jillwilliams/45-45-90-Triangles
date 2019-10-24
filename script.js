const myProblem = () => {
    var side = document.getElementById("myX").value;
    if (side == 10) {
        return "Good Job!"
    } else 
        return "Try Again";
}
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}