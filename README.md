# Talking_Libro
Digital Audio Books As a SAAS Application


# Talking Libro - Audio Book Library
## Problem Statement and Formulation 

One of the problems People face these days, they do not have time to read books in today's life. With this busy life cycle people do not tend to go to libraries and read books. Moreover, with pandemic situation people are not able to visit libraries. People who travel a lot cannot travel with all their books. And this application is also for those who have Eye sight disabilities. 

## Objective 

The main objective of this project is to build a less costly, more scalable, more secure and more reliable system to reduce the burden on servers to make them faster and pay for what we use. Anyone can easily access this and hear an Audio book. In this application there are three languages users can select which are Sinhala, English and also Tamil.  

### Purpose and Target Users 

#### Target User 

The target audience for our SaaS application is people who are busy with their day-to-day work, students who are willing to read books and willing to read extra study materials. We specialize in audiobooks that belong to a wide range of categories. 

#### Purpose 

Develop audiobook digital library as a SaaS application. With this product users can listen to audiobooks at any time without going to the library. It saves up users’ valuable time and cost. 

## Innovative Contribution  
 
#### High Availability 

This Software as a Service application provides their customers with a high level of SLA. Applications will be available around the world 24 hours a day, seven days a week. In addition, this SaaS application exposes management and monitoring APIs in order to continuously check the health/availability factor. 
 
#### Data Security 

In today's world, it is critical to ensure that data/business information is protected from corruption and unauthorized access. Because Software as a Service applications are intended to be shared by multiple tenants, it is critical to understand how well the data is secured. Certain types of data must be encrypted and stored for a specific tenant and should not be accessible to another tenant.  
We used hash Function to its data security. And also hope to integrate with the CASB (Cloud Access Security Brokers) system and will also boost data security confidence. In order to protect the data, very strict Role Based Access Controls will be implemented. 
 
#### Application Security 

SaaS applications should be equipped with protection against vulnerabilities.  
So, we already have step-Up authentication like password. And will be implemented multi factor authentication, Protection against DoS/DDoS and Protection against buffer overflow attacks. 

## Business Model 

This audio book application has a 30 days length free trial and 6 months subscription, and also no hidden costs as users can cancel the subscription anytime if she/he decides an audiobook isn’t right for them. 
#### Revenue  


![Revenue Plans](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/revenue%20plan.jpg?raw=true)

## SaaS Architecture & Implementation 
### Design High level Diagram  
![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/highlevel%20diagram.png?raw=true)

#### Technology Stacks. 
Selecting a technology stack for the SaaS application is akin to choosing the building materials for a house. The choice of the technical stack depends on the type of business and we have chosen them to fit our startup. The technology stack is what’s used to build and run web app. We divided the entire web development process into two sections, Client-side programming and Server-side programming, and first looked at the relevant stacks. 

- Client-Side Programming - The client-side, also known as the frontend technologies of the web application development is the part that the user sees and interacts with. Front-End technologies, 
        
    - HTML (Hypertext Markup Language)—responsible for the structure of the displayed content.  
    
    - CSS (Cascading Style Sheets)—describes the style (presentation) of the content (layout, colors, fonts, spacing), can be short-handed with tools such as SASS. 
    
    - JavaScript - breathes interactivity into a Web application: animations, forms, image carousels, visuals, etc. 

- Server-Side Programming - Server-side software determines how the server, application, database, and other components in a Web application architecture communicate and work with each other. The Web app code can be written raw or with the use of a backend framework, which streamlines the development process. We created the back-end of this application using, 
    
    - Framework – Node.js Express 
    
    - Programming Language – JavaScript 

- Database 
    
    Talking Libro Data Base – MongoDB 

- Open Source Web Servers 

    Used Amazon AWS Server for this application.  

### Implementation 
 
Connect Cluster with MongoDB Compass:

The data entered by a user when logging in to an application is stored in mongodb. That data cannot be stored in a local storage. Therefore, the database needs to be connected to a cloud. To achieve that require. Used MongoD Atlas Cluster. 

![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/DS%20Deployment.jpg?raw=true)


After Create the cluster, created the network access, and data base access.  
 
![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/network%20access.jpg?raw=true)


After complete it, created the Admin user for data base access.  
 
![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/DB%20access.jpg?raw=true)

 
The database is protected by a password and is accessible only to the logged in admin. 
 
Host Application on AWS EC2:

Used Amazon Web Services for hosting our SaaS application. 
The first step done in launching the app was to create an s3 bucket and transfer our files to the s3 bucket.  
 
![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/S3%20bucket.jpg?raw=true)

 
Then must be set to allow EC2 permission to download files from s3. 
Configure Security Group (Open Required Ports) step is very important so that Amazon EC2 instance is accessible on the internet. 
Opened 4 ports: 
- SSH – TCP Port 22 
- HTTP – TCP Port 80 
- HTTPS – TCP Port 443 
- Custom – TCP Port 34210 
 
![](https://github.com/LuLu-bl/Talking_Libro/blob/master/SS/Security%20Group.jpg?raw=true)

After clicking the “Launch” button, Amazon EC2 will ask you to select an existing key pair or create a new key pair. After that created the new key pair. This key pair is very important to allow to connect to our server securely. Then created A Static Public IP Address. Finally, Connected Amazon EC2 Instance to Run Cloud. Run Cloud is a cloud server management tool that allows to maintain full control of our server.  












