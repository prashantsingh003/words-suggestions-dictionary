# autocomplete search UI (word suggestions)

## Description
The project utilizes a list of alphabets in the backend to suggest words as the user types. A tree data structure is created in the backend, incorporating the list of alphabets present when the server starts. For a detailed understanding of the logic, please refer to [Data Structures for Fast Autocomplete](https://futurice.com/blog/data-structures-for-fast-autocomplete).

The backend is primarily responsible for returning suggestions; however, a couple of other techniques are being employed in the frontend as well to enhance performance.

## How to Set Up the Project
**Note: Ensure that you run the backend prior to the frontend.**

### Backend (Python Flask):
1. Move to the backend directory: `cd ./backend`
2. Create a virtual environment: `python -m venv env`
3. Activate the environment:
   - Windows: `env/Scripts/activate`
   - Linux: `source env/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the main.py file: `python main.py`

### Frontend (React):
1. Move to the frontend directory.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## References
- The list of alphabets used is referenced from [dwyl/english-words](https://github.com/dwyl/english-words).
- [Data Structures for Fast Autocomplete](https://futurice.com/blog/data-structures-for-fast-autocomplete)
