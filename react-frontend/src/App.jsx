import { useEffect, useState } from 'react'
import { Autocomplete, SingleWordDefination, WordsDefinationList } from './components';
import axios from 'axios';
import { getWordDefinationAPI } from './utils/api';
function App() {
  const [selectedWord,setSelectedWord]=useState('');
  const [multipleWordRes,setMultipleWordRes]=useState([])
  const handleWordsSelection = (words)=>{
    if(words.length==0){}
    else if(words.length==1){
      setSelectedWord(words[0])
    }
    else{
      setMultipleWordRes(prev=>[])
      words.forEach(async(word)=>{
        axios.get(getWordDefinationAPI + word)
        .then(res => {
          const definition=res.data.at(0)?.meanings.at(0)?.definitions?.at(0)?.definition
          setMultipleWordRes(prev=>[...prev,{word:word,definition:definition?definition:'No data found'}])
        })
        .catch(err=>{
          setMultipleWordRes(prev=>[...prev,{word:word,definition:'No data found'}])
        })
      })
    }
  }
  useEffect(()=>{
    setMultipleWordRes([])
  },[selectedWord])
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-0 sm:py-8">
        <div className="bg-gray-700 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">English Dictionary</h1>
          <div className="mb-4">
            <Autocomplete setMultipleSelectedWordRes={handleWordsSelection}></Autocomplete>
          </div>
          {
            multipleWordRes.length>1?
            <WordsDefinationList wordList={multipleWordRes}></WordsDefinationList>
            :<SingleWordDefination word={selectedWord}></SingleWordDefination>
          }
        </div>
      </div>
    </>
  )
}

export default App
