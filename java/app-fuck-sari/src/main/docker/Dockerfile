#FROM java:8
FROM java:8-jre-alpine
VOLUME /tmp
ADD app-fuck-sari-1.0.0-a1.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]