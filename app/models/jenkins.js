import app from '../index.js';
var CONFIG = require.main.require('./config');
import jenkinsClient from 'then-jenkins';

if (CONFIG.JENKINS_ENABLED) {
  var jenkins = jenkinsClient(CONFIG.JENKINS_URL);
}

var Jenkins = {
  doBuild: function(params) {
    return jenkins.job.build({
      name: CONFIG.JENKINS_JOB,
      parameters: params,
    });
  },

  getLogs: function(build) {
    return jenkins.build.log(CONFIG.JENKINS_JOB, build);
  },
};

export default Jenkins;
