# node-blog
Blog Tutorial

## Installation
 - Nodejs
 - Git
 - MongoDb

## Generate SSH Key

````
$ ssh-keygen
\\ to generate ssh key press Enter key in comand prompt. 
$ cat ~/.ssh/id_rsa.pub
\\ to copy .ssh key

````
## Clone Repository

````

$ git clone git@github.com:devesh8/node-blog.git

````

## Git Commands

````

$ git status

\\ Check the changes in your local

$ git add (file name) or -A
 
\\ adds the file from local to git. -A to add all chnages to git repository.

$ git commit -m "your message"

\\ specify the intent of changes for the reference.

$ git pull (branch name)

\\ apply remote changes to local

$ git push (branch name)

\\ upload the changes to remote

````

## Install Express JS

````

$ npm install express-generator -g
\\install express

$ npm express . -e

$ npm install

$ npm start

````

## Passing Data from Client -> Server
// /catId/1 params
//req.query ?catId=1
//req.body {catid:1}

##APIS
- POST
- GET  /post            //List all post
- GET  /post/id         //Post by id 
- POST /post            //Add new post
- POST /post/id         //Update Post
- POST /post/id/delete  //Delete Post

- Category
- GET  /category            //List all Category
- GET  /category/id         //Category by id 
- POST /category            //Add new Category
- POST /category/id         //Update Category


## Reference

 - Oject Oriented JavaScript by Stoyan Stefanove and Kumar Chetan Sharma

