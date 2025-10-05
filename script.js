// your code here
const name = document.getElementById("name").innerHTML;
const year = document.getElementById("year").innerHTML;
let url = document.getElementById("url");
const oldURL = url.innerHTML;
const newURL = oldURL + "?name=" + name + "&year=" + year;

function updateURL() {
    
    url.innerHTML = newURL;
}
console.log("hiii");
console.log(oldURL)
console.log(newURL);