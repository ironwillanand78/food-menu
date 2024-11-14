let burgerCheck = document.querySelector("#burger");
let friesCheck = document.querySelector("#fries");
let drinkCheck = document.querySelector("#drink");
let menu = document.querySelector(".menu");
let orderbtn = document.querySelector(".orderbtn");
let containerDiv  = document.querySelector(".container");

// fetching the api image
async function fetchFood(foodType) {
    try{
        let data = await fetch(`https://api.unsplash.com/photos/random?query=${foodType}&client_id=Xi4hEH_CSoLNj82Ck7PwNBUQqN-lWW9k1JGpFdQ_RC0`);
        if(!data.ok){
            throw new Error(`Image not found ${data.status}`);
        }
        let response = await data.json();
        console.log(response);
        return response.urls.raw;
    }catch(error){
        console.error("Error fetching the image:", error);
        return null;
    }
}
burgerCheck.addEventListener("click" , () => {
    orderbtn.addEventListener("click" ,async () => {
        orderbtn.disabled = true;
        menu.style.display = "none";
        let div = document.createElement("div");
        div.className ="foodDiv";
        containerDiv.appendChild(div);
        let receivedOrder = await fetchFood("burger");
        div.style.backgroundImage = `url(${receivedOrder})`;
    })
})

friesCheck.addEventListener("click" , () => {
    orderbtn.addEventListener("click" ,async () => {
        orderbtn.disabled = true;
        menu.style.display = "none";
        let div = document.createElement("div");
        div.className ="foodDiv";
        containerDiv.appendChild(div);
        let receivedOrder = await fetchFood("fries");
        div.style.backgroundImage = `url(${receivedOrder})`;
    })
})

drinkCheck.addEventListener("click" , () => {
    orderbtn.addEventListener("click" ,async () => {
        orderbtn.disabled = true;
        menu.style.display = "none";
        let div = document.createElement("div");
        div.className ="foodDiv";
        containerDiv.appendChild(div);
        let receivedOrder = await fetchFood("drinks");
        div.style.backgroundImage = `url(${receivedOrder})`;
    })
})