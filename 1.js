//1.	A leading beverage company has announced a billion-dollar fund for removing debris from forests, rivers and mountains in the US. All states are interested. Which 2 states have the least chance to win a share of the fund?

/*SELECT
   Count(f.fod_ID),
   f.state 
FROM
   fires f 
   join
      nwcg N 
      ON f.NWCG_REPORTING_UNIT_ID = N.NWCG_REPORTING_UNIT_ID 
where
   f.stat_cause_code = "5.0" 
   and N.country = "US" 
group by
   f.state 
order by
   count(f.fod_ID) ASC LIMIT 2*/
   
db.fires.aggregate([
   
   { $lookup: {
       from: "nwcg",
//       localField: "State",
//       foreignField: "STATE",
       as: "fromStates",
        pipeline : [
							{"$match" : {"Country" : "US"}}
//							{"$project" : {"State" : 1} }, //,"Country" : 1}}
						 ]
    }},
   
   /*{
    $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromStates", 0 ] }, "$$ROOT" ] } }
   },*/
//    {$match : { $and: [ {Country: "US"}, {STAT_CAUSE_CODE: "5.0" } ] } },
    {$match : {STAT_CAUSE_CODE: "5.0"  } },

	{ $group : {_id :"$STATE", Fcount: { $sum: 1}}},
	{ $project: { fromStates: 0 }},
	{$sort :{Fcount:1}}, 
    {$limit:4}
    
])