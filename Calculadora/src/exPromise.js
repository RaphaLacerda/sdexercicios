let funcaoQueFazLogDeUsuarioDoGitHub = (userid) => {
    fetch(`https://api.github.com/users/${userid}`)
    .then(response => {
      response.json().then((data) => {
        console.log('all data:', data);
        console.log('name: ', data.name);
      }).catch(error => {
        console.error(error);
      })
    })
    .catch(error => {
        console.error(error);
    })
  };
  
funcaoQueFazLogDeUsuarioDoGitHub('willsg89');

