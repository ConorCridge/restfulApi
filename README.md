# restfulApi
 
Used node.js express and mongodb together with mongoose.

To start use 'npm start' in terminal.

Access to the data is avaliable at http://localhost:3000/posts

From this I used Postman to test the api with various GET, POST, DELETE and PATCH methods.

Input layout to make each post for an invoice is as follows;

{
	"firstName": "String",
	"lastName": "String",
	"item": "String",
	"quantity":"Number",
	"totalAmount": "Number"
	(DateTime is added separately with every post)
}

Each invidual invoice post be brought up specifically with their own id after /posts/ in the url.

For example, a GET request for http://localhost:3000/posts/5de8fb881a7a0524c4e40c3c would bring up the first post made.

DELETE or PATCH could then be used on each specific post.

Hope you enjoy :)
