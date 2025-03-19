SBA 316

REQUIREMENTS: 

⚫️ Cache at least one element using selectElementById.
- most notably used at the beginning of the JS file, caching some core HTML elements such as the form, the list container, add/ delete button

⚫️ Cache at least one element using querySelector or querySelectorAll.
- used for the "plusBtn" to add a task to the ul

⚫️ Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
- in the deleteTask function, it removes the task from the parentNode(unordered list)
  
⚫️ Iterate over a collection of elements to accomplish some task.
- for loops used in loadTasks(), updateTaskStatus(), and deleteTask().

⚫️ Create at least one element using createElement.
- used for the doc frag

⚫️ Use appendChild and/or prepend to add new elements to the DOM.
- used in conjuction with the fragment for the unordered list

⚫️ Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
✅

⚫️ Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
- added li to the ul which in turn also added buttons, one of which as change the class and appear

⚫️ Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
- clicking a li as isFinished or not changes the class 

⚫️ Modify at least one attribute of an element in response to user interaction.
- the src attribute gets modoifed when clicking a task to show off either an empty circle or a check mark

⚫️ Register at least two different event listeners and create the associated event handler functions.
1. the document itself had an eventlistener on DOMContentLoaded, clearing the ul and reloading the local storage into a variable to be used, otherwise it was buggy
2. the li itself has an eventlistener to change the class and appearance of img

⚫️ Use at least two Browser Object Model (BOM) properties or methods.
1. alerts
2. localstorage

⚫️ Include at least one form and/or input with HTML attribute validation.
✅

⚫️ Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
- the add task function checks for validations with character length and checks for duplicate tasks
  
⚫️ Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
- i don't think i missed anything? I had a problem with loading the DOM content a while ago, saving tasks in the local memory, etc, but I fixed everything

⚫️ Commit frequently to the git repository.
- could've been better, but was really focused on the job and hitting the requirments.
  
⚫️ Include a README file that contains a description of your application.
✅

⚫️ Level of effort displayed in creativity, presentation, and user experience.
- it could look prettier, but I did make the code look pretty? 🤓 I'll add more if i can find time before time ends.
  
