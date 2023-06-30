## Surplus food waste management system application
 
Surplus food waste management system is a web application. This project is source code for backend software that providing all required web services to communicate with frontend applications. 
## Functions of the application is as follow:

- User Management, User Registration and secure login - Here users have to fill the details like name, email, phonenumber, create password and select type of role (Donor or Recipient).
- User Roles - Doner: [university, restaurant, individual, NGO] Recipient: [Recipient individual, Recipient organization]
- DashBoard - Here user can see information about donation like how many Total donation completed, total in-progress donation, Total distributed donation, total donation collected.
- donation listing- Here Donor can add doantions and see their donation which they have added. Donor can edit if the doantion not accepted yet.
- Food Inventory - Here Donor can see the doantions to whom dontion is assigned(Name of the recipient) and wheather recipient accepted the donation or not. Recipient can accept or reject the donation and also user can able give rating and feedback to the doantion. Donar can able to see the rating and feedback for his doantion if Recipient provide his rating and feedback.
- Collection scheduling - Donor can add place and time of collection while adding donation.
- Recipient matching for food distribution- Here dontion is distribution by matching the Recipient like dieatry preferences(Veg & NonVeg) and wheather the Recipient is individual or orginazation.
- Compliance status tracking- Here Donaor can track their donations status in food Inventory like in-progress, distributed, Incollection, collected.
- donation Distribution algorithm- System distributes the donation to relavent user by matching Recipient role and dieatry preferences. 
- Reminders & Email notification- System send Email to relavent users about any updates on donation or schedulling.
- Forgot Password- if user forgot password. System generates temporary password and sent to email to relavent user.
- Change Password - if user want to change password. user can genarate the password in their profile.
- recipient feedback and Rating - After Recipient accepting the donation. Recipient can provide feedback and rating for the donation.
- Admin: Admin can maintain User Accounts.
- Refer a Friend: in refer a friend screen we can provide an email of our friend to refer.
- contact us: Contact us feature will help us to contact with admin.

# Getting Started
This project folder contains the source code of frontend project
- Frontend project folder contains src folder, package.json and other configuration files. 
- File package.json contains all the installable dependencies

# Frontend Installation
To run the angular project We need to 
	1.Node.js
	2.NPM (Node package manager)
	3.Angular CLI(npm install -g @angular/cli)
	4. Visual Studio Code


# We used Angular Material for some of the templates  like card navbar etc..

| **Software and Hardware** | **SOURCE** | **IDENTIFIER** |
| --- | --- | --- |
| Node | nodejs | [https://nodejs.org/en/download] |
| NPM | npmjs | [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm] |
| Angular cli | angular | [https://angular.io/cli] |
| Visual studio code | visualstudio | [https://code.visualstudio.com/download] |

## For Running project the angular project, First Build and run
- # Build project 
npm install

- # Run project
ng serve

- # Run project on different port
ng serve --port =4200 or different port


# Sample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

