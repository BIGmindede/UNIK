create table Job (
	job_id serial primary key,
	function varchar(30)
);

create table Location (
	location_id serial primary key,
	regional_group varchar(20)
);

create table Department (
	department_id serial primary key,
	name varchar(14),
    location_id integer,

    constraint loc_id_location 
    foreign key (location_id)
    references Location(location_id)
);

create table Employee (
	employee_id serial primary key,
	last_name varchar(15),
	first_name varchar(15),
    middle_initial varchar(1),
    manager_id integer,
    job_id integer,
    hire_data date,
    salary numeric(7,2),
    commission numeric(7,2),
    department_id integer,

    constraint manager_id_self 
    foreign key (manager_id)
    references Employee(employee_id),

    constraint job_id_job 
    foreign key (job_id)
    references Job(job_id),

    constraint department_id_department
    foreign key (department_id)
    references Department(department_id)
);

create table Customer (
	customer_id serial primary key,
	name varchar(45),
	address varchar(40),
    city varchar(30),
    state varchar(2),
    zip_code varchar(9),
    area_code smallint,
    phone_number smallint,
    salesperson_id integer,
    credit_limit numeric(9,2),
    comments text,
    
    constraint salesperson_id_employee
    foreign key (salesperson_id)
    references Employee(employee_id)
);

create table Sales_order (
	order_id serial primary key,
	order_date date,
    customer_id integer,
    ship_date date,
    total numeric(8,2),

    constraint customer_id_customer 
    foreign key (customer_id)
    references Customer(customer_id)
);

create table Product (
	product_id serial primary key,
	description varchar(30)
);

create table Item (
	order_id integer,
	item_id serial,
	product_id integer,
    actual_price numeric(8,2),
    quantity integer,
    total numeric(8,2),

    primary key (order_id, item_id),

    constraint order_id_sales_order
    foreign key (order_id)
    references Sales_order(order_id),

    constraint product_id_product
    foreign key (product_id)
    references Product(product_id)
);

create table Price (
	product_id serial,
    list_price numeric(8,2),
    min_price numeric(8,2),
    start_date date,
    end_date date,

    primary key (product_id, start_date),

    constraint product_id_product
    foreign key (product_id)
    references Product(product_id)
);
-------------------------------------------------------------------------------------
create table Job (
	job_id serial primary key,
	function varchar(30)
);
comment on column Job.job_id is 'Код должности';
comment on column Job.function is 'Название должности';

create table Location (
	location_id serial primary key,
	regional_group varchar(20)
);
comment on column Location.location_id is 'Код места размещения';
comment on column Location.regional_group is 'Город';

create table Department (
	department_id serial primary key,
	name varchar(14),
    location_id integer,

    constraint loc_id_location 
    foreign key (location_id)
    references Location(location_id)
);
comment on column Department.department_id is 'Код отдела';
comment on column Department.name is 'Название отдела';
comment on column Department.location_id is 'Код места размещения';

create table Employee (
	employee_id serial primary key,
	last_name varchar(15),
	first_name varchar(15),
    middle_initial varchar(1),
    manager_id integer,
    job_id integer,
    hire_data date,
    salary numeric(7,2),
    commission numeric(7,2),
    department_id integer,

    constraint manager_id_self 
    foreign key (manager_id)
    references Employee(employee_id),

    constraint job_id_job 
    foreign key (job_id)
    references Job(job_id),

    constraint department_id_department
    foreign key (department_id)
    references Department(department_id)
);
comment on column Employee.employee_id is 'Код сотрудника';
comment on column Employee.last_name is 'Фамилия';
comment on column Employee.first_name is 'Имя';
comment on column Employee.middle_initial is 'Средний инициал';
comment on column Employee.manager_id is 'Код начальника';
comment on column Employee.job_id is 'Код должности';
comment on column Employee.hire_data is 'Дата поступления в фирму';
comment on column Employee.salary is 'Зарплата';
comment on column Employee.commission is 'Комиссионные';
comment on column Employee.department_id is 'Код отдела';

create table Customer (
	customer_id serial primary key,
	name varchar(45),
	address varchar(40),
    city varchar(30),
    state varchar(2),
    zip_code varchar(9),
    area_code smallint,
    phone_number smallint,
    salesperson_id integer,
    credit_limit numeric(9,2),
    comments text,
    
    constraint salesperson_id_employee
    foreign key (salesperson_id)
    references Employee(employee_id)
);
comment on column Customer.customer_id is 'Код покупателя';
comment on column Customer.name is 'Название покупателя';
comment on column Customer.address is 'Адрес';
comment on column Customer.city is 'Город';
comment on column Customer.state is 'Штат';
comment on column Customer.zip_code is 'Почтовый код';
comment on column Customer.area_code is 'Код региона';
comment on column Customer.phone_number is 'Телефон';
comment on column Customer.salesperson_id is 'Код сотрудника-продавца, обслуживающего данного покупателя';
comment on column Customer.credit_limit is 'Кредит для покупателя';
comment on column Customer.comments is 'Примечания';


create table Sales_order (
	order_id serial primary key,
	order_date date,
    customer_id integer,
    ship_date date,
    total numeric(8,2),

    constraint customer_id_customer 
    foreign key (customer_id)
    references Customer(customer_id)
);
comment on column Sales_order.order_id is 'Код договора';
comment on column Sales_order.order_date is 'Дата договора';
comment on column Sales_order.customer_id is 'Код покупателя';
comment on column Sales_order.ship_date is 'Дата поставки';
comment on column Sales_order.total is 'Общая сумма договора';

create table Product (
	product_id serial primary key,
	description varchar(30)
);
comment on column Product.product_id is 'Код продукта';
comment on column Product.description is 'Название продукта';

create table Item (
	order_id integer primary key,
	item_id serial primary key,
	product_id integer,
    actual_price numeric(8,2),
    quantity integer,
    total numeric(8,2),

    constraint order_id_sales_order
    foreign key (order_id)
    references Sales_order(order_id),

    constraint product_id_product
    foreign key (product_id)
    references Product(product_id)
);
comment on column Item.order_id is 'Код договора, в состав которого входит акт';
comment on column Item.item_id is 'Дата акта';
comment on column Item.product_id is 'Код продукта';
comment on column Item.actual_price is 'Цена продажи';
comment on column Item.quantity is 'Количество';
comment on column Item.total is 'Общая сумма';


create table Price (
	product_id serial primary key,
    list_price numeric(8,2),
    min_price numeric(8,2),
    start_date date primary key,
    end_date date,

    constraint product_id_product
    foreign key (product_id)
    references Product(product_id),
);
comment on column Price.product_id is 'Код продукта';
comment on column Price.list_price is 'Объявленная цена';
comment on column Price.min_price is 'Минимально возможная цена';
comment on column Price.start_date is 'Дата установления цены';
comment on column Price.end_date is 'Дата отмены цены';
