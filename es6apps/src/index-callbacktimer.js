
function sayHello(){
    console.log('hello')
}
function delay(callback){
  setTimeout(callback,5000,'hello!!!')
}
delay(function(data){
    console.log('delay',data)
});
sayHello();