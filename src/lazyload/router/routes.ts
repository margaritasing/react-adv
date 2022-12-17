import { lazy, LazyExoticComponent } from 'react';
type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path:string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string
}


const lazy1 = lazy(() => import(/* webpackChunkName:"LazyPage1"*/'../../lazyload/Page/LazyPage1'))
const lazy2 = lazy(() => import(/* webpackChunkName:"LazyPage2"*/'../../lazyload/Page/LazyPage2'))
const lazy3 = lazy(() => import(/* webpackChunkName:"LazyPage3"*/'../../lazyload/Page/LazyPage3'))


export const routes: Route[] = [
    {
        to:'/lazy1',
        path: 'lazy1',
        Component:lazy1,
        name:'Lazy Page1'
    },
    {
        to:'/lazy2',
        path: 'lazy2',
        Component:lazy2,
        name:'Lazy Page2'
    },
    {
        to:'/lazy3',
        path: 'lazy3',
        Component:lazy3,
        name:'Lazy Page3'
    }
]