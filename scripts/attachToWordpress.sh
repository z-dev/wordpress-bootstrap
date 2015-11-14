DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source $DIR/setupDockerMachine.sh

docker exec -it $(docker ps | grep _wordpress_1 | awk '{print $1}') bash
