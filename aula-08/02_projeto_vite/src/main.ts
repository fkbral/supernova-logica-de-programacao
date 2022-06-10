import type { GithubUserData } from "./interfaces/GithubUserData.js"
import { v4 } from 'uuid'
import { programaComMenu } from "./menu.js"

async function makeRequests() {
  const response = await fetch('https://api.github.com/users/fkbral')
  const githubUserData: GithubUserData = await response.json()
  console.log(githubUserData)
  console.log(v4())

  const { name, followers, following} = githubUserData

  console.log(`Usuário ${name} segue ${following} pessoas e tem ${followers} seguidores`)  
}

makeRequests()
programaComMenu()
