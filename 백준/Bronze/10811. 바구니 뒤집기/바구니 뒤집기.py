a,b = map(int, input().split())
c = list(range(1,a+1))
temp = 0
for _ in range(b):
    i,j = map(int, input().split())
    while(i < j):
     temp = c[i-1]
     c[i-1] = c[j-1]
     c[j-1] = temp
     i += 1
     j -= 1

for i in c:
	print(i,end=" ")
