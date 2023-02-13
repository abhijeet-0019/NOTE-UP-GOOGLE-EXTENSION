console.log("you are now inside the background.js")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.type === "message"){
        console.log("recevied message: ", request.data);
    }
})