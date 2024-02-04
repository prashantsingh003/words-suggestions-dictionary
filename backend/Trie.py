class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
	def __init__(self):
		self.root = TrieNode()

	def insert(self, word):
		node = self.root
		for char in word:
			if char not in node.children:
				node.children[char] = TrieNode()
			node = node.children[char]
		node.is_end_of_word = True

	def search(self, node, prefix):
		suggestions = []
		for char, child in node.children.items():
			if child.is_end_of_word:
				suggestions.append(prefix + char)
			suggestions.extend(self.search(child, prefix + char))
		return suggestions
	
	def get_available_words(self,prefix):
		node = self.root
		for char in prefix:
			if char not in node.children:
				return []
			node = node.children[char]
		return_arr=self.search(node, prefix)
		if(node.is_end_of_word):
			return_arr.append(prefix)
		return return_arr
	
	def count_nodes(self,node=None):
		if( node is None):
			node=self.root
		count=1
		for child in node.children.values():
			count+=self.count_nodes(child)
		return count