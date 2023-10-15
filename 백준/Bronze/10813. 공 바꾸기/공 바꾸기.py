a,b = map(int, input().split())
c = []
for i in range(1,a+1):
    c.append(i)
temp = 0
for _ in range(b):
    i,j = map(int, input().split())
    temp = c[i-1]
    c[i-1] = c[j-1]
    c[j-1] = temp

for i in c:
    print(i,end=" ")
    

    
