while (i<=30) {

    if(extensoes[i]=='jpeg'||extensoes[i]=='JPEG'||extensoes[i]=='Jpeg'||
        extensoes[i]=='jpg'||extensoes[i]=='JPG'||extensoes[i]=='Jpg'
        ){  

            function toDataURL(url, extensao, idTransacao, token, callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        var reader = new FileReader();
                        reader.onloadend = function() {
                        callback(reader.result);
                        }
                        reader.readAsDataURL(xhr.response);
                    };
                    xhr.open('GET', urls[i]);
                    xhr.responseType = 'blob';
                    xhr.send();
                    }

                    var url = urls[i];
                    var  extensao = extensoes[i];

                  toDataURL(url, extensao, idTransacao, token, function(dataUrl) { 
                        
                        dataUrl = dataUrl.replace("data:image/jpeg;base64,", "");
                        console.log('Imagem:', dataUrl) 
                        var elemento_pai = document.getElementById('formImg');
                        var titulo = document.createElement('input');
                        titulo.value = dataUrl
                        titulo.name= "img"+[i]
                        elemento_pai.appendChild(titulo);
                  

                        var data = JSON.stringify({
                            "idTransacao": idTransacao ,
                            "tipoDocumento":"RG",
                            "extensao": "jpg" ,
                            "documento": dataUrl });
                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;
                        xhr.addEventListener("readystatechange", function() {
                        if(this.readyState === 4 ) {

                            if(xhr.status == 204) {  
                            console.log(this.responseText+"ïmagem enviada status  "+xhr.status);
                            }else{
                                console.log(xhr.status)
                            }
                        }else{
                                console.log(this.responseText)
                            }
                        });
                        xhr.open("POST", "https://url/documento/base64");
                        xhr.setRequestHeader("Authorization", "Bearer "+token);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send(data);
                         
                  
            })


        } else if(extensoes[i]=='pdf'||extensoes[i]=='PDF'||extensoes[i]=='Pdf'){

     
        function base64Encode(str) {
                        var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        var out = "", i = 0, len = str.length, c1, c2, c3;
                        while (i < len) {
                            c1 = str.charCodeAt(i++) & 0xff;
                            if (i == len) {
                                out += CHARS.charAt(c1 >> 2);
                                out += CHARS.charAt((c1 & 0x3) << 4);
                                out += "==";
                                break;
                            }
                            c2 = str.charCodeAt(i++);
                            if (i == len) {
                                out += CHARS.charAt(c1 >> 2);
                                out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                                out += CHARS.charAt((c2 & 0xF) << 2);
                                out += "=";
                                break;
                            }
                            c3 = str.charCodeAt(i++);
                            out += CHARS.charAt(c1 >> 2);
                            out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                            out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                            out += CHARS.charAt(c3 & 0x3F);
                        }
                        return out;
                    }

                    function getBinary(file){
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", file, false);
                            xhr.overrideMimeType("text/plain; charset=x-user-defined");
                            xhr.send(null);
                            return xhr.responseText;
                    }

                    var url = urls[i];
                    var b = getBinary(url);
                    var dataUrl = base64Encode(b);

                        console.log(dataUrl);
                        var elemento_pai = document.getElementById('formImg');
                        var titulo = document.createElement('input');
                        titulo.value = dataUrl
                        titulo.name= "pdf"+[i]
                        elemento_pai.appendChild(titulo);


         var extensao = extensoes[i];

             if(extensoes[i]=='pdf'||extensoes[i]=='PDF'||extensoes[i]=='Pdf'){
                var data = JSON.stringify({
                                "idTransacao": idTransacao ,
                                "tipoDocumento":"RG",
                                "extensao": "pdf" ,
                                "documento": dataUrl });
                            var xhr = new XMLHttpRequest();
                            xhr.withCredentials = true;

                            xhr.addEventListener("readystatechange", function() {
                            if(this.readyState === 4) {
                                console.log(this.responseText +"pdf enviado");
                            }else{
                                console.log(this.responseText + xhr.status)
                            }
                            });
                            xhr.open("POST", "https://url/documento/base64");
                            xhr.setRequestHeader("Authorization", "Bearer "+token);
                            xhr.setRequestHeader("Content-Type", "application/json");
                            xhr.send(data);
                  }


      }else if (extensoes[i]=='png'||extensoes[i]=='PNG'||extensoes[i]=='Png'){

        function toDataURLPng(url, extensao, idTransacao, token, callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        var reader = new FileReader();
                        reader.onloadend = function() {
                        callback(reader.result);
                        }
                        reader.readAsDataURL(xhr.response);
                    };
                    xhr.open('GET', urls[i]);
                    xhr.responseType = 'blob';
                    xhr.send();
                    }

                    var url = urls[i];
                    var  extensao = extensoes[i];

                  toDataURLPng(url, extensao, idTransacao, token, function(dataUrl) { 
                        
                        dataUrl = dataUrl.replace("data:image/png;base64,", "");
                        console.log('Imagem:', dataUrl) 
                        var elemento_pai = document.getElementById('formImg');
                        var titulo = document.createElement('input');
                        titulo.value = dataUrl
                        titulo.name= "img"+[i]
                        elemento_pai.appendChild(titulo);
                  

                        var data = JSON.stringify({
                            "idTransacao": idTransacao ,
                            "tipoDocumento":"RG",
                            "extensao": "png" ,
                            "documento": dataUrl });
                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;
                        xhr.addEventListener("readystatechange", function() {
                        if(this.readyState === 4 ) {

                            if(xhr.status == 204) {  
                            console.log(this.responseText+"ïmagem enviada status  "+xhr.status);
                            }else{
                                console.log(this.responseText + xhr.status)
                            }
                        }else{
                                console.log(this.responseText)
                            }
                        });
                        xhr.open("POST", "https://url/documento/base64");
                        xhr.setRequestHeader("Authorization", "Bearer "+token);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send(data);
                         
                  
            })

      }else{
        
          console.log(extensoes[i],"ND");
      }

i++;

}