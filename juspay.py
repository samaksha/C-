digits=[1,2,3,4,6,7,8,9,5]


def t(num):
    if not set(str(num))-set(map(str,digits)):     
        return len(str(num))+1

    dp,ret=[0],float('inf')
    while dp:
        dp=[i*10+j for i in dp for j in digits if 0<(i*10+j)**2<=num]
        ret=min([len(str(k))+1+t(num//k) for k in dp if k>1 and num%k==0]+[ret])
    return ret

print(t(128))
