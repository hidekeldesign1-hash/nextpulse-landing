# Cómo ver la landing en localhost:3000

Si en la terminal sale **"El término 'npm' no se reconoce"**, es porque **Node.js no está instalado** o la terminal no lo encuentra. Primero hay que instalar Node.js (Paso 1). Después ya podrás usar `npm install` y `npm run dev`.

---

## Paso 1: Instalar Node.js (obligatorio si npm no se reconoce)

1. Abre el navegador y entra en **https://nodejs.org**
2. Descarga el botón verde **LTS** (versión recomendada).
3. Ejecuta el archivo descargado (por ejemplo `node-v22.x.x-x64.msi`).
4. En el instalador: **Next** → acepta la licencia → **Next** → deja las opciones por defecto (importante: que esté marcado **"Add to PATH"**) → **Next** → **Install**.
5. Cuando termine, **cierra Cursor por completo** (todas las ventanas) y vuelve a abrirlo.
6. Abre de nuevo la terminal en Cursor (Terminal → Nueva terminal) y prueba con: `npm install` en la carpeta del proyecto. Si Node se instaló bien, ya no debería decir "npm no se reconoce".

---

## Paso 2: Abrir la terminal en Cursor

1. En Cursor, ve al menú **Terminal** (arriba) y haz clic en **Nueva terminal**.
2. O pulsa **Ctrl + Ñ** (o **Ctrl + `** si tienes teclado en inglés).
3. Abajo aparecerá una ventana negra o azul con una línea donde se escribe. Eso es la **terminal**.

---

## Paso 3: Ir a la carpeta del proyecto

En la terminal, **copia y pega** esta línea (tal cual, con las comillas) y pulsa **Enter**:

```
cd "E:\larah\OneDrive\Escritorio\Hidekel\Cursor Paginas\agencia-landing-prueba"
```

No escribas nada más en esa línea. Solo eso y Enter. Así te sitúas en la carpeta del proyecto.

---

## Paso 4: Instalar dependencias

En la misma terminal, escribe (o copia y pega) y pulsa **Enter**:

```
npm install
```

Espera 1–2 minutos hasta que termine. Verás muchas líneas pasando; al final volverá a aparecer la línea con la ruta del proyecto (por ejemplo `PS E:\larah\...>`). Entonces ya está.

---

## Paso 5: Arrancar el servidor

En la misma terminal, escribe (o copia y pega) y pulsa **Enter**:

```
npm run dev
```

Cuando veas algo como **"Ready in X ms"** y **"Local: http://localhost:3000"**, el servidor está corriendo. **No cierres esa terminal** mientras quieras usar la página.

---

## Paso 6: Abrir en el navegador

Abre **http://localhost:3000** en Opera (o cualquier navegador). Deberías ver la landing de Komvos.

---

## Si sigue sin funcionar

- **"npm no se reconoce"**: Node no está en el PATH. Reinstala Node.js marcando la opción "Add to PATH" y reinicia Cursor.
- **Puerto 3000 en uso**: Cierra otras apps que usen el puerto 3000 o ejecuta `npm run dev -- -p 3001` y abre http://localhost:3001
- **Cortafuegos**: Si Windows/antivirus bloquea, permite Node.js cuando lo pida.
