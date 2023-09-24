time = int(input())

T = [300,60,10]
num = 0

if time % 10 != 0:
    print("-1")
else:
    for i in range(3):
        num = time // T[i] 
        print(num, end=' ')
        time = time % T[i]