console.log('Vue OK', Vue);

/* 
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = Vue.createApp({
    data(){
        return {
            message: 'Hello Vue!!',
            image: 'https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg'
        }
    }
});

app.mount('#root');