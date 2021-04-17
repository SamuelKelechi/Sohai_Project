import React from "react";
import Home from "./Image/home.png";
import Chat from "./Image/chat.png";
import Noti from "./Image/notification.png";





function HomeHead() {
    return (
        <div style={{ justifyContent:"center"}}>

            <div style={{
                display:"flex",
                margin:"15px",
                height:"65px",
                justifyContent:"space-around",
                justifySelf:"center",
                alignItems:"center",
                border:"1px solid purple",
                borderRadius:"5px"
            }}>
                <div style={{
                    display:"flex",
                    height:"50px",
                    width:"50px",
                    borderRadius:"25px",
                    justifyContent:"center",
                    alignItems:"center",
                    border:"1px solid pink",
                    
                }}><img src={Home} alt="Home" style={{
                    height:"30px",
                    width:"30px"
                }}
                />
                </div>


                <div style={{
                    display:"flex",
                    height:"50px",
                    width:"50px",
                    borderRadius:"25px",
                    justifyContent:"center",
                    alignItems:"center",
                    border:"1px solid pink",
                    
                }}><img src={Chat} alt="Home" style={{
                    height:"30px",
                    width:"30px"
                }}
                />
                </div>


                <div style={{
                    display:"flex",
                    height:"50px",
                    width:"50px",
                    borderRadius:"25px",
                    justifyContent:"center",
                    alignItems:"center",
                    border:"1px solid pink",
                    
                }}><img src={Noti} alt="Home" style={{
                    height:"30px",
                    width:"30px"
                }}
                />
                </div>


            </div>
      </div>
    );
  }
  
  export default HomeHead;
  