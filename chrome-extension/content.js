console.log("i have been injected")
var recorder = null
function onAccessApproved(stream){
    recorder = new MediaRecorder(stream)
    recorder.start()

    recorder.onstop=function(){
        stream.getTracks().forEach((track)=>{
            if(track.readyState == 'live'){
                track.stop()
            }})           
    }
    recorder.ondataavailable=function(event){
        let recordedBlob =event.data
        let url = URL.createObjectURL(recordedBlob)

        let a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = 'screen-recording.webm'

        document.body.appendChild(a)
        a.click()

        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if(message.action=== "request_recording"){
        console.log("requesting recording")

        sendResponse(`processed: ${message.action}`)

        navigator.mediaDevices.getDisplayMedia
        ({
            audio: true,
            video:{
                width: 1280,
                height: 720
            }
        }).then((stream)=>{
            onAccessApproved(stream)
        })
    }
    if(message.action === "stop_video"){
        console.log("stopped video")
        sendResponse(`processed: ${message.action}`)
        if(!recorder)return console.log("no recorder")


        recorder.stop()


    }
})