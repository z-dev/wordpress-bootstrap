DOCKER_MACHINE_NAME="wordpress"
docker_machine_exists=$(docker-machine ls | grep "$DOCKER_MACHINE_NAME")
if [ "$docker_machine_exists" == "" ]; then
  echo "Creating a docker virtual machine for you :)"
  docker-machine create -d virtualbox --virtualbox-memory "2048" $DOCKER_MACHINE_NAME
fi
docker-machine start $DOCKER_MACHINE_NAME
eval $(docker-machine env $DOCKER_MACHINE_NAME)
