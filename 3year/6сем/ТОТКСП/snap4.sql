11111111111111111111111111111111111111111111111
1----------------------------------------------
begin transaction isolation level serializable;
select count(total) from sales_order where total = 20000;
insert into sales_order (order_date, customer_id, total) values('2023-03-08', 1, 30000);
select pg_export_snapshot();

2----------------------------------------------
begin transaction isolation level serializable;
set transaction snapshot '00000003-00000004-1';
select count(total) from sales_order where total = 30000;

1----------------------------------------------
select count(total) from sales_order where total = 20000;
select count(total) from sales_order where total = 30000;

2----------------------------------------------
insert into sales_order (order_date, customer_id, total) values('2023-03-08', 1, 20000);
select count(total) from sales_order where total = 30000;
select count(total) from sales_order where total = 20000;

1----------------------------------------------
commit;
2----------------------------------------------
commit;

22222222222222222222222222222222222222222222222
1----------------------------------------------
begin transaction isolation level repeatable read;
select count(total) from sales_order where total = 20000;
insert into sales_order (order_date, customer_id, ship_date, total)
values('2023-03-08', 1, '2023-03-01', 30000);
select pg_export_snapshot();

2----------------------------------------------
begin transaction isolation level repeatable read;
set transaction snapshot '00000003-00000008-1';
select count(total) from sales_order where total = 30000;

1----------------------------------------------
select count(total) from sales_order where total = 20000;
select count(total) from sales_order where total = 30000;

2----------------------------------------------
insert into sales_order (order_date, customer_id, total) values('2023-03-08', 1, 20000);
select count(total) from sales_order where total = 30000;
select count(total) from sales_order where total = 20000;

1----------------------------------------------
commit;
2----------------------------------------------
commit;