

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

const categoryCard = async (Id = 1000) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${Id}`)
        const data = await res.json()
        showCard(data.data);
        
   
}

const showCard = (cardId) => {
    const categorieCard = document.getElementById('category-card');
    categorieCard.innerHTML = '';
       

    cardId.forEach(card => {
        
        const totalSeconds = card?.others?.posted_date ? card?.others?.posted_date :' ';
        const hours = Math.floor(totalSeconds / 3600);
        const remainingSeconds = totalSeconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        console.log(`${hours} hours and ${minutes} minutes`);
        // const divEmpty = document.createElement('div');
        // divEmpty.innerHTML =`${card? card: }`
        // categorieCard.appendChild(divEmpty);

        const div = document.createElement('div');
        div.classList = 'card card-compact bg-base-100 shadow-xl' ;
        div.innerHTML =`
            <div class="h-44 relative">
                <img src="${card?.thumbnail}" alt="category" class=" w-full h-full " />
                <div class="absolute right-0 bottom-0 bg-gray-700 text-slate-100 ">
                    <P> ${card?.others?.posted_date? `${hours}hrs ${minutes}minutes ago`: "" }</P>
                </div>
            
            </div>
            <div class="flex py-5 gap-2">
            <div>
                <img src="${card?.authors[0]?.profile_picture}" alt="author"  class="rounded-full h-12">
            </div>
            <div class="">
            <h2 class="card-title">${card?.title}</h2>
            <div class="flex gap-3">
                <p>${card?.authors[0]?.profile_name}</p>
                <p>${card?.authors[0]?.verified ?'<i class="fa-solid fa-certificate" style="color: #1d6ffc;"></i>' : ' '}</p>
            </div>
            <p>${card?.others?.views} views</p>
            </div>
            </div>
        `;
        categorieCard.appendChild(div);
        
    });
}


categoryCard();
category();