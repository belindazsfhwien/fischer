// Page (DOM) has finished loading:
$(function () {

  /* 1. API-KEY: START ----------------------------------------
  - Purpose: Send the API key to authenticate with the Server
      - Remark: Do not touch this
  ------------------------------------------------------------- */

  // 1.1. Send the API key with every jQuery AJAX-call:
  $.ajaxSetup({
    'headers': {
      'X-Auth-Token': 'a534e63a0d68ad8ec00d'
    }
  });

  /* API-KEY: END --------------------------------------------- */


  /* 2. FETCH POSTS: START ------------------------------------
      - Purpose: Fetch and display all posts from the server
      - Remark: You have to complete this part on your own
  - Task: Chapter 3.3.1 - Task #3
  ------------------------------------------------------------- */

  // 2.1. Must-have: Fetch the data from the server:
  $.getJSON('https://nafra.at/adad_st2021/posts/', function (data) {

    // 2.2. Must-have: Display the data:
    // ... Iterate over the "data" object (using a loop - try the forEach) and return the posts back to the page
    // ... You have to complete this part on your own
    // This returns all posts as an object within the console - replace it with the logic to display the data (nicely) on the page

    data.forEach(function (posts) {
      // posts['user'] //username
      // posts['file'] //file
      // posts['description'] //file
      // posts['timestamp'] //timestamp
      // posts['id'] // id
      var imageAlle = document.createElement('img');
      imageAlle.src = posts['file']
      imageAlle.setAttribute("class", "belindas-first-post-image")

      var usernameText = document.createTextNode(posts['user']);
      var username = document.createElement('p');
      username.appendChild(usernameText)
      username.setAttribute("class", "belindas-first-post-username")

      var timestampText = document.createTextNode(posts['timestamp']);
      var timestamp = document.createElement('p');
      timestamp.appendChild(timestampText)
      timestamp.setAttribute("class", "belindas-first-post-timestamp")

      var descriptionText = document.createTextNode(posts['description']);
      var description = document.createElement('p');
      description.appendChild(descriptionText)
      description.setAttribute("class", "belindas-first-post-description")

      var postDiv = document.createElement("div");
      postDiv.setAttribute("class", "belindas-first-post")
      postDiv.appendChild(imageAlle);
      postDiv.appendChild(username);
      postDiv.appendChild(description);
      postDiv.appendChild(timestamp);

      document.querySelector('.post').appendChild(postDiv);
    });

    // 3.3. Nice-to-have: Display the returned data in a different format
    // ... See chapter 3.3.2 - Task #2
    // ... You have to complete this part on your own (optional)
  });

  /* FETCH POSTS: END ----------------------------------------- */


  /* 3. LIKE POSTS: START ------------------------------------
      - Purpose: Like a post
      - Remark: You have to complete this part on your own
  - Task: Chapter 3.3.1 - Task #4
  ------------------------------------------------------------ */

  // 3.1. Must-have: Like button was pressed:
  // ... Execute the "like a post" functionality whenever a "like"-button is pressed
  // ... You have to complete this part on your own

  // 3.2. Must-have: Increase the "like"-counter on the server:
  var postID = 10; // You need to replace the postID with the ID of the post on which the button was pressed
  $.get('https://nafra.at/adad_st2021/posts/' + postID, function (data) {

    // 3.3. Must-have: Update the template with the new like count:
    // ... Adapt the value of the counter next to your button with the result that is stored in data
    // ... You have to complete this part on your own
    console.log('3.3.: ' + data); // This returns the message from the server - replace it with the logic to show the inceased like count
  });

  /* LIKE POSTS: END ----------------------------------------- */


  /* 4. CREATE POSTS: START ------------------------------------
      - Purpose: Create a post
      - Remark: You have to complete this part on your own
  - Task: Chapter 3.3.1 - Task #5
  -------------------------------------------------------------- */

  // 4.1. Must-have: The create form was submitted:
  // ... Execute the "create a post" logic (below) whenever the "create"-form was submitted
  // ... You have to complete this part on your own

  // 4.2. Nice-to-have: Shrink the image dimensions and compress the file before you send it
  // ... See chapter 3.3.2 - Task #3
  // ... You have to complete this part on your own (optional)

  // 4.3. Must-have: Post the data from your formular to the server:
  var formData = new FormData($('#idoftheform')[0]); // Change the #idoftheform to the id of your form; The serialize() command takes all values from inputs of a form and attaches it to the variable
  $.ajax({
    type: 'POST', url: 'https://nafra.at/adad_st2021/posts/', data: formData, processData: false, contentType: false, success: function (data) {

      // 4.4. Must-have: Update the template with the new post:
      // ... You have created a post, now display it on the webpage
      // ... You have to complete this part on your own
      console.log('4.4.: ' + data); // This returns the message from the server - replace it with the logic to show the freshly created post
    }
  });

  /* CREATE POSTS: END ----------------------------------------- */


  /* 5. CREATE COMMENTS: START ------------------------------------
      - Purpose: Comment a post
      - Remark: This is optional but you have to complete this part on your own
  - Task: Chapter 3.3.2 - Task #1
  ----------------------------------------------------------------- */

  // Nice-to-have: ...
  // ... You have to complete this part on your own (optional)

  /* CREATE COMMENTS: END ----------------------------------------- */


  /* 6. YOUR OWN IDEAS: START ------------------------------------
      - Purpose: Your own purpose
      - Remark: This is optional but you have to complete this part on your own
  - Task: Chapter 3.3.2 - Task #4
  ---------------------------------------------------------------- */

  // Nice-to-have: ...
  // ... You have to complete this part on your own (optional)

  /* YOUR OWN IDEAS: END ----------------------------------------- */

});