/* async com promise*/
var x = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(50);
        }, 5000);
    })    
}

async function sleep (value){
    let data = await x();
    return data+value;
}
sleep(10).then(value => {
    console.log(value);
});