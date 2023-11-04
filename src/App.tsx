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
import QuizLayout from './Pages/QuizLayout';
import { Provider } from 'react-redux';
import store from './store';
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
        element:<QuizLayout/>,
        children:[{
          index:true,
          element:<Quiz/>,
        },{
          path:':id/:quizaction',
          element:<TopicQuiz/>
        }
      ]
      }
  ])
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
