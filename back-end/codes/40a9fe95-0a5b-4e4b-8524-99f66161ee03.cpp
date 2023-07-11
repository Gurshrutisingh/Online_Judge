#include <bits/stdc++.h>
using namespace std;

int missingNumber(int array[], int n) {
        int sum = 0;
        for(int i=0;i<n-1;i++) sum += array[i];
        return n*(n+1)/2 - sum;
    }
int main(){
int t;
cin>>t;
while(t--){
 int n;
 cin>>n;
int arr[n-1];
 for(int i=0;i<n-1;i++){
 cin>>arr[i];
}
cout<<missingNumber(arr,n)<<" ";
}
return 0;
}