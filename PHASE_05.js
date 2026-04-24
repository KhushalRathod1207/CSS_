//  Promise and async/await 

// A Promise is an object that represents future value.
/*
| State         | Meaning                         |
| ------------- | ------------------------------- |
| **pending**   | Work not finished yet (waiting) |
| **fulfilled** | Work completed successfully     |
| **rejected**  | Work failed                     |

*/

const p = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Done")
    } else reject("Error");
})

p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})