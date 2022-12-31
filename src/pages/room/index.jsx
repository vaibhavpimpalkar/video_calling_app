import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appId = 812364039;
        const serverSecret = "4d7f5509e1dccf692d88ec3f3f4a2ab6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Please Enter Your Name...!"
           
        )
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container : element,
            sharedLinks : [{
                name : "Coppy Link",
                url : `http://localhost:3000/room/${roomId}`
                }
            ] ,
            scenario : {
                mode : ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton : true,
        
        })
    }


    return <div>
        <div ref ={myMeeting}/>
    </div>
}

export default RoomPage