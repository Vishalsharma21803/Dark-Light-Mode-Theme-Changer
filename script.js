const btn=document.querySelector("#mode");
const body=document.body;
// const savedmode=localStorage("mode");
// if(savemode==="dark"){
//     body.classList.add("dark-mode");
// }
// else{
//     body.classList.add("light-mode");
// }
btn.addEventListener("click",()=>{

    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        btn.innerHTML="Dark Mode";
    }
    else{
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        btn.innerHTML="Light Mode";
    }
});