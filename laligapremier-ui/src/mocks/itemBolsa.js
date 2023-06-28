const obtenerItemsBolsaPorUsuario = (usuarioId) => ({
  itemsBolsa: [
    {
      usuario: usuarioId,
      camisetaId: "2",
      camisetaBolsa: {
        imagenes: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcf.projerseyshop.cc%2Fupload%2Fttmall%2Fimg%2F20220615%2Faf5c3905b5428b2dd9cdb5eeb1a44485.png&f=1&nofb=1&ipt=b2ff6b1e1fbd8f62c5d0a0538126ad4a964043bb04d70384b2c2e8ad23d74b56&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.merchandisingplaza.es%2F470239%2F2%2FCamisetas-2022-23-Real-Madrid-Camiseta-2022-23-Real-Madrid-Home---Vinicius-Junior-l.jpg&f=1&nofb=1&ipt=997b32a6694b1c545637c5af3c43ab54db14a239be147822ef0bd1632acabf8c&ipo=images",
          ],
        tipo: "Club",
        equipo: "Real Madrid",
        liga: "LaLiga",
        dorsal: 20,
        jugador: "Vinicious Jr",
        temporada: "2022-2023",
        marca: "Adidas",
        nombre: "Real Madrid 2023 Vinicious",
        descripcion: "Polera del Real Madrid año 2023 perteneciente al jugador Vinicious Jr.",
        precio: 50000,
        itemsCamiseta: 
          {
            publico: "Hombre",
            talla: "L",
            stock: 6,
            cantidad: 3,
          },
      },
    },
    {
        usuario: usuarioId,
        camisetaId: "3",
        camisetaBolsa: {
          imagenes: [
            "https://cf.ijersey.ru/upload/ttmall/img/20220607/2ffdd3ce731d5204b01e9a4dd76262e1.png",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.camisetasequipos.com%2Fimages%2FLa%2520Liga%2FBarcelona%2FCamiseta_Barcelona_Jugador_Gavi_Primera_22-23.jpg&f=1&nofb=1&ipt=c9b2f1336044d3bbeee015e3862cc41ba293779a248d434213426042cd57735f&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.camisetasclub-es.com%2Fimages%2FLa%2520Liga%2FBarcelona%2FCamiseta_Primera_Barcelona_Jugador_Gavi_22-23.jpg&f=1&nofb=1&ipt=03df58f985c19993bfd3a146b8cc58aaea9baa728b2bad831e35c937c56f2d57&ipo=images" 
            ],
          tipo: "Club",
          equipo: "FC Barcelona",
          liga: "LaLiga",
          dorsal: 30,
          jugador: "Gavi",
          temporada: "2022-2023",
          marca: "Adidas",
          nombre: "FC Barcelona 2023 Gavi",
          descripcion: "Polera del FC Barcelona año 2023 perteneciente al jugador Gavi.",
          precio: 50000,
          itemsCamiseta: 
            {
              publico: "Hombre",
              talla: "M",
              stock: 10,
              cantidad: 1,
            },
        },
      },
  ],
});
export { obtenerItemsBolsaPorUsuario };
