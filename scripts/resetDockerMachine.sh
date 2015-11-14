DOCKER_MACHINE_NAME="wordpress"
docker_machine_exists=$(docker-machine ls | grep $DOCKER_MACHINE_NAME)
if [ "$docker_machine_exists" ]; then
  echo "Deleting docker machine completely"
  docker-machine rm $DOCKER_MACHINE_NAME
fi
if [ "$docker_machine_exists" ]; then
  echo "Force deleting docker machine completely"
  docker-machine rm -f $DOCKER_MACHINE_NAME
fi
