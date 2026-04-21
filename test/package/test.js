'use strict';

const { tests } = require('@iobroker/testing');

// Run package tests (validates package.json, io-package.json, etc.)
tests.packageFiles(__dirname + '/../..');
