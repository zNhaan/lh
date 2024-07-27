import os, requests, datetime

#       lấy seed từ tg
seed=int((datetime.datetime.now().replace(second=0)).timestamp())

#       requests 
concu=requests.get(f'http://localhost:3000/{seed}').text

#       in ra màn hình
os.system('clear')
print(concu)