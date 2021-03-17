const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        // esta promesa se resuelve o es rechazada, es decir es verdadero o no
        if (true) {
            resolve('hey!');
        } else {
            reject('Whooops!');
        }
    });
};

// acá se ejecuta (.then significa que tengo una respuesta y con ella se hace algo)
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whooops!')
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

// este método corre varias promesas, las ejecuta y regresa un arreglo con la respuesta de ambas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    });
