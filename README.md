# Namaste-React 🚀
Learning React


# Parcel
- Dev Build
- Local Server
- HMR --> Hot Module Replacement
- File Watching Algorithm --> That will help us to automatic render updated components
- Faster build --> Bcz of Caching
- Image Optimisation
- Minification of file
- Bundling of files
- Compress files
- Consistent hashing
- Code Spliting
- Differential bundling
- Diagonstic
- Error Handling
- HTTPS


# Babel
Babel is converted jsx code into HTML element.
JSX --> Babel transiled i to --> React.createElement --> React element [object] --> render (HTML element) 

# Props
Props is a short form of property and we will pass them in component
They are just normal arguments to a function
It binds all the arguments into an object and passed it to component

# config driven UI
Our website is driven by data. For exmaple if we need to show restaurants, offer on UI based on city then we need to render data based on user configurations.
All the UI driven by config (data)

# key
We need key to identify every component render on UI at same leve so that react will know which element changes and which component need to update on UI otherwise it will load all components at same level. If you are rendering any component using loops, map then add unique key for component.

React itself says that please don't use index as key. It is a bad practice