
import type { GithubUserData } from "./GithubUserData"

async function makeRequests() {
  const response = await fetch('https://api.github.com/users/fkbral')
  const githubUserData: GithubUserData = await response.json()
  // console.log(JSON.stringify(githubUserData, null, 2))
  console.log(githubUserData)

  const { name, followers, following} = githubUserData

  console.log(`Usuário ${name} segue ${following} pessoas e tem ${followers} seguidores`)
  
  // fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/brl/usd.json')
}

makeRequests()
