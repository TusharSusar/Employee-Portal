const serachByID = document.querySelector('.byid');
const searchByName = document.querySelector('.byname') 
const searchbtn = document.getElementById('searchbtn');
const nameSearch = document.querySelector('.nameSearch');
const idSearch = document.querySelector('.idSearch');

const showIDinput = () => {
    idSearch.style.display = 'flex'
    nameSearch.classList.remove('show');
    serachByID.style.backgroundColor  = '#fff'
    searchByName.style.backgroundColor  = '#f2f2f2'
}

const showNameInput = () => {
    idSearch.style.display  = 'none';
    nameSearch.classList.add('show');
    searchByName.style.backgroundColor  = '#fff'
    serachByID.style.backgroundColor = '#f2f2f2'
}

serachByID.addEventListener('click', showIDinput);
searchByName.addEventListener('click',showNameInput)



//! Scroll
function scrollToSection() {
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
}