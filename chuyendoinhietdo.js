function changef(f){
    let c=0;
    c= (f - 32)/1.8
    return c
}
function change(){
    let input=document.getElementById("id").value;
    let ket=changef(input);
    document.getElementById("result").innerHTML=ket +" độ c";
}