import jenkinsClient from 'then-jenkins';

if (CONFIG.JENKINS_ENABLED) {
  var jenkins = jenkinsClient(CONFIG.JENKINS_URL);
}

var Jenkins = {
  doBuild: function(params) {
    if (CONFIG.JENKINS_ENABLED) {
      return jenkins.job.build({
        name: CONFIG.JENKINS_JOB,
        parameters: params,
      }).then(buildId => params);
    } else {
      console.log(params);
      return params;
    }
  },

  getLogs: function(build) {
    return jenkins.build.log(CONFIG.JENKINS_JOB, build);
  },
};

export default Jenkins;
