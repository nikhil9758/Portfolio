import React from 'react';
import logo from './logo.svg';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomeLayout from './Pages/HomeLayout';
import Landing from './Pages/Landing';
import Blogs from './Pages/Blogs';
import { Blogloader } from './Pages/SingleBlog';
import SingleBlog from './Pages/SingleBlog';
import Quiz from './Pages/Quiz';
import TopicQuiz from './Pages/TopicQuiz';
function App() {
  const router= createBrowserRouter([
      {
        path: '/',
        element: <HomeLayout/>,
        children:[
          {
            index: true,
            element: <Landing/>
          },{
            path: '/blog',
            element:<Blogs/>,
          },{
            path: '/singleblog/:id',
            element:<SingleBlog/>,
            loader: Blogloader
          }
        ]
      },{
        path:'/quiz',
        element:<Quiz/>
      },{
        path: '/quiz/:id',
        element: <TopicQuiz/>
      }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
