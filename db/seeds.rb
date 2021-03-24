# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create(
    name: 'Eleven Madison Park',
    description: 'Quizás sea sólo una etiqueta (soñada por muchos chefs) pero el Eleven Madison Park'\
        ' es actualmente el número uno de los número uno, el mejor restaurante del mundo. Abierto en'\
        ' 1998 en un edificio art decó emulando una brasserie francesa con precios más que asequibles,'\
        ' poco a poco fue transformándose hasta convertirse en un lugar exclusivo de la alta cocina. '\
        'La “culpa” hay que atribuirsela al suizo Daniel Humm, un cocinero perfeccionista en extremo y'\
        ' que constantemente cambia los platos del Eleven Madison Park, que actualmente cuenta con tres Estrellas Michelín.',
    direction: 'New York, Estados Unidos',
    image: '/restaurants/eleven.jpg',
)

Restaurant.create(
    name: 'Osteria Francescana',
    direction: 'Módena, Italia',
    description: 'En este restaurante italiano tienen muy claro que "cocinar no es matemático, es emocional".'\
        ' El chef Massimo Bottura lidera un proyecto para el que asegura inspirarse en el “arte, la música, la'\
        ' comida lenta y los coches veloces”. Lo hace desde pequeño desde que su abuela Ancella le enseñase los'\
        ' secretos de la cocina italiana. Esa tradición ha sido reinventada permitiéndole llegar a lo más alto de'\
        ' la gastronomía mundial (en 2016 fue elegido como el mejor restaurante del mundo).',
    image: '/restaurants/osteria.jpeg',
)

Restaurant.create(
    name: 'El Celler de Can Roca',
    direction: 'Girona, España',
    description: 'Los tres hermanos Roca (Joan, Josep y Jordi) se iniciaron en la cocina en el Can Roca, el'\
        ' restaurante de sus padres. Este año su local cumple 30 años y puede celebrarlo con sus tres Estrellas'\
        ' Michelin y sus dos títulos de mejor restaurante del mundo en 2015 y 2013. El Celler de Can Roca es '\
        'sinónimo de vanguardia, innovación, imaginación y perfección. Cigala con artemisa, aceite de vainilla'\
        ' y mantequilla tostada; sepia con lías de sake y salsa de arroz negro; oca a lo royal o contessa de'\
        ' espárragos blancos y trufa son algunas de sus propuestas.',
    image: '/restaurants/celler.jpg',
)

Restaurant.create(
    name: 'Mirazur',
    direction: 'Menton, Francia',
    description: 'Emplazado en un lugar único, en Menton, en la frontera entre Italia y Francia. Resguardado por '\
        'las montañas y, al mismo tiempo, con vistas al Mediterráneo. El restaurante se ubica en un edificio de los'\
        ' años 30 construido en tres niveles en el que se incluye un jardín en el que las hierbas aromáticas y los '\
        'cítricos son los protagonistas. Al frente del Mirazur está Mauro Colagreco, un argentino de origen italiano '\
        'inventor de recetas en las que juega con “las texturas, el contraste de sabores y las asociaciones audaces”. '\
        'Para ello utiliza los productos de su propio huerto y jardín acompañados de ingredientes de productores locales'\
        ' como el azafrán de Sospel, verduras del mercado de Ventimiglia, aceite de oliva y limones de Menton o gambas'\
        ' de San Remo. Los menús del Mirazur oscilan entre los 110 y los 210 euros (los vinos que los acompañan entre 60 y 90 euros).',
    image: '/restaurants/mirazur.jpg',
)

Restaurant.create(
    name: 'Central',
    direction: 'Lima, Perú',
    description: '“En Central se celebra la biodiversidad de Perú”. Con estas palabras se presenta este restaurante comandado '\
        'por Virgilio Martínez, un joven cocinero con una propuesta que combina diferentes platos peruanos. Para ello se inspira'\
        ' en los pueblos de los Andes de la época prehispánica: a través del control vertical de pisos ecológicos. Esta forma'\
        ' alternativa de entender la geografía de forma vertical (y no en el plano horizontal habitual) se traduce en una cocina'\
        ' variada con productos que van desde la costa del Pacífico hasta el Amazonas. El equipo de Central está en constante viaje'\
        ' por su país en busca de nuevos platos, ingredientes e historias. A esto hay que sumarle que embotellan su propia agua a la'\
        ' que someten a un proceso de ozonificación y purificación con ósmosis inversa y que cuentan con una huerta en el restaurante.'\
        ' Dispone de cuatro menús degustación, que van desde los 481 a los 510 soles peruanos (entre 125 y 132 euros).',
    image: '/restaurants/central.jpg',
)