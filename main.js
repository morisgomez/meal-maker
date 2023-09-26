let menu = {
  _meal: "", //properties w/ "_" should not be changed directly.
  _price: 0,
  set meal(mealToCheck){
    if(typeof mealToCheck === "string")
    {
      return this._meal = mealToCheck;
    }//closes set meal method if statement.
  },//closes set meal method.
  set price(priceToCheck){
    if(typeof priceToCheck === "number")
    {
      return this._price = priceToCheck;
    }//closes set price method if statement.
  },//closes set price method.
  get todaysSpecial(){
    if(this._meal && this._price)
    {
      return "Today's Special is " + this._meal + " for $" + this._price;
    }//closes if.
    else
    {
      return "Meal or price was not set correctly!";
    }//closes else.
  }//closes get todaysSpecial method.
  //using "this" to access internal properties via internal method.
};//closes menu object

//set _meal:
menu.meal = "tacos";

//set _price:
menu.price = 2;

//get todaysSpecial:
console.log(menu.todaysSpecial);

//menu._meal = 2; need to check data type.
//menu._price = "chips"; need to check data type.
//setters + getters used to make sure keys have proper data values.
//console.log(menu);
//program should print: "Today's Special is tacos for $2".
