import { lazy, LazyExoticComponent } from 'react';
import LazyPage1 from '../Page/LazyPage1';
import LazyPage2 from '../Page/LazyPage2';
import LazyPage3 from '../Page/LazyPage3';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string
}


const lazy1 = lazy(() => import('../../lazyload/Page/LazyPage1'))
const lazy2 = lazy(() => import('../../lazyload/Page/LazyPage2'))
const lazy3 = lazy(() => import('../../lazyload/Page/LazyPage3'))


export const routes: Route[] = [
    {
        to:'/lazy1',
        path: 'lazy1',
        Component:LazyPage1,
        name:'Lazy Page1'
    },
    {
        to:'/lazy2',
        path: 'lazy2',
        Component:LazyPage2,
        name:'Lazy Page2'
    },
    {
        to:'/lazy3',
        path: 'lazy3',
        Component:LazyPage3,
        name:'Lazy Page3'
    }
]