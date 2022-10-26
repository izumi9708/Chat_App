import React from 'react';
import {auth} from './firebase';

function SignOut() {
  function googleSignOut(){
    if(window.confirm('ログアウトしてよろしいですか?')){
      auth.signOut();
    }
    
  }
  return (
    <div>
      <button
        onClick={googleSignOut}
      ><svg viewBox="0 0 512 448"  xmlns="http://www.w3.org/2000/svg"><path d="M502.6 246.6C515.1 234.1 515.1 213.8 502.6 201.3L374.6 73.3C362.1 60.8 341.8 60.8 329.3 73.3C316.8 85.8 316.8 106.1 329.3 118.6L402.7 192H192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256H402.7L329.3 329.4C316.8 341.9 316.8 362.2 329.3 374.7C341.8 387.2 362.1 387.2 374.6 374.7L502.6 246.7V246.6ZM160 64C177.7 64 192 49.7 192 32C192 14.3 177.7 0 160 0H96C43 0 0 43 0 96V352C0 405 43 448 96 448H160C177.7 448 192 433.7 192 416C192 398.3 177.7 384 160 384H96C78.3 384 64 369.7 64 352V96C64 78.3 78.3 64 96 64H160Z" fill="#ffff"/></svg>
      </button>
    </div>
  )
}

export default SignOut;
