/* callback simples, este exemplo visa chamar uma função que espera outra ficar pronta*/
var val=0;
var valor = 0;
var y = (val) => {
    return val*20;
};

var x = (valor, callback) => {
    valor += callback;
    console.log(valor);
}

x(2, y(1));

/* exemplo callback com tempo ele espera 10 segundos e retorna 50 para somar com a primeira function*/
var tempo=0;
var addTemp = 0;

var x = (tempo, callback) => {
    setTimeout(() => {
        callback (50);
    }, tempo);
}

var y = (addTemp, response)=>{
    x(10000, (data, err) => {
        response(addTemp+data);
    })
}

y(200, (data,err) => {
    console.log(data);
});

/* melhorando a mesma função, agora o retorno do callback de tempo 
vai buscar de outra função produzindo famoso Hadouken*/

var tempo=0;
var addTemp = 0;

var z = (callback) =>{
    callback (150);
}

var x = (tempo, value,  callback) => {
    setTimeout(() => {
        callback(value);
    }, tempo);
}

var v = (addTemp, callback) => {
    z((data, err) => {
        x(10000,data,(response, error)=>{
            callback(response+addTemp);
        })
    })
}

v(10, (data, err) => {
    console.log(data);  
})