/*3.	One advocacy group says human actions and nature are equally to blame for most wildfires. Write a query that can help determine the truth of this statement.

select "Human" as "Reason", count(f.fod_id) as Count from fires f join stat_cause s on f.STAT_CAUSE_CODE = s.stat_cause_code where s.STAT_CAUSE_DESCR in ("Fireworks", "Powerline", "Structure", "Equipment Use", "Smoking", "Campfire", "Debris Burning", "Railroad", "Arson", "Children") 
union 
select "Nature" as "Reason", count(f.fod_id) as Count from fires f join stat_cause s on f.STAT_CAUSE_CODE = s.stat_cause_code where s.STAT_CAUSE_DESCR in ("Lightning")
*/