const button=document.querySelectorAll('button')
const input=document.getElementById('result')
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",()=>{
        const value=button[i].textContent;
        if(value==="C"){
            clearInput()
        }else if(value==="="){
            calculateResut()
        }else{
            appendValue(value)
        }
    })
}
function clearInput(){
    input.value=''
}
function calculateResut(){
    input.value=eval(input.value)
}
function appendValue(value){
    input.value +=value
}