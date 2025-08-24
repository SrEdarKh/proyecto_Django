# 📚 Proyecto FullStack: Gestión de Alumnos

Este es un proyecto **FullStack** hecho con:
- **Backend:** Django + Django REST Framework + MySQL
- **Frontend:** React + Bootstrap + Axios
- **Base de Datos:** MySQL (puerto 3306)

El sistema permite:
✅ Crear, listar, editar y eliminar alumnos  
✅ Guardar notas y calcular promedios  
✅ Interfaz web moderna y responsive  

---

## 🚀 Tecnologías usadas
- **Frontend:** React 18, Bootstrap 5, Axios
- **Backend:** Python 3.10, Django 4, DRF
- **Base de Datos:** MySQL 8 (puerto 3306)
- **Control de versiones:** Git & GitHub

---

## 📂 Estructura del proyecto
Proyecto_Django/
│── Gestion_alumnos_api # Código de Django
│ ├── manage.py
│ ├── alumnos/ # App principal
│ ├── requirements.txt
│── Gestion_alumnos_frontend/ # Código de React
│ ├── package.json
│ ├── src/
│── .gitignore
│── README.md




---

## ⚙️ Instalación y ejecución paso a paso

### 🔹 1. Clonar el repositorio
Abre la terminal de GitHub Desktop o Git Bash y escribe:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO


🔹 2. Configurar el Backend (Django)

Entra en la carpeta del backend:

cd gestion_alumnos_api


Crea un entorno virtual:

python -m venv venv

Activa el entorno virtual:

En Windows:

venv\Scripts\activate

🔹 3. Instala las dependencias:

pip install -r requirements.txt


🔹 4. Configura la base de datos MySQL en settings.py (backend):

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nombre_de_tu_bd', // 0
        'USER': 'tu_usuario', // 0
        'PASSWORD': 'tu_contraseña', // 0
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}


🔹 5. Ejecuta migraciones:

python manage.py migrate


🔹 6. Levanta el servidor:

python manage.py runserver


📌 Tu backend estará en: http://127.0.0.1:8000




####################_________________Frontend________________#####################

🔹 1. Configurar el Frontend (React)

Abre otra terminal y entra al frontend:

cd frontend


🔹 2. Instala dependencias:

npm install


🔹 3. Ejecuta el servidor de React:

npm run dev


📌 Tu frontend estará en: http://localhost:5173

🛠️ Notas importantes

La base de datos MySQL debe estar corriendo en el puerto 3306.

Asegúrate de tener creado el esquema en MySQL antes de correr migraciones.

Si cambias algo en el backend, reinicia con:

python manage.py runserver


Si cambias algo en el frontend, se recarga automáticamente.

👨‍💻 Autor

Desarrollado por [Sr_Edarkh] ✨

<img width="1001" height="729" alt="dashboard" src="https://github.com/user-attachments/assets/3fb406b7-1ccf-4dc3-a5a8-3f0f0d26ee32" />

---
