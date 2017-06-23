import express from 'express';
import { exec } from 'child_process';
import agentConfig from './winActorAgentConfig';

const app = express();
let WAavailability = true;

app.get('/winActorAvailability', (req, res) => {
  if (WAavailability === false) {
    return res.end('winActor not available');
  }
  return res.end('winActorAvailable');
});

// launch WinActor and monitor the execution state
app.get('/executeWinActor', (req, res) => {
  console.log('received request');
  const winActorPath = 'C:\\Users\\Catalyst\\Desktop\\WinActor\\WinActor.exe';
  const scenarioPath = 'C:\\Users\\Catalyst\\Documents\\WinActorScenario\\helloGoogle.ums4';
  const cmdExeWinActor = `${winActorPath} -f ${scenarioPath} -r -e`;

  const cmdExe = exec(cmdExeWinActor, (err, stdout, stderr) => {
    cmdExe.kill();
    if (err === null) {
      WAavailability = false;
    }
  });
  console.log(cmdExe.pid);

  

  const watchWAProc = () => {
    setTimeout(() => {
      const cmdGetPidWinActor
        = `wmic process where parentprocessid=${cmdExe.pid} get processid, name`;
      const cmdExe2 = exec(cmdGetPidWinActor, (err, stdout, stderr) => {
        cmdExe2.kill();
        const procInfo = stdout.toString();
        if (/WinActor/.test(procInfo)) {
          console.log('winActor executing');
          return watchWAProc();
        }
        console.log('winActor gets available');
        return (WAavailability = true);
      });
    }, agentConfig.watchInterval);
  };
  watchWAProc();
  res.send('executed winActor');
});

const server = app.listen(agentConfig.port, agentConfig.ipaddress, () => {
  console.log(server.address());
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
