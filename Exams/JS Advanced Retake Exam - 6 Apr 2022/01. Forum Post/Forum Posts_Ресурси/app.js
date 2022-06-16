window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);

  let postTitle = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let postContent = document.getElementById('post-content');

  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  function publish() {
    let post = document.createElement('li');
    post.setAttribute('class', 'rpost');

    let article = document.createElement('article');

    let title = document.createElement('h4');
    title.textContent = postTitle.value;
    article.appendChild(title);

    let category = document.createElement('p');
    category.textContent = 'Category: ' + postCategory.value;
    article.appendChild(category);

    let content = document.createElement('p');
    content.textContent = 'Content: ' + postContent.value;
    article.appendChild(content);    

    let approveButton = document.createElement('button');
    approveButton.addEventListener('click', approve);
    approveButton.textContent = 'Approve';
    approveButton.setAttribute('class', 'action-btn approve');
    post.appendChild(approveButton);

    let editButton = document.createElement('button');
    editButton.addEventListener('click', edit);
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'action-btn edit');
    post.appendChild(editButton);

    post.appendChild(article);

    
    reviewList.appendChild(post);
    
    postTitle.value = '';
    postCategory.value = '';
    postContent.value = '';
  }

  function edit(ev) {
    let postedTitle = ev.target.parentNode.children[2].children[0].textContent;
    let postedCategory = ev.target.parentNode.children[2].children[1].textContent;
    let postedContent = ev.target.parentNode.children[2].children[2].textContent;

    postTitle.value = postedTitle;
    postCategory.value = postedCategory.substring(10, postedCategory.length);
    postContent.value = postedContent.substring(9, postedContent.length);

    let postToRemove = ev.target.parentNode;
    reviewList.removeChild(postToRemove);
  }

  function approve(ev) {
    let approvedPost = ev.target.parentNode;
    
    reviewList.removeChild(approvedPost);

    let articleElement = approvedPost.children[2];
    for (let element of Array.from(articleElement)) {
      element.textContent = ' ' + element.textContent;
    }
    
    publishedList.appendChild(articleElement);
  }

  function clear() {
    publishedList.innerHTML = '';
  }
}
