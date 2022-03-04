import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    console.log('issue was opened!')
    const issueComment = context.issue({
      body: "Thanks for opening this issue!"
    });
    context.octokit.issues.createComment(issueComment);
    context.octokit.issues.addLabels({
      owner: context.issue().owner,
      repo: context.issue().repo,
      issue_number: context.issue().issue_number,
      labels: ["Bot Test", "invalid"]
    })

    // Create Issue
    // context.octokit.issues.create({
    //   owner: context.issue().owner, 
    //   repo: context.issue().repo, 
    //   title: "Hehe, cummit incumming",
    //   body: "Yes, the time has cum"
    // })
    
    // React to issue
    context.octokit.reactions.createForIssue({
      owner: context.issue().owner,
      repo: context.issue().repo, 
      issue_number: context.issue().issue_number,
      content: "heart"
    })
    context.octokit.projects.createCard({
      column_id: 1,
      note: "test"
    })
    
    return 
    
  });
  app.on("push", async (context) => {
    // Code was pushed to the repo, what should we do with it?
    app.log.info(context);
  });
  app.on("commit_comment.created", async (ctx) => {
    console.log('commit comment was created!!!')
    return ctx.octokit.issues.create({
      owner: ctx.issue().owner, 
      repo: ctx.issue().repo, 
      title: "Hehe, cummit incumming",
      body: "Yes, the time has cum"
    })
  })
  app.onAny(async (context) => {
    app.log.info({ event: context.name, action: context.payload.action });
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
