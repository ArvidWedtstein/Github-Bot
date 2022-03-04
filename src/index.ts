import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    console.log('issue was opened!')
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  app.on("push", async (ctx) => {
    console.log('PUSSSSHSHHHHH')
    return ctx.octokit.repos.createCommitComment({ owner: "ArvidWedtstein", repo: "Github-Bot", commit_sha: "e40c051", body: `Thanks for pushing ${ctx.payload.pusher.name}!`})
  })
  app.on("commit_comment.created", async (ctx) => {
    console.log('commit comment was created!!!')
    return ctx.octokit.issues.create({owner: "ArvidWedtstein", repo: "Github-Bot", title: "Hehe, cummit incumming"})
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
