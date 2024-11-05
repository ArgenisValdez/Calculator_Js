const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let shouldResetDisplay = false;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.id === "="){
            display.value = eval(display.value);
            shouldResetDisplay = true;
        }else if ( btn.id === "ac"){
            display.value= "";
        }else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        }else{
            if(shouldResetDisplay){
                display.value= "";
                shouldResetDisplay=false;
            }
            display.value += btn.id;
        }
    });
});

