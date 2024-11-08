
BEGIN;
insert into sales_order(order_date, customer_id, ship_date, total)
values('2024-02-23', 1, '2024-02-01', 10400);

insert into item(order_id, product_id, actual_price, quantity, total) values
(6, 1, 5200, 1, 5200),
(6, 1, 5200, 1, 5200);

rollback;




BEGIN
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-23', 1, '2024-02-01', 10400);

savepoint preadding_item;
insert into item(order_id, product_id, actual_price, quantity, total) values
(11, 1, 5200, 1, 5200);


savepoint preadding_item;
insert into item(order_id, product_id, actual_price, quantity, total) values
(11, 1, 5200, 1, 5200);
rollback preadding_item;



1----------------
BEGIN;
update sales_order set total = total * 2
where total = 1000;

2----------------
BEGIN;
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-23', 1, '2024-02-01', 1000);
commit;

1----------------
update sales_order set total = total * 2
where total = 1000;
commit;




1----------------
BEGIN transaction isolation level repeatable read;
update sales_order set total = total * 2
where total = 1000;

2----------------
BEGIN;
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-23', 1, '2024-02-01', 1000);
commit;

1----------------
update sales_order set total = total * 2
where total = 1000;
commit;




1----------------
BEGIN transaction isolation level repeatable read;
select count(total) from sales_order
where total = 20000;

2----------------
BEGIN transaction isolation level repeatable read;
select count(total) from sales_order
where total = 30000;

1----------------
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-23', 1, '2024-02-01', 30000);
select count(total) from sales_order
where total = 20000;

2----------------
insert into sales_order(order_date, customer_id, ship_date, total) values
('2024-02-23', 1, '2024-02-01', 20000);
select count(total) from sales_order
where total = 30000;

1----------------
commit;

2----------------
commit;