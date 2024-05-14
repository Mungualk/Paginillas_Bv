const tiposEfectivos = {
    // Normal
    normal: {
      efectivoContra: [],
      debilContra: ['roca', 'fantasma'],
    },
  
    // Fuego
    fuego: {
      efectivoContra: ['planta', 'hielo', 'bicho'],
      debilContra: ['agua', 'roca', 'tierra'],
    },
  
    // Agua
    agua: {
      efectivoContra: ['fuego', 'tierra'],
      debilContra: ['planta', 'electrico'],
    },
  
    // Planta
    planta: {
      efectivoContra: ['agua', 'tierra', 'roca'],
      debilContra: ['fuego', 'hielo', 'bicho', 'veneno', 'volador', 'dragon'],
    },
  
    // Electrico
    electrico: {
      efectivoContra: ['agua', 'volador'],
      debilContra: ['tierra'],
    },
  
    // Psíquico
    psiquico: {
      efectivoContra: ['lucha', 'veneno'],
      debilContra: ['bicho', 'fantasma', 'acero'],
    },
  
    // Tierra
    tierra: {
      efectivoContra: ['fuego', 'roca', 'electrico'],
      debilContra: ['agua', 'planta', 'hielo'],
    },
  
    // Roca
    roca: {
      efectivoContra: ['fuego', 'hielo', 'bicho', 'planta'],
      debilContra: ['agua', 'tierra', 'acero'],
    },
  
    // Bicho
    bicho: {
      efectivoContra: ['planta', 'psiquico', 'oscuro'],
      debilContra: ['fuego', 'volador', 'lucha', 'veneno', 'acero', 'roca'],
    },
  
    // Lucha
    lucha: {
      efectivoContra: ['normal', 'hielo', 'roca', 'oscuro', 'acero'],
      debilContra: ['volador', 'psiquico', 'bicho', 'hada'],
    },
  
    // Veneno
    veneno: {
      efectivoContra: ['planta', 'hada'],
      debilContra: ['tierra', 'psiquico', 'roca', 'bicho', 'acero'],
    },
  
    // Hada
    hada: {
      efectivoContra: ['lucha', 'bicho', 'oscuro'],
      debilContra: ['veneno', 'acero', 'dragon'],
    },
  
    // Dragón
    dragon: {
      efectivoContra: ['dragon'],
      debilContra: ['hada', 'acero'],
    },
  
    // Fantasma
    fantasma: {
      efectivoContra: ['fantasma', 'psiquico'],
      debilContra: ['normal', 'lucha'],
    },
  
    // Acero
    acero: {
      efectivoContra: ['hielo', 'roca', 'hada'],
      debilContra: ['fuego', 'tierra', 'lucha'],
    },
  
    // Hielo
    hielo: {
      efectivoContra: ['planta', 'dragon', 'tierra', 'volador'],
      debilContra: ['fuego', 'roca', 'lucha', 'acero', 'agua'],
    },
  
    // Volador
    volador: {
      efectivoContra: ['bicho', 'lucha'],
      debilContra: ['roca', 'electrico', 'hielo'],
    },
  
    // Oscuro
    oscuro: {
      efectivoContra: ['psiquico', 'fantasma'],
      debilContra: ['lucha', 'bicho', 'hada'],
    }
  };  

  
  function compararTipos(pokemonDefensa, pokemonAtaque) {
    const efectividad = tiposEfectivos[pokemonAtaque];
  
    if (efectividad && efectividad.efectivoContra.includes(pokemonDefensa)) {
      return 'Muy efectivo';
    } else if (pokemonAtaque === pokemonDefensa) {
      return 'Neutral';
    } else if (efectividad && efectividad.debilContra.includes(pokemonDefensa)) {
      return 'No tan efectivo';
    } else {
      return 'Inmune';
    }
  }

  
  function compararTipos(pokemonDefensaTipos, pokemonAtaque) {
    let efectividad = 'Neutral';
  
    for (const tipoDefensa of pokemonDefensaTipos) {
      const tipoEfectivo = tiposEfectivos[pokemonAtaque];
      if (tipoEfectivo) {
        if (tipoEfectivo.efectivoContra.includes(tipoDefensa)) {
          efectividad = 'Muy efectivo';
          break; // Si un tipo es efectivo, se considera "Muy efectivo"
        } else if (tipoEfectivo.debilContra.includes(tipoDefensa)) {
          efectividad = 'No tan efectivo';
        }
      }
    }
  
    return efectividad;
  }
  