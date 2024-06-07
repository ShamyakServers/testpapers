

# import requests,time

# url = "https://discord.com/api/v9/interactions"
# times = 0;
# while True:
#     times+=1
#     requests.post(url, headers={"Authorization": "MTExNzY5MTUwMTc0OTc1MTgwOA.GMbcET.EAmbBMk9regzmE_xoB4f-RbqBSHhOtNiVoOwsM"}, data={"bo"})
#     print(times)
#     time.sleep(32)

import requests

url = "https://discord.com/api/v9/interactions"

payload = {
    "type": "2",
    "application_id": 1009562541246136403,
    "channel_id": 1089798989836202054,
    "data": {"version":"1024361385351725104","id":"1024361385200721973","guild_id":"805383033900367902","name":"levels","type":1,"options":[],"application_command":{"id":"1024361385200721973","type":1,"application_id":"159985415099514880","guild_id":"805383033900367902","version":"1024361385351725104","name":"levels","description":"Get a link to the leaderboard","default_member_permissions":"2147483648","integration_types":[0],"permissions":[{"type":3,"id":"805383033900367901","permission":True},{"type":1,"id":"805383033900367902","permission":True}],"options":[],"description_localized":"Get a link to the leaderboard","name_localized":"levels"},"attachments":[]},"nonce":"1247813384838053888","analytics_location":"slash_ui"}
headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.7",
    "authorization": "MTExNzY5MTUwMTc0OTc1MTgwOA.GMbcET.EAmbBMk9regzmE_xoB4f-RbqBSHhOtNiVoOwsM",
    "cache-control": "no-cache",
    "cookie": "__dcfduid=d21f75b0d23911ee9ff61baf0cf7743c; __sdcfduid=d21f75b1d23911ee9ff61baf0cf7743ce95140ab8cde3733da06147343baa1de96081eb4cb42b7c9a5b64b0d523b638a; __cfruid=02fc6f57e611f1f39d16fb01def77bb1c2851836-1717562501; _cfuvid=w4w5FouThrnMKq_hRBnqp40UZ.IwCsZR5IGdtmOZFsQ-1717562501554-0.0.1.1-604800000; cf_clearance=b4vtOa.DqGGfSRTxbJQcLkymAVCBDBg56GfjbLRSpdc-1717562504-1.0.1.1-VYIPWRU_HKrcDjyQzgGLrHwv7KU_ZH7oU0CLguEOtxMnE1dZ9_PbPfTXJajkA.ilAErfoNanQOo4xvYELo9KNw; locale=en-US",
    "origin": "https://discord.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://discord.com/channels/846496831533088768/1089798989836202054",
    
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)