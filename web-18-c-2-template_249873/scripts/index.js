// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu
var bucket= JSON.parse(localStorage.getItem("coffee")) || [];
let count = 0;


const url =`https://masai-mock-api.herokuapp.com/coffee/menu`;
const container = document.getElementById("menu");

let x = fetch(url);
console.log("x :",x);

fetch(url)
.then(function(res) {
    // console.log(res.json());
    return res.json();
})
.then(function(res) {
    console.log(res.menu.data);
    appendData(res.menu.data);
})
.catch(function(err) {
    console.log(err);
})

function appendData(data) {
    data.forEach(function(elem){
        
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.image;
        image.style.width = "300px";
        image.style.height = "300px";
        image.style.marginTop = "30px";
        image.style.borderRadius="10px";

        let name = document.createElement("p");
        name.innerHTML = elem.title;
        name.style.fontStyle="bolder";
        name.style.fontWeight="bold";
        name.style.color="purple";
        name.style.fontStyle = "italic";

        let price = document.createElement("p");
        price.innerHTML = elem.price;
        price.style.fontStyle="bolder";
        price.style.fontWeight="bold";
        price.style.color="purple";
        price.style.fontStyle = "italic";

        let btn = document.createElement("button");
        btn.innerHTML = "Add to Bucket";
        btn.setAttribute("id","add_to_bucket");

        btn.addEventListener("click", function(){
            bucket.push(elem);
            // console.log("adding to count");
            count++;
            localStorage.setItem("coffee", JSON.stringify(bucket));
            
            location.reload(true);

        })
        div.append(image,name,price,btn);
        container.append(div);
        document.getElementById("coffee_count").innerHTML = bucket.length;
        
    });
}