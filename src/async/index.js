const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        //si se cumple se demra 3 segundos en entregar
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            //cuando la promesa no se cumple
            : reject(new Error('Test Error'))
    });
};

//ejecutar promesa con async await
const doSomething = async () => {
    //esperar a que suceda, según el caso(true or false)
    const something = await doSomethingAsync();
    console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

//captura de errores
const anotherFunction = async () => {
    //código que esperamos que se ejecute
    try {
        const something = await doSomethingAsync();
        console.log(something);
        //en caso de no ejecutarse try, se ejecuta catch
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
