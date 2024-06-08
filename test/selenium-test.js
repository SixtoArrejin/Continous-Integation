import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navegar a la URL de la aplicación desplegada
    await driver.get('https://continous-integation.onrender.com');

    // Esperar a que la página se cargue completamente
    await driver.wait(until.titleIs('Suma de Númerosss'), 10000);

    // Obtener el título actual de la página
    let title = await driver.getTitle();

    // Verificar que el título coincida con el valor esperado
    if (title === 'Suma de Númerosss') {
      console.log('Test pasado: El título coincide con el valor esperado.');
      process.exit(0); // Indica éxito
    } else {
      console.error('Test fallado: El título no coincide con el valor esperado.');
      process.exit(1); // Indica fallo
    }
  } catch (error) {
    console.error(`Test fallado con error: ${error}`);
    process.exit(1); // Indica fallo
  } finally {
    // Cerrar el navegador después de terminar la prueba
    await driver.quit();
  }
})();
