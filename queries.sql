-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT productName, CategoryName
FROM product
JOIN category
ON product.categoryID = category.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.id, companyName
FROM [order] as o
JOIN Shipper
ON o.shipVia = shipper.id
WHERE o.orderdate < '2012-08-09'
;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.productName, od.Quantity
FROM [order] as o
JOIN orderDetail as od
ON o.id = od.orderID
JOIN product as p
ON od.ProductId = p.id
WHERE o.id = 10251
ORDER by ProductName ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.ID, c.CompanyName, e.LastName
FROM [order] as o
JOIN customer as c 
ON o.CustomerId = c.id
JOIN Employee as e
ON o.EmployeeId = e.id;
