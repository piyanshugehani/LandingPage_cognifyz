const searchbox=document.querySelector(".search-box")
const searchbtn=document.querySelector(".search-btn")
const closebtn=document.querySelector(".close-btn")
const search=document.querySelector(".search-apply")

searchbtn.addEventListener('click',addActive);
closebtn.addEventListener('click',removeActive);

function addActive(){
    if (search.classList.contains('active')){
        searchbox.value=""
        searchbox.focus()
    }
    else{
        search.classList.add('active')
        searchbox.value="Search something.."
    }
}

function removeActive(){
    search.classList.remove('active')
    searchbox.value=""
}