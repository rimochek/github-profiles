import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: "YOUR_TOKEN",
})

export default octokit
