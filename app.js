function longestPalindrome(input = "aasasaa") {
    let start = 0, end = 1;
    let left = 0, right = 0;

    for (let i = 0; i < input.length; i++) {
        left = i;
        right = i + 1;

        while (left >= 0 && right < input.length && input[left] === input[right]) {

            if (right - left + 1 > end - start + 1) {
                start = left;
                end = right;
            }

            left--;
            right++;
        }

    }

    for (let i = 0; i < input.length; i++) {
        left = i;
        right = i + 2;

        while (left >= 0 && right < input.length && input[left] === input[right]) {

            if (right - left + 1 > end - start + 1) {
                start = left;
                end = right;
            }

            left--;
            right++;
        }

    }

    return [start, end]
}



function maxSumSubArray(arr) {
    let sum = 0;
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

function reverse(str) {
    let strArr = str.split("");
    let left = 0;
    let right = strArr.length - 1;

    while (left <= right) {
        let temp = strArr[left];
        strArr[left++] = strArr[right];
        strArr[right--] = temp;
    }

    return strArr.join("");
}

function isPalindrome(str) {
    const middle = 0 + Math.floor((str.length - 0) / 2);
    console.log('middle', middle)
    let left = 0, right = str.length - 1;
    while (left <= middle - 1 && str[left] === str[right]) {
        console.log(str[left], str[right])
        left++;
        right--;

    }

    if (left === middle) {
        return true
    }

    return false
}

// continued exploring workbench
// explored about symbols
// created custome symbols as navbar
// learnt to import symbols to the existing UI


// hav some impediments that I will discuss internally with the team and Sumit

// Thants all Thanks.



const __chunk = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
};

const twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        console.log("part2", part2, "part1", part1)
        console.log(store.indexOf(part2));
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2]);
        }
        store.push(part1);
    }

    return pairs;
};



function sumKSize(arr, k) {
    // [1,2,3,4,5,6]
    let left = 0, right = 0;
    let curSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;


    for(let i=0; i<arr.length; i++) {
        right = i;
        curSum += arr[i];

        if(right - left + 1 === k) {
            maxSum = Math.max(maxSum, curSum);
            curSum -= arr[left];
            left++;
        }
    }

    return maxSum;
}



function spreadArray() {
    const arr = [1,2,[3,4,[5,[6,[7,{val:8}]]]]]; 
    let result = [];
    getResult(result, arr);
    return result
}

function getResult(result, arr) {
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            getResult(result, arr[i])
        } else {
            result.push(arr[i])
        }
    } 
}


return {
    "all": [
        {
            "fact": "peviousAnswers.Lo2x6FYsgEtybDRozyiW1",
            "operator": "equal",
            "value": "yes"
        }
    ]
}

const a = {
    name: "Md Israil",
    age: 29,
    getName: function() {
        return this.name
    },
    getAge: function() {
        return this.age
    }
}


const b = Object.create(a.__proto__)
const c = Object.create(a)

function Person(gender, desg, city) {
    const propertyDescriptor = {
        gender: {
            value: gender,
            writable: true,
            enumerable: true,
            configurable: true
        },
        desg: {
            value: desg
        },
        city: {
            value: city,
            writable: true
        }
    }

    return Object.create(a, propertyDescriptor)
}