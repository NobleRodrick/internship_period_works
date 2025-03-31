function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log("Promise lecture starts")
delayFn(2000).then(() => console.log("Promise completed after 2 seconds"))
console.log("Promise lecture ends")


function divideFn(num1, num2){
    return new Promise((resolve, reject) => {
        if(num2 === 0){
            reject(new Error("Cannot divide by zero"))
        }else{
            resolve(num1 / num2)
        }
    })
}

divideFn(10, 5)
    .then(result => console.log(result))
    .catch(error => console.log(error, "Error"));