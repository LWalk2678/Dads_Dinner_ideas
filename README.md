## *Single Dad Dinner Ideas*
Quick meal ideas for single dads
https://lwalk2678.github.io/Dads_Dinner_ideas/


## Description
Being a Single dad is hard enough.  Let's make dinner a little easier for you.  Use the drop-down menu for a quick idea, or use the search feature to find some more ideas! 

## API and Data Snippet: 
https://api.spoonacular.com/recipes/

``` 
{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "lowFodmap": false,
    "aggregateLikes": 209,
    "spoonacularScore": 83.0,
    "healthScore": 19.0,
    "creditsText": "Full Belly Sisters",
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "pricePerServing": 163.15,
    "extendedIngredients": [
        {
            "id": 1001,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consistency": "solid",
            "name": "butter",
            "nameClean": "butter",
            "original": "1 tbsp butter",
            "originalString": "1 tbsp butter",
            "originalName": "butter",
            "amount": 1.0,
            "unit": "tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
        {
            "id": 10011135,
            "aisle": "Produce",
            "image": "cauliflower.jpg",
            "consistency": "solid",
            "name": "cauliflower florets",
            "nameClean": "cauliflower florets",
            "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalString": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "amount": 2.0,
            "unit": "cups",
            "meta": [
                "frozen",
                "thawed",
                "cut into bite-sized pieces"
            ],
            "metaInformation": [
                "frozen",
                "thawed",
                "cut into bite-sized pieces"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 473.176,
                    "unitShort": "ml",
                    "unitLong": "milliliters"
                }
            }
        },
        {
            "id": 1041009,
            "aisle": "Cheese",
            "image": "cheddar-cheese.png",
            "consistency": "solid",
            "name": "cheese",
            "nameClean": "cheese",
            "original": "2 tbsp grated cheese (I used romano)",
            "originalString": "2 tbsp grated cheese (I used romano)",
            "originalName": "grated cheese (I used romano)",
            "amount": 2.0,
            "unit": "tbsp",
            "meta": [
                "grated",
                "(I used romano)"
            ],
            "metaInformation": [
                "grated",
                "(I used romano)"
            ],
            "measures": {
                "us": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 2.0,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        },
        {
            "id": 1034053,
            "aisle": "Oil, Vinegar, Salad Dressing",
            "image": "olive-oil.jpg",
            "consistency": "liquid",
            "name": "extra virgin olive oil",
            "nameClean": "extra virgin olive oil",
            "original": "1-2 tbsp extra virgin olive oil",
            "originalString": "1-2 tbsp extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "amount": 1.0,
            "unit": "tbsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                },
                "metric": {
                    "amount": 1.0,
                    "unitShort": "Tbsp",
                    "unitLong": "Tbsp"
                }
            }
        },
```


## Wireframes: 
https://whimsical.com/dads-dinner-ideas-wireframe-Y1txwniyoegMnR5xHh7VkG

## MVP:  
  - Find a usable API and make sure the API works!  
  - Render the information with Json results
  - Use HTML and JS to create the layout of the page
  - Incorporate Flexbox into CSS styling
  - Make sure I have a responsive design (iphone)
  - Use dropdown menu for beef/chicken/fish/dessert
  - Return meal ideas

### Post-MVP: 
 - Add additional search by Ingredients
 - Make the page more presentable

## Goals: 
I want to make sure the main page and JS is done by end of day Tuesday if not before.  Then I can focus on improving it and adding features to the page during the rest of the time.

## Timeframes: 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Pseudocode Javascript | H | 3 hr| 2 hrs |
| HTML Structure| H | 2 hrs| 2 hrs |
| Javascript Structure| H | 6 hrs| 8 hrs |
| Add/test API call| H | 3 hrs| 4 hrs |
| Adding clickable buttons and Event Listeners | H | 2 hrs| 2 hrs |
| Pulling Appropriate data from API | H | 3 hrs| 5 hrs |
| Incorporating Flexbox | H | 1 hrs| 1 hrs |
| Styling page with CSS | H | 5 hrs| 3 hrs |
| Setting and Styling Media Queries | H | 2 hrs| 3 hrs |
| Styling Images| H | 2 hrs| 1 hrs |
| Total | H | 29 hrs| 31 hrs |


 ## Code Snippet:
 This code I had found while researching additional topics and I liked the simplicity of changing the photos with the screen size all in one spot.
 ```
<picture>
      <source media="(min-width: 650px)" srcset="images/cooking.jpeg" class="photo" alt="Dad cooking with Son">
      <source media="(min-width: 450px)" srcset="images/ipad_photo.jpeg" class="photo" alt="Dad cooking with Daughter">
      <img src="images/iphone_photo.jpeg" class="photo" alt="Dad holding Daughter">
    </picture>
 ```
