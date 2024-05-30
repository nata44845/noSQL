const shuffle = function (str) {
    var array = str.split('');
    var shuffledArr = array.sort(function () {
        return Math.random() - 0.5;
    });
    console.log(shuffledArr);
    return shuffledArr.join('');
}

console.log(shuffle("Hello"));