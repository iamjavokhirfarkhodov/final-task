module.exports = {
    dataProvider:{
        users: [
            { username: 'standard_user', password: 'secret_sauce' },
            { username: 'problem_user', password: 'secret_sauce' },
            { username: 'performance_glitch_user', password: 'secret_sauce' },
            { username: 'error_user', password: 'secret_sauce' },
            { username: 'visual_user', password: 'secret_sauce' }
        ],
        locked_users: [
            { username: 'locked_out_user', password: 'secret_sauce' }
        ],
        getRandomUsername: function(){
            return this.users[Math.floor(Math.floor(Math.random() * this.users.length))].username;
        },
        getPassword: function(){
            return 'secret_sauce';
        },
        getFakeUsername: function(){
            return 'fake_username';
        },
        getFakePassword: function(){
            return 'fakepass';
        }
    }
}