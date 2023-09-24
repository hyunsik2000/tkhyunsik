S = int(input())
Total = 0
Count = 0 

while True:
    Count += 1
    Total += Count
    if Total > S:
        break

print(Count-1)
