//7.	Which state had fires only in the second half of the calendar years?
//SELECT distinct state from fires where state not in (select distinct state from fires where month(discovery_date) <= 6)

db.getCollection("fires").aggregate(
 [
    {
        "$lookup" : {
            "from" : "fires",
            "localField" : "STATE"
            "foreignField" : "STATE"
            "as" : "Common",
            "pipeline" : [
                {
                   // "$match" : {
                                    "DISCOVERY_DOY" : {"$gte": "180"}
                     //          }
                },
                {
                    "$project" : {
                        "FOD_ID" : 1,
                        //"date" : 1
                    }
                }
            ]
        }
    }
])