#!/bin/bash

PROJECT_DIR=../
BUILD_DIR=$PROJECT_DIR/build

$BUILD_DIR/clean.sh

mkdir $PROJECT_DIR/dist
DIST_DIR=$PROJECT_DIR/dist

mkdir $DIST_DIR/js
#app stuff
cp -r $PROJECT_DIR/css $DIST_DIR
cp -r $PROJECT_DIR/fixtures $DIST_DIR
cp -r $PROJECT_DIR/img $DIST_DIR
cp -r $PROJECT_DIR/js $DIST_DIR
cp -r $PROJECT_DIR/templates $DIST_DIR
cp $PROJECT_DIR/index.html $DIST_DIR/index.debug.html
#boilerplate stuff
cp $PROJECT_DIR/404.html $DIST_DIR
cp $PROJECT_DIR/*.png $DIST_DIR
cp $PROJECT_DIR/*.xml $DIST_DIR
cp $PROJECT_DIR/*.txt $DIST_DIR
cp $PROJECT_DIR/*.ico $DIST_DIR

sed 's/data-main="js\/main"/data-main="js\/main-built"/' $DIST_DIR/index.debug.html >> $DIST_DIR/index.html

#@todo - not tracing dependencies via main, may have to extract config and define main as a module with its dependencies
java -classpath $BUILD_DIR/js.jar:$BUILD_DIR/compiler.jar org.mozilla.javascript.tools.shell.Main $BUILD_DIR/r.js -o $BUILD_DIR/config.js