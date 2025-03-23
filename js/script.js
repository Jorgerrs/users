const listausuarios = document.getElementById('listaUsuarios');

async function obtenerYProcesarDatos() {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        const datos = await response.json();

        cargarpantalla(datos);

    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }

};

function cargarpantalla(datos) {
    const arrayUsuarios = datos.map(function (datos) {
        return {
            nombre: datos.name,
            edad: getRandomArbitrary(15, 50),
            telefono: datos.phone,
            email: datos.email,
            img: './assets/img/' + datos.id + '.jpeg',
            username: datos.username,
            compañia: datos.company.name,
            direccion: datos.address.street + ', ' + datos.address.suite + ', ' + datos.address.city,
        };
    });

    arrayUsuarios.forEach(usuario => {


        const liContenedor = document.createElement('li');
        listausuarios.appendChild(liContenedor);

        const divContenedor = document.createElement('div');
        divContenedor.className = 'Usuario';

        const divContenedorInfo = document.createElement('div');
        divContenedorInfo.className = 'ComnpañiaInfo';

        const imgContenedor = document.createElement('img');
        const pContenedor = document.createElement('p');
        const pCompañia = document.createElement('p');

        liContenedor.appendChild(divContenedor);
        liContenedor.appendChild(divContenedorInfo);

        divContenedor.appendChild(pContenedor);
        divContenedor.appendChild(imgContenedor);

        divContenedorInfo.appendChild(pCompañia);

        imgContenedor.src = usuario.img;
        pContenedor.innerText = "Nombre: " + usuario.nombre     + "\n" + 
                                "Edad: " + usuario.edad         + "\n" +
                                "Username: " + usuario.username + "\n" +
                                "Teléfono: " + usuario.telefono + "\n" +
                                "Email: " + usuario.email;
                                pCompañia.innerHTML ="Compañia: " + usuario.compañia + "\n" +
                                 "Dirección: " + usuario.direccion;
    });

}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

obtenerYProcesarDatos();