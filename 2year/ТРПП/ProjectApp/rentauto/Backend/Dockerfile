#### Stage 1: Build the application
FROM openjdk:19

WORKDIR /app

COPY target/Backend-0.0.1-SNAPSHOT.jar ./app.jar

CMD ["java", "-jar", "app.jar"]