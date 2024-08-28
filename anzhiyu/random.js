var posts=["2024/08/28/hello-world/","2024/08/28/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };