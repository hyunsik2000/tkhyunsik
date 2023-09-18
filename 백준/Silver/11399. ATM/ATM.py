num = int(input())
time = list(map(int,input().split()))  

time.sort()
    
for i in range(1,num):
    time[i] += time[i-1]
    
print(sum(time))