
function receivesAFunction(callback){
    console.log(callback)
    callback()
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function(){}
}