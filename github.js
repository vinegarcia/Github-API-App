//api mens json file javascript object notation

class Github {
    constructor() {
        this.client_id = 'ccfae6920aa38627e553';
        this.client_secret = '80381d318cd9e3cd0f8d27d37661cd0235a029e4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
       const profile = await profileResponse.json();
       const repos = await repoResponse.json();

       return {
        profile,
        repos
        //profile:profile for beginnner
       };
    }
}