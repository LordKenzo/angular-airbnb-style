# Authentication/Registration with JWT - (Backend)
  ### [x] Create branch on git server/auth-server
  ### [x] Create User Model
  ### [x] Create User POST Routes (users/auth, users/register)
  ### [x] Update Rental Model for referencing User (1 to M relationship)
  ### [x] Install middleware body-parser
  ### [x] Create User Controller (move logic out from routes)
  ### [x] Install bcrypt
  ### [x] Encrypt Password
  ### [x] Install jsownWebToken
  ### [x] Create Token
  ### [x] Verify Token
  ### [x] Register User to DB
  ### [ ] Extend User Model for LoginAttempts/Lock Account
  ### [ ] Store Login Attempts
  ### [ ] Lock/Unlock Account
  ### [ ] Reset Account Password
  ### [ ] Invalidate All Tokens
# Authentication/Registration with JWT - (Frontend - Auth Module)
  ### [x] Create branch on git feature/client-auth
  ### [x] Create Auth Module inside feature with Auth container Component (This Container is irrevelant for now...maybe I'll drop it?)
  ### [x] Create Login Component inside Auth Module
  ### [x] Create Register Component inside Auth Module
  ### [x] Create Auth.Routes and Module AuthRoutingModule
  ### [x] Lazy Loading Auth Module with loadChildren path#moduleName
  ### [x] Create Registration Form with Bootstrap4 as a Template Driven Form
  ### [x] Add FormsModule in AuthModule
  ### [x] Create form template variable and assign it the value ngForm
  ### [x] Create basic form validation
  ### [x] Create an Auth Service in Auth shared folder that sent POST request
  ### [x] Invoke service AuthService from Register function in Register Component
  ### [x] Redirect to Login Page for a succesfull User Registration, you need Router from '@angular/router'
  ### [x] Make a Login Form as Reactive Forms not as Template Driven Form
  ### [x] Add Service validators to the Login Form inside Shared Module
  ### [x] Create Auth method for login inside Auth Service
  ### [x] Storage valid JWT Token inside Local Storage from Auth Service not form Login Component!!!
  ### [x] Redirect successfull login to /rentals with this.router.navigate(['/rentals', {login: 'success'}]);
  ### [x] Create a notify messagge for succesfully login. You need ActivatedRoute for get params
  ### [x] On Success Login: Decode Token and Save Info to LocalStorage
  ### [x] Get Expiration of Token in LocalStorage for Manage State (Authenticad/Not Authenticated)
  ### [x] HeaderBar can check if user is Authenticated
  ### [x] Create a Class for Decoded Token
  ### [x] Create Logout functionality inside Auth Service and in Header Component
  ### [x] Display Username on Header Component
  ### [x] Create auth.guard to prevent to load login page if authenticated with AuthGuard
  ### [x] Use CanActivate in Rental.routes and Auth.routes to prevent Rentals:id if not authenticated
  ### [x] Refactor Auth.service and Auth.guard inside a new Module Auth inside Core Module
  ### [x] Create a new function in Auth.service for get token form localstorage
  ### [x] Create auth.interceptors
  ### [x] Provide Interceptor in AppModule
  ### [x] Send Token to Server with Interceptors
  ### [ ] Create a Profile Dashboard inside Auth Module

# Admin Dashboard