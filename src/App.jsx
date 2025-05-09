import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Login from './component/Login';
import NoMatch from './component/NoMatch';
import PostCreate from './component/PostCreate';
import PostDetail from './component/PostDetail';
import PostList from './component/PostList';
import Posts from './component/Posts';
import ProtectedRoute from './component/ProtectedRoute';
import Stats from './component/Stats';

function App() {
  
  const [username, setUsername] = useState(null)

  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}> Home </Link>
        <Link to="/posts" style={{ padding: 5 }}> Posts </Link>
        <Link to="/about" style={{ padding: 5 }}> About </Link>
        {!username && <Link to={"/login"} style={{ padding: 5 }}>Login</Link>}
        {username && <Link to="/posts/stats" style={{ padding: 5 }}> Stats posts </Link>}
        {username && <Link to="/posts/create" style={{ padding: 5 }}> Create post </Link>}
        {username && <span style={{ padding: 5 , cursor:"pointer"}} onClick={() => {
          setUsername(null)
        }}>Logout</span>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login setUsername={setUsername} />}/>
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
          <Route path=':slug' element={<PostDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        {/**define all route need protect */}
        <Route element={<ProtectedRoute isAuthenticated={username}/>}>
          <Route path='/posts/stats' element={<Stats />}></Route>
          <Route path='/posts/create' element={<PostCreate/>} />
        </Route>
      </Routes>


    </Router>
  )
}

export default App
