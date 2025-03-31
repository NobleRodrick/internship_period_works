function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name){
    await delayFn(2000);
    console.log(`Hello ${name}`);
}

delayedGreet("Alloh Nkefor Rodrick");

async function division(num1, num2) {
    try {
        if(num2 === 0){
            throw new Error("Cannot divide by zero");
        }
            return num1 / num2;
    } catch(error){
        console.log("error", error);
        return null
    }
}

async function mainFn() {
    const result = await division(10, 0);
    const result2 = await division(10, 5);
    console.log(result);
    console.log(result2);
}

mainFn();