function taiDuLieu(){
    var http = new XMLHttpRequest();
    var post = document.getElementById('container');
    http.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var rawData = http.responseText;
            var data = JSON.parse(rawData);
           for (var i = 0; i < data.length; i++) {
            
                var card = document.createElement('div'); 
                card.className = 'card-group col-6 my-3 ';

                if(i % 2 == 0){
                    var row = document.createElement('div'); 
                    row.className = 'row flex-row';  
                }
                
                var cardBody = document.createElement('div');
                cardBody.className = 'col-md-7 ';
                
                var title = document.createElement('h4');
                var titleText = document.createTextNode(data[i].title);
                title.appendChild(titleText);
                cardBody.appendChild(title);
               
                var cardContent = document.createElement('p');
                cardContent.className = 'card-text';
                var cardText = document.createTextNode(data[i].description);
                cardContent.appendChild(cardText);
                cardBody.appendChild(cardContent);
               
                var cardLink = document.createElement('a');
                cardLink.className = 'card-link';
                cardLink.setAttribute('href', '#');
                var cardText = document.createTextNode('Continue reading');
                cardLink.appendChild(cardText);
                cardBody.appendChild(cardLink);card.appendChild(cardBody);

                // if(data[i].categories.id != null){
                //     var btn = document.createElement('button');
                //     btn.className = 'btn btn-primary';
                //     btn.setAttribute('name',(i+1));
                //     btn.appendChild(card);
                // }


        
                var cardImg = document.createElement('div');
                cardImg.className = 'col-md-5 ';
                cardImg.setAttribute('id', ('image-' + (i + 1)));
                card.appendChild(cardImg);
                row.appendChild(card);
                post.appendChild(row);
                document.getElementById('image-' + (i + 1)).style.backgroundImage = 'url(' + data[i].image_url + ')';

              }
            
        }
    }
    http.open ('GET','https://namcoi.com/projects/news-website-laravel/public/api/posts');
    http.send();
}

