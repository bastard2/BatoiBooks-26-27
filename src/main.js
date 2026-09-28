import './style.css'
import logoBatoi from './assets/logoBatoi.png'


document.querySelector('#app').innerHTML = `
<image src = ${logoBatoi}></image>
<h1> Batoi </h1>
`

setupCounter(document.querySelector('#counter'))
