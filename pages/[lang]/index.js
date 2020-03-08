import React, { useState,useEffect } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import translations from '../../components/translations';
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';
 
 
const Example = (props) => {
  const router = useRouter()
    const [dropdownOpen, setOpen] = useState(false);
    const [value,setValue] = useState('geo')
    const [mounted,setMounted] = useState(false)
    const [translations,setTranslations] = useState('')
    const [url,setUrl] = useState('');
    const languages = ['geo','rus','eng'];
    const yleo = (lang) =>{
        window.location.href = `/${lang}`
    }
    const download = () =>{
      axios.post('http://localhost:3000/api/download', {
        url: url,
      })
      .then(function (response) {
        console.log(response)
      })
    }
    useEffect(() => {
      axios.post('http://localhost:3000/api/lang', {
        lang: router.query.lang,
      })
      .then(function (response) {
        setValue(router.query.lang)
        setTranslations(response.data.trans)
      })
      document.cookie = `foo=bar; path=/`;
     setMounted(true)
     setValue(JSON.parse(localStorage.getItem('lang')))
    },[]);
    const toggle = () => setOpen(!dropdownOpen);
   return(
     <>
     <div className="container d-flex justify-content-end">
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle tag='span'>
    <img src={`/images/${value}.png`} width='30px'/>
    </DropdownToggle>
    <DropdownMenu >
      {languages.map((lang,i) =>{
        if(lang !== value){
          return <DropdownItem onClick={e =>{
            yleo(lang)}
          } key={i}><img src={`/images/${lang}.png`} width='30px'/></DropdownItem>
        }
        
      })}
    </DropdownMenu>
  </ButtonDropdown>
     </div>
     <input value={url} onChange={e => setUrl(e.target.value)}/>
     <button onClick={download}>download</button>
    <div>{translations['soap']}</div>
    </>
   )
}

export default Example