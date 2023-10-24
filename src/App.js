import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div></div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
