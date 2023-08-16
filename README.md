# serverless-counter-node


## Description:
This program is a part of upgrad assignment which will take the input string from the user and will print the length of the string as output.

## Setup
* First we need to create a lambda function in aws console, copy the content of lambda.js 
* open API Gateway service on aws cosole
* create REST.API with post method and integrate the lamba function with it.
* create an EC2 instance and install node.js
* clone this public repository
* edit client.js and replace api gateway url into the code
* edit security group and add 3000 TCP rule
* run node client.js
* copy ec2 instance public ip
* in browser run
```http://<ec2-public-ip>:3000```


