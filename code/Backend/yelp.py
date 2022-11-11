import requests
import json


API_KEY = "nRmQg_NkjRoD-yHp9ojddeo1_rsB2orb--GVMrXU5XdvFBEViAJnsGg_7wrmm2NUWHsIJrRP4915ugzta1177-fZudWwG1V0NdQNoNcBL5Nn4rSLlxeWvHUVt0FsY3Yx"
ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
HEADERS = {'Authorization': 'bearer %s' %API_KEY}

keyword = requests.get('code/frontend/src/App.js/')
PARAMETERS = {
    'term': keyword,
    'limit': 50,
    'radius': 100,
    'location': 'Boston'
}
response = requests.get(url = ENDPOINT,
                        params = PARAMETERS,
                        headers = HEADERS
                        )
business_data = response.json()