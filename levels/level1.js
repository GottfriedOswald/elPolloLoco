const level1 = new Level(
    [
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
        new Chicken('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png', (200 + Math.random() * 500).toFixed(0), 410, 49, 50),
    ],
    [
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/1.png', (Math.random() * 396).toFixed(0), 216, 384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/2.png', (Math.random() * 396).toFixed(0), 216, 384),
        new Cloud('img/5.Fondo/Capas/4.nubes/nubes_small/Completo.png', 0, 219, 780),
    ],
    [
        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', -779, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', -779, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', -779, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', -779, 161, 319, 780),

        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', 0, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', 0, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', 0, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', 0, 161, 319, 780),

        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', 779, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', 779, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', 779, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', 779, 161, 319, 780),

        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', 1558, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', 1558, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', 1558, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', 1558, 161, 319, 780),

        new Landscape('img/5.Fondo/Capas/5.cielo_780-438px.jpg', 2337, 0, 480, 780),
        new Landscape('img/5.Fondo/Capas/3.Fondo3/3.Fondo3_small/Completo.png', 2337, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/2.Fondo2/2.Fondo2_small/completo.png', 2337, 161, 319, 780),
        new Landscape('img/5.Fondo/Capas/1.suelo-fondo1/1.suelo-fondo1_small/completo.png', 2337, 161, 319, 780),
    ],
);