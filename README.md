Using JSON Server :
-create "data" & "db.json"
-in a new terminal : "npx json-server --watch data/db.json --port 8000" + enter => it's gona watch the data files on the browser.

The React Router:
npm install react-router-dom@5. Install the 6 version lately if needed. With the v6 Switch becomes Routes

UseEffect Cleanup : 
-cleanup fonction
-use of an abort controller

Programmatic Redirects :
In create..js history.go(-1) is for directely after adding a new blog, the page of the details about it is shown. 
But not needed staight away; instead of this : history.push to redirect to the home page.
