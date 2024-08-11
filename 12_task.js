function clickButton() {
    let target = document.getElementById("btn01");
    let parent = target.parentNode;
    
    let span = document.getElementById ('msg');
    if (span == null) {
        let newSpan = document.createElement('span');
        
        newSpan.setAttribute('id','msg');
        let newText = document.createTextNode('フォーカスがはずれました');
        newSpan.append(newText);
        parent.insertBefore(newSpan, target.netSibling);
    }
}