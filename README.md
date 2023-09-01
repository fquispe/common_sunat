# common_sunat
Microservicio que permita grabar toda la información de una persona Jurídica en una base de datos

# Sercicio Common sunat

Servicio para BackEnd Development based on NodeJs, ExpressJs, MongoDB, RESTFULL.

# Para ejecutar pruebas

` npm install `
` npm test `
___
# From dockerized (modo local)
es necesario contar con docker corriendo

` docker compose rm -f`
` docker compose build`
` docker compose up`

# Development Mode
`docker compose up mongodb`
`node development`
creará un servidor de reinicio automático restart-on-change server using nodemon. 

# SWAGGER (Generado automaticamente)

http://localhost:3000/swagger/



# CONSUMO DEL SERVICIO (POSTMAN)


POST localhost:3000/token

---INPUT
{
    "username":"Fernando"
}

---OUTPUT
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmxvcyIsImlhdCI6MTY5MzU4MTE5NCwiZXhwIjoxNjkzNTgyOTk0fQ.H-qAOEMBOl1pGC5nAOPc3XtOoV5XqtjoAJtOIHQ2zSM"


> POST localhost:3000/register

HEADERS

Authorization - Bearer Token 
---> pegar token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmxvcyIsImlhdCI6MTY5MzU4MTE5NCwiZXhwIjoxNjkzNTgyOTk0fQ.H-qAOEMBOl1pGC5nAOPc3XtOoV5XqtjoAJtOIHQ2zSM


---INPUT

{
    "tipo":"2",
    "ruc": "20600892470"
}


> Si el Token no existe o esta mal: 

---OUTPUT: 
		
	{
		unauthorized
	}
		
> Si el Token es correcto: 

	OUTPUT
	{
		"success": true,
		"data": {
			"ruc": "20600892470",
			"razon_social": "SUPERDEPORTE PLUS PERU S.A.C.",
			"estado": "ACTIVO",
			"direccion": "AV. LARCO 1301 301      LIMA LIMA  MIRAFLORES",
			"ubigeo": "150122",
			"departamento": "LIMA",
			"provincia": "LIMA ",
			"distrito": "MIRAFLORES"
		}
	}

--ruta prueba para test

>  GET http://localhost:3000/health 
Response code : 200 


# MONGODB (Para revizar la data - MONGO COMPASS)

> MongoDB Conection String - MONGO COMPASS

mongodb://localhost:27017
