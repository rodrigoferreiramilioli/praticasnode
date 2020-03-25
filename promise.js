/* um exemplo de promise sem time, sem nada apenas executa, resolve e devolve*/
var x = () => {
    const promise = new Promise ((resolve, reject) => {
        resolve ("oi");
    });
    return promise;
}
x().then(data =>{
    console.log(data);
});
/* exemplo de promise com time, ternário e reject*/
var x = (number) => {
    const promise = new Promise((resolve, reject) =>{
        if(number === 0) {
            reject(new Error("Você enviou zero"));
        }
        else{
            let test = number % 2 == 0 ? true : false
            if(test){
                setTimeout(() => {
                    resolve(number*10);
                }, 10000);
            }
            else{
                resolve(number);
            }
        }
    });
    return promise;
}
/* enviar um dividendo de 2 ou impar ou 0 */
x(3).then((data) =>{
    console.log(data);
}).catch((data) =>{
   console.log(data);
});

/* uma promise que depende de outra promise para se resolver */
var data = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 5000);
    });
}
var mult = (dados) =>{
    return dados*20;
}

var divide = (dados) =>{
    return dados/20;
}

data()
    .then((data)=>{
        return mult(data);
    })
    .then((result)=>{
        return divide(result);
    })
    .then((result)=>{
        console.log(result);
    });