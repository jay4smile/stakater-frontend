# stakater-frontend

* Checkout the repository
* Make sure you have angular and node is installed
* Go inside application folder and execute `npm install`
* Run `ng build` command to build the codebase
* Run `ng serve` command to start application on 4200 port


# Docker commands
* Run `docker build -t jay4smile/stakater-frontend:latest .` command to build the application
* Run `docker push jay4smile/stakater-frontend:latest` to push reposity
* Run `sudo docker run -p 8085:80 -e API_URL='http://localhost:8080' -d -it jay4smile/stakater-frontend:latest` 

# kubernates
* Go to kubernates folder and run `kubectl applu -f` to apply kubernates yaml
* Go to kubectl port-forward svc/stakater-frontend 8085:80
