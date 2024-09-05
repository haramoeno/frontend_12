let target = document.getElementById('text01');

target.addEventListener('blur', function() {
    console.log(target.value);
    
    let span = document.getElementById('span001');
    span.innerText = target.value;
});
