PROJECT NAME:
To Do App Router


DESCRIPTION:

Duration: 2 weeks

For this project I was tasked with creating a 'TO DO LIST' application. I needed to create a front end experience that allows a user to create a task, and when the task is created it is stored inside of a database (SQL). The front end then refreshes to show all tasks that need to be completed.

Each task has an option to mark as 'Complete' using a toggle button. When a task is toggled to complete, its visual representation changes on the front end, as the background color of the task container changes from red (not complete) to green (complete). There is also a button that allows users to Delete a task, which removes it both from the front end as well as the Database.


PREREQUISITES:

•Node.js
•PostGres
•Postico


INSTALLATION:

1. Create a database named weekend-to-do-app.
2. The queries in the database.sql file are set up to create all the necessary tables and populate 
    the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. It is recommended to use Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an npm install.
4. Run npm run server in your terminal.
5. Run npm run client in your terminal.



USAGE

1. Enter a task into the “Create New” input field
2. Click the “Add Item” button. The task should appear under “Current List,” which will show all of 
    the tasks to be completed once more are added. The initial background color of the tasks should be red, as they are “to be completed.”
3. Repeat Step 2 to add more tasks.
4. Once you have completed a task on the to-do list, click the “Toggle Comple” button next to it, 
    and it’s background color will change to green, indicating that it has been completed.
5. To delete a task from the list, click the “Delete” button next to the task, and it will be 
    removed from the list.


BUILT WITH

• Visual Studio Code
• Node.js
• Express
• PostGres
• PostGreSQL
• Postico


ACKNOWLEDGEMENTS

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. 
