import React, {useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';


const Index = () => {
  const [url,setUrl] = useState('');
  
const download = (url) =>{
  // dl.getMP3()
var video_id = url.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
video_id = video_id.substring(0, ampersandPosition);
axios.post('http://localhost:3000/api/download', {
  id: video_id
})
}
console.log(video_id)
}
  return (
    <>
<input value={url} onChange={e => setUrl(e.target.value)}/>
<button onClick={e => download(url)}>download</button>
</>
  )
}

export default Index