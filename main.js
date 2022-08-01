let div = $('<div>Hello World!!</div>')
let body = $('body');
body.append(div);
div.on('click', function(){
    alert("Hellow World!")
});
