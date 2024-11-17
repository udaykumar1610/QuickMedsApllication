FROM openjdk:17-jdk


EXPOSE 8085

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} backendimage.jar

ENTRYPOINT ["java","-jar","/backendimage.jar"]