DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source $DIR/setupDockerMachine.sh

open "http://$(docker-machine ip $DOCKER_MACHINE_NAME):8080"
