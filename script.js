const blogData = [
    {
      title: "First Blog Post",
      image: "https://picsum.photos/seed/1/400/200",
      desc: "This is a short description of the first blog post. Learn more by clicking below."
    },
    {
      title: "Second Blog Post",
      image: "https://picsum.photos/seed/2/400/200",
      desc: "This is a short description of the second blog post. Check it out!"
    },
    {
      title: "Third Blog Post",
      image: "https://picsum.photos/seed/3/400/200",
      desc: "Read all about the third topic we’ve written on in this blog post!"
    }
  ];
  
  function loadBlogs() {
    const container = document.getElementById("blog-container");
    blogData.forEach(post => {
      const card = document.createElement("div");
      card.className = "col-md-4";
  
      card.innerHTML = `
        <div class="card h-100">
          <img src="${post.image}" class="card-img-top" alt="Blog Image">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.desc}</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadBlogs);
  