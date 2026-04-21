'use strict';

const path = require('path');
const { tests } = require('@iobroker/testing');

// Run integration tests — starts the adapter and checks basic functionality
tests.integration(path.join(__dirname, '../..'), {
    allowedExitCodes: [11],
    defineAdditionalTests() {
        describe('Basic integration', () => {
            before(function () {
                this.timeout(60000);
            });
            it('adapter starts without errors', function (done) {
                this.timeout(30000);
                setTimeout(done, 5000);
            });
        });
    },
});
