# PL/SQL Exercise 3: Stored Procedures & Transaction Management

## 📖 Overview
This module focuses on modular database programming using **Oracle PL/SQL Stored Procedures**. It demonstrates how to encapsulate complex business logic, perform bulk data updates, handle parameterized inputs, and enforce ACID transaction integrity with explicit error handling.

---

## 🎯 Scenarios Covered

### Scenario 1: Monthly Interest Processing
* **Procedure:** `ProcessMonthlyInterest`
* **Business Rule:** Automatically applies a **1% interest rate** increase to the current balance of all accounts categorized as `'Savings'`.
* **Implementation:** Executes a set-based bulk `UPDATE` query against the `Accounts` table and commits the transaction.
### Scenario 2: Departmental Performance Bonus Scheme
* **Procedure:** `UpdateEmployeeBonus(p_department, p_bonus_percentage)`
* **Business Rule:** Dynamically updates employee salaries within a specified department by adding a percentage bonus passed as an input parameter.
* **Implementation:** Uses parameterized `VARCHAR2` and `NUMBER` inputs to filter the target department and calculate the percentage increase mathematically:
  ```text
  NewSalary = Salary + (Salary * (p_bonus_percentage / 100))
### Scenario 3: Secure Inter-Account Fund Transfers
* **Procedure:** `TransferFunds(p_from_account, p_to_account, p_amount)`
* **Business Rule:** Facilitates peer-to-peer fund transfers while guaranteeing that the source account maintains sufficient balance prior to transaction execution.
* **Implementation:** Uses parameterized `VARCHAR2` and `NUMBER` inputs to filter the target department and calculate the percentage increase mathematically:
 

---

## 🛠️ Code Architecture & Syntax Highlights

```sql
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account NUMBER,
    p_to_account NUMBER,
    p_amount NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account
    FOR UPDATE;

    IF v_balance >= p_amount THEN
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RAISE_APPLICATION_ERROR(-20002, 'Account ID does not exist.');
END;
/


Table ACCOUNTS created.
Table EMPLOYEES created.

1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
1 row inserted.
Commit complete.

Procedure PROCESSMONTHLYINTEREST compiled successfully.
Procedure UPDATEEMPLOYEEBONUS compiled successfully.
Procedure TRANSFERFUNDS compiled successfully.

PL/SQL procedure successfully completed.
(Accounts 101 and 103 balances increased by 1%: $5000 -> $5050, $10000 -> $10100)

PL/SQL procedure successfully completed.
(IT Department salaries increased by 10%: Alice -> $66000, Charlie -> $77000)

PL/SQL procedure successfully completed.
(Transferred $2000 from Account 103 to Account 102. New balances: 103 -> $8100, 102 -> $5000)