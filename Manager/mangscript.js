const serachByID = document.querySelector('.byid');
const searchByName = document.querySelector('.byname') 
const searchbtn = document.getElementById('searchbtn');
const nameSearch = document.querySelector('.nameSearch');
const idSearch = document.querySelector('.idSearch');

const showIDinput = () => {
    idSearch.style.display = 'flex'
    nameSearch.classList.remove('show');
    serachByID.style.backgroundColor  = '#000'
    searchByName.style.backgroundColor  = '#fff'
    serachByID.style.color = '#fff'
    searchByName.style.color = '#fff'
    searchByName.style.color = '#000'
    serachByID.style.border = '1px solid #cccccc'
    // searchByName.style.borderBottom = 'transparent'
}

const showNameInput = () => {
    idSearch.style.display  = 'none';
    nameSearch.classList.add('show');
    searchByName.style.backgroundColor  = '#000'
    searchByName.style.color = '#fff'
    serachByID.style.backgroundColor = '#fff'
    serachByID.style.color = '#000'
    searchByName.style.border = '1px solid #cccccc'
    // serachByID.style.borderBottom = 'transparent'
}

serachByID.addEventListener('click', showIDinput);
searchByName.addEventListener('click',showNameInput)



//! Scroll
function scrollToSection() {
    document.getElementById("search").scrollIntoView({ behavior: "smooth" });
}