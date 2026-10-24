# Portfolio

My personal portfolio website. A static single-page site with a working contact form.



## Tech stack

- HTML5
- CSS3 (custom styles embedded in `index.html`)
- Vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com) via CDN
- [Font Awesome 6](https://fontawesome.com) via CDN
- [EmailJS](https://www.emailjs.com) Browser SDK v4 for the contact form
- [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Getting started

There is no build step and nothing to install.

```bash
git clone https://github.com/amina-s232/portfolio.git
cd portfolio
```

Open `index.html` in a browser, or use the VS Code
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
extension and click "Go Live" for auto-reload while editing.

## Contact form setup

The form sends email through EmailJS. To use your own account:

1. Create an account at emailjs.com, then add an email service and a template.
2. Open `script.js` and replace the public key, service ID and template ID with yours.

The EmailJS public key is designed to be visible in client-side code. Restrict it to
your domain in the EmailJS dashboard so others can't use your quota.

## Project structure

```
index.html   Page structure and custom CSS
script.js    Interactivity and contact form logic
```

## Contact

- LinkedIn: [amina-shameer32](https://www.linkedin.com/in/amina-shameer32)
- GitHub: [amina-s232](https://github.com/amina-s232)
