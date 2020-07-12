import { getInputs } from './action-inputs';

async function run(): Promise<void> {
  getInputs();

  //  const githubConnector = new GithubConnector();
  //  const jiraConnector = new JiraConnector();
  //
  //  if (!githubConnector.isPRAction) {
  //    console.log('This action meant to be run only on PRs');
  //    process.exit(0);
  //  }
  //
  //  if (shouldSkipBranch(githubConnector.headBranch, BRANCH_IGNORE_PATTERN)) {
  //    process.exit(0);
  //  }
  //
  //  const issueKey = githubConnector.getIssueKeyFromTitle();
  //
  //  if (!issueKey) {
  //    process.exit(0);
  //  }
  //
  //  console.log(`JIRA key -> ${issueKey}`);
  //
  //  const details = await jiraConnector.getTicketDetails(issueKey);
  //  await githubConnector.updatePrDetails(details);
  //} catch (error) {
  //  console.log({ error });
  //  core.setFailed(error.message);
  //  process.exit(1);
  //}
}

run();
