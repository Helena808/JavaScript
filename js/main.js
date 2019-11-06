// import {generateCards} from "./notMain.js";

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25,
        img: "piano.jpg",
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "guitar.jpg",
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "drum.jpg",
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50,
        img: "flute.jpg",
    }    
};

function generateCards(data,parentElem) {
    for (let item in data) {
        let card = document.createElement("div");
        card.classList.add("card");
        let title = document.createElement("h2");
        title.innerText = data[item]["title"];
        let img = document.createElement("img");
        img.setAttribute("src","img/"+data[item]["img"]);
        let price = document.createElement("p");
        price.innerText = `Цена: ${data[item]["price"]}`;

        card.append(title,img,price);
        parentElem.append(card);
    }
}

// export {generateCards};
let section = document.getElementById("goods");
generateCards(goods, section);

//<div class="card">
  //      <h2>Title</h2>
    //    <img src="img/flute.jpg">
      //  <p>Price</p>
 //  </div> -->