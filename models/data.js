const news = [
  {
    id: 27,
    name: "Novedades 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "./img/news/news1.jpg",
    category: "news",
    colors: "",
    price: "",
  },
  {
    id: 28,
    name: "Novedades 2",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    image: "./img/news/news2.jpg",
    category: "news",
    colors: "",
    price: "",
  },
  {
    id: 29,
    name: "Novedades 3",
    description:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    image: "./img/news/news3.jpg",
    category: "news",
    colors: "",
    price: "",
  },
];
const proms = [
  {
    id: 30,
    name: "Promoción A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "./img/proms/proms1.jpg",
    category: "proms",
    colors: "",
    price: "",
  },
  {
    id: 31,
    name: "Promoción B",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    image: "./img/proms/proms2.jpg",
    category: "proms",
    colors: "",
    price: "",
  },
  {
    id: 32,
    name: "Promoción C",
    description:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    image: "./img/proms/proms3.jpg",
    category: "proms",
    colors: "",
    price: "",
  },
];
const burgers = [
  {
    id: 1,
    name: "MONKEY BURGER",
    description:
      "La Monkey Burger es una explosión de sabor que difícilmente puedas olvidar. La armamos con un increíble pan de papa horneado en el día y un medallón de carne angus y bondiola de 200gr. No puede faltar el cheddar, la cebolla caramelizada, los pepinillos agridulces y la salsa barbacoa caserita. El ingrediente secreto? La salsa Monkey!! Es apta para celíacos y viene con unas re papas!",
    image: "./img/menu/monkey1.jpg",
    category: "burgers",
    colors: "red",
    price: "1200",
  },
  {
    id: 2,
    name: "GUENON BURGER",
    description:
      "El mejor estilo francés en tu mesa! Te vamos a sorprender con un pan delicatessen de trigo y almendras recién sacado del horno y un medallón angus de 200gr al punto justo. También tendrás una explosión de sabor y texturas con un blend de 4 quesos (azul, reggianito, mozzarella y provolone) que completarán la experiencia. Lo infaltable en este sensacional plato? Unas cebollas caramelizadas para chuparse los dedos y papas fritas, obvio!",
    category: "burgers",
    colors: "red",
    image: "./img/menu/guenon1.jpg",
    price: "1000",
  },
  {
    id: 3,
    name: "SCIMMIA BURGER",
    description:
      "Recientemente agregada al menú, esta hamburguesa viene para quedarse. Pan de masa madre horneando en el día y un medallón angus de 200gr. Siguiendo el mejor estilo mediterráneo, la acompañamos con tomates secos hidratados en vino blanco, rúcula orgánica y olivas negras. Todo esto con una increíble salsa de finas hierbas hecha por los cocineros genios de Monkey Burger. Y como no podía ser de otra maneras, la acompañamos con unas buenas papas fritas.",
    image: "./img/menu/scimmia1.jpg",
    category: "burgers",
    colors: "red",
    price: "980",
  },
  {
    id: 4,
    name: "AFFE BURGER",
    description:
      "La bomba alemana que no podía faltar en el menú. Pan de masa madre horneado en el día con un medallón de carnes angus de 200gr. Infaltable el chucrut casero de repollo blanco y la mostaza con granitos (una receta súper secreta de Monkey Burger). También vas a sentir el crunchy de la panceta recién tostada. La acompañamos con papas fritas, y por favor no te olvides de una buena cerveza para una digestión como corresponde.",
    image: "./img/menu/affe1.jpg",
    category: "burgers",
    colors: "red",
    price: "990",
  },
  {
    id: 5,
    name: "MACACO BURGER",
    description:
      "Agridulce sí, agridulce no. Esa es la verdadera grieta! En esta opción para valientes te traemos una hamburguesa de carne angus de 200gr en pan de masa madre horneado en el día. Agregamos mozzarella, tomates rescos, salsa Monkey, y el ingrediente estrella de este plato: ananá caramelizado a la plancha para que enloquezcas! Viene con papas? Obviamente viene con papas!",
    image: "./img/menu/macaco1.jpg",
    category: "burgers",
    colors: "red",
    price: "1100",
  },
  {
    id: 6,
    name: "MONO BURGER",
    description:
      "Para aquellos amantes de las tradiciones y nuestros exquisitos sabores locales, traemos una hamburguesa bien argenta para chuparse los dedos. Empezamos con pan de masa madre del día y un medallón de carne angus de 200gr. Sumamos lechuga, tomate, mozzarella, huevo frito, salsa Monkey, y finalizamos con una salsa criolla que difícilmente olvides. Viene con papas? Sí, señor! No pueden faltar las papas.",
    image: "./img/menu/mono1.jpg",
    category: "burgers",
    colors: "red",
    price: "900",
  },
];
const drinks = [
  {
    id: 7,
    name: "AGUA SIN GAS",
    description: "BON AQUA - 500ML",
    image: "./img/menu/logo-bonaqua-sin-gas.jpg",
    category: "drinks",
    colors: "white",
    price: "250",
  },
  {
    id: 8,
    name: "AGUA CON GAS",
    description: "BON AQUA - 500ML",
    image: "./img/menu/logo-bonaqua-con-gas.jpg",
    category: "drinks",
    colors: "white",
    price: "250",
  },
  {
    id: 9,
    name: "GASEOSA",
    description: "COCA COLA - 500ML",
    image: "./img/menu/logo-cocacola.jpg",
    category: "drinks",
    colors: "black",
    price: "250",
  },
  {
    id: 10,
    name: "GASEOSA",
    description: "COCA-COLA ZERO - 500ML",
    image: "./img/menu/logo-cocazero.jpg",
    category: "drinks",
    colors: "black",
    price: "250",
  },
  {
    id: 11,
    name: "GASEOSA",
    description: "SPRITE - 500ML",
    image: "./img/menu/logo-sprite.jpg",
    category: "drinks",
    colors: "black",
    price: "250",
  },
  {
    id: 12,
    name: "GASEOSA",
    description: "SPRITE ZERO - 500ML",
    image: "./img/menu/logo-sprite-zero.jpg",
    category: "drinks",
    colors: "black",
    price: "250",
  },
  {
    id: 13,
    name: "CERVEZA",
    description: "AMBER LAGER - PATAGONIA - 410ML",
    image: "./img/menu/logo-amber-lagger.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 14,
    name: "CERVEZA",
    description: "WEISSE - PATAGONIA - 410ML",
    image: "./img/menu/logo-weisse.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 15,
    name: "CERVEZA",
    description: "BOHEMIAN PILSENER - PATAGONIA - 410ML",
    image: "./img/menu/logo-pilsener.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 16,
    name: "CERVEZA",
    description: "HOPPY LAGER - PATAGONIA",
    image: "./img/menu/logo-hoppy-lagger.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 17,
    name: "CERVEZA",
    description: "KM 24.7 - PATAGONIA - 410ML",
    image: "./img/menu/logo-km24.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 18,
    name: "CERVEZA",
    description: "KÜNE - PATAGONIA - 410ML",
    image: "./img/menu/logo-kune.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 19,
    name: "CERVEZA",
    description: "PORTER - PATAGONIA - 410ML",
    image: "./img/menu/logo-porter.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
  {
    id: 20,
    name: "CERVEZA",
    description: "VERA IPA - PATAGONIA - 420ML",
    image: "./img/menu/logo-ipa.jpg",
    category: "drinks",
    colors: "gold",
    price: "350",
  },
];
const chips = [
  {
    id: 21,
    name: "PAPAS MONKEY",
    description:
      "Las Papas Monkey son básicamente las reinas del tapeo en Monkey Burger. Por qué? Porque simplemente son todo lo que está bien a la hora de picar algo, compartir con amigos y tomar una birra. Son papas cortadas a mano y fritas en el momento, con una salsa de 4 quesos frescos (cheddar, reggianito, mozzarella y provolone), verdeo y panceta salteados. Las acompañan la tremenda salsa Monkey, barbacoa casera y criolla.",
    image: "./img/menu/papas1.jpg",
    category: "chips",
    colors: "yellow",
    price: "700",
  },
  {
    id: 22,
    name: "MONKEY ONIONS",
    description:
      "Sin lugar a dudas, los mejores aritos de cebolla del país están en Monkey Burger. Lo hacemos con un mix de cebollas moradas y blancas, y las rebozamos en panco. Sí, sí! Para rechuparse los dedos! Vienen acompañadas con salsa Monkey, barbacoa casera y criolla. Ideal para que piquen 4 o coman 2. Un recomendación? Quedan increíbles con la birra Weisse de Patagonia, fíjate en la sección de Bebidas!",
    image: "./img/menu/aros1.jpg",
    category: "chips",
    colors: "yellow",
    price: "1000",
  },
  {
    id: 23,
    name: "MOZZA MONKEY",
    description:
      "No podia faltar una opción de quesos en las tapas de Monkey Burger, no? Por eso traemos estos dados de mozzarella empanizados con panco y fritos en el momento para que tu encuentro con amigos sea más que ideal. Los recibirás acompañadas con salsa Monkey, barbacoa casera y criolla. La porción es ideal para 3 personas, aunque seguramente van a pedir una segunda vuelta porque son una locura!",
    image: "./img/menu/mozza1.jpg",
    category: "chips",
    colors: "yellow",
    price: "1100",
  },
];
const comboc = [
  {
    id: 24,
    name: "COMBO BANANA",
    description:
      "Son 4 amigos de buen comer? No se diga más! En Monkey Burger nos aseguramos de que se alimenten como corresponde. El Combo Banana incluye 4 Monkey Burgers con sus respectivas papas, 1 porción de Monkey Onions, 1 porción de Papas Monkey y 4 latas de birra Patagonia Amber Lager. Porque panza llena, corazón contento! No sé, vos me dirás después de llevarte este combo.",
    image: "./img/menu/combobanana1.jpg",
    category: "comboc",
    colors: "green",
    price: "6500",
  },
  {
    id: 25,
    name: "COMBO PALMERA",
    description:
      "Este mes llegó el Combo Palmera para esos grupos de amigos donde no es fácil ponerse de acuerdo. Por eso, incluimos 4 hamburguesas a elección con sus respectivas papas (Monkey, Guenon, Scimmia, Affe, Macaco o Mono) y 4 latas de birra Patagonia también a elección (Amber Lager, Weisse, Boemian Pilsener, Hoppy Lager, KM 24.7, Kune, Porter o Vera IPA). Y no me digas que no te damos opciones!",
    image: "./img/menu/combopalmera1.jpg",
    category: "comboc",
    colors: "green",
    price: "5200",
  },
  {
    id: 26,
    name: "COMBO MONITA",
    description:
      "Este combo nos vuela la cabeza! Llevate 6 Mono Burgers con sus papas, 2 papas Monkey y 6 latas de birra Amber Lager de Patagonia con un descuento zarpado. Además, este mes nos volvimos locos y cada 5 Combos Monita que preparamos, 1 se lleva unos Monkey Onions y 6 birras Patagonia extras de regalo! Viste? Yo te dije que te volaba la cabeza!",
    image: "./img/menu/combomonita1.jpg",
    category: "comboc",
    colors: "green",
    price: "7500",
  },
];
module.exports = { news, proms, burgers, drinks, chips, comboc };
