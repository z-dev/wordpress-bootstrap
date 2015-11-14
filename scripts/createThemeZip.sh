DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR/../

$DIR/buildTheme.sh && zip -r bootstrap-theme.zip build/
