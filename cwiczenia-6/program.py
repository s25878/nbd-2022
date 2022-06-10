import requests, json

REQUEST_URL = "http://localhost:8098/buckets/s25878/keys/"

def get_result_from_request(request):
    body = None
    try:
        body = request.json()
    except:
        body = request.text

    return json.dumps({ "status": request.status_code, "body": body })

def get(key):
    request = requests.get(REQUEST_URL + key, stream=True)
    return get_result_from_request(request)

def put(key, body):
    request = requests.put(REQUEST_URL + key, json = body)
    return get_result_from_request(request)

def delete(key):
    request = requests.delete(REQUEST_URL + key)
    return get_result_from_request(request)

def start():
    sample_key = "american_psycho_2000"
    sample_body = { "title": "American Psycho", "year": 2000, "genres": ["crime", "drama", "horror"], "isRatingHigh": True }

    # tworzenie dokumentu
    request_put = put(sample_key, sample_body)
    print("TWORZENIE DOKUMENTU\nKlucz: " + sample_key + "\nDokument: " + json.dumps(sample_body) + "\nWynik:\n" + request_put, end = "\n\n")


    # pobieranie dokumentu
    request_get = get(sample_key)
    print("POBIERANIE DOKUMENTU\nKlucz: " + sample_key + "\nWynik:\n" + request_get, end = "\n\n")

    # aktualizacja dokumentu
    sample_body["year"] = 2002
    request_put_new = put(sample_key, sample_body)
    print("AKTUALIZACJA DOKUMENTU\nKlucz: " + sample_key + "\nDokument: " + json.dumps(sample_body) + "\nWynik:\n" + request_put_new, end = "\n\n")

    # pobieranie zaktualizowanego dokumentu
    request_get_new = get(sample_key)
    print("POBIERANIE ZAKTUALIZOWANEGO DOKUMENTU\nKlucz: " + sample_key + "\nWynik:\n" + request_get_new, end = "\n\n")

    # usuwanie dokumentu
    request_delete = delete(sample_key)
    print("USUWANIE DOKUMENTU\nKlucz: " + sample_key + "\nWynik:\n" + request_delete, end = "\n\n")

    request_get_deleted = get(sample_key)
    print("POBIERANIE USUNIETEGO DOKUMNETU\nKlucz: " + sample_key + "\nWynik:\n" + request_get_deleted, end = "\n\n")


start()