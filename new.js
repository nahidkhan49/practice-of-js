const searchItem=(input)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
    .then((res)=>res.json())
    .then((data)=>{
        displayData(data);
        console.log(data);
    })
}


document.getElementById("type").addEventListener("click",(event)=>{
    let input=document.getElementById("valuebox").value.trim();
    if(input){
        searchItem(input);
        document.getElementById("valuebox").value="";
    }
    
})

const displayData=(userData)=>{
    const container=document.getElementById("cards");
    container.innerHTML="";
    if(userData.meals){
        userData.meals.forEach((user)=>{
        const div=document.createElement("div");
            div.classList.add("items");
        div.innerHTML=`
        <img onclick="singleItem('${user.idMeal}')" class="img" src="${user.strMealThumb}">
        <h3>${user.strMeal.slice(0,25)}</h3>
        `;
        container.append(div);
    });
    }
    else{
        container.innerHTML=`
        <h3>No meals found</h3>
        `;
    }
};

const singleItem=(idmeal)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
    .then((res)=>res.json())
    .then((sitem)=>{
        console.log(sitem);
        singlecontain(sitem.meals[0]);
    })
};

const singlecontain=(newitem)=>{
    const scontain=document.getElementById("single");

    const div=document.createElement("div");
    div.classList.add("scard");
    div.innerHTML=`
    <img class="imgs" src="${newitem.strMealThumb}">
    <div class="nd">
    <h2>${newitem.strMeal.slice(0,25)}</h2>
    <h3>Ingredient</h3>
    <hr>
    <ul>
    <li>${newitem.strIngredient1}</li>
    <li>${newitem.strIngredient2}</li>
    <li>${newitem.strIngredient3}</li>
    <li>${newitem.strIngredient4}</li>
    <li>${newitem.strIngredient5}</li>
    <li>${newitem.strIngredient6}</li>
    </ul>
    </div>
    `;
    scontain.append(div);
}
