a,b = map(int, input().split())
n_list = []
for _ in range(a):
	n_list.append(0)

for _ in range(b):
	i,j,k = map(int, input().split())
	for m in range (i-1,j):
		n_list[m] = k

for i in n_list:
	print(i,end=" ")

    
