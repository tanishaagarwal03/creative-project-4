
# CS132 CP4 API Documentation
**Author:** The Class

This API provides functionality to retrieve and post data for a game/gift store that is used for CP4.
The clients can get information that is available for the current products that are avaialbe on the store, and post reviews that could be seen by other customers. 
TODO: Add information about promotions and gift ideas. 

Summary of endpoints:
* GET /products
* POST /comment
TODO: Add promotions/gift ideas endpoints
...

## *GET /products*
**Returned Data Format**: JSON

**Description:**
Returns a JSON collection of products that are availabe on the game/gift store, which can 
be separated out into different categories (TODO: specify once we choose what we want to do)

**Parameters**
* category=_____ (optional -> chosen by dropdown HTML component, default to All)
  * Returns only the chosen categories contents based on HTML component

**Example Requests:** 
`products?category='All'`
TODO: Choose an idea and then pick example
`products?category='Xbox'`
`products?category='Decorations'`

**Example Response:**
```json
{
  "categories": {
    "Xbox": [
      {
        "name": "Game 1",
        "image": "game1.png",
        "description": "Racing Game",
        "price": 10
      },
      {
        "name": "Game 2",
        "image": "game2.png",
        "description": "Puzzle Solver",
        "price": 20
      },
      {
        "name": "Game 3",
        "image": "game3.png",
        "description": "Create your own adventure",
        "price": 30
      }
    ],
    "Decorations": [
      {
        "name": "Curtains Royal",
        "image": "curtain.jpg",
        "description": "The fanciest curtain ever",
        "price": 30
      },
      {
        "name": "Candles",
        "image": "candle.png",
        "description": "The best selling candle, smells like a million bucks",
        "price": 40
      },
      {
        "name": "Wall Art",
        "image": "wall-art.jpg",
        "description": "Modernism at its finest",
        "price": 50
      }
    ]
  }
}
```

**Error Handling:**
TODO: What error code should this be in the 400s?
* 400: Invalid request if given a category thats not found (cannot rely on HTML elements)

**Example Request:** `/products?category=food`

**Example Response:**
```Category food not found.```

## *POST /comment*
**Returned Data Format**: Plain Text

**Description:** 
Sends information to the comment website including the name of the user and their message. 
If provided succesffuly, then adds it to the dataset such that a GET comment endpoint can
grab the information for any other user and display the comment. 

**Supported Parameters**
* POST body parameters: 
  * `name` (required) - name of customer
  * `title` (required) - title of the comment
  * `message` (required) - message

**Example Request:** `/comment`
* POST body parameters: 
  * `name='Class'`
  * `message='This website is so cool!'`

**Example Response:**
```Your comment went through succesfully, refresh to see it!```

**Error Handling:**
TODO: What error code should this be in the 400s?
* 400: Invalid request missing required `name`, `title`, `message` parameter.

## *GET /comments*
**Returned Data Format**: JSON

**Description:** 
Grabs comments made by any user and returns it to the client to display!

**Example Request:** `/comments`

**Example Response:**
TODO: Remove one of the resposnes based on what we choose
{
    "comments": [
      {
        "name": "A",
        "title": "Amazing Website",
        "message": "Wow so cool",
      },
      {
        ""name": "B",
        "title": "I mean its alright",
        "message": "Gamestop though >",
      },
      {
        "name": "C",
        "title": "We love it here",
        "message": "Bed Bath and Beyond can't compare",
      }
    ]
}

**Error Handling:**
If there are no comments that have been made, then a message can be
returned to the client to indicate that it should not display anything!
