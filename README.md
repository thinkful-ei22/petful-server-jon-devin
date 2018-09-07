# Petful Server
## A Place for Second Chances

Petful is an adoption center for cats and dogs. This simple web app allows users to "adopt" different cats or dogs, which displays which displays a small profile of which animals you can adopt. However, the cats and dogs are lined up in queues, and you can only adopt the least recently added pet from each category. 

## Live App

This is the backend server, which is used in conjunction with the front-end. The front-end may be found here:
https://github.com/thinkful-ei22/petful-client-jon-devin

The live-app url for the backend may be found here:
https://petful-devinjon-server.herokuapp.com/

It has a GET and DELETE endpoint for `/api/cats` and `/api/dogs`. GET will fetch the next animal in the appropriate queue. DELETE will remove the next animal in the queue and send it to the user.

To reset the database and cruelly put the cats and dogs back into the adoption center, navigate to the following endpoint: https://petful-devinjon-server.herokuapp.com/api/reset

### Example:
`GET https://petful-devinjon-server.herokuapp.com/api/cats`

Will return:

`{
  "imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
  "imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
  "name": "Fluffy",
  "sex": "Female",
  "age": 2,
  "breed": "Bengal",
  "story": "Thrown on the street"
}`

## Tech Stack

* This app implements Node.js and Mongoose to create the server
