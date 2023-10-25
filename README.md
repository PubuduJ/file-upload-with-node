# File Upload with Node.js <img src="assets/logo.png" alt="drawing" width="27px"/>

This project uses the **Node.js express backend** to demonstrate how to use the **file upload functionality.** 
The [**Cloudinary**](https://cloudinary.com/) repository is used as the file upload cloud repository. The files will be uploaded to the cloudinary repository 
upon receiving an upload request to the node.js backend. The backend will then save the **secure url path for that file** in 
the database along with the other information of that file.

In order to make the backend working, you must **create an account** in the cloudinary repository and copy and paste your 
account's **CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET** into the appropriate columns in the `.env` file.

## Used Technologies

- Node.js
- Express.js
- Cloudinary
- Sequelize
- MySQL

#### Used Integrated Development Environment
- IntelliJ IDEA

## How to use ?
This project can be used by cloning the project to your local computer.

Make sure to create a **file_upload_db** database in the MySQL server.

#### Clone this repository
1. Clone the project using `https://github.com/PubuduJ/file-upload-with-node.git` terminal command.
2. Change the `MYSQL_PASSWORD` in the `.env` file to your local machine MySQL server password.
3. Fill the `CLOUD_NAME`, `CLOUD_API_KEY` and `CLOUD_API_SECRET` fields in the `.env` file from your **Cloudinary** account.
4. Open the terminal from the project directory and run `npm install` and `npm start` to run the server.

## Version
v1.0.0

## License
Copyright &copy; 2023 [Pubudu Janith](https://www.linkedin.com/in/pubudujanith/). All Rights Reserved.<br>
This project is licensed under the [MIT license](LICENSE.txt).