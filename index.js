document.querySelector(".crossPng").style.display = 'none';
document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if (document.querySelector(".sidebarGo")) {
        document.querySelector(".crossPng").style.display = 'none';
        document.querySelector(".hamburger").style.display='inline'
    }else{
        setTimeout(()=>{
            document.querySelector(".crossPng").style.display = 'inline';
        },400)
        document.querySelector(".hamburger").style.display='none'; 
    }
}

);