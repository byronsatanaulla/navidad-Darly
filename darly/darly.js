// Generar copos de nieve
const snowflakeCount = 100; // Puedes aumentar o reducir este número para más o menos copos
for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria en el eje X
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Duración aleatoria de la caída
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio antes de empezar a caer
    document.body.appendChild(snowflake);
}




        function toggleMessage(messageId) {
            const message = document.getElementById(messageId);
            // Verificar si el mensaje está visible o no
            if (message.style.display === 'none' || message.style.display === '') {
                // Mostrar el mensaje
                message.style.display = 'block';
            } else {
                // Ocultar el mensaje
                message.style.display = 'none';
            }
        }
        
        // Mostrar el primer mensaje por defecto al cargar la página
        document.getElementById('message1').style.display = 'block';
        
    
// Función para mostrar el saludo navideño en la consola
console.log("¡Feliz Navidad, Darly! Que esta Navidad sea muy especial para ti. 🎄🎁");
