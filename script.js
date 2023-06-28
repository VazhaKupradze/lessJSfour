// ----1---- //


let arrayOne = [5, 25, 89, 120, 36]

arrayOne.push('javascript', 'pyton')
arrayOne.unshift('html', 'css')

console.log(arrayOne.length);

arrayOne.pop()
arrayOne.shift()

console.log(arrayOne);

// ----2---- //

let arrayTwo = ['ფორთოხალი', 'ბანანი', 'მსხალი']

console.log(arrayTwo.length);

arrayTwo.push('ვაშლი', 'ანანასი')
arrayTwo.unshift('საზამთრო')

console.log(arrayTwo.length);

arrayTwo.splice(2, 0, 'მანგო')
arrayTwo.pop()
arrayTwo.shift()

console.log(arrayTwo.length);

// ----3---- //


let arrayThree = [1, 2, 3, 4, 5]

arrayThree.splice(3, 0, 'a')
arrayThree.splice(4, 0, 'b')
arrayThree.splice(5, 0, 'c')
console.log(arrayThree)


// ----4---- //


let arrayFour = [1, 2, 3, 4, 5]
sum = 0;

arrayFour.forEach(function (item) {
    sum += item
})

console.log(sum);


// ----5---- //


for (let i = 100; i > 0; i--) {
    console.log(i);
}


// ----6---- //


function comparedNums(num1, num2) {
    if (num1 > num2) {
        console.log('num1 is the largest');
    } else if (num2 > num1) {
        console.log('num2 is the largest');
    } else {
        console.log('error');
    }
}

comparedNums(2, 9);
comparedNums(9, 2);
comparedNums(9, 9);


// ----7---- //


let arraySeven = [12, 25, 3, 6, 8, 14, 7, 23]

let newArraySeven = arraySeven.map(function (item) {
    return item / 3;
})

console.log(newArraySeven);


// ----8---- //


let arrayEight = ['html', 'css', 'javascript', 'pyton', 'php'];

let newArrayEight = arrayEight.filter(function (item) {
    return item.length > 3;
})

console.log(newArrayEight);


// ----9---- //


// ----10---- //


let arrayTen = [-1, -2, -3, 4]

let newArrayTen = arrayTen.some(function (item) {
    return item > 0;
})

console.log(newArrayTen);


// ----11---- //


let arrayEleven = [2, 15, 10, 24]

arrayEleven.splice(2, 1)

console.log(arrayEleven);