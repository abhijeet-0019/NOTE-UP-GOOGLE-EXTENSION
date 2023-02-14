console.log("you are now inside the background.js")

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "message") {
        console.log("recevied message: ", request.data);

        // chrome.runtime.sendMessage({ type: "message", data: selectedText })
        // (async function(){
        //     console.log("hello there mate")
        //     const tabs = await chrome.tabs.query({url: 'https://justnotepad.com/*'});
        //     console.log(tabs)
        //     const tab = tabs[0];
        //     chrome.tabs.sendMessage(tab.id, {message: "data received", data: request.data}, function(response){
        //         console.log("Data received in the tab successfully")
        //     });
        // })

        chrome.tabs.query({ url: 'https://justnotepad.com/*' }, function (tabs) {
            // chrome.tabs.sendMessage(tabs[0].id, {fileData: response}, function(response) {
            //     ;
            // });
            tabs.forEach(function (tab) {
                // Do something with each tab object

                console.log(tab.id, tab.url, tab.title);
                chrome.tabs.sendMessage(tab.id, { message: "data received", data: request.data }, function (response) {
                    console.log("Data received in the tab successfully")
                });

            });
        });
    }
})