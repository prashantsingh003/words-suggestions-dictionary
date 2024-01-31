import { useEffect, useState } from "react"
import { getWordDefinationAPI } from '../utils/api';
import axios from "axios";
import {WordCard} from ".";

export function SingleWordDefination({ word = null }) {
	const [wordData,setWordData]=useState(null);
	const [error,serError]=useState(false);

	const definationFromDictAPI = () => {
		axios.get(getWordDefinationAPI + word)
			.then(res => {
				const data=res.data[0];
				constructWordData(data);
				serError(false)
			})
			.catch(err=>{
				console.log('erro occured while fetching data for '+word)
				console.error(err)
				setWordData(null)
				serError(true)
			})
	}
	const constructWordData=(data)=>{
		let {phonetic,phonetics,meanings,sourceUrls}=data;
		let audio=null;
		phonetics.forEach(el=>{
			if(el.audio) audio=el.audio
		})
		let set=new Set();
		meanings=meanings.filter((meaning)=>{
			if(!set.has(meaning.partOfSpeech)){
				set.add(meaning.partOfSpeech)
				meaning.definitions=meaning.definitions.splice(0,6)
				return true
			}
			return false
		})
		const newWord={
			word:data.word,
			meanings,
			sourceUrls,
			phonetic,
			audio
		}
		setWordData(newWord)
	}
	useEffect(() => {
		if (word)
			definationFromDictAPI()
	},
		[word])

	if(wordData)
		return <WordCard wordData={wordData}></WordCard>
	else if(error)
		return <div>Oops!! Selected word is not available</div> 
	return (<></>)
}