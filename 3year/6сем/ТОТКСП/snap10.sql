do $$
begin
for i in 1..1000 loop
insert into sales_order (total) values (i);
end loop;
end $$;

select count(*) from sales_order;

do $$
begin
for i in 1..1000 loop
execute 'select avg(total) from sales_order';
end loop;
end $$ language plpgsql;

do $$
begin
for i in 1..1000 loop
perform avg(total) from sales_order;
end loop;
end $$ language plpgsql;


do $$
begin
for i in 1..100 loop
insert into sales_order (total) values (i);
end loop;
end $$;

do $$
begin
for i in 1..100000 loop
execute 'select * from sales_order where total=77.00';
end loop;
end $$ language plpgsql;

do $$
begin
for i in 1..100000 loop
perform * from sales_order where total=77.00;
end loop;
end $$ language plpgsql;
