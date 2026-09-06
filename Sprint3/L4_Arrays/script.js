console.log("HII")

// arrays   -   to store same type of information , although we can store multu datatype
// -    its a linear datatype

let marks = [68,98,46,99,78]
console.log(marks)

// used when we want to store multiple items . but with same name 
//properties
console.log(marks.length)

let stud = ["bimlesh",'Sonu','naman','parth']
console.log(stud)
console.log(stud.length)

// arrays - itself is a object type - with defalut keys as index 0-n

console.log(typeof marks)

// Array Indices

console.log(marks[1])
// update
marks[0] = 91;
console.log(marks)

// Iteration / looping in an array      - for loop

for (let i = 0; i < marks.length ; i++){
    console.log(marks[i])
}

// for of loop

for (let ele of stud){
    console.log(ele)
}
// ele - directly accesses the values of array

let cities =["dlehi",'jaipur','patna','pune']
for(let ele in cities){
    console.log(ele)
}
// here ele - stores the key so 
for(let ele in cities){
    console.log(cities[ele].toUpperCase())
}

// Array methods - perform some task 

/*
push()          add at end
pop()           delete from end and return 
toString()      convert whole array as a single string
concat()        join multiple arrays and return resultant array
unshift()       add at start
shift()         delete from start and return
slice()         return a peice of array , slice(start , end index)

# splice()      chnages original array (add,remove,replace), slice(Start index, delete count, New ele1,new ele2,new ele3)

*/

let food = ['potato','tomato','onion','garlic']
console.log(food)
food.push('ginger','grass')
console.log(food)
let deletedItem = food.pop()
console.log(deletedItem)
console.log(food)
console.log(food.toString())

let mix = food.concat(marks)
console.log(mix)

mix.unshift("horse")
console.log(mix)

let deletedItem2 = mix.shift()
console.log(mix)
console.log(deletedItem2)

console.log(mix.slice(0,5))
console.log(mix.slice(1))

console.log('Splice method')
console.log(mix)
// replace
console.log(mix.splice(5, 1, 'fish','eggs','milk'))
console.log(mix)
// only add
mix.splice(5, 0, 'chicken')
console.log(mix)
// only delete
mix.splice(5,1)
console.log(mix)