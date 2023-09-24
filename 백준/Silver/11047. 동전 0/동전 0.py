n,k = map(int, input().split())
coin = []                
count = 0
for i in range(n):
    coin.append(int(input()))

coin.sort(reverse=True)

for coins in coin:
    count = count + k // coins
    k = k % coins

print(count)