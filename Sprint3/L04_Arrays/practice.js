// Q1 for a given array of marks - find class average

let arr = [85,97,44,37,76,60]

let count = 0
let marksSum = 0

for (let i = 0 ; i < arr.length ; i++){
    count += 1;
    // console.log(arr[i])
    marksSum = marksSum+arr[i]
    // console.log(marksSum)
}
console.log(`Total no of marks are ${count}`)
console.log(`Total sumation of marks are ${marksSum}`)
let average = marksSum/count
console.log(`Class average is ${average}`)

// Q2 array for item prices , store have a offer of 10%, change the array to store final prices after offer

let itemPrices = [250,645,300,900,50]
for (let i = 0 ; i < itemPrices.length ; i++){
    // console.log(itemPrices[i])
    itemPrices[i] = itemPrices[i] - (itemPrices[i]/10)
    console.log(itemPrices[i])
}

/*
Q3 in a array of companies
a. remove first company from array
b. remove uber and add ola on its place
c. add amazon at end
*/

let companies = ['bloomberg','microsoft','uber','google','ibm','netflix']

// a.
console.log(companies)
companies.shift()
console.log(companies)

// b.
companies.splice(1, 1, 'ola')
console.log(companies)

// c.
companies.push('amazon')
console.log(companies)