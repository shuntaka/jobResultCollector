import { exec } from 'child_process';
import { util } from 'util';
import { EventEmitter } from 'EventEmitter';

util.inherits(RPAWrapper, EventEmitter);
RPAWrapper.prototype.run = () => {
  this.strategy.run();
}

RPAWrapper.prototype.run = () => {
  const winActorPath = 'C:\\Users\\Catalyst\\Desktop\\WinActor\\WinActor.exe';
  const scenarioPath = 'C:\\Users\\Catalyst\\Documents\\WinActorScenario\\helloGoogle.ums4';
  const cmdExeWinActor = `${winActorPath} -f ${scenarioPath} -r -e`;
  const cmdExe = exec(cmdExeWinActor, (err, stdout, stderr) => {
    cmdExe.kill();
    if (err === null) {

    }
  });
  const cmdExePid = cmdExe.pid;

  const cmdGetPidWinActor
    = `wmic process where parentprocessid=${cmdExePid} get processid, name`;
  const cmdExe2 = exec(cmdGetPidWinActor, (err, stdout, stderr) => {
    cmdExe2.kill();
    const procInfo = stdout.toString();
    // procList = procInfo.split(/\r?\n/);
    procList = procInfo.split(/\s/);
    console.log(procList);
  });
};

module.exports = RPAWrapper;
