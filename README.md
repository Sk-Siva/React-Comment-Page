# **React Comments Page**

## **About**
The Comments Web App allows users to add, like, and delete comments dynamically. The application maintains a list of comments and updates the UI based on user interactions.

## **Features**

### **Initial State**
- The list of comments starts with zero comments.
- Input fields for name and comment are initially empty.

### **Adding a Comment**
- When non-empty values are entered in the input fields and the "Add Comment" button is clicked:
  - A new comment is added to the list.
  - The total number of comments is incremented by one.
  - The input fields are cleared.

### **Liking a Comment**
- When the "Like" button is clicked:
  - If the comment is not liked, the button changes to the "Liked" image.
  - If the comment is already liked, it changes back to the "Like" image.

### **Deleting a Comment**
- When the "Delete" button is clicked:
  - The comment is removed from the list.
  - The total number of comments is decremented by one.

## **Tools Used**
- React.js
- CSS for styling
- Local state management using React hooks
