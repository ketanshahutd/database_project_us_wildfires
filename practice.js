/*db.getCollection("nwcg").aggregate([
{$group : {_id : "$Country", count:{$sum:1}}},
{$match: {count: {$gt : 0}}}
])

db.getCollection("nwcg").aggregate([
{$group : {_id : {count: "$Country", st: "$State"}}}
//{$match: {count: {$gt : 0}}}
])
*/
db.getCollection("nwcg").aggregate([
{
        $group : {
                    _id : {ctry: "$Country", st: "$UnitType"}, 
                    total: {$sum:1}
                  }
},

{$match: {total: {$gt : 100}}},
{ $sort: { total: -1 } },
{$limit:2}

])