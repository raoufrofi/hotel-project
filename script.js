let check_in = document.getElementById("check-in");
let check_out = document.getElementById("check-out");
let formTime = document.getElementById("formTime");
let resetForm = document.getElementById("resetForm");
let bookingForm = document.getElementById("bookingForm");

check_in.addEventListener("click", ()=>check_in.setAttribute("type", "date"));
check_in.addEventListener("blur", ()=>check_in.setAttribute("type", "text"));
check_out.addEventListener("click", ()=>check_out.setAttribute("type", "date"));
check_out.addEventListener("blur", ()=>check_out.setAttribute("type", "text"));
formTime.addEventListener("click", ()=>formTime.setAttribute("type", "time"));
formTime.addEventListener("blur", ()=>formTime.setAttribute("type", "text"));
resetForm.addEventListener("click", ()=>bookingForm.reset());

let facilitiesArea = document.querySelector(".facilities-area");

// window.onscroll = () =>{
//     console.log(scrollY);
//     if(scrollY>0){
//         facilitiesArea.style.position = "absolute";
//     }
//     else{
//         facilitiesArea.style.position = "static";
//     }
// }
