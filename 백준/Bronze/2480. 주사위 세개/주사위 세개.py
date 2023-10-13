a = list(map(int,input().split()))
result = 0

if (a[0] == a[1] and a[1]== a[2]):
    result = 10000 + a[0]* 1000
elif (a[0] == a[1] and a[0] != a[2]):
    result = 1000 + a[0] * 100
elif (a[0] == a[2] and a[0] != a[1]):
    result = 1000 + a[0] * 100
elif (a[1] == a[2] and a[0] != a[1]):
    result = 1000 + a[1]* 100
else :
    result = max(a) * 100

print(result) 

