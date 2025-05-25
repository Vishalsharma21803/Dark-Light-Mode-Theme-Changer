# Dark-Light Mode Theme Switcher

A stylish and modern dark-light mode toggle button for your website, built with HTML, CSS, and JavaScript.

## Features

- **Smooth Gradient Backgrounds:** Beautiful gradients for both dark and light modes.
- **Animated Button:** The mode changer button features a ripple effect and smooth transitions.
- **Easy Integration:** Just add the CSS, JavaScript, and a button with `id="mode"` to your project.
- **Responsive & Accessible:** Button is large, easy to click, and visually appealing on all devices.

## How It Works

- The button toggles the `dark-mode` and `light-mode` classes on the `<body>`.
- CSS applies different backgrounds and text colors for each mode.
- The button itself is styled with gradients, rounded corners, and interactive effects.

## Usage

1. **Include the CSS**  
   Add the styles from `style.css` to your project.

2. **Add the HTML Button**  
   ```html
   <button id="mode">Switch Mode</button>
   ```

3. **Include the JavaScript**  
   Make sure your JavaScript toggles the classes on the `<body>`:
   ```javascript
   const btn = document.querySelector("#mode");
   const body = document.body;
   btn.addEventListener("click", () => {
       if (body.classList.contains("dark-mode")) {
           body.classList.remove("dark-mode");
           body.classList.add("light-mode");
           btn.innerHTML = "Dark Mode";
       } else {
           body.classList.remove("light-mode");
           body.classList.add("dark-mode");
           btn.innerHTML = "Light Mode";
       }
   });
   ```

4. **Enjoy!**  
   Click the button to toggle between dark and light themes.

## Customization

- Change the gradient colors in `.dark-mode`, `.light-mode`, and `#mode` for your own style.
- Adjust button size, font, or effects as you like.

## Example

![image](https://github.com/user-attachments/assets/b9dfefed-113d-4e05-96ff-f60dedcb5f4d)
![image](https://github.com/user-attachments/assets/aa8147de-37c9-4427-b827-138b86275b4d)

 <!-- Add a screenshot if you have one -->

---

**Make your website modern and user-friendly with a beautiful theme switcher!**
