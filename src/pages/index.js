import loadable from '@loadable/component'

const Jump1 = loadable(()=>import('./JumpLink1'))
const Jump2 = loadable(()=>import('./JumpLink2'))
const Jump3 = loadable(()=>import('./JumpLink3'))

 let routes = [
  {
    id: '01',
    path: '/',
    componentJump: Jump1,
    text: 'Link1'
  },
  {
    id: '02',
    path: '/link2',
    componentJump: Jump2,
    text: 'Link2'
  },
  {
    id: '03',
    path: '/link3',
    componentJump: Jump3,
    text: 'Link3'
  }
]
export default routes


