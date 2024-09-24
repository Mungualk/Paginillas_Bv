let htmlParrafo;
let contenedor;
let gif;
let gifContenedor;
function obtenerAlt(evento) 
{
    const elementoClickeado = evento.target;

  // Obtiene el valor del atributo "alt" del elemento
  const altImagen = elementoClickeado.alt;

  // Devuelve el valor "alt" de la imagen cliqueada
  return altImagen;
}

function mostrarEfectividades(nombreTipo) 
{
    switch (nombreTipo) 
    {
        case 'bug':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Fuego, Volador, Roca </td><tr><td>Ventajas: </td><td>Planta, Psíquico, Siniestro</td>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/volcarona.gif" alt="volca"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'poison':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Tierra, Psíquico </td><tr><td>Ventajas: </td><td>Hada, Planta</td>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/toxicroak.gif" alt="tox"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'dark':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Hada, Lucha, Bicho </td><tr><td>Ventajas: </td><td>Fantasma, Psíquico: </td><tr><td>Imnunidades: </td><td>Psíquico</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/zoroark.gif" alt="zor"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'steel':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Fuego, Tierra, Lucha</td><tr><td>Ventajas: </td><td>Hada, Roca, Hielo</td> <tr><td>Imnunidades: </td><td>Veneno</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/metagross.gif" alt="meta" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'fire':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Agua, Tierra, Roca</td><tr><td>Ventajas: </td><td>Planta, Acero, Hielo, Bicho</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/skeledirge.gif" alt="ski" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'flying':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Eléctrico, Roca, Hielo</td><tr><td>Ventajas: </td><td>Bicho, Planta, Lucha</td> <tr><td>Imnunidades: </td><td>Tierra</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/staraptor.gif" alt="star" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'water':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Eléctrico, Planta</td><tr><td>Ventajas: </td><td>Tierra, Roca, Fuego</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/gyarados.gif" alt="GYAAAT" id="GYATT"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'ice':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Acero, Roca, Fuego, Lucha</td><tr><td>Ventajas: </td><td>Dragón, Tierra, Volador, Planta,</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/mamoswine-f.gif" alt="dusk" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'grass':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Fuego, Veneno, Bicho, Volador, Hielo</td><tr><td>Ventajas: </td><td>Agua, Roca, Tierra</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/sceptile.gif" alt="scep" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'electric':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Tierra</td><tr><td>Ventajas: </td><td>Agua, Volador</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/electivire.gif" alt="volca"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'normal':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Lucha</td><tr><td>Ventajas: </td><td>Ninguna xd</td> <tr><td>Imnunidades: </td><td>Fantasma</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/slaking.gif" alt="dusk" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'rock':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Lucha, Tierra, Acero, Agua, Planta</td><tr><td>Ventajas: </td><td>Volador, Fuego, Bicho, Hielo</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/tyranitar.gif" alt="dusk" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'ground':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Agua, Hielo, Planta</td><tr><td>Ventajas: </td><td>Eléctrico, Roca, Acero, Fuego, Veneno</td><tr><td>Imnunidades: </td><td>Eléctrico</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/rhyperior.gif" alt="dusk" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'fighting':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Volador, Psíquico, Hada</td><tr><td>Ventajas: </td><td>Hielo, Roca, Acero, Normal, Siniestro</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/machamp.gif" alt="volca"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'fairy':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Acero, Veneno</td><tr><td>Ventajas: </td><td>Dragón, Lucha, Siniestro</td> <tr> <td>Imnunidades: </td><td>Dragón</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/sylveon.gif" alt="volca"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'psychic':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Siniestro, Fantasma, Bicho</td><tr><td>Ventajas: </td><td>Lucha, Veneno</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/alakazam.gif" alt="alak" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'poison':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Tierra, Psíquico</td><tr><td>Ventajas: </td><td>Hada, Planta</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            break;
        case 'ghost':
            htmlParrafo = '<tr> <td>Debilidades: </td> <td>Fantasma, Siniestro</td><tr><td>Ventajas: </td><td>Fantasma, Psíquico</td> <tr> <td>Imnunidades: </td><td>Normal, Lucha</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/dusknoir.gif" alt="dusk" id="ski"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        case 'dragon':
            htmlParrafo = '<tr><td>Debilidades: </td> <td>Hielo, Hada, Dragón</td><tr><td>Ventajas: </td><td>Dragón</td></tr>';
            contenedor = document.getElementById('comparison-table');
            contenedor.innerHTML = htmlParrafo;
            gif = '<img src="/img/dragonite.gif" alt="drag"></img>'
            gifContenedor = document.getElementById('spraits');
            gifContenedor.innerHTML = gif;
            break;
        default:
            console.log(`No se ha encontrado información para el tipo ${nombreTipo}`);
    }
}
  
  // Obtiene todas las imágenes de tipos de Pokémon
  const imagenesTipos = document.querySelectorAll('.types-container img');
  
  // Agrega un evento 'click' a cada imagen
  imagenesTipos.forEach(imagen => {
    imagen.addEventListener('click', (evento) => {
      const altImagen = obtenerAlt(evento);
      mostrarEfectividades(altImagen);
    });
  });