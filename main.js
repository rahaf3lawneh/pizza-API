 async function getmeals(){
    const response =  await fetch (`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    console.log(data);
    const recipes = data.recipes;



  const result = recipes.map(function(pizza){
    return `
    <div class = " pizza " >
    <h2> ${pizza.title}</h2>
    <img src = '${pizza.image_url}' />
    </div>


    `;

}).join('');

document.querySelector(".meals .row").innerHTML = result;
 }


getmeals();
