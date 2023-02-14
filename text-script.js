window.addEventListener("load", function(){
    this.document.addEventListener("mouseup", function(){
        const selectedText = window.getSelection().toString();
        if(selectedText.length > 5){
            console.log("Text is highlighted: ", selectedText);
            chrome.runtime.sendMessage({type: "message", data: selectedText})
        }
    })
});