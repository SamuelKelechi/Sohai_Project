import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment'

import { app } from "../Base";


const db = app.firestore();

function Profession() {

    const [Prof, setProf] = useState([])


    const getData = async () => {
        await db
          .collection("utac")
          .orderBy("date", "desc")
          .onSnapshot((snapshot) => {
            const item = [];
            snapshot.forEach((doc) => {
              item.push({ ...doc.data(), id: doc.id });
            });
    
            setProf(item);
          });
      };




    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{
            flexWrap:"wrap",
            display:"flex",
            justifyContent:"flex-end"
        }}>
            
            {Prof.map(({id, avatar, name, firm, desc, date}) => (
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    width:"270px",
                    margin:"10px",
                    border:"1px solid purple",
                    boxShadow:"1px 0px 2px 0px"
                }}>
    
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        backgroundColor:"whitesmoke"
                    }}>
                        <div style={{
                            display:"flex",
                            justifyContent:"center",
                            objectFit:"cover",
                            alignItems:"center",
                            height:"40px",
                            width:"40px",
                            borderRadius:"20px",
                            margin:"5px",
                            border:"1px solid pink", 
                           
                        }}>{avatar}</div>
                        <div style={{marginRight:"5px", height:"40px", justifyContent:"space-between"}}>
                            <div>Registered {moment(date).fromNow()}</div>
                            <div style={{fontWeight:"bold"}}>
                                {name}
                            </div>
    
                            <div>{firm}</div>
                        </div>
    
                    </div>
    
    
                    <hr style={{width:"250px", }}/>
    
                    <div style={{marginLeft:"7px", marginRight:"7px", marginBottom:"5px", textAlign:"left"}}
                    >{desc}</div>
    
                </div>
            ))}

        </div>
    );
  }
  
  export default Profession;