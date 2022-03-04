import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    context.log.info(context.payload);
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  app.on("push", async (ctx) => {
    return ctx.octokit.repos.createCommitComment({ owner: "ArvidWedtstein", repo: "Github-Bot", commit_sha: "ace8e3c07751a473b5a34c5e29cb979fc38301ca", body: "Welcome to this repository!"})
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
