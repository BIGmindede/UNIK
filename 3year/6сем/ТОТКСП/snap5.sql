BEGIN;
insert into sales_order(order_date, customer_id, ship_date, total)
values('2024-03-08', 1, '2024-03-01', 10000);
commit;

BEGIN;
insert into sales_order(order_date, customer_id, ship_date, total)
values('2024-03-08', 1, '2024-03-01', 15000);
commit;
