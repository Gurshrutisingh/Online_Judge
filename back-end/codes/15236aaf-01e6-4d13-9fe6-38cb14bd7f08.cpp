#include <iostream>

using namespace std;
int maxSubarraySum(int arr[], int n)
{
 
    int curr=0,ans=0;
    for(int i=0;i<n;i++)
    {
        curr=curr+arr[i];
        ans=max(ans,curr);
        if(curr<0)
        {
            curr=0;
        }
    }
    return ans;
}
int main()
{
   int t;
   cin>>t;
   while(t--){
     int n;
     cin>>n;
     int arr[n];
     for(int i = 0;i<n;i++){
       cin>>arr[i];
     }
    cout<< maxSubarraySum(arr,n);
  }
    return 0;
}