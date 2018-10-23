//write first method
function sleep_in(x,y) {
    var shouldSleepIn = !x || y;
    return shouldSleepIn;

}
function start(){
    sleep_in(true,false);
}

//write second problem
function monkey_trouble(a_smile, b_smile) {
    if(a_smile==b_smile){
        return true;
    }else{
        return false;
    }
}

//writen third problem
function string_times(string, int) {
    var text = string;
    if (int > 0) {
        for (var i = 0; i < int -1; i++) {
            text = text + string;
        }
        return text;

    }else{
        return "";
    }
}

//write fourth problem

function front_times(string, int) {
    var text = string.substr(0,3);
    if (int > 0) {
        for (var i = 0; i < int -1; i++) {
            text = string.substr(0,3) + text;
        }
        return text;

    }else{
        return "";
    }
}

//write fifth problem
function string_bits(string){
    var stringLength = string.length;
    var newString = "";
    var letter = "";
    for(var i = 0; i < stringLength/2; i++){
        letter = string.substring( 2 * i, 1 + 2 * i);
        newString += letter;
    }
    return newString;
}

//write sixth problem
function caughtSpeeding(speed, birthday) {
    if (birthday = true) {
        speed = speed-5;
    }
    if (speed <= 60) {
        return 0;
    } else if (61 <= speed && speed <= 80) {
        return 1;
    } else if (speed >= 81) {
        return 2;
    }
}

//write seventh problem
function fizz_buzz(num) {
    if (num % 3 === 0 && num%5 !== 0 ) {
        return "Fizz";
    }else{
        if(num%5 ===0 && num%3 !== 0 ){
            return "Buzz"
        }
        if(num%5 === 0 && num%3 === 0){
            return "FizzBuzz"
        }
        if (num%5 !== 0 && num%3 !== 0)
            return num + "!";
    }
}

//write eight problem
function teaParty(tea, candy) {
    if(tea>=5 && candy>=5){
        if(tea >= 2*candy || candy >= 2* tea){
            return 2;
        }else{
            return 1;
        }
    }else{
        return 0;
    }
}

//write ninth problem]
function blackjack(num1, num2){
    if(21 - num1 < 21 - num2 && num1<= 21){
        return num1;
    }else if(21 -num2 < 21 - num1 && num2<= 21) {
        return num2;
    }else if (num1>21 && num2 > 21){
        return 0;
    }else if(num1< 21 && num2 >21){
        return num1;
    }else if(num2< 21 && num1 >21) {
        return num2;
    }
}

//write tenth problem
function loneSum(a, b, c) {
    if(a===b & a===c){
        sum = 0;
    } else if (a === c) {
        sum = b;
    } else if(b===c){
        sum = a;
    } else if(a===b){
        sum =c;
    } else if (a !== b && a !== c) {
        sum = a+b+c;
    }

    return sum;
}
