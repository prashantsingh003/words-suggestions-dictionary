import DATA from '../data/words_dictionary.json'
class TreeNode{
	constructor(){
		this.children={}
		this.endOfWord=false
	}
}

class Tree{
	constructor(){
		this.root=new TreeNode();
	}
	insertWord(word){
		let node=this.root;
		for(let i=0;i<word.length;i++){
			if(!Object.keys(node.children).includes(word[i])){
				node.children[word[i]]=new TreeNode()
			}
			node=node.children[word[i]]
		}
		node.endOfWord=true;
	}

	search(node,prefix){
		const wordsArr=[]
		Object.keys(node.children).forEach(child=>{
			if(node.children[child].endOfWord){
				wordsArr.push(prefix+child)
			}
			wordsArr.concat(this.search(child,prefix+node.children[child]))
		})
		return wordsArr;
	}
}

export class TreeOperations{
	constructor(){
		const words=Object.keys(DATA);
		this.tree=new Tree();
		words.forEach(word=>this.tree.insertWord(word));
	}
	getSuggestionsFromStr(str){
		let node=this.tree.root;
		for(let i=0;i<str.length;i++){
			console.log(node.children)
			if(!Object.keys(node.children).includes(str[i])){
				return []
			}
			node=node.children[str[i]]
		}
		return this.tree.search(node,str)
	}
}