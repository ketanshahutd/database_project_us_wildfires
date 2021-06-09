//2.	One of the reporting agencies has suggested that children be banned from its forests unless there is one adult for every 4 children in a group visiting a forest. Name top 5 forests where this would be the least appropriate.
/*SELECT
   Count(f.fod_id),
   fs.source_reporting_unit_name 
FROM
   fires f 
   join
      stat_cause s 
      on f.stat_cause_code = s.stat_cause_code 
   join
      fpa_source fs 
      on f.fpa_id = fs.fpa_id 
where
   s.stat_cause_descr = "Children" 
   and fs.source_reporting_unit_name like " % Forest" 
group by
   fs.source_reporting_unit_name 
order by
   count(f.fod_id) ASC LIMIT 5; */
   
db.fires.aggregate([{
                        $lookup : ""


}])