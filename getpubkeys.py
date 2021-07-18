import requests
import json
import base64

# The URL with the TrustList from Sweden
SE_Trust_List_URL = "https://dgcg.covidbevis.se/tp/trust-list"
SE_Value_Set_IDs_URL = "https://dgcg.covidbevis.se/tp/valuesets"


def get_trust_list(url):
    r = requests.get(url)
    r.raise_for_status()
    return r.text

# Retrieve the TL as a JWS
dsc_tl_jws = get_trust_list(SE_Trust_List_URL)

# Save the JWS for further reference
with open("dsc_tl_jws.jws", "w") as f:
    f.write(dsc_tl_jws)


# Decode the payload, without verifying the signature (for the moment)
jws_components = dsc_tl_jws.split(".")
if len(jws_components) != 3:
    raise Exception("Malformed JWS received")
payload = jws_components[1] + "=="
payload = base64.b64decode(payload)

dsc_tl = json.loads(payload)

# print(f"iss: {dsc_tl['iss']}")
# print(f"id: {dsc_tl['id']}")

dsc_trust_list = dsc_tl['dsc_trust_list']

new_dsc_tl = {}

for co in dsc_trust_list:
    entry = dsc_trust_list[co]
    keys = entry["keys"]
    for key in keys:
        kid = key["kid"]

        del key["x5c"]

        new_dsc_tl[kid] = {
            "co": co,
            "kid": kid,
            "jwk": key
        }

new_dsc_tl_json = json.dumps(new_dsc_tl, ensure_ascii=False, check_circular=False, indent=2)
with open("src/assets/all_jwk_keys.json", "w") as f:
    f.write(new_dsc_tl_json)

print(new_dsc_tl_json)