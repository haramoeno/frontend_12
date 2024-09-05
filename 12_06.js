let target = document.getElementById('btn01');
// ボタンが押されたとき
target.addEventListener('click', function() {
    let span = document.getElementById('msg');
    span.classList.remove('hidden');
});

// フォーカスが外れたとき
target.addEventListener('blur', function() {
    let span = document.getElementById('msg');
    span.innerText = "フォーカスが外れました";
});
