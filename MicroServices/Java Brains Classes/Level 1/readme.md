## Microservice Demo Project

- Create 3 spring boot projects
- Build movie catalog service API
- Build movie info service API
- Build ratings data service API
- Have movie catalog service call the other two services (the naive way)
- Implement a better way (Service discovery)




- Avoid returning lists in API :
	- Enhancement on the lists is a problem as we need to convert it into object.

### Service looking on:

- Movie Catalog Service
	- Input : userId
	- Output : Movie list with details.
	- port : 8081


- Movie Info Service
	- Input : MovieId
	- Output : Movie details.
	- port : 8082
	
	
- Rating Data Service
	- Input : userId
	- Output : Movie IDs and ratings.
	- port : 8083
	

### How to make a REST call from your code ? 

- Calling REST APIs programmatically
- Using a REST client library
- Spring boot comes with a client already in your classPath - RestTemplate
- For info : WebClient will be replacing RestTemplate and WebClient is asynchronous

### Connection

- Movie info service to Movie catalog service
- Call to Rating API

### Why hard coded URLs are bad ?

- Changes require code updates.
- Dynamic Urls in the cloud.
- Load balancing
- Multiple environments
- So we have service discovery

### Service Discovery
                             / Service 1

- Client    ->     Discovery Server
								 
								\ Service 2
									 
- Suppose client need to say 'Hi' to service 2. The discovery server informs service 2 that hey service 2, the client is saying a hi to you.
- Spring cloud uses client side discovery.

### Eureka - For implementing service discovery
- start eureka server
- the individual services will be eureka client and they registers with eureka server
- Start eureka server
- Have microservices register using eureka client.
- Have microservices locate using eureka client
- Every eureka server is eureka client in general.
- The below codes ensures that eureka is a server and it should not act like it is a client.


 ```
server.port = 8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```