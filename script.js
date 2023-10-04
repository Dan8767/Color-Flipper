function colorflip() {
    let arr = [];
    let a = Math.floor(Math.random() * arr.length);
    let b = document.getElementsByTagName('h2')[0];
    let c = Math.floor(Math.random() * 16777215).toString(16);
    arr.unshift("#" + c);
    document.body.style.backgroundColor = arr[a];
    b.innerHTML = "Background Color: " + arr[a];
    let d = document.getElementById("btn").style.backgroundColor = "#" + c;

}
document.getElementById("btn").addEventListener("click", colorflip)
// document.getElementById("btn").addEventListener("click",colorflip2);
