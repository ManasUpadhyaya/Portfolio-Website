console.log("Script running...")
document.querySelector('.close').style.display = 'none';
document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.close').style.display = 'none'
    }
    else{
        setTimeout(()=> {
            document.querySelector('.close').style.display = 'inline'
        },300)
        
        document.querySelector('.ham').style.display = 'none'
    }
})