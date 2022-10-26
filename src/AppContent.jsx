// import React from 'react';
import SignOut from './SignOut';
import React,{useState,useEffect} from 'react';
import {auth, db} from './firebase';
import Send from './Send';

const AppContent = ()=>{
  const [message,setMessage] = useState([]);

  useEffect(()=>{
    db.collection('communication')
    .orderBy('createdAt')
    .limit(50)
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>doc.data()));
      // setMessage(
      //   snapshot.docs.map(doc=>{
      //     return doc.data();
      //   })
      // )
    })
  },[]);

  const lastMessage = document.querySelector('.last-message');
  if(lastMessage !== null)lastMessage.scrollIntoView(true);

  return (
    <div>
      <div className='header'>
        <div className='header-inner'>
          <h1>トークルーム</h1>
          <SignOut/>
        </div>
      </div>
      <div className='message-wrap'>
        {message.map((data,i)=>{
          return(
            <div className={ ( message.length -1 ===i )? 'message last-message' : 'message' } key={i}>
              <div className='message-inner'>
                <div className='photo'><img src={data.photoURL}/></div>
                <div className="message-item">
                  <div className='item-flex'>
                    <p className='name'>{data.name}</p><span className='time'>{data.time}</span>
                  </div>
                  <p className='message-content'>{data.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Send/>
    </div>
  )
}

export default AppContent;
