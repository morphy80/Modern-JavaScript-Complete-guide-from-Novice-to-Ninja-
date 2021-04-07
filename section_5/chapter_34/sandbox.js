// objects in arrays

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);
// console.log(blogs[0].title, blogs[0].likes);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // access the blogs here
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(`${blog.title}, ${blog.likes}`);
        })
    }
};

// console.log(this);
user.logBlogs();