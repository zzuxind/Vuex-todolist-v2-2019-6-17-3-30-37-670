import list from '../components/list'
import Main from '../components/Main'
import home from '../components/Home'
import my from '../components/My'
export default ({
    routes: [
        
        {
            path: '/',
            name: 'main',
            component: Main
          },
          {
            path:'/home/:name',
            name:'home',
            component:home,
            props:true,
            children: [
                {
                  path: 'list',
                  component: list
                },{
                    path:'my/:name',
                    component:my,
                    props:true
                }
              ]
        }
      
    ]
  })