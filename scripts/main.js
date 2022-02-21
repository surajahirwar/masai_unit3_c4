async function apiCall(url) {

    try{
            let res = await fetch(url);
            let data = res.json();
            return data;
    }
    catch(err){

        console.log("err:", err)

    }
}



function appendArticles(articles, main) {

    articles.forEach((el) =>{

        let div = document.createElement("div");

        div.onclick = () =>{
            localStorage.setItem("click_images_data", JSON.stringify(el));
            window.location.href = "news.html"
        }
        let images = document.createElement("img");
        images.src = el.urlToImage;

        let title = document.createElement("p");
        title.innerText = el.title;
        title.id = "par"

        let description = document.createElement("p");
        description.innerText = el.description;

        div.append(images, title, description);
        main.append(div)


    });


    // console.log("articles:",articles)

}

export { apiCall, appendArticles }

// export { apiCall}/