import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './style.css';

import paw from './paw-filled.svg'
import cat from './cat.svg'
import meowSound from './cat-meow-6226.mp3'

const BASE_CAT_API = "https://cataas.com/"
export function CatApi() {
  const [fetchData, setFetchData] = useState()
  const [getError, setError] = useState()
  const audioRef = useRef(null);

  const handleFetchData = async () => {
    try {
      const response = await axios.get(BASE_CAT_API + "cat?json=true")
      setFetchData(response.data.url)
      setError(null)
      console.log("pobrałem dane")
      console.log(toString(response.data.url))
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  const playSoundMeow = () => {
    audioRef.current.playbackRate = 1.5;
    audioRef.current.play();
  };

  return (
    <>
      {getError && (<h2 className='catConteiner__error'>{getError}</h2>)}
      <div className='catConteiner'>
        <h4 className='MeowPodName'><span><img src={cat} alt="" /></span>MeowPod</h4>

        <img src={BASE_CAT_API + fetchData} alt="cat" className='catConteiner__img' />
        <button onClick={() => (handleFetchData(), playSoundMeow())} className='catConteiner__btn'>
          <img src={paw} alt="" />
          <audio ref={audioRef} >
            <source src={meowSound} type="audio/mpeg" />
          </audio>
        </button>
      </div>
    </>
  );
}
