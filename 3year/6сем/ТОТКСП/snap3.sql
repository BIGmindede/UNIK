1----------------
begin transaction isolation level serializable;
select count(total) from sales_order where total = 20000;

2----------------
begin transaction isolation level serializable;
select count(total) from sales_order where total = 30000;



1----------------
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-27', 1, '2024-02-27', 30000);
select count(total) from sales_order where total = 20000;

2----------------
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-27', 1, '2024-02-27', 20000);
select count(total) from sales_order where total = 30000;



1----------------
commit;

2----------------
commit;