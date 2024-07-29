
# Execute this command to build our image.
docker build -t web:0.1.0 .

# ensure image is available
docker image ls

# verify its working
docker run --rm --name web-1 -p 80:80 -d web:0.1.0