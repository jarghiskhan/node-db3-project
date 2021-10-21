-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName
FROM Products as p
Left Join Categories as c
on p.ProductID = c.CategoryID;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT OrderID, ShipperName
FROM Orders as o
Join Shippers as s
on o.ShipperID = s.ShipperID 
where OrderDate < "2012-08-09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity
FROM OrderDetails as od
Join Products as p
on od.ProductID = p.ProductID 
where OrderID = 10251
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT OrderID, CustomerName, LastName as "Employee's Last Name"
FROM `Orders` as o
Left Join Customers as c
on o.CustomerID = c.CustomerID 
Left Join `Employees` as e
on o.EmployeeID = e.EmployeeID