//
const http = required('http');


const found = (port) => {
    http.get('http://localhost/:$%7Bport%7D/ping', (res) =>{

        res.setEncoding{'utf8'};
        res.on('data',(chunk) => {
            console.log(chunk);
            console.log('Result: find port ${port} is open');
        });


    }).on('error', (e) =>{
        console.log('Error: ${e.code} at ${e.address}:${e.port}');
    });

}

setTimeout(() =>{
    for (let port = 300; port < 400; port++) {
    found(port);
    }
},3000);
