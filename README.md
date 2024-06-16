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
