

const category = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const allData = data.data ;
    buttonFu(allData);
}

const buttonFu = (allData) =>{
    const allDataBtn = document.getElementById('all-data');
    allData.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="categoryCard('${element.category_id}')" class="btn">${element.category}</button>
        `
        allDataBtn.appendChild(div);
    });
}

const categoryCard = async (Id) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${Id}`)
        const data = await res.json()
        showCard(data.data);
   
}

const showCard = (cardId) => {
    const categorieCard = document.getElementById('category-card');
    console.log(cardId)
    cardId.forEach(card => {
        const div = document.createElement('div');
        div.classList = 'card card-compact bg-base-100 shadow-xl' ;
        div.innerHTML =`
            <img src="${card?.thumbnail}" alt="category" class=" h-44 " />
            <div class="flex py-5">
            <div>
                <img src="${card?.authors[0]?.profile_picture}" alt="author"  class="rounded-full h-12">
            </div>
            <div class="card-body">
            <h2 class="card-title">${card?.title}</h2>
            <p>${card?.authors[0]?.profile_name}</p><p>${card?.authors[0]?.verified}</p>
            <p>${card?.others?.views} views</p>
            </div>
            </div>
        `;
        categorieCard.appendChild(div);
    });
}



category();