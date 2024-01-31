# Autocomplete Search UI (Word Suggestions)

## Description

The project implements an autocomplete search user interface that suggests words based on user input and it's defination when selected.

The backend utilizes a tree data structure created with a list of alphabets at the start of the server. For a detailed explanation of the logic, refer to [Data Structures for Fast Autocomplete](https://futurice.com/blog/data-structures-for-fast-autocomplete).

The backend is responsible for providing word suggestions, and additional techniques are employed in the frontend to enhance performance. 

When a user selects a word, its definition, pronunciation, and other relevant data are displayed in a card below the search bar. 

Please note that there may be cases where the API lacks data related to the selected word.

## API Used

- [Dictionary API](https://dictionaryapi.dev/)

## How to Set Up the Project

### Backend (Python Flask)

1. Move to the backend directory: `cd ./backend`
2. Create a virtual environment: `python -m venv env`
3. Activate the environment:
   - Windows: `env/Scripts/activate`
   - Linux: `source env/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the `main.py` file: `python main.py`

### Frontend (React)

1. Move to the frontend directory
2. Run `npm install`
3. Run `npm run dev`

## References

- The list of alphabets used is referenced from [dwyl/english-words](https://github.com/dwyl/english-words)
- [Data Structures for Fast Autocomplete](https://futurice.com/blog/data-structures-for-fast-autocomplete)
- API for definitions: [Dictionary API](https://dictionaryapi.dev/)
