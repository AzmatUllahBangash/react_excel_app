Instructions

Assignment Details:

I could'nt find any other library for excel-like copy paste feature so i had to use ReactJs as there the
SpreadSheet package was available which exactly have the features of copy paste like excel.
inside this project some files are Typescript files as the spreadsheet package wasn't working in jsx or js files.

Steps to run this project:

Import the database(excel_db.sql) in mysql which is available inside this repository.
Then create excel_api folder(or directly paste the folder in htdocs folder in xampp server which i uploaded with this project).

There are two pages in this web app.
1 - first page is Home page where spreadsheet like feature is displayed in which users can do excel like work and also
save this work inside their PC. Or they can also Open their excel file in this spreadsheet.

- Inside Homepage there is also a Button which is Used to Upload the CSV file.
  the CSV file must be according to the database table.

For this Spreadsheet to work the React package is installed using npm.
(npm install @syncfusion/ej2-react-spreadsheet --save)

2- Second page is SheetData page on which the CSV file data is displayed

The project is in development mode so Start the project by using this command

npm start

to use this command you must install nodejs first.

lastly the signUp feature is working but login feature is not yet added.
