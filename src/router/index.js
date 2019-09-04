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
                  // 当 /user/:id/profile 匹配成功，
                  // UserProfile 会被渲染在 User 的 <router-view> 中
                  path: 'list',
                  component: list
                },{
                    path:'my',
                    component:my
                }
              ]
        }
      
    ]
  })