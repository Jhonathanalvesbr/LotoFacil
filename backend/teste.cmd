docker container prune -f
docker system prune -f
docker volume prune -f
docker image prune -f
docker build -t jspmysql:0.1 .
docker run -it -p 3306:3306 jspmysql:0.1

