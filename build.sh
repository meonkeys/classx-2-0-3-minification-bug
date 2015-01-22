#!/bin/bash
deployDir=`mktemp --tmpdir --directory classx-test.XXXXXXXXXX`
rm -rf $deployDir
meteor build --directory $deployDir
cd $deployDir/bundle
cd $deployDir/programs/server
npm install
cd $deployDir/bundle
node main.js
