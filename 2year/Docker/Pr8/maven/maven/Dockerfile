FROM maven:3.8.1-openjdk-17
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src  ./src
RUN mvn clean package
CMD ["java", "-jar", "target/maven-jar.jar"]