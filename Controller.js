const express=require('express');
const bodyParser=require('body-parser');
const mercadopago=require('mercadopago');
const cors=require('cors');
const config=require('./config')

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());
mercadopago.configure({access_token: config.token});

app.post('/', (req, res) => {
   
   let preference = {
        items: [{
        title: 'Blue shirt',
        quantity: 10,
        currency_id: 'BRL',
        unit_price: 10
        }], 
        payer: {
        email: "demo@mail.com"
        },
        payment_method: {
            instalmlments: 3
        }
    };


    mercadopago.preferences.create(preference).then(function (data) {
        res.send(JSON.stringify(data.response.sandbox_init_point));
    }).catch(function (error) {
        console.log(erro);
    });

});
let port=process.env.PORT || 3000;
app.listen(port,(req, res)=>{
    console.log('Servidor Rodando');
});