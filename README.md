# Task description  

### Launch URL: https://www.saucedemo.com/  
### UC-1 Test Login form with empty credentials:  
Type any credentials into "Username" and "Password" fields.  
Clear the inputs.  
Hit the "Login" button.  
Check the error messages: "Username is required".  

### UC-2 Test Login form with credentials by passing Username:  
Type any credentials in username.  
Enter password.  
Clear the "Password" input.  
Hit the "Login" button.  
Check the error messages: "Password is required".  

### UC-3 Test Login form with credentials by passing Username & Password:  
Type credentials in username which are under Accepted username are sections.  
Enter password as secret sauce.  
Click on Login and validate the title “Swag Labs” in the dashboard.  

Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.  
Please, add task description as README.md into your solution!  
To perform the task use the various of additional options:  
Test Automation tool: WebDriverIO;  
Browsers: 1) Chrome; 2) Firefox;  
Locators: CSS;  
Patterns: Page Object;  
Assertions: Use from the selected framework;  
[Optional] Loggers: Use from the selected framework.  

# Instructions to run  

1) clone repository  
2) npm install  
3) npm run test  

# Requirements to run

1) Google Chrome, Firefox, Microsoft edge should be installed and available to use.
2) Node JS version v20.15.0 or above should be installed  
3) Follow instructions  

# Inquiry

Microsoft Edge is not listed in above requirements. Please remove it from capabilities in src/config/wdio.conf.js in case it does not work on your pc.  
Otherwise, Edge also runs for tests. 

# Notes

Task description says errors are displayed at (UC-1) as "Username is required" and at (UC-2) as "Password is required".  
However, Webpage(https://www.saucedemo.com/) displays errors as at (UC-1) as "Epic sadface: Username is required" and at (UC-2) as "Epic sadface: Password is required".  

Tests are developed on Windows platform using Node JS version v20.15.0. 