import requests

url = "https://api.neshan.org/v4/geocoding?address=tehran"
headers = {
    "Api-Key": "service.1034a042c1dc41c9b42cc71249a0b4c1",
}

response = requests.get(url, headers=headers)

# The response of the GET request is stored in the .json() method
data = response.json()

print(data)
