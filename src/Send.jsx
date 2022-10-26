import { db , auth } from './firebase';
import firebase from 'firebase/compat/app';
import {useState} from 'react';

function Send() {
  const [message,setMessage] = useState('');

  function sendMessage(e){
      const { uid , photoURL } = auth.currentUser;
      const name = auth.currentUser.displayName;
      const date = new Date();
      const text = e.previousElementSibling?.value;
      let hour = String(date.getHours());
      let minute = String(date.getMinutes());
      
      if(hour.slice(0,2) == '0'){
        hour = hour.slice(1);
      }

      if(minute.length == 1){
        minute = `0${minute}`;
      }


      db.collection('communication').add({
        uid,
        photoURL,
        time : `${hour}:${minute}`,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        name : name,
        text : text,
      })

      e.previousElementSibling.value = '';

    
  }
  return (
    <div className='send-wrap'>
      <form method='post'>
        <input type='text'
                placeholder='メッセージを入力'></input>
        <button type='button' 
                className='send-btn'
                onClick={(e)=>sendMessage(e.target)}><svg viewBox="0 0 512 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M498.054 5.60382C508.154 12.6038 513.454 24.7038 511.554 36.8038L447.554 452.804C446.054 462.504 440.154 471.004 431.554 475.804C422.954 480.604 412.654 481.204 403.554 477.404L277.254 424.904L237.154 499.404C231.954 509.104 220.854 514.004 210.154 511.304C199.454 508.604 191.954 499.004 191.954 488.004V392.004C191.954 386.704 193.754 381.504 197.054 377.304L362.354 164.704C364.854 157.604 355.854 150.404 349.354 156.304L170.354 318.204L138.354 347.104C129.154 355.404 116.054 357.704 104.554 352.904L19.5536 317.504C8.35359 312.804 0.753592 302.204 0.0535917 290.004C-0.646408 277.804 5.55359 266.304 16.1536 260.204L464.154 4.20382C474.854 -1.89618 488.054 -1.29618 498.154 5.60382H498.054Z" fill="#ffff"/></svg>
        </button>
      </form>
    </div>
  )
}

export default Send;
