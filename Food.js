class Food{
  constructor(){
    this.foodS = 0;
    this.lastFed;
    this.image = loadImage("images/milk.png");
  }
  updateFoodS(foodS){
    this.foodS = foodS;
  }
  getFedTime(lastFed){
    this.lastFed = lastFed;
  }
  deductFood(){
    if(this.foodS>0){
      this.foodS = this.foodS-1;
    }
  }
    getFoodStock(){
      return this.foodS;
    }
    display(){
      var x = 80;
      var y = 100;
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      if(this.foodS!==0){
        for(var i=0; i<this.foodS; i++){
          if(i%10 === 0){
            x = 80;
            y = y+50;
          }
          image(this.image,x,y,50,50);
          x +=30;
      }
    }
  }
}
