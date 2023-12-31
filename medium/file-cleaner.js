const fs=require('fs');


function clean(){
    fs.readFile('file.txt','utf-8',function(err,data){

        console.log("Before Trimming "+data);
        let arr=data.toString().split(' ');

        var output=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].length!=0){
                output.push(arr[i].trim());
            }
        }

        // console.log("After Trimming");
        
        let output_word="";
        for(let i=0;i<output.length;i++){
            output_word=output_word+output[i]+' ';
        }

        write(output_word);

    });

 
}

function write(output_word){
    fs.writeFile('file.txt',output_word,'utf-8',function(err){
        if(err){
            console.log("File Not Written Successfully!")
        }
        else{
            console.log("File Written Successfully!")
        }
    })
}

clean();