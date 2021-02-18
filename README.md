# react-query-issue
Code to demo browser warning when multiple react query apps are on 1 page.

Download the repo and `cd` into it.

1. Create Virtual Environment

`python3 -m venv demo_venv`

2. Activate Environment

`source demo_venv/bin/activate`

3. Install Django dependencies

`pip install -r requirements.txt`

4. Install Frontend dependencies

`npm i`

5. Build Frontend dependencies

`npm start`

6. Start Django Django server

`python3 manage.py runserver`

Navigate to http://127.0.0.1:8000/. 

The page should load without errors. Check browser console for warnings. 


Note: Files of interest

1. `templates/frontend/index.html` - template with entry point for 2 apps
2. `assets/src/js/index.js` - React Query app 1
3. `assets/src/js/index2.js` - React Query app 2
