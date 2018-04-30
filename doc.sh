#!/usr/bin/env bash

./node_modules/.bin/jsdoc --destination doc $(find -not -path './node_modules*' -not -path './doc*' -regex '.*\.js')

