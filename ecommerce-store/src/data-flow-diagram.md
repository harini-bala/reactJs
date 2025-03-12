# Ecommerce Store - Data Flow Diagram (DFD)

## Level 0: Context Diagram

At the highest level, the system consists of a **User** interacting with the **Ecommerce Store App** to browse products, manage a shopping cart, and place orders.

```plaintext
+-----------------------+
|  External Entity      |
|       (User)         |
+-----------------------+
          |
          v
+---------------------------+
|  Ecommerce Store App      |
|     (React Frontend)      |
+---------------------------+
          |
          v
+---------------------------+
|  Data Store:              |
|  - Product Catalog        |
|  - Shopping Cart          |
|  - Order Management       |
+---------------------------+
```

### Explanation:
- **External Entity (User):** The user interacts with the ecommerce app by browsing products, adding/removing items from the cart, and placing orders.
- **Process (Ecommerce Store App):** The application processes user input, updates the state, and fetches data from APIs if needed.
- **Data Store (Product Catalog / Shopping Cart / Order Management):** 
  - **Product Catalog:** Stores available product details.
  - **Shopping Cart:** Manages the user’s selected products.
  - **Order Management:** Handles placed orders and transactions.

---

## Level 1: Detailed Data Flow Diagram

Breaking down the **Ecommerce Store App** into its specific processes:

```plaintext
+--------------------------+
|    External Entity       |
|         (User)          |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.1            |
| Browse Products         |
+--------------------------+
           |
           v
+--------------------------+
| Data Store: Product     |
|         Catalog         |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.2            |
| Manage Shopping Cart    |
+--------------------------+
           |
           v
+--------------------------+
| Data Store: Shopping    |
|         Cart           |
+--------------------------+
           |
           v
+--------------------------+
| Process: 1.3            |
| Place Order             |
+--------------------------+
           |
           v
+--------------------------+
| Data Store: Order       |
|     Management         |
+--------------------------+
```

### Explanation:
1. **Process 1.1 (Browse Products):**  
   - The user views available products.  
   - The application fetches product details from the **Product Catalog** data store and displays them.  

2. **Process 1.2 (Manage Shopping Cart):**  
   - The user adds or removes products from their shopping cart.  
   - The application updates the **Shopping Cart** data store accordingly.  

3. **Process 1.3 (Place Order):**  
   - The user initiates the checkout process.  
   - The application processes the order, updates the **Order Management** data store, and potentially interacts with external payment gateways (not shown in this DFD).  

---
