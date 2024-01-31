export function WordsDefinationList({wordList}){
	return (
		<div className="mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden mt-6 p-6">
			<h2 className="text-2xl font-bold mb-4 text-center">Word Defination List</h2>

			{wordList.map(wordData => (
				<div key={wordData.word} className="mb-4">
					<div className="text-xl font-bold">{wordData.word}</div>
					<div className="text-gray-500">{wordData.definition}</div>
				</div>
			))}
		</div>
	)
}