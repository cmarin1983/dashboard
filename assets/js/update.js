let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);

    let icons = document.getElementsByTagName("i");
    console.log(icons);

    let cards = document.getElementsByClassName("card");
    console.log(cards);

};

runScripts();

let modifyText = () => {
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero actual";

    let listOdH4 = document.getElementsByTagName("h4");
    let elementH4 = listOdH4[0]
    elementH4.innerHTML = "$301k";

}

modifyText();


let updateData = () => {

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
    },
    {
        title: 'Nuevos clientes',
        value: '4,215'
    },
    {
        title: 'Ventas',
        value: '$121,520'
    }];


    let [users, clients, sales] = data;


    let { title: title_users, value: value_users } = users;
    let { title: title_clients, value: value_clients } = clients;
    let { title: title_sales, value: value_sales } = sales;

    let message_user = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;

    let listOfElements = document.getElementsByClassName('text-end pt-1');


    let [, second, third, fourth] = listOfElements;


    second.innerHTML = message_user;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

}

updateData();


let updateIndicator = () => {
    let cambios = [
        {
            valor_previo: 250,
            valor_actual: 301,
            mensaje_tiempo: 'que la semana anrerior'
        },
        {
            valor_previo: 3510,
            valor_actual: 3200,
            mensaje_tiempo: 'que la semana anrerior'
        },
        {
            valor_previo: 3920,
            valor_actual: 4215,
            mensaje_tiempo: 'que ayer'
        },
        {
            valor_previo: 110200,
            valor_actual: 121520,
            mensaje_tiempo: 'que ayer'
        }
    ];

    let listOfElements = document.getElementsByClassName('card-footer p-3');
    let index = 0;
    for (let elemento of listOfElements) {


        let clase_cambio = 'text-danger';
        let porcentaje_de_cambio = Math.round((((cambios[index].valor_actual - cambios[index].valor_previo) * 100 / cambios[index].valor_previo) + Number.EPSILON) * 100) / 100;

        if (porcentaje_de_cambio > 0) {
            clase_cambio = 'text-success'
        };

        let mensaje = `<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentaje_de_cambio}%</span> ${cambios[index].mensaje_tiempo} </p>`

        elemento.innerHTML = mensaje;
        index += 1;

    };

}

updateIndicator();