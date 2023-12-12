# Dockerfile

# Menggunakan image dasar Node.js
FROM node:16

# Menentukan direktori kerja di dalam kontainer
WORKDIR /src

# Menyalin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Menginstal dependensi yang diperlukan
RUN npm install

# Menyalin semua file aplikasi ke direktori kerja
COPY . .

# Expose port 3000
EXPOSE 4000

# Run the web service on container startup.
CMD [ "npm", "run", "start" ]