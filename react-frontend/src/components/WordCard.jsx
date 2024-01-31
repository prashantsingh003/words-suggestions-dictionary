export function WordCard({ wordData }){
  const renderAudio=()=>{
    if(wordData.audio)
    return (
    <audio controls src={wordData.audio}>
      Your browser does not support the audio element.
    </audio>
    )
    else return <></>
  }
  const renderMeanings = (meanings) => {
    return meanings.map((meaning,i) => (
      <div key={meaning.partOfSpeech+i} className="mb-4">
        <div className="text-gray-400 mb-2">{meaning.partOfSpeech}</div>
        {meaning.definitions.map((definition,ind) => (
          <div key={definition.definition+ind} className="mb-2">
            <div className="font-bold">{definition.definition}</div>
            <div className="text-gray-500 mb-2">{definition.example}</div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mt-6 p-6">
      <h2 className="text-2xl font-bold mb-4">{wordData.word}</h2>

      <div className="mb-4">
        <div className="text-gray-400 mb-2">Phonetic: {wordData.phonetic}</div>
        {renderAudio()}
      </div>

      {renderMeanings(wordData.meanings)}

      <div className="mb-4">
        <div className="text-gray-400 mb-2">Synonyms:</div>
        <div className="flex flex-wrap">
          {wordData.meanings.map((meaning) =>
            meaning.synonyms.map((synonym,i) => (
              <div key={synonym+i} className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 m-1">
                {synonym}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-gray-400 mb-2">Antonyms:</div>
        <div className="flex flex-wrap">
          {wordData.meanings.map((meaning) =>
            meaning.antonyms.map((antonym,i) => (
              <div key={antonym+i} className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 m-1">
                {antonym}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-gray-400 mb-2">Source URLs:</div>
        <div>
          {wordData.sourceUrls.map((url, index) => (
            <div>
              <a key={url+index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
