




const apiToken = "2df6d56d26bf2d46558ee71cffef52c0";

let theCard = `
<div class="card shadow-sm" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`


function newHeadlines(){
    const xhr = new XMLHttpRequest();
    // console.log(url2);
    // console.log("Triggered");
let url2 = `https://gnews.io/api/v4/search?q=example&country=in&token=${apiToken}`
xhr.open('GET' , url2 , true);
let newsHTML = "";
xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let toadd = document.getElementById('freespace');
        // console.log(articles);
        for(news in articles){
            // console.log(articles[news].source.url);
            news = `
            <div class="card shadow-sm m-3" style="width: 20rem; ">
            <img src="${articles[news].image}" class="card-img-top" alt="Top Headlines">
            <div class="card-body">
              <h4 class="card-title">${articles[news].title}</h4>
              <span class="badge bg-secondary">${articles[news].publishedAt}</span>
              <span class="badge bg-secondary">${articles[news].source.name}</span>
              <p class="card-text">${articles[news].content}</p>
              <a href="${articles[news].url}" target="new" class="btn btn-primary">Read Full Article</a>
            </div>
            </div>`
            newsHTML += news;
        }
        toadd.innerHTML = newsHTML;
    }
    else{
        console.log("Error Occured");
    }
}

xhr.send();
}

newHeadlines();

let refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener("click" , newHeadlines);
