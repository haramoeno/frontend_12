let count = 0;


function counter() {
    count++;
    document.getElementById('msg').innerHTML = count;
}


let intervalId = setInterval(counter, 1000);


let target = document.getElementById('btn01');
target.addEventListener('click', function() {
    
    clearTimeout(intervalId);
});