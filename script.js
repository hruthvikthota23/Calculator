let display=document.querySelector(".display");
let buttons=document.querySelectorAll("button")

buttons.forEach(item=>{
    item.onclick=()=>{
        try{ 
            if(item.dataset.button==='C'){
                display.value='';
            }
            else if(item.dataset.button==='DEL'){
                let str=display.value
                display.value=str.substr(0,str.length-1)
            }
            else if(item.dataset.button ==='='){
                if(display.value !==''){
                    display.value=eval(display.value);
                }
                else if(display.value ==='')
                {
                    display.value="Invaild";
                    setTimeout(()=>{display.value=''},1000);
                }
            }
            else{
                display.value+=item.dataset.button;
            }
        }
        catch(err){
            display.value="Error";
            setTimeout(()=>{display.value=''},1000)
        }
    }
})
