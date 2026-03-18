# Reflection - TikTok Clone Project

## What I Learned

### Part 1 - Getting Started
Working on the initial setup of the Next.js project taught me how to properly
configure a modern React application. I learned about the App Router in Next.js
and how it differs from the older Pages Router. Setting up the project structure
with organized folders for components, layouts, and pages helped me understand
the importance of code organization in large projects.

I also learned how Tailwind CSS works as a utility-first framework, which was
different from writing traditional CSS. Instead of creating custom class names,
I could apply styles directly in the JSX using predefined utility classes.


### Part 2 - Web Layout and Main Interface
Building the TikTok-like interface was challenging but rewarding. I learned:

- **Component-based architecture**: Breaking the UI into reusable components
  like VideoCard and VideoFeed made the code more maintainable and organized.

- **React Icons**: Integrating third-party icon libraries into React projects
  and how to import only the icons I needed.

- **Fixed sidebar layout**: Using CSS flexbox with fixed positioning to create
  a sidebar that stays in place while content scrolls.

- **State management**: Using React's useState hook to manage the liked state
  of video cards without needing an external state management library.

- **Props**: Passing data between parent and child components using props,
  for example passing post data from VideoFeed to VideoCard.

### Output
![alt text](<Screenshot 2026-03-16 at 7.00.28 PM.png>)

### Part 3 - Login and Registration Forms
This part was the most educational as I learned about form handling in React:

- **React Hook Form**: I learned how this library reduces the amount of code
  needed for form handling and validation compared to managing form state
  manually with useState.

- **Form Validation**: Implementing different validation rules like required
  fields, email pattern matching using regex, minimum length requirements,
  and custom validation functions for password confirmation.

- **Loading States**: Using loading states to improve user experience by
  disabling the submit button and showing feedback while a request is
  being processed.

- **Error Handling**: Displaying validation error messages below each input
  field to guide users in filling out forms correctly.

### Output
![alt text](<Screenshot 2026-03-16 at 7.12.42 PM.png>)

![alt text](<Screenshot 2026-03-16 at 7.12.47 PM.png>)

![alt text](<Screenshot 2026-03-16 at 7.12.50 PM.png>)

## Challenges I Faced

1. **Tailwind CSS Classes**: At first I found it difficult to remember all
   the Tailwind utility classes and had to refer to the documentation
   frequently. Over time I became more comfortable with the naming conventions.

2. **Next.js App Router**: Understanding the difference between server
   components and client components and when to use the 'use client'
   directive was confusing at first.

3. **Fixed Layout with Sidebar**: Getting the sidebar to stay fixed while
   the main content scrolled required careful use of CSS positioning and
   understanding of how flexbox works.

4. **Form Validation with Regex**: Writing and understanding regular
   expressions for email and password validation was challenging. I had
   to research and test different patterns to get them working correctly.

5. **Git and GitHub Setup**: Setting up the remote repository and resolving
   git configuration issues took some time but helped me understand version
   control better.

## What I Would Do Differently

1. Plan the component structure before starting to code to avoid refactoring.
2. Use CSS variables for consistent theming across components.
3. Add more comments in the code for better readability.
4. Implement proper TypeScript types for better code quality.
5. Add unit tests for components from the beginning.

## Conclusion

This practical helped me understand how modern web applications are built
using React and Next.js. Building a TikTok clone gave me hands-on experience
with real-world UI patterns and taught me how to break down complex interfaces
into manageable components. The form validation section was particularly
useful as forms are a fundamental part of almost every web application.