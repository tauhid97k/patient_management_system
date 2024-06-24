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
   npm install
   php artisan key:generate
   php artisan migrate
   php artisan db:seed
   npm run dev (or npm run build)
   php artisan serve
```

## Features
- Everything is made from scratch with well crafted consistent design (light and dark mode)
- Responsive dashboard UI with reusable dropdown, modal, table, drawer, toast, dark mode, and more
- User management with role and permissions (Admin can create user and assign role which has predefined permissions)
- Role and permissions management (Role creation with permissions)
- Permissions check in frontend and backend
- Tanstack server-side table with pagination and search filter
- Complex responsive dashboard sidebar
- Patient management with previous records
- Predefined role and permissions seeder
- 100 Patients seeder

### Note
- Initially, staff doesn't have any permissions other than just role
- Admin has access to everything by default and has some security checks
- Test role permissions on different browsers. One with staff and another with admin

### Credentials
Admin: `admin@example.com`  
Password: `admin12345`

Staff: `staff@example.com`  
Password: `staff12345`
