
#!/usr/bin/env python3

import connexion
from flask_cors import CORS

app = connexion.FlaskApp(__name__, specification_dir='./swagger/')
app.add_api('swagger.yaml', arguments={
            'title': 'BigchainDB API'})
CORS(app.app)

if __name__ == '__main__':
    app.run()
