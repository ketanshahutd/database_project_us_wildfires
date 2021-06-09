//4.	What are the top two unit types that reported wildfires in each state in the US? 

//select n.agency as "Agency", count(f.fod_id) as "Count"
// from fires 
   // f join nwcg n on f.NWCG_REPORTING_UNIT_ID = n.NWCG_REPORTING_UNIT_ID 
   //group by n.agency 
   //ORDER BY count(f.FOD_ID) DESC LIMIT 2

   
db.fires.aggregate([{

"$lookup" : {
            "from" : "nwcg",
            "localField" : "NWCG_REPORTING_UNIT_ID",
            "foreignField" : "NWCG_REPORTING_UNIT_ID",
            "as" : "Common"}

}])