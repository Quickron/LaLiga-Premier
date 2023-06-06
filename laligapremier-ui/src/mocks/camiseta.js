const obtenerCamisetasNovedades = require('@/mocks/camisetas.json');

const obtenerCamisetas = require('@/mocks/camisetas.json');

const obtenerCamistaPorId = (id) => ({
    camiseta: {
        id: id,
        imagenes: [
            "https://cf.ijersey.ru/upload/ttmall/img/20220607/2ffdd3ce731d5204b01e9a4dd76262e1.png",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.camisetasequipos.com%2Fimages%2FLa%2520Liga%2FBarcelona%2FCamiseta_Barcelona_Jugador_Gavi_Primera_22-23.jpg&f=1&nofb=1&ipt=c9b2f1336044d3bbeee015e3862cc41ba293779a248d434213426042cd57735f&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.camisetasclub-es.com%2Fimages%2FLa%2520Liga%2FBarcelona%2FCamiseta_Primera_Barcelona_Jugador_Gavi_22-23.jpg&f=1&nofb=1&ipt=03df58f985c19993bfd3a146b8cc58aaea9baa728b2bad831e35c937c56f2d57&ipo=images" 
        ],
        nombre: "FC Barcelona 2023",
        descripcion: "Polera del FC Barcelona año 2023 perteneciente al jugador Gavi",
        precio: 50000,
        tipo: "Club",
        equipo: "FC Barcelona",
        liga: "LaLiga",
        temporada: "2022-2023",
        marca: "Nike",
        dorsal: 30,
        jugador: "Gavi",
        talla: "L",
        publico: "Hombre",
        stock: 5,
        token: "gavi_barcelona",
    },
});

export { obtenerCamisetasNovedades , obtenerCamisetas, obtenerCamistaPorId };