build
--------------

mongodb container

```
git clone https://github.com/prayagupd/docker-mongodb.git
git pull https://github.com/docker-library/mongo.git master
#git push origin HEAD
cd 3.7
docker build -t mongodb .
docker run -it -p 27017:27017 mongodb
```

or 

```
docker run --name bus-app-mongo -d mongo

// docker exec -it bus-app-mongo mongo

docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES
d5e6fd365383        mongo               "/entrypoint.sh mongo"   About a minute ago   Up About a minute   27017/tcp           bus-app-mongo

$ docker exec -it d5e6fd365383 bash
root@prayagupd:/data# mongo
> show databases
admin     (empty)
easyride  0.078GB
local     0.078GB
> use easyride
switched to db easyride

```

```
npm install
```


run 
----

```
node server.js
```

APIs - server.js
----------------

```
/buses
/message
/contactus

/static/images
```

Resources
---------------

http://pugetsound.onebusaway.org/where/standard/#m(query)q(41)qll(47.6053,-122.3276)_(6)

http://www.opentripplanner.org/

http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.13/api/where/index.html
