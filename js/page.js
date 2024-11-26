let userName = document.getElementById('userName'),
    btnLogOut = document.getElementById('btnLogOut'),
    storageDate = JSON.parse(localStorage.getItem('userName'))

userName.innerHTML = storageDate.toUpperCase()

btnLogOut.addEventListener('click',function(){
    localStorage.removeItem('userName')
})