'''
Python version : 2.7
Python program to create and test the function calculateGainsAndLosses
'''
import array

'''
Function that receives an array of daily stock prices
and returns an array containing the total gains and losses
such that first item in the array is total losses and second item
is total gains
'''
def calculateGainsAndLosses(data):
  
   # set variables losses and gains to 0 at the start
   losses = 0
   gains = 0
   # loop over the data array starting from index 1 to end
   for i in range(1,len(data)):
       # if ith price > (i-1)the price
       if(data[i] > data[i-1]):
           gains += data[i] - data[i-1] # add the difference between i and (i-1) price to gains
       else: # if ith price <= (i-1)the price          
           losses += data[i-1] - data[i] # add the difference between i and (i-1) price to losses
  
   # returns the array containing losses and gains both rounded to 2 decimal places  
   return array.array('d',[-1*round(losses,2),round(gains,2)])  

# main function to test the function  
if __name__ == "__main__":  
   data = array.array('d',[78.41,85.18,91.09,90.57,91.02,103.61,105.88,103.77,110.13,108.89,105.09])
   result = calculateGainsAndLosses(data)
   print(result)  
  
#end of program  