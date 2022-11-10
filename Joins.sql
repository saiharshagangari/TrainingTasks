use joinsdemo;
create table products
(
id int primary key, productname nvarchar(10)
);
create table productDetails
(
id int primary key,brand nvarchar(20),origin nvarchar(10)
);
create table brandDetails
(
brand nvarchar(20), country nvarchar(10)
);

insert into products(id,productname) values (1,'Apples');
insert into products(id,productname) values (2,'Pears');
insert into products(id,productname) values (3,'Dates');
insert into products(id,productname) values (8,'Peanuts');

insert into productDetails (id,brand,origin) values (1,'MartJio','Kashmir');
insert into productDetails (id,brand,origin) values (2,'Walmarts','Chicago');
insert into productDetails (id,brand,origin) values (3,'Lion','Doha');
insert into productDetails (id,brand,origin) values (4,'Appilo','Singapore');

insert into brandDetails (brand,country) values ('Lion','Qatar');
insert into brandDetails (brand,country) values ('MartJio','India');
insert into brandDetails (brand,country) values ('Walmarts','USA');

--Equi JOIN 
Select p.productname,pd.origin,pd.brand from products as p join productDetails as pd on p.id  = pd.id;
select p.id,p.brand,b.brand,b.country from productDetails as p join brandDetails as b on p.brand = b.brand;

--Inner Join
select * from productDetails;
Select p.productname,pd.origin,pd.brand from products as p inner join productDetails as pd on p.id  = pd.id;

--Left Outer Join
Select p.productname,pd.origin,pd.brand from products as p left outer join productDetails as pd on p.id  = pd.id;

--Right Outer Join
Select p.productname,pd.origin,pd.brand from products as p right outer join productDetails as pd on p.id  = pd.id;

--Full Outer Join
Select p.productname,pd.origin,pd.brand from products as p full outer join productDetails as pd on p.id  = pd.id;

--Self Join
Select pd.id,pd.origin, pd1.id,pd1.brand from productDetails as pd join productDetails as pd1 on pd.id < pd1.id where 
LEN(pd.brand) > LEN(pd1.brand);

--Cross Join
Select productname,origin,brand from products cross join productDetails

--Natural Join
--select p.id,p.brand,b.brand,b.country from productDetails as p join brandDetails as b on p.brand = b.brand;

--Non Equi Join
insert into products(id,productname) values (6,'Honey');
insert into productDetails (id,brand,origin) values (6,'Lion','Amazon');

select p.id,p.brand,b.brand from productDetails as p join productDetails as b on p.brand <> b.brand;