# Usa una imagen base de Node.js 21
FROM node:21-alpine

#establecer el directorio de trbajo dentro del contenedor
WORKDIR /app


# Copiar package.json y package-lock.json
COPY package.json ./ 
COPY package-lock.json ./

#instalar las dependencias de la app
RUN npm install --frozen-lockfile


# Generar Prisma dentro del contenedor
RUN npx prisma generate


#copiar todo el codigo fuente al contenedor
COPY . .

#contruye la aplicacion Nest.js
RUN npm run build

#exponer el puerto en el que la app se va ejecutar
EXPOSE 5000

# Comando para ejecutar la aplicación cuando el contenedor inicie
CMD ["npm", "run", "start"]