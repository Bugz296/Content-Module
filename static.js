module.exports = function(request, response){
    const fs = require('fs');
    const path = require('path');
    let contentType = "", charSet = "";
    if(path.extname(request.url) == '.html'){
        contentType = "text/html";
        charSet = "utf-8";
    }else if(path.extname(request.url) == '.css'){
        contentType = "text/css";
        charSet = "utf-8";
    }else if(path.extname(request.url) == '.jpg'){
        contentType = "image/jpg";
    }else{
        contentType = "text/html";
        charSet = "utf-8";
    }
    fs.readFile('.'+request.url, charSet, function (errors, contents){
        if(errors){
            response.writeHead(400, {'Content-Type': contentType});  // send data about response
            response.write("File doesn't exist");  //  send response body
        }else{
            response.writeHead(200, {'Content-Type': contentType});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        }
        response.end(); // finished!
    });
}