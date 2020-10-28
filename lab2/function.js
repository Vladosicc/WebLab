function ReturnArgument(arg) {
    return arg;
}

function ReturnSumArgument(arg1, arg2) {
    return arg1 + arg2;
}

function powDouble() {
    var defArr = [1, 2, 3, "text", 4, "string", "5"];
    document.getElementById("func3").innerHTML = "Дефолтный массив: ";
    document.getElementById("func3").innerHTML += defArr;
    console.log("Дефолтный массив");
    console.log(defArr);
    var newArr = defArr.map((item) =>
        isNaN(item) ? item = 0 : item *= item // Типа перебор массива с лямбда выражением вместо функции
    )
    document.getElementById("func3").innerHTML += " | Новый массив: ";
    document.getElementById("func3").innerHTML += newArr;
    console.log("Преобразованные значения");
    console.log(newArr);
}