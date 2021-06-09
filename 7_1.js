//7.	Which state had fires only in the second half of the calendar years?
//SELECT distinct state from fires where state not in (select distinct state from fires where month(discovery_date) <= 6)
db.fires.find()
db.fires.find({"DISCOVERY_DOY" :{$lt : 180}})
db.fires.aggregate([
{
  "$group" : {
  _id: null,
  STATE: {
    $ne: {
      {"STATE" : 1,$project : 0 }, {$project : {
        "$in" : db.collection.fires("DISCOVERY_DOY" :{$gt : 180})
      }
    } 
  }
}
}
])