import { useEffect, useState } from 'react'
import { Autocomplete, WordDefination } from './components';
function App() {
  const [selectedWord,setSelectedWord]=useState('');
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="bg-gray-700 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">English Dictionary</h1>
          <div className="mb-4">
            <Autocomplete setSelectedWord={setSelectedWord}></Autocomplete>
          </div>
          <div className="">
            <WordDefination word={selectedWord}></WordDefination>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
