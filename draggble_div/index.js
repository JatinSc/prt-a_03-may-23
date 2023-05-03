const wrapper = document.querySelector(".wrapper")
const header = wrapper.querySelector("header");

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left); // getting left value of wrapper 
    let top = parseInt(getStyle.top);
    wrapper.style.left= `${left + movementX}px`;
    wrapper.style.top= `${top + movementY}px`;
}

header.addEventListener("mousedown",()=>{
    header.classList.add('active');
    header.addEventListener("mousemove", onDrag)
});

document.addEventListener("mouseup",()=>{
    header.classList.remove('active');
    header.removeEventListener("mousemove", onDrag)
});


let alertShow = false;
      setInterval(()=>{
        document.title = 
        alertShow ? "Jatinsc's app"
                  : "Follow for more !";

        alertShow = !alertShow;        
      },1000)
// by using jquery
// $(function() {
//     $(".wrapper").draggable();
//   });
