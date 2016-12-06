import route from 'riot-route'

const riot = require('riot')
const renderHere = document.querySelector('#inicio')


route('/', () => {
  System.import('../pages/inicio').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<inicio-page></inicio-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/servicios', () => {
  System.import('../pages/servicios').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<servicios-page></servicios-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/home', () => {
  System.import('../pages/home').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<home-page></home-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})


//
// route.base('#!')
route.start(true)
