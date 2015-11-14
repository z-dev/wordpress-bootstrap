DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

$DIR/buildTheme.sh && \
  source $DIR/setupDockerMachine.sh && \
  docker-compose up
