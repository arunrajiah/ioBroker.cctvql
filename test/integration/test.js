'use strict';

const path = require('path');
const { tests } = require('@iobroker/testing');

// Run the standard adapter startup integration tests
tests.integration(path.join(__dirname, '../..'), {
    allowedExitCodes: [11],
});
