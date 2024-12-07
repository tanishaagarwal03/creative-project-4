
# CS132 CP4 API Documentation
**Author:** The Class

This API provides functionality to retrieve and post data for a game/gift store that is used for CP4.
The clients can get information that is available for the current products that are avaialbe on the store, and post reviews that could be seen by other customers. 
TODO: Add information about promotions and gift ideas. 

Summary of endpoints:
* GET /categories
* GET /promotions
* POST /suggestions
* POST /reviews
...

## *GET /products*
**Returned Data Format**: JSON

**Description:**
Returns a JSON collection of products that are availabe on the electronic game store, which can 
be separated out into different categories

**Parameters**
* category=_____ (optional -> chosen by dropdown HTML component, default to All)
  * Returns only the chosen categories contents based on HTML component

**Example Requests:** 
`products?category='All'`
`products?category='Xbox'`

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
    "PS4": [
      {
        "name": "Spiderman",
        "image": "spiderman.jpg",
        "description": "Newest spiderman adventure",
        "price": 30
      },
      {
        "name": "Batman",
        "image": "batman.png",
        "description": "Dark Knights adventures ",
        "price": 40
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
    ]
}

**Error Handling:**
If there are no comments that have been made, then a message can be
returned to the client to indicate that it should not display anything!


-----

###Tanisha Edit

## Endpoints

### 1. `GET /promotions`
**Description**: Returns a list of promotions for gifts.
**Query Parameters**:
- `price`: Filter games with price less than or equal to this value.
- `category`: Filter games by category.
- `in_stock` (optional): Filter games that are in stock.

**Example**:
`GET /promotions?price_min=30&category=exclusive`

**Response**:
```json
[
    {
        "id": 2,
        "name": "Exclusive Gift Set",
        "price": 49.99,
        "category": "exclusive",
        "description": "A curated set of our best-selling gifts."
    }
]
```

### 2. POST /game-requests

**Example Request**:

POST /game-requests
{
    "name": "Tanisha",
    "idea": "Mario Kart"
}

**Example Response**:
{
    "message": "Gift idea submitted successfully",
    "request": {
        "id": 1,
        "name": "Tanisha",
        "idea": "Mario Kart",
    }
}


