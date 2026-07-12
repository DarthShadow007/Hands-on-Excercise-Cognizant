SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Age FROM Customers;
BEGIN
    FOR r_cust IN c_customers LOOP
        IF r_cust.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = r_cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance FROM Customers;
BEGIN
    FOR r_cust IN c_customers LOOP
        IF r_cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r_cust.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

DECLARE
    CURSOR c_due_loans IS
        SELECT l.LoanID, c.Name, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r_loan IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || r_loan.LoanID || ' for customer ' || r_loan.Name || ' is due on ' || TO_CHAR(r_loan.DueDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/