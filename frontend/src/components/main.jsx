import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../config/routes';
import userStore from '../../stores/userStore';
import { observer } from 'mobx-react';

const Main = observer(()=>{
    return(
        <Routes>
            {userStore.isAuth ?
            authRoutes.map((el,i)=><Route path={el.path} Component={el.component} key={i} />):
            publicRoutes.map((el,i)=><Route path={el.path} Component={el.component} key={i} />)}
        </Routes>
    )
})

export default Main;