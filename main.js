
function calculator(op){
    var num1Input = document.getElementById('number1').value
    var num2Input = document.getElementById('number2').value

    var inputOne = isNaN(num1Input)
    var inputTwo = isNaN(num2Input)

    document.getElementById('number1').style.borderBottom = '2px solid grey'
    document.getElementById('number2').style.borderBottom = '2px solid grey'

    if (inputOne == false && inputTwo == false){
        var num1 = Number(num1Input)
        var num2 = Number(num2Input)
        var sum

        switch (op) {
            case '+':
                sum = num1 + num2
                break;
            case '-':
                sum = num1 - num2
                break;
            case '*':
                sum = num1 * num2
                break;
            case '/':
                sum = num1 / num2
                break;
            default:
                break;
        }

        document.getElementById('result').innerHTML = sum
    } else {
        if (inputOne == true){
            document.getElementById('number1').style.borderBottom = '2px solid red'
        }
        if (inputTwo == true){
            document.getElementById('number2').style.borderBottom = '2px solid red'
        }
    }

}