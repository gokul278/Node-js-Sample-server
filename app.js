const http = require('http');

function createserver(request,response){

    console.log('a new request has been made')

    const movies = ['Vikram','Beast','Etharkkum thunindhavan','valimai','the warriorr'];

    response.end(JSON.stringify(movies));
}

const server = http.createServer(createserver);

server.listen(3000,function(){
    console.log('server is running on port 3000');
})