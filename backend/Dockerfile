FROM maven:3.8.6-sapmachine-17 AS build
COPY /src /app/src
COPY /pom.xml /app
RUN mvn -f /app/pom.xml clean package -Dmaven.test.skip

FROM openjdk:20-slim-buster
EXPOSE 8080
COPY --from=build /app/target/*jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]