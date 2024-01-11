const products=document.getElementById("products")

function getProduct(){
    products.innerHTML=""
    let cart=JSON.parse(localStorage.getItem("heart")) || []
    db=cart
    db.map((item, index) => {
        const box = document.createElement('div');
        box.className = 'col content';
        box.innerHTML = `<img src="${item.image}" alt="img">
                <h2>${item.title}</h2>
                <h3>${item.name}</h3>
                <p>${item.price} $</p>
                <div class="basket"><button class="btnRemove" onclick="remove(${index})">Remove</button>
               
            `;
        products.appendChild(box);
    });
}
getProduct()





function remove(index){
    let heart=JSON.parse(localStorage.getItem("heart")) || []
    heart.splice(index,1)
    localStorage.setItem("heart",JSON.stringify(heart))
    getProduct()
}

