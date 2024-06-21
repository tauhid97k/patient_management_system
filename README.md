### ENV Setup

#### Create .env file and Update the database credentials

-   DB_CONNECTION=mysql
-   DB_HOST=127.0.0.1
-   DB_PORT=3306
-   DB_DATABASE=patient_management_system
-   DB_USERNAME=
-   DB_PASSWORD=

### Laravel Setup

```php
   composer install
   php artisan key:generate
   php artisan migrate
   php artisan db:seed
   php artisan serve
```

## Features
- Everything made from scratch with consistent design
- Responsive dashboard ui with reusable dropdown, modal, table, drawer, toast, dark mode and more
- User management with role and permissions (Admin can create user and assign role which has predefined permissions)
- Role and permissions management
- Tanstack server-side table with pagination and search filter
- Complex responsive dashboard sidebar
- Sidebar collapse menu (For submenu)
- Patient management with previous records

### Credentials
Admin: `admin@example.com`  
Password: `admin12345`

Staff: `staff@example.com`  
Password: `staff12345`
