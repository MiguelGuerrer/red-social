/*objeto literal (index) con propiedades: (usarios,posteos y  comentarios)*/

const index = {

    usuarios: [
        {
            id: 1,
            usuario: 'mscott',
            email: 'michaelscott@gmail.com',
            contrasenia: 'scott1234',
            foto: '/public/images/scott.jpg',
            fecha: '1988-06-22',
            dni: '34683203',
        },
        {
            id: 2,
            usuario: 'cdiaz',
            email: 'catadiaz@gmail.com',
            contrasenia: 'diaz1234',
            foto: '/public/images/diaz.jpg',
            fecha: '1978-06-12',
            dni: '89753203',
        },
        {
            id: 3,
            usuario: 'mguerrero',
            email: 'gueerrerom@gmail.com',
            contrasenia: 'guerrerosss',
            foto: '/public/images/guerrero.jpg',
            fecha: '1999-06-13',
            dni: '44362014',
        },
        {
            id: 4,
            usuario: 'wos',
            email: 'wos@gmail.com',
            contrasenia: 'wos234',
            foto: '/public/images/wos.jpg',
            fecha: '2005-07-12',
            dni: '09873203',
        },
        {
            id: 5,
            usuario: 'dbenedetto',
            email: 'dariobenedetto@gmail.com',
            contrasenia: 'dario1234',
            foto: '/public/images/benedetto.jpg',
            fecha: '1972-09-02',
            dni: '78353203',
        },
    ],


    posteos: [
        {
            id: 1,
            id_usuario: 1,
            foto_perfil: '/images/perfilscott.jpg',
            usuario: 'Mscott',
            nombre_imagen: '/images/scott.jpg',
            texto_imagen: 'Michael',
            comentarios: [
                {
                    id_usuario: 2,
                    usuario: 'Cdiaz',
                    comentario: 'Me gusta tu foto'
                },
                {
                    id_usuario: 3,
                    usuario: 'Mguerrero',
                    comentario: 'Buena foto'
                },
            ]
        },
        {
            id: 2,
            id_usuario: 2,
            foto_perfil: '/images/diaz1.jpg',
            usuario: 'Cdiaz',
            nombre_imagen: '/images/cata-diaz.webp',
            texto_imagen: 'cata diaz',
            comentarios: [ {
                id_usuario: 1,
                usuario: 'Mscott',
                comentario: 'me gusta tu foto'
            },
            {
                id_usuario: 4,
                usuario: 'Wos',
                comentario: 'cuando nos vemos'
            },]
        },
        {
            id: 3,
            id_usuario: 3,
            foto_perfil: '/images/listorti100x100.jpg',
            usuario: 'Mguerrero',
            nombre_imagen: '/images/listorti.jpg',
            texto_imagen: 'guerrero',
            comentarios: [
                {
                    id_usuario: 5,
                    usuario: 'Dbenedetto',
                    comentario: 'Buena foto'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'Me gusta tu foto'
                },
            ]
        },
        {
            id: 4,
            id_usuario: 4,
            foto_perfil: '/images/wos100x100.jpg',
            usuario: 'Wos',
            nombre_imagen: '/images/wos.webp',
            texto_imagen: 'wos',
            comentarios: [
                {
                    id_usuario: 2,
                    usuario: 'Cdiaz',
                    comentario: 'Hola'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'Buena foto'
                },
            ]
        },
        {
            id: 5,
            id_usuario: 5,
            foto_perfil: '/images/Benedetto100x100.jpg',
            usuario: 'Dbenedetto',
            nombre_imagen: '/images/benedetto.webp',
            texto_imagen: 'benedetto',
            comentarios: [
                {
                    id_usuario: 3,
                    usuario: 'Mguerrero',
                    comentario: 'buena foto'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'hola'
                },
            ]
        },
        {
            id: 1,
            id_usuario: 1,
            foto_perfil: '/images/perfilscott.jpg',
            usuario: 'Mscott',
            nombre_imagen: '/images/scott.jpg',
            texto_imagen: 'Michael',
            comentarios: [
                {
                    id_usuario: 2,
                    usuario: 'Cdiaz',
                    comentario: 'Me gusta tu foto'
                },
                {
                    id_usuario: 3,
                    usuario: 'Mguerrero',
                    comentario: 'Buena foto'
                },
            ]
        },
        {
            id: 2,
            id_usuario: 2,
            foto_perfil: '/images/diaz1.jpg',
            usuario: 'Cdiaz',
            nombre_imagen: '/images/cata-diaz.webp',
            texto_imagen: 'cata diaz',
            comentarios: [ {
                id_usuario: 1,
                usuario: 'Mscott',
                comentario: 'me gusta tu foto'
            },
            {
                id_usuario: 4,
                usuario: 'Wos',
                comentario: 'cuando nos vemos'
            },]
        },
        {
            id: 3,
            id_usuario: 3,
            foto_perfil: '/images/listorti100x100.jpg',
            usuario: 'Mguerrero',
            nombre_imagen: '/images/listorti.jpg',
            texto_imagen: 'guerrero',
            comentarios: [
                {
                    id_usuario: 5,
                    usuario: 'Dbenedetto',
                    comentario: 'Buena foto'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'Me gusta tu foto'
                },
            ]
        },
        {
            id: 4,
            id_usuario: 4,
            foto_perfil: '/images/wos100x100.jpg',
            usuario: 'Wos',
            nombre_imagen: '/images/wos.webp',
            texto_imagen: 'wos',
            comentarios: [
                {
                    id_usuario: 2,
                    usuario: 'Cdiaz',
                    comentario: 'Hola'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'Buena foto'
                },
            ]
        },
        {
            id: 5,
            id_usuario: 5,
            foto_perfil: '/images/Benedetto100x100.jpg',
            usuario: 'Dbenedetto',
            nombre_imagen: '/images/benedetto.webp',
            texto_imagen: 'benedetto',
            comentarios: [
                {
                    id_usuario: 3,
                    usuario: 'Mguerrero',
                    comentario: 'buena foto'
                },
                {
                    id_usuario: 1,
                    usuario: 'Mscott',
                    comentario: 'hola'
                },
            ]
        },
    ],


    comentarios: [
        {
            id: 1,
            id_posteo: 1,
            id_usuario: 1,
            texto_comentario: 'Me gusta tu foto',
        },

        {
            id: 2,
            id_posteo: 2,
            id_usuario: 2,
            texto_comentario: 'hola',
        },

        {
            id: 3,
            id_posteo: 3,
            id_usuario: 3,
            texto_comentario: 'buena foto',
        },

        {
            id: 4,
            id_posteo: 4,
            id_usuario: 4,
            texto_comentario: 'cuando nos vemos',
        },
    ]
}

module.exports = index;