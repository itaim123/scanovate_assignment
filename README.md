Scanovate Assignment README
===========================
Hi,
I created a simple express server with one object that contains four different keys, each one to address different section of the page - (1) the details on the side nav (2+3+4) the different accordions. Each of the accordion keys contains keys to address the corresponding cards within it.

I have used redux to store the data after fetched, as well as other properties for the overall app status like loading and showDrawer (responsive view).

I tried not to use UI libraries and created the UI elements on my own. The components were made to be as reusable as possible - Flag\Icon\Card\Table\Square\Button etc.

I have created a helper function file in the utils folder to make the components more straight forward and also created a few helper object files such as country codes (for the flag lib) and active\quantity for the side nav links.

{Headers for the content within cards were left as the key properties of the json object, although in real life I app I would have used a map to show the titles in a better way.}

To run the project - npm start on both main folder and main\server folder to start server.