In the project directory, you can run:
### `json-server --watch ./backend/db.json --port 3030`  
test - `http://localhost:3030/contacts`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The following was implemented:
- list of contacts   
- contact creating (redux-form without validation)  
- contact editing  
- contact removing  
- history of calls for each contact
 
###working on it
- json-server
- pagination


###Info:
App emulates request to backend but work using sessionStorage  
For reset user contacts (data) need open app in other window  