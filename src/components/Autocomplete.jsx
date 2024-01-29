import { useState } from "react"
import { ListItem } from "./ListItem";

export function Autocomplete() {
	const [text, setText] = useState('');
	const submitForm=(e)=>{
		e.preventDefault();
	}
	const [options, setOptions] = useState(['tes','no']);
	return (
		<>
			<form onSubmit={submitForm} className="relative">
				<label for="inputText" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter word</label>
				<input
					id="inputText"
					type="text"
					placeholder="Write Todo..."
					value={text}
					onChange={e => setText(e.target.value)}
					className="focus:ring-blue-500 focus:border-blue-500 w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
				/>
				<div className="absolute options-list">
					<ul>
						{options.map(item=>
							(<ListItem item={item} />))}
					</ul>
				</div>
				{/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
				<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
					<option selected>Choose a country</option>
					<option value="US">United States</option>
					<option value="CA">Canada</option>
					<option value="FR">France</option>
					<option value="DE">Germany</option>
				</select> */}
			</form>
		</>
	)
}