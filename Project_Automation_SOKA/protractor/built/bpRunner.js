"use strict";
const child_process_1 = require("child_process");
const q = require("q");
const logger_1 = require("./logger");
const BP_PATH = require.resolve('blocking-proxy/built/lib/bin.js');
let logger = new logger_1.Logger('BlockingProxy');
class BlockingProxyRunner {
    constructor(config) {
        this.config = config;
    }
    start() {
        return q.Promise((resolve, reject) => {
            this.checkSupportedConfig();
            let args = [
                '--fork', '--seleniumAddress', this.config.seleniumAddress, '--rootElement',
                this.config.rootElement
            ];
            this.bpProcess = child_process_1.fork(BP_PATH, args, { silent: true });
            logger.info('Starting BlockingProxy with args: ' + args.toString());
            this.bpProcess
                .on('message', (data) => {
                this.port = data['port'];
                resolve(data['port']);
            })
                .on('error', (err) => {
                reject(new Error('Unable to start BlockingProxy ' + err));
            })
                .on('exit', (code, signal) => {
                reject(new Error('BP exited with ' + code));
                logger.error('Exited with ' + code);
                logger.error('signal ' + signal);
            });
            this.bpProcess.stdout.on('data', (msg) => {
                logger.debug(msg.toString().trim());
            });
            this.bpProcess.stderr.on('data', (msg) => {
                logger.error(msg.toString().trim());
            });
            process.on('exit', () => {
                this.bpProcess.kill();
            });
        });
    }
    checkSupportedConfig() {
        if (this.config.directConnect) {
            throw new Error('BlockingProxy not yet supported with directConnect!');
        }
    }
}
exports.BlockingProxyRunner = BlockingProxyRunner;
//# sourceMappingURL=bpRunner.js.map