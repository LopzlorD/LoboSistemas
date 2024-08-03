# Utiliza una imagen oficial de Node.js específica
FROM node:20.15.1

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de tu proyecto
COPY package.json yarn.lock ./

# Instala las dependencias de Yarn
RUN yarn install --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Compila la aplicación usando Vite
RUN yarn build

# Expone el puerto que Vite usa por defecto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]
