// function showRating(rating) {
//     let ratings = '';
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += '*'
//         if (i !== Math.floor(rating) - 1) {
//             ratings += ' '
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += ' .'
//     }
//     return ratings
// }

// console.log(showRating(1.5))

// function sortLowToHigh(arr) { // How to sort low to high
//     return arr.sort((a, b) => a - b)
// } 
// console.log(sortLowToHigh([10, 2, 31, 4, 57]))

// function sortHighToLow(numbers) { //use .whatever to indicate portion of onject looking to use for array
//     return numbers.sort((a, b) => b.price - a.price
// );
// }
// console.log(
//     sortHighToLow([
//         { id: 1, price: 50 },
//         { id: 2, price: 0 },
//         { id: 3, price: 500 },
//     ])
// )

// fetch('https://jsonplaceholder.typicode.com/posts')


// async function postsByUser(userId) {
// const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await response.json()
// const posts = data.filter(elem => elem.userId === userId)
// console.log(posts)
// }

// postsByUser(4)

// fetch('https://jsonplaceholder.typicode.com/todos')

// async function firstSixIncomplete(completed) { //grabbing individual section of data 
// const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
// const result = await promise.json()
// const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6) //.slice lets you restrict the number of items in an array

// console.log(incompleteTasks)
// }
// console.log(firstSixIncomplete(6))