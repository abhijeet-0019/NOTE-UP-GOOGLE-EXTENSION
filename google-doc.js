console.log("you are there");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if(request.message === "data received"){
                let content = request.data
                console.log("Data received in the content script: ", content);
                let textArea = document.querySelector("#editable_text")
                console.log("textArea --> ",textArea)
                textArea.innerHTML = content;
                console.log("textArea.innerHTML",textArea.innerHTML)
        }
        console.log("hello there")
})