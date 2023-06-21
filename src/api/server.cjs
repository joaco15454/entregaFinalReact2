const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());



const cartItems = [] || "Hola";

// Ruta POST para agregar productos al carrito
app.post('/api/user/cart', (req, res) => {
  const { productId, quantity, price } = req.body;

  // Crear un objeto para representar el producto
  const product = {
    productId,
    quantity,
    price
  };

  // Agregar el producto al array del carrito
  cartItems.push(product);

  // Enviar una respuesta exitosa
  res.status(200).json({ message: 'Producto agregado al carrito correctamente' });
});
app.get('/api/user/cart', (req, res) => {
  res.status(200).json(cartItems);
});
// Array con la lista de productos
const products = [
  {
    nombre: 'Reloj3',
    descripcion: 'Reloj ultima generacion',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bUt0HcVSIJBGtl4H0x6y4lwxcjpFq7-_GbX-ZL4s&s',
    brand: 'apple',
    price: 100000,
    valoration: 1
  },
  {
    nombre: 'Altavoz',
    descripcion: 'Altavoz goood',
    imagen: 'https://images.philips.com/is/image/PhilipsConsumer/SPA1260_12-IMS-es_ES?$jpglarge$&wid=960',
    brand: 'philips',
    price:  20000,valoration: 2
  }, {
    nombre : 'SHURE SM58 Micrófono de Mano',
    descripcion: 'El legendario SM58® es un micrófono dinámico cardioide muy versátil y un verdadero standard de la industria, afinado para ofrecer una reproducción vocal limpia a la vez que cálida. ',
    imagen: 'http://www.mdpsistemas.com.ar/wp-content/uploads/2019/01/shure-sm58-150x150.jpg',
    brand: 'philips',
    price: 30000,
    valoration: 3
  }, {
    nombre : 'Monitor UltraWide LCD 343E2E/55',
    descripcion: 'La pantalla ultraancha Philips E line ofrece imágenes panorámicas amplias. Una pantalla WFHD nítida, Ultra Wide-Color y un soporte ergonómico ',
    imagen: 'https://images.philips.com/is/image/PhilipsConsumer/343E2E_55-RTP-global-001?$jpglarge$&wid=1250',
    brand: 'LG',
    price: 40000,
    valoration: 4
  }
  // Agrega más objetos de productos si es necesario
];


app.get('/api/productos', (req, res) => {
  res.json(products);
});

// Datos del último usuario registrado (simulado)
let lastRegisteredUser = null;

// Ruta para el inicio de sesión
app.post('/api/user/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si los datos de inicio de sesión son correctos
  if (lastRegisteredUser && lastRegisteredUser.email === email && lastRegisteredUser.password === password) {
    // Generar un token de sesión
    const token = jwt.sign({ email: lastRegisteredUser.email }, 'secret_key');

    // Enviar el token como respuesta
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

// Ruta para el registro de usuarios
app.post('/api/user/register', (req, res) => {
  const { email, password,firstname } = req.body;

  // Guardar los datos del usuario registrado
  lastRegisteredUser = { email, password,firstname };

  // Enviar una respuesta exitosa
  res.json({ message: 'Usuario registrado correctamente', email: email, password: password, firstname:firstname });
});


app.put('/api/wishlist', (req, res) => {
  const { prodId } = req.body;
  
  // Buscar el producto en base a su ID de valoración
  const wishlist = products.find((p) => p.valoration === prodId);
  
  if (wishlist) {
    // Si se encuentra el producto, devolverlo como respuesta
    res.json(wishlist);
  } else {
    // Si no se encuentra el producto, devolver un error
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.get('/api/productos/:id', (req, res) => {
  const productId = req.params.id;

  // Buscar el producto en base a su ID
  const product = products.find((p) => p.valoration === productId);

  if (product) {
    // Si se encuentra el producto, devolverlo como respuesta
    res.json(product);
  } else {
    // Si no se encuentra el producto, devolver un error
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});


// Puerto de escucha
const port = 5008;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});