const https = require('https');

const options = {
  hostname: 'api.github.com',
  path: '/users/RafaelAlbuquerque44/repos?sort=updated&per_page=6',
  headers: {
    'User-Agent': 'Node.js'
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const repos = JSON.parse(data);
      if (Array.isArray(repos)) {
        const result = repos.map(repo => ({
          name: repo.name,
          description: repo.description || 'Sem descrição',
          language: repo.language || 'Geral',
          url: repo.html_url
        }));
        console.log(JSON.stringify(result, null, 2));
      } else {
        console.log('Error: Not an array', repos);
      }
    } catch(e) {
      console.log('Parse error', e);
    }
  });
}).on('error', (e) => {
  console.error(e);
});
