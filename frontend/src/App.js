import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Components
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Container from "./components/layout/Container"
import Message from './components/layout/Message'
import Profile from './components/pages/User/Profile'

//Contexts
import { UserProvider } from './context/UserContext'

//Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
import MyPets from './components/pages/Pet/MyPets'
import AddPet from './components/pages/Pet/AddPet'
import EditPet from './components/pages/Pet/EditPet'



function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar/>
        <Message/>
        <Container>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/user/profile' element={<Profile/>} />
            <Route path='/pet/mypets' element={<MyPets/> } />
            <Route path='/pet/add' element={<AddPet/> } />
            <Route path='/pet/edit/:id' element={ <EditPet/> } />
            <Route path='/' element={<Home/>} />
          </Routes>
        </Container>
        <Footer/>
      </UserProvider>
    </Router> 
  );
}

export default App;
