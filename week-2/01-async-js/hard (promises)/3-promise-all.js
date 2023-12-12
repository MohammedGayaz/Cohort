/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */



/* this is explicit definiton of the below wait1,2,3 function
function wait(t){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(t)
        }, t);
    })
}
*/

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })   
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })
}

function calculateTime(t1, t2, t3) {
    const beforCall = new Date();
    return Promise.all([wait1(t1 * 1000), wait2(t2 * 1000), wait3(t3 * 1000)]).then((values) => {
        const afterCall = new Date();
        return (afterCall - beforCall);
    })
}

// Example usage:
// calculateTime(1, 2, 3).then((totalTime) => {
//     console.log(`Total time taken: ${totalTime} milliseconds`);
// });

module.exports = calculateTime;
