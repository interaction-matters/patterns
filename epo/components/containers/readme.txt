The ‘containers’ folder houses all of the container components, that is to say components which are responsible for data fetching. Each of these has a corresponding ‘dumb’ component which handles display, so as to separate fetching data and displaying data. In MVC, this would be a ‘Controller’.

An example: 

MenuList.jsx => ‘dumb’ component, takes props
MenuListContainer.jsx => ‘smart’ component, takes state from data

This folder could just as reasonably be named ‘controllers’, and components named as MenuListController.jsx etc.

More reading:

https://medium.com/@learnreact/container-components-c0e67432e005
https://preact.gitbooks.io/react-book/content/jsx/smart.html