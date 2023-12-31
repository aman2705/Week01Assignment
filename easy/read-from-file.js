const fs=require('fs');

function read(){
    fs.readFile('file.txt','utf-8',function(err,data){
        console.log(data);
    });
}

read();