```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function User() {
  const location = useLocation();
  useEffect(() => {
    // Clean up effect to help ensure proper unmounting
    return () => {
      console.log('User component unmounting');
    };
  }, [location]);
  const { id } = useParams();
  return (
    <h1>User {id}</h1>
  );
}
```