

class FromToDay  {


    date : Date

    constructor(){
      this.date = new Date();
  
    }
    next () {
        this.date.setDate(this.date.getDate() + 7);
        
    }
    redo ()  {
        this.date.setDate(this.date.getDate() - 7);

    }



    getDateForClient(){
        let month = this.date.toLocaleDateString('ec',{month : 'long'} )
        month = month.charAt(0).toUpperCase() + month.slice(1); 


        return `${month} ${this.date.getFullYear()}`
    }

}




type FromToDayType ={
 
    dateFrom : Date,
    dateTo : Date,
}


type WhatUp = {
    [key : string] : (date : Date)=>void,

}
export default FromToDay;