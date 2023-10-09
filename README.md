# HomeWork_3

## Програма для перетворення чисел у їхній "правописний" еквівалент від 0 до 100.
В програму потрібно ввести число в діапазоні 0...100. В даній версії, число генерується випадково!

### ___Трішки про те як вона працює___
В основі логіки програми лежать умовні оператори "if", "switch...case".

Спочатку генерується випадкове число в межах 0...100. Наступний крок це перетворення "числа" в "рядок": 
```JavaScript
const num = Math.floor(Math.random() * 101)
num_s = num.toString()
```

За допомогою умовного оператора, "if", визначаємо довжину масиву попередньо перетвореної строки. Якщо в масиві тільки однин елемент значить це числа в межах від 0 до 9.
Якщо два елементи, відповідно, числа від 10 до 99
```JavaScript
if(num_s.length == 1)
{
    // Код для співставлення чисел та та варіант числа прописом
} 
else if(num_s.length == 2)
{
    // Код для співставлення чисел та та варіант числа прописом
}
```

Далі, за допомогою конструкції "switch...case" співставляємо елемент масиву з його еквівалентною "прописовою" формою:
```JavaScript
function firstNum(x)
{
    switch(x)
    {
        case "2": first_d = "Twenty"; break
        case "3": first_d = "Thirty"; break
        case "4": first_d = "Forty"; break
        case "5": first_d = "Fifty"; break
        case "6": first_d = "Sixty"; break
        case "7": first_d = "Seventy"; break
        case "8": first_d = "Eighty"; break
        case "9": first_d = "Ninety"; break
    }
}

function secondNum(y)
{
    switch(y)
    {
        case "0": second_d = "Zero"; break
        case "1": second_d = "One"; break
        case "2": second_d = "Two"; break
        case "3": second_d = "Three"; break
        case "4": second_d = "Four"; break
        case "5": second_d = "Five"; break
        case "6": second_d = "Six"; break
        case "7": second_d = "Seven"; break
        case "8": second_d = "Eight"; break
        case "9": second_d = "Nine"; break
    }
}
```

Виводмо результат:
```JavaScript
console.log(num, "=>", first_d, second_d)
```

Мною було прийняте рішення, використати лише дві функції порівняння! Для виведення одноцифрових чисел та деяких двоцифрових цього коду було достатньо. Дл того щоб вивести десятки (20, 30, 40, 50, ...), просто робимо перевірку на те, що другий елемент рівний нулю і виводимо тільки першу частину двоцифрового числа:
```JavaScript
if (num_s[1] == "0")
{
    switch(num_s[0]) // Так як "Десять" має особливий запис робимо ще одну перевірку
    {
         case "1": console.log(num, "=>", "Ten"); break;
         default:
             firstNum(num_s[0])
             console.log(num, "=>", first_d)
    }
    return;
}
```

Наступною задачею було вивести перший десяток чисел (10...19). Перша думка була зробити ще одну функцію співставлення з вже готовими значеннями, типу: "Одинацять", "Дванацять", ..., але в мене з'явилася цікава ідея, до більшості цих чисел додати закінчення "-нацять" чи "-teen", НАПРИКЛАД: 12 => "Два"+"-нацять". Мені здалось це цікавми підходом і я вирішив спробувати реалізувати його! Проте не всі числа з першого десятку мають однакову конструкцію, деякі з них, а саме (11, 14, 15, 16, 19 ) - Укр. та (11, 12, 13, 15. 18 ) - Англ., мають інший запис тому прийшлось зробити додаткову перевірку щоб вивести ці числа окремо:
```JavaScript
if(num_s[0] == "1" && num_s[1] !== "0")
{
    switch(num_s[1])
    {
        case "1": console.log(num, "=>", "Eleven"); break;
        case "2": console.log(num, "=>", "Twelve"); break;
        case "3": console.log(num, "=>", "Thirteen"); break;
        case "5": console.log(num, "=>", "Fifteen"); break;
        case "8": console.log(num, "=>", "Eighteen"); break;
        default:
           secondNum(num_s[1])
           console.log(num, "=>", second_d + "teen")
    }
    return;
}
```

І на завершення число 100, щоб не робили зайвої перевіки виводимо його, якщо число не відповідає всім іншим умовам

### ___Результати:___

Числа (0...9)

![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/0.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/2.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/6.png)

Числа (10...19)

![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/10.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/11.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/12.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/13.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/14.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/15.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/18.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/19.png)

Числа (20...99)

![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/20.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/40.png)
![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/63-65.png)

Число (100)

![](https://github.com/Eduard-Babchuk/HomeWork_3/blob/main/Photo/100.png)

_Дякую! Щиро ваш, Бабчук Едуард (ІПЗс-23-1)_
