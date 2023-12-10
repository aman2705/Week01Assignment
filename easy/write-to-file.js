const fs=require('fs');

let data='I am working in policy search Squad, I had got so much awesome team mates, I feel like they are the real enginners and I am nothing.'

function write(){
    fs.writeFile('file.txt',data,'utf-8',function(err){
        if(err){
            console.log("Unable to Write message successfully!")
        }
        else{
            console.log("Able to write message successfully.")
        }
    })
}
write();