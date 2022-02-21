function add (num1, num2 = 0) {  // 0 hocce default value;
    // option - 1
    // num2 = num2 || 0;
    // option - 2;
    // console.log(num1, num2);
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}

const result = add(15, 17);
console.log(result);


function fullName (first, last = 'chowdhury') { // chowdhury hocce default value
    const name = first + ' ' + last;
    return name;
}

