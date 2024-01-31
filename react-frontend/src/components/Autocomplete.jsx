import { useEffect, useState } from "react"
import { ClickOutside } from "../hooks";
import { getAutocompleteSuggestionAPI } from "../utils/api";
import axios from "axios";
import '../styles/autocomplete.scss'

export function Autocomplete({setMultipleSelectedWordRes}) {
	const [optionsVisibility, setOptionsVisibility] = useState(false);
	const showOptions=()=>setOptionsVisibility(true);
	const hideOptions=()=>setOptionsVisibility(false);

	const [inputText, setInputText] = useState('');
	// const [trackInputText, setTrackInputText] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);

	const setInputTextWrapper=(newVal)=>{
		setInputText((prevVal)=>{
			// setTrackInputText(prevVal);
			return newVal;
		})
	}

	const inputLengthMessage=()=> inputText.length>1?<></>:<small>Please enter atleast 2 characters</small>
	const handleFormSubmit=(e)=>{
		e.preventDefault();
		setMultipleSelectedWordRes(filteredOptions.slice(0,10))
	}
	const handleWordSelect=(item)=>{
		setInputText(item);
		setMultipleSelectedWordRes([item]);
		hideOptions();
	}
	useEffect(() => {
		if(inputText<=1) {
			setFilteredOptions([])
			return;
		};
		if(inputText.length>1)
			axios.get(getAutocompleteSuggestionAPI+inputText)
			.then(({data})=>{
				setFilteredOptions(data)
			})
	}, [inputText])
	return (
		<>
			<ClickOutside onClickOutside={hideOptions}>
				<form onSubmit={handleFormSubmit} className="relative">
					<label htmlFor="inputText" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter word</label>
					<input
						onFocus={showOptions}
						id="inputText"
						type="text"
						placeholder="Write Word..."
						value={inputText}
						onChange={(e)=>setInputTextWrapper(e.target.value)}
						className="focus:ring-blue-500 focus:border-blue-500 w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
					/>
					{inputLengthMessage()}
					<div className={`options-list ${optionsVisibility ? 'block' : 'hidden'}`}>
						{filteredOptions.map(item =>(
							<div key={item} onClick={()=>handleWordSelect(item)} className={`my-1 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm hover:ring-blue-500 hover:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-blue-500 dark:hover:border-blue-500`}>
								{item}
							</div>
							))}
					</div>
				</form>
			</ClickOutside>
		</>
	)
}