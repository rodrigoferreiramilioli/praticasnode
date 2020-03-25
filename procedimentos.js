
const init = async() => {
    try{
        let produtosDoAtendimento = await [{"nome":"maca"}];
        let procedimentosDoAtendimento = await [{"teste":"coronavirus"}];        
        return { 
            produtos: produtosDoAtendimento,
            procedimentos: procedimentosDoAtendimento
        };
    } catch(err){
        console.log(err)
    }
}
console.log(init())
    
    init().then( procedimentos => console.log(procedimentos))