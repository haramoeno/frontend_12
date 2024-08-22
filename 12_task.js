let target = document.getElementById('text01');

target.addEventListener('blur', function() {
    let span = document.getElementById('span001');
    span.innerText = "フォーカスがはずれました";
});
