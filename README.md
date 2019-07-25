# grocery-list
add, remove, view and find items in a grocery list using node.js

pre requisites:
npm, node.js

>> navigate to the "grocery-list" folder from command line
>> Use any one of the following commands with appropriate change in variable values:

  1. node app add --item=carrot --price=30 \n
        This command will add an item carrot with price 30 to the groceryList.json if "carrot" item
        does not already exist in the groceryList.json. Else it will increase the price of "carrots"
        item by 30 (i.e. new_price = old_price + 30)
        
  2. node app remove --item=carrot \n
        This command will remove an item carrot from groceryList.json if it exists
        
  3. node app print \n
        This command will print all the items and its prices from groceryList.json
        
  4. node app priceOf --item=carrot \n
        This command will print the price of the item given as argument from groceryList.json
