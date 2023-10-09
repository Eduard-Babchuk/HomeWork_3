const num = Math.floor(Math.random() * 101)
num_s = num.toString()

let first_d
let second_d

if(num_s.length == 1)
{
    secondNum(num_s[0])
    console.log(num, "=>", second_d)
    return;
} 
else if(num_s.length == 2)
{
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
    else if (num_s[1] == "0")
    {
        switch(num_s[0])
        {
            case "1": console.log(num, "=>", "Ten"); break;
            default:
                firstNum(num_s[0])
                console.log(num, "=>", first_d)
        }
        return;
    }

    firstNum(num_s[0])
    secondNum(num_s[1])
    console.log(num, "=>", first_d, second_d)
    return;
}
console.log(num, "=>", "One hundred")

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