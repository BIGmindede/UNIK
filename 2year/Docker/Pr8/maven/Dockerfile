FROM maven:latest
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src  ./src
RUN mvn clean package
CMD ["java", "-jar", "target/maven-1.0-SNAPSHOT.jar"]