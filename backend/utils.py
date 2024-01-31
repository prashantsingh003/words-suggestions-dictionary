import numpy as np
from Trie import Trie
def get_words():
	with open('words_alpha.txt') as word_file:
		valid_words = np.array(word_file.read().split())
	return valid_words

words_trie = Trie()
for word in get_words():
	words_trie.insert(word)

def autocomplete(prefix):
	return words_trie.get_available_words(prefix)

def filter_words(text):
	words_list=get_words()
	filter_arr=[]
	for word in words_list:
		if word.startswith(text):
			filter_arr.append(True)
			continue
		filter_arr.append(False)
	res=words_list[filter_arr]
	return res.tolist()


