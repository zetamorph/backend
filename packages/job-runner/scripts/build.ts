/*!
 * @copyright FLYACTS GmbH 2018
 */

import { Logger } from '@flyacts/backend-logger';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as shelljs from 'shelljs';

// tslint:disable-next-line
(async function () {
    const logger = new Logger();

    try {
        logger.info(`Build 'job-runner' package`);
        logger.info(`Compiling Typescript`);
        if (shelljs.exec('npm run --silent tsc').code !== 0) {
            throw new Error('Failed to build typescript ');
        }
        logger.info('Add shebang');
        const content = await fs.readFile('./dist/bin/job-runner.js', 'utf-8');
        await fs.writeFile('./dist/bin/job-runner.js', `#!/usr/bin/env node

${content}`);

        logger.info('Copying migration sql files');
        await fs.copy(
            path.join(__dirname, '../src/migrations/'),
            path.join(__dirname, '../dist/migrations'),
            {
                filter: (filename) =>
                    filename.endsWith('sql') || filename.endsWith('migrations/'),
            }
        );

        logger.info('Successfully build job runner');
    } catch (error) {
        logger.error('Failed to execute command.');
        logger.error(error);
    }
})();
