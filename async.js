let posts = [
    {
        description : "Lorem 1",
    },
    {
        description : "Lorem 2",
    }
]

const listPosts = () => {
    posts.map((post)=>{
        console.log(post);
    })
}

const addPost = (post) => {
    const promise1 = new Promise((resolve,reject) => {
        posts.push(post);
          resolve("add post");
          //reject("not add post")
    })

    return promise1;
}

let showPosts = async ()=>{
    try {
        await addPost({description:"Lorem 2022"});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();