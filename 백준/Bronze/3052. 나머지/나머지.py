a_list = []
c = 1
for _ in range(10):
    a = int(input())
    a_list.append(a % 42)
    
a_list.sort()

for i in range(9):
    if(a_list[i] != a_list[i+1]):
    	c += 1

print(c)