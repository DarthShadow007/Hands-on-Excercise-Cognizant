# PL/SQL Exercise 1: Control Structures & Cursors

## 📖 Overview
This module demonstrates the practical application of **PL/SQL Control Structures** (`IF-THEN` conditionals and `FOR` loops) alongside **Explicit Cursors** within an Oracle Database environment. 

The exercise models real-world banking operations, automating customer interest rate adjustments, account status promotions, and due date notifications based on specific relational criteria.

---

## 🎯 Scenarios Covered

### Scenario 1: Senior Citizen Interest Rate Discount
* **Business Rule:** The bank applies an automatic **1% discount** to loan interest rates for any customer aged **above 60 years old**.
* **Implementation:** An explicit cursor (`c_customers`) fetches all customers and their ages. A `FOR` loop evaluates each record using an `IF r_cust.Age > 60` conditional structure, executing an `UPDATE` statement on the `Loans` table when conditions are met.

### Scenario 2: VIP Account Status Promotion
* **Business Rule:** Customers maintaining an account balance **exceeding $10,000** are promoted to **VIP Status**.
* **Implementation:** Iterates through customer balances using a cursor. When a balance surpasses the threshold, the control structure sets the `IsVIP` flag to `'TRUE'` in the `Customers` table.

### Scenario 3: Loan Due Date Reminders
* **Business Rule:** The bank sends automated reminder notifications to customers whose loans are due within the **next 30 days**.
* **Implementation:** A relational `JOIN` query between the `Loans` and `Customers` tables filters records where `DueDate` falls within `SYSDATE AND SYSDATE + 30`. The script prints formatted notification messages using `DBMS_OUTPUT.PUT_LINE`.

---

## 🛠️ Technical Implementation & Syntax Highlights

```sql
-- Example: Explicit Cursor with Control Structure (Scenario 1)
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

Table CUSTOMERS created.
Table LOANS created.

1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
Commit complete.

--- Executing Scenario 1: Senior Citizen Interest Rate Discount ---
PL/SQL procedure successfully completed.
(1 row updated: Interest rate for Customer ID 1 reduced from 8.5% to 7.5%)

--- Executing Scenario 2: VIP Status Promotion ---
PL/SQL procedure successfully completed.
(1 row updated: IsVIP flag set to 'TRUE' for Customer ID 2 with balance $15,000)

--- Executing Scenario 3: Loan Due Reminders ---
Reminder: Loan ID 101 for customer John Doe is due on 2026-07-22

PL/SQL procedure successfully completed.