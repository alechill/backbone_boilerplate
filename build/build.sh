#!/bin/bash

PROJECT_DIR=../
DIST_DIR=PROJECT_DIR/dist
BUILD_DIR=PROJECT_DIR/build

BUILD_DIR/clean.sh

mkdir DIST_DIR
mkdir DIST_DIR/js
cp -r PROJECT_DIR/* DIST_DIR
cp DIST_DIR/index.html DIST_DIR/index.debug.html
sed s/data-main="js/main"/data-main="js/main-built"/ DIST_DIR/index.debug.html >> DIST_DIR/index.html

java -classpath BUILD_DIR/js.jar:BUILD_DIR/compiler.jar org.mozilla.javascript.tools.shell.Main BUILD_DIR/r.js -o BUILD_DIR/config.js