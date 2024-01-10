document.addEventListener("DOMContentLoaded", ()=>{
    const startRecording = document.querySelector("button#strt-rcd")
    const stopRecording = document.querySelector("button#stp-rcd")

    startRecording.addEventListener("click", ()=>{
        console.log("start recording")
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console .log(chrome.runtime.lastError, "error line 11")
                }
            })
        })
    })



    stopRecording.addEventListener("click", ()=>{
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stop_video"}, function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console .log(chrome.runtime.lastError, "error line 24")
                }
            })
        })
    })
} )