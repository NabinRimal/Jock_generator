// let random_num = Math.round(Math.random(1,) * arrayOfJokes.length-1);


let para = document.getElementById("box_para")
let BTN = document.getElementById("nextbtn")
console.log(arrayOfJokes.length)

const change_jock = () => {
    let random_num = Math.round(Math.random(1,)*arrayOfJokes.length - 1); console.log(random_num)
    BTN.innerHTML = "Another Jock"
    if(random_num>=0){
           para.innerHTML = ` ${arrayOfJokes[random_num]}`;
       }
              

}
BTN.addEventListener("click", change_jock);