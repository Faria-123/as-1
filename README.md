### Project Name:Dev Stack
### Description:
Dev Stack is an interactive technology-stack explorer that helps developers discover, compare, and organize technologies for their projects. Users can browse technologies by category, view details such as ratings and difficulty, and build their own personalized development stack.
### Technologies Used:
1. React
2. TypeScript
3. Tailwind CSS
4. DaisyUI
5. React Toastify
6. Lucide
7. Vite
### Features:
1. Explore Technologies => Browse frontend, backend, database, language, styling, DevOps, and tools categories.
2. Build My Stack => Add technologies to a personal stack and remove them whenever needed.
3. Technology Details => View each technology's description, category, rating, difficulty level, and badge.

### answer the questions:
1.JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.we use this because it makes React UI code easier to read and write. It also allows us to combine JavaScript logic with UI elements.
2.Props means where data passed from parents to child and on the other hand State manage data inside a component.Props can be read only and State can be changed.Props can be controlled by parent and state can be controlled by the component.props used to communicate between components and state used to manage changing data.
3.useState() is a react hook ,we used it to create and manage state and also lifting up state inside functional component.
example: const [arr,setarr]=useState([]);
const new=[...arr,1,2,3];
setarr(new);
in here hook rerender the components and update the ui.
4.useEffect is used to perform side effects in a react component.example of side effects are Fetching API,Calling an API,Setting timers.
5.map need a unique key props cause react can understand which item is added ,removed,changed or is to be reused.
6.Conditional rendering means displaying different UI depending on a condition.
for example:
isLoggedIn && <button>Logout</button>
it means isLoggedIn is true then button will be Logout.
7.We use Props to send data from Parent to Child.React doesn't send data from child to parent it is uni-directional not bi-directional. 