async function fetchDashboardData(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
  if (!res.ok) {
    if (res.status === 403) {
      throw new Error('Rate limited by GitHub API')
    } else {
      throw new Error(`Request failed: ${res.status} ${res.statusText} ${url}`)
    }
  }
  return res.json()
}

async function fetchGitStats(urls) {
  return Promise.all(urls.map(fetchDashboardData));
}

async function getGithubDashboard() {
  try {
    const [profile, repo, followers] = await fetchGitStats([
      'https://api.github.com/users/octocat',
      'https://api.github.com/users/octocat/repos',
      'https://api.github.com/users/octocat/followers'
    ])
  return {profile, repo, followers};
  } catch (error) {
    console.error('Failed to load the dashboard', error);
    throw error;
  }
}

getGithubDashboard()
.then(({profile, repo, followers}) => {
  console.log('Profile:', profile.name, profile.bio ?? 'No Bio');
  console.log('Repositories:', repo.sort((a, b) => b.stargazers_count - a.stargazers_count).map(r => r.name
  ));
  console.log('Followers:', followers.length);
}).catch(error => console.log('Failed', error.message));