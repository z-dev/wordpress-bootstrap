# WordPress Bootstrap Template [![Circle CI](https://circleci.com/gh/z-dev/wordpress-bootstrap.svg?style=svg)](https://circleci.com/gh/z-dev/wordpress-bootstrap)

A simple (modern) wordpress theme. Built with webpack and the latest bootstrap.

Based heavily from: https://github.com/320press/wordpress-bootstrap

## Running

###Prerequisites

* Docker, docker-compose, docker-machine - Install [Docker Toolbox](https://www.docker.com/toolbox)
* Node 4 or greater

###Run

`scripts/runWordpress.sh` This will build the theme and launch a wordpress and sql database. It will mount the built theme into wordpress. You can then select the theme in wordpress.

Open a new terminal you can:

* `scripts/openInBrowser.sh` open wordpress page:
* `scripts/watchBuildTheme.sh` Watch for changes and rebuild the theme to `build` folder
* `scripts/buildTheme.sh` build the theme to `build` folder
* `scripts/attachToWordpress.sh` Attach to docker container.
* `scripts/resetDockerMachine.sh` Reset docker-machine virtual machine so you can start again.
* `scripts/createThemeZip.sh` Creates a zip you can put into wordpress.


### Activating the Theme

Go to admin pages -> Appearance -> Themes -> wp-boostrap -> activate
