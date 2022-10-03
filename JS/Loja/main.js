var product = [{
    id: 0,
    img: 'image.jpg',
    name: "Batata",
    marca: "Linguini",
    price: 1.50
},{
    id: 1,
    img: 'image.jpg',
    name: "Chiclete",
    marca: "Sosclick",
    price: 0.50
},{
    id: 2,
    img: 'image.jpg',
    name: "KinderOvo",
    marca: "Kinder",
    price: 7.50
},{
    id: 3,
    img: 'image.jpg',
    name: "Linguiça",
    marca: "Heiseinwald",
    price: 15.0
}];

showproduct = () => {
    var containerprodutos = document.getElementById('produtos');
    product.map((val) => {
        containerprodutos.innerHTML+=`

            <div class="produtoSingle">
                <img src="`+val.img+`" />
                <p>`+val.name+`</p>
                <p>`+val.marca+`</p>
                <p>R$`+val.price+`</p>
            </div>
        
            `;
    })
}

compararprecos = () => {
    let precoscomp = [];
    for(i = 0; i < product.length; i++) {
        precoscomp.push(parseFloat(product[i].price));
    }
    precoscomp.sort(function(a, b){return a-b})
    console.log(precoscomp)
}


showproduct();